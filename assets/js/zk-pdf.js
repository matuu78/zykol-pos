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
        var plan = a4Plan(c.height / SKALA, br, tab, rand, F, kopfH, fussC ? fussC.height / SKALA : 0), koepfe = [];
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

  function erzeugen(o) {
    var format = formatErkennen(o), F = FORMATE[format] || FORMATE.a4;
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
        var ziel = (o.auswahl && d.querySelector(o.auswahl)) || (format === 'bon' && d.querySelector('.bon')) || d.querySelector('.zk-pdf-blatt') || d.body;
        var kopf = format === 'a4' && ziel.querySelector('[slot="header"]'), fuss = format === 'a4' && ziel.querySelector('[slot="footer"]');
        if (kopf || fuss) return a4Laufend(d, ziel, kopf, fuss, zeichne, opt, rand, F);
        var br = format === 'a4' ? umbrueche(d, ziel) : null;
        return zeichne(ziel, opt).then(function (c) {
          if (format === 'bon') return [{jpeg: jpeg(c), px: [c.width, c.height], mm: [F.breite, c.height / SKALA / MM]}];
          return a4Seiten(c, br, rand, F);
        });
      });
    }).then(function (seiten) { f.remove(); return {blob: pdfAusSeiten(seiten), format: format, seiten: seiten.length}; },
      function (e) { f.remove(); throw e; });
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
    if (offen) { schlange.push(o); var k = offen.el.querySelector('.f'); if (k && k.textContent.indexOf(t('weitere')) < 0) k.textContent += ' · ' + t('weitere'); return Promise.resolve(null); }
    var el = huelle(o.titel);
    var mein = offen;
    return erzeugen(o).then(function (r) {
      if (offen !== mein) return r;
      var url = URL.createObjectURL(r.blob); offen.url = url;
      var F = FORMATE[r.format];
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

  window.ZK_PDF = {zeigen: zeigen, erzeugen: erzeugen, schliessen: schliessen};
})();
