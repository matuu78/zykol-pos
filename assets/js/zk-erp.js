/* zykol.POS – Datenschicht zum zykol ERP (seit v12.54, Nachfolger von zk-sync.js aus v12.10):
   Kasse koppeln, offline verkaufen, TSE, Abgleich, Module vom Server.
   Verkäufe landen zuerst lokal (IndexedDB, Ausgang) und werden übertragen, sobald der Server erreichbar ist.
   Ohne Kopplung bleibt der Prototyp im Demo-Modus (keine Änderung am Verhalten).
   Öffentlich: window.ZK_ERP = {bereit, gekoppelt, status, koppeln, entkoppeln, verkauf, abgleichen, datenEinspielen, dialog, on}
   Gekoppelt bestimmt der Server die Module (GET /api/ich → localStorage zykolPOS.module, gelesen von ZK_MODUL). */
(function () {
  'use strict';
  var LS_KOPPLUNG = 'zykolPOS.kopplung', LS_MODULE = 'zykolPOS.module';
  var TSE_ZEIT_MS = 6000, API_ZEIT_MS = 15000, TAKT_MS = 20000;

  /* ---------- Texte (DE/EN/FR/ES/PT) ---------- */
  var T = {
    titel: ['Server & Offline', 'Server & offline', 'Serveur & hors ligne', 'Servidor y sin conexión', 'Servidor e offline'],
    demo: ['Demo-Modus – nicht mit dem Server verbunden', 'Demo mode – not connected to the server', 'Mode démo – non connecté au serveur', 'Modo demo – sin conexión al servidor', 'Modo demo – sem ligação ao servidor'],
    server: ['Server-Adresse', 'Server address', 'Adresse du serveur', 'Dirección del servidor', 'Endereço do servidor'],
    mandant: ['Firma (Mandanten-ID)', 'Company (tenant ID)', 'Société (ID client)', 'Empresa (ID de cliente)', 'Empresa (ID de cliente)'],
    code: ['Kopplungscode', 'Pairing code', 'Code d’appairage', 'Código de vinculación', 'Código de emparelhamento'],
    geraet: ['Name dieses Geräts', 'Name of this device', 'Nom de cet appareil', 'Nombre de este dispositivo', 'Nome deste dispositivo'],
    koppeln: ['Kasse verbinden', 'Connect register', 'Connecter la caisse', 'Conectar caja', 'Ligar caixa'],
    trennen: ['Kasse trennen', 'Disconnect register', 'Déconnecter la caisse', 'Desconectar caja', 'Desligar caixa'],
    jetzt: ['Jetzt abgleichen', 'Sync now', 'Synchroniser', 'Sincronizar ahora', 'Sincronizar agora'],
    schliessen: ['Schließen', 'Close', 'Fermer', 'Cerrar', 'Fechar'],
    online: ['Online', 'Online', 'En ligne', 'En línea', 'Online'],
    offline: ['Offline', 'Offline', 'Hors ligne', 'Sin conexión', 'Offline'],
    synchron: ['Abgeglichen', 'Synced', 'Synchronisé', 'Sincronizado', 'Sincronizado'],
    ausstehend: ['ausstehend', 'pending', 'en attente', 'pendientes', 'pendentes'],
    abgelehnt: ['abgelehnt', 'rejected', 'refusés', 'rechazados', 'rejeitados'],
    letzter: ['Letzter Abgleich', 'Last sync', 'Dernière synchro', 'Última sincronización', 'Última sincronização'],
    kasse: ['Kasse', 'Register', 'Caisse', 'Caja', 'Caixa'],
    tse: ['TSE', 'TSE', 'TSE', 'TSE', 'TSE'],
    tseSim: ['Simulator – nur Testbetrieb', 'Simulator – test only', 'Simulateur – test uniquement', 'Simulador – solo pruebas', 'Simulador – apenas teste'],
    tseKeine: ['keine eingerichtet', 'not set up', 'non configurée', 'no configurada', 'não configurada'],
    warnTrennen: ['Es gibt noch nicht übertragene Verkäufe. Trotzdem trennen? Sie gehen auf diesem Gerät verloren.', 'There are sales not yet transferred. Disconnect anyway? They will be lost on this device.', 'Des ventes ne sont pas encore transférées. Déconnecter quand même ? Elles seront perdues sur cet appareil.', 'Hay ventas sin transferir. ¿Desconectar de todos modos? Se perderán en este dispositivo.', 'Há vendas ainda não transferidas. Desligar mesmo assim? Serão perdidas neste dispositivo.'],
    neuLaden: ['Verbunden. Die Kasse lädt jetzt die Daten des Servers.', 'Connected. The register is now loading the server data.', 'Connecté. La caisse charge maintenant les données du serveur.', 'Conectado. La caja carga ahora los datos del servidor.', 'Ligado. A caixa está a carregar os dados do servidor.'],
    fehlerKopplung: ['Verbinden fehlgeschlagen', 'Connection failed', 'Échec de la connexion', 'Error al conectar', 'Falha na ligação'],
  };
  var SPR = ['de', 'en', 'fr', 'es', 'pt'];
  function t(k) { var i = SPR.indexOf((document.documentElement.lang || 'de').slice(0, 2)); return (T[k] || [k])[i < 0 ? 0 : i] || T[k][0]; }

  /* ---------- IndexedDB ---------- */
  var idb = null;
  function oeffnen() {
    return new Promise(function (ok, nein) {
      if (!window.indexedDB) return nein(new Error('Kein IndexedDB'));
      var r = indexedDB.open('zykol-pos', 1);
      r.onupgradeneeded = function () {
        var d = r.result;
        d.createObjectStore('ausgang', {keyPath: 'op_id'});   // noch nicht übertragene Operationen
        d.createObjectStore('daten', {keyPath: 'key'});       // Server-Stand: objekt:typ:id, beleg:id, bestand:artikel@ort
        d.createObjectStore('meta', {keyPath: 'k'});          // stand, zaehler, abgelehnt
      };
      r.onsuccess = function () { ok(r.result); };
      r.onerror = function () { nein(r.error); };
    });
  }
  function tx(stores, modus, fn) {
    return new Promise(function (ok, nein) {
      var x = idb.transaction(stores, modus);
      var erg = fn(x);
      x.oncomplete = function () { ok(erg); };
      x.onerror = x.onabort = function () { nein(x.error); };
    });
  }
  function alle(store) {
    return new Promise(function (ok, nein) {
      var r = idb.transaction(store).objectStore(store).getAll();
      r.onsuccess = function () { ok(r.result || []); };
      r.onerror = function () { nein(r.error); };
    });
  }
  function metaSetzen(k, v) { S.meta[k] = v; return tx(['meta'], 'readwrite', function (x) { x.objectStore('meta').put({k: k, v: v}); }); }

  /* ---------- Zustand ---------- */
  var S = {kopplung: null, meta: {}, daten: new Map(), ausgang: [], online: navigator.onLine, laeuft: false, letzter: null, fehler: null, tse: null, hoerer: []};
  try { S.kopplung = JSON.parse(localStorage.getItem(LS_KOPPLUNG) || 'null'); } catch (e) { S.kopplung = null; }

  function melden() { S.hoerer.forEach(function (f) { try { f(status()); } catch (e) { /* egal */ } }); chipAktualisieren(); }
  function status() {
    return {gekoppelt: !!S.kopplung, online: S.online, ausstehend: S.ausgang.length, abgelehnt: (S.meta.abgelehnt || []).length,
      letzter: S.letzter, fehler: S.fehler, kasse: S.kopplung && S.kopplung.kasse, mandant: S.kopplung && S.kopplung.mandant, tse: S.tse};
  }

  /* ---------- Server ---------- */
  function api(methode, pfad, body, zeitMs) {
    var k = S.kopplung;
    var ctl = window.AbortController ? new AbortController() : null;
    var timer = ctl && setTimeout(function () { ctl.abort(); }, zeitMs || API_ZEIT_MS);
    return fetch(k.server.replace(/\/$/, '') + '/api' + pfad, {method: methode, signal: ctl && ctl.signal,
      headers: Object.assign({'authorization': 'Bearer ' + k.token}, body ? {'content-type': 'application/json'} : {}),
      body: body ? JSON.stringify(body) : undefined})
      .then(function (r) {
        clearTimeout(timer);
        return r.text().then(function (txt) {
          var j = null; try { j = txt ? JSON.parse(txt) : null; } catch (e) { j = null; }
          if (r.status === 401) { S.fehler = 'Anmeldung ungültig – Kasse neu verbinden'; }
          if (!r.ok) { var f = new Error((j && j.fehler) || ('HTTP ' + r.status)); f.status = r.status; throw f; }
          return j;
        });
      }, function (e) { clearTimeout(timer); throw e; });
  }

  function uuid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    var b = crypto.getRandomValues(new Uint8Array(16)); b[6] = (b[6] & 15) | 64; b[8] = (b[8] & 63) | 128;
    var h = Array.prototype.map.call(b, function (x) { return (x + 256).toString(16).slice(1); }).join('');
    return h.slice(0, 8) + '-' + h.slice(8, 12) + '-' + h.slice(12, 16) + '-' + h.slice(16, 20) + '-' + h.slice(20);
  }

  /* ---------- Start ---------- */
  var bereitP = null;
  function bereit() {
    if (bereitP) return bereitP;
    // Link zum Koppeln: index.html?koppeln=<mandant>:<code> (z. B. als QR-Code an der Kasse)
    var km = /[?&]koppeln=([a-z0-9-]+):([A-Za-z0-9]{8})/.exec(location.search);
    if (km) {
      history.replaceState(null, '', location.pathname);
      if (!S.kopplung) {
        bereitP = koppeln(apiStandard(), km[1], km[2], 'Kasse')
          .then(function () { return oeffnen(); })
          .then(function (d) { idb = d; return abgleichenErzwingen(); })
          .then(function () { location.reload(); return new Promise(function () {}); },
            function (e) { alert(t('fehlerKopplung') + ': ' + e.message); bereitP = null; return bereit(); });
        return bereitP;
      }
    }
    bereitP = (S.kopplung ? oeffnen().then(function (d) {
      idb = d;
      return Promise.all([alle('meta'), alle('daten'), alle('ausgang')]);
    }).then(function (r) {
      r[0].forEach(function (m) { S.meta[m.k] = m.v; });
      moduleUebernehmen(S.meta.module);
      r[1].forEach(function (x) { S.daten.set(x.key, x.v); });
      S.ausgang = r[2].sort(function (a, b) { return a.zeit < b.zeit ? -1 : 1; });
    }).catch(function (e) { S.fehler = 'Lokaler Speicher: ' + e.message; }) : Promise.resolve())
      .then(function () {
        if (S.kopplung) {
          window.addEventListener('online', function () { S.online = true; melden(); abgleichen(); });
          window.addEventListener('offline', function () { S.online = false; melden(); });
          document.addEventListener('visibilitychange', function () { if (!document.hidden) abgleichen(); });
          setInterval(abgleichen, TAKT_MS);
          setTimeout(abgleichen, 500);
        }
        chipEinbauen();
        swRegistrieren();
      });
    return bereitP;
  }

  // Module des Mandanten (vom Server) in den Speicher schreiben, den ZK_MODUL liest
  function moduleUebernehmen(m) {
    if (!m || typeof m !== 'object') return;
    try { localStorage.setItem(LS_MODULE, JSON.stringify(m)); } catch (e) { /* Speicher voll oder gesperrt */ }
  }

  function swRegistrieren() {
    if (!('serviceWorker' in navigator) || !/^https?:$/.test(location.protocol)) return;
    navigator.serviceWorker.register('sw.js').catch(function () { /* z. B. Vorschau ohne eigene Herkunft */ });
  }

  /* ---------- Koppeln ---------- */
  function koppeln(server, mandant, code, name) {
    server = String(server || '').trim().replace(/\/$/, '');
    return fetch(server + '/api/geraete/koppeln', {method: 'POST', headers: {'content-type': 'application/json'},
      body: JSON.stringify({mandant: String(mandant).trim(), code: String(code).trim().toUpperCase(), name: name})})
      .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error(j && j.fehler || ('HTTP ' + r.status)); return j; }); })
      .then(function (j) {
        S.kopplung = {server: server, mandant: j.mandant, kasse: j.kasse, token: j.token, geraet: j.geraet};
        localStorage.setItem(LS_KOPPLUNG, JSON.stringify(S.kopplung));
        return j;
      });
  }
  function entkoppeln() {
    var k = S.kopplung;
    localStorage.removeItem(LS_KOPPLUNG);
    localStorage.removeItem(LS_MODULE);
    S.kopplung = null;
    if (window.indexedDB) indexedDB.deleteDatabase('zykol-pos');
    return Promise.resolve(k);
  }

  /* ---------- Verkauf ---------- */
  // Fortlaufende Nummer je Kasse und Belegart, z. B. B-K1-000123 (offline vergeben, kollisionsfrei je Kasse)
  function naechsteNummer(art) {
    var praefix = art === 'rechnung' ? 'RE' : 'B';
    var key = 'zaehler_' + art;
    var n = (S.meta[key] || 0) + 1;
    return metaSetzen(key, n).then(function () { return praefix + '-' + S.kopplung.kasse + '-' + String(n).padStart(6, '0'); });
  }

  // d = {art: 'kassenbon'|'rechnung', positionen: [{artikel, text, menge, preis (Cent), ust, sn}], zahlungen: [{art, betrag}],
  //      partner_id, daten: {...}}. Liefert {id, nummer, tse} – tse ist Signatur oder {ausfall: true}.
  function verkauf(d) {
    if (!S.kopplung) return Promise.reject(new Error('Nicht gekoppelt'));
    var id = uuid(), art = d.art || 'kassenbon';
    var zahlungen = art === 'rechnung' ? [] : (d.zahlungen || []);
    var signieren = S.online
      ? api('POST', '/tse/signieren', {beleg_id: id, positionen: d.positionen, zahlungen: zahlungen}, TSE_ZEIT_MS)
        .catch(function (e) { return {ausfall: true, grund: e.status ? 'TSE: ' + e.message : 'keine Verbindung', zeit: new Date().toISOString()}; })
      : Promise.resolve({ausfall: true, grund: 'offline', zeit: new Date().toISOString()});
    return Promise.all([naechsteNummer(art), signieren]).then(function (r) {
      var op = {op_id: 'op-' + id, zeit: new Date().toISOString(), art: 'beleg', beleg: {id: id, art: art, nummer: r[0],
        partner_id: d.partner_id || null, positionen: d.positionen,
        daten: Object.assign({}, d.daten || {}, {zahlungen: zahlungen, tse: r[1], erfasst: new Date().toISOString()})}};
      return tx(['ausgang'], 'readwrite', function (x) { x.objectStore('ausgang').put(op); }).then(function () {
        S.ausgang.push(op);
        melden();
        setTimeout(abgleichen, 50);
        return {id: id, nummer: r[0], tse: r[1]};
      });
    });
  }

  /* ---------- Abgleich ---------- */
  var ENDGUELTIG = {ok: 1, doppelt: 1, fehler: 1, konflikt: 1};
  function hochladen() {
    if (!S.ausgang.length) return Promise.resolve();
    var paket = S.ausgang.slice(0, 100);
    return api('POST', '/sync', {ops: paket.map(function (o) { var c = Object.assign({}, o); delete c.zeit; return c; })}).then(function (r) {
      var weg = {}, abgelehnt = (S.meta.abgelehnt || []).slice();
      r.ergebnisse.forEach(function (e) {
        if (!ENDGUELTIG[e.status]) return;
        weg[e.op_id] = 1;
        if (e.status === 'fehler' || e.status === 'konflikt') {
          var op = paket.filter(function (o) { return o.op_id === e.op_id; })[0];
          abgelehnt.push({op: op, fehler: e.fehler, zeit: new Date().toISOString()});
        }
      });
      return tx(['ausgang', 'meta'], 'readwrite', function (x) {
        Object.keys(weg).forEach(function (k) { x.objectStore('ausgang').delete(k); });
        x.objectStore('meta').put({k: 'abgelehnt', v: abgelehnt.slice(-200)});
      }).then(function () {
        S.meta.abgelehnt = abgelehnt.slice(-200);
        S.ausgang = S.ausgang.filter(function (o) { return !weg[o.op_id]; });
        if (Object.keys(weg).length === paket.length && S.ausgang.length) return hochladen();
      });
    });
  }

  function schluessel(a) {
    var d = a.daten;
    return a.art === 'objekt' ? 'objekt:' + d.typ + ':' + d.id : a.art === 'beleg' ? 'beleg:' + d.id
      : a.art === 'bestand' ? 'bestand:' + d.artikel + '@' + d.lagerort : 'typ:' + d.typ;
  }
  function abholen() {
    var seit = S.meta.stand || 0;
    return api('GET', '/sync?seit=' + seit + '&limit=1000').then(function (r) {
      return tx(['daten', 'meta'], 'readwrite', function (x) {
        r.aenderungen.forEach(function (a) {
          var k = schluessel(a);
          S.daten.set(k, a.daten);
          x.objectStore('daten').put({key: k, v: a.daten});
          // Eigene Belegnummern nie doppelt vergeben (z. B. nach Löschen des Browserspeichers)
          var m = a.art === 'beleg' && S.kopplung && String(a.daten.nummer).match(new RegExp('^(B|RE)-' + S.kopplung.kasse + '-(\\d+)$'));
          if (m) { var key = 'zaehler_' + (m[1] === 'RE' ? 'rechnung' : 'kassenbon'); if ((S.meta[key] || 0) < +m[2]) { S.meta[key] = +m[2]; x.objectStore('meta').put({k: key, v: +m[2]}); } }
        });
        S.meta.stand = r.bis;
        x.objectStore('meta').put({k: 'stand', v: r.bis});
      }).then(function () { return r.mehr ? abholen() : null; });
    });
  }

  function abgleichen() {
    if (!S.kopplung || S.laeuft || !idb) return Promise.resolve(status());
    S.laeuft = true;
    return hochladen().then(abholen).then(function () {
      S.online = true; S.fehler = null; S.letzter = new Date();
      return Promise.all([
        api('GET', '/ich').then(function (ich) {
          if (!ich || !ich.module) return;
          var neu = JSON.stringify(ich.module), alt = JSON.stringify(S.meta.module || null);
          S.mandantName = ich.mandant && ich.mandant.name;
          if (neu === alt) return;
          return metaSetzen('module', ich.module).then(function () { moduleUebernehmen(ich.module); }); // wirkt beim nächsten Laden der Oberfläche
        }, function () {}),
        S.tse ? null : api('GET', '/tse/status').then(function (x) { S.tse = x; }, function () {})
      ]);
    }, function (e) {
      if (!e.status) S.online = false;
      S.fehler = e.message;
    }).then(function () { S.laeuft = false; melden(); return status(); });
  }

  /* ---------- Daten in den Prototyp einspielen (vor dem Start der Oberfläche) ---------- */
  function euro(c) { return Math.round(c) / 100; }
  function deDatum(iso) { var p = String(iso).slice(0, 10).split('-'); return p[2] + '.' + p[1] + '.' + p[0]; }
  function ersetzen(liste, neu) { liste.length = 0; Array.prototype.push.apply(liste, neu); }

  function datenEinspielen(D) {
    if (!S.kopplung) return;
    var objekte = {}, bestand = {}, belege = [];
    S.daten.forEach(function (v, k) {
      if (k.indexOf('objekt:') === 0) { if (!v.geloescht) (objekte[v.typ] = objekte[v.typ] || []).push(v); }
      else if (k.indexOf('bestand:') === 0) bestand[v.artikel] = (bestand[v.artikel] || 0) + v.menge;
      else if (k.indexOf('beleg:') === 0) belege.push(v);
    });
    // Noch nicht übertragene Verkäufe dieses Geräts zählen schon mit
    S.ausgang.forEach(function (o) {
      if (o.art !== 'beleg') return;
      o.beleg.positionen.forEach(function (p) { if (p.artikel) bestand[p.artikel] = (bestand[p.artikel] || 0) - p.menge; });
      belege.push({id: o.beleg.id, art: o.beleg.art, nummer: o.beleg.nummer, status: 'gebucht', datum: o.zeit.slice(0, 10),
        positionen: o.beleg.positionen, daten: o.beleg.daten, offen: o.beleg.art === 'rechnung' ? 1 : 0, lokal: true});
    });
    if (D.PRODUKTE && (objekte.artikel || []).length) {
      var alt = {}; D.PRODUKTE.forEach(function (p) { alt[p.id] = p; });
      ersetzen(D.PRODUKTE, objekte.artikel.filter(function (a) { return a.daten.aktiv !== false; }).map(function (a) {
        var d = a.daten;
        return Object.assign({cat: 'zubehoer', type: '', extra: []}, alt[a.id] || {}, {id: a.id, brand: d.marke || '', name: d.name,
          type: d.typ || (alt[a.id] || {}).type || '', cat: d.kategorie || (alt[a.id] || {}).cat || 'zubehoer', price: euro(d.preis), ust: d.ust,
          sku: a.nummer || '', lager: d.lagerort || 'Hauptlager', stock: Math.max(0, bestand[a.id] || 0),
          extra: (d.merkmale || []).map(function (m) { return [m.merkmal, m.wert]; })});
      }));
    }
    if (D.KUNDEN && (objekte.kunde || []).length) {
      var altK = {}; D.KUNDEN.forEach(function (k) { altK[k.nr] = k; });
      ersetzen(D.KUNDEN, objekte.kunde.map(function (k) {
        var d = k.daten, nr = k.nummer || k.id;
        return Object.assign({umsatz: 0, offen: 0, seit: '', zahlung: '', kontakt: '', ustid: '—'}, altK[nr] || {}, {nr: nr, name: d.name,
          typ: d.kundentyp || 'Privat', ort: [d.plz, d.ort].filter(Boolean).join(' '), mail: d.email || '', telefon: d.telefon || '',
          rabatt: d.rabatt || 0, notiz: d.notiz || '', ustid: d.ustid || '—', _id: k.id});
      }));
    }
    if (D.SERIEN && (objekte.seriennummer || []).length) {
      Object.keys(D.SERIEN).forEach(function (k) { delete D.SERIEN[k]; });
      objekte.seriennummer.forEach(function (s) {
        var d = s.daten;
        if (d.status === 'Verkauft') return;
        (D.SERIEN[d.artikel] = D.SERIEN[d.artikel] || []).push({sn: d.sn, baujahr: d.baujahr, lager: d.lagerort, status: d.status});
      });
    }
    if (D.TX) {
      var kd = {}; (objekte.kunde || []).forEach(function (k) { kd[k.id] = k.daten.name; });
      var ZA = {bar: 'Bar', karte: 'Karte'};
      ersetzen(D.TX, belege.filter(function (b) { return b.art === 'kassenbon' || b.art === 'rechnung'; })
        .sort(function (a, b) { return (b.daten.erfasst || b.datum) < (a.daten.erfasst || a.datum) ? -1 : 1; })
        .map(function (b) {
          var t = b.daten.tse || {}, z = (b.daten.zahlungen || [])[0], erf = b.daten.erfasst ? new Date(b.daten.erfasst) : null;
          return {id: b.id, beleg: b.nummer, kasse: b.daten.kassenplatz || (String(b.nummer).split('-')[1]) || '', datum: deDatum(b.datum),
            zeit: erf ? String(erf.getHours()).padStart(2, '0') + ':' + String(erf.getMinutes()).padStart(2, '0') : '',
            kassierer: b.daten.kassierer || '', zahlart: b.art === 'rechnung' ? 'Rechnung' : (z && ZA[z.art]) || 'Karte',
            status: b.status === 'storniert' ? 'Storniert' : b.art === 'rechnung' && b.offen ? 'Offen' : 'Abgeschlossen',
            tse: t.ausfall ? 'Ausfall' : t.signaturZaehler ? String(t.signaturZaehler) : '—', kunde: kd[b.partner_id] || b.daten.kunde || '',
            pos: (b.positionen || []).filter(function (p) { return p.menge > 0; }).map(function (p) { return [p.text, p.menge, euro(p.preis)]; }),
            lokal: !!b.lokal};
        }));
    }
  }

  /* ---------- Oberfläche: Status-Chip und Dialog ---------- */
  var chip = null;
  // Chip steht in der Fußleiste neben der Versionsnummer; ohne Fußleiste (z. B. Sperrbildschirm) oben rechts
  var STIL = '.zk-erp-chip{position:fixed;z-index:2147483000;display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 10px;border-radius:6px;border:0;'
    + 'background:#1f232a;color:#e5e7eb;font:600 12px/1 Inter,Arial,sans-serif;cursor:pointer;flex:none;white-space:nowrap}'
    + '.zk-erp-chip.frei{right:12px;top:calc(12px + env(safe-area-inset-top));background:#fff;color:#303640;'
    + 'border:1px solid #e5e7eb;box-shadow:0 2px 10px rgba(16,16,16,.12)}'
    + '.zk-erp-chip i{width:8px;height:8px;border-radius:50%;background:#9aa1ab;display:block}'
    + '.zk-erp-chip.ok i{background:#1f9d55}.zk-erp-chip.off i{background:#EF3D2F}.zk-erp-chip.warte i{background:#e0a100}'
    + '.zk-erp-hg{position:fixed;inset:0;z-index:2147483001;background:rgba(16,16,16,.45);display:flex;align-items:center;justify-content:center;padding:16px}'
    + '.zk-erp-dlg{background:#fff;color:#101010;border-radius:14px;max-width:440px;width:100%;padding:22px;font:14px/1.45 Inter,Arial,sans-serif;box-shadow:0 20px 60px rgba(0,0,0,.25);max-height:90vh;overflow:auto}'
    + '.zk-erp-dlg h2{margin:0 0 4px;font:700 22px/1.2 "Barlow Condensed",Barlow,Arial,sans-serif;letter-spacing:.01em}'
    + '.zk-erp-dlg label{display:block;font-size:12.5px;font-weight:600;color:#303640;margin:12px 0 4px}'
    + '.zk-erp-dlg input{width:100%;box-sizing:border-box;padding:10px 12px;border:1px solid #d6d9de;border-radius:9px;font:15px Inter,Arial,sans-serif}'
    + '.zk-erp-dlg .zeile{display:flex;justify-content:space-between;gap:12px;padding:7px 0;border-bottom:1px solid #f0f1f3;font-size:13.5px}'
    + '.zk-erp-dlg .zeile span:first-child{color:#646b76}.zk-erp-dlg .knoepfe{display:flex;gap:8px;flex-wrap:wrap;margin-top:18px}'
    + '.zk-erp-dlg button{border:0;border-radius:9px;padding:11px 14px;font:600 14px Inter,Arial,sans-serif;cursor:pointer;background:#e5e7eb;color:#101010}'
    + '.zk-erp-dlg button.haupt{background:#EF3D2F;color:#fff}.zk-erp-dlg .meldung{margin-top:10px;font-size:13px;color:#9b1520}'
    + '.zk-erp-dlg .hinweis{font-size:12.5px;color:#646b76;margin-top:2px}';

  function chipEinbauen() {
    if (chip || !document.body) return;
    var st = document.createElement('style'); st.textContent = STIL; document.head.appendChild(st);
    chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'zk-erp-chip';
    chip.addEventListener('click', dialog);
    document.body.appendChild(chip);
    platzieren();
    new MutationObserver(platzieren).observe(document.body, {childList: true, subtree: true});
    window.addEventListener('resize', platzieren);
    chipAktualisieren();
  }
  // Nicht in die Oberfläche einhängen (die Laufzeit verwaltet deren DOM), sondern fest darüber positionieren
  var platzRaf = null;
  function platzieren() {
    if (platzRaf) return;
    platzRaf = requestAnimationFrame(function () {
      platzRaf = null;
      var v = document.querySelector('.zk-fuss-version');
      var r = v && v.getBoundingClientRect();
      var oben = r && r.width && r.bottom > 0 && r.top < innerHeight && document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
      var frei = !(oben && (oben === v || v.contains(oben) || (v.closest('.zk-fuss') || v).contains(oben)));
      chip.classList.toggle('frei', frei);
      chipAktualisieren();
      if (frei) { chip.style.left = chip.style.top = ''; return; }
      // Freie Stelle in der Fußleiste suchen: rechts neben der Version, links davor, unten rechts, über der Version
      var fuss = v.closest('.zk-fuss') || v.parentNode, f = fuss.getBoundingClientRect();
      var cw = chip.offsetWidth, ch = 28, mitte = r.top + r.height / 2 - ch / 2;
      var orte = [[r.right + 10, mitte], [r.left - cw - 8, mitte], [innerWidth - cw - 12, f.bottom - ch - 8], [r.right - cw, r.top - ch - 6]];
      chip.style.visibility = 'hidden';
      var frei2 = function (x, y) {
        if (x < 4 || x + cw > innerWidth - 4 || y < 0 || y + ch > innerHeight) return false;
        return [[x + 2, y + 2], [x + cw - 2, y + 2], [x + 2, y + ch - 2], [x + cw - 2, y + ch - 2], [x + cw / 2, y + ch / 2]].every(function (pt) {
          var e = document.elementFromPoint(pt[0], pt[1]);
          if (!e || !fuss.contains(e) && pt[1] > f.top) return false;
          if (e.closest('button,a,input,select,svg,span,img')) return false;
          return !Array.prototype.some.call(e.childNodes, function (n) { return n.nodeType === 3 && n.textContent.trim(); });
        });
      };
      var ort = orte.filter(function (o) { return frei2(o[0], o[1]); })[0] || orte[0];
      chip.style.visibility = '';
      chip.style.left = Math.round(ort[0]) + 'px';
      chip.style.top = Math.round(ort[1]) + 'px';
    });
  }
  function chipAktualisieren() {
    if (!chip) return;
    var s = status();
    var cls = !s.gekoppelt ? '' : !s.online ? 'off' : s.ausstehend ? 'warte' : 'ok';
    var frei = chip.classList.contains('frei');
    chip.className = 'zk-erp-chip ' + cls + (frei ? ' frei' : '');
    var schmal = innerWidth < 760;
    var txt = !s.gekoppelt ? 'Demo' : (s.online ? t('online') : t('offline')) + (s.ausstehend ? ' · ' + s.ausstehend + (schmal ? '' : ' ' + t('ausstehend')) : '');
    if (chip.textContent === txt) return;
    chip.innerHTML = '<i></i><span></span>';
    chip.lastChild.textContent = txt;
    chip.title = t('titel');
  }

  function el(tag, attr, kinder) {
    var e = document.createElement(tag);
    Object.keys(attr || {}).forEach(function (k) { if (k === 'text') e.textContent = attr[k]; else e.setAttribute(k, attr[k]); });
    (kinder || []).forEach(function (c) { e.appendChild(c); });
    return e;
  }

  // Vorbelegte Server-Adresse: <meta name="zykol-api" content="https://api.…"> in index.html, sonst dieselbe Domain
  function apiStandard() {
    var m = document.querySelector('meta[name="zykol-api"]');
    var v = m && m.getAttribute('content');
    return v ? v.replace(/\/$/, '') : location.protocol === 'file:' ? 'https://' : location.origin;
  }

  function dialog() {
    var hg = el('div', {'class': 'zk-erp-hg'});
    var d = el('div', {'class': 'zk-erp-dlg', role: 'dialog', 'aria-modal': 'true'});
    hg.appendChild(d);
    var zu = function () { hg.remove(); };
    hg.addEventListener('click', function (e) { if (e.target === hg) zu(); });
    d.appendChild(el('h2', {text: t('titel')}));
    var s = status();
    if (!s.gekoppelt) {
      d.appendChild(el('div', {'class': 'hinweis', text: t('demo')}));
      var f = {};
      [['server', apiStandard()], ['mandant', ''], ['code', ''], ['geraet', 'Kasse']].forEach(function (x) {
        d.appendChild(el('label', {text: t(x[0])}));
        f[x[0]] = el('input', {value: x[1], autocomplete: 'off', autocapitalize: x[0] === 'code' ? 'characters' : 'off'});
        d.appendChild(f[x[0]]);
      });
      var meld = el('div', {'class': 'meldung'});
      d.appendChild(meld);
      var los = el('button', {'class': 'haupt', type: 'button', text: t('koppeln')});
      los.addEventListener('click', function () {
        los.disabled = true; meld.textContent = '';
        koppeln(f.server.value, f.mandant.value, f.code.value, f.geraet.value).then(function () {
          meld.style.color = '#1f9d55'; meld.textContent = t('neuLaden');
          // Neu laden, damit die Oberfläche mit den Server-Daten startet
          oeffnen().then(function (db) { idb = db; return abgleichenErzwingen(); }).then(function () { location.reload(); }, function () { location.reload(); });
        }, function (e) { los.disabled = false; meld.textContent = t('fehlerKopplung') + ': ' + e.message; });
      });
      d.appendChild(el('div', {'class': 'knoepfe'}, [los, knopf(t('schliessen'), zu)]));
    } else {
      var z = function (a, b) { d.appendChild(el('div', {'class': 'zeile'}, [el('span', {text: a}), el('span', {text: b})])); };
      z(t('kasse'), s.kasse + ' · ' + s.mandant);
      z('Server', S.kopplung.server);
      z('Status', (s.online ? t('online') : t('offline')) + (s.fehler ? ' – ' + s.fehler : ''));
      z(t('ausstehend'), String(s.ausstehend));
      if (s.abgelehnt) z(t('abgelehnt'), String(s.abgelehnt) + ' – ' + ((S.meta.abgelehnt || []).slice(-1)[0] || {}).fehler);
      z(t('letzter'), s.letzter ? s.letzter.toLocaleString() : '—');
      z(t('tse'), !s.tse ? '—' : s.tse.adapter === 'simulator' ? t('tseSim') : s.tse.adapter === 'keine' ? t('tseKeine') : s.tse.adapter);
      var ab = knopf(t('jetzt'), function () { ab.disabled = true; abgleichen().then(function () { zu(); dialog(); }); }, true);
      var tr = knopf(t('trennen'), function () {
        if (S.ausgang.length && !confirm(t('warnTrennen'))) return;
        entkoppeln().then(function () { location.reload(); });
      });
      d.appendChild(el('div', {'class': 'knoepfe'}, [ab, tr, knopf(t('schliessen'), zu)]));
    }
    document.body.appendChild(hg);
  }
  function knopf(text, fn, haupt) { var b = el('button', {type: 'button', 'class': haupt ? 'haupt' : '', text: text}); b.addEventListener('click', fn); return b; }
  function abgleichenErzwingen() { S.laeuft = false; return abgleichen(); }

  window.ZK_ERP = {
    bereit: bereit, gekoppelt: function () { return !!S.kopplung; }, status: status, koppeln: koppeln, entkoppeln: entkoppeln,
    verkauf: verkauf, abgleichen: abgleichen, datenEinspielen: datenEinspielen, dialog: dialog,
    on: function (f) { S.hoerer.push(f); return function () { S.hoerer = S.hoerer.filter(function (x) { return x !== f; }); }; }
  };
})();
