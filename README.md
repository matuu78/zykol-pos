# zykol.POS – Prototyp

Web-Prototyp des zykol.POS-Kassensystems (zykol GmbH, Berlin).

- `index.html` – die App (läuft komplett im Browser, kein Build nötig)
- `assets/` – Bilder, Schriften und Skripte (u. a. `sprachen.js` für EN/FR/ES/PT, `bedienungsanleitung.js`)
- `assets/js/zk-erp.js` + `sw.js` (seit v12.54) – Anbindung an das zykol ERP (Repo `matuu78/zykol.erp`) und Offline-Betrieb.
  Ohne Kopplung läuft alles wie bisher im Demo-Modus (Chip „Demo“ in der Fußleiste). Koppeln: Chip antippen,
  Server-Adresse, Firma und Kopplungscode eingeben, oder Link `index.html?koppeln=<firma>:<code>`.

## Versionen
Jede veröffentlichte Version ist ein Commit mit Tag (`v8.1` … `v8.10`).
Die Historie wurde aus den Webspace-ZIPs ab v8.1 rekonstruiert; ältere Stände liegen im Archiv auf dem Mac.

## Lokal ansehen
`index.html` im Browser öffnen oder den Ordner auf einen Webspace laden.

Verantwortlich: Marko Ruschin, Jens Röhling
