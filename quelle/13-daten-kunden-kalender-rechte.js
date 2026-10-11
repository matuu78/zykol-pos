const TYP_STIL = {
  'Privat': {bg: '#e5e7eb', fg: '#1f2329'},
  'Verein': {bg: '#dcf3e6', fg: '#0d5f38'},
  'Firma': {bg: '#e5e7eb', fg: '#1f2329'},
  'Verband': {bg: '#fdebc8', fg: '#545b66'},
  'Schule': {bg: '#fde0e2', fg: '#9b1520'}
};

const KUNDEN = [
  {nr:'K-1042', name:'Kanu-Club Weser Syke e.V.', typ:'Verein', ort:'28857 Syke', kontakt:'Bernd Ahlers', mail:'vorstand@kcweser.de', telefon:'04242 58-465', rabatt:12, zahlung:'Rechnung 30 Tage', umsatz:14280, offen:2, seit:'2014', ustid:'—', notiz:'Rahmenvereinbarung Jugendarbeit'},
  {nr:'K-1088', name:'Bootshaus Nord GmbH', typ:'Firma', ort:'27751 Delmenhorst', kontakt:'Sabine Kröger', mail:'einkauf@bootshaus-nord.de', telefon:'04221 99-120', rabatt:15, zahlung:'Rechnung 14 Tage', umsatz:38940, offen:1, seit:'2019', ustid:'DE812446071', notiz:'Händlerkonditionen, Sammellieferung'},
  {nr:'K-1103', name:'Landeskanuverband Niedersachsen', typ:'Verband', ort:'30169 Hannover', kontakt:'Dr. Ute Reimers', mail:'geschaeftsstelle@lkv-nds.de', telefon:'0511 4402-18', rabatt:18, zahlung:'Rechnung 30 Tage', umsatz:52110, offen:3, seit:'2011', ustid:'DE117338902', notiz:'Ausschreibungen Landesstützpunkt'},
  {nr:'K-1156', name:'Thomas Lengfeld', typ:'Privat', ort:'28195 Bremen', kontakt:'Thomas Lengfeld', mail:'t.lengfeld@web.de', telefon:'0171 2298430', rabatt:0, zahlung:'Direktzahlung', umsatz:3320, offen:0, seit:'2022', ustid:'—', notiz:'Marathon-Einzelstarter'},
  {nr:'K-1174', name:'SV Hunte Wildeshausen', typ:'Verein', ort:'27793 Wildeshausen', kontakt:'Miriam Voss', mail:'kanu@sv-hunte.de', telefon:'04431 71-208', rabatt:10, zahlung:'Rechnung 30 Tage', umsatz:9650, offen:1, seit:'2017', ustid:'—', notiz:'Bootsflotte Vereinsjugend'},
  {nr:'K-1190', name:'Gymnasium Syke — Sportprofil', typ:'Schule', ort:'28857 Syke', kontakt:'Jörg Petersen', mail:'sport@gym-syke.de', telefon:'04242 16-330', rabatt:8, zahlung:'Rechnung 30 Tage', umsatz:4180, offen:0, seit:'2021', ustid:'—', notiz:'Schulsport, Beschaffung über Schulträger'},
  {nr:'K-1205', name:'Wasserwacht Bremen-Nord', typ:'Verband', ort:'28755 Bremen', kontakt:'Katrin Sommer', mail:'technik@ww-bremen-nord.de', telefon:'0421 6633-14', rabatt:14, zahlung:'Rechnung 14 Tage', umsatz:11470, offen:0, seit:'2016', ustid:'—', notiz:'Sicherheitsausstattung, Rettungswesten'},
  {nr:'K-1231', name:'Anke Brinkmann', typ:'Privat', ort:'28844 Weyhe', kontakt:'Anke Brinkmann', mail:'a.brinkmann@gmx.de', telefon:'0160 7741029', rabatt:0, zahlung:'Direktzahlung', umsatz:1890, offen:0, seit:'2024', ustid:'—', notiz:'Tourenpaddlerin'},
  {nr:'K-1248', name:'Nordwest Outdoor Handel e.K.', typ:'Firma', ort:'26123 Oldenburg', kontakt:'Lars Möhring', mail:'lars@nw-outdoor.de', telefon:'0441 2205-77', rabatt:20, zahlung:'Rechnung 30 Tage', umsatz:61350, offen:2, seit:'2013', ustid:'DE290117544', notiz:'Wiederverkäufer, Staffelrabatt'},
  {nr:'K-1307', name:'Jonas Wendt', typ:'Privat', ort:'28857 Syke', kontakt:'Jonas Wendt', mail:'jonas.wendt@web.de', telefon:'04242 100-10', rabatt:5, zahlung:'Sofortzahlung', umsatz:480, offen:1, seit:'2012', ustid:'—', notiz:'Rennsport Junioren'},
  {nr:'K-1317', name:'Emma Rippe', typ:'Privat', ort:'26123 Oldenburg', kontakt:'Emma Rippe', mail:'emma.rippe@gmx.de', telefon:'0441 137-23', rabatt:0, zahlung:'Sofortzahlung', umsatz:1400, offen:0, seit:'2013', ustid:'—', notiz:'Interessiert an K1 Vanquish'},
  {nr:'K-1330', name:'Felix Lührs', typ:'Privat', ort:'49356 Diepholz', kontakt:'Felix Lührs', mail:'felix.luehrs@t-online.de', telefon:'05441 174-36', rabatt:0, zahlung:'Sofortzahlung', umsatz:5010, offen:0, seit:'2014', ustid:'—', notiz:'Paddel-Probefahrt vereinbart'},
  {nr:'K-1346', name:'Kanu-Club Nienburg e.V.', typ:'Verein', ort:'27232 Sulingen', kontakt:'Heiko Rohlfs', mail:'kontakt@kanu-club.de', telefon:'04271 211-49', rabatt:10, zahlung:'Rechnung 30 Tage', umsatz:14199, offen:0, seit:'2015', ustid:'—', notiz:'Regatta-Ausrichter'},
  {nr:'K-1365', name:'Aller Outdoor Events GmbH', typ:'Firma', ort:'21073 Hamburg', kontakt:'Anja Bartels', mail:'info@aller-outdoor.de', telefon:'040 248-62', rabatt:15, zahlung:'Rechnung 14 Tage', umsatz:23668, offen:1, seit:'2016', ustid:'DE280031676', notiz:'Verleihflotte, jährlicher Austausch'},
  {nr:'K-1372', name:'Oberschule Weyhe (Wassersport)', typ:'Schule', ort:'49074 Osnabrück', kontakt:'Dirk Kastens', mail:'einkauf@oberschule-weyhe.de', telefon:'0541 285-75', rabatt:12, zahlung:'Rechnung 30 Tage', umsatz:8055, offen:0, seit:'2017', ustid:'—', notiz:'Sammelrechnung an Schulträger'},
  {nr:'K-1382', name:'Tobias Brüning', typ:'Privat', ort:'28816 Stuhr', kontakt:'Tobias Brüning', mail:'tobias.bruening@t-online.de', telefon:'0421 322-88', rabatt:0, zahlung:'Sofortzahlung', umsatz:960, offen:0, seit:'2018', ustid:'—', notiz:'Rennsport Junioren'},
  {nr:'K-1395', name:'Sophie Warnken', typ:'Privat', ort:'28195 Bremen', kontakt:'Sophie Warnken', mail:'sophie.warnken@posteo.de', telefon:'0421 359-12', rabatt:0, zahlung:'Sofortzahlung', umsatz:500, offen:2, seit:'2019', ustid:'—', notiz:'Interessiert an K1 Vanquish'},
  {nr:'K-1411', name:'Kanu-Sport Verden e.V.', typ:'Verein', ort:'27283 Verden', kontakt:'Petra Wilkens', mail:'info@kanu-sport.de', telefon:'04231 396-25', rabatt:14, zahlung:'Rechnung 30 Tage', umsatz:22864, offen:1, seit:'2020', ustid:'—', notiz:'Regatta-Ausrichter'},
  {nr:'K-1430', name:'Kanu-Verein Hannover-Limmer e.V.', typ:'Verein', ort:'27211 Bassum', kontakt:'Sven Grotheer', mail:'einkauf@kanu-verein.de', telefon:'04241 433-38', rabatt:10, zahlung:'Rechnung 30 Tage', umsatz:24597, offen:0, seit:'2021', ustid:'—', notiz:''},
  {nr:'K-1437', name:'Moorland Kajak & Kanu', typ:'Firma', ort:'31582 Nienburg', kontakt:'Katrin Oetken', mail:'vorstand@moorland-kajak.de', telefon:'05021 470-51', rabatt:15, zahlung:'Rechnung 14 Tage', umsatz:41170, offen:0, seit:'2022', ustid:'DE280079190', notiz:'Firmenevents auf der Weser'},
  {nr:'K-1447', name:'Landes-Kanu-Verband Niedersachsen e.V.', typ:'Verband', ort:'30159 Hannover', kontakt:'Jan-Hendrik Wulf', mail:'kontakt@landes-kanu.de', telefon:'0511 507-64', rabatt:20, zahlung:'Rechnung 30 Tage', umsatz:28311, offen:0, seit:'2023', ustid:'—', notiz:'Rahmenvertrag Leihboote'},
  {nr:'K-1460', name:'Finn Oltmanns', typ:'Privat', ort:'47441 Moers', kontakt:'Finn Oltmanns', mail:'finn.oltmanns@web.de', telefon:'02841 544-77', rabatt:0, zahlung:'Sofortzahlung', umsatz:2340, offen:1, seit:'2024', ustid:'—', notiz:'Rennsport Junioren'},
  {nr:'K-1476', name:'Clara Tietjen', typ:'Privat', ort:'27305 Bruchhausen-Vilsen', kontakt:'Clara Tietjen', mail:'clara.tietjen@gmx.de', telefon:'04252 581-90', rabatt:0, zahlung:'Sofortzahlung', umsatz:5340, offen:0, seit:'2025', ustid:'—', notiz:'Interessiert an K1 Vanquish'},
  {nr:'K-1495', name:'Kanu-Club Diepholz e.V.', typ:'Verein', ort:'27751 Delmenhorst', kontakt:'Birgit Seedorf', mail:'vorstand@kanu-club.de', telefon:'04221 618-14', rabatt:14, zahlung:'Rechnung 30 Tage', umsatz:33262, offen:2, seit:'2012', ustid:'—', notiz:''},
  {nr:'K-1502', name:'Kanu-Club Osnabrück e.V.', typ:'Verein', ort:'28832 Achim', kontakt:'Ole Harms', mail:'kontakt@kanu-club.de', telefon:'04202 655-27', rabatt:10, zahlung:'Rechnung 30 Tage', umsatz:34995, offen:0, seit:'2013', ustid:'—', notiz:'Sammelbestellung Frühjahr'},
  {nr:'K-1512', name:'Teamevent Nord GmbH', typ:'Firma', ort:'28844 Weyhe', kontakt:'Nadine Pleus', mail:'info@teamevent-nord.de', telefon:'0421 692-40', rabatt:15, zahlung:'Rechnung 14 Tage', umsatz:58672, offen:1, seit:'2014', ustid:'DE280126704', notiz:'Verleihflotte, jährlicher Austausch'},
  {nr:'K-1525', name:'Bremer Kanu-Verband e.V.', typ:'Verband', ort:'27793 Wildeshausen', kontakt:'Frank Tönjes', mail:'einkauf@bremer-kanu.de', telefon:'04431 729-53', rabatt:20, zahlung:'Rechnung 30 Tage', umsatz:48117, offen:0, seit:'2015', ustid:'—', notiz:'Rahmenvertrag Leihboote'},
  {nr:'K-1541', name:'Paul Strodthoff', typ:'Privat', ort:'27570 Bremerhaven', kontakt:'Paul Strodthoff', mail:'paul.strodthoff@t-online.de', telefon:'0471 766-66', rabatt:0, zahlung:'Sofortzahlung', umsatz:4790, offen:0, seit:'2016', ustid:'—', notiz:'Rennsport Junioren'},
  {nr:'K-1560', name:'Johanna Kück', typ:'Privat', ort:'47051 Duisburg', kontakt:'Johanna Kück', mail:'johanna.kueck@posteo.de', telefon:'0203 803-79', rabatt:0, zahlung:'Sofortzahlung', umsatz:830, offen:0, seit:'2017', ustid:'—', notiz:'Interessiert an K1 Vanquish'},
  {nr:'K-1567', name:'Kanu-Abteilung TSV Weyhe', typ:'Verein', ort:'28857 Syke', kontakt:'Silke Ehlers', mail:'info@kanu-abteilung.de', telefon:'04242 840-92', rabatt:14, zahlung:'Rechnung 30 Tage', umsatz:17660, offen:1, seit:'2018', ustid:'—', notiz:'Sammelbestellung Frühjahr'},
  {nr:'K-1577', name:'Weser Paddeltouren UG', typ:'Firma', ort:'26123 Oldenburg', kontakt:'Marco Rodenberg', mail:'einkauf@weser-paddeltouren.de', telefon:'0441 877-16', rabatt:13, zahlung:'Rechnung 14 Tage', umsatz:25257, offen:2, seit:'2019', ustid:'DE280166299', notiz:'Wiederverkäufer'},
  {nr:'K-1590', name:'Gymnasium Syke (Kanu-AG)', typ:'Schule', ort:'49356 Diepholz', kontakt:'Wiebke Cordes', mail:'vorstand@gymnasium-syke.de', telefon:'05441 914-29', rabatt:10, zahlung:'Rechnung 30 Tage', umsatz:5542, offen:0, seit:'2020', ustid:'—', notiz:'AG-Boote, Förderantrag läuft'},
  {nr:'K-1606', name:'Marie Hollmann', typ:'Privat', ort:'27232 Sulingen', kontakt:'Marie Hollmann', mail:'marie.hollmann@posteo.de', telefon:'04271 951-42', rabatt:0, zahlung:'Sofortzahlung', umsatz:610, offen:0, seit:'2021', ustid:'—', notiz:''},
  {nr:'K-1625', name:'Niklas Dahlke', typ:'Privat', ort:'21073 Hamburg', kontakt:'Niklas Dahlke', mail:'niklas.dahlke@web.de', telefon:'040 108-55', rabatt:0, zahlung:'Sofortzahlung', umsatz:480, offen:1, seit:'2022', ustid:'—', notiz:'Rennsport Junioren'},
  {nr:'K-1632', name:'Lina Ahrens', typ:'Privat', ort:'49074 Osnabrück', kontakt:'Lina Ahrens', mail:'lina.ahrens@gmx.de', telefon:'0541 145-68', rabatt:5, zahlung:'Sofortzahlung', umsatz:1400, offen:0, seit:'2023', ustid:'—', notiz:'Interessiert an K1 Vanquish'},
  {nr:'K-1642', name:'Rennkanu-Gemeinschaft Hamburg e.V.', typ:'Verein', ort:'28816 Stuhr', kontakt:'Thorsten Wiechmann', mail:'vorstand@rennkanu-gemeinschaft.de', telefon:'0421 182-81', rabatt:14, zahlung:'Rechnung 30 Tage', umsatz:28058, offen:0, seit:'2024', ustid:'—', notiz:'Jugendgruppe, 14 Aktive'},
  {nr:'K-1655', name:'Wasserwelt Freizeit KG', typ:'Firma', ort:'28195 Bremen', kontakt:'Gesa Horstmann', mail:'kontakt@wasserwelt-freizeit.de', telefon:'0421 219-94', rabatt:13, zahlung:'Rechnung 14 Tage', umsatz:42759, offen:0, seit:'2025', ustid:'DE280213813', notiz:''},
  {nr:'K-1671', name:'Sportinternat Hannover', typ:'Schule', ort:'27283 Verden', kontakt:'Rainer Lampe', mail:'info@sportinternat-hannover.de', telefon:'04231 256-18', rabatt:10, zahlung:'Rechnung 30 Tage', umsatz:11008, offen:1, seit:'2012', ustid:'—', notiz:'AG-Boote, Förderantrag läuft'},
  {nr:'K-1690', name:'Lea Schwarting', typ:'Privat', ort:'27211 Bassum', kontakt:'Lea Schwarting', mail:'lea.schwarting@gmx.de', telefon:'04241 293-31', rabatt:0, zahlung:'Sofortzahlung', umsatz:5450, offen:0, seit:'2013', ustid:'—', notiz:''},
  {nr:'K-1697', name:'Lukas Behrens', typ:'Privat', ort:'31582 Nienburg', kontakt:'Lukas Behrens', mail:'lukas.behrens@t-online.de', telefon:'05021 330-44', rabatt:5, zahlung:'Sofortzahlung', umsatz:960, offen:0, seit:'2014', ustid:'—', notiz:'Rennsport Junioren'},
  {nr:'K-1707', name:'Wassersportverein Achim e.V.', typ:'Verein', ort:'30159 Hannover', kontakt:'Maren Stelljes', mail:'kontakt@wassersportverein-achim.de', telefon:'0511 367-57', rabatt:12, zahlung:'Rechnung 30 Tage', umsatz:10723, offen:0, seit:'2015', ustid:'—', notiz:'Jugendgruppe, 14 Aktive'},
  {nr:'K-1720', name:'WSV Bremerhaven Kanu e.V.', typ:'Verein', ort:'47441 Moers', kontakt:'Arne Wöbse', mail:'info@wsv-bremerhaven.de', telefon:'02841 404-70', rabatt:14, zahlung:'Rechnung 30 Tage', umsatz:12456, offen:1, seit:'2016', ustid:'—', notiz:'Bootshalle mit Stellplätzen'},
  {nr:'K-1736', name:'Nordsee Paddle Store GmbH', typ:'Firma', ort:'27305 Bruchhausen-Vilsen', kontakt:'Ute Brinkmann', mail:'einkauf@nordsee-paddle.de', telefon:'04252 441-83', rabatt:13, zahlung:'Rechnung 14 Tage', umsatz:12261, offen:0, seit:'2017', ustid:'DE280261327', notiz:'Wiederverkäufer'},
  {nr:'K-1755', name:'Kanu-Bezirk Weser-Ems', typ:'Verband', ort:'27751 Delmenhorst', kontakt:'Kai Bischoff', mail:'vorstand@kanu-bezirk.de', telefon:'04221 478-96', rabatt:18, zahlung:'Rechnung 30 Tage', umsatz:44234, offen:0, seit:'2018', ustid:'—', notiz:'Kaderausstattung'},
  {nr:'K-1762', name:'Hanna Meyerholz', typ:'Privat', ort:'28832 Achim', kontakt:'Hanna Meyerholz', mail:'hanna.meyerholz@posteo.de', telefon:'04202 515-20', rabatt:5, zahlung:'Sofortzahlung', umsatz:940, offen:2, seit:'2019', ustid:'—', notiz:''},
  {nr:'K-1772', name:'Moritz Hashagen', typ:'Privat', ort:'28844 Weyhe', kontakt:'Moritz Hashagen', mail:'moritz.hashagen@web.de', telefon:'0421 552-33', rabatt:0, zahlung:'Sofortzahlung', umsatz:2340, offen:1, seit:'2020', ustid:'—', notiz:'Rennsport Junioren'},
  {nr:'K-1785', name:'Paddelgemeinschaft Bassum e.V.', typ:'Verein', ort:'27793 Wildeshausen', kontakt:'Inga Mahnken', mail:'einkauf@paddelgemeinschaft-bassum.de', telefon:'04431 589-46', rabatt:12, zahlung:'Rechnung 30 Tage', umsatz:21121, offen:0, seit:'2021', ustid:'—', notiz:'Bootshalle mit Stellplätzen'},
  {nr:'K-1801', name:'Hunte Kanuverleih GmbH', typ:'Firma', ort:'27570 Bremerhaven', kontakt:'Holger Stehnken', mail:'vorstand@hunte-kanuverleih.de', telefon:'0471 626-59', rabatt:17, zahlung:'Rechnung 14 Tage', umsatz:26846, offen:0, seit:'2022', ustid:'DE280300922', notiz:'Firmenevents auf der Weser'},
  {nr:'K-1820', name:'Stadtwerke Syke (Betriebssport)', typ:'Firma', ort:'47051 Duisburg', kontakt:'Tanja Menke', mail:'kontakt@stadtwerke-syke.de', telefon:'0203 663-72', rabatt:13, zahlung:'Rechnung 14 Tage', umsatz:29763, offen:0, seit:'2023', ustid:'DE280308841', notiz:''}
];

