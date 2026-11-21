<?php
/* zykol.POS – Server-Baustein DHL Parcel DE Shipping API v2 (v12.58)
 * NUR SANDBOX: Die Adresse ist fest auf api-sandbox.dhl.com gesetzt; Live-Versand ist im Prototyp gesperrt.
 * Zugangsdaten stehen in dhl-konfig.php (Vorlage: dhl-konfig.beispiel.php) und verlassen den Server nie.
 * Aufruf aus der Kasse: POST JSON {aktion: 'pruefen' | 'etikett' | 'storno', ...}
 */
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function antwort($a, $code = 200) { http_response_code($code); echo json_encode($a, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES); exit; }

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') antwort(['ok' => false, 'meldung' => 'Nur POST erlaubt.'], 405);
// nur Aufrufe von der eigenen Seite
$herkunft = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($herkunft !== '' && parse_url($herkunft, PHP_URL_HOST) !== ($_SERVER['HTTP_HOST'] ?? '')) antwort(['ok' => false, 'meldung' => 'Aufruf von fremder Seite abgelehnt.'], 403);
if (!function_exists('curl_init')) antwort(['ok' => false, 'meldung' => 'PHP-Erweiterung curl fehlt auf dem Webspace.']);

$kf = __DIR__ . '/dhl-konfig.php';
if (!is_file($kf)) antwort(['ok' => false, 'meldung' => 'dhl-konfig.php fehlt auf dem Server. Vorlage dhl-konfig.beispiel.php kopieren und API-Key eintragen.']);
$K = require $kf;
if (!is_array($K) || empty($K['api_key']) || strpos($K['api_key'], 'HIER') === 0) antwort(['ok' => false, 'meldung' => 'API-Key fehlt in dhl-konfig.php.']);

const DHL_BASIS = 'https://api-sandbox.dhl.com/parcel/de/shipping/v2'; // fest: nur Sandbox
const PROFIL = 'STANDARD_GRUPPENPROFIL';
const PRODUKTE = ['V01PAK', 'V62KP', 'V53WPAK'];

function dhl($methode, $pfad, $body = null) {
  global $K;
  $ch = curl_init(DHL_BASIS . $pfad);
  $h = ['Accept: application/json', 'Accept-Language: de-DE', 'dhl-api-key: ' . $K['api_key']];
  if ($body !== null) $h[] = 'Content-Type: application/json';
  curl_setopt_array($ch, [CURLOPT_CUSTOMREQUEST => $methode, CURLOPT_RETURNTRANSFER => true, CURLOPT_HTTPHEADER => $h,
    CURLOPT_USERPWD => ($K['benutzer'] ?? '') . ':' . ($K['passwort'] ?? ''), CURLOPT_HTTPAUTH => CURLAUTH_BASIC,
    CURLOPT_CONNECTTIMEOUT => 10, CURLOPT_TIMEOUT => 40]);
  if ($body !== null) curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($body, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
  $roh = curl_exec($ch); $code = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE); $fehler = curl_error($ch); curl_close($ch);
  if ($roh === false) antwort(['ok' => false, 'meldung' => 'DHL nicht erreichbar: ' . $fehler]);
  return [$code, json_decode($roh, true)];
}

// DHL-Antwort lesbar machen (Status und Prüfmeldungen)
function meldung($j, $code) {
  $t = [];
  if (isset($j['status']['title'])) $t[] = $j['status']['title'] . (!empty($j['status']['detail']) ? ': ' . $j['status']['detail'] : '');
  elseif (isset($j['title'])) $t[] = $j['title'] . (!empty($j['detail']) ? ': ' . $j['detail'] : '');
  foreach (($j['items'] ?? []) as $it) foreach (($it['validationMessages'] ?? []) as $v)
    $t[] = trim(($v['validationState'] ?? '') . ' ' . ($v['property'] ?? '') . ' ' . ($v['validationMessage'] ?? ''));
  if ($code === 401) $t[] = 'Zugang abgelehnt – API-Key bzw. Sandbox-Benutzer prüfen';
  $t = array_values(array_unique(array_filter($t)));
  return $t ? implode(' · ', array_slice($t, 0, 6)) : 'HTTP ' . $code;
}

// nur bekannte Felder weitergeben
function adresse($a) {
  $erlaubt = ['name1', 'name2', 'name', 'addressStreet', 'addressHouse', 'postalCode', 'city', 'country', 'lockerID', 'retailID', 'postNumber', 'email', 'phone'];
  $r = [];
  foreach ($erlaubt as $k) if (isset($a[$k]) && $a[$k] !== '') $r[$k] = is_string($a[$k]) ? mb_substr($a[$k], 0, 50) : $a[$k];
  return $r;
}
function sendung($s) {
  global $K;
  $produkt = in_array($s['product'] ?? '', PRODUKTE, true) ? $s['product'] : 'V01PAK';
  $abr = $K['abrechnung'][$produkt] ?? null;
  if (!$abr) antwort(['ok' => false, 'meldung' => 'Keine Abrechnungsnummer für ' . $produkt . ' in dhl-konfig.php.']);
  $d = $s['details'] ?? [];
  $kg = max(0.1, min(31.5, (float)($d['weight']['value'] ?? 1)));
  $out = ['product' => $produkt, 'billingNumber' => $abr, 'refNo' => mb_substr(str_pad((string)($s['refNo'] ?? 'zykol Test'), 8, ' '), 0, 35),
    'shipDate' => date('Y-m-d'), 'shipper' => adresse($s['shipper'] ?? []), 'consignee' => adresse($s['consignee'] ?? []),
    'details' => ['weight' => ['uom' => 'kg', 'value' => round($kg, 1)]]];
  if (isset($d['dim']['length'])) $out['details']['dim'] = ['uom' => 'cm', 'length' => (int)$d['dim']['length'], 'width' => (int)$d['dim']['width'], 'height' => (int)$d['dim']['height']];
  return $out;
}

