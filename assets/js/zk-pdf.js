/* zykol.POS – Drucken als PDF-Vorschau: Bon (80 mm), Etiketten (50 × 24 mm), A4-Dokumente.
   Statt des Druckdialogs wird das Dokument im richtigen Format gerendert und als PDF angezeigt.
   Öffentlich: window.ZK_PDF = {zeigen({url|html, format, titel, auswahl}), erzeugen(...) -> Promise<Blob>}
   format: 'bon' | 'etikett' | 'a4' (ohne Angabe: aus der URL bzw. aus @page im HTML erkannt) */
(function () {
  'use strict';
  var MM = 96 / 25.4;                     // CSS-Pixel je Millimeter
  var PT = 72 / 25.4;                     // PDF-Punkte je Millimeter
  var SKALA = 3, JPEG_Q = 0;                          // Renderschärfe: Bon/Etikett ≈ 290 dpi, A4 ≈ 190 dpi (siehe erzeugen)
  var FORMATE = {
    bon: {breite: 80, label: function () { return t('bon') + ' · 80 mm'; }},
    etikett: {breite: 50, hoehe: 24, label: function () { return t('etikett') + ' · 50 × 24 mm'; }},
    paket: {breite: 100, hoehe: 150, label: function () { return 'Paketlabel · 100 × 150 mm'; }},
    a4: {breite: 210, hoehe: 297, label: function () { return 'A4'; }}
  };
  // Texte in den fünf App-Sprachen (Reihenfolge wie SPR); Sprache aus <html lang>
  var SPR = ['de', 'en', 'fr', 'es', 'pt'];
  var T = {
    erstellt: ['PDF wird erstellt …', 'Creating PDF …', 'Création du PDF …', 'Creando PDF …', 'A criar PDF …'],
    schliessen: ['Schließen', 'Close', 'Fermer', 'Cerrar', 'Fechar'],
    neuerTab: ['In neuem Tab', 'Open in new tab', 'Nouvel onglet', 'Abrir en pestaña', 'Abrir em novo separador'],
    speichern: ['PDF speichern', 'Save PDF', 'Enregistrer le PDF', 'Guardar PDF', 'Guardar PDF'],
    seite: ['Seite', 'page', 'page', 'página', 'página'],
    seiten: ['Seiten', 'pages', 'pages', 'páginas', 'páginas'],
    etiketten: ['Etiketten', 'labels', 'étiquettes', 'etiquetas', 'etiquetas'],
    weitere: ['weitere folgen', 'more to follow', 'd’autres suivent', 'siguen más', 'seguem mais'],
    fehler: ['Fehler', 'Error', 'Erreur', 'Error', 'Erro'],
    fehlerText: ['PDF konnte nicht erstellt werden', 'PDF could not be created', 'Impossible de créer le PDF', 'No se pudo crear el PDF', 'Não foi possível criar o PDF'],
    vorschau: ['PDF-Vorschau', 'PDF preview', 'Aperçu PDF', 'Vista previa PDF', 'Pré-visualização PDF'],
    dokument: ['Dokument', 'Document', 'Document', 'Documento', 'Documento'],
    bon: ['Bon', 'Receipt', 'Ticket', 'Ticket', 'Talão'],
    etikett: ['Etikett', 'Label', 'Étiquette', 'Etiqueta', 'Etiqueta']
  };
  function t(k) { var i = SPR.indexOf((document.documentElement.lang || 'de').slice(0, 2)); return T[k][i < 0 ? 0 : i] || T[k][0]; }
  var BASIS = (function () { var s = document.currentScript; return s ? s.src.replace(/zk-pdf\.js.*$/, '') : 'assets/js/'; })();

  // html2canvas im Rahmen selbst laden: dort gelten die Schriften des Dokuments (sonst falsche Abstände)
  function h2c(win) {
    if (win.html2canvas) return Promise.resolve(win.html2canvas);
    return new Promise(function (ok, nein) {
      var d = win.document, s = d.createElement('script');
      s.src = BASIS + 'html2canvas.min.js';
      s.onload = function () { ok(win.html2canvas); };
      s.onerror = function () { nein(new Error('html2canvas fehlt')); };
      d.head.appendChild(s);
    });
  }
  // SVG-Bilder (QR-Codes) vorab in PNG umwandeln, html2canvas zeichnet sie sonst schwarz
  function svgBilderRastern(d) {
    var imgs = Array.prototype.filter.call(d.images, function (i) { return /^data:image\/svg|\.svg(\?|$)/i.test(i.currentSrc || i.src); });
    return Promise.all(imgs.map(function (i) {
      var w = i.getBoundingClientRect().width, h = i.getBoundingClientRect().height;
      if (!w || !h) return 0;
      return new Promise(function (ok) {
        var b = new Image();
        b.onload = function () {
          var c = d.createElement('canvas'); c.width = Math.round(w * SKALA); c.height = Math.round(h * SKALA);
          var g = c.getContext('2d'); g.imageSmoothingEnabled = false; g.drawImage(b, 0, 0, c.width, c.height);
          i.style.width = w + 'px'; i.style.height = h + 'px';
          i.onload = i.onerror = ok; i.src = c.toDataURL('image/png');
        };
        b.onerror = ok;
        b.src = i.currentSrc || i.src;
      });
    }));
  }

  // ---- PDF aus JPEG-Seiten (eigener kleiner Schreiber, keine Bibliothek) ----
  function pdfAusSeiten(seiten) {
    // seiten: [{jpeg: Uint8Array, px: [w, h], mm: [w, h]}]
    var teile = [], laenge = 0, xref = [];
    var enc = new TextEncoder();
    function schreib(x) { var b = typeof x === 'string' ? enc.encode(x) : x; teile.push(b); laenge += b.length; }
    function obj(n, kopf, strom) {
      xref[n] = laenge;
      schreib(n + ' 0 obj\n' + kopf + '\n');
      if (strom) { schreib('stream\n'); schreib(strom); schreib('\nendstream\n'); }
      schreib('endobj\n');
    }
    schreib('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n');
    var n = seiten.length, kids = [];
    for (var i = 0; i < n; i++) kids.push((3 + i * 3) + ' 0 R');
    obj(1, '<< /Type /Catalog /Pages 2 0 R >>');
    obj(2, '<< /Type /Pages /Kids [' + kids.join(' ') + '] /Count ' + n + ' >>');
    seiten.forEach(function (s, i) {
      var p = 3 + i * 3, w = (s.mm[0] * PT).toFixed(2), h = (s.mm[1] * PT).toFixed(2);
      var inhalt = enc.encode('q ' + w + ' 0 0 ' + h + ' 0 0 cm /Im0 Do Q');
      obj(p, '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ' + w + ' ' + h + '] /Resources << /XObject << /Im0 ' + (p + 2) + ' 0 R >> >> /Contents ' + (p + 1) + ' 0 R >>');
      obj(p + 1, '<< /Length ' + inhalt.length + ' >>', inhalt);
      obj(p + 2, '<< /Type /XObject /Subtype /Image /Width ' + s.px[0] + ' /Height ' + s.px[1] + ' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ' + s.jpeg.length + ' >>', s.jpeg);
    });
    var start = laenge, anz = 3 + n * 3;
    var x = 'xref\n0 ' + anz + '\n0000000000 65535 f \n';
    for (var k = 1; k < anz; k++) x += String(xref[k]).padStart(10, '0') + ' 00000 n \n';
    schreib(x + 'trailer\n<< /Size ' + anz + ' /Root 1 0 R >>\nstartxref\n' + start + '\n%%EOF\n');
    return new Blob(teile, {type: 'application/pdf'});
  }
  function jpeg(canvas, q) {
    var b64 = canvas.toDataURL('image/jpeg', JPEG_Q || q || 0.92).split(',')[1], bin = atob(b64), u = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
    return u;
  }


  // ---- Dokument in einem unsichtbaren Rahmen in Zielbreite aufbauen ----
  function rahmen(breiteMm) {
    var f = document.createElement('iframe');
    f.setAttribute('aria-hidden', 'true');
    f.setAttribute('style', 'position:fixed;left:-10000px;top:0;border:0;background:#fff;width:' + Math.ceil(breiteMm * MM) + 'px;height:1200px;');
    document.body.appendChild(f);
    return f;
  }
  function warten(ms) { return new Promise(function (ok) { setTimeout(ok, ms); }); }
  function geladen(f, url, html) {
    return new Promise(function (ok) {
      f.onload = function () { ok(); };
      if (url) f.src = url;
      else { var d = f.contentDocument; d.open(); d.write(html); d.close(); if (d.readyState === 'complete') setTimeout(ok, 0); }
    }).then(function () {
      var d = f.contentDocument;
      return (d.fonts && d.fonts.ready ? d.fonts.ready : Promise.resolve()).then(function () {
        return Promise.all(Array.prototype.map.call(d.images, function (i) {
          return i.complete ? 0 : new Promise(function (ok) { i.onload = i.onerror = ok; });
        }));
      });
    });
  }
  function formatErkennen(o) {
    if (o.format) return o.format;
    if (o.url) return /#beleg\b/.test(o.url) ? 'bon' : 'a4';
    var m = /@page\s*\{[^}]*size:\s*([\d.]+)mm\s+([\d.]+)mm/.exec(o.html || '');
    if (m && +m[1] > 90 && +m[1] <= 115 && +m[2] >= 140 && +m[2] <= 210) { o.mm = [+m[1], +m[2]]; return 'paket'; }
    if (m) return +m[1] <= 60 ? 'etikett' : +m[1] <= 90 ? 'bon' : 'a4';
    return 'a4';
  }

  // Druckansicht im Rahmen erzwingen: @media print-Regeln gelten bei html2canvas nicht.
  // Gibt den Seitenrand [oben/unten, links/rechts] in mm zurück (aus doc-page bzw. @page).
  function druckStileAktivieren(d, html) {
    var rand = null;
    Array.prototype.forEach.call(d.styleSheets, function (sh) {
      var regeln; try { regeln = sh.cssRules; } catch (e) { return; }
      var extra = [];
      Array.prototype.forEach.call(regeln || [], function (r) {
        if (r.media && /\bprint\b/.test(r.media.mediaText)) Array.prototype.forEach.call(r.cssRules, function (x) { extra.push(x.cssText); });
      });
      if (extra.length) { var s = d.createElement('style'); s.textContent = extra.join('\n'); d.head.appendChild(s); }
    });
    var m = /@page\s*\{[^}]*margin:\s*([^;}]+)/.exec(html || '');
    if (m) rand = m[1];
    // doc-page (Shadow-DOM) durch einen schlichten Block ersetzen; der Rand kommt aufs PDF-Blatt
    Array.prototype.forEach.call(d.querySelectorAll('doc-page'), function (dp) {
      rand = rand || dp.getAttribute('margin') || '18mm';
      var blatt = d.createElement('div');
      blatt.className = 'zk-pdf-blatt';
      while (dp.firstChild) blatt.appendChild(dp.firstChild);
      dp.parentNode.replaceChild(blatt, dp);
    });
    var s = d.createElement('style');
    s.textContent = 'html,body{margin:0 !important;padding:0 !important;background:#fff !important}.no-print,[data-no-print]{display:none !important}'
      // Canvas kennt keine tabellarischen Ziffern: sonst entstehen Lücken zwischen Textstücken
      + '*{font-variant-numeric:normal !important;font-feature-settings:normal !important}';
    d.head.appendChild(s);
    var w = String(rand || '15mm').trim().split(/\s+/).map(function (x) { return parseFloat(x) || 0; });
    return [w[0], w.length > 1 ? w[1] : w[0]];
  }

  // Mögliche Seitenumbrüche (in CSS-Pixeln ab Oberkante des Ziels): Unterkanten von Blöcken,
  // erzwungene Umbrüche vor Elementen mit break-before/page-break-before oder [data-seite]; nicht innerhalb von [data-pdf-zusammen]
  function umbrueche(d, ziel) {
    var win = d.defaultView, oben = ziel.getBoundingClientRect().top, frei = [], fest = [];
    Array.prototype.forEach.call(ziel.querySelectorAll('*'), function (el) {
      var cs = win.getComputedStyle(el);
      if (cs.display === 'inline' || cs.display === 'none') return;
      var r = el.getBoundingClientRect();
      if (!r.height) return;
      // nach Überschriften nicht umbrechen, sonst stehen sie allein am Seitenende
      if (!/^H[1-6]$/.test(el.tagName)) frei.push(r.bottom - oben);
      if (/page|always/.test(cs.breakBefore + ' ' + cs.pageBreakBefore) || (el.matches('[data-seite]') && el.previousElementSibling && el.previousElementSibling.matches('[data-seite]'))) fest.push(r.top - oben);
      if (/page|always/.test(cs.breakAfter + ' ' + cs.pageBreakAfter)) fest.push(r.bottom - oben);
    });
    // Blöcke mit data-pdf-zusammen (Summen, Hinweise mit QR-Code …) nicht teilen
    var bloecke = Array.prototype.map.call(ziel.querySelectorAll('[data-pdf-zusammen]'), function (el) { var r = el.getBoundingClientRect(); return [r.top - oben, r.bottom - oben]; });
    frei = frei.filter(function (v) { return !bloecke.some(function (b) { return v > b[0] + 1 && v < b[1] - 1; }); });
    var zahl = function (a, b) { return a - b; };
    return {frei: frei.sort(zahl), fest: fest.filter(function (y) { return y > 1; }).sort(zahl)};
  }
  function a4Seiten(c, br, rand, F) {
    var px = SKALA * MM, hoeheCss = c.height / SKALA;
    // nur bis zur Unterkante des Inhalts aufteilen – sonst entsteht bei kurzen Dokumenten eine leere Folgeseite (v12.46)
    var inhalt = br.frei.concat(br.fest); if (inhalt.length) hoeheCss = Math.min(hoeheCss, Math.max.apply(null, inhalt) + 4);
    var nutzH = (F.hoehe - 2 * rand[0]) * MM, seiten = [], y = 0;
    while (y < hoeheCss - 2) {
      var grenze = y + nutzH, ende = grenze;
      var f = br.fest.filter(function (v) { return v > y + 1 && v <= grenze; })[0];
      if (f) ende = f;
      else if (grenze < hoeheCss) {
        var gut = br.frei.filter(function (v) { return v > y + nutzH * 0.5 && v <= grenze; });
        if (gut.length) ende = gut[gut.length - 1];
      } else ende = hoeheCss;
      var blatt = document.createElement('canvas');
      blatt.width = Math.round(F.breite * px); blatt.height = Math.round(F.hoehe * px);
      var g = blatt.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, blatt.width, blatt.height);
      var sy = Math.round(y * SKALA), sh = Math.min(Math.round((ende - y) * SKALA), c.height - sy);
      if (sh > 0) g.drawImage(c, 0, sy, c.width, sh, Math.round(rand[1] * px), Math.round(rand[0] * px), c.width, sh);
      seiten.push({jpeg: jpeg(blatt, 0.8), px: [blatt.width, blatt.height], mm: [F.breite, F.hoehe]});
      y = ende;
    }
    return seiten;
  }

  // ---- A4 mit laufendem Kopf und Fuß (doc-page: slot="header"/"footer") ----
  // Kopf auf jeder Seite oben, Fuß unten mit 10 mm Abstand zum Blattrand; geht eine Seite mitten in der
  // Positionstabelle ([data-pdf-tabelle], Zeilen mit data-pdf-betrag) zu Ende, stehen dort Zwischensumme
  // und Übertrag, auf der Folgeseite Übertrag und Tabellenkopf.
  var FUSS_RAND = 10, ABSTAND = 6, ZS_H = 13, UE_H = 9;
  function eur(n) { return n.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' €'; }
  function tabelle(ziel) {
    var t = ziel.querySelector('[data-pdf-tabelle]'), k = t && t.querySelector('[data-pdf-tkopf]');
    if (!k) return null;
    var o = ziel.getBoundingClientRect().top, kr = k.getBoundingClientRect();
    var zeilen = Array.prototype.map.call(t.querySelectorAll('[data-pdf-betrag]'), function (z) {
      var r = z.getBoundingClientRect();
      return {oben: r.top - o, unten: r.bottom - o, betrag: parseFloat(z.getAttribute('data-pdf-betrag')) || 0};
    });
    if (!zeilen.length) return null;
    return {kopfOben: kr.top - o, kopfH: kr.height, zeilen: zeilen, anfang: zeilen[0].oben, ende: zeilen[zeilen.length - 1].unten};
  }
  function a4Plan(H, br, tab, rand, F, kopfH, fussH) {
    var oben = rand[0] * MM + (kopfH ? kopfH + ABSTAND * MM : 0);
    var unten = fussH ? (F.hoehe - FUSS_RAND) * MM - fussH - ABSTAND * MM : (F.hoehe - rand[0]) * MM;
    var imTab = function (v) { return tab && v > tab.anfang + 1 && v < tab.ende - 1; };
    var zeilenEnde = function (v) { return tab.zeilen.some(function (z) { return Math.abs(z.unten - v) < 1; }); };
    var plan = [], y = 0, fort = null;
    while (y < H - 2) {
      var platz = unten - oben - (fort !== null ? UE_H * MM + tab.kopfH : 0), grenze = y + platz, ende;
      if (grenze >= H) ende = H;
      else {
        if (tab && grenze > tab.anfang && grenze < tab.ende) grenze -= ZS_H * MM;
        var f = br.fest.filter(function (v) { return v > y + 1 && v <= grenze; })[0];
        if (f) ende = f;
        else {
          var gut = br.frei.filter(function (v) {
            return v > y + platz * 0.4 && v <= grenze && !(tab && v > tab.kopfOben - 1 && v < tab.zeilen[0].unten - 1) && (!imTab(v) || zeilenEnde(v));
          });
          ende = gut.length ? gut[gut.length - 1] : grenze;
        }
      }
      var summe = null;
      if (ende < H && imTab(ende)) summe = tab.zeilen.reduce(function (a, z) { return z.unten <= ende + 1 ? a + z.betrag : a; }, 0);
      plan.push({y: y, ende: ende, uebertrag: fort, zwischensumme: summe});
      fort = summe; y = ende;
    }
    return plan;
  }
  function a4Blatt(c, s, i, n, kopfC, kopfH, fussC, tab, rand, F) {
    var px = SKALA * MM, S = SKALA;
    var blatt = document.createElement('canvas');
    blatt.width = Math.round(F.breite * px); blatt.height = Math.round(F.hoehe * px);
    var g = blatt.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, blatt.width, blatt.height);
    var x0 = Math.round(rand[1] * px), rechts = x0 + c.width, y = Math.round(rand[0] * px);
    var text = function (t, x, yy, fett, gross, farbe, ausr) {
      g.font = (fett ? '700 ' : '400 ') + (gross * S) + 'px Inter, Arial, sans-serif';
      g.fillStyle = farbe; g.textAlign = ausr; g.textBaseline = 'alphabetic'; g.fillText(t, x, yy);
    };
    if (kopfC) { g.drawImage(kopfC, x0, y); y += Math.round((kopfH + ABSTAND * MM) * S); }
    if (s.uebertrag !== null) {
      text('Übertrag von Seite ' + i + ': ' + eur(s.uebertrag), rechts, y + 5 * px, true, 12.7, '#101010', 'right');
      y += Math.round(UE_H * px);
      g.drawImage(c, 0, Math.round(tab.kopfOben * S), c.width, Math.round(tab.kopfH * S), x0, y, c.width, Math.round(tab.kopfH * S));
      y += Math.round(tab.kopfH * S);
    }
    var sy = Math.round(s.y * S), sh = Math.min(Math.round((s.ende - s.y) * S), c.height - sy);
    if (sh > 0) { g.drawImage(c, 0, sy, c.width, sh, x0, y, c.width, sh); y += sh; }
    if (s.zwischensumme !== null) {
      text('Zwischensumme / Übertrag: ' + eur(s.zwischensumme), rechts, y + 5.5 * px, true, 12.7, '#101010', 'right');
      text('Fortsetzung auf Seite ' + (i + 2), x0, y + 11 * px, false, 11.3, '#545b66', 'left');
    }
    if (fussC) g.drawImage(fussC, x0, Math.round((F.hoehe - FUSS_RAND) * px) - fussC.height);
    return {jpeg: jpeg(blatt, 0.8), px: [blatt.width, blatt.height], mm: [F.breite, F.hoehe]};
  }
  function a4Laufend(d, ziel, kopf, fuss, zeichne, opt, rand, F) {
    var seiteEl = kopf && kopf.querySelector('.zk-pdf-seite');
    var kopfZeichnen = function (txt) {
      if (seiteEl) { seiteEl.textContent = txt; seiteEl.style.display = txt ? 'block' : 'none'; }
      return kopf ? zeichne(kopf, opt) : Promise.resolve(null);
    };
    var kopfC, fussC, kAnz = kopf && kopf.style.display, fAnz = fuss && fuss.style.display;
    // Kopf mit Seitenzeile messen (größte Höhe), damit alle Seiten denselben Satzspiegel haben
    return kopfZeichnen(seiteEl ? 'Seite 9 von 9' : '').then(function (k) { kopfC = k; return fuss ? zeichne(fuss, opt) : null; }).then(function (fc) {
      fussC = fc;
      if (kopf) kopf.style.display = 'none';
      if (fuss) fuss.style.display = 'none';
      return warten(60);
    }).then(function () {
      var br = umbrueche(d, ziel), tab = tabelle(ziel), kopfH = kopfC ? kopfC.height / SKALA : 0;
      return zeichne(ziel, opt).then(function (c) {
        // nur bis zur Unterkante des Inhalts planen – sonst entsteht eine leere Folgeseite (wie a4Seiten, v12.64)
        var H = c.height / SKALA, inhalt = br.frei.concat(br.fest); if (inhalt.length) H = Math.min(H, Math.max.apply(null, inhalt) + 4);
        var plan = a4Plan(H, br, tab, rand, F, kopfH, fussC ? fussC.height / SKALA : 0), koepfe = [];
        // letzte Seite ohne eigenen Inhalt (nur Restabstand) weglassen
        while (plan.length > 1 && !inhalt.some(function (v) { var s = plan[plan.length - 1]; return v > s.y + 2 && v <= s.ende + 1; })) plan.pop();
        if (kopf) kopf.style.display = kAnz;
        return plan.reduce(function (p, s, i) {
          return p.then(function () { return kopfZeichnen(plan.length > 1 ? 'Seite ' + (i + 1) + ' von ' + plan.length : '').then(function (k) { koepfe.push(k); }); });
        }, Promise.resolve()).then(function () {
          if (fuss) fuss.style.display = fAnz;
          return plan.map(function (s, i) { return a4Blatt(c, s, i, plan.length, koepfe[i], kopfH, fussC, tab, rand, F); });
        });
      });
    });
  }

  // Bisheriger Weg (bis v12.65): Seiten mit html2canvas als JPEG – nur noch Rückfallebene
  function erzeugenRaster(o) {
    var format = formatErkennen(o), F = FORMATE[format] || FORMATE.a4;
    // Paketlabel in der Größe aus @page (DHL 103 × 199, DPD 105 × 148, UPS 101,6 × 152,4, Thermo 100 × 150)
    if (format === 'paket' && o.mm) F = {breite: o.mm[0], hoehe: o.mm[1], label: function () { return 'Paketlabel · ' + String(o.mm[0]).replace('.', ',') + ' × ' + String(o.mm[1]).replace('.', ',') + ' mm'; }};
    SKALA = o.skala || (format === 'a4' ? 2 : 3);
    JPEG_Q = o.qualitaet || 0;
    var f = rahmen(F.breite);
    var zeichne, d, rand = [0, 0];
    return geladen(f, o.url, o.html).then(function () { return warten(o.url ? 1300 : 300); }).then(function () {
      d = f.contentDocument;
      rand = druckStileAktivieren(d, o.html);
      // A4: im Rahmen nur die Satzbreite (Blatt minus Rand) setzen, der Rand kommt beim Zusammensetzen dazu
      if (format === 'a4') f.style.width = Math.ceil((F.breite - 2 * rand[1]) * MM) + 'px';
      return warten(60);
    }).then(function () {
      f.style.height = Math.max(400, d.documentElement.scrollHeight) + 'px';
      return Promise.all([h2c(f.contentWindow), svgBilderRastern(d)]);
    }).then(function (r) {
      zeichne = r[0];
      return warten(80).then(function () {
        var opt = {scale: SKALA, backgroundColor: '#ffffff', useCORS: true, logging: false, windowWidth: f.clientWidth};
        if (format === 'etikett') {
          var els = d.querySelectorAll(o.auswahl || '.l');
          if (!els.length) els = [d.body];
          return Array.prototype.reduce.call(els, function (p, el) {
            return p.then(function (liste) {
              return zeichne(el, opt).then(function (c) { liste.push({jpeg: jpeg(c), px: [c.width, c.height], mm: [F.breite, F.hoehe]}); return liste; });
            });
          }, Promise.resolve([]));
        }
        // Paketlabel (100 × 150 mm, DHL/UPS/DPD): eine Seite in fester Größe
        if (format === 'paket') return zeichne(d.body, opt).then(function (c) { return [{jpeg: jpeg(c), px: [c.width, c.height], mm: [F.breite, F.hoehe]}]; });
        var ziel = (o.auswahl && d.querySelector(o.auswahl)) || (format === 'bon' && d.querySelector('.bon')) || d.querySelector('.zk-pdf-blatt') || d.body;
        var kopf = format === 'a4' && ziel.querySelector('[slot="header"]'), fuss = format === 'a4' && ziel.querySelector('[slot="footer"]');
        if (kopf || fuss) return a4Laufend(d, ziel, kopf, fuss, zeichne, opt, rand, F);
        var br = format === 'a4' ? umbrueche(d, ziel) : null;
        return zeichne(ziel, opt).then(function (c) {
          if (format === 'bon') return [{jpeg: jpeg(c), px: [c.width, c.height], mm: [F.breite, c.height / SKALA / MM]}];
          return a4Seiten(c, br, rand, F);
        });
      });
    }).then(function (seiten) { f.remove(); return {blob: pdfAusSeiten(seiten), format: format, seiten: seiten.length, F: F}; },
      function (e) { f.remove(); throw e; });
  }

  // =====================================================================================================
  // ---- Vektor-PDF (ab v12.66): echter Text mit eingebetteten Schriften statt Seitenfotos ----
  // Das Dokument wird wie bisher im unsichtbaren Rahmen aufgebaut. Statt es abzufotografieren, werden
  // Flächen, Rahmenlinien, Texte (Zeile für Zeile, an der gemessenen Stelle) und Bilder (Logo, QR-Code,
  // Barcode) ausgelesen und als PDF-Befehle geschrieben. Ergebnis: durchsuchbar, kopierbar, scharf,
  // kleiner – und als PDF/A-3b aufgebaut (Schriften eingebettet, sRGB-Ausgabeprofil, XMP), damit eine
  // ZUGFeRD- oder XRechnung-XML als Anhang hinein kann. Schlägt etwas fehl, greift der alte Bildweg.
  var PX = 0.75;                                       // PDF-Punkte je CSS-Pixel
  var SCHRIFT = {r: 'ZKInterRegular', m: 'ZKInterMedium', s: 'ZKInterSemiBold', b: 'ZKInterBold', p: 'ZKPoppinsSemiBold'};
  var SCHRIFT_BASIS = BASIS.replace(/js\/?$/, 'fonts/pdf/');
  var schriftCache = {};
  // sRGB-Profil (Compact-ICC-Profiles, CC0) für das PDF/A-Ausgabeprofil
  var SRGB = 'AAAByGxjbXMCEAAAbW50clJHQiBYWVogB+IAAwAUAAkADgAdYWNzcE1TRlQAAAAAc2F3c2N0cmwAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y1oYW5knZEAPUCAsD1AdCyBnqUijgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJZGVzYwAAAPAAAABfY3BydAAAAQwAAAAMd3RwdAAAARgAAAAUclhZWgAAASwAAAAUZ1hZWgAAAUAAAAAUYlhZWgAAAVQAAAAUclRSQwAAAWgAAABgZ1RSQwAAAWgAAABgYlRSQwAAAWgAAABgZGVzYwAAAAAAAAAFdVJHQgAAAAAAAAAAAAAAAHRleHQAAAAAQ0MwAFhZWiAAAAAAAADzVAABAAAAARbJWFlaIAAAAAAAAG+gAAA48gAAA49YWVogAAAAAAAAYpYAALeJAAAY2lhZWiAAAAAAAAAkoAAAD4UAALbEY3VydgAAAAAAAAAqAAAAfAD4AZwCdQODBMkGTggSChgMYg70Ec8U9hhqHC4gQySsKWoufjPrObM/1kZXTTZUdlwXZB1shnVWfo2ILJI2nKunjLLbvpnKx9dl5Hfx+f//';

  function b64Bytes(s) { var b = atob(s), u = new Uint8Array(b.length); for (var i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return u; }
  function hex2(n) { return (n < 16 ? '0' : '') + n.toString(16); }
  function hex4(n) { return ('000' + n.toString(16)).slice(-4); }

  // ---- TrueType lesen (Zeichen → Glyphe, Breiten, Kennwerte) und auf die benutzten Glyphen verkleinern ----
  function ttfLesen(buf) {
    var dv = new DataView(buf), n = dv.getUint16(4), T = {};
    for (var i = 0; i < n; i++) {
      var p = 12 + i * 16, tag = String.fromCharCode(dv.getUint8(p), dv.getUint8(p + 1), dv.getUint8(p + 2), dv.getUint8(p + 3));
      T[tag] = {o: dv.getUint32(p + 8), l: dv.getUint32(p + 12)};
    }
    var upm = dv.getUint16(T.head.o + 18), k = 1000 / upm, s16 = function (o) { return dv.getInt16(o); }, u16 = function (o) { return dv.getUint16(o); };
    var nhm = u16(T.hhea.o + 34), ng = u16(T.maxp.o + 4), langLoca = s16(T.head.o + 50) === 1;
    var cmap = {};
    (function () {
      var o = T.cmap.o, anz = u16(o + 2), beste = -1, fmt = 0;
      for (var j = 0; j < anz; j++) {
        var pl = u16(o + 4 + j * 8), en = u16(o + 6 + j * 8), off = dv.getUint32(o + 8 + j * 8), f = u16(o + off);
        if (pl === 3 && en === 10 && f === 12) { beste = o + off; fmt = 12; break; }
        if (pl === 3 && en === 1 && f === 4 && fmt !== 12) { beste = o + off; fmt = 4; }
      }
      if (fmt === 12) {
        var gr = dv.getUint32(beste + 12);
        for (var g = 0; g < gr; g++) {
          var a = dv.getUint32(beste + 16 + g * 12), b = dv.getUint32(beste + 20 + g * 12), id = dv.getUint32(beste + 24 + g * 12);
          for (var c = a; c <= b; c++) cmap[c] = id + c - a;
        }
      } else if (fmt === 4) {
        var seg = u16(beste + 6) / 2, ende = beste + 14, anf = ende + seg * 2 + 2, del = anf + seg * 2, ro = del + seg * 2;
        for (var sI = 0; sI < seg; sI++) {
          var e = u16(ende + sI * 2), st = u16(anf + sI * 2), dl = s16(del + sI * 2), r = u16(ro + sI * 2);
          for (var cc = st; cc <= e && cc !== 0xFFFF; cc++) {
            var gid = r ? u16(ro + sI * 2 + r + (cc - st) * 2) : cc;
            if (r && gid) gid = (gid + dl) & 0xFFFF; else if (!r) gid = (cc + dl) & 0xFFFF;
            if (gid) cmap[cc] = gid;
          }
        }
      }
    })();
    var loca = [];
    for (var L = 0; L <= ng; L++) loca.push(langLoca ? dv.getUint32(T.loca.o + L * 4) : u16(T.loca.o + L * 2) * 2);
    var os2 = T['OS/2'] ? T['OS/2'].o : 0;
    return {
      buf: buf, T: T, upm: upm, ng: ng, loca: loca, cmap: cmap,
      asc: s16(T.hhea.o + 4) * k, desc: s16(T.hhea.o + 6) * k,
      cap: os2 && u16(os2) >= 2 ? s16(os2 + 88) * k : 700,
      bbox: [s16(T.head.o + 36) * k, s16(T.head.o + 38) * k, s16(T.head.o + 40) * k, s16(T.head.o + 42) * k].map(Math.round),
      breite: function (g) { return u16(T.hmtx.o + 4 * (g < nhm ? g : nhm - 1)) * k; }
    };
  }
  // Glyphen, die nicht gebraucht werden, leeren (Glyphennummern bleiben gleich) – macht aus ~55 KB je Schrift wenige KB
  function ttfVerkleinern(f, benutzt) {
    var src = new Uint8Array(f.buf), dv = new DataView(f.buf), glyf = f.T.glyf.o, alle = {0: 1}, stapel = Object.keys(benutzt).map(Number);
    while (stapel.length) {
      var g = stapel.pop(); if (alle[g] || g >= f.ng) continue; alle[g] = 1;
      var a = f.loca[g], b = f.loca[g + 1];
      if (b > a && dv.getInt16(glyf + a) < 0) {               // zusammengesetzte Glyphe (z. B. Umlaut): Teile mitnehmen
        var p = glyf + a + 10, fl;
        do {
          fl = dv.getUint16(p); stapel.push(dv.getUint16(p + 2)); p += 4 + (fl & 1 ? 4 : 2) + (fl & 8 ? 2 : fl & 0x40 ? 4 : fl & 0x80 ? 8 : 0);
        } while (fl & 0x20);
      }
    }
    var teile = [], neueLoca = [0], pos = 0;
    for (var i = 0; i < f.ng; i++) {
      if (alle[i]) { var st = f.loca[i], en = f.loca[i + 1], len = en - st; if (len) { teile.push(src.subarray(glyf + st, glyf + en)); pos += len; if (len % 4) { var pad = 4 - len % 4; teile.push(new Uint8Array(pad)); pos += pad; } } }
      neueLoca.push(pos);
    }
    var neuGlyf = new Uint8Array(pos), q = 0; teile.forEach(function (t) { neuGlyf.set(t, q); q += t.length; });
    var neuLoca = new Uint8Array(neueLoca.length * 4), ldv = new DataView(neuLoca.buffer);
    neueLoca.forEach(function (v, j) { ldv.setUint32(j * 4, v); });
    var tabellen = {};
    ['head', 'hhea', 'maxp', 'hmtx', 'cmap', 'OS/2', 'post', 'name', 'cvt ', 'fpgm', 'prep'].forEach(function (t) {
      if (f.T[t]) tabellen[t] = src.slice(f.T[t].o, f.T[t].o + f.T[t].l);
    });
    new DataView(tabellen.head.buffer).setInt16(50, 1);          // lange loca
    new DataView(tabellen.head.buffer).setUint32(8, 0);          // checkSumAdjustment neu
    tabellen.glyf = neuGlyf; tabellen.loca = neuLoca;
    var namen = Object.keys(tabellen).sort(), n = namen.length, kopf = 12 + n * 16, groesse = kopf;
    namen.forEach(function (t) { groesse += (tabellen[t].length + 3) & ~3; });
    var aus = new Uint8Array(groesse), odv = new DataView(aus.buffer), es = Math.floor(Math.log2(n));
    odv.setUint32(0, 0x00010000); odv.setUint16(4, n); odv.setUint16(6, 16 * Math.pow(2, es)); odv.setUint16(8, es); odv.setUint16(10, n * 16 - 16 * Math.pow(2, es));
    var summe = function (u) { var s = 0, d = new DataView(u.buffer, u.byteOffset, u.length & ~3); for (var x = 0; x < (u.length & ~3); x += 4) s = (s + d.getUint32(x)) >>> 0; var r = 0; for (var y = u.length & ~3; y < u.length; y++) r |= u[y] << (24 - 8 * (y & 3)); return (s + r) >>> 0; };
    var off = kopf, headOff = 0;
    namen.forEach(function (t, j) {
      var u = tabellen[t];
      for (var c = 0; c < 4; c++) aus[12 + j * 16 + c] = t.charCodeAt(c);
      odv.setUint32(12 + j * 16 + 4, summe(u)); odv.setUint32(12 + j * 16 + 8, off); odv.setUint32(12 + j * 16 + 12, u.length);
      if (t === 'head') headOff = off;
      aus.set(u, off); off += (u.length + 3) & ~3;
    });
    odv.setUint32(headOff + 8, (0xB1B0AFBA - summe(aus)) >>> 0);
    return aus;
  }
  function schriftLaden(k) {
    if (!schriftCache[k]) schriftCache[k] = fetch(SCHRIFT_BASIS + SCHRIFT[k] + '.ttf').then(function (r) {
      if (!r.ok) throw new Error('Schrift ' + SCHRIFT[k] + ' fehlt');
      return r.arrayBuffer();
    }).then(function (b) { var f = ttfLesen(b); f.name = SCHRIFT[k]; f.key = k; return f; });
    return schriftCache[k];
  }
  function schriftWahl(cs) {
    var fam = cs.fontFamily || '', w = parseInt(cs.fontWeight, 10) || 400;
    if (/poppins/i.test(fam)) return 'p';
    return w >= 650 ? 'b' : w >= 550 ? 's' : w >= 450 ? 'm' : 'r';
  }

  // ---- Farben ----
  function farbe(css, deckung) {
    if (!css || css === 'transparent') return null;
    var m = /rgba?\(([^)]+)\)/.exec(css), w;
    if (m) w = m[1].split(/[\s,/]+/).filter(Boolean).map(parseFloat);
    else if ((m = /color\(srgb\s+([^)]+)\)/.exec(css))) { w = m[1].split(/[\s/]+/).filter(Boolean).map(parseFloat); w = [w[0] * 255, w[1] * 255, w[2] * 255, w.length > 3 ? w[3] : 1]; }
    else return null;
    var a = (w.length > 3 ? w[3] : 1) * (deckung == null ? 1 : deckung);
    if (a < 0.02) return null;
    // Halbtransparenz auf weißes Papier gerechnet
    return [0, 1, 2].map(function (i) { return Math.round((255 - a * (255 - w[i])) * 1000 / 255) / 1000; });
  }
  function rg(f, strich) { return f.join(' ') + (strich ? ' RG' : ' rg'); }
  function zahl(n) { return (Math.round(n * 1000) / 1000).toString(); }

  // ---- Dokument auslesen: Flächen, Linien, Texte, Bilder in CSS-Pixeln relativ zu (ox, oy) ----
  function sammeln(d, wurzel, ox, oy) {
    var win = d.defaultView, liste = [], rng = d.createRange();
    function rund(cs, r) {
      var x = parseFloat(cs.borderTopLeftRadius) || 0;
      return Math.min(x, r.width / 2, r.height / 2);
    }
    function element(el, deck, flach) {
      var cs = win.getComputedStyle(el);
      if (cs.display === 'none') return;
      // gedrehte/verschobene Elemente (z. B. „MUSTER“-Stempel): ohne Transformation auslesen, Matrix als Gruppe drumlegen
      if (!flach && cs.transform && cs.transform !== 'none') {
        var mtx = new DOMMatrix(cs.transform), tor = cs.transformOrigin.split(' ').map(parseFloat), aussen = el.getBoundingClientRect();
        var altT = el.style.getPropertyValue('transform'), altP = el.style.getPropertyPriority('transform');
        el.style.setProperty('transform', 'none', 'important');
        var innen = el.getBoundingClientRect(), merk = liste; liste = [];
        element(el, deck, true);
        var gruppe = {t: 'gruppe', liste: liste, m: [mtx.a, mtx.b, mtx.c, mtx.d, mtx.e, mtx.f], o: [innen.left - ox + (tor[0] || 0), innen.top - oy + (tor[1] || 0)], y: aussen.top - oy, h: aussen.height};
        liste = merk;
        if (altT) el.style.setProperty('transform', altT, altP); else el.style.removeProperty('transform');
        if (gruppe.liste.length) liste.push(gruppe);
        return;
      }
      deck *= parseFloat(cs.opacity);
      if (deck < 0.02) return;
      var sichtbar = cs.visibility !== 'hidden', r = el.getBoundingClientRect(), tag = el.tagName;
      if (sichtbar && r.width > 0 && r.height > 0) {
        var box = {x: r.left - ox, y: r.top - oy, w: r.width, h: r.height, rad: rund(cs, r)};
        var bg = farbe(cs.backgroundColor, deck);
        if (bg) liste.push({t: 'flaeche', x: box.x, y: box.y, w: box.w, h: box.h, rad: box.rad, f: bg});
        var seiten = ['Top', 'Right', 'Bottom', 'Left'].map(function (s) {
          return {b: parseFloat(cs['border' + s + 'Width']) || 0, st: cs['border' + s + 'Style'], f: farbe(cs['border' + s + 'Color'], deck)};
        }).map(function (s) { return s.b > 0 && s.f && s.st !== 'none' && s.st !== 'hidden' ? s : null; });
        var gleich = seiten.every(function (s) { return s && s.b === seiten[0].b && s.st === seiten[0].st && s.f.join() === seiten[0].f.join(); });
        if (gleich && box.rad > 0) liste.push({t: 'rahmen', x: box.x, y: box.y, w: box.w, h: box.h, rad: box.rad, b: seiten[0].b, f: seiten[0].f, st: seiten[0].st});
        else seiten.forEach(function (s, i) {
          if (!s) return;
          var L = {t: 'linie', b: s.b, f: s.f, st: s.st};
          if (i === 0) { L.x1 = box.x; L.x2 = box.x + box.w; L.y1 = L.y2 = box.y + s.b / 2; }
          if (i === 2) { L.x1 = box.x; L.x2 = box.x + box.w; L.y1 = L.y2 = box.y + box.h - s.b / 2; }
          if (i === 1) { L.y1 = box.y; L.y2 = box.y + box.h; L.x1 = L.x2 = box.x + box.w - s.b / 2; }
          if (i === 3) { L.y1 = box.y; L.y2 = box.y + box.h; L.x1 = L.x2 = box.x + s.b / 2; }
          liste.push(L);
        });
        if (tag.toLowerCase() === 'svg' && rechteckSvg(el, box, cs, deck)) return;
        if (tag === 'IMG' || tag === 'CANVAS' || tag === 'svg' || tag === 'SVG') {
          // Inhaltsbox ohne Rand und Innenabstand
          var pl = (parseFloat(cs.borderLeftWidth) || 0) + (parseFloat(cs.paddingLeft) || 0), pt = (parseFloat(cs.borderTopWidth) || 0) + (parseFloat(cs.paddingTop) || 0);
          var pr = (parseFloat(cs.borderRightWidth) || 0) + (parseFloat(cs.paddingRight) || 0), pb = (parseFloat(cs.borderBottomWidth) || 0) + (parseFloat(cs.paddingBottom) || 0);
          var bild = {t: 'bild', x: box.x + pl, y: box.y + pt, w: box.w - pl - pr, h: box.h - pt - pb, el: el, farbe: cs.color, fit: cs.objectFit};
          if (bild.w > 0 && bild.h > 0) liste.push(bild);
          return;
        }
      }
      if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEMPLATE' || tag === 'NOSCRIPT') return;
      for (var k = el.firstChild; k; k = k.nextSibling) {
        if (k.nodeType === 1) element(k, deck);
        else if (k.nodeType === 3 && sichtbar) text(k, cs, deck);
      }
    }
    // Barcodes (SVG aus lauter <rect>) als echte Vektorbalken – exakt und beliebig scharf
    function rechteckSvg(el, box, cs, deck) {
      var vb = (el.getAttribute('viewBox') || el.getAttribute('sc-camel-view-box') || '').split(/[\s,]+/).map(parseFloat);
      if (vb.length !== 4 || !vb[2] || !vb[3]) return false;
      var kinder = el.querySelectorAll('*');
      if (!kinder.length || Array.prototype.some.call(kinder, function (k) { return !/^(rect|g|title|desc)$/i.test(k.tagName); })) return false;
      var sx = box.w / vb[2], sy = box.h / vb[3];
      if ((el.getAttribute('preserveAspectRatio') || '') !== 'none') { sx = sy = Math.min(sx, sy); }
      Array.prototype.forEach.call(el.querySelectorAll('rect'), function (r) {
        var f = farbe(win.getComputedStyle(r).fill, deck); if (!f) return;
        var a = function (n) { return parseFloat(r.getAttribute(n)) || 0; };
        liste.push({t: 'flaeche', x: box.x + (a('x') - vb[0]) * sx, y: box.y + (a('y') - vb[1]) * sy, w: a('width') * sx, h: a('height') * sy, rad: 0, f: f});
      });
      return true;
    }
    function text(node, cs, deck) {
      var s = node.data;
      if (!/\S/.test(s)) return;
      var f = farbe(cs.color, deck); if (!f) return;
      var tt = cs.textTransform, fs = parseFloat(cs.fontSize), art = schriftWahl(cs), kursiv = /italic|oblique/.test(cs.fontStyle);
      var wandel = function (x) { x = x.replace(/­/g, ''); return tt === 'uppercase' ? x.toUpperCase() : tt === 'lowercase' ? x.toLowerCase() : x; };
      var stuecke = [], re = /\S+/g, m;
      while ((m = re.exec(s))) {
        rng.setStart(node, m.index); rng.setEnd(node, m.index + m[0].length);
        var rs = rng.getClientRects();
        if (!rs.length) continue;
        if (rs.length === 1) { stuecke.push({s: m[0], r: rs[0], an: false}); continue; }
        // Wort über mehrere Zeilen umbrochen: zeichenweise nach Zeilen aufteilen
        var akt = null;
        for (var i = 0; i < m[0].length; i++) {
          rng.setStart(node, m.index + i); rng.setEnd(node, m.index + i + 1);
          var cr = rng.getClientRects()[0]; if (!cr || !cr.width) { if (akt) akt.s += m[0][i]; continue; }
          if (akt && Math.abs(cr.top - akt.r.top) < 2) { akt.s += m[0][i]; akt.r = {left: akt.r.left, top: akt.r.top, right: cr.right, height: akt.r.height}; }
          else { akt = {s: m[0][i], r: {left: cr.left, top: cr.top, right: cr.right, height: cr.height}, an: !!akt}; stuecke.push(akt); }
        }
      }
      var zeile = null;
      var fertig = function () { if (zeile) liste.push(zeile); zeile = null; };
      stuecke.forEach(function (w) {
        var r = w.r, rechts = r.right;
        if (zeile && Math.abs(r.top - oy - zeile.y) < 2 && r.left >= zeile.rechts - 2) {
          zeile.s += (w.an ? '' : ' ') + wandel(w.s); zeile.w = rechts - ox - zeile.x; zeile.rechts = rechts;
        } else {
          fertig();
          zeile = {t: 'text', x: r.left - ox, y: r.top - oy, h: r.height, w: rechts - r.left, rechts: rechts, s: wandel(w.s), art: art, fs: fs, f: f, kursiv: kursiv};
        }
      });
      fertig();
    }
    var cs0 = win.getComputedStyle(wurzel.parentElement || wurzel), deck0 = 1;
    for (var p = wurzel.parentElement; p; p = p.parentElement) deck0 *= parseFloat(win.getComputedStyle(p).opacity) || 1;
    if (cs0) element(wurzel, deck0);
    return liste;
  }
  function flach(listen, aus) {
    aus = aus || [];
    listen.forEach(function (l) { l.forEach(function (x) { if (x.t === 'gruppe') flach([x.liste], aus); else aus.push(x); }); });
    return aus;
  }
  function textArten(listen) {
    var k = {};
    flach(listen).forEach(function (x) { if (x.t === 'text') k[x.art] = 1; });
    return Object.keys(k);
  }

  // ---- Bilder (Logo, QR, Barcode, Signatur) als RGB + Alphamaske ----
  function bildPixel(it) {
    var el = it.el, tag = el.tagName, d = el.ownerDocument;
    var zeichnen = function (quelle, w, h) {
      var c = document.createElement('canvas'); c.width = Math.max(1, Math.round(w)); c.height = Math.max(1, Math.round(h));
      var g = c.getContext('2d'); g.imageSmoothingEnabled = !it.scharf; g.drawImage(quelle, 0, 0, c.width, c.height);
      return g.getImageData(0, 0, c.width, c.height);
    };
    var skala = 4;   // Vektorquellen (SVG) mit ~380 dpi rastern
    if (tag === 'CANVAS') return Promise.resolve(el.getContext('2d').getImageData(0, 0, el.width, el.height));
    if (tag === 'IMG') {
      var src = el.currentSrc || el.src, svg = /^data:image\/svg|\.svg(\?|$)/i.test(src);
      if (svg) {
        return new Promise(function (ok, nein) {
          var b = new Image(); b.onload = function () { try { ok(zeichnen(b, it.w * skala, it.h * skala)); } catch (e) { nein(e); } }; b.onerror = nein; b.src = src;
        });
      }
      var nw = el.naturalWidth || it.w, nh = el.naturalHeight || it.h, f = Math.min(1, 1600 / Math.max(nw, nh));
      return Promise.resolve(zeichnen(el, nw * f, nh * f));
    }
    // Inline-SVG (Barcodes, Symbole): mit berechneter Farbe als Bild rastern
    var kopie = el.cloneNode(true);
    kopie.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    kopie.setAttribute('width', it.w); kopie.setAttribute('height', it.h);
    kopie.style.color = it.farbe;
    Array.prototype.forEach.call(kopie.querySelectorAll('*'), function (n) { if (n.getAttribute('sc-camel-view-box')) n.setAttribute('viewBox', n.getAttribute('sc-camel-view-box')); });
    if (kopie.getAttribute('sc-camel-view-box')) kopie.setAttribute('viewBox', kopie.getAttribute('sc-camel-view-box'));
    var url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(kopie));
    it.scharf = /barcode|strich/i.test(el.getAttribute('class') || '') || el.querySelectorAll('rect').length > 20;
    return new Promise(function (ok, nein) {
      var b = new Image(); b.onload = function () { try { ok(zeichnen(b, it.w * skala, it.h * skala)); } catch (e) { nein(e); } }; b.onerror = nein; b.src = url;
    });
  }

  // ---- Komprimieren (Flate über CompressionStream, sonst unkomprimiert) ----
  function packen(u) {
    if (typeof CompressionStream === 'undefined' || u.length < 200) return Promise.resolve({d: u, filter: ''});
    var cs = new CompressionStream('deflate');
    var w = cs.writable.getWriter(); w.write(u); w.close();
    return new Response(cs.readable).arrayBuffer().then(function (b) { return {d: new Uint8Array(b), filter: '/Filter /FlateDecode '}; });
  }

  // ---- Seiteninhalt schreiben: Zeichenbefehle in CSS-Pixeln, y nach unten ----
  function Leinwand(pdf) {
    this.pdf = pdf; this.o = [];
  }
  Leinwand.prototype.raus = function (s) { this.o.push(s); };
  Leinwand.prototype.pfadRund = function (x, y, w, h, r) {
    if (!r) { this.raus(zahl(x) + ' ' + zahl(y) + ' ' + zahl(w) + ' ' + zahl(h) + ' re'); return; }
    var k = r * 0.5523, a = [];
    a.push(zahl(x + r) + ' ' + zahl(y) + ' m');
    a.push(zahl(x + w - r) + ' ' + zahl(y) + ' l');
    a.push(zahl(x + w - r + k) + ' ' + zahl(y) + ' ' + zahl(x + w) + ' ' + zahl(y + r - k) + ' ' + zahl(x + w) + ' ' + zahl(y + r) + ' c');
    a.push(zahl(x + w) + ' ' + zahl(y + h - r) + ' l');
    a.push(zahl(x + w) + ' ' + zahl(y + h - r + k) + ' ' + zahl(x + w - r + k) + ' ' + zahl(y + h) + ' ' + zahl(x + w - r) + ' ' + zahl(y + h) + ' c');
    a.push(zahl(x + r) + ' ' + zahl(y + h) + ' l');
    a.push(zahl(x + r - k) + ' ' + zahl(y + h) + ' ' + zahl(x) + ' ' + zahl(y + h - r + k) + ' ' + zahl(x) + ' ' + zahl(y + h - r) + ' c');
    a.push(zahl(x) + ' ' + zahl(y + r) + ' l');
    a.push(zahl(x) + ' ' + zahl(y + r - k) + ' ' + zahl(x + r - k) + ' ' + zahl(y) + ' ' + zahl(x + r) + ' ' + zahl(y) + ' c h');
    this.raus(a.join(' '));
  };
  Leinwand.prototype.text = function (it) {
    var F = this.pdf.schriften[it.art] || this.pdf.schriften.r;
    if (!F) return;
    var glyphen = [], summe = 0, n = 0;
    for (var i = 0; i < it.s.length; i++) {
      var cp = it.s.codePointAt(i); if (cp > 0xFFFF) i++;
      if (cp === 0xA0 || cp === 0x2007 || cp === 0x202F || cp === 0x2009) cp = 0x20;
      var g = F.cmap[cp];
      if (!g) { var alt = {0x2713: 0x2714, 0x2714: 0x2713}[cp]; g = (alt && F.cmap[alt]) || F.cmap[0x3F]; cp = g === F.cmap[0x3F] ? 0x3F : cp; }
      F.benutzt[g] = cp;
      glyphen.push(hex4(g)); summe += F.breite(g); n++;
    }
    if (!n) return;
    var fs = it.fs, natur = summe * fs / 1000, x = it.x, base;
    if (it.base != null) base = it.base;
    else base = it.y + F.asc * fs / 1000 + (it.h - (F.asc - F.desc) * fs / 1000) / 2;
    if (it.ausr === 'right') x -= natur;
    var tc = it.w != null && n > 0 ? (it.w - natur) / n : 0;
    if (Math.abs(tc) > fs) tc = 0;   // Messung unplausibel: lieber Naturbreite
    this.raus('BT ' + rg(it.f) + ' /' + F.res + ' ' + zahl(fs) + ' Tf ' + zahl(tc) + ' Tc 1 0 ' + (it.kursiv ? '-0.2' : '0') + ' -1 ' + zahl(x) + ' ' + zahl(base) + ' Tm <' + glyphen.join('') + '> Tj ET');
  };
  Leinwand.prototype.zeichne = function (liste, dx, dy, clip) {
    this.raus('q');
    if (clip) { this.raus(zahl(clip[0]) + ' ' + zahl(clip[1]) + ' ' + zahl(clip[2]) + ' ' + zahl(clip[3]) + ' re W n'); }
    this.raus('1 0 0 1 ' + zahl(dx) + ' ' + zahl(dy) + ' cm');
    this.malen(liste, clip ? clip[1] - dy : -1e9, clip ? clip[1] + clip[3] - dy : 1e9);
    this.raus('Q');
  };
  Leinwand.prototype.malen = function (liste, oben, unten) {
    var self = this;
    liste.forEach(function (it) {
      if (it.t === 'gruppe') {
        if (it.y + it.h < oben || it.y > unten) return;
        self.raus('q 1 0 0 1 ' + zahl(it.o[0]) + ' ' + zahl(it.o[1]) + ' cm ' + it.m.map(zahl).join(' ') + ' cm 1 0 0 1 ' + zahl(-it.o[0]) + ' ' + zahl(-it.o[1]) + ' cm');
        self.malen(it.liste, -1e9, 1e9);
        self.raus('Q');
        return;
      }
      if (it.t === 'text') {
        var mitte = it.base != null ? it.base - it.fs * 0.3 : it.y + it.h / 2;
        if (mitte < oben || mitte >= unten) return;
        self.text(it); return;
      }
      var y0 = it.t === 'linie' ? Math.min(it.y1, it.y2) : it.y, y1 = it.t === 'linie' ? Math.max(it.y1, it.y2) : it.y + it.h;
      if (y1 < oben || y0 > unten) return;
      if (it.t === 'flaeche') { self.raus(rg(it.f)); self.pfadRund(it.x, it.y, it.w, it.h, it.rad); self.raus('f'); }
      else if (it.t === 'rahmen') {
        var b = it.b;
        self.raus(rg(it.f, true) + ' ' + zahl(b) + ' w ' + self.strich(it.st, b));
        self.pfadRund(it.x + b / 2, it.y + b / 2, it.w - b, it.h - b, Math.max(0, it.rad - b / 2)); self.raus('S [] 0 d');
      } else if (it.t === 'linie') {
        if (it.st === 'solid' || it.st === 'double' || !it.st) {
          // durchgezogene Linie als Fläche: exakt wie im Browser
          var w = it.b;
          self.raus(rg(it.f));
          if (it.y1 === it.y2) self.raus(zahl(it.x1) + ' ' + zahl(it.y1 - w / 2) + ' ' + zahl(it.x2 - it.x1) + ' ' + zahl(w) + ' re f');
          else self.raus(zahl(it.x1 - w / 2) + ' ' + zahl(it.y1) + ' ' + zahl(w) + ' ' + zahl(it.y2 - it.y1) + ' re f');
        } else {
          self.raus(rg(it.f, true) + ' ' + zahl(it.b) + ' w ' + self.strich(it.st, it.b) + ' ' + zahl(it.x1) + ' ' + zahl(it.y1) + ' m ' + zahl(it.x2) + ' ' + zahl(it.y2) + ' l S [] 0 d 0 J');
        }
      } else if (it.t === 'bild' && it.res) {
        var bx = it.x, by = it.y, bw = it.w, bh = it.h;
        if (it.fit === 'contain' && it.pw && it.ph) {
          var s = Math.min(bw / it.pw, bh / it.ph), nw = it.pw * s, nh = it.ph * s;
          bx += (bw - nw) / 2; by += (bh - nh) / 2; bw = nw; bh = nh;
        }
        self.raus('q ' + zahl(bw) + ' 0 0 ' + zahl(-bh) + ' ' + zahl(bx) + ' ' + zahl(by + bh) + ' cm /' + it.res + ' Do Q');
      }
    });
  };
  Leinwand.prototype.strich = function (st, b) {
    if (st === 'dotted') return '1 J [0 ' + zahl(b * 2) + '] 0 d';
    if (st === 'dashed') return '0 J [' + zahl(b * 3) + ' ' + zahl(b * 3) + '] 0 d';
    return '[] 0 d';
  };

  // ---- PDF zusammensetzen (PDF/A-3b) ----
  // seiten: [{w, h (CSS-Pixel), lw: Leinwand}], schriften: {art: font}, bilder: [{res, px: ImageData}]
  function pdfDatum(d) { return 'D:' + d.toISOString().replace(/[-:T]/g, '').slice(0, 14) + 'Z'; }
  function xmlText(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function pdfText(s) {   // UTF-16BE als Hex-String
    var h = 'FEFF';
    for (var i = 0; i < s.length; i++) h += hex4(s.charCodeAt(i));
    return '<' + h + '>';
  }
  function xmp(meta, jetzt, anhang) {
    var iso = jetzt.toISOString().replace(/\.\d+Z$/, 'Z'), fx = anhang && anhang.facturx;
    return '<?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>\n<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">'
      + '<rdf:Description rdf:about="" xmlns:pdfaid="http://www.aiim.org/pdfa/ns/id/"><pdfaid:part>3</pdfaid:part><pdfaid:conformance>B</pdfaid:conformance></rdf:Description>'
      + '<rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:format>application/pdf</dc:format><dc:title><rdf:Alt><rdf:li xml:lang="x-default">' + xmlText(meta.titel) + '</rdf:li></rdf:Alt></dc:title></rdf:Description>'
      + '<rdf:Description rdf:about="" xmlns:xmp="http://ns.adobe.com/xap/1.0/"><xmp:CreatorTool>zykol.POS</xmp:CreatorTool><xmp:CreateDate>' + iso + '</xmp:CreateDate><xmp:ModifyDate>' + iso + '</xmp:ModifyDate></rdf:Description>'
      + '<rdf:Description rdf:about="" xmlns:pdf="http://ns.adobe.com/pdf/1.3/"><pdf:Producer>zykol.POS</pdf:Producer></rdf:Description>'
      + (fx ? '<rdf:Description rdf:about="" xmlns:fx="urn:factur-x:pdfa:CrossIndustryDocument:invoice:1p0#"><fx:DocumentType>INVOICE</fx:DocumentType><fx:DocumentFileName>' + xmlText(anhang.name) + '</fx:DocumentFileName><fx:Version>1.0</fx:Version><fx:ConformanceLevel>' + xmlText(fx) + '</fx:ConformanceLevel></rdf:Description>'
        + '<rdf:Description rdf:about="" xmlns:pdfaExtension="http://www.aiim.org/pdfa/ns/extension/" xmlns:pdfaSchema="http://www.aiim.org/pdfa/ns/schema#" xmlns:pdfaProperty="http://www.aiim.org/pdfa/ns/property#"><pdfaExtension:schemas><rdf:Bag><rdf:li rdf:parseType="Resource">'
        + '<pdfaSchema:schema>Factur-X PDFA Extension Schema</pdfaSchema:schema><pdfaSchema:namespaceURI>urn:factur-x:pdfa:CrossIndustryDocument:invoice:1p0#</pdfaSchema:namespaceURI><pdfaSchema:prefix>fx</pdfaSchema:prefix><pdfaSchema:property><rdf:Seq>'
        + ['DocumentFileName', 'DocumentType', 'Version', 'ConformanceLevel'].map(function (n) { return '<rdf:li rdf:parseType="Resource"><pdfaProperty:name>' + n + '</pdfaProperty:name><pdfaProperty:valueType>Text</pdfaProperty:valueType><pdfaProperty:category>external</pdfaProperty:category><pdfaProperty:description>' + n + '</pdfaProperty:description></rdf:li>'; }).join('')
        + '</rdf:Seq></pdfaSchema:property></rdf:li></rdf:Bag></pdfaExtension:schemas></rdf:Description>' : '')
      + '</rdf:RDF></x:xmpmeta>\n' + new Array(20).join('                                                                                \n') + '<?xpacket end="w"?>';
  }
  function pdfBauen(pdf, meta) {
    var enc = new TextEncoder(), objekte = [], jetzt = new Date();
    function neu() { objekte.push(null); return objekte.length; }
    function setze(n, kopf, strom) { objekte[n - 1] = {k: kopf, s: strom}; }
    function obj(kopf, strom) { var n = neu(); setze(n, kopf, strom); return n; }
    var warte = [];
    function stromObj(kopfZusatz, daten, ohnePacken) {
      var n = neu();
      warte.push((ohnePacken ? Promise.resolve({d: daten, filter: ''}) : packen(daten)).then(function (p) {
        setze(n, '<< ' + p.filter + kopfZusatz + '/Length ' + p.d.length + ' >>', p.d);
      }));
      return n;
    }
    var katalog = neu(), seitenBaum = neu();
    // Schriften (Type0 / CIDFontType2, Identity-H, eingebettet und verkleinert)
    var fontRes = [];
    Object.keys(pdf.schriften).forEach(function (k, idx) {
      var F = pdf.schriften[k], gids = Object.keys(F.benutzt).map(Number).sort(function (a, b) { return a - b; });
      if (!gids.length) return;
      var tag = 'ZKPDF' + 'ABCDEFGHIJ'[idx] + '+' + F.name;
      var datei = ttfVerkleinern(F, F.benutzt);
      var ff = stromObj('/Length1 ' + datei.length + ' ', datei);
      var fd = obj('<< /Type /FontDescriptor /FontName /' + tag + ' /Flags 32 /FontBBox [' + F.bbox.join(' ') + '] /ItalicAngle 0 /Ascent ' + Math.round(F.asc) + ' /Descent ' + Math.round(F.desc) + ' /CapHeight ' + Math.round(F.cap) + ' /StemV ' + (/Bold|Semi/.test(F.name) ? 120 : 80) + ' /FontFile2 ' + ff + ' 0 R >>');
      var W = gids.map(function (g) { return g + ' [' + Math.round(F.breite(g)) + ']'; }).join(' ');
      var cid = obj('<< /Type /Font /Subtype /CIDFontType2 /BaseFont /' + tag + ' /CIDSystemInfo << /Registry (Adobe) /Ordering (Identity) /Supplement 0 >> /FontDescriptor ' + fd + ' 0 R /DW 1000 /W [' + W + '] /CIDToGIDMap /Identity >>');
      var cmap = '/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo << /Registry (Adobe) /Ordering (UCS) /Supplement 0 >> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000> <FFFF>\nendcodespacerange\n';
      for (var i = 0; i < gids.length; i += 100) {
        var teil = gids.slice(i, i + 100);
        cmap += teil.length + ' beginbfchar\n' + teil.map(function (g) { var cp = F.benutzt[g]; return '<' + hex4(g) + '> <' + (cp > 0xFFFF ? hex4(0xD800 + ((cp - 0x10000) >> 10)) + hex4(0xDC00 + ((cp - 0x10000) & 0x3FF)) : hex4(cp)) + '>'; }).join('\n') + '\nendbfchar\n';
      }
      cmap += 'endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend';
      var tu = stromObj('', enc.encode(cmap));
      fontRes.push('/' + F.res + ' ' + obj('<< /Type /Font /Subtype /Type0 /BaseFont /' + tag + ' /Encoding /Identity-H /DescendantFonts [' + cid + ' 0 R] /ToUnicode ' + tu + ' 0 R >>') + ' 0 R');
    });
    // Bilder
    var bildRes = pdf.bilder.map(function (b) {
      var px = b.px, n = px.width * px.height, rgb = new Uint8Array(n * 3), alpha = new Uint8Array(n), transp = false;
      for (var i = 0, j = 0; i < n; i++, j += 4) {
        var a = px.data[j + 3]; alpha[i] = a; if (a < 255) transp = true;
        rgb[i * 3] = px.data[j]; rgb[i * 3 + 1] = px.data[j + 1]; rgb[i * 3 + 2] = px.data[j + 2];
      }
      var maske = transp ? stromObj('/Type /XObject /Subtype /Image /Width ' + px.width + ' /Height ' + px.height + ' /ColorSpace /DeviceGray /BitsPerComponent 8 ', alpha) : 0;
      var nr = stromObj('/Type /XObject /Subtype /Image /Width ' + px.width + ' /Height ' + px.height + ' /ColorSpace /DeviceRGB /BitsPerComponent 8 ' + (b.scharf ? '/Interpolate false ' : '') + (maske ? '/SMask ' + maske + ' 0 R ' : ''), rgb);
      return '/' + b.res + ' ' + nr + ' 0 R';
    });
    var ressourcen = obj('<< /ProcSet [/PDF /Text /ImageC /ImageB] /Font << ' + fontRes.join(' ') + ' >> /XObject << ' + bildRes.join(' ') + ' >> >>');
    var kids = pdf.seiten.map(function (s) {
      var w = s.w * PX, h = s.h * PX;
      var inhalt = stromObj('', enc.encode(PX + ' 0 0 ' + (-PX) + ' 0 ' + zahl(h) + ' cm\n' + s.lw.o.join('\n')));
      return obj('<< /Type /Page /Parent ' + seitenBaum + ' 0 R /MediaBox [0 0 ' + zahl(w) + ' ' + zahl(h) + '] /Resources ' + ressourcen + ' 0 R /Contents ' + inhalt + ' 0 R' + (pdf.bilder.length ? ' /Group << /Type /Group /S /Transparency /CS /DeviceRGB >>' : '') + ' >>');
    });
    setze(seitenBaum, '<< /Type /Pages /Kids [' + kids.map(function (k) { return k + ' 0 R'; }).join(' ') + '] /Count ' + kids.length + ' >>');
    var icc = stromObj('/N 3 ', b64Bytes(SRGB));
    var ausgabe = obj('<< /Type /OutputIntent /S /GTS_PDFA1 /OutputConditionIdentifier (sRGB IEC61966-2.1) /Info (sRGB IEC61966-2.1) /RegistryName (http://www.color.org) /DestOutputProfile ' + icc + ' 0 R >>');
    var metaNr = stromObj('/Type /Metadata /Subtype /XML ', enc.encode(xmp(meta, jetzt, meta.anhang)), true);
    var zusatz = '';
    if (meta.anhang && meta.anhang.daten) {
      var A = meta.anhang, daten = typeof A.daten === 'string' ? enc.encode(A.daten) : A.daten;
      var ef = stromObj('/Type /EmbeddedFile /Subtype /' + (A.mime || 'text/xml').replace('/', '#2F') + ' /Params << /Size ' + daten.length + ' /CreationDate (' + pdfDatum(jetzt) + ') /ModDate (' + pdfDatum(jetzt) + ') >> ', daten);
      var fs = obj('<< /Type /Filespec /F (' + A.name + ') /UF ' + pdfText(A.name) + ' /Desc ' + pdfText(A.beschreibung || A.name) + ' /AFRelationship /' + (A.beziehung || 'Alternative') + ' /EF << /F ' + ef + ' 0 R /UF ' + ef + ' 0 R >> >>');
      zusatz = ' /Names << /EmbeddedFiles << /Names [(' + A.name + ') ' + fs + ' 0 R] >> >> /AF [' + fs + ' 0 R] /PageMode /UseAttachments';
    }
    setze(katalog, '<< /Type /Catalog /Pages ' + seitenBaum + ' 0 R /Metadata ' + metaNr + ' 0 R /OutputIntents [' + ausgabe + ' 0 R] /Lang (de-DE) /ViewerPreferences << /DisplayDocTitle true >>' + zusatz + ' >>');
    var info = obj('<< /Title ' + pdfText(meta.titel) + ' /Producer ' + pdfText('zykol.POS') + ' /Creator ' + pdfText('zykol.POS') + ' /CreationDate (' + pdfDatum(jetzt) + ') /ModDate (' + pdfDatum(jetzt) + ') >>');
    return Promise.all(warte).then(function () {
      var teile = [], laenge = 0, xref = [];
      function schreib(x) { var b = typeof x === 'string' ? enc.encode(x) : x; teile.push(b); laenge += b.length; }
      schreib('%PDF-1.7\n%\xE2\xE3\xCF\xD3\n');
      objekte.forEach(function (o, i) {
        xref[i + 1] = laenge;
        schreib((i + 1) + ' 0 obj\n' + o.k + '\n');
        if (o.s) { schreib('stream\n'); schreib(o.s); schreib('\nendstream\n'); }
        schreib('endobj\n');
      });
      var start = laenge, anz = objekte.length + 1, x = 'xref\n0 ' + anz + '\n0000000000 65535 f \n';
      for (var k = 1; k < anz; k++) x += String(xref[k]).padStart(10, '0') + ' 00000 n \n';
      var id = ''; for (var r = 0; r < 16; r++) id += hex2(Math.floor(Math.random() * 256));
      schreib(x + 'trailer\n<< /Size ' + anz + ' /Root ' + katalog + ' 0 R /Info ' + info + ' 0 R /ID [<' + id + '> <' + id + '>] >>\nstartxref\n' + start + '\n%%EOF\n');
      return new Blob(teile, {type: 'application/pdf'});
    });
  }

  // Schriften für alle Texte laden, Bilder rastern, Ressourcennamen vergeben
  function vorbereiten(listen) {
    var pdf = {schriften: {}, bilder: [], seiten: []}, arten = textArten(listen);
    if (arten.indexOf('r') < 0) arten.push('r');
    var bilder = [];
    flach(listen).forEach(function (it) { if (it.t === 'bild') bilder.push(it); });
    return Promise.all(arten.map(function (k) {
      return schriftLaden(k).then(function (f) { pdf.schriften[k] = {name: f.name, cmap: f.cmap, breite: f.breite, asc: f.asc, desc: f.desc, cap: f.cap, bbox: f.bbox, buf: f.buf, T: f.T, ng: f.ng, loca: f.loca, benutzt: {}, res: 'F' + k}; });
    }).concat(bilder.map(function (it) {
      return bildPixel(it).then(function (px) {
        // gleiches Bild (z. B. Logo auf jeder Seite) nur einmal ablegen
        var quelle = it.el.tagName === 'IMG' ? (it.el.currentSrc || it.el.src || '') : '', schluessel = quelle + '|' + px.width + 'x' + px.height;
        var alt = quelle && pdf.bilder.filter(function (b) { return b.k === schluessel; })[0];
        if (alt) { it.res = alt.res; } else { it.res = 'Im' + pdf.bilder.length; pdf.bilder.push({res: it.res, px: px, k: schluessel, scharf: it.scharf}); }
        it.pw = px.width; it.ph = px.height;
      }, function () { it.res = null; });
    }))).then(function () { return pdf; });
  }

  function seite(pdf, wPx, hPx) { var s = {w: wPx, h: hPx, lw: new Leinwand(pdf)}; pdf.seiten.push(s); return s.lw; }
  function hoeheVon(el) { return el.getBoundingClientRect().height; }

  // A4 mit Plan (wie a4Laufend), aber als Vektor
  function a4Vektor(d, ziel, kopf, fuss, rand, F, meta) {
    var seiteEl = kopf && kopf.querySelector('.zk-pdf-seite');
    var zr = ziel.getBoundingClientRect(), ox = zr.left;
    var kAnz = kopf && kopf.style.display, fAnz = fuss && fuss.style.display, kopfH = 0, fussH = 0, fussL = null;
    if (seiteEl) { seiteEl.textContent = 'Seite 9 von 9'; seiteEl.style.display = 'block'; }
    if (kopf) kopfH = hoeheVon(kopf);
    if (fuss) { var fr = fuss.getBoundingClientRect(); fussH = fr.height; fussL = sammeln(d, fuss, ox, fr.top); }
    if (kopf) kopf.style.display = 'none';
    if (fuss) fuss.style.display = 'none';
    var br = umbrueche(d, ziel), tab = tabelle(ziel), zr2 = ziel.getBoundingClientRect();
    var H = zr2.height, inhalt = br.frei.concat(br.fest);
    if (inhalt.length) H = Math.min(H, Math.max.apply(null, inhalt) + 4);
    var plan = a4Plan(H, br, tab, rand, F, kopfH, fussH);
    while (plan.length > 1 && !inhalt.some(function (v) { var s = plan[plan.length - 1]; return v > s.y + 2 && v <= s.ende + 1; })) plan.pop();
    var liste = sammeln(d, ziel, ox, zr2.top), koepfe = [];
    if (kopf) {
      kopf.style.display = kAnz;
      plan.forEach(function (s, i) {
        if (seiteEl) { var t = plan.length > 1 ? 'Seite ' + (i + 1) + ' von ' + plan.length : ''; seiteEl.textContent = t; seiteEl.style.display = t ? 'block' : 'none'; }
        var kr = kopf.getBoundingClientRect(); koepfe.push(sammeln(d, kopf, ox, kr.top));
      });
    }
    if (fuss) fuss.style.display = fAnz;
    var alle = [liste].concat(koepfe, fussL ? [fussL] : []);
    return vorbereiten(alle).then(function (pdf) {
      var bw = F.breite * MM, bh = F.hoehe * MM, x0 = rand[1] * MM, satz = zr2.width;
      plan.forEach(function (s, i) {
        var lw = seite(pdf, bw, bh), y = rand[0] * MM;
        if (koepfe[i]) { lw.zeichne(koepfe[i], x0, y, null); y += kopfH + ABSTAND * MM; }
        if (s.uebertrag !== null) {
          lw.zeichne([{t: 'text', x: x0 + satz, base: y + 5 * MM, s: 'Übertrag von Seite ' + i + ': ' + eur(s.uebertrag), art: 'b', fs: 12.7, f: [0.063, 0.063, 0.063], ausr: 'right'}], 0, 0, null);
          y += UE_H * MM;
          lw.zeichne(liste, x0, y - tab.kopfOben, [x0 - 1, y, satz + 2, tab.kopfH]);
          y += tab.kopfH;
        }
        lw.zeichne(liste, x0, y - s.y, [x0 - 2, y, satz + 4, s.ende - s.y]);
        y += s.ende - s.y;
        if (s.zwischensumme !== null) {
          lw.zeichne([
            {t: 'text', x: x0 + satz, base: y + 5.5 * MM, s: 'Zwischensumme / Übertrag: ' + eur(s.zwischensumme), art: 'b', fs: 12.7, f: [0.063, 0.063, 0.063], ausr: 'right'},
            {t: 'text', x: x0, base: y + 11 * MM, s: 'Fortsetzung auf Seite ' + (i + 2), art: 'r', fs: 11.3, f: [0.329, 0.357, 0.4]}], 0, 0, null);
        }
        if (fussL) lw.zeichne(fussL, x0, (F.hoehe - FUSS_RAND) * MM - fussH, null);
      });
      return pdfBauen(pdf, meta).then(function (blob) { return {blob: blob, seiten: plan.length}; });
    });
  }

  function erzeugenVektor(o) {
    var format = formatErkennen(o), F = FORMATE[format] || FORMATE.a4;
    if (format === 'paket' && o.mm) F = {breite: o.mm[0], hoehe: o.mm[1], label: function () { return 'Paketlabel · ' + String(o.mm[0]).replace('.', ',') + ' × ' + String(o.mm[1]).replace('.', ',') + ' mm'; }};
    var meta = {titel: o.titel || t('dokument'), anhang: o.anhang || null};
    var f = rahmen(F.breite), d, rand = [0, 0];
    return geladen(f, o.url, o.html).then(function () { return warten(o.url ? 1300 : 300); }).then(function () {
      d = f.contentDocument;
      rand = druckStileAktivieren(d, o.html);
      if (format === 'a4') f.style.width = Math.ceil((F.breite - 2 * rand[1]) * MM) + 'px';
      return warten(60);
    }).then(function () {
      f.style.height = Math.max(400, d.documentElement.scrollHeight) + 'px';
      return (d.fonts && d.fonts.ready ? d.fonts.ready : Promise.resolve()).then(function () { return warten(80); });
    }).then(function () {
      var fertig = function (r) { return {blob: r.blob, format: format, seiten: r.seiten, F: F}; };
      if (format === 'etikett' || format === 'paket') {
        var els = format === 'etikett' ? d.querySelectorAll(o.auswahl || '.l') : [d.body];
        if (!els.length) els = [d.body];
        var listen = Array.prototype.map.call(els, function (el) { var r = el.getBoundingClientRect(); return {l: sammeln(d, el, r.left, r.top), w: r.width, h: r.height}; });
        return vorbereiten(listen.map(function (x) { return x.l; })).then(function (pdf) {
          listen.forEach(function (x) {
            var bw = F.breite * MM, bh = F.hoehe * MM, s = bw / (x.w || bw), lw = seite(pdf, bw, bh);
            lw.raus(zahl(s) + ' 0 0 ' + zahl(s) + ' 0 0 cm');
            lw.zeichne(x.l, 0, 0, [0, 0, bw / s, bh / s]);
          });
          return pdfBauen(pdf, meta).then(function (blob) { return fertig({blob: blob, seiten: listen.length}); });
        });
      }
      var ziel = (o.auswahl && d.querySelector(o.auswahl)) || (format === 'bon' && d.querySelector('.bon')) || d.querySelector('.zk-pdf-blatt') || d.body;
      if (format === 'bon') {
        var r = ziel.getBoundingClientRect(), l = sammeln(d, ziel, r.left, r.top);
        return vorbereiten([l]).then(function (pdf) {
          var bw = F.breite * MM, s = bw / r.width, lw = seite(pdf, bw, r.height * s);
          lw.raus(zahl(s) + ' 0 0 ' + zahl(s) + ' 0 0 cm');
          lw.zeichne(l, 0, 0, null);
          return pdfBauen(pdf, meta).then(function (blob) { return fertig({blob: blob, seiten: 1}); });
        });
      }
      var kopf = ziel.querySelector('[slot="header"]'), fuss = ziel.querySelector('[slot="footer"]');
      return a4Vektor(d, ziel, kopf, fuss, rand, F, meta).then(fertig);
    }).then(function (r) { f.remove(); return r; }, function (e) { f.remove(); throw e; });
  }

  function erzeugen(o) {
    if (o.raster) return erzeugenRaster(o);
    return erzeugenVektor(o).catch(function (e) {
      if (window.console) console.warn('zk-pdf: Vektor-PDF fehlgeschlagen, nehme Bildweg', e);
      if (o.anhang) throw e;   // E-Rechnung nie als Bild-PDF ausgeben
      return erzeugenRaster(o);
    });
  }

  // ---- Anzeige ----
  var offen = null, schlange = [];
  function schliessen() {
    if (!offen) return;
    if (offen.url) URL.revokeObjectURL(offen.url);
    offen.el.remove(); document.removeEventListener('keydown', offen.taste); offen = null;
    if (schlange.length) zeigen(schlange.shift());
  }
  function knopf(text, haupt) {
    var b = document.createElement('button'); b.type = 'button'; b.textContent = text;
    b.setAttribute('style', 'font:600 14px Inter,Arial,sans-serif;padding:9px 14px;border-radius:8px;cursor:pointer;border:1px solid ' + (haupt ? '#101010;background:#101010;color:#fff' : '#d4d7dc;background:#fff;color:#101010'));
    return b;
  }
  function huelle(titel) {
    var el = document.createElement('div');
    el.setAttribute('role', 'dialog'); el.setAttribute('aria-label', t('vorschau'));
    el.setAttribute('style', 'position:fixed;inset:0;z-index:2147483000;background:rgba(16,16,16,.55);display:flex;align-items:center;justify-content:center;padding:16px;font-family:Inter,Arial,sans-serif');
    el.innerHTML = '<div style="background:#fff;border-radius:14px;width:min(920px,100%);height:min(92vh,1100px);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.3)">'
      + '<div class="kopf" style="display:flex;align-items:center;gap:8px;padding:12px 14px;border-bottom:1px solid #e5e7eb;flex-wrap:wrap">'
      + '<div style="flex:1;min-width:160px"><div class="t" style="font-weight:700;font-size:16px;color:#101010"></div><div class="f" style="font-size:12.5px;color:#545b66">' + t('erstellt') + '</div></div>'
      + '<div class="k" style="display:flex;gap:8px;flex-wrap:wrap"></div></div>'
      + '<div class="inhalt" style="flex:1;background:#eef0f2;display:flex;align-items:center;justify-content:center;color:#545b66;font-size:14px">' + t('erstellt') + '</div></div>';
    el.querySelector('.t').textContent = titel || t('dokument');
    var zu = knopf(t('schliessen')); zu.onclick = schliessen;
    el.querySelector('.k').appendChild(zu);
    el.addEventListener('click', function (e) { if (e.target === el) schliessen(); });
    var taste = function (e) { if (e.key === 'Escape') schliessen(); };
    document.addEventListener('keydown', taste);
    document.body.appendChild(el);
    offen = {el: el, url: '', taste: taste};
    return el;
  }
  function dateiname(titel) { return String(titel || 'Dokument').replace(/[^\wäöüÄÖÜß.-]+/g, '-').replace(/^-+|-+$/g, '') + '.pdf'; }

  // Ist schon eine Vorschau offen (z. B. Bon und danach Rechnung), wird die nächste nach dem Schließen gezeigt
  function zeigen(o) {
    // Vorschau, die ohne „Schließen“ aus dem DOM verschwunden ist, darf keine weiteren Belege blockieren
    if (offen && !offen.el.isConnected) { if (offen.url) URL.revokeObjectURL(offen.url); document.removeEventListener('keydown', offen.taste); offen = null; }
    if (offen) { schlange.push(o); var k = offen.el.querySelector('.f'); if (k && k.textContent.indexOf(t('weitere')) < 0) k.textContent += ' · ' + t('weitere'); return Promise.resolve(null); }
    var el = huelle(o.titel);
    var mein = offen;
    return erzeugen(o).then(function (r) {
      if (offen !== mein) return r;
      var url = URL.createObjectURL(r.blob); offen.url = url;
      var F = r.F || FORMATE[r.format];
      el.querySelector('.f').textContent = F.label() + ' · ' + r.seiten + ' ' + (r.format === 'etikett' ? t('etiketten') : t(r.seiten === 1 ? 'seite' : 'seiten')) + (schlange.length ? ' · ' + t('weitere') : '');
      var inhalt = el.querySelector('.inhalt');
      inhalt.textContent = '';
      var fr = document.createElement('iframe');
      fr.title = 'PDF'; fr.src = url;
      fr.setAttribute('style', 'width:100%;height:100%;border:0;background:#eef0f2');
      inhalt.appendChild(fr);
      var k = el.querySelector('.k'), zu = k.lastChild;
      var neu = knopf(t('neuerTab')); neu.onclick = function () { window.open(url, '_blank'); };
      var laden = knopf(t('speichern'), true);
      laden.onclick = function () { var a = document.createElement('a'); a.href = url; a.download = dateiname(o.titel); document.body.appendChild(a); a.click(); a.remove(); };
      k.insertBefore(neu, zu); k.insertBefore(laden, zu);
      return r;
    }).catch(function (e) {
      if (offen !== mein) return;
      el.querySelector('.f').textContent = t('fehler');
      el.querySelector('.inhalt').textContent = t('fehlerText') + ': ' + (e && e.message || e);
    });
  }

  // alles schließen, auch wartende Belege (z. B. vor einem neuen Werkstatt-Beleg)
  function leeren() { schlange = []; schliessen(); }
  window.ZK_PDF = {zeigen: zeigen, erzeugen: erzeugen, schliessen: schliessen, leeren: leeren};
})();