const agP = (pid, menge, rabatt) => {
  const p = PRODUKTE.find(x => x.id === pid);
  return {pid, name: p.brand + ' ' + p.name, sku: p.sku, menge, preis: p.price, rabatt: rabatt || 0};
};
const HEUTE_D = (() => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; })();
const DEMO_OFF = Math.round((HEUTE_D - new Date(2026, 9, 1)) / 86400000);
const D_ISO = d => '' + d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
const D_DE = d => String(d.getDate()).padStart(2, '0') + '.' + String(d.getMonth() + 1).padStart(2, '0') + '.' + d.getFullYear();
const D_PARSE = f => new Date(+f.slice(0, 4), +f.slice(4, 6) - 1, +f.slice(6, 8) + DEMO_OFF);
const demoISO = f => D_ISO(D_PARSE(f));
const DEMO_OFF_TX = Math.round((HEUTE_D - new Date(2026, 7, 27)) / 86400000);
const MON_DE = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
const D_ADD = (y, m, d, off) => new Date(y, m, d + off);
const D_KW = d => { const t = new Date(d); t.setDate(t.getDate() + 3 - (t.getDay() + 6) % 7); const w1 = new Date(t.getFullYear(), 0, 4); return 1 + Math.round(((t - w1) / 86400000 - 3 + (w1.getDay() + 6) % 7) / 7); };
const D_SHIFT = (s, off) => {
  if (!off || typeof s !== 'string') return s;
  if (/^20\d{6}$/.test(s)) return D_ISO(D_ADD(+s.slice(0, 4), +s.slice(4, 6) - 1, +s.slice(6, 8), off));
  return s
    .replace(/(\d{2})\.(\d{2})\.–(\d{2})\.(\d{2})\.(20\d\d)/g, (m, d1, m1, d2, m2, y) => (D_DE(D_ADD(+y, +m1 - 1, +d1, off)) + '–' + D_DE(D_ADD(+y, +m2 - 1, +d2, off))).replace(/\./g, '\uE000'))
    .replace(/(\d{1,2})\.–(\d{1,2})\.(\d{2})\.(20\d\d)/g, (m, d1, d2, mo, y) => (D_DE(D_ADD(+y, +mo - 1, +d1, off)) + '–' + D_DE(D_ADD(+y, +mo - 1, +d2, off))).replace(/\./g, '\uE000'))
    .replace(/(\d{2})\.(\d{2})\.(20\d\d)/g, (m, d, mo, y) => D_DE(D_ADD(+y, +mo - 1, +d, off)))
    .replace(/(20\d\d)-(\d\d)-(\d\d)/g, (m, y, mo, d) => { const x = D_ADD(+y, +mo - 1, +d, off); return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0'); })
    .replace(new RegExp('(' + MON_DE.join('|') + ') (20\\d\\d)', 'g'), (m, mo, y) => { const x = D_ADD(+y, MON_DE.indexOf(mo), 15, off); return MON_DE[x.getMonth()] + ' ' + x.getFullYear(); })
    .replace(/KW (\d{1,2})\b/g, (m, w) => { const j4 = new Date(2026, 0, 4); const mo = D_ADD(2026, 0, 4 - (j4.getDay() + 6) % 7 + (+w - 1) * 7, off); return 'KW ' + D_KW(mo); })
    .replace(/\uE000/g, '.');
};
const DT = s => D_SHIFT(s, DEMO_OFF);
const DTX = s => D_SHIFT(s, DEMO_OFF_TX);
const D_WALK = (o, off, seen = new Set()) => {
  if (!o || typeof o !== 'object' || seen.has(o) || o.$$typeof) return; seen.add(o);
  for (const k of Object.keys(o)) { const v = o[k]; if (typeof v === 'string') o[k] = D_SHIFT(v, off); else if (v && typeof v === 'object') D_WALK(v, off, seen); }
};
const KAL_HEUTE = D_ISO(HEUTE_D);
const SHOP_KEY = 'zykol.kasse.briefkopf.v2';
const SHOP_STD = {
  firma: 'zykol Wassersport GmbH', zusatz: 'Demoshop · Kanusport & Ausrüstung', strasse: 'Am Hafen 7', ort: '28857 Syke', land: 'Deutschland',
  telefon: '04242 58-465', email: 'info@zykol.de', website: 'www.zykol.de', ustid: 'DE812446071', steuernr: '67/123/45678', register: 'Amtsgericht Walsrode HRB 0000', gf: 'Marko Ahrens',
  kontoinhaber: 'zykol Wassersport GmbH', bankname: 'Commerzbank Syke', iban: 'DE12 2004 0000 0123 4567 89', bic: 'COBADEFFXXX',
  akzent: '#0D2942',
  mofr: '9–18 Uhr', sa: '9–14 Uhr', so: 'geschlossen',
  belegPraefix: 'B', rechnungPraefix: 'R', angebotPraefix: 'AG', bbPraefix: 'BB',
  zahlungsziel: '14', angebotGueltig: '30', rueckgabe: '14',
  dankText: 'Vielen Dank für Ihren Einkauf!', fusszeile: '',
  barRundung: false, qrBasis: 'https://beleg.zykol.de/b/'
};
const SHOP_LADEN = () => { try { const g = JSON.parse(localStorage.getItem(SHOP_KEY) || '{}'); return {daten: Object.assign({}, SHOP_STD, g.daten || {}), logo: g.logo || null}; } catch (e) { return {daten: Object.assign({}, SHOP_STD), logo: null}; } };
const SHOP_SICHERN = (daten, logo) => { try { const alt = JSON.parse(localStorage.getItem(SHOP_KEY) || '{}'); localStorage.setItem(SHOP_KEY, JSON.stringify(Object.assign(alt, {daten, logo}))); } catch (e) {} };
const SHOP_LOGO_URL = () => { const s = SHOP_LADEN(); return s.logo || ((window.__resources && window.__resources.zlogo) || new URL('assets/zykol-logo.png', location.href).href); };
const SHOP_NR = (feld, std) => (SHOP_LADEN().daten[feld] || std) + '-' + HEUTE_D.getFullYear() + '-';
const SHOP_GRUPPEN = [
  {id: 'firma', titel: 'Firma & Kontakt', hinweis: 'Erscheint als Absender auf Belegen, Rechnungen und Bestellungen.', felder: [
    ['firma', 'Firmenname', 'text', 2], ['zusatz', 'Zusatz / Branche', 'text', 2], ['strasse', 'Straße und Hausnummer', 'text'], ['ort', 'PLZ und Ort', 'text'], ['land', 'Land', 'text'],
    ['telefon', 'Telefon', 'text'], ['email', 'E-Mail', 'text'], ['website', 'Website', 'text']]},
  {id: 'recht', titel: 'Rechtliches & Steuern', hinweis: 'Pflichtangaben im Fuß von Rechnungen.', felder: [
    ['ustid', 'USt-IdNr.', 'text'], ['steuernr', 'Steuernummer', 'text'], ['register', 'Handelsregister', 'text', 2], ['gf', 'Geschäftsführung / Inhaber', 'text', 2]]},
  {id: 'bank', titel: 'Bankverbindung', hinweis: 'Für Rechnungen und Überweisungen.', felder: [
    ['kontoinhaber', 'Kontoinhaber', 'text', 2], ['bankname', 'Bank', 'text'], ['bic', 'BIC', 'text'], ['iban', 'IBAN', 'text', 2]]},
  {id: 'marke', titel: 'Logo & Farben', hinweis: 'Eigenes Logo und Akzentfarbe für alle Dokumente.', felder: [
    ['logo', 'Logo', 'logo', 2], ['akzent', 'Akzentfarbe', 'farbe', 2]]},
  {id: 'zeiten', titel: 'Öffnungszeiten', hinweis: 'Für Bestellbelege, Abholscheine und den Dokumentfuß.', felder: [
    ['mofr', 'Montag – Freitag', 'text'], ['sa', 'Samstag', 'text'], ['so', 'Sonntag', 'text']]},
  {id: 'nummern', titel: 'Nummernkreise', hinweis: 'Präfix vor Jahr und laufender Nummer, z. B. B-' + new Date().getFullYear() + '-0419.', felder: [
    ['belegPraefix', 'Kassenbeleg', 'text'], ['rechnungPraefix', 'Rechnung', 'text'], ['angebotPraefix', 'Angebot', 'text'], ['bbPraefix', 'Bestellbeleg', 'text']]},
  {id: 'konditionen', titel: 'Konditionen & Texte', hinweis: 'Standardwerte für Rechnungen, Angebote und Belege.', felder: [
    ['zahlungsziel', 'Zahlungsziel (Tage)', 'zahl'], ['angebotGueltig', 'Angebot gültig (Tage)', 'zahl'], ['rueckgabe', 'Rückgabefrist (Tage)', 'zahl'],
    ['dankText', 'Danke-Text auf Belegen', 'text', 2], ['fusszeile', 'Zusätzliche Fußzeile', 'area', 2]]},
  {id: 'kasse', titel: 'Kasse & Online', hinweis: 'Verhalten an der Kasse und Adresse für Beleg-QR-Codes.', felder: [
    ['barRundung', 'Barbeträge auf 5 Cent runden', 'toggle', 2], ['qrBasis', 'Basis-Adresse für Beleg-QR-Codes', 'text', 2]]}
];
const SHOP_FARBEN = ['#0D2942', '#101010', '#EF3D2F', '#0d5f38', '#1d4ed8', '#6b4200', '#7c3aed'];
const KAL_FARBE = { 'Angebot': '#EF3D2F', 'Lieferung': '#101010', 'Abholung': '#0d5f38', 'Werkstatt': '#6b4200', 'Regatta': '#545b66', 'Messe': '#9aa0a8' };
const KAL_MONATE = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
const KAL_TERMINE = [
  ['Lieferung', 'Wareneingang Vaikobi · Schwimmwesten', '01.10.2026', '09:00', 'Lager', 'Paketdienst'],
  ['Abholung', 'Einzelkunde · Lettmann Granate', '01.10.2026', '11:00', 'Laden', 'Kunde K-1205'],
  ['Werkstatt', 'Steuerseil Surfski erneuern', '01.10.2026', '14:00', 'Werkstatt', 'Auftrag W-0216'],
  ['Lieferung', 'Wareneingang Nelo · 6 × K1 Vanquish', '02.10.2026', '10:00', 'Lager', 'Spedition Portugal'],
  ['Abholung', 'Kanu-Club Weser · 4 Wildwasserboote', '02.10.2026', '15:30', 'Laden', 'Kunde K-1042'],
  ['Werkstatt', 'Steueranlage K1 Sete tauschen', '05.10.2026', '09:00', 'Werkstatt', 'Auftrag W-0218'],
  ['Lieferung', 'Wareneingang Plastex · Bullet II', '07.10.2026', '11:00', 'Lager', 'Spedition Polen'],
  ['Abholung', 'Bootshaus Nord · Paddel & Westen', '08.10.2026', '14:00', 'Laden', 'Kunde K-1088'],
  ['Werkstatt', 'Sitzanpassung Rennboot', '09.10.2026', '16:00', 'Werkstatt', 'Auftrag W-0221'],
  ['Lieferung', 'Wareneingang Brača · Paddel', '13.10.2026', '10:00', 'Lager', 'Paketdienst'],
  ['Werkstatt', 'Laminatreparatur Polo-Kajak', '14.10.2026', '10:00', 'Werkstatt', 'Auftrag W-0224'],
  ['Abholung', 'Einzelkunde · Surfski Nelo 550', '16.10.2026', '17:00', 'Laden', 'Kunde K-1231'],
  ['Messe', 'Paddelmesse Nord · Aussteller', '17.–18.10.2026', 'ganztägig', 'Hamburg', 'Stand mit Lettmann und Zhik', 'KASSE-03 Mobil'],
  ['Lieferung', 'Wareneingang Zhik · Westen & Bekleidung', '21.10.2026', '09:30', 'Lager', 'Paketdienst'],
  ['Werkstatt', 'Wintercheck Vereinsflotte', '27.–29.10.2026', '08:00', 'Werkstatt', 'Kanu-Club Weser'],
  ['Abholung', 'Landesstützpunkt · Los 2 Rennboote', '04.11.2026', '10:00', 'Laden', 'Kunde K-1103'],
  ['Lieferung', 'Wareneingang Lettmann · Wildwasser', '11.11.2026', '10:00', 'Lager', 'Spedition Moers'],
  ['Messe', 'boot Düsseldorf · Besuch', '23.–24.01.2027', 'ganztägig', 'Düsseldorf', 'Einkaufsgespräche Hersteller']
];
const KAL_KASSE = t => t[6] || 'Verkaufsraum';
const KAL_ISO = d => d.slice(-4) + d.slice(-7, -5) + d.slice(-10, -8);
const KAL_START = d => /^\d\d\.\d\d\.\d{4}/.test(d) ? d.slice(6, 10) + d.slice(3, 5) + d.slice(0, 2) : d.slice(-4) + (/^\d\d\.\d\d\./.test(d) ? d.slice(3, 5) : d.slice(-7, -5)) + d.slice(0, 2);
const ANGEBOTE_START = [
  {nr:'AG-2026-0047', kundeNr:'K-1411', datum:'29.09.2026', gueltig:'29.10.2026', status:'Entwurf', bearbeiter:'Marko Ahrens', notiz:'Vereinsflotte Rennsport, Lieferung vor Saisonstart.', pos:[agP('p1',2,14), agP('p5',4,14), agP('p110',4,14)]},
  {nr:'AG-2026-0046', kundeNr:'K-1642', datum:'28.09.2026', gueltig:'28.10.2026', status:'Versendet', bearbeiter:'Anke Brandt', notiz:'Kanupolo-Mannschaft, 6 Boote inkl. Paddel.', pos:[agP('p64',6,14), agP('p106',6,14), agP('p112',6,14)]},
  {nr:'AG-2026-0045', kundeNr:'K-1632', datum:'26.09.2026', gueltig:'26.10.2026', status:'Entwurf', bearbeiter:'Marko Ahrens', notiz:'Probefahrt erfolgt, Sitzanpassung gewünscht.', pos:[agP('p14',1,5), agP('p9',1,5), {pid:null, name:'Sitzanpassung & Einweisung', sku:'Serviceleistung', menge:1, preis:60, rabatt:0}]},
  {nr:'AG-2026-0044', kundeNr:'K-1801', datum:'25.09.2026', gueltig:'25.10.2026', status:'Versendet', bearbeiter:'Marko Ahrens', notiz:'', pos:[agP('p44',4,17), agP('p82',3,17), agP('p29',10,17), agP('p111',12,17)]},
  {nr:'AG-2026-0043', kundeNr:'K-1671', datum:'23.09.2026', gueltig:'23.10.2026', status:'Entwurf', bearbeiter:'Anke Brandt', notiz:'AG-Ausstattung über Schulträger, Sammelrechnung.', pos:[agP('p47',4,10), agP('p32',8,10), agP('p113',8,10)]},
  {nr:'AG-2026-0042', kundeNr:'K-1174', datum:'22.09.2026', gueltig:'22.10.2026', status:'Entwurf', bearbeiter:'Marko Ahrens', notiz:'Jugendflotte Saison 2027 — Lieferung bis Ende März.', pos:[agP('p3',4,10), agP('p5',6,10), agP('p9',6,10), agP('p10',4,10)]},
  {nr:'AG-2026-0041', kundeNr:'K-1103', datum:'18.09.2026', gueltig:'18.10.2026', status:'Versendet', bearbeiter:'Marko Ahrens', notiz:'Ausschreibung Landesstützpunkt, Los 2 Rennboote.', pos:[agP('p1',2,18), agP('p2',2,18), agP('p5',4,18)]},
  {nr:'AG-2026-0040', kundeNr:'K-1205', datum:'15.09.2026', gueltig:'15.10.2026', status:'Versendet', bearbeiter:'Anke Brandt', notiz:'', pos:[agP('p9',20,14), agP('p11',20,14)]},
  {nr:'AG-2026-0039', kundeNr:'K-1231', datum:'10.09.2026', gueltig:'24.09.2026', status:'Angenommen', bearbeiter:'Marko Ahrens', notiz:'Abholung im Laden, Sitzanpassung vor Ort.', pos:[agP('p3',1), agP('p5',1), agP('p10',1), {pid:null, name:'Sitzanpassung & Einweisung', sku:'Serviceleistung', menge:1, preis:60, rabatt:0}]},
  {nr:'AG-2026-0038', kundeNr:'K-1248', datum:'02.09.2026', gueltig:'02.10.2026', status:'Angenommen', bearbeiter:'Marko Ahrens', notiz:'Staffelrabatt Wiederverkäufer.', pos:[agP('p7',24,20), agP('p8',36,20), agP('p11',30,20)]},
  {nr:'AG-2026-0037', kundeNr:'K-1190', datum:'26.08.2026', gueltig:'25.09.2026', status:'Versendet', bearbeiter:'Anke Brandt', notiz:'Beschaffung über Schulträger.', pos:[agP('p4',3,8), agP('p6',6,8), agP('p9',6,8), agP('p12',2,8)]},
  {nr:'AG-2026-0036', kundeNr:'K-1088', datum:'12.08.2026', gueltig:'11.09.2026', status:'Abgelehnt', bearbeiter:'Marko Ahrens', notiz:'', pos:[agP('p2',1,15), agP('p12',3,15)]},
  {nr:'AG-2026-0035', kundeNr:'K-1042', datum:'28.07.2026', gueltig:'27.08.2026', status:'Abgelaufen', bearbeiter:'Marko Ahrens', notiz:'', pos:[agP('p4',2,12), agP('p6',4,12)]},
  {nr:'AG-2026-0034', kundeNr:'K-1525', datum:'26.07.2026', gueltig:'25.08.2026', status:'Abgelehnt', bearbeiter:'Anke Brandt', notiz:'Kaderausstattung Landesstützpunkt.', pos:[agP('p20',3,20), agP('p11',6,20), agP('p119',12,20)]},
  {nr:'AG-2026-0033', kundeNr:'K-1697', datum:'17.07.2026', gueltig:'16.08.2026', status:'Abgelaufen', bearbeiter:'Marko Ahrens', notiz:'Bekleidungspaket Wintertraining.', pos:[agP('p124',1,5), agP('p129',1,5), agP('p141',1,5)]},
  {nr:'AG-2026-0032', kundeNr:'K-1801', datum:'08.07.2026', gueltig:'07.08.2026', status:'Abgelaufen', bearbeiter:'Marko Ahrens', notiz:'', pos:[agP('p123',20,17), agP('p113',20,17)]},
  {nr:'AG-2026-0031', kundeNr:'K-1567', datum:'29.06.2026', gueltig:'29.07.2026', status:'Entwurf', bearbeiter:'Anke Brandt', notiz:'Vereinsflotte Rennsport, Lieferung vor Saisonstart.', pos:[agP('p17',2,14), agP('p29',4,14), agP('p110',4,14)]},
  {nr:'AG-2026-0030', kundeNr:'K-1042', datum:'20.06.2026', gueltig:'20.07.2026', status:'Abgelaufen', bearbeiter:'Marko Ahrens', notiz:'Kanupolo-Mannschaft, 6 Boote inkl. Paddel.', pos:[agP('p66',6,12), agP('p106',6,12), agP('p112',6,12)]},
  {nr:'AG-2026-0029', kundeNr:'K-1772', datum:'11.06.2026', gueltig:'11.07.2026', status:'Abgelaufen', bearbeiter:'Marko Ahrens', notiz:'Probefahrt erfolgt, Sitzanpassung gewünscht.', pos:[agP('p22',1), agP('p33',1), {pid:null, name:'Sitzanpassung & Einweisung', sku:'Serviceleistung', menge:1, preis:60, rabatt:0}]},
  {nr:'AG-2026-0028', kundeNr:'K-1801', datum:'02.06.2026', gueltig:'02.07.2026', status:'Angenommen', bearbeiter:'Anke Brandt', notiz:'', pos:[agP('p52',4,17), agP('p80',3,17), agP('p37',10,17), agP('p111',12,17)]},
  {nr:'AG-2026-0027', kundeNr:'K-1671', datum:'24.05.2026', gueltig:'23.06.2026', status:'Angenommen', bearbeiter:'Marko Ahrens', notiz:'AG-Ausstattung über Schulträger, Sammelrechnung.', pos:[agP('p55',4,10), agP('p40',8,10), agP('p113',8,10)]},
  {nr:'AG-2026-0026', kundeNr:'K-1525', datum:'15.05.2026', gueltig:'14.06.2026', status:'Abgelehnt', bearbeiter:'Marko Ahrens', notiz:'Kaderausstattung Landesstützpunkt.', pos:[agP('p28',3,20), agP('p35',6,20), agP('p127',12,20)]},
  {nr:'AG-2026-0025', kundeNr:'K-1231', datum:'06.05.2026', gueltig:'05.06.2026', status:'Abgelaufen', bearbeiter:'Anke Brandt', notiz:'Bekleidungspaket Wintertraining.', pos:[agP('p132',1), agP('p116',1), agP('p149',1)]},
  {nr:'AG-2026-0024', kundeNr:'K-1801', datum:'27.04.2026', gueltig:'27.05.2026', status:'Abgelaufen', bearbeiter:'Marko Ahrens', notiz:'', pos:[agP('p131',20,17), agP('p113',20,17)]},
  {nr:'AG-2026-0023', kundeNr:'K-1785', datum:'18.04.2026', gueltig:'18.05.2026', status:'Entwurf', bearbeiter:'Marko Ahrens', notiz:'Vereinsflotte Rennsport, Lieferung vor Saisonstart.', pos:[agP('p25',2,12), agP('p37',4,12), agP('p110',4,12)]},
  {nr:'AG-2026-0022', kundeNr:'K-1430', datum:'09.04.2026', gueltig:'09.05.2026', status:'Abgelaufen', bearbeiter:'Anke Brandt', notiz:'Kanupolo-Mannschaft, 6 Boote inkl. Paddel.', pos:[agP('p68',6,10), agP('p106',6,10), agP('p112',6,10)]},
  {nr:'AG-2026-0021', kundeNr:'K-1317', datum:'31.03.2026', gueltig:'30.04.2026', status:'Abgelaufen', bearbeiter:'Marko Ahrens', notiz:'Probefahrt erfolgt, Sitzanpassung gewünscht.', pos:[agP('p2',1), agP('p85',1), {pid:null, name:'Sitzanpassung & Einweisung', sku:'Serviceleistung', menge:1, preis:60, rabatt:0}]},
  {nr:'AG-2026-0020', kundeNr:'K-1801', datum:'22.03.2026', gueltig:'21.04.2026', status:'Angenommen', bearbeiter:'Marko Ahrens', notiz:'', pos:[agP('p93',4,17), agP('p83',3,17), agP('p89',10,17), agP('p111',12,17)]}
];
const AG_STIL = {Entwurf: ['#e5e7eb', '#545b66'], Versendet: ['#fdebc8', '#6b4200'], Angenommen: ['#dcf3e6', '#0d5f38'], Abgelehnt: ['#fde0e2', '#9b1520'], Abgelaufen: ['#eef0f2', '#646b76']};

const KAEUFE = {
  'K-1042': [
    {datum: '18.04.2026', beleg: 'B-2026-0412', produkt: 'Nelo K1 Vanquish 7', menge: 1, betrag: 4215.2},
    {datum: '18.04.2026', beleg: 'B-2026-0412', produkt: 'Brača IV 750', menge: 2, betrag: 825.44},
    {datum: '03.02.2026', beleg: 'B-2026-0117', produkt: 'Jantex Gamma 840', menge: 8, betrag: 3583.36},
    {datum: '11.09.2025', beleg: 'B-2025-1080', produkt: 'Brača IV 735', menge: 6, betrag: 2423.52}
  ],
  'K-1088': [
    {datum: '24.08.2026', beleg: 'B-2026-0401', produkt: 'Plastex K1 Bullet II', menge: 2, betrag: 7633},
    {datum: '24.08.2026', beleg: 'B-2026-0401', produkt: 'Brača IV 705', menge: 4, betrag: 1492.6},
    {datum: '19.06.2026', beleg: 'B-2026-0298', produkt: 'Jantex Beta 810', menge: 12, betrag: 4885.8},
    {datum: '14.03.2026', beleg: 'B-2026-0166', produkt: 'Brača IV 720 Extra Light', menge: 6, betrag: 2646.9}
  ],
  'K-1103': [
    {datum: '07.07.2026', beleg: 'B-2026-0334', produkt: 'Nelo K1 Vanquish 7', menge: 3, betrag: 11783.4},
    {datum: '07.07.2026', beleg: 'B-2026-0334', produkt: 'Brača IV 750', menge: 6, betrag: 2307.48},
    {datum: '22.04.2026', beleg: 'B-2026-0221', produkt: 'Jantex Gamma 840', menge: 14, betrag: 5836.69},
    {datum: '05.11.2025', beleg: 'B-2025-1288', produkt: 'Jantex Alpha 820', menge: 20, betrag: 7691.6}
  ],
  'K-1156': [
    {datum: '02.03.2026', beleg: 'B-2026-0188', produkt: 'Plastex K1 Bullet II', menge: 1, betrag: 4490},
    {datum: '02.03.2026', beleg: 'B-2026-0188', produkt: 'Brača IV 705', menge: 1, betrag: 439},
    {datum: '16.05.2025', beleg: 'B-2025-0483', produkt: 'Brača IV 750', menge: 1, betrag: 469}
  ],
  'K-1174': [
    {datum: '11.05.2026', beleg: 'B-2026-0247', produkt: 'Nelo K1 Vanquish 5', menge: 2, betrag: 8082},
    {datum: '11.05.2026', beleg: 'B-2026-0247', produkt: 'Brača IV 735', menge: 4, betrag: 1652.4},
    {datum: '08.09.2025', beleg: 'B-2025-1041', produkt: 'Jantex Alpha 800', menge: 10, betrag: 4131}
  ],
  'K-1190': [
    {datum: '26.02.2026', beleg: 'B-2026-0151', produkt: 'Plastex C1 Bullet', menge: 1, betrag: 4038.8},
    {datum: '26.02.2026', beleg: 'B-2026-0151', produkt: 'Brača IV 720 Extra Light', menge: 4, betrag: 1909.92},
    {datum: '19.09.2025', beleg: 'B-2025-1103', produkt: 'Jantex Gamma 840', menge: 10, betrag: 4682.8}
  ],
  'K-1205': [
    {datum: '30.07.2026', beleg: 'B-2026-0361', produkt: 'Jantex Gamma 840', menge: 18, betrag: 7882.16},
    {datum: '30.07.2026', beleg: 'B-2026-0361', produkt: 'Jantex Alpha 800', menge: 12, betrag: 4736.88},
    {datum: '21.01.2026', beleg: 'B-2026-0074', produkt: 'Jantex Beta 810', menge: 8, betrag: 3295.52}
  ],
  'K-1231': [
    {datum: '14.06.2026', beleg: 'B-2026-0289', produkt: 'Nelo K1 Vanquish 5', menge: 1, betrag: 4490},
    {datum: '14.06.2026', beleg: 'B-2026-0289', produkt: 'Jantex Alpha 800', menge: 2, betrag: 918}
  ],
  'K-1248': [
    {datum: '25.08.2026', beleg: 'B-2026-0407', produkt: 'Nelo K1 Vanquish 5', menge: 4, betrag: 14368},
    {datum: '25.08.2026', beleg: 'B-2026-0407', produkt: 'Plastex C1 Bullet', menge: 3, betrag: 10536},
    {datum: '12.05.2026', beleg: 'B-2026-0254', produkt: 'Brača IV 750', menge: 12, betrag: 4502.4},
    {datum: '02.02.2026', beleg: 'B-2026-0109', produkt: 'Jantex Alpha 820', menge: 30, betrag: 11256}
  ]
};

const KUNDENBOOTE = {
  'K-1042': {modell: 'Nelo K1 Vanquish 7', typ: 'Rennkajak K1', sn: '480216739041', kauf: '18.04.2026', historie: [
    {datum: '18.04.2026', typ: 'Zugang', titel: 'Verkauf & Übergabe', text: 'Beleg B-2026-0412 · Rechnungskauf 30 Tage · Sitz auf Paddler angepasst', kosten: '4.215,20 €'},
    {datum: '06.06.2026', typ: 'Wartung', titel: 'Erstcheck nach Einfahrzeit', text: 'Steueranlage nachgestellt, Schotten geprüft · Garantie', kosten: '0,00 €'},
    {datum: '02.08.2026', typ: 'Reparatur', titel: 'Steuerseil ersetzt', text: 'Seilriss backbord nach Regatta Bremen · Garantiefall', kosten: '0,00 €'}]},
  'K-1088': {modell: 'Plastex K1 Bullet II', typ: 'Rennkajak K1', sn: '571903428866', kauf: '24.08.2026', historie: [
    {datum: '24.08.2026', typ: 'Zugang', titel: 'Verkauf an Händler', text: 'Beleg B-2026-0401 · Rechnungskauf 14 Tage · Händlerkondition', kosten: '2.209,15 €'},
    {datum: '26.08.2026', typ: 'Wartung', titel: 'Auslieferungscheck', text: 'Sitzschienen kontrolliert, Transportsicherung montiert', kosten: '38,00 €'}]},
  'K-1103': {modell: 'Nelo K1 Vanquish 7', typ: 'Rennkajak K1', sn: '480217004512', kauf: '07.07.2026', historie: [
    {datum: '07.07.2026', typ: 'Zugang', titel: 'Verkauf Landesstützpunkt', text: 'Beleg B-2026-0334 · Ausschreibung, Rahmenrabatt 18 %', kosten: '2.377,18 €'},
    {datum: '21.07.2026', typ: 'Wartung', titel: 'Stützpunkt-Abnahme', text: 'Sitzhöhe und Steuerung auf Kaderathletin eingestellt', kosten: '64,00 €'},
    {datum: '19.08.2026', typ: 'Reparatur', titel: 'Cockpitrand versiegelt', text: 'Undichtigkeit nach Trainingslager Hannover behoben', kosten: '112,00 €'}]},
  'K-1156': {modell: 'Plastex K1 Bullet II', typ: 'Rennkajak K1', sn: '571902871330', kauf: '02.03.2026', historie: [
    {datum: '02.03.2026', typ: 'Zugang', titel: 'Verkauf & Übergabe', text: 'Beleg B-2026-0188 · Kartenzahlung · Ersatzpaddel als Zubehör', kosten: '4.490,00 €'},
    {datum: '21.05.2026', typ: 'Wartung', titel: 'Frühjahrscheck', text: 'Dichtigkeitsprüfung, Lukendeckel gefettet', kosten: '58,00 €'}]},
  'K-1174': {modell: 'Nelo K1 Vanquish 5', typ: 'Rennkajak K1', sn: '390458112077', kauf: '11.05.2026', historie: [
    {datum: '11.05.2026', typ: 'Zugang', titel: 'Verkauf Vereinsjugend', text: 'Beleg B-2026-0247 · Rechnungskauf 30 Tage · Rabatt 10 %', kosten: '1.701,00 €'},
    {datum: '28.06.2026', typ: 'Wartung', titel: 'Jugendtraining-Check', text: 'Fußstützen auf drei Größen umgerüstet', kosten: '49,00 €'},
    {datum: '14.08.2026', typ: 'Reparatur', titel: 'Bug laminiert', text: 'Anfahrschaden Steg Wildeshausen, GFK-Patch', kosten: '168,00 €'}]},
  'K-1190': {modell: 'Plastex C1 Bullet', typ: 'Renncanadier C1', sn: '264701338925', kauf: '26.02.2026', historie: [
    {datum: '26.02.2026', typ: 'Zugang', titel: 'Verkauf Schulsport', text: 'Beleg B-2026-0151 · Beschaffung über Schulträger · Rabatt 8 %', kosten: '2.014,80 €'},
    {datum: '07.05.2026', typ: 'Wartung', titel: 'Sicherheitsabnahme Schule', text: 'Auftriebskörper geprüft, Prüfprotokoll ausgestellt', kosten: '72,00 €'}]},
  'K-1205': {modell: 'Nelo K1 Vanquish 5', typ: 'Rennkajak K1', sn: '390458664130', kauf: '30.07.2026', historie: [
    {datum: '30.07.2026', typ: 'Zugang', titel: 'Verkauf Wasserwacht', text: 'Beleg B-2026-0361 · Rechnungskauf 14 Tage · Rabatt 14 %', kosten: '1.625,40 €'},
    {datum: '12.08.2026', typ: 'Wartung', titel: 'Einsatzausstattung montiert', text: 'Wurfsackhalterung und Signalflagge angebracht', kosten: '86,00 €'}]},
  'K-1231': {modell: 'Nelo K1 Vanquish 5', typ: 'Rennkajak K1', sn: '390457920684', kauf: '14.06.2026', historie: [
    {datum: '14.06.2026', typ: 'Zugang', titel: 'Verkauf & Übergabe', text: 'Beleg B-2026-0289 · Kartenzahlung · Paddel Jantex Beta 810 dazu', kosten: '4.490,00 €'},
    {datum: '05.08.2026', typ: 'Reparatur', titel: 'Cockpitrand nachgeklebt', text: 'Nach Regatta Hamburg-Allermöhe instand gesetzt', kosten: '96,00 €'}]},
  'K-1248': {modell: 'Plastex C1 Bullet', typ: 'Renncanadier C1', sn: '264702157448', kauf: '25.08.2026', historie: [
    {datum: '25.08.2026', typ: 'Zugang', titel: 'Verkauf an Wiederverkäufer', text: 'Beleg B-2026-0407 · Rechnungskauf 30 Tage · Staffelrabatt 20 %', kosten: '3.512,00 €'},
    {datum: '26.08.2026', typ: 'Wartung', titel: 'Versandvorbereitung', text: 'Transportschutz montiert, Seriennummer dokumentiert', kosten: '42,00 €'}]}
};

const ZEITRAUM = {
  heute: {label: 'Heute', hinweis: 'Stundenverlauf, Terminal 1', umsatz: 13211, bon: 6, kunden: 6, retour: 1,
    trend: ['+8,4 % vs. Vortag', '+2 vs. Vortag', '+11,2 % vs. Vortag', 'Quote 1,3 % vom Umsatz'],
    reihe: [['09h', 79], ['10h', 0], ['11h', 2688], ['12h', 197], ['13h', 297], ['14h', 3178], ['15h', 0], ['16h', 0]]},
  woche: {label: 'Woche', hinweis: 'Mo – So, KW 35', umsatz: 50278, bon: 27, kunden: 24, retour: 2,
    trend: ['+12,1 % vs. Vorwoche', '+5 vs. Vorwoche', '+3,4 % vs. Vorwoche', 'Quote 0,9 % vom Umsatz'],
    reihe: [['Mo', 2140], ['Di', 3080], ['Mi', 1720], ['Do', 4260], ['Fr', 3390], ['Sa', 5330], ['So', 1940]]},
  monat: {label: 'Monat', hinweis: 'August 2026, Kalenderwochen', umsatz: 193683, bon: 108, kunden: 71, retour: 5,
    trend: ['+6,3 % vs. Juli', '+11 vs. Juli', '−1,8 % vs. Juli', 'Quote 1,1 % vom Umsatz'],
    reihe: [['KW31', 17240], ['KW32', 19880], ['KW33', 14310], ['KW34', 20920], ['KW35', 11860]]},
  jahr: {label: 'Jahr', hinweis: '2026, Quartale', umsatz: 1408704, bon: 764, kunden: 289, retour: 24,
    trend: ['+9,8 % vs. 2025', '+64 vs. 2025', '+2,1 % vs. 2025', 'Quote 1,0 % vom Umsatz'],
    reihe: [['Q1', 118400], ['Q2', 204600], ['Q3', 231480], ['Q4', 58000]]}
};

const P_ICON = {
  bon: 'M6 9V4h12v5M6 15h12v5H6zM6 15a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2',
  rechnung: 'M8 3h8l4 4v14H4V3h4zM8 11h8M8 15h5',
  label: 'M4 7h11l5 5-5 5H4V7zM8.5 12h.01',
  qr: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2.5v2.5H14zM17.5 17.5H20V20h-2.5zM14 19h2M19 14v2'
};

const DRUCKER = [
  {gruppe: 'bon', titel: 'Bondrucker', beschreibung: 'Kassenbelege am Terminal, Belegausgabepflicht', hinzufuegen: 'Bondrucker hinzufügen', geraete: [
    {id: 'd1', name: 'Epson TM-m30III · Terminal 1', verbindung: 'USB', papier: '80 mm Thermo', icon: P_ICON.bon, on: true, status: 'Bereit'},
    {id: 'd2', name: 'Star mC-Print3 · Terminal 2', verbindung: 'LAN 192.168.1.42', papier: '80 mm Thermo', icon: P_ICON.bon, on: false, status: 'Getrennt'}
  ]},
  {gruppe: 'rechnung', titel: 'Rechnungsdrucker', beschreibung: 'A4-Rechnungen für Vereine, Firmen und Verbände', hinzufuegen: 'Rechnungsdrucker hinzufügen', geraete: [
    {id: 'd3', name: 'Brother HL-L5210DN · Büro', verbindung: 'LAN 192.168.1.60', papier: 'A4 Simplex/Duplex', icon: P_ICON.rechnung, on: true, status: 'Bereit'},
    {id: 'd4', name: 'HP LaserJet M209 · Werkstatt', verbindung: 'WLAN', papier: 'A4', icon: P_ICON.rechnung, on: false, status: 'Standby'}
  ]},
  {gruppe: 'label', titel: 'Labeldrucker', beschreibung: 'Preisetiketten, Artikel- und Lagerlabels mit Barcode', hinzufuegen: 'Labeldrucker hinzufügen', geraete: [
    {id: 'd5', name: 'Zebra ZD421 · Lager', verbindung: 'USB', papier: '57 × 32 mm Etiketten', icon: P_ICON.label, on: true, status: 'Bereit'},
    {id: 'd6', name: 'Brother QL-820NWB · Verkaufsfläche', verbindung: 'Bluetooth', papier: '62 mm Endlos', icon: P_ICON.label, on: true, status: 'Bereit'}
  ]},
  {gruppe: 'qr', titel: 'QR-Etikettendrucker', beschreibung: 'Paddel-IDs als QR-Etikett für den Schaft, wird beim Erstellen der Rechnung angesteuert', hinzufuegen: 'QR-Etikettendrucker hinzufügen', geraete: [
    {id: 'd7', name: 'Brother PT-P950NW · Kasse Verkaufsraum', verbindung: 'LAN 192.168.1.71', papier: '24 mm TZe laminiert · wasserfest · 24 × 50 mm', icon: P_ICON.qr, on: true, status: 'Bereit'}
  ]}
];
const QR_DRUCKER = DRUCKER.find(g => g.gruppe === 'qr').geraete[0];

const FZ = {
  artikel: {label: 'Artikel', felder: [
    {kasse: 'Artikelnummer', typ: 'Text (20)', erp: 'ITEM.ItemCode', transform: 'unverändert', pflicht: true, richtung: '↔'},
    {kasse: 'Bezeichnung', typ: 'Text (80)', erp: 'ITEM.ItemName', transform: 'trim, max. 80', pflicht: true, richtung: '←'},
    {kasse: 'Hersteller', typ: 'Text (40)', erp: 'ITEM.Manufacturer', transform: 'Mapping-Tabelle', pflicht: false, richtung: '←'},
    {kasse: 'Kategorie', typ: 'Auswahl', erp: 'ITEM.ItemGroup', transform: 'Warengruppen-Mapping', pflicht: true, richtung: '←'},
    {kasse: 'Verkaufspreis (brutto)', typ: 'Dezimal (2)', erp: 'PRICE.GrossPrice', transform: 'inkl. 19 % MwSt.', pflicht: true, richtung: '←'},
    {kasse: 'Steuersatz', typ: 'Prozent', erp: 'ITEM.TaxCode', transform: 'A1 → 19 %, A2 → 7 %', pflicht: true, richtung: '←'},
    {kasse: 'Farbe (Variante)', typ: 'Text (30)', erp: 'ITEM.Attr01', transform: 'Farbnamen-Liste', pflicht: false, richtung: '↔'},
    {kasse: 'Größe (Variante)', typ: 'Text (20)', erp: 'ITEM.Attr02', transform: 'Größenraster', pflicht: false, richtung: '↔'},
    {kasse: 'EAN / Barcode', typ: 'Text (13)', erp: 'ITEM.BarCode', transform: 'EAN-13 Prüfziffer', pflicht: false, richtung: '←'}
  ], offen: [
    {feld: 'Pfand / Gebühr', hinweis: 'kein Zielfeld gefunden'},
    {feld: 'Lieferantenartikelnummer', hinweis: 'optional, für Bestellvorschlag'}
  ], vorschau: [
    {k: 'ItemCode', v: 'NEL-004'}, {k: 'ItemName', v: 'K1 Vanquish 7'}, {k: 'ItemGroup', v: 'Rennboote'},
    {k: 'GrossPrice', v: '4.790,00'}, {k: 'TaxCode', v: 'A1 (19 %)'}, {k: 'Attr01 / Attr02', v: 'Weiß · Rumpf M'}
  ]},
  bestand: {label: 'Bestand', felder: [
    {kasse: 'Artikelnummer', typ: 'Text (20)', erp: 'STOCK.ItemCode', transform: 'unverändert', pflicht: true, richtung: '↔'},
    {kasse: 'Lagerort', typ: 'Auswahl', erp: 'STOCK.WhsCode', transform: 'VF → 01, HL → 02', pflicht: true, richtung: '↔'},
    {kasse: 'Bestand', typ: 'Ganzzahl', erp: 'STOCK.OnHand', transform: 'Kasse führend', pflicht: true, richtung: '→'},
    {kasse: 'Reserviert', typ: 'Ganzzahl', erp: 'STOCK.Committed', transform: 'unverändert', pflicht: false, richtung: '←'},
    {kasse: 'Meldebestand', typ: 'Ganzzahl', erp: 'STOCK.MinLevel', transform: 'unverändert', pflicht: false, richtung: '←'},
    {kasse: 'Bewegungsgrund', typ: 'Auswahl', erp: 'MOVE.Reason', transform: 'Verkauf / Retoure / Inventur', pflicht: true, richtung: '→'}
  ], offen: [{feld: 'Chargen-/Seriennummer', hinweis: 'in der Kasse nicht geführt'}],
  vorschau: [
    {k: 'ItemCode', v: 'BR-IV-745'}, {k: 'WhsCode', v: '01'}, {k: 'OnHand', v: '8'},
    {k: 'Committed', v: '2'}, {k: 'Reason', v: 'SALE'}
  ]},
  kunden: {label: 'Kunden', felder: [
    {kasse: 'Kundennummer', typ: 'Text (12)', erp: 'BP.CardCode', transform: 'K-1042 → C1042', pflicht: true, richtung: '↔'},
    {kasse: 'Name', typ: 'Text (100)', erp: 'BP.CardName', transform: 'unverändert', pflicht: true, richtung: '↔'},
    {kasse: 'Kundenart', typ: 'Auswahl', erp: 'BP.GroupCode', transform: 'Privat/Verein/Firma/Verband/Schule', pflicht: true, richtung: '↔'},
    {kasse: 'USt-IdNr.', typ: 'Text (15)', erp: 'BP.FederalTaxID', transform: 'Format DE + 9 Ziffern', pflicht: false, richtung: '↔'},
    {kasse: 'Rabattstufe', typ: 'Prozent', erp: 'BP.DiscountPct', transform: 'unverändert', pflicht: false, richtung: '←'},
    {kasse: 'Zahlungsziel', typ: 'Auswahl', erp: 'BP.PaymentTerms', transform: '14 / 30 Tage, direkt', pflicht: true, richtung: '←'},
    {kasse: 'Ansprechpartner', typ: 'Text (60)', erp: 'BP.ContactPerson', transform: 'unverändert', pflicht: false, richtung: '↔'}
  ], offen: [{feld: 'Vereinsregister-Nr.', hinweis: 'Zielfeld frei wählbar (UDF)'}],
  vorschau: [
    {k: 'CardCode', v: 'C1042'}, {k: 'CardName', v: 'Kanu-Club Weser Syke e.V.'}, {k: 'GroupCode', v: 'VEREIN'},
    {k: 'DiscountPct', v: '12,00'}, {k: 'PaymentTerms', v: '30 Tage'}
  ]},
  belege: {label: 'Belege', felder: [
    {kasse: 'Belegnummer', typ: 'Text (16)', erp: 'DOC.DocNum', transform: 'B-2026-0418 → 20260418', pflicht: true, richtung: '→'},
    {kasse: 'Belegdatum / Zeit', typ: 'Datum/Zeit', erp: 'DOC.DocDate', transform: 'ISO 8601, Zeitzone Europe/Berlin', pflicht: true, richtung: '→'},
    {kasse: 'Kunde', typ: 'Referenz', erp: 'DOC.CardCode', transform: 'leer → Laufkunde', pflicht: false, richtung: '→'},
    {kasse: 'Position Artikel', typ: 'Referenz', erp: 'LINE.ItemCode', transform: 'unverändert', pflicht: true, richtung: '→'},
    {kasse: 'Menge', typ: 'Dezimal (3)', erp: 'LINE.Quantity', transform: 'unverändert', pflicht: true, richtung: '→'},
    {kasse: 'Zahlart', typ: 'Auswahl', erp: 'PAY.PaymentMethod', transform: 'Karte → EC, Bar → CASH', pflicht: true, richtung: '→'},
    {kasse: 'TSE-Signatur', typ: 'Text (128)', erp: 'DOC.U_TSE_Sig', transform: 'unverändert', pflicht: true, richtung: '→'},
    {kasse: 'Storno-Referenz', typ: 'Text (16)', erp: 'DOC.CancelRef', transform: 'nur bei Storno', pflicht: false, richtung: '→'}
  ], offen: [{feld: 'Gutschein-Einlösung', hinweis: 'Zielbeleg noch offen'}],
  vorschau: [
    {k: 'DocNum', v: '20260418'}, {k: 'DocDate', v: '2026-08-27T14:32+02:00'}, {k: 'CardCode', v: '(Laufkunde)'},
    {k: 'PaymentMethod', v: 'EC'}, {k: 'U_TSE_Sig', v: 'a41f-9c02…'}
  ]}
};

const ROLLEN = ['Admin', 'Filialleitung', 'Teamleitung', 'Verkauf', 'Aushilfe', 'Einkauf'];
const KASSEN_START = [
  {id: 'Verkaufsraum', ort: 'Verkaufsfläche', drucker: 'Epson TM-m30III · USB'},
  {id: 'Werkstatt', ort: 'Werkstatt', drucker: 'Star mC-Print3 · LAN'},
  {id: 'KASSE-03 Mobil', ort: 'Regatta / Messe', drucker: 'Brother QL-820NWB · Bluetooth'}
];
const ROLLE_STIL = {
  'Admin': {bg: '#e5e7eb', fg: '#1f2329'},
  'Filialleitung': {bg: '#e5e7eb', fg: '#1f2329'},
  'Teamleitung': {bg: '#e5e7eb', fg: '#1f2329'},
  'Verkauf': {bg: '#dcf3e6', fg: '#0d5f38'},
  'Aushilfe': {bg: '#fdebc8', fg: '#545b66'},
  'Einkauf': {bg: '#e5e7eb', fg: '#545b66'}
};

const BENUTZER_START = [
  {id: 'u0', name: 'root', kuerzel: 'RT', rolle: 'Admin', pin: '1337', email: 'root@zykol.de', system: true, kassen: ['Verkaufsraum', 'Werkstatt', 'KASSE-03 Mobil'], zuletzt: 'Systemkonto · Vollzugriff'},
  {id: 'u1', name: 'Marko Ahrens', kuerzel: 'MA', rolle: 'Verkauf', pin: '••••', email: 'marko.ahrens@zykol.de', kassen: ['Verkaufsraum'], zuletzt: 'Angemeldet seit 08:15'},
  {id: 'u2', name: 'Anke Brandt', kuerzel: 'AB', rolle: 'Filialleitung', pin: '••••', email: 'anke.brandt@zykol.de', kassen: ['Verkaufsraum', 'Werkstatt'], zuletzt: 'Zuletzt 26.08. 18:20'},
  {id: 'u3', name: 'Jens Kohl', kuerzel: 'JK', rolle: 'Admin', pin: '••••', email: 'jens.kohl@zykol.de', kassen: ['Verkaufsraum', 'Werkstatt', 'KASSE-03 Mobil'], zuletzt: 'Zuletzt 27.08. 07:40'},
  {id: 'u4', name: 'Lena Struck', kuerzel: 'LS', rolle: 'Aushilfe', pin: '••••', email: 'lena.struck@zykol.de', kassen: ['KASSE-03 Mobil'], zuletzt: 'Zuletzt 24.08. 15:05'},
  {id: 'u5', name: 'Bernd Kluge', kuerzel: 'BK', rolle: 'Einkauf', pin: '••••', email: 'bernd.kluge@zykol.de', kassen: ['Verkaufsraum'], zuletzt: 'Zuletzt 27.08. 09:10'}
];

const ROLLE_STIL_FREI = [{bg: '#e5e7eb', fg: '#1f2329'}, {bg: '#e5e7eb', fg: '#545b66'}, {bg: '#e5e7eb', fg: '#1f2329'}];

const SCHICHT_ARTEN = [
  {id: 'frei', kurz: 'Frei', zeit: '—', bg: '#e5e7eb', fg: '#646b76', stunden: 0},
  {id: 'frueh', kurz: 'Früh', zeit: '08:00 – 14:00', bg: '#dcf3e6', fg: '#0d5f38', stunden: 6},
  {id: 'spaet', kurz: 'Spät', zeit: '13:00 – 19:00', bg: '#e5e7eb', fg: '#1f2329', stunden: 6},
  {id: 'ganz', kurz: 'Ganztag', zeit: '09:00 – 18:00', bg: '#e5e7eb', fg: '#1f2329', stunden: 8},
  {id: 'regatta', kurz: 'Regatta', zeit: '07:00 – 17:00', bg: '#fdebc8', fg: '#545b66', stunden: 9}
];

const WOCHENTAGE = ['Mo 24.', 'Di 25.', 'Mi 26.', 'Do 27.', 'Fr 28.', 'Sa 29.', 'So 30.'];

const SCHICHT_START = {
  u0: ['frei', 'frei', 'frei', 'frei', 'frei', 'frei', 'frei'],
  u1: ['frueh', 'frueh', 'spaet', 'frueh', 'spaet', 'ganz', 'frei'],
  u2: ['ganz', 'spaet', 'frueh', 'ganz', 'frueh', 'frei', 'frei'],
  u3: ['frei', 'ganz', 'ganz', 'spaet', 'ganz', 'frei', 'frei'],
  u4: ['frei', 'frei', 'spaet', 'frei', 'spaet', 'regatta', 'regatta'],
  u5: ['frueh', 'frueh', 'frueh', 'frueh', 'frei', 'frei', 'frei']
};

const ZEIT_START = {
  u1: {status: 'an', seit: '08:15', heute: 372, woche: 1980, soll: 2280},
  u2: {status: 'aus', seit: '', heute: 468, woche: 2124, soll: 2280},
  u3: {status: 'an', seit: '07:40', heute: 427, woche: 2340, soll: 2280},
  u4: {status: 'aus', seit: '', heute: 0, woche: 720, soll: 960},
  u5: {status: 'aus', seit: '', heute: 336, woche: 1620, soll: 1710}
};

const RECHTE = [
  ['Angebote erstellen & versenden', 1, 1, 1, 1, 0, 1],
  ['Angebote in Kasse übernehmen', 1, 1, 1, 1, 0, 0],
  ['Artikel & Bestände pflegen', 1, 1, 0, 0, 0, 1],
  ['Aufgaben delegieren', 1, 1, 1, 0, 0, 0],
  ['Beleg drucken', 1, 1, 1, 1, 1, 1],
  ['Berichte einsehen', 1, 1, 1, 0, 0, 1],
  ['Bestellbeleg personalisiert drucken', 1, 1, 1, 1, 1, 0],
  ['Bootsakten & Seriennummern pflegen', 1, 1, 1, 1, 0, 0],
  ['Datenbank & Backup verwalten', 1, 0, 0, 0, 0, 0],
  ['Dokumentvorlagen bearbeiten', 1, 1, 0, 0, 0, 0],
  ['Einstellungen & Benutzer', 1, 0, 0, 0, 0, 0],
  ['Journal & Transaktionen einsehen', 1, 1, 1, 1, 0, 1],
  ['Kassen anlegen & bearbeiten', 1, 1, 0, 0, 0, 0],
  ['Kunden verwalten', 1, 1, 1, 1, 0, 0],
  ['Lieferanten verwalten', 1, 1, 0, 0, 0, 1],
  ['Preis manuell ändern', 1, 1, 0, 0, 0, 1],
  ['QR-Etiketten drucken', 1, 1, 1, 1, 0, 1],
  ['Rabatt gewähren', 1, 1, 1, 1, 0, 0],
  ['Rechnungskauf freigeben', 1, 1, 0, 0, 0, 0],
  ['Shop-Einstellungen bearbeiten', 1, 0, 0, 0, 0, 0],
  ['Storno / Retoure', 1, 1, 1, 1, 0, 0],
  ['Systemprotokoll einsehen', 1, 1, 1, 0, 0, 0],
  ['Systemsprache festlegen', 1, 0, 0, 0, 0, 0],
  ['Tagesabschluss / Kassenschnitt', 1, 1, 0, 0, 0, 0],
  ['Transaktionsstatus ändern', 1, 1, 0, 0, 0, 0],
  ['TSE & Exporte', 1, 0, 0, 0, 0, 0],
  ['Umsatz-Dashboard einsehen', 1, 1, 1, 0, 0, 1],
  ['Verkauf kassieren', 1, 1, 1, 1, 1, 0]
];

const ERP_SYSTEME = ['zykol.ERP', 'DATEV', 'SAP Business One', 'Lexware', 'weclapp', 'Odoo', 'Individuell (REST)'];

const LAGER = ['Alle Lagerorte', 'Verkaufsfläche', 'Hauptlager', 'Werkstatt'];
const RESERVIERT = {p1: 1, p3: 1, p5: 2, p7: 3, p9: 2, p11: 4};
const ZIEL_BESTAND = {p1: 3, p2: 2, p3: 4, p4: 3, p5: 10, p6: 6, p7: 14, p8: 20, p9: 12, p10: 8, p11: 24, p12: 6};

const BEWEGUNGEN = [
  {text: 'Wareneingang Nelo K1 Vanquish 5', menge: '+2', zeit: '27.08. 09:40', nutzer: 'Marko', color: '#0d5f38'},
  {text: 'Verkauf Brača IV 750 · Beleg B-2026-0418', menge: '−1', zeit: '27.08. 14:32', nutzer: 'Marko', color: '#9b1520'},
  {text: 'Umlagerung Jantex Gamma 840 → Verkaufsfläche', menge: '3', zeit: '27.08. 11:05', nutzer: 'Anke', color: '#1f2329'},
  {text: 'Inventurkorrektur Jantex Alpha 820', menge: '−1', zeit: '26.08. 18:20', nutzer: 'Anke', color: '#545b66'},
  {text: 'Wareneingang Brača IV 705', menge: '+4', zeit: '26.08. 08:55', nutzer: 'Marko', color: '#0d5f38'},
  {text: 'Retoure Jantex Beta 810', menge: '+1', zeit: '25.08. 16:10', nutzer: 'Marko', color: '#0d5f38'}
];

const KD_TYPEN = ['Alle', 'Privat', 'Verein', 'Firma', 'Verband', 'Schule'];

const TX_FILTER = [
  {id:'alle', label:'Alle'}, {id:'heute', label:'Heute'}, {id:'Karte', label:'Karte'},
  {id:'Bar', label:'Bar'}, {id:'Rechnung', label:'Rechnung'}, {id:'Storniert', label:'Storniert'}
];

const demoDE = s => { if (!/\d\d\.\d{4}$/.test(s || '')) return s; const a = demoISO(KAL_START(s)), b = demoISO(KAL_ISO(s)), f = x => x.slice(6, 8) + '.' + x.slice(4, 6) + '.' + x.slice(0, 4); return a === b ? f(a) : f(a) + '–' + f(b); };
[VERKAUFTE_BOOTE, LIEFERANTEN, SERIEN, SN_HISTORIE, PROTOKOLL, BACKUPS, KUNDEN, KAL_TERMINE, ANGEBOTE_START, KAEUFE, KUNDENBOOTE, BENUTZER_START, SCHICHT_START, LAGER, RESERVIERT, BEWEGUNGEN, ZEITRAUM, FZ].forEach(o => D_WALK(o, DEMO_OFF));
D_WALK(TX, DEMO_OFF_TX);
// Sonntage und Feiertage (Niedersachsen, Standort Syke) bleiben frei: Termine und Aufgaben rücken auf den nächsten Werktag. Ausnahme: Regatten.
const FEIERTAGE = (() => { const c = {}; return y => { if (c[y]) return c[y];
  const a = y % 19, b = Math.floor(y / 100), cc = y % 100, d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30,
    i = Math.floor(cc / 4), k = cc % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451), mo = Math.floor((h + l - 7 * m + 114) / 31), da = (h + l - 7 * m + 114) % 31 + 1;
  const ostern = new Date(y, mo - 1, da), o = n => D_ISO(new Date(y, mo - 1, da + n));
  return c[y] = { [y + '0101']: 'Neujahr', [o(-2)]: 'Karfreitag', [o(1)]: 'Ostermontag', [y + '0501']: 'Tag der Arbeit', [o(39)]: 'Christi Himmelfahrt', [o(50)]: 'Pfingstmontag',
    [y + '1003']: 'Tag der Deutschen Einheit', [y + '1031']: 'Reformationstag', [y + '1225']: '1. Weihnachtstag', [y + '1226']: '2. Weihnachtstag' }; }; })();
const I_DATE = t => new Date(+t.slice(0, 4), +t.slice(4, 6) - 1, +t.slice(6, 8));
const FREI = t => { if (!/^\d{8}$/.test(t || '')) return ''; const f = FEIERTAGE(+t.slice(0, 4))[t]; return f || (I_DATE(t).getDay() === 0 ? 'Sonntag' : ''); };
const WERKTAG = t => { if (!/^\d{8}$/.test(t || '')) return t; let d = I_DATE(t), n = 0; while (FREI(D_ISO(d)) && n++ < 10) d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1); return D_ISO(d); };
const WERKTAG_DE = s => { if (!/^\d\d\.\d\d\.\d{4}$/.test(s || '')) return s; const w = WERKTAG(KAL_ISO(s)); return w.slice(6, 8) + '.' + w.slice(4, 6) + '.' + w.slice(0, 4); };
const KAL_FREIRUECKEN = () => KAL_TERMINE.forEach(t => {
  const a = KAL_START(t[2]), b = KAL_ISO(t[2]); if (!/^\d{8}$/.test(a) || !/^\d{8}$/.test(b)) return;
  if (t[0] === 'Regatta') return;   // Regatten finden auch sonn- und feiertags statt, dort wird verkauft
  const n = Math.round((I_DATE(b) - I_DATE(a)) / 86400000); let s0 = I_DATE(a), tries = 0;
  const frei = d => { for (let k = 0; k <= n; k++) if (FREI(D_ISO(new Date(d.getFullYear(), d.getMonth(), d.getDate() + k)))) return true; return false; };
  while (frei(s0) && tries++ < 14) s0 = new Date(s0.getFullYear(), s0.getMonth(), s0.getDate() + 1);
  if (D_ISO(s0) === a) return;
  const e0 = new Date(s0.getFullYear(), s0.getMonth(), s0.getDate() + n);
  t[2] = n === 0 ? D_DE(s0) : s0.getMonth() === e0.getMonth() ? String(s0.getDate()).padStart(2, '0') + '.–' + D_DE(e0) : D_DE(s0).slice(0, 6) + '–' + D_DE(e0);
});
// Regatten aus Kai Kalender (Notion-Datenbank „Regatten“, Europa, Stand 11.10.2026) – echte Termine, werden nicht verschoben.
const KAI_REGATTEN = [["Regatta", "I Giganti Dello Sprint", "02.–04.10.2026", "ganztägig", "Cabras-Oristano-Zeddiani (Italien)", "Kanurennsport · Paddle Worldwide PW-2794 · Quelle: Kai Kalender", "KASSE-03 Mobil"], ["Regatta", "2026 Paddle Europe Canoe Polo Club Championships", "02.–04.10.2026", "ganztägig", "Mailand (Italien)", "Kanupolo · Paddle Worldwide PW-2856 · Quelle: Kai Kalender", "KASSE-03 Mobil"], ["Regatta", "2026 ICF Canoe Slalom World Ranking 1 – Lee Valley", "03.10.2026", "ganztägig", "Lee Valley (Vereinigtes Königreich)", "Kanuslalom · Paddle Worldwide PW-2741 · Quelle: Kai Kalender", "KASSE-03 Mobil"], ["Regatta", "23. Neumuenster Marathon", "03.10.2026", "ganztägig", "Neumünster (Deutschland)", "Marathon · Paddle Worldwide PW-2800 · Quelle: Kai Kalender", "KASSE-03 Mobil"], ["Regatta", "2026 ICF Canoe Slalom World Ranking 2 – Lee Valley", "04.10.2026", "ganztägig", "Lee Valley (Vereinigtes Königreich)", "Kanuslalom · Paddle Worldwide PW-2742 · Quelle: Kai Kalender", "KASSE-03 Mobil"], ["Regatta", "Sile Marathon 2026", "04.10.2026", "ganztägig", "Fiume Sile Casier (Italien)", "Marathon · Paddle Worldwide PW-2911 · Quelle: Kai Kalender", "KASSE-03 Mobil"], ["Regatta", "International Sarcidano Race 2026", "09.–11.10.2026", "ganztägig", "Isili – Lago San Sebastiano (Italien)", "Kanurennsport · Paddle Worldwide PW-2791 · Quelle: Kai Kalender", "KASSE-03 Mobil"], ["Regatta", "2026 Canoe Ocean Racing World Championships", "09.–11.10.2026", "ganztägig", "La Vila Joiosa (Spanien)", "SUP/Ocean · Paddle Worldwide PW-2499 · Quelle: Kai Kalender", "KASSE-03 Mobil"], ["Regatta", "2026 Canoe Slalom – Alpe Adria Cup", "11.10.2026", "ganztägig", "Klagenfurt (Österreich)", "Kanuslalom · Paddle Worldwide PW-2714 · Quelle: Kai Kalender", "KASSE-03 Mobil"], ["Regatta", "2026 Canoe Slalom World Ranking Race – 57th Ilinden Kayak Slalom", "11.10.2026", "ganztägig", "Src.Matka, Skopje (Nordmazedonien)", "Kanuslalom · Paddle Worldwide PW-2830 · Quelle: Kai Kalender", "KASSE-03 Mobil"], ["Regatta", "Taormina SUP Challenge", "13.–18.10.2026", "ganztägig", "Giardini Naxos – Taormina (Italien)", "SUP/Ocean · Paddle Worldwide PW-2795 · Quelle: Kai Kalender", "KASSE-03 Mobil"], ["Regatta", "2026 Stand Up Paddling (SUP) World Championships", "14.–18.10.2026", "ganztägig", "Sabaudia (Italien)", "SUP/Ocean · Paddle Worldwide PW-2503 · Quelle: Kai Kalender", "KASSE-03 Mobil"], ["Regatta", "7. Spreemarathon", "17.–18.10.2026", "ganztägig", "Cottbus/Spree (Deutschland)", "Marathon · Paddle Worldwide PW-2799 · Quelle: Kai Kalender", "KASSE-03 Mobil"], ["Regatta", "Tigullio Ocean Racing Challenge 2026", "17.–18.10.2026", "ganztägig", "Sestri Levante (Italien)", "SUP/Ocean · Paddle Worldwide PW-2796 · Quelle: Kai Kalender", "KASSE-03 Mobil"]];
KAI_REGATTEN.forEach(r => KAL_TERMINE.push(r));
KAL_TERMINE.push(['Lieferung', 'Testboote Plastex für 7. Spreemarathon', '16.10.2026', '13:00', 'Anhänger Regattastand', 'Direktlieferung · 4 × K1 Bullet II', 'KASSE-03 Mobil']);
KAL_FREIRUECKEN();
ANGEBOTE_START.forEach(a => { if (a.status === 'Versendet' || a.status === 'Entwurf') a.gueltig = WERKTAG_DE(a.gueltig); });