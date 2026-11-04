// zykol.POS – Bedienungsanleitung (DE, EN, FR, ES, PT). Quelle für die Ansicht in Einstellungen und für das PDF. Stand v12.44.
window.ZYKOL_ANLEITUNG = {
  "version": "v12.44",
  "meta": [
    {
      "id": "anmelden",
      "view": null,
      "recht": null
    },
    {
      "id": "dashboard",
      "view": "dashboard",
      "recht": null
    },
    {
      "id": "kasse",
      "view": "kasse",
      "recht": "Verkauf kassieren"
    },
    {
      "id": "bezahlen",
      "view": "kasse",
      "recht": "Verkauf kassieren"
    },
    {
      "id": "kassenabschluss",
      "view": "kassenabschluss",
      "recht": "Verkauf kassieren"
    },
    {
      "id": "bestellbeleg",
      "view": "kasse",
      "recht": "Bestellbeleg personalisiert drucken"
    },
    {
      "id": "bestellbelege",
      "view": "bestellbelege",
      "recht": "Bestellbeleg personalisiert drucken"
    },
    {
      "id": "angebote",
      "view": "angebote",
      "recht": "Angebote erstellen & versenden"
    },
    {
      "id": "stammdaten",
      "view": "kunden",
      "recht": "Kunden verwalten"
    },
    {
      "id": "werkstatt",
      "view": "werkstatt",
      "recht": "Werkstatt ansehen"
    },
    {
      "id": "versand",
      "view": "versand",
      "recht": "Versand ansehen"
    },
    {
      "id": "artikel",
      "view": "artikel",
      "recht": "Artikel & Bestand ansehen"
    },
    {
      "id": "etiketten",
      "view": "verkaufteBoote",
      "recht": "QR-Etiketten drucken"
    },
    {
      "id": "ausschreibungen",
      "view": "ausschreibungen",
      "recht": "Ausschreibungen ansehen"
    },
    {
      "id": "erechnung",
      "view": "einstellungen",
      "recht": "Einstellungen & Benutzer"
    },
    {
      "id": "kalender",
      "view": "kalender",
      "recht": null
    },
    {
      "id": "zeiterfassung",
      "view": "zeiterfassung",
      "recht": null
    },
    {
      "id": "transaktionen",
      "view": "transaktionen",
      "recht": "Journal & Transaktionen einsehen"
    },
    {
      "id": "berichte",
      "view": "umsatz",
      "recht": "Berichte einsehen"
    },
    {
      "id": "einstellungen",
      "view": "einstellungen",
      "recht": "Einstellungen & Benutzer"
    }
  ],
  "sprachen": {
    "de": {
      "name": "Deutsch",
      "ui": {
        "titel": "Bedienungsanleitung",
        "untertitel": "Schritt für Schritt durch zykol.POS. Für alle Benutzer.",
        "suche": "In der Anleitung suchen",
        "kapitel": "Kapitel",
        "treffer": "{n} Kapitel",
        "keine": "Keine Treffer. Anderen Begriff versuchen.",
        "tipp": "Tipp",
        "verfuegbar": "Für Sie freigegeben",
        "benoetigt": "Benötigt Recht",
        "oeffnen": "Ansicht öffnen",
        "pdf": "Als PDF öffnen",
        "alle": "Alle Sprachen als PDF",
        "inhalt": "Inhalt",
        "stand": "Stand",
        "schritte": "Schritte",
        "alleNutzer": "Für alle Benutzer",
        "sprache": "Sprache"
      },
      "rechte": {
        "Verkauf kassieren": "Verkauf kassieren",
        "QR-Etiketten drucken": "QR-Etiketten drucken",
        "Angebote erstellen & versenden": "Angebote erstellen & versenden",
        "Journal & Transaktionen einsehen": "Journal & Transaktionen einsehen",
        "Kunden verwalten": "Kunden verwalten",
        "Berichte einsehen": "Berichte einsehen",
        "Einstellungen & Benutzer": "Einstellungen & Benutzer",
        "Bestellbeleg personalisiert drucken": "Bestellbeleg personalisiert drucken",
        "Werkstatt ansehen": "Werkstatt ansehen",
        "Versand ansehen": "Versand ansehen",
        "Artikel & Bestand ansehen": "Artikel & Bestand ansehen",
        "Ausschreibungen ansehen": "Ausschreibungen ansehen"
      },
      "kapitel": {
        "anmelden": {
          "titel": "Anmelden",
          "intro": "Jede Person meldet sich mit eigenem Namen und PIN an. So werden Verkäufe und Änderungen eindeutig zugeordnet.",
          "schritte": [
            "Oben rechts die Kasse wählen. Angezeigt werden nur Kassen, denen Sie zugeordnet sind.",
            "Unter „1. Person wählen“ Ihren Namen antippen.",
            "Unter „2. PIN eingeben“ die PIN über das Ziffernfeld oder die Tastatur eingeben und „Anmelden“ antippen. Enter meldet ebenfalls an, ← löscht die letzte Ziffer, C leert das Feld.",
            "Kasse kurz verlassen: „Sperren“ in der Fußleiste antippen. Zum Entsperren die PIN eingeben – der Warenkorb bleibt erhalten.",
            "Ganz abmelden: „Abmelden“ unten in der Seitenleiste."
          ],
          "tipp": "PIN vergessen? Über „PIN vergessen?“ auf der Anmeldeseite geht eine Anfrage an Filialleitung oder Admin. Die Sprache stellt root unter Einstellungen → Admin ein."
        },
        "dashboard": {
          "titel": "Dashboard",
          "intro": "Das Dashboard zeigt, was heute zu tun ist, und bündelt Umsatz, Berichte und Transaktionen in Reitern.",
          "schritte": [
            "Oben zwischen den Reitern „Übersicht“, „Umsatz“, „Berichte“ und „Transaktionen“ wechseln. Sie sehen nur die Reiter, für die Sie das Recht haben.",
            "Unter der Begrüßung läuft der Newsticker „Kanu-News“ mit aktuellen Meldungen aus dem Kanusport. Fährt die Maus darüber, hält er an. Eine Schlagzeile antippen öffnet den Artikel, „Alle News“ zeigt alle Meldungen mit Kurzfassung.",
            "Läuft in weniger als 7 Tagen eine Ausschreibungsfrist ab, erscheint ein gelber Hinweis. Antippen öffnet die Ausschreibung.",
            "Kacheln antippen, um zu filtern: Überfällig, Termine heute, Offene Aufgaben heute, Termine bis Sonntag.",
            "Erledigte Aufgaben über das Kästchen abhaken. „Morgen“ schiebt eine Aufgabe auf den nächsten Werktag, „Alle auf heute“ holt überfällige Aufgaben auf heute.",
            "Automatische Aufgaben stehen mit dabei, z. B. „Werkstatt abrechnen“ (ganz oben) oder offene Urlaubsanträge für Genehmigende. Der Knopf an der Aufgabe öffnet den passenden Bereich.",
            "Eigene Aufgaben unten eintragen, einen Werktag wählen und „Hinzufügen“ antippen. Mit dem Recht „Aufgaben delegieren“ geben Sie eine Aufgabe über „Verteilen an …“ einem Kollegen."
          ],
          "tipp": "Ohne eingetragene n8n-Adresse zeigt der Newsticker Beispielmeldungen. Admins tragen die Adresse unter Einstellungen → Shop & Lagerorte → „Kanu-News im Dashboard“ ein."
        },
        "kasse": {
          "titel": "Verkaufen an der Kasse",
          "intro": "Artikel suchen, Variante wählen, in den Warenkorb legen.",
          "schritte": [
            "Oben eine Rubrik wählen (z. B. Boote, Paddel) oder nach Name oder Hersteller suchen. Ein gescannter Barcode findet den Artikel sofort.",
            "Artikel antippen und die Variante wählen, z. B. Länge, Blatt, Größe, Farbe oder Seriennummer.",
            "Im Warenkorb Mengen ändern oder Positionen entfernen. Auf Tablet und Handy öffnet der Warenkorb-Knopf in der Fußleiste den Warenkorb – von jeder Seite aus.",
            "Kunden zuordnen: Namen oder Nummer eingeben oder „Kundenliste öffnen“. Ein hinterlegter Kundenrabatt wird automatisch abgezogen. Ohne Kundendaten „Barkunde (ohne Kundendaten)“ wählen.",
            "Unter dem Gesamtbetrag stehen „Bezahlen“, „Bestellbeleg“ und „Als Angebot speichern“.",
            "„Kasse“ in der Fußleiste bringt Sie von jeder Seite zurück zur Kasse und schließt offene Fenster."
          ],
          "tipp": "Jede Kasse hat ihren eigenen Warenkorb. Ein Wechsel der Kasse löscht ihn nicht. Verkäufe buchen den Bestand zuerst von der Verkaufsfläche ab."
        },
        "bezahlen": {
          "titel": "Bezahlen und Beleg",
          "intro": "Zahlart wählen, bezahlen, Bon und Rechnung ausgeben. Die Belege hängen danach am Vorgang.",
          "schritte": [
            "Im Warenkorb „Bezahlen“ antippen. Darunter erscheint „Zahlart wählen“ mit den Zahlarten, die unter Einstellungen → Zahlungsarten eingeschaltet sind, z. B. Karte, Bar, PayPal, Rechnung, Gutschein oder Vorkasse. „Zurück“ klappt die Auswahl wieder zu.",
            "Karte: Der Kunde zahlt am Terminal. PayPal: Der Kunde zahlt per QR-Code. Bar: den gegebenen Betrag eingeben oder einen Schnellbetrag wählen, das Rückgeld erscheint sofort. Rechnung: für Rechnungskunden wie Vereine, Firmen und öffentliche Auftraggeber.",
            "Enthält der Einkauf ein Boot, zeigt der Dialog seine Seriennummer und „QR-Etiketten drucken“. Bei Paddeln auf Rechnung werden die Paddel-IDs vergeben.",
            "Im Dialog „Bezahlen“ antippen. Es erscheint die Belegausgabe.",
            "Bei Karte, Bar und PayPal wird der Bon immer gedruckt. Zusätzlich optional „Rechnung drucken“ oder „Rechnung per E-Mail senden“ wählen.",
            "Zahlart Rechnung: Es gibt keinen Bon, die Rechnung ist Pflicht. Für Firmen, Vereine und öffentliche Auftraggeber entsteht sie als E-Rechnung (Kapitel E-Rechnung).",
            "„Abschließen“ antippen. Ein Hinweis bestätigt den Abschluss; „Öffnen“ zeigt den Vorgang in den Transaktionen."
          ],
          "tipp": "Jeder Beleg trägt einen QR-Code, über den Kunden ihn online abrufen. TSE, Kartenterminal, PayPal, Drucker und E-Mail-Versand sind im Prototyp simuliert."
        },
        "kassenabschluss": {
          "titel": "Kassenabschluss",
          "intro": "Am Ende des Tages unbare Zahlungen abgleichen, Bargeld zählen und den Z-Bericht drucken.",
          "schritte": [
            "In der Navigation „Kassenabschluss“ öffnen. Oben stehen die Umsätze des Tages je Zahlart und die Zahl der Belege.",
            "Reiter „1 · Unbare Zahlungen“: Für Karte und PayPal die Summe laut Terminal- bzw. PayPal-Tagesbericht eintragen. Die Differenz zur Kasse erscheint sofort.",
            "Reiter „2 · Bargeld zählen“: Für jeden Schein und jede Münze die Anzahl mit − und + oder per Eingabe erfassen, bei Münzen auch ganze Rollen. Unten stehen Soll, Ist und Differenz. „Zwischenspeichern“ sichert den Stand, „Zurücksetzen“ leert die Zählung.",
            "Reiter „3 · Abschluss“: Bei einer Differenz die Begründung eintragen (Pflicht). Wechselgeld für morgen angeben; die Bankeinzahlung wird daraus berechnet. Entnahmen und Auszahlungen des Tages mit Betrag und Grund über „+ Entnahme“ erfassen.",
            "„Tag abschließen & Z-Bericht drucken“ antippen. Danach ist der Tag gesperrt.",
            "Reiter „Verlauf“: frühere Abschlüsse ansehen und den Z-Bericht als „Z-Bon“ oder „A4-Bericht“ erneut drucken."
          ],
          "tipp": "Verkauf und Aushilfen machen nur den Kassensturz (Bargeld zählen). Den Tagesabschluss machen Admin, Filialleitung oder Teamleitung."
        },
        "bestellbeleg": {
          "titel": "Bestellbeleg",
          "intro": "Für Ware, die bestellt oder personalisiert wird, gibt es einen eigenen Beleg – getrennt vom Kassenbeleg. Kunde und Bezahlung werden schon beim Erstellen festgelegt.",
          "schritte": [
            "Im Warenkorb „Bestellbeleg“ antippen.",
            "Unter „Positionen“ jede Position aufklappen und bei Bedarf die Personalisierung eintragen, z. B. Bootsname, Sitz auf Kundenmaß oder Paddellänge.",
            "Unter „Kunde, Übergabe & Bezahlung“ den Kunden suchen (Name, Nummer oder Telefon) und antippen. Ist der Kunde neu, die Daten eintragen und „Als neuen Kunden speichern“ antippen.",
            "Übergabe (Abholung, Lieferung oder Versand), Termin und eine Anzahlung eintragen.",
            "Unter „Bezahlung“ wählen: Noch offen, Bezahlt · Karte, Bezahlt · Bar oder Rechnung mit Zahlungsziel in Tagen. Bei Vereinen und Firmen ist Rechnung vorgewählt.",
            "Die Vorschau prüfen und „Drucken / PDF“ antippen. Der Bestellbeleg wird dabei automatisch unter „Bestellungen“ abgelegt."
          ],
          "tipp": "Der Bestellbeleg ist kein Kassenbeleg. Mit der Unterschrift bestätigt der Kunde die Personalisierung."
        },
        "bestellbelege": {
          "titel": "Bestellungen",
          "intro": "Kundenbestellungen mit Bezahlung und Status bis zur Übergabe – und die Bestellungen bei Lieferanten.",
          "schritte": [
            "In der Navigation „Bestellungen“ öffnen. Der Reiter „Kundenbestellungen“ zeigt alle gedruckten Bestellbelege; oben stehen Bestellt, Abholbereit, Übergeben und „Noch zu kassieren“.",
            "Nach Nummer, Kunde, Telefon oder Artikel suchen oder nach Status filtern. Eine Zeile antippen und den Status auf Bestellt, Abholbereit oder Übergeben setzen.",
            "Übergeben geht nur, wenn die Bestellung bezahlt ist oder auf Rechnung läuft. Ist sie noch offen, „Bezahlt mit Karte“, „Bezahlt bar“ oder „Auf Rechnung (14 Tage)“ wählen. „Erneut drucken“ druckt den Beleg so, wie er abgelegt wurde.",
            "Reiter „Lieferantenbestellungen“ (Recht „Lieferanten verwalten“): mit „Neue Bestellung“ Ware beim Lieferanten bestellen oder den „Bestellvorschlag“ für Artikel unter Mindestbestand übernehmen. „Bestellung als PDF“ erzeugt das Bestellschreiben.",
            "Kommt die Ware an, wird sie unter Artikel & Bestand mit „Wareneingang buchen“ zu dieser Bestellung gebucht – auch als Teillieferung."
          ],
          "tipp": "Im Prototyp setzt „Bezahlt mit Karte“ nur den Status; es wird kein Kassenbeleg erzeugt."
        },
        "angebote": {
          "titel": "Angebote",
          "intro": "Angebote erstellen, versenden und bei Zusage in die Kasse übernehmen – auch direkt aus dem Warenkorb.",
          "schritte": [
            "Unter „Angebote“ ein neues Angebot anlegen, Kunden wählen und Positionen mit Rabatt hinzufügen. Die PDF-Vorschau prüfen und versenden.",
            "Positionen bequem zusammenstellen: „Im Warenkorb zusammenstellen“ öffnet die Kasse im Angebotsmodus. Artikel wie gewohnt auswählen und „Ins Angebot übernehmen“ antippen. Kassiert wird dabei nicht, ein angefangener Warenkorb bleibt erhalten.",
            "Den Status pflegen: Entwurf, Versendet, Angenommen, Abgelehnt, Abgelaufen. Angenommene Angebote mit „In Kasse übernehmen“ abrechnen.",
            "Aus dem Warenkorb: „Als Angebot speichern“ legt den Inhalt als Angebot (Entwurf) ab. Ohne Kunde wird das Angebot für einen Barkunden gespeichert.",
            "Später in der Kasse „Angebote aus der Kasse“ öffnen und beim gewünschten Angebot „In Warenkorb laden“ antippen."
          ],
          "tipp": "Die Gültigkeit ergibt sich aus den Shop-Einstellungen. Auslaufende Angebote stehen im Kalender und auf dem Dashboard."
        },
        "stammdaten": {
          "titel": "Kunden",
          "intro": "Kundendaten pflegen, damit Kasse, Belege und Rechnungen stimmen.",
          "schritte": [
            "Unter „Kunden“ einen Kunden anlegen oder suchen und nach Typ filtern: Privat, Verein, Firma, Verband, Schule oder Öffentliche Hand.",
            "Rabatt, Zahlungsbedingung und Rechnungsanschrift hinterlegen. Bei Öffentlicher Hand zusätzlich die Leitweg-ID für die XRechnung eintragen.",
            "Die Kundenakte zeigt Käufe, Umsatz, Belege und gekaufte Boote.",
            "Unter „Produkte des Kunden“ stehen auch Fremdprodukte, die der Kunde zur Werkstatt gebracht hat – mit Etikett und Werkstatthistorie."
          ],
          "tipp": "Auf dem Handy erscheinen Tabellen als Karten, damit nichts abgeschnitten wird."
        },
        "werkstatt": {
          "titel": "Werkstatt",
          "intro": "Werkstattaufträge vom Eingang bis zur Übergabe, auch für Boote und Ausrüstung, die nicht bei Ihnen gekauft wurden (Fremdprodukte).",
          "schritte": [
            "In der Navigation „Werkstatt“ öffnen. Oben stehen Eingang & Voranschlag, In Arbeit, Zur Übergabe und Fremdprodukte; darunter alle Aufträge mit Filter nach Schritt.",
            "„Neuer Werkstattauftrag“ antippen, den Kunden wählen (oder „Kunde anlegen & wählen“) und das Gerät angeben. Ist es kein Produkt aus Ihrem Laden, mit „+ Fremdprodukt anlegen“ erfassen; es wird beim Kunden hinterlegt. „Eingangsbeleg drucken“ gibt dem Kunden eine Quittung.",
            "Ein Auftrag durchläuft sechs Schritte: 1 Eingang, 2 Voranschlag, 3 Auftrag, 4 Reparatur, 5 Abweichungen, 6 Übergabe. Der nächste Schritt öffnet sich erst, wenn der vorige erledigt ist.",
            "Voranschlag: Arbeitsschritte aus dem Katalog und Material aus der Artikelliste wählen, „Voranschlag drucken“. Danach „Kunde gibt frei“ oder „Kunde lehnt ab“.",
            "Reparatur: Arbeitszeit, Material und Textbausteine im Reparaturprotokoll eintragen. Verbrauchtes Material bucht den Bestand ab.",
            "Wird es mehr als freigegeben (Standard: ab 15 %), muss der Kunde erneut zustimmen: „Kunde genehmigt Abweichung“.",
            "Übergabe: „Übergabeprotokoll drucken“ und „Zur Abrechnung an Kasse übergeben“. Der Verkauf bekommt die Aufgabe „Werkstatt abrechnen“ auf dem Dashboard und kassiert in der Kasse. Danach Bon oder Rechnung wählen; bei Zahlart Rechnung ist die Rechnung Pflicht, „Rechnung zum Bon“ erzeugt nachträglich eine Rechnung ohne neue Buchung."
          ],
          "tipp": "Für Fremdprodukte druckt „QR-Etikett drucken“ ein Etikett nur mit QR-Code und Shopname. Der Scan öffnet die Produktakte. Stundensatz, Freigabegrenze und Arbeitsschritt-Katalog stehen unter Einstellungen → Shop & Lagerorte."
        },
        "versand": {
          "titel": "Versand",
          "intro": "Versandaufträge kommissionieren, packen, mit Etikett an DHL, UPS oder DPD übergeben und Retouren bearbeiten.",
          "schritte": [
            "In der Navigation „Versand“ öffnen. Die Kacheln Zu packen, Versandbereit, Heute übergeben und Retouren offen führen direkt zum passenden Reiter.",
            "Reiter „Aufträge“: Versandaufträge aus Kasse, Webshop und Bestellungen. Mit „Versandauftrag anlegen“ einen neuen Auftrag erfassen.",
            "Reiter „Kommissionieren & Packen“: Ware entnehmen („Alles entnommen“), „Als kommissioniert markieren“, an der Packstation „Paket fertig“ antippen und „Weiter zum Etikett“.",
            "Reiter „Etiketten & Tracking“: „Etikett erstellen“, mit „Etikett-Vorschau“ prüfen und „Etikett drucken“. Am Ende „Tagesabschluss und übergeben“; „Sendungsstatus abrufen“ zeigt den Stand der Sendungen.",
            "Reiter „Retouren“: „Retoure anlegen“ oder „Retoure mit Etikett anlegen“. Beim Eintreffen „Eingang buchen“ und die Ware als „Einwandfrei“ (zurück ins Lager) oder „Beschädigt“ einstufen.",
            "Reiter „Dienstleister“: Zugänge zu DHL, UPS und DPD eintragen und „Verbindung testen“."
          ],
          "tipp": "Die Etiketten sind Nachbildungen der Dienstleister-Vorlagen mit dem Aufdruck MUSTER. Die Anbindung an DHL, UPS und DPD ist im Prototyp simuliert."
        },
        "artikel": {
          "titel": "Artikel, Bestand und Lieferanten",
          "intro": "Unter „Warenwirtschaft“ liegen Artikel & Bestand, Lieferanten und Verkaufte Boote. Ein Tipp auf „Warenwirtschaft“ zeigt alle Bereiche als Kacheln.",
          "schritte": [
            "„Artikel & Bestand“, Reiter Artikel: Artikel suchen, nach Rubrik, Hersteller oder Lagerort filtern. Mit „Neuer Artikel“ anlegen (Admin, Filialleitung, Einkauf): Hersteller, Preise, Steuersatz, Varianten und Standardplatz.",
            "Der Bestand ändert sich nur durch Verkauf, Wareneingang oder eine Buchung mit Grund. Plus- und Minus-Knöpfe gibt es bewusst nicht.",
            "„Buchen“: Schwund, Defekt oder Sonstiges mit Grund (Pflicht) buchen. Das dürfen Admin, Filialleitung und Teamleitung.",
            "„Wareneingang buchen“: immer zu einer offenen Lieferantenbestellung, auch als Teillieferung und auf mehrere Lagerorte verteilt. Das darf zusätzlich der Einkauf.",
            "„Umlagern“ verschiebt Ware zwischen Lagerorten, z. B. vom Lager auf die Verkaufsfläche. Der Reiter „Lager & Historie“ zeigt Mengen je Ort und jede Bewegung.",
            "„Lieferanten“: Stammdaten, Ansprechpartner, Konditionen, Lieferzeit und offene Bestellungen je Hersteller. „Lieferant hinzufügen“ legt einen neuen an."
          ],
          "tipp": "Die Lagerorte richten Admin und Filialleitung unter Einstellungen → Shop & Lagerorte ein. Orte lassen sich nur deaktivieren, nicht löschen, damit die Historie erhalten bleibt."
        },
        "etiketten": {
          "titel": "Verkaufte Boote, Paddel-IDs und QR-Etiketten",
          "intro": "Boote werden über ihre Seriennummer erkannt, Paddel über eine eigene ID. Beides steht in der Bootsakte unter Warenwirtschaft → Verkaufte Boote.",
          "schritte": [
            "Die Paddel-ID entsteht beim Abschluss mit Rechnung aus Datum und Nummer (z. B. ZKP-261011-416-01) und steht auf der Rechnung.",
            "Enthält ein Abschluss, eine Rechnung oder ein angenommenes Angebot ein Paddel, erscheint „QR-Etiketten drucken“.",
            "Wird ein Boot verkauft, zeigt der Bezahldialog seine Seriennummer mit „QR-Etiketten drucken“. Hat das Boot im Warenkorb noch keine Seriennummer, wird die nächste freie genommen.",
            "Unter „Verkaufte Boote“ steht jede Bootsakte mit Seriennummer, Garantie und Servicehistorie. Von dort ist jederzeit ein Nachdruck des Etiketts möglich."
          ],
          "tipp": "Jeder Druck wird protokolliert, auch Nachdrucke."
        },
        "ausschreibungen": {
          "titel": "Ausschreibungen",
          "intro": "Öffentliche Vergaben von der Sichtung bis zum Zuschlag – mit Fristen, Eignungsnachweisen und Angebot.",
          "schritte": [
            "In der Navigation „Ausschreibungen“ öffnen. Oben stehen Offen, Frist diese Woche, Abgegeben und die Zuschlagsquote. Nach Vergabestelle oder Status filtern.",
            "„Neue Ausschreibung“ legt eine Vergabe mit Vergabenummer, Fristen und Losen („+ Los“) an. „Aus Notion importieren“ zeigt neue Einträge aus der Notion-Datenbank „Ausschreibungen“; Doppelte werden erkannt, „Übernehmen“ legt sie mit Status „Gesichtet“ an.",
            "Den Status Schritt für Schritt setzen: Gesichtet, In Prüfung, Teilnahme beschlossen, Angebot in Arbeit, Abgegeben und am Ende Zuschlag, Absage, Aufgehoben oder Keine Teilnahme.",
            "Eignungsnachweise pflegen. Läuft ein Nachweis bald ab, erscheint eine Warnung.",
            "Das Angebot mit Kalkulation erstellen (Einkaufspreis, Marge). Nach dem Zuschlag entsteht die Rechnung als XRechnung mit Vergabenummer."
          ],
          "tipp": "Fristen stehen im Kalender. Ab 7 Tagen vor der Angebotsabgabe erscheint täglich ein Hinweis auf dem Dashboard. Der Notion-Import ist im Prototyp ein fester Datenstand."
        },
        "erechnung": {
          "titel": "E-Rechnung",
          "intro": "Rechnungen an Firmen, Vereine, Schulen und öffentliche Auftraggeber entstehen als elektronische Rechnung nach EN 16931.",
          "schritte": [
            "Für Firmen, Vereine, Verbände und Schulen entsteht eine ZUGFeRD-Rechnung: ein PDF mit eingebetteter XML-Datei.",
            "Für Kunden vom Typ „Öffentliche Hand“ entsteht eine XRechnung. Dafür muss in der Kundenakte die Leitweg-ID eingetragen sein.",
            "In der Rechnungsliste zeigt ein Haken, ob die E-Rechnung gültig ist.",
            "Unter Einstellungen → E-Rechnung sehen Admins das ZUGFeRD-Profil, die XRechnung-Syntax, die Pflichtangaben des Verkäufers (aus Einstellungen → Shop) und die Übermittlung."
          ],
          "tipp": "Die Prüfung (KoSIT) und der Versand über Peppol sind im Prototyp simuliert. Das ZUGFeRD-PDF ist noch nicht PDF/A-3-konform."
        },
        "kalender": {
          "titel": "Kalender",
          "intro": "Termine für Abholung, Lieferung, Werkstatt, Regatta, Messe, Urlaub und Ausschreibungen – mit dem Wetter für jeden Tag.",
          "schritte": [
            "Einen Monat wählen und einen Tag antippen, um seine Termine zu sehen. Nach Terminart filtern, die Legende erklärt die Farben.",
            "Jeder Tag zeigt das Wetter am Shop-Ort: Symbol, Höchst- und Tiefstwert (auf dem Handy nur der Höchstwert). Beim ausgewählten Tag stehen rechts Wetterlage, Regen und Wind. Für die nächsten 16 Tage ist es die Vorhersage, für vergangene Tage der gemessene Wert.",
            "Mit „Bearbeiten“ einen Termin ändern oder löschen, mit „+ Termin an diesem Tag“ einen neuen anlegen. Auslaufende Angebote ändern Sie im Angebot.",
            "Sonntage und Feiertage sind grau und tragen „Laden geschlossen“. Dort sind nur Regatten möglich. Regatten kommen mit ihren echten Daten aus Kai Kalender und werden nie verschoben.",
            "Genehmigter Urlaub und Ausschreibungsfristen erscheinen automatisch.",
            "Reiter „Schichtplan“: zeigt, wer wann arbeitet. Er ist nur zur Ansicht; geplant wird unter Einstellungen → Benutzer & Rollen."
          ],
          "tipp": "Den Kalender der mobilen Kasse sehen Sie, wenn Sie in der Fußleiste die Kasse wechseln. Den Ort für das Wetter legen Admins unter Einstellungen → Shop & Lagerorte fest."
        },
        "zeiterfassung": {
          "titel": "Arbeitszeiterfassung und Urlaub",
          "intro": "Kommen und Gehen stempeln, Stunden und Saldo sehen, Urlaub beantragen und genehmigen.",
          "schritte": [
            "In der Navigation „Zeiterfassung“ öffnen. Im Reiter „Stempeln“ zu Beginn „Kommen“ und am Ende „Gehen“ antippen. Kasse und Uhrzeit werden protokolliert.",
            "Die Stempelübersicht zeigt je Person Status, Stunden heute und in der Woche, Soll und Saldo.",
            "Reiter „Urlaub“: Ihr Anspruch, Rest aus dem Vorjahr, genommene, geplante und beantragte Tage sowie der Rest.",
            "Urlaub beantragen: Beginn und Ende eintragen, optional eine Notiz, und absenden. Die Arbeitstage werden automatisch gezählt – ohne Wochenenden und Feiertage im Bundesland Ihres Standorts.",
            "Genehmigen (Admin, Filialleitung, Teamleitung): Unter „Offene Urlaubsanträge“ „Genehmigen“ oder „Ablehnen“ antippen. Genehmigter Urlaub steht im Kalender; offene Anträge erscheinen auf dem Dashboard.",
            "Mit dem Recht „Urlaubsanspruch pflegen“ Anspruch, Vorjahresrest und Arbeitstage je Woche für alle Mitarbeitenden eintragen."
          ],
          "tipp": "Das Bundesland je Standort (Standard Berlin) stellen Sie unter Einstellungen → Shop & Lagerorte → „Standorte & Feiertage“ ein."
        },
        "transaktionen": {
          "titel": "Transaktionen",
          "intro": "Alle Verkäufe nachschlagen, Belege ansehen und erneut drucken. Die Transaktionen sind ein Reiter im Dashboard.",
          "schritte": [
            "Im Dashboard den Reiter „Transaktionen“ wählen. Zeitraum wählen: Heute, Gestern, Letzte 7 Tage, Dieser Monat, Vormonat, Quartal oder Benutzerdefiniert. Nach Zahlart oder Status filtern.",
            "Eine Zeile öffnen, um Positionen, TSE-Daten und den digitalen Beleg zu sehen.",
            "Unter „Angehängte Dokumente“ stehen Bon und Rechnung des Vorgangs. „Ansehen“ zeigt das Dokument, „Drucken“ druckt es erneut.",
            "Storno oder Retoure aus dem Belegdetail starten (Recht „Storno / Retoure“)."
          ],
          "tipp": "Jede Kasse hat ein eigenes Journal. Den Tagesabschluss machen Sie im Kassenabschluss."
        },
        "berichte": {
          "titel": "Berichte und Umsatz",
          "intro": "Umsätze auswerten und Entwicklungen erkennen – in den Reitern „Umsatz“ und „Berichte“ im Dashboard.",
          "schritte": [
            "Berichte: Zeitraum Heute, Woche, Monat oder Jahr wählen, alle Kassen oder eine einzelne auswerten. „Bericht als PDF“ speichert die Auswertung.",
            "Kennzahlen, Zahlarten, Kundenarten, Umsatz je Kasse, Top-Artikel und Warengruppen ansehen.",
            "Umsatz: nach Zeitraum, Verkaufsort, Kategorie und Hersteller filtern.",
            "Monatsverlauf, Hersteller, Paddel vs. Rennboote, Produkt-Trends und Top-Produkte vergleichen."
          ],
          "tipp": "Wer das Dashboard nicht sehen darf, findet Umsatz, Berichte und Transaktionen als eigene Menüpunkte. Die Auswertungen beruhen auf Beispieldaten."
        },
        "einstellungen": {
          "titel": "Einstellungen und Rechte",
          "intro": "Geräte, Benutzer, Shop-Daten und Schnittstellen verwalten. Die Bedienungsanleitung sehen alle Benutzer, alle anderen Bereiche nur mit Recht.",
          "schritte": [
            "Drucker, Barcode-Scanner, TSE & Kassensicherung, ERP-Anbindung sowie Webshops & API einrichten. Verbindungen sind im Prototyp simuliert.",
            "Benutzer & Rollen: Benutzer anlegen, Kassen zuordnen, PINs vergeben, Rechte in der Matrix setzen und den Schichtplan planen. Rollen: Admin, Filialleitung, Teamleitung, Verkauf, Aushilfe, Einkauf und Werkstatt (Technik).",
            "Shop: Firmendaten, Logo, Akzentfarbe, Öffnungszeiten, Nummernkreise und Texte für alle Belege. Dokumentvorlagen: Belege, Rechnungen und Etiketten prüfen.",
            "Shop & Lagerorte: Lagerorte in bis zu vier Ebenen, Werkstatt (Stundensatz, Freigabegrenze, Arbeitsschritte), Standorte & Feiertage, „Kanu-News im Dashboard“ (n8n-Adresse, Verbindung testen) und „Wetter im Kalender“ (Ort, An/Aus).",
            "Zahlungsarten: Karte, Bar, PayPal, Rechnung, Gutschein und Vorkasse ein- und ausschalten, sortieren und die Anbindung testen. E-Rechnung: ZUGFeRD-Profil, XRechnung-Syntax und Übermittlung.",
            "Admin (nur root): Systemsprache und Sprache je Benutzer, Systemprotokoll, Datenbank & Backup.",
            "Die Reihenfolge des Menüs ändern Sie unten in der Seitenleiste mit „Menü sortieren“; „Standard wiederherstellen“ setzt sie zurück. Das Dashboard bleibt immer oben."
          ],
          "tipp": "Die Rolle Werkstatt (Technik) hat ein festes Menü (Dashboard, Werkstatt, Kalender, Zeiterfassung) und darf nicht kassieren."
        }
      }
    },
    "en": {
      "name": "English",
      "ui": {
        "titel": "User manual",
        "untertitel": "Step by step through zykol.POS. For all users.",
        "suche": "Search the manual",
        "kapitel": "Chapter",
        "treffer": "{n} chapters",
        "keine": "No results. Try another term.",
        "tipp": "Tip",
        "verfuegbar": "Available to you",
        "benoetigt": "Requires permission",
        "oeffnen": "Open view",
        "pdf": "Open as PDF",
        "alle": "All languages as PDF",
        "inhalt": "Contents",
        "stand": "As of",
        "schritte": "Steps",
        "alleNutzer": "For all users",
        "sprache": "Language"
      },
      "rechte": {
        "Verkauf kassieren": "Process sales",
        "QR-Etiketten drucken": "Print QR labels",
        "Angebote erstellen & versenden": "Create & send quotes",
        "Journal & Transaktionen einsehen": "View journal & transactions",
        "Kunden verwalten": "Manage customers",
        "Berichte einsehen": "View reports",
        "Einstellungen & Benutzer": "Settings & users",
        "Bestellbeleg personalisiert drucken": "Print personalised order slip",
        "Werkstatt ansehen": "View workshop",
        "Versand ansehen": "View shipping",
        "Artikel & Bestand ansehen": "View products & stock",
        "Ausschreibungen ansehen": "View tenders"
      },
      "kapitel": {
        "anmelden": {
          "titel": "Log in",
          "intro": "Everyone logs in with their own name and PIN, so sales and changes are clearly assigned.",
          "schritte": [
            "Choose the register at the top right. Only registers you are assigned to are shown.",
            "Under “1. Choose person”, tap your name.",
            "Under “2. Enter PIN”, type your PIN on the keypad or keyboard and tap “Log in”. Enter also logs in, ← deletes the last digit, C clears the field.",
            "Leave the register briefly: tap “Lock” in the footer. Enter your PIN to unlock – the cart is kept.",
            "Log out completely: “Log out” at the bottom of the sidebar."
          ],
          "tipp": "Forgot your PIN? “Forgot PIN?” on the login page sends a request to the store manager or admin. root sets the language under Settings → Admin."
        },
        "dashboard": {
          "titel": "Dashboard",
          "intro": "The dashboard shows what needs doing today and groups sales, reports and transactions in tabs.",
          "schritte": [
            "Switch between the tabs “Overview”, “Sales”, “Reports” and “Transactions” at the top. You only see the tabs you have permission for.",
            "Below the greeting, the “Canoe news” ticker shows current news from canoe sport. It pauses when the mouse is over it. Tap a headline to open the article; “All news” shows every item with a summary.",
            "If a tender deadline is less than 7 days away, a yellow notice appears. Tap it to open the tender.",
            "Tap the tiles to filter: Overdue, Appointments today, Open tasks today, Appointments until Sunday.",
            "Tick off finished tasks with the checkbox. “Tomorrow” moves a task to the next working day, “All to today” brings overdue tasks to today.",
            "Automatic tasks are included, e.g. “Bill workshop orders” (at the top) or open leave requests for approvers. The button on the task opens the right area.",
            "Add your own tasks at the bottom, choose a working day and tap “Add”. With the permission “Delegate tasks” you can hand a task to a colleague via “Assign to …”."
          ],
          "tipp": "Without an n8n address the ticker shows sample news. Admins enter the address under Settings → Shop & storage locations → “Canoe news on the dashboard”."
        },
        "kasse": {
          "titel": "Selling at the register",
          "intro": "Find products, choose a variant, add them to the cart.",
          "schritte": [
            "Choose a category at the top (e.g. Boats, Paddles) or search by name or manufacturer. A scanned barcode finds the product instantly.",
            "Tap the product and choose the variant, e.g. length, blade, size, colour or serial number.",
            "Change quantities or remove items in the cart. On tablet and phone, the cart button in the footer opens the cart from any page.",
            "Assign a customer: enter a name or number or tap “Open customer list”. A stored customer discount is deducted automatically. Without customer data choose “Walk-in customer (no customer data)”.",
            "Below the total you find “Pay”, “Order slip” and “Save as quote”.",
            "“Register” in the footer takes you back to the register from any page and closes open windows."
          ],
          "tipp": "Each register has its own cart; switching registers does not clear it. Sales take stock from the sales floor first."
        },
        "bezahlen": {
          "titel": "Payment and receipt",
          "intro": "Choose a payment method, pay, issue receipt and invoice. The documents are then attached to the transaction.",
          "schritte": [
            "Tap “Pay” in the cart. “Choose payment method” appears with the methods switched on under Settings → Payment methods, e.g. card, cash, PayPal, invoice, voucher or prepayment. “Back” closes the selection.",
            "Card: the customer pays at the terminal. PayPal: the customer pays via QR code. Cash: enter the amount given or choose a quick amount; the change appears immediately. Invoice: for invoice customers such as clubs, companies and public-sector buyers.",
            "If the purchase contains a boat, the dialog shows its serial number and “Print QR labels”. Paddles sold on invoice receive their paddle IDs.",
            "Tap “Pay” in the dialog. The document output appears.",
            "With card, cash and PayPal the receipt is always printed. Optionally choose “Print invoice” or “Send invoice by email” as well.",
            "Payment method invoice: there is no receipt and the invoice is mandatory. For companies, clubs and public-sector buyers it is created as an e-invoice (chapter E-invoice).",
            "Tap “Complete”. A notice confirms the sale; “Open” shows it in Transactions."
          ],
          "tipp": "Every receipt carries a QR code for online access. TSE, card terminal, PayPal, printers and email are simulated in the prototype."
        },
        "kassenabschluss": {
          "titel": "Register closing",
          "intro": "At the end of the day reconcile non-cash payments, count the cash and print the Z report.",
          "schritte": [
            "Open “Register closing” in the navigation. The top shows today’s sales per payment method and the number of receipts.",
            "Tab “1 · Non-cash payments”: enter the total from the terminal or PayPal daily report for card and PayPal. The difference to the register appears immediately.",
            "Tab “2 · Count cash”: record the number of each note and coin with − and + or by typing, for coins also whole rolls. Target, actual and difference are shown at the bottom. “Save draft” keeps the count, “Reset” clears it.",
            "Tab “3 · Closing”: if there is a difference, enter the reason (mandatory). Enter the float for tomorrow; the bank deposit is calculated from it. Record withdrawals and payouts of the day with amount and reason via “+ Withdrawal”.",
            "Tap “Close day & print Z report”. The day is then locked.",
            "Tab “History”: view earlier closings and reprint the Z report as “Z receipt” or “A4 report”."
          ],
          "tipp": "Sales staff and temps only do the cash count. The daily closing is done by admin, store manager or team lead."
        },
        "bestellbeleg": {
          "titel": "Order slip",
          "intro": "Goods that are ordered or personalised get their own slip, separate from the till receipt. Customer and payment are set when it is created.",
          "schritte": [
            "Tap “Order slip” in the cart.",
            "Under “Items”, expand each item and enter the personalisation if needed, e.g. boat name, custom-fit seat or paddle length.",
            "Under “Customer, handover & payment”, search for the customer (name, number or phone) and tap it. For a new customer, enter the details and tap “Save as new customer”.",
            "Enter handover (pick-up, delivery or shipping), date and a deposit.",
            "Under “Payment” choose: Still open, Paid · card, Paid · cash, or invoice with payment term in days. For clubs and companies, invoice is preselected.",
            "Check the preview and tap “Print / PDF”. The order slip is filed automatically under “Orders”."
          ],
          "tipp": "The order slip is not a till receipt. With their signature the customer confirms the personalisation."
        },
        "bestellbelege": {
          "titel": "Orders",
          "intro": "Customer orders with payment and status until handover – and orders from suppliers.",
          "schritte": [
            "Open “Orders” in the navigation. The tab “Customer orders” lists all printed order slips; the top shows Ordered, Ready for pick-up, Handed over and “Still to collect”.",
            "Search by number, customer, phone or product, or filter by status. Tap a row and set the status to Ordered, Ready for pick-up or Handed over.",
            "Handover is only possible when the order is paid or on invoice. If it is still open, choose “Paid by card”, “Paid in cash” or “On invoice (14 days)”. “Print again” prints the slip as filed.",
            "Tab “Supplier orders” (permission “Manage suppliers”): order goods with “New order” or apply the “Order suggestion” for products below minimum stock. “Order as PDF” creates the order letter.",
            "When the goods arrive, book them under Products & stock with “Book goods receipt” against this order – partial deliveries too."
          ],
          "tipp": "In the prototype “Paid by card” only sets the status; no till receipt is created."
        },
        "angebote": {
          "titel": "Quotes",
          "intro": "Create and send quotes and move them to the register once accepted – also straight from the cart.",
          "schritte": [
            "Under “Quotes”, create a new quote, choose a customer and add items with discount. Check the PDF preview and send it.",
            "Build items easily: “Build in cart” opens the register in quote mode. Choose products as usual and tap “Apply to quote”. Nothing is charged, and a started cart is kept.",
            "Maintain the status: Draft, Sent, Accepted, Declined, Expired. Bill accepted quotes with “Move to register”.",
            "From the cart: “Save as quote” stores the contents as a quote (draft). Without a customer it is saved for a walk-in customer.",
            "Later, open “Quotes from the register” in the register and tap “Load into cart” on the quote you want."
          ],
          "tipp": "Validity comes from the shop settings. Expiring quotes appear in the calendar and on the dashboard."
        },
        "stammdaten": {
          "titel": "Customers",
          "intro": "Keep customer data up to date so that register, receipts and invoices are correct.",
          "schritte": [
            "Under “Customers”, create or search for a customer and filter by type: private, club, company, association, school or public sector.",
            "Store discount, payment terms and billing address. For the public sector also enter the routing ID (Leitweg-ID) for XRechnung.",
            "The customer file shows purchases, revenue, receipts and boats bought.",
            "“Customer’s products” also lists third-party products the customer brought to the workshop – with label and workshop history."
          ],
          "tipp": "On the phone, tables appear as cards so nothing is cut off."
        },
        "werkstatt": {
          "titel": "Workshop",
          "intro": "Repair orders from intake to handover, also for boats and equipment not bought from you (third-party products).",
          "schritte": [
            "Open “Workshop” in the navigation. The top shows Intake & estimate, In progress, Ready for handover and Third-party products; below are all orders with a filter by step.",
            "Tap “New repair order”, choose the customer (or “Create & select customer”) and enter the item. If it is not a product from your shop, record it with “+ Add third-party product”; it is stored with the customer. “Print intake receipt” gives the customer a receipt.",
            "An order passes six steps: 1 Intake, 2 Estimate, 3 Order, 4 Repair, 5 Deviations, 6 Handover. The next step only opens when the previous one is done.",
            "Estimate: choose work steps from the catalogue and material from the product list, then “Print estimate”. Afterwards “Customer approves” or “Customer declines”.",
            "Repair: enter working time, material and text snippets in the repair log. Material used is deducted from stock.",
            "If the cost exceeds the approved amount (default: from 15 %), the customer has to approve again: “Customer approves deviation”.",
            "Handover: “Print handover report” and “Hand over to till for billing”. Sales gets the task “Bill workshop orders” on the dashboard and charges in the register. Then choose receipt or invoice; with payment method invoice the invoice is mandatory, and “Invoice for receipt” creates an invoice afterwards without a new booking."
          ],
          "tipp": "For third-party products, “Print QR label” prints a label with just a QR code and the shop name. Scanning it opens the product file. Hourly rate, approval limit and work-step catalogue are under Settings → Shop & storage locations."
        },
        "versand": {
          "titel": "Shipping",
          "intro": "Pick and pack shipping orders, hand them to DHL, UPS or DPD with a label, and process returns.",
          "schritte": [
            "Open “Shipping” in the navigation. The tiles To pack, Ready to ship, Handed over today and Open returns lead straight to the right tab.",
            "Tab “Orders”: shipping orders from register, web shop and orders. “Create shipping order” adds a new one.",
            "Tab “Picking & packing”: take the goods (“All picked”), “Mark as picked”, tap “Parcel ready” at the packing station and “Continue to label”.",
            "Tab “Labels & tracking”: “Create label”, check it with “Label preview” and “Print label”. At the end “Daily closing and hand over”; “Get shipment status” shows where shipments are.",
            "Tab “Returns”: “Create return” or “Create return with label”. On arrival “Book receipt” and grade the goods as “Fine” (back to stock) or “Damaged”.",
            "Tab “Carriers”: enter the DHL, UPS and DPD accounts and “Test connection”."
          ],
          "tipp": "The labels are replicas of the carrier templates printed MUSTER (sample). The DHL, UPS and DPD connection is simulated in the prototype."
        },
        "artikel": {
          "titel": "Products, stock and suppliers",
          "intro": "“Inventory” contains Products & stock, Suppliers and Boats sold. Tapping “Inventory” shows all areas as tiles.",
          "schritte": [
            "“Products & stock”, tab Products: search products, filter by category, manufacturer or storage location. Create with “New product” (admin, store manager, purchasing): manufacturer, prices, tax rate, variants and default location.",
            "Stock only changes through sales, goods receipt or a booking with a reason. There are deliberately no plus and minus buttons.",
            "“Book”: book shrinkage, defect or other with a reason (mandatory). Admin, store manager and team lead may do this.",
            "“Book goods receipt”: always against an open supplier order, also as a partial delivery and spread over several locations. Purchasing may do this too.",
            "“Transfer” moves goods between locations, e.g. from storage to the sales floor. The tab “Stock & history” shows quantities per location and every movement.",
            "“Suppliers”: master data, contacts, terms, delivery time and open orders per manufacturer. “Add supplier” creates a new one."
          ],
          "tipp": "Admin and store manager set up storage locations under Settings → Shop & storage locations. Locations can only be deactivated, not deleted, so the history is kept."
        },
        "etiketten": {
          "titel": "Boats sold, paddle IDs and QR labels",
          "intro": "Boats are identified by their serial number, paddles by their own ID. Both are in the boat file under Inventory → Boats sold.",
          "schritte": [
            "The paddle ID is created on completion with invoice from date and number (e.g. ZKP-261011-416-01) and appears on the invoice.",
            "If a sale, an invoice or an accepted quote contains a paddle, “Print QR labels” appears.",
            "When a boat is sold, the payment dialog shows its serial number with “Print QR labels”. If the boat in the cart has no serial number yet, the next free one is used.",
            "“Boats sold” holds every boat file with serial number, warranty and service history. A label can be reprinted from there at any time."
          ],
          "tipp": "Every print is logged, reprints too."
        },
        "ausschreibungen": {
          "titel": "Tenders",
          "intro": "Public tenders from screening to award – with deadlines, qualification certificates and bid.",
          "schritte": [
            "Open “Tenders” in the navigation. The top shows Open, Deadline this week, Submitted and the award rate. Filter by contracting authority or status.",
            "“New tender” creates a tender with reference number, deadlines and lots (“+ Lot”). “Import from Notion” shows new entries from the Notion database “Tenders”; duplicates are detected, “Apply” creates them with status “Screened”.",
            "Set the status step by step: Screened, Under review, Participation decided, Bid in progress, Submitted and finally Award, Rejection, Cancelled or No participation.",
            "Maintain qualification certificates. A warning appears when one is about to expire.",
            "Create the bid with a calculation (purchase price, margin). After the award, the invoice is created as XRechnung with the reference number."
          ],
          "tipp": "Deadlines appear in the calendar. From 7 days before the bid deadline a daily notice appears on the dashboard. In the prototype the Notion import is a fixed data snapshot."
        },
        "erechnung": {
          "titel": "E-invoice",
          "intro": "Invoices to companies, clubs, schools and public-sector buyers are created as electronic invoices according to EN 16931.",
          "schritte": [
            "For companies, clubs, associations and schools a ZUGFeRD invoice is created: a PDF with an embedded XML file.",
            "For customers of type “Public sector” an XRechnung is created. The routing ID (Leitweg-ID) must be entered in the customer file.",
            "In the invoice list a tick shows whether the e-invoice is valid.",
            "Under Settings → E-invoice admins see the ZUGFeRD profile, the XRechnung syntax, the mandatory seller details (from Settings → Shop) and the transmission."
          ],
          "tipp": "Validation (KoSIT) and Peppol transmission are simulated in the prototype. The ZUGFeRD PDF is not yet PDF/A-3 compliant."
        },
        "kalender": {
          "titel": "Calendar",
          "intro": "Appointments for pick-up, delivery, workshop, regatta, trade fair, leave and tenders – with the weather for every day.",
          "schritte": [
            "Choose a month and tap a day to see its appointments. Filter by type; the legend explains the colours.",
            "Every day shows the weather at the shop location: symbol, high and low (on the phone only the high). For the selected day, conditions, rain and wind are shown on the right. For the next 16 days it is the forecast, for past days the measured value.",
            "Use “Edit” to change or delete an appointment and “+ Appointment on this day” to create one. Expiring quotes are changed in the quote.",
            "Sundays and public holidays are grey and marked “Shop closed”; only regattas are possible there. Regattas come with their real dates from Kai Kalender and are never moved.",
            "Approved leave and tender deadlines appear automatically.",
            "Tab “Shift plan”: shows who works when. It is view-only; planning is done under Settings → Users & roles."
          ],
          "tipp": "To see the calendar of the mobile register, switch register in the footer. Admins set the weather location under Settings → Shop & storage locations."
        },
        "zeiterfassung": {
          "titel": "Time tracking and leave",
          "intro": "Clock in and out, see hours and balance, request and approve leave.",
          "schritte": [
            "Open “Time tracking” in the navigation. In the tab “Clock in/out”, tap “Clock in” at the start and “Clock out” at the end. Register and time are logged.",
            "The overview shows status, hours today and this week, target and balance for each person.",
            "Tab “Leave”: your entitlement, carry-over from last year, days taken, planned and requested, and what remains.",
            "Request leave: enter start and end, optionally a note, and send. Working days are counted automatically – without weekends and public holidays in your location’s federal state.",
            "Approve (admin, store manager, team lead): under “Open leave requests” tap “Approve” or “Reject”. Approved leave appears in the calendar; open requests appear on the dashboard.",
            "With the permission “Maintain leave entitlement”, enter entitlement, carry-over and working days per week for all staff."
          ],
          "tipp": "Set the federal state per location (default Berlin) under Settings → Shop & storage locations → “Locations & public holidays”."
        },
        "transaktionen": {
          "titel": "Transactions",
          "intro": "Look up all sales, view and reprint receipts. Transactions are a tab on the dashboard.",
          "schritte": [
            "Choose the tab “Transactions” on the dashboard. Choose a period: Today, Yesterday, Last 7 days, This month, Last month, Quarter or Custom. Filter by payment method or status.",
            "Open a row to see items, TSE data and the digital receipt.",
            "“Attached documents” lists the receipt and invoice of the transaction. “View” shows the document, “Print” prints it again.",
            "Start a cancellation or return from the receipt details (permission “Cancellation / return”)."
          ],
          "tipp": "Each register has its own journal. The daily closing is done in Register closing."
        },
        "berichte": {
          "titel": "Reports and sales",
          "intro": "Analyse sales and spot trends – in the dashboard tabs “Sales” and “Reports”.",
          "schritte": [
            "Reports: choose Today, Week, Month or Year and analyse all registers or a single one. “Report as PDF” saves the analysis.",
            "View key figures, payment methods, customer types, sales per register, top products and product groups.",
            "Sales: filter by period, point of sale, category and manufacturer.",
            "Compare monthly trend, manufacturers, paddles vs. racing boats, product trends and top products."
          ],
          "tipp": "Anyone not allowed to see the dashboard finds Sales, Reports and Transactions as separate menu items. The analyses are based on sample data."
        },
        "einstellungen": {
          "titel": "Settings and permissions",
          "intro": "Manage devices, users, shop data and interfaces. All users see the user manual; all other areas require permission.",
          "schritte": [
            "Set up printers, barcode scanners, TSE & register security, ERP connection and web shops & API. Connections are simulated in the prototype.",
            "Users & roles: create users, assign registers, set PINs, set permissions in the matrix and plan the shift plan. Roles: admin, store manager, team lead, sales, temp, purchasing and workshop (technician).",
            "Shop: company details, logo, accent colour, opening hours, number ranges and texts for all documents. Document templates: check receipts, invoices and labels.",
            "Shop & storage locations: storage locations in up to four levels, workshop (hourly rate, approval limit, work steps), locations & public holidays, “Canoe news on the dashboard” (n8n address, test connection) and “Weather in the calendar” (location, on/off).",
            "Payment methods: switch card, cash, PayPal, invoice, voucher and prepayment on or off, sort them and test the connection. E-invoice: ZUGFeRD profile, XRechnung syntax and transmission.",
            "Admin (root only): system language and language per user, system log, database & backup.",
            "Change the menu order at the bottom of the sidebar with “Sort menu”; “Restore default” resets it. The dashboard always stays at the top."
          ],
          "tipp": "The workshop (technician) role has a fixed menu (dashboard, workshop, calendar, time tracking) and cannot charge sales."
        }
      }
    },
    "fr": {
      "name": "Français",
      "ui": {
        "titel": "Mode d’emploi",
        "untertitel": "Pas à pas dans zykol.POS. Pour tous les utilisateurs.",
        "suche": "Rechercher dans le mode d’emploi",
        "kapitel": "Chapitre",
        "treffer": "{n} chapitres",
        "keine": "Aucun résultat. Essayez un autre terme.",
        "tipp": "Astuce",
        "verfuegbar": "Disponible pour vous",
        "benoetigt": "Autorisation requise",
        "oeffnen": "Ouvrir la vue",
        "pdf": "Ouvrir en PDF",
        "alle": "Toutes les langues en PDF",
        "inhalt": "Sommaire",
        "stand": "État au",
        "schritte": "Étapes",
        "alleNutzer": "Pour tous les utilisateurs",
        "sprache": "Langue"
      },
      "rechte": {
        "Verkauf kassieren": "Encaisser des ventes",
        "QR-Etiketten drucken": "Imprimer des étiquettes QR",
        "Angebote erstellen & versenden": "Créer et envoyer des devis",
        "Journal & Transaktionen einsehen": "Consulter journal et transactions",
        "Kunden verwalten": "Gérer les clients",
        "Berichte einsehen": "Consulter les rapports",
        "Einstellungen & Benutzer": "Paramètres et utilisateurs",
        "Bestellbeleg personalisiert drucken": "Imprimer un bon de commande personnalisé",
        "Werkstatt ansehen": "Consulter l’atelier",
        "Versand ansehen": "Consulter l’expédition",
        "Artikel & Bestand ansehen": "Consulter articles & stock",
        "Ausschreibungen ansehen": "Consulter les appels d’offres"
      },
      "kapitel": {
        "anmelden": {
          "titel": "Connexion",
          "intro": "Chaque personne se connecte avec son nom et son PIN. Ventes et modifications sont ainsi clairement attribuées.",
          "schritte": [
            "Choisissez la caisse en haut à droite. Seules les caisses qui vous sont attribuées s’affichent.",
            "Sous « 1. Choisir la personne », touchez votre nom.",
            "Sous « 2. Saisir le PIN », tapez votre PIN sur le pavé ou le clavier et touchez « Connexion ». Entrée connecte aussi, ← efface le dernier chiffre, C vide le champ.",
            "Quitter brièvement la caisse : touchez « Verrouiller » dans la barre du bas. Saisissez le PIN pour déverrouiller – le panier est conservé.",
            "Se déconnecter complètement : « Se déconnecter » en bas de la barre latérale."
          ],
          "tipp": "PIN oublié ? « PIN oublié ? » sur la page de connexion envoie une demande au responsable ou à l’admin. root règle la langue sous Paramètres → Admin."
        },
        "dashboard": {
          "titel": "Tableau de bord",
          "intro": "Le tableau de bord montre ce qu’il faut faire aujourd’hui et regroupe ventes, rapports et transactions dans des onglets.",
          "schritte": [
            "En haut, passez d’un onglet à l’autre : « Vue d’ensemble », « Ventes », « Rapports » et « Transactions ». Vous ne voyez que les onglets autorisés pour vous.",
            "Sous le message d’accueil défile le fil « Actus canoë » avec l’actualité du canoë-kayak. Il s’arrête quand la souris le survole. Touchez un titre pour ouvrir l’article ; « Toutes les actus » affiche toutes les infos avec un résumé.",
            "Si la date limite d’un appel d’offres tombe dans moins de 7 jours, un avis jaune apparaît. Touchez-le pour ouvrir l’appel d’offres.",
            "Touchez les tuiles pour filtrer : En retard, Rendez-vous aujourd’hui, Tâches ouvertes aujourd’hui, Rendez-vous jusqu’à dimanche.",
            "Cochez les tâches terminées. « Demain » reporte une tâche au jour ouvré suivant, « Tout à aujourd’hui » ramène les tâches en retard à aujourd’hui.",
            "Des tâches automatiques s’ajoutent, p. ex. « Facturer l’atelier » (tout en haut) ou les demandes de congé en attente pour les personnes qui approuvent. Le bouton de la tâche ouvre la bonne zone.",
            "Ajoutez vos propres tâches en bas, choisissez un jour ouvré et touchez « Ajouter ». Avec le droit « Déléguer des tâches », confiez une tâche à un collègue via « Attribuer à … »."
          ],
          "tipp": "Sans adresse n8n, le fil affiche des actus d’exemple. Les admins saisissent l’adresse sous Paramètres → Boutique & emplacements → « Actus canoë sur le tableau de bord »."
        },
        "kasse": {
          "titel": "Vendre en caisse",
          "intro": "Rechercher un article, choisir la variante, l’ajouter au panier.",
          "schritte": [
            "Choisissez une rubrique en haut (p. ex. Bateaux, Pagaies) ou recherchez par nom ou fabricant. Un code-barres scanné trouve l’article immédiatement.",
            "Touchez l’article et choisissez la variante, p. ex. longueur, pale, taille, couleur ou numéro de série.",
            "Modifiez les quantités ou supprimez des lignes dans le panier. Sur tablette et téléphone, le bouton panier du pied de page ouvre le panier depuis n’importe quelle page.",
            "Associer un client : saisissez un nom ou un numéro ou touchez « Ouvrir la liste des clients ». Une remise client enregistrée est déduite automatiquement. Sans données client, choisissez « Client de passage (sans données) ».",
            "Sous le total se trouvent « Payer », « Bon de commande » et « Enregistrer comme devis ».",
            "« Caisse » dans le pied de page vous ramène à la caisse depuis n’importe quelle page et ferme les fenêtres ouvertes."
          ],
          "tipp": "Chaque caisse a son propre panier ; changer de caisse ne le vide pas. Les ventes déduisent d’abord le stock de la surface de vente."
        },
        "bezahlen": {
          "titel": "Paiement et ticket",
          "intro": "Choisir le moyen de paiement, encaisser, émettre ticket et facture. Les documents sont ensuite rattachés à la transaction.",
          "schritte": [
            "Touchez « Payer » dans le panier. « Choisir le moyen de paiement » apparaît avec les moyens activés sous Paramètres → Moyens de paiement, p. ex. carte, espèces, PayPal, facture, bon d’achat ou paiement anticipé. « Retour » referme la sélection.",
            "Carte : le client paie au terminal. PayPal : le client paie par QR code. Espèces : saisissez le montant remis ou choisissez un montant rapide ; la monnaie s’affiche aussitôt. Facture : pour les clients sur facture comme les clubs, les entreprises et le secteur public.",
            "Si l’achat contient un bateau, la fenêtre affiche son numéro de série et « Imprimer des étiquettes QR ». Les pagaies vendues sur facture reçoivent leurs ID.",
            "Touchez « Payer » dans la fenêtre. La sortie des documents apparaît.",
            "Avec carte, espèces et PayPal, le ticket est toujours imprimé. En option, choisissez aussi « Imprimer la facture » ou « Envoyer la facture par e-mail ».",
            "Moyen de paiement facture : pas de ticket, la facture est obligatoire. Pour les entreprises, clubs et le secteur public, elle est créée en facture électronique (chapitre Facture électronique).",
            "Touchez « Terminer ». Un message confirme la vente ; « Ouvrir » l’affiche dans les transactions."
          ],
          "tipp": "Chaque ticket porte un QR code pour le consulter en ligne. TSE, terminal de carte, PayPal, imprimantes et e-mail sont simulés dans le prototype."
        },
        "kassenabschluss": {
          "titel": "Clôture de caisse",
          "intro": "En fin de journée, rapprocher les paiements non espèces, compter les espèces et imprimer le rapport Z.",
          "schritte": [
            "Ouvrez « Clôture de caisse » dans la navigation. En haut figurent les ventes du jour par moyen de paiement et le nombre de tickets.",
            "Onglet « 1 · Paiements non espèces » : pour la carte et PayPal, saisissez le total du relevé journalier du terminal ou de PayPal. L’écart avec la caisse s’affiche aussitôt.",
            "Onglet « 2 · Compter les espèces » : saisissez le nombre de chaque billet et pièce avec − et + ou au clavier, pour les pièces aussi des rouleaux entiers. En bas : théorique, réel et écart. « Enregistrer » garde le comptage, « Réinitialiser » l’efface.",
            "Onglet « 3 · Clôture » : en cas d’écart, saisissez le motif (obligatoire). Indiquez le fonds de caisse pour demain ; le dépôt bancaire en est calculé. Enregistrez les retraits et sorties du jour avec montant et motif via « + Retrait ».",
            "Touchez « Clôturer la journée et imprimer le rapport Z ». La journée est ensuite verrouillée.",
            "Onglet « Historique » : consultez les clôtures précédentes et réimprimez le rapport Z en « ticket Z » ou « rapport A4 »."
          ],
          "tipp": "La vente et les intérimaires ne font que le comptage de caisse. La clôture journalière est faite par l’admin, le responsable de magasin ou le chef d’équipe."
        },
        "bestellbeleg": {
          "titel": "Bon de commande",
          "intro": "Les articles commandés ou personnalisés ont leur propre bon, distinct du ticket de caisse. Client et paiement sont fixés dès la création.",
          "schritte": [
            "Touchez « Bon de commande » dans le panier.",
            "Sous « Lignes », dépliez chaque ligne et saisissez si besoin la personnalisation, p. ex. nom du bateau, siège sur mesure ou longueur de pagaie.",
            "Sous « Client, remise & paiement », recherchez le client (nom, numéro ou téléphone) et touchez-le. Pour un nouveau client, saisissez les données et touchez « Enregistrer comme nouveau client ».",
            "Indiquez la remise (retrait, livraison ou envoi), la date et un acompte.",
            "Sous « Paiement », choisissez : Encore ouvert, Payé · carte, Payé · espèces ou facture avec délai en jours. Pour les clubs et entreprises, la facture est présélectionnée.",
            "Vérifiez l’aperçu et touchez « Imprimer / PDF ». Le bon est automatiquement classé sous « Commandes »."
          ],
          "tipp": "Le bon de commande n’est pas un ticket de caisse. Par sa signature, le client confirme la personnalisation."
        },
        "bestellbelege": {
          "titel": "Commandes",
          "intro": "Commandes clients avec paiement et statut jusqu’à la remise – et commandes auprès des fournisseurs.",
          "schritte": [
            "Ouvrez « Commandes » dans la navigation. L’onglet « Commandes clients » liste tous les bons imprimés ; en haut : Commandé, Prêt à retirer, Remis et « Reste à encaisser ».",
            "Recherchez par numéro, client, téléphone ou article, ou filtrez par statut. Touchez une ligne et passez le statut à Commandé, Prêt à retirer ou Remis.",
            "La remise n’est possible que si la commande est payée ou sur facture. Si elle est encore ouverte, choisissez « Payé par carte », « Payé en espèces » ou « Sur facture (14 jours) ». « Réimprimer » imprime le bon tel qu’il a été classé.",
            "Onglet « Commandes fournisseurs » (droit « Gérer les fournisseurs ») : commandez avec « Nouvelle commande » ou reprenez la « proposition de commande » pour les articles sous le stock minimum. « Commande en PDF » crée le courrier de commande.",
            "À l’arrivée, enregistrez la marchandise sous Articles & stock avec « Enregistrer une réception » pour cette commande – aussi en livraison partielle."
          ],
          "tipp": "Dans le prototype, « Payé par carte » ne change que le statut ; aucun ticket de caisse n’est créé."
        },
        "angebote": {
          "titel": "Devis",
          "intro": "Créer et envoyer des devis, puis les reprendre en caisse une fois acceptés – aussi directement depuis le panier.",
          "schritte": [
            "Sous « Devis », créez un nouveau devis, choisissez le client et ajoutez des lignes avec remise. Vérifiez l’aperçu PDF et envoyez-le.",
            "Composer facilement : « Composer dans le panier » ouvre la caisse en mode devis. Choisissez les articles comme d’habitude et touchez « Reprendre dans le devis ». Rien n’est encaissé et un panier commencé est conservé.",
            "Tenez le statut à jour : Brouillon, Envoyé, Accepté, Refusé, Expiré. Facturez les devis acceptés avec « Reprendre en caisse ».",
            "Depuis le panier : « Enregistrer comme devis » enregistre le contenu comme devis (brouillon). Sans client, il est enregistré pour un client de passage.",
            "Plus tard, ouvrez « Devis de la caisse » dans la caisse et touchez « Charger dans le panier » sur le devis voulu."
          ],
          "tipp": "La validité découle des paramètres de la boutique. Les devis qui expirent figurent dans le calendrier et sur le tableau de bord."
        },
        "stammdaten": {
          "titel": "Clients",
          "intro": "Tenir les données clients à jour pour que caisse, tickets et factures soient justes.",
          "schritte": [
            "Sous « Clients », créez ou recherchez un client et filtrez par type : particulier, club, entreprise, fédération, école ou secteur public.",
            "Enregistrez remise, conditions de paiement et adresse de facturation. Pour le secteur public, saisissez aussi la Leitweg-ID pour la XRechnung.",
            "Le dossier client montre les achats, le chiffre d’affaires, les tickets et les bateaux achetés.",
            "« Produits du client » liste aussi les produits tiers que le client a apportés à l’atelier – avec étiquette et historique d’atelier."
          ],
          "tipp": "Sur téléphone, les tableaux s’affichent sous forme de cartes pour que rien ne soit coupé."
        },
        "werkstatt": {
          "titel": "Atelier",
          "intro": "Ordres d’atelier de l’entrée à la remise, aussi pour les bateaux et équipements non achetés chez vous (produits tiers).",
          "schritte": [
            "Ouvrez « Atelier » dans la navigation. En haut : Entrée & devis, En cours, À remettre et Produits tiers ; en dessous tous les ordres avec filtre par étape.",
            "Touchez « Nouvel ordre d’atelier », choisissez le client (ou « Créer et choisir le client ») et indiquez l’objet. S’il ne vient pas de votre boutique, saisissez-le avec « + Ajouter un produit tiers » ; il est enregistré chez le client. « Imprimer le reçu d’entrée » remet un reçu au client.",
            "Un ordre passe par six étapes : 1 Entrée, 2 Devis, 3 Ordre, 4 Réparation, 5 Écarts, 6 Remise. L’étape suivante ne s’ouvre que lorsque la précédente est terminée.",
            "Devis : choisissez les opérations dans le catalogue et le matériel dans la liste d’articles, puis « Imprimer le devis ». Ensuite « Le client accepte » ou « Le client refuse ».",
            "Réparation : saisissez le temps de travail, le matériel et des textes types dans le protocole de réparation. Le matériel utilisé est déduit du stock.",
            "Si le coût dépasse le montant accepté (par défaut dès 15 %), le client doit accepter à nouveau : « Le client accepte l’écart ».",
            "Remise : « Imprimer le procès-verbal de remise » et « Transmettre à la caisse pour facturation ». La vente reçoit la tâche « Facturer l’atelier » sur le tableau de bord et encaisse en caisse. Choisissez ensuite ticket ou facture ; avec le paiement sur facture, la facture est obligatoire, et « Facture pour le ticket » crée une facture après coup sans nouvelle écriture."
          ],
          "tipp": "Pour les produits tiers, « Imprimer l’étiquette QR » imprime une étiquette avec seulement un QR code et le nom de la boutique. Le scan ouvre la fiche produit. Taux horaire, seuil d’accord et catalogue d’opérations se trouvent sous Paramètres → Boutique & emplacements."
        },
        "versand": {
          "titel": "Expédition",
          "intro": "Préparer et emballer les ordres d’expédition, les remettre avec étiquette à DHL, UPS ou DPD et traiter les retours.",
          "schritte": [
            "Ouvrez « Expédition » dans la navigation. Les tuiles À emballer, Prêt à expédier, Remis aujourd’hui et Retours ouverts mènent directement au bon onglet.",
            "Onglet « Ordres » : ordres d’expédition venant de la caisse, de la boutique en ligne et des commandes. « Créer un ordre d’expédition » en ajoute un.",
            "Onglet « Préparation & emballage » : prélevez la marchandise (« Tout prélevé »), « Marquer comme préparé », touchez « Colis prêt » au poste d’emballage puis « Continuer vers l’étiquette ».",
            "Onglet « Étiquettes & suivi » : « Créer l’étiquette », la vérifier avec « Aperçu de l’étiquette » et « Imprimer l’étiquette ». En fin de journée « Clôture et remise » ; « Obtenir le statut » montre où en sont les envois.",
            "Onglet « Retours » : « Créer un retour » ou « Créer un retour avec étiquette ». À l’arrivée, « Enregistrer l’entrée » et classez la marchandise « En parfait état » (retour en stock) ou « Endommagée ».",
            "Onglet « Transporteurs » : saisissez les accès DHL, UPS et DPD et « Tester la connexion »."
          ],
          "tipp": "Les étiquettes reproduisent les modèles des transporteurs avec la mention MUSTER (exemple). La connexion à DHL, UPS et DPD est simulée dans le prototype."
        },
        "artikel": {
          "titel": "Articles, stock et fournisseurs",
          "intro": "« Gestion des stocks » regroupe Articles & stock, Fournisseurs et Bateaux vendus. Toucher « Gestion des stocks » affiche toutes les zones sous forme de tuiles.",
          "schritte": [
            "« Articles & stock », onglet Articles : recherchez des articles, filtrez par rubrique, fabricant ou emplacement. Créez avec « Nouvel article » (admin, responsable de magasin, achats) : fabricant, prix, taux de TVA, variantes et emplacement par défaut.",
            "Le stock ne change que par une vente, une réception ou une écriture avec motif. Il n’y a volontairement pas de boutons plus et moins.",
            "« Enregistrer » : saisissez démarque, défaut ou autre avec motif (obligatoire). L’admin, le responsable de magasin et le chef d’équipe peuvent le faire.",
            "« Enregistrer une réception » : toujours pour une commande fournisseur ouverte, aussi en livraison partielle et répartie sur plusieurs emplacements. Les achats peuvent aussi le faire.",
            "« Transférer » déplace la marchandise entre emplacements, p. ex. de la réserve vers la surface de vente. L’onglet « Stock & historique » montre les quantités par emplacement et chaque mouvement.",
            "« Fournisseurs » : données de base, contacts, conditions, délai de livraison et commandes ouvertes par fabricant. « Ajouter un fournisseur » en crée un nouveau."
          ],
          "tipp": "L’admin et le responsable de magasin configurent les emplacements sous Paramètres → Boutique & emplacements. Les emplacements peuvent seulement être désactivés, pas supprimés, pour conserver l’historique."
        },
        "etiketten": {
          "titel": "Bateaux vendus, ID de pagaie et étiquettes QR",
          "intro": "Les bateaux sont identifiés par leur numéro de série, les pagaies par un ID propre. Les deux figurent dans le dossier bateau sous Gestion des stocks → Bateaux vendus.",
          "schritte": [
            "L’ID de pagaie est créé à la clôture avec facture à partir de la date et du numéro (p. ex. ZKP-261011-416-01) et figure sur la facture.",
            "Si une vente, une facture ou un devis accepté contient une pagaie, « Imprimer des étiquettes QR » apparaît.",
            "Lors de la vente d’un bateau, la fenêtre de paiement affiche son numéro de série avec « Imprimer des étiquettes QR ». Si le bateau n’a pas encore de numéro de série dans le panier, le prochain libre est pris.",
            "« Bateaux vendus » contient chaque dossier bateau avec numéro de série, garantie et historique d’entretien. Une étiquette peut y être réimprimée à tout moment."
          ],
          "tipp": "Chaque impression est enregistrée, réimpressions comprises."
        },
        "ausschreibungen": {
          "titel": "Appels d’offres",
          "intro": "Marchés publics du repérage à l’attribution – avec délais, justificatifs de capacité et offre.",
          "schritte": [
            "Ouvrez « Appels d’offres » dans la navigation. En haut : Ouverts, Délai cette semaine, Remis et le taux d’attribution. Filtrez par pouvoir adjudicateur ou statut.",
            "« Nouvel appel d’offres » crée un marché avec numéro de référence, délais et lots (« + Lot »). « Importer depuis Notion » affiche les nouvelles entrées de la base Notion « Appels d’offres » ; les doublons sont détectés, « Reprendre » les crée avec le statut « Repéré ».",
            "Faites avancer le statut étape par étape : Repéré, En examen, Participation décidée, Offre en cours, Remis et enfin Attribution, Refus, Annulé ou Pas de participation.",
            "Tenez à jour les justificatifs de capacité. Un avertissement apparaît quand l’un d’eux va expirer.",
            "Établissez l’offre avec calcul (prix d’achat, marge). Après l’attribution, la facture est créée en XRechnung avec le numéro de référence."
          ],
          "tipp": "Les délais figurent dans le calendrier. À partir de 7 jours avant la remise des offres, un avis quotidien apparaît sur le tableau de bord. Dans le prototype, l’import Notion est un état de données figé."
        },
        "erechnung": {
          "titel": "Facture électronique",
          "intro": "Les factures aux entreprises, clubs, écoles et au secteur public sont créées en facture électronique selon EN 16931.",
          "schritte": [
            "Pour les entreprises, clubs, fédérations et écoles, une facture ZUGFeRD est créée : un PDF avec un fichier XML intégré.",
            "Pour les clients de type « Secteur public », une XRechnung est créée. La Leitweg-ID doit être saisie dans le dossier client.",
            "Dans la liste des factures, une coche indique si la facture électronique est valide.",
            "Sous Paramètres → Facture électronique, les admins voient le profil ZUGFeRD, la syntaxe XRechnung, les mentions obligatoires du vendeur (issues de Paramètres → Boutique) et la transmission."
          ],
          "tipp": "La validation (KoSIT) et la transmission via Peppol sont simulées dans le prototype. Le PDF ZUGFeRD n’est pas encore conforme PDF/A-3."
        },
        "kalender": {
          "titel": "Calendrier",
          "intro": "Rendez-vous de retrait, livraison, atelier, régate, salon, congés et appels d’offres – avec la météo de chaque jour.",
          "schritte": [
            "Choisissez un mois et touchez un jour pour voir ses rendez-vous. Filtrez par type ; la légende explique les couleurs.",
            "Chaque jour affiche la météo au lieu de la boutique : symbole, maximum et minimum (sur téléphone seulement le maximum). Pour le jour sélectionné, conditions, pluie et vent figurent à droite. Pour les 16 prochains jours il s’agit de la prévision, pour les jours passés de la valeur mesurée.",
            "Avec « Modifier », changez ou supprimez un rendez-vous, avec « + Rendez-vous ce jour » créez-en un. Les devis qui expirent se modifient dans le devis.",
            "Les dimanches et jours fériés sont gris et portent « Magasin fermé » ; seules les régates y sont possibles. Les régates viennent avec leurs vraies dates de Kai Kalender et ne sont jamais déplacées.",
            "Les congés approuvés et les délais d’appels d’offres apparaissent automatiquement.",
            "Onglet « Planning » : montre qui travaille quand. Il est en lecture seule ; la planification se fait sous Paramètres → Utilisateurs & rôles."
          ],
          "tipp": "Pour voir le calendrier de la caisse mobile, changez de caisse dans le pied de page. Les admins définissent le lieu pour la météo sous Paramètres → Boutique & emplacements."
        },
        "zeiterfassung": {
          "titel": "Suivi du temps et congés",
          "intro": "Pointer l’arrivée et le départ, voir heures et solde, demander et approuver des congés.",
          "schritte": [
            "Ouvrez « Suivi du temps » dans la navigation. Dans l’onglet « Pointage », touchez « Arrivée » au début et « Départ » à la fin. La caisse et l’heure sont enregistrées.",
            "L’aperçu montre pour chaque personne le statut, les heures du jour et de la semaine, le théorique et le solde.",
            "Onglet « Congés » : votre droit, le report de l’année précédente, les jours pris, planifiés et demandés, et le reste.",
            "Demander un congé : saisissez début et fin, éventuellement une note, et envoyez. Les jours ouvrés sont comptés automatiquement – sans week-ends ni jours fériés du Land de votre site.",
            "Approuver (admin, responsable de magasin, chef d’équipe) : sous « Demandes de congé en attente », touchez « Approuver » ou « Refuser ». Les congés approuvés figurent dans le calendrier ; les demandes ouvertes apparaissent sur le tableau de bord.",
            "Avec le droit « Gérer les droits à congé », saisissez le droit, le report et les jours travaillés par semaine pour tout le personnel."
          ],
          "tipp": "Réglez le Land par site (par défaut Berlin) sous Paramètres → Boutique & emplacements → « Sites et jours fériés »."
        },
        "transaktionen": {
          "titel": "Transactions",
          "intro": "Consulter toutes les ventes, voir et réimprimer les tickets. Les transactions sont un onglet du tableau de bord.",
          "schritte": [
            "Choisissez l’onglet « Transactions » du tableau de bord. Choisissez la période : Aujourd’hui, Hier, 7 derniers jours, Ce mois, Mois précédent, Trimestre ou Personnalisé. Filtrez par moyen de paiement ou statut.",
            "Ouvrez une ligne pour voir les articles, les données TSE et le ticket numérique.",
            "« Documents joints » liste le ticket et la facture de la transaction. « Afficher » montre le document, « Imprimer » le réimprime.",
            "Lancez une annulation ou un retour depuis le détail du ticket (droit « Annulation / retour »)."
          ],
          "tipp": "Chaque caisse a son propre journal. La clôture journalière se fait dans la Clôture de caisse."
        },
        "berichte": {
          "titel": "Rapports et ventes",
          "intro": "Analyser les ventes et repérer les tendances – dans les onglets « Ventes » et « Rapports » du tableau de bord.",
          "schritte": [
            "Rapports : choisissez Aujourd’hui, Semaine, Mois ou Année et analysez toutes les caisses ou une seule. « Rapport en PDF » enregistre l’analyse.",
            "Consultez indicateurs, moyens de paiement, types de clients, ventes par caisse, meilleurs articles et groupes de produits.",
            "Ventes : filtrez par période, lieu de vente, catégorie et fabricant.",
            "Comparez évolution mensuelle, fabricants, pagaies vs bateaux de course, tendances produits et meilleurs produits."
          ],
          "tipp": "Qui n’a pas accès au tableau de bord trouve Ventes, Rapports et Transactions comme entrées de menu séparées. Les analyses reposent sur des données d’exemple."
        },
        "einstellungen": {
          "titel": "Paramètres et droits",
          "intro": "Gérer appareils, utilisateurs, données de la boutique et interfaces. Le mode d’emploi est visible par tous ; les autres zones nécessitent un droit.",
          "schritte": [
            "Configurez imprimantes, lecteurs de codes-barres, TSE & sécurité de caisse, connexion ERP ainsi que boutiques en ligne & API. Les connexions sont simulées dans le prototype.",
            "Utilisateurs & rôles : créez des utilisateurs, attribuez des caisses, définissez les PIN, réglez les droits dans la matrice et planifiez le planning. Rôles : admin, responsable de magasin, chef d’équipe, vente, intérimaire, achats et atelier (technique).",
            "Boutique : coordonnées, logo, couleur d’accent, horaires, séries de numéros et textes de tous les documents. Modèles de documents : vérifier tickets, factures et étiquettes.",
            "Boutique & emplacements : emplacements sur jusqu’à quatre niveaux, atelier (taux horaire, seuil d’accord, opérations), sites et jours fériés, « Actus canoë sur le tableau de bord » (adresse n8n, tester la connexion) et « Météo dans le calendrier » (lieu, activé/désactivé).",
            "Moyens de paiement : activez ou désactivez carte, espèces, PayPal, facture, bon d’achat et paiement anticipé, triez-les et testez la connexion. Facture électronique : profil ZUGFeRD, syntaxe XRechnung et transmission.",
            "Admin (root uniquement) : langue du système et langue par utilisateur, journal système, base de données & sauvegarde.",
            "Modifiez l’ordre du menu en bas de la barre latérale avec « Trier le menu » ; « Rétablir par défaut » le réinitialise. Le tableau de bord reste toujours en haut."
          ],
          "tipp": "Le rôle atelier (technique) a un menu fixe (tableau de bord, atelier, calendrier, suivi du temps) et ne peut pas encaisser."
        }
      }
    },
    "es": {
      "name": "Español",
      "ui": {
        "titel": "Manual de usuario",
        "untertitel": "Paso a paso por zykol.POS. Para todos los usuarios.",
        "suche": "Buscar en el manual",
        "kapitel": "Capítulo",
        "treffer": "{n} capítulos",
        "keine": "Sin resultados. Pruebe otro término.",
        "tipp": "Consejo",
        "verfuegbar": "Disponible para usted",
        "benoetigt": "Requiere permiso",
        "oeffnen": "Abrir vista",
        "pdf": "Abrir como PDF",
        "alle": "Todos los idiomas en PDF",
        "inhalt": "Índice",
        "stand": "Fecha",
        "schritte": "Pasos",
        "alleNutzer": "Para todos los usuarios",
        "sprache": "Idioma"
      },
      "rechte": {
        "Verkauf kassieren": "Cobrar ventas",
        "QR-Etiketten drucken": "Imprimir etiquetas QR",
        "Angebote erstellen & versenden": "Crear y enviar presupuestos",
        "Journal & Transaktionen einsehen": "Ver diario y transacciones",
        "Kunden verwalten": "Gestionar clientes",
        "Berichte einsehen": "Ver informes",
        "Einstellungen & Benutzer": "Ajustes y usuarios",
        "Bestellbeleg personalisiert drucken": "Imprimir hoja de pedido personalizada",
        "Werkstatt ansehen": "Ver taller",
        "Versand ansehen": "Ver envíos",
        "Artikel & Bestand ansehen": "Ver artículos y existencias",
        "Ausschreibungen ansehen": "Ver licitaciones"
      },
      "kapitel": {
        "anmelden": {
          "titel": "Iniciar sesión",
          "intro": "Cada persona inicia sesión con su nombre y su PIN. Así las ventas y los cambios quedan asignados con claridad.",
          "schritte": [
            "Elija la caja arriba a la derecha. Solo se muestran las cajas que tiene asignadas.",
            "En «1. Elegir persona», toque su nombre.",
            "En «2. Introducir PIN», escriba el PIN en el teclado numérico o físico y toque «Iniciar sesión». Intro también inicia sesión, ← borra la última cifra, C vacía el campo.",
            "Salir un momento de la caja: toque «Bloquear» en la barra inferior. Para desbloquear, introduzca el PIN; el carrito se conserva.",
            "Cerrar sesión del todo: «Cerrar sesión» abajo en la barra lateral."
          ],
          "tipp": "¿Olvidó el PIN? «¿Olvidó el PIN?» en la página de inicio envía una solicitud al encargado o al administrador. root ajusta el idioma en Ajustes → Admin."
        },
        "dashboard": {
          "titel": "Panel",
          "intro": "El panel muestra lo que hay que hacer hoy y agrupa ventas, informes y transacciones en pestañas.",
          "schritte": [
            "Arriba, cambie entre las pestañas «Resumen», «Ventas», «Informes» y «Transacciones». Solo ve las pestañas para las que tiene permiso.",
            "Bajo el saludo pasa el teletipo «Noticias de canoa» con la actualidad del piragüismo. Se detiene al pasar el ratón por encima. Toque un titular para abrir el artículo; «Todas las noticias» muestra todas con resumen.",
            "Si el plazo de una licitación vence en menos de 7 días, aparece un aviso amarillo. Tóquelo para abrir la licitación.",
            "Toque los mosaicos para filtrar: Vencidas, Citas de hoy, Tareas abiertas hoy, Citas hasta el domingo.",
            "Marque las tareas hechas con la casilla. «Mañana» pasa una tarea al siguiente día laborable, «Todo a hoy» trae las tareas vencidas a hoy.",
            "También aparecen tareas automáticas, p. ej. «Cobrar taller» (arriba del todo) o las solicitudes de vacaciones pendientes para quien aprueba. El botón de la tarea abre el área correspondiente.",
            "Añada sus propias tareas abajo, elija un día laborable y toque «Añadir». Con el permiso «Delegar tareas» puede pasar una tarea a un compañero con «Asignar a …»."
          ],
          "tipp": "Sin dirección n8n, el teletipo muestra noticias de ejemplo. Los administradores la introducen en Ajustes → Tienda y ubicaciones → «Noticias de canoa en el panel»."
        },
        "kasse": {
          "titel": "Vender en caja",
          "intro": "Buscar artículos, elegir variante y añadirlos al carrito.",
          "schritte": [
            "Elija una categoría arriba (p. ej. Barcos, Palas) o busque por nombre o fabricante. Un código de barras escaneado encuentra el artículo al instante.",
            "Toque el artículo y elija la variante, p. ej. longitud, pala, talla, color o número de serie.",
            "En el carrito cambie cantidades o quite líneas. En tableta y móvil, el botón del carrito en el pie abre el carrito desde cualquier página.",
            "Asignar cliente: introduzca nombre o número o toque «Abrir lista de clientes». Un descuento guardado se aplica automáticamente. Sin datos de cliente elija «Cliente de paso (sin datos)».",
            "Bajo el total están «Pagar», «Hoja de pedido» y «Guardar como presupuesto».",
            "«Caja» en el pie le devuelve a la caja desde cualquier página y cierra las ventanas abiertas."
          ],
          "tipp": "Cada caja tiene su propio carrito; cambiar de caja no lo vacía. Las ventas descuentan primero las existencias de la zona de venta."
        },
        "bezahlen": {
          "titel": "Pago y ticket",
          "intro": "Elegir la forma de pago, cobrar, emitir ticket y factura. Los documentos quedan vinculados a la operación.",
          "schritte": [
            "Toque «Pagar» en el carrito. Aparece «Elegir forma de pago» con las formas activadas en Ajustes → Formas de pago, p. ej. tarjeta, efectivo, PayPal, factura, vale o pago por adelantado. «Volver» cierra la selección.",
            "Tarjeta: el cliente paga en el terminal. PayPal: el cliente paga con código QR. Efectivo: introduzca el importe entregado o elija un importe rápido; el cambio aparece al momento. Factura: para clientes con factura como clubes, empresas y el sector público.",
            "Si la compra incluye un barco, el diálogo muestra su número de serie e «Imprimir etiquetas QR». Las palas vendidas con factura reciben su ID.",
            "Toque «Pagar» en el diálogo. Aparece la emisión de documentos.",
            "Con tarjeta, efectivo y PayPal el ticket se imprime siempre. Opcionalmente elija también «Imprimir factura» o «Enviar factura por correo».",
            "Forma de pago factura: no hay ticket y la factura es obligatoria. Para empresas, clubes y sector público se crea como factura electrónica (capítulo Factura electrónica).",
            "Toque «Finalizar». Un aviso confirma la venta; «Abrir» la muestra en Transacciones."
          ],
          "tipp": "Cada ticket lleva un código QR para consultarlo en línea. TSE, terminal de tarjeta, PayPal, impresoras y correo están simulados en el prototipo."
        },
        "kassenabschluss": {
          "titel": "Cierre de caja",
          "intro": "Al final del día, conciliar los pagos no en efectivo, contar el efectivo e imprimir el informe Z.",
          "schritte": [
            "Abra «Cierre de caja» en la navegación. Arriba aparecen las ventas del día por forma de pago y el número de tickets.",
            "Pestaña «1 · Pagos no en efectivo»: para tarjeta y PayPal, introduzca el total del informe diario del terminal o de PayPal. La diferencia con la caja aparece al momento.",
            "Pestaña «2 · Contar efectivo»: registre la cantidad de cada billete y moneda con − y + o escribiendo; en monedas también cartuchos enteros. Abajo: teórico, real y diferencia. «Guardar borrador» conserva el recuento, «Restablecer» lo borra.",
            "Pestaña «3 · Cierre»: si hay diferencia, indique el motivo (obligatorio). Indique el cambio para mañana; el ingreso en banco se calcula a partir de él. Registre las retiradas y pagos del día con importe y motivo mediante «+ Retirada».",
            "Toque «Cerrar el día e imprimir informe Z». Después el día queda bloqueado.",
            "Pestaña «Historial»: vea cierres anteriores y reimprima el informe Z como «ticket Z» o «informe A4»."
          ],
          "tipp": "Ventas y auxiliares solo hacen el arqueo de caja. El cierre diario lo hacen administración, encargado de tienda o jefe de equipo."
        },
        "bestellbeleg": {
          "titel": "Hoja de pedido",
          "intro": "Los artículos pedidos o personalizados tienen su propia hoja, separada del ticket de caja. Cliente y pago se fijan al crearla.",
          "schritte": [
            "Toque «Hoja de pedido» en el carrito.",
            "En «Líneas», despliegue cada línea e introduzca la personalización si hace falta, p. ej. nombre del barco, asiento a medida o longitud de la pala.",
            "En «Cliente, entrega y pago», busque al cliente (nombre, número o teléfono) y tóquelo. Si es nuevo, introduzca los datos y toque «Guardar como nuevo cliente».",
            "Indique la entrega (recogida, envío a domicilio o envío), la fecha y un anticipo.",
            "En «Pago» elija: Pendiente, Pagado · tarjeta, Pagado · efectivo o factura con plazo en días. Para clubes y empresas la factura está preseleccionada.",
            "Revise la vista previa y toque «Imprimir / PDF». La hoja se archiva automáticamente en «Pedidos»."
          ],
          "tipp": "La hoja de pedido no es un ticket de caja. Con su firma, el cliente confirma la personalización."
        },
        "bestellbelege": {
          "titel": "Pedidos",
          "intro": "Pedidos de clientes con pago y estado hasta la entrega, y pedidos a proveedores.",
          "schritte": [
            "Abra «Pedidos» en la navegación. La pestaña «Pedidos de clientes» lista todas las hojas impresas; arriba: Pedido, Listo para recoger, Entregado y «Pendiente de cobro».",
            "Busque por número, cliente, teléfono o artículo, o filtre por estado. Toque una fila y ponga el estado en Pedido, Listo para recoger o Entregado.",
            "Solo se puede entregar si el pedido está pagado o va con factura. Si sigue pendiente, elija «Pagado con tarjeta», «Pagado en efectivo» o «Con factura (14 días)». «Volver a imprimir» imprime la hoja tal como se archivó.",
            "Pestaña «Pedidos a proveedores» (permiso «Gestionar proveedores»): pida mercancía con «Nuevo pedido» o adopte la «propuesta de pedido» para artículos bajo el stock mínimo. «Pedido en PDF» crea la carta de pedido.",
            "Cuando llegue la mercancía, regístrela en Artículos y existencias con «Registrar entrada» para ese pedido, también como entrega parcial."
          ],
          "tipp": "En el prototipo, «Pagado con tarjeta» solo cambia el estado; no se crea ticket de caja."
        },
        "angebote": {
          "titel": "Presupuestos",
          "intro": "Crear y enviar presupuestos y pasarlos a caja cuando se aceptan, también directamente desde el carrito.",
          "schritte": [
            "En «Presupuestos», cree uno nuevo, elija el cliente y añada líneas con descuento. Revise la vista previa en PDF y envíelo.",
            "Montar las líneas fácilmente: «Montar en el carrito» abre la caja en modo presupuesto. Elija los artículos como siempre y toque «Pasar al presupuesto». No se cobra nada y un carrito empezado se conserva.",
            "Mantenga el estado: Borrador, Enviado, Aceptado, Rechazado, Caducado. Cobre los aceptados con «Pasar a caja».",
            "Desde el carrito: «Guardar como presupuesto» guarda el contenido como presupuesto (borrador). Sin cliente se guarda para un cliente de paso.",
            "Más tarde, abra «Presupuestos de la caja» en la caja y toque «Cargar en el carrito» en el presupuesto deseado."
          ],
          "tipp": "La validez se toma de los ajustes de la tienda. Los presupuestos que caducan aparecen en el calendario y en el panel."
        },
        "stammdaten": {
          "titel": "Clientes",
          "intro": "Mantener los datos de clientes al día para que caja, tickets y facturas sean correctos.",
          "schritte": [
            "En «Clientes», cree o busque un cliente y filtre por tipo: particular, club, empresa, federación, escuela o sector público.",
            "Guarde descuento, condiciones de pago y dirección de facturación. Para el sector público, introduzca también el Leitweg-ID para la XRechnung.",
            "La ficha del cliente muestra compras, facturación, tickets y barcos comprados.",
            "«Productos del cliente» incluye también los productos de terceros que el cliente trajo al taller, con etiqueta e historial de taller."
          ],
          "tipp": "En el móvil, las tablas aparecen como tarjetas para que nada quede cortado."
        },
        "werkstatt": {
          "titel": "Taller",
          "intro": "Órdenes de taller desde la entrada hasta la entrega, también para barcos y equipos no comprados en su tienda (productos de terceros).",
          "schritte": [
            "Abra «Taller» en la navegación. Arriba: Entrada y presupuesto, En curso, Para entregar y Productos de terceros; debajo todas las órdenes con filtro por paso.",
            "Toque «Nueva orden de taller», elija el cliente (o «Crear y elegir cliente») e indique el objeto. Si no es un producto de su tienda, regístrelo con «+ Añadir producto de terceros»; se guarda en el cliente. «Imprimir recibo de entrada» da un recibo al cliente.",
            "Una orden pasa por seis pasos: 1 Entrada, 2 Presupuesto, 3 Orden, 4 Reparación, 5 Desviaciones, 6 Entrega. El siguiente paso solo se abre cuando el anterior está hecho.",
            "Presupuesto: elija trabajos del catálogo y material de la lista de artículos y toque «Imprimir presupuesto». Después «El cliente aprueba» o «El cliente rechaza».",
            "Reparación: anote tiempo de trabajo, material y textos predefinidos en el protocolo de reparación. El material usado se descuenta de las existencias.",
            "Si el coste supera lo aprobado (por defecto, a partir del 15 %), el cliente debe aprobar de nuevo: «El cliente aprueba la desviación».",
            "Entrega: «Imprimir acta de entrega» y «Pasar a caja para cobrar». Ventas recibe la tarea «Cobrar taller» en el panel y cobra en caja. Después elija ticket o factura; con forma de pago factura, la factura es obligatoria, y «Factura del ticket» crea después una factura sin nuevo asiento."
          ],
          "tipp": "Para productos de terceros, «Imprimir etiqueta QR» imprime una etiqueta solo con código QR y nombre de la tienda. Al escanearla se abre la ficha del producto. Tarifa por hora, límite de aprobación y catálogo de trabajos están en Ajustes → Tienda y ubicaciones."
        },
        "versand": {
          "titel": "Envíos",
          "intro": "Preparar y embalar órdenes de envío, entregarlas con etiqueta a DHL, UPS o DPD y tramitar devoluciones.",
          "schritte": [
            "Abra «Envíos» en la navegación. Los mosaicos Por embalar, Listo para enviar, Entregado hoy y Devoluciones abiertas llevan directamente a la pestaña correspondiente.",
            "Pestaña «Órdenes»: órdenes de envío de caja, tienda online y pedidos. «Crear orden de envío» añade una nueva.",
            "Pestaña «Preparación y embalaje»: retire la mercancía («Todo retirado»), «Marcar como preparado», toque «Paquete listo» en el puesto de embalaje y «Continuar a la etiqueta».",
            "Pestaña «Etiquetas y seguimiento»: «Crear etiqueta», revisarla con «Vista previa de la etiqueta» e «Imprimir etiqueta». Al final «Cierre del día y entrega»; «Consultar estado del envío» muestra dónde están los envíos.",
            "Pestaña «Devoluciones»: «Crear devolución» o «Crear devolución con etiqueta». Al llegar, «Registrar entrada» y clasifique la mercancía como «Perfecta» (vuelve al almacén) o «Dañada».",
            "Pestaña «Transportistas»: introduzca los accesos de DHL, UPS y DPD y «Probar conexión»."
          ],
          "tipp": "Las etiquetas son réplicas de las plantillas de los transportistas con la marca MUSTER (muestra). La conexión con DHL, UPS y DPD está simulada en el prototipo."
        },
        "artikel": {
          "titel": "Artículos, existencias y proveedores",
          "intro": "«Gestión de inventario» reúne Artículos y existencias, Proveedores y Barcos vendidos. Al tocar «Gestión de inventario» aparecen todas las áreas como mosaicos.",
          "schritte": [
            "«Artículos y existencias», pestaña Artículos: busque artículos y filtre por categoría, fabricante o ubicación. Cree con «Nuevo artículo» (administración, encargado de tienda, compras): fabricante, precios, tipo de IVA, variantes y ubicación por defecto.",
            "Las existencias solo cambian por venta, entrada de mercancía o un registro con motivo. A propósito no hay botones de más y menos.",
            "«Registrar»: anote merma, defecto u otro con motivo (obligatorio). Pueden hacerlo administración, encargado de tienda y jefe de equipo.",
            "«Registrar entrada»: siempre para un pedido abierto a proveedor, también como entrega parcial y repartida en varias ubicaciones. Compras también puede hacerlo.",
            "«Trasladar» mueve mercancía entre ubicaciones, p. ej. del almacén a la zona de venta. La pestaña «Existencias e historial» muestra cantidades por ubicación y cada movimiento.",
            "«Proveedores»: datos maestros, contactos, condiciones, plazo de entrega y pedidos abiertos por fabricante. «Añadir proveedor» crea uno nuevo."
          ],
          "tipp": "Administración y encargado de tienda configuran las ubicaciones en Ajustes → Tienda y ubicaciones. Las ubicaciones solo se pueden desactivar, no borrar, para conservar el historial."
        },
        "etiketten": {
          "titel": "Barcos vendidos, ID de palas y etiquetas QR",
          "intro": "Los barcos se identifican por su número de serie, las palas por un ID propio. Ambos están en la ficha del barco en Gestión de inventario → Barcos vendidos.",
          "schritte": [
            "El ID de la pala se crea al cerrar con factura a partir de fecha y número (p. ej. ZKP-261011-416-01) y aparece en la factura.",
            "Si una venta, una factura o un presupuesto aceptado incluye una pala, aparece «Imprimir etiquetas QR».",
            "Al vender un barco, el diálogo de pago muestra su número de serie con «Imprimir etiquetas QR». Si el barco del carrito aún no tiene número de serie, se toma el siguiente libre.",
            "«Barcos vendidos» contiene cada ficha de barco con número de serie, garantía e historial de servicio. Desde allí se puede reimprimir la etiqueta en cualquier momento."
          ],
          "tipp": "Cada impresión queda registrada, también las reimpresiones."
        },
        "ausschreibungen": {
          "titel": "Licitaciones",
          "intro": "Contratación pública desde la revisión hasta la adjudicación, con plazos, certificados de aptitud y oferta.",
          "schritte": [
            "Abra «Licitaciones» en la navegación. Arriba: Abiertas, Plazo esta semana, Presentadas y la tasa de adjudicación. Filtre por órgano de contratación o estado.",
            "«Nueva licitación» crea una licitación con número de expediente, plazos y lotes («+ Lote»). «Importar desde Notion» muestra entradas nuevas de la base de Notion «Licitaciones»; los duplicados se detectan y «Adoptar» las crea con estado «Revisado».",
            "Avance el estado paso a paso: Revisado, En examen, Participación decidida, Oferta en preparación, Presentada y, al final, Adjudicación, Rechazo, Anulada o Sin participación.",
            "Mantenga los certificados de aptitud. Aparece un aviso cuando uno está a punto de caducar.",
            "Elabore la oferta con cálculo (precio de compra, margen). Tras la adjudicación, la factura se crea como XRechnung con el número de expediente."
          ],
          "tipp": "Los plazos aparecen en el calendario. Desde 7 días antes del plazo de la oferta aparece un aviso diario en el panel. En el prototipo, la importación de Notion es un estado de datos fijo."
        },
        "erechnung": {
          "titel": "Factura electrónica",
          "intro": "Las facturas a empresas, clubes, escuelas y sector público se crean como factura electrónica según EN 16931.",
          "schritte": [
            "Para empresas, clubes, federaciones y escuelas se crea una factura ZUGFeRD: un PDF con un archivo XML incrustado.",
            "Para clientes del tipo «Sector público» se crea una XRechnung. Para ello debe estar el Leitweg-ID en la ficha del cliente.",
            "En la lista de facturas, una marca indica si la factura electrónica es válida.",
            "En Ajustes → Factura electrónica, los administradores ven el perfil ZUGFeRD, la sintaxis XRechnung, los datos obligatorios del vendedor (de Ajustes → Tienda) y la transmisión."
          ],
          "tipp": "La validación (KoSIT) y el envío por Peppol están simulados en el prototipo. El PDF ZUGFeRD aún no cumple PDF/A-3."
        },
        "kalender": {
          "titel": "Calendario",
          "intro": "Citas de recogida, entrega, taller, regata, feria, vacaciones y licitaciones, con el tiempo de cada día.",
          "schritte": [
            "Elija un mes y toque un día para ver sus citas. Filtre por tipo; la leyenda explica los colores.",
            "Cada día muestra el tiempo en la localidad de la tienda: símbolo, máxima y mínima (en el móvil solo la máxima). Para el día seleccionado, a la derecha aparecen estado del cielo, lluvia y viento. Los próximos 16 días muestran la previsión; los días pasados, el valor medido.",
            "Con «Editar» cambie o borre una cita y con «+ Cita en este día» cree una nueva. Los presupuestos que caducan se cambian en el presupuesto.",
            "Los domingos y festivos son grises y llevan «Tienda cerrada»; allí solo hay regatas. Las regatas llegan con sus fechas reales de Kai Kalender y nunca se mueven.",
            "Las vacaciones aprobadas y los plazos de licitaciones aparecen automáticamente.",
            "Pestaña «Turnos»: muestra quién trabaja y cuándo. Es solo de consulta; se planifica en Ajustes → Usuarios y roles."
          ],
          "tipp": "Para ver el calendario de la caja móvil, cambie de caja en el pie. Los administradores fijan la localidad del tiempo en Ajustes → Tienda y ubicaciones."
        },
        "zeiterfassung": {
          "titel": "Control horario y vacaciones",
          "intro": "Fichar entrada y salida, ver horas y saldo, solicitar y aprobar vacaciones.",
          "schritte": [
            "Abra «Control horario» en la navegación. En la pestaña «Fichar», toque «Entrada» al empezar y «Salida» al terminar. Se registran la caja y la hora.",
            "El resumen muestra para cada persona estado, horas de hoy y de la semana, teórico y saldo.",
            "Pestaña «Vacaciones»: su derecho, el resto del año anterior, días disfrutados, planificados y solicitados, y lo que queda.",
            "Solicitar vacaciones: indique inicio y fin, opcionalmente una nota, y envíe. Los días laborables se cuentan solos, sin fines de semana ni festivos del estado federado de su ubicación.",
            "Aprobar (administración, encargado de tienda, jefe de equipo): en «Solicitudes pendientes» toque «Aprobar» o «Rechazar». Las vacaciones aprobadas aparecen en el calendario; las solicitudes pendientes, en el panel.",
            "Con el permiso «Gestionar derecho a vacaciones», introduzca derecho, resto y días laborables por semana para todo el personal."
          ],
          "tipp": "El estado federado por ubicación (por defecto Berlín) se ajusta en Ajustes → Tienda y ubicaciones → «Sedes y festivos»."
        },
        "transaktionen": {
          "titel": "Transacciones",
          "intro": "Consultar todas las ventas, ver y reimprimir tickets. Las transacciones son una pestaña del panel.",
          "schritte": [
            "En el panel elija la pestaña «Transacciones». Elija el periodo: Hoy, Ayer, Últimos 7 días, Este mes, Mes anterior, Trimestre o Personalizado. Filtre por forma de pago o estado.",
            "Abra una fila para ver líneas, datos TSE y el ticket digital.",
            "En «Documentos adjuntos» están el ticket y la factura de la operación. «Ver» muestra el documento, «Imprimir» lo reimprime.",
            "Inicie una anulación o devolución desde el detalle del ticket (permiso «Anulación / devolución»)."
          ],
          "tipp": "Cada caja tiene su propio diario. El cierre diario se hace en Cierre de caja."
        },
        "berichte": {
          "titel": "Informes y ventas",
          "intro": "Analizar las ventas y detectar tendencias en las pestañas «Ventas» e «Informes» del panel.",
          "schritte": [
            "Informes: elija Hoy, Semana, Mes o Año y analice todas las cajas o una sola. «Informe en PDF» guarda el análisis.",
            "Vea indicadores, formas de pago, tipos de cliente, ventas por caja, artículos más vendidos y grupos de productos.",
            "Ventas: filtre por periodo, punto de venta, categoría y fabricante.",
            "Compare evolución mensual, fabricantes, palas frente a barcos de competición, tendencias y productos más vendidos."
          ],
          "tipp": "Quien no puede ver el panel encuentra Ventas, Informes y Transacciones como puntos de menú propios. Los análisis se basan en datos de ejemplo."
        },
        "einstellungen": {
          "titel": "Ajustes y permisos",
          "intro": "Gestionar dispositivos, usuarios, datos de la tienda e interfaces. El manual lo ven todos; las demás áreas requieren permiso.",
          "schritte": [
            "Configure impresoras, lectores de códigos de barras, TSE y seguridad de caja, conexión ERP y tiendas online y API. Las conexiones están simuladas en el prototipo.",
            "Usuarios y roles: cree usuarios, asigne cajas, defina PIN, fije permisos en la matriz y planifique los turnos. Roles: administración, encargado de tienda, jefe de equipo, ventas, auxiliar, compras y taller (técnico).",
            "Tienda: datos de la empresa, logotipo, color de acento, horarios, series de numeración y textos de todos los documentos. Plantillas de documentos: revisar tickets, facturas y etiquetas.",
            "Tienda y ubicaciones: ubicaciones en hasta cuatro niveles, taller (tarifa por hora, límite de aprobación, trabajos), sedes y festivos, «Noticias de canoa en el panel» (dirección n8n, probar conexión) y «Tiempo en el calendario» (localidad, activado/desactivado).",
            "Formas de pago: active o desactive tarjeta, efectivo, PayPal, factura, vale y pago por adelantado, ordénelas y pruebe la conexión. Factura electrónica: perfil ZUGFeRD, sintaxis XRechnung y transmisión.",
            "Admin (solo root): idioma del sistema e idioma por usuario, registro del sistema, base de datos y copia de seguridad.",
            "Cambie el orden del menú abajo en la barra lateral con «Ordenar menú»; «Restaurar predeterminado» lo restablece. El panel siempre queda arriba."
          ],
          "tipp": "El rol taller (técnico) tiene un menú fijo (panel, taller, calendario, control horario) y no puede cobrar."
        }
      }
    },
    "pt": {
      "name": "Português",
      "ui": {
        "titel": "Manual de utilização",
        "untertitel": "Passo a passo pelo zykol.POS. Para todos os utilizadores.",
        "suche": "Pesquisar no manual",
        "kapitel": "Capítulo",
        "treffer": "{n} capítulos",
        "keine": "Sem resultados. Experimente outro termo.",
        "tipp": "Dica",
        "verfuegbar": "Disponível para si",
        "benoetigt": "Requer permissão",
        "oeffnen": "Abrir vista",
        "pdf": "Abrir como PDF",
        "alle": "Todos os idiomas em PDF",
        "inhalt": "Índice",
        "stand": "Data",
        "schritte": "Passos",
        "alleNutzer": "Para todos os utilizadores",
        "sprache": "Idioma"
      },
      "rechte": {
        "Verkauf kassieren": "Registar vendas",
        "QR-Etiketten drucken": "Imprimir etiquetas QR",
        "Angebote erstellen & versenden": "Criar e enviar orçamentos",
        "Journal & Transaktionen einsehen": "Ver diário e transações",
        "Kunden verwalten": "Gerir clientes",
        "Berichte einsehen": "Ver relatórios",
        "Einstellungen & Benutzer": "Definições e utilizadores",
        "Bestellbeleg personalisiert drucken": "Imprimir nota de encomenda personalizada",
        "Werkstatt ansehen": "Ver oficina",
        "Versand ansehen": "Ver envios",
        "Artikel & Bestand ansehen": "Ver artigos e stock",
        "Ausschreibungen ansehen": "Ver concursos"
      },
      "kapitel": {
        "anmelden": {
          "titel": "Iniciar sessão",
          "intro": "Cada pessoa entra com o seu nome e PIN. Assim, vendas e alterações ficam claramente atribuídas.",
          "schritte": [
            "Escolha a caixa no canto superior direito. Só aparecem as caixas que lhe estão atribuídas.",
            "Em «1. Escolher pessoa», toque no seu nome.",
            "Em «2. Introduzir PIN», escreva o PIN no teclado numérico ou físico e toque em «Iniciar sessão». Enter também inicia sessão, ← apaga o último dígito, C limpa o campo.",
            "Sair da caixa por pouco tempo: toque em «Bloquear» na barra inferior. Introduza o PIN para desbloquear – o carrinho mantém-se.",
            "Sair por completo: «Terminar sessão» no fundo da barra lateral."
          ],
          "tipp": "Esqueceu o PIN? «Esqueceu o PIN?» na página de entrada envia um pedido ao gerente ou ao administrador. O root define o idioma em Definições → Admin."
        },
        "dashboard": {
          "titel": "Painel",
          "intro": "O painel mostra o que há para fazer hoje e reúne vendas, relatórios e transações em separadores.",
          "schritte": [
            "No topo, alterne entre os separadores «Visão geral», «Vendas», «Relatórios» e «Transações». Só vê os separadores para os quais tem permissão.",
            "Por baixo da saudação passa a faixa «Notícias de canoagem» com a atualidade da canoagem. Para quando o rato passa por cima. Toque num título para abrir o artigo; «Todas as notícias» mostra todas com resumo.",
            "Se o prazo de um concurso terminar em menos de 7 dias, surge um aviso amarelo. Toque nele para abrir o concurso.",
            "Toque nos mosaicos para filtrar: Em atraso, Marcações de hoje, Tarefas abertas hoje, Marcações até domingo.",
            "Marque as tarefas concluídas na caixa. «Amanhã» passa uma tarefa para o dia útil seguinte, «Tudo para hoje» traz as tarefas em atraso para hoje.",
            "Também surgem tarefas automáticas, p. ex. «Faturar oficina» (no topo) ou pedidos de férias pendentes para quem aprova. O botão da tarefa abre a área certa.",
            "Adicione as suas tarefas em baixo, escolha um dia útil e toque em «Adicionar». Com a permissão «Delegar tarefas» passe uma tarefa a um colega com «Atribuir a …»."
          ],
          "tipp": "Sem endereço n8n, a faixa mostra notícias de exemplo. Os administradores introduzem o endereço em Definições → Loja e localizações → «Notícias de canoagem no painel»."
        },
        "kasse": {
          "titel": "Vender na caixa",
          "intro": "Procurar artigos, escolher a variante e colocá-los no carrinho.",
          "schritte": [
            "Escolha uma categoria no topo (p. ex. Barcos, Pagaias) ou pesquise por nome ou fabricante. Um código de barras lido encontra o artigo de imediato.",
            "Toque no artigo e escolha a variante, p. ex. comprimento, pá, tamanho, cor ou número de série.",
            "No carrinho altere quantidades ou remova linhas. Em tablet e telemóvel, o botão do carrinho no rodapé abre o carrinho a partir de qualquer página.",
            "Associar cliente: introduza nome ou número ou toque em «Abrir lista de clientes». Um desconto guardado é aplicado automaticamente. Sem dados de cliente escolha «Cliente ocasional (sem dados)».",
            "Por baixo do total estão «Pagar», «Nota de encomenda» e «Guardar como orçamento».",
            "«Caixa» no rodapé leva-o de volta à caixa a partir de qualquer página e fecha as janelas abertas."
          ],
          "tipp": "Cada caixa tem o seu carrinho; mudar de caixa não o apaga. As vendas retiram primeiro o stock da área de venda."
        },
        "bezahlen": {
          "titel": "Pagamento e talão",
          "intro": "Escolher o meio de pagamento, cobrar, emitir talão e fatura. Os documentos ficam ligados à transação.",
          "schritte": [
            "Toque em «Pagar» no carrinho. Surge «Escolher meio de pagamento» com os meios ativados em Definições → Meios de pagamento, p. ex. cartão, numerário, PayPal, fatura, vale ou pré-pagamento. «Voltar» fecha a seleção.",
            "Cartão: o cliente paga no terminal. PayPal: o cliente paga por código QR. Numerário: introduza o valor entregue ou escolha um valor rápido; o troco aparece de imediato. Fatura: para clientes com fatura como clubes, empresas e o setor público.",
            "Se a compra incluir um barco, o diálogo mostra o número de série e «Imprimir etiquetas QR». As pagaias vendidas com fatura recebem o seu ID.",
            "Toque em «Pagar» no diálogo. Surge a emissão de documentos.",
            "Com cartão, numerário e PayPal o talão é sempre impresso. Opcionalmente escolha também «Imprimir fatura» ou «Enviar fatura por e-mail».",
            "Meio de pagamento fatura: não há talão e a fatura é obrigatória. Para empresas, clubes e setor público é criada como fatura eletrónica (capítulo Fatura eletrónica).",
            "Toque em «Concluir». Um aviso confirma a venda; «Abrir» mostra-a nas Transações."
          ],
          "tipp": "Cada talão tem um código QR para consulta online. TSE, terminal de cartão, PayPal, impressoras e e-mail são simulados no protótipo."
        },
        "kassenabschluss": {
          "titel": "Fecho de caixa",
          "intro": "No fim do dia, conciliar os pagamentos não em numerário, contar o dinheiro e imprimir o relatório Z.",
          "schritte": [
            "Abra «Fecho de caixa» na navegação. No topo aparecem as vendas do dia por meio de pagamento e o número de talões.",
            "Separador «1 · Pagamentos não em numerário»: para cartão e PayPal, introduza o total do relatório diário do terminal ou do PayPal. A diferença para a caixa aparece de imediato.",
            "Separador «2 · Contar numerário»: registe a quantidade de cada nota e moeda com − e + ou escrevendo; nas moedas também rolos inteiros. Em baixo: previsto, real e diferença. «Guardar rascunho» guarda a contagem, «Repor» apaga-a.",
            "Separador «3 · Fecho»: se houver diferença, indique o motivo (obrigatório). Indique o fundo de caixa para amanhã; o depósito bancário é calculado a partir dele. Registe os levantamentos e pagamentos do dia com valor e motivo em «+ Levantamento».",
            "Toque em «Fechar o dia e imprimir relatório Z». O dia fica então bloqueado.",
            "Separador «Histórico»: veja fechos anteriores e reimprima o relatório Z como «talão Z» ou «relatório A4»."
          ],
          "tipp": "Vendas e auxiliares só fazem a contagem de caixa. O fecho diário é feito pela administração, gerente de loja ou chefe de equipa."
        },
        "bestellbeleg": {
          "titel": "Nota de encomenda",
          "intro": "Os artigos encomendados ou personalizados têm a sua própria nota, separada do talão de caixa. Cliente e pagamento ficam definidos na criação.",
          "schritte": [
            "Toque em «Nota de encomenda» no carrinho.",
            "Em «Linhas», expanda cada linha e introduza a personalização se necessário, p. ex. nome do barco, assento à medida ou comprimento da pagaia.",
            "Em «Cliente, entrega e pagamento», procure o cliente (nome, número ou telefone) e toque nele. Se for novo, introduza os dados e toque em «Guardar como novo cliente».",
            "Indique a entrega (levantamento, entrega ao domicílio ou envio), a data e um sinal.",
            "Em «Pagamento» escolha: Em aberto, Pago · cartão, Pago · numerário ou fatura com prazo em dias. Para clubes e empresas, a fatura está pré-selecionada.",
            "Verifique a pré-visualização e toque em «Imprimir / PDF». A nota é arquivada automaticamente em «Encomendas»."
          ],
          "tipp": "A nota de encomenda não é um talão de caixa. Com a assinatura, o cliente confirma a personalização."
        },
        "bestellbelege": {
          "titel": "Encomendas",
          "intro": "Encomendas de clientes com pagamento e estado até à entrega, e encomendas a fornecedores.",
          "schritte": [
            "Abra «Encomendas» na navegação. O separador «Encomendas de clientes» lista todas as notas impressas; no topo: Encomendado, Pronto a levantar, Entregue e «Por cobrar».",
            "Pesquise por número, cliente, telefone ou artigo, ou filtre por estado. Toque numa linha e defina o estado como Encomendado, Pronto a levantar ou Entregue.",
            "Só é possível entregar se a encomenda estiver paga ou for com fatura. Se ainda estiver em aberto, escolha «Pago com cartão», «Pago em numerário» ou «Com fatura (14 dias)». «Imprimir novamente» imprime a nota tal como foi arquivada.",
            "Separador «Encomendas a fornecedores» (permissão «Gerir fornecedores»): encomende com «Nova encomenda» ou adote a «proposta de encomenda» para artigos abaixo do stock mínimo. «Encomenda em PDF» cria a carta de encomenda.",
            "Quando a mercadoria chegar, registe-a em Artigos e stock com «Registar entrada» para essa encomenda, também como entrega parcial."
          ],
          "tipp": "No protótipo, «Pago com cartão» só altera o estado; não é criado talão de caixa."
        },
        "angebote": {
          "titel": "Orçamentos",
          "intro": "Criar e enviar orçamentos e passá-los para a caixa quando aceites, também diretamente a partir do carrinho.",
          "schritte": [
            "Em «Orçamentos», crie um novo, escolha o cliente e adicione linhas com desconto. Verifique a pré-visualização em PDF e envie.",
            "Montar as linhas facilmente: «Montar no carrinho» abre a caixa em modo orçamento. Escolha os artigos como sempre e toque em «Passar para o orçamento». Nada é cobrado e um carrinho iniciado é mantido.",
            "Mantenha o estado: Rascunho, Enviado, Aceite, Recusado, Expirado. Fature os aceites com «Passar para a caixa».",
            "A partir do carrinho: «Guardar como orçamento» guarda o conteúdo como orçamento (rascunho). Sem cliente, é guardado para um cliente ocasional.",
            "Mais tarde, abra «Orçamentos da caixa» na caixa e toque em «Carregar no carrinho» no orçamento pretendido."
          ],
          "tipp": "A validade resulta das definições da loja. Os orçamentos a expirar aparecem no calendário e no painel."
        },
        "stammdaten": {
          "titel": "Clientes",
          "intro": "Manter os dados de clientes atualizados para que caixa, talões e faturas estejam corretos.",
          "schritte": [
            "Em «Clientes», crie ou procure um cliente e filtre por tipo: particular, clube, empresa, federação, escola ou setor público.",
            "Guarde desconto, condições de pagamento e morada de faturação. Para o setor público, introduza também o Leitweg-ID para a XRechnung.",
            "A ficha do cliente mostra compras, volume de vendas, talões e barcos comprados.",
            "«Produtos do cliente» inclui também os produtos de terceiros que o cliente trouxe à oficina, com etiqueta e histórico de oficina."
          ],
          "tipp": "No telemóvel, as tabelas aparecem como cartões para que nada fique cortado."
        },
        "werkstatt": {
          "titel": "Oficina",
          "intro": "Ordens de oficina desde a entrada até à entrega, também para barcos e equipamento não comprados na sua loja (produtos de terceiros).",
          "schritte": [
            "Abra «Oficina» na navegação. No topo: Entrada e orçamento, Em curso, Para entregar e Produtos de terceiros; por baixo todas as ordens com filtro por passo.",
            "Toque em «Nova ordem de oficina», escolha o cliente (ou «Criar e escolher cliente») e indique o objeto. Se não for um produto da sua loja, registe-o com «+ Adicionar produto de terceiros»; fica guardado no cliente. «Imprimir recibo de entrada» dá um recibo ao cliente.",
            "Uma ordem passa por seis passos: 1 Entrada, 2 Orçamento, 3 Ordem, 4 Reparação, 5 Desvios, 6 Entrega. O passo seguinte só abre quando o anterior estiver concluído.",
            "Orçamento: escolha trabalhos do catálogo e material da lista de artigos e toque em «Imprimir orçamento». Depois «Cliente aprova» ou «Cliente recusa».",
            "Reparação: registe tempo de trabalho, material e textos predefinidos no protocolo de reparação. O material usado é retirado do stock.",
            "Se o custo ultrapassar o aprovado (por defeito, a partir de 15 %), o cliente tem de aprovar de novo: «Cliente aprova o desvio».",
            "Entrega: «Imprimir auto de entrega» e «Passar à caixa para faturar». As vendas recebem a tarefa «Faturar oficina» no painel e cobram na caixa. Depois escolha talão ou fatura; com o meio de pagamento fatura, a fatura é obrigatória, e «Fatura do talão» cria depois uma fatura sem novo lançamento."
          ],
          "tipp": "Para produtos de terceiros, «Imprimir etiqueta QR» imprime uma etiqueta só com código QR e nome da loja. A leitura abre a ficha do produto. Preço por hora, limite de aprovação e catálogo de trabalhos estão em Definições → Loja e localizações."
        },
        "versand": {
          "titel": "Envios",
          "intro": "Preparar e embalar ordens de envio, entregá-las com etiqueta à DHL, UPS ou DPD e tratar devoluções.",
          "schritte": [
            "Abra «Envios» na navegação. Os mosaicos Por embalar, Pronto a enviar, Entregue hoje e Devoluções abertas levam diretamente ao separador certo.",
            "Separador «Ordens»: ordens de envio da caixa, da loja online e das encomendas. «Criar ordem de envio» adiciona uma nova.",
            "Separador «Preparação e embalagem»: retire a mercadoria («Tudo retirado»), «Marcar como preparado», toque em «Encomenda pronta» no posto de embalagem e «Continuar para a etiqueta».",
            "Separador «Etiquetas e rastreio»: «Criar etiqueta», verificá-la com «Pré-visualizar etiqueta» e «Imprimir etiqueta». No fim «Fecho do dia e entrega»; «Obter estado do envio» mostra onde estão os envios.",
            "Separador «Devoluções»: «Criar devolução» ou «Criar devolução com etiqueta». À chegada, «Registar entrada» e classifique a mercadoria como «Em perfeito estado» (volta ao stock) ou «Danificada».",
            "Separador «Transportadoras»: introduza os acessos DHL, UPS e DPD e «Testar ligação»."
          ],
          "tipp": "As etiquetas são réplicas dos modelos das transportadoras com a marca MUSTER (amostra). A ligação à DHL, UPS e DPD é simulada no protótipo."
        },
        "artikel": {
          "titel": "Artigos, stock e fornecedores",
          "intro": "«Gestão de stock» reúne Artigos e stock, Fornecedores e Barcos vendidos. Ao tocar em «Gestão de stock» aparecem todas as áreas como mosaicos.",
          "schritte": [
            "«Artigos e stock», separador Artigos: procure artigos e filtre por categoria, fabricante ou localização. Crie com «Novo artigo» (administração, gerente de loja, compras): fabricante, preços, taxa de IVA, variantes e localização predefinida.",
            "O stock só muda por venda, entrada de mercadoria ou registo com motivo. Propositadamente não há botões de mais e menos.",
            "«Registar»: registe quebra, defeito ou outro com motivo (obrigatório). Podem fazê-lo a administração, o gerente de loja e o chefe de equipa.",
            "«Registar entrada»: sempre para uma encomenda aberta a fornecedor, também como entrega parcial e distribuída por várias localizações. As compras também podem fazê-lo.",
            "«Transferir» move mercadoria entre localizações, p. ex. do armazém para a área de venda. O separador «Stock e histórico» mostra quantidades por localização e cada movimento.",
            "«Fornecedores»: dados mestres, contactos, condições, prazo de entrega e encomendas abertas por fabricante. «Adicionar fornecedor» cria um novo."
          ],
          "tipp": "A administração e o gerente de loja configuram as localizações em Definições → Loja e localizações. As localizações só podem ser desativadas, não apagadas, para manter o histórico."
        },
        "etiketten": {
          "titel": "Barcos vendidos, ID de pagaias e etiquetas QR",
          "intro": "Os barcos são identificados pelo número de série, as pagaias por um ID próprio. Ambos estão na ficha do barco em Gestão de stock → Barcos vendidos.",
          "schritte": [
            "O ID da pagaia é criado no fecho com fatura a partir da data e do número (p. ex. ZKP-261011-416-01) e aparece na fatura.",
            "Se uma venda, uma fatura ou um orçamento aceite incluir uma pagaia, surge «Imprimir etiquetas QR».",
            "Ao vender um barco, o diálogo de pagamento mostra o número de série com «Imprimir etiquetas QR». Se o barco no carrinho ainda não tiver número de série, é usado o próximo livre.",
            "«Barcos vendidos» contém cada ficha de barco com número de série, garantia e histórico de serviço. A partir daí a etiqueta pode ser reimpressa a qualquer momento."
          ],
          "tipp": "Cada impressão fica registada, também as reimpressões."
        },
        "ausschreibungen": {
          "titel": "Concursos",
          "intro": "Contratação pública desde a análise até à adjudicação, com prazos, certificados de habilitação e proposta.",
          "schritte": [
            "Abra «Concursos» na navegação. No topo: Abertos, Prazo esta semana, Entregues e a taxa de adjudicação. Filtre por entidade adjudicante ou estado.",
            "«Novo concurso» cria um concurso com número de processo, prazos e lotes («+ Lote»). «Importar do Notion» mostra entradas novas da base Notion «Concursos»; os duplicados são detetados e «Adotar» cria-os com o estado «Analisado».",
            "Avance o estado passo a passo: Analisado, Em análise, Participação decidida, Proposta em preparação, Entregue e, no fim, Adjudicação, Recusa, Anulado ou Sem participação.",
            "Mantenha os certificados de habilitação. Surge um aviso quando um está prestes a caducar.",
            "Elabore a proposta com cálculo (preço de compra, margem). Após a adjudicação, a fatura é criada como XRechnung com o número de processo."
          ],
          "tipp": "Os prazos aparecem no calendário. A partir de 7 dias antes do prazo da proposta surge um aviso diário no painel. No protótipo, a importação do Notion é um estado de dados fixo."
        },
        "erechnung": {
          "titel": "Fatura eletrónica",
          "intro": "As faturas a empresas, clubes, escolas e setor público são criadas como fatura eletrónica segundo a EN 16931.",
          "schritte": [
            "Para empresas, clubes, federações e escolas é criada uma fatura ZUGFeRD: um PDF com um ficheiro XML incorporado.",
            "Para clientes do tipo «Setor público» é criada uma XRechnung. Para isso o Leitweg-ID tem de estar na ficha do cliente.",
            "Na lista de faturas, um visto mostra se a fatura eletrónica é válida.",
            "Em Definições → Fatura eletrónica, os administradores veem o perfil ZUGFeRD, a sintaxe XRechnung, os dados obrigatórios do vendedor (de Definições → Loja) e a transmissão."
          ],
          "tipp": "A validação (KoSIT) e o envio por Peppol são simulados no protótipo. O PDF ZUGFeRD ainda não cumpre PDF/A-3."
        },
        "kalender": {
          "titel": "Calendário",
          "intro": "Marcações de levantamento, entrega, oficina, regata, feira, férias e concursos, com a meteorologia de cada dia.",
          "schritte": [
            "Escolha um mês e toque num dia para ver as suas marcações. Filtre por tipo; a legenda explica as cores.",
            "Cada dia mostra a meteorologia na localidade da loja: símbolo, máxima e mínima (no telemóvel só a máxima). Para o dia selecionado, à direita aparecem estado do tempo, chuva e vento. Nos próximos 16 dias é a previsão; nos dias passados, o valor medido.",
            "Com «Editar» altere ou apague uma marcação e com «+ Marcação neste dia» crie uma nova. Os orçamentos a expirar alteram-se no orçamento.",
            "Domingos e feriados estão a cinzento e indicam «Loja fechada»; aí só há regatas. As regatas vêm com as datas reais do Kai Kalender e nunca são movidas.",
            "As férias aprovadas e os prazos de concursos aparecem automaticamente.",
            "Separador «Escala»: mostra quem trabalha e quando. É só de consulta; o planeamento faz-se em Definições → Utilizadores e funções."
          ],
          "tipp": "Para ver o calendário da caixa móvel, mude de caixa no rodapé. Os administradores definem a localidade da meteorologia em Definições → Loja e localizações."
        },
        "zeiterfassung": {
          "titel": "Registo de horas e férias",
          "intro": "Picar entrada e saída, ver horas e saldo, pedir e aprovar férias.",
          "schritte": [
            "Abra «Registo de horas» na navegação. No separador «Picar ponto», toque em «Entrada» no início e «Saída» no fim. A caixa e a hora ficam registadas.",
            "A visão geral mostra para cada pessoa estado, horas de hoje e da semana, previsto e saldo.",
            "Separador «Férias»: o seu direito, o resto do ano anterior, dias gozados, planeados e pedidos, e o que resta.",
            "Pedir férias: indique início e fim, opcionalmente uma nota, e envie. Os dias úteis são contados automaticamente, sem fins de semana nem feriados do estado federado da sua localização.",
            "Aprovar (administração, gerente de loja, chefe de equipa): em «Pedidos de férias pendentes» toque em «Aprovar» ou «Recusar». As férias aprovadas aparecem no calendário; os pedidos pendentes, no painel.",
            "Com a permissão «Gerir direito a férias», introduza direito, resto e dias úteis por semana para toda a equipa."
          ],
          "tipp": "O estado federado por localização (predefinição Berlim) define-se em Definições → Loja e localizações → «Locais e feriados»."
        },
        "transaktionen": {
          "titel": "Transações",
          "intro": "Consultar todas as vendas, ver e reimprimir talões. As transações são um separador do painel.",
          "schritte": [
            "No painel escolha o separador «Transações». Escolha o período: Hoje, Ontem, Últimos 7 dias, Este mês, Mês anterior, Trimestre ou Personalizado. Filtre por meio de pagamento ou estado.",
            "Abra uma linha para ver linhas, dados TSE e o talão digital.",
            "Em «Documentos anexos» estão o talão e a fatura da transação. «Ver» mostra o documento, «Imprimir» reimprime-o.",
            "Inicie uma anulação ou devolução a partir do detalhe do talão (permissão «Anulação / devolução»)."
          ],
          "tipp": "Cada caixa tem o seu diário. O fecho diário faz-se no Fecho de caixa."
        },
        "berichte": {
          "titel": "Relatórios e vendas",
          "intro": "Analisar as vendas e detetar tendências nos separadores «Vendas» e «Relatórios» do painel.",
          "schritte": [
            "Relatórios: escolha Hoje, Semana, Mês ou Ano e analise todas as caixas ou uma só. «Relatório em PDF» guarda a análise.",
            "Veja indicadores, meios de pagamento, tipos de cliente, vendas por caixa, artigos mais vendidos e grupos de produtos.",
            "Vendas: filtre por período, ponto de venda, categoria e fabricante.",
            "Compare evolução mensal, fabricantes, pagaias vs. barcos de competição, tendências e produtos mais vendidos."
          ],
          "tipp": "Quem não pode ver o painel encontra Vendas, Relatórios e Transações como itens de menu próprios. As análises baseiam-se em dados de exemplo."
        },
        "einstellungen": {
          "titel": "Definições e permissões",
          "intro": "Gerir dispositivos, utilizadores, dados da loja e interfaces. O manual é visível para todos; as outras áreas exigem permissão.",
          "schritte": [
            "Configure impressoras, leitores de códigos de barras, TSE e segurança da caixa, ligação ERP e lojas online e API. As ligações são simuladas no protótipo.",
            "Utilizadores e funções: crie utilizadores, atribua caixas, defina PIN, defina permissões na matriz e planeie a escala. Funções: administração, gerente de loja, chefe de equipa, vendas, auxiliar, compras e oficina (técnico).",
            "Loja: dados da empresa, logótipo, cor de destaque, horários, séries de numeração e textos de todos os documentos. Modelos de documentos: verificar talões, faturas e etiquetas.",
            "Loja e localizações: localizações em até quatro níveis, oficina (preço por hora, limite de aprovação, trabalhos), locais e feriados, «Notícias de canoagem no painel» (endereço n8n, testar ligação) e «Meteorologia no calendário» (localidade, ligado/desligado).",
            "Meios de pagamento: ative ou desative cartão, numerário, PayPal, fatura, vale e pré-pagamento, ordene-os e teste a ligação. Fatura eletrónica: perfil ZUGFeRD, sintaxe XRechnung e transmissão.",
            "Admin (só root): idioma do sistema e idioma por utilizador, registo do sistema, base de dados e cópia de segurança.",
            "Altere a ordem do menu em baixo na barra lateral com «Ordenar menu»; «Repor predefinição» repõe-na. O painel fica sempre no topo."
          ],
          "tipp": "A função oficina (técnico) tem um menu fixo (painel, oficina, calendário, registo de horas) e não pode cobrar."
        }
      }
    }
  }
};