$in = json_decode(file_get_contents('php://input'), true) ?: [];
$aktion = $in['aktion'] ?? '';

if ($aktion === 'pruefen') {
  // Schritt 1: Testsendung mit fester, gültiger Adresse (DHL-Zentrale Bonn) nur prüfen lassen (validate=true):
  // weist API-Key, Sandbox-Benutzer und Abrechnungsnummer nach, es entsteht keine Sendung
  $bonn = ['addressStreet' => 'Charles-de-Gaulle-Str.', 'addressHouse' => '20', 'postalCode' => '53113', 'city' => 'Bonn', 'country' => 'DEU'];
  $emp = ['name1' => 'DHL Testempfänger'] + $bonn;
  $s = sendung(['product' => 'V01PAK', 'refNo' => 'zykol Verbindungstest', 'shipper' => ['name1' => 'zykol Verbindungstest'] + $bonn, 'consignee' => $emp, 'details' => ['weight' => ['value' => 1]]]);
  [$code, $j] = dhl('POST', '/orders?validate=true', ['profile' => PROFIL, 'shipments' => [$s]]);
  if ($code < 200 || $code >= 300) antwort(['ok' => false, 'http' => $code, 'meldung' => 'Zugang: ' . meldung($j, $code)]);
  // Schritt 2: Absenderadresse aus „Firma & Kasse“ prüfen; ein Fehler dort betrifft nur die Adresse, nicht den Zugang
  $abs = adresse($in['absender'] ?? []);
  if (empty($abs['postalCode'])) antwort(['ok' => true, 'http' => $code, 'meldung' => 'Zugang in Ordnung. Absenderadresse unter Einstellungen → Firma & Kasse fehlt noch.']);
  $s['shipper'] = $abs;
  [$c2, $j2] = dhl('POST', '/orders?validate=true', ['profile' => PROFIL, 'shipments' => [$s]]);
  if ($c2 >= 200 && $c2 < 300) antwort(['ok' => true, 'http' => $c2, 'meldung' => 'Zugang und Absenderadresse in Ordnung']);
  antwort(['ok' => true, 'http' => $c2, 'adresseOk' => false, 'meldung' => 'Zugang in Ordnung, aber DHL kennt die Absenderadresse nicht (' . meldung($j2, $c2) . '). Bitte unter Einstellungen → Firma & Kasse Straße, Hausnummer, PLZ und Ort prüfen.']);
}

if ($aktion === 'etikett') {
  $s = sendung($in['sendung'] ?? []);
  // Original-Etikettformate von DHL (printFormat); das PDF wird unverändert weitergegeben
  $formate = ['A4', '910-300-600', '910-300-610', '910-300-700', '910-300-700-oz', '910-300-710', '910-300-300', '910-300-300-oz', '910-300-400', '910-300-410', '100x70mm'];
  $fmt = in_array($in['druckformat'] ?? '', $formate, true) ? $in['druckformat'] : ($K['druckformat'] ?? '910-300-610');
  $q = http_build_query(['docFormat' => 'PDF', 'printFormat' => $fmt, 'includeDocs' => 'include']);
  [$code, $j] = dhl('POST', '/orders?' . $q, ['profile' => PROFIL, 'shipments' => [$s]]);
  $it = $j['items'][0] ?? [];
  $ok = $code >= 200 && $code < 300 && !empty($it['shipmentNo']);
  antwort(['ok' => $ok, 'http' => $code, 'sendung' => $it['shipmentNo'] ?? '', 'etikett' => $it['label']['b64'] ?? '', 'meldung' => $ok ? '' : meldung($j, $code)]);
}

if ($aktion === 'storno') {
  $nr = preg_replace('/[^0-9A-Za-z]/', '', (string)($in['sendung'] ?? ''));
  if ($nr === '') antwort(['ok' => false, 'meldung' => 'Sendungsnummer fehlt.']);
  [$code, $j] = dhl('DELETE', '/orders?' . http_build_query(['profile' => PROFIL, 'shipment' => $nr]));
  antwort(['ok' => $code >= 200 && $code < 300, 'http' => $code, 'meldung' => meldung($j, $code)]);
}

antwort(['ok' => false, 'meldung' => 'Unbekannte Aktion.'], 400);
