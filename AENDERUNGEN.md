# zykol.POS Kanu – Änderungen je Version

Stand: 27.11.2026 · Version v12.85 · neueste Version oben

Diese Liste beschreibt, was sich für die Bedienung geändert hat. Quellen sind die Git-Historie und die Pull-Requests von `matuu78/zykol-pos` sowie die Projektnotizen.

**Zeichen in dieser Liste**

- ⚠️ steht an Stellen, die nicht sicher belegt sind, etwa weil eine Version nie einzeln eingecheckt wurde oder der Commit keine Beschreibung hat.
- „Simuliert“ heißt: Die Funktion ist im Prototyp nachgebildet. Zahlung, TSE (fiskaly), ERP und Offline-Betrieb sind im Prototyp nicht echt angebunden.

---

## November 2026

### v12.85 · 27.11.2026 · Beliebig viele Optionen je Rubrik
- Unter Artikel › Rubriken › Auswahl kann eine Warengruppe jetzt mehr als zwei Optionen haben. Mit **+ Weitere Option** kommt eine weitere dazu, mit „— keine —“ fällt sie wieder weg. Jede Option kann je Rubrik nur einmal gewählt werden.
- Am Artikel (Varianten) erscheint für jede zugeordnete Option eine eigene Zeile mit Werten. Die Varianten sind alle Kombinationen, z. B. Länge × Schafthärte, jede mit eigenem Bestand und Lagerplatz.
- Kommt an einem Artikel eine neue Option dazu, wandert der Bestand der bisherigen Variante auf die passende neue (z. B. „210 cm“ → „210 cm · weich“). Bestehende Farben und Größen bleiben unverändert.
- In der Kasse wählt man im Ausführungsdialog je Option einen Wert. Warenkorb, Beleg, Angebot, Bestellung beim Lieferanten und Umlagerung zeigen die ganze Variante.
- Demodaten: Paddel haben als dritte Option „Schafthärte“, der Jantex Beta 810 hat 5 Längen × 3 Schafthärten.
- Die Zuordnung der Optionen wird weiter nur im Browser gespeichert. Wer die Optionen schon einmal geändert hat, sieht die neue Paddel-Option erst, wenn er sie unter Rubriken selbst zuordnet.

### v12.84 · 27.11.2026 · Sondertage bei den Öffnungszeiten
- Unter Einstellungen › Firma & Kasse › Öffnungszeiten gibt es das neue Feld **Sondertage**. Man trägt einen Tag pro Zeile ein, zum Beispiel „24.12. 9–12 Uhr“ oder „31.12.2026 geschlossen“.
- Steht keine Jahreszahl dabei, gilt der Eintrag jedes Jahr. Zeilen in einer anderen Form werden nicht beachtet.
- Bestellbeleg und Abholschein nennen im Fuß die Sondertage der nächsten 30 Tage.
- Vorbelegt sind der 24.12. und der 31.12. mit jeweils 9–12 Uhr.

### v12.83 · 27.11.2026 · Öffnungszeiten je Wochentag
- Die Öffnungszeiten haben jetzt ein Feld für jeden Wochentag von Mo bis So. Bisher gab es drei Felder: Mo–Fr, Sa und So.
- Mittagspausen lassen sich eintragen („9–13, 14–18 Uhr“), ebenso „geschlossen“.
- Im Fuß von Bestellbeleg und Abholschein werden Tage mit gleichen Zeiten zusammengefasst, zum Beispiel „Mo–Fr 9–18 Uhr · Sa 9–14 Uhr“. Geschlossene Tage stehen dort nicht.
- Ein bisher gespeicherter Wert für Mo–Fr wird für Montag bis Freitag übernommen.

### v12.82 · 27.11.2026 · OP-Liste: Mahnstufe von Hand, Mahnsperre
- In jeder Zeile der OP-Liste lässt sich die **Mahnstufe** wählen: Automatisch, Keine Mahnung, 1. Mahnung, 2. Mahnung oder Letzte Mahnung. Eine von Hand gesetzte Stufe gilt bis zur nächsten gedruckten Mahnung. Danach rechnet die Liste wieder selbst.
- Mit der **Mahnsperre** wird eine Rechnung nicht gemahnt, und der Mahnknopf verschwindet. Dazu gibt es einen neuen Filter „Mahnsperre“ und eine eigene Spalte in der CSV.
- Jede Änderung wird mit Datum, Uhrzeit und Benutzer protokolliert. Die letzte Änderung steht unter der Zeile, die ganze Liste erscheint beim Darüberfahren.
- Ändern darf, wer das Recht „Transaktionsstatus ändern“ hat.

