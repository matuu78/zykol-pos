<?php
/* zykol.POS – Zugang zur DHL-Developer-Sandbox (Parcel DE Shipping API v2)
 * 1. Datei kopieren als dhl-konfig.php (gleicher Ordner api/) und den API-Key eintragen.
 * 2. dhl-konfig.php nie ins Repository oder in ZIPs packen (steht in .gitignore).
 * API-Key: developer.dhl.com → App anlegen → API „Parcel DE Shipping (Post & Parcel Germany)“ hinzufügen → „Show key“.
 * Benutzer, Passwort und Abrechnungsnummern unten sind die öffentlichen Testdaten der DHL-Sandbox
 * (laut DHL-Dokumentation; bei Fehlern „billingNumber“ dort nachsehen). Kein Live-Zugang eintragen.
 */
return [
  'api_key'     => 'HIER_API_KEY_EINTRAGEN',
  'benutzer'    => 'user-valid',
  'passwort'    => 'SandboxPasswort2023!',
  'abrechnung'  => [
    'V01PAK'  => '33333333330102', // DHL Paket
    'V62KP'   => '33333333336201', // DHL Kleinpaket
    'V53WPAK' => '33333333335301', // DHL Paket International
  ],
  'sandbox_testabsender' => true, // true: Absender auf dem Etikett ist die Testadresse Charles-de-Gaulle-Str. 20, 53113 Bonn; false: Adresse aus „Firma & Kasse“
  'druckformat' => '910-300-700',  // Standard, wenn die Kasse kein Format mitschickt: DHL-Aufkleber A5
];
