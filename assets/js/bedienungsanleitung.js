// zykol.POS – Bedienungsanleitung (DE, EN, FR, ES, PT). Quelle für die Ansicht in Einstellungen und für das PDF. Stand v11.01.
window.ZYKOL_ANLEITUNG = {
  "version": "v11.01",
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
      "id": "etiketten",
      "view": "verkaufteBoote",
      "recht": "QR-Etiketten drucken"
    },
    {
      "id": "angebote",
      "view": "angebote",
      "recht": "Angebote erstellen & versenden"
    },
    {
      "id": "transaktionen",
      "view": "transaktionen",
      "recht": "Journal & Transaktionen einsehen"
    },
    {
      "id": "stammdaten",
      "view": "kunden",
      "recht": "Kunden verwalten"
    },
    {
      "id": "kalender",
      "view": "kalender",
      "recht": null
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
        "Bestellbeleg personalisiert drucken": "Bestellbeleg personalisiert drucken"
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
          "intro": "Das Dashboard zeigt, was heute zu tun ist: überfällige Aufgaben, Termine von heute, offene Aufgaben und die restliche Woche.",
          "schritte": [
            "Kacheln oben antippen, um zu filtern: Überfällig, Termine heute, Offene Aufgaben heute, Termine bis Sonntag.",
            "Erledigte Aufgaben über das Kästchen abhaken. „Morgen“ schiebt eine Aufgabe auf den nächsten Werktag – am Samstag heißt der Knopf deshalb „Montag“.",
            "„Alle auf heute“ holt alle überfälligen Aufgaben auf den heutigen Tag.",
            "Eigene Aufgaben unten eintragen, Tag wählen und „Hinzufügen“ antippen. Wählbar sind nur Werktage.",
            "Mit dem Recht „Aufgaben delegieren“ über „Verteilen an …“ eine Aufgabe einem Kollegen geben. Er sieht sie mit „Von … delegiert“ und kann sie abhaken, aber nicht löschen.",
            "Termine, deren Uhrzeit vorbei ist, sind rot markiert. Angebotsaufgaben öffnen direkt das Angebot."
          ],
          "tipp": "Sonntage und Feiertage (Niedersachsen) sind Ruhetage: Termine und Aufgaben stehen am nächsten Werktag. An einem Ruhetag zeigt das Dashboard „geschlossen“ und die Woche bis zum nächsten Sonntag."
        },
        "kasse": {
          "titel": "Verkaufen an der Kasse",
          "intro": "Artikel suchen, Variante wählen, in den Warenkorb legen.",
          "schritte": [
            "Oben eine Rubrik wählen (z. B. Boote, Paddel) oder nach Name oder Hersteller suchen. Ein gescannter Barcode findet den Artikel sofort.",
            "Artikel antippen und die Variante wählen, z. B. Länge, Blatt, Größe, Farbe oder Seriennummer.",
            "Im Warenkorb Mengen ändern oder Positionen entfernen. Auf Tablet und Handy öffnet der Warenkorb-Knopf in der Fußleiste den Warenkorb – von jeder Seite aus.",
            "Kunden zuordnen: Namen oder Nummer eingeben oder „Kundenliste öffnen“. Ein hinterlegter Kundenrabatt wird automatisch abgezogen.",
            "Möchte jemand ohne Kundendaten kaufen, „Barkunde (ohne Kundendaten)“ wählen – ohne Kundenrabatt.",
            "Unter dem Gesamtbetrag stehen drei Knöpfe: „Bezahlen“ (Kapitel Bezahlen), „Bestellbeleg“ (für bestellte oder personalisierte Ware) und „Als Angebot speichern“.",
            "„Kasse“ in der Fußleiste bringt Sie von jeder Seite zurück zur Kasse und schließt offene Fenster."
          ],
          "tipp": "Jede Kasse hat ihren eigenen Warenkorb. Ein Wechsel der Kasse löscht ihn nicht."
        },
        "bezahlen": {
          "titel": "Bezahlen und Beleg",
          "intro": "Zahlart wählen, bezahlen, Bon und Rechnung ausgeben. Die Belege hängen danach am Vorgang.",
          "schritte": [
            "Im Warenkorb „Bezahlen“ antippen. Darunter erscheint „Zahlart wählen“ mit Karte, Bar und Rechnung. „Zurück“ klappt die Auswahl wieder zu.",
            "Karte: Der Kunde zahlt am Terminal. Bar: den gegebenen Betrag eingeben oder einen Schnellbetrag wählen, das Rückgeld erscheint sofort. Rechnung: für Rechnungskunden wie Vereine und Firmen; enthält der Einkauf Paddel, werden die Paddel-IDs vergeben und angezeigt.",
            "Enthält der Einkauf ein Boot, zeigt der Dialog seine Seriennummer und „QR-Etiketten drucken“ – bei jeder Zahlart.",
            "Im Dialog „Bezahlen“ antippen. Es erscheint die Belegausgabe.",
            "Karte und Bar: Der Bon wird immer gedruckt. Zusätzlich optional „Rechnung drucken“ oder „Rechnung per E-Mail senden“ wählen; die E-Mail-Adresse des Kunden wird übernommen.",
            "Zahlart Rechnung: Es gibt keinen Bon. Die Rechnung ist Pflicht – „Rechnung drucken“ oder „Rechnung per E-Mail senden“ wählen.",
            "„Abschließen“ antippen. Bon und Rechnung gehen direkt an den Drucker, ohne Vorschau. Ein Hinweis bestätigt den Abschluss; „Öffnen“ zeigt den Vorgang in den Transaktionen.",
            "„Bestellbeleg“ druckt zusätzlich einen Bestellbeleg. „Zurück“ kehrt ohne Abschluss in den Warenkorb bzw. zur Zahlung zurück."
          ],
          "tipp": "Jeder Beleg trägt einen QR-Code, über den Kunden ihn online abrufen. TSE, Kartenzahlung, Drucker und E-Mail-Versand sind im Prototyp simuliert."
        },
        "bestellbeleg": {
          "titel": "Bestellbeleg",
          "intro": "Für Ware, die bestellt oder personalisiert wird, gibt es einen eigenen Beleg – getrennt vom Kassenbeleg. Kunde und Bezahlung werden schon beim Erstellen festgelegt.",
          "schritte": [
            "Im Warenkorb „Bestellbeleg“ antippen.",
            "Unter „Positionen“ jede Position aufklappen und bei Bedarf die Personalisierung eintragen, z. B. Bootsname, Sitz auf Kundenmaß oder Paddellänge.",
            "Unter „Kunde, Übergabe & Bezahlung“ den Kunden suchen (Name, Nummer oder Telefon) und antippen – Name, Telefon und E-Mail werden übernommen. Ist der Kunde neu, die Daten eintragen und „Als neuen Kunden speichern“ antippen.",
            "Übergabe (Abholung, Lieferung oder Versand), Termin und eine Anzahlung eintragen.",
            "Unter „Bezahlung“ wählen: Noch offen, Bezahlt · Karte, Bezahlt · Bar oder Rechnung mit Zahlungsziel in Tagen. Bei Vereinen und Firmen ist Rechnung vorgewählt.",
            "Die Vorschau prüfen und „Drucken / PDF“ antippen. Der Bestellbeleg wird dabei automatisch unter „Bestellbelege“ abgelegt."
          ],
          "tipp": "Der Bestellbeleg ist kein Kassenbeleg. Mit der Unterschrift bestätigt der Kunde die Personalisierung."
        },
        "bestellbelege": {
          "titel": "Bestellbelege verwalten",
          "intro": "Alle gedruckten Bestellbelege an einem Ort – mit Bezahlung und Status bis zur Übergabe.",
          "schritte": [
            "In der Navigation „Bestellbelege“ öffnen. Oben stehen Bestellt, Abholbereit, Übergeben und „Noch zu kassieren“.",
            "Nach Nummer, Kunde, Telefon oder Artikel suchen oder nach Status filtern.",
            "Eine Zeile antippen: Positionen mit Personalisierung, Hinweis und Bezahlung erscheinen. Den Status auf Bestellt, Abholbereit oder Übergeben setzen.",
            "Übergeben geht nur, wenn die Bestellung bezahlt ist oder auf Rechnung läuft. Ist sie noch offen, „Bezahlt mit Karte“, „Bezahlt bar“ oder „Auf Rechnung (14 Tage)“ wählen.",
            "„Erneut drucken“ druckt den Beleg so, wie er abgelegt wurde."
          ],
          "tipp": "Im Prototyp setzt „Bezahlt mit Karte“ nur den Status; es wird kein Kassenbeleg erzeugt."
        },
        "etiketten": {
          "titel": "Paddel-IDs und QR-Etiketten",
          "intro": "Boote werden über ihre Seriennummer erkannt, Paddel über eine eigene ID.",
          "schritte": [
            "Die Paddel-ID entsteht beim Abschluss mit Rechnung aus Datum und Nummer (z. B. ZKP-261011-416-01) und steht auf der Rechnung.",
            "Enthält ein Abschluss, eine Rechnung oder ein angenommenes Angebot ein Paddel, erscheint „QR-Etiketten drucken“.",
            "Wird ein Boot verkauft, zeigt der Bezahldialog seine Seriennummer mit „QR-Etiketten drucken“. Hat das Boot im Warenkorb noch keine Seriennummer, wird die nächste freie genommen.",
            "Etiketten auf dem QR-Etikettendrucker ausgeben und am Schaft bzw. am Boot anbringen. Ein Nachdruck ist jederzeit auch aus der Bootsakte unter „Verkaufte Boote“ möglich."
          ],
          "tipp": "Jeder Druck wird protokolliert, auch Nachdrucke."
        },
        "angebote": {
          "titel": "Angebote",
          "intro": "Angebote erstellen, versenden und bei Zusage in die Kasse übernehmen – auch direkt aus dem Warenkorb.",
          "schritte": [
            "Unter „Angebote“ ein neues Angebot anlegen, Kunden wählen und Positionen mit Rabatt hinzufügen. Die PDF-Vorschau prüfen und versenden.",
            "Den Status pflegen: Entwurf, Versendet, Angenommen, Abgelehnt, Abgelaufen. Angenommene Angebote mit „In Kasse übernehmen“ abrechnen.",
            "Aus dem Warenkorb: „Als Angebot speichern“ legt den Inhalt als Angebot (Entwurf) ab. Der Warenkorb wird geleert, Sie bleiben in der Kasse. Ohne Kunde wird das Angebot für einen Barkunden gespeichert.",
            "Später in der Kasse „Angebote aus der Kasse“ öffnen und beim gewünschten Angebot „In Warenkorb laden“ antippen."
          ],
          "tipp": "Die Gültigkeit ergibt sich aus den Shop-Einstellungen. Auslaufende Angebote stehen im Kalender und auf dem Dashboard."
        },
        "transaktionen": {
          "titel": "Transaktionen und Tagesabschluss",
          "intro": "Alle Verkäufe nachschlagen, Belege ansehen und erneut drucken, den Tag abschließen.",
          "schritte": [
            "Zeitraum wählen: Heute, Gestern, Letzte 7 Tage, Dieser Monat, Vormonat, Quartal oder Benutzerdefiniert. Nach Zahlart oder Status filtern.",
            "Eine Zeile öffnen, um Positionen, TSE-Daten und den digitalen Beleg zu sehen.",
            "Unter „Angehängte Dokumente“ stehen Bon und Rechnung des Vorgangs, mit Vermerk „gedruckt“ oder „per E-Mail an …“. „Ansehen“ zeigt das Dokument, „Drucken“ druckt es erneut.",
            "Storno oder Retoure aus dem Belegdetail starten (Recht „Storno / Retoure“).",
            "Am Ende des Tages den Tagesabschluss erstellen."
          ],
          "tipp": "Jede Kasse hat ein eigenes Journal. Ein Tipp auf den Tabellenkopf sortiert die Spalte."
        },
        "stammdaten": {
          "titel": "Kunden, Artikel und Bestand",
          "intro": "Stammdaten pflegen, damit Kasse und Belege stimmen.",
          "schritte": [
            "Kunden: anlegen, nach Typ filtern, Rabatt und Zahlungsbedingung hinterlegen. Käufe und Boote stehen in der Kundenakte.",
            "Artikelverwaltung: Artikel, Hersteller, Preise, Steuersätze und Varianten pflegen.",
            "Bestand: nach Lagerort suchen, Zu- und Abgänge buchen.",
            "Lieferanten: Konditionen, offene Bestellungen und Ansprechpartner einsehen.",
            "Verkaufte Boote: Bootsakte mit Seriennummer, Garantie und Servicehistorie."
          ],
          "tipp": "Auf dem Handy erscheinen Tabellen als Karten, damit nichts abgeschnitten wird."
        },
        "kalender": {
          "titel": "Kalender",
          "intro": "Termine für Abholung, Lieferung, Werkstatt, Regatta und Messe.",
          "schritte": [
            "Einen Monat wählen und einen Tag antippen, um seine Termine zu sehen. Nach Terminart filtern, die Legende erklärt die Farben.",
            "Mit „Bearbeiten“ einen Termin ändern oder löschen, mit „+ Termin an diesem Tag“ einen neuen anlegen. Auslaufende Angebote ändern Sie im Angebot.",
            "Sonntage und Feiertage sind grau und tragen „Laden geschlossen“. Dort sind nur Regatten möglich, alle anderen Termine liegen auf Werktagen.",
            "Regatten kommen mit ihren echten Daten aus Kai Kalender und werden nie verschoben. Regatta- und Messetermine gehören zur mobilen Kasse, alle anderen zum Verkaufsraum."
          ],
          "tipp": "Den Kalender der mobilen Kasse sehen Sie, wenn Sie in der Fußleiste die Kasse wechseln."
        },
        "berichte": {
          "titel": "Berichte und Umsatz-Dashboard",
          "intro": "Umsätze auswerten und Entwicklungen erkennen.",
          "schritte": [
            "Berichte: Zeitraum Heute, Woche, Monat oder Jahr wählen, alle Kassen oder eine einzelne auswerten. „Bericht als PDF“ speichert die Auswertung.",
            "Kennzahlen, Zahlarten, Kundenarten, Umsatz je Kasse, Top-Artikel und Warengruppen ansehen.",
            "Umsatz-Dashboard: nach Zeitraum, Verkaufsort, Kategorie und Hersteller filtern.",
            "Monatsverlauf, Hersteller, Paddel vs. Rennboote, Produkt-Trends und Top-Produkte vergleichen."
          ],
          "tipp": "Die Auswertungen beruhen auf Beispieldaten und ersetzen nicht den steuerlichen Kassenbericht."
        },
        "einstellungen": {
          "titel": "Einstellungen und Rechte",
          "intro": "Geräte, Benutzer und Shop-Daten verwalten. Die Bedienungsanleitung sehen alle Benutzer, alle anderen Bereiche nur mit Recht.",
          "schritte": [
            "Drucker, Barcode-Scanner, Kartenzahlung, TSE, ERP-Anbindung sowie Webshops & API einrichten. Verbindungen sind im Prototyp simuliert.",
            "Benutzer & Rollen: Benutzer anlegen, Kassen zuordnen, PINs vergeben und Rechte in der Matrix setzen. Dazu Schichtplan und Kommen/Gehen je Benutzer.",
            "Rollen: Admin, Filialleitung, Teamleitung, Verkauf, Aushilfe, Einkauf. Teamleitung hat die Rechte von Verkauf und darf zusätzlich Aufgaben delegieren sowie Berichte, Umsatz-Dashboard und Systemprotokoll einsehen.",
            "Shop: Firmendaten, Logo, Akzentfarbe, Öffnungszeiten, Nummernkreise und Texte für alle Belege. Dokumentvorlagen: Belege, Rechnungen und Etiketten prüfen.",
            "Admin (nur root): Systemsprache und Sprache je Benutzer, Systemprotokoll, Datenbank & Backup."
          ],
          "tipp": "Auf dem Handy lassen sich die Reiter der Einstellungen seitlich wischen."
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
        "Bestellbeleg personalisiert drucken": "Print personalised order slip"
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
          "intro": "The dashboard shows what needs doing today: overdue tasks, today’s appointments, open tasks and the rest of the week.",
          "schritte": [
            "Tap the tiles at the top to filter: Overdue, Appointments today, Open tasks today, Appointments until Sunday.",
            "Tick off completed tasks in the box. “Tomorrow” moves a task to the next working day – on Saturdays the button therefore reads “Monday”.",
            "“All to today” moves all overdue tasks to today.",
            "Enter your own tasks at the bottom, choose a day and tap “Add”. Only working days can be chosen.",
            "With the permission “Delegate tasks”, use “Assign to …” to give a task to a colleague. They see it marked “Delegated by …” and can tick it off but not delete it.",
            "Appointments whose time has passed are marked red. Quote tasks open the quote directly."
          ],
          "tipp": "Sundays and public holidays (Lower Saxony) are closing days: appointments and tasks are on the next working day. On a closing day the dashboard shows “closed” and the week until next Sunday."
        },
        "kasse": {
          "titel": "Selling at the register",
          "intro": "Find products, choose a variant, add to the cart.",
          "schritte": [
            "Choose a category at the top (e.g. boats, paddles) or search by name or manufacturer. A scanned barcode finds the product instantly.",
            "Tap a product and choose the variant, e.g. length, blade, size, colour or serial number.",
            "Change quantities or remove items in the cart. On tablet and phone, the cart button in the footer opens the cart – from any page.",
            "Assign a customer: type a name or number or tap “Open customer list”. A stored customer discount is deducted automatically.",
            "If someone wants to buy without customer data, choose “Cash customer (no customer data)” – without customer discount.",
            "Below the total there are three buttons: “Pay” (see Payment), “Order slip” (for ordered or personalised goods) and “Save as quote”.",
            "“Checkout” in the footer takes you back to the register from any page and closes open windows."
          ],
          "tipp": "Each register has its own cart. Switching registers does not delete it."
        },
        "bezahlen": {
          "titel": "Payment and receipt",
          "intro": "Choose a payment method, pay, issue receipt and invoice. The documents are then attached to the transaction.",
          "schritte": [
            "In the cart, tap “Pay”. “Choose payment method” appears below with Card, Cash and Invoice. “Back” closes the selection.",
            "Card: the customer pays at the terminal. Cash: enter the amount given or choose a quick amount; the change appears instantly. Invoice: for invoice customers such as clubs and companies; if the purchase includes paddles, their paddle IDs are assigned and shown.",
            "If the purchase includes a boat, the dialog shows its serial number and “Print QR labels” – with any payment method.",
            "In the dialog, tap “Pay”. The receipt output appears.",
            "Card and cash: the receipt is always printed. Optionally also choose “Print invoice” or “Send invoice by email”; the customer’s email address is filled in.",
            "Payment by invoice: there is no receipt. The invoice is required – choose “Print invoice” or “Send invoice by email”.",
            "Tap “Complete”. Receipt and invoice go straight to the printer, without a preview. A notice confirms the sale; “Open” shows the transaction under Transactions.",
            "“Order slip” also prints an order slip. “Back” returns to the cart or the payment without completing."
          ],
          "tipp": "Every receipt carries a QR code customers can use to view it online. TSE, card payment, printer and email sending are simulated in the prototype."
        },
        "bestellbeleg": {
          "titel": "Order slip",
          "intro": "Goods that are ordered or personalised get their own slip – separate from the receipt. Customer and payment are set when the slip is created.",
          "schritte": [
            "In the cart, tap “Order slip”.",
            "Under “Items”, expand each item and enter the personalisation if needed, e.g. boat name, seat to customer size or paddle length.",
            "Under “Customer, handover & payment”, search for the customer (name, number or phone) and tap it – name, phone and e-mail are filled in. For a new customer, enter the details and tap “Save as new customer”.",
            "Enter the handover (pick-up, delivery or shipping), date and a deposit.",
            "Under “Payment”, choose: Not yet paid, Paid · card, Paid · cash or Invoice with a payment term in days. Invoice is preselected for clubs and companies.",
            "Check the preview and tap “Print / PDF”. The order slip is filed automatically under “Order slips”."
          ],
          "tipp": "The order slip is not a receipt. With their signature the customer confirms the personalisation."
        },
        "bestellbelege": {
          "titel": "Managing order slips",
          "intro": "All printed order slips in one place – with payment and status until handover.",
          "schritte": [
            "Open “Order slips” in the navigation. At the top you see Ordered, Ready for pickup, Handed over and “Still to collect”.",
            "Search by number, customer, phone or item, or filter by status.",
            "Tap a row: items with personalisation, note and payment appear. Set the status to Ordered, Ready for pickup or Handed over.",
            "Handing over is only possible if the order is paid or on invoice. If it is still open, choose “Paid by card”, “Paid in cash” or “On invoice (14 days)”.",
            "“Print again” prints the slip exactly as it was filed."
          ],
          "tipp": "In the prototype “Paid by card” only sets the status; no receipt is created."
        },
        "etiketten": {
          "titel": "Paddle IDs and QR labels",
          "intro": "Boats are identified by their serial number, paddles by their own ID.",
          "schritte": [
            "The paddle ID is created when closing with an invoice, from date and number (e.g. ZKP-261011-416-01), and appears on the invoice.",
            "If a closing, an invoice or an accepted quote contains a paddle, “Print QR labels” appears.",
            "When a boat is sold, the payment dialog shows its serial number with “Print QR labels”. If the boat in the cart has no serial number yet, the next free one is used.",
            "Print the labels on the QR label printer and attach them to the shaft or the boat. Reprints are always possible from the boat file under “Boats sold”."
          ],
          "tipp": "Every print is logged, including reprints."
        },
        "angebote": {
          "titel": "Quotes",
          "intro": "Create and send quotes and, once accepted, load them into checkout – also straight from the cart.",
          "schritte": [
            "Under “Quotes”, create a new quote, choose the customer and add items with discount. Check the PDF preview and send.",
            "Keep the status up to date: Draft, Sent, Accepted, Declined, Expired. Ring up accepted quotes with “Move to checkout”.",
            "From the cart: “Save as quote” stores the contents as a quote (draft). The cart is emptied and you stay at the register. Without a customer, the quote is saved for a cash customer.",
            "Later, open “Quotes from checkout” at the register and tap “Load into cart” for the quote you want."
          ],
          "tipp": "Validity comes from the shop settings. Expiring quotes appear in the calendar and on the dashboard."
        },
        "transaktionen": {
          "titel": "Transactions and end of day",
          "intro": "Look up all sales, view and reprint documents, close the day.",
          "schritte": [
            "Choose a period: Today, Yesterday, Last 7 days, This month, Last month, Quarter or Custom. Filter by payment method or status.",
            "Open a row to see the items, TSE data and the digital receipt.",
            "“Attached documents” lists the receipt and invoice of the transaction, marked “printed” or “by email to …”. “View” shows the document, “Print” prints it again.",
            "Start a void or return from the receipt detail (permission “Void / return”).",
            "At the end of the day, create the end-of-day report."
          ],
          "tipp": "Each register has its own journal. Tapping a column header sorts the column."
        },
        "stammdaten": {
          "titel": "Customers, products and stock",
          "intro": "Keep master data up to date so the register and receipts are correct.",
          "schritte": [
            "Customers: create, filter by type, store discount and payment terms. Purchases and boats are in the customer file.",
            "Product management: maintain products, manufacturers, prices, tax rates and variants.",
            "Inventory: search by storage location, book receipts and issues.",
            "Suppliers: view terms, open purchase orders and contacts.",
            "Boats sold: boat file with serial number, warranty and service history."
          ],
          "tipp": "On the phone, tables appear as cards so nothing is cut off."
        },
        "kalender": {
          "titel": "Calendar",
          "intro": "Appointments for pick-up, delivery, workshop, regatta and trade fair.",
          "schritte": [
            "Choose a month and tap a day to see its appointments. Filter by type; the legend explains the colours.",
            "Use “Edit” to change or delete an appointment, “+ Appointment on this day” to create one. Expiring quotes are changed in the quote.",
            "Sundays and public holidays are grey and marked “Store closed”. Only regattas are possible there; all other appointments are on working days.",
            "Regattas come with their real dates from Kai Kalender and are never moved. Regatta and trade fair appointments belong to the mobile register, all others to the Verkaufsraum."
          ],
          "tipp": "To see the mobile register’s calendar, switch the register in the footer."
        },
        "berichte": {
          "titel": "Reports and sales dashboard",
          "intro": "Analyse sales and spot trends.",
          "schritte": [
            "Reports: choose Today, Week, Month or Year, and analyse all registers or a single one. “Report as PDF” saves the analysis.",
            "View key figures, payment methods, customer types, sales per register, top products and product groups.",
            "Sales dashboard: filter by period, point of sale, category and manufacturer.",
            "Compare monthly trend, manufacturers, paddles vs. racing boats, product trends and top products."
          ],
          "tipp": "The analyses are based on sample data and do not replace the fiscal register report."
        },
        "einstellungen": {
          "titel": "Settings and permissions",
          "intro": "Manage devices, users and shop data. All users see the user manual; all other areas require a permission.",
          "schritte": [
            "Set up printers, barcode scanners, card payment, TSE, ERP connection and online shops & API. Connections are simulated in the prototype.",
            "Users & roles: create users, assign registers, set PINs and permissions in the matrix. Plus shift plan and clock-in/out per user.",
            "Roles: Admin, Store manager, Team lead, Sales, Temporary staff, Purchasing. Team lead has the Sales permissions and may also delegate tasks and view reports, sales dashboard and system log.",
            "Shop: company data, logo, accent colour, opening hours, number ranges and texts for all receipts. Document templates: check receipts, invoices and labels.",
            "Admin (root only): system language and language per user, system log, database & backup."
          ],
          "tipp": "On the phone, you can swipe through the settings tabs sideways."
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
        "Bestellbeleg personalisiert drucken": "Imprimer un bon de commande personnalisé"
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
          "intro": "Le tableau de bord montre ce qu’il faut faire aujourd’hui : tâches en retard, rendez-vous du jour, tâches ouvertes et reste de la semaine.",
          "schritte": [
            "Touchez les vignettes en haut pour filtrer : En retard, Rendez-vous aujourd’hui, Tâches ouvertes aujourd’hui, Rendez-vous jusqu’à dimanche.",
            "Cochez les tâches terminées dans la case. « Demain » reporte une tâche au prochain jour ouvré – le samedi, le bouton s’appelle donc « Lundi ».",
            "« Tout à aujourd’hui » ramène toutes les tâches en retard à aujourd’hui.",
            "Saisissez vos propres tâches en bas, choisissez un jour et touchez « Ajouter ». Seuls les jours ouvrés sont proposés.",
            "Avec le droit « Déléguer des tâches », utilisez « Attribuer à … » pour confier une tâche à un collègue. Il la voit marquée « Délégué par … » et peut la cocher, mais pas la supprimer.",
            "Les rendez-vous dont l’heure est passée sont en rouge. Les tâches de devis ouvrent directement le devis."
          ],
          "tipp": "Les dimanches et jours fériés (Basse-Saxe) sont des jours de fermeture : rendez-vous et tâches passent au prochain jour ouvré. Ces jours-là, le tableau de bord affiche « fermé » et la semaine jusqu’au dimanche suivant."
        },
        "kasse": {
          "titel": "Vendre en caisse",
          "intro": "Rechercher un article, choisir la variante, l’ajouter au panier.",
          "schritte": [
            "Choisissez une rubrique en haut (p. ex. bateaux, pagaies) ou recherchez par nom ou fabricant. Un code-barres scanné trouve l’article immédiatement.",
            "Touchez l’article et choisissez la variante, p. ex. longueur, pale, taille, couleur ou numéro de série.",
            "Modifiez les quantités ou retirez des lignes dans le panier. Sur tablette et téléphone, le bouton panier de la barre du bas l’ouvre – depuis n’importe quelle page.",
            "Associer un client : saisissez nom ou numéro ou touchez « Ouvrir la liste des clients ». Une remise client enregistrée est déduite automatiquement.",
            "Si quelqu’un achète sans données client, choisissez « Client comptant (sans données client) » – sans remise client.",
            "Sous le total figurent trois boutons : « Payer » (voir Paiement), « Bon de commande » (marchandise commandée ou personnalisée) et « Enregistrer comme devis ».",
            "« Caisse » dans la barre du bas vous ramène à la caisse depuis n’importe quelle page et ferme les fenêtres ouvertes."
          ],
          "tipp": "Chaque caisse a son propre panier. Changer de caisse ne le supprime pas."
        },
        "bezahlen": {
          "titel": "Paiement et ticket",
          "intro": "Choisir le mode de paiement, payer, émettre ticket et facture. Les justificatifs sont ensuite joints à l’opération.",
          "schritte": [
            "Dans le panier, touchez « Payer ». « Choisir le mode de paiement » apparaît en dessous avec Carte, Espèces et Facture. « Retour » referme le choix.",
            "Carte : le client paie au terminal. Espèces : saisissez le montant remis ou choisissez un montant rapide ; la monnaie à rendre s’affiche aussitôt. Facture : pour les clients sur facture comme les clubs et les entreprises ; si l’achat contient des pagaies, leurs ID sont attribués et affichés.",
            "Si l’achat contient un bateau, la fenêtre affiche son numéro de série et « Imprimer les étiquettes QR », quel que soit le mode de paiement.",
            "Dans la fenêtre, touchez « Payer ». La sortie des justificatifs apparaît.",
            "Carte et espèces : le ticket est toujours imprimé. En option, choisissez aussi « Imprimer la facture » ou « Envoyer la facture par e-mail » ; l’adresse e-mail du client est reprise.",
            "Paiement sur facture : il n’y a pas de ticket. La facture est obligatoire – choisissez « Imprimer la facture » ou « Envoyer la facture par e-mail ».",
            "Touchez « Terminer ». Ticket et facture partent directement à l’imprimante, sans aperçu. Un message confirme la vente ; « Ouvrir » affiche l’opération dans Transactions.",
            "« Bon de commande » imprime en plus un bon de commande. « Retour » revient au panier ou au paiement sans terminer."
          ],
          "tipp": "Chaque ticket porte un code QR permettant au client de le consulter en ligne. TSE, paiement par carte, imprimante et envoi d’e-mail sont simulés dans le prototype."
        },
        "bestellbeleg": {
          "titel": "Bon de commande",
          "intro": "Les articles commandés ou personnalisés ont leur propre bon – séparé du ticket de caisse. Client et paiement sont fixés dès la création.",
          "schritte": [
            "Dans le panier, touchez « Bon de commande ».",
            "Sous « Positions », dépliez chaque ligne et saisissez si besoin la personnalisation, p. ex. nom du bateau, siège sur mesure ou longueur de pagaie.",
            "Sous « Client, remise et paiement », recherchez le client (nom, numéro ou téléphone) et touchez-le – nom, téléphone et e-mail sont repris. Pour un nouveau client, saisissez les données et touchez « Enregistrer comme nouveau client ».",
            "Saisissez le mode de remise (retrait, livraison ou expédition), la date et un acompte.",
            "Sous « Paiement », choisissez : Pas encore payé, Payé · carte, Payé · espèces ou Facture avec délai de paiement en jours. La facture est présélectionnée pour les clubs et entreprises.",
            "Vérifiez l’aperçu et touchez « Imprimer / PDF ». Le bon est automatiquement classé sous « Bons de commande »."
          ],
          "tipp": "Le bon de commande n’est pas un ticket de caisse. Par sa signature, le client confirme la personnalisation."
        },
        "bestellbelege": {
          "titel": "Gérer les bons de commande",
          "intro": "Tous les bons de commande imprimés au même endroit – avec paiement et statut jusqu’à la remise.",
          "schritte": [
            "Ouvrez « Bons de commande » dans la navigation. En haut figurent Commandé, Prêt à retirer, Remis et « Reste à encaisser ».",
            "Recherchez par numéro, client, téléphone ou article, ou filtrez par statut.",
            "Touchez une ligne : positions avec personnalisation, remarque et paiement s’affichent. Réglez le statut sur Commandé, Prêt à retirer ou Remis.",
            "La remise n’est possible que si la commande est payée ou sur facture. Si elle est encore ouverte, choisissez « Payé par carte », « Payé en espèces » ou « Sur facture (14 jours) ».",
            "« Réimprimer » imprime le bon tel qu’il a été classé."
          ],
          "tipp": "Dans le prototype, « Payé par carte » ne change que le statut ; aucun ticket n’est créé."
        },
        "etiketten": {
          "titel": "ID de pagaie et étiquettes QR",
          "intro": "Les bateaux sont identifiés par leur numéro de série, les pagaies par un ID propre.",
          "schritte": [
            "L’ID de pagaie est créé à la clôture avec facture, à partir de la date et du numéro (p. ex. ZKP-261011-416-01), et figure sur la facture.",
            "Si une clôture, une facture ou un devis accepté contient une pagaie, « Imprimer des étiquettes QR » apparaît.",
            "Lorsqu’un bateau est vendu, la fenêtre de paiement affiche son numéro de série avec « Imprimer des étiquettes QR ». Si le bateau du panier n’a pas encore de numéro de série, le prochain disponible est utilisé.",
            "Imprimez les étiquettes sur l’imprimante QR et collez-les sur le manche ou le bateau. Une réimpression reste possible depuis la fiche bateau sous « Bateaux vendus »."
          ],
          "tipp": "Chaque impression est journalisée, réimpressions comprises."
        },
        "angebote": {
          "titel": "Devis",
          "intro": "Créer et envoyer des devis, puis les reprendre en caisse une fois acceptés – aussi directement depuis le panier.",
          "schritte": [
            "Sous « Devis », créez un devis, choisissez le client et ajoutez des lignes avec remise. Vérifiez l’aperçu PDF et envoyez.",
            "Tenez le statut à jour : Brouillon, Envoyé, Accepté, Refusé, Expiré. Encaissez les devis acceptés avec « Transférer en caisse ».",
            "Depuis le panier : « Enregistrer comme devis » enregistre le contenu comme devis (brouillon). Le panier est vidé et vous restez en caisse. Sans client, le devis est enregistré pour un client comptant.",
            "Plus tard, ouvrez « Devis de la caisse » en caisse et touchez « Charger dans le panier » pour le devis souhaité."
          ],
          "tipp": "La validité découle des réglages de la boutique. Les devis arrivant à échéance figurent dans le calendrier et sur le tableau de bord."
        },
        "transaktionen": {
          "titel": "Transactions et clôture journalière",
          "intro": "Consulter toutes les ventes, voir et réimprimer les justificatifs, clôturer la journée.",
          "schritte": [
            "Choisissez une période : Aujourd’hui, Hier, 7 derniers jours, Ce mois-ci, Mois précédent, Trimestre ou Personnalisé. Filtrez par mode de paiement ou statut.",
            "Ouvrez une ligne pour voir les positions, les données TSE et le ticket numérique.",
            "« Documents joints » contient le ticket et la facture de l’opération, avec la mention « imprimé » ou « par e-mail à … ». « Voir » affiche le document, « Imprimer » le réimprime.",
            "Lancez une annulation ou un retour depuis le détail du ticket (droit « Annulation / retour »).",
            "En fin de journée, effectuez la clôture journalière."
          ],
          "tipp": "Chaque caisse a son propre journal. Toucher l’en-tête d’une colonne la trie."
        },
        "stammdaten": {
          "titel": "Clients, articles et stock",
          "intro": "Tenir les données de base à jour pour que caisse et tickets soient justes.",
          "schritte": [
            "Clients : créer, filtrer par type, enregistrer remise et conditions de paiement. Achats et bateaux figurent dans la fiche client.",
            "Gestion des articles : articles, fabricants, prix, taux de TVA et variantes.",
            "Stock : rechercher par emplacement, enregistrer entrées et sorties.",
            "Fournisseurs : conditions, commandes ouvertes et interlocuteurs.",
            "Bateaux vendus : fiche bateau avec numéro de série, garantie et historique de service."
          ],
          "tipp": "Sur téléphone, les tableaux s’affichent en cartes pour que rien ne soit coupé."
        },
        "kalender": {
          "titel": "Calendrier",
          "intro": "Rendez-vous de retrait, livraison, atelier, régate et salon.",
          "schritte": [
            "Choisissez un mois et touchez un jour pour voir ses rendez-vous. Filtrez par type ; la légende explique les couleurs.",
            "« Modifier » change ou supprime un rendez-vous, « + Rendez-vous ce jour » en crée un. Les devis arrivant à échéance se modifient dans le devis.",
            "Les dimanches et jours fériés sont grisés et marqués « Magasin fermé ». Seules les régates y sont possibles ; tous les autres rendez-vous sont des jours ouvrés.",
            "Les régates viennent avec leurs vraies dates de Kai Kalender et ne sont jamais déplacées. Régates et salons appartiennent à la caisse mobile, tout le reste au Verkaufsraum."
          ],
          "tipp": "Pour voir le calendrier de la caisse mobile, changez de caisse dans la barre du bas."
        },
        "berichte": {
          "titel": "Rapports et tableau des ventes",
          "intro": "Analyser les ventes et repérer les tendances.",
          "schritte": [
            "Rapports : choisissez Aujourd’hui, Semaine, Mois ou Année, toutes les caisses ou une seule. « Rapport en PDF » enregistre l’analyse.",
            "Consultez indicateurs, moyens de paiement, types de clients, ventes par caisse, meilleurs articles et familles de produits.",
            "Tableau des ventes : filtrer par période, lieu de vente, catégorie et fabricant.",
            "Comparez évolution mensuelle, fabricants, pagaies vs bateaux de course, tendances et meilleurs produits."
          ],
          "tipp": "Les analyses reposent sur des données d’exemple et ne remplacent pas le rapport de caisse fiscal."
        },
        "einstellungen": {
          "titel": "Paramètres et droits",
          "intro": "Gérer appareils, utilisateurs et données de la boutique. Tous voient le mode d’emploi ; les autres rubriques nécessitent un droit.",
          "schritte": [
            "Configurer imprimantes, lecteurs de codes-barres, paiement par carte, TSE, connexion ERP ainsi que boutiques en ligne et API. Les connexions sont simulées dans le prototype.",
            "Utilisateurs et rôles : créer des utilisateurs, attribuer des caisses, définir PIN et droits dans la matrice. Avec planning des équipes et pointage par utilisateur.",
            "Rôles : Admin, Responsable de magasin, Chef d’équipe, Vente, Auxiliaire, Achats. Le chef d’équipe a les droits de Vente et peut en plus déléguer des tâches et consulter rapports, tableau des ventes et journal système.",
            "Boutique : données de l’entreprise, logo, couleur d’accent, horaires, numérotation et textes de tous les tickets. Modèles de documents : vérifier tickets, factures et étiquettes.",
            "Admin (root uniquement) : langue du système et langue par utilisateur, journal système, base de données et sauvegarde."
          ],
          "tipp": "Sur téléphone, les onglets des paramètres défilent latéralement."
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
        "Bestellbeleg personalisiert drucken": "Imprimir hoja de pedido personalizada"
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
          "intro": "El panel muestra lo que hay que hacer hoy: tareas vencidas, citas de hoy, tareas pendientes y el resto de la semana.",
          "schritte": [
            "Toque los mosaicos de arriba para filtrar: Vencido, Citas de hoy, Tareas pendientes hoy, Citas hasta el domingo.",
            "Marque las tareas hechas en la casilla. «Mañana» pasa una tarea al siguiente día laborable; por eso el sábado el botón dice «Lunes».",
            "«Todo a hoy» trae todas las tareas vencidas al día de hoy.",
            "Escriba sus propias tareas abajo, elija un día y toque «Añadir». Solo se pueden elegir días laborables.",
            "Con el permiso «Delegar tareas», use «Asignar a …» para pasar una tarea a un compañero. La verá como «Delegado por …» y podrá marcarla, pero no eliminarla.",
            "Las citas cuya hora ya pasó aparecen en rojo. Las tareas de presupuestos abren directamente el presupuesto."
          ],
          "tipp": "Los domingos y festivos (Baja Sajonia) son días de cierre: citas y tareas pasan al siguiente día laborable. Ese día el panel muestra «cerrado» y la semana hasta el domingo siguiente."
        },
        "kasse": {
          "titel": "Vender en caja",
          "intro": "Buscar artículos, elegir la variante, añadir al carrito.",
          "schritte": [
            "Elija una categoría arriba (p. ej. barcos, palas) o busque por nombre o fabricante. Un código de barras escaneado encuentra el artículo al instante.",
            "Toque el artículo y elija la variante, p. ej. longitud, pala, talla, color o número de serie.",
            "Cambie cantidades o quite líneas en el carrito. En tableta y teléfono, el botón del carrito en la barra inferior lo abre desde cualquier página.",
            "Asignar cliente: escriba nombre o número o toque «Abrir lista de clientes». Un descuento de cliente guardado se aplica automáticamente.",
            "Si alguien compra sin datos de cliente, elija «Cliente de contado (sin datos)», sin descuento de cliente.",
            "Debajo del total hay tres botones: «Pagar» (ver Pago), «Hoja de pedido» (mercancía pedida o personalizada) y «Guardar como presupuesto».",
            "«Caja» en la barra inferior le lleva de vuelta a la caja desde cualquier página y cierra las ventanas abiertas."
          ],
          "tipp": "Cada caja tiene su propio carrito. Cambiar de caja no lo borra."
        },
        "bezahlen": {
          "titel": "Pago y ticket",
          "intro": "Elegir forma de pago, pagar, emitir ticket y factura. Después, los comprobantes quedan adjuntos a la operación.",
          "schritte": [
            "En el carrito, toque «Pagar». Aparece «Elegir forma de pago» con Tarjeta, Efectivo y Factura. «Atrás» cierra la selección.",
            "Tarjeta: el cliente paga en el terminal. Efectivo: introduzca el importe entregado o elija un importe rápido; el cambio aparece al momento. Factura: para clientes con factura como clubes y empresas; si incluye palas, se asignan y muestran sus ID.",
            "Si la compra incluye un barco, el diálogo muestra su número de serie y «Imprimir etiquetas QR», con cualquier forma de pago.",
            "En el diálogo, toque «Pagar». Aparece la emisión de comprobantes.",
            "Tarjeta y efectivo: el ticket se imprime siempre. Opcionalmente elija además «Imprimir factura» o «Enviar factura por e-mail»; se toma el e-mail del cliente.",
            "Pago por factura: no hay ticket. La factura es obligatoria: elija «Imprimir factura» o «Enviar factura por e-mail».",
            "Toque «Finalizar». Ticket y factura van directamente a la impresora, sin vista previa. Un aviso confirma la venta; «Abrir» muestra la operación en Transacciones.",
            "«Hoja de pedido» imprime además una hoja de pedido. «Atrás» vuelve al carrito o al pago sin cerrar."
          ],
          "tipp": "Cada ticket lleva un código QR con el que el cliente lo consulta en línea. TSE, pago con tarjeta, impresora y envío de e-mail están simulados en el prototipo."
        },
        "bestellbeleg": {
          "titel": "Hoja de pedido",
          "intro": "La mercancía pedida o personalizada tiene su propia hoja, separada del ticket de caja. Cliente y pago se fijan al crearla.",
          "schritte": [
            "En el carrito, toque «Hoja de pedido».",
            "En «Posiciones», despliegue cada línea e indique la personalización si hace falta, p. ej. nombre del barco, asiento a medida o longitud de pala.",
            "En «Cliente, entrega y pago», busque el cliente (nombre, número o teléfono) y tóquelo: se copian nombre, teléfono y e-mail. Para un cliente nuevo, introduzca los datos y toque «Guardar como cliente nuevo».",
            "Indique la entrega (recogida, entrega o envío), la fecha y un anticipo.",
            "En «Pago», elija: Pendiente de pago, Pagado · tarjeta, Pagado · efectivo o Factura con plazo de pago en días. Para clubes y empresas la factura viene preseleccionada.",
            "Revise la vista previa y toque «Imprimir / PDF». La hoja se archiva automáticamente en «Hojas de pedido»."
          ],
          "tipp": "La hoja de pedido no es un ticket de caja. Con su firma, el cliente confirma la personalización."
        },
        "bestellbelege": {
          "titel": "Gestionar hojas de pedido",
          "intro": "Todas las hojas de pedido impresas en un solo lugar, con pago y estado hasta la entrega.",
          "schritte": [
            "Abra «Hojas de pedido» en la navegación. Arriba aparecen Pedido, Listo para recoger, Entregado y «Pendiente de cobro».",
            "Busque por número, cliente, teléfono o artículo, o filtre por estado.",
            "Toque una fila: aparecen las posiciones con personalización, la nota y el pago. Ponga el estado en Pedido, Listo para recoger o Entregado.",
            "Solo se puede entregar si el pedido está pagado o va con factura. Si sigue pendiente, elija «Pagado con tarjeta», «Pagado en efectivo» o «Con factura (14 días)».",
            "«Volver a imprimir» imprime la hoja tal como se archivó."
          ],
          "tipp": "En el prototipo, «Pagado con tarjeta» solo cambia el estado; no se genera ningún ticket."
        },
        "etiketten": {
          "titel": "ID de palas y etiquetas QR",
          "intro": "Los barcos se identifican por su número de serie, las palas por un ID propio.",
          "schritte": [
            "El ID de pala se crea al cerrar con factura, a partir de la fecha y el número (p. ej. ZKP-261011-416-01), y aparece en la factura.",
            "Si un cierre, una factura o un presupuesto aceptado contiene una pala, aparece «Imprimir etiquetas QR».",
            "Al vender un barco, el diálogo de pago muestra su número de serie con «Imprimir etiquetas QR». Si el barco del carrito aún no tiene número de serie, se usa el siguiente libre.",
            "Imprima las etiquetas en la impresora QR y péguelas en la caña o en el barco. Siempre puede reimprimir desde la ficha del barco en «Barcos vendidos»."
          ],
          "tipp": "Cada impresión queda registrada, también las reimpresiones."
        },
        "angebote": {
          "titel": "Presupuestos",
          "intro": "Crear y enviar presupuestos y, si se aceptan, pasarlos a caja, también directamente desde el carrito.",
          "schritte": [
            "En «Presupuestos», cree un presupuesto, elija el cliente y añada líneas con descuento. Revise la vista PDF y envíelo.",
            "Mantenga el estado: Borrador, Enviado, Aceptado, Rechazado, Vencido. Cobre los aceptados con «Pasar a caja».",
            "Desde el carrito: «Guardar como presupuesto» guarda el contenido como presupuesto (borrador). El carrito se vacía y usted sigue en caja. Sin cliente, se guarda para un cliente de contado.",
            "Más tarde, abra «Presupuestos de caja» en la caja y toque «Cargar en el carrito» en el presupuesto deseado."
          ],
          "tipp": "La validez se toma de los ajustes de la tienda. Los presupuestos que vencen aparecen en el calendario y en el panel."
        },
        "transaktionen": {
          "titel": "Transacciones y cierre diario",
          "intro": "Consultar todas las ventas, ver y reimprimir comprobantes, cerrar el día.",
          "schritte": [
            "Elija un periodo: Hoy, Ayer, Últimos 7 días, Este mes, Mes anterior, Trimestre o Personalizado. Filtre por forma de pago o estado.",
            "Abra una fila para ver las posiciones, los datos TSE y el ticket digital.",
            "En «Documentos adjuntos» están el ticket y la factura de la operación, con la nota «impreso» o «por e-mail a …». «Ver» muestra el documento, «Imprimir» lo vuelve a imprimir.",
            "Inicie una anulación o devolución desde el detalle del ticket (permiso «Anulación / devolución»).",
            "Al final del día, haga el cierre diario."
          ],
          "tipp": "Cada caja tiene su propio diario. Tocar la cabecera de una columna la ordena."
        },
        "stammdaten": {
          "titel": "Clientes, artículos y existencias",
          "intro": "Mantener los datos maestros para que caja y tickets sean correctos.",
          "schritte": [
            "Clientes: crear, filtrar por tipo, guardar descuento y condiciones de pago. Compras y barcos figuran en la ficha del cliente.",
            "Gestión de artículos: artículos, fabricantes, precios, tipos de IVA y variantes.",
            "Existencias: buscar por ubicación, registrar entradas y salidas.",
            "Proveedores: condiciones, pedidos abiertos y personas de contacto.",
            "Barcos vendidos: ficha del barco con número de serie, garantía e historial de servicio."
          ],
          "tipp": "En el teléfono, las tablas aparecen como tarjetas para que nada quede cortado."
        },
        "kalender": {
          "titel": "Calendario",
          "intro": "Citas de recogida, entrega, taller, regata y feria.",
          "schritte": [
            "Elija un mes y toque un día para ver sus citas. Filtre por tipo; la leyenda explica los colores.",
            "«Editar» cambia o elimina una cita, «+ Cita en este día» crea una nueva. Los presupuestos que vencen se cambian en el presupuesto.",
            "Los domingos y festivos aparecen en gris con «Tienda cerrada». Allí solo caben regatas; las demás citas están en días laborables.",
            "Las regatas llegan con sus fechas reales desde Kai Kalender y nunca se mueven. Regatas y ferias pertenecen a la caja móvil, el resto al Verkaufsraum."
          ],
          "tipp": "Para ver el calendario de la caja móvil, cambie de caja en la barra inferior."
        },
        "berichte": {
          "titel": "Informes y panel de ventas",
          "intro": "Analizar ventas y detectar tendencias.",
          "schritte": [
            "Informes: elija Hoy, Semana, Mes o Año, todas las cajas o una sola. «Informe en PDF» guarda el análisis.",
            "Vea indicadores, formas de pago, tipos de cliente, ventas por caja, artículos más vendidos y grupos de productos.",
            "Panel de ventas: filtrar por periodo, punto de venta, categoría y fabricante.",
            "Compare evolución mensual, fabricantes, palas vs. barcos de competición, tendencias y productos más vendidos."
          ],
          "tipp": "Los análisis se basan en datos de ejemplo y no sustituyen el informe fiscal de caja."
        },
        "einstellungen": {
          "titel": "Ajustes y permisos",
          "intro": "Gestionar dispositivos, usuarios y datos de la tienda. Todos ven el manual; las demás secciones requieren permiso.",
          "schritte": [
            "Configurar impresoras, escáneres, pago con tarjeta, TSE, conexión ERP y tiendas online y API. Las conexiones están simuladas en el prototipo.",
            "Usuarios y roles: crear usuarios, asignar cajas, definir PIN y permisos en la matriz. Además, plan de turnos y fichaje por usuario.",
            "Roles: Admin, Encargado de tienda, Jefe de equipo, Ventas, Auxiliar, Compras. El jefe de equipo tiene los permisos de Ventas y además puede delegar tareas y ver informes, panel de ventas y registro del sistema.",
            "Tienda: datos de la empresa, logotipo, color de acento, horarios, numeración y textos de todos los tickets. Plantillas de documentos: revisar tickets, facturas y etiquetas.",
            "Admin (solo root): idioma del sistema e idioma por usuario, registro del sistema, base de datos y copia."
          ],
          "tipp": "En el teléfono, las pestañas de los ajustes se desplazan hacia los lados."
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
        "Bestellbeleg personalisiert drucken": "Imprimir nota de encomenda personalizada"
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
          "intro": "O painel mostra o que há a fazer hoje: tarefas em atraso, compromissos de hoje, tarefas pendentes e o resto da semana.",
          "schritte": [
            "Toque nos mosaicos em cima para filtrar: Em atraso, Compromissos hoje, Tarefas pendentes hoje, Compromissos até domingo.",
            "Marque as tarefas concluídas na caixa. «Amanhã» passa uma tarefa para o próximo dia útil – ao sábado o botão chama-se, por isso, «Segunda-feira».",
            "«Tudo para hoje» traz todas as tarefas em atraso para hoje.",
            "Escreva as suas tarefas em baixo, escolha um dia e toque em «Adicionar». Só é possível escolher dias úteis.",
            "Com a permissão «Delegar tarefas», use «Atribuir a …» para passar uma tarefa a um colega. Ele vê-a como «Delegado por …» e pode marcá-la, mas não apagá-la.",
            "Os compromissos cuja hora já passou ficam a vermelho. As tarefas de orçamentos abrem diretamente o orçamento."
          ],
          "tipp": "Domingos e feriados (Baixa Saxónia) são dias de encerramento: compromissos e tarefas passam para o próximo dia útil. Nesses dias o painel mostra «fechado» e a semana até ao domingo seguinte."
        },
        "kasse": {
          "titel": "Vender na caixa",
          "intro": "Procurar artigos, escolher a variante, adicionar ao carrinho.",
          "schritte": [
            "Escolha uma categoria em cima (p. ex. barcos, pagaias) ou pesquise por nome ou fabricante. Um código de barras lido encontra o artigo de imediato.",
            "Toque no artigo e escolha a variante, p. ex. comprimento, pá, tamanho, cor ou número de série.",
            "Altere quantidades ou remova linhas no carrinho. No tablet e no telemóvel, o botão do carrinho na barra inferior abre-o a partir de qualquer página.",
            "Atribuir cliente: escreva nome ou número ou toque em «Abrir lista de clientes». Um desconto de cliente guardado é aplicado automaticamente.",
            "Se alguém comprar sem dados de cliente, escolha «Cliente a dinheiro (sem dados)» – sem desconto de cliente.",
            "Por baixo do total há três botões: «Pagar» (ver Pagamento), «Nota de encomenda» (mercadoria encomendada ou personalizada) e «Guardar como orçamento».",
            "«Caixa» na barra inferior leva-o de volta à caixa a partir de qualquer página e fecha as janelas abertas."
          ],
          "tipp": "Cada caixa tem o seu próprio carrinho. Mudar de caixa não o apaga."
        },
        "bezahlen": {
          "titel": "Pagamento e talão",
          "intro": "Escolher o meio de pagamento, pagar, emitir talão e fatura. Depois, os comprovativos ficam anexados à operação.",
          "schritte": [
            "No carrinho, toque em «Pagar». Aparece «Escolher meio de pagamento» com Cartão, Numerário e Fatura. «Voltar» fecha a seleção.",
            "Cartão: o cliente paga no terminal. Numerário: introduza o valor entregue ou escolha um valor rápido; o troco aparece de imediato. Fatura: para clientes com fatura como clubes e empresas; se a compra incluir pagaias, os respetivos IDs são atribuídos e mostrados.",
            "Se a compra incluir um barco, o diálogo mostra o número de série e «Imprimir etiquetas QR», com qualquer meio de pagamento.",
            "No diálogo, toque em «Pagar». Aparece a emissão de comprovativos.",
            "Cartão e numerário: o talão é sempre impresso. Opcionalmente escolha também «Imprimir fatura» ou «Enviar fatura por e-mail»; o e-mail do cliente é preenchido.",
            "Pagamento por fatura: não há talão. A fatura é obrigatória – escolha «Imprimir fatura» ou «Enviar fatura por e-mail».",
            "Toque em «Concluir». Talão e fatura vão diretamente para a impressora, sem pré-visualização. Um aviso confirma a venda; «Abrir» mostra a operação em Transações.",
            "«Nota de encomenda» imprime também uma nota de encomenda. «Voltar» regressa ao carrinho ou ao pagamento sem concluir."
          ],
          "tipp": "Cada talão tem um código QR com o qual o cliente o consulta online. TSE, pagamento com cartão, impressora e envio de e-mail são simulados no protótipo."
        },
        "bestellbeleg": {
          "titel": "Nota de encomenda",
          "intro": "A mercadoria encomendada ou personalizada tem a sua própria nota – separada do talão de caixa. Cliente e pagamento são definidos logo na criação.",
          "schritte": [
            "No carrinho, toque em «Nota de encomenda».",
            "Em «Linhas», abra cada linha e indique a personalização se necessário, p. ex. nome do barco, assento à medida ou comprimento da pagaia.",
            "Em «Cliente, entrega e pagamento», procure o cliente (nome, número ou telefone) e toque nele – nome, telefone e e-mail são copiados. Para um cliente novo, introduza os dados e toque em «Guardar como novo cliente».",
            "Indique a entrega (levantamento, entrega ou envio), a data e um sinal.",
            "Em «Pagamento», escolha: Ainda por pagar, Pago · cartão, Pago · numerário ou Fatura com prazo de pagamento em dias. Para clubes e empresas a fatura vem pré-selecionada.",
            "Verifique a pré-visualização e toque em «Imprimir / PDF». A nota fica guardada automaticamente em «Notas de encomenda»."
          ],
          "tipp": "A nota de encomenda não é um talão de caixa. Com a assinatura, o cliente confirma a personalização."
        },
        "bestellbelege": {
          "titel": "Gerir notas de encomenda",
          "intro": "Todas as notas de encomenda impressas num só lugar – com pagamento e estado até à entrega.",
          "schritte": [
            "Abra «Notas de encomenda» na navegação. Em cima estão Encomendado, Pronto para levantamento, Entregue e «Por cobrar».",
            "Pesquise por número, cliente, telefone ou artigo, ou filtre por estado.",
            "Toque numa linha: aparecem as linhas com personalização, a observação e o pagamento. Defina o estado como Encomendado, Pronto para levantamento ou Entregue.",
            "Só é possível entregar se a encomenda estiver paga ou com fatura. Se ainda estiver em aberto, escolha «Pago com cartão», «Pago em numerário» ou «Com fatura (14 dias)».",
            "«Imprimir novamente» imprime a nota tal como foi guardada."
          ],
          "tipp": "No protótipo, «Pago com cartão» apenas altera o estado; não é criado nenhum talão."
        },
        "etiketten": {
          "titel": "ID de pagaias e etiquetas QR",
          "intro": "Os barcos são identificados pelo número de série, as pagaias por um ID próprio.",
          "schritte": [
            "O ID da pagaia é criado ao concluir com fatura, a partir da data e do número (p. ex. ZKP-261011-416-01), e consta da fatura.",
            "Se uma conclusão, uma fatura ou um orçamento aceite contiver uma pagaia, aparece «Imprimir etiquetas QR».",
            "Quando um barco é vendido, o diálogo de pagamento mostra o número de série com «Imprimir etiquetas QR». Se o barco no carrinho ainda não tiver número de série, é usado o próximo livre.",
            "Imprima as etiquetas na impressora QR e cole-as no cabo ou no barco. A reimpressão é sempre possível a partir da ficha do barco em «Barcos vendidos»."
          ],
          "tipp": "Cada impressão fica registada, incluindo reimpressões."
        },
        "angebote": {
          "titel": "Orçamentos",
          "intro": "Criar e enviar orçamentos e, quando aceites, passá-los para a caixa – também diretamente a partir do carrinho.",
          "schritte": [
            "Em «Orçamentos», crie um orçamento, escolha o cliente e adicione linhas com desconto. Verifique a pré-visualização PDF e envie.",
            "Mantenha o estado: Rascunho, Enviado, Aceite, Recusado, Expirado. Cobre os aceites com «Passar para a caixa».",
            "A partir do carrinho: «Guardar como orçamento» guarda o conteúdo como orçamento (rascunho). O carrinho é esvaziado e continua na caixa. Sem cliente, o orçamento fica para um cliente a dinheiro.",
            "Mais tarde, abra «Orçamentos da caixa» na caixa e toque em «Carregar no carrinho» no orçamento pretendido."
          ],
          "tipp": "A validade resulta das definições da loja. Os orçamentos a expirar aparecem no calendário e no painel."
        },
        "transaktionen": {
          "titel": "Transações e fecho do dia",
          "intro": "Consultar todas as vendas, ver e reimprimir comprovativos, fechar o dia.",
          "schritte": [
            "Escolha um período: Hoje, Ontem, Últimos 7 dias, Este mês, Mês anterior, Trimestre ou Personalizado. Filtre por meio de pagamento ou estado.",
            "Abra uma linha para ver as posições, os dados TSE e o talão digital.",
            "Em «Documentos anexados» estão o talão e a fatura da operação, com a nota «impresso» ou «por e-mail para …». «Ver» mostra o documento, «Imprimir» volta a imprimi-lo.",
            "Inicie uma anulação ou devolução a partir do detalhe do talão (permissão «Anulação / devolução»).",
            "No fim do dia, faça o fecho do dia."
          ],
          "tipp": "Cada caixa tem o seu próprio diário. Tocar no cabeçalho de uma coluna ordena-a."
        },
        "stammdaten": {
          "titel": "Clientes, artigos e stock",
          "intro": "Manter os dados mestre atualizados para que caixa e talões estejam certos.",
          "schritte": [
            "Clientes: criar, filtrar por tipo, guardar desconto e condições de pagamento. Compras e barcos constam da ficha do cliente.",
            "Gestão de artigos: artigos, fabricantes, preços, taxas de IVA e variantes.",
            "Stock: pesquisar por local, registar entradas e saídas.",
            "Fornecedores: condições, encomendas abertas e pessoas de contacto.",
            "Barcos vendidos: ficha do barco com número de série, garantia e histórico de serviço."
          ],
          "tipp": "No telemóvel, as tabelas aparecem como cartões para que nada fique cortado."
        },
        "kalender": {
          "titel": "Calendário",
          "intro": "Compromissos de levantamento, entrega, oficina, regata e feira.",
          "schritte": [
            "Escolha um mês e toque num dia para ver os compromissos. Filtre por tipo; a legenda explica as cores.",
            "«Editar» altera ou apaga um compromisso, «+ Compromisso neste dia» cria um novo. Os orçamentos a expirar alteram-se no orçamento.",
            "Domingos e feriados aparecem a cinzento com «Loja fechada». Aí só são possíveis regatas; os restantes compromissos ficam em dias úteis.",
            "As regatas vêm com as datas reais do Kai Kalender e nunca são movidas. Regatas e feiras pertencem à caixa móvel, o resto ao Verkaufsraum."
          ],
          "tipp": "Para ver o calendário da caixa móvel, mude de caixa na barra inferior."
        },
        "berichte": {
          "titel": "Relatórios e painel de vendas",
          "intro": "Analisar vendas e identificar tendências.",
          "schritte": [
            "Relatórios: escolha Hoje, Semana, Mês ou Ano, todas as caixas ou apenas uma. «Relatório em PDF» guarda a análise.",
            "Veja indicadores, meios de pagamento, tipos de cliente, vendas por caixa, artigos mais vendidos e grupos de produtos.",
            "Painel de vendas: filtrar por período, local de venda, categoria e fabricante.",
            "Compare evolução mensal, fabricantes, pagaias vs. barcos de competição, tendências e produtos mais vendidos."
          ],
          "tipp": "As análises baseiam-se em dados de exemplo e não substituem o relatório fiscal de caixa."
        },
        "einstellungen": {
          "titel": "Definições e permissões",
          "intro": "Gerir dispositivos, utilizadores e dados da loja. Todos veem o manual; as restantes áreas exigem permissão.",
          "schritte": [
            "Configurar impressoras, leitores de códigos de barras, pagamento com cartão, TSE, ligação ERP e lojas online e API. As ligações são simuladas no protótipo.",
            "Utilizadores e funções: criar utilizadores, atribuir caixas, definir PIN e permissões na matriz. Inclui plano de turnos e registo de entrada/saída por utilizador.",
            "Funções: Admin, Gerente de loja, Chefe de equipa, Vendas, Auxiliar, Compras. O chefe de equipa tem as permissões de Vendas e pode ainda delegar tarefas e ver relatórios, painel de vendas e registo do sistema.",
            "Loja: dados da empresa, logótipo, cor de destaque, horários, numeração e textos de todos os talões. Modelos de documentos: verificar talões, faturas e etiquetas.",
            "Admin (só root): idioma do sistema e idioma por utilizador, registo do sistema, base de dados e cópia."
          ],
          "tipp": "No telemóvel, os separadores das definições deslizam para o lado."
        }
      }
    }
  }
};