### v12.81 · 27.11.2026 · Storno ohne GiroCode und Dankessatz
- Auf Stornorechnungen und Stornobelegen stehen „Online bezahlen“ (GiroCode) und „Vielen Dank für Ihren Einkauf!“ nicht mehr.
- Die Stornorechnung erklärt stattdessen: „Diese Stornorechnung hebt Rechnung R-… vollständig auf. Ein bereits gezahlter Betrag wird erstattet.“
- Die PDFs der 5 Demo-Stornos für beleg.zykol.de wurden neu erzeugt.

### v12.80 · 27.11.2026 · Feste Demo-Vorgänge, Stornorechnung
- Die Demo-Vorgänge aus v12.77 (B-2026-1501 bis B-2026-1741) enden jetzt fest am 26.11.2026 und wandern nicht mehr mit dem heutigen Datum mit. Damit passen sie dauerhaft zu den PDFs auf beleg.zykol.de.
- Wird eine Rechnung storniert, druckt die Kasse eine **Stornorechnung** mit „Storno zu Rechnung R-…“, Stornodatum und eigenem Hinweistext, ohne Zahlungsziel. Bisher kam eine normale Rechnung mit Minusbetrag heraus.

### v12.79 · 27.11.2026 · Etikett-Vorschau aus der DHL-Sandbox
- Die Etikett-Vorschau zeigt jetzt das Original-PDF aus der DHL-Sandbox. Dafür wird eine Sendung angelegt und gleich wieder storniert.
- DHL läuft immer über die Sandbox. Den Modus „Simuliert“ gibt es für DHL nicht mehr.
- Hat eine ältere Demo-Sendung noch kein PDF, holt „Etikett drucken“ das Etikett in der Sandbox nach.
- Ist die Sandbox nicht erreichbar, erscheint eine klare Meldung statt eines selbst gebauten Ersatzetiketts.
- Bei UPS, DPD und Retourenlabel ändert sich nichts, sie bleiben Nachbildungen.

### v12.78 · 27.11.2026 · Optionen je Warengruppe
- Optionen wie Farbe, Größe, Schuhgröße, Westengröße, Rumpfgröße, Blattfläche, Paddellänge oder Schafthärte werden zentral unter Artikel › Rubriken › Optionen gepflegt, jeweils mit Name und Werten.
- Jede Rubrik bekommt bis zu zwei Optionen. Sie bilden die erste und zweite Variantenachse.
- Unter Artikel › Varianten kommen die Überschriften aus der Option. Werte wählt man im Auswahlfeld, oder man übernimmt mit „Alle“ die ganze Liste.
- Kasse und Artikelliste zeigen die Optionsnamen, zum Beispiel „Farbe · Rumpfgröße“.
- Paddel haben jetzt die Achsen Blattfläche und Paddellänge. Die Demo-Farbe „Carbon Schwarz“ ist entfernt.
- ⚠️ Die Optionen werden nur im Browser des Geräts gespeichert.

### v12.77 · 27.11.2026 · Demodaten der letzten 6 Wochen
- Rund 240 Verkäufe an Ladenkasse, Werkstatt und Mobilkasse. Jede Rechnung hat einen Kunden, TSE-Angaben und die Steuer je Position.
- 5 Stornos mit eigenem Gegenbeleg. Das Original steht im Journal als „Storniert“.
- Offene und gemahnte Rechnungen (Mahnstufen 1–3) in der OP-Liste.
- 11 neue Werkstattaufträge mit Fremdgeräten, 9 davon abgerechnet.
- 7 gelieferte Lieferantenbestellungen mit Wareneingang und rund 400 Lagerbewegungen.
- Der Kassenabschluss berechnet die Vortage aus diesen Belegen.
- Seit v12.80 liegt das Ende der Demodaten fest auf dem 26.11.2026.

### v12.76 · 27.11.2026 · Versandpreise je Versandart
- Unter Einstellungen › Versand (und Versand › Dienstleister) hat jede aktive Versandart zwei Felder: „Uns kostet (€ netto)“ und „Kunde zahlt (€ brutto)“. Darunter steht der Aufschlag bzw. Zuschuss.
- Vorbelegt sind zum Beispiel DHL Paket mit 5,49 € (uns) und 7,99 € (Kunde) sowie Kleinpaket mit 3,69 € und 4,99 €.
- Der Versandauftrag zeigt bei jeder Versandart unseren Preis und darunter in Grün den Kundenpreis.
- In der Kasse gibt es die freie Position „Versand“ mit Kundenpreis und wählbarer Versandart. Den Betrag kann man noch ändern.
- Bei einer Bestellung mit Art „Versand“ wird der Kundenpreis als Versandkosten eingetragen, wenn das Feld leer ist.

### v12.75 · 27.11.2026 · Kassenabschluss: Balken unter den Listen
- Der Soll/Ist-Balken beim Bargeldzählen steht jetzt unter den Schein- und Münzlisten. Bisher schwebte er beim Scrollen über der Scheinliste, vor allem in Safari.

