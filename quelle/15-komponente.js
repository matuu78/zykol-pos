class Component extends DCLogic {
  udVals() { if (!this._ud) this._ud = new UmsatzDash(this); return this._ud.renderVals(); }
  bbRef = React.createRef();
  state = {
    cat: 'alle',
    suche: '',
    carts: {'Verkaufsraum': {p1: 1, p5: 1, p9: 1}},
    detailId: null,
    varFarbe: null,
    varGroesse: null,
    korbOffen: false,
    navOffen: true,
    theme: (() => { try { return localStorage.getItem('zykolPOS.theme') || 'hell'; } catch (e) { return 'hell'; } })(),
    view: 'kasse',
    stockDelta: {},
    txSuche: '',
    txFilter: 'alle',
    txStatus: {},
    txSort: {key: 'zeit', dir: -1},
    txZeitraum: 'alle',
    txVon: null,
    txBis: null,
    txBeleg: null,
    kdSuche: '',
    kdTyp: 'Alle',
    kdDetailNr: null,
    kundeNr: null,
    zeitraum: 'woche',
    kachel: null,
    bsSuche: '',
    lagerort: 'Alle Lagerorte',
    einstellTab: null,
    druckerAus: {d2: true, d4: true},
    druckerTest: null,
    erpAn: true,
    erpTest: false,
    syncAus: {},
    fremdErp: 'DATEV',
    shopAn: {shopware: true},
    eigeneApiAn: false,
    vorlageAus: {},
    scanQuelle: 'usb',
    scanTest: false,
    scanAus: {},
    benutzer: BENUTZER_START.slice(),
    benutzerAus: {},
    formOffen: false,
    formVorname: '',
    formNachname: '',
    formKuerzel: '',
    formPin: '',
    formRolle: 'Verkauf',
    formKassen: ['Verkaufsraum'],
    formHinweis: '',
    rollen: ROLLEN.slice(),
    rechte: RECHTE.map(r => ({recht: r[0], erlaubt: {Admin: !!r[1], Filialleitung: !!r[2], Teamleitung: !!r[3], Verkauf: !!r[4], Aushilfe: !!r[5], Einkauf: !!r[6]}})),
    rolleFormOffen: false,
    rolleFormName: '',
    rolleFormHinweis: '',
    kassen: KASSEN_START.slice(),
    aktiveKasseId: KASSEN_START[0].id,
    kasseMenuOffen: false,
    rolleMenuId: null,
    kassenAus: {},
    kasseFormOffen: false,
    kasseFormId: '',
    kasseFormOrt: '',
    kasseFormDrucker: '',
    kasseFormHinweis: '',
    psProvider: 'Commerzbank (BNP Payments)',
    psAn: true,
    psTest: false,
    kartenAus: {amex: true},
    tseTyp: 'Cloud-TSE (fiskaly)',
    tseTest: false,
    tseAus: {},
    fzTab: 'artikel',
    fzAus: {},
    fzRichtung: {},
    zahlung: null,
    now: new Date()
  };

  componentDidMount() {
    if (!window.qrcode) { const qi = setInterval(() => { if (window.qrcode) { clearInterval(qi); this.forceUpdate(); } }, 150); }
    document.documentElement.classList.toggle('zk-dunkel', this.state.theme === 'dunkel');
    this._t = setInterval(() => this.setState({now: new Date()}), 20000);
    this._fit = () => {
      const w = window.innerWidth;
      const zu = {};
      if (w < 1280 && this.state.navOffen) zu.navOffen = false;
      if (w < 1100 && this.state.korbOffen) zu.korbOffen = false;
      if (w !== this.state.breite) zu.breite = w;
      if (Object.keys(zu).length) this.setState(zu);
    };
    this._fit();
    window.addEventListener('resize', this._fit);
    this._fussMiss = () => {
      const f = document.querySelector('.zk-fuss');
      const h = f && f.isConnected ? Math.round(f.getBoundingClientRect().height) : 0;
      if (h !== this._fussH) { this._fussH = h; document.documentElement.style.setProperty('--zk-fuss-h', h + 'px'); }
    };
    this._fussMiss();
    this._fussT = setInterval(this._fussMiss, 400);
    window.addEventListener('resize', this._fussMiss);
    if (window.visualViewport) window.visualViewport.addEventListener('resize', this._fussMiss);
    this._esc = (e) => {
      if (e.key === 'Escape') this.setState({kasseMenuOffen: false, rolleMenuId: null, loginKasseOffen: false});
      const s = this.state;
      if (s.angemeldet && s.gesperrt) {
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        if (/^[0-9]$/.test(e.key)) { e.preventDefault(); this.setState(s2 => ({sperrPin: ((s2.sperrPin || '') + e.key).slice(0, 4), sperrFehler: null})); }
        else if (e.key === 'Backspace') { e.preventDefault(); this.setState(s2 => ({sperrPin: (s2.sperrPin || '').slice(0, -1), sperrFehler: null})); }
        else if (e.key === 'Delete' || e.key === 'Escape') this.setState({sperrPin: '', sperrFehler: null});
        else if (e.key === 'Enter') { e.preventDefault(); this._entsperren && this._entsperren(); }
        return;
      }
      if (s.angemeldet || s.pinVergessenOffen) return;
      const t = e.target, tag = t && t.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (t && t.isContentEditable)) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (/^[0-9]$/.test(e.key)) {
        e.preventDefault();
        this.setState(s2 => ({loginPin: ((s2.loginPin || '') + e.key).slice(0, s2.pinLaenge || 4), loginFehler: null}));
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        this.setState(s2 => ({loginPin: (s2.loginPin || '').slice(0, -1), loginFehler: null}));
      } else if (e.key === 'Delete' || (e.key === 'Escape' && s.loginPin)) {
        this.setState({loginPin: '', loginFehler: null});
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const v = this.renderVals();
        if (v.onLoginAnmelden) v.onLoginAnmelden();
      }
    };
    window.addEventListener('keydown', this._esc);
    this._mo = new MutationObserver(() => this.i18nPlanen());
    this._mo.observe(document.body, {childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['placeholder', 'title']});
    this.i18nPlanen();
  }
  componentDidUpdate() { this.i18nPlanen(); }
  i18nPlanen() {
    if (this._i18nRaf) return;
    this._i18nRaf = requestAnimationFrame(() => { this._i18nRaf = null; this.i18nAnwenden(); });
  }
  i18nAnwenden() {
    const D = window.ZYKOL_I18N;
    if (!D) { setTimeout(() => this.i18nPlanen(), 300); return; }
    const lang = this.aktiveSprache();
    if (!this._i18nMap) this._i18nMap = new WeakMap();
    const M = this._i18nMap;
    if (!this._i18nCache || this._i18nCacheLang !== lang) { this._i18nCache = new Map(); this._i18nCacheLang = lang; } const C = this._i18nCache; const trK = (k, tief) => { const e = D.dict[k]; if (e && e[lang]) return e[lang]; if (!tief && k.indexOf(' · ') > 0) { const t = k.split(' · '), n = t.map(s => trK(s, 1) || s); if (n.some((s, i) => s !== t[i])) return n.join(' · '); } for (const m of (D.muster || [])) { const g = k.match(m[0]); if (g && m[1][lang] != null) return m[1][lang].replace(/§(l?)(\d)|\$(\d)/g, (x, l, a, b) => { if (b) return g[b]; const v = trK(g[a], 1) || g[a]; return l ? v.toLowerCase() : v; }); } return null; }; const tr = (orig) => { if (lang === 'de' || !orig) return orig; const k = orig.trim(); if (!k) return orig; let v = C.get(k); if (v === undefined) { v = trK(k, 0); C.set(k, v); } return v != null ? orig.replace(k, v) : orig; };
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = w.nextNode())) {
      const p = n.parentNode;
      if (!p || p.nodeName === 'SCRIPT' || p.nodeName === 'STYLE') continue;
      if (p.closest && p.closest('[data-no-i18n]')) continue;
      let r = M.get(n);
      if (!r || n.nodeValue !== r.set) r = {orig: n.nodeValue};
      const v = tr(r.orig); r.set = v; M.set(n, r);
      if (n.nodeValue !== v) n.nodeValue = v;
    }
    document.body.querySelectorAll('[placeholder],[title]').forEach(el => {
      ['placeholder', 'title'].forEach(a => {
        if (!el.hasAttribute(a) || el.closest('[data-no-i18n]')) return;
        const cur = el.getAttribute(a);
        if (el.getAttribute('data-i18n-' + a + '-set') !== cur) el.setAttribute('data-i18n-' + a + '-orig', cur);
        const v = tr(el.getAttribute('data-i18n-' + a + '-orig'));
        el.setAttribute('data-i18n-' + a + '-set', v);
        if (cur !== v) el.setAttribute(a, v);
      });
    });
    document.documentElement.lang = lang;
    if (this._mo) this._mo.takeRecords();
  }
  bestellbelegListeVals(st) {
    const alle = st.bestellbelege || BB_START;
    const STIL = {Bestellt: ['#fdebc8', '#6b4200'], Abholbereit: ['#dcf3e6', '#0d5f38'], 'Übergeben': ['#e5e7eb', '#545b66']};
    const q = (st.bblSuche || '').trim().toLowerCase();
    const treffer = alle.filter(e => !q || (e.nr + ' ' + e.name + ' ' + e.tel + ' ' + BB_ZAHL(e).text + ' ' + e.pos.map(p => p.titel + ' ' + p.pers).join(' ')).toLowerCase().includes(q))
      .filter(e => !st.bblFilter || e.status === st.bblFilter);
    const setze = (nr, patch) => this.setState(s => ({bestellbelege: (s.bestellbelege || BB_START).map(x => x.nr === nr ? Object.assign({}, x, patch) : x), bblSperre: null}));
    const setStatus = (nr, status) => { const e = alle.find(x => x.nr === nr); if (status === 'Übergeben' && e && !BB_ZAHL(e).freigabe) return this.setState({bblSperre: nr}); setze(nr, {status}); };
    const esc = t => String(t == null ? '' : t).replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]));
    const drucke = e => {
      const innen = e.html || ('<div style="max-width:720px;margin:0 auto;padding:24px;font-family:Inter,sans-serif;color:#101010;"><div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;font-weight:600;color:#545b66;">Bestellbeleg</div><h1 style="font-family:Poppins,Inter,sans-serif;font-size:28px;margin:4px 0 6px;">' + esc(e.nr) + '</h1>'
        + '<div style="color:#545b66;margin-bottom:18px;">' + esc(e.datum) + ' · ' + esc(e.kasse) + ' · ' + esc(e.bearbeiter) + '</div>'
        + '<div style="margin-bottom:16px;"><b>' + esc(e.name) + '</b><br>' + esc(e.tel) + '<br>' + esc(e.mail) + '<br>' + esc(e.art) + (e.termin ? ' ab ' + esc(e.termin) : '') + (e.anzahlung ? ' · Anzahlung ' + EUR(e.anzahlung) : '') + '<br>Zahlung: ' + esc(BB_ZAHL(e).text) + '</div>'
        + '<table style="width:100%;border-collapse:collapse;">' + e.pos.map(p => '<tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;"><b>' + esc(p.titel) + '</b><br><span style="color:#545b66;">' + esc(p.typ) + (p.pers ? ' · ' + esc(p.pers) : '') + '</span></td><td style="text-align:right;padding:10px 0;border-bottom:1px solid #e5e7eb;">× ' + esc(p.menge) + '</td></tr>').join('') + '</table>'
        + (e.hinweis ? '<p style="color:#545b66;">' + esc(e.hinweis) + '</p>' : '') + '<div style="margin-top:40px;border-top:1px solid #101010;width:260px;padding-top:6px;font-size:12px;color:#545b66;">Unterschrift Kunde</div></div>');
      this.druckeHtml('<!doctype html><html><head><meta charset="utf-8"><base hr' + 'ef="' + location.href + '"><title>' + esc(e.nr) + '</title><style>body{margin:0;font-family:Inter,sans-serif;}[data-seite]{box-shadow:none!important;margin:0 auto!important;}[data-seite]+[data-seite]{page-break-before:always;}@page{size:A4;margin:12mm;}</style></head><body>' + innen + '</body></html>', e.nr);
    };
    const zahl = s => alle.filter(e => e.status === s).length;
    return {
      bblView: st.view === 'bestellbelege',
      bblSuche: st.bblSuche || '', hatBblSuche: !!q,
      onBblSuche: e => this.setState({bblSuche: e.target.value}), onBblSucheLoeschen: () => this.setState({bblSuche: ''}),
      bblKennzahlen: [
        {label: 'Bestellt', value: String(zahl('Bestellt')), hint: 'Ware bestellt oder in Arbeit', color: '#6b4200'},
        {label: 'Abholbereit', value: String(zahl('Abholbereit')), hint: 'Kunde kann abholen', color: '#0d5f38'},
        {label: 'Übergeben', value: String(zahl('Übergeben')), hint: 'abgeschlossen', color: '#101010'},
        {label: 'Noch zu kassieren', value: EUR(alle.filter(e => e.status !== 'Übergeben').reduce((a, e) => a + BB_ZAHL(e).rest, 0)), hint: 'vor der Übergabe, ohne Rechnungskunden', color: '#9b1520'}
      ],
      bblFilterChips: ['Alle', 'Bestellt', 'Abholbereit', 'Übergeben'].map(f => { const an = (st.bblFilter || 'Alle') === f; return {label: f, bg: an ? '#101010' : '#FFFFFF', fg: an ? '#FFFFFF' : '#101010', rand: an ? '#101010' : '#e5e7eb', onClick: () => this.setState({bblFilter: f === 'Alle' ? null : f})}; }),
      bblListe: treffer.map(e => {
        const offen = st.bblOffen === e.nr;
        const s = STIL[e.status] || STIL.Bestellt;
        return {
          nr: e.nr, datum: e.datum + (e.zeit ? ', ' + e.zeit : ''), name: e.name, tel: e.tel || '—',
          uebergabe: e.art + (e.termin ? ' ab ' + e.termin : ''), anzahl: e.pos.length === 1 ? '1 Position' : e.pos.length + ' Positionen',
          anzahlungStr: e.anzahlung ? EUR(e.anzahlung) : '—', summeStr: EUR(e.summe || 0),
          status: e.status, statusBg: s[0], statusFg: s[1],
          ...(() => { const zb = BB_ZAHL(e); return {zahlText: zb.text, zahlBg: zb.bg, zahlFg: zb.fg, offenZahlung: zb.z === 'Offen' && e.status !== 'Übergeben',
            restText: 'Noch offen: ' + EUR(zb.rest) + (e.anzahlung ? ' (Anzahlung ' + EUR(e.anzahlung) + ' erhalten)' : ''),
            gesperrt: st.bblSperre === e.nr,
            onKarte: () => setze(e.nr, {zahlart: 'Karte'}), onBar: () => setze(e.nr, {zahlart: 'Bar'}), onRechnung: () => setze(e.nr, {zahlart: 'Rechnung', ziel: 14})}; })(),
          offen, pfeil: offen ? 'M6 15l6-6 6 6' : 'M6 9l6 6 6-6', rowBg: offen ? '#FFFFFF' : 'transparent',
          onToggle: () => this.setState({bblOffen: offen ? null : e.nr}),
          pos: e.pos.map(p => ({titel: p.titel, typ: p.typ, menge: '× ' + p.menge, pers: p.pers || 'Ohne Personalisierung'})),
          hinweis: e.hinweis || '', hatHinweis: !!e.hinweis,
          fuss: 'Erstellt ' + e.datum + ' · ' + e.kasse + ' · ' + e.bearbeiter + ' · Gesamt ' + EUR(e.summe || 0),
          statusKnoepfe: ['Bestellt', 'Abholbereit', 'Übergeben'].map(z => { const zu = z === 'Übergeben' && !BB_ZAHL(e).freigabe; return {label: z, bg: z === e.status ? '#101010' : '#FFFFFF', fg: z === e.status ? '#FFFFFF' : zu ? '#8a9099' : '#101010', rand: z === e.status ? '#101010' : '#e5e7eb', titel: zu ? 'Erst kassieren – Bestellung ist noch nicht bezahlt' : z, onClick: () => setStatus(e.nr, z)}; }),
          onDrucken: () => drucke(e)
        };
      }),
      bblLeer: treffer.length === 0
    };
  }

  bestellbelegVals(warenkorb, brutto) {
    const st = this.state;
    const bb = st.bb;
    const kunde = this.kunden().find(k => k.nr === st.kundeNr);
    const num = v => { const n = parseFloat(String(v || '').replace(/\./g, '').replace(',', '.')); return isNaN(n) ? 0 : n; };
    const set = patch => this.setState(s => ({bb: Object.assign({}, s.bb, patch)}));
    const oeffnen = () => {
      const t = new Date(); t.setDate(t.getDate() + 14);
      this.setState(s => ({bb: Object.assign({
        nr: SHOP_NR('bbPraefix', 'BB') + String(87 + (s.bbZaehler || 0)).padStart(4, '0'),
        titel: 'Bestellbeleg', einleitung: 'Vielen Dank für Ihre Bestellung. Wir melden uns, sobald Ihre Ware abholbereit ist.',
        name: kunde ? kunde.name : '', tel: kunde ? (kunde.telefon || '') : '', mail: kunde ? (kunde.mail || '') : '',
        art: 'Abholung', termin: t.toLocaleDateString('de-DE'), anzahlung: '', hinweis: '', fuss: (() => { const d = SHOP_LADEN().daten; return [d.firma, d.ort, 'Mo–Fr ' + d.mofr, 'Sa ' + d.sa, d.so && d.so !== 'geschlossen' ? 'So ' + d.so : ''].filter(Boolean).join(' · '); })(),
        preise: true, unterschrift: true, werkstatt: false, pers: {}, zahlart: kunde && kunde.typ !== 'Privat' ? 'Rechnung' : 'Offen', ziel: '14'
      }, s.bb && s.bb.nr ? {pers: s.bb.pers || {}} : {}), bbAuf: Object.assign({}, s.bbAuf, {kunde: true})}));
    };
    if (!bb) return {bbOffen: false, onBestellbeleg: () => warenkorb.length && oeffnen(), bbKnopfFg: warenkorb.length ? '#101010' : '#8a9099'};
    const anz = num(bb.anzahlung);
    const pos = warenkorb.map(w => {
      const pers = (bb.pers || {})[w.key] || '';
      return {
        titel: w.title, typ: w.type, menge: String(w.qty), preis: w.lineStr, pers, hatPers: !!pers.trim(),
        offen: !!(st.bbAuf || {})['pos:' + w.key],
        pfeil: (st.bbAuf || {})['pos:' + w.key] ? '90deg' : '0deg',
        onToggle: () => this.setState(s => ({bbAuf: Object.assign({}, s.bbAuf, {['pos:' + w.key]: !(s.bbAuf || {})['pos:' + w.key]})})),
        status: pers.trim() ? 'Personalisiert' : 'Standard',
        statusBg: pers.trim() ? '#dcf3e6' : '#eef0f2', statusFg: pers.trim() ? '#0d5f38' : '#545b66',
        kurz: pers.trim() ? pers.trim().replace(/\s+/g, ' ') : w.type,
        onPers: e => { const v = e.target.value; this.setState(s => ({bb: Object.assign({}, s.bb, {pers: Object.assign({}, s.bb.pers, {[w.key]: v})})})); },
        chips: ['Beschriftung', 'Farbe', 'Maßanpassung', 'Gravur', 'Zubehör'].map(c => ({label: c, onClick: () => this.setState(s => { const alt = (s.bb.pers || {})[w.key] || ''; return {bb: Object.assign({}, s.bb, {pers: Object.assign({}, s.bb.pers, {[w.key]: (alt ? alt.replace(/\s*$/, '') + ' · ' : '') + c + ': '})})}; })}))
      };
    });
    const drucken = () => {
      const el = this.bbRef.current; if (!el) return;
      const w = window.open('', '_blank'); if (!w) return;
      w.document.write('<!doctype html><html><head><meta charset="utf-8"><base hr' + 'ef="' + location.href + '"><title>' + bb.nr + '</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Poppins:wght@600&display=swap" rel="stylesheet"><style>body{margin:0;font-family:Inter,sans-serif;}[data-seite]{box-shadow:none!important;margin:0 auto!important;}[data-seite]+[data-seite]{page-break-before:always;}@page{size:A4;margin:12mm;}</style></head><body>' + el.innerHTML + '</body></html>');
      w.document.close(); setTimeout(() => { w.focus(); w.print(); }, 500);
      const html = el.innerHTML;
      this.setState(s => {
        const alle = s.bestellbelege || BB_START;
        const alt = alle.find(x => x.nr === bb.nr);
        const jetzt = new Date();
        const eintrag = {nr: bb.nr, datum: jetzt.toLocaleDateString('de-DE', {day: '2-digit', month: '2-digit', year: 'numeric'}), zeit: jetzt.toLocaleTimeString('de-DE', {hour: '2-digit', minute: '2-digit'}),
          name: bb.name.trim() || 'Barkunde', tel: bb.tel, mail: bb.mail, art: bb.art, termin: bb.termin, anzahlung: num(bb.anzahlung), hinweis: bb.hinweis, summe: brutto, zahlart: bb.zahlart || 'Offen', ziel: parseInt(bb.ziel, 10) || 14,
          kasse: s.aktiveKasseId || 'Verkaufsraum', bearbeiter: (s.angemeldet || {}).name || 'Marko Ahrens', status: alt ? alt.status : 'Bestellt',
          pos: pos.map(p => ({titel: p.titel, typ: p.typ, menge: p.menge, pers: p.pers})), html};
        return {bbZaehler: alt ? (s.bbZaehler || 0) : (s.bbZaehler || 0) + 1, bestellbelege: [eintrag].concat(alle.filter(x => x.nr !== bb.nr)),
          kasseToast: {text: 'Bestellbeleg ' + bb.nr + (alt ? ' aktualisiert' : ' abgelegt') + ' — zu finden unter „Bestellbelege“.', nr: bb.nr}};
      });
      clearTimeout(this._ktT); this._ktT = setTimeout(() => this.setState({kasseToast: null}), 6000);
    };
    const tog = (k, lab, hint) => ({label: lab, hinweis: hint, an: !!bb[k], bg: bb[k] ? '#101010' : '#c9ccd1', pos: bb[k] ? 'flex-end' : 'flex-start', onClick: () => set({[k]: !bb[k]})});
    return {
      bbOffen: true, onBestellbeleg: () => {}, bbKnopfFg: '#101010', bbRef: this.bbRef,
      onBbZu: () => this.setState({bb: null, bbAuf: {}}),
      bbAnzahlPos: String(pos.length),
      bbKundeAuf: (() => { const o = !!(st.bbAuf || {}).kunde; return {offen: o, pfeil: o ? '90deg' : '0deg', onToggle: () => this.setState(s => ({bbAuf: Object.assign({}, s.bbAuf, {kunde: !(s.bbAuf || {}).kunde})}))}; })(),
      bbGestaltenAuf: (() => { const o = !!(st.bbAuf || {}).gestalten; return {offen: o, pfeil: o ? '90deg' : '0deg', onToggle: () => this.setState(s => ({bbAuf: Object.assign({}, s.bbAuf, {gestalten: !(s.bbAuf || {}).gestalten})}))}; })(),
      bbKundeKurz: [bb.name.trim() || 'Kein Kunde eingetragen', bb.art + (bb.termin ? ' ab ' + bb.termin : ''), BB_ZAHL({zahlart: bb.zahlart, ziel: bb.ziel}).text, num(bb.anzahlung) > 0 ? 'Anzahlung ' + EUR(num(bb.anzahlung)) : ''].filter(Boolean).join(' · '),
      bbGestaltenKurz: [bb.preise ? 'mit Preisen' : 'ohne Preise', bb.unterschrift ? 'Unterschrift' : '', bb.werkstatt ? 'Werkstattkopie' : ''].filter(Boolean).join(' · '),
      bbNr: bb.nr, bbQr: QR(BELEG_URL(bb.nr)), bbQrUrl: BELEG_URL(bb.nr).replace('https://', ''), bbDatum: new Date().toLocaleDateString('de-DE'), bbKasse: st.aktiveKasseId || 'Verkaufsraum', bbBearbeiter: (st.angemeldet || {}).name || '—',
      bbTitel: bb.titel, onBbTitel: e => set({titel: e.target.value}),
      bbEinleitung: bb.einleitung, onBbEinleitung: e => set({einleitung: e.target.value}),
      bbName: bb.name, onBbName: e => set({name: e.target.value}),
      bbTel: bb.tel, onBbTel: e => set({tel: e.target.value}),
      bbMail: bb.mail, onBbMail: e => set({mail: e.target.value}),
      bbKundeLeer: !bb.name.trim(), bbKundeDa: !!bb.name.trim(),
      bbArten: ['Abholung', 'Lieferung', 'Versand'].map(a => ({label: a, bg: bb.art === a ? '#101010' : '#FFFFFF', fg: bb.art === a ? '#FFFFFF' : '#101010', border: bb.art === a ? '#101010' : '#8a9099', onClick: () => set({art: a})})),
      bbArt: bb.art, bbTerminLabel: bb.art === 'Abholung' ? 'Abholbereit ab' : bb.art === 'Lieferung' ? 'Liefertermin' : 'Versand bis',
      bbTermin: bb.termin, onBbTermin: e => set({termin: e.target.value}),
      bbAnzahlung: bb.anzahlung, onBbAnzahlung: e => set({anzahlung: e.target.value}),
      bbZahlarten: [['Offen', 'Noch offen'], ['Karte', 'Bezahlt · Karte'], ['Bar', 'Bezahlt · Bar'], ['Rechnung', 'Rechnung']].map(([k, l]) => { const an = (bb.zahlart || 'Offen') === k; return {label: l, bg: an ? '#101010' : '#FFFFFF', fg: an ? '#FFFFFF' : '#101010', border: an ? '#101010' : '#8a9099', onClick: () => set({zahlart: k})}; }),
      bbIstRechnung: bb.zahlart === 'Rechnung', bbZiel: bb.ziel || '', onBbZiel: e => set({ziel: e.target.value.replace(/[^0-9]/g, '')}),
      bbZahlText: BB_ZAHL({zahlart: bb.zahlart, ziel: bb.ziel}).text,
      bbZahlHinweis: bb.zahlart === 'Offen' ? 'Übergabe erst nach Bezahlung.' : bb.zahlart === 'Rechnung' ? 'Übergabe erlaubt, Zahlung per Rechnung.' : 'Bezahlt – Übergabe erlaubt.',
      bbHatAnzahlung: anz > 0, bbAnzahlungStr: EUR(anz), bbRestStr: EUR(Math.max(0, brutto - anz)),
      bbHinweis: bb.hinweis, onBbHinweis: e => set({hinweis: e.target.value}), bbHatHinweis: !!bb.hinweis.trim(),
      bbFuss: bb.fuss, onBbFuss: e => set({fuss: e.target.value}),
      bbPositionen: pos, bbSumme: EUR(brutto), bbMwst: EUR(brutto - brutto / 1.19),
      bbSpalte: bb.preise ? '90px' : '0px', bbPreise: !!bb.preise, bbUnterschrift: !!bb.unterschrift, bbWerkstatt: !!bb.werkstatt,
      bbOptionen: [tog('preise', 'Preise anzeigen', 'Aus: reiner Auftragszettel'), tog('unterschrift', 'Unterschriftsfeld', 'Kunde bestätigt die Personalisierung'), tog('werkstatt', 'Werkstattkopie', 'Zweite Seite ohne Preise')],
      onBbDrucken: drucken,
      bbAnzahlPers: String(pos.filter(p => p.hatPers).length)
    };
  }
  adminVals() {
    const st = this.state;
    const tab = st.adminTab || 'sprachen';
    const sys = st.systemSprache || 'de';
    const karten = [
      ['sprachen', 'Systemsprachen', 'Standardsprache und Sprache je Benutzer festlegen.', 'M4 5h9M8.5 3v2M6 5c0 4 3 7 6 8M11 5c-.5 4-3.5 8-7 9M13 21l4-10 4 10M14.5 17h5'],
      ['protokoll', 'Systemprotokoll', 'Alle sicherheitsrelevanten Aktionen im Volltext einsehen.', 'M8 4h8l4 4v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM8 12h8M8 16h5'],
      ['backup', 'Datenbank & Backup', 'Sicherungen, Wiederherstellung und Datenexport.', 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6']
    ];
    const pf = st.protFilter || 'Alle';
    const pq = (st.protSuche || '').trim().toLowerCase();
    const PROT = (st.protExtra || []).concat(PROTOKOLL);
    const plist = PROT.filter(p => (pf === 'Alle' || p.ebene === pf) && (!pq || (p.ereignis + ' ' + p.benutzer + ' ' + p.kasse + ' ' + p.id + ' ' + p.kategorie + ' ' + p.detail).toLowerCase().includes(pq)));
    const EB = {Info: ['#eef0f2', '#303640', 'i'], Warnung: ['#fdebc8', '#6b4200', '!'], Fehler: ['#fde0e2', '#9b1520', '✕'], Sicherheit: ['#e8e4ff', '#3d2a99', '◆']};
    const bks = (st.bkExtra || []).concat(BACKUPS);
    const lauf = st.bkLauf;
    const restore = st.bkRestore;
    const restoreOk = (st.bkRestoreText || '').trim() === 'WIEDERHERSTELLEN';
    const melde = (t, typ) => { this.setState({bkMeldung: {t, typ}}); clearTimeout(this._bkT); this._bkT = setTimeout(() => this.setState({bkMeldung: null}), 4500); };
    const auto = st.bkAuto !== false;
    return {
      adminKarten: karten.map(k => { const a = tab === k[0]; return {label: k[1], hinweis: k[2], icon: k[3], bg: a ? '#f4f4f4' : '#FFFFFF', border: a ? '#101010' : '#e5e7eb', iconBg: a ? '#101010' : '#e5e7eb', iconFg: a ? '#FFFFFF' : '#101010', onClick: () => this.setState({adminTab: k[0]})}; }),
      adminSprachen: tab === 'sprachen', adminProtokoll: tab === 'protokoll', adminBackup: tab === 'backup',
      sysSprachen: SPRACHEN.map(l => { const a = sys === l.code; return {ist_de: l.code === 'de', ist_gb: l.code === 'en', ist_fr: l.code === 'fr', ist_es: l.code === 'es', ist_pt: l.code === 'pt', name: l.name, flagge: l.flagge, info: a ? 'Aktiv für alle' : l.info, border: a ? '#101010' : '#e5e7eb', bg: a ? '#f4f4f4' : '#FFFFFF', dot: a ? '#101010' : 'transparent', onClick: () => this.setState({systemSprache: l.code})}; }),
      benutzerSprachen: (st.benutzer || BENUTZER_START).filter(b => !(st.benutzerAus || {})[b.id]).map(b => ({
        name: b.name, kuerzel: b.kuerzel, rolle: b.rolle,
        optionen: [{code: null, kurz: 'Wie System', name: 'Wie System', flagge: ''}].concat(SPRACHEN.map(l => ({code: l.code, kurz: l.code.toUpperCase(), name: l.name, flagge: l.flagge}))).map(o => {
          const a = (b.sprache || null) === o.code;
          return {ist_de: o.code === 'de', ist_gb: o.code === 'en', ist_fr: o.code === 'fr', ist_es: o.code === 'es', ist_pt: o.code === 'pt', kurz: o.kurz, name: o.name, border: a ? '#101010' : '#e5e7eb', bg: a ? '#101010' : '#FFFFFF', fg: a ? '#FFFFFF' : '#101010',
            onClick: () => this.setState(s => {
              const liste = (s.benutzer || BENUTZER_START).map(x => x.id === b.id ? Object.assign({}, x, {sprache: o.code}) : x);
              const ang = s.angemeldet && s.angemeldet.id === b.id ? Object.assign({}, s.angemeldet, {sprache: o.code}) : s.angemeldet;
              return {benutzer: liste, angemeldet: ang};
            })};
        })
      })),
      protKennzahlen: [
        {label: 'Protokolleinträge', wert: String(PROT.length), fg: '#101010'},
        {label: 'Warnungen', wert: String(PROT.filter(p => p.ebene === 'Warnung').length), fg: '#6b4200'},
        {label: 'Fehler', wert: String(PROT.filter(p => p.ebene === 'Fehler').length), fg: '#9b1520'},
        {label: 'Sicherheitsereignisse', wert: String(PROT.filter(p => p.ebene === 'Sicherheit').length), fg: '#3d2a99'}
      ],
      protFilter: ['Alle', 'Info', 'Warnung', 'Fehler', 'Sicherheit'].map(f => { const a = pf === f; return {label: f, bg: a ? '#101010' : '#FFFFFF', fg: a ? '#FFFFFF' : '#101010', border: a ? '#101010' : '#8a9099', onClick: () => this.setState({protFilter: f})}; }),
      protSuche: st.protSuche || '', onProtSuche: e => this.setState({protSuche: e.target.value}),
      protListe: plist.map(p => { const o = st.protOffen === p.id; const e = EB[p.ebene]; return Object.assign({}, p, {bg: e[0], fg: e[1], zeichen: e[2], offen: o, pfeil: o ? '▴' : '▾', onToggle: () => this.setState({protOffen: o ? null : p.id})}); }),
      protLeer: plist.length === 0,
      protExportLabel: st.protExportiert ? 'Export erstellt ✓' : 'Protokoll exportieren',
      onProtExport: () => { this.setState({protExportiert: true}); setTimeout(() => this.setState({protExportiert: false}), 2500); },
      dbInfo: [
        {label: 'System', wert: 'PostgreSQL 16.4 · Kassenserver SRV-SYKE-01'},
        {label: 'Größe', wert: '2,84 GB · 146 Tabellen'},
        {label: 'Journal-Einträge', wert: '1.248.310 seit 01.01.2019'},
        {label: 'Replikation', wert: 'Standby Frankfurt · synchron (2 s Verzug)'},
        {label: 'Letzte Wartung', wert: DT('VACUUM/ANALYZE · 24.09.2026, 03:10')},
        {label: 'Verschlüsselung', wert: 'Festplatte AES-256 · Verbindungen TLS 1.3'},
        {label: 'Offline-Puffer', wert: 'KASSE-03 Mobil · 0 ausstehende Belege'}
      ],
      bkAutoLabel: auto ? 'Automatisch an' : 'Automatisch aus', bkAutoFg: auto ? '#0d5f38' : '#9b1520', bkAutoBg: auto ? '#0d5f38' : '#c9ccd1', bkAutoPos: auto ? 'flex-end' : 'flex-start',
      onBkAuto: () => this.setState({bkAuto: !auto}),
      bkPlan: [
        {label: 'Zeitpunkt', wert: auto ? 'Täglich 02:30 Uhr · nach Kassenschluss' : 'Deaktiviert – nur manuelle Sicherung'},
        {label: 'Aufbewahrung', wert: '14 tägliche · 8 wöchentliche · 12 monatliche'},
        {label: 'Ziel 1', wert: 'NAS im Büro (lokal)'},
        {label: 'Ziel 2', wert: 'Cloud-Speicher Frankfurt · verschlüsselt'},
        {label: 'Journal & TSE-Export', wert: '10 Jahre revisionssicher (GoBD)'},
        {label: 'Letzter Wiederherstellungstest', wert: DT('01.09.2026 · erfolgreich (5:48 min)')}
      ],
      bkLaeuft: !!lauf, bkSchritt: lauf ? lauf.schritt : '', bkProzent: lauf ? lauf.p + '%' : '0%', bkProzentText: lauf ? lauf.p + ' %' : '',
      bkJetztLabel: lauf ? 'Sicherung läuft …' : 'Jetzt sichern', bkJetztBg: lauf ? '#8a9099' : '#101010', bkJetztCursor: lauf ? 'wait' : 'pointer',
      onBkJetzt: () => {
        if (this.state.bkLauf) return;
        const schritte = ['Kassen kurz pausieren …', 'Datenbank-Snapshot erstellen …', 'Komprimieren …', 'Verschlüsseln (AES-256) …', 'Übertragen: NAS …', 'Übertragen: Cloud Frankfurt …', 'Prüfsumme verifizieren …'];
        let i = 0;
        const tick = () => {
          if (i >= schritte.length) {
            const d = new Date(); const z = d.toLocaleDateString('de-DE') + ' ' + d.toLocaleTimeString('de-DE', {hour: '2-digit', minute: '2-digit'});
            this.setState(s => ({bkLauf: null, bkExtra: [{zeit: z, typ: 'Manuell', groesse: '1,12 GB', dauer: '3:05', ziel: 'NAS + Cloud Frankfurt', status: 'Verifiziert'}].concat(s.bkExtra || [])}));
            melde('Sicherung erfolgreich erstellt und verifiziert (simuliert).', 'ok');
            return;
          }
          this.setState({bkLauf: {schritt: schritte[i], p: Math.round((i + 1) / schritte.length * 100)}});
          i++; this._bkLaufT = setTimeout(tick, 650);
        };
        tick();
      },
      onBkPruefen: () => melde('Integrität geprüft: 18 Sicherungen, alle Prüfsummen gültig, Hash-Kette des Protokolls vollständig (simuliert).', 'ok'),
      bkListe: bks.map(k => ({zeit: k.zeit, typ: k.typ, groesse: k.groesse, dauer: k.dauer, ziel: k.ziel, status: k.status,
        stBg: k.status === 'Verifiziert' ? '#dcf3e6' : '#fdebc8', stFg: k.status === 'Verifiziert' ? '#0d5f38' : '#6b4200',
        onRestore: () => this.setState({bkRestore: k.zeit, bkRestoreText: ''})})),
      bkRestoreOffen: !!restore, bkRestoreZeit: restore || '', bkRestoreText: st.bkRestoreText || '',
      onBkRestoreText: e => this.setState({bkRestoreText: e.target.value.toUpperCase()}),
      onBkRestoreZu: () => this.setState({bkRestore: null}),
      bkRestoreBg: restoreOk ? '#9b1520' : '#e5e7eb', bkRestoreFg: restoreOk ? '#FFFFFF' : '#545b66', bkRestoreCursor: restoreOk ? 'pointer' : 'not-allowed',
      onBkRestoreOk: () => { if (!restoreOk) return; const z = restore; this.setState({bkRestore: null}); melde('Wiederherstellung auf Stand ' + z + ' simuliert – im Prototyp werden keine Daten verändert.', 'warn'); },
      bkHatMeldung: !!st.bkMeldung, bkMeldung: st.bkMeldung ? st.bkMeldung.t : '',
      bkMeldungBg: st.bkMeldung && st.bkMeldung.typ === 'warn' ? '#fdebc8' : '#dcf3e6', bkMeldungFg: st.bkMeldung && st.bkMeldung.typ === 'warn' ? '#6b4200' : '#0d5f38',
      exporte: [
        {label: 'DSFinV-K (Zeitraum)', hinweis: 'Kassendaten für die Betriebsprüfung'},
        {label: 'DATEV-Buchungsstapel', hinweis: 'Umsätze und Zahlarten für die Steuerberatung'},
        {label: 'Stammdaten CSV', hinweis: 'Artikel, Kunden, Lieferanten', csv: true},
        {label: 'Vollständiger SQL-Dump', hinweis: 'Nur root · für Systemwechsel'}
      ].map(e => Object.assign(e, {onClick: () => { if (e.csv) { this.csvArtikel(); this.csvKunden(); this.csvLieferanten(); return melde('3 CSV-Dateien heruntergeladen: Artikel, Kunden, Lieferanten', 'ok'); } melde(e.label + ' wird erstellt … (simuliert)', 'ok'); }}))
    };
  }
  componentWillUnmount() {
    if (this._mo) this._mo.disconnect();
    clearInterval(this._t);
    window.removeEventListener('resize', this._fit);
    window.removeEventListener('keydown', this._esc);
  }

  key = (id, farbe, groesse, sn) => id + '::' + (farbe || '') + '::' + (groesse || '') + '::' + (sn || '');

  kunden = () => KUNDEN.map(k => Object.assign({}, k, (this.state.kundenOv || {})[k.nr] || {})).concat(this.state.kundenNeu || []);

  kaeufeVon = (nr) => ((this.state.kaufExtra || {})[nr] || []).concat(KAEUFE[nr] || []);

  bestandVon = (p) => {
    const serien = SERIEN[p.id] || [];
    if (!serien.length) return p.stock;
    const weg = this.state.snVerkauft || {};
    return serien.filter(x => !weg[x.sn]).length;
  };

  rechnungNr = (s) => SHOP_NR('rechnungPraefix', 'R') + String(416 + (s.rechnungZaehler || 0)).padStart(4, '0');
  rechnungPaddel = (s) => {
    const korb = this.korbVon(s);
    const datum = new Date().toLocaleDateString('de-DE', {day: '2-digit', month: '2-digit', year: 'numeric'});
    const nr = this.rechnungNr(s);
    let start = 0;
    return Object.keys(korb).map(k => {
      const p = PRODUKTE.find(x => x.id === k.split('::')[0]);
      if (!p || p.cat !== 'paddel') return null;
      const pid = k.split('::')[0];
      const vg = (s.paddelVorgabe || {})[pid] || [];
      const ids = vg.length >= korb[k] ? vg.slice(0, korb[k]) : PADDEL_IDS(datum, nr, start, korb[k]);
      start += korb[k];
      return {k, p, ids, nr, ausAngebot: vg.length >= korb[k] ? s.paddelVorgabeAg : null};
    }).filter(Boolean);
  };
  zeigeEtiketten = (titel, items, ref) => {
    if (this.state.angemeldet && !this.meineRechte()['QR-Etiketten drucken']) return this.frage('Keine Berechtigung', 'Ihre Rolle darf keine QR-Etiketten drucken. Das Recht „QR-Etiketten drucken" vergibt der Admin unter Einstellungen › Benutzer & Rollen.', () => {}, 'info');
    this.setState({etikett: {titel, items, ref: ref || titel}});
  };
  qrLogFuer = (st, ref) => (st.qrLog || []).filter(l => l.ref === ref);
  zurKassePatch = () => ({view: 'kasse', detailId: null, bb: null, bestellOffen: false, kasseAgOffen: false, mailVorschauHersteller: null, mailBearbeiten: false,
    dokVorschau: null, belegVorschau: null, kdFormNr: null, kdDetailNr: null, txBeleg: null, kachel: null, rubrikOffen: false, liefFormOffen: false, etikett: null,
    kasseMenuOffen: false, agVorschau: false, eigenePinOffen: false, herstellerOpen: false, detailOpen: false, bestaetigung: null, bkRestore: null, navTip: null});

  angebotZuKorb = (ag) => {
    const ids = this.agPaddel(ag);
    const korb = {}, notiz = {}, vorgabe = {};
    ag.pos.forEach((p, i) => {
      if (!p.pid) return;
      const k = p.korbKey || p.pid;
      korb[k] = (korb[k] || 0) + p.menge;
      if (p.posNotiz) notiz[k] = p.posNotiz;
      if (ids[i] && ids[i].length) vorgabe[p.pid] = (vorgabe[p.pid] || []).concat(ids[i]);
    });
    return s => ({carts: Object.assign({}, s.carts, {[s.aktiveKasseId]: korb}), kundeNr: ag.kundeNr && ag.kundeNr !== 'BAR' ? ag.kundeNr : null, posNotiz: notiz, notizOffen: null, korbZeileOffen: null,
      view: 'kasse', agEdit: null, agVorschau: false, kasseAgOffen: false, kasseToast: null, paddelVorgabe: vorgabe, paddelVorgabeAg: ag.nr});
  };

  agPaddel = (ed) => {
    if (!ed || ed.status !== 'Angenommen') return ed ? ed.pos.map(() => []) : [];
    let start = 0;
    return ed.pos.map(p => {
      const pr = p.pid ? PRODUKTE.find(x => x.id === p.pid) : null;
      if (!pr || pr.cat !== 'paddel') return [];
      const ids = PADDEL_IDS(ed.angenommenAm || ed.datum, ed.nr, start, p.menge);
      start += p.menge;
      return ids;
    });
  };
  etikettVals = (st) => {
    const et = st.etikett;
    return {
      etikettOffen: !!et,
      etTitel: et ? et.titel : '',
      etLog: et ? this.qrLogFuer(st, et.ref).map(l => (l.nachdruck ? 'Nachdruck ' : 'Gedruckt ') + l.zeit + ' · ' + l.benutzer + ' · ' + l.anzahl + (l.anzahl === 1 ? ' Etikett' : ' Etiketten')) : [],
      etDruckLabel: et && this.qrLogFuer(st, et.ref).length ? 'Nachdruck' : 'Drucken',
      etDrucker: QR_DRUCKER.name.split(' · ')[0] + ' · 24 × 50 mm wasserfest' + (st.druckerAus && st.druckerAus[QR_DRUCKER.id] ? ' · Drucker deaktiviert' : ''),
      etAnzahl: et ? (et.items.length === 1 ? '1 Etikett' : et.items.length + ' Etiketten') : '',
      etItems: et ? et.items.map(e => Object.assign({}, e, {qr: QR(ITEM_URL(e.code))})) : [],
      onEtZu: () => this.setState({etikett: null}),
      onEtDrucken: () => {
        if (!et) return;
        const jetzt = new Date();
        const zeit = jetzt.toLocaleDateString('de-DE', {day: '2-digit', month: '2-digit', year: 'numeric'}) + ' ' + jetzt.toLocaleTimeString('de-DE');
        const benutzer = (st.angemeldet || {}).name || 'root';
        const nachdruck = this.qrLogFuer(st, et.ref).length > 0;
        const codes = et.items.map(e => e.code);
        this.setState(s => ({
          qrLog: [{ref: et.ref, zeit: zeit.slice(0, 16), benutzer, anzahl: codes.length, nachdruck}].concat(s.qrLog || []),
          protExtra: [{zeit, ebene: 'Info', kategorie: 'Etiketten', benutzer, kasse: s.aktiveKasseId || 'Verkaufsraum',
            ereignis: (nachdruck ? 'QR-Etiketten nachgedruckt: ' : 'QR-Etiketten gedruckt: ') + et.ref,
            detail: codes.join(', ') + ' · ' + QR_DRUCKER.name,
            id: 'LOG-' + String(48214 + (s.protExtra || []).length).padStart(7, '0'),
            hash: Math.abs(codes.join('').split('').reduce((a, c) => (a * 31 + c.charCodeAt(0)) | 0, 7)).toString(16).padStart(8, '0')}].concat(s.protExtra || [])
        }));
        const w = window.open('', '_blank'); if (!w) return;
        const esc = (s) => String(s).replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]));
        const labels = et.items.map(e => '<div class="l"><img class="q" s' + 'rc="' + QR(ITEM_URL(e.code)) + '"><div class="t"><div class="k">' + esc(e.kopf) + '</div><div class="n">' + esc(e.name) + '</div><div class="a">' + esc(e.art) + '</div><div class="c">' + esc(e.code) + '</div></div></div>').join('');
        w.document.write('<!doctype html><html><head><meta charset="utf-8"><title>Etiketten</title><style>@page{size:50mm 24mm;margin:0}body{margin:0;font-family:Inter,Arial,sans-serif;color:#000}.l{width:50mm;height:24mm;box-sizing:border-box;padding:1.5mm;display:flex;align-items:center;gap:2mm;page-break-after:always;overflow:hidden}.q{width:20mm;height:20mm;flex:none}.t{min-width:0;line-height:1.2}.k{font-size:6pt;letter-spacing:.08em;text-transform:uppercase;font-weight:600}.n{font-size:8pt;font-weight:600}.a{font-size:6pt;margin-top:1mm}.c{font-size:9pt;font-weight:700;font-variant-numeric:tabular-nums}</style></head><body>' + labels + '</body></html>');
        w.document.close(); setTimeout(() => { w.focus(); w.print(); }, 400);
      }
    };
  };

  serienFrei = (id) => {
    const weg = this.state.snVerkauft || {};
    const imKorb = Object.keys(this.korb()).map(k => k.split('::')[3]).filter(Boolean);
    return (SERIEN[id] || []).filter(x => !weg[x.sn] && imKorb.indexOf(x.sn) < 0);
  };

  add = (id, farbe, groesse, sn) => this.setState(s => {
    const k = this.key(id, farbe !== undefined ? farbe : (VARIANTEN[id] || {}).farben && VARIANTEN[id].farben[0],
      groesse !== undefined ? groesse : (VARIANTEN[id] || {}).groessen && VARIANTEN[id].groessen[0], sn);
    const c = Object.assign({}, this.korbVon(s));
    c[k] = sn ? 1 : (c[k] || 0) + 1;
    return this.korbSetzen(s, c);
  });
  korbVon = (s) => (s.carts || {})[s.aktiveKasseId] || {};
  korbSetzen = (s, c) => ({carts: Object.assign({}, s.carts, {[s.aktiveKasseId]: c})});
  korb = () => this.korbVon(this.state);
  minus = (k) => this.setState(s => {
    const c = Object.assign({}, this.korbVon(s));
    if ((c[k] || 0) <= 1) delete c[k]; else c[k] = c[k] - 1;
    return this.korbSetzen(s, c);
  });
  plus = (k) => this.setState(s => {
    if (k.split('::')[3]) return {};
    const c = Object.assign({}, this.korbVon(s));
    c[k] = (c[k] || 0) + 1;
    return this.korbSetzen(s, c);
  });
  remove = (k) => this.setState(s => {
    const c = Object.assign({}, this.korbVon(s)); delete c[k];
    return this.korbSetzen(s, c);
  });

  frage = (titel, text, aktion, art) => this.setState({
    bestaetigung: {
      titel: titel, text: text, aktion: aktion,
      okLabel: art === 'loeschen' ? 'Entfernen' : 'Speichern',
      okBg: art === 'loeschen' ? '#b3262f' : '#101010',
      iconBg: art === 'loeschen' ? '#fde0e2' : '#e5e7eb',
      iconFg: art === 'loeschen' ? '#9b1520' : '#1f2329',
      icon: art === 'loeschen'
        ? 'M4 7h16M10 7V5h4v2M6 7l1 13h10l1-13'
        : 'M5 4h10l4 4v12H5V4zM8 4v5h6V4M8 15h8'
    }
  });

  stock = (id, d) => this.setState(s => ({
    stockDelta: Object.assign({}, s.stockDelta, {[id]: (s.stockDelta[id] || 0) + d})
  }));

  frage = (titel, text, aktion, art) => this.setState({
    bestaetigung: {
      titel, text, aktion,
      okLabel: art === 'loeschen' ? 'Entfernen' : art === 'info' ? 'Verstanden' : 'Speichern',
      okBg: art === 'loeschen' ? '#b3262f' : '#101010',
      iconBg: art === 'loeschen' ? '#fde0e2' : '#e5e7eb',
      iconFg: art === 'loeschen' ? '#9b1520' : '#1f2329',
      icon: art === 'loeschen'
        ? 'M4 7h16M10 7V5h4v2M6 7l1 13h10l1-13'
        : 'M5 4h10l4 4v12H5V4zM8 4v5h6V4M8 15h8'
    }
  });

  rechteFuer(rolle, system) {
    const map = {};
    const i = ROLLEN.indexOf(rolle);
    const matrix = (this.state && this.state.rechte) || [];
    RECHTE.forEach(r => {
      const z = matrix.find(x => x.recht === r[0]);
      map[r[0]] = system ? true : (z && rolle in z.erlaubt) ? !!z.erlaubt[rolle] : (i >= 0 ? !!r[i + 1] : r[0] === 'Verkauf kassieren');
    });
    return map;
  }

  meineRechte() {
    const u = this.state.angemeldet;
    if (!u) return {};
    const live = (this.state.benutzer || []).find(b => b.id === u.id) || u;
    return this.rechteFuer(live.rolle, !!live.system);
  }

  startView(u) {
    return 'dashboard';
  }


  shopVals(st) {
    const s = SHOP_LADEN(), d = s.daten;
    const setze = (id, wert) => { const n = SHOP_LADEN(); n.daten[id] = wert; SHOP_SICHERN(n.daten, n.logo); this.setState({shopRev: (this.state.shopRev || 0) + 1}); };
    const hex = /^#[0-9a-fA-F]{6}$/.test(d.akzent) ? d.akzent : SHOP_STD.akzent;
    return {
      shopVorschauLogo: s.logo || (window.__resources && window.__resources.zlogo) || 'assets/zykol-logo.png',
      shopVorschauFirma: d.firma, shopVorschauZusatz: d.zusatz, shopAkzent: hex,
      shopVorschauAdresse: [d.strasse, d.ort, d.telefon, d.email].filter(Boolean).join(' · '),
      shopGespeichert: 'Änderungen werden sofort gespeichert und gelten für alle Kassen und Dokumente.',
      onShopReset: () => this.frage('Shop-Einstellungen zurücksetzen?', 'Firmendaten, Logo, Farbe und Texte werden auf den zykol-Demoshop zurückgesetzt.', () => { SHOP_SICHERN(Object.assign({}, SHOP_STD), null); this.setState({shopRev: (this.state.shopRev || 0) + 1}); }, 'loeschen'),
      shopGruppen: SHOP_GRUPPEN.map(g => ({
        titel: g.titel, hinweis: g.hinweis,
        felder: g.felder.map(([id, label, typ, breite]) => {
          const wert = d[id];
          return {
            label, spalte: breite === 2 ? '1 / -1' : 'auto',
            istText: typ === 'text' || typ === 'zahl', istArea: typ === 'area', istToggle: typ === 'toggle', istFarbe: typ === 'farbe', istLogo: typ === 'logo',
            inputMode: typ === 'zahl' ? 'numeric' : 'text', platz: String(SHOP_STD[id] || ''),
            wert: typeof wert === 'string' ? wert : '',
            onChange: e => setze(id, typ === 'zahl' ? e.target.value.replace(/[^0-9]/g, '') : e.target.value),
            switchBg: wert ? '#101010' : '#e5e7eb', switchPos: wert ? 'flex-end' : 'flex-start', onToggle: () => setze(id, !wert),
            toggleText: wert ? 'An' : 'Aus',
            farben: SHOP_FARBEN.map(f => ({farbe: f, rand: f.toLowerCase() === hex.toLowerCase() ? '#101010' : '#FFFFFF', ring: f.toLowerCase() === hex.toLowerCase() ? '0 0 0 2px #101010' : '0 0 0 1px #e5e7eb', onClick: () => setze('akzent', f)})),
            farbWert: hex,
            onFarbPicker: e => setze('akzent', e.target.value),
            logoSrc: s.logo || (window.__resources && window.__resources.zlogo) || 'assets/zykol-logo.png', logoInfo: s.logo ? 'Eigenes Logo' : 'Standard: zykol-Logo',
            hatEigenesLogo: !!s.logo,
            onLogo: e => { const f = e.target.files && e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => { const n = SHOP_LADEN(); SHOP_SICHERN(n.daten, r.result); this.setState({shopRev: (this.state.shopRev || 0) + 1}); }; r.readAsDataURL(f); },
            onLogoReset: () => { const n = SHOP_LADEN(); SHOP_SICHERN(n.daten, null); this.setState({shopRev: (this.state.shopRev || 0) + 1}); }
          };
        })
      }))
    };
  }

  dashboardVals(st) {
    const WT = ['So','Mo','Di','Mi','Do','Fr','Sa'], WTL = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'];
    const heute = new Date(HEUTE_D), tage = [];
    let naechsteWoche = false;
    for (let d = new Date(heute); ; d.setDate(d.getDate() + 1)) { tage.push(new Date(d)); if (d.getDay() === 0) { if (tage.some(x => !FREI(D_ISO(x)))) break; naechsteWoche = true; } if (tage.length > 14) break; }
    const iso = d => '' + d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
    const de = d => d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' });
    const isoDe = f => f.slice(6, 8) + '.' + f.slice(4, 6) + '.' + f.slice(0, 4);
    const hIso = iso(heute), endIso = iso(tage[tage.length - 1]), morgenIso = WERKTAG(iso(tage[1] || heute));
    const morgenLabel = morgenIso === iso(new Date(heute.getFullYear(), heute.getMonth(), heute.getDate() + 1)) ? 'Morgen' : WTL[I_DATE(morgenIso).getDay()];
    const erl = st.dashErledigt || {}, versch = st.dashVerschoben || {}, eigene = st.dashEigene || [];
    const ausblenden = !!st.dashAusblenden, nurUe = !!st.dashNurUe;
    const alleAg = st.angebote || ANGEBOTE_START;
    const nutzer = st.angemeldet ? ((st.benutzer || []).find(u => u.id === st.angemeldet.id) || st.angemeldet) : { name: 'Marko Ahrens', rolle: 'Verkauf' };
    const rechte = st.angemeldet ? this.meineRechte() : this.rechteFuer('Verkauf', false);
    const rolle = nutzer.system ? 'Admin' : (nutzer.rolle || 'Verkauf');
    const alleAgSehen = rolle === 'Admin' || rolle === 'Filialleitung';
    const zuwMir = id => { const z = (st.dashZuweisung || {})[id]; return !!z && z.fuer === nutzer.name; };
    const eigeneAg = (x, pre) => alleAgSehen || x.bearbeiter === nutzer.name || (!!pre && zuwMir(pre + x.nr));
    const kdName = nr => (KUNDEN.find(k => k.nr === nr) || {}).name || nr;
    const zuKal = t => () => this.setState({ view: 'kalender', kalTag: t, kalJ: +t.slice(0, 4), kalM: +t.slice(4, 6) - 1 });
    const zuAg = nr => () => { const ag = (this.state.angebote || ANGEBOTE_START).find(x => x.nr === nr); if (ag) this.setState({ view: 'angebote', agEdit: JSON.parse(JSON.stringify(ag)), agArtSuche: '', agVorschau: false }); };
    const zuView = v => () => this.setState({ view: v, cat: 'alle', suche: '' });
    const kasse = st.aktiveKasseId || 'Verkaufsraum', hauptkasse = kasse === 'Verkaufsraum';
    const termine = KAL_TERMINE.filter(t => KAL_KASSE(t) === kasse).map(t => ({ typ: t[0], titel: t[1], datum: t[2], zeit: t[3], ort: t[4], info: t[5] }))
      .concat(alleAg.filter(x => hauptkasse && x.status === 'Versendet').map(x => ({ typ: 'Angebot', agNr: x.nr, titel: 'Angebot ' + x.nr + ' läuft ab', datum: WERKTAG_DE(x.gueltig), zeit: 'ganztägig', ort: kdName(x.kundeNr), info: x.bearbeiter })));
    const terminRecht = { Angebot: 'Angebote erstellen & versenden', Lieferung: 'Artikel & Bestände pflegen', Abholung: 'Verkauf kassieren' };
    const amTag = t => termine.filter(e => (!terminRecht[e.typ] || rechte[terminRecht[e.typ]]) && (e.typ !== 'Angebot' || eigeneAg(alleAg.find(x => x.nr === e.agNr) || {}))).filter(e => KAL_START(e.datum) <= t && KAL_ISO(e.datum) >= t).sort((x, y) => x.zeit.localeCompare(y.zeit));
    const basis = [
      { id: 'tagesabschluss', recht: 'Tagesabschluss / Kassenschnitt', titel: 'Tagesabschluss Kasse durchführen', info: 'Kasse ' + kasse, faellig: hIso, ziel: ['kasse', 'Zur Kasse'] },
      { id: 'kasse-oeffnen', recht: 'Verkauf kassieren', titel: 'Wechselgeld zählen und Kasse öffnen', info: 'Kassenbestand 300,00 €', faellig: hIso, ziel: ['kasse', 'Zur Kasse'] },
      { id: 'backup', recht: 'Datenbank & Backup verwalten', titel: 'Backup-Protokoll prüfen', info: 'Automatisches Backup · 03:00 Uhr', faellig: hIso, ziel: ['einstellungen', 'Einstellungen öffnen'] },
      { id: 'tse', recht: 'TSE & Exporte', titel: 'TSE-Export für Steuerberater erstellen', info: DT('Zeitraum September 2026'), faellig: demoISO('20261002'), ziel: ['einstellungen', 'Einstellungen öffnen'] },
      { id: 'inventur-paddel', recht: 'Artikel & Bestände pflegen', titel: 'Inventur Paddelschrank abschließen', info: 'Bestand · Zählliste Brača und Jantex', faellig: demoISO('20260929'), ziel: ['bestand', 'Bestand öffnen'] },
      { id: 'reklamation-nelo', recht: 'Kunden verwalten', titel: 'Reklamation Nelo beantworten', info: 'Haarriss K1 Vanquish · Kunde K-1088', faellig: demoISO('20260930'), ziel: ['kunden', 'Kunde öffnen'] },
      { id: 'preise-lettmann', recht: 'Preis manuell ändern', titel: 'Preisliste Lettmann 2027 einpflegen', info: 'Artikelverwaltung · 14 Artikel', faellig: demoISO('20260926'), ziel: ['artikel', 'Artikel öffnen'] },
      { id: 'bestellvorschlag', recht: 'Lieferanten verwalten', titel: 'Bestellvorschläge für Nelo und Plastex prüfen', info: 'Lieferanten · Mindestbestand unterschritten', faellig: hIso, ziel: ['lieferanten', 'Lieferanten öffnen'] },
      { id: 'wochenbericht', recht: 'Berichte einsehen', titel: 'Wochenbericht Umsatz prüfen', info: DT('Berichte · KW 40'), faellig: demoISO('20261002'), ziel: ['berichte', 'Berichte öffnen'] },
      { id: 'storno-pruefen', recht: 'Transaktionsstatus ändern', titel: 'Offene Stornos freigeben', info: 'Transaktionen · 2 Vorgänge', faellig: demoISO('20260930'), ziel: ['transaktionen', 'Transaktionen öffnen'] },
      { id: 'regal-auffuellen', recht: 'Beleg drucken', titel: 'Verkaufsfläche auffüllen und Preisschilder prüfen', info: 'Paddel und Westen', faellig: hIso }
    ].concat(alleAg.filter(x => x.status === 'Entwurf' && eigeneAg(x, 'ag-')).map(x => ({ id: 'ag-' + x.nr, agNr: x.nr, recht: 'Angebote erstellen & versenden', titel: 'Angebot ' + x.nr + ' versenden', info: kdName(x.kundeNr), faellig: hIso })))
     .concat(alleAg.filter(x => x.status === 'Versendet' && eigeneAg(x, 'nf-') && KAL_ISO(x.gueltig) <= endIso && KAL_ISO(x.gueltig) >= hIso).map(x => ({ id: 'nf-' + x.nr, agNr: x.nr, recht: 'Angebote erstellen & versenden', titel: 'Nachfassen: Angebot ' + x.nr, info: kdName(x.kundeNr) + ' · gültig bis ' + x.gueltig, faellig: KAL_ISO(x.gueltig) })))
     .concat(alleAg.filter(x => x.status === 'Versendet' && eigeneAg(x, 'ab-') && KAL_ISO(x.gueltig) < hIso).map(x => ({ id: 'ab-' + x.nr, agNr: x.nr, recht: 'Angebote erstellen & versenden', titel: 'Abgelaufenes Angebot ' + x.nr + ' nachfassen', info: kdName(x.kundeNr), faellig: KAL_ISO(x.gueltig) })))
     .concat(KAL_TERMINE.filter(t => (t[0] === 'Lieferung' || t[0] === 'Abholung') && (KAL_KASSE(t) === kasse || zuwMir('kt-' + t[1]))).map(t => ({ id: 'kt-' + t[1], recht: t[0] === 'Lieferung' ? 'Artikel & Bestände pflegen' : 'Verkauf kassieren', faellig: KAL_START(t[2]), kalTag: KAL_START(t[2]),
        titel: t[0] === 'Lieferung' ? 'Wareneingang prüfen und einbuchen' : 'Ware bereitstellen', info: t[1], ziel: t[0] === 'Lieferung' ? ['bestand', 'Bestand öffnen'] : null })))
     .concat(eigene.map(e => Object.assign({ eigen: true }, e)));
    basis.forEach(x => { if (x.faellig) x.faellig = WERKTAG(x.faellig); });
    const ich = nutzer.name || '', zuwMap = st.dashZuweisung || {};
    const zuwVon = x => zuwMap[x.id] || (x.eigen && x.fuer && x.fuer !== x.von ? { fuer: x.fuer, von: x.von } : null);
    const mitZuw = basis.map(x => { const z = zuwVon(x); return Object.assign({}, x, { zuw: z,
        info: z ? (z.fuer === ich ? 'Von ' + z.von + ' delegiert' : 'Delegiert an ' + z.fuer) + (x.eigen ? '' : ' · ' + x.info) : x.info,
        kannWeg: !z || z.von === ich }); })
      .filter(x => !x.zuw || x.zuw.fuer === ich || x.zuw.von === ich);
    const verteilRecht = !!rechte['Aufgaben delegieren'];
    const verteilZiele = (st.benutzer || []).filter(b => !b.system && b.name !== ich && !(st.benutzerAus || {})[b.id]);
    const setZuw = (x, v) => this.setState(y => { const m = Object.assign({}, y.dashZuweisung); if (v) m[x.id] = { fuer: v, von: ich }; else delete m[x.id];
      const out = { dashZuweisung: m }; if (x.eigen) out.dashEigene = (y.dashEigene || []).map(e => e.id === x.id ? Object.assign({}, e, { fuer: undefined, von: undefined }) : e); return out; });
    const aufg = mitZuw.filter(x => !x.recht || rechte[x.recht] || (x.zuw && x.zuw.fuer === ich)).map(x => Object.assign({}, x, { faellig: versch[x.id] || x.faellig, verschoben: !!versch[x.id] })).filter(x => x.faellig <= endIso);
    const tagDiff = f => Math.round((heute - new Date(+f.slice(0, 4), +f.slice(4, 6) - 1, +f.slice(6, 8))) / 86400000);
    const setMap = (key, id, val) => this.setState(x => { const m = Object.assign({}, x[key]); if (val === undefined) delete m[id]; else m[id] = val; return { [key]: m }; });
    const aufgVal = x => {
      const done = !!erl[x.id];
      const oeffnen = x.agNr ? ['Angebot ' + x.agNr + ' öffnen', zuAg(x.agNr)] : x.ziel ? [x.ziel[1], zuView(x.ziel[0])] : x.kalTag ? ['Im Kalender zeigen', zuKal(x.kalTag)] : null;
      return { titel: x.titel, info: x.info + (x.verschoben ? ' · verschoben' : ''), textFg: done ? '#646b76' : '#101010', deko: done ? 'line-through' : 'none',
        boxBg: done ? '#101010' : '#FFFFFF', hakenOp: done ? 1 : 0, boxRand: done ? '#101010' : '#8a9099',
        kannOeffnen: !!oeffnen && !done, oeffnenLabel: oeffnen ? oeffnen[0] : '', onOeffnen: oeffnen ? oeffnen[1] : () => {},
        kannVerschieben: !done && x.faellig <= hIso, onMorgen: () => setMap('dashVerschoben', x.id, morgenIso), morgenLabel: morgenLabel,
        kannLoeschen: !!x.eigen && x.kannWeg !== false, onLoeschen: () => this.setState(y => ({ dashEigene: (y.dashEigene || []).filter(e => e.id !== x.id) })),
        onToggle: () => setMap('dashErledigt', x.id, done ? undefined : true),
        kannVerteilen: verteilRecht && !done && verteilZiele.length > 0,
        ...(() => {
          const aktuell = x.zuw && x.zuw.von === ich ? x.zuw.fuer : '';
          const wahl = (st.dashVerteilWahl || {})[x.id];
          const wert = wahl !== undefined ? wahl : aktuell;
          const setWahl = v => this.setState(y => { const m = Object.assign({}, y.dashVerteilWahl); if (v === undefined) delete m[x.id]; else m[x.id] = v; return { dashVerteilWahl: m }; });
          return {
            verteilWert: wert,
            verteilOpts: [{ v: '', label: x.zuw && x.zuw.fuer === ich ? 'Weitergeben an …' : 'Verteilen an …' }].concat(verteilZiele.map(b => ({ v: b.name, label: b.name + ' · ' + b.rolle }))),
            onVerteilen: e => setWahl(e.target.value === aktuell ? undefined : e.target.value),
            kannSenden: !!wert && wert !== aktuell,
            onSenden: () => { setZuw(x, wert); setWahl(undefined); },
            kannZurueck: !!aktuell && (wahl === undefined || wahl === aktuell),
            onZurueck: () => { setZuw(x, ''); setWahl(undefined); }
          };
        })() };
    };
    const sichtbar = x => !(ausblenden && erl[x.id]);
    const termVorbei = e => { const d = KAL_START(e.datum); if (d < hIso) return true; if (d > hIso) return false; const m = /^(\d{1,2}):(\d{2})/.exec(e.zeit || ''); if (!m) return false; const n = new Date(); return +m[1] * 60 + +m[2] < n.getHours() * 60 + n.getMinutes(); };
    const termVal = e => ({ typ: e.typ, titel: e.titel, zeit: e.zeit, ort: e.ort, info: e.info, farbe: termVorbei(e) ? '#9b1520' : (KAL_FARBE[e.typ] || '#545b66'),
      vorbeiBg: termVorbei(e) ? '#fde0e2' : 'transparent', vorbeiFg: termVorbei(e) ? '#9b1520' : '#101010', vorbeiSub: termVorbei(e) ? '#9b1520' : '#545b66', vorbeiHover: termVorbei(e) ? '#fbcfd3' : '#f4f4f4',
      aktion: e.agNr ? 'Angebot öffnen' : 'Im Kalender', onClick: e.agNr ? zuAg(e.agNr) : zuKal(KAL_START(e.datum) < hIso ? hIso : KAL_START(e.datum)) });
    const ueberfaellig = aufg.filter(x => x.faellig < hIso && !erl[x.id]).sort((x, y) => x.faellig.localeCompare(y.faellig));
    const heuteTerm = amTag(hIso), heuteAufgAlle = aufg.filter(x => x.faellig === hIso), heuteAufg = heuteAufgAlle.filter(sichtbar);
    const offen = heuteAufgAlle.filter(x => !erl[x.id]).length;
    const ueVal = x => Object.assign(aufgVal(x), { boxRand: '#EF3D2F', faelligStr: 'Fällig seit ' + isoDe(x.faellig) + ' · ' + tagDiff(x.faellig) + (tagDiff(x.faellig) === 1 ? ' Tag' : ' Tage') });
    const feiertag = { [heute.getFullYear() + '1003']: 'Tag der Deutschen Einheit · geschlossen', [(heute.getFullYear() + 1) + '0101']: 'Neujahr · geschlossen', [heute.getFullYear() + '1225']: '1. Weihnachtstag · geschlossen', [heute.getFullYear() + '1226']: '2. Weihnachtstag · geschlossen' };
    const woche = tage.slice(1).map(d => {
      const t = iso(d), ev = amTag(t), auAlle = aufg.filter(x => x.faellig === t), au = auAlle.filter(sichtbar);
      const hinweis = FREI(t) ? FREI(t) + (ev.some(e => e.typ === 'Regatta') ? ' · Laden geschlossen, Regatta' : ' · geschlossen') : '';
      return { datum: de(d), tagLang: WTL[d.getDay()], hinweis, hatHinweis: !!hinweis, onTag: zuKal(t),
        termine: ev.map(termVal), aufgaben: au.map(aufgVal), leer: ev.length === 0 && au.length === 0 && !hinweis,
        zaehler: ev.length + (ev.length === 1 ? ' Termin' : ' Termine') + ' · ' + auAlle.length + (auAlle.length === 1 ? ' Aufgabe' : ' Aufgaben') };
    });
    const wocheTerm = woche.reduce((n, w) => n + w.termine.length, 0);
    const name = (nutzer.name || 'Marko Ahrens').split(' ')[0];
    const neuText = st.dashNeuText || '', neuTag = st.dashNeuTag || WERKTAG(hIso);
    const kannDeleg = !!rechte['Aufgaben delegieren'];
    const delegZiele = (st.benutzer || []).filter(b => !b.system && b.name !== nutzer.name && !(st.benutzerAus || {})[b.id]);
    const hinzufuegen = () => {
      const t = (this.state.dashNeuText || '').trim(); if (!t) return this.setState({ dashNeuFehler: true });
      const ich = nutzer.name || 'Marko Ahrens', an = kannDeleg && this.state.dashNeuFuer && this.state.dashNeuFuer !== ich ? this.state.dashNeuFuer : null;
      this.setState(y => ({ dashEigene: (y.dashEigene || []).concat([Object.assign({ id: 'eigen-' + Date.now(), titel: t, info: 'Eigene Aufgabe · ' + ich, faellig: y.dashNeuTag || WERKTAG(hIso) }, an ? { fuer: an, von: ich } : {})]), dashNeuText: '', dashNeuFehler: false, dashNeuFuer: '' }));
    };
    const kpi = (label, wert, aktiv, onClick, hinweis, rot) => ({ label, wert, hinweis, onClick, fg: rot && wert ? '#EF3D2F' : '#101010', rand: aktiv ? (rot ? '#EF3D2F' : '#101010') : '#e5e7eb' });
    return {
      dashView: st.view === 'dashboard',
      dashGruss: (new Date().getHours() < 11 ? 'Guten Morgen, ' : new Date().getHours() < 18 ? 'Guten Tag, ' : 'Guten Abend, ') + name,
      dashRolle: 'Aufgaben für die Rolle ' + rolle + (alleAgSehen ? '' : ' · nur eigene Angebote') + ' · ' + Object.keys(rechte).filter(k => rechte[k]).length + ' von ' + RECHTE.length + ' Rechten' + ' · Termine für ' + kasse,
      dashDatum: WTL[heute.getDay()] + ', ' + heute.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' }) + (FREI(hIso) && FREI(hIso) !== 'Sonntag' ? ' · ' + FREI(hIso) : ''),
      dashZahlen: [
        kpi('Überfällig', ueberfaellig.length, nurUe, () => this.setState(y => ({ dashNurUe: !y.dashNurUe })), nurUe ? 'Filter aktiv · alle anzeigen' : 'Nur überfällige zeigen', true),
        kpi('Termine heute', heuteTerm.length, false, zuKal(hIso), 'Im Kalender öffnen'),
        kpi('Offene Aufgaben heute', offen, ausblenden, () => this.setState(y => ({ dashAusblenden: !y.dashAusblenden })), ausblenden ? 'Erledigte ausgeblendet' : 'Erledigte ausblenden'),
        kpi('Termine bis Sonntag', wocheTerm, false, zuKal(morgenIso), 'Woche im Kalender')
      ],
      dashZeigeAlles: !nurUe, dashNurUe: nurUe, onDashAlle: () => this.setState({ dashNurUe: false }),
      dashHeuteTermine: heuteTerm.map(termVal), dashHeuteTermLeer: heuteTerm.length === 0, dashAlleAufLabel: FREI(hIso) ? 'Alle auf ' + WTL[I_DATE(WERKTAG(hIso)).getDay()] : 'Alle auf heute', dashWocheTitel: naechsteWoche ? 'Bis nächsten Sonntag' : 'Rest der Woche', dashHeuteLeerText: FREI(hIso) ? (FREI(hIso) === 'Sonntag' ? 'Sonntag' : FREI(hIso)) + ' · geschlossen. Termine und Aufgaben stehen am nächsten Werktag.' : 'Heute stehen keine Termine an.',
      dashHeuteAufgaben: heuteAufg.map(aufgVal), dashHeuteAufgLeer: heuteAufg.length === 0,
      dashAufgInfo: (heuteAufgAlle.length - offen) + ' von ' + heuteAufgAlle.length + ' erledigt',
      dashAusblendLabel: ausblenden ? 'Erledigte zeigen' : 'Erledigte ausblenden', onDashAusblenden: () => this.setState(y => ({ dashAusblenden: !y.dashAusblenden })),
      dashWoche: woche, dashUe: ueberfaellig.map(ueVal), dashHatUe: ueberfaellig.length > 0, dashKeinUe: ueberfaellig.length === 0,
      dashUeInfo: ueberfaellig.length + (ueberfaellig.length === 1 ? ' Aufgabe' : ' Aufgaben') + ' offen',
      onDashAlleMorgen: () => this.setState(y => { const m = Object.assign({}, y.dashVerschoben); ueberfaellig.forEach(x => { m[x.id] = WERKTAG(hIso); }); return { dashVerschoben: m }; }),
      dashNeuText: neuText, onDashNeuText: e => this.setState({ dashNeuText: e.target.value, dashNeuFehler: false }),
      onDashNeuKey: e => { if (e.key === 'Enter') hinzufuegen(); }, dashNeuFehler: !!st.dashNeuFehler,
      dashNeuTag: neuTag, onDashNeuTag: e => this.setState({ dashNeuTag: e.target.value }),
      dashNeuTage: tage.map((d, i) => ({ v: iso(d), label: i === 0 ? 'Heute' : i === 1 ? 'Morgen · ' + de(d) : WTL[d.getDay()] + ' · ' + de(d) })).filter(o => !FREI(o.v)),
      onDashNeu: hinzufuegen,
      dashKannDeleg: kannDeleg, dashNeuFuer: st.dashNeuFuer || nutzer.name || '', onDashNeuFuer: e => this.setState({ dashNeuFuer: e.target.value }),
      dashDelegZiele: [{ v: nutzer.name || '', label: 'Für mich' }].concat(delegZiele.map(b => ({ v: b.name, label: 'An ' + b.name + ' · ' + b.rolle }))),
      onDashKalender: zuKal(hIso)
    };
  }

  kalFeld(f) { this._kf = this._kf || {}; return this._kf[f] = this._kf[f] || (e => { const v = e.target.value; this.setState(x => ({ kalEdit: Object.assign({}, x.kalEdit, { [f]: v }), kalEditFehler: null })); }); }

  kalenderVals(st) {
    const cj = st.kalJ ?? HEUTE_D.getFullYear(), cm = st.kalM ?? HEUTE_D.getMonth(), tagSel = st.kalTag || KAL_HEUTE, filt = st.kalFilter || 'Alle';
    const ag = (st.angebote || ANGEBOTE_START).filter(a => a.status === 'Entwurf' || a.status === 'Versendet').map(a => {
      const k = KUNDEN.find(x => x.nr === a.kundeNr);
      return { typ: 'Angebot', titel: 'Angebot ' + a.nr + ' läuft ab', datum: WERKTAG_DE(a.gueltig), zeit: 'ganztägig', ort: k ? k.name : a.kundeNr === 'BAR' ? 'Barkunde' + (a.barName ? ' · ' + a.barName : '') : (a.kundeNr || 'Kein Kunde gewählt'), info: a.status + ' · ' + a.bearbeiter };
    });
    const kasse = st.aktiveKasseId || 'Verkaufsraum';
    const alle = (kasse === 'Verkaufsraum' ? ag : []).concat(KAL_TERMINE.filter(t => KAL_KASSE(t) === kasse).map(t => ({ typ: t[0], titel: t[1], datum: t[2], zeit: t[3], ort: t[4], info: t[5], ref: t })))
      .filter(t => filt === 'Alle' || t.typ === filt);
    const isoOf = (y, m, d) => '' + y + String(m + 1).padStart(2, '0') + String(d).padStart(2, '0');
    const amTag = iso => alle.filter(t => KAL_START(t.datum) <= iso && KAL_ISO(t.datum) >= iso);
    const offset = (new Date(cj, cm, 1).getDay() + 6) % 7, tage = new Date(cj, cm + 1, 0).getDate();
    const zellen = [];
    for (let i = 0; i < Math.ceil((offset + tage) / 7) * 7; i++) {
      const dt = new Date(cj, cm, i - offset + 1), iso = isoOf(dt.getFullYear(), dt.getMonth(), dt.getDate());
      const ev = amTag(iso), im = dt.getMonth() === cm;
      zellen.push({ tag: dt.getDate(), bg: iso === tagSel ? '#f4f4f4' : '#FFFFFF', rand: iso === tagSel ? '#101010' : '#e5e7eb',
        heuteBg: iso === KAL_HEUTE ? '#EF3D2F' : 'transparent', heuteFg: iso === KAL_HEUTE ? '#FFFFFF' : (im && !FREI(iso) ? '#101010' : '#9aa0a8'),
        events: ev.slice(0, 3).map(t => ({ titel: t.titel, farbe: KAL_FARBE[t.typ] })), hatMehr: ev.length > 3, mehr: '+ ' + (ev.length - 3) + ' weitere',
        onClick: () => this.setState({ kalTag: iso }) });
    }
    const tagEv = amTag(tagSel);
    const monatAnz = alle.filter(t => KAL_START(t.datum) <= isoOf(cj, cm, tage) && KAL_ISO(t.datum) >= isoOf(cj, cm, 1)).length;
    const shift = d => () => this.setState(x => { let m = (x.kalM ?? HEUTE_D.getMonth()) + d, y = x.kalJ ?? HEUTE_D.getFullYear(); if (m < 0) { m = 11; y--; } if (m > 11) { m = 0; y++; } return { kalM: m, kalJ: y }; });
    return {
      kalView: st.view === 'kalender', kalKasse: 'Termine für ' + kasse, kalTitel: KAL_MONATE[cm] + ' ' + cj, kalZellen: zellen, kalVor: shift(-1), kalWeiter: shift(1),
      kalHeute: () => this.setState({ kalJ: HEUTE_D.getFullYear(), kalM: HEUTE_D.getMonth(), kalTag: KAL_HEUTE }),
      kalMonatInfo: monatAnz + (monatAnz === 1 ? ' Termin' : ' Termine') + ' im ' + KAL_MONATE[cm],
      kalWochentage: ['Mo','Di','Mi','Do','Fr','Sa','So'].map(w => ({ w })),
      kalFilterOptionen: ['Alle'].concat(Object.keys(KAL_FARBE)).map(v => ({ v, label: v === 'Alle' ? 'Alle Terminarten' : v })),
      kalFilterWert: filt, onKalFilter: e => this.setState({ kalFilter: e.target.value }),
      kalLegende: Object.keys(KAL_FARBE).map(k => ({ label: k, farbe: KAL_FARBE[k] })),
      kalTagTitel: new Date(+tagSel.slice(0, 4), +tagSel.slice(4, 6) - 1, +tagSel.slice(6, 8)).toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) + (FREI(tagSel) && FREI(tagSel) !== 'Sonntag' ? ' · ' + FREI(tagSel) : '') + (FREI(tagSel) ? ' · Laden geschlossen' : ''),
      kalTagLeer: tagEv.length === 0,
      kalTagEvents: tagEv.map(t => ({ typ: t.typ, titel: t.titel, datum: t.datum, zeit: t.zeit, ort: t.ort, info: t.info, farbe: KAL_FARBE[t.typ],
        bearbeitbar: !!t.ref, nurAngebot: !t.ref,
        onEdit: () => this.setState({ kalEdit: { ref: t.ref, typ: t.typ, titel: t.titel, datum: t.datum, zeit: t.zeit, ort: t.ort, info: t.info || '' }, kalEditFehler: null }) })),
      kalListe: !st.kalEdit, kalEditOffen: !!st.kalEdit,
      kalEditTitel: st.kalEdit && st.kalEdit.ref ? 'Termin bearbeiten' : 'Neuer Termin',
      kalEditIstNeu: !!(st.kalEdit && !st.kalEdit.ref), kalEditIstAlt: !!(st.kalEdit && st.kalEdit.ref),
      kalE: st.kalEdit || { typ: 'Lieferung', titel: '', datum: '', zeit: '', ort: '', info: '' },
      kalEditArten: Object.keys(KAL_FARBE).filter(k => k !== 'Angebot').map(v => ({ v })),
      kalEditFehler: st.kalEditFehler || '', kalHatEditFehler: !!st.kalEditFehler,
      onKalETyp: this.kalFeld('typ'), onKalETitel: this.kalFeld('titel'), onKalEDatum: this.kalFeld('datum'), onKalEZeit: this.kalFeld('zeit'), onKalEOrt: this.kalFeld('ort'), onKalEInfo: this.kalFeld('info'),
      onKalE: f => e => { const v = e.target.value; this.setState(x => ({ kalEdit: Object.assign({}, x.kalEdit, { [f]: v }), kalEditFehler: null })); },
      onKalNeu: () => this.setState({ kalEdit: { ref: null, typ: 'Lieferung', titel: '', datum: WERKTAG(tagSel).slice(6, 8) + '.' + WERKTAG(tagSel).slice(4, 6) + '.' + WERKTAG(tagSel).slice(0, 4), zeit: '10:00', ort: '', info: '' }, kalEditFehler: null }),
      onKalAbbrechen: () => this.setState({ kalEdit: null, kalEditFehler: null }),
      onKalSpeichern: () => {
        const e = st.kalEdit; if (!e) return;
        const titel = (e.titel || '').trim(), datum = (e.datum || '').trim(), zeit = (e.zeit || '').trim();
        if (!titel) return this.setState({ kalEditFehler: 'Bitte einen Titel eingeben.' });
        const datumOk = /^\d\d\.\d\d\.\d{4}$/.test(datum) || (e.ref && datum === e.ref[2]);
        if (!datumOk) return this.setState({ kalEditFehler: 'Datum bitte als TT.MM.JJJJ eingeben.' });
        if (zeit !== 'ganztägig' && !/^\d{1,2}:\d{2}$/.test(zeit)) return this.setState({ kalEditFehler: 'Uhrzeit bitte als HH:MM oder „ganztägig“ eingeben.' });
        { const t0 = KAL_START(datum), fr = FREI(t0); if (fr && e.typ !== 'Regatta' && !(e.ref && datum === e.ref[2])) { const w = WERKTAG(t0); return this.setState({ kalEditFehler: (fr === 'Sonntag' ? 'Sonntags' : 'Am ' + fr) + ' ist geschlossen (nur Regatten möglich). Nächster Werktag: ' + w.slice(6, 8) + '.' + w.slice(4, 6) + '.' + w.slice(0, 4) + '.' }); } }
        const zeile = [e.typ, titel, datum, zeit, (e.ort || '').trim(), (e.info || '').trim()];
        if (kasse !== 'Verkaufsraum') zeile[6] = kasse;
        if (e.ref) { const i = KAL_TERMINE.indexOf(e.ref); if (i >= 0) KAL_TERMINE[i] = zeile; } else KAL_TERMINE.push(zeile);
        const iso = KAL_START(datum);
        this.setState(x => ({ kalEdit: null, kalEditFehler: null, kalRev: (x.kalRev || 0) + 1, kalTag: iso, kalJ: +iso.slice(0, 4), kalM: +iso.slice(4, 6) - 1 }));
      },
      onKalLoeschen: () => {
        const e = st.kalEdit; if (!e || !e.ref) return;
        const i = KAL_TERMINE.indexOf(e.ref); if (i >= 0) KAL_TERMINE.splice(i, 1);
        this.setState(x => ({ kalEdit: null, kalEditFehler: null, kalRev: (x.kalRev || 0) + 1 }));
      }
    };
  }

  angebotVals(st) {
    const alle = st.angebote || ANGEBOTE_START;
    const kd = nr => nr === 'BAR' ? {nr: 'BAR', name: 'Barkunde', kontakt: '—', ort: '—', mail: '—', zahlung: 'Barzahlung', rabatt: 0} : KUNDEN.find(k => k.nr === nr) || (!nr ? {nr: '', name: 'Kein Kunde gewählt', kontakt: '—', ort: '—', mail: '—', zahlung: '—', rabatt: 0} : KUNDEN[0]);
    const zeile = p => p.menge * p.preis * (1 - (p.rabatt || 0) / 100);
    const summe = a => a.pos.reduce((s, p) => s + zeile(p), 0);
    const num = v => { const n = parseFloat(String(v).replace(',', '.')); return isNaN(n) ? 0 : n; };
    const dstr = d => d.toLocaleDateString('de-DE', {day: '2-digit', month: '2-digit', year: 'numeric'});
    const melde = t => { this.setState({agMeldung: t}); clearTimeout(this._agT); this._agT = setTimeout(() => this.setState({agMeldung: null}), 3500); };
    const naechsteNr = () => SHOP_NR('angebotPraefix', 'AG') + String(alle.reduce((m, a) => Math.max(m, parseInt(a.nr.slice(-4), 10) || 0), 0) + 1).padStart(4, '0');
    const leer = (pos, kundeNr) => {
      const h = new Date(), g = new Date(); g.setDate(g.getDate() + (parseInt(SHOP_LADEN().daten.angebotGueltig, 10) || 30));
      return {nr: naechsteNr(), kundeNr: kundeNr || KUNDEN[0].nr, datum: dstr(h), gueltig: dstr(g), status: 'Entwurf', bearbeiter: (st.angemeldet || {}).name || 'Marko Ahrens', notiz: '', pos: pos || []};
    };
    const filter = st.agFilter || 'Alle';
    const q = (st.agSuche || '').trim().toLowerCase();
    const treffer = alle.filter(a => (filter === 'Alle' || a.status === filter) && (!q || (a.nr + ' ' + kd(a.kundeNr).name + ' ' + a.pos.map(p => p.name).join(' ')).toLowerCase().includes(q)));
    const n = s => alle.filter(a => a.status === s);
    const entschieden = n('Angenommen').length + n('Abgelehnt').length + n('Abgelaufen').length;
    const ed = st.agEdit;
    const agIds = this.agPaddel(ed);
    const agIdsAlle = agIds.flat();
    const agRef = ed ? 'Angebot ' + ed.nr : '';
    const agLog = ed ? this.qrLogFuer(st, agRef) : [];
    const k = ed ? kd(ed.kundeNr) : {};
    const setEd = fn => this.setState(s => ({agEdit: Object.assign({}, s.agEdit, fn(s.agEdit))}));
    const setPos = (i, patch) => setEd(e => ({pos: e.pos.map((p, j) => j === i ? Object.assign({}, p, patch) : p)}));
    const sichern = (patch, text, extra) => {
      this.setState(s => {
        const e = Object.assign({}, s.agEdit, patch || {});
        const basis = s.angebote || ANGEBOTE_START;
        const da = basis.some(a => a.nr === e.nr);
        return Object.assign({angebote: da ? basis.map(a => a.nr === e.nr ? e : a) : [e].concat(basis), agEdit: e}, extra || {});
      });
      if (text) melde(text);
    };
    const gesamt = ed ? summe(ed) : 0;
    const listen = ed ? ed.pos.reduce((s, p) => s + p.menge * p.preis, 0) : 0;
    const ust = gesamt * 19 / 119;
    const aq = (st.agArtSuche || '').trim().toLowerCase();
    const artTreffer = !ed || !aq ? [] : PRODUKTE.filter(p => (p.brand + ' ' + p.name + ' ' + p.type + ' ' + p.sku).toLowerCase().includes(aq)).slice(0, 6);
    const gespeichert = !!ed && alle.some(a => a.nr === ed.nr);
    const stil = AG_STIL[ed ? ed.status : 'Entwurf'];
    return {
      agView: st.view === 'angebote',
      agListe: !ed,
      agEditor: !!ed,
      agHatMeldung: !!st.agMeldung,
      agMeldung: st.agMeldung || '',
      onAgNeu: () => this.setState({agEdit: leer(), agArtSuche: '', agVorschau: false}),
      agKennzahlen: [
        {label: 'Offen beim Kunden', value: String(n('Versendet').length), hint: EUR(n('Versendet').reduce((s, a) => s + summe(a), 0)) + ' Volumen', color: '#6b4200'},
        {label: 'Entwürfe', value: String(n('Entwurf').length), hint: 'noch nicht versendet', color: '#101010'},
        {label: 'Angenommen', value: EUR(n('Angenommen').reduce((s, a) => s + summe(a), 0)), hint: n('Angenommen').length + ' Angebote', color: '#0d5f38'},
        {label: 'Annahmequote', value: entschieden ? Math.round(n('Angenommen').length / entschieden * 100) + ' %' : '—', hint: entschieden + ' entschieden', color: '#101010'}
      ],
      agFilterChips: ['Alle', 'Entwurf', 'Versendet', 'Angenommen', 'Abgelehnt', 'Abgelaufen'].map(f => ({
        label: f, anzahl: String(f === 'Alle' ? alle.length : n(f).length),
        bg: f === filter ? '#101010' : '#FFFFFF', fg: f === filter ? '#FFFFFF' : '#101010', border: f === filter ? '#101010' : '#e5e7eb',
        onClick: () => this.setState({agFilter: f})
      })),
      agSuche: st.agSuche || '',
      onAgSuche: e => this.setState({agSuche: e.target.value}),
      agListeZeilen: treffer.map(a => {
        const kk = kd(a.kundeNr);
        const menge = a.pos.reduce((s, p) => s + p.menge, 0);
        return {
          nr: a.nr, datum: a.datum, kunde: kk.name + (a.kundeNr === 'BAR' && (a.barName || '').trim() ? ' · ' + a.barName.trim() : ''), kontakt: kk.kontakt,
          positionen: a.pos.length + ' Pos. · ' + menge + ' Stk.', gueltig: a.gueltig, summe: EUR(summe(a)),
          status: a.status, statusBg: AG_STIL[a.status][0], statusFg: AG_STIL[a.status][1],
          onOpen: () => this.setState({agEdit: JSON.parse(JSON.stringify(a)), agArtSuche: '', agVorschau: false})
        };
      }),
      agLeer: treffer.length === 0,
      onAgZurueck: () => this.setState({agEdit: null, agVorschau: false}),
      agNr: ed ? ed.nr : '',
      agStatus: ed ? ed.status : '',
      agStatusBg: stil[0], agStatusFg: stil[1],
      agDatum: ed ? ed.datum : '',
      agBearbeiter: ed ? ed.bearbeiter : '',
      agGueltig: ed ? ed.gueltig : '',
      onAgGueltig: e => { const v = e.target.value; setEd(() => ({gueltig: v})); },
      agKundeNr: ed ? ed.kundeNr : '',
      agKundenOptionen: (ed && !ed.kundeNr ? [{nr: '', label: '— Bitte Kunden wählen —'}] : []).concat([{nr: 'BAR', label: 'Barkunde (ohne Kundendaten)'}]).concat(KUNDEN.map(x => ({nr: x.nr, label: x.name + ' · ' + x.nr}))),
      onAgKunde: e => {
        const kn = kd(e.target.value);
        setEd(x => ({kundeNr: kn.nr, pos: x.pos.map(p => p.pid ? Object.assign({}, p, {rabatt: kn.rabatt, rabattRoh: null}) : p)}));
        melde(kn.nr === 'BAR' ? 'Barkunde gewählt — ohne Kundendaten und ohne Kundenrabatt' : 'Kundenrabatt ' + kn.rabatt + ' % auf alle Artikelpositionen angewendet');
      },
      agIstBar: !!ed && ed.kundeNr === 'BAR', agBarName: ed ? (ed.barName || '') : '', onAgBarName: e => { const v = e.target.value; setEd(() => ({barName: v})); },
      agKundeName: (k.name || '') + (ed && ed.kundeNr === 'BAR' && (ed.barName || '').trim() ? ' · ' + ed.barName.trim() : ''), agKundeKontakt: k.kontakt || '', agKundeOrt: k.ort || '', agKundeMail: k.mail || '', agKundeZahlung: k.zahlung || '',
      agKundeRabatt: (k.rabatt || 0) + ' %',
      agArtSuche: st.agArtSuche || '',
      onAgArtSuche: e => this.setState({agArtSuche: e.target.value}),
      agHatArtTreffer: artTreffer.length > 0,
      agArtTreffer: artTreffer.map(p => {
        const bestand = Math.max(0, this.bestandVon(p) + ((st.stockDelta || {})[p.id] || 0));
        return {
          name: p.brand + ' ' + p.name, info: p.type + ' · ' + p.sku, preis: EUR(p.price),
          bestand: bestand + ' auf Lager', bestandFg: bestand === 0 ? '#9b1520' : bestand <= 2 ? '#6b4200' : '#0d5f38',
          onAdd: () => {
            setEd(x => {
              const i = x.pos.findIndex(y => y.pid === p.id);
              if (i > -1) return {pos: x.pos.map((y, j) => j === i ? Object.assign({}, y, {menge: y.menge + 1}) : y)};
              return {pos: x.pos.concat([{pid: p.id, name: p.brand + ' ' + p.name, sku: p.sku, menge: 1, preis: p.price, rabatt: kd(x.kundeNr).rabatt}])};
            });
            this.setState({agArtSuche: ''});
          }
        };
      }),
      onAgFreiePos: () => setEd(x => ({pos: x.pos.concat([{pid: null, name: 'Serviceleistung', sku: 'Freie Position', menge: 1, preis: 0, rabatt: 0}])})),
      agPositionen: ed ? ed.pos.map((p, i) => ({
        hatIds: agIds[i].length > 0, ids: agIds[i],
        nr: String(i + 1), name: p.name, sku: p.sku || 'Freie Position', menge: String(p.menge),
        preis: p.preisRoh != null ? p.preisRoh : String(p.preis).replace('.', ','),
        rabatt: p.rabattRoh != null ? p.rabattRoh : String(p.rabatt || 0).replace('.', ','),
        summe: EUR(zeile(p)),
        onName: e => setPos(i, {name: e.target.value}),
        onPreis: e => setPos(i, {preisRoh: e.target.value, preis: num(e.target.value)}),
        onRabatt: e => setPos(i, {rabattRoh: e.target.value, rabatt: Math.min(100, Math.max(0, num(e.target.value)))}),
        onPlus: () => setPos(i, {menge: p.menge + 1}),
        onMinus: () => setPos(i, {menge: Math.max(1, p.menge - 1)}),
        onEntf: () => setEd(x => ({pos: x.pos.filter((_, j) => j !== i)}))
      })) : [],
      agPosMinBreite: (st.agEdit && st.agEdit.pos && st.agEdit.pos.length) ? '580px' : '0',
      agKeinePos: !!ed && ed.pos.length === 0,
      agNotiz: ed ? ed.notiz : '',
      agHatNotiz: !!ed && !!(ed.notiz || '').trim(),
      onAgNotiz: e => { const v = e.target.value; setEd(() => ({notiz: v})); },
      agListenSumme: EUR(listen),
      agRabattSumme: '− ' + EUR(listen - gesamt),
      agNetto: EUR(gesamt - ust),
      agUst: EUR(ust),
      agGesamt: EUR(gesamt),
      agIstAngenommen: !!ed && ed.status === 'Angenommen',
      agIstVersendet: !!ed && ed.status === 'Versendet',
      agVorschauLabel: ed && ed.status === 'Entwurf' ? 'Vorschau & senden' : 'Vorschau',
      agVorschauBg: ed && ed.status === 'Entwurf' ? '#101010' : '#FFFFFF',
      agVorschauFg: ed && ed.status === 'Entwurf' ? '#FFFFFF' : '#101010',
      agSpeichernLabel: ed && ed.status === 'Entwurf' ? 'Als Entwurf speichern' : 'Änderungen speichern',
      agLoeschbar: gespeichert && ed.status === 'Entwurf',
      onAgVorschau: () => ed.pos.length ? this.setState({agVorschau: true}) : melde('Bitte zuerst mindestens eine Position hinzufügen'),
      onAgVorschauZu: () => this.setState({agVorschau: false}),
      onAgPdf: () => melde(ed.nr + '.pdf erzeugt und im Kundenordner abgelegt'),
      onAgSenden: () => sichern({status: ed.status === 'Entwurf' ? 'Versendet' : ed.status}, 'Angebot ' + ed.nr + ' an ' + k.mail + ' gesendet', {agVorschau: false}),
      onAgSpeichern: () => sichern(null, 'Angebot ' + ed.nr + ' gespeichert'),
      onAgAngenommen: () => sichern({status: 'Angenommen', angenommenAm: new Date().toLocaleDateString('de-DE', {day: '2-digit', month: '2-digit', year: 'numeric'})}, 'Angebot als angenommen markiert — jetzt in die Kasse übernehmen'),
      onAgAbgelehnt: () => sichern({status: 'Abgelehnt'}, 'Angebot als abgelehnt markiert'),
      onAgDuplizieren: () => { const kopie = leer(JSON.parse(JSON.stringify(ed.pos)), ed.kundeNr); kopie.notiz = ed.notiz; this.setState({agEdit: kopie, agVorschau: false}); melde('Kopie ' + kopie.nr + ' als Entwurf angelegt'); },
      onAgLoeschen: () => { const nr = ed.nr; this.setState(s => ({angebote: (s.angebote || ANGEBOTE_START).filter(a => a.nr !== nr), agEdit: null})); melde('Angebot ' + nr + ' gelöscht'); },
      onAgKasse: () => this.setState(this.angebotZuKorb(ed)),
      agHatPaddelQr: agIdsAlle.length > 0,
      agQrLabel: agLog.length ? 'QR-Etiketten nachdrucken (' + agIdsAlle.length + ')' : 'QR-Etiketten Paddel drucken (' + agIdsAlle.length + ')',
      agQrLog: agLog.length ? 'Zuletzt gedruckt ' + agLog[0].zeit + ' · ' + agLog[0].benutzer + (agLog.length > 1 ? ' · ' + agLog.length + ' Drucke' : '') : 'Noch nicht gedruckt',
      onAgQr: () => this.zeigeEtiketten('Paddel · ' + agRef, ed.pos.flatMap((p, i) => { const pr = PRODUKTE.find(x => x.id === p.pid); return agIds[i].map(c => ({kopf: pr.brand, name: pr.name, art: 'Paddel-ID · ' + agRef, code: c})); }), agRef),
      agVorschau: !!ed && !!st.agVorschau,
      agVorschauZeilen: ed ? ed.pos.map((p, i) => ({
        hatIds: agIds[i].length > 0, idText: agIds[i].join(', '),
        nr: String(i + 1), name: p.name, sku: p.sku || '', menge: String(p.menge), einzel: EUR(p.preis),
        rabatt: p.rabatt ? String(p.rabatt).replace('.', ',') + ' %' : '—', summe: EUR(zeile(p))
      })) : []
    };
  }

  anleitungVals(st, sprache) {
    const A = window.ZYKOL_ANLEITUNG;
    if (!A) {
      if (!this._anlWarte) this._anlWarte = setInterval(() => { if (window.ZYKOL_ANLEITUNG) { clearInterval(this._anlWarte); this.forceUpdate(); } }, 200);
      return {anlUi: {}, anlSprachen: [], anlKapitel: [], anlHat: false, anlLeer: false, anlKap: {schritte: []}};
    }
    const code = st.anlSprache && A.sprachen[st.anlSprache] ? st.anlSprache : (A.sprachen[sprache] ? sprache : 'de');
    const L = A.sprachen[code];
    const r = this.meineRechte();
    const q = (st.anlSuche || '').trim().toLowerCase();
    const alle = A.meta.map((m, i) => Object.assign({}, m, L.kapitel[m.id], {nr: String(i + 1).padStart(2, '0')}));
    const liste = q ? alle.filter(k => [k.titel, k.intro, k.tipp].concat(k.schritte).join(' ').toLowerCase().indexOf(q) > -1) : alle;
    const aktivId = liste.some(k => k.id === st.anlKap) ? st.anlKap : (liste[0] && liste[0].id);
    const akt = alle.find(k => k.id === aktivId);
    const frei = k => !k.recht || !st.angemeldet || !!r[k.recht];
    const pdf = (lang) => () => {
      const codes = lang === 'alle' ? Object.keys(A.sprachen) : [lang];
      const esc = s => String(s || '').replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]));
      const teil = c => {
        const S = A.sprachen[c];
        const kap = A.meta.map((m, i) => Object.assign({nr: String(i + 1).padStart(2, '0')}, m, S.kapitel[m.id]));
        return '<section class="sp"><div class="marke">zykol.POS</div><h1>' + esc(S.ui.titel) + '</h1><p>' + esc(S.ui.untertitel) + '</p>'
          + '<p class="klein">' + esc(S.ui.stand) + ': ' + esc(A.version) + ' · ' + esc(S.ui.sprache) + ': ' + esc(S.name) + '</p>'
          + '<h2>' + esc(S.ui.inhalt) + '</h2><ol class="toc">' + kap.map(k => '<li>' + esc(k.titel) + '</li>').join('') + '</ol>'
          + kap.map(k => '<article><div class="nr">' + esc(S.ui.kapitel) + ' ' + k.nr + '</div><h3>' + esc(k.titel) + '</h3><p>' + esc(k.intro) + '</p>'
            + '<p class="klein">' + esc(k.recht ? S.ui.benoetigt + ': ' + (S.rechte[k.recht] || k.recht) : S.ui.alleNutzer) + '</p>'
            + '<ol>' + k.schritte.map(s => '<li>' + esc(s) + '</li>').join('') + '</ol>'
            + (k.tipp ? '<p class="tipp"><b>' + esc(S.ui.tipp) + ':</b> ' + esc(k.tipp) + '</p>' : '') + '</article>').join('') + '</section>';
      };
      const w = window.open('', '_blank'); if (!w) return;
      w.document.write('<!doctype html><html lang="' + codes[0] + '"><head><meta charset="utf-8"><title>zykol.POS – ' + esc(A.sprachen[codes[0]].ui.titel) + ' ' + esc(A.version) + '</title>'
        + '<style>@page{size:A4;margin:16mm}body{font-family:Inter,Arial,sans-serif;color:#101010;font-size:11pt;line-height:1.45;max-width:780px;margin:24px auto;padding:0 16px}'
        + 'h1{font-size:24pt;margin:2px 0 4px}h2{font-size:13pt;margin:20px 0 6px}h3{font-size:14pt;margin:2px 0 4px}.marke{font-weight:700;letter-spacing:.08em;text-transform:uppercase;font-size:9.5pt}'
        + '.klein,.nr{color:#545b66;font-size:9.5pt}.nr{text-transform:uppercase;letter-spacing:.12em}article{break-inside:avoid;border-top:1px solid #e5e7eb;padding-top:10px;margin-top:14px}'
        + '.tipp{background:#f4f4f4;padding:8px 10px;border-radius:6px}.sp+.sp{break-before:page;margin-top:40px}ol li{margin:3px 0}@media print{body{margin:0;max-width:none}}</style></head><body>'
        + codes.map(teil).join('') + '</body></html>');
      w.document.close(); setTimeout(() => { w.focus(); w.print(); }, 500);
    };
    let kap = {schritte: []};
    if (akt) {
      const ok = frei(akt);
      kap = {
        kicker: L.ui.kapitel + ' ' + akt.nr, titel: akt.titel, intro: akt.intro, tipp: akt.tipp, hatTipp: !!akt.tipp,
        schritte: akt.schritte.map((t, i) => ({nr: i + 1, text: t})),
        pill: !akt.recht ? L.ui.alleNutzer : ok ? L.ui.verfuegbar : L.ui.benoetigt + ': ' + (L.rechte[akt.recht] || akt.recht),
        pillBg: !akt.recht ? '#eef0f2' : ok ? '#dcf3e6' : '#fdebc8',
        pillFg: !akt.recht ? '#101010' : ok ? '#0d5f38' : '#6b4200',
        kannOeffnen: !!akt.view && akt.view !== 'einstellungen' && ok && this.darfView(akt.view),
        onOeffnen: () => this.setState({view: akt.view})
      };
    }
    return {
      anlUi: L.ui,
      anlSprachen: Object.keys(A.sprachen).map(c => ({kurz: c.toUpperCase(), name: A.sprachen[c].name, bg: c === code ? '#101010' : 'transparent', fg: c === code ? '#FFFFFF' : '#545b66', onClick: () => this.setState({anlSprache: c})})),
      anlSuche: st.anlSuche || '',
      onAnlSuche: (e) => this.setState({anlSuche: e.target.value}),
      anlTreffer: L.ui.treffer.replace('{n}', liste.length),
      anlLeer: liste.length === 0,
      anlHat: !!akt && liste.length > 0,
      anlKapitel: liste.map(k => { const a = k.id === aktivId; return {nr: k.nr, titel: k.titel, bg: a ? '#101010' : 'transparent', fg: a ? '#FFFFFF' : '#101010', nrFg: a ? '#FFFFFF' : '#646b76', weight: a ? 600 : 500, onClick: () => this.setState({anlKap: k.id})}; }),
      anlKap: kap,
      onAnlPdf: pdf(code),
      onAnlPdfAlle: pdf('alle')
    };
  }

  darfView(id) {
    const r = this.meineRechte();
    const bedarf = {
      kasse: 'Verkauf kassieren',
      artikel: 'Artikel & Bestände pflegen',
      bestand: 'Artikel & Bestände pflegen',
      lieferanten: 'Lieferanten verwalten',
      verkaufteBoote: 'Bootsakten & Seriennummern pflegen',
      angebote: 'Angebote erstellen & versenden',
      bestellbelege: 'Bestellbeleg personalisiert drucken',
      kunden: 'Kunden verwalten',
      transaktionen: 'Journal & Transaktionen einsehen',
      berichte: 'Berichte einsehen',
      umsatz: 'Umsatz-Dashboard einsehen',
      feldzuordnung: 'Einstellungen & Benutzer'
    }[id];
    return !bedarf || !!r[bedarf];
  }

  csvDatei(name, kopf, zeilen) {
    const esc = v => { const t = v == null ? '' : String(v); return /[;"\n\r]/.test(t) ? '"' + t.replace(/"/g, '""') + '"' : t; };
    const txt = [kopf].concat(zeilen).map(z => z.map(esc).join(';')).join('\r\n');
    const blob = new Blob(['\ufeff' + txt], {type: 'text/csv;charset=utf-8'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name + '_' + new Date().toISOString().slice(0, 10) + '.csv';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }

  csvArtikel() {
    const kat = {}; (this.kats() || []).forEach(k => { kat[k.id] = k.label; });
    const preis = n => Number(n).toFixed(2).replace('.', ',');
    this.csvDatei('zykol_artikel', ['Artikelnummer', 'Hersteller', 'Bezeichnung', 'Typ', 'Kategorie', 'Preis brutto (EUR)', 'Bestand', 'Lagerort'],
      PRODUKTE.map(p => [p.sku, p.brand, p.name, p.type, kat[p.cat] || p.cat, preis(p.price), p.stock, p.lager || '']));
  }

  csvKunden() {
    this.csvDatei('zykol_kunden', ['Kundennummer', 'Name', 'Typ', 'Ort', 'Ansprechpartner', 'E-Mail', 'Telefon', 'Rabatt (%)', 'Zahlung'],
      KUNDEN.map(k => [k.nr, k.name, k.typ, k.ort, k.kontakt, k.mail, k.telefon, k.rabatt, k.zahlung]));
  }

  csvLieferanten() {
    this.csvDatei('zykol_lieferanten', ['Lieferant', 'Firma', 'Adresse', 'Land', 'E-Mail', 'Telefon', 'Ansprechpartner', 'Kundennummer', 'Lieferzeit', 'Rabatt (%)', 'Zahlung', 'Sortiment'],
      Object.keys(LIEFERANTEN).map(n => { const l = LIEFERANTEN[n]; return [n, l.firma, l.adresse, l.land, l.mail, l.telefon, l.kontakt, l.kdnr, l.lieferzeit, l.rabatt, l.zahlung, l.sortiment]; }));
  }

  schichtMinuten(von, bis) {
    const m = t => { const p = String(t || '').split(':'); return (parseInt(p[0], 10) || 0) * 60 + (parseInt(p[1], 10) || 0); };
    return m(bis) - m(von);
  }

  schichtArt(code, arten) {
    if (typeof code === 'string' && code.indexOf('ind|') === 0) {
      const p = code.split('|');
      const min = this.schichtMinuten(p[1], p[2]);
      const pause = min > 360 ? 30 : 0;
      return {id: code, kurz: 'Individuell', zeit: p[1] + ' – ' + p[2], bg: '#fde3e0', fg: '#9b1520', stunden: Math.round((min - pause) / 6) / 10, ind: true};
    }
    return arten.find(x => x.id === code) || arten[0];
  }

  kats() {
    return this.state.kats || KATEGORIEN;
  }

  bestellGruppen(bsAlle) {
    const EK = 0.72;
    const knapp = bsAlle.filter(b => b.verfuegbar <= 2);
    const marken = [];
    knapp.forEach(b => { if (marken.indexOf(b.brand) < 0) marken.push(b.brand); });
    return marken.map((h, i) => {
      const positionen = knapp.filter(b => b.brand === h).map(b => ({
        name: b.brand + ' ' + b.name, sku: b.sku, stock: b.stock,
        ziel: ZIEL_BESTAND[b.id] || 4,
        menge: Math.max(1, (ZIEL_BESTAND[b.id] || 4) - b.stock),
        ek: Math.round(b.price * EK * 100) / 100
      }));
      return {
        hersteller: h,
        lief: LIEFERANTEN[h] || {firma: h, adresse: '—', mail: '—', kdnr: '—', lieferzeit: '—'},
        nummer: 'BEST-2026-' + String(1041 + i),
        positionen,
        summe: positionen.reduce((s, p) => s + p.menge * p.ek, 0)
      };
    });
  }

  druckeHtml(html, titel) {
    const alt = document.getElementById('zykol-druck');
    if (alt) alt.remove();
    const f = document.createElement('iframe');
    f.id = 'zykol-druck';
    f.title = titel || 'Druck';
    f.setAttribute('style', 'position:fixed;right:0;bottom:0;width:0;height:0;border:0;opacity:0;');
    document.body.appendChild(f);
    const d = f.contentDocument;
    d.open();
    d.write(html);
    d.close();
    try { d.title = titel || d.title; } catch (e) {}
    const los = () => {
      try { f.contentWindow.focus(); f.contentWindow.print(); } catch (e) {
        const w = window.open('', '_blank');
        if (w) { w.document.write(html); w.document.close(); setTimeout(() => { w.focus(); w.print(); }, 400); }
      }
    };
    if (d.readyState === 'complete') setTimeout(los, 250); else f.onload = () => setTimeout(los, 250);
  }

  druckeBeleg(kd, nr, datum, positionen, summe) {
    const zeile = p => '<tr><td>' + p.produkt + (p.notiz ? '<span class="sub">' + p.notiz + '</span>' : '') + '</td>' +
      '<td class="n">' + p.menge + '</td><td class="n">' + EUR(p.betrag / p.menge) + '</td><td class="n">' + EUR(p.betrag) + '</td></tr>';
    const netto = summe / 1.19, mwst = summe - netto;
    const html = '<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><title>' + nr + '</title>' + '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Poppins:wght@600&display=swap" rel="stylesheet">' +
      '<style>@page{size:A4;margin:18mm 16mm;}*{box-sizing:border-box;}' +
      'body{margin:0;font-family:Inter,system-ui,sans-serif;color:#101010;font-size:11pt;line-height:1.45;}' +
      'h1{font-family:Poppins,Inter,sans-serif;font-weight:600;font-size:24pt;margin:0 0 2mm;color:#101010;line-height:1.05;}' +
      '.kopf{display:flex;justify-content:space-between;align-items:flex-start;gap:12mm;border-bottom:2px solid ' + SHOP_LADEN().daten.akzent + ';padding-bottom:5mm;margin-bottom:8mm;}h1{color:' + SHOP_LADEN().daten.akzent + '!important;}' +
      '.marke{font-size:9.5pt;letter-spacing:.14em;text-transform:uppercase;font-weight:600;color:#545b66;}' +
      '.meta{text-align:right;font-size:10pt;color:#545b66;}.meta b{color:#101010;}' +
      '.blocks{display:flex;gap:14mm;margin-bottom:8mm;}.blocks>div{flex:1;}' +
      '.label{font-size:9pt;letter-spacing:.12em;text-transform:uppercase;font-weight:600;color:#545b66;margin-bottom:2mm;}' +
      'table{width:100%;border-collapse:collapse;}' +
      'th{text-align:left;font-size:9pt;letter-spacing:.1em;text-transform:uppercase;color:#545b66;background:#e5e7eb;padding:3mm;}' +
      'td{padding:3.5mm 3mm;border-bottom:1px solid #e5e7eb;vertical-align:top;font-size:10.5pt;font-weight:600;}' +
      'td.n,th.n{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap;}' +
      '.sub{display:block;font-size:9pt;font-weight:400;color:#545b66;margin-top:1mm;}' +
      '.summe{margin-top:6mm;margin-left:auto;width:78mm;}' +
      '.summe div{display:flex;justify-content:space-between;padding:2mm 0;font-size:10.5pt;color:#545b66;}' +
      '.summe div span:last-child{color:#101010;font-variant-numeric:tabular-nums;}' +
      '.summe .ges{border-top:1px solid #101010;margin-top:2mm;padding-top:3mm;font-size:14pt;font-weight:700;color:#101010;}' +
      '.fuss{margin-top:12mm;border-top:1px solid #e5e7eb;padding-top:4mm;font-size:9pt;color:#646b76;}</style></head><body>' +
      '<div class="kopf"><div>' + '<img s' + 'rc="' + SHOP_LOGO_URL() + '" alt="Logo" style="height:14mm;width:auto;display:block;margin-bottom:4mm;">' + '<div class="marke">Kassenbeleg</div><h1>' + nr + '</h1>' +
      '<div style="color:#545b66;">Belegdatum ' + datum + '</div></div>' +
      '<div class="meta"><b>' + kd.nr + '</b><br>' + kd.typ + '<br>' + kd.zahlung + '</div></div>' +
      '<div class="blocks"><div><div class="label">Kunde</div><b>' + kd.name + '</b><br>' + (kd.kontakt || '') + '<br>' + kd.ort + '<br>' + (kd.mail || '') + '</div>' +
      (() => { const d = SHOP_LADEN().daten; return '<div><div class="label">Verkäufer</div><b>' + d.firma + '</b><br>' + d.strasse + '<br>' + d.ort + '<br>' + d.email + '</div></div>'; })() +
      '<table><thead><tr><th>Position</th><th class="n">Menge</th><th class="n">Einzelpreis</th><th class="n">Betrag</th></tr></thead><tbody>' +
      positionen.map(zeile).join('') + '</tbody></table>' +
      '<div class="summe"><div><span>Netto</span><span>' + EUR(netto) + '</span></div>' +
      '<div><span>19 % MwSt.</span><span>' + EUR(mwst) + '</span></div>' +
      '<div class="ges"><span>Gesamt brutto</span><span>' + EUR(summe) + '</span></div></div>' +
      (() => { const d = SHOP_LADEN().daten; return (d.dankText ? '<div style="margin-top:10mm;font-size:13pt;font-weight:700;color:' + d.akzent + ';">' + d.dankText + '</div>' : '') + '<div class="fuss">Belegausgabepflicht nach § 146a Abs. 2 AO erfüllt. Rückgabe von Neuware innerhalb ' + (d.rueckgabe || 14) + ' Tagen mit diesem Beleg.' + (d.fusszeile ? ' ' + d.fusszeile : '') + '<br>' + [d.firma, d.strasse, d.ort, d.ustid && 'USt-IdNr. ' + d.ustid].filter(Boolean).join(' · ') + '</div>'; })() +
      '</body></html>';
    this.druckeHtml(html, nr);
  }

  bestellMail(g) {
    const netto = g.summe, mwst = netto * 0.19;
    const zeilen = g.positionen.map(p =>
      '- ' + p.menge + ' x ' + p.name + ' (' + p.sku + '), EK netto ' + EUR(p.ek) + ', Position ' + EUR(p.menge * p.ek)
    ).join('\n');
    const body = 'Sehr geehrte Damen und Herren,\n\n' +
      'bitte liefern Sie zu unserer Kundennummer ' + g.lief.kdnr + ' folgende Positionen (' + g.nummer + '):\n\n' +
      zeilen + '\n\n' +
      'Netto: ' + EUR(netto) + '\n19 % MwSt.: ' + EUR(mwst) + '\nGesamt: ' + EUR(netto + mwst) + '\n\n' +
      'Lieferadresse:\nzykol Wassersport GmbH\nHauptlager · Am Hafen 7\n28857 Syke\n\n' +
      'Bitte bestätigen Sie den Liefertermin (avisierte Lieferzeit ' + g.lief.lieferzeit + ').\n\n' +
      'Mit freundlichen Grüßen\nzykol Wassersport GmbH · Einkauf\nlager@zykol.de · 04242 58-465';
    return {an: g.lief.mail, betreff: 'Bestellung ' + g.nummer + ' · zykol Wassersport', body: body};
  }

  mailBestellung(g) {
    const m = this.bestellMail(g);
    window.location.href = 'mailto:' + m.an + '?subject=' + encodeURIComponent(m.betreff) + '&body=' + encodeURIComponent(m.body);
  }

  druckeBestellung(g) {
    const zeile = p => '<tr><td>' + p.name + '<span class="sub">' + p.sku + ' · Bestand ' + p.stock + ' → Ziel ' + p.ziel + '</span></td>' +
      '<td class="n">' + p.menge + '</td><td class="n">' + EUR(p.ek) + '</td><td class="n">' + EUR(p.menge * p.ek) + '</td></tr>';
    const netto = g.summe, mwst = netto * 0.19;
    const html = '<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><title>' + g.nummer + ' ' + g.hersteller + '</title>' +
      '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Poppins:wght@600&display=swap" rel="stylesheet">' +
      '<style>@page{size:A4;margin:18mm 16mm;}*{box-sizing:border-box;}' +
      'body{margin:0;font-family:Inter,system-ui,sans-serif;color:#101010;font-size:11pt;line-height:1.45;}' +
      'h1{font-family:Poppins,Inter,sans-serif;font-weight:600;font-size:24pt;margin:0 0 2mm;color:#101010;line-height:1.05;}' +
      '.kopf{display:flex;justify-content:space-between;align-items:flex-start;gap:12mm;border-bottom:2px solid ' + SHOP_LADEN().daten.akzent + ';padding-bottom:5mm;margin-bottom:8mm;}h1{color:' + SHOP_LADEN().daten.akzent + '!important;}' +
      '.marke{font-size:9.5pt;letter-spacing:.14em;text-transform:uppercase;font-weight:600;color:#545b66;}' +
      '.meta{text-align:right;font-size:10pt;color:#545b66;}.meta b{color:#101010;}' +
      '.blocks{display:flex;gap:14mm;margin-bottom:8mm;}.blocks>div{flex:1;}' +
      '.label{font-size:9pt;letter-spacing:.12em;text-transform:uppercase;font-weight:600;color:#545b66;margin-bottom:2mm;}' +
      'table{width:100%;border-collapse:collapse;}' +
      'th{text-align:left;font-size:9pt;letter-spacing:.1em;text-transform:uppercase;color:#545b66;background:#e5e7eb;padding:3mm 3mm;}' +
      'td{padding:3.5mm 3mm;border-bottom:1px solid #e5e7eb;vertical-align:top;font-size:10.5pt;font-weight:600;}' +
      'td.n,th.n{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap;}' +
      '.sub{display:block;font-size:9pt;font-weight:400;color:#646b76;margin-top:1mm;}' +
      '.summe{margin-top:6mm;margin-left:auto;width:78mm;}' +
      '.summe div{display:flex;justify-content:space-between;padding:2mm 0;font-size:10.5pt;color:#545b66;}' +
      '.summe div span:last-child{color:#101010;font-variant-numeric:tabular-nums;}' +
      '.summe .ges{border-top:1px solid #101010;margin-top:2mm;padding-top:3mm;font-size:14pt;font-weight:700;color:#101010;}' +
      '.summe .ges span:last-child{color:#101010;}' +
      '.fuss{margin-top:12mm;border-top:1px solid #e5e7eb;padding-top:4mm;font-size:9pt;color:#646b76;}</style></head><body>' +
      '<div class="kopf"><div>' + '<img s' + 'rc="' + SHOP_LOGO_URL() + '" alt="Logo" style="height:14mm;width:auto;display:block;margin-bottom:4mm;">' + '<div class="marke">Bestellung</div><h1>' + g.hersteller + '</h1>' +
      '<div style="color:#545b66;">Bestellvorschlag aus der Bestandsführung übernommen</div></div>' +
      '<div class="meta"><b>' + g.nummer + DTX('</b><br>Datum 27.08.2026<br>Kundennummer ') + g.lief.kdnr + '<br>Lieferzeit ' + g.lief.lieferzeit + '</div></div>' +
      '<div class="blocks"><div><div class="label">Lieferant</div><b>' + g.lief.firma + '</b><br>' + g.lief.adresse + '<br>' + g.lief.mail + '</div>' +
      (() => { const d = SHOP_LADEN().daten; return '<div><div class="label">Lieferadresse</div><b>' + d.firma + '</b><br>Hauptlager · ' + d.strasse + '<br>' + d.ort + '<br>' + d.email + '</div></div>'; })() +
      '<table><thead><tr><th>Artikel</th><th class="n">Menge</th><th class="n">EK netto</th><th class="n">Position</th></tr></thead><tbody>' +
      g.positionen.map(zeile).join('') + '</tbody></table>' +
      '<div class="summe"><div><span>Netto</span><span>' + EUR(netto) + '</span></div>' +
      '<div><span>19 % MwSt.</span><span>' + EUR(mwst) + '</span></div>' +
      '<div class="ges"><span>Gesamt</span><span>' + EUR(netto + mwst) + '</span></div></div>' +
      '<div class="fuss">Bestellung erzeugt aus dem Nachbestellvorschlag (Meldebestand 2 Stück). Preise sind kalkulierte Einkaufspreise des Prototyps und keine verbindliche Bestellung.</div>' +
      '</body></html>';
    this.druckeHtml(html, g.nummer);
  }

  t(key, de) {
    const s = this.aktiveSprache();
    if (s === 'de') return de;
    const e = UI_TR[key];
    return (e && e[s]) || de;
  }
  aktiveSprache() {
    const st = this.state;
    if (st.previewSprache) return st.previewSprache;
    const sys = st.systemSprache || 'de';
    const u = st.angemeldet;
    if (!u) return sys;
    const live = (st.benutzer || []).find(b => b.id === u.id) || u;
    return live.sprache || sys;
  }