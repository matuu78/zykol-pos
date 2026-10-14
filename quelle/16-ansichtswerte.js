  renderVals() {
    const st0 = this.state;
    const darfEinst = !st0.angemeldet || !!this.meineRechte()['Einstellungen & Benutzer'];
    const st = (!darfEinst && st0.einstellTab !== 'anleitung') ? Object.assign({}, st0, {einstellTab: 'anleitung'}) : st0;
    const sprache = this.aktiveSprache();
    const q = st.suche.trim().toLowerCase();
    const bestandsliste = PRODUKTE.map(p => Object.assign({}, p, {
      stock: Math.max(0, this.bestandVon(p) + (st.stockDelta[p.id] || 0))
    }));
    const tq = st.txSuche.trim().toLowerCase();
    const TXS = TX.map(t => st.txStatus[t.beleg] ? Object.assign({}, t, {status: st.txStatus[t.beleg]}) : t);
    const txKasse = TXS.filter(t => t.kasse === st.aktiveKasseId);
    const isoD = d => { const p = d.split('.'); return p[2] + '-' + p[1] + '-' + p[0]; };
    const txAlleIso = TX.map(t => isoD(t.datum)).sort();
    const txMin = txAlleIso[0], txMax = txAlleIso[txAlleIso.length - 1];
    const txVon = st.txVon || txMin, txBis = st.txBis || txMax;
    const txListe = txKasse.filter(t => {
      const di = isoD(t.datum);
      if (di < txVon || di > txBis) return false;
      const f = st.txFilter;
      const passtFilter = f === 'alle' ? true
        : f === 'heute' ? t.datum === DTX('27.08.2026')
        : f === 'Storniert' ? t.status === 'Storniert'
        : t.zahlart === f;
      const text = (t.beleg + ' ' + t.kassierer + ' ' + t.pos.map(p => p[0]).join(' ')).toLowerCase();
      return passtFilter && (!tq || text.includes(tq));
    });
    const tx = TXS.find(t => t.beleg === st.txBeleg);
    const isoZ = t => { const p = t.datum.split('.'); return p[2] + p[1] + p[0] + t.zeit; };
    const TX_SORT = {beleg: t => t.beleg, zeit: isoZ, pos: t => t.pos.reduce((a, p) => a + p[1], 0), zahlart: t => t.zahlart, status: t => t.status, betrag: t => (t.status === 'Storniert' ? -1 : 1) * txSumme(t)};
    const sk = TX_SORT[st.txSort.key] || TX_SORT.zeit, sd = st.txSort.dir;
    txListe.sort((a, b) => { const x = sk(a), y = sk(b); return (x < y ? -1 : x > y ? 1 : 0) * sd; });
    const kq = st.kdSuche.trim().toLowerCase();
    const kdListe = this.kunden().filter(k =>
      (st.kdTyp === 'Alle' || k.typ === st.kdTyp) &&
      (!kq || (k.name + ' ' + k.nr + ' ' + k.ort + ' ' + k.kontakt).toLowerCase().includes(kq))
    );
    const kd = this.kunden().find(k => k.nr === st.kdDetailNr);
    const kunde = this.kunden().find(k => k.nr === st.kundeNr);
    const zrBasis = ZEITRAUM[st.zeitraum];
    const kassenAnteile = (() => {
      const gesamt = TX.filter(t => t.status !== 'Storniert').reduce((a, t) => a + txSumme(t), 0) || 1;
      const map = {};
      st.kassen.forEach(k => {
        map[k.id] = TX.filter(t => t.kasse === k.id && t.status !== 'Storniert').reduce((a, t) => a + txSumme(t), 0) / gesamt;
      });
      return map;
    })();
    const berichtKasse = st.berichtKasse || 'alle';
    const anteil = berichtKasse === 'alle' ? 1 : (kassenAnteile[berichtKasse] || 0);
    const zr = berichtKasse === 'alle' ? zrBasis : Object.assign({}, zrBasis, {
      umsatz: zrBasis.umsatz * anteil,
      bon: Math.max(1, Math.round(zrBasis.bon * anteil)),
      kunden: Math.max(1, Math.round(zrBasis.kunden * anteil)),
      retour: Math.round(zrBasis.retour * anteil),
      hinweis: zrBasis.hinweis + ' · ' + berichtKasse,
      reihe: zrBasis.reihe.map(r => [r[0], r[1] * anteil])
    });
    const maxReihe = Math.max.apply(null, zr.reihe.map(r => r[1])) || 1;
    const bsAlle = bestandsliste.map(p => {
      const res = Math.min(RESERVIERT[p.id] || 0, p.stock);
      return Object.assign({}, p, {
        lager: p.lager.indexOf('Hauptlager') === 0 ? 'Hauptlager' : 'Verkaufsfläche',
        reserviert: res,
        verfuegbar: Math.max(0, p.stock - res)
      });
    });
    const phone = st.breite < 760;
    const tablet = st.breite < 1100;
    const aktiveKasse = st.kassen.find(k => k.id === st.aktiveKasseId) || st.kassen[0];
    const fzAlle = FZ[st.fzTab].felder.length;
    const fzAktiv = FZ[st.fzTab].felder.filter(f => !st.fzAus[st.fzTab + f.kasse]).length;
    const bq = st.bsSuche.trim().toLowerCase();
    const bsListe = bsAlle.filter(b =>
      (st.lagerort === 'Alle Lagerorte' || b.lager === st.lagerort) &&
      (!bq || (b.name + ' ' + b.brand + ' ' + b.sku).toLowerCase().includes(bq))
    );
    const kdRow = (k) => ({
      name: k.name, nr: k.nr, ort: k.ort, typ: k.typ,
      kontakt: k.kontakt, telefon: k.telefon,
      initialen: k.name.replace(/[^A-Za-zÄÖÜäöü ]/g, ' ').trim().split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase(),
      typBg: TYP_STIL[k.typ].bg, typFg: TYP_STIL[k.typ].fg,
      rabattStr: k.rabatt ? k.rabatt + ' % Rabatt' : 'Listenpreis',
      zahlung: k.zahlung,
      umsatzStr: EUR(k.umsatz),
      btnLabel: st.kundeNr === k.nr ? 'Ausgewählt' : 'Auswählen',
      btnBg: st.kundeNr === k.nr ? '#EF3D2F' : '#101010',
      btnFg: st.kundeNr === k.nr ? '#101010' : '#FFFFFF',
      btnBorder: st.kundeNr === k.nr ? '#EF3D2F' : '#101010',
      onSelect: (e) => { if (e && e.stopPropagation) e.stopPropagation(); this.setState({kundeNr: st.kundeNr === k.nr ? null : k.nr}); },
      onDetail: () => this.setState({kdDetailNr: k.nr}),
      onEdit: (e) => {
        if (e && e.stopPropagation) e.stopPropagation();
        this.setState({kdFormNr: k.nr, kdFormHinweis: '', kdForm: {
          name: k.name, kontakt: k.kontakt === '—' ? '' : k.kontakt, typ: k.typ,
          ort: k.ort, mail: k.mail, telefon: k.telefon,
          rabatt: String(k.rabatt || 0), zahlung: k.zahlung
        }});
      },
      kaufKurz: this.kaeufeVon(k.nr).length
        ? (KAEUFE[k.nr] || []).length + ' Artikel gekauft'
        : 'Noch kein Kauf'
    });

    const produkte = PRODUKTE.filter(p =>
      (st.cat === 'alle' || p.cat === st.cat) &&
      (!st.artMarke || st.artMarke === 'alle' || p.brand === st.artMarke) &&
      (!q || (p.name + ' ' + p.brand + ' ' + p.type + ' ' + p.sku).toLowerCase().includes(q))
    ).map(p => {
      const drin = Object.keys(this.korb()).some(k => k.split('::')[0] === p.id);
      const varianten = hatVarianten(p.id);
      const pv = VARIANTEN[p.id] || {farben: [], groessen: []};
      return Object.assign({}, p, {
        icon: CAT_ICON[p.cat],
        catLabel: (this.kats().find(k => k.id === p.cat) || {label: ''}).label,
        priceStr: EUR(p.price),
        border: drin ? '#646b76' : '#e5e7eb',
        btnBg: drin ? '#0d5f38' : '#101010',
        btnFg: '#FFFFFF',
        varHinweis: varianten
          ? [(pv.farben || []).length > 1 ? (pv.farben.length + ' Farben') : '', (pv.groessen || []).length > 1 ? (pv.groessen.length + ' Größen') : ''].filter(Boolean).join(' · ')
          : 'Einheitsausführung',
        addTitel: varianten ? 'Farbe und Größe wählen' : 'In den Warenkorb',
        onAdd: () => (varianten || (SERIEN[p.id] || []).length)
          ? this.setState({detailId: p.id, varFarbe: null, varGroesse: null, serieWahl: null, serieOffen: null})
          : this.add(p.id),
        onDetail: () => this.setState({detailId: p.id, varFarbe: null, varGroesse: null})
      });
    });

    const korbDaten = this.korb();
    const kdRabatt = kunde && kunde.rabatt ? kunde.rabatt : 0;
    const warenkorb = Object.keys(korbDaten).map(k => {
      const teile = k.split('::');
      const p = PRODUKTE.find(x => x.id === teile[0]);
      const qty = korbDaten[k];
      const variante = [teile[1], teile[2]].filter(Boolean).join(' · ');
      return {
        key: k, id: p.id, qty, price: Math.round(p.price * (100 - kdRabatt)) / 100, listPrice: p.price,
        hatRabatt: kdRabatt > 0, listLineStr: EUR(p.price * qty), rabattStr: '− ' + kdRabatt + ' %',
        icon: CAT_ICON[p.cat],
        title: p.brand + ' ' + p.name,
        type: teile[3] ? p.type + ' · SN ' + teile[3] : (variante || p.type),
        priceStr: EUR(Math.round(p.price * (100 - kdRabatt)) / 100),
        lineStr: EUR(Math.round(p.price * (100 - kdRabatt)) / 100 * qty),
        offen: st.korbZeileOffen === k,
        onZeileToggle: () => this.setState(s2 => ({korbZeileOffen: s2.korbZeileOffen === k ? null : k})),
        notiz: (st.posNotiz || {})[k] || '',
        hatNotiz: !!((st.posNotiz || {})[k] || '').trim(),
        notizOffen: st.notizOffen === k,
        notizLabel: ((st.posNotiz || {})[k] || '').trim() ? 'Notiz bearbeiten' : 'Rechnungsnotiz',
        onNotizToggle: () => this.setState(s2 => ({notizOffen: s2.notizOffen === k ? null : k})),
        onNotiz: (e) => { const v = e.target.value; this.setState(s2 => ({posNotiz: Object.assign({}, s2.posNotiz, {[k]: v})})); },
        onNotizWeg: () => this.setState(s2 => {
          const n = Object.assign({}, s2.posNotiz); delete n[k];
          return {posNotiz: n, notizOffen: null};
        }),
        onPlus: () => this.plus(k),
        onMinus: () => this.minus(k),
        onRemove: () => { this.remove(k); this.setState(s2 => { const n = Object.assign({}, s2.posNotiz); delete n[k]; return {posNotiz: n}; }); }
      };
    });

    const brutto = warenkorb.reduce((s, w) => s + w.price * w.qty, 0);
    const netto = brutto / 1.19;
    const listenBrutto = warenkorb.reduce((s, w) => s + w.listPrice * w.qty, 0);
    const anzahl = warenkorb.reduce((s, w) => s + w.qty, 0);
    const bbVals = this.bestellbelegVals(warenkorb, brutto);

    const d = PRODUKTE.find(p => p.id === st.detailId);
    const dv = d ? (VARIANTEN[d.id] || {farben: [], groessen: []}) : null;
    const dFarbe = d ? (st.varFarbe || (dv.farben || [])[0] || null) : null;
    const dGroesse = d ? (st.varGroesse || (dv.groessen || [])[0] || null) : null;
    const detail = d ? {
      brand: d.brand, name: d.name, type: d.type,
      priceStr: EUR(d.price),
      icon: CAT_ICON[d.cat],
      catLabel: (this.kats().find(k => k.id === d.cat) || {label: ''}).label,
      attrs: [
        {k: 'Artikelnummer', v: d.sku},
        {k: 'Hersteller', v: d.brand},
        {k: 'Kategorie', v: d.type},
        {k: 'Preis (brutto)', v: EUR(d.price)},
        {k: 'MwSt.', v: '19 % · ' + EUR(d.price - d.price / 1.19)},
        {k: 'Bestand', v: d.stock + ' Stück'},
        {k: 'Lagerort', v: d.lager}
      ].concat(d.extra.map(e => ({k: e[0], v: e[1]}))),
      hatSerien: (SERIEN[d.id] || []).length > 0,
      serienAnzahl: this.serienFrei(d.id).length + ' von ' + (SERIEN[d.id] || []).length + ' verfügbar',
      serienHinweis: this.serienFrei(d.id).length
        ? 'Boot per Klick auf die Zeile wählen — die Seriennummer geht mit in den Warenkorb.'
        : 'Alle Boote dieses Modells sind verkauft oder bereits im Warenkorb.',
      serien: (SERIEN[d.id] || []).map(x => {
        const h = SN_HISTORIE[x.sn] || [];
        const offen = st.serieOffen === x.sn;
        const weg = !!(st.snVerkauft || {})[x.sn];
        const imKorb = Object.keys(this.korb()).some(kk => kk.split('::')[3] === x.sn);
        const frei = !weg && !imKorb;
        const gewaehlt = st.serieWahl === x.sn;
        const kosten = h.slice(1).reduce((a, e) => a + parseFloat(e.kosten.replace(/\./g, '').replace(',', '.')), 0);
        return {
          sn: x.sn, baujahr: 'Baujahr ' + x.baujahr, lager: x.lager,
          status: weg ? 'Verkauft' : (imKorb ? 'Im Warenkorb' : x.status),
          bg: weg ? '#e5e7eb' : (imKorb ? '#e5e7eb' : (SERIEN_STIL[x.status] || SERIEN_STIL['Verfügbar']).bg),
          fg: weg ? '#646b76' : (imKorb ? '#1f2329' : (SERIEN_STIL[x.status] || SERIEN_STIL['Verfügbar']).fg),
          zeileBg: gewaehlt ? '#F1F7F3' : 'transparent',
          zeileRand: gewaehlt ? '#0d5f38' : 'transparent',
          offen,
          pfeil: offen ? 'M6 15l6-6 6 6' : 'M6 9l6 6 6-6',
          onToggle: () => this.setState(frei
            ? {serieWahl: gewaehlt ? null : x.sn, serieOffen: offen ? null : x.sn}
            : {serieOffen: offen ? null : x.sn}),
          onQr: (ev) => { if (ev) ev.stopPropagation(); this.zeigeEtiketten(d.brand + ' ' + d.name, [{kopf: d.brand, name: d.name, art: 'Seriennummer', code: x.sn}]); },
          historieAnzahl: h.length + ' Einträge',
          historie: h.slice().reverse().map(e => ({
            datum: e.datum, typ: e.typ, titel: e.titel, text: e.text, kosten: e.kosten,
            bg: (HIST_STIL[e.typ] || HIST_STIL.Wartung).bg,
            fg: (HIST_STIL[e.typ] || HIST_STIL.Wartung).fg
          })),
          fuss: h.length ? 'Zugang ' + h[0].datum + ' · Wartungen und Reparaturen ' + EUR(kosten) : 'Keine Historie erfasst'
        };
      }),
      onSerienAlle: () => this.zeigeEtiketten(d.brand + ' ' + d.name, (SERIEN[d.id] || []).map(x => ({kopf: d.brand, name: d.name, art: 'Seriennummer', code: x.sn}))),
      farbenTitel: (dv.farben || []).length ? 'Farbe' : '',
      hatFarben: (dv.farben || []).length > 0,
      farben: (dv.farben || []).map(f => ({
        label: f,
        bg: f === dFarbe ? '#101010' : '#FFFFFF',
        fg: f === dFarbe ? '#FFFFFF' : '#101010',
        border: f === dFarbe ? '#101010' : '#e5e7eb',
        weight: f === dFarbe ? 600 : 500,
        onClick: () => this.setState({varFarbe: f})
      })),
      hatGroessen: (dv.groessen || []).length > 0,
      groessen: (dv.groessen || []).map(g => ({
        label: g,
        bg: g === dGroesse ? '#101010' : '#FFFFFF',
        fg: g === dGroesse ? '#FFFFFF' : '#101010',
        border: g === dGroesse ? '#101010' : '#e5e7eb',
        weight: g === dGroesse ? 600 : 500,
        onClick: () => this.setState({varGroesse: g})
      })),
      hatFarben: (dv.farben || []).length > 0,
      farben: (dv.farben || []).map(f => ({
        label: f,
        bg: f === dFarbe ? '#101010' : '#FFFFFF',
        fg: f === dFarbe ? '#FFFFFF' : '#101010',
        border: f === dFarbe ? '#101010' : '#e5e7eb',
        weight: f === dFarbe ? 600 : 500,
        onClick: () => this.setState({varFarbe: f})
      })),
      hatGroessen: (dv.groessen || []).length > 0,
      groessen: (dv.groessen || []).map(g => ({
        label: g,
        bg: g === dGroesse ? '#101010' : '#FFFFFF',
        fg: g === dGroesse ? '#FFFFFF' : '#101010',
        border: g === dGroesse ? '#101010' : '#e5e7eb',
        weight: g === dGroesse ? 600 : 500,
        onClick: () => this.setState({varGroesse: g})
      })),
      auswahlText: [dFarbe, dGroesse].filter(Boolean).join(' · ') || 'Einheitsausführung',
      addLabel: (SERIEN[d.id] || []).length
        ? (this.serienFrei(d.id).length ? (st.serieWahl && this.serienFrei(d.id).some(x => x.sn === st.serieWahl) ? 'Boot ' + st.serieWahl + ' übernehmen' : 'Boot wählen') : 'Nicht verfügbar')
        : 'In den Warenkorb',
      onAdd: () => {
        const serien = SERIEN[d.id] || [];
        if (serien.length) {
          const frei = this.serienFrei(d.id);
          if (!frei.length) return;
          const sn = st.serieWahl && frei.some(x => x.sn === st.serieWahl) ? st.serieWahl : null;
          if (!sn) return this.setState({serieWahl: frei[0].sn, serieOffen: frei[0].sn});
          this.add(d.id, dFarbe, dGroesse, sn);
          return this.setState({detailId: null, varFarbe: null, varGroesse: null, serieWahl: null, serieOffen: null});
        }
        this.add(d.id, dFarbe, dGroesse);
        this.setState({detailId: null, varFarbe: null, varGroesse: null});
      }
    } : null;

    const dokQuery = () => {
      const k = this.kunden().find(x => x.nr === st.kundeNr);
      const teile = [];
      if (k) teile.push('kunde=' + encodeURIComponent([k.name, k.kontakt || '', k.ort, 'Kundennummer ' + k.nr].filter(Boolean).join('|')));
      const rp = this.rechnungPaddel(st);
      if (rp.length) teile.push('paddel=' + encodeURIComponent(rp.map(x => x.p.brand + ' ' + x.p.name + ': ' + x.ids.join(', ')).join('|')) + '&rg=' + encodeURIComponent(this.rechnungNr(st)));
      return teile.length ? '?' + teile.join('&') : '';
    };
    const oeffneDok = (typ) => () => this.setState({dokVorschau: typ, dokQ: null});
    const dq = () => st.dokQ != null ? st.dokQ : dokQuery();
    const vals = {
      ...bbVals,
      ...this.etikettVals(st),
      dok: {
        beleg: oeffneDok('beleg'),
        rechnung: oeffneDok('rechnung'),
        tagesabschluss: oeffneDok('tagesabschluss'),
        artikelliste: oeffneDok('artikelliste'),
        bestandsliste: oeffneDok('bestandsliste'),
        dsfinvk: oeffneDok('dsfinvk')
      },
      datum: st.now.toLocaleDateString('de-DE', {day: '2-digit', month: '2-digit', year: 'numeric'}),
      uhrzeit: st.now.toLocaleTimeString('de-DE', {hour: '2-digit', minute: '2-digit'}),
      statusChips: (st.offlineModus ? [
        {label: 'Online', dot: '#E24D4D', fg: '#e5e7eb', bg: '#1f2329', border: '#1f2329', root: true},
        {label: 'TSE', dot: '#E24D4D', fg: '#e5e7eb', bg: '#1f2329', border: '#1f2329', root: false},
        {label: 'Cloud synchron', dot: '#E24D4D', fg: '#e5e7eb', bg: '#1f2329', border: '#1f2329', root: false}
      ] : [
        {label: 'Online', dot: '#32C995', fg: '#e5e7eb', bg: '#1f2329', border: '#1f2329', root: true},
        {label: 'TSE', dot: '#32C995', fg: '#e5e7eb', bg: '#1f2329', border: '#1f2329', root: false},
        {label: 'Cloud synchron', dot: '#32C995', fg: '#e5e7eb', bg: '#1f2329', border: '#1f2329', root: false}
      ]).map(c => Object.assign(c, {
        cursor: (c.root && st.angemeldet && st.angemeldet.system) ? 'pointer' : 'default',
        onClick: (c.root && st.angemeldet && st.angemeldet.system) ? (() => this.setState(s => ({offlineModus: !s.offlineModus}))) : (() => {})
      })),
      aktiveKasse: aktiveKasse ? aktiveKasse.id : 'Keine Kasse',
      kasseMenuOffen: st.kasseMenuOffen,
      kassePfeil: st.kasseMenuOffen ? '180deg' : '0deg',
      onKasseMenu: () => this.setState(s => ({kasseMenuOffen: !s.kasseMenuOffen})),
      onKasseMenuClose: () => this.setState({kasseMenuOffen: false}),
      kannKassenVerwalten: !!(st.angemeldet && (st.angemeldet.system || st.angemeldet.rolle === 'Admin')),
      onKassenVerwalten: () => this.setState({kasseMenuOffen: false, view: 'einstellungen', einstellTab: 'benutzer'}),
      kassenMenu: st.kassen.map(k => {
        const gesperrt = !!st.kassenAus[k.id];
        const gewaehlt = k.id === st.aktiveKasseId;
        return {
          id: k.id,
          ort: gesperrt ? 'Deaktiviert · ' + k.ort : k.ort,
          dot: gesperrt ? '#e5e7eb' : gewaehlt ? '#EF3D2F' : '#32C995',
          bg: gewaehlt ? '#e5e7eb' : 'transparent',
          fg: gesperrt ? '#646b76' : '#101010',
          weight: gewaehlt ? 600 : 500,
          haken: gewaehlt ? '✓' : '',
          cursor: gesperrt ? 'not-allowed' : 'pointer',
          onClick: () => { if (!gesperrt) this.setState({aktiveKasseId: k.id, kasseMenuOffen: false}); }
        };
      }),
      phone: phone,
      tablet: tablet,
      kasseStickyTop: phone ? '-16px' : tablet ? '-20px' : '-24px',
      kasseStickyPad: phone ? '16px' : tablet ? '20px' : '24px',
      inhaltPadding: phone ? '16px 14px 20px' : tablet ? '20px 20px 24px' : '24px 28px 28px',
      inhaltMinBreite: tablet ? '0' : '400px',
      titelGroesse: phone ? '28px' : '38px',
      kpiRaster: phone ? 'repeat(2,minmax(0,1fr))' : 'repeat(auto-fit,minmax(190px,1fr))',
      panelRaster: tablet ? '1fr' : '1fr 1fr',
      verlaufRaster: tablet ? '1fr' : '1.65fr 1fr',
      bestandRaster: tablet ? '1fr' : '1.75fr 1fr',
      produktRaster: phone ? 'repeat(2,minmax(0,1fr))' : 'repeat(auto-fill,minmax(232px,1fr))',
      featureRaster: phone ? '1fr 1fr' : tablet ? 'repeat(3,1fr)' : 'repeat(5,1fr)',
      korbUeberlagern: tablet,
      navOffen: st.navOffen && !phone,
      navBreite: (st.navOffen && !phone) ? '252px' : phone ? '56px' : '84px',
      navLabel: (st.navOffen && !phone) ? 'flex' : 'none',
      navAlign: (st.navOffen && !phone) ? 'stretch' : 'center',
      navCardPad: (st.navOffen && !phone) ? '14px 16px' : '10px',
      navPfeil: (st.navOffen && !phone) ? '0deg' : '180deg',
      navToggleAnzeige: phone ? 'none' : 'flex',
      navPadding: phone ? '14px 6px 12px' : '22px 16px 16px',
      onNavToggle: () => this.setState(s => ({navOffen: !s.navOffen})),
      navEdit: !!st.navEdit,
      themeAttr: st.theme === 'dunkel' ? 'dunkel' : 'hell', themeDunkel: st.theme === 'dunkel', themeHell: st.theme !== 'dunkel',
      themeLabel: st.theme === 'dunkel' ? 'Dark' : 'Light', themeTitel: st.theme === 'dunkel' ? 'Light' : 'Dark',
      themeTrack: st.theme === 'dunkel' ? '#EF3D2F' : '#1f2329', themeKnob: st.theme === 'dunkel' ? '16px' : '2px', themeJustify: st.navOffen ? 'flex-start' : 'center',
      onTheme: () => this.setState(x => { const t = x.theme === 'dunkel' ? 'hell' : 'dunkel'; try { localStorage.setItem('zykolPOS.theme', t); } catch (e) {} document.documentElement.classList.toggle('zk-dunkel', t === 'dunkel'); return { theme: t }; }),
      navEditLabel: st.navEdit ? this.t('navSortierenBeenden', 'Sortieren beenden') : this.t('navSortieren', 'Menü sortieren'),
      schichtLabel: this.t('schichtSeit', 'Schicht seit 08:15'),
      abmeldenLabel: this.t('abmelden', 'Abmelden'),
      navEditBg: st.navEdit ? '#EF3D2F' : 'transparent',
      navEditFg: st.navEdit ? '#101010' : '#646b76',
      navEditBorder: st.navEdit ? '#EF3D2F' : '#1f2329',
      onNavEdit: () => this.setState(s => ({navEdit: !s.navEdit, navDrag: null})),
      navEditAnzeige: st.navOffen ? 'flex' : 'none',
      kasseView: st.view === 'kasse',
      artikelView: st.view === 'artikel',
      transaktionenView: st.view === 'transaktionen',
      kundenView: st.view === 'kunden',
      berichteView: st.view === 'berichte',
      umsatzView: st.view === 'umsatz',
      ud: st.view === 'umsatz' ? this.udVals() : {},
      bestandView: st.view === 'bestand',
      liefView: st.view === 'lieferanten',
      onLiefNeu: () => this.setState({liefFormOffen: true, neuLief: {}, liefEditMarke: null, liefFehler: null}),
      liefFormTitel: st.liefEditMarke ? 'Lieferant bearbeiten' : 'Neuer Lieferant',
      liefFormHinweis: st.liefEditMarke ? 'Stammdaten und Konditionen von ' + st.liefEditMarke + ' anpassen.' : 'Stammdaten, Konditionen und Bankverbindung erfassen.',
      liefSpeichernLabel: st.liefEditMarke ? 'Änderungen speichern' : 'Lieferant speichern',
      liefLogoEl: (st.neuLief || {}).logo ? React.createElement('img', {src: (st.neuLief || {}).logo, alt: 'Lieferantenlogo', style: {width: '100%', height: '100%', objectFit: 'contain'}}) : null,
      hatLiefLogo: !!(st.neuLief || {}).logo,
      ohneLiefLogo: !(st.neuLief || {}).logo,
      liefLogoLabel: (st.neuLief || {}).logo ? 'Logo ersetzen' : 'Logo hochladen',
      onLiefLogo: (e) => {
        const f = e.target.files && e.target.files[0];
        if (!f) return;
        const r = new FileReader();
        r.onload = () => this.setState(s2 => ({neuLief: Object.assign({}, s2.neuLief, {logo: r.result})}));
        r.readAsDataURL(f);
      },
      onLiefLogoWeg: () => this.setState(s2 => { const n = Object.assign({}, s2.neuLief); delete n.logo; return {neuLief: n}; }),
      liefFormOffen: !!st.liefFormOffen,
      onLiefFormClose: () => this.setState({liefFormOffen: false}),
      liefFehler: st.liefFehler || '',
      hatLiefFehler: !!st.liefFehler,
      liefFelder: LIEF_FELDER.map(f => ({
        label: f.label, platz: f.platz,
        value: (st.neuLief || {})[f.id] || '',
        spalte: f.breit ? '1 / -1' : 'auto',
        onChange: (e) => { const v = e.target.value; this.setState(s2 => ({neuLief: Object.assign({}, s2.neuLief, {[f.id]: v})})); }
      })),
      onLiefSpeichern: () => {
        const n = st.neuLief || {};
        if (!n.marke || !n.firma || !n.mail) return this.setState({liefFehler: 'Kurzname, Firmenname und E-Mail sind Pflichtfelder.'});
        const alt = st.liefEditMarke ? Object.assign({}, LIEFERANTEN, st.liefExtra || {})[st.liefEditMarke] || {} : {};
        const extra = Object.assign({}, st.liefExtra);
        if (st.liefEditMarke && st.liefEditMarke !== n.marke) delete extra[st.liefEditMarke];
        extra[n.marke] = {
          firma: n.firma, adresse: [n.strasse, n.ort].filter(Boolean).join(' · ') || '—',
          land: n.land || 'Deutschland', mail: n.mail, telefon: n.telefon || '—', kontakt: n.kontakt || '—',
          kdnr: n.kdnr || 'neu', lieferzeit: n.lieferzeit || '—', rabatt: parseFloat(String(n.rabatt).replace(',', '.')) || 0,
          zahlung: n.zahlung || 'Rechnung 30 Tage', mindest: parseFloat(String(n.mindest).replace(',', '.')) || 0,
          frachtfrei: parseFloat(String(n.frachtfrei).replace(',', '.')) || 0,
          seit: n.seit || '2026', sortiment: n.sortiment || '—', status: alt.status || 'Aktiv',
          offeneBestellungen: alt.offeneBestellungen || 0, jahresvolumen: alt.jahresvolumen || 0, notiz: n.notiz || '—',
          ustid: n.ustid || '—', website: n.website || '—', iban: n.iban || '—',
          logo: n.logo || alt.logo || ''
        };
        this.setState({liefExtra: extra, liefFormOffen: false, neuLief: {}, liefEditMarke: null, liefFehler: null, liefOffen: n.marke, view: 'lieferanten'});
      },
      liefSuche: st.liefSuche || '',
      hatLiefSuche: !!(st.liefSuche || '').trim(),
      onLiefSucheLoeschen: () => this.setState({liefSuche: ''}),
      onLiefSuche: (e) => this.setState({liefSuche: e.target.value}),
      liefKennzahlen: (() => { const L = Object.assign({}, LIEFERANTEN, st.liefExtra || {}); return [
        {label: 'Lieferanten', value: String(Object.keys(L).length), hint: new Set(Object.keys(L).map(k => L[k].land)).size + ' Länder', color: '#101010'},
        {label: 'Einkaufsvolumen Jahr', value: EUR(Object.keys(L).reduce((a, k) => a + L[k].jahresvolumen, 0)), hint: 'netto, laufendes Jahr', color: '#101010'},
        {label: 'Offene Bestellungen', value: String(Object.keys(L).reduce((a, k) => a + L[k].offeneBestellungen, 0)), hint: 'Lieferung ausstehend', color: '#6b4200'},
        {label: 'Ø Einkaufsrabatt', value: Math.round(Object.keys(L).reduce((a, k) => a + L[k].rabatt, 0) / Object.keys(L).length) + ' %', hint: 'auf Listenpreis', color: '#0d5f38'}
      ]; })(),
      lieferanten: Object.keys(Object.assign({}, LIEFERANTEN, st.liefExtra || {})).filter(m => {
        const q = (st.liefSuche || '').trim().toLowerCase();
        const l = Object.assign({}, LIEFERANTEN, st.liefExtra || {})[m];
        return !q || (m + ' ' + l.firma + ' ' + l.kontakt + ' ' + l.sortiment + ' ' + l.land).toLowerCase().includes(q);
      }).map(m => {
        const l = Object.assign({}, LIEFERANTEN, st.liefExtra || {})[m];
        const artikel = PRODUKTE.filter(p => p.brand === m);
        const stil = LIEF_STIL[l.status] || LIEF_STIL.Aktiv;
        return {
          marke: m, firma: l.firma, ort: l.adresse, land: l.land, kontakt: l.kontakt, mail: l.mail, telefon: l.telefon,
          logoEl: l.logo ? React.createElement('img', {src: l.logo, alt: 'Logo ' + m, style: {width: '100%', height: '100%', objectFit: 'contain', background: '#FFFFFF'}}) : null,
          hatLogo: !!l.logo, ohneLogo: !l.logo,
          initialen: m.replace(/[^A-Za-z ]/g, ' ').trim().split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase(),
          statusBg: stil.bg, statusFg: stil.fg, status: l.status,
          sortiment: l.sortiment, artikelText: artikel.length + ' Artikel im Sortiment',
          konditionen: l.rabatt + ' % Rabatt', zahlung: l.zahlung,
          lieferzeit: l.lieferzeit, mindest: 'Mindestbestellwert ' + EUR(l.mindest),
          volumenStr: EUR(l.jahresvolumen),
          offenText: l.offeneBestellungen ? l.offeneBestellungen + ' offen' : 'keine offen',
          onOpen: () => this.setState({liefOffen: st.liefOffen === m ? null : m}),
          offen: st.liefOffen === m,
          pfeil: st.liefOffen === m ? 'M6 15l6-6 6 6' : 'M6 9l6 6 6-6',
          rowBg: st.liefOffen === m ? '#FFFFFF' : 'transparent',
          onMail: () => { window.location.href = 'mailto:' + l.mail + '?subject=' + encodeURIComponent('Anfrage zykol Wassersport · Kundennummer ' + l.kdnr); },
          onBearbeiten: (e) => {
            if (e && e.stopPropagation) e.stopPropagation();
            const teile = String(l.adresse || '').split(' · ');
            this.setState({
              liefFormOffen: true, liefEditMarke: m, liefFehler: null,
              neuLief: {
                marke: m, firma: l.firma, logo: l.logo || '', kontakt: l.kontakt === '—' ? '' : l.kontakt,
                telefon: l.telefon === '—' ? '' : l.telefon, mail: l.mail,
                website: l.website && l.website !== '—' ? l.website : '',
                strasse: teile[0] || '', ort: teile[1] || '', land: l.land,
                ustid: l.ustid && l.ustid !== '—' ? l.ustid : '', kdnr: l.kdnr,
                sortiment: l.sortiment, rabatt: String(l.rabatt), zahlung: l.zahlung,
                mindest: String(l.mindest), frachtfrei: l.frachtfrei ? String(l.frachtfrei) : '',
                lieferzeit: l.lieferzeit, seit: l.seit,
                iban: l.iban && l.iban !== '—' ? l.iban : '',
                notiz: l.notiz === '—' ? '' : l.notiz
              }
            });
          },
          stamm: [
            {k: 'Kundennummer', v: l.kdnr},
            {k: 'Anschrift', v: l.adresse + ' · ' + l.land},
            {k: 'Ansprechpartner', v: l.kontakt},
            {k: 'Telefon', v: l.telefon},
            {k: 'E-Mail', v: l.mail},
            {k: 'Website', v: l.website || '—'},
            {k: 'USt-IdNr.', v: l.ustid || '—'},
            {k: 'Zahlungsart', v: l.zahlung},
            {k: 'Einkaufsrabatt', v: l.rabatt + ' % auf Listenpreis'},
            {k: 'Mindestbestellwert', v: EUR(l.mindest)},
            {k: 'Frachtfrei ab', v: l.frachtfrei ? EUR(l.frachtfrei) : 'nach Vereinbarung'},
            {k: 'IBAN', v: l.iban || '—'},
            {k: 'Lieferzeit', v: l.lieferzeit},
            {k: 'Lieferant seit', v: l.seit},
            {k: 'Einkaufsvolumen Jahr', v: EUR(l.jahresvolumen)},
            {k: 'Notiz', v: l.notiz}
          ],
          artikel: artikel.map(p => ({
            name: p.name, sku: p.sku, typ: p.type,
            ek: EUR(Math.round(p.price * (1 - l.rabatt / 100) * 100) / 100),
            vk: EUR(p.price),
            bestand: p.stock + ' Stück'
          }))
        };
      }),
      liefLeer: Object.keys(Object.assign({}, LIEFERANTEN, st.liefExtra || {})).filter(m => {
        const q = (st.liefSuche || '').trim().toLowerCase();
        const l = Object.assign({}, LIEFERANTEN, st.liefExtra || {})[m];
        return !q || (m + ' ' + l.firma + ' ' + l.kontakt + ' ' + l.sortiment + ' ' + l.land).toLowerCase().includes(q);
      }).length === 0,
      vbView: st.view === 'verkaufteBoote',
      vbSuche: st.vbSuche || '',
      hatVbSuche: !!(st.vbSuche || '').trim(),
      onVbSucheLoeschen: () => this.setState({vbSuche: ''}),
      onVbSuche: (e) => this.setState({vbSuche: e.target.value}),
      vbKennzahlen: (() => {
        const alle = (st.vbExtra || []).concat(VERKAUFTE_BOOTE);
        const kosten = a => a.historie.slice(1).reduce((s, h) => s + parseFloat(h.kosten.replace(/\./g, '').replace(',', '.')), 0);
        return [
          {label: 'Verkaufte Boote', value: String(alle.length), hint: 'seit 2023', color: '#101010'},
          {label: 'Umsatz Boote', value: EUR(alle.reduce((a, b) => a + b.preis, 0)), hint: 'brutto, Listenpreis', color: '#101010'},
          {label: 'In Garantie', value: String(alle.filter(b => b.garantie !== 'abgelaufen').length), hint: 'Gewährleistung offen', color: '#0d5f38'},
          {label: 'Serviceleistungen', value: String(alle.reduce((a, b) => a + b.historie.length - 1, 0)), hint: EUR(alle.reduce((a, b) => a + kosten(b), 0)) + ' berechnet', color: '#6b4200'}
        ];
      })(),
      vbListe: (st.vbExtra || []).concat(VERKAUFTE_BOOTE).filter(b => {
        const q = (st.vbSuche || '').trim().toLowerCase();
        return !q || (b.modell + ' ' + b.sn + ' ' + b.kunde + ' ' + b.beleg).toLowerCase().includes(q);
      }).map(b => {
        const offen = st.vbOffen === b.id;
        const nachKauf = b.historie.slice(1);
        const kosten = nachKauf.reduce((s, h) => s + parseFloat(h.kosten.replace(/\./g, '').replace(',', '.')), 0);
        const inGarantie = b.garantie !== 'abgelaufen';
        return {
          modell: b.modell, typ: b.typ, sn: b.sn, kunde: b.kunde, kundeTyp: b.kundeTyp,
          datum: b.datum, beleg: b.beleg, preisStr: EUR(b.preis),
          garantieLabel: inGarantie ? 'bis ' + b.garantie : 'abgelaufen',
          garantieBg: inGarantie ? '#dcf3e6' : '#e5e7eb',
          garantieFg: inGarantie ? '#0d5f38' : '#545b66',
          serviceText: nachKauf.length + ' Einträge · ' + EUR(kosten),
          offen,
          pfeil: offen ? 'M6 15l6-6 6 6' : 'M6 9l6 6 6-6',
          rowBg: offen ? '#FFFFFF' : 'transparent',
          onToggle: () => this.setState({vbOffen: offen ? null : b.id}),
          onQr: () => this.zeigeEtiketten(b.modell, [{kopf: b.typ, name: b.modell, art: 'Seriennummer', code: b.sn}]),
          historie: b.historie.slice().reverse().map(h => ({
            datum: h.datum, typ: h.typ, titel: h.titel, text: h.text, kosten: h.kosten,
            bg: (HIST_STIL[h.typ] || HIST_STIL.Wartung).bg,
            fg: (HIST_STIL[h.typ] || HIST_STIL.Wartung).fg
          })),
          fuss: 'Kaufdatum ' + b.datum + ' · Wartungen und Reparaturen kumuliert ' + EUR(kosten)
        };
      }),
      vbLeer: VERKAUFTE_BOOTE.filter(b => {
        const q = (st.vbSuche || '').trim().toLowerCase();
        return !q || (b.modell + ' ' + b.sn + ' ' + b.kunde + ' ' + b.beleg).toLowerCase().includes(q);
      }).length === 0,
      ...this.angebotVals(st),
      ...this.kalenderVals(st),
      ...this.dashboardVals(st),
      einstellungenView: st.view === 'einstellungen',
      feldzuordnungView: st.view === 'feldzuordnung',
      onFeldzuordnung: () => this.setState({view: 'feldzuordnung'}),
      onZurueckEinstellungen: () => this.setState({view: 'einstellungen', einstellTab: 'erp'}),
      tabDruckerAktiv: st.einstellTab === 'drucker',
      fzSystem: st.fremdErp,
      fzTabs: Object.keys(FZ).map(id => ({
        label: FZ[id].label,
        bg: id === st.fzTab ? '#101010' : '#FFFFFF',
        fg: id === st.fzTab ? '#FFFFFF' : '#101010',
        border: id === st.fzTab ? '#101010' : '#e5e7eb',
        weight: id === st.fzTab ? 600 : 500,
        onClick: () => this.setState({fzTab: id})
      })),
      fzKennzahlen: [
        {label: 'Zugeordnete Felder', value: fzAktiv + ' / ' + fzAlle, hint: FZ[st.fzTab].label + ' · aktiv', color: '#101010'},
        {label: 'Pflichtfelder offen', value: String(FZ[st.fzTab].felder.filter(f => f.pflicht && st.fzAus[st.fzTab + f.kasse]).length), hint: 'blockieren die Übernahme', color: '#b3262f'},
        {label: 'Nicht zugeordnet', value: String(FZ[st.fzTab].offen.length), hint: 'ohne Zielfeld', color: '#6b4200'}
      ],
      fzZeilen: FZ[st.fzTab].felder.map(f => {
        const key = st.fzTab + f.kasse;
        const an = !st.fzAus[key];
        return {
          kasse: f.kasse, typ: f.typ, erp: f.erp, transform: f.transform,
          richtung: st.fzRichtung[key] || f.richtung,
          pflichtLabel: f.pflicht ? 'Pflicht' : 'optional',
          pflichtBg: f.pflicht ? '#fdebc8' : '#e5e7eb',
          pflichtFg: f.pflicht ? '#545b66' : '#545b66',
          switchBg: an ? '#101010' : '#e5e7eb',
          switchPos: an ? 'flex-end' : 'flex-start',
          onToggle: () => this.setState(s => ({fzAus: Object.assign({}, s.fzAus, {[key]: !s.fzAus[key]})})),
          onRichtung: () => this.setState(s => {
            const akt = s.fzRichtung[key] || f.richtung;
            const naechste = akt === '↔' ? '→' : akt === '→' ? '←' : '↔';
            return {fzRichtung: Object.assign({}, s.fzRichtung, {[key]: naechste})};
          })
        };
      }),
      fzOffen: FZ[st.fzTab].offen,
      fzVorschau: FZ[st.fzTab].vorschau,
      fzVorschauTitel: FZ[st.fzTab].label,
      einstellTabs: (darfEinst ? [['drucker', 'Drucker'], ['scanner', 'Barcode-Scanner'], ['benutzer', 'Benutzer & Rollen'], ...(this.meineRechte()['Shop-Einstellungen bearbeiten'] || !st.angemeldet ? [['shop', 'Shop']] : []), ['dokumente', 'Dokumentvorlagen'], ['zahlung', 'Kartenzahlung'], ['tse', 'TSE & Kassensicherung'], ['erp', 'ERP-Anbindung'], ['shops', 'Webshops & API'], ['anleitung', 'Bedienungsanleitung']] : [['anleitung', 'Bedienungsanleitung']]).concat(
        (st.angemeldet && st.angemeldet.system) ? [['admin', 'Admin']] : []
      ).map(t => ({
        label: t[1],
        bg: st.einstellTab === t[0] ? '#101010' : 'transparent',
        fg: st.einstellTab === t[0] ? '#FFFFFF' : '#545b66',
        weight: st.einstellTab === t[0] ? 600 : 500,
        onClick: (e) => { const b = e && e.currentTarget; if (b && b.scrollIntoView) setTimeout(() => { try { b.scrollIntoView({inline: 'center', block: 'nearest', behavior: 'smooth'}) } catch (x) {} }, 30); this.setState(s => ({einstellTab: s.einstellTab === t[0] && darfEinst ? null : t[0]})) }
      })),
      tabDrucker: st.einstellTab === 'drucker',
      tabAdmin: st.einstellTab === 'admin' && !!(st.angemeldet && st.angemeldet.system),
      ...this.adminVals(),
      keinTab: !st.einstellTab,
      einstellKacheln: [
        ['drucker', 'Drucker', 'Bondrucker, Etiketten und A4-Ausgabe', 'M6 9V4h12v5M6 15h12v5H6zM4 11h16v4H4z'],
        ['scanner', 'Barcode-Scanner', 'USB, Bluetooth oder Kamera am Tablet', 'M4 8h16v8H4zM7 8v8M10 8v8M13 8v8M17 8v8'],
        ['benutzer', 'Benutzer & Rollen', 'Kassen, Rollen, Rechte und PINs', 'M4 20v-1.5A4.5 4.5 0 0 1 8.5 14h3A4.5 4.5 0 0 1 16 18.5V20M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM17 11.5a3 3 0 1 0 0-6'],
        ['shop', 'Shop', 'Firmendaten, Logo, Farben, Öffnungszeiten, Nummernkreise', 'M4 9l1.5-5h13L20 9M4 9h16M4 9v1.5a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0V9M5 12.5V20h14v-7.5M10 20v-4.5h4V20'],
        ['dokumente', 'Dokumentvorlagen', 'Belege, Rechnungen und Etiketten', 'M6 3h12v18H6zM9 8h6M9 12h6M9 16h4'],
        ['zahlung', 'Kartenzahlung', 'Terminal, Zahlarten und Limits', 'M3 7h18v10H3zM3 11h18M7 15h3'],
        ['tse', 'TSE & Kassensicherung', 'Signatureinheit, DSFinV-K, Aufbewahrung', 'M12 3l7 4v5c0 4.2-2.9 7.5-7 9-4.1-1.5-7-4.8-7-9V7l7-4zM9.5 12l1.8 1.8L15 10'],
        ['erp', 'ERP-Anbindung', 'Schnittstelle, Feldzuordnung, Abgleich', 'M4 7h6v6H4zM14 11h6v6h-6zM10 10h4'],
        ['shops', 'Webshops', 'Bestände und Artikel im Onlinehandel', 'M4 8h16l-1.5 11H5.5L4 8zM8 8V6a4 4 0 0 1 8 0v2'],
        ['anleitung', 'Bedienungsanleitung', 'Schritt für Schritt durch alle Funktionen, in fünf Sprachen', 'M12 6.5C10.5 5 8 4.5 4 4.5v13c4 0 6.5.5 8 2 1.5-1.5 4-2 8-2v-13c-4 0-6.5.5-8 2zM12 6.5v13']
      ].concat(
        (st.angemeldet && st.angemeldet.system) ? [['admin', 'Admin', 'Systemweite Root-Einstellungen', 'M12 3l7 4v5c0 4.2-2.9 7.5-7 9-4.1-1.5-7-4.8-7-9V7l7-4zM12 8v4l2.5 2.5']] : []
      ).map(t => ({
        label: t[1], hinweis: t[2], icon: t[3],
        onClick: () => this.setState({einstellTab: t[0]})
      })),
      tabScanner: st.einstellTab === 'scanner',
      scanStatus: st.scanQuelle === 'kamera' ? 'Kamera bereit · Freigabe erteilt' : st.scanQuelle === 'bluetooth' ? 'Bluetooth verbunden' : 'USB-Scanner verbunden',
      scanDot: '#32C995',
      scanFg: '#0d5f38',
      scanBg: '#dcf3e6',
      scanTestLabel: st.scanTest ? 'Testscan 4006381333931 erkannt ✓' : 'Testscan starten',
      onScanTest: () => {
        this.setState({scanTest: true});
        setTimeout(() => this.setState({scanTest: false}), 2200);
      },
      scanQuellen: [
        {id: 'usb', label: 'USB-Handscanner', hinweis: 'Kabelgebunden, Tastatur-Emulation', geraet: 'Zebra DS2208 · Verkaufsraum', icon: 'M4 8h16v8H4zM7 8v8M10 8v8M13 8v8M17 8v8'},
        {id: 'bluetooth', label: 'Bluetooth-Scanner', hinweis: 'Kabellos für Lager und Regatta', geraet: 'Zebra CS6080 · gekoppelt', icon: 'M7 7l10 10M7 17L17 7M12 2v20'},
        {id: 'kamera', label: 'Kamera von Telefon / Tablet', hinweis: 'Ohne Zusatzgerät, direkt im Browser', geraet: 'Rückkamera · Freigabe nötig', icon: 'M4 8h3l1.5-2h7L17 8h3v11H4V8zM12 16.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z'}
      ].map(q => {
        const aktiv = q.id === st.scanQuelle;
        return {
          label: q.label, hinweis: q.hinweis, geraet: q.geraet, icon: q.icon,
          border: aktiv ? '#101010' : '#e5e7eb',
          bg: aktiv ? '#e5e7eb' : '#FFFFFF',
          iconBg: aktiv ? '#101010' : '#e5e7eb',
          iconFg: aktiv ? '#FFFFFF' : '#1f2329',
          haken: aktiv ? '✓' : '',
          onClick: () => this.setState({scanQuelle: q.id})
        };
      }),
      scanFelder: [
        {label: 'Aktive Quelle', wert: st.scanQuelle === 'kamera' ? 'Kamera (Browser)' : st.scanQuelle === 'bluetooth' ? 'Bluetooth HID' : 'USB HID'},
        {label: 'Gerät', wert: st.scanQuelle === 'kamera' ? 'Rückkamera · 1080p' : st.scanQuelle === 'bluetooth' ? 'Zebra CS6080' : 'Zebra DS2208'},
        {label: 'Zeichenabschluss', wert: 'Enter (CR)'},
        {label: 'Präfix / Suffix', wert: 'kein Präfix · CR'},
        {label: 'Ziel', wert: 'Artikelsuche der Kasse'},
        {label: 'Timeout', wert: '80 ms zwischen Zeichen'}
      ],
      scanOptionen: [
        {id: 'auto', label: 'Artikel direkt in den Warenkorb', hinweis: 'Ohne Rückfrage buchen, wenn eindeutig'},
        {id: 'ton', label: 'Signalton bei Erfolg', hinweis: 'Kurzer Piep, Vibration auf dem Tablet'},
        {id: 'unbekannt', label: 'Unbekannte Codes melden', hinweis: 'Hinweis mit Option „Artikel anlegen"'},
        {id: 'variante', label: 'Varianten-Codes auflösen', hinweis: 'Farbe und Größe aus dem EAN ableiten'},
        {id: 'inventur', label: 'Scannen in der Inventur', hinweis: 'Zählmengen per Scan erfassen'}
      ].map(o => {
        const an = !st.scanAus[o.id];
        return {
          label: o.label, hinweis: o.hinweis,
          switchBg: an ? '#101010' : '#e5e7eb',
          switchPos: an ? 'flex-end' : 'flex-start',
          onToggle: () => this.setState(s => ({scanAus: Object.assign({}, s.scanAus, {[o.id]: !s.scanAus[o.id]})}))
        };
      }),
      scanCodes: ['EAN-13', 'EAN-8', 'Code 128', 'Code 39', 'QR-Code', 'Data Matrix'],
      scanProtokoll: [
        {code: '4006381333931', artikel: 'Brača IV 750 · 213 cm'},
        {code: '4012345678901', artikel: 'Jantex Gamma 840 · Rot · M'},
        {code: '4260099220017', artikel: 'Jantex Alpha 820 · L'},
        {code: '4008123450019', artikel: 'Jantex Alpha 800 · Gelb'}
      ],
      tabBenutzer: st.einstellTab === 'benutzer',
      pinLaenge: st.pinLaenge || 4,
      onPinLaenge: (e) => this.setState({pinLaenge: Math.max(4, Math.min(10, parseInt(e.target.value, 10) || 4))}),
      schichtTage: WOCHENTAGE,
      schichtRaster: '1.6fr repeat(7, 1fr)',
      schichtLegende: (st.schichtArten || SCHICHT_ARTEN).filter(a => a.id !== 'frei').map(a => ({kurz: a.kurz, zeit: a.zeit, bg: a.bg, fg: a.fg})),
      schichtArtFormOffen: !!st.saOffen,
      onSchichtArtForm: () => this.setState(s0 => ({saOffen: !s0.saOffen, saHinweis: ''})),
      saName: st.saName || '', saVon: st.saVon || '10:00', saBis: st.saBis || '16:00', saPause: st.saPause == null ? 30 : st.saPause, saHinweis: st.saHinweis || '',
      onSaName: (e) => this.setState({saName: e.target.value}),
      onSaVon: (e) => this.setState({saVon: e.target.value}),
      onSaBis: (e) => this.setState({saBis: e.target.value}),
      onSaPause: (e) => this.setState({saPause: Math.max(0, parseInt(e.target.value, 10) || 0)}),
      onSaAnlegen: () => {
        const arten = st.schichtArten || SCHICHT_ARTEN;
        const n = (st.saName || '').trim(), von = st.saVon || '10:00', bis = st.saBis || '16:00', pause = st.saPause == null ? 30 : st.saPause;
        if (!n) return this.setState({saHinweis: 'Bitte eine Bezeichnung eintragen.'});
        if (arten.some(a => a.kurz.toLowerCase() === n.toLowerCase())) return this.setState({saHinweis: 'Diese Schichtart gibt es bereits.'});
        const min = this.schichtMinuten(von, bis) - pause;
        if (min <= 0) return this.setState({saHinweis: 'Ende muss nach Beginn liegen (abzüglich Pause).'});
        const farben = [['#dcf3e6', '#0d5f38'], ['#fdebc8', '#6b4200'], ['#e5e7eb', '#1f2329'], ['#D9DCDA', '#172025']];
        const fc = farben[arten.length % farben.length];
        this.setState({schichtArten: arten.concat([{id: 'eigen' + Date.now(), kurz: n, zeit: von + ' – ' + bis, bg: fc[0], fg: fc[1], stunden: Math.round(min / 6) / 10}]), saOffen: false, saName: '', saHinweis: ''});
      },
      schichtIndVon: st.schichtIndVon || '09:00', schichtIndBis: st.schichtIndBis || '15:00', schichtIndHinweis: st.schichtIndHinweis || '',
      onSchichtIndVon: (e) => this.setState({schichtIndVon: e.target.value, schichtIndHinweis: ''}),
      onSchichtIndBis: (e) => this.setState({schichtIndBis: e.target.value, schichtIndHinweis: ''}),
      onSchichtPopZu: () => this.setState({schichtPop: null, schichtIndHinweis: ''}),
      schichtZeilen: st.benutzer.filter(b => !b.system).map(b => {
        const plan = (st.schichtPlan || SCHICHT_START)[b.id] || ['frei', 'frei', 'frei', 'frei', 'frei', 'frei', 'frei'];
        const arten = st.schichtArten || SCHICHT_ARTEN;
        const stunden = Math.round(plan.reduce((a, code) => a + this.schichtArt(code, arten).stunden, 0) * 10) / 10;
        const setze = (i, code) => this.setState(s2 => {
          const alle = Object.assign({}, s2.schichtPlan || SCHICHT_START);
          const reihe = (alle[b.id] || plan).slice();
          reihe[i] = code; alle[b.id] = reihe;
          return {schichtPlan: alle, schichtPop: null, schichtIndHinweis: ''};
        });
        return {
          name: b.name, kuerzel: b.kuerzel, rolle: b.rolle,
          stundenText: String(stunden).replace('.', ',') + ' h geplant',
          tage: plan.map((code, i) => {
            const art = this.schichtArt(code, arten);
            const offen = !!st.schichtPop && st.schichtPop.uid === b.id && st.schichtPop.tag === i;
            return {
              kurz: art.kurz, zeit: art.zeit, bg: art.bg, fg: art.fg, border: offen ? '#101010' : (art.ind ? '#EF3D2F' : '#e5e7eb'),
              offen, tagLabel: b.name.split(' ')[0] + ' · ' + WOCHENTAGE[i],
              onClick: () => this.setState(s0 => {
                const zu = s0.schichtPop && s0.schichtPop.uid === b.id && s0.schichtPop.tag === i;
                const p = art.ind ? code.split('|') : null;
                return {schichtPop: zu ? null : {uid: b.id, tag: i}, schichtIndHinweis: '', schichtIndVon: p ? p[1] : (s0.schichtIndVon || '09:00'), schichtIndBis: p ? p[2] : (s0.schichtIndBis || '15:00')};
              }),
              optionen: arten.map(a => ({kurz: a.kurz, zeit: a.zeit, dot: a.bg, bg: a.id === code ? '#f4f4f4' : 'transparent', onClick: () => setze(i, a.id)})),
              onIndividuell: () => {
                const von = this.state.schichtIndVon || '09:00', bis = this.state.schichtIndBis || '15:00';
                if (this.schichtMinuten(von, bis) <= 0) return this.setState({schichtIndHinweis: 'Ende muss nach Beginn liegen.'});
                setze(i, 'ind|' + von + '|' + bis);
              }
            };
          })
        };
      }),
      zeitZeilen: st.benutzer.filter(b => !b.system).map(b => {
        const z = (st.zeiten || ZEIT_START)[b.id] || {status: 'aus', seit: '', heute: 0, woche: 0, soll: 0};
        const hm = (m) => Math.floor(m / 60) + ' h ' + String(m % 60).padStart(2, '0') + ' min';
        const saldo = z.woche - z.soll;
        return {
          name: b.name, kuerzel: b.kuerzel, rolle: b.rolle,
          status: z.status === 'an' ? 'Eingestempelt seit ' + z.seit : 'Ausgestempelt',
          statusBg: z.status === 'an' ? '#dcf3e6' : '#e5e7eb',
          statusFg: z.status === 'an' ? '#0d5f38' : '#545b66',
          heute: hm(z.heute), woche: hm(z.woche), soll: hm(z.soll),
          saldo: (saldo >= 0 ? '+ ' : '− ') + hm(Math.abs(saldo)),
          saldoFarbe: saldo >= 0 ? '#0d5f38' : '#6b4200',
          knopfLabel: z.status === 'an' ? 'Gehen' : 'Kommen',
          knopfBg: z.status === 'an' ? '#FFFFFF' : '#101010',
          knopfFg: z.status === 'an' ? '#101010' : '#FFFFFF',
          knopfBorder: z.status === 'an' ? '#101010' : '#101010',
          onStempeln: () => this.setState(s2 => {
            const alle = Object.assign({}, s2.zeiten || ZEIT_START);
            const akt = Object.assign({}, alle[b.id] || {status: 'aus', seit: '', heute: 0, woche: 0, soll: 0});
            if (akt.status === 'an') {
              akt.status = 'aus';
              akt.heute = akt.heute + 15;
              akt.woche = akt.woche + 15;
              akt.seit = '';
            } else {
              akt.status = 'an';
              akt.seit = '14:45';
            }
            alle[b.id] = akt;
            return {zeiten: alle};
          })
        };
      }),
      bestaetigungOffen: !!st.bestaetigung,
      bestaetigung: st.bestaetigung || {titel: '', text: '', okLabel: '', okBg: '#101010', iconBg: '#e5e7eb', iconFg: '#1f2329', icon: ''},
      onBestaetigungAbbrechen: () => this.setState({bestaetigung: null}),
      onBestaetigungOk: () => {
        const a = st.bestaetigung && st.bestaetigung.aktion;
        this.setState({bestaetigung: null});
        if (a) a();
      },
      kasseFormOffen: st.kasseFormOffen,
      kasseFormId: st.kasseFormId,
      kasseFormOrt: st.kasseFormOrt,
      kasseFormDrucker: st.kasseFormDrucker,
      kasseFormHinweis: st.kasseFormHinweis,
      onNeueKasse: () => this.setState({kasseFormOffen: true, kasseFormHinweis: ''}),
      onKasseFormId: (e) => this.setState({kasseFormId: e.target.value}),
      onKasseFormOrt: (e) => this.setState({kasseFormOrt: e.target.value}),
      onKasseFormDrucker: (e) => this.setState({kasseFormDrucker: e.target.value}),
      onKasseAbbrechen: () => this.setState({kasseFormOffen: false, kasseFormId: '', kasseFormOrt: '', kasseFormDrucker: '', kasseFormHinweis: ''}),
      onKasseSpeichern: () => {
        const id = st.kasseFormId.trim();
        if (!id) return this.setState({kasseFormHinweis: 'Bitte eine Kassen-ID eintragen.'});
        if (st.kassen.some(k => k.id.toLowerCase() === id.toLowerCase())) return this.setState({kasseFormHinweis: 'Diese Kassen-ID gibt es bereits.'});
        this.frage('Kasse anlegen?', id + ' wird als neues Terminal gespeichert und steht zur Rollenvergabe bereit.', () => this.setState(s => ({
          kassen: s.kassen.concat([{
            id: id,
            ort: s.kasseFormOrt.trim() || 'Standort offen',
            drucker: s.kasseFormDrucker.trim() || 'Kein Drucker zugewiesen'
          }]),
          kasseFormOffen: false, kasseFormId: '', kasseFormOrt: '', kasseFormDrucker: '', kasseFormHinweis: ''
        })));
      },
      kassenListe: st.kassen.map(k => {
        const aktiv = !st.kassenAus[k.id];
        const nutzer = st.benutzer.filter(b => b.kassen.indexOf(k.id) > -1).length;
        const bearbeiten = st.kasseEditId === k.id;
        return {
          bearbeiten, ruhend: !bearbeiten,
          entwurfName: bearbeiten ? (st.kasseEditName != null ? st.kasseEditName : k.id) : k.id,
          entwurfOrt: bearbeiten ? (st.kasseEditOrt != null ? st.kasseEditOrt : k.ort) : k.ort,
          onUmbenennen: () => this.setState({kasseEditId: k.id, kasseEditName: k.id, kasseEditOrt: k.ort, kasseEditHinweis: ''}),
          onEditName: (e) => this.setState({kasseEditName: e.target.value}),
          onEditOrt: (e) => this.setState({kasseEditOrt: e.target.value}),
          onEditAbbrechen: () => this.setState({kasseEditId: null, kasseEditName: null, kasseEditOrt: null, kasseEditHinweis: ''}),
          onEditSpeichern: () => {
            const neu = (st.kasseEditName || '').trim();
            const ort = (st.kasseEditOrt || '').trim() || k.ort;
            if (!neu) return this.setState({kasseEditHinweis: 'Name darf nicht leer sein.'});
            if (neu !== k.id && st.kassen.some(x => x.id.toLowerCase() === neu.toLowerCase()))
              return this.setState({kasseEditHinweis: 'Diesen Kassennamen gibt es bereits.'});
            TX.forEach(t => { if (t.kasse === k.id) t.kasse = neu; });
            this.setState(s2 => {
              const aus = Object.assign({}, s2.kassenAus);
              if (k.id in aus) { aus[neu] = aus[k.id]; delete aus[k.id]; }
              const carts = Object.assign({}, s2.carts);
              if (k.id in carts) { carts[neu] = carts[k.id]; delete carts[k.id]; }
              return {
                kassen: s2.kassen.map(x => x.id === k.id ? Object.assign({}, x, {id: neu, ort: ort}) : x),
                kassenAus: aus, carts: carts,
                benutzer: s2.benutzer.map(b => Object.assign({}, b, {kassen: b.kassen.map(y => y === k.id ? neu : y)})),
                formKassen: (s2.formKassen || []).map(y => y === k.id ? neu : y),
                aktiveKasseId: s2.aktiveKasseId === k.id ? neu : s2.aktiveKasseId,
                berichtKasse: s2.berichtKasse === k.id ? neu : s2.berichtKasse,
                kasseEditId: null, kasseEditName: null, kasseEditOrt: null, kasseEditHinweis: ''
              };
            });
          },
          editHinweis: st.kasseEditHinweis || '',
          hatEditHinweis: bearbeiten && !!st.kasseEditHinweis,
          id: k.id, ort: k.ort, drucker: k.drucker,
          nutzer: nutzer + (nutzer === 1 ? ' Benutzer zugewiesen' : ' Benutzer zugewiesen'),
          status: aktiv ? 'Aktiv' : 'Deaktiviert',
          statusBg: aktiv ? '#dcf3e6' : '#fde0e2',
          statusFg: aktiv ? '#0d5f38' : '#9b1520',
          switchBg: aktiv ? '#101010' : '#e5e7eb',
          switchPos: aktiv ? 'flex-end' : 'flex-start',
          onAktiv: () => this.setState(s => ({kassenAus: Object.assign({}, s.kassenAus, {[k.id]: !s.kassenAus[k.id]})})),
          onLoeschen: () => this.frage('Kasse entfernen?', k.id + ' wird gelöscht und bei allen Benutzern abgezogen.', () => this.setState(s => ({
            kassen: s.kassen.filter(x => x.id !== k.id),
            benutzer: s.benutzer.map(b => Object.assign({}, b, {kassen: b.kassen.filter(y => y !== k.id)})),
            formKassen: s.formKassen.filter(y => y !== k.id)
          })), 'loeschen')
        };
      }),
      formOffen: st.formOffen,
      formVorname: st.formVorname,
      formNachname: st.formNachname,
      formKuerzel: st.formKuerzel,
      formPin: st.formPin,
      formHinweis: st.formHinweis,
      onNeuerBenutzer: () => this.setState({
        formOffen: true, editId: null, formHinweis: '',
        formVorname: '', formNachname: '', formKuerzel: '', formPin: '', formRolle: 'Verkauf',
        formKassen: st.kassen.length ? [st.kassen[0].id] : []
      }),
      formTitel: st.editId ? 'Benutzer bearbeiten' : 'Neuen Benutzer anlegen',
      formSpeichernLabel: st.editId ? 'Änderungen speichern' : 'Benutzer speichern',
      formPinPlatz: st.editId ? 'leer lassen = PIN behalten' : ((st.pinLaenge || 4) + '-stellig'),
      pinPlatzhalter: (st.pinLaenge || 4) + '-stellig',
      onFormVorname: (e) => this.setState(s2 => {
        const v = e.target.value;
        const auto = ((v.trim()[0] || '') + (s2.formNachname.trim()[0] || '')).toUpperCase();
        return {formVorname: v, formKuerzel: s2.kuerzelManuell ? s2.formKuerzel : auto};
      }),
      onFormNachname: (e) => this.setState(s2 => {
        const v = e.target.value;
        const auto = ((s2.formVorname.trim()[0] || '') + (v.trim()[0] || '')).toUpperCase();
        return {formNachname: v, formKuerzel: s2.kuerzelManuell ? s2.formKuerzel : auto};
      }),
      onFormKuerzel: (e) => this.setState({formKuerzel: e.target.value.toUpperCase().slice(0, 3), kuerzelManuell: true}),
      onFormPin: (e) => this.setState({formPin: e.target.value.replace(/\D/g, '').slice(0, st.pinLaenge || 4)}),
      formEmail: st.formEmail || '',
      onFormEmail: (e) => this.setState({formEmail: e.target.value}),
      formRollen: st.rollen.map(r => ({
        label: r,
        bg: r === st.formRolle ? '#101010' : '#FFFFFF',
        fg: r === st.formRolle ? '#FFFFFF' : '#101010',
        border: r === st.formRolle ? '#101010' : '#e5e7eb',
        weight: r === st.formRolle ? 600 : 500,
        onClick: () => this.setState({formRolle: r})
      })),
      formKassen: st.kassen.map(o => o.id).map(k => {
        const an = st.formKassen.indexOf(k) > -1;
        return {
          label: k,
          bg: an ? '#101010' : '#FFFFFF',
          fg: an ? '#FFFFFF' : '#101010',
          border: an ? '#101010' : '#e5e7eb',
          weight: an ? 600 : 500,
          onClick: () => this.setState(s => ({
            formKassen: an ? s.formKassen.filter(x => x !== k) : s.formKassen.concat([k])
          }))
        };
      }),
      onFormAbbrechen: () => this.setState({formOffen: false, editId: null, formVorname: '', formNachname: '', formKuerzel: '', formPin: '', formEmail: '', formHinweis: '', kuerzelManuell: false}),
      onFormSpeichern: () => {
        const vorname = st.formVorname.trim();
        const nachname = st.formNachname.trim();
        if (!vorname || !nachname) return this.setState({formHinweis: 'Bitte Vor- und Nachname eintragen.'});
        const name = vorname + ' ' + nachname;
        const pinLen = st.pinLaenge || 4;
        if (!st.editId && st.formPin.length !== pinLen) return this.setState({formHinweis: 'PIN muss ' + pinLen + '-stellig sein.'});
        if (st.editId && st.formPin && st.formPin.length !== pinLen) return this.setState({formHinweis: 'PIN muss ' + pinLen + '-stellig sein.'});
        if (st.editId) {
          const alt = st.benutzer.find(x => x.id === st.editId);
          return this.frage('Änderungen speichern?', name + ' wird als ' + st.formRolle + ' für ' + st.formKassen.length + ' Kasse(n) gespeichert.', () => this.setState(s => ({
            benutzer: s.benutzer.map(x => x.id !== s.editId ? x : Object.assign({}, x, {
              name: name,
              kuerzel: s.formKuerzel || x.kuerzel,
              rolle: s.formRolle,
              email: s.formEmail.trim(),
              kassen: s.formKassen.slice()
            })),
            formOffen: false, editId: null, formVorname: '', formNachname: '', formKuerzel: '', formPin: '', formEmail: '', formHinweis: '', kuerzelManuell: false
          })));
        }
        if (!st.formKassen.length) return this.setState({formHinweis: 'Mindestens eine Kasse zuweisen.'});
        const kuerzel = st.formKuerzel || name.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
        this.frage('Benutzer anlegen?', name + ' wird als ' + st.formRolle + ' für ' + st.formKassen.length + ' Kasse(n) gespeichert.', () => this.setState(s => ({
          benutzer: s.benutzer.concat([{
            id: 'u' + Date.now(),
            name: name, kuerzel: kuerzel, rolle: s.formRolle, pin: '••••', email: s.formEmail.trim(),
            kassen: s.formKassen.slice(), zuletzt: 'Noch nicht angemeldet'
          }]),
          formOffen: false, formVorname: '', formNachname: '', formKuerzel: '', formPin: '', formEmail: '', formHinweis: '', kuerzelManuell: false
        })));
      },
      benutzerListe: st.benutzer.map(b => {
        const aktiv = !st.benutzerAus[b.id];
        const stil = ROLLE_STIL[b.rolle] || ROLLE_STIL_FREI[Math.abs(b.rolle.length) % ROLLE_STIL_FREI.length];
        return {
          name: b.name, kuerzel: b.kuerzel, rolle: b.rolle, pin: b.pin, email: b.email || '', zuletzt: b.zuletzt,
          avatarBg: stil.bg, avatarFg: stil.fg,
          rolleBg: stil.bg, rolleFg: stil.fg, rolleBorder: stil.bg,
          status: aktiv ? 'Aktiv' : 'Gesperrt',
          statusBg: aktiv ? '#dcf3e6' : '#fde0e2',
          statusFg: aktiv ? '#0d5f38' : '#9b1520',
          switchBg: aktiv ? '#101010' : '#e5e7eb',
          switchPos: aktiv ? 'flex-end' : 'flex-start',
          kassen: st.kassen.map(o => o.id).map(k => {
            const an = b.kassen.indexOf(k) > -1;
            return {
              label: k.replace('KASSE-', 'K'),
              bg: an ? '#101010' : '#FFFFFF',
              fg: an ? '#FFFFFF' : '#646b76',
              border: an ? '#101010' : '#e5e7eb',
              onClick: () => this.setState(s => ({
                benutzer: s.benutzer.map(x => x.id !== b.id ? x : Object.assign({}, x, {
                  kassen: an ? x.kassen.filter(y => y !== k) : x.kassen.concat([k])
                }))
              }))
            };
          }),
          rolleMenuOffen: st.rolleMenuId === b.id,
          rollePfeil: st.rolleMenuId === b.id ? '180deg' : '0deg',
          onRolleMenu: () => this.setState(s => ({rolleMenuId: s.rolleMenuId === b.id ? null : b.id})),
          onRolleMenuClose: () => this.setState({rolleMenuId: null}),
          rollenOptionen: st.rollen.map(r => {
            const rs = ROLLE_STIL[r] || ROLLE_STIL_FREI[Math.abs(r.length) % ROLLE_STIL_FREI.length];
            const gewaehlt = r === b.rolle;
            return {
              label: r,
              dot: rs.fg,
              bg: gewaehlt ? '#e5e7eb' : 'transparent',
              weight: gewaehlt ? 600 : 500,
              haken: gewaehlt ? '✓' : '',
              onClick: () => this.setState(s => ({
                rolleMenuId: null,
                benutzer: s.benutzer.map(x => x.id !== b.id ? x : Object.assign({}, x, {rolle: r}))
              }))
            };
          }),
          onRolle: () => this.setState(s => ({
            benutzer: s.benutzer.map(x => x.id !== b.id ? x : Object.assign({}, x, {
              rolle: s.rollen[(s.rollen.indexOf(x.rolle) + 1) % s.rollen.length]
            }))
          })),
          system: !!b.system,
          onBearbeiten: () => this.setState({
            formOffen: true, editId: b.id, formHinweis: '',
            formVorname: b.name.split(' ')[0] || '', formNachname: b.name.split(' ').slice(1).join(' '),
            formKuerzel: b.kuerzel, formPin: '', formEmail: b.email || '', kuerzelManuell: true,
            formRolle: b.rolle, formKassen: b.kassen.slice()
          }),
          pinMenuOffen: st.pinMenuId === b.id,
          pinWert: st.pinMenuId === b.id ? (st.pinMenuWert || '') : '',
          pinBestWert: st.pinMenuId === b.id ? (st.pinMenuBestWert || '') : '',
          pinMenuHinweis: st.pinMenuId === b.id && !!st.pinMenuHinweis,
          pinMenuHinweisText: st.pinMenuHinweis || '',
          onPinMenu: () => this.setState(s => ({pinMenuId: s.pinMenuId === b.id ? null : b.id, pinMenuWert: '', pinMenuBestWert: '', pinMenuHinweis: '', rolleMenuId: null})),
          onPinMenuClose: () => this.setState({pinMenuId: null, pinMenuWert: '', pinMenuBestWert: '', pinMenuHinweis: ''}),
          onPinWert: (e) => this.setState({pinMenuWert: e.target.value.replace(/\D/g, '').slice(0, st.pinLaenge || 4)}),
          onPinBestWert: (e) => this.setState({pinMenuBestWert: e.target.value.replace(/\D/g, '').slice(0, st.pinLaenge || 4)}),
          onPinSpeichern: () => {
            if ((st.pinMenuWert || '').length !== (st.pinLaenge || 4)) return this.setState({pinMenuHinweis: 'PIN muss ' + (st.pinLaenge || 4) + '-stellig sein.'});
            if (st.pinMenuWert !== st.pinMenuBestWert) return this.setState({pinMenuHinweis: 'PINs stimmen nicht überein.'});
            this.setState(s => ({
              benutzer: s.benutzer.map(x => x.id !== b.id ? x : Object.assign({}, x, {pin: '••••'})),
              pinMenuId: null, pinMenuWert: '', pinMenuBestWert: '', pinMenuHinweis: ''
            }));
          },
          onAktiv: () => this.setState(s => ({benutzerAus: Object.assign({}, s.benutzerAus, {[b.id]: !s.benutzerAus[b.id]})})),
          onLoeschen: () => b.system
            ? this.frage('Systemkonto geschützt', 'Das Konto „root" kann nicht entfernt werden — es sichert den Vollzugriff auf alle Kassen und Einstellungen.', () => {})
            : this.frage('Benutzer entfernen?', b.name + ' verliert den Zugang zu allen zugewiesenen Kassen.', () => this.setState(s => ({benutzer: s.benutzer.filter(x => x.id !== b.id)})), 'loeschen')
        };
      }),
      rechteRaster: '2fr repeat(' + st.rollen.length + ', 1fr)',
      rollenSpalten: st.rollen.map(r => ({
        label: r,
        loeschbar: r !== 'Admin',
        onLoeschen: () => this.frage('Rolle entfernen?', 'Benutzer mit der Rolle „' + r + '" werden auf „Verkauf" gesetzt.', () => this.setState(s => ({
          rollen: s.rollen.filter(x => x !== r),
          benutzer: s.benutzer.map(b => b.rolle === r ? Object.assign({}, b, {rolle: 'Verkauf'}) : b),
          formRolle: s.formRolle === r ? 'Verkauf' : s.formRolle
        })), 'loeschen')
      })),
      rolleFormOffen: st.rolleFormOffen,
      rolleFormName: st.rolleFormName,
      rolleFormHinweis: st.rolleFormHinweis,
      onNeueRolle: () => this.setState({rolleFormOffen: true, rolleFormHinweis: ''}),
      onRolleFormName: (e) => this.setState({rolleFormName: e.target.value}),
      onRolleAbbrechen: () => this.setState({rolleFormOffen: false, rolleFormName: '', rolleFormHinweis: ''}),
      onRolleSpeichern: () => {
        const n = st.rolleFormName.trim();
        if (!n) return this.setState({rolleFormHinweis: 'Bitte einen Rollennamen eintragen.'});
        if (st.rollen.some(r => r.toLowerCase() === n.toLowerCase())) return this.setState({rolleFormHinweis: 'Diese Rolle gibt es bereits.'});
        this.frage('Rolle anlegen?', 'Die Rolle „' + n + '" startet ohne Rechte — Rechte anschließend in der Matrix vergeben.', () => this.setState(s => ({
          rollen: s.rollen.concat([n]),
          rechte: s.rechte.map(z => Object.assign({}, z, {erlaubt: Object.assign({}, z.erlaubt, {[n]: false})})),
          rolleFormOffen: false, rolleFormName: '', rolleFormHinweis: ''
        })));
      },
      rechteMatrix: st.rechte.map((z, i) => ({
        recht: z.recht,
        bg: i % 2 ? '#FFFFFF' : '#FFFFFF',
        werte: st.rollen.map(r => {
          const an = !!z.erlaubt[r];
          const gesperrt = r === 'Admin';
          return {
            zeichen: an ? '✓' : '–',
            color: an ? '#0d5f38' : '#e5e7eb',
            bg: an ? '#dcf3e6' : '#f4f4f4',
            border: an ? '#CBE7DA' : '#e5e7eb',
            cursor: gesperrt ? 'not-allowed' : 'pointer',
            titel: gesperrt ? 'Admin hat immer alle Rechte' : (an ? 'Recht entziehen' : 'Recht erteilen'),
            onClick: () => {
              if (gesperrt) return;
              this.setState(s => ({
                rechte: s.rechte.map(x => x.recht !== z.recht ? x : Object.assign({}, x, {
                  erlaubt: Object.assign({}, x.erlaubt, {[r]: !x.erlaubt[r]})
                }))
              }));
            }
          };
        })
      })),
      tabDokumente: st.einstellTab === 'dokumente',
      tabShop: st.einstellTab === 'shop',
      tabAnleitung: st.einstellTab === 'anleitung',
      ...this.anleitungVals(st, sprache),
      ...this.shopVals(st),
      dokOffen: !!st.dokVorschau,
      dokTitel: ({beleg: 'Kassenbeleg', rechnung: 'Rechnung', tagesabschluss: 'Tagesabschluss', artikelliste: 'Artikelliste', bestandsliste: 'Bestands- & Inventurliste', dsfinvk: 'DSFinV-K Protokoll'})[st.dokVorschau] || '',
      dokUrl: st.dokVorschau ? 'dokumentvorlage.html' + dq() + '#' + st.dokVorschau : '',
      onDokZu: () => this.setState({dokVorschau: null}),
      onDokTab: () => window.open('dokumentvorlage.html' + dq() + '#' + st.dokVorschau, '_blank'),
      onDokDrucken: () => {
        const f = document.querySelector('iframe[title="Dokumentvorschau"]');
        if (!f || !f.contentWindow) return;
        try {
          const t = f.contentDocument.title;
          if (t) f.contentDocument.title = t.split(' ').pop();
        } catch (e) {}
        f.contentWindow.focus();
        f.contentWindow.print();
      },
      vorlagen: [
        {id: 'beleg', label: 'Kassenbeleg', hinweis: 'Bondruck 80 mm & PDF', ziel: 'Bondrucker', icon: 'M6 9V4h12v5M6 15h12v5H6zM4 11h16v4H4z'},
        {id: 'rechnung', label: 'Rechnung', hinweis: 'A4, Rechnungskunden', ziel: 'Rechnungsdrucker', icon: 'M8 3h8l4 4v14H4V3h4zM8 11h8M8 15h5'},
        {id: 'tagesabschluss', label: 'Tagesabschluss', hinweis: 'Kassenbericht & Z-Bon', ziel: 'PDF', icon: 'M4 20h16M7 16V9M12 16V5M17 16v-4'},
        {id: 'artikelliste', label: 'Artikelliste', hinweis: 'Stammdaten-Export', ziel: 'PDF / CSV', icon: 'M4 7l8-4 8 4-8 4-8-4zm0 0v10l8 4 8-4V7M12 11v10'},
        {id: 'bestandsliste', label: 'Bestands- & Inventurliste', hinweis: 'Zählprotokoll', ziel: 'PDF', icon: 'M4 8h16v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zM3 4h18v4H3zM10 12h4'},
        {id: 'dsfinvk', label: 'DSFinV-K Protokoll', hinweis: 'Betriebsprüfung', ziel: 'PDF / CSV', icon: 'M12 3l7.5 3v5.4c0 4.4-3 8.2-7.5 9.6-4.5-1.4-7.5-5.2-7.5-9.6V6L12 3z'}
      ].map(v => ({
        label: v.label, hinweis: v.hinweis, ziel: v.ziel, icon: v.icon,
        zielBg: v.ziel === 'PDF' ? '#e5e7eb' : v.ziel.indexOf('CSV') > -1 ? '#e5e7eb' : '#dcf3e6',
        zielFg: v.ziel === 'PDF' ? '#1f2329' : v.ziel.indexOf('CSV') > -1 ? '#1f2329' : '#0d5f38',
        onOpen: oeffneDok(v.id)
      })),
      vorlageFelder: [
        {label: 'Papierformat', wert: 'A4 · Hochformat'},
        {label: 'Seitenrand', wert: '18 mm'},
        {label: 'Logo', wert: SHOP_LADEN().logo ? 'Eigenes Logo · Kopfzeile links' : 'zykol-logo.png · Kopfzeile links'},
        {label: 'Akzentfarbe', wert: SHOP_LADEN().daten.akzent},
        {label: 'Schriften', wert: 'Poppins · Inter'},
        {label: 'Absenderzeile', wert: [SHOP_LADEN().daten.firma, SHOP_LADEN().daten.strasse, SHOP_LADEN().daten.ort].filter(Boolean).join(' · ')},
        {label: 'Bankverbindung', wert: [SHOP_LADEN().daten.bankname, SHOP_LADEN().daten.iban].filter(Boolean).join(' · ')}
      ],
      vorlageOptionen: [
        {id: 'logo', label: 'Logo in der Kopfzeile', hinweis: 'Auf jeder gedruckten Seite'},
        {id: 'seitenzahl', label: 'Seitenzahl in der Fußzeile', hinweis: '„Seite 2 von 3"'},
        {id: 'bank', label: 'Bankverbindung im Fuß', hinweis: 'Pflicht auf Rechnungen'},
        {id: 'qr', label: 'TSE-QR-Code auf Belegen', hinweis: 'Prüfwert nach DSFinV-K'},
        {id: 'hinweise', label: 'Rechtliche Hinweise', hinweis: 'Zahlungsziel, Eigentumsvorbehalt, Rückgabe'}
      ].map(o => {
        const an = !st.vorlageAus[o.id];
        return {
          label: o.label, hinweis: o.hinweis,
          switchBg: an ? '#101010' : '#e5e7eb',
          switchPos: an ? 'flex-end' : 'flex-start',
          onToggle: () => this.setState(s => ({vorlageAus: Object.assign({}, s.vorlageAus, {[o.id]: !s.vorlageAus[o.id]})}))
        };
      }),
      tabZahlung: st.einstellTab === 'zahlung',
      psStatus: st.psAn ? 'Terminal verbunden · bereit' : 'Terminal getrennt',
      psDot: st.psAn ? '#32C995' : '#b3262f',
      psFg: st.psAn ? '#0d5f38' : '#9b1520',
      psBg: st.psAn ? '#dcf3e6' : '#fde0e2',
      psTestLabel: st.psTest ? 'Testbuchung 1,00 € erfolgreich ✓' : 'Testbuchung senden',
      onPsTest: () => {
        this.setState({psTest: true});
        setTimeout(() => this.setState({psTest: false}), 2200);
      },
      psAnbieter: ['Commerzbank (BNP Payments)', 'Deutsche Bank', 'Sparkasse (S-Payment)', 'SumUp', 'Nexi / Concardis'].map(p => ({
        label: p,
        bg: p === st.psProvider ? '#101010' : '#FFFFFF',
        fg: p === st.psProvider ? '#FFFFFF' : '#101010',
        border: p === st.psProvider ? '#101010' : '#e5e7eb',
        weight: p === st.psProvider ? 600 : 500,
        onClick: () => this.setState({psProvider: p})
      })),
      psFelder: [
        {label: 'Zahlungsdienstleister', wert: st.psProvider},
        {label: 'Händler-Nr. (VU-Nummer)', wert: '4711 8829 0042'},
        {label: 'Terminal-ID', wert: 'CB-TID-52209841'},
        {label: 'Terminal-Modell', wert: 'Ingenico Move/5000 · Terminal 1'},
        {label: 'Verbindung', wert: 'LAN 192.168.1.55 · TLS 1.3'},
        {label: 'Abrechnungskonto', wert: 'DE12 2004 0000 0123 4567 89 · Commerzbank Syke'},
        {label: 'Girocard-Verfahren', wert: 'girocard (electronic cash) + Kontaktlos'},
        {label: 'Auszahlung', wert: 'täglich, Valuta T+1'}
      ],
      kartenarten: [
        {id: 'giro', label: 'girocard / EC', gebuehr: '0,20 % + 0,04 € je Transaktion'},
        {id: 'maestro', label: 'Maestro / V-Pay', gebuehr: '0,25 % je Transaktion'},
        {id: 'visa', label: 'Visa', gebuehr: '0,89 % je Transaktion'},
        {id: 'mc', label: 'Mastercard', gebuehr: '0,89 % je Transaktion'},
        {id: 'amex', label: 'American Express', gebuehr: '1,95 % je Transaktion'},
        {id: 'wallet', label: 'Apple Pay / Google Pay', gebuehr: 'wie zugrunde liegende Karte'}
      ].map(k => {
        const an = !st.kartenAus[k.id];
        return {
          label: k.label, gebuehr: k.gebuehr,
          switchBg: an ? '#101010' : '#e5e7eb',
          switchPos: an ? 'flex-end' : 'flex-start',
          onToggle: () => this.setState(s => ({kartenAus: Object.assign({}, s.kartenAus, {[k.id]: !s.kartenAus[k.id]})}))
        };
      }),
      psAbwicklung: [
        {k: 'Letzte Transaktion', v: DTX('27.08.2026, 14:32 · 3.178,00 €')},
        {k: 'Umsatz Karte heute', v: EUR(3178)},
        {k: 'Kassenschnitt', v: 'täglich 22:00, automatisch'},
        {k: 'Letzter Kassenschnitt', v: DTX('26.08.2026, 22:00 · 41 Transaktionen')},
        {k: 'Trinkgeld / Tip', v: 'deaktiviert'},
        {k: 'Zahlung ohne Netz', v: 'Offline-Autorisierung bis 50 €'}
      ],
      tabTse: st.einstellTab === 'tse',
      tseStatus: st.tseTyp === 'Keine TSE' ? 'Nicht konfiguriert' : 'Aktiv · Zertifikat gültig',
      tseDot: st.tseTyp === 'Keine TSE' ? '#b3262f' : '#32C995',
      tseBg: st.tseTyp === 'Keine TSE' ? '#fde0e2' : '#dcf3e6',
      tseFg: st.tseTyp === 'Keine TSE' ? '#9b1520' : '#0d5f38',
      tseTestLabel: st.tseTest ? 'Selbsttest erfolgreich ✓' : 'Selbsttest starten',
      onTseTest: () => {
        this.setState({tseTest: true});
        setTimeout(() => this.setState({tseTest: false}), 2000);
      },
      tseTypen: ['Cloud-TSE (fiskaly)', 'Hardware-TSE (USB)', 'Hardware-TSE (microSD)', 'Keine TSE'].map(t => ({
        label: t,
        bg: t === st.tseTyp ? '#101010' : '#FFFFFF',
        fg: t === st.tseTyp ? '#FFFFFF' : '#101010',
        border: t === st.tseTyp ? '#101010' : '#e5e7eb',
        weight: t === st.tseTyp ? 600 : 500,
        onClick: () => this.setState({tseTyp: t})
      })),
      tseFelder: [
        {label: 'TSE-Typ', wert: st.tseTyp},
        {label: 'Seriennummer', wert: st.tseTyp === 'Keine TSE' ? '—' : 'TSE-4711-0A93-KASSE01'},
        {label: 'Zertifikat gültig bis', wert: st.tseTyp === 'Keine TSE' ? '—' : '31.12.2029'},
        {label: 'Kassen-ID (Client)', wert: 'Verkaufsraum'},
        {label: 'Signaturzähler', wert: '18.402'},
        {label: 'Verbleibende Signaturen', wert: st.tseTyp.indexOf('Cloud') === 0 ? 'unbegrenzt (Cloud)' : '1.581.598'},
        {label: 'Meldung ans Finanzamt', wert: DT('gemeldet am 12.01.2026')},
        {label: 'Zeitsynchronisation', wert: 'NTP ptbtime1.ptb.de · Abweichung 0,2 s'}
      ],
      tseOptionen: [
        {id: 'beleg', label: 'Belegausgabepflicht', hinweis: 'Beleg wird bei jedem Vorgang erstellt'},
        {id: 'qr', label: 'QR-Code auf dem Beleg', hinweis: 'Prüfwert nach DSFinV-K auf dem Bon drucken'},
        {id: 'offline', label: 'Offline-Signaturen zwischenspeichern', hinweis: 'Nachsignierung bei Netzstörung, max. 24 h'},
        {id: 'export', label: 'Täglicher DSFinV-K-Export', hinweis: 'Automatisch um 23:30 in die Cloud'},
        {id: 'sperre', label: 'Kasse ohne TSE sperren', hinweis: 'Kein Verkauf, wenn die Signatureinheit ausfällt'}
      ].map(o => {
        const an = !st.tseAus[o.id];
        return {
          label: o.label, hinweis: o.hinweis,
          switchBg: an ? '#101010' : '#e5e7eb',
          switchPos: an ? 'flex-end' : 'flex-start',
          onToggle: () => this.setState(s => ({tseAus: Object.assign({}, s.tseAus, {[o.id]: !s.tseAus[o.id]})}))
        };
      }),
      tseProtokoll: [
        {k: 'Letzte Signatur', v: DTX('27.08.2026, 14:32')},
        {k: 'Letzter Selbsttest', v: DTX('27.08.2026, 08:15')},
        {k: 'Letzter DSFinV-K-Export', v: DTX('26.08.2026, 23:30')},
        {k: 'Kassenabschluss', v: 'täglich, automatisch'},
        {k: 'Aufbewahrung', v: '10 Jahre, revisionssicher'}
      ],
      tabErp: st.einstellTab === 'erp',
      tabShops: st.einstellTab === 'shops',
      druckerGruppen: DRUCKER.map(g => ({
        titel: g.titel, beschreibung: g.beschreibung, hinzufuegen: g.hinzufuegen,
        geraete: g.geraete.map(d => {
          const an = !st.druckerAus[d.id];
          return {
            name: d.name, verbindung: d.verbindung, papier: d.papier, icon: d.icon,
            status: an ? d.status : 'Deaktiviert',
            statusDot: an && d.status === 'Bereit' ? '#32C995' : an ? '#EF3D2F' : '#e5e7eb',
            statusFg: an && d.status === 'Bereit' ? '#0d5f38' : an ? '#545b66' : '#646b76',
            switchBg: an ? '#101010' : '#e5e7eb',
            switchPos: an ? 'flex-end' : 'flex-start',
            testLabel: st.druckerTest === d.id ? 'Testdruck läuft…' : 'Testdruck',
            onTest: () => {
              this.setState({druckerTest: d.id});
              setTimeout(() => this.setState(s => (s.druckerTest === d.id ? {druckerTest: null} : {})), 1600);
            },
            onToggle: () => this.setState(s => ({druckerAus: Object.assign({}, s.druckerAus, {[d.id]: !s.druckerAus[d.id]})}))
          };
        })
      })),
      erpStatusText: st.erpAn ? 'Verbunden · letzter Abgleich 14:28' : 'Verbindung deaktiviert',
      erpSwitchBg: st.erpAn ? '#32C995' : '#1f2329',
      erpSwitchPos: st.erpAn ? 'flex-end' : 'flex-start',
      erpTestLabel: st.erpTest ? 'Verbindung geprüft ✓' : 'Verbindung testen',
      onErpTest: () => {
        this.setState({erpTest: true});
        setTimeout(() => this.setState({erpTest: false}), 2000);
      },
      onErpToggle: () => this.setState(s => ({erpAn: !s.erpAn})),
      erpFelder: [
        {label: 'Mandant', wert: 'zykol.ERP · zykol Wassersport (M-4021)'},
        {label: 'API-Endpunkt', wert: 'https://erp.zykol.de/api/v2'},
        {label: 'API-Schlüssel', wert: '••••••••••••  zk_live_8f21'},
        {label: 'Kassen-ID / Terminal', wert: 'Verkaufsraum'},
        {label: 'Abgleichintervall', wert: 'alle 5 Minuten'},
        {label: 'Belegexport', wert: 'DSFinV-K, täglich 23:30'}
      ],
      syncOptionen: [
        {id: 'artikel', label: 'Artikel & Preise', hinweis: 'Stammdaten und Varianten aus zykol.ERP übernehmen'},
        {id: 'bestand', label: 'Bestände', hinweis: 'Bidirektional, Lagerorte inklusive'},
        {id: 'kunden', label: 'Kunden', hinweis: 'Vereine, Firmen und Verbände mit Konditionen'},
        {id: 'belege', label: 'Belege & Buchungen', hinweis: 'Kassenjournal an die Finanzbuchhaltung'},
        {id: 'rechnungen', label: 'Offene Posten', hinweis: 'Zahlungsstatus von Rechnungskunden zurücklesen'}
      ].map(s => {
        const an = !st.syncAus[s.id];
        return {
          label: s.label, hinweis: s.hinweis,
          switchBg: an ? '#32C995' : '#1f2329',
          switchPos: an ? 'flex-end' : 'flex-start',
          onToggle: () => this.setState(x => ({syncAus: Object.assign({}, x.syncAus, {[s.id]: !x.syncAus[s.id]})}))
        };
      }),
      erpSysteme: ERP_SYSTEME.filter(e => e !== 'zykol.ERP').map(e => ({
        label: e,
        bg: e === st.fremdErp ? '#101010' : '#FFFFFF',
        fg: e === st.fremdErp ? '#FFFFFF' : '#101010',
        border: e === st.fremdErp ? '#101010' : '#e5e7eb',
        weight: e === st.fremdErp ? 600 : 500,
        onClick: () => this.setState({fremdErp: e})
      })),
      fremdFelder: [
        {label: 'System', wert: st.fremdErp},
        {label: 'Verbindungsart', wert: st.fremdErp === 'DATEV' ? 'DATEVconnect online' : st.fremdErp === 'SAP Business One' ? 'Service Layer (OData)' : 'REST / OAuth 2.0'},
        {label: 'Endpunkt', wert: 'https://api.' + st.fremdErp.toLowerCase().replace(/[^a-z]/g, '') + '.example/v1'},
        {label: 'Mandant / Berater-Nr.', wert: st.fremdErp === 'DATEV' ? '77281 / 4021' : 'NW-KANU-01'},
        {label: 'Datenumfang', wert: 'Artikel, Bestand, Belege'},
        {label: 'Konfliktregel', wert: 'ERP führt bei Preisen, Kasse bei Beständen'}
      ],
      shops: [
        {id: 'shopware', name: 'Shopware 6', hinweis: 'kanu-nordwest.de', letzterSync: 'Letzter Abgleich: heute 14:05 · 128 Artikel'},
        {id: 'woocommerce', name: 'WooCommerce', hinweis: 'vereinsshop.kanu-nordwest.de', letzterSync: 'Letzter Abgleich: heute 12:40 · 46 Artikel'},
        {id: 'shopify', name: 'Shopify', hinweis: 'nicht verbunden', letzterSync: 'Zugangsdaten erforderlich'},
        {id: 'jtl', name: 'JTL-Shop', hinweis: 'nicht verbunden', letzterSync: 'Zugangsdaten erforderlich'}
      ].map(s => {
        const an = !!st.shopAn[s.id];
        return {
          name: s.name, hinweis: s.hinweis, letzterSync: s.letzterSync,
          border: an ? '#646b76' : '#e5e7eb',
          dot: an ? '#32C995' : '#e5e7eb',
          status: an ? 'Aktiv · Bestände live' : 'Inaktiv',
          statusFg: an ? '#0d5f38' : '#646b76',
          switchBg: an ? '#101010' : '#e5e7eb',
          switchPos: an ? 'flex-end' : 'flex-start',
          onToggle: () => this.setState(x => ({shopAn: an ? {} : {[s.id]: true}}))
        };
      }),
      eigeneApiAn: !!st.eigeneApiAn,
      onEigeneApiToggle: () => this.setState(x => ({eigeneApiAn: !x.eigeneApiAn})),
      eigeneApiSwitchBg: st.eigeneApiAn ? '#101010' : '#e5e7eb',
      eigeneApiSwitchPos: st.eigeneApiAn ? 'flex-end' : 'flex-start',
      apiFelder: [
        {label: 'Basis-URL', wert: 'https://kasse.zykol.de/api/v1'},
        {label: 'Authentifizierung', wert: 'Bearer Token · Rotation 90 Tage'},
        {label: 'Webhook Verkauf', wert: 'POST /events/sale'},
        {label: 'Webhook Bestand', wert: 'POST /events/stock'},
        {label: 'Format', wert: 'JSON · UTF-8'},
        {label: 'Wiederholversuche', wert: '5 × exponentiell, dann Warteschlange'}
      ],
      bsSuche: st.bsSuche,
      hatBsSuche: !!(st.bsSuche || '').trim(),
      onBsSucheLoeschen: () => this.setState({bsSuche: ''}),
      onBsSuche: (e) => this.setState({bsSuche: e.target.value}),
      lagerFilter: LAGER.map(l => ({
        label: l,
        bg: l === st.lagerort ? '#101010' : '#FFFFFF',
        fg: l === st.lagerort ? '#FFFFFF' : '#101010',
        border: l === st.lagerort ? '#101010' : '#e5e7eb',
        weight: l === st.lagerort ? 600 : 500,
        onClick: () => this.setState({lagerort: l})
      })),
      bestandKennzahlen: [
        {label: 'Artikel im Lager', value: String(bsAlle.reduce((s, b) => s + b.stock, 0)), hint: 'Stück gesamt', color: '#101010',
          detail: {hinweis: 'Stückzahl je Lagerort', fuss: 'Summe aller Bestände ohne Reservierungen.',
            zeilen: LAGER.slice(1).map(l => ({k: l, v: bsAlle.filter(b => b.lager === l).reduce((s, b) => s + b.stock, 0) + ' Stück'}))}},
        {label: 'Reserviert', value: String(bsAlle.reduce((s, b) => s + b.reserviert, 0)), hint: 'für Kundenaufträge', color: '#1f2329',
          detail: {hinweis: 'Reservierungen je Artikel', fuss: 'Reservierungen entstehen aus Aufträgen von Vereinen, Firmen und Verbänden.',
            zeilen: bsAlle.filter(b => b.reserviert > 0).map(b => ({k: b.brand + ' ' + b.name, v: b.reserviert + ' Stück'}))}},
        {label: 'Unter Meldebestand', value: String(bsAlle.filter(b => b.verfuegbar <= 2).length), hint: 'Nachbestellung prüfen', color: '#6b4200',
          detail: {hinweis: 'Artikel mit knappem freien Bestand', fuss: 'Freier Bestand = Bestand minus Reservierungen.',
            zeilen: bsAlle.filter(b => b.verfuegbar <= 2).map(b => ({k: b.brand + ' ' + b.name, v: b.verfuegbar + ' frei'}))}},
        {label: 'Lagerwert (brutto)', value: EUR(bsAlle.reduce((s, b) => s + b.price * b.stock, 0)), hint: 'zu Verkaufspreisen', color: '#101010',
          detail: {hinweis: 'Lagerwert je Lagerort', fuss: 'Bewertung zu Bruttoverkaufspreisen, inkl. 19 % MwSt.',
            zeilen: LAGER.slice(1).map(l => ({k: l, v: EUR(bsAlle.filter(b => b.lager === l).reduce((s, b) => s + b.price * b.stock, 0))}))}}
      ],
      bestandListe: bsListe.map(b => ({
        name: b.brand + ' ' + b.name, sku: b.sku, type: b.type, lager: b.lager,
        icon: CAT_ICON[b.cat],
        stock: b.stock, reserviert: b.reserviert, verfuegbar: b.verfuegbar,
        statusBg: b.verfuegbar === 0 ? '#fde0e2' : b.verfuegbar <= 2 ? '#fdebc8' : '#dcf3e6',
        statusFg: b.verfuegbar === 0 ? '#9b1520' : b.verfuegbar <= 2 ? '#545b66' : '#0d5f38',
        deltaStr: (st.stockDelta[b.id] || 0) > 0 ? '+' + st.stockDelta[b.id] : String(st.stockDelta[b.id] || 0),
        onPlus: () => this.stock(b.id, 1),
        onMinus: () => this.stock(b.id, -1)
      })),
      bsLeer: bsListe.length === 0,
      nachbestellung: bsAlle.filter(b => b.verfuegbar <= 2).map(b => ({
        name: b.brand + ' ' + b.name,
        stock: b.stock,
        ziel: ZIEL_BESTAND[b.id] || 4,
        menge: Math.max(1, (ZIEL_BESTAND[b.id] || 4) - b.stock)
      })),
      nachbestellungLeer: bsAlle.filter(b => b.verfuegbar <= 2).length === 0,
      onBestellvorschlag: () => this.setState({bestellOffen: true}),
      bestellOffen: !!st.bestellOffen,
      onBestellClose: () => this.setState({bestellOffen: false, bestellAuf: {}}),
      bestellungen: this.bestellGruppen(bsAlle).map(g => ({
        offen: !!(st.bestellAuf || {})[g.hersteller],
        pfeil: (st.bestellAuf || {})[g.hersteller] ? '90deg' : '0deg',
        rand: (st.bestellAuf || {})[g.hersteller] ? '#101010' : '#e5e7eb',
        onToggle: () => this.setState(s2 => ({bestellAuf: Object.assign({}, s2.bestellAuf, {[g.hersteller]: !(s2.bestellAuf || {})[g.hersteller]})})),
        kurz: g.positionen.length + ' Positionen · ' + g.positionen.reduce((s, p) => s + p.menge, 0) + ' Stück · ' + (g.lief.lieferzeit || '—'),
        hersteller: g.hersteller, firma: g.lief.firma, adresse: g.lief.adresse,
        mail: g.lief.mail, lieferzeit: g.lief.lieferzeit,
        nummer: g.nummer,
        posAnzahl: g.positionen.length + ' Positionen · ' + g.positionen.reduce((s, p) => s + p.menge, 0) + ' Stück',
        summeStr: EUR(g.summe),
        positionen: g.positionen.map(p => ({
          name: p.name, sku: p.sku, menge: p.menge + '×', stock: 'Bestand ' + p.stock + ' → Ziel ' + p.ziel,
          betrag: EUR(p.menge * p.ek)
        })),
        onPdf: () => this.druckeBestellung(g),
        onMail: () => this.setState({mailVorschauHersteller: g.hersteller})
      })),
      mailVorschauOffen: !!st.mailVorschauHersteller,
      onMailVorschauClose: () => this.setState({mailVorschauHersteller: null, mailBearbeiten: false, mailBodyEdit: null}),
      mailVorschau: (() => {
        const g = this.bestellGruppen(bsAlle).find(x => x.hersteller === st.mailVorschauHersteller);
        if (!g) return {hersteller: '', an: '', betreff: '', body: '', bearbeiten: false, onSenden: () => {}, onBearbeiten: () => {}, onBodyChange: () => {}, onFertig: () => {}};
        const m = this.bestellMail(g);
        const body = st.mailBodyEdit != null ? st.mailBodyEdit : m.body;
        return {
          hersteller: g.hersteller, an: m.an, betreff: m.betreff, body: body,
          bearbeiten: !!st.mailBearbeiten,
          nichtBearbeiten: !st.mailBearbeiten,
          onBearbeiten: () => this.setState({mailBearbeiten: true, mailBodyEdit: body}),
          onBodyChange: (e) => this.setState({mailBodyEdit: e.target.value}),
          onFertig: () => this.setState({mailBearbeiten: false}),
          onSenden: () => {
            window.location.href = 'mailto:' + m.an + '?subject=' + encodeURIComponent(m.betreff) + '&body=' + encodeURIComponent(body);
            this.setState({mailVorschauHersteller: null, mailBearbeiten: false, mailBodyEdit: null});
          }
        };
      })(),
      bestellAnzahl: this.bestellGruppen(bsAlle).length,
      ...(() => {
        const gr = this.bestellGruppen(bsAlle);
        const auf = st.bestellAuf || {};
        const alleAuf = gr.length > 0 && gr.every(g => auf[g.hersteller]);
        const pos = gr.reduce((s, g) => s + g.positionen.length, 0);
        const stk = gr.reduce((s, g) => s + g.positionen.reduce((a, p) => a + p.menge, 0), 0);
        return {
          bestellGesamtStr: EUR(gr.reduce((s, g) => s + g.summe, 0)),
          bestellMeta: gr.length + ' Hersteller · ' + pos + ' Positionen · ' + stk + ' Stück',
          bestellAlleLabel: alleAuf ? 'Alle einklappen' : 'Alle aufklappen',
          onBestellAlleToggle: () => this.setState({bestellAuf: alleAuf ? {} : gr.reduce((m, g) => Object.assign(m, {[g.hersteller]: true}), {})})
        };
      })(),
      onAllePdf: () => this.bestellGruppen(bsAlle).forEach((g, i) => setTimeout(() => this.druckeBestellung(g), i * 900)),
      bewegungen: BEWEGUNGEN,
      zeitraumTabs: Object.keys(ZEITRAUM).map(id => ({
        label: ZEITRAUM[id].label,
        bg: id === st.zeitraum ? '#101010' : 'transparent',
        fg: id === st.zeitraum ? '#FFFFFF' : '#545b66',
        weight: id === st.zeitraum ? 600 : 500,
        onClick: () => this.setState({zeitraum: id})
      })),
      berichtKpi: [
        {label: 'Umsatz (brutto)', value: EUR(zr.umsatz), trend: zr.trend[0], trendColor: '#0d5f38',
          detail: {hinweis: 'Umsatz je Warengruppe · ' + zr.label, fuss: 'Bruttoumsatz inkl. 19 % MwSt., ohne Storni.',
            zeilen: [['Rennboote', .74], ['Rennpaddel', .26]]
              .map(w => ({k: w[0], v: EUR(zr.umsatz * w[1])}))}},
        {label: 'Bons', value: String(zr.bon), trend: zr.trend[1], trendColor: '#0d5f38',
          detail: {hinweis: 'Bons je Periode · ' + zr.label, fuss: 'Ein Bon entspricht einem abgeschlossenen Vorgang.',
            zeilen: zr.reihe.map(r => ({k: r[0], v: Math.max(1, Math.round(zr.bon * (r[1] / zr.umsatz))) + ' Bons'}))}},
        {label: 'Ø Bonwert', value: EUR(zr.umsatz / zr.bon), trend: zr.trend[2], trendColor: '#545b66',
          detail: {hinweis: 'Ø Bonwert nach Zahlart · ' + zr.label, fuss: 'Rechnungskäufe von Vereinen und Firmen heben den Durchschnitt.',
            zeilen: [['Karte', 1.05], ['Bar', 0.42], ['Rechnung', 2.30]].map(z => ({k: z[0], v: EUR((zr.umsatz / zr.bon) * z[1])}))}},
        {label: 'Storni & Retouren', value: String(zr.retour), trend: zr.trend[3], trendColor: '#6b4200',
          detail: {hinweis: 'Storni und Retouren · ' + zr.label, fuss: 'Jeder Storno wird mit Grund und TSE-Signatur protokolliert.',
            zeilen: [{k: 'Storno an der Kasse', v: Math.ceil(zr.retour * 0.6) + ' Vorgänge'},
              {k: 'Retoure mit Beleg', v: Math.floor(zr.retour * 0.4) + ' Vorgänge'},
              {k: 'Wert gesamt', v: EUR(zr.umsatz * 0.011)}]}}
      ],
      berichtKassenTabs: [{id: 'alle', label: 'Alle Kassen'}].concat(st.kassen.map(k => ({id: k.id, label: k.id}))).map(o => ({
        label: o.label,
        bg: o.id === berichtKasse ? '#101010' : '#FFFFFF',
        fg: o.id === berichtKasse ? '#FFFFFF' : '#101010',
        border: o.id === berichtKasse ? '#101010' : '#e5e7eb',
        weight: o.id === berichtKasse ? 600 : 500,
        onClick: () => this.setState({berichtKasse: o.id})
      })),
      berichtKassenZeilen: st.kassen.map(k => {
        const tk = TX.filter(t => t.kasse === k.id && t.status !== 'Storniert');
        const umsatz = tk.reduce((a, t) => a + txSumme(t), 0);
        const bons = tk.length;
        return {
          id: k.id, ort: k.ort,
          umsatz: EUR(umsatz),
          bons: bons + ' Bons',
          schnitt: bons ? EUR(umsatz / bons) : '—',
          anteil: Math.round((kassenAnteile[k.id] || 0) * 100) + ' %',
          balken: Math.round((kassenAnteile[k.id] || 0) * 100) + '%',
          storni: String(TX.filter(t => t.kasse === k.id && t.status === 'Storniert').length),
          aktiv: k.id === berichtKasse,
          onClick: () => this.setState({berichtKasse: k.id === berichtKasse ? 'alle' : k.id})
        };
      }),
      berichtKasseTitel: berichtKasse === 'alle' ? 'Alle Kassen' : berichtKasse,
      verlaufHinweis: zr.hinweis,
      verlaufSumme: EUR(zr.umsatz),
      verlauf: zr.reihe.map(r => ({
        label: r[0],
        kurz: r[1] ? Math.round(r[1] / 100) / 10 + ' T€' : '—',
        hoehe: Math.round((r[1] / maxReihe) * 100) + '%',
        color: r[1] === maxReihe ? '#101010' : '#646b76'
      })),
      zahlarten: ['Karte', 'Bar', 'Rechnung'].map((z, i) => {
        const betrag = zr.umsatz * [0.54, 0.19, 0.27][i];
        return {label: z, betrag: EUR(betrag), anteil: Math.round([0.54, 0.19, 0.27][i] * 100) + '%',
          color: ['#101010', '#EF3D2F', '#1f2329'][i]};
      }),
      kundenarten: [
        {label: 'Firmen & Wiederverkauf', wert: '38 %', color: '#1f2329'},
        {label: 'Vereine', wert: '26 %', color: '#0d5f38'},
        {label: 'Verbände & Schulen', wert: '21 %', color: '#6b4200'},
        {label: 'Privatkunden', wert: '15 %', color: '#1f2329'}
      ],
      topArtikel: [
        {id: 'p1', name: 'Nelo K1 Vanquish 7', menge: '3 Stück', umsatz: EUR(8697)},
        {id: 'p2', name: 'Plastex K1 Bullet II', menge: '2 Stück', umsatz: EUR(5198)},
        {id: 'p4', name: 'Plastex C1 Bullet', menge: '2 Stück', umsatz: EUR(4380)},
        {id: 'p5', name: 'Brača IV 750', menge: '9 Stück', umsatz: EUR(2511)},
        {id: 'p9', name: 'Jantex Gamma 840', menge: '12 Stück', umsatz: EUR(1548)}
      ].map(t => Object.assign({}, t, {icon: CAT_ICON[(PRODUKTE.find(p => p.id === t.id) || {}).cat]})),
      warengruppen: [
        {label: 'Boote (Nelo, Plastex, Lettmann)', anteil: '74%', umsatz: EUR(zr.umsatz * 0.74), color: '#101010'},
        {label: 'Paddel (Jantex, Brača, Lettmann)', anteil: '26%', umsatz: EUR(zr.umsatz * 0.26), color: '#545b66'}
      ],
      kdSuche: st.kdSuche,
      hatKdSuche: !!(st.kdSuche || '').trim(),
      onKdSucheLoeschen: () => this.setState({kdSuche: ''}),
      onKdSuche: (e) => this.setState({kdSuche: e.target.value}),
      kdTypFilter: KD_TYPEN.map(t => ({
        label: t,
        bg: t === st.kdTyp ? '#101010' : '#FFFFFF',
        fg: t === st.kdTyp ? '#FFFFFF' : '#101010',
        border: t === st.kdTyp ? '#101010' : '#e5e7eb',
        weight: t === st.kdTyp ? 600 : 500,
        onClick: () => this.setState({kdTyp: t})
      })),
      kundenKennzahlen: [
        {label: 'Kunden gesamt', value: String(this.kunden().length), hint: '5 Kundenarten', color: '#101010',
          detail: {hinweis: 'Kunden je Kundenart', fuss: 'Kundenart bestimmt Zahlungsart und Rabattstufe.',
            zeilen: KD_TYPEN.filter(t => t !== 'Alle').map(t => ({k: t, v: this.kunden().filter(k => k.typ === t).length + ' Kunden'}))}},
        {label: 'Vereine & Verbände', value: String(this.kunden().filter(k => k.typ === 'Verein' || k.typ === 'Verband').length), hint: 'mit Rahmenrabatt', color: '#0d5f38',
          detail: {hinweis: 'Vereine und Verbände mit Rahmenvereinbarung', fuss: 'Rahmenrabatte gelten für alle Positionen des Vorgangs.',
            zeilen: this.kunden().filter(k => k.typ === 'Verein' || k.typ === 'Verband').map(k => ({k: k.name, v: k.rabatt + ' % Rabatt'}))}},
        {label: 'Offene Rechnungen', value: String(this.kunden().reduce((s, k) => s + k.offen, 0)), hint: 'Zahlungseingang ausstehend', color: '#6b4200',
          detail: {hinweis: 'Offene Posten je Kunde', fuss: 'Nur Kunden mit Rechnungskauf können offene Posten haben.',
            zeilen: this.kunden().filter(k => k.offen > 0).map(k => ({k: k.name, v: k.offen + ' Rechnungen'}))}},
        {label: 'Umsatz Jahr', value: EUR(this.kunden().reduce((s, k) => s + k.umsatz, 0)), hint: 'alle Kunden', color: '#101010',
          detail: {hinweis: 'Top-Kunden nach Jahresumsatz', fuss: 'Laufendes Geschäftsjahr, brutto.',
            zeilen: this.kunden().slice().sort((a, b) => b.umsatz - a.umsatz).slice(0, 6).map(k => ({k: k.name, v: EUR(k.umsatz)}))}}
      ],
      kundenListe: kdListe.map(kdRow),
      kdLeer: kdListe.length === 0,
      kdDetailOffen: !!kd,
      kdDetail: kd ? {
        name: kd.name, nr: kd.nr, ort: kd.ort, typ: kd.typ,
        typBg: TYP_STIL[kd.typ].bg, typFg: TYP_STIL[kd.typ].fg,
        attrs: [
          {k: 'Kundenart', v: kd.typ},
          {k: 'Ansprechpartner', v: kd.kontakt},
          {k: 'Telefon', v: kd.telefon},
          {k: 'E-Mail', v: kd.mail},
          {k: 'Zahlungsart', v: kd.zahlung},
          {k: 'Rabatt', v: kd.rabatt ? kd.rabatt + ' %' : 'Listenpreis'},
          {k: 'USt-IdNr.', v: kd.ustid},
          {k: 'Kunde seit', v: kd.seit},
          {k: 'Umsatz Jahr', v: EUR(kd.umsatz)},
          {k: 'Offene Rechnungen', v: String(kd.offen)},
          {k: 'Notiz', v: kd.notiz}
        ],
        hatBoot: !!KUNDENBOOTE[kd.nr],
        boot: (() => {
          const b = KUNDENBOOTE[kd.nr];
          if (!b) return {modell: '', typ: '', sn: '', kauf: '', historie: [], fuss: '', offen: false, pfeil: '', onToggle: () => {}};
          const offen = !!st.kdBootOffen;
          const kosten = b.historie.slice(1).reduce((a, h) => a + parseFloat(h.kosten.replace(/\./g, '').replace(',', '.')), 0);
          return {
            modell: b.modell, typ: b.typ, sn: b.sn, kauf: 'Kaufdatum ' + b.kauf,
            offen,
            pfeil: offen ? 'M6 15l6-6 6 6' : 'M6 9l6 6 6-6',
            onToggle: () => this.setState({kdBootOffen: !offen}),
            anzahl: b.historie.length + ' Einträge',
            historie: b.historie.slice().reverse().map(h => ({
              datum: h.datum, typ: h.typ, titel: h.titel, text: h.text, kosten: h.kosten,
              bg: (HIST_STIL[h.typ] || HIST_STIL.Wartung).bg,
              fg: (HIST_STIL[h.typ] || HIST_STIL.Wartung).fg
            })),
            fuss: 'Wartungen und Reparaturen kumuliert ' + EUR(kosten)
          };
        })(),
        hatBelege: this.kaeufeVon(kd.nr).length > 0,
        belegeAnzahl: new Set(this.kaeufeVon(kd.nr).map(k => k.beleg)).size + ' Belege',
        belege: (() => {
          const alle = this.kaeufeVon(kd.nr);
          const nummern = [];
          alle.forEach(k => { if (nummern.indexOf(k.beleg) < 0) nummern.push(k.beleg); });
          return nummern.map(nr => {
            const pos = alle.filter(k => k.beleg === nr);
            const summe = pos.reduce((a, k) => a + k.betrag, 0);
            const offen = st.kdBelegOffen === nr;
            return {
              nr: nr, datum: pos[0].datum,
              summe: EUR(summe),
              posText: pos.length + ' Positionen · ' + pos.reduce((a, k) => a + k.menge, 0) + ' Stück',
              zahlung: kd.zahlung,
              offen,
              pfeil: offen ? 'M6 15l6-6 6 6' : 'M6 9l6 6 6-6',
              onToggle: () => this.setState({kdBelegOffen: offen ? null : nr}),
              positionen: pos.map(k => ({
                produkt: k.produkt, menge: k.menge + ' ×', betrag: EUR(k.betrag),
                notiz: k.notiz || '', hatNotiz: !!k.notiz
              })),
              onVorschau: () => this.setState({belegVorschau: {nr: nr, datum: pos[0].datum, kundeNr: kd.nr}}),
              onPdf: () => this.druckeBeleg(kd, nr, pos[0].datum, pos, summe)
            };
          });
        })(),
        hatKaeufe: this.kaeufeVon(kd.nr).length > 0,
        kaeufeAnzahl: this.kaeufeVon(kd.nr).reduce((s, k) => s + k.menge, 0) + ' Stück · ' +
          new Set(this.kaeufeVon(kd.nr).map(k => k.beleg)).size + ' Belege',
        kaeufe: this.kaeufeVon(kd.nr).map(k => {
          const key = k.beleg + '|' + k.produkt;
          const offen = st.kdKaufOffen === key;
          const boote = VERKAUFTE_BOOTE.filter(v => v.kunde === kd.name && v.modell === k.produkt);
          const service = boote.reduce((acc, v) => acc.concat(
            v.historie.slice(1).map(h => ({datum: h.datum, typ: h.typ, titel: h.titel, text: h.text + ' · ' + v.sn, kosten: h.kosten}))
          ), []);
          const eintraege = [{
            datum: k.datum, typ: 'Zugang', titel: 'Kauf & Übergabe',
            text: 'Beleg ' + k.beleg + ' · ' + kd.zahlung + ' · ' + k.menge + ' Stück' + (k.notiz ? ' · ' + k.notiz : ''),
            kosten: EUR(k.betrag)
          }].concat(service);
          return {
            produkt: k.produkt, menge: k.menge + ' ×', datum: k.datum, beleg: k.beleg, betrag: EUR(k.betrag),
            offen,
            pfeil: offen ? 'M6 15l6-6 6 6' : 'M6 9l6 6 6-6',
            onToggle: () => this.setState({kdKaufOffen: offen ? null : key}),
            historie: eintraege.slice().reverse().map(h => ({
              datum: h.datum, typ: h.typ, titel: h.titel, text: h.text, kosten: h.kosten,
              bg: (HIST_STIL[h.typ] || HIST_STIL.Wartung).bg,
              fg: (HIST_STIL[h.typ] || HIST_STIL.Wartung).fg
            })),
            fuss: service.length
              ? 'Kaufdatum ' + k.datum + ' · ' + service.length + ' Wartungen / Reparaturen'
              : 'Kaufdatum ' + k.datum + ' · keine Wartungen oder Reparaturen erfasst'
          };
        }),
        kaeufeSumme: EUR(this.kaeufeVon(kd.nr).reduce((s, k) => s + k.betrag, 0)),
        onSelect: () => this.setState({kundeNr: kd.nr, kdDetailNr: null, view: 'kasse'})
      } : null,
      onKdClose: () => this.setState({kdDetailNr: null}),
      kdFormOffen: !!st.kdFormNr,
      kdFormTitel: st.kdFormNr === 'neu' ? 'Neuer Kunde' : 'Kunde bearbeiten',
      kdFormHinweis: st.kdFormHinweis || '',
      hatKdFormHinweis: !!st.kdFormHinweis,
      kdFormFelder: [
        {id: 'name', label: 'Name / Firma *', platz: 'z. B. Kanu-Club Weser Syke e.V.', breit: true},
        {id: 'kontakt', label: 'Ansprechpartner', platz: 'Vor- und Nachname'},
        {id: 'typ', label: 'Kundenart', platz: 'Kundenart wählen', auswahl: KD_TYPEN.filter(t => t !== 'Alle')},
        {id: 'ort', label: 'PLZ / Ort', platz: '28857 Syke'},
        {id: 'mail', label: 'E-Mail', platz: 'kontakt@kunde.de'},
        {id: 'telefon', label: 'Telefon', platz: '04242 58-465'},
        {id: 'rabatt', label: 'Rabatt %', platz: '12'},
        {id: 'zahlung', label: 'Zahlungsart', platz: 'Rechnung 30 Tage', breit: true}
      ].map(f => ({
        label: f.label, platz: f.platz,
        spalte: f.breit ? '1 / -1' : 'auto',
        istText: !f.auswahl,
        istAuswahl: !!f.auswahl,
        optionen: f.auswahl || [],
        value: (st.kdForm || {})[f.id] == null ? '' : String((st.kdForm || {})[f.id]),
        onChange: (e) => { const v = e.target.value; this.setState(s2 => ({kdForm: Object.assign({}, s2.kdForm, {[f.id]: v})})); }
      })),
      onKdFormZu: () => this.setState({kdFormNr: null, kdForm: null, kdFormHinweis: ''}),
      onKdNeu: () => this.setState({kdFormNr: 'neu', kdForm: {typ: 'Privat', zahlung: 'Barzahlung', rabatt: '0'}, kdFormHinweis: ''}),
      onKdFormSpeichern: () => {
        const f = st.kdForm || {};
        if (!f.name || !String(f.name).trim()) return this.setState({kdFormHinweis: 'Bitte einen Namen eintragen.'});
        const werte = {
          name: String(f.name).trim(),
          kontakt: f.kontakt || '—', typ: f.typ || 'Privat',
          ort: f.ort || '', mail: f.mail || '', telefon: f.telefon || '',
          rabatt: parseFloat(String(f.rabatt).replace(',', '.')) || 0,
          zahlung: f.zahlung || 'Barzahlung'
        };
        if (st.kdFormNr === 'neu') {
          const nr = 'K-' + String(1260 + (st.kundenNeu || []).length);
          return this.setState(s2 => ({
            kundenNeu: (s2.kundenNeu || []).concat([Object.assign({nr: nr, umsatz: 0, offen: 0}, werte)]),
            kdFormNr: null, kdForm: null, kdFormHinweis: '', kdDetailNr: nr
          }));
        }
        this.setState(s2 => ({
          kundenOv: Object.assign({}, s2.kundenOv, {[st.kdFormNr]: werte}),
          kundenNeu: (s2.kundenNeu || []).map(k => k.nr === st.kdFormNr ? Object.assign({}, k, werte) : k),
          kdFormNr: null, kdForm: null, kdFormHinweis: ''
        }));
      },
      belegOffen: !!st.belegVorschau,
      onBelegZu: () => this.setState({belegVorschau: null}),
      belegDok: (() => {
        const v = st.belegVorschau;
        if (!v) return {nr: '', datum: '', kunde: '', kundeZeilen: [], positionen: [], netto: '', mwst: '', summe: '', zahlung: '', onPdf: () => {} };
        const k = this.kunden().find(x => x.nr === v.kundeNr) || {name: 'Laufkunde', nr: '—', ort: '', zahlung: 'Barzahlung', typ: 'Privat'};
        const pos = this.kaeufeVon(v.kundeNr).filter(x => x.beleg === v.nr);
        const summe = pos.reduce((a, x) => a + x.betrag, 0);
        return {
          nr: v.nr, datum: v.datum, kunde: k.name,
          kundeZeilen: [k.kontakt, k.ort, k.mail, 'Kundennummer ' + k.nr].filter(Boolean),
          zahlung: k.zahlung,
          positionen: pos.map(x => ({
            produkt: x.produkt, menge: x.menge + ' ×',
            einzel: EUR(x.betrag / x.menge), betrag: EUR(x.betrag),
            notiz: x.notiz || '', hatNotiz: !!x.notiz
          })),
          netto: EUR(summe / 1.19), mwst: EUR(summe - summe / 1.19), summe: EUR(summe),
          onPdf: () => this.druckeBeleg(k, v.nr, v.datum, pos, summe)
        };
      })(),
      kachelOffen: !!st.kachel,
      kachel: st.kachel || {titel: '', hinweis: '', wert: '', zeilen: [], fuss: ''},
      onKachelClose: () => this.setState({kachel: null}),
      kundeGewaehlt: !!kunde,
      kundeOffen: !kunde,
      kundeName: kunde ? kunde.name : '',
      kundeInfo: kunde ? kunde.typ + ' · ' + (kunde.rabatt ? kunde.rabatt + ' % Rabatt' : 'Listenpreis') : '',
      onKundeClear: () => this.setState({kundeNr: null}),
      kundeSuche: st.kundeSuche || '',
      hatKundeSuche: !!(st.kundeSuche || '').trim(),
      onKundeSucheLoeschen: () => this.setState({kundeSuche: ''}),
      onKundeSuche: (e) => this.setState({kundeSuche: e.target.value}),
      kundeSucheOffen: !!(st.kundeSuche || '').trim(),
      kundeTreffer: (() => {
        const q = (st.kundeSuche || '').trim().toLowerCase();
        if (!q) return [];
        return this.kunden().filter(k => (k.name + ' ' + k.nr + ' ' + k.ort + ' ' + k.typ).toLowerCase().includes(q)).slice(0, 6).map(k => ({
          name: k.name,
          info: k.nr + ' · ' + k.typ + ' · ' + (k.rabatt ? k.rabatt + ' % Rabatt' : 'Listenpreis'),
          kuerzel: k.name.replace(/[^A-Za-zÄÖÜäöü ]/g, ' ').trim().split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase(),
          onClick: () => this.setState({kundeNr: k.nr, kundeSuche: ''})
        }));
      })(),
      kundeKeinTreffer: !!(st.kundeSuche || '').trim() && this.kunden().filter(k => (k.name + ' ' + k.nr + ' ' + k.ort + ' ' + k.typ).toLowerCase().includes((st.kundeSuche || '').trim().toLowerCase())).length === 0,
      onKundeListe: () => this.setState({view: 'kunden', kundeSuche: ''}),
      txSuche: st.txSuche,
      hatTxSuche: !!(st.txSuche || '').trim(),
      onTxSucheLoeschen: () => this.setState({txSuche: ''}),
      onTxSuche: (e) => this.setState({txSuche: e.target.value}),
      txVon, txBis, txMinDatum: txMin, txMaxDatum: txMax,
      txFrei: st.txZeitraum === 'frei',
      txTreffer: txListe.length + (txListe.length === 1 ? ' Beleg' : ' Belege'),
      onTxVon: (e) => this.setState({txVon: e.target.value || null, txZeitraum: 'frei'}),
      onTxBis: (e) => this.setState({txBis: e.target.value || null, txZeitraum: 'frei'}),
      txZeitraeume: (() => {
        const ref = new Date(txMax + 'T12:00:00');
        const iso = d => d.toISOString().slice(0, 10);
        const tag = n => { const d = new Date(ref); d.setDate(d.getDate() - n); return iso(d); };
        const mA = new Date(ref.getFullYear(), ref.getMonth(), 1, 12);
        const vmA = new Date(ref.getFullYear(), ref.getMonth() - 1, 1, 12), vmE = new Date(ref.getFullYear(), ref.getMonth(), 0, 12);
        const qA = new Date(ref.getFullYear(), Math.floor(ref.getMonth() / 3) * 3, 1, 12);
        const opts = [
          {id: 'alle', label: 'Gesamt', von: null, bis: null},
          {id: 'heute', label: 'Heute', von: tag(0), bis: tag(0)},
          {id: 'gestern', label: 'Gestern', von: tag(1), bis: tag(1)},
          {id: '7', label: 'Letzte 7 Tage', von: tag(6), bis: tag(0)},
          {id: 'monat', label: 'Dieser Monat', von: iso(mA), bis: tag(0)},
          {id: 'vormonat', label: 'Vormonat', von: iso(vmA), bis: iso(vmE)},
          {id: 'quartal', label: 'Quartal', von: iso(qA), bis: tag(0)},
          {id: 'frei', label: 'Benutzerdefiniert', frei: true}
        ];
        return opts.map(o => { const a = st.txZeitraum === o.id; return {label: o.label,
          bg: a ? '#101010' : '#FFFFFF', fg: a ? '#FFFFFF' : '#101010', border: a ? '#101010' : '#e5e7eb', weight: a ? 600 : 500,
          onClick: () => this.setState(o.frei ? {txZeitraum: 'frei'} : {txZeitraum: o.id, txVon: o.von, txBis: o.bis})}; });
      })(),
      txFilter: TX_FILTER.map(f => ({
        label: f.label,
        bg: f.id === st.txFilter ? '#101010' : '#FFFFFF',
        fg: f.id === st.txFilter ? '#FFFFFF' : '#101010',
        border: f.id === st.txFilter ? '#101010' : '#e5e7eb',
        weight: f.id === st.txFilter ? 600 : 500,
        onClick: () => this.setState({txFilter: f.id})
      })),
      txKennzahlen: [
        {label: 'Buchungen heute', value: String(txKasse.filter(t => t.datum === DTX('27.08.2026')).length), hint: aktiveKasse ? aktiveKasse.id : '—', color: '#101010',
          detail: {hinweis: 'Buchungen des Tages', fuss: 'Alle Vorgänge inkl. Storni, chronologisch.',
            zeilen: txKasse.filter(t => t.datum === DTX('27.08.2026')).map(t => ({k: t.zeit + ' · ' + t.beleg, v: EUR(txSumme(t))}))}},
        {label: 'Umsatz heute (brutto)', value: EUR(txKasse.filter(t => t.datum === DTX('27.08.2026') && t.status !== 'Storniert').reduce((s, t) => s + txSumme(t), 0)), hint: 'ohne Storni', color: '#101010',
          detail: {hinweis: 'Umsatz heute nach Zahlart', fuss: 'Storni sind herausgerechnet, offene Rechnungen enthalten.',
            zeilen: ['Karte', 'Bar', 'Rechnung'].map(z => ({k: z, v: EUR(txKasse.filter(t => t.datum === DTX('27.08.2026') && t.status !== 'Storniert' && t.zahlart === z).reduce((s, t) => s + txSumme(t), 0))}))}},
        {label: 'Offene Rechnungen', value: String(txKasse.filter(t => t.status === 'Offen').length), hint: 'Zahlungseingang ausstehend', color: '#6b4200',
          detail: {hinweis: 'Belege mit offenem Zahlungseingang', fuss: 'Zahlungsziel je Kunde: 14 oder 30 Tage.',
            zeilen: txKasse.filter(t => t.status === 'Offen').map(t => ({k: t.beleg + ' · ' + t.datum, v: EUR(txSumme(t))}))}},
        {label: 'Storni', value: String(txKasse.filter(t => t.status === 'Storniert').length), hint: 'protokolliert', color: '#b3262f',
          detail: {hinweis: 'Stornierte Belege', fuss: 'Storni bleiben unveränderbar im Journal protokolliert.',
            zeilen: txKasse.filter(t => t.status === 'Storniert').map(t => ({k: t.beleg + ' · ' + t.kassierer, v: '− ' + EUR(txSumme(t))}))}}
      ],
      txSpalten: [['beleg', 'Beleg'], ['zeit', 'Zeit'], ['pos', 'Positionen'], ['zahlart', 'Zahlart'], ['status', 'Status'], ['betrag', 'Betrag']].map(([k, l]) => {
        const a = st.txSort.key === k;
        return {label: l, pfeil: a ? (st.txSort.dir === 1 ? '▲' : '▼') : '↕', color: a ? '#101010' : '#545b66', justify: k === 'betrag' ? 'flex-end' : 'flex-start',
          onClick: () => this.setState(s0 => ({txSort: {key: k, dir: s0.txSort.key === k ? -s0.txSort.dir : (k === 'zeit' || k === 'betrag' ? -1 : 1)}}))};
      }),
      transaktionen: txListe.map(t => ({
        stop: (e) => e.stopPropagation(),
        statusGesperrt: !this.meineRechte()['Transaktionsstatus ändern'],
        statusTitel: this.meineRechte()['Transaktionsstatus ändern'] ? 'Status ändern' : 'Keine Berechtigung: Transaktionsstatus ändern',
        onStatus: (e) => { if (!this.meineRechte()['Transaktionsstatus ändern']) return; const v = e.target.value; this.setState(s0 => ({txStatus: Object.assign({}, s0.txStatus, {[t.beleg]: v})})); },
        beleg: t.beleg, datum: t.datum, zeit: t.zeit, kassierer: t.kassierer, zahlart: t.zahlart,
        status: t.status,
        zahlIcon: ZAHL_ICON[t.zahlart],
        positionen: t.pos.map(p => p[1] + ' × ' + p[0]).join(', '),
        posAnzahl: t.pos.reduce((s, p) => s + p[1], 0) + ' Positionen',
        betragStr: (t.status === 'Storniert' ? '− ' : '') + EUR(txSumme(t)),
        betragColor: t.status === 'Storniert' ? '#b3262f' : '#101010',
        statusBg: t.status === 'Storniert' ? '#fde0e2' : t.status === 'Offen' ? '#fdebc8' : '#dcf3e6',
        statusFg: t.status === 'Storniert' ? '#9b1520' : t.status === 'Offen' ? '#545b66' : '#0d5f38',
        onOpen: () => this.setState({txBeleg: t.beleg})
      })),
      txLeer: txListe.length === 0,
      txDetailOffen: !!tx,
      txDetail: tx ? {
        qr: QR(BELEG_URL(tx.beleg)), qrUrl: BELEG_URL(tx.beleg).replace('https://', ''),
        beleg: tx.beleg, datum: tx.datum, zeit: tx.zeit, kassierer: tx.kassierer, zahlart: tx.zahlart,
        tse: tx.tse,
        zeilen: tx.pos.map(p => ({menge: p[1], name: p[0], summe: EUR(p[1] * p[2])})),
        netto: EUR(txSumme(tx) / 1.19),
        mwst: EUR(txSumme(tx) - txSumme(tx) / 1.19),
        betragStr: EUR(txSumme(tx))
      } : null,
      onTxClose: () => this.setState({txBeleg: null}),
      kennzahlen: [
        {label: 'Artikel aktiv', value: String(PRODUKTE.length), hint: this.kats().length - 1 + ' Rubriken', color: '#101010',
          detail: {hinweis: 'Aktive Artikel je Kategorie', fuss: 'Inaktive oder ausgelistete Artikel werden nicht gezählt.',
            zeilen: this.kats().filter(k => k.id !== 'alle').map(k => ({k: k.label, v: bestandsliste.filter(x => x.cat === k.id).length + ' Artikel'}))}},
        {label: 'Niedriger Bestand', value: String(bestandsliste.filter(x => x.stock > 0 && x.stock <= 2).length), hint: 'Meldebestand ≤ 2', color: '#6b4200',
          detail: {hinweis: 'Artikel am oder unter Meldebestand', fuss: 'Meldebestand pauschal 2 Stück — je Artikel konfigurierbar.',
            zeilen: bestandsliste.filter(x => x.stock > 0 && x.stock <= 2).map(x => ({k: x.brand + ' ' + x.name, v: x.stock + ' Stück'}))}},
        {label: 'Nicht verfügbar', value: String(bestandsliste.filter(x => x.stock === 0).length), hint: 'Nachbestellung offen', color: '#b3262f',
          detail: {hinweis: 'Artikel ohne Bestand', fuss: 'Nicht verfügbare Artikel bleiben an der Kasse sichtbar, aber nicht buchbar.',
            zeilen: bestandsliste.filter(x => x.stock === 0).map(x => ({k: x.brand + ' ' + x.name, v: 'ausverkauft'}))}},
        {label: 'Lagerwert (brutto)', value: EUR(bestandsliste.reduce((s, x) => s + x.price * x.stock, 0)), hint: 'Alle Standorte', color: '#101010',
          detail: {hinweis: 'Lagerwert je Kategorie', fuss: 'Bewertung zu Bruttoverkaufspreisen, inkl. 19 % MwSt.',
            zeilen: this.kats().filter(k => k.id !== 'alle').map(k => ({
              k: k.label, v: EUR(bestandsliste.filter(x => x.cat === k.id).reduce((s, x) => s + x.price * x.stock, 0))}))}}
      ],
      artikelListe: bestandsliste.filter(p =>
        (st.cat === 'alle' || p.cat === st.cat) &&
        (!st.artMarke || st.artMarke === 'alle' || p.brand === st.artMarke) &&
        (!q || (p.name + ' ' + p.brand + ' ' + p.type + ' ' + p.sku).toLowerCase().includes(q))
      ).map(p => ({
        name: p.name, brand: p.brand, type: p.type, sku: p.sku, stock: this.bestandVon(p),
        icon: CAT_ICON[p.cat],
        priceStr: EUR(p.price),
        catLabel: (this.kats().find(k => k.id === p.cat) || {label: '—'}).label,
        statusLabel: p.stock === 0 ? 'Nicht verfügbar' : p.stock <= 2 ? 'Niedrig' : 'Verfügbar',
        statusBg: p.stock === 0 ? '#fde0e2' : p.stock <= 2 ? '#fdebc8' : '#dcf3e6',
        statusFg: p.stock === 0 ? '#9b1520' : p.stock <= 2 ? '#545b66' : '#0d5f38',
        onStockPlus: () => this.stock(p.id, 1),
        onStockMinus: () => this.stock(p.id, -1),
        onDetail: () => this.setState({detailId: p.id})
      })),
      artikelLeer: bestandsliste.filter(p =>
        (st.cat === 'alle' || p.cat === st.cat) &&
        (!st.artMarke || st.artMarke === 'alle' || p.brand === st.artMarke) &&
        (!q || (p.name + ' ' + p.brand + ' ' + p.type + ' ' + p.sku).toLowerCase().includes(q))
      ).length === 0,
      navigation: (() => {
        const uid = (st.angemeldet || {}).id || 'gast';
        const erlaubt = NAV.filter(n => this.darfView(n.id));
        const wunsch = (st.navOrder || {})[uid] || [];
        const sortiert = wunsch.map(id => erlaubt.find(n => n.id === id)).filter(Boolean)
          .concat(erlaubt.filter(n => wunsch.indexOf(n.id) < 0));
        return sortiert;
      })().map(n => ({
        label: this.t('nav_' + n.id, n.label), icon: n.icon,
        ziehtGerade: st.navDrag === n.id,
        opacity: st.navDrag === n.id ? 0.45 : 1,
        ziehbar: !!st.navEdit,
        cursor: st.navEdit ? 'grab' : 'pointer',
        griffAnzeige: st.navEdit ? (st.navOffen ? 'flex' : 'none') : 'none',
        onClick2: null,
        onDragStart: (e) => {
          if (!this.state.navEdit) { e.preventDefault(); return; }
          this.setState({navDrag: n.id});
          if (e.dataTransfer) e.dataTransfer.effectAllowed = 'move';
        },
        onDragOver: (e) => {
          if (!this.state.navEdit) return;
          e.preventDefault();
          const von = this.state.navDrag;
          if (!von || von === n.id) return;
          this.setState(s2 => {
            const uid = (s2.angemeldet || {}).id || 'gast';
            const erlaubt = NAV.filter(x => this.darfView(x.id)).map(x => x.id);
            const wunsch = (s2.navOrder || {})[uid] || [];
            const reihe = wunsch.filter(id => erlaubt.indexOf(id) > -1)
              .concat(erlaubt.filter(id => wunsch.indexOf(id) < 0));
            const i = reihe.indexOf(von), j = reihe.indexOf(n.id);
            if (i < 0 || j < 0) return {};
            reihe.splice(i, 1);
            reihe.splice(j, 0, von);
            return {navOrder: Object.assign({}, s2.navOrder, {[uid]: reihe})};
          });
        },
        onDragEnd: () => this.setState({navDrag: null}),
        onTipAn: (e) => { if (st.navOffen || st.navEdit) return; const r = e.currentTarget.getBoundingClientRect(); this.setState({navTip: {text: n.label, x: r.right + 8, y: r.top + r.height / 2}}); },
        bg: n.id === st.view ? '#FFFFFF' : 'transparent',
        fg: n.id === st.view ? '#101010' : '#e5e7eb',
        weight: n.id === st.view ? 600 : 500,
        justify: st.navOffen ? 'flex-start' : 'center',
        padding: st.navOffen ? '0 16px' : '0',
        onClick: () => !st.navEdit && ['dashboard', 'kasse', 'artikel', 'transaktionen', 'kunden', 'berichte', 'umsatz', 'bestand', 'lieferanten', 'verkaufteBoote', 'angebote', 'kalender', 'einstellungen'].includes(n.id) && this.setState({view: n.id, cat: 'alle', suche: '', einstellTab: n.id === 'einstellungen' ? null : st.einstellTab})
      })),
      navTipAn: !!st.navTip && !st.navOffen, navTipText: st.navTip ? st.navTip.text : '',
      navTipX: st.navTip ? st.navTip.x + 'px' : '0px', navTipY: st.navTip ? st.navTip.y + 'px' : '0px',
      onNavTipAus: () => this.state.navTip && this.setState({navTip: null}),
      kategorien: this.kats().map(k => ({
        label: k.label,
        bg: k.id === st.cat ? '#101010' : '#FFFFFF',
        fg: k.id === st.cat ? '#FFFFFF' : '#101010',
        border: k.id === st.cat ? '#101010' : '#e5e7eb',
        weight: k.id === st.cat ? 600 : 500,
        onClick: () => { if (this._katLang) { this._katLang = false; return; } this.setState({cat: k.id, artMarke: 'alle', katHover: null}); },
        onTouchStart: () => { this._katTouch = true; clearTimeout(this._katLP); this._katLang = false; this._katLP = setTimeout(() => { this._katLang = true; if (navigator.vibrate) navigator.vibrate(12); this.setState({katHover: k.id}); }, 450); },
        onTouchEnd: () => clearTimeout(this._katLP),
        onContext: (e) => e.preventDefault(),
        onSchliessen: (e) => { e.stopPropagation(); this.setState({katHover: null}); },
        onEnter: () => { if (this._katTouch) return; clearTimeout(this._katT); this.setState({katHover: k.id}); },
        onLeave: () => { if (this._katTouch) return; clearTimeout(this._katT); this._katT = setTimeout(() => this.setState(s0 => s0.katHover === k.id ? {katHover: null} : null), 160); },
        offen: st.katHover === k.id && new Set(PRODUKTE.filter(p => k.id === 'alle' || p.cat === k.id).map(p => p.brand)).size > 1,
        mehrere: new Set(PRODUKTE.filter(p => k.id === 'alle' || p.cat === k.id).map(p => p.brand)).size > 1,
        hatMarke: k.id === st.cat && !!st.artMarke && st.artMarke !== 'alle',
        markeLabel: '· ' + (st.artMarke || ''),
        marken: (() => {
          const inKat = PRODUKTE.filter(p => k.id === 'alle' || p.cat === k.id);
          const ms = [...new Set(inKat.map(p => p.brand))].sort((a, b) => a.localeCompare(b, 'de'));
          const akt = k.id === st.cat ? (st.artMarke || 'alle') : null;
          return [{id: 'alle', label: 'Alle Hersteller', count: inKat.length}].concat(ms.map(m => ({id: m, label: m, count: inKat.filter(p => p.brand === m).length})))
            .map(h => ({label: h.label, count: String(h.count), bg: akt === h.id ? '#e5e7eb' : 'transparent', weight: akt === h.id ? 600 : 500,
              onClick: () => this.setState({cat: k.id, artMarke: h.id, katHover: null})}));
        })()
      })),
      spracheOptionen: [
        {code: 'de', flag: '🇩🇪', name: 'Deutsch'},
        {code: 'en', flag: '🇬🇧', name: 'English'},
        {code: 'fr', flag: '🇫🇷', name: 'Français'},
        {code: 'es', flag: '🇪🇸', name: 'Español'},
        {code: 'pt', flag: '🇵🇹', name: 'Português'}
      ].map(s => ({...s, label: s.flag + ' ' + s.name})),
      loginHinweisText: this.t('loginHinweis', 'Bitte Benutzer wählen und PIN eingeben. Rechte kommen aus der Benutzerverwaltung.'),
      anmeldenLabel: this.t('anmelden', 'Anmelden'),
      pinVergessenLabel: this.t('pinVergessen', 'PIN vergessen?'),
      alsRootLabel: this.t('alsRoot', 'Als root einloggen'),
      rootHinweisText: this.t('rootHinweis', 'Systemzugang mit Vollzugriff — im Prototyp ohne PIN. Demo-PIN für Mitarbeitende: 1234.'),
      loginOffen: !st.angemeldet,
      loginPinAnzeige: (st.loginPin || '').replace(/./g, '•') || '– – – –',
      loginFehler: st.loginFehler || '',
      hatLoginFehler: !!st.loginFehler,
      zeigeLogin: !st.pinVergessenOffen,
      pinVergessenOffen: !!st.pinVergessenOffen,
      pvGesendet: !!st.pvGesendet,
      pvNichtGesendet: !st.pvGesendet,
      pvName: st.pvName || '',
      pvSendenDeaktiviert: !st.pvBenutzerId,
      pvSendenBg: st.pvBenutzerId ? '#101010' : '#e5e7eb', pvSendenFg: st.pvBenutzerId ? '#FFFFFF' : '#545b66',
      onPinVergessen: () => this.setState({pinVergessenOffen: true, pvGesendet: false, pvBenutzerId: null}),
      onPinVergessenZurueck: () => this.setState({pinVergessenOffen: false, pvGesendet: false, pvBenutzerId: null}),
      pvBenutzer: (st.benutzer || BENUTZER_START).filter(b => !b.system && !(st.benutzerAus || {})[b.id]).map(b => ({
        name: b.name, kuerzel: b.kuerzel, rolle: b.rolle,
        border: st.pvBenutzerId === b.id ? '#101010' : '#e5e7eb',
        bg: st.pvBenutzerId === b.id ? '#f4f4f4' : '#FFFFFF',
        kBg: st.pvBenutzerId === b.id ? '#101010' : '#e5e7eb', kFg: st.pvBenutzerId === b.id ? '#FFFFFF' : '#101010',
        fg: '#101010',
        onClick: () => this.setState({pvBenutzerId: b.id, pvName: b.name})
      })),
      onPvSenden: () => { if (st.pvBenutzerId) this.setState({pvGesendet: true}); },
      loginUser: (st.loginUser || 'u1'),
      loginAusgewaehltName: (() => { const u = (st.benutzer || BENUTZER_START).find(x => x.id === (st.loginUser || 'u1')); return u ? u.name : ''; })(),
      loginAusgewaehltRolle: (() => { const u = (st.benutzer || BENUTZER_START).find(x => x.id === (st.loginUser || 'u1')); return u ? u.rolle : ''; })(),
      loginBenutzer: (st.benutzer || BENUTZER_START).filter(b => !b.system && !(st.benutzerAus || {})[b.id]).map(b => {
        const aktiv = (st.loginUser || 'u1') === b.id;
        return {
          name: b.name, kuerzel: b.kuerzel, rolle: b.rolle,
          bg: aktiv ? '#f4f4f4' : '#FFFFFF',
          border: aktiv ? '#101010' : '#e5e7eb',
          kBg: aktiv ? '#101010' : '#e5e7eb', kFg: aktiv ? '#FFFFFF' : '#101010',
          fg: '#101010',
          onClick: () => this.setState(s0 => {
            const erlaubt = (b.kassen && b.kassen.length) ? b.kassen : s0.kassen.map(k => k.id);
            const frei = erlaubt.filter(id => !(s0.kassenAus || {})[id]);
            return {loginUser: b.id, loginPin: '', loginFehler: null, loginKasseOffen: false,
              aktiveKasseId: erlaubt.includes(s0.aktiveKasseId) ? s0.aktiveKasseId : (frei[0] || erlaubt[0] || s0.aktiveKasseId)};
          })
        };
      }),
      loginTasten: ['1','2','3','4','5','6','7','8','9','C','0','←'].map(t => ({
        label: t,
        onClick: () => {
          if (t === 'C') return this.setState({loginPin: '', loginFehler: null});
          if (t === '←') return this.setState(s2 => ({loginPin: (s2.loginPin || '').slice(0, -1), loginFehler: null}));
          this.setState(s2 => ({loginPin: ((s2.loginPin || '') + t).slice(0, st.pinLaenge || 4), loginFehler: null}));
        }
      })),
      loginKasseId: (st.kassen.find(k => k.id === st.aktiveKasseId) || {id: '—'}).id,
      loginKasseOrt: (st.kassen.find(k => k.id === st.aktiveKasseId) || {ort: ''}).ort,
      loginKasseOffen: !!st.loginKasseOffen,
      loginKassePfeil: st.loginKasseOffen ? '180deg' : '0deg',
      loginKasseBorder: st.loginKasseOffen ? '#101010' : '#e5e7eb',
      onLoginKasseMenu: () => this.setState(s0 => ({loginKasseOffen: !s0.loginKasseOffen})),
      onLoginKasseZu: () => this.setState({loginKasseOffen: false}),
      loginKassen: st.kassen.filter(k => {
        const u = (st.benutzer || BENUTZER_START).find(x => x.id === (st.loginUser || 'u1'));
        return !u || !u.kassen || !u.kassen.length || u.kassen.includes(k.id);
      }).map(k => {
        const gesperrt = !!(st.kassenAus || {})[k.id];
        const a = k.id === st.aktiveKasseId;
        return {id: k.id, ort: gesperrt ? 'Deaktiviert · ' + k.ort : k.ort, gesperrt,
          bg: a ? '#e5e7eb' : 'transparent', weight: a ? 700 : 600, haken: a ? '✓' : '', dot: gesperrt ? '#c9ccd1' : a ? '#EF3D2F' : '#32C995',
          cursor: gesperrt ? 'not-allowed' : 'pointer', opacity: gesperrt ? .55 : 1,
          onClick: () => { if (!gesperrt) this.setState({aktiveKasseId: k.id, loginFehler: null, loginKasseOffen: false}); }};
      }),
      onLoginAnmelden: () => {
        const pin = st.loginPin || '';
        const liste = st.benutzer || BENUTZER_START;
        const u = liste.find(b => b.id === (st.loginUser || 'u1'));
        const root = liste.find(b => b.system) || BENUTZER_START[0];
        if (!u || (st.benutzerAus || {})[u.id]) return this.setState({loginFehler: 'Benutzer ist deaktiviert.', loginPin: ''});
        const echt = u.pin && /^\d{4}$/.test(u.pin) ? u.pin : '1234';
        if (pin === echt && u.kassen && u.rolle !== 'Admin' && !u.kassen.includes(st.aktiveKasseId)) return this.setState({loginFehler: u.name + ' ist ' + st.aktiveKasseId + ' nicht zugewiesen.', loginPin: ''});
        if (pin === echt) return this.setState({angemeldet: u, loginPin: '', loginFehler: null, korbOffen: false, view: this.startView(u)});
        if (pin === (root.pin || '1337')) return this.setState({angemeldet: root, loginPin: '', loginFehler: null, korbOffen: false, view: this.startView(root)});
        this.setState({loginFehler: 'PIN nicht erkannt. Demo-PIN: 1234', loginPin: ''});
      },
      onLoginRoot: () => this.setState({angemeldet: (st.benutzer || BENUTZER_START).find(b => b.system) || BENUTZER_START[0], loginPin: '', loginFehler: null, korbOffen: false, view: 'dashboard'}),
      offlineModus: !!st.offlineModus,
      istRoot: !!(st.angemeldet && st.angemeldet.system),
      modusLabel: st.offlineModus ? 'Offline-Modus' : 'Online-Modus',
      modusFarbe: st.offlineModus ? '#9b1520' : '#0d5f38',
      modusSchalterBg: st.offlineModus ? '#9b1520' : '#0d5f38',
      modusSchalterPos: st.offlineModus ? 'flex-start' : 'flex-end',
      onModusToggle: () => this.setState(s => ({offlineModus: !s.offlineModus})),
      onAbmelden: () => this.setState({angemeldet: null, loginPin: '', loginFehler: null, view: 'kasse', gesperrt: null}),
      gesperrtOffen: !!(st.gesperrt && st.angemeldet),
      gesperrtSeit: st.gesperrt ? new Date(st.gesperrt).toLocaleTimeString('de-DE', {hour: '2-digit', minute: '2-digit'}) + ' Uhr' : '',
      sperrPinAnzeige: (st.sperrPin || '').replace(/./g, '•') || '– – – –',
      sperrFehler: st.sperrFehler || '',
      sperrFehlerSicht: st.sperrFehler ? 'visible' : 'hidden',
      onSperren: () => this.setState({gesperrt: Date.now(), sperrPin: '', sperrFehler: null, eigenePinOffen: false}),
      sperrTasten: ['1','2','3','4','5','6','7','8','9','C','0','←'].map(t => ({
        label: t,
        onClick: () => this.setState(s => {
          const p = s.sperrPin || '';
          if (t === 'C') return {sperrPin: '', sperrFehler: null};
          if (t === '←') return {sperrPin: p.slice(0, -1)};
          return p.length >= 4 ? null : {sperrPin: p + t, sperrFehler: null};
        })
      })),
      onEntsperren: this._entsperren = () => {
        const st = this.state;
        const u = st.angemeldet || {};
        const echt = u.system ? (u.pin || '1337') : (u.pin && /^\d{4}$/.test(u.pin) ? u.pin : '1234');
        if ((st.sperrPin || '') === echt) return this.setState({gesperrt: null, sperrPin: '', sperrFehler: null});
        this.setState({sperrFehler: 'PIN nicht erkannt. Demo-PIN: 1234', sperrPin: ''});
      },
      onSperreBenutzerWechsel: () => this.setState({gesperrt: null, sperrPin: '', sperrFehler: null, angemeldet: null, loginPin: '', loginFehler: null, view: 'kasse'}),
      avatarCursor: st.navOffen ? 'default' : 'pointer',
      onAvatarKlick: st.navOffen ? (() => {}) : (() => this.setState({angemeldet: null, loginPin: '', loginFehler: null, view: 'kasse'})),
      eigenePinOffen: !!st.eigenePinOffen,
      eigenePinWert: st.eigenePinWert || '',
      eigenePinBestWert: st.eigenePinBestWert || '',
      eigenePinHinweis: !!st.eigenePinHinweis,
      eigenePinHinweisText: st.eigenePinHinweis || '',
      onEigenePinMenu: () => this.setState(s => ({eigenePinOffen: !s.eigenePinOffen, eigenePinWert: '', eigenePinBestWert: '', eigenePinHinweis: ''})),
      onEigenePinClose: () => this.setState({eigenePinOffen: false, eigenePinWert: '', eigenePinBestWert: '', eigenePinHinweis: ''}),
      onEigenePinWert: (e) => this.setState({eigenePinWert: e.target.value.replace(/\D/g, '').slice(0, st.pinLaenge || 4)}),
      onEigenePinBestWert: (e) => this.setState({eigenePinBestWert: e.target.value.replace(/\D/g, '').slice(0, st.pinLaenge || 4)}),
      onEigenePinSpeichern: () => {
        if ((st.eigenePinWert || '').length !== (st.pinLaenge || 4)) return this.setState({eigenePinHinweis: 'PIN muss ' + (st.pinLaenge || 4) + '-stellig sein.'});
        if (st.eigenePinWert !== st.eigenePinBestWert) return this.setState({eigenePinHinweis: 'PINs stimmen nicht überein.'});
        const eigeneId = st.angemeldet && st.angemeldet.id;
        this.setState(s => ({
          benutzer: s.benutzer.map(x => x.id !== eigeneId ? x : Object.assign({}, x, {pin: '••••'})),
          angemeldet: s.angemeldet ? Object.assign({}, s.angemeldet, {pin: '••••'}) : s.angemeldet,
          eigenePinOffen: false, eigenePinWert: '', eigenePinBestWert: '', eigenePinHinweis: ''
        }));
      },
      userKuerzel: (st.angemeldet || {}).kuerzel || 'MA',
      userName: ((st.angemeldet || {}).name || 'Marko').split(' ')[0],
      userRolle: (st.angemeldet || {}).rolle || 'Verkauf',
      userRechteText: (() => { const r = this.meineRechte(); const n = Object.keys(r).filter(k => r[k]).length; return n + ' von ' + RECHTE.length + ' Rechten aus der Benutzerverwaltung'; })(),
      meineRechteListe: (() => { const r = this.meineRechte(); return RECHTE.map(x => ({label: x[0], erlaubt: !!r[x[0]], farbe: r[x[0]] ? '#9FD9BE' : '#646b76', zeichen: r[x[0]] ? '✓' : '—'})); })(),
      onCsvExport: () => { this.csvArtikel(); },
      rubrikOffen: !!st.rubrikOffen,
      onRubrikOeffnen: () => this.setState({rubrikOffen: true, rubrikNeu: ''}),
      onRubrikClose: () => this.setState({rubrikOffen: false, rubrikEdit: null}),
      rubrikNeu: st.rubrikNeu || '',
      onRubrikNeuInput: (e) => this.setState({rubrikNeu: e.target.value}),
      rubrikNeuUst: UST_SAETZE.map(u => {
        const gewaehlt = (st.rubrikNeuMwst == null ? 19 : st.rubrikNeuMwst) === u.wert;
        return {
          label: u.label,
          bg: gewaehlt ? '#101010' : '#FFFFFF',
          fg: gewaehlt ? '#FFFFFF' : '#101010',
          border: gewaehlt ? '#101010' : '#e5e7eb',
          weight: gewaehlt ? 600 : 500,
          onClick: () => this.setState({rubrikNeuMwst: u.wert})
        };
      }),
      onRubrikAnlegen: () => {
        const name = (st.rubrikNeu || '').trim();
        if (!name) return;
        const id = name.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || ('rubrik-' + Date.now());
        const liste = this.kats().slice();
        if (liste.some(k => k.id === id)) return this.setState({rubrikNeu: ''});
        liste.push({id, label: name, mwst: st.rubrikNeuMwst == null ? 19 : st.rubrikNeuMwst});
        this.setState({kats: liste, rubrikNeu: '', rubrikNeuMwst: 19});
      },
      rubrikOptionen: st.katOptionen || KAT_OPTIONEN_START,
      rubrikListe: this.kats().filter(k => k.id !== 'alle').map(k => {
        const anzahl = PRODUKTE.filter(p => p.cat === k.id).length;
        const bearbeiten = st.rubrikEdit === k.id;
        const mwst = k.mwst == null ? 19 : k.mwst;
        return {
          label: k.label, anzahl: anzahl + ' Artikel · ' + mwst + ' % USt',
          ustEntwurf: UST_SAETZE.map(u => {
            const aktuell = bearbeiten ? (st.rubrikMwst == null ? mwst : st.rubrikMwst) : mwst;
            const gewaehlt = aktuell === u.wert;
            return {
              label: u.wert + ' %',
              bg: gewaehlt ? '#101010' : '#FFFFFF',
              fg: gewaehlt ? '#FFFFFF' : '#101010',
              border: gewaehlt ? '#101010' : '#e5e7eb',
              weight: gewaehlt ? 600 : 500,
              onClick: () => this.setState({rubrikMwst: u.wert})
            };
          }),
          leer: anzahl === 0, belegt: anzahl > 0,
          bearbeiten, ruhend: !bearbeiten,
          entwurf: bearbeiten ? (st.rubrikName != null ? st.rubrikName : k.label) : k.label,
          onEdit: () => this.setState({rubrikEdit: k.id, rubrikName: k.label, rubrikMwst: mwst}),
          onInput: (e) => this.setState({rubrikName: e.target.value}),
          onSpeichern: () => {
            const name = (st.rubrikName || '').trim();
            if (!name) return this.setState({rubrikEdit: null, rubrikName: null});
            this.setState({
              kats: this.kats().map(x => x.id === k.id ? {id: x.id, label: name, mwst: st.rubrikMwst == null ? mwst : st.rubrikMwst} : x),
              rubrikEdit: null, rubrikName: null, rubrikMwst: null
            });
          },
          onAbbrechen: () => this.setState({rubrikEdit: null, rubrikName: null, rubrikMwst: null}),
          onLoeschen: () => {
            if (anzahl > 0) return;
            this.setState({kats: this.kats().filter(x => x.id !== k.id), cat: st.cat === k.id ? 'alle' : st.cat});
          },
          optionenOffen: st.rubrikOptId === k.id,
          onOptionen: () => this.setState({rubrikOptId: st.rubrikOptId === k.id ? null : k.id, rubrikEdit: null}),
          optionenAnzahl: ((st.katOptionen || KAT_OPTIONEN_START)[k.id] || []).length + ' Auswahlgruppen',
          gruppen: ((st.katOptionen || KAT_OPTIONEN_START)[k.id] || []).map(g => ({
            name: g.name,
            werte: g.werte.map(w => ({
              label: w,
              onEntfernen: () => this.setState(s2 => {
                const alle = Object.assign({}, s2.katOptionen || KAT_OPTIONEN_START);
                alle[k.id] = (alle[k.id] || []).map(x => x.name !== g.name ? x : {name: x.name, werte: x.werte.filter(y => y !== w)});
                return {katOptionen: alle};
              })
            })),
            eingabe: (st.wertEingabe || {})[k.id + '|' + g.name] || '',
            onEingabe: (e) => { const v = e.target.value; this.setState(s2 => ({wertEingabe: Object.assign({}, s2.wertEingabe, {[k.id + '|' + g.name]: v})})); },
            onWertHinzu: () => {
              const v = ((st.wertEingabe || {})[k.id + '|' + g.name] || '').trim();
              if (!v) return;
              this.setState(s2 => {
                const alle = Object.assign({}, s2.katOptionen || KAT_OPTIONEN_START);
                alle[k.id] = (alle[k.id] || []).map(x => x.name !== g.name ? x : {name: x.name, werte: x.werte.indexOf(v) > -1 ? x.werte : x.werte.concat([v])});
                return {katOptionen: alle, wertEingabe: Object.assign({}, s2.wertEingabe, {[k.id + '|' + g.name]: ''})};
              });
            },
            onGruppeLoeschen: () => this.setState(s2 => {
              const alle = Object.assign({}, s2.katOptionen || KAT_OPTIONEN_START);
              alle[k.id] = (alle[k.id] || []).filter(x => x.name !== g.name);
              return {katOptionen: alle};
            })
          })),
          keineGruppen: ((st.katOptionen || KAT_OPTIONEN_START)[k.id] || []).length === 0,
          gruppeNeu: (st.gruppeEingabe || {})[k.id] || '',
          onGruppeNeu: (e) => { const v = e.target.value; this.setState(s2 => ({gruppeEingabe: Object.assign({}, s2.gruppeEingabe, {[k.id]: v})})); },
          onGruppeHinzu: () => {
            const name = ((st.gruppeEingabe || {})[k.id] || '').trim();
            if (!name) return;
            this.setState(s2 => {
              const alle = Object.assign({}, s2.katOptionen || KAT_OPTIONEN_START);
              const vorhanden = alle[k.id] || [];
              if (vorhanden.some(x => x.name.toLowerCase() === name.toLowerCase())) return {gruppeEingabe: Object.assign({}, s2.gruppeEingabe, {[k.id]: ''})};
              alle[k.id] = vorhanden.concat([{name: name, werte: []}]);
              return {katOptionen: alle, gruppeEingabe: Object.assign({}, s2.gruppeEingabe, {[k.id]: ''})};
            });
          }
        };
      }),
      features: FEATURES,
      featureLeiste: this.props.featureLeiste ?? true,
      produkte,
      suche: st.suche,
      hatSuche: !!(st.suche || '').trim(),
      onSucheLoeschen: () => this.setState({suche: ''}),
      onSuche: (e) => {
        const v = e.target.value;
        const code = v.trim().toLowerCase();
        const treffer = code.length > 4 ? PRODUKTE.find(p => p.sku.toLowerCase() === code) : null;
        if (treffer) return this.setState({suche: '', detailId: treffer.id, varFarbe: null, varGroesse: null});
        this.setState({suche: v});
      },
      onSucheTaste: (e) => {
        if (e.key !== 'Enter') return;
        const q = (this.state.suche || '').trim().toLowerCase();
        if (!q) return;
        const liste = PRODUKTE.filter(p => (p.name + ' ' + p.brand + ' ' + p.type + ' ' + p.sku).toLowerCase().includes(q));
        if (liste.length) this.setState({detailId: liste[0].id, suche: '', varFarbe: null, varGroesse: null});
      },
      trefferText: produkte.length + ' Artikel',
      warenkorb,
      korbOffen: st.korbOffen,
      korbZu: !st.korbOffen,
      korbLabelAnzeige: phone ? 'none' : 'inline',
      fussPadding: phone ? '8px 14px' : '0 28px',
      fussTextAnzeige: phone ? 'none' : 'inline',
      onKorbHintergrund: (e) => { if (tablet && e.target === e.currentTarget) this.setState({korbOffen: false}); },
      korbBreite: st.korbOffen ? (tablet ? '100%' : '380px') : '0px',
      korbPosition: (tablet && st.korbOffen) ? 'fixed' : 'static',
      korbInset: (tablet && st.korbOffen) ? '0' : 'auto',
      korbZIndex: (tablet && st.korbOffen) ? 40 : 'auto',
      korbPadding: st.korbOffen ? (phone ? '12px' : tablet ? '12px 12px 12px max(12px, calc(100% - 420px))' : '18px 18px 18px 0') : '0px',
      korbBg: (tablet && st.korbOffen) ? 'rgba(5,7,10,.42)' : 'transparent',
      onKorbToggle: () => this.setState(s => ({korbOffen: !s.korbOffen})),
      fussKorbSichtbar: true,
      onKorbOeffnen: () => this.setState({korbOffen: true, view: 'kasse'}),
      leer: warenkorb.length === 0,
      anzahl,
      nettoStr: EUR(netto),
      mwstStr: EUR(brutto - netto),
      gesamtStr: EUR(brutto),
      korbHatRabatt: kdRabatt > 0 && warenkorb.length > 0,
      ...(() => {
        const AGS = {Entwurf: ['#eef0f2', '#303640'], Versendet: ['#fdebc8', '#6b4200'], Angenommen: ['#dcf3e6', '#0d5f38'], Abgelehnt: ['#fde0e2', '#9b1520'], Abgelaufen: ['#eef0f2', '#545b66']};
        const liste = (st.angebote || ANGEBOTE_START).filter(a => a.herkunft === 'kasse');
        const darf = !!this.meineRechte()['Angebote in Kasse übernehmen'];
        return {
          kasseAgAnzahl: String(liste.length),
          kasseAgSichtbar: liste.length > 0,
          kasseAgOffen: !!st.kasseAgOffen,
          onKasseAgOeffnen: () => this.setState({kasseAgOffen: true}),
          onKasseAgZu: () => this.setState({kasseAgOffen: false}),
          kasseAgKorbVoll: warenkorb.length > 0,
          kasseAgListe: liste.map(a => {
            const k = KUNDEN.find(x => x.nr === a.kundeNr);
            const summe = a.pos.reduce((s, p) => s + p.menge * p.preis * (1 - (p.rabatt || 0) / 100), 0);
            const stil = AGS[a.status] || AGS.Entwurf;
            return {
              nr: a.nr, kunde: k ? k.name : a.kundeNr === 'BAR' ? 'Barkunde' + (a.barName ? ' · ' + a.barName : '') : 'Kein Kunde gewählt', info: a.datum + (a.zeit ? ', ' + a.zeit + ' Uhr' : '') + ' · ' + (a.kasse || 'Kasse') + ' · ' + a.pos.length + ' Pos. · ' + a.pos.reduce((s, p) => s + p.menge, 0) + ' Stk.',
              summe: EUR(summe), status: a.status, statusBg: stil[0], statusFg: stil[1],
              darfLaden: darf,
              onLaden: () => this.setState(this.angebotZuKorb(a)),
              onOeffnen: () => this.setState({kasseAgOffen: false, kasseToast: null, korbOffen: tablet ? false : st.korbOffen, view: 'angebote', agEdit: JSON.parse(JSON.stringify(a)), agArtSuche: '', agVorschau: false})
            };
          })
        };
      })(),
      kasseAktiv: st.view === 'kasse',
      zurKasseBg: st.view === 'kasse' ? '#EF3D2F' : 'transparent',
      zurKasseBorder: st.view === 'kasse' ? '#EF3D2F' : '#EF3D2F',
      onZurKasse: () => this.setState(this.zurKassePatch()),
      onFussKorb: () => st.view === 'kasse' ? this.setState(s => ({korbOffen: !s.korbOffen})) : this.setState(Object.assign(this.zurKassePatch(), {korbOffen: true})),
      kasseToastDa: !!st.kasseToast,
      kasseToastText: st.kasseToast ? st.kasseToast.text : '',
      onKasseToastOeffnen: () => { const nr = st.kasseToast && st.kasseToast.nr; const a = (st.angebote || ANGEBOTE_START).find(x => x.nr === nr); clearTimeout(this._ktT); this.setState(a ? {kasseToast: null, korbOffen: tablet ? false : st.korbOffen, view: 'angebote', agEdit: JSON.parse(JSON.stringify(a)), agArtSuche: '', agVorschau: false} : {kasseToast: null}); },
      onKasseToastZu: () => { clearTimeout(this._ktT); this.setState({kasseToast: null}); },
      korbAngebotSichtbar: warenkorb.length > 0 && !!this.meineRechte()['Angebote erstellen & versenden'],
      onKorbAlsAngebot: () => {
        if (!warenkorb.length) return;
        const alle = st.angebote || ANGEBOTE_START;
        const nr = SHOP_NR('angebotPraefix', 'AG') + String(alle.reduce((m, a) => Math.max(m, parseInt(a.nr.slice(-4), 10) || 0), 0) + 1).padStart(4, '0');
        const dstr = d => d.toLocaleDateString('de-DE', {day: '2-digit', month: '2-digit', year: 'numeric'});
        const heute = new Date(), bis = new Date(); bis.setDate(bis.getDate() + (parseInt(SHOP_LADEN().daten.angebotGueltig, 10) || 30));
        const pos = warenkorb.map(w => {
          const t = w.key.split('::');
          const pr = PRODUKTE.find(x => x.id === w.id);
          const variante = [t[1], t[2]].filter(Boolean).join(' · ');
          return {pid: w.id, name: pr.brand + ' ' + pr.name + (variante ? ' (' + variante + ')' : ''), sku: pr.sku + (t[3] ? ' · SN ' + t[3] : ''), menge: w.qty, preis: w.listPrice, rabatt: kdRabatt, korbKey: w.key, posNotiz: w.hatNotiz ? w.notiz : ''};
        });
        const notizen = warenkorb.filter(w => w.hatNotiz).map(w => w.title + ': ' + w.notiz.trim());
        const ag = {nr, kundeNr: kunde ? kunde.nr : 'BAR', zeit: heute.toLocaleTimeString('de-DE', {hour: '2-digit', minute: '2-digit'}), datum: dstr(heute), gueltig: dstr(bis), status: 'Entwurf',
          bearbeiter: (st.angemeldet || {}).name || 'Marko Ahrens', notiz: notizen.join(' · '), pos, herkunft: 'kasse', kasse: st.aktiveKasseId || 'Verkaufsraum'};
        this.setState(s => ({angebote: [ag].concat(s.angebote || ANGEBOTE_START), carts: Object.assign({}, s.carts, {[s.aktiveKasseId]: {}}), kundeNr: null, posNotiz: {}, notizOffen: null, korbZeileOffen: null, paddelVorgabe: null, paddelVorgabeAg: null,
          kasseToast: {text: 'Angebot ' + nr + ' gespeichert' + (kunde ? ' für ' + kunde.name : ' als Barkunde') + ' — abrufbar unter „Angebote aus der Kasse“.', nr}}));
        clearTimeout(this._ktT); this._ktT = setTimeout(() => this.setState({kasseToast: null}), 6000);
      },
      korbListenStr: EUR(listenBrutto),
      korbRabattLabel: 'Kundenrabatt ' + kdRabatt + ' %',
      korbRabattStr: '− ' + EUR(listenBrutto - brutto),
      detail,
      detailOffen: !!detail,
      onDetailClose: () => this.setState({detailId: null}),
      stop: (e) => e.stopPropagation(),
      zahlungOffen: !!st.zahlung,
      zahlungArt: st.zahlung === 'bar' ? 'Barzahlung' : st.zahlung === 'beleg' ? 'Rechnung' : 'Kartenzahlung',
      zahlungTitel: st.zahlung === 'bar' ? 'Bar kassieren' : st.zahlung === 'beleg' ? 'Auf Rechnung abschließen' : 'Karte bereithalten',
      zahlungStatus: ['TSE-Signatur erstellt', 'Beleg vorbereitet · Belegausgabepflicht', 'Audit-Protokoll aktualisiert'],
      korbZahlStart: !(st.zahlWahl && anzahl),
      korbZahlWahl: !!(st.zahlWahl && anzahl),
      bezahlenBg: anzahl ? '#EF3D2F' : '#9aa0a8',
      onBezahlen: () => anzahl && this.setState({zahlWahl: true}),
      onZahlWahlZu: () => this.setState({zahlWahl: false}),
      onKarte: () => anzahl && this.setState({zahlung: 'karte', zahlWahl: false}),
      onBar: () => anzahl && this.setState({zahlung: 'bar', barGegeben: '', zahlWahl: false}),
      ...(() => {
        const bar = st.zahlung === 'bar';
        const zuZahlen = SHOP_LADEN().daten.barRundung ? Math.round(brutto * 20) / 20 : Math.round(brutto * 100) / 100;
        const roh = (st.barGegeben || '').trim();
        const wert = !roh ? NaN : roh.includes(',') ? parseFloat(roh.replace(/\./g, '').replace(',', '.')) : /^\d+\.\d{1,2}$/.test(roh) ? parseFloat(roh) : parseFloat(roh.replace(/\./g, ''));
        const ok = !isNaN(wert);
        const diff = ok ? Math.round((wert - zuZahlen) * 100) / 100 : null;
        const fehlt = ok && diff < 0;
        const fmt = v => v.toFixed(2).replace('.', ',');
        const vorschlag = [zuZahlen];
        [5, 10, 20, 50, 100, 200, 500].forEach(st2 => { const v = Math.ceil(zuZahlen / st2) * st2; if (v > zuZahlen && !vorschlag.includes(v) && vorschlag.length < 5) vorschlag.push(v); });
        return {
          barAktiv: bar,
          barRef: el => { if (el && !el._fokus) { el._fokus = true; setTimeout(() => el.focus(), 0); } },
          barGegeben: st.barGegeben || '',
          onBarGegeben: e => this.setState({barGegeben: e.target.value.replace(/[^0-9,.]/g, '')}),
          onBarKey: e => { if (e.key === 'Enter' && !(isNaN(wert) || diff < 0)) { e.preventDefault(); this.renderVals().onAbschluss(); } },
          barSchnell: vorschlag.map((v, i) => ({label: i === 0 ? 'Passend' : EUR(v), bg: ok && wert === v ? '#f4f4f4' : '#FFFFFF', rand: ok && wert === v ? '#101010' : '#e5e7eb', onClick: () => this.setState({barGegeben: fmt(v)})})),
          barRand: fehlt ? '#EF3D2F' : '#101010',
          barRestLabel: !ok ? 'Rückgeld' : fehlt ? 'Fehlt noch' : 'Rückgeld',
          barRestStr: !ok ? '—' : EUR(Math.abs(diff)),
          barRestBg: fehlt ? '#fdecea' : ok ? '#e7f7f0' : '#f4f4f4',
          barRestFg: fehlt ? '#9b1520' : ok ? '#0d5f38' : '#545b66',
          barSperre: bar && (!ok || fehlt),
          abschlussBg: bar && (!ok || fehlt) ? '#9aa0a8' : '#EF3D2F'
        };
      })(),
      onBeleg: () => anzahl && this.setState({zahlung: 'beleg', zahlWahl: false}),
      onZahlungClose: () => this.setState({zahlung: null}),
      ...(() => {
        const rp = st.zahlung === 'beleg' ? this.rechnungPaddel(st) : [];
        const ids = rp.flatMap(x => x.ids);
        const ref = 'Rechnung ' + this.rechnungNr(st);
        const log = this.qrLogFuer(st, ref);
        return {rgQrDrucker: QR_DRUCKER.name.split(' · ')[0], rgPaddelHinweis: ids.length > 0, rgRef: ref,
          rgQrLabel: log.length ? 'Nachdrucken' : 'QR-Etiketten drucken',
          rgQrLog: log.length ? 'Gedruckt ' + log[0].zeit + ' · ' + log[0].benutzer : 'Noch nicht gedruckt',
          onRgQr: () => this.zeigeEtiketten('Paddel · ' + ref, rp.flatMap(x => x.ids.map(c => ({kopf: x.p.brand, name: x.p.name, art: 'Paddel-ID · ' + ref, code: c}))), ref), rgPaddelIds: ids, rgPaddelTitel: ids.length === 1 ? '1 Paddel-ID' : ids.length + ' Paddel-IDs',
          ...(() => {
            const korb = this.korbVon(st);
            const vergeben = new Set(Object.keys(korb).map(k => k.split('::')[3]).filter(Boolean));
            const boote = Object.keys(korb).flatMap(k => {
              const t = k.split('::'); const p = PRODUKTE.find(x => x.id === t[0]);
              if (!p) return [];
              if (t[3]) return [{p, sn: t[3]}];
              if (!(SERIEN[p.id] || []).length) return [];
              return this.serienFrei(p.id).filter(x => !vergeben.has(x.sn)).slice(0, korb[k]).map(x => { vergeben.add(x.sn); return {p, sn: x.sn}; });
            });
            const bRef = st.zahlung === 'beleg' ? ref : 'Beleg ' + SHOP_NR('belegPraefix', 'B') + String(419 + (st.belegZaehler || 0)).padStart(4, '0');
            const bLog = this.qrLogFuer(st, 'Boote ' + bRef);
            return {zBooteHinweis: !!st.zahlung && boote.length > 0, zBooteSn: boote.map(b => b.sn),
              zBooteTitel: boote.length === 1 ? '1 Boot · QR-Etikett mit Seriennummer' : boote.length + ' Boote · QR-Etiketten mit Seriennummer',
              zBooteLabel: bLog.length ? 'Nachdrucken' : 'QR-Etiketten drucken',
              zBooteLog: bLog.length ? 'Gedruckt ' + bLog[0].zeit + ' · ' + bLog[0].benutzer : 'Noch nicht gedruckt',
              onBooteQr: () => this.zeigeEtiketten('Boote · ' + bRef, boote.map(b => ({kopf: b.p.brand, name: b.p.name, art: 'Seriennummer', code: b.sn})), 'Boote ' + bRef)};
          })()};
      })(),
      onAbschluss: () => { const belegQ = dokQuery(); this.setState(s2 => {
        const korb = this.korbVon(s2);
        const istRg = s2.zahlung === 'beleg';
        const rgPaddel = istRg ? this.rechnungPaddel(s2) : [];
        const rgIds = {}; rgPaddel.forEach(x => { rgIds[x.k] = x.ids; });
        const kunde = this.kunden().find(k => k.nr === s2.kundeNr);
        const beleg = SHOP_NR('belegPraefix', 'B') + String(419 + (s2.belegZaehler || 0)).padStart(4, '0');
        const weg = Object.assign({}, s2.snVerkauft);
        const neue = [];
        Object.keys(korb).forEach(k => {
          const teile = k.split('::');
          const sn = teile[3];
          if (!sn) return;
          const p = PRODUKTE.find(x => x.id === teile[0]);
          const info = (SERIEN[teile[0]] || []).find(x => x.sn === sn) || {};
          weg[sn] = true;
          neue.push({
            id: 'vb-' + sn,
            modell: p.brand + ' ' + p.name, typ: p.type, sn: sn,
            kunde: kunde ? kunde.name : 'Laufkunde', kundeTyp: kunde ? kunde.typ : 'Privat',
            datum: DTX('27.08.2026'), preis: Math.round(p.price * rf * 100) / 100, beleg: beleg, garantie: DTX('27.08.2028'),
            historie: (SN_HISTORIE[sn] || []).concat([{
              datum: DTX('27.08.2026'), typ: 'Zugang', titel: 'Verkauf & Übergabe',
              text: 'Beleg ' + beleg + ' · ' + (kunde ? kunde.name : 'Laufkunde') + ' · ' + s2.aktiveKasseId,
              kosten: EUR(Math.round(p.price * rf * 100) / 100)
            }])
          });
        });
        const kaufExtra = Object.assign({}, s2.kaufExtra);
        const rf = kunde && kunde.rabatt ? (100 - kunde.rabatt) / 100 : 1;
        if (kunde) {
          const zeilen = Object.keys(korb).map(k => {
            const teile = k.split('::');
            const p = PRODUKTE.find(x => x.id === teile[0]);
            const menge = korb[k];
            return {
              datum: DTX('27.08.2026'), beleg: beleg,
              produkt: p.brand + ' ' + p.name + (teile[3] ? ' · SN ' + teile[3] : '') + (rgIds[k] ? ' · ' + rgIds[k].join(', ') : ''),
              menge: menge, betrag: Math.round(p.price * rf * 100) / 100 * menge,
              notiz: (s2.posNotiz || {})[k] || ''
            };
          });
          if (zeilen.length) kaufExtra[kunde.nr] = zeilen.concat(kaufExtra[kunde.nr] || []);
        }
        return Object.assign({
          zahlung: null,
          dokVorschau: istRg ? 'rechnung' : 'beleg',
          dokQ: belegQ,
          belegZaehler: (s2.belegZaehler || 0) + 1,
          rechnungZaehler: (s2.rechnungZaehler || 0) + (istRg ? 1 : 0),
          paddelVorgabe: null, paddelVorgabeAg: null,
          etikett: rgPaddel.length && !this.qrLogFuer(s2, 'Rechnung ' + rgPaddel[0].nr).length ? {ref: 'Rechnung ' + rgPaddel[0].nr, titel: 'Paddel · Rechnung ' + rgPaddel[0].nr, items: rgPaddel.flatMap(x => x.ids.map(c => ({kopf: x.p.brand, name: x.p.name, art: 'Paddel-ID · Rechnung ' + x.nr, code: c})))} : s2.etikett,
          kaufExtra: kaufExtra,
          posNotiz: {},
          notizOffen: null,
          snVerkauft: weg,
          vbExtra: neue.concat(s2.vbExtra || []),
          vbOffen: neue.length ? neue[0].id : s2.vbOffen
        }, this.korbSetzen(s2, {}));
      }); }
    };

    ['kennzahlen', 'txKennzahlen', 'kundenKennzahlen', 'berichtKpi', 'bestandKennzahlen'].forEach(key => {
      vals[key] = vals[key].map(z => Object.assign({}, z, {
        onOpen: () => this.setState({kachel: {
          titel: z.label,
          wert: z.value,
          hinweis: (z.detail && z.detail.hinweis) || z.hint || z.trend || '',
          zeilen: (z.detail && z.detail.zeilen.length ? z.detail.zeilen : [{k: 'Keine Einzelposten', v: '—'}]),
          fuss: (z.detail && z.detail.fuss) || ''
        }})
      }));
    });

    const auf = st.dashAuf || {};
    const klapp = (key, n) => {
      const offen = !!auf[key];
      return {offen, mehr: n > 5, anzahl: (offen ? n : 5) + ' von ' + n, kurz: offen ? 'Weniger' : '+' + (n - 5), label: offen ? 'Weniger anzeigen' : (n - 5) + ' weitere anzeigen', pfeil: offen ? 'M6 15l6-6 6 6' : 'M6 9l6 6 6-6',
        onToggle: () => this.setState(s => ({dashAuf: Object.assign({}, s.dashAuf, {[key]: !(s.dashAuf || {})[key]})}))};
    };
    ['dashUe', 'dashHeuteTermine', 'dashHeuteAufgaben'].forEach(key => {
      const list = vals[key] || [];
      const k = klapp(key, list.length);
      vals[key + 'Klapp'] = k;
      vals[key + 'Anzahl'] = String(list.length);
      if (!k.offen && k.mehr) vals[key] = list.slice(0, 5);
    });
    if (vals.dashWoche) vals.dashWoche = vals.dashWoche.map((w, i) => {
      const t = w.termine || [], a = w.aufgaben || [];
      const k = klapp('woche' + i + (w.tag || ''), t.length + a.length);
      if (k.offen || !k.mehr) return Object.assign({}, w, {klapp: k});
      return Object.assign({}, w, {klapp: k, termine: t.slice(0, 5), aufgaben: a.slice(0, Math.max(0, 5 - t.length))});
    });
    return vals;
  }
}
