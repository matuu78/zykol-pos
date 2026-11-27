/* zykol.POS – TSE (Simulation fiskaly SIGN DE) und Umsatzsteuer je Position · seit v12.73
   Liefert für jeden Vorgang die Angaben nach § 6 KassenSichV / AEAO zu § 146a AO:
   Transaktionsnummer, Signaturzähler, Beginn und Ende des Vorgangs, Seriennummer von TSE und Kasse,
   Signatur (Prüfwert), Signaturalgorithmus, Zeitformat, öffentlicher Schlüssel und den QR-Code-Text
   nach DSFinV-K Anhang I („V0;…;Kassenbeleg-V1;…“).
   PROTOTYP: Signatur und Schlüssel sind nachgebildet (deterministisch aus den Vorgangsdaten),
   nicht kryptografisch gültig. Im Echtbetrieb liefert fiskaly diese Werte über die SIGN-DE-API. */
(function () {
  'use strict';
  // --- SHA-256 (synchron, für Seriennummer und nachgebildete Signaturen) ---
  var K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
  function utf8(s) { return unescape(encodeURIComponent(String(s))); }
  function sha256(text) {
    var s = utf8(text), n = s.length, i, j, w = new Array(64), H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    var l = ((n + 9 + 63) >> 6) << 4, m = new Array(l).fill(0);
    for (i = 0; i < n; i++) m[i >> 2] |= s.charCodeAt(i) << (24 - (i % 4) * 8);
    m[n >> 2] |= 0x80 << (24 - (n % 4) * 8); m[l - 1] = n * 8;
    for (i = 0; i < l; i += 16) {
      var a = H[0], b = H[1], c = H[2], d = H[3], e = H[4], f = H[5], g = H[6], h = H[7];
      for (j = 0; j < 64; j++) {
        if (j < 16) w[j] = m[i + j] | 0;
        else { var x = w[j - 15], y = w[j - 2];
          w[j] = (((x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ (x >>> 3)) + w[j - 7] + ((y >>> 17 | y << 15) ^ (y >>> 19 | y << 13) ^ (y >>> 10)) + w[j - 16]) | 0; }
        var t1 = (h + ((e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7)) + ((e & f) ^ (~e & g)) + K[j] + w[j]) | 0;
        var t2 = (((a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + ((a & b) ^ (a & c) ^ (b & c))) | 0;
        h = g; g = f; f = e; e = (d + t1) | 0; d = c; c = b; b = a; a = (t1 + t2) | 0;
      }
      H = [H[0] + a, H[1] + b, H[2] + c, H[3] + d, H[4] + e, H[5] + f, H[6] + g, H[7] + h].map(function (v) { return v | 0; });
    }
    return H.map(function (v) { return ('00000000' + (v >>> 0).toString(16)).slice(-8); }).join('');
  }
  // n Bytes (als Hex) aus einem Startwert
  function bytesHex(seed, n) { var out = '', i = 0; while (out.length < n * 2) out += sha256(seed + '#' + (i++)); return out.slice(0, n * 2); }
  function hexB64(hex) { var s = ''; for (var i = 0; i < hex.length; i += 2) s += String.fromCharCode(parseInt(hex.substr(i, 2), 16)); return btoa(s); }

  // --- Umsatzsteuer: Sätze und DSFinV-K-Schlüssel (1 = 19 %, 2 = 7 %, 5 = nicht steuerbar, z. B. Mehrzweckgutschein) ---
  var UST = {
    saetze: [19, 7, 0],
    schluessel: {19: 1, 7: 2, 0: 5},
    name: {19: 'Regelsteuersatz', 7: 'Ermäßigter Steuersatz', 0: 'Nicht steuerbar'},
    buchstabe: {19: 'A', 7: 'B', 0: 'C'},
    // Position [Text, Menge, Preis, Kategorie, Satz]; ältere Belege ohne Satz: Gutscheinverkauf 0 %, sonst 19 %
    von: function (p) { if (p && p[4] != null && p[4] !== '' && !isNaN(+p[4])) return +p[4]; return /Gutschein \(Verkauf\)|^Geschenkgutschein/i.test(String(p && p[0] || '')) ? 0 : 19; },
    r2: function (x) { return Math.round(x * 100) / 100; },
    // Summen je Satz: [{satz, brutto, netto, ust}] in fester Reihenfolge 19, 7, 0
    aufteilen: function (pos) {
      var z = {};
      (pos || []).forEach(function (p) { var s = UST.von(p); z[s] = (z[s] || 0) + (+p[1] || 0) * (+p[2] || 0); });
      return UST.saetze.concat(Object.keys(z).map(Number).filter(function (s) { return UST.saetze.indexOf(s) < 0; }))
        .filter(function (s) { return z[s] != null && Math.abs(z[s]) > 0.0049; })
        .map(function (s) { var b = UST.r2(z[s]), n = UST.r2(b / (1 + s / 100)); return {satz: s, brutto: b, netto: n, ust: UST.r2(b - n)}; });
    }
  };

  // --- Zähler je TSE (im Browser gespeichert; Start wie in den Demodaten) ---
  var SPEICHER = 'zykol.tse.v1', mem = null;
  function lade() { if (mem) return mem; try { mem = JSON.parse(localStorage.getItem(SPEICHER) || 'null'); } catch (e) { mem = null; } return mem || (mem = {tx: 9400, sig: 18402}); }
  function sichere() { try { localStorage.setItem(SPEICHER, JSON.stringify(mem)); } catch (e) { /* privat: nur im Speicher */ } }

  var TSS = 'zykol-kanu-tss-01';
  var PK = hexB64('04' + bytesHex('pk|' + TSS, 96));           // öffentlicher Schlüssel P-384, unkomprimiert (97 Byte)
  var TSE_SN = sha256(PK); // Seriennummer = Hash des Schlüssels (Hex, 64 Zeichen)
  function kasseSn(kasse) { return 'ZYKOL-' + String(kasse || 'Verkaufsraum').toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^A-Z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  function iso(ms) { return new Date(ms).toISOString(); }
  function de(isoStr) { var d = new Date(isoStr), p = function (n) { return String(n).padStart(2, '0'); }; return p(d.getDate()) + '.' + p(d.getMonth() + 1) + '.' + d.getFullYear() + ' ' + p(d.getHours()) + ':' + p(d.getMinutes()) + ':' + p(d.getSeconds()); }
  function betrag(x) { return (Math.round(x * 100) / 100).toFixed(2); }

  // Prozessdaten nach DSFinV-K Anhang I: „Beleg^<Brutto 19>_<7>_<10,7>_<5,5>_<0>^<Betrag>:Bar_<Betrag>:Unbar“
  function prozessDaten(pos, zahlungen, art) {
    var g = UST.aufteilen(pos), w = function (s) { var x = g.find(function (y) { return y.satz === s; }); return betrag(x ? x.brutto : 0); };
    var z = {}; (zahlungen || []).forEach(function (p) { var a = /^bar$/i.test(p.art) ? 'Bar' : 'Unbar'; z[a] = (z[a] || 0) + (+p.betrag || 0); });
    var zt = ['Bar', 'Unbar'].filter(function (a) { return z[a] != null && Math.abs(z[a]) > 0.0049; }).map(function (a) { return betrag(z[a]) + ':' + a; }).join('_');
    return (art || 'Beleg') + '^' + [w(19), w(7), '0.00', '0.00', w(0)].join('_') + '^' + zt;
  }
  function baue(o, tx, sig) {
    var start = o.start || (o.ende - 45000), ende = o.ende || Date.now();
    var d = {v: 1, typ: 'Kassenbeleg-V1', k: kasseSn(o.kasse), s: TSE_SN, t: tx, z: sig, a: iso(start), e: iso(ende), alg: 'ecdsa-plain-SHA384', fmt: 'unixTime', pk: PK,
      pd: prozessDaten(o.pos, o.zahlungen, o.art), f: o.ausfall ? 1 : 0};
    d.sig = d.f ? '' : hexB64(bytesHex('sig|' + [d.k, d.t, d.z, d.a, d.e, d.pd].join('|'), 96));
    return d;
  }
  var TSE = {
    UST: UST, sha256: sha256, seriennummer: TSE_SN, publicKey: PK, kasseSn: kasseSn, tss: TSS,
    // Vorgang signieren (simuliert): o = {kasse, start (ms), ende (ms), pos, zahlungen [{art, betrag}], art: 'Beleg', ausfall}
    signiere: function (o) {
      var m = lade();
      if (o.ausfall) return baue(o, 0, 0);
      m.tx += 1; m.sig += 2; sichere();                    // Start- und Abschluss-Signatur
      return baue(o, m.tx, m.sig);
    },
    stand: function () { var m = lade(); return {tx: m.tx, sig: m.sig}; },
    // Für Belege ohne gespeicherte TSE-Daten (Demodaten): feste Werte aus Belegnummer, Datum und Uhrzeit
    ausBeleg: function (b) {
      var nr = parseInt((/(\d+)$/.exec(b.beleg || '') || [0, 0])[1], 10) || 0, t = String(b.datum || '').split('.'), u = String(b.zeit || '12:00').split(':');
      var ende = t.length === 3 ? new Date(+t[2], +t[1] - 1, +t[0], +u[0] || 12, +u[1] || 0, 30).getTime() : Date.now();
      return baue({kasse: b.kasse, start: ende - 60000 - (nr % 7) * 9000, ende: ende, pos: b.pos, zahlungen: b.zahlungen, art: 'Beleg'}, 8000 + nr, 16000 + 2 * nr);
    },
    // Text im QR-Code nach DSFinV-K Anhang I
    qrText: function (d) { return d.f ? '' : ['V0', d.k, d.typ, d.pd, d.t, d.z, d.a, d.e, d.alg, d.fmt, d.sig, d.pk].join(';'); },
    // Kurzform für Listen (wie bisher „abcd-ef01“)
    kurz: function (d) { return d.f ? 'ausgefallen' : sha256(d.sig).slice(0, 4) + '-' + sha256(d.sig).slice(4, 8); },
    // Zeilen für Bon und Rechnung
    zeilen: function (d) {
      if (d.f) return [{k: 'TSE', v: 'ausgefallen'}, {k: 'Vorgangsbeginn', v: de(d.a)}, {k: 'Vorgangsende', v: de(d.e)}, {k: 'Kassen-Seriennr.', v: d.k}, {k: 'TSE-Seriennr.', v: d.s}];
      return [{k: 'Kassen-Seriennr.', v: d.k}, {k: 'TSE-Seriennr.', v: d.s}, {k: 'TSE-Transaktion', v: String(d.t)}, {k: 'Signaturzähler', v: String(d.z)},
        {k: 'Vorgangsbeginn', v: de(d.a)}, {k: 'Vorgangsende', v: de(d.e)}, {k: 'Signaturalgorithmus', v: d.alg}, {k: 'Zeitformat', v: d.fmt}, {k: 'Signatur', v: d.sig}];
    },
    de: de,
    // kompakt für die Adresszeile (Parameter tse=)
    packe: function (d) { return btoa(unescape(encodeURIComponent(JSON.stringify({k: d.k, t: d.t, z: d.z, a: d.a, e: d.e, pd: d.pd, f: d.f, sig: d.sig})))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); },
    entpacke: function (s) {
      try { var j = JSON.parse(decodeURIComponent(escape(atob(String(s).replace(/-/g, '+').replace(/_/g, '/'))))); if (!j || !j.k) return null;
        return {v: 1, typ: 'Kassenbeleg-V1', k: String(j.k).slice(0, 60), s: TSE_SN, t: +j.t || 0, z: +j.z || 0, a: String(j.a), e: String(j.e), alg: 'ecdsa-plain-SHA384', fmt: 'unixTime', pk: PK, pd: String(j.pd || ''), f: j.f ? 1 : 0, sig: String(j.sig || '')};
      } catch (e) { return null; }
    }
  };
  window.ZK_TSE = TSE;
})();