### v12.74 · 27.11.2026 · DSFinV-K-Export, Kassenabschluss an fiskaly (simuliert)
- Unter Einstellungen › TSE lädt „DSFinV-K exportieren (ZIP)“ den Export herunter (20 Tabellen plus index.xml). „Exportprotokoll“ zeigt die Kennzahlen des tatsächlich erzeugten Exports.
- Unter Einstellungen › Datenbank & Backup erzeugt „DSFinV-K (Zeitraum)“ denselben Export.
- Beim Kassenabschluss wird der Abschluss an fiskaly „übertragen“ (simuliert). Status und Closing-ID stehen im Z-Bericht.

### v12.73 · 27.11.2026 · Kassenbelege nach KassenSichV (TSE simuliert)
- Der **Bon** zeigt alle TSE-Angaben im Klartext (Transaktionsnummer, Signaturzähler, Beginn und Ende, Seriennummern, Signatur) und einen TSE-QR-Code nach DSFinV-K. Bei TSE-Ausfall steht ein Hinweis darauf.
- Die **Rechnung** bekommt einen TSE-Kasten mit QR-Code, weil bei Kauf auf Rechnung kein Bon gedruckt wird.
- **Steuer je Position** (19, 7 oder 0 %) auf Bon, Rechnung, Transaktionsdetail und E-Rechnung. Bei der freien Position wählt man den Steuersatz, Gutscheinverkäufe sind nicht steuerbar.
- **Storno** erzeugt einen eigenen Gegenbeleg mit neuer Nummer und Minusbeträgen. Das Original bleibt unverändert, der Stornobeleg wird gedruckt.
- Die Rückgabe nennt den Ursprungsbeleg.
- Unter Einstellungen › TSE gibt es „TSE-Ausfall simulieren“. Mit „Kasse ohne TSE sperren“ sind bei Ausfall weder Verkauf noch Storno möglich.
- Der **Z-Bericht** (Bon und A4) zeigt Umsatz nach Steuersatz, Storni, Retouren, Gutscheine, jede Entnahme einzeln, den Belegnummernbereich und die TSE-Angaben.
- Behoben: Nach einem Storno ließen sich die Einstellungen nicht mehr öffnen.

### v12.72 · 27.11.2026 · Mahnung als Dokumentvorlage
- „Mahnung drucken“ in der OP-Liste erzeugt jetzt ein PDF im Stil von Rechnung und Bon: Logo, Briefkopf und Fußzeile aus „Firma & Kasse“, Anschreiben je Stufe (Zahlungserinnerung, 1. und 2. Mahnung, letzte Mahnung), Tabelle der offenen Rechnung, Zahlungsfrist und GiroCode.
- Unter Einstellungen › Dokumentvorlagen gibt es die neue Kachel „Mahnung“ mit Vorschau.

### v12.71 · 27.11.2026 · Zusammenführung von Mac-Zweig und GitHub
Bis hierhin gab es zwei Versionslinien mit denselben Nummern v12.66–v12.70: Markos Mac-Zweig (abgezweigt von v12.65) und den Stand auf GitHub. v12.71 vereint beide. Basis ist Markos v12.70. Was die einzelnen Stände enthalten, steht unten bei v12.66 bis v12.70.

---

### Mac-Zweig v12.67–v12.70 (Markos Mac, abgezweigt von v12.65)

⚠️ Diese vier Versionen wurden auf dem Mac gebaut und nie einzeln auf GitHub eingecheckt. Ein genaues Datum fehlt. Der Inhalt stammt aus der Beschreibung von v12.71.

**Mac v12.70 · Personal & Organisation**
- Neuer Bereich mit „Mein Bereich“, Urlaubskalender, Krankheit & Vertretung, Schichtplanung, Geräte- und Kassenbindung, Filialen und Anlagevermögen.

**Mac v12.69 · Angebote, Verkaufte Artikel, Werkstatt-Einstellungen**
- Angebote mit Kundendaten, Varianten und Sonderrabatt.
- Neue Ansicht „Verkaufte Artikel“.
- Neuer Einstellungsreiter „Werkstatt“.

**Mac v12.68 · Einkauf & Lager**
- Einkauf & Lager mit Varianten, Zusatzbedarf, Umlagerung, Lieferantenkontakten und Auftragsbestätigung.

**Mac v12.67 · OP-Liste, Versand, Kundenbestellungen, Kasse**
- Neue OP-Liste der offenen Posten.
- Versand mit Picker, Pickliste und eigener Auslieferung.
- Kundenbestellungen.
- Kasse mit Teilzahlung, Cashback und Retoure.

### GitHub-Zweig v12.66–v12.68

