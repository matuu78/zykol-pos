/* zykol.POS – Service Worker: hält die App offline verfügbar.
   App-Dateien: aus dem Cache (Version im Dateinamen-Parameter ?v=). Seite: erst Netz, sonst Cache.
   /api/ wird nie zwischengespeichert – Verkäufe laufen über den Ausgang in zk-erp.js.
   Dateiliste und Version setzt werkzeug/zk_app.py beim Bauen. */
const VERSION = /*zk-version*/'12.54'/*/zk-version*/;
const DATEIEN = /*zk-dateien*/["assets/app/01-stile.js", "assets/app/02-anmeldung-navigation.js", "assets/app/03-kasse-bis-boote.js", "assets/app/04-dashboard-kalender-angebote.js", "assets/app/045-werkstatt.js", "assets/app/046-ausschreibungen.js", "assets/app/047-versand.js", "assets/app/048-kassenabschluss.js", "assets/app/049-inventur.js", "assets/app/05-einstellungen.js", "assets/app/06-dialoge.js", "assets/app/07-fusszeile-overlays.js", "assets/app/11-daten-artikel-lieferanten.js", "assets/app/12-daten-transaktionen.js", "assets/app/13-daten-kunden-kalender-rechte.js", "assets/app/14-umsatz-dashboard.js", "assets/app/145-werkstatt.js", "assets/app/146-versand.js", "assets/app/147-erechnung.js", "assets/app/148-ausschreibungen.js", "assets/app/149-urlaub.js", "assets/app/149i-inventur.js", "assets/app/149k-kassenabschluss.js", "assets/app/149m-module.js", "assets/app/149n-news.js", "assets/app/149w-wetter.js", "assets/app/15-komponente.js", "assets/app/16-ansichtswerte.js", "assets/fonts/barlow-400-italic.woff2", "assets/fonts/barlow-400.woff2", "assets/fonts/barlow-500.woff2", "assets/fonts/barlow-600.woff2", "assets/fonts/barlow-700.woff2", "assets/fonts/barlow-condensed-400.woff2", "assets/fonts/barlow-condensed-600-latin-ext.woff2", "assets/fonts/barlow-condensed-600-latin.woff2", "assets/fonts/barlow-condensed-600-vietnamese.woff2", "assets/fonts/barlow-condensed-700-latin-ext.woff2", "assets/fonts/barlow-condensed-700-latin.woff2", "assets/fonts/barlow-condensed-700-vietnamese.woff2", "assets/fonts/barlow-condensed-700.woff2", "assets/fonts/barlow-condensed-800-latin-ext.woff2", "assets/fonts/barlow-condensed-800-latin.woff2", "assets/fonts/barlow-condensed-800-vietnamese.woff2", "assets/fonts/inter-400-cyrillic-ext.woff2", "assets/fonts/inter-400-cyrillic.woff2", "assets/fonts/inter-400-greek-ext.woff2", "assets/fonts/inter-400-greek.woff2", "assets/fonts/inter-400-latin-ext.woff2", "assets/fonts/inter-400-latin.woff2", "assets/fonts/inter-400-vietnamese.woff2", "assets/fonts/poppins-600-devanagari.woff2", "assets/fonts/poppins-600-latin-ext.woff2", "assets/fonts/poppins-600-latin.woff2", "assets/fonts/source-serif-4-400-italic.woff2", "assets/fonts/source-serif-4-400.woff2", "assets/fonts/source-serif-4-600.woff2", "assets/fonts/source-serif-4-700.woff2", "assets/img/flagge-de.svg", "assets/img/flagge-es.svg", "assets/img/flagge-fr.svg", "assets/img/flagge-gb.svg", "assets/img/flagge-pt.svg", "assets/img/zykol-logo-weiss.png", "assets/img/zykol-logo.png", "assets/js/bedienungsanleitung.js", "assets/js/dc-runtime.js", "assets/js/doc-page.js", "assets/js/html2canvas.min.js", "assets/js/pdf-lib.LICENSE.md", "assets/js/pdf-lib.min.js", "assets/js/qrcode.js", "assets/js/react-dom.production.min.js", "assets/js/react.production.min.js", "assets/js/sprachen.js", "assets/js/zk-erp.js", "assets/js/zk-pdf.js", "dokumentvorlage.html", "index.html"]/*/zk-dateien*/;
const CACHE = 'zykol-pos-' + VERSION;

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(['./'].concat(DATEIEN))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((k) => Promise.all(k.filter((n) => n.startsWith('zykol-pos-') && n !== CACHE).map((n) => caches.delete(n))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin || url.pathname.includes('/api/')) return;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then((r) => {
      const kopie = r.clone();
      caches.open(CACHE).then((c) => c.put(req, kopie));
      return r;
    }).catch(() => caches.match(req, {ignoreSearch: true}).then((r) => r || caches.match('./'))));
    return;
  }
  e.respondWith(caches.match(req, {ignoreSearch: true}).then((treffer) => treffer || fetch(req).then((r) => {
    if (r.ok) { const kopie = r.clone(); caches.open(CACHE).then((c) => c.put(req, kopie)); }
    return r;
  })));
});
