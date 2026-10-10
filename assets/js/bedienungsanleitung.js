// zykol.POS – Bedienungsanleitung (DE, EN, FR, ES, PT). Quelle für die Ansicht in Einstellungen und für das PDF.
window.ZYKOL_ANLEITUNG = {
  version: 'v7',
  meta: [
    {id: 'anmelden', view: null, recht: null},
    {id: 'dashboard', view: 'dashboard', recht: null},
    {id: 'kasse', view: 'kasse', recht: 'Verkauf kassieren'},
    {id: 'bezahlen', view: 'kasse', recht: 'Verkauf kassieren'},
    {id: 'etiketten', view: 'verkaufteBoote', recht: 'QR-Etiketten drucken'},
    {id: 'angebote', view: 'angebote', recht: 'Angebote erstellen & versenden'},
    {id: 'transaktionen', view: 'transaktionen', recht: 'Journal & Transaktionen einsehen'},
    {id: 'stammdaten', view: 'kunden', recht: 'Kunden verwalten'},
    {id: 'kalender', view: 'kalender', recht: null},
    {id: 'berichte', view: 'umsatz', recht: 'Berichte einsehen'},
    {id: 'einstellungen', view: 'einstellungen', recht: 'Einstellungen & Benutzer'}
  ],
  sprachen: {
    de: {
      name: 'Deutsch',
      ui: {titel: 'Bedienungsanleitung', untertitel: 'Schritt für Schritt durch zykol.POS. Für alle Benutzer.', suche: 'In der Anleitung suchen', kapitel: 'Kapitel', treffer: '{n} Kapitel', keine: 'Keine Treffer. Anderen Begriff versuchen.', tipp: 'Tipp', verfuegbar: 'Für Sie freigegeben', benoetigt: 'Benötigt Recht', oeffnen: 'Ansicht öffnen', pdf: 'Als PDF öffnen', alle: 'Alle Sprachen als PDF', inhalt: 'Inhalt', stand: 'Stand', schritte: 'Schritte', alleNutzer: 'Für alle Benutzer', sprache: 'Sprache'},
      rechte: {'Verkauf kassieren': 'Verkauf kassieren', 'QR-Etiketten drucken': 'QR-Etiketten drucken', 'Angebote erstellen & versenden': 'Angebote erstellen & versenden', 'Journal & Transaktionen einsehen': 'Journal & Transaktionen einsehen', 'Kunden verwalten': 'Kunden verwalten', 'Berichte einsehen': 'Berichte einsehen', 'Einstellungen & Benutzer': 'Einstellungen & Benutzer'},
      kapitel: {
        anmelden: {titel: 'Anmelden', intro: 'Jede Person meldet sich mit eigenem Namen und PIN an. So werden Verkäufe und Änderungen eindeutig zugeordnet.', schritte: [
          'Oben rechts die Kasse wählen. Angezeigt werden nur Kassen, denen Sie zugeordnet sind.',
          'Ihren Namen in der Personenauswahl antippen.',
          'PIN über das Ziffernfeld oder die Tastatur eingeben. Enter meldet an, Rücktaste löscht die letzte Ziffer, Esc leert das Feld.',
          'Über die Flaggen die Sprache wählen. Die Einstellung gilt für Ihr Benutzerkonto.',
          'Kasse verlassen: „Sperren“ in der Fußleiste antippen. Zum Entsperren die PIN über Tastenfeld oder Tastatur eingeben – der Warenkorb bleibt erhalten.'
        ], tipp: 'PIN vergessen? Über „PIN vergessen“ auf der Anmeldeseite wenden Sie sich an den Admin. Er setzt die PIN zurück.'},
        dashboard: {titel: 'Dashboard', intro: 'Das Dashboard zeigt, was heute zu tun ist: überfällige Aufgaben, Termine und offene Angebote.', schritte: [
          'Kacheln oben antippen, um zu filtern: Überfällig, Termine heute, Offene Aufgaben, Termine bis Sonntag.',
          'Erledigte Aufgaben abhaken oder mit „Morgen“ verschieben.',
          'Eigene Aufgaben anlegen und wieder löschen.',
          'Mit dem Recht „Aufgaben delegieren“ (Admin, Filialleitung, Teamleitung) über „Zuweisen an“ eine Aufgabe einem Kollegen geben. Er sieht sie mit „Von … delegiert“ und kann sie abhaken, aber nicht löschen.',
          'Termine, deren Uhrzeit vorbei ist, sind rot markiert.',
          'Angebotsaufgaben öffnen direkt den Angebots-Editor.'
        ], tipp: 'Alle Daten beziehen sich auf heute. „Alle auf heute setzen“ holt überfällige Aufgaben auf den heutigen Tag.'},
        kasse: {titel: 'Verkaufen an der Kasse', intro: 'Artikel suchen, Variante wählen, in den Warenkorb legen.', schritte: [
          'Oben eine Rubrik wählen (z. B. Boote, Paddel) oder nach Name oder Hersteller suchen.',
          'Barcode scannen: Der Artikel wird sofort gefunden.',
          'Artikel antippen und die Variante wählen, z. B. Länge, Blatt, Größe, Farbe oder Seriennummer.',
          'Im Warenkorb rechts Mengen ändern oder Positionen entfernen.',
          'Kunden zuordnen: Ein hinterlegter Kundenrabatt wird automatisch abgezogen.'
        ], tipp: 'Jede Kasse hat ihren eigenen Warenkorb. Ein Wechsel der Kasse löscht ihn nicht.'},
        bezahlen: {titel: 'Bezahlen und Beleg', intro: 'Zahlart wählen, Zahlung abschließen, Beleg ausgeben.', schritte: [
          '„Bezahlen“ antippen und Karte, Bar oder Rechnung wählen.',
          'Bar: den gegebenen Betrag eingeben oder einen Schnellbetrag wählen. Das Rückgeld erscheint sofort. Fehlt Geld, bleibt der Abschluss gesperrt.',
          'Rechnung: Ein Kunde muss zugeordnet sein, und das Recht „Rechnungskauf freigeben“ ist nötig.',
          '„Neuer Vorgang“ schließt den Verkauf ab und zeigt den Beleg sofort an.',
          'In der Vorschau den Beleg drucken oder in einem neuen Tab öffnen.'
        ], tipp: 'Jeder Beleg trägt einen QR-Code. Kunden scannen ihn und rufen den Beleg online ab.'},
        etiketten: {titel: 'Paddel-IDs und QR-Etiketten', intro: 'Boote werden über ihre Seriennummer erkannt, Paddel über eine eigene ID.', schritte: [
          'Die Paddel-ID entsteht beim Erstellen der Rechnung aus dem Verkaufsdatum und steht auf der Rechnung.',
          'Enthält ein angenommenes Angebot, eine Rechnung oder ein Beleg ein Paddel, erscheint „QR-Etiketten drucken“.',
          'Etiketten auf dem Etikettendrucker ausgeben und am Paddel anbringen.',
          'Für Boote das Etikett mit der Seriennummer aus der Bootsakte drucken.'
        ], tipp: 'Jeder Druck wird protokolliert, auch Nachdrucke.'},
        angebote: {titel: 'Angebote', intro: 'Angebote erstellen, versenden und bei Zusage in die Kasse übernehmen.', schritte: [
          'Ein neues Angebot anlegen, den Kunden wählen und Positionen mit Rabatt hinzufügen.',
          'Die PDF-Vorschau prüfen und das Angebot versenden.',
          'Den Status pflegen: Entwurf, Versendet, Angenommen, Abgelehnt, Abgelaufen.',
          'Angenommene Angebote mit „In Kasse übernehmen“ abrechnen.'
        ], tipp: 'Die Gültigkeit ergibt sich aus den Shop-Einstellungen.'},
        transaktionen: {titel: 'Transaktionen und Tagesabschluss', intro: 'Alle Verkäufe nachschlagen, Belege erneut ausgeben, den Tag abschließen.', schritte: [
          'Zeitraum wählen (z. B. Heute, 7 Tage, Monat) und nach Zahlart oder Status filtern.',
          'Eine Zeile öffnen, um Positionen, TSE-Daten und den Beleg zu sehen.',
          'Storno oder Retoure aus dem Belegdetail starten (Recht „Storno / Retoure“).',
          'Am Ende des Tages den Tagesabschluss erstellen.'
        ], tipp: 'Ein Tipp auf den Tabellenkopf sortiert die Spalte.'},
        stammdaten: {titel: 'Kunden, Artikel und Bestand', intro: 'Stammdaten pflegen, damit Kasse und Belege stimmen.', schritte: [
          'Kunden: anlegen, nach Typ filtern, Rabatt und Zahlungsbedingung hinterlegen. Käufe und Boote stehen im Detail.',
          'Artikelverwaltung: Artikel, Hersteller, Preise, Steuersätze und Varianten pflegen.',
          'Bestand: nach Lagerort suchen, Zu- und Abgänge buchen.',
          'Verkaufte Boote: Bootsakte mit Seriennummer, Garantie und Historie einsehen.'
        ], tipp: 'Artikellisten lassen sich als CSV exportieren.'},
        kalender: {titel: 'Kalender', intro: 'Termine für Abholung, Lieferung, Werkstatt, Regatta und Messe.', schritte: [
          'Einen Monat wählen und einen Tag antippen, um seine Termine zu sehen.',
          'Nach Terminart filtern. Die Legende erklärt die Farben.',
          'Mit „Bearbeiten“ einen Termin ändern oder löschen, mit „+ Termin an diesem Tag“ einen neuen anlegen. Auslaufende Angebote ändern Sie im Angebot.',
          'Regatta- und Messetermine gehören zur mobilen Kasse, alle anderen zum Verkaufsraum.'
        ], tipp: 'Termine von heute erscheinen auch auf dem Dashboard.'},
        berichte: {titel: 'Berichte und Umsatz-Dashboard', intro: 'Umsätze auswerten und Entwicklungen erkennen.', schritte: [
          'Berichte: Zeitraum wählen, Kennzahlen mit Trend, Umsatzverlauf und Top-Artikel ansehen.',
          'Umsatz-Dashboard: nach Zeitraum, Verkaufsort, Kategorie und Hersteller filtern.',
          'Monatsverlauf, Hersteller, Produkt-Trends und Top-Produkte vergleichen.',
          'In der Detailtabelle einzelne Werte suchen und sortieren.'
        ], tipp: 'Alle Beträge werden mit Cent angezeigt.'},
        einstellungen: {titel: 'Einstellungen und Rechte', intro: 'Geräte, Benutzer und Shop-Daten verwalten. Die Bedienungsanleitung sehen alle Benutzer, alle anderen Bereiche nur mit Recht.', schritte: [
          'Drucker, Barcode-Scanner, Kartenzahlung und TSE einrichten.',
          'Benutzer & Rollen: Benutzer anlegen, Kassen zuordnen, PINs vergeben und Rechte in der Matrix setzen. Änderungen wirken sofort.',
          'Rollen: Admin, Filialleitung, Teamleitung, Verkauf, Aushilfe, Einkauf. Teamleitung hat die Rechte von Verkauf und darf zusätzlich Aufgaben delegieren sowie Berichte, Umsatz-Dashboard und Systemprotokoll einsehen.',
          'Shop: Firmendaten, Logo, Akzentfarbe, Öffnungszeiten, Nummernkreise und Texte für alle Belege.',
          'Dokumentvorlagen: Belege, Rechnungen und Etiketten prüfen.'
        ], tipp: 'Die Systemsprache legt der Admin fest. Jeder Benutzer kann seine eigene Sprache wählen.'}
      }
    },
    en: {
      name: 'English',
      ui: {titel: 'User manual', untertitel: 'Step by step through zykol.POS. For all users.', suche: 'Search the manual', kapitel: 'Chapter', treffer: '{n} chapters', keine: 'No results. Try another term.', tipp: 'Tip', verfuegbar: 'Available to you', benoetigt: 'Requires permission', oeffnen: 'Open view', pdf: 'Open as PDF', alle: 'All languages as PDF', inhalt: 'Contents', stand: 'As of', schritte: 'Steps', alleNutzer: 'For all users', sprache: 'Language'},
      rechte: {'Verkauf kassieren': 'Process sales', 'QR-Etiketten drucken': 'Print QR labels', 'Angebote erstellen & versenden': 'Create & send quotes', 'Journal & Transaktionen einsehen': 'View journal & transactions', 'Kunden verwalten': 'Manage customers', 'Berichte einsehen': 'View reports', 'Einstellungen & Benutzer': 'Settings & users'},
      kapitel: {
        anmelden: {titel: 'Sign in', intro: 'Every person signs in with their own name and PIN, so sales and changes are clearly assigned.', schritte: [
          'Choose the register at the top right. Only registers assigned to you are shown.',
          'Tap your name in the person selection.',
          'Enter your PIN on the keypad or keyboard. Enter signs you in, Backspace deletes the last digit, Esc clears the field.',
          'Choose the language using the flags. The setting applies to your user account.',
          'Leaving the register: tap “Lock” in the footer. To unlock, enter your PIN on the keypad or keyboard – the cart is kept.'
        ], tipp: 'Forgot your PIN? Use “Forgot PIN” on the sign-in page to contact the admin, who resets it.'},
        dashboard: {titel: 'Dashboard', intro: 'The dashboard shows what needs doing today: overdue tasks, appointments and open quotes.', schritte: [
          'Tap the tiles at the top to filter: Overdue, Appointments today, Open tasks, Appointments until Sunday.',
          'Tick off finished tasks or move them with “Tomorrow”.',
          'Create your own tasks and delete them again.',
          'With the permission “Delegate tasks” (Admin, Branch manager, Team lead) use “Assign to” to give a task to a colleague. They see it as “Delegated by …” and can tick it off but not delete it.',
          'Appointments whose time has passed are marked red.',
          'Quote tasks open the quote editor directly.'
        ], tipp: 'All dates refer to today. “Set all to today” moves overdue tasks to today.'},
        kasse: {titel: 'Selling at the register', intro: 'Find items, choose a variant, add to the cart.', schritte: [
          'Pick a category at the top (e.g. Boats, Paddles) or search by name or manufacturer.',
          'Scan a barcode: the item is found immediately.',
          'Tap an item and choose the variant, e.g. length, blade, size, colour or serial number.',
          'Change quantities or remove lines in the cart on the right.',
          'Assign a customer: a stored customer discount is deducted automatically.'
        ], tipp: 'Each register has its own cart. Switching registers does not clear it.'},
        bezahlen: {titel: 'Payment and receipt', intro: 'Choose a payment method, complete the payment, issue the receipt.', schritte: [
          'Tap “Pay” and choose card, cash or invoice.',
          'Cash: enter the amount given or pick a quick amount. Change appears immediately. If money is missing, completion stays locked.',
          'Invoice: a customer must be assigned, and the permission “Approve invoice purchase” is required.',
          '“New transaction” completes the sale and shows the receipt right away.',
          'Print the receipt from the preview or open it in a new tab.'
        ], tipp: 'Every receipt carries a QR code. Customers scan it to view the receipt online.'},
        etiketten: {titel: 'Paddle IDs and QR labels', intro: 'Boats are identified by their serial number, paddles by their own ID.', schritte: [
          'The paddle ID is created from the sale date when the invoice is created and appears on the invoice.',
          'If an accepted quote, an invoice or a receipt contains a paddle, “Print QR labels” appears.',
          'Print the labels on the label printer and attach them to the paddle.',
          'For boats, print the label with the serial number from the boat record.'
        ], tipp: 'Every print is logged, including reprints.'},
        angebote: {titel: 'Quotes', intro: 'Create quotes, send them and, once accepted, take them over into the register.', schritte: [
          'Create a new quote, choose the customer and add lines with discount.',
          'Check the PDF preview and send the quote.',
          'Keep the status up to date: Draft, Sent, Accepted, Declined, Expired.',
          'Settle accepted quotes with “Take over into register”.'
        ], tipp: 'The validity period comes from the shop settings.'},
        transaktionen: {titel: 'Transactions and daily closing', intro: 'Look up all sales, reissue receipts, close the day.', schritte: [
          'Choose a period (e.g. Today, 7 days, Month) and filter by payment method or status.',
          'Open a row to see the lines, TSE data and the receipt.',
          'Start a cancellation or return from the receipt detail (permission “Cancellation / return”).',
          'At the end of the day, create the daily closing.'
        ], tipp: 'Tap a column header to sort.'},
        stammdaten: {titel: 'Customers, items and stock', intro: 'Maintain master data so the register and receipts are correct.', schritte: [
          'Customers: create, filter by type, store discount and payment terms. Purchases and boats appear in the detail view.',
          'Item management: maintain items, manufacturers, prices, tax rates and variants.',
          'Stock: search by storage location, book receipts and issues.',
          'Sold boats: view the boat record with serial number, warranty and history.'
        ], tipp: 'Item lists can be exported as CSV.'},
        kalender: {titel: 'Calendar', intro: 'Appointments for pick-up, delivery, workshop, regatta and trade fair.', schritte: [
          'Choose a month and tap a day to see its appointments.',
          'Filter by appointment type. The legend explains the colours.',
          'Use “Edit” to change or delete an appointment, “+ Appointment on this day” to add one. Expiring quotes are changed in the quote.',
          'Regatta and trade fair appointments belong to the mobile register, all others to the shop floor.'
        ], tipp: 'Today’s appointments also appear on the dashboard.'},
        berichte: {titel: 'Reports and sales dashboard', intro: 'Analyse sales and spot trends.', schritte: [
          'Reports: choose a period, view key figures with trend, sales history and top items.',
          'Sales dashboard: filter by period, sales location, category and manufacturer.',
          'Compare monthly history, manufacturers, product trends and top products.',
          'Use the detail table to search and sort individual values.'
        ], tipp: 'All amounts are shown with cents.'},
        einstellungen: {titel: 'Settings and permissions', intro: 'Manage devices, users and shop data. All users see the user manual; all other areas require permission.', schritte: [
          'Set up printers, barcode scanners, card payment and TSE.',
          'Users & roles: create users, assign registers, set PINs and grant permissions in the matrix. Changes take effect immediately.',
          'Roles: Admin, Branch manager, Team lead, Sales, Temp, Purchasing. Team lead has the Sales permissions and may also delegate tasks and view reports, the revenue dashboard and the system log.',
          'Shop: company details, logo, accent colour, opening hours, number ranges and texts for all documents.',
          'Document templates: check receipts, invoices and labels.'
        ], tipp: 'The admin sets the system language. Each user can choose their own language.'}
      }
    },
    fr: {
      name: 'Français',
      ui: {titel: 'Mode d’emploi', untertitel: 'Pas à pas dans zykol.POS. Pour tous les utilisateurs.', suche: 'Rechercher dans le mode d’emploi', kapitel: 'Chapitre', treffer: '{n} chapitres', keine: 'Aucun résultat. Essayez un autre terme.', tipp: 'Astuce', verfuegbar: 'Disponible pour vous', benoetigt: 'Autorisation requise', oeffnen: 'Ouvrir la vue', pdf: 'Ouvrir en PDF', alle: 'Toutes les langues en PDF', inhalt: 'Sommaire', stand: 'État au', schritte: 'Étapes', alleNutzer: 'Pour tous les utilisateurs', sprache: 'Langue'},
      rechte: {'Verkauf kassieren': 'Encaisser des ventes', 'QR-Etiketten drucken': 'Imprimer des étiquettes QR', 'Angebote erstellen & versenden': 'Créer et envoyer des devis', 'Journal & Transaktionen einsehen': 'Consulter journal et transactions', 'Kunden verwalten': 'Gérer les clients', 'Berichte einsehen': 'Consulter les rapports', 'Einstellungen & Benutzer': 'Paramètres et utilisateurs'},
      kapitel: {
        anmelden: {titel: 'Connexion', intro: 'Chaque personne se connecte avec son nom et son code PIN. Les ventes et modifications sont ainsi attribuées sans ambiguïté.', schritte: [
          'Choisir la caisse en haut à droite. Seules les caisses qui vous sont attribuées s’affichent.',
          'Toucher votre nom dans la sélection des personnes.',
          'Saisir le code PIN sur le pavé numérique ou au clavier. Entrée valide, Retour arrière efface le dernier chiffre, Échap vide le champ.',
          'Choisir la langue à l’aide des drapeaux. Le réglage s’applique à votre compte.',
          'Quitter la caisse : toucher « Verrouiller » dans la barre du bas. Pour déverrouiller, saisir le PIN sur le pavé ou au clavier – le panier est conservé.'
        ], tipp: 'Code PIN oublié ? Via « PIN oublié » sur la page de connexion, contactez l’administrateur, qui le réinitialise.'},
        dashboard: {titel: 'Tableau de bord', intro: 'Le tableau de bord montre ce qui est à faire aujourd’hui : tâches en retard, rendez-vous et devis ouverts.', schritte: [
          'Toucher les tuiles en haut pour filtrer : En retard, Rendez-vous du jour, Tâches ouvertes, Rendez-vous jusqu’à dimanche.',
          'Cocher les tâches terminées ou les reporter avec « Demain ».',
          'Créer vos propres tâches et les supprimer.',
          'Avec l’autorisation « Déléguer des tâches » (Admin, Responsable de magasin, Chef d’équipe), confier une tâche à un collègue via « Attribuer à ». Il la voit avec « Déléguée par … » et peut la cocher, mais pas la supprimer.',
          'Les rendez-vous dont l’heure est passée sont marqués en rouge.',
          'Les tâches liées à un devis ouvrent directement l’éditeur de devis.'
        ], tipp: 'Toutes les dates se rapportent à aujourd’hui. « Tout mettre à aujourd’hui » ramène les tâches en retard à ce jour.'},
        kasse: {titel: 'Vendre en caisse', intro: 'Rechercher un article, choisir la variante, l’ajouter au panier.', schritte: [
          'Choisir une rubrique en haut (p. ex. Bateaux, Pagaies) ou rechercher par nom ou fabricant.',
          'Scanner un code-barres : l’article est trouvé immédiatement.',
          'Toucher un article et choisir la variante, p. ex. longueur, pale, taille, couleur ou numéro de série.',
          'Modifier les quantités ou supprimer des lignes dans le panier à droite.',
          'Associer un client : une remise client enregistrée est déduite automatiquement.'
        ], tipp: 'Chaque caisse a son propre panier. Changer de caisse ne le vide pas.'},
        bezahlen: {titel: 'Paiement et ticket', intro: 'Choisir le mode de paiement, finaliser, émettre le ticket.', schritte: [
          'Toucher « Payer » et choisir carte, espèces ou facture.',
          'Espèces : saisir le montant remis ou choisir un montant rapide. La monnaie à rendre s’affiche aussitôt. S’il manque de l’argent, la finalisation reste bloquée.',
          'Facture : un client doit être associé et l’autorisation « Autoriser l’achat sur facture » est requise.',
          '« Nouvelle opération » finalise la vente et affiche aussitôt le ticket.',
          'Depuis l’aperçu, imprimer le ticket ou l’ouvrir dans un nouvel onglet.'
        ], tipp: 'Chaque ticket porte un code QR. Les clients le scannent pour consulter le ticket en ligne.'},
        etiketten: {titel: 'ID de pagaie et étiquettes QR', intro: 'Les bateaux sont identifiés par leur numéro de série, les pagaies par un ID propre.', schritte: [
          'L’ID de pagaie est créé à partir de la date de vente lors de l’établissement de la facture et figure sur celle-ci.',
          'Si un devis accepté, une facture ou un ticket contient une pagaie, « Imprimer les étiquettes QR » apparaît.',
          'Imprimer les étiquettes sur l’imprimante d’étiquettes et les coller sur la pagaie.',
          'Pour les bateaux, imprimer l’étiquette avec le numéro de série depuis le dossier du bateau.'
        ], tipp: 'Chaque impression est enregistrée, réimpressions comprises.'},
        angebote: {titel: 'Devis', intro: 'Créer des devis, les envoyer et, une fois acceptés, les reprendre en caisse.', schritte: [
          'Créer un nouveau devis, choisir le client et ajouter des lignes avec remise.',
          'Vérifier l’aperçu PDF et envoyer le devis.',
          'Tenir le statut à jour : Brouillon, Envoyé, Accepté, Refusé, Expiré.',
          'Encaisser les devis acceptés avec « Reprendre en caisse ».'
        ], tipp: 'La durée de validité provient des paramètres de la boutique.'},
        transaktionen: {titel: 'Transactions et clôture journalière', intro: 'Retrouver toutes les ventes, réémettre des tickets, clôturer la journée.', schritte: [
          'Choisir une période (p. ex. Aujourd’hui, 7 jours, Mois) et filtrer par mode de paiement ou statut.',
          'Ouvrir une ligne pour voir les articles, les données TSE et le ticket.',
          'Lancer une annulation ou un retour depuis le détail du ticket (autorisation « Annulation / retour »).',
          'En fin de journée, établir la clôture journalière.'
        ], tipp: 'Toucher un en-tête de colonne pour trier.'},
        stammdaten: {titel: 'Clients, articles et stock', intro: 'Tenir les données de base à jour pour que la caisse et les documents soient exacts.', schritte: [
          'Clients : créer, filtrer par type, enregistrer remise et conditions de paiement. Achats et bateaux figurent dans le détail.',
          'Gestion des articles : articles, fabricants, prix, taux de TVA et variantes.',
          'Stock : rechercher par emplacement, enregistrer entrées et sorties.',
          'Bateaux vendus : consulter le dossier avec numéro de série, garantie et historique.'
        ], tipp: 'Les listes d’articles s’exportent en CSV.'},
        kalender: {titel: 'Calendrier', intro: 'Rendez-vous pour retrait, livraison, atelier, régate et salon.', schritte: [
          'Choisir un mois et toucher un jour pour voir ses rendez-vous.',
          'Filtrer par type de rendez-vous. La légende explique les couleurs.',
          '« Modifier » pour changer ou supprimer un rendez-vous, « + Rendez-vous ce jour » pour en créer un. Les devis qui expirent se modifient dans le devis.',
          'Les rendez-vous de régate et de salon relèvent de la caisse mobile, tous les autres du magasin.'
        ], tipp: 'Les rendez-vous du jour apparaissent aussi sur le tableau de bord.'},
        berichte: {titel: 'Rapports et tableau des ventes', intro: 'Analyser le chiffre d’affaires et repérer les tendances.', schritte: [
          'Rapports : choisir une période, voir les indicateurs avec tendance, l’évolution des ventes et les meilleurs articles.',
          'Tableau des ventes : filtrer par période, lieu de vente, catégorie et fabricant.',
          'Comparer l’évolution mensuelle, les fabricants, les tendances produits et les meilleurs produits.',
          'Utiliser le tableau détaillé pour rechercher et trier des valeurs.'
        ], tipp: 'Tous les montants sont affichés avec les centimes.'},
        einstellungen: {titel: 'Paramètres et autorisations', intro: 'Gérer appareils, utilisateurs et données de la boutique. Tous les utilisateurs voient le mode d’emploi ; les autres zones nécessitent une autorisation.', schritte: [
          'Configurer imprimantes, lecteurs de codes-barres, paiement par carte et TSE.',
          'Utilisateurs et rôles : créer des utilisateurs, attribuer des caisses, définir les PIN et accorder les autorisations dans la matrice. Les changements s’appliquent immédiatement.',
          'Rôles : Admin, Responsable de magasin, Chef d’équipe, Vente, Auxiliaire, Achats. Le chef d’équipe a les droits de la vente et peut en plus déléguer des tâches et consulter rapports, tableau des ventes et journal système.',
          'Boutique : coordonnées, logo, couleur d’accent, horaires, séries de numéros et textes pour tous les documents.',
          'Modèles de documents : vérifier tickets, factures et étiquettes.'
        ], tipp: 'L’administrateur définit la langue du système. Chaque utilisateur peut choisir la sienne.'}
      }
    },
    es: {
      name: 'Español',
      ui: {titel: 'Manual de usuario', untertitel: 'Paso a paso por zykol.POS. Para todos los usuarios.', suche: 'Buscar en el manual', kapitel: 'Capítulo', treffer: '{n} capítulos', keine: 'Sin resultados. Pruebe otro término.', tipp: 'Consejo', verfuegbar: 'Disponible para usted', benoetigt: 'Requiere permiso', oeffnen: 'Abrir vista', pdf: 'Abrir como PDF', alle: 'Todos los idiomas en PDF', inhalt: 'Índice', stand: 'Fecha', schritte: 'Pasos', alleNutzer: 'Para todos los usuarios', sprache: 'Idioma'},
      rechte: {'Verkauf kassieren': 'Cobrar ventas', 'QR-Etiketten drucken': 'Imprimir etiquetas QR', 'Angebote erstellen & versenden': 'Crear y enviar presupuestos', 'Journal & Transaktionen einsehen': 'Ver diario y transacciones', 'Kunden verwalten': 'Gestionar clientes', 'Berichte einsehen': 'Ver informes', 'Einstellungen & Benutzer': 'Ajustes y usuarios'},
      kapitel: {
        anmelden: {titel: 'Iniciar sesión', intro: 'Cada persona inicia sesión con su nombre y su PIN. Así las ventas y los cambios quedan asignados con claridad.', schritte: [
          'Elija la caja arriba a la derecha. Solo se muestran las cajas que tiene asignadas.',
          'Toque su nombre en la selección de personas.',
          'Introduzca el PIN en el teclado numérico o en el teclado. Intro inicia sesión, Retroceso borra el último dígito, Esc vacía el campo.',
          'Elija el idioma con las banderas. El ajuste se aplica a su cuenta.',
          'Al dejar la caja: toque «Bloquear» en la barra inferior. Para desbloquear, introduzca el PIN en el teclado numérico o físico; la cesta se conserva.'
        ], tipp: '¿Ha olvidado el PIN? Con «PIN olvidado» en la página de inicio, contacte con el administrador, que lo restablece.'},
        dashboard: {titel: 'Panel', intro: 'El panel muestra lo que hay que hacer hoy: tareas vencidas, citas y presupuestos abiertos.', schritte: [
          'Toque los mosaicos superiores para filtrar: Vencidas, Citas de hoy, Tareas abiertas, Citas hasta el domingo.',
          'Marque las tareas terminadas o aplácelas con «Mañana».',
          'Cree sus propias tareas y vuelva a eliminarlas.',
          'Con el permiso «Delegar tareas» (Admin, Jefatura de tienda, Jefatura de equipo), asigne una tarea a un compañero con «Asignar a». La verá como «Delegada por …» y podrá marcarla, pero no borrarla.',
          'Las citas cuya hora ya pasó se marcan en rojo.',
          'Las tareas de presupuesto abren directamente el editor de presupuestos.'
        ], tipp: 'Todas las fechas se refieren a hoy. «Pasar todo a hoy» trae las tareas vencidas al día de hoy.'},
        kasse: {titel: 'Vender en caja', intro: 'Buscar artículos, elegir la variante, añadir a la cesta.', schritte: [
          'Elija una categoría arriba (p. ej. Barcos, Palas) o busque por nombre o fabricante.',
          'Escanee un código de barras: el artículo se encuentra al instante.',
          'Toque un artículo y elija la variante, p. ej. longitud, pala, talla, color o número de serie.',
          'Cambie cantidades o elimine líneas en la cesta de la derecha.',
          'Asigne un cliente: el descuento guardado se aplica automáticamente.'
        ], tipp: 'Cada caja tiene su propia cesta. Cambiar de caja no la vacía.'},
        bezahlen: {titel: 'Pago y recibo', intro: 'Elegir la forma de pago, cerrar el pago, emitir el recibo.', schritte: [
          'Toque «Pagar» y elija tarjeta, efectivo o factura.',
          'Efectivo: introduzca el importe entregado o elija un importe rápido. El cambio aparece al instante. Si falta dinero, el cierre queda bloqueado.',
          'Factura: debe haber un cliente asignado y se necesita el permiso «Autorizar compra con factura».',
          '«Nueva operación» cierra la venta y muestra el recibo enseguida.',
          'Desde la vista previa, imprima el recibo o ábralo en una pestaña nueva.'
        ], tipp: 'Cada recibo lleva un código QR. Los clientes lo escanean para ver el recibo en línea.'},
        etiketten: {titel: 'ID de palas y etiquetas QR', intro: 'Los barcos se identifican por su número de serie; las palas, por un ID propio.', schritte: [
          'El ID de la pala se genera a partir de la fecha de venta al crear la factura y figura en ella.',
          'Si un presupuesto aceptado, una factura o un recibo contiene una pala, aparece «Imprimir etiquetas QR».',
          'Imprima las etiquetas en la impresora de etiquetas y péguelas en la pala.',
          'Para los barcos, imprima la etiqueta con el número de serie desde la ficha del barco.'
        ], tipp: 'Cada impresión queda registrada, también las reimpresiones.'},
        angebote: {titel: 'Presupuestos', intro: 'Crear presupuestos, enviarlos y, si se aceptan, pasarlos a caja.', schritte: [
          'Cree un presupuesto nuevo, elija el cliente y añada líneas con descuento.',
          'Revise la vista previa en PDF y envíe el presupuesto.',
          'Mantenga el estado al día: Borrador, Enviado, Aceptado, Rechazado, Caducado.',
          'Cobre los presupuestos aceptados con «Pasar a caja».'
        ], tipp: 'La validez se toma de los ajustes de la tienda.'},
        transaktionen: {titel: 'Transacciones y cierre diario', intro: 'Consultar todas las ventas, reemitir recibos, cerrar el día.', schritte: [
          'Elija un periodo (p. ej. Hoy, 7 días, Mes) y filtre por forma de pago o estado.',
          'Abra una fila para ver las líneas, los datos TSE y el recibo.',
          'Inicie una anulación o devolución desde el detalle del recibo (permiso «Anulación / devolución»).',
          'Al final del día, realice el cierre diario.'
        ], tipp: 'Toque el encabezado de una columna para ordenar.'},
        stammdaten: {titel: 'Clientes, artículos y stock', intro: 'Mantener los datos maestros para que la caja y los documentos sean correctos.', schritte: [
          'Clientes: crear, filtrar por tipo, guardar descuento y condiciones de pago. Compras y barcos aparecen en el detalle.',
          'Gestión de artículos: artículos, fabricantes, precios, tipos de IVA y variantes.',
          'Stock: buscar por ubicación, registrar entradas y salidas.',
          'Barcos vendidos: consultar la ficha con número de serie, garantía e historial.'
        ], tipp: 'Las listas de artículos se pueden exportar en CSV.'},
        kalender: {titel: 'Calendario', intro: 'Citas de recogida, entrega, taller, regata y feria.', schritte: [
          'Elija un mes y toque un día para ver sus citas.',
          'Filtre por tipo de cita. La leyenda explica los colores.',
          'Con «Editar» cambie o borre una cita; con «+ Cita este día» cree una nueva. Los presupuestos que vencen se cambian en el presupuesto.',
          'Las citas de regata y feria pertenecen a la caja móvil; las demás, a la tienda.'
        ], tipp: 'Las citas de hoy también aparecen en el panel.'},
        berichte: {titel: 'Informes y panel de ventas', intro: 'Analizar las ventas y detectar tendencias.', schritte: [
          'Informes: elija un periodo y vea indicadores con tendencia, evolución de ventas y artículos más vendidos.',
          'Panel de ventas: filtre por periodo, punto de venta, categoría y fabricante.',
          'Compare la evolución mensual, fabricantes, tendencias de producto y productos más vendidos.',
          'Use la tabla de detalle para buscar y ordenar valores.'
        ], tipp: 'Todos los importes se muestran con céntimos.'},
        einstellungen: {titel: 'Ajustes y permisos', intro: 'Gestionar dispositivos, usuarios y datos de la tienda. Todos los usuarios ven el manual; las demás áreas requieren permiso.', schritte: [
          'Configure impresoras, lectores de códigos de barras, pago con tarjeta y TSE.',
          'Usuarios y roles: cree usuarios, asigne cajas, defina PIN y conceda permisos en la matriz. Los cambios se aplican al instante.',
          'Roles: Admin, Jefatura de tienda, Jefatura de equipo, Venta, Auxiliar, Compras. La jefatura de equipo tiene los permisos de venta y además puede delegar tareas y ver informes, panel de ventas y registro del sistema.',
          'Tienda: datos de la empresa, logotipo, color de acento, horarios, series de numeración y textos para todos los documentos.',
          'Plantillas de documentos: revise recibos, facturas y etiquetas.'
        ], tipp: 'El administrador define el idioma del sistema. Cada usuario puede elegir el suyo.'}
      }
    },
    pt: {
      name: 'Português',
      ui: {titel: 'Manual de utilização', untertitel: 'Passo a passo pelo zykol.POS. Para todos os utilizadores.', suche: 'Pesquisar no manual', kapitel: 'Capítulo', treffer: '{n} capítulos', keine: 'Sem resultados. Experimente outro termo.', tipp: 'Dica', verfuegbar: 'Disponível para si', benoetigt: 'Requer permissão', oeffnen: 'Abrir vista', pdf: 'Abrir como PDF', alle: 'Todos os idiomas em PDF', inhalt: 'Índice', stand: 'Data', schritte: 'Passos', alleNutzer: 'Para todos os utilizadores', sprache: 'Idioma'},
      rechte: {'Verkauf kassieren': 'Registar vendas', 'QR-Etiketten drucken': 'Imprimir etiquetas QR', 'Angebote erstellen & versenden': 'Criar e enviar orçamentos', 'Journal & Transaktionen einsehen': 'Ver diário e transações', 'Kunden verwalten': 'Gerir clientes', 'Berichte einsehen': 'Ver relatórios', 'Einstellungen & Benutzer': 'Definições e utilizadores'},
      kapitel: {
        anmelden: {titel: 'Iniciar sessão', intro: 'Cada pessoa inicia sessão com o seu nome e PIN. Assim, vendas e alterações ficam claramente atribuídas.', schritte: [
          'Escolha a caixa no canto superior direito. Só são mostradas as caixas que lhe estão atribuídas.',
          'Toque no seu nome na seleção de pessoas.',
          'Introduza o PIN no teclado numérico ou no teclado. Enter inicia sessão, Retrocesso apaga o último dígito, Esc limpa o campo.',
          'Escolha o idioma através das bandeiras. A definição aplica-se à sua conta.',
          'Ao deixar a caixa: toque em «Bloquear» na barra inferior. Para desbloquear, introduza o PIN no teclado numérico ou físico – o carrinho mantém-se.'
        ], tipp: 'Esqueceu-se do PIN? Em «PIN esquecido», na página de início de sessão, contacte o administrador, que o repõe.'},
        dashboard: {titel: 'Painel', intro: 'O painel mostra o que há para fazer hoje: tarefas em atraso, marcações e orçamentos em aberto.', schritte: [
          'Toque nos mosaicos no topo para filtrar: Em atraso, Marcações de hoje, Tarefas em aberto, Marcações até domingo.',
          'Marque as tarefas concluídas ou adie-as com «Amanhã».',
          'Crie as suas próprias tarefas e elimine-as.',
          'Com a permissão «Delegar tarefas» (Admin, Gerência de loja, Chefe de equipa), atribua uma tarefa a um colega em «Atribuir a». Ele vê-a como «Delegada por …» e pode concluí-la, mas não apagá-la.',
          'As marcações cuja hora já passou ficam a vermelho.',
          'As tarefas de orçamento abrem diretamente o editor de orçamentos.'
        ], tipp: 'Todas as datas referem-se a hoje. «Passar tudo para hoje» traz as tarefas em atraso para o dia de hoje.'},
        kasse: {titel: 'Vender na caixa', intro: 'Procurar artigos, escolher a variante, adicionar ao carrinho.', schritte: [
          'Escolha uma categoria no topo (p. ex. Barcos, Pagaias) ou pesquise por nome ou fabricante.',
          'Leia um código de barras: o artigo é encontrado de imediato.',
          'Toque num artigo e escolha a variante, p. ex. comprimento, pá, tamanho, cor ou número de série.',
          'Altere quantidades ou remova linhas no carrinho à direita.',
          'Associe um cliente: o desconto registado é aplicado automaticamente.'
        ], tipp: 'Cada caixa tem o seu próprio carrinho. Mudar de caixa não o apaga.'},
        bezahlen: {titel: 'Pagamento e talão', intro: 'Escolher o meio de pagamento, concluir, emitir o talão.', schritte: [
          'Toque em «Pagar» e escolha cartão, numerário ou fatura.',
          'Numerário: introduza o valor entregue ou escolha um valor rápido. O troco aparece de imediato. Se faltar dinheiro, a conclusão fica bloqueada.',
          'Fatura: tem de haver um cliente associado e é necessária a permissão «Autorizar compra com fatura».',
          '«Nova operação» conclui a venda e mostra logo o talão.',
          'Na pré-visualização, imprima o talão ou abra-o num novo separador.'
        ], tipp: 'Cada talão tem um código QR. Os clientes leem-no para consultar o talão online.'},
        etiketten: {titel: 'IDs de pagaias e etiquetas QR', intro: 'Os barcos são identificados pelo número de série; as pagaias, por um ID próprio.', schritte: [
          'O ID da pagaia é criado a partir da data de venda ao emitir a fatura e consta da mesma.',
          'Se um orçamento aceite, uma fatura ou um talão incluir uma pagaia, surge «Imprimir etiquetas QR».',
          'Imprima as etiquetas na impressora de etiquetas e cole-as na pagaia.',
          'Para barcos, imprima a etiqueta com o número de série a partir da ficha do barco.'
        ], tipp: 'Cada impressão fica registada, incluindo reimpressões.'},
        angebote: {titel: 'Orçamentos', intro: 'Criar orçamentos, enviá-los e, quando aceites, passá-los para a caixa.', schritte: [
          'Crie um orçamento novo, escolha o cliente e adicione linhas com desconto.',
          'Verifique a pré-visualização em PDF e envie o orçamento.',
          'Mantenha o estado atualizado: Rascunho, Enviado, Aceite, Recusado, Expirado.',
          'Cobre os orçamentos aceites com «Passar para a caixa».'
        ], tipp: 'A validade vem das definições da loja.'},
        transaktionen: {titel: 'Transações e fecho do dia', intro: 'Consultar todas as vendas, reemitir talões, fechar o dia.', schritte: [
          'Escolha um período (p. ex. Hoje, 7 dias, Mês) e filtre por meio de pagamento ou estado.',
          'Abra uma linha para ver as linhas, os dados TSE e o talão.',
          'Inicie uma anulação ou devolução a partir do detalhe do talão (permissão «Anulação / devolução»).',
          'No fim do dia, faça o fecho diário.'
        ], tipp: 'Toque no cabeçalho de uma coluna para ordenar.'},
        stammdaten: {titel: 'Clientes, artigos e stock', intro: 'Manter os dados mestre para que a caixa e os documentos estejam corretos.', schritte: [
          'Clientes: criar, filtrar por tipo, registar desconto e condições de pagamento. Compras e barcos aparecem no detalhe.',
          'Gestão de artigos: artigos, fabricantes, preços, taxas de IVA e variantes.',
          'Stock: pesquisar por local, registar entradas e saídas.',
          'Barcos vendidos: consultar a ficha com número de série, garantia e histórico.'
        ], tipp: 'As listas de artigos podem ser exportadas em CSV.'},
        kalender: {titel: 'Calendário', intro: 'Marcações para levantamento, entrega, oficina, regata e feira.', schritte: [
          'Escolha um mês e toque num dia para ver as marcações.',
          'Filtre por tipo de marcação. A legenda explica as cores.',
          'Com «Editar» altere ou apague uma marcação; com «+ Marcação neste dia» crie uma nova. Os orçamentos a expirar alteram-se no orçamento.',
          'As marcações de regata e feira pertencem à caixa móvel; as restantes, à loja.'
        ], tipp: 'As marcações de hoje também aparecem no painel.'},
        berichte: {titel: 'Relatórios e painel de vendas', intro: 'Analisar as vendas e identificar tendências.', schritte: [
          'Relatórios: escolha um período e veja indicadores com tendência, evolução das vendas e artigos mais vendidos.',
          'Painel de vendas: filtre por período, local de venda, categoria e fabricante.',
          'Compare a evolução mensal, fabricantes, tendências de produto e produtos mais vendidos.',
          'Use a tabela de detalhe para pesquisar e ordenar valores.'
        ], tipp: 'Todos os valores são mostrados com cêntimos.'},
        einstellungen: {titel: 'Definições e permissões', intro: 'Gerir dispositivos, utilizadores e dados da loja. Todos os utilizadores veem o manual; as restantes áreas exigem permissão.', schritte: [
          'Configure impressoras, leitores de códigos de barras, pagamento com cartão e TSE.',
          'Utilizadores e funções: crie utilizadores, atribua caixas, defina PIN e conceda permissões na matriz. As alterações aplicam-se de imediato.',
          'Perfis: Admin, Gerência de loja, Chefe de equipa, Venda, Auxiliar, Compras. O chefe de equipa tem as permissões de venda e pode ainda delegar tarefas e ver relatórios, painel de vendas e registo do sistema.',
          'Loja: dados da empresa, logótipo, cor de destaque, horários, séries de numeração e textos para todos os documentos.',
          'Modelos de documentos: verifique talões, faturas e etiquetas.'
        ], tipp: 'O administrador define o idioma do sistema. Cada utilizador pode escolher o seu.'}
      }
    }
  }
};