**GitHub v12.68 · 27.11.2026 · Anmeldung: root als Kachel**
- Der Knopf „Als root einloggen“ und der Hinweistext darunter sind weg. root ist die letzte Kachel unter „1. Person wählen“ (PIN 1337).
- Alle anderen Demo-Benutzer melden sich mit PIN 1234 an. Die root-PIN gilt bei ihnen nicht mehr.
- Bei falscher PIN steht nur noch „PIN nicht erkannt.“
- ⚠️ Diese Version wurde nicht einzeln gemergt (PR #11 geschlossen), sie steckt in v12.71.

**GitHub v12.67 · 25.–27.11.2026 · E-Rechnungsdaten an Kunde und Kasse**
- Am Kunden lässt sich das Rechnungsformat wählen: Automatisch, ZUGFeRD, XRechnung oder PDF/A.
- Beim Kauf auf Rechnung wählt man in der Kasse das Format (Vorgabe vom Kunden) und trägt Leitweg-ID bzw. Käuferreferenz (bei XRechnung Pflicht), Bestellnummer, Vertragsnummer, Vergabe-/Losnummer und Leistungsdatum ein. Die Angaben stehen auf der Rechnung und in der XML.
- Alle Demo-Rechnungen haben jetzt einen Kunden und damit eine E-Rechnung. Werkstatt-Rechnungen tragen die richtige Rechnungsnummer und die XML.
- ⚠️ Der erste Teil wurde am 25.11. ohne Versionsnummer gemergt. Die Demo-Rechnungen (PR #10) kamen nur über v12.71 dazu.

**v12.66 · 25.11.2026 · PDFs mit echtem Text**
- Alle PDFs der Kasse (Bon, Rechnung, Listen, Werkstatt-Belege, Z-Bericht, Paketlabel, QR-Etiketten) enthalten echten Text statt Seitenbildern. Sie sind durchsuchbar, kopierbar, schärfer und etwa 3- bis 5-mal kleiner.
- Jedes PDF ist als PDF/A-3b aufgebaut.
- ZUGFeRD-Kunden bekommen die factur-x.xml, XRechnung-Kunden die xrechnung.xml im Rechnungs-PDF, auch beim normalen Rechnungsdruck.
- Das Paketlabel ist jetzt maßstabsgetreu.

---

### v12.65 · 23.11.2026 · Z-Bericht A4: Zählprotokoll
- Das Zählprotokoll im A4-Z-Bericht steht unten über die ganze Breite (3 Stückelungen je Zeile).
- Es bleibt beim Seitenumbruch zusammen und trägt Z-Nummer und Datum. Ein normaler Tag passt auf eine Seite.

### v12.64 · 21.11.2026 · Kassenabschluss: neues Druckbild, Umsatz nach Rubrik
- Der Z-Bericht als Bon (80 mm) sieht aus wie der Kassenbeleg: Logo, gestrichelte Trenner, umbrochene Begründung, zwei Unterschriftszeilen.
- Der Z-Bericht als A4 sieht aus wie die Rechnung: vier Kennzahlen, Abgleich als Tabelle Kasse/Bericht/Differenz, Zählprotokoll, Unterschriftsfelder.
- Der Kassenabschluss zeigt den Umsatz nach Rubrik (Warengruppe), auch im Z-Bericht. Werkstatt-Belege erscheinen als „Werkstatt“.
- Behoben: A4-PDFs hatten manchmal eine leere Folgeseite.

### v12.63 · 21.11.2026 · GiroCode mit Test-IBAN
- Statt der ungültigen Demo-IBAN steht die gültige Muster-IBAN DE89 3704 0044 0532 0130 00 im System. Dadurch erscheint der GiroCode „Online bezahlen“ auf offenen Rechnungen.
- Die Rechnung kennzeichnet ihn als Test („bitte nicht überweisen“, Verwendungszweck „TEST …“).

### v12.62 · 21.11.2026 · Bedienungsanleitung aktualisiert
- Neues Kapitel „Inventur & Import“.
- Ergänzt wurden: Versand- und Werkstattauftrag aus Angeboten, Module (nur root), DHL Kleinpaket, QR-Code nur auf dem Bon, GiroCode auf offenen Rechnungen, Wetter-Standort je Kasse und Folgen ausgeschalteter Module.
- Alle Ergänzungen gibt es in DE, EN, FR, ES und PT.

### v12.61 · 21.11.2026 · GiroCode auf offenen Rechnungen
- „Rechnung online abrufen“ steht nur noch auf dem Kassenbon, nicht mehr auf der Rechnung.
- Offene Rechnungen (Zahlart Rechnung) tragen einen GiroCode „Online bezahlen“ mit IBAN, Betrag und Rechnungsnummer.

### v12.60 · 21.11.2026 · DHL-Testetikett
- Unter Einstellungen › Versand › DHL-Sandbox legt der Knopf „Testetikett erstellen“ eine Probesendung im gewählten Format an, storniert sie sofort und öffnet das PDF.

### v12.59 · 21.11.2026 · DHL-Etikettformate, Kleinpaket
- In der DHL-Sandbox ist das Etikettformat wählbar (A4, Thermo 103 × 199/150 mm, Laser, 100 × 70 mm). Das PDF kommt unverändert von DHL. Standard ist der DHL-Aufkleber A5 (910-300-700).
- DHL Kleinpaket ist über die neue Verpackung „Kleinpaket-Karton“ (35 × 25 × 8 cm) wählbar. 100 × 70 mm gibt es nur mit Kleinpaket.
- Der Verbindungstest prüft den Zugang und die Absenderadresse getrennt und meldet eine unbekannte Absenderadresse verständlich.

### v12.58 · 21.11.2026 · Einstellungen umbenannt, Versand vorne, DHL-Sandbox
- „Shop“ heißt jetzt „Firma & Kasse“, „Shop & Lagerorte“ heißt „Lagerorte & Standorte“.
- Der neue Reiter „Versand“ steht in den Einstellungen ganz vorne, mit Karten für die Dienstleister.
- Dienstleister lassen sich auf Aktiv oder Inaktiv stellen. Von Haus aus ist nur DHL aktiv.
- DHL lässt sich echt über die DHL-Sandbox anbinden: Verbindung testen, Etikett erstellen, Storno. Der Live-Betrieb ist gesperrt.
- Neues Anleitungskapitel „Versanddienstleister anbinden“ in fünf Sprachen.

### v12.57 · 17.11.2026 · Werkstattauftrag aus Angebot
- Bei einem angenommenen Angebot wählt man zwischen „Versandauftrag anlegen“ und „Werkstattauftrag anlegen“.
- Der Werkstattauftrag (WA-Nummer) übernimmt die Angebotspositionen als Voranschlag und den Angebotsbezug. Arbeitszeiten trägt man von Hand ein.

### v12.56 · 17.11.2026 · Auftrag aus Angebot
- Ein angenommenes Angebot hat den Knopf „Auftrag anlegen“. Er erzeugt einen offenen Versandauftrag (V-Nummer) mit Kunde, Anschrift und Positionen. Das Angebot zeigt danach die Auftragsnummer.

### v12.55 · 13.11.2026 · Schnellere Updates
- Nach einem Update lädt der Browser nur die geänderten Dateien neu, der Rest bleibt im Zwischenspeicher. Der Webspace komprimiert die Dateien.

### v12.54 · 13.11.2026 · Kürzere Ladezeit
- Sprachdatei und Bedienungsanleitung werden erst geladen, wenn eine Fremdsprache aktiv ist oder die Anleitung geöffnet wird. Der Start auf Deutsch lädt rund 490 KB weniger.
- ⚠️ Eine zweite Fassung „v12.54 – Anbindung an das zykol ERP, Offline-Kasse“ liegt als offener PR #1 vor und ist nicht in main.

### v12.53 · 10.11.2026 · Modulschalter
- Unter Einstellungen › Module (nur root) lassen sich Module ein- und ausschalten: Lager, Personal, Zeiterfassung, News, Ausschreibungen, Werkstatt, zusätzliche Kassen, Fremd-ERP, Großhandel sowie die Kanu-Module Boote & Paddel und Regatten.
- Menü, Einstellungen, Dashboard, Kalender und Rechte richten sich danach. Verkauf und Werkstatt buchen Bestand nur mit Lager-Modul, Urlaub gibt es nur mit Personal-Modul.
- Großhandel ist in Vorbereitung und braucht das Lager-Modul.

### v12.52 · 10.11.2026 · Besser auf dem Handy (Stufe 1)
- Eingabefelder mit 16 px Schrift, damit Safari beim Antippen nicht mehr zoomt.
- Knöpfe mindestens 40 px hoch, das Plus an Artikeln 44 px.
- Kein Zoom durch Doppeltippen, kein Aufblitzen beim Tippen, Fußleiste mit Abstand zum iPhone-Rand.

### v12.51 · 09.11.2026 · Inventur & Import
- Neuer Reiter unter „Artikel & Bestand“.
- **CSV-Import:** Vorlage leer oder mit aktuellem Bestand (eine Spalte je Lagerebene). Beim Import erkennt die Kasse die Vorlage, ein Spalten-Assistent hilft bei fremden Dateien. Man kann den Bestand setzen oder Mengen addieren, unbekannte Artikel und Lagerorte werden angelegt.
- **Inventur:** Stichtag, Zählliste als PDF/CSV, Zählen per Eingabe, Scanner oder CSV. Die Differenzliste zeigt den EK-Wert und verlangt eine Begründung. Der Abschluss bucht und schreibt ein Protokoll.
- Neue Rechte: Inventur durchführen, zählen, Bestand importieren.

### v12.50 · 09.11.2026 · CSV-Bestandsimport
- Erster CSV-Import für den Bestand unter „Artikel“. Er ging in v12.51 im neuen Reiter auf.
- ⚠️ v12.46 bis v12.49 wurden im Artifact veröffentlicht, aber nicht einzeln eingecheckt. Ihr Inhalt ist nicht getrennt belegt und steckt in v12.50.

### v12.45 · 04.11.2026 · Wetter-Standort je Kasse
- Der Wetter-Ort ist je Kasse wählbar: Ortssuche mit Vorschlägen, PLZ oder Koordinaten. Standard ist der Ort des Shops.
- Die Wetter-Kachel auf dem Dashboard zeigt den Ortsnamen. Ohne Netz erscheint ein ruhiger Hinweis.

### v12.44 · 04.11.2026 · Bedienungsanleitung aktualisiert
- ⚠️ Der Commit nennt keine Einzelheiten.

### v12.43 · 04.11.2026 · Kanu-News und Wetter
- Auf dem Dashboard läuft ein Kanu-News-Ticker.
- Der Kalender zeigt das Wetter.

### v12.42 · 02.11.2026 · Versandetiketten als Nachbildung
- Versandetiketten nach den Vorlagen der Dienstleister: DHL 103 × 199 mm, DPD A6, UPS 4 × 6″, mit lesbaren Strichcodes und dem Aufdruck MUSTER.
- Seit v12.79 kommen DHL-Etiketten aus der Sandbox.

---

## Oktober 2026

### v12.41 · 27.10.2026 · Kassenabschluss
- Neuer Kassenabschluss: Abgleich von Karte und PayPal, Bargeld nach Stückelung zählen, Z-Bericht.
- Im Versand sind die Kennzahl-Kacheln anklickbar. Die Etikett-Vorschau ist ein Paketlabel 100 × 150 mm.
- ⚠️ v12.33 war ein erster Kassenabschluss, nur intern und nicht eingecheckt. Für v12.34 bis v12.39 gibt es weder Tags noch Commits.

### v12.40 · 27.10.2026 · Versand
- Neuer Bereich Versand: Aufträge, Kommissionieren & Packen, Etiketten & Tracking, Retouren. DHL nach deutschen Vorgaben, dazu UPS und DPD (Sandbox).
- ⚠️ Diese Version wurde außerhalb des Projekt-Threads gebaut.

### v12.32 · 23.10.2026 · Werkstatt-Beleg wählbar
- Beim Abrechnen in der Werkstatt wählt man Bon oder Rechnung (bei Zahlart Rechnung ist die Rechnung Pflicht).
- Die Rechnungsanschrift lässt sich nachtragen. Ein Zweitbeleg bucht nicht noch einmal.
- Behoben: Die PDF-Vorschau blockierte manchmal.

### v12.31 · 23.10.2026 · Werkstatt abrechnen
- Nach dem Abrechnen eines Werkstattauftrags erscheint sofort der Bon bzw. die Rechnung mit Auftragsnummer und Gerät. Später lässt er sich aus der Übergabe erneut öffnen.

### v12.30 · 23.10.2026 · Auswahlfelder in Safari
- Alle Auswahllisten funktionieren in Safari.

### v12.29 · 23.10.2026 · Urlaub
- Unter Zeiterfassung › Urlaub: Anspruch, Anträge, Genehmigung, Anzeige in Kalender und Dashboard.
- Feiertage richten sich nach dem Bundesland des Standorts (Standard Berlin).

### v12.28 · 23.10.2026 · Safari, Kalender für Werkstatt
- Weitere Auswahlfelder funktionieren in Safari.
- Die Rolle Werkstatt sieht den Kalender.

### v12.27 · 23.10.2026 · Werkstatt-Auswahllisten
- In der Werkstatt gibt es eine Material-Auswahl (Ersatzteile und Zubehör mit Bestand), Mitarbeiter je Protokolleintrag und Textvorschläge für Eingang und Übergabe.
- Vorbelegte Demo-Aufträge.
- Die Aufgabe „Werkstatt abrechnen“ steht auf dem Dashboard oben und ist hervorgehoben.

### v12.26 · 23.10.2026 · Rolle Werkstatt (Technik)
- Die Rolle sieht nur Dashboard, Werkstatt und Zeiterfassung und kassiert nicht.
- Im Werkstatt-Eingang lässt sich ein neuer Kunde anlegen.
- „Zur Abrechnung an Kasse übergeben“ legt eine Aufgabe für den Verkauf an.

### v12.25 · 23.10.2026 · Ausschreibungen aus Notion
- Ausschreibungen lassen sich aus Notion übernehmen (Stand 23.10.2026, 48 Einträge). Doppelte werden erkannt, die Vergabestelle wird zugeordnet oder angelegt.

### v12.24 · 23.10.2026 · ZUGFeRD-PDF, Werkstatt-Katalog, neue Demo-Benutzer
- Die ZUGFeRD-Rechnung enthält die eingebettete factur-x.xml.
- Werkstatt-Leistungskatalog mit 28 Arbeitsschritten und 16 Demo-Aufträgen.
- Das Menü ist nach dem Ladenalltag sortiert, Dashboard fest oben.
- Neue Demo-Benutzer mit Alliterationen (Marko Markt, Anke Amtmann, Jens Justiz, Lena Lehrling, Bernd Bedarf, Tina Takt, Werner Werkstatt) und die neue Rolle Werkstatt (Technik).

### v12.23 · 22.10.2026 · Ausschreibungen
- Neuer Bereich Ausschreibungen: Vergaben mit Losen, Fristen und Eignungsnachweisen, Angebot mit Kalkulation. Die Vergabenummer geht bis in die XRechnung.
- Fristen unter 7 Tagen erscheinen in Kalender und Dashboard.

### v12.22 · 22.10.2026 · E-Rechnung
- E-Rechnungen als ZUGFeRD 2.3 und XRechnung 3.0 aus den Belegen. Die Übermittlung ist simuliert.
- Neuer Kundentyp „Öffentliche Hand“ mit Leitweg-ID.

### v12.21 · 22.10.2026 · Zahlungsarten
- In den Einstellungen lassen sich Zahlungsarten ein- und ausschalten und sortieren. Neu sind PayPal, Gutschein und Vorkasse. Die Anbindung ist simuliert.

### v12.20 · 22.10.2026 · Bestand je Lagerort
- Bestand wird je Lagerort geführt und lässt sich umlagern. Der Wareneingang lässt sich auf mehrere Orte aufteilen.
- Werkstatt-Stundensatz und Freigabe-Schwelle sind einstellbar.

### v12.19 · 22.10.2026 · Werkstatt
- Neuer Bereich Werkstatt: Aufträge in sechs Schritten.
- Fremdprodukte des Kunden bekommen eine Produktakte und einen QR-Code.

### v12.18 · 22.10.2026 · Lagerorte
- Lagerorte als Baum mit frei benannten Ebenen (1 bis 4).
- Standardplatz je Artikel, Einlagerort beim Wareneingang.

### v12.17 · 22.10.2026 · Angebot im Warenkorb
- In der Kasse lässt sich aus dem Warenkorb ein Angebot zusammenstellen.
- „Artikel & Bestand“ dürfen alle Mitarbeiter außer Aushilfen öffnen.

### v12.16 · 22.10.2026 · Artikel & Bestand
- Artikel und Bestand sind auf einer Seite zusammengelegt.
- Bestand ändert sich nur über eine Buchung mit Grund, über einen Wareneingang zur Lieferantenbestellung oder über einen Verkauf.

### v12.15 · 22.10.2026 · Stempelübersicht auf dem Handy
- Die Stempelübersicht der Zeiterfassung überlappt auf dem Handy nicht mehr, die Werte sind beschriftet.

### v12.14 · 22.10.2026 · Seitenleiste auf dem Handy
- Die Seitenleiste ist auf dem Handy nicht mehr ausklappbar.

### v12.13 · 22.10.2026 · Übersetzungen
- Übersetzt sind jetzt auch Umsatz-Dashboard, Fußleiste, Kalender und Bedienhilfen. Der Menüname ist kürzer.

### v12.12 · 22.10.2026 · Tooltip nur bei Hover
- Der Tooltip der Seitenleiste erscheint nur noch bei echtem Hover, nicht mehr dauerhaft auf iPhone und iPad.

### v12.11 · 22.10.2026 · Übersetzungen Bestand
- „Bestand“ ist eindeutig übersetzt (EN Stock, ES Existencias). Die Überschrift des Umsatz-Dashboards ist übersetzt.

### v12.10 · 21.10.2026 · Rechnung nur mit Kunde, Rabatt ab Filialleitung
- Eine Rechnung lässt sich nur mit Kunde ausstellen.
- Rabatt geben darf erst die Filialleitung.
- ⚠️ Im alten Repo `matuu78/zykol` (Branch main bzw. `claude/zykol-server-offline`) gibt es einen eigenen Server-Zweig mit Tags v12.00–v12.10. Er ist hier nicht beschrieben.

### v12.09 · 21.10.2026 · Kundenumsatz
- Der Kundenumsatz wird aus den hinterlegten Belegen berechnet.

### v12.08 · 21.10.2026 · Bestellvorschlag
- Bestellvorschlag je Lieferant, Knopf „Neuer Artikel“. Zhik wird nur direkt bestellt.

### v12.07 · 21.10.2026 · Menüpunkt Bestellungen
- Neuer Menüpunkt Bestellungen mit Kunden- und Lieferantenbestellungen.

### v12.06 · 21.10.2026 · Kundenakte
- Die Kundenakte zeigt Bestellungen, Angebote und Termine.

### v12.05 · 21.10.2026 · Rechnungsangaben, Menüpfeil
- Die Angaben der Beispielrechnung sind übernommen. Der Pfeil im Menü sitzt am Symbol.

### v12.04 · 21.10.2026 · Rechnungslayout
- Das Rechnungslayout folgt der abgestimmten Vorschau.

### v12.03 · 21.10.2026 · Belege beim Kunden, Barkunde
- Bons und Rechnungen stehen beim Kunden. Neu ist der „Barkunde“ für Verkäufe ohne Kundendaten.

### v12.02 · 21.10.2026 · Demo-Belege auf beleg.zykol.de
- Die Demo-Belege gibt es als PDF auf beleg.zykol.de, mit festem Belegdatum.

### v12.01 · 21.10.2026 · Urlaub, Zeiterfassung
- Urlaub beantragen und Zeiterfassung. Die Menügruppe Warenwirtschaft lässt sich zuklappen.

### v12.00 · 21.10.2026 · Neue Hauptversion
- ⚠️ Der Commit nennt keine Einzelheiten.

### v11.15 · 21.10.2026
- Die Umsatz-Kennzahlen laufen nicht mehr über den Rand der Kacheln.

### v11.14 · 21.10.2026
- Warenwirtschaft: Unterpunkte und Kacheln sind alphabetisch sortiert.

### v11.13 · 21.10.2026
- Warenwirtschaft hat eine Übersicht mit Kacheln.

### v11.12 · 21.10.2026
- Schichtplan als Reiter im Kalender (nur Ansicht).

### v11.11 · 21.10.2026
- Arbeitszeiterfassung als eigener Hauptmenüpunkt.

### v11.10 · 21.10.2026
- Neue Menügruppe Warenwirtschaft mit aufklappbarem Untermenü.

### v11.07–v11.09 · 21.10.2026
- Umsatz (v11.07), Berichte (v11.08) und Transaktionen (v11.09) sind Reiter im Dashboard statt eigener Menüpunkte.

### v11.06 · 21.10.2026
- Das Umsatz-Dashboard ist ein Untermenü des Dashboards.

### v11.04–v11.05 · 17.10.2026
- ⚠️ Stand aus dem Webspace-ZIP übernommen. Der Commit nennt keine Einzelheiten.

### v11.03 · 17.10.2026
- „Drucken“ öffnet eine PDF-Vorschau im richtigen Format.

### v11.02 · 16.10.2026
- Der Kassenbeleg hat das Bonrollen-Format (80 mm).

### v11.01 · 16.10.2026
- Die Bedienungsanleitung beschreibt das Bezahlen mit Belegausgabe und die Belege am Vorgang (5 Sprachen).

### v11.00 · 16.10.2026
- Beim Bezahlen wählt man die Belegausgabe. Die Belege hängen am Vorgang.

### v10.08 · 14.10.2026
- Technisch: Die Versionsnummer steht nur noch an einer Stelle, Update-Pakete enthalten nur geänderte Dateien. Für die Bedienung ändert sich nichts.

### v10.07 · 14.10.2026
- Der Kassenbeleg zeigt die echte Zahlart (Bar, Karte, Rechnung), Gegeben und Rückgeld sowie die Positionen aus dem Warenkorb.

### v10.06 · 14.10.2026
- ⚠️ Der Commit nennt keine Einzelheiten.

### v10.05 · 14.10.2026
- Die Bedienungsanleitung ist ergänzt (Bezahlen, Bestellbeleg, Bestellbelege, Boots-QR).

### v10.04 · 14.10.2026
- Im Bestellbeleg kann man Kunden suchen und neu anlegen.

### v10.03 · 14.10.2026
- Der Bestellbeleg trägt die Bezahlart. Übergeben wird nur, was bezahlt ist oder auf Rechnung geht.

### v10.02 · 14.10.2026
- Neuer Bereich Bestellbelege: Gedruckte Bestellbelege werden abgelegt.

### v10.01 · 14.10.2026
- Im Warenkorb gibt es Bezahlen (Karte, Bar, Rechnung), Bestellbeleg und Angebot.
- QR-Etiketten für Boote.

### v10.00 · 11.10.2026
- ⚠️ Der Commit nennt keine Einzelheiten.

### v9.01 · 11.10.2026
- Technisch: Die App ist in Teile unter 200 KB aufgeteilt. Für die Bedienung ändert sich nichts.

### v9.00 · 11.10.2026
- Die Versionsnummer steht in der Fußzeile.

### v8.13 · 11.10.2026
- Die Dokumentvorlage ist eine eigene Seite. Belege funktionieren damit auch in der Webversion.

### v8.12 · 11.10.2026
- Die Bedienungsanleitung ist ergänzt (Bestellbeleg, Druckansicht in der App).

### v8.11 · 11.10.2026
- Übersetzungen in Englisch, Französisch, Spanisch und Portugiesisch.

### v8.1 bis v8.10 · 10.–11.10.2026
- ⚠️ Diese Commits nennen keine Einzelheiten. Die Historie in Git beginnt mit v8.1. Ältere Stände (Idee, Personas und erster Prototyp ab August/September 2026) sind nicht eingecheckt.
