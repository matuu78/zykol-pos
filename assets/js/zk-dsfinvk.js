/* zykol.POS – DSFinV-K-Export und Kassenabschluss an fiskaly (Simulation) · seit v12.74
   Baut aus Kassenabschlüssen und Einzelbelegen die Tabellen der DSFinV-K (Stamm-, Kassenabschluss- und
   Einzelaufzeichnungsmodul) als CSV samt index.xml (GDPdU-Beschreibung) und packt alles in ein ZIP.
   Außerdem den Kassenabschluss im Format der fiskaly DSFinV-K-API (cash_point_closing), der im Echtbetrieb
   nach jedem Z-Bericht an fiskaly geht; fiskaly erzeugt daraus den amtlichen Export.
   PROTOTYP: Aufbau nach DSFinV-K 2.3 nachgebildet, nicht mit Prüfsoftware (z. B. AmadeusVerify) geprüft.
   Die Datei gdpdu-01-09-2004.dtd liegt im Echtbetrieb bei, hier nur der Verweis. */
(function () {
  'use strict';
  var A = function (n) { return {t: 'a', n: n}; }, N = function (n, g) { return {t: 'n', n: n, g: g == null ? 2 : g}; }, D = function (n) { return {t: 'd', n: n}; };
  var ZK = [A('Z_KASSE_ID'), D('Z_ERSTELLUNG'), N('Z_NR', 0)], BON = ZK.concat([A('BON_ID')]), POS = BON.concat([A('POS_ZEILE')]);
  // Tabellen: Datei, Name, Beschreibung, Spalten (Schlüssel = erste Spalten)
  var TAB = [
    ['cashpointclosing.csv', 'Stamm_Abschluss', 'Stammdaten Kassenabschluss', ZK.concat([D('Z_BUCHUNGSTAG'), A('TAXONOMIE_VERSION'), A('Z_START_ID'), A('Z_ENDE_ID'), A('NAME'), A('STRASSE'), A('PLZ'), A('ORT'), A('LAND'), A('STNR'), A('USTID'), N('Z_SE_ZAHLUNGEN'), N('Z_SE_BARZAHLUNGEN')]), 3],
    ['location.csv', 'Stamm_Orte', 'Standort der Kasse', ZK.concat([A('LOC_NAME'), A('LOC_STRASSE'), A('LOC_PLZ'), A('LOC_ORT'), A('LOC_LAND'), A('LOC_USTID')]), 3],
    ['cashregister.csv', 'Stamm_Kassen', 'Kasse (Master)', ZK.concat([A('KASSE_SERIENNR'), A('KASSE_BRAND'), A('KASSE_MODELL'), A('KASSE_SW_BRAND'), A('KASSE_SW_VERSION'), A('KASSE_BASISWAEH_CODE'), N('KEINE_UST_ZUORDNUNG', 0)]), 3],
    ['slaves.csv', 'Stamm_Terminals', 'Terminals (Slaves)', ZK.concat([A('TERMINAL_ID'), A('TERMINAL_BRAND'), A('TERMINAL_MODELL'), A('TERMINAL_SERIENNR'), A('TERMINAL_SW_BRAND'), A('TERMINAL_SW_VERSION')]), 4],
    ['pa.csv', 'Stamm_Agenturen', 'Agenturen', ZK.concat([N('AGENTUR_ID', 0), A('AGENTUR_NAME'), A('AGENTUR_STRASSE'), A('AGENTUR_PLZ'), A('AGENTUR_ORT'), A('AGENTUR_LAND'), A('AGENTUR_STNR'), A('AGENTUR_USTID')]), 4],
    ['vat.csv', 'Stamm_USt', 'Umsatzsteuer-Schlüssel', ZK.concat([N('UST_SCHLUESSEL', 0), N('UST_SATZ'), A('UST_BESCHR')]), 4],
    ['tse.csv', 'Stamm_TSE', 'Technische Sicherheitseinrichtung', ZK.concat([N('TSE_ID', 0), A('TSE_SERIAL'), A('TSE_SIG_ALGO'), A('TSE_ZEITFORMAT'), A('TSE_PD_ENCODING'), A('TSE_PUBLIC_KEY'), A('TSE_ZERTIFIKAT_I'), A('TSE_ZERTIFIKAT_II')]), 4],
    ['businesscases.csv', 'Z_GV_Typ', 'Geschäftsvorfälle je Abschluss', ZK.concat([A('GV_TYP'), A('GV_NAME'), N('AGENTUR_ID', 0), N('UST_SCHLUESSEL', 0), N('Z_UMS_BRUTTO', 5), N('Z_UMS_NETTO', 5), N('Z_UST', 5)]), 7],
    ['payment.csv', 'Z_Zahlart', 'Zahlarten je Abschluss', ZK.concat([A('ZAHLART_TYP'), A('ZAHLART_NAME'), N('Z_ZAHLART_BETRAG')]), 5],
    ['cash_per_currency.csv', 'Z_Waehrungen', 'Bargeld je Währung', ZK.concat([A('ZAHLART_WAEH'), N('ZAHLART_BETRAG_WAEH')]), 4],
    ['transactions.csv', 'Bonkopf', 'Bonkopf', BON.concat([N('BON_NR', 0), A('BON_TYP'), A('BON_NAME'), A('TERMINAL_ID'), N('BON_STORNO', 0), D('BON_START'), D('BON_ENDE'), A('BEDIENER_ID'), A('BEDIENER_NAME'), N('UMS_BRUTTO'), A('KUNDE_NAME'), A('KUNDE_ID'), A('KUNDE_TYP'), A('KUNDE_STRASSE'), A('KUNDE_PLZ'), A('KUNDE_ORT'), A('KUNDE_LAND'), A('KUNDE_USTID'), A('BON_NOTIZ')]), 4],
    ['transactions_vat.csv', 'Bonkopf_USt', 'Bonkopf je USt-Schlüssel', BON.concat([N('UST_SCHLUESSEL', 0), N('BON_BRUTTO', 5), N('BON_NETTO', 5), N('BON_UST', 5)]), 5],
    ['allocation_groups.csv', 'Bonkopf_AbrKreis', 'Abrechnungskreise', BON.concat([A('ABRECHNUNGSKREIS')]), 5],
    ['datapayment.csv', 'Bonkopf_Zahlarten', 'Zahlarten je Bon', BON.concat([A('ZAHLART_TYP'), A('ZAHLART_NAME'), A('ZAHLWAEH_CODE'), N('ZAHLWAEH_BETRAG'), N('BASISWAEH_BETRAG')]), 6],
    ['references.csv', 'Bon_Referenzen', 'Referenzen (z. B. Storno auf Ursprungsbeleg)', POS.concat([A('REF_TYP'), A('REF_NAME'), D('REF_DATUM'), A('REF_Z_KASSE_ID'), N('REF_Z_NR', 0), A('REF_BON_ID')]), 5],
    ['transactions_tse.csv', 'TSE_Transaktionen', 'TSE-Transaktionen je Bon', BON.concat([N('TSE_ID', 0), N('TSE_TANR', 0), D('TSE_TA_START'), D('TSE_TA_ENDE'), A('TSE_TA_VORGANGSART'), N('TSE_TA_SIGZ', 0), A('TSE_TA_SIG'), A('TSE_TA_FEHLER'), A('TSE_VORGANGSDATEN')]), 6],
    ['lines.csv', 'Bonpos', 'Bonpositionen', POS.concat([A('GUTSCHEIN_NR'), A('ARTIKELTEXT'), A('POS_TERMINAL_ID'), A('GV_TYP'), A('GV_NAME'), N('INHAUS', 0), N('P_STORNO', 0), N('AGENTUR_ID', 0), A('ART_NR'), A('GTIN'), A('WARENGR_ID'), A('WARENGR'), N('MENGE', 3), N('FAKTOR', 3), A('EINHEIT'), N('STK_BR', 5)]), 5],
    ['lines_vat.csv', 'Bonpos_USt', 'Bonpositionen je USt-Schlüssel', POS.concat([N('UST_SCHLUESSEL', 0), N('POS_BRUTTO', 5), N('POS_NETTO', 5), N('POS_UST', 5)]), 6],
    ['itemamounts.csv', 'Bonpos_Preisfindung', 'Preisfindung', POS.concat([A('TYP'), N('UST_SCHLUESSEL', 0), N('PF_BRUTTO', 5), N('PF_NETTO', 5), N('PF_UST', 5)]), 6],
    ['subitems.csv', 'Bonpos_Zusatzinfo', 'Zusatzinformationen', POS.concat([A('ZI_ART_NR'), A('ZI_GTIN'), A('ZI_NAME'), A('ZI_WARENGR_ID'), A('ZI_WARENGR'), N('ZI_MENGE', 3), N('ZI_FAKTOR', 3), A('ZI_EINHEIT'), N('ZI_UST_SCHLUESSEL', 0), N('ZI_BASISPREIS_BRUTTO', 5), N('ZI_BASISPREIS_NETTO', 5), N('ZI_BASISPREIS_UST', 5)]), 5]
  ];

  // --- Hilfen ---
  var r2 = function (x) { return Math.round(x * 100) / 100; };
  var UST = function () { return window.ZK_TSE ? ZK_TSE.UST : {von: function () { return 19; }, aufteilen: function (p) { var b = p.reduce(function (a, x) { return a + x[1] * x[2]; }, 0); return [{satz: 19, brutto: b, netto: r2(b / 1.19), ust: r2(b - b / 1.19)}]; }, schluessel: {19: 1, 7: 2, 0: 5}}; };
  function isoAus(datum, zeit, sek) { var t = String(datum || '').split('.'), u = String(zeit || '00:00').split(':'), p = function (n) { return String(n).padStart(2, '0'); };
    return t.length === 3 ? t[2] + '-' + p(t[1]) + '-' + p(t[0]) + 'T' + p(+u[0] || 0) + ':' + p(+u[1] || 0) + ':' + p(sek || 0) : ''; }
  function isoZ(iso) { return String(iso || '').replace(/\.\d{3}Z$/, '').replace(/Z$/, ''); }
  function wert(c, v) {
    if (v == null || v === '') return c.t === 'a' || c.t === 'd' ? '""' : '';
    if (c.t === 'n') return Number(v).toFixed(c.g);
    return '"' + String(v).replace(/"/g, '""') + '"';
  }
  function csv(tab, zeilen) { var sp = tab[3];
    return [sp.map(function (c) { return c.n; }).join(',')].concat(zeilen.map(function (z) { return sp.map(function (c) { return wert(c, z[c.n]); }).join(','); })).join('\r\n') + '\r\n'; }
  function xe(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function spalteXml(c, schluessel) { var tag = schluessel ? 'VariablePrimaryKey' : 'VariableColumn';
    return '      <' + tag + '><Name>' + c.n + '</Name>' + (c.t === 'n' ? '<Numeric>' + (c.g ? '<Accuracy>' + c.g + '</Accuracy>' : '') + '</Numeric>' : c.t === 'd' ? '<Date><Format>YYYY-MM-DD"T"hh:mm:ss</Format></Date>' : '<AlphaNumeric/>') + '</' + tag + '>\n'; }
  function indexXml(firma, von, bis) {
    return '<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE DataSet SYSTEM "gdpdu-01-09-2004.dtd">\n<DataSet>\n  <Version>1.0</Version>\n  <DataSupplier><Name>' + xe(firma.firma || '') + '</Name><Location>' + xe([firma.strasse, firma.ort].filter(Boolean).join(', ')) + '</Location><Comment>DSFinV-K 2.3 · zykol.POS (Prototyp, TSE simuliert)</Comment></DataSupplier>\n  <Media>\n    <Name>DSFinV-K</Name>\n' +
      TAB.map(function (t) { return '    <Table>\n      <URL>' + t[0] + '</URL>\n      <Name>' + t[1] + '</Name>\n      <Description>' + xe(t[2]) + '</Description>\n      <Validity><Range><From>' + von + '</From><To>' + bis + '</To></Range></Validity>\n      <UTF8/>\n      <DecimalSymbol>.</DecimalSymbol>\n      <DigitGroupingSymbol>,</DigitGroupingSymbol>\n      <SkipNumBytes>' + (t[3].map(function (c) { return c.n; }).join(',').length + 2) + '</SkipNumBytes>\n      <VariableLength>\n      <ColumnDelimiter>,</ColumnDelimiter>\n      <RecordDelimiter>&#13;&#10;</RecordDelimiter>\n      <TextEncapsulator>"</TextEncapsulator>\n' +
        t[3].map(function (c, i) { return spalteXml(c, i < t[4]); }).join('') + '      </VariableLength>\n    </Table>\n'; }).join('') + '  </Media>\n</DataSet>\n';
  }

  // --- ZIP (ohne Kompression, mit CRC-32) ---
  var CRC = (function () { var t = new Uint32Array(256); for (var n = 0; n < 256; n++) { var c = n; for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
  function crc32(b) { var c = 0xFFFFFFFF; for (var i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
  function zip(dateien) {
    var enc = new TextEncoder(), teile = [], zentral = [], off = 0, jetzt = new Date();
    var zeit = (jetzt.getHours() << 11) | (jetzt.getMinutes() << 5) | (jetzt.getSeconds() >> 1), datum = ((jetzt.getFullYear() - 1980) << 9) | ((jetzt.getMonth() + 1) << 5) | jetzt.getDate();
    Object.keys(dateien).forEach(function (name) {
      var n = enc.encode(name), d = typeof dateien[name] === 'string' ? enc.encode(dateien[name]) : dateien[name], c = crc32(d);
      var h = new DataView(new ArrayBuffer(30)); h.setUint32(0, 0x04034b50, true); h.setUint16(4, 20, true); h.setUint16(6, 0x0800, true); h.setUint16(8, 0, true);
      h.setUint16(10, zeit, true); h.setUint16(12, datum, true); h.setUint32(14, c, true); h.setUint32(18, d.length, true); h.setUint32(22, d.length, true); h.setUint16(26, n.length, true); h.setUint16(28, 0, true);
      var z = new DataView(new ArrayBuffer(46)); z.setUint32(0, 0x02014b50, true); z.setUint16(4, 20, true); z.setUint16(6, 20, true); z.setUint16(8, 0x0800, true); z.setUint16(10, 0, true);
      z.setUint16(12, zeit, true); z.setUint16(14, datum, true); z.setUint32(16, c, true); z.setUint32(20, d.length, true); z.setUint32(24, d.length, true); z.setUint16(28, n.length, true); z.setUint32(42, off, true);
      teile.push(new Uint8Array(h.buffer), n, d); zentral.push(new Uint8Array(z.buffer), n); off += 30 + n.length + d.length;
    });
    var zl = zentral.reduce(function (a, x) { return a + x.length; }, 0), e = new DataView(new ArrayBuffer(22)), anz = Object.keys(dateien).length;
    e.setUint32(0, 0x06054b50, true); e.setUint16(8, anz, true); e.setUint16(10, anz, true); e.setUint32(12, zl, true); e.setUint32(16, off, true);
    return new Blob(teile.concat(zentral, [new Uint8Array(e.buffer)]), {type: 'application/zip'});
  }

  // --- Zahlarten und Geschäftsvorfälle ---
  function zahlartTyp(art, karte) {
    if (/^bar$/i.test(art)) return ['Bar', 'Bar'];
    if (/karte/i.test(art)) return /girocard|ec/i.test(karte || 'girocard') ? ['ECKarte', 'girocard'] : ['Kreditkarte', karte || 'Kreditkarte'];
    if (/paypal/i.test(art)) return ['ElZahlungsdienstleister', 'PayPal'];
    if (/gutschein/i.test(art)) return ['Guthabenkarte', 'Mehrzweckgutschein'];
    if (/vorkasse|überweisung/i.test(art)) return ['Unbar', 'Überweisung'];
    return ['Keine', art || 'Sonstige'];
  }
  function gvTyp(p) { var t = String(p[0] || ''); if (/Gutschein \(Verkauf\)|^Geschenkgutschein/i.test(t)) return 'MehrzweckgutscheinKauf'; if (/Anzahlung/i.test(t)) return 'Anzahlungseinstellung'; if (/Restzahlung/i.test(t)) return 'Anzahlungsaufloesung'; return 'Umsatz'; }
  function zahlungen(tx) { var sum = r2((tx.pos || []).reduce(function (a, p) { return a + p[1] * p[2]; }, 0)), teile = (tx.teile || []).map(function (x) { return {art: x.zahlart, betrag: +x.betrag || 0}; }), ts = teile.reduce(function (a, x) { return a + x.betrag; }, 0);
    return teile.concat(tx.zahlart === 'Rechnung' || Math.abs(sum - ts) < 0.005 ? [] : [{art: tx.zahlart, betrag: r2(sum - ts)}]); }

  /* Export bauen. d = {firma: SHOP-Daten, abschluesse: [{id, datum, zeit, kasse, txs: [Belege], entnahmen, fiskal}], version}
     Rückgabe {dateien: {name: inhalt}, zip: Blob, zahlen: {abschluesse, belege, positionen}} */
  function exportBauen(d) {
    var U = UST(), f = d.firma || {}, T = {}; TAB.forEach(function (t) { T[t[0]] = []; });
    var tseSn = window.ZK_TSE ? ZK_TSE.seriennummer : '', pk = window.ZK_TSE ? ZK_TSE.publicKey : '';
    var plzOrt = String(f.ort || '').match(/^(\d{4,5})\s+(.+)$/) || [null, '', f.ort || ''];
    var npos = 0, nbon = 0, von = '', bis = '';
    (d.abschluesse || []).forEach(function (a) {
      var kid = window.ZK_TSE ? ZK_TSE.kasseSn(a.kasse) : a.kasse, zn = parseInt(String(a.id).replace(/\D/g, ''), 10) || 0, erst = isoAus(a.datum, a.zeit), tag = erst.slice(0, 10);
      var k = {Z_KASSE_ID: kid, Z_ERSTELLUNG: erst, Z_NR: zn}, mit = function (o) { return Object.assign({}, k, o); };
      von = !von || tag < von ? tag : von; bis = !bis || tag > bis ? tag : bis;
      var txs = (a.txs || []).slice().sort(function (x, y) { return String(x.beleg).localeCompare(String(y.beleg)); });
      var zahl = {}, gv = {};
      T['location.csv'].push(mit({LOC_NAME: a.kasse, LOC_STRASSE: f.strasse, LOC_PLZ: plzOrt[1], LOC_ORT: plzOrt[2], LOC_LAND: 'DEU', LOC_USTID: f.ustid}));
      T['cashregister.csv'].push(mit({KASSE_SERIENNR: kid, KASSE_BRAND: 'zykol', KASSE_MODELL: 'zykol.POS Web', KASSE_SW_BRAND: 'zykol.POS', KASSE_SW_VERSION: d.version || '', KASSE_BASISWAEH_CODE: 'EUR', KEINE_UST_ZUORDNUNG: 0}));
      [[1, 19, 'Regelsteuersatz'], [2, 7, 'Ermäßigter Steuersatz'], [5, 0, 'Nicht steuerbar']].forEach(function (v) { T['vat.csv'].push(mit({UST_SCHLUESSEL: v[0], UST_SATZ: v[1], UST_BESCHR: v[2]})); });
      T['tse.csv'].push(mit({TSE_ID: 1, TSE_SERIAL: tseSn, TSE_SIG_ALGO: 'ecdsa-plain-SHA384', TSE_ZEITFORMAT: 'unixTime', TSE_PD_ENCODING: 'UTF-8', TSE_PUBLIC_KEY: pk, TSE_ZERTIFIKAT_I: 'SIMULATION', TSE_ZERTIFIKAT_II: ''}));
      txs.forEach(function (tx) {
        nbon++; var bid = tx.beleg, storno = tx.status === 'Storno' ? 1 : 0, tse = tx.tseD || (window.ZK_TSE ? ZK_TSE.ausBeleg({beleg: tx.beleg, datum: tx.datum, zeit: tx.zeit, kasse: tx.kasse, pos: tx.pos, zahlungen: zahlungen(tx)}) : null);
        var b = {BON_ID: bid}, mb = function (o) { return Object.assign({}, k, b, o); }, brutto = r2((tx.pos || []).reduce(function (s, p) { return s + p[1] * p[2]; }, 0));
        T['transactions.csv'].push(mb({BON_NR: parseInt(String(bid).replace(/\D/g, '').slice(-6), 10) || 0, BON_TYP: 'Beleg', BON_NAME: storno ? 'Stornobeleg' : tx.status === 'Retoure' ? 'Rücknahme' : tx.zahlart === 'Rechnung' ? 'Rechnung' : 'Kassenbeleg',
          TERMINAL_ID: kid, BON_STORNO: storno, BON_START: tse ? isoZ(tse.a) : isoAus(tx.datum, tx.zeit), BON_ENDE: tse ? isoZ(tse.e) : isoAus(tx.datum, tx.zeit), BEDIENER_ID: tx.kassierer || '', BEDIENER_NAME: tx.kassierer || '',
          UMS_BRUTTO: brutto, KUNDE_NAME: tx.kunde || '', KUNDE_ID: tx.kundeNr || '', KUNDE_TYP: '', KUNDE_STRASSE: '', KUNDE_PLZ: '', KUNDE_ORT: '', KUNDE_LAND: '', KUNDE_USTID: '', BON_NOTIZ: ''}));
        U.aufteilen(tx.pos).forEach(function (g) { T['transactions_vat.csv'].push(mb({UST_SCHLUESSEL: U.schluessel[g.satz] || 1, BON_BRUTTO: g.brutto, BON_NETTO: g.netto, BON_UST: g.ust})); });
        T['allocation_groups.csv'].push(mb({ABRECHNUNGSKREIS: a.kasse}));
        zahlungen(tx).forEach(function (z) { var zt = zahlartTyp(z.art, tx.karte); T['datapayment.csv'].push(mb({ZAHLART_TYP: zt[0], ZAHLART_NAME: zt[1], ZAHLWAEH_CODE: 'EUR', ZAHLWAEH_BETRAG: z.betrag, BASISWAEH_BETRAG: z.betrag}));
          var kz = zt[0] + '|' + zt[1]; zahl[kz] = r2((zahl[kz] || 0) + z.betrag); });
        if (tx.storno || tx.ursprung) T['references.csv'].push(mb({POS_ZEILE: '', REF_TYP: 'Transaktion', REF_NAME: tx.storno ? 'Storno' : 'Rücknahme', REF_DATUM: '', REF_Z_KASSE_ID: kid, REF_Z_NR: '', REF_BON_ID: tx.storno || tx.ursprung}));
        if (tse) T['transactions_tse.csv'].push(mb({TSE_ID: 1, TSE_TANR: tse.t || '', TSE_TA_START: isoZ(tse.a), TSE_TA_ENDE: isoZ(tse.e), TSE_TA_VORGANGSART: 'Kassenbeleg-V1', TSE_TA_SIGZ: tse.z || '', TSE_TA_SIG: tse.sig || '', TSE_TA_FEHLER: tse.f ? 'TSE ausgefallen' : '', TSE_VORGANGSDATEN: tse.pd}));
        (tx.pos || []).forEach(function (p, i) {
          npos++; var s = U.von(p), us = U.schluessel[s] || 1, pb = r2(p[1] * p[2]), pn = r2(pb / (1 + s / 100)), typ = gvTyp(p), z = String(i + 1);
          T['lines.csv'].push(mb({POS_ZEILE: z, GUTSCHEIN_NR: typ === 'MehrzweckgutscheinKauf' ? (String(p[0]).match(/[A-Z]{1,4}-\d[\d-]*/) || [''])[0] : '', ARTIKELTEXT: p[0], POS_TERMINAL_ID: kid, GV_TYP: typ, GV_NAME: '', INHAUS: 0, P_STORNO: storno, AGENTUR_ID: 0,
            ART_NR: '', GTIN: '', WARENGR_ID: p[3] || '', WARENGR: p[3] || '', MENGE: p[1], FAKTOR: 1, EINHEIT: 'Stück', STK_BR: p[2]}));
          T['lines_vat.csv'].push(mb({POS_ZEILE: z, UST_SCHLUESSEL: us, POS_BRUTTO: pb, POS_NETTO: pn, POS_UST: r2(pb - pn)}));
          T['itemamounts.csv'].push(mb({POS_ZEILE: z, TYP: 'base_amount', UST_SCHLUESSEL: us, PF_BRUTTO: pb, PF_NETTO: pn, PF_UST: r2(pb - pn)}));
          var gk = typ + '|' + us; gv[gk] = gv[gk] || {GV_TYP: typ, UST_SCHLUESSEL: us, b: 0, n: 0}; gv[gk].b = r2(gv[gk].b + pb); gv[gk].n = r2(gv[gk].n + pn);
        });
      });
      // Entnahmen und Bargeldauszahlungen als Geschäftsvorfälle ohne Umsatzsteuer
      (a.entnahmen || []).forEach(function (e) { var gk = (/bargeldauszahlung/i.test(e.text || '') ? 'Auszahlung' : 'Geldtransit') + '|5'; gv[gk] = gv[gk] || {GV_TYP: gk.split('|')[0], UST_SCHLUESSEL: 5, b: 0, n: 0}; gv[gk].b = r2(gv[gk].b - e.betrag); gv[gk].n = r2(gv[gk].n - e.betrag); });
      if (a.diff) { gv['DifferenzSollIst|5'] = {GV_TYP: 'DifferenzSollIst', UST_SCHLUESSEL: 5, b: r2(a.diff), n: r2(a.diff)}; }
      Object.keys(gv).forEach(function (x) { var g = gv[x]; T['businesscases.csv'].push(mit({GV_TYP: g.GV_TYP, GV_NAME: '', AGENTUR_ID: 0, UST_SCHLUESSEL: g.UST_SCHLUESSEL, Z_UMS_BRUTTO: g.b, Z_UMS_NETTO: g.n, Z_UST: r2(g.b - g.n)})); });
      var zsum = 0, bar = 0; Object.keys(zahl).forEach(function (x) { var t = x.split('|'); zsum += zahl[x]; if (t[0] === 'Bar') bar += zahl[x]; T['payment.csv'].push(mit({ZAHLART_TYP: t[0], ZAHLART_NAME: t[1], Z_ZAHLART_BETRAG: zahl[x]})); });
      T['cash_per_currency.csv'].push(mit({ZAHLART_WAEH: 'EUR', ZAHLART_BETRAG_WAEH: r2(bar)}));
      T['cashpointclosing.csv'].push(mit({Z_BUCHUNGSTAG: tag + 'T00:00:00', TAXONOMIE_VERSION: '2.3', Z_START_ID: txs.length ? txs[0].beleg : '', Z_ENDE_ID: txs.length ? txs[txs.length - 1].beleg : '',
        NAME: f.firma, STRASSE: f.strasse, PLZ: plzOrt[1], ORT: plzOrt[2], LAND: 'DEU', STNR: f.steuernr || '', USTID: f.ustid || '', Z_SE_ZAHLUNGEN: r2(zsum), Z_SE_BARZAHLUNGEN: r2(bar)}));
    });
    var dateien = {}; TAB.forEach(function (t) { dateien[t[0]] = csv(t, T[t[0]]); });
    dateien['index.xml'] = indexXml(f, von, bis);
    return {dateien: dateien, zip: zip(dateien), zahlen: {abschluesse: (d.abschluesse || []).length, belege: nbon, positionen: npos, von: von, bis: bis}};
  }

  // --- fiskaly DSFinV-K-API (Simulation): Kassenabschluss übertragen ---
  var LOG = 'zykol.fiskaly.cpc.v1';
  function uuid(s) { var h = window.ZK_TSE ? ZK_TSE.sha256(s) : String(Date.now()).padStart(32, '0'); return h.slice(0, 8) + '-' + h.slice(8, 12) + '-4' + h.slice(13, 16) + '-a' + h.slice(17, 20) + '-' + h.slice(20, 32); }
  function abschlussJson(a, d) {
    var U = UST(), kid = window.ZK_TSE ? ZK_TSE.kasseSn(a.kasse) : a.kasse, txs = a.txs || [], zn = parseInt(String(a.id).replace(/\D/g, ''), 10) || 0;
    var unix = function (iso) { return Math.floor(new Date(iso).getTime() / 1000); };
    var tse = function (tx) { return tx.tseD || (window.ZK_TSE ? ZK_TSE.ausBeleg({beleg: tx.beleg, datum: tx.datum, zeit: tx.zeit, kasse: tx.kasse, pos: tx.pos, zahlungen: zahlungen(tx)}) : {a: '', e: '', t: 0}); };
    var vatId = function (s) { return U.schluessel[s] || 1; };
    var betr = function (pos) { return U.aufteilen(pos).map(function (g) { return {vat_definition_export_id: vatId(g.satz), incl_vat: g.brutto.toFixed(5), excl_vat: g.netto.toFixed(5), vat: g.ust.toFixed(5)}; }); };
    return {
      client_id: uuid('client|' + kid), cash_point_closing_export_id: zn,
      head: {export_creation_date: unix(isoAus(a.datum, a.zeit) + 'Z'), business_date: isoAus(a.datum, '00:00').slice(0, 10),
        first_transaction_export_id: txs.length ? txs[0].beleg : '', last_transaction_export_id: txs.length ? txs[txs.length - 1].beleg : ''},
      cash_statement: {
        business_cases: [{type: 'Umsatz', amounts_per_vat_id: betr(txs.flatMap(function (t) { return t.pos || []; }))}],
        payment: {full_amount: r2(txs.reduce(function (s, t) { return s + (t.pos || []).reduce(function (a2, p) { return a2 + p[1] * p[2]; }, 0); }, 0)).toFixed(2),
          cash_amount: r2(txs.reduce(function (s, t) { return s + zahlungen(t).filter(function (z) { return /^bar$/i.test(z.art); }).reduce(function (a2, z) { return a2 + z.betrag; }, 0); }, 0)).toFixed(2),
          cash_amounts_by_currency: [], payment_types: []}
      },
      transactions: txs.map(function (tx) { var t = tse(tx);
        return {head: {tx_id: uuid('tx|' + tx.beleg), transaction_export_id: tx.beleg, closing_client_id: uuid('client|' + kid), type: 'Beleg', storno: tx.status === 'Storno', number: parseInt(String(tx.beleg).replace(/\D/g, '').slice(-6), 10) || 0,
            timestamp_start: t.a ? unix(t.a) : 0, timestamp_end: t.e ? unix(t.e) : 0, user: {id: tx.kassierer || '', name: tx.kassierer || ''}, references: tx.storno || tx.ursprung ? [{type: 'Transaktion', tx_id: uuid('tx|' + (tx.storno || tx.ursprung))}] : []},
          data: {full_amount_incl_vat: r2((tx.pos || []).reduce(function (s, p) { return s + p[1] * p[2]; }, 0)).toFixed(2),
            payment_types: zahlungen(tx).map(function (z) { var zt = zahlartTyp(z.art, tx.karte); return {type: zt[0], name: zt[1], amount: z.betrag.toFixed(2)}; }),
            amounts_per_vat_id: betr(tx.pos || []),
            lines: (tx.pos || []).map(function (p, i) { return {lineitem_export_id: String(i + 1), storno: tx.status === 'Storno', text: p[0], business_case: {type: gvTyp(p), amounts_per_vat_id: betr([p])}, item: {number: '', quantity: String(p[1]), price_per_unit: Number(p[2]).toFixed(5)}}; })},
          security: {tss_tx_id: uuid('tss|' + tx.beleg + '|' + (t.t || 0))}};
      })
    };
  }
  var FISKALY = {
    // Kassenabschluss „senden“ (Simulation von PUT /api/v1/cash_point_closings/{closing_id}): speichert JSON und Status
    abschlussSenden: function (a, d) {
      var j = abschlussJson(a, d || {}), id = uuid('closing|' + a.kasse + '|' + a.id + '|' + a.datum), e = {closing_id: id, export_id: j.cash_point_closing_export_id, kasse: a.kasse, z: a.id, datum: a.datum,
        status: 'COMPLETED', gesendet: new Date().toISOString(), belege: j.transactions.length, bytes: JSON.stringify(j).length};
      try { var l = JSON.parse(localStorage.getItem(LOG) || '[]'); l = l.filter(function (x) { return x.closing_id !== id; }).concat([e]); localStorage.setItem(LOG, JSON.stringify(l.slice(-400))); } catch (err) { /* privat */ }
      return {eintrag: e, json: j};
    },
    liste: function () { try { return JSON.parse(localStorage.getItem(LOG) || '[]'); } catch (e) { return []; } },
    abschlussJson: abschlussJson
  };
  window.ZK_DSFINVK = {tabellen: TAB, exportBauen: exportBauen, zip: zip, crc32: crc32, zahlungen: zahlungen};
  window.ZK_FISKALY = FISKALY;
})();
