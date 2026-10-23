(function () {
  var L = `
Anmelden|Log in|Connexion|Iniciar sesión
1. Person wählen|1. Choose person|1. Choisir la personne|1. Elegir persona
2. PIN eingeben|2. Enter PIN|2. Saisir le PIN|2. Introducir PIN
PIN vergessen|Forgot PIN|PIN oublié|PIN olvidado
Anfrage gesendet|Request sent|Demande envoyée|Solicitud enviada
Wählen Sie Ihren Namen aus. Eine Filialleitung oder ein Admin setzt die PIN zurück.|Select your name. A store manager or admin will reset the PIN.|Sélectionnez votre nom. Un responsable ou un admin réinitialisera le PIN.|Seleccione su nombre. Un encargado o un administrador restablecerá el PIN.
Anfrage an Filialleitung senden|Send request to store manager|Envoyer la demande au responsable|Enviar solicitud al encargado
Zurück zum Login|Back to login|Retour à la connexion|Volver al inicio de sesión
Menü einklappen|Collapse menu|Réduire le menu|Contraer menú
PIN ändern|Change PIN|Modifier le PIN|Cambiar PIN
Neue PIN|New PIN|Nouveau PIN|Nuevo PIN
PIN bestätigen|Confirm PIN|Confirmer le PIN|Confirmar PIN
PIN speichern|Save PIN|Enregistrer le PIN|Guardar PIN
Stammdaten|Master data|Données de base|Datos maestros
Artikelverwaltung|Product management|Gestion des articles|Gestión de artículos
Artikel, Preise und Bestände pflegen.|Maintain products, prices and stock.|Gérer articles, prix et stocks.|Gestionar artículos, precios y existencias.
CSV-Export|CSV export|Export CSV|Exportar CSV
Rubriken verwalten|Manage categories|Gérer les rubriques|Gestionar categorías
Neuer Artikel|New product|Nouvel article|Nuevo artículo
Artikel|Product|Article|Artículo
Art.-Nr.|SKU|Réf.|Ref.
Kategorie|Category|Catégorie|Categoría
Preis|Price|Prix|Precio
Bestand|Stock|Stock|Existencias
Status|Status|Statut|Estado
Keine Artikel gefunden.|No products found.|Aucun article trouvé.|No se encontraron artículos.
Bestandsänderungen wirken in diesem Prototyp nur lokal — keine Anbindung an Warenwirtschaft oder TSE.|Stock changes only apply locally in this prototype — no connection to ERP or TSE.|Les modifications de stock sont locales dans ce prototype — aucune connexion à l'ERP ou à la TSE.|Los cambios de existencias solo son locales en este prototipo — sin conexión con ERP ni TSE.
Journal|Journal|Journal|Diario
Transaktionen|Transactions|Transactions|Transacciones
DSFinV-K Export|DSFinV-K export|Export DSFinV-K|Exportar DSFinV-K
Tagesabschluss|End of day|Clôture journalière|Cierre diario
Beleg|Receipt|Ticket|Recibo
Zeit|Time|Heure|Hora
Positionen|Items|Positions|Posiciones
Zahlart|Payment|Paiement|Pago
Betrag|Amount|Montant|Importe
Kunden|Customers|Clients|Clientes
Privatkunden, Vereine, Firmen und Verbände verwalten.|Manage private customers, clubs, companies and associations.|Gérer particuliers, clubs, entreprises et fédérations.|Gestionar particulares, clubes, empresas y federaciones.
Neuer Kunde|New customer|Nouveau client|Nuevo cliente
Kunde|Customer|Client|Cliente
Typ|Type|Type|Tipo
Kontakt|Contact|Contact|Contacto
Konditionen|Terms|Conditions|Condiciones
Umsatz Jahr|Revenue (year)|CA annuel|Ventas del año
Keine Kunden gefunden.|No customers found.|Aucun client trouvé.|No se encontraron clientes.
Auswertung|Analytics|Analyse|Análisis
Berichte|Reports|Rapports|Informes
Bericht als PDF|Report as PDF|Rapport en PDF|Informe en PDF
Umsatzverlauf|Revenue trend|Évolution du CA|Evolución de ventas
Zahlarten|Payment methods|Moyens de paiement|Formas de pago
Kundenarten|Customer types|Types de clients|Tipos de cliente
Kasse|Checkout|Caisse|Caja
Umsatz|Revenue|Chiffre d'affaires|Ventas
Bons|Receipts|Tickets|Tiques
Ø Bon|Avg. receipt|Ticket moyen|Tique medio
Anteil|Share|Part|Cuota
Storni|Voids|Annulations|Anulaciones
Top-Artikel|Top products|Meilleurs articles|Artículos principales
Warengruppen|Product groups|Groupes d'articles|Grupos de productos
Lager|Warehouse|Entrepôt|Almacén
Bestände je Lagerort, Reservierungen und Nachbestellung.|Stock per location, reservations and reordering.|Stocks par emplacement, réservations et réapprovisionnement.|Existencias por ubicación, reservas y reposición.
Inventur starten|Start stocktake|Lancer l'inventaire|Iniciar inventario
Wareneingang buchen|Book goods receipt|Enregistrer une réception|Registrar entrada
Lagerort|Location|Emplacement|Ubicación
Reserv.|Reserved|Réservé|Reserv.
Verfügbar|Available|Disponible|Disponible
Korrektur|Adjustment|Correction|Corrección
Nachbestellvorschlag|Reorder suggestion|Proposition de commande|Propuesta de pedido
Bestellvorschlag übernehmen|Apply order suggestion|Appliquer la proposition|Aplicar propuesta
Letzte Bewegungen|Recent movements|Derniers mouvements|Últimos movimientos
Einkauf|Purchasing|Achats|Compras
Lieferanten|Suppliers|Fournisseurs|Proveedores
Stammdaten, Konditionen und Sortiment je Hersteller.|Master data, terms and range per manufacturer.|Données, conditions et gamme par fabricant.|Datos, condiciones y surtido por fabricante.
Lieferant hinzufügen|Add supplier|Ajouter un fournisseur|Añadir proveedor
Lieferant|Supplier|Fournisseur|Proveedor
Ansprechpartner|Contact person|Interlocuteur|Persona de contacto
Sortiment|Range|Gamme|Surtido
Lieferzeit|Lead time|Délai|Plazo de entrega
Volumen|Volume|Volume|Volumen
Kontaktieren|Contact|Contacter|Contactar
Bearbeiten|Edit|Modifier|Editar
Kein Lieferant gefunden.|No supplier found.|Aucun fournisseur trouvé.|No se encontró proveedor.
Bootsakten|Boat records|Dossiers bateaux|Fichas de barcos
Verkaufte Boote|Boats sold|Bateaux vendus|Barcos vendidos
Jedes verkaufte Boot mit Kaufdatum, Wartungen und Reparaturen.|Every boat sold with purchase date, maintenance and repairs.|Chaque bateau vendu avec date d'achat, entretiens et réparations.|Cada barco vendido con fecha de compra, mantenimientos y reparaciones.
Boot|Boat|Bateau|Barco
Kaufdatum|Purchase date|Date d'achat|Fecha de compra
Garantie|Warranty|Garantie|Garantía
Service|Service|Service|Servicio
Historie|History|Historique|Historial
Vertrieb|Sales|Ventes|Ventas
Angebote|Quotes|Devis|Presupuestos
Angebote erstellen, als PDF versenden und nach Zusage direkt in die Kasse übernehmen.|Create quotes, send them as PDF and move them to checkout once accepted.|Créer des devis, les envoyer en PDF et les transférer en caisse après accord.|Crear presupuestos, enviarlos en PDF y pasarlos a caja al aceptarse.
Neues Angebot|New quote|Nouveau devis|Nuevo presupuesto
Angebot|Quote|Devis|Presupuesto
Gültig bis|Valid until|Valable jusqu'au|Válido hasta
Summe|Total|Total|Total
Kein Angebot gefunden.|No quote found.|Aucun devis trouvé.|No se encontró presupuesto.
Alle Angebote|All quotes|Tous les devis|Todos los presupuestos
Kunde & Konditionen|Customer & terms|Client et conditions|Cliente y condiciones
E-Mail|Email|E-mail|Correo
Zahlung|Payment|Paiement|Pago
Kundenrabatt|Customer discount|Remise client|Descuento cliente
Freie Position|Custom item|Ligne libre|Línea libre
Bezeichnung|Description|Désignation|Descripción
Menge|Qty|Qté|Cant.
Einzelpreis|Unit price|Prix unitaire|Precio unitario
Rabatt|Discount|Remise|Descuento
Anmerkung zum Angebot|Note on quote|Remarque sur le devis|Nota del presupuesto
Listenpreis|List price|Prix catalogue|Precio de lista
Netto|Net|HT|Neto
zzgl. 19 % USt|plus 19 % VAT|TVA 19 % en sus|más 19 % IVA
Gesamt brutto|Total incl. VAT|Total TTC|Total con IVA
In Kasse übernehmen|Move to checkout|Transférer en caisse|Pasar a caja
Angenommen|Accepted|Accepté|Aceptado
Abgelehnt|Declined|Refusé|Rechazado
Duplizieren|Duplicate|Dupliquer|Duplicar
Löschen|Delete|Supprimer|Eliminar
PDF erzeugen|Create PDF|Créer le PDF|Generar PDF
Per Mail senden|Send by email|Envoyer par e-mail|Enviar por correo
Datum|Date|Date|Fecha
Gesamt|Total|Total|Total
Gesamtbetrag|Grand total|Montant total|Importe total
Mit freundlichen Grüßen|Kind regards|Cordialement|Atentamente
System|System|Système|Sistema
Einstellungen|Settings|Paramètres|Ajustes
Drucker, ERP-Anbindung und Webshops für dieses Terminal.|Printers, ERP connection and web shops for this terminal.|Imprimantes, connexion ERP et boutiques en ligne pour ce terminal.|Impresoras, conexión ERP y tiendas online para este terminal.
Synchronisation|Synchronisation|Synchronisation|Sincronización
Anderes ERP-System anbinden|Connect another ERP|Connecter un autre ERP|Conectar otro ERP
Feldzuordnung öffnen|Open field mapping|Ouvrir le mappage|Abrir asignación de campos
Verbindung speichern|Save connection|Enregistrer la connexion|Guardar conexión
Barcode-Scanner|Barcode scanner|Lecteur de codes-barres|Escáner de códigos
Verhalten|Behaviour|Comportement|Comportamiento
Unterstützte Codes & Test|Supported codes & test|Codes pris en charge et test|Códigos admitidos y prueba
Letzte Scans|Recent scans|Derniers scans|Últimos escaneos
PIN-Sicherheit|PIN security|Sécurité du PIN|Seguridad del PIN
Benutzer|Users|Utilisateurs|Usuarios
Benutzer anlegen|Create user|Créer un utilisateur|Crear usuario
Vorname|First name|Prénom|Nombre
Nachname|Last name|Nom|Apellido
Kürzel|Initials|Initiales|Iniciales
Kassen-PIN|Till PIN|PIN caisse|PIN de caja
E-Mail-Adresse|Email address|Adresse e-mail|Correo electrónico
Rolle|Role|Rôle|Rol
Zugewiesene Kassen|Assigned tills|Caisses attribuées|Cajas asignadas
Abbrechen|Cancel|Annuler|Cancelar
Kassen|Tills|Caisses|Cajas
PIN|PIN|PIN|PIN
Aktion|Action|Action|Acción
Kasse anlegen|Add till|Ajouter une caisse|Añadir caja
Neue Kasse anlegen|Add new till|Ajouter une nouvelle caisse|Añadir nueva caja
Kassen-ID|Till ID|ID caisse|ID de caja
Standort / Bezeichnung|Location / name|Site / désignation|Ubicación / nombre
Bondrucker|Receipt printer|Imprimante tickets|Impresora de tiques
Kasse speichern|Save till|Enregistrer la caisse|Guardar caja
Speichern|Save|Enregistrer|Guardar
Rollen und Rechte|Roles and permissions|Rôles et droits|Roles y permisos
Rolle anlegen|Create role|Créer un rôle|Crear rol
Rollenname|Role name|Nom du rôle|Nombre del rol
Recht|Permission|Droit|Permiso
Mitarbeitende|Staff|Personnel|Personal
Arbeitszeiterfassung|Time tracking|Suivi du temps|Control horario
Heute|Today|Aujourd'hui|Hoy
Woche|Week|Semaine|Semana
Soll|Target|Objectif|Objetivo
Saldo|Balance|Solde|Saldo
Admin|Admin|Admin|Admin
Systemweite Einstellungen mit Vollzugriff — nur für das root-Konto sichtbar.|System-wide settings with full access — visible to the root account only.|Paramètres système avec accès complet — visibles uniquement pour le compte root.|Ajustes del sistema con acceso total — solo visibles para la cuenta root.
Systemsprachen|System languages|Langues du système|Idiomas del sistema
Systemprotokoll|System log|Journal système|Registro del sistema
Datenbank & Backup|Database & backup|Base de données et sauvegarde|Base de datos y copia
Dokumentvorlagen|Document templates|Modèles de documents|Plantillas de documentos
Vorlage öffnen|Open template|Ouvrir le modèle|Abrir plantilla
Vorschau|Preview|Aperçu|Vista previa
Vorlagen speichern|Save templates|Enregistrer les modèles|Guardar plantillas
Kartenzahlung|Card payment|Paiement par carte|Pago con tarjeta
Akzeptierte Karten|Accepted cards|Cartes acceptées|Tarjetas aceptadas
Kassenschnitt jetzt|Cash-up now|Clôture maintenant|Arqueo ahora
Pflichtfunktionen|Mandatory functions|Fonctions obligatoires|Funciones obligatorias
DSFinV-K exportieren|Export DSFinV-K|Exporter DSFinV-K|Exportar DSFinV-K
TSE-Konfiguration speichern|Save TSE configuration|Enregistrer la configuration TSE|Guardar configuración TSE
Webshops|Web shops|Boutiques en ligne|Tiendas online
Eigene Schnittstelle|Custom interface|Interface propre|Interfaz propia
Schnittstelle|Interface|Interface|Interfaz
Feldzuordnung|Field mapping|Mappage des champs|Asignación de campos
Zuordnung testen|Test mapping|Tester le mappage|Probar asignación
Zuordnung speichern|Save mapping|Enregistrer le mappage|Guardar asignación
Richtung|Direction|Sens|Dirección
Pflicht|Required|Obligatoire|Obligatorio
Aktiv|Active|Actif|Activo
Nicht zugeordnet|Not mapped|Non attribué|Sin asignar
Zuordnen|Map|Attribuer|Asignar
Kunde speichern|Save customer|Enregistrer le client|Guardar cliente
Belegvorschau|Receipt preview|Aperçu du ticket|Vista previa del recibo
Position|Item|Position|Posición
Einzel|Unit|Unitaire|Unidad
In neuem Tab|In new tab|Dans un nouvel onglet|En nueva pestaña
Drucken|Print|Imprimer|Imprimir
Rubriken|Categories|Rubriques|Categorías
Anlegen|Create|Créer|Crear
Auswahl|Selection|Sélection|Selección
Hinzufügen|Add|Ajouter|Añadir
Gruppe anlegen|Create group|Créer un groupe|Crear grupo
Entfernen|Remove|Retirer|Quitar
Alle PDFs erzeugen|Create all PDFs|Créer tous les PDF|Generar todos los PDF
Fertig|Done|Terminé|Listo
Beleghistorie|Receipt history|Historique des tickets|Historial de recibos
Ansehen|View|Voir|Ver
Gekaufte Produkte|Purchased products|Produits achetés|Productos comprados
TSE-Signatur|TSE signature|Signature TSE|Firma TSE
Belegsumme|Receipt total|Total du ticket|Total del recibo
Beleg drucken|Print receipt|Imprimer le ticket|Imprimir recibo
Storno|Void|Annulation|Anulación
Warenkorb|Cart|Panier|Carrito
Kundenliste öffnen|Open customer list|Ouvrir la liste des clients|Abrir lista de clientes
Noch keine Artikel|No items yet|Aucun article|Aún no hay artículos
Artikel antippen, um sie zu kassieren.|Tap products to ring them up.|Touchez les articles pour les encaisser.|Toque artículos para cobrarlos.
Übernehmen|Apply|Appliquer|Aplicar
Zwischensumme (netto)|Subtotal (net)|Sous-total (HT)|Subtotal (neto)
Karte|Card|Carte|Tarjeta
Bar|Cash|Espèces|Efectivo
Rechnung|Invoice|Facture|Factura
Beleg & Abschluss|Receipt & completion|Ticket et clôture|Recibo y cierre
Kasse wählen|Choose till|Choisir la caisse|Elegir caja
Kassen verwalten …|Manage tills …|Gérer les caisses …|Gestionar cajas …
Farbe|Colour|Couleur|Color
Größe|Size|Taille|Talla
Seriennummern|Serial numbers|Numéros de série|Números de serie
Zu zahlen|To pay|À payer|A pagar
Zurück|Back|Retour|Atrás
Beleg als PDF|Receipt as PDF|Ticket en PDF|Recibo en PDF
Neuer Vorgang|New sale|Nouvelle vente|Nueva venta
Artikel suchen oder scannen|Search or scan product|Rechercher ou scanner un article|Buscar o escanear artículo
Artikel, Hersteller oder Artikelnummer|Product, brand or SKU|Article, fabricant ou référence|Artículo, fabricante o referencia
Belegnummer, Kassierer oder Artikel|Receipt no., cashier or product|N° de ticket, caissier ou article|N.º de recibo, cajero o artículo
Name, Ort, Kundennummer oder Ansprechpartner|Name, city, customer no. or contact|Nom, ville, n° client ou interlocuteur|Nombre, ciudad, n.º de cliente o contacto
Artikel oder Artikelnummer|Product or SKU|Article ou référence|Artículo o referencia
Hersteller, Firma, Ansprechpartner oder Sortiment|Brand, company, contact or range|Fabricant, société, interlocuteur ou gamme|Fabricante, empresa, contacto o surtido
Modell, Seriennummer, Kunde oder Beleg|Model, serial no., customer or receipt|Modèle, n° de série, client ou ticket|Modelo, n.º de serie, cliente o recibo
Angebotsnummer, Kunde oder Artikel|Quote no., customer or product|N° de devis, client ou article|N.º de presupuesto, cliente o artículo
Kunde zuordnen — Name oder Nummer|Assign customer — name or number|Associer un client — nom ou numéro|Asignar cliente — nombre o número
Alle|All|Tous|Todos
Boote|Boats|Bateaux|Barcos
Paddel|Paddles|Pagaies|Palas
Bekleidung|Clothing|Vêtements|Ropa
Sicherheit|Safety|Sécurité|Seguridad
Zubehör|Accessories|Accessoires|Accesorios
Niedrig|Low|Faible|Bajo
Nicht verfügbar|Not available|Indisponible|No disponible
Abgeschlossen|Completed|Terminé|Completado
Offen|Open|Ouvert|Abierto
Storniert|Voided|Annulé|Anulado
Entwurf|Draft|Brouillon|Borrador
Versendet|Sent|Envoyé|Enviado
Abgelaufen|Expired|Expiré|Caducado
Drucker|Printers|Imprimantes|Impresoras
Benutzer & Rollen|Users & roles|Utilisateurs et rôles|Usuarios y roles
TSE & Kassensicherung|TSE & till security|TSE et sécurité caisse|TSE y seguridad de caja
ERP-Anbindung|ERP connection|Connexion ERP|Conexión ERP
Webshops & API|Web shops & API|Boutiques en ligne et API|Tiendas online y API
Abmelden|Log out|Se déconnecter|Cerrar sesión
Menü sortieren|Sort menu|Trier le menu|Ordenar menú
Sortieren beenden|Stop sorting|Terminer le tri|Terminar de ordenar
Monat|Month|Mois|Mes
Jahr|Year|Année|Año
Systemsprache|System language|Langue du système|Idioma del sistema
Standardsprache für Anmeldung, Belege und alle Benutzer ohne eigene Einstellung.|Default language for login, receipts and all users without their own setting.|Langue par défaut pour la connexion, les tickets et les utilisateurs sans réglage propre.|Idioma predeterminado para el inicio de sesión, los recibos y los usuarios sin ajuste propio.
Sprache je Benutzer|Language per user|Langue par utilisateur|Idioma por usuario
Überschreibt die Systemsprache für einzelne Personen.|Overrides the system language for individual people.|Remplace la langue du système pour certaines personnes.|Sustituye el idioma del sistema para personas concretas.
Wie System|Same as system|Comme le système|Igual que el sistema
Aktiv für alle|Active for all|Actif pour tous|Activo para todos
Übersetzungsstand|Translation coverage|Couverture de traduction|Cobertura de traducción
Protokolleinträge|Log entries|Entrées du journal|Entradas del registro
Warnungen|Warnings|Avertissements|Advertencias
Fehler|Errors|Erreurs|Errores
Sicherheitsereignisse|Security events|Événements de sécurité|Eventos de seguridad
Ereignis|Event|Événement|Evento
Ebene|Level|Niveau|Nivel
Zeitstempel|Timestamp|Horodatage|Marca de tiempo
Protokoll exportieren|Export log|Exporter le journal|Exportar registro
Datenbank|Database|Base de données|Base de datos
Backup-Plan|Backup plan|Plan de sauvegarde|Plan de copias
Jetzt sichern|Back up now|Sauvegarder maintenant|Copiar ahora
Integrität prüfen|Check integrity|Vérifier l'intégrité|Comprobar integridad
Wiederherstellen|Restore|Restaurer|Restaurar
Sicherungen|Backups|Sauvegardes|Copias de seguridad
Datenexport|Data export|Export de données|Exportación de datos
Größe|Size|Taille|Tamaño
Dauer|Duration|Durée|Duración
Ziel|Target|Destination|Destino
Prüfsumme|Checksum|Somme de contrôle|Suma de comprobación
Automatisch|Automatic|Automatique|Automática
Manuell|Manual|Manuelle|Manual
Vor Update|Before update|Avant mise à jour|Antes de actualizar
Verifiziert|Verified|Vérifiée|Verificada
Verkauf|Sales|Vente|Ventas
Filialleitung|Store manager|Responsable de magasin|Encargado de tienda
Aushilfe|Temporary staff|Auxiliaire|Auxiliar
PIN vergessen?|Forgot PIN?|PIN oublié ?|¿Olvidó el PIN?
Als root einloggen|Log in as root|Se connecter en root|Iniciar sesión como root
Online-Modus|Online mode|Mode en ligne|Modo en línea
Kalender|Calendar|Calendrier|Calendario
Schwimmwesten|Buoyancy aids|Gilets d’aide à la flottabilité|Chalecos salvavidas
Schuhe & Zubehör|Shoes & accessories|Chaussures et accessoires|Calzado y accesorios
Rennpaddel|Racing paddles|Pagaies de course|Palas de competición
Seekajak|Sea kayak|Kayak de mer|Kayak de mar
Tourenkajak|Touring kayak|Kayak de randonnée|Kayak de travesía
Seekajak Zweier|Double sea kayak|Kayak de mer biplace|Kayak de mar doble
Marathon-Kajak|Marathon kayak|Kayak marathon|Kayak de maratón
Wildwasser Riverrunner|Whitewater river runner|Eaux vives river runner|Aguas bravas river runner
Wildwasser Creeker|Whitewater creeker|Eaux vives creeker|Aguas bravas creeker
Mannschaftscanadier|Team canoe|Canoë d’équipe|Canoa de equipo
Rennsport-Paddel|Sprint paddle|Pagaie de course en ligne|Pala de sprint
Wildwasser-Paddel|Whitewater paddle|Pagaie eaux vives|Pala de aguas bravas
Slalom-Paddel|Slalom paddle|Pagaie de slalom|Pala de eslalon
Touren-/Seekajakpaddel|Touring/sea kayak paddle|Pagaie randonnée/mer|Pala de travesía/mar
Polo-Paddel|Polo paddle|Pagaie de kayak-polo|Pala de kayak-polo
Stechpaddel|Canoe paddle|Pagaie simple|Pala de canoa
Neoprenanzug|Wetsuit|Combinaison néoprène|Traje de neopreno
Neopren-Top|Neoprene top|Haut en néoprène|Camiseta de neopreno
Neopren-Hose|Neoprene trousers|Pantalon en néoprène|Pantalón de neopreno
Fleece & Midlayer|Fleece & mid-layer|Polaire et couche intermédiaire|Forro polar y capa intermedia
Technisches Top|Technical top|Haut technique|Camiseta técnica
Paddeljacke|Paddling jacket|Veste de pagaie|Chaqueta de palista
Paddelhose|Paddling trousers|Pantalon de pagaie|Pantalón de palista
Baselayer|Base layer|Sous-couche|Capa base
Wetterschutzjacke|Weatherproof jacket|Veste imperméable|Chaqueta impermeable
Isolationsjacke|Insulated jacket|Veste isolante|Chaqueta aislante
Technische Hose|Technical trousers|Pantalon technique|Pantalón técnico
Neoprenschuh|Neoprene boot|Chausson néoprène|Escarpín de neopreno
Bootsschuh|Deck shoe|Chaussure de pont|Náutico
Handschuhe|Gloves|Gants|Guantes
Kopfbedeckung|Headwear|Couvre-chef|Gorro
Packsack|Dry bag|Sac étanche|Bolsa estanca
Rucksack|Backpack|Sac à dos|Mochila
Tasche|Bag|Sac|Bolsa
Ausrüstung|Equipment|Équipement|Equipamiento
Cloud synchron|Cloud in sync|Cloud synchronisé|Nube sincronizada
Sperren|Lock|Verrouiller|Bloquear
Menü ein-/ausklappen|Collapse/expand menu|Réduire/développer le menu|Contraer/expandir menú
Zum Verschieben ziehen|Drag to move|Glisser pour déplacer|Arrastrar para mover
Menüreihenfolge anpassen|Change menu order|Modifier l’ordre du menu|Cambiar orden del menú
Produktdetails|Product details|Détails du produit|Detalles del producto
Farbe und Größe wählen|Choose colour and size|Choisir couleur et taille|Elegir color y talla
Zur Kasse|To checkout|Vers la caisse|Ir a caja
Kasse wechseln|Switch register|Changer de caisse|Cambiar caja
Bildschirm sperren|Lock screen|Verrouiller l’écran|Bloquear pantalla
Warenkorb öffnen/schließen|Open/close cart|Ouvrir/fermer le panier|Abrir/cerrar carrito
Umsatz-Dashboard|Sales dashboard|Tableau des ventes|Panel de ventas
Zum Kalender|To calendar|Vers le calendrier|Ir al calendario
Überfällig|Overdue|En retard|Vencido
Nur überfällige zeigen|Show overdue only|Afficher uniquement les retards|Mostrar solo vencidos
Termine heute|Appointments today|Rendez-vous aujourd’hui|Citas de hoy
Im Kalender öffnen|Open in calendar|Ouvrir dans le calendrier|Abrir en el calendario
Offene Aufgaben heute|Open tasks today|Tâches ouvertes aujourd’hui|Tareas pendientes hoy
Erledigte ausblenden|Hide completed|Masquer les terminées|Ocultar completadas
Termine bis Sonntag|Appointments until Sunday|Rendez-vous jusqu’à dimanche|Citas hasta el domingo
Woche im Kalender|Week in calendar|Semaine dans le calendrier|Semana en el calendario
Alle auf Montag|All to Monday|Tout à lundi|Todo al lunes
Öffnen|Open|Ouvrir|Abrir
Morgen|Tomorrow|Demain|Mañana
Bestand · Zählliste Brača und Jantex|Stock · count list Brača and Jantex|Stock · liste de comptage Brača et Jantex|Stock · lista de recuento Brača y Jantex
Sonntag · geschlossen. Termine und Aufgaben stehen am nächsten Werktag.|Sunday · closed. Appointments and tasks are on the next working day.|Dimanche · fermé. Rendez-vous et tâches sont reportés au prochain jour ouvré.|Domingo · cerrado. Citas y tareas pasan al siguiente día laborable.
Aufgaben heute|Tasks today|Tâches du jour|Tareas de hoy
Keine offenen Aufgaben für heute.|No open tasks for today.|Aucune tâche ouverte aujourd’hui.|No hay tareas pendientes para hoy.
Bis nächsten Sonntag|Until next Sunday|Jusqu’à dimanche prochain|Hasta el próximo domingo
Montag|Monday|Lundi|Lunes
Dienstag|Tuesday|Mardi|Martes
Nichts geplant.|Nothing planned.|Rien de prévu.|Nada previsto.
Mittwoch|Wednesday|Mercredi|Miércoles
Donnerstag|Thursday|Jeudi|Jueves
Freitag|Friday|Vendredi|Viernes
Samstag|Saturday|Samedi|Sábado
Wareneingang prüfen und einbuchen|Check and book goods receipt|Contrôler et enregistrer la réception|Revisar y registrar entrada de mercancía
Sonntag|Sunday|Dimanche|Domingo
Sonntag · geschlossen|Sunday · closed|Dimanche · fermé|Domingo · cerrado
Erledigt / offen|Done / open|Terminé / ouvert|Hecho / pendiente
Auf morgen verschieben|Move to tomorrow|Reporter à demain|Pasar a mañana
Aufgabe verteilen|Assign task|Attribuer la tâche|Asignar tarea
Artikel öffnen|Open products|Ouvrir les articles|Abrir artículos
Bestand öffnen|Open inventory|Ouvrir le stock|Abrir inventario
Kunde öffnen|Open customer|Ouvrir le client|Abrir cliente
Transaktionen öffnen|Open transactions|Ouvrir les transactions|Abrir transacciones
Neue Aufgabe, z. B. Lieferant Brača anrufen|New task, e.g. call supplier Brača|Nouvelle tâche, p. ex. appeler le fournisseur Brača|Nueva tarea, p. ej. llamar al proveedor Brača
Tag im Kalender öffnen|Open day in calendar|Ouvrir le jour dans le calendrier|Abrir día en el calendario
Artikel aktiv|Active products|Articles actifs|Artículos activos
Niedriger Bestand|Low stock|Stock faible|Stock bajo
Nachbestellung offen|Reorder pending|Réassort en attente|Pedido pendiente
Lagerwert (brutto)|Stock value (gross)|Valeur du stock (TTC)|Valor de stock (bruto)
Alle Standorte|All locations|Tous les sites|Todas las ubicaciones
Artikel bearbeiten|Edit product|Modifier l’article|Editar artículo
Buchungen von|Bookings of|Écritures de|Movimientos de
— je Kasse ein eigenes Journal.|— one journal per register.|— un journal par caisse.|— un diario por caja.
Buchungen heute|Bookings today|Écritures aujourd’hui|Movimientos de hoy
Umsatz heute (brutto)|Sales today (gross)|Ventes du jour (TTC)|Ventas de hoy (bruto)
ohne Storni|excluding voids|hors annulations|sin anulaciones
Offene Rechnungen|Open invoices|Factures ouvertes|Facturas pendientes
Zahlungseingang ausstehend|Payment pending|Paiement en attente|Pago pendiente
protokolliert|logged|journalisé|registrado
Zeitraum|Period|Période|Periodo
Gestern|Yesterday|Hier|Ayer
Dieser Monat|This month|Ce mois-ci|Este mes
Vormonat|Last month|Mois précédent|Mes anterior
Quartal|Quarter|Trimestre|Trimestre
Benutzerdefiniert|Custom|Personnalisé|Personalizado
Nach Beleg sortieren|Sort by receipt|Trier par ticket|Ordenar por ticket
Nach Zeit sortieren|Sort by time|Trier par heure|Ordenar por hora
Nach Positionen sortieren|Sort by items|Trier par lignes|Ordenar por líneas
Nach Zahlart sortieren|Sort by payment method|Trier par moyen de paiement|Ordenar por forma de pago
Nach Status sortieren|Sort by status|Trier par statut|Ordenar por estado
Nach Betrag sortieren|Sort by amount|Trier par montant|Ordenar por importe
Status ändern|Change status|Modifier le statut|Cambiar estado
Kunden gesamt|Total customers|Clients au total|Clientes en total
Vereine & Verbände|Clubs & associations|Clubs et fédérations|Clubes y federaciones
mit Rahmenrabatt|with framework discount|avec remise cadre|con descuento marco
alle Kunden|all customers|tous les clients|todos los clientes
Privat|Private|Particulier|Particular
Verein|Club|Club|Club
Firma|Company|Entreprise|Empresa
Verband|Association|Fédération|Federación
Schule|School|École|Escuela
Direktzahlung|Direct payment|Paiement direct|Pago directo
Noch kein Kauf|No purchase yet|Aucun achat pour l’instant|Sin compras aún
Sofortzahlung|Immediate payment|Paiement immédiat|Pago inmediato
Vereine, Firmen und Verbände können Rechnungskauf und Rahmenrabatte nutzen; Privatkunden zahlen direkt an der Kasse.|Clubs, companies and associations can buy on invoice and use framework discounts; private customers pay at the register.|Clubs, entreprises et fédérations peuvent acheter sur facture et bénéficier de remises cadre ; les particuliers paient en caisse.|Clubes, empresas y federaciones pueden comprar con factura y usar descuentos marco; los particulares pagan en caja.
Kundenakte öffnen|Open customer file|Ouvrir la fiche client|Abrir ficha de cliente
Kunde editieren|Edit customer|Modifier le client|Editar cliente
Offen beim Kunden|Pending with customer|En attente chez le client|Pendiente del cliente
Entwürfe|Drafts|Brouillons|Borradores
noch nicht versendet|not sent yet|pas encore envoyés|aún no enviados
Annahmequote|Acceptance rate|Taux d’acceptation|Tasa de aceptación
Design-Prototyp — Angebote sind Beispieldaten.|Design prototype — quotes are sample data.|Prototype de design — les devis sont des données d’exemple.|Prototipo de diseño — los presupuestos son datos de ejemplo.
Planung|Planning|Planification|Planificación
Lieferungen, Abholungen, Werkstatttermine, auslaufende Angebote und Messen im Monatsüberblick.|Deliveries, pick-ups, workshop appointments, expiring quotes and trade fairs at a glance for the month.|Livraisons, retraits, rendez-vous atelier, devis arrivant à échéance et salons sur le mois.|Entregas, recogidas, citas de taller, presupuestos que vencen y ferias del mes de un vistazo.
Termine für Verkaufsraum|Appointments for Verkaufsraum|Rendez-vous pour Verkaufsraum|Citas para Verkaufsraum
Ausgewählter Tag|Selected day|Jour sélectionné|Día seleccionado
+ Termin an diesem Tag|+ Appointment on this day|+ Rendez-vous ce jour|+ Cita en este día
Keine Termine an diesem Tag.|No appointments on this day.|Aucun rendez-vous ce jour.|No hay citas este día.
Vorheriger Monat|Previous month|Mois précédent|Mes anterior
Nächster Monat|Next month|Mois suivant|Mes siguiente
Termine für KASSE-03 Mobil|Appointments for KASSE-03 Mobil|Rendez-vous pour KASSE-03 Mobil|Citas para KASSE-03 Mobil
Umsatz, Zahlarten und Warengruppen — Auswertung für|Sales, payment methods and product groups — report for|Ventes, moyens de paiement et familles de produits — analyse pour|Ventas, formas de pago y grupos de productos — informe de
Alle Kassen|All registers|Toutes les caisses|Todas las cajas
Umsatz (brutto)|Sales (gross)|Ventes (TTC)|Ventas (bruto)
Ø Bonwert|Ø receipt value|Ø panier moyen|Ø ticket medio
Storni & Retouren|Voids & returns|Annulations et retours|Anulaciones y devoluciones
Firmen & Wiederverkauf|Companies & resellers|Entreprises et revendeurs|Empresas y reventa
Vereine|Clubs|Clubs|Clubes
Verbände & Schulen|Associations & schools|Fédérations et écoles|Federaciones y escuelas
Privatkunden|Private customers|Particuliers|Particulares
Boote (Nelo, Plastex, Lettmann)|Boats (Nelo, Plastex, Lettmann)|Bateaux (Nelo, Plastex, Lettmann)|Barcos (Nelo, Plastex, Lettmann)
Paddel (Jantex, Brača, Lettmann)|Paddles (Jantex, Brača, Lettmann)|Pagaies (Jantex, Brača, Lettmann)|Palas (Jantex, Brača, Lettmann)
Beispielauswertung auf Basis der Journaldaten dieses Prototyps — kein Ersatz für den steuerlichen Kassenbericht.|Sample report based on this prototype’s journal data — not a substitute for the fiscal register report.|Analyse d’exemple basée sur le journal de ce prototype — ne remplace pas le rapport de caisse fiscal.|Informe de ejemplo basado en el diario de este prototipo — no sustituye al informe fiscal de caja.
Nur diese Kasse auswerten|Report this register only|Analyser uniquement cette caisse|Analizar solo esta caja
Betriebsauswertung|Business report|Analyse d’exploitation|Informe de negocio
· Ladengeschäft & Regatten · Nelo, Plastex, Jantex, Brača-Sport|· Store & regattas · Nelo, Plastex, Jantex, Brača-Sport|· Magasin et régates · Nelo, Plastex, Jantex, Brača-Sport|· Tienda y regatas · Nelo, Plastex, Jantex, Brača-Sport
Verkaufsort|Point of sale|Lieu de vente|Punto de venta
Ladengeschäft|Store|Magasin|Tienda
Hersteller|Manufacturer|Fabricant|Fabricante
Alle Hersteller|All manufacturers|Tous les fabricants|Todos los fabricantes
Filter zurücksetzen|Reset filters|Réinitialiser les filtres|Restablecer filtros
Gesamtumsatz|Total sales|Chiffre d’affaires total|Ventas totales
(Details ›)|(Details ›)|(Détails ›)|(Detalles ›)
Verkaufsvorgänge im Zeitraum|Sales in period|Ventes sur la période|Ventas en el periodo
Umsatz je Transaktion|Sales per transaction|Ventes par transaction|Ventas por transacción
Regatta-Anteil|Regatta share|Part des régates|Cuota de regatas
Anteil am Gesamtumsatz|Share of total sales|Part du chiffre d’affaires|Cuota de las ventas totales
Umsatzverlauf nach Monat|Sales by month|Ventes par mois|Ventas por mes
Umsatz nach Hersteller|Sales by manufacturer|Ventes par fabricant|Ventas por fabricante
Paddel vs. Rennboote|Paddles vs. racing boats|Pagaies vs bateaux de course|Palas vs. barcos de competición
Umsatzanteil|Share of sales|Part des ventes|Cuota de ventas
Rubrik|Category|Rubrique|Categoría
– Produkt-Trends|– product trends|– tendances produits|– tendencias de producto
Geschätzter Monatsverlauf je Produkt, gewählter Zeitraum & Verkaufsort|Estimated monthly trend per product, selected period & point of sale|Évolution mensuelle estimée par produit, période et lieu de vente choisis|Evolución mensual estimada por producto, periodo y punto de venta elegidos
Top-Produkte (geschätzt, im gewählten Zeitraum)|Top products (estimated, selected period)|Meilleurs produits (estimés, période choisie)|Productos más vendidos (estimado, periodo elegido)
Produkt|Product|Produit|Producto
Umsatz (geschätzt)|Sales (estimated)|Ventes (estimées)|Ventas (estimadas)
Hinweis: Datenbasis ist ein fiktiver Testdatensatz (Umsatzliste Kanurennsport). Einzeltransaktionen wurden auf Basis der dokumentierten Monats-, Mengen- und Saisonlogik plausibel modelliert und stimmen in Summe mit den gegebenen Transaktionszahlen überein.|Note: the data is a fictitious test dataset (canoe sprint sales list). Individual transactions were modelled plausibly from the documented monthly, quantity and seasonal logic and add up to the given transaction totals.|Remarque : les données sont un jeu de test fictif (liste de ventes course en ligne). Les transactions ont été modélisées de façon plausible selon la logique mensuelle, de quantités et saisonnière documentée et correspondent aux totaux indiqués.|Nota: los datos son un conjunto de prueba ficticio (lista de ventas de piragüismo de velocidad). Las transacciones se modelaron de forma plausible según la lógica mensual, de cantidades y de temporada documentada y suman las cifras indicadas.
Details anzeigen|Show details|Afficher les détails|Mostrar detalles
Artikel im Lager|Products in stock|Articles en stock|Artículos en stock
Stück gesamt|Units in total|Unités au total|Unidades en total
Reserviert|Reserved|Réservé|Reservado
für Kundenaufträge|for customer orders|pour commandes clients|para pedidos de clientes
Unter Meldebestand|Below reorder level|Sous le seuil de réassort|Bajo stock mínimo
Nachbestellung prüfen|Check reorder|Vérifier le réassort|Revisar pedido
zu Verkaufspreisen|at retail prices|aux prix de vente|a precio de venta
Hauptlager|Main warehouse|Entrepôt principal|Almacén principal
Korrekturen im Prototyp wirken nur lokal und ersetzen keine dokumentierte Inventur.|Corrections in the prototype are local only and do not replace a documented stocktake.|Les corrections dans le prototype restent locales et ne remplacent pas un inventaire documenté.|Las correcciones en el prototipo son solo locales y no sustituyen un inventario documentado.
Einkaufsvolumen Jahr|Purchase volume (year)|Volume d’achats annuel|Volumen de compras anual
netto, laufendes Jahr|net, current year|HT, année en cours|neto, año en curso
Offene Bestellungen|Open purchase orders|Commandes ouvertes|Pedidos abiertos
Lieferung ausstehend|Delivery pending|Livraison en attente|Entrega pendiente
Ø Einkaufsrabatt|Ø purchase discount|Ø remise d’achat|Ø descuento de compra
auf Listenpreis|on list price|sur prix catalogue|sobre precio de lista
Rennkajaks, Renncanadier|Racing kayaks, racing canoes|Kayaks de course, canoës de course|Kayaks de competición, canoas de competición
Rennpaddel Alpha, Beta, Gamma|Racing paddles Alpha, Beta, Gamma|Pagaies de course Alpha, Beta, Gamma|Palas de competición Alpha, Beta, Gamma
Rennpaddel IV, XI Van Dusen|Racing paddles IV, XI Van Dusen|Pagaies de course IV, XI Van Dusen|Palas de competición IV, XI Van Dusen
Seekajaks, Tourenkajaks, Kanupolo, Wildwasser, Canadier, Paddel|Sea kayaks, touring kayaks, canoe polo, whitewater, canoes, paddles|Kayaks de mer, kayaks de randonnée, kayak-polo, eaux vives, canoës, pagaies|Kayaks de mar, kayaks de travesía, kayak-polo, aguas bravas, canoas, palas
Schwimmwesten, Neopren, Bekleidung, Schuhe, Zubehör|Buoyancy aids, neoprene, clothing, shoes, accessories|Gilets, néoprène, vêtements, chaussures, accessoires|Chalecos, neopreno, ropa, calzado, accesorios
Design-Prototyp — Lieferantenstammdaten und Einkaufspreise sind Beispieldaten.|Design prototype — supplier master data and purchase prices are sample data.|Prototype de design — les données fournisseurs et prix d’achat sont des exemples.|Prototipo de diseño — los datos de proveedores y precios de compra son de ejemplo.
Lieferantenakte öffnen|Open supplier file|Ouvrir la fiche fournisseur|Abrir ficha de proveedor
Umsatz Boote|Boat sales|Ventes de bateaux|Ventas de barcos
brutto, Listenpreis|gross, list price|TTC, prix catalogue|bruto, precio de lista
In Garantie|Under warranty|Sous garantie|En garantía
Gewährleistung offen|Warranty claims open|Garanties en cours|Garantías abiertas
Serviceleistungen|Services|Prestations de service|Servicios
abgelaufen|expired|expiré|vencido
Design-Prototyp — Bootsakten und Servicehistorien sind Beispieldaten.|Design prototype — boat files and service histories are sample data.|Prototype de design — les fiches bateaux et historiques de service sont des exemples.|Prototipo de diseño — las fichas de barcos e historiales de servicio son de ejemplo.
USB, Bluetooth oder Kamera am Tablet|USB, Bluetooth or tablet camera|USB, Bluetooth ou caméra de la tablette|USB, Bluetooth o cámara de la tableta
Kassen, Rollen, Rechte und PINs|Registers, roles, permissions and PINs|Caisses, rôles, droits et PIN|Cajas, roles, permisos y PIN
Firmendaten, Logo, Farben, Öffnungszeiten, Nummernkreise|Company data, logo, colours, opening hours, number ranges|Données de l’entreprise, logo, couleurs, horaires, numérotation|Datos de empresa, logotipo, colores, horarios, numeración
Belege, Rechnungen und Etiketten|Receipts, invoices and labels|Tickets, factures et étiquettes|Tickets, facturas y etiquetas
Terminal, Zahlarten und Limits|Terminal, payment methods and limits|Terminal, moyens de paiement et plafonds|Terminal, formas de pago y límites
Signatureinheit, DSFinV-K, Aufbewahrung|Signature unit, DSFinV-K, retention|Module de signature, DSFinV-K, conservation|Unidad de firma, DSFinV-K, conservación
Schnittstelle, Feldzuordnung, Abgleich|Interface, field mapping, sync|Interface, correspondance des champs, synchronisation|Interfaz, asignación de campos, sincronización
Bestände und Artikel im Onlinehandel|Stock and products in online retail|Stocks et articles en vente en ligne|Stock y artículos en venta online
Systemweite Root-Einstellungen|System-wide root settings|Réglages root pour tout le système|Ajustes root de todo el sistema
Design-Prototyp — Verbindungen und Testdrucke werden simuliert, es werden keine Daten übertragen.|Design prototype — connections and test prints are simulated, no data is transmitted.|Prototype de design — connexions et impressions test sont simulées, aucune donnée n’est transmise.|Prototipo de diseño — las conexiones e impresiones de prueba se simulan, no se transmiten datos.
Kassenbelege am Terminal, Belegausgabepflicht|Receipts at the terminal, mandatory receipt issue|Tickets au terminal, obligation de remise du ticket|Tickets en el terminal, obligación de entregar ticket
Bondrucker hinzufügen|Add receipt printer|Ajouter une imprimante à tickets|Añadir impresora de tickets
Bereit|Ready|Prêt|Listo
Testdruck|Test print|Impression test|Impresión de prueba
Deaktiviert|Disabled|Désactivé|Desactivado
Rechnungsdrucker hinzufügen|Add invoice printer|Ajouter une imprimante à factures|Añadir impresora de facturas
Preisetiketten, Artikel- und Lagerlabels mit Barcode|Price tags, product and storage labels with barcode|Étiquettes prix, articles et stock avec code-barres|Etiquetas de precio, artículo y almacén con código de barras
Labeldrucker hinzufügen|Add label printer|Ajouter une imprimante d’étiquettes|Añadir impresora de etiquetas
Paddel-IDs als QR-Etikett für den Schaft, wird beim Erstellen der Rechnung angesteuert|Paddle IDs as QR label for the shaft, printed when the invoice is created|ID de pagaie en étiquette QR pour le manche, imprimée à la création de la facture|ID de pala como etiqueta QR para la caña, se imprime al crear la factura
QR-Etikettendrucker hinzufügen|Add QR label printer|Ajouter une imprimante QR|Añadir impresora de etiquetas QR
Drucker aktiv|Printer active|Imprimante active|Impresora activa
EAN und Artikelnummern direkt in die Artikelsuche übernehmen.|Send EAN and product numbers straight to the product search.|Envoyer EAN et références directement dans la recherche d’articles.|Pasar EAN y números de artículo directamente a la búsqueda.
USB-Scanner verbunden|USB scanner connected|Scanner USB connecté|Escáner USB conectado
Testscan starten|Start test scan|Lancer un scan test|Iniciar escaneo de prueba
USB-Handscanner|USB handheld scanner|Scanner à main USB|Escáner de mano USB
Kabelgebunden, Tastatur-Emulation|Wired, keyboard emulation|Filaire, émulation clavier|Con cable, emulación de teclado
Bluetooth-Scanner|Bluetooth scanner|Scanner Bluetooth|Escáner Bluetooth
Kabellos für Lager und Regatta|Wireless for warehouse and regatta|Sans fil pour l’entrepôt et les régates|Inalámbrico para almacén y regata
Kamera von Telefon / Tablet|Phone / tablet camera|Caméra du téléphone / de la tablette|Cámara del teléfono / tableta
Ohne Zusatzgerät, direkt im Browser|No extra device, right in the browser|Sans appareil supplémentaire, dans le navigateur|Sin dispositivo extra, en el navegador
Rückkamera · Freigabe nötig|Rear camera · permission needed|Caméra arrière · autorisation requise|Cámara trasera · requiere permiso
Aktive Quelle|Active source|Source active|Fuente activa
Gerät|Device|Appareil|Dispositivo
Zeichenabschluss|Terminator|Caractère de fin|Carácter final
Enter (CR)|Enter (CR)|Entrée (CR)|Intro (CR)
Präfix / Suffix|Prefix / suffix|Préfixe / suffixe|Prefijo / sufijo
kein Präfix · CR|no prefix · CR|sans préfixe · CR|sin prefijo · CR
Artikelsuche der Kasse|Checkout product search|Recherche d’articles de la caisse|Búsqueda de artículos de caja
Artikel direkt in den Warenkorb|Add product straight to cart|Article directement dans le panier|Artículo directo al carrito
Ohne Rückfrage buchen, wenn eindeutig|Book without asking if unambiguous|Enregistrer sans confirmation si univoque|Registrar sin preguntar si es inequívoco
Signalton bei Erfolg|Beep on success|Bip en cas de succès|Pitido al acertar
Kurzer Piep, Vibration auf dem Tablet|Short beep, vibration on the tablet|Bip court, vibration sur la tablette|Pitido corto, vibración en la tableta
Unbekannte Codes melden|Report unknown codes|Signaler les codes inconnus|Avisar de códigos desconocidos
Hinweis mit Option „Artikel anlegen"|Notice with option “Create product”|Avis avec option « Créer l’article »|Aviso con opción «Crear artículo»
Varianten-Codes auflösen|Resolve variant codes|Résoudre les codes de variantes|Resolver códigos de variantes
Farbe und Größe aus dem EAN ableiten|Derive colour and size from the EAN|Déduire couleur et taille de l’EAN|Deducir color y talla del EAN
Scannen in der Inventur|Scanning during stocktake|Scan pendant l’inventaire|Escaneo en inventario
Zählmengen per Scan erfassen|Record counts by scanning|Saisir les quantités par scan|Registrar cantidades escaneando
Für die Kamera von Telefon oder Tablet ist eine Freigabe im Browser nötig; ohne Freigabe bleibt der Handscanner aktiv.|The phone or tablet camera needs browser permission; without it the handheld scanner stays active.|La caméra du téléphone ou de la tablette nécessite une autorisation du navigateur ; sans elle, le scanner à main reste actif.|La cámara del teléfono o tableta requiere permiso del navegador; sin él, el escáner de mano sigue activo.
Legt die Länge fest, die alle Kassen-PINs haben müssen.|Sets the length all register PINs must have.|Définit la longueur de tous les PIN de caisse.|Define la longitud de todos los PIN de caja.
Stellen|digits|chiffres|dígitos
Anmeldung an der Kasse per PIN · Rollen je Terminal.|Register login by PIN · roles per terminal.|Connexion à la caisse par PIN · rôles par terminal.|Acceso a caja con PIN · roles por terminal.
Terminals dieses Standorts — Grundlage für die Rollenvergabe.|Terminals at this location — basis for assigning roles.|Terminaux de ce site — base de l’attribution des rôles.|Terminales de esta ubicación — base para asignar roles.
Rechte antippen zum Ändern · gilt für alle zugewiesenen Kassen.|Tap permissions to change · applies to all assigned registers.|Touchez les droits pour les modifier · valable pour toutes les caisses attribuées.|Toque los permisos para cambiarlos · se aplica a todas las cajas asignadas.
Teamleitung|Team lead|Chef d’équipe|Jefe de equipo
Angebote erstellen & versenden|Create & send quotes|Créer et envoyer des devis|Crear y enviar presupuestos
Angebote in Kasse übernehmen|Load quotes into checkout|Reprendre les devis en caisse|Pasar presupuestos a caja
Artikel & Bestände pflegen|Maintain products & stock|Gérer articles et stocks|Gestionar artículos y stock
Aufgaben delegieren|Delegate tasks|Déléguer des tâches|Delegar tareas
Berichte einsehen|View reports|Consulter les rapports|Ver informes
Bestellbeleg personalisiert drucken|Print personalised order slip|Imprimer un bon de commande personnalisé|Imprimir hoja de pedido personalizada
Bootsakten & Seriennummern pflegen|Maintain boat files & serial numbers|Gérer fiches bateaux et numéros de série|Gestionar fichas de barcos y números de serie
Datenbank & Backup verwalten|Manage database & backup|Gérer base de données et sauvegarde|Gestionar base de datos y copia
Dokumentvorlagen bearbeiten|Edit document templates|Modifier les modèles de documents|Editar plantillas de documentos
Einstellungen & Benutzer|Settings & users|Réglages et utilisateurs|Ajustes y usuarios
Journal & Transaktionen einsehen|View journal & transactions|Consulter journal et transactions|Ver diario y transacciones
Kassen anlegen & bearbeiten|Create & edit registers|Créer et modifier des caisses|Crear y editar cajas
Kunden verwalten|Manage customers|Gérer les clients|Gestionar clientes
Lieferanten verwalten|Manage suppliers|Gérer les fournisseurs|Gestionar proveedores
Preis manuell ändern|Change price manually|Modifier le prix manuellement|Cambiar precio manualmente
QR-Etiketten drucken|Print QR labels|Imprimer des étiquettes QR|Imprimir etiquetas QR
Rabatt gewähren|Grant discount|Accorder une remise|Conceder descuento
Rechnungskauf freigeben|Approve purchase on invoice|Autoriser l’achat sur facture|Autorizar compra con factura
Shop-Einstellungen bearbeiten|Edit shop settings|Modifier les réglages de la boutique|Editar ajustes de tienda
Storno / Retoure|Void / return|Annulation / retour|Anulación / devolución
Systemprotokoll einsehen|View system log|Consulter le journal système|Ver registro del sistema
Systemsprache festlegen|Set system language|Définir la langue du système|Definir idioma del sistema
Tagesabschluss / Kassenschnitt|End of day / cash-up|Clôture journalière / arrêté de caisse|Cierre diario / arqueo
Transaktionsstatus ändern|Change transaction status|Modifier le statut de transaction|Cambiar estado de transacción
TSE & Exporte|TSE & exports|TSE et exports|TSE y exportaciones
Umsatz-Dashboard einsehen|View sales dashboard|Consulter le tableau des ventes|Ver panel de ventas
Verkauf kassieren|Ring up sales|Encaisser des ventes|Cobrar ventas
Admin behält immer alle Rechte. Storni, Preisänderungen und Kassenabschluss bleiben protokollpflichtig — jede Aktion wird mit Benutzer und Zeitstempel im Journal festgehalten.|Admin always keeps all permissions. Voids, price changes and register closing must be logged — every action is recorded in the journal with user and timestamp.|L’admin conserve toujours tous les droits. Annulations, modifications de prix et clôtures restent journalisées — chaque action est enregistrée avec utilisateur et horodatage.|El administrador conserva siempre todos los permisos. Anulaciones, cambios de precio y cierres quedan registrados — cada acción se anota en el diario con usuario y hora.
Feld antippen, um eine Schicht zu wählen oder eine individuelle Zeit einzutragen.|Tap a field to choose a shift or enter a custom time.|Touchez un champ pour choisir un horaire ou saisir une heure personnalisée.|Toque un campo para elegir un turno o introducir una hora personalizada.
Früh|Early|Matin|Mañana
Spät|Late|Soir|Tarde
Ganztag|Full day|Journée|Jornada completa
+ Schichtart|+ Shift type|+ Type d’horaire|+ Tipo de turno
Frei|Off|Repos|Libre
Kommen und Gehen wird je Benutzer mit Kasse und Uhrzeit protokolliert.|Clock-in and clock-out are logged per user with register and time.|Arrivées et départs sont enregistrés par utilisateur avec caisse et heure.|Entradas y salidas se registran por usuario con caja y hora.
Gehen|Clock out|Départ|Salida
Ausgestempelt|Clocked out|Pointé sortant|Fichado salida
Kommen|Clock in|Arrivée|Entrada
Rolle wechseln|Change role|Changer de rôle|Cambiar rol
Zuweisung ändern|Change assignment|Modifier l’affectation|Cambiar asignación
Benutzer bearbeiten|Edit user|Modifier l’utilisateur|Editar usuario
Benutzer aktiv|User active|Utilisateur actif|Usuario activo
Benutzer entfernen|Remove user|Supprimer l’utilisateur|Eliminar usuario
Kasse aktiv|Register active|Caisse active|Caja activa
Kasse umbenennen|Rename register|Renommer la caisse|Renombrar caja
Kasse entfernen|Remove register|Supprimer la caisse|Eliminar caja
Rolle entfernen|Remove role|Supprimer le rôle|Eliminar rol
Admin hat immer alle Rechte|Admin always has all permissions|L’admin a toujours tous les droits|El administrador siempre tiene todos los permisos
Recht entziehen|Revoke permission|Retirer le droit|Retirar permiso
Recht erteilen|Grant permission|Accorder le droit|Conceder permiso
Änderungen werden sofort gespeichert und gelten für alle Kassen und Dokumente.|Changes are saved immediately and apply to all registers and documents.|Les modifications sont enregistrées immédiatement et s’appliquent à toutes les caisses et documents.|Los cambios se guardan al momento y se aplican a todas las cajas y documentos.
Zurücksetzen|Reset|Réinitialiser|Restablecer
Beleg-Vorschau|Receipt preview|Aperçu du ticket|Vista previa del ticket
Erscheint als Absender auf Belegen, Rechnungen und Bestellungen.|Appears as sender on receipts, invoices and orders.|Apparaît comme expéditeur sur tickets, factures et commandes.|Aparece como remitente en tickets, facturas y pedidos.
Firmenname|Company name|Raison sociale|Nombre de la empresa
Zusatz / Branche|Addition / industry|Complément / secteur|Complemento / sector
Straße und Hausnummer|Street and number|Rue et numéro|Calle y número
PLZ und Ort|Postcode and city|Code postal et ville|Código postal y ciudad
Land|Country|Pays|País
Telefon|Phone|Téléphone|Teléfono
Website|Website|Site web|Sitio web
Pflichtangaben im Fuß von Rechnungen.|Mandatory details in the invoice footer.|Mentions obligatoires en pied de facture.|Datos obligatorios en el pie de factura.
USt-IdNr.|VAT ID|N° de TVA intracom.|NIF-IVA
Steuernummer|Tax number|Numéro fiscal|Número fiscal
Handelsregister|Commercial register|Registre du commerce|Registro mercantil
Geschäftsführung / Inhaber|Management / owner|Direction / propriétaire|Dirección / propietario
Für Rechnungen und Überweisungen.|For invoices and bank transfers.|Pour les factures et virements.|Para facturas y transferencias.
Kontoinhaber|Account holder|Titulaire du compte|Titular de la cuenta
Bank|Bank|Banque|Banco
Eigenes Logo und Akzentfarbe für alle Dokumente.|Own logo and accent colour for all documents.|Logo et couleur d’accent pour tous les documents.|Logotipo y color de acento propios para todos los documentos.
Standard: zykol-Logo|Default: zykol logo|Par défaut : logo zykol|Por defecto: logotipo zykol
· PNG, JPG oder SVG|· PNG, JPG or SVG|· PNG, JPG ou SVG|· PNG, JPG o SVG
Logo hochladen|Upload logo|Importer un logo|Subir logotipo
Akzentfarbe|Accent colour|Couleur d’accent|Color de acento
Für Bestellbelege, Abholscheine und den Dokumentfuß.|For order slips, pick-up slips and the document footer.|Pour bons de commande, bons de retrait et pied de document.|Para hojas de pedido, de recogida y el pie de documento.
Montag – Freitag|Monday – Friday|Lundi – vendredi|Lunes – viernes
Kassenbeleg|Receipt|Ticket de caisse|Ticket de caja
Standardwerte für Rechnungen, Angebote und Belege.|Defaults for invoices, quotes and receipts.|Valeurs par défaut pour factures, devis et tickets.|Valores predeterminados para facturas, presupuestos y tickets.
Zahlungsziel (Tage)|Payment terms (days)|Délai de paiement (jours)|Plazo de pago (días)
Angebot gültig (Tage)|Quote valid (days)|Validité du devis (jours)|Validez del presupuesto (días)
Rückgabefrist (Tage)|Return period (days)|Délai de retour (jours)|Plazo de devolución (días)
Danke-Text auf Belegen|Thank-you text on receipts|Texte de remerciement sur les tickets|Texto de agradecimiento en tickets
Zusätzliche Fußzeile|Additional footer|Pied de page supplémentaire|Pie de página adicional
Verhalten an der Kasse und Adresse für Beleg-QR-Codes.|Checkout behaviour and address for receipt QR codes.|Comportement en caisse et adresse des QR codes des tickets.|Comportamiento en caja y dirección para códigos QR de tickets.
Aus|Off|Désactivé|Desactivado
Basis-Adresse für Beleg-QR-Codes|Base address for receipt QR codes|Adresse de base des QR codes des tickets|Dirección base para códigos QR de tickets
geschlossen|closed|fermé|cerrado
Vielen Dank für Ihren Einkauf!|Thank you for your purchase!|Merci pour votre achat !|¡Gracias por su compra!
z. B. Eigentumsvorbehalt, Garantiehinweise|e.g. retention of title, warranty notes|p. ex. réserve de propriété, garantie|p. ej. reserva de dominio, garantía
Gemeinsames Layout für alle Druck- und PDF-Exporte.|Shared layout for all print and PDF exports.|Mise en page commune pour toutes les impressions et exports PDF.|Diseño común para todas las impresiones y exportaciones PDF.
Kassenbericht & Z-Bon|Register report & Z report|Rapport de caisse et ticket Z|Informe de caja y cierre Z
Artikelliste|Product list|Liste des articles|Lista de artículos
Stammdaten-Export|Master data export|Export des données de base|Exportación de datos maestros
Bestands- & Inventurliste|Stock & stocktake list|Liste de stock et d’inventaire|Lista de stock e inventario
Zählprotokoll|Count record|Procès-verbal de comptage|Acta de recuento
DSFinV-K Protokoll|DSFinV-K log|Journal DSFinV-K|Registro DSFinV-K
Betriebsprüfung|Tax audit|Contrôle fiscal|Inspección fiscal
Layout & Briefkopf|Layout & letterhead|Mise en page et en-tête|Diseño y membrete
Papierformat|Paper size|Format du papier|Tamaño de papel
Seitenrand|Margin|Marge|Margen
zykol-logo.png · Kopfzeile links|zykol-logo.png · header left|zykol-logo.png · en-tête à gauche|zykol-logo.png · cabecera izquierda
Schriften|Fonts|Polices|Fuentes
Absenderzeile|Sender line|Ligne d’expéditeur|Línea de remitente
Inhalte auf allen Dokumenten|Content on all documents|Contenu de tous les documents|Contenido en todos los documentos
Logo in der Kopfzeile|Logo in header|Logo dans l’en-tête|Logotipo en la cabecera
Auf jeder gedruckten Seite|On every printed page|Sur chaque page imprimée|En cada página impresa
Seitenzahl in der Fußzeile|Page number in footer|Numéro de page en pied|Número de página en el pie
Bankverbindung im Fuß|Bank details in footer|Coordonnées bancaires en pied|Datos bancarios en el pie
Pflicht auf Rechnungen|Required on invoices|Obligatoire sur les factures|Obligatorio en facturas
TSE-QR-Code auf Belegen|TSE QR code on receipts|QR code TSE sur les tickets|Código QR TSE en tickets
Prüfwert nach DSFinV-K|Check value per DSFinV-K|Valeur de contrôle DSFinV-K|Valor de verificación DSFinV-K
Rechtliche Hinweise|Legal notes|Mentions légales|Avisos legales
Zahlungsziel, Eigentumsvorbehalt, Rückgabe|Payment terms, retention of title, returns|Délai de paiement, réserve de propriété, retour|Plazo de pago, reserva de dominio, devolución
Zahlungsdienstleister und Terminal für EC- und Kreditkarten.|Payment provider and terminal for debit and credit cards.|Prestataire de paiement et terminal pour cartes bancaires.|Proveedor de pagos y terminal para tarjetas de débito y crédito.
Terminal verbunden · bereit|Terminal connected · ready|Terminal connecté · prêt|Terminal conectado · listo
Testbuchung senden|Send test transaction|Envoyer une transaction test|Enviar transacción de prueba
Zahlungsdienstleister|Payment provider|Prestataire de paiement|Proveedor de pagos
Händler-Nr. (VU-Nummer)|Merchant no. (acquirer ID)|N° de commerçant (VAD)|N.º de comercio
Terminal-ID|Terminal ID|ID du terminal|ID del terminal
Terminal-Modell|Terminal model|Modèle de terminal|Modelo de terminal
Verbindung|Connection|Connexion|Conexión
Abrechnungskonto|Settlement account|Compte de règlement|Cuenta de liquidación
Girocard-Verfahren|Girocard method|Procédure girocard|Procedimiento girocard
girocard (electronic cash) + Kontaktlos|girocard (electronic cash) + contactless|girocard (electronic cash) + sans contact|girocard (electronic cash) + sin contacto
Auszahlung|Payout|Versement|Liquidación
wie zugrunde liegende Karte|as underlying card|comme la carte sous-jacente|como la tarjeta subyacente
Abwicklung & Kassenschnitt|Settlement & cash-up|Règlement et arrêté de caisse|Liquidación y arqueo
Letzte Transaktion|Last transaction|Dernière transaction|Última transacción
Umsatz Karte heute|Card sales today|Ventes carte aujourd’hui|Ventas con tarjeta hoy
Kassenschnitt|Cash-up|Arrêté de caisse|Arqueo
Letzter Kassenschnitt|Last cash-up|Dernier arrêté de caisse|Último arqueo
Trinkgeld / Tip|Tip|Pourboire|Propina
deaktiviert|disabled|désactivé|desactivado
Zahlung ohne Netz|Offline payment|Paiement hors ligne|Pago sin conexión
Technische Sicherheitseinrichtung (TSE)|Technical security device (TSE)|Dispositif de sécurité technique (TSE)|Dispositivo de seguridad técnica (TSE)
Aktiv · Zertifikat gültig|Active · certificate valid|Actif · certificat valide|Activo · certificado válido
Selbsttest starten|Start self-test|Lancer l’autotest|Iniciar autotest
Hardware-TSE (USB)|Hardware TSE (USB)|TSE matérielle (USB)|TSE de hardware (USB)
Hardware-TSE (microSD)|Hardware TSE (microSD)|TSE matérielle (microSD)|TSE de hardware (microSD)
Keine TSE|No TSE|Pas de TSE|Sin TSE
TSE-Typ|TSE type|Type de TSE|Tipo de TSE
Seriennummer|Serial number|Numéro de série|Número de serie
Zertifikat gültig bis|Certificate valid until|Certificat valide jusqu’au|Certificado válido hasta
Kassen-ID (Client)|Register ID (client)|ID de caisse (client)|ID de caja (cliente)
Signaturzähler|Signature counter|Compteur de signatures|Contador de firmas
Verbleibende Signaturen|Remaining signatures|Signatures restantes|Firmas restantes
unbegrenzt (Cloud)|unlimited (cloud)|illimité (cloud)|ilimitado (nube)
Meldung ans Finanzamt|Report to tax office|Déclaration au fisc|Notificación a Hacienda
Zeitsynchronisation|Time synchronisation|Synchronisation de l’heure|Sincronización horaria
Belegausgabepflicht|Mandatory receipt issue|Obligation de remise du ticket|Obligación de entregar ticket
Beleg wird bei jedem Vorgang erstellt|A receipt is created for every transaction|Un ticket est créé à chaque opération|Se crea un ticket en cada operación
QR-Code auf dem Beleg|QR code on receipt|QR code sur le ticket|Código QR en el ticket
Prüfwert nach DSFinV-K auf dem Bon drucken|Print DSFinV-K check value on receipt|Imprimer la valeur de contrôle DSFinV-K sur le ticket|Imprimir valor DSFinV-K en el ticket
Offline-Signaturen zwischenspeichern|Cache offline signatures|Mettre en cache les signatures hors ligne|Guardar firmas sin conexión
Täglicher DSFinV-K-Export|Daily DSFinV-K export|Export DSFinV-K quotidien|Exportación DSFinV-K diaria
Kasse ohne TSE sperren|Lock register without TSE|Bloquer la caisse sans TSE|Bloquear caja sin TSE
Kein Verkauf, wenn die Signatureinheit ausfällt|No sales if the signature unit fails|Aucune vente si le module de signature tombe en panne|Sin ventas si falla la unidad de firma
Protokoll & Export|Log & export|Journal et export|Registro y exportación
Letzte Signatur|Last signature|Dernière signature|Última firma
Letzter Selbsttest|Last self-test|Dernier autotest|Último autotest
Letzter DSFinV-K-Export|Last DSFinV-K export|Dernier export DSFinV-K|Última exportación DSFinV-K
Kassenabschluss|Register closing|Clôture de caisse|Cierre de caja
täglich, automatisch|daily, automatic|quotidien, automatique|diario, automático
Aufbewahrung|Retention|Conservation|Conservación
Primäre Warenwirtschaft ·|Primary inventory system ·|Gestion commerciale principale ·|Sistema de gestión principal ·
Verbindung testen|Test connection|Tester la connexion|Probar conexión
Mandant|Client|Mandant|Cliente
API-Endpunkt|API endpoint|Point de terminaison API|Endpoint de la API
API-Schlüssel|API key|Clé API|Clave API
Kassen-ID / Terminal|Register ID / terminal|ID de caisse / terminal|ID de caja / terminal
Abgleichintervall|Sync interval|Intervalle de synchronisation|Intervalo de sincronización
Belegexport|Receipt export|Export des tickets|Exportación de tickets
Artikel & Preise|Products & prices|Articles et prix|Artículos y precios
Stammdaten und Varianten aus zykol.ERP übernehmen|Import master data and variants from zykol.ERP|Reprendre données de base et variantes de zykol.ERP|Importar datos maestros y variantes de zykol.ERP
Bestände|Stock|Stocks|Stock
Bidirektional, Lagerorte inklusive|Bidirectional, including storage locations|Bidirectionnel, emplacements inclus|Bidireccional, incluidas ubicaciones
Vereine, Firmen und Verbände mit Konditionen|Clubs, companies and associations with terms|Clubs, entreprises et fédérations avec conditions|Clubes, empresas y federaciones con condiciones
Belege & Buchungen|Receipts & bookings|Tickets et écritures|Tickets y movimientos
Kassenjournal an die Finanzbuchhaltung|Register journal to accounting|Journal de caisse vers la comptabilité|Diario de caja a contabilidad
Offene Posten|Open items|Postes ouverts|Partidas abiertas
Zahlungsstatus von Rechnungskunden zurücklesen|Read back payment status of invoice customers|Relire le statut de paiement des clients sur facture|Leer el estado de pago de clientes con factura
Alternativ zu zykol.ERP — Zugangsdaten je System.|Alternative to zykol.ERP — credentials per system.|Alternative à zykol.ERP — identifiants par système.|Alternativa a zykol.ERP — credenciales por sistema.
Individuell (REST)|Custom (REST)|Personnalisé (REST)|Personalizado (REST)
Verbindungsart|Connection type|Type de connexion|Tipo de conexión
Endpunkt|Endpoint|Point de terminaison|Endpoint
Mandant / Berater-Nr.|Client / adviser no.|Mandant / n° de conseiller|Cliente / n.º de asesor
Datenumfang|Data scope|Périmètre des données|Alcance de datos
Artikel, Bestand, Belege|Products, stock, receipts|Articles, stock, tickets|Artículos, stock, tickets
Konfliktregel|Conflict rule|Règle de conflit|Regla de conflicto
ERP führt bei Preisen, Kasse bei Beständen|ERP leads on prices, register on stock|L’ERP prime pour les prix, la caisse pour les stocks|El ERP manda en precios, la caja en stock
Verbindung aktiv|Connection active|Connexion active|Conexión activa
Artikel, Bestände und Bestellungen mit dem Onlineshop abgleichen.|Sync products, stock and orders with the online shop.|Synchroniser articles, stocks et commandes avec la boutique en ligne.|Sincronizar artículos, stock y pedidos con la tienda online.
Aktiv · Bestände live|Active · live stock|Actif · stocks en direct|Activo · stock en vivo
Inaktiv|Inactive|Inactif|Inactivo
nicht verbunden|not connected|non connecté|no conectado
Zugangsdaten erforderlich|Credentials required|Identifiants requis|Se requieren credenciales
REST oder Webhook für Systeme ohne fertigen Konnektor.|REST or webhook for systems without a ready-made connector.|REST ou webhook pour les systèmes sans connecteur prêt.|REST o webhook para sistemas sin conector listo.
In der Anleitung suchen|Search the manual|Rechercher dans le guide|Buscar en el manual
Standardsprache und Sprache je Benutzer festlegen.|Set default language and language per user.|Définir la langue par défaut et la langue par utilisateur.|Definir idioma predeterminado y por usuario.
Alle sicherheitsrelevanten Aktionen im Volltext einsehen.|View all security-relevant actions in full.|Consulter en détail toutes les actions sensibles.|Ver en detalle todas las acciones relevantes para la seguridad.
Sicherungen, Wiederherstellung und Datenexport.|Backups, restore and data export.|Sauvegardes, restauration et export de données.|Copias, restauración y exportación de datos.
Übersetzt werden Navigation, Überschriften, Beschriftungen und Schaltflächen. Artikel-, Kunden- und Belegdaten bleiben in der erfassten Sprache.|Navigation, headings, labels and buttons are translated. Product, customer and receipt data stay in the language entered.|La navigation, les titres, libellés et boutons sont traduits. Les données articles, clients et tickets restent dans la langue saisie.|Se traducen navegación, títulos, etiquetas y botones. Los datos de artículos, clientes y tickets quedan en el idioma introducido.
Als Angebot speichern|Save as quote|Enregistrer comme devis|Guardar como presupuesto
Warenkorb einklappen|Collapse cart|Réduire le panier|Contraer carrito
Separaten Bestellbeleg mit Personalisierung drucken|Print separate order slip with personalisation|Imprimer un bon de commande séparé avec personnalisation|Imprimir hoja de pedido aparte con personalización
Warenkorb als Angebot (Entwurf) speichern|Save cart as quote (draft)|Enregistrer le panier comme devis (brouillon)|Guardar carrito como presupuesto (borrador)
Separat zum Kassenbeleg ·|Separate from the receipt ·|Séparé du ticket de caisse ·|Aparte del ticket de caja ·
Schließen|Close|Fermer|Cerrar
Drucken / PDF|Print / PDF|Imprimer / PDF|Imprimir / PDF
personalisiert|personalised|personnalisé|personalizado
Standard|Standard|Standard|Estándar
Kunde & Übergabe|Customer & handover|Client et remise|Cliente y entrega
Druckoptionen|Print options|Options d’impression|Opciones de impresión
mit Preisen · Unterschrift|with prices · signature|avec prix · signature|con precios · firma
Kunde: ______________________|Customer: ______________________|Client : ______________________|Cliente: ______________________
Bestell-Nr.|Order no.|N° de commande|N.º de pedido
Abholbereit ab|Ready for pick-up from|Disponible à partir du|Listo para recoger desde
Übergabe|Handover|Remise|Entrega
Bearbeitet von|Handled by|Traité par|Atendido por
Vielen Dank für Ihre Bestellung. Wir melden uns, sobald Ihre Ware abholbereit ist.|Thank you for your order. We will contact you as soon as your goods are ready for pick-up.|Merci pour votre commande. Nous vous contacterons dès que vos articles seront prêts.|Gracias por su pedido. Le avisaremos en cuanto su mercancía esté lista para recoger.
Artikel & Personalisierung|Products & personalisation|Articles et personnalisation|Artículos y personalización
Ort, Datum|Place, date|Lieu, date|Lugar, fecha
Unterschrift Kunde – Personalisierung geprüft|Customer signature – personalisation checked|Signature du client – personnalisation vérifiée|Firma del cliente – personalización revisada
· Kein Kassenbeleg.|· Not a receipt.|· Pas un ticket de caisse.|· No es un ticket de caja.
Bestellung online abrufen|View order online|Consulter la commande en ligne|Ver pedido en línea
Im Kalender|In calendar|Dans le calendrier|En el calendario
Wechselgeld zählen und Kasse öffnen|Count change and open register|Compter le fonds de caisse et ouvrir la caisse|Contar el cambio y abrir caja
Bestellvorschläge für Nelo und Plastex prüfen|Check order suggestions for Nelo and Plastex|Vérifier les propositions de commande Nelo et Plastex|Revisar propuestas de pedido para Nelo y Plastex
Sonntag · Laden geschlossen, Regatta|Sunday · store closed, regatta|Dimanche · magasin fermé, régate|Domingo · tienda cerrada, regata
Einstellungen öffnen|Open settings|Ouvrir les réglages|Abrir ajustes
Lieferanten öffnen|Open suppliers|Ouvrir les fournisseurs|Abrir proveedores
Reformationstag · geschlossen. Termine und Aufgaben stehen am nächsten Werktag.|Reformation Day · closed. Appointments and tasks are on the next working day.|Fête de la Réformation · fermé. Rendez-vous et tâches sont reportés au prochain jour ouvré.|Día de la Reforma · cerrado. Citas y tareas pasan al siguiente día laborable.
Ware bereitstellen|Prepare goods|Préparer la marchandise|Preparar la mercancía
Im Kalender zeigen|Show in calendar|Afficher dans le calendrier|Mostrar en el calendario
Verkaufsfläche|Sales floor|Surface de vente|Zona de venta
Lieferung|Delivery|Livraison|Entrega
Abholung|Pick-up|Retrait|Recogida
Werkstatt|Workshop|Atelier|Taller
Regatta|Regatta|Régate|Regata
Messe|Trade fair|Salon|Feria
Regatta / Messe|Regatta / trade fair|Régate / salon|Regata / feria
Alle Lagerorte|All storage locations|Tous les emplacements|Todas las ubicaciones
Rechnungsdrucker|Invoice printer|Imprimante à factures|Impresora de facturas
Labeldrucker|Label printer|Imprimante d’étiquettes|Impresora de etiquetas
QR-Etikettendrucker|QR label printer|Imprimante d’étiquettes QR|Impresora de etiquetas QR
Firma & Kontakt|Company & contact|Entreprise et contact|Empresa y contacto
Rechtliches & Steuern|Legal & tax|Juridique et fiscal|Legal e impuestos
Bankverbindung|Bank details|Coordonnées bancaires|Datos bancarios
Logo & Farben|Logo & colours|Logo et couleurs|Logotipo y colores
Öffnungszeiten|Opening hours|Horaires d’ouverture|Horario de apertura
Nummernkreise|Number ranges|Numérotation|Numeración
Bestellbeleg|Order slip|Bon de commande|Hoja de pedido
Konditionen & Texte|Terms & texts|Conditions et textes|Condiciones y textos
Kasse & Online|Checkout & online|Caisse et en ligne|Caja y online
Portugal|Portugal|Portugal|Portugal
Polen|Poland|Pologne|Polonia
Serbien|Serbia|Serbie|Serbia
Deutschland|Germany|Allemagne|Alemania
Niederlande|Netherlands|Pays-Bas|Países Bajos
Ansprechpartner (Demo)|Contact person (demo)|Interlocuteur (démo)|Persona de contacto (demo)
ganztägig|all day|toute la journée|todo el día
Tagesabschluss Kasse durchführen|Do end-of-day register closing|Effectuer la clôture journalière|Realizar el cierre diario de caja
Backup-Protokoll prüfen|Check backup log|Vérifier le journal de sauvegarde|Revisar registro de copias
TSE-Export für Steuerberater erstellen|Create TSE export for tax adviser|Créer l’export TSE pour le comptable|Crear exportación TSE para el asesor fiscal
Inventur Paddelschrank abschließen|Finish stocktake of paddle cabinet|Terminer l’inventaire de l’armoire à pagaies|Terminar inventario del armario de palas
Reklamation Nelo beantworten|Reply to Nelo complaint|Répondre à la réclamation Nelo|Responder a la reclamación de Nelo
Offene Stornos freigeben|Approve open voids|Valider les annulations en attente|Aprobar anulaciones pendientes
Okt|Oct|Oct|Oct
Nov|Nov|Nov|Nov
Dez|Dec|Déc|Dic
Jan|Jan|Janv|Ene
Feb|Feb|Févr|Feb
Mär|Mar|Mars|Mar
Apr|Apr|Avr|Abr
Mai|May|Mai|May
Jun|Jun|Juin|Jun
Jul|Jul|Juil|Jul
Aug|Aug|Août|Ago
Sep|Sep|Sept|Sep
Mo|Mon|Lun|Lun
Di|Tue|Mar|Mar
Mi|Wed|Mer|Mié
Do|Thu|Jeu|Jue
Fr|Fri|Ven|Vie
Sa|Sat|Sam|Sáb
So|Sun|Dim|Dom
Light|Light|Clair|Claro
Dark|Dark|Sombre|Oscuro
Kanupolo|Canoe polo|Kayak-polo|Kayak-polo
Canadier|Canoe|Canoë|Canoa
Status|Status|Statut|Estado
Logo|Logo|Logo|Logotipo
`;
  var P = `
Anmelden|Iniciar sessão
1. Person wählen|1. Escolher pessoa
2. PIN eingeben|2. Introduzir PIN
PIN vergessen|PIN esquecido
Anfrage gesendet|Pedido enviado
Wählen Sie Ihren Namen aus. Eine Filialleitung oder ein Admin setzt die PIN zurück.|Selecione o seu nome. Um gerente ou administrador irá repor o PIN.
Anfrage an Filialleitung senden|Enviar pedido ao gerente
Zurück zum Login|Voltar ao início de sessão
Menü einklappen|Recolher menu
PIN ändern|Alterar PIN
Neue PIN|Novo PIN
PIN bestätigen|Confirmar PIN
PIN speichern|Guardar PIN
Stammdaten|Dados mestre
Artikelverwaltung|Gestão de artigos
Artikel, Preise und Bestände pflegen.|Gerir artigos, preços e stock.
CSV-Export|Exportar CSV
Rubriken verwalten|Gerir categorias
Neuer Artikel|Novo artigo
Artikel|Artigo
Art.-Nr.|Ref.
Kategorie|Categoria
Preis|Preço
Bestand|Stock
Status|Estado
Keine Artikel gefunden.|Nenhum artigo encontrado.
Bestandsänderungen wirken in diesem Prototyp nur lokal — keine Anbindung an Warenwirtschaft oder TSE.|As alterações de stock são apenas locais neste protótipo — sem ligação ao ERP nem à TSE.
Journal|Diário
Transaktionen|Transações
DSFinV-K Export|Exportar DSFinV-K
Tagesabschluss|Fecho do dia
Beleg|Talão
Zeit|Hora
Positionen|Linhas
Zahlart|Pagamento
Betrag|Montante
Kunden|Clientes
Privatkunden, Vereine, Firmen und Verbände verwalten.|Gerir particulares, clubes, empresas e federações.
Neuer Kunde|Novo cliente
Kunde|Cliente
Typ|Tipo
Kontakt|Contacto
Konditionen|Condições
Umsatz Jahr|Vendas do ano
Keine Kunden gefunden.|Nenhum cliente encontrado.
Auswertung|Análise
Berichte|Relatórios
Bericht als PDF|Relatório em PDF
Umsatzverlauf|Evolução das vendas
Zahlarten|Formas de pagamento
Kundenarten|Tipos de cliente
Kasse|Caixa
Umsatz|Vendas
Bons|Talões
Ø Bon|Talão médio
Anteil|Quota
Storni|Anulações
Top-Artikel|Artigos principais
Warengruppen|Grupos de artigos
Lager|Armazém
Bestände je Lagerort, Reservierungen und Nachbestellung.|Stock por local, reservas e reposição.
Inventur starten|Iniciar inventário
Wareneingang buchen|Registar entrada
Lagerort|Local
Reserv.|Reserv.
Verfügbar|Disponível
Korrektur|Correção
Nachbestellvorschlag|Proposta de encomenda
Bestellvorschlag übernehmen|Aplicar proposta
Letzte Bewegungen|Últimos movimentos
Einkauf|Compras
Lieferanten|Fornecedores
Stammdaten, Konditionen und Sortiment je Hersteller.|Dados, condições e gama por fabricante.
Lieferant hinzufügen|Adicionar fornecedor
Lieferant|Fornecedor
Ansprechpartner|Pessoa de contacto
Sortiment|Gama
Lieferzeit|Prazo de entrega
Volumen|Volume
Kontaktieren|Contactar
Bearbeiten|Editar
Kein Lieferant gefunden.|Nenhum fornecedor encontrado.
Bootsakten|Fichas de barcos
Verkaufte Boote|Barcos vendidos
Jedes verkaufte Boot mit Kaufdatum, Wartungen und Reparaturen.|Cada barco vendido com data de compra, manutenções e reparações.
Boot|Barco
Kaufdatum|Data de compra
Garantie|Garantia
Service|Serviço
Historie|Histórico
Vertrieb|Vendas
Angebote|Orçamentos
Angebote erstellen, als PDF versenden und nach Zusage direkt in die Kasse übernehmen.|Criar orçamentos, enviá-los em PDF e passá-los para a caixa após aceitação.
Neues Angebot|Novo orçamento
Angebot|Orçamento
Gültig bis|Válido até
Summe|Total
Kein Angebot gefunden.|Nenhum orçamento encontrado.
Alle Angebote|Todos os orçamentos
Kunde & Konditionen|Cliente e condições
E-Mail|E-mail
Zahlung|Pagamento
Kundenrabatt|Desconto de cliente
Freie Position|Linha livre
Bezeichnung|Descrição
Menge|Qtd.
Einzelpreis|Preço unitário
Rabatt|Desconto
Anmerkung zum Angebot|Nota do orçamento
Listenpreis|Preço de tabela
Netto|Líquido
zzgl. 19 % USt|mais 19 % IVA
Gesamt brutto|Total com IVA
In Kasse übernehmen|Passar para a caixa
Angenommen|Aceite
Abgelehnt|Recusado
Duplizieren|Duplicar
Löschen|Eliminar
PDF erzeugen|Gerar PDF
Per Mail senden|Enviar por e-mail
Datum|Data
Gesamt|Total
Gesamtbetrag|Montante total
Mit freundlichen Grüßen|Com os melhores cumprimentos
System|Sistema
Einstellungen|Definições
Drucker, ERP-Anbindung und Webshops für dieses Terminal.|Impressoras, ligação ERP e lojas online para este terminal.
Synchronisation|Sincronização
Anderes ERP-System anbinden|Ligar outro ERP
Feldzuordnung öffnen|Abrir mapeamento de campos
Verbindung speichern|Guardar ligação
Barcode-Scanner|Leitor de códigos de barras
Verhalten|Comportamento
Unterstützte Codes & Test|Códigos suportados e teste
Letzte Scans|Últimas leituras
PIN-Sicherheit|Segurança do PIN
Benutzer|Utilizadores
Benutzer anlegen|Criar utilizador
Vorname|Nome próprio
Nachname|Apelido
Kürzel|Iniciais
Kassen-PIN|PIN da caixa
E-Mail-Adresse|Endereço de e-mail
Rolle|Função
Zugewiesene Kassen|Caixas atribuídas
Abbrechen|Cancelar
Kassen|Caixas
PIN|PIN
Aktion|Ação
Kasse anlegen|Adicionar caixa
Neue Kasse anlegen|Adicionar nova caixa
Kassen-ID|ID da caixa
Standort / Bezeichnung|Local / nome
Bondrucker|Impressora de talões
Kasse speichern|Guardar caixa
Speichern|Guardar
Rollen und Rechte|Funções e permissões
Rolle anlegen|Criar função
Rollenname|Nome da função
Recht|Permissão
Mitarbeitende|Pessoal
Arbeitszeiterfassung|Registo de horas
Heute|Hoje
Woche|Semana
Soll|Objetivo
Saldo|Saldo
Admin|Admin
Systemweite Einstellungen mit Vollzugriff — nur für das root-Konto sichtbar.|Definições do sistema com acesso total — visíveis apenas para a conta root.
Systemsprachen|Idiomas do sistema
Systemprotokoll|Registo do sistema
Datenbank & Backup|Base de dados e cópia de segurança
Dokumentvorlagen|Modelos de documentos
Vorlage öffnen|Abrir modelo
Vorschau|Pré-visualização
Vorlagen speichern|Guardar modelos
Kartenzahlung|Pagamento com cartão
Akzeptierte Karten|Cartões aceites
Kassenschnitt jetzt|Fecho de caixa agora
Pflichtfunktionen|Funções obrigatórias
DSFinV-K exportieren|Exportar DSFinV-K
TSE-Konfiguration speichern|Guardar configuração TSE
Webshops|Lojas online
Eigene Schnittstelle|Interface própria
Schnittstelle|Interface
Feldzuordnung|Mapeamento de campos
Zuordnung testen|Testar mapeamento
Zuordnung speichern|Guardar mapeamento
Richtung|Direção
Pflicht|Obrigatório
Aktiv|Ativo
Nicht zugeordnet|Não mapeado
Zuordnen|Mapear
Kunde speichern|Guardar cliente
Belegvorschau|Pré-visualização do talão
Position|Linha
Einzel|Unidade
In neuem Tab|Num novo separador
Drucken|Imprimir
Rubriken|Categorias
Anlegen|Criar
Auswahl|Seleção
Hinzufügen|Adicionar
Gruppe anlegen|Criar grupo
Entfernen|Remover
Alle PDFs erzeugen|Gerar todos os PDF
Fertig|Concluído
Beleghistorie|Histórico de talões
Ansehen|Ver
Gekaufte Produkte|Produtos comprados
TSE-Signatur|Assinatura TSE
Belegsumme|Total do talão
Beleg drucken|Imprimir talão
Storno|Anulação
Warenkorb|Carrinho
Kundenliste öffnen|Abrir lista de clientes
Noch keine Artikel|Ainda sem artigos
Artikel antippen, um sie zu kassieren.|Toque nos artigos para os registar.
Übernehmen|Aplicar
Zwischensumme (netto)|Subtotal (líquido)
Karte|Cartão
Bar|Numerário
Rechnung|Fatura
Beleg & Abschluss|Talão e conclusão
Kasse wählen|Escolher caixa
Kassen verwalten …|Gerir caixas …
Farbe|Cor
Größe|Tamanho
Seriennummern|Números de série
Zu zahlen|A pagar
Zurück|Voltar
Beleg als PDF|Talão em PDF
Neuer Vorgang|Nova venda
Artikel suchen oder scannen|Pesquisar ou ler artigo
Artikel, Hersteller oder Artikelnummer|Artigo, fabricante ou referência
Belegnummer, Kassierer oder Artikel|N.º de talão, operador ou artigo
Name, Ort, Kundennummer oder Ansprechpartner|Nome, localidade, n.º de cliente ou contacto
Artikel oder Artikelnummer|Artigo ou referência
Hersteller, Firma, Ansprechpartner oder Sortiment|Fabricante, empresa, contacto ou gama
Modell, Seriennummer, Kunde oder Beleg|Modelo, n.º de série, cliente ou talão
Angebotsnummer, Kunde oder Artikel|N.º de orçamento, cliente ou artigo
Kunde zuordnen — Name oder Nummer|Associar cliente — nome ou número
Alle|Todos
Boote|Barcos
Paddel|Pagaias
Bekleidung|Vestuário
Sicherheit|Segurança
Zubehör|Acessórios
Niedrig|Baixo
Nicht verfügbar|Indisponível
Abgeschlossen|Concluído
Offen|Aberto
Storniert|Anulado
Entwurf|Rascunho
Versendet|Enviado
Abgelaufen|Expirado
Drucker|Impressoras
Benutzer & Rollen|Utilizadores e funções
TSE & Kassensicherung|TSE e segurança da caixa
ERP-Anbindung|Ligação ERP
Webshops & API|Lojas online e API
Abmelden|Terminar sessão
Menü sortieren|Ordenar menu
Sortieren beenden|Terminar ordenação
Monat|Mês
Jahr|Ano
Systemsprache|Idioma do sistema
Standardsprache für Anmeldung, Belege und alle Benutzer ohne eigene Einstellung.|Idioma predefinido para o início de sessão, talões e utilizadores sem definição própria.
Sprache je Benutzer|Idioma por utilizador
Überschreibt die Systemsprache für einzelne Personen.|Substitui o idioma do sistema para pessoas específicas.
Wie System|Igual ao sistema
Aktiv für alle|Ativo para todos
Übersetzungsstand|Cobertura da tradução
Protokolleinträge|Entradas do registo
Warnungen|Avisos
Fehler|Erros
Sicherheitsereignisse|Eventos de segurança
Ereignis|Evento
Ebene|Nível
Zeitstempel|Carimbo de data/hora
Protokoll exportieren|Exportar registo
Datenbank|Base de dados
Backup-Plan|Plano de cópias
Jetzt sichern|Copiar agora
Integrität prüfen|Verificar integridade
Wiederherstellen|Restaurar
Sicherungen|Cópias de segurança
Datenexport|Exportação de dados
Dauer|Duração
Ziel|Destino
Prüfsumme|Soma de verificação
Automatisch|Automática
Manuell|Manual
Vor Update|Antes da atualização
Verifiziert|Verificada
Rennboote|Barcos de competição
Rennpaddel|Pagaias de competição
Schwimmwesten|Coletes salva-vidas
Schuhe & Zubehör|Calçado e acessórios
Verkauf|Vendas
Filialleitung|Gerente de loja
Aushilfe|Auxiliar
PIN vergessen?|Esqueceu o PIN?
Als root einloggen|Entrar como root
Online-Modus|Modo online
Kalender|Calendário
Schwimmwesten|Coletes salva-vidas
Schuhe & Zubehör|Calçado e acessórios
Rennpaddel|Pagaias de competição
Seekajak|Caiaque de mar
Tourenkajak|Caiaque de travessia
Seekajak Zweier|Caiaque de mar duplo
Marathon-Kajak|Caiaque de maratona
Wildwasser Riverrunner|Águas bravas river runner
Wildwasser Creeker|Águas bravas creeker
Mannschaftscanadier|Canoa de equipa
Rennsport-Paddel|Pagaia de velocidade
Wildwasser-Paddel|Pagaia de águas bravas
Slalom-Paddel|Pagaia de slalom
Touren-/Seekajakpaddel|Pagaia de travessia/mar
Polo-Paddel|Pagaia de kayak-polo
Stechpaddel|Pagaia de canoa
Neoprenanzug|Fato de neoprene
Neopren-Top|Top de neoprene
Neopren-Hose|Calças de neoprene
Fleece & Midlayer|Polar e camada intermédia
Technisches Top|Top técnico
Paddeljacke|Casaco de remo
Paddelhose|Calças de remo
Baselayer|Camada base
Wetterschutzjacke|Casaco impermeável
Isolationsjacke|Casaco isolante
Technische Hose|Calças técnicas
Neoprenschuh|Sapato de neoprene
Bootsschuh|Sapato de vela
Handschuhe|Luvas
Kopfbedeckung|Chapéu
Packsack|Saco estanque
Rucksack|Mochila
Tasche|Saco
Ausrüstung|Equipamento
Cloud synchron|Nuvem sincronizada
Sperren|Bloquear
Menü ein-/ausklappen|Recolher/expandir menu
Zum Verschieben ziehen|Arrastar para mover
Menüreihenfolge anpassen|Alterar ordem do menu
Produktdetails|Detalhes do produto
Farbe und Größe wählen|Escolher cor e tamanho
Zur Kasse|Ir para a caixa
Kasse wechseln|Mudar de caixa
Bildschirm sperren|Bloquear ecrã
Warenkorb öffnen/schließen|Abrir/fechar carrinho
Umsatz-Dashboard|Painel de vendas
Zum Kalender|Ir para o calendário
Überfällig|Em atraso
Nur überfällige zeigen|Mostrar só em atraso
Termine heute|Compromissos hoje
Im Kalender öffnen|Abrir no calendário
Offene Aufgaben heute|Tarefas pendentes hoje
Erledigte ausblenden|Ocultar concluídas
Termine bis Sonntag|Compromissos até domingo
Woche im Kalender|Semana no calendário
Alle auf Montag|Tudo para segunda
Öffnen|Abrir
Morgen|Amanhã
Bestand · Zählliste Brača und Jantex|Stock · lista de contagem Brača e Jantex
Sonntag · geschlossen. Termine und Aufgaben stehen am nächsten Werktag.|Domingo · fechado. Compromissos e tarefas passam para o próximo dia útil.
Aufgaben heute|Tarefas de hoje
Keine offenen Aufgaben für heute.|Sem tarefas pendentes para hoje.
Bis nächsten Sonntag|Até ao próximo domingo
Montag|Segunda-feira
Dienstag|Terça-feira
Nichts geplant.|Nada planeado.
Mittwoch|Quarta-feira
Donnerstag|Quinta-feira
Freitag|Sexta-feira
Samstag|Sábado
Wareneingang prüfen und einbuchen|Verificar e registar a entrada de mercadoria
Sonntag|Domingo
Sonntag · geschlossen|Domingo · fechado
Erledigt / offen|Concluído / pendente
Auf morgen verschieben|Adiar para amanhã
Aufgabe verteilen|Atribuir tarefa
Artikel öffnen|Abrir artigos
Bestand öffnen|Abrir stock
Kunde öffnen|Abrir cliente
Transaktionen öffnen|Abrir transações
Neue Aufgabe, z. B. Lieferant Brača anrufen|Nova tarefa, p. ex. ligar ao fornecedor Brača
Tag im Kalender öffnen|Abrir dia no calendário
Artikel aktiv|Artigos ativos
Niedriger Bestand|Stock baixo
Nachbestellung offen|Encomenda pendente
Lagerwert (brutto)|Valor de stock (bruto)
Alle Standorte|Todos os locais
Artikel bearbeiten|Editar artigo
Buchungen von|Movimentos de
— je Kasse ein eigenes Journal.|— um diário por caixa.
Buchungen heute|Movimentos de hoje
Umsatz heute (brutto)|Vendas de hoje (bruto)
ohne Storni|sem anulações
Offene Rechnungen|Faturas pendentes
Zahlungseingang ausstehend|Pagamento pendente
protokolliert|registado
Zeitraum|Período
Gestern|Ontem
Dieser Monat|Este mês
Vormonat|Mês anterior
Quartal|Trimestre
Benutzerdefiniert|Personalizado
Nach Beleg sortieren|Ordenar por talão
Nach Zeit sortieren|Ordenar por hora
Nach Positionen sortieren|Ordenar por linhas
Nach Zahlart sortieren|Ordenar por meio de pagamento
Nach Status sortieren|Ordenar por estado
Nach Betrag sortieren|Ordenar por valor
Status ändern|Alterar estado
Kunden gesamt|Total de clientes
Vereine & Verbände|Clubes e federações
mit Rahmenrabatt|com desconto acordado
alle Kunden|todos os clientes
Privat|Particular
Verein|Clube
Firma|Empresa
Verband|Federação
Schule|Escola
Direktzahlung|Pagamento direto
Noch kein Kauf|Ainda sem compras
Sofortzahlung|Pagamento imediato
Vereine, Firmen und Verbände können Rechnungskauf und Rahmenrabatte nutzen; Privatkunden zahlen direkt an der Kasse.|Clubes, empresas e federações podem comprar a fatura e usar descontos acordados; os particulares pagam na caixa.
Kundenakte öffnen|Abrir ficha de cliente
Kunde editieren|Editar cliente
Offen beim Kunden|Pendente do cliente
Entwürfe|Rascunhos
noch nicht versendet|ainda não enviados
Annahmequote|Taxa de aceitação
Design-Prototyp — Angebote sind Beispieldaten.|Protótipo de design — os orçamentos são dados de exemplo.
Planung|Planeamento
Lieferungen, Abholungen, Werkstatttermine, auslaufende Angebote und Messen im Monatsüberblick.|Entregas, levantamentos, marcações de oficina, orçamentos a expirar e feiras do mês num relance.
Termine für Verkaufsraum|Compromissos para Verkaufsraum
Ausgewählter Tag|Dia selecionado
+ Termin an diesem Tag|+ Compromisso neste dia
Keine Termine an diesem Tag.|Sem compromissos neste dia.
Vorheriger Monat|Mês anterior
Nächster Monat|Mês seguinte
Termine für KASSE-03 Mobil|Compromissos para KASSE-03 Mobil
Umsatz, Zahlarten und Warengruppen — Auswertung für|Vendas, meios de pagamento e grupos de produtos — análise de
Alle Kassen|Todas as caixas
Umsatz (brutto)|Vendas (bruto)
Ø Bonwert|Ø valor médio do talão
Storni & Retouren|Anulações e devoluções
Firmen & Wiederverkauf|Empresas e revenda
Vereine|Clubes
Verbände & Schulen|Federações e escolas
Privatkunden|Particulares
Boote (Nelo, Plastex, Lettmann)|Barcos (Nelo, Plastex, Lettmann)
Paddel (Jantex, Brača, Lettmann)|Pagaias (Jantex, Brača, Lettmann)
Beispielauswertung auf Basis der Journaldaten dieses Prototyps — kein Ersatz für den steuerlichen Kassenbericht.|Análise de exemplo com base no diário deste protótipo — não substitui o relatório fiscal de caixa.
Nur diese Kasse auswerten|Analisar apenas esta caixa
Betriebsauswertung|Análise do negócio
· Ladengeschäft & Regatten · Nelo, Plastex, Jantex, Brača-Sport|· Loja e regatas · Nelo, Plastex, Jantex, Brača-Sport
Verkaufsort|Local de venda
Ladengeschäft|Loja
Hersteller|Fabricante
Alle Hersteller|Todos os fabricantes
Filter zurücksetzen|Repor filtros
Gesamtumsatz|Vendas totais
(Details ›)|(Detalhes ›)
Verkaufsvorgänge im Zeitraum|Vendas no período
Umsatz je Transaktion|Vendas por transação
Regatta-Anteil|Quota de regatas
Anteil am Gesamtumsatz|Quota das vendas totais
Umsatzverlauf nach Monat|Vendas por mês
Umsatz nach Hersteller|Vendas por fabricante
Paddel vs. Rennboote|Pagaias vs. barcos de competição
Umsatzanteil|Quota de vendas
Rubrik|Categoria
– Produkt-Trends|– tendências de produto
Geschätzter Monatsverlauf je Produkt, gewählter Zeitraum & Verkaufsort|Evolução mensal estimada por produto, período e local de venda escolhidos
Top-Produkte (geschätzt, im gewählten Zeitraum)|Produtos mais vendidos (estimado, período escolhido)
Produkt|Produto
Umsatz (geschätzt)|Vendas (estimadas)
Hinweis: Datenbasis ist ein fiktiver Testdatensatz (Umsatzliste Kanurennsport). Einzeltransaktionen wurden auf Basis der dokumentierten Monats-, Mengen- und Saisonlogik plausibel modelliert und stimmen in Summe mit den gegebenen Transaktionszahlen überein.|Nota: os dados são um conjunto de teste fictício (lista de vendas de canoagem de velocidade). As transações foram modeladas de forma plausível segundo a lógica mensal, de quantidades e sazonal documentada e somam os totais indicados.
Details anzeigen|Mostrar detalhes
Artikel im Lager|Artigos em stock
Stück gesamt|Unidades no total
Reserviert|Reservado
für Kundenaufträge|para encomendas de clientes
Unter Meldebestand|Abaixo do stock mínimo
Nachbestellung prüfen|Verificar encomenda
zu Verkaufspreisen|a preços de venda
Hauptlager|Armazém principal
Korrekturen im Prototyp wirken nur lokal und ersetzen keine dokumentierte Inventur.|As correções no protótipo são apenas locais e não substituem um inventário documentado.
Einkaufsvolumen Jahr|Volume de compras anual
netto, laufendes Jahr|líquido, ano corrente
Offene Bestellungen|Encomendas abertas
Lieferung ausstehend|Entrega pendente
Ø Einkaufsrabatt|Ø desconto de compra
auf Listenpreis|sobre preço de tabela
Rennkajaks, Renncanadier|Caiaques de competição, canoas de competição
Rennpaddel Alpha, Beta, Gamma|Pagaias de competição Alpha, Beta, Gamma
Rennpaddel IV, XI Van Dusen|Pagaias de competição IV, XI Van Dusen
Seekajaks, Tourenkajaks, Kanupolo, Wildwasser, Canadier, Paddel|Caiaques de mar, caiaques de travessia, kayak-polo, águas bravas, canoas, pagaias
Schwimmwesten, Neopren, Bekleidung, Schuhe, Zubehör|Coletes, neoprene, vestuário, calçado, acessórios
Design-Prototyp — Lieferantenstammdaten und Einkaufspreise sind Beispieldaten.|Protótipo de design — os dados de fornecedores e preços de compra são de exemplo.
Lieferantenakte öffnen|Abrir ficha de fornecedor
Umsatz Boote|Vendas de barcos
brutto, Listenpreis|bruto, preço de tabela
In Garantie|Em garantia
Gewährleistung offen|Garantias em aberto
Serviceleistungen|Serviços
abgelaufen|expirado
Design-Prototyp — Bootsakten und Servicehistorien sind Beispieldaten.|Protótipo de design — as fichas de barcos e históricos de serviço são de exemplo.
USB, Bluetooth oder Kamera am Tablet|USB, Bluetooth ou câmara do tablet
Kassen, Rollen, Rechte und PINs|Caixas, funções, permissões e PIN
Firmendaten, Logo, Farben, Öffnungszeiten, Nummernkreise|Dados da empresa, logótipo, cores, horários, numeração
Belege, Rechnungen und Etiketten|Talões, faturas e etiquetas
Terminal, Zahlarten und Limits|Terminal, meios de pagamento e limites
Signatureinheit, DSFinV-K, Aufbewahrung|Unidade de assinatura, DSFinV-K, conservação
Schnittstelle, Feldzuordnung, Abgleich|Interface, mapeamento de campos, sincronização
Bestände und Artikel im Onlinehandel|Stock e artigos na venda online
Systemweite Root-Einstellungen|Definições root de todo o sistema
Design-Prototyp — Verbindungen und Testdrucke werden simuliert, es werden keine Daten übertragen.|Protótipo de design — ligações e impressões de teste são simuladas, nenhum dado é transmitido.
Kassenbelege am Terminal, Belegausgabepflicht|Talões no terminal, obrigação de emitir talão
Bondrucker hinzufügen|Adicionar impressora de talões
Bereit|Pronto
Testdruck|Impressão de teste
Deaktiviert|Desativado
Rechnungsdrucker hinzufügen|Adicionar impressora de faturas
Preisetiketten, Artikel- und Lagerlabels mit Barcode|Etiquetas de preço, artigo e armazém com código de barras
Labeldrucker hinzufügen|Adicionar impressora de etiquetas
Paddel-IDs als QR-Etikett für den Schaft, wird beim Erstellen der Rechnung angesteuert|ID da pagaia como etiqueta QR para o cabo, impressa ao criar a fatura
QR-Etikettendrucker hinzufügen|Adicionar impressora de etiquetas QR
Drucker aktiv|Impressora ativa
EAN und Artikelnummern direkt in die Artikelsuche übernehmen.|Enviar EAN e referências diretamente para a pesquisa de artigos.
USB-Scanner verbunden|Leitor USB ligado
Testscan starten|Iniciar leitura de teste
USB-Handscanner|Leitor manual USB
Kabelgebunden, Tastatur-Emulation|Com fio, emulação de teclado
Bluetooth-Scanner|Leitor Bluetooth
Kabellos für Lager und Regatta|Sem fios para armazém e regata
Kamera von Telefon / Tablet|Câmara do telemóvel / tablet
Ohne Zusatzgerät, direkt im Browser|Sem dispositivo extra, no navegador
Rückkamera · Freigabe nötig|Câmara traseira · requer permissão
Aktive Quelle|Fonte ativa
Gerät|Dispositivo
Zeichenabschluss|Carácter final
Enter (CR)|Enter (CR)
Präfix / Suffix|Prefixo / sufixo
kein Präfix · CR|sem prefixo · CR
Artikelsuche der Kasse|Pesquisa de artigos da caixa
Artikel direkt in den Warenkorb|Artigo diretamente no carrinho
Ohne Rückfrage buchen, wenn eindeutig|Registar sem perguntar se for inequívoco
Signalton bei Erfolg|Sinal sonoro em caso de sucesso
Kurzer Piep, Vibration auf dem Tablet|Bip curto, vibração no tablet
Unbekannte Codes melden|Avisar códigos desconhecidos
Hinweis mit Option „Artikel anlegen"|Aviso com opção «Criar artigo»
Varianten-Codes auflösen|Resolver códigos de variantes
Farbe und Größe aus dem EAN ableiten|Deduzir cor e tamanho do EAN
Scannen in der Inventur|Leitura no inventário
Zählmengen per Scan erfassen|Registar quantidades por leitura
Für die Kamera von Telefon oder Tablet ist eine Freigabe im Browser nötig; ohne Freigabe bleibt der Handscanner aktiv.|A câmara do telemóvel ou tablet requer permissão do navegador; sem ela, o leitor manual continua ativo.
Legt die Länge fest, die alle Kassen-PINs haben müssen.|Define o comprimento de todos os PIN de caixa.
Stellen|dígitos
Anmeldung an der Kasse per PIN · Rollen je Terminal.|Acesso à caixa por PIN · funções por terminal.
Terminals dieses Standorts — Grundlage für die Rollenvergabe.|Terminais deste local — base para atribuir funções.
Rechte antippen zum Ändern · gilt für alle zugewiesenen Kassen.|Toque nas permissões para alterar · aplica-se a todas as caixas atribuídas.
Teamleitung|Chefe de equipa
Angebote erstellen & versenden|Criar e enviar orçamentos
Angebote in Kasse übernehmen|Passar orçamentos para a caixa
Artikel & Bestände pflegen|Gerir artigos e stock
Aufgaben delegieren|Delegar tarefas
Berichte einsehen|Ver relatórios
Bestellbeleg personalisiert drucken|Imprimir nota de encomenda personalizada
Bootsakten & Seriennummern pflegen|Gerir fichas de barcos e números de série
Datenbank & Backup verwalten|Gerir base de dados e cópia
Dokumentvorlagen bearbeiten|Editar modelos de documentos
Einstellungen & Benutzer|Definições e utilizadores
Journal & Transaktionen einsehen|Ver diário e transações
Kassen anlegen & bearbeiten|Criar e editar caixas
Kunden verwalten|Gerir clientes
Lieferanten verwalten|Gerir fornecedores
Preis manuell ändern|Alterar preço manualmente
QR-Etiketten drucken|Imprimir etiquetas QR
Rabatt gewähren|Conceder desconto
Rechnungskauf freigeben|Autorizar compra a fatura
Shop-Einstellungen bearbeiten|Editar definições da loja
Storno / Retoure|Anulação / devolução
Systemprotokoll einsehen|Ver registo do sistema
Systemsprache festlegen|Definir idioma do sistema
Tagesabschluss / Kassenschnitt|Fecho diário / fecho de caixa
Transaktionsstatus ändern|Alterar estado da transação
TSE & Exporte|TSE e exportações
Umsatz-Dashboard einsehen|Ver painel de vendas
Verkauf kassieren|Registar vendas
Admin behält immer alle Rechte. Storni, Preisänderungen und Kassenabschluss bleiben protokollpflichtig — jede Aktion wird mit Benutzer und Zeitstempel im Journal festgehalten.|O administrador mantém sempre todas as permissões. Anulações, alterações de preço e fechos ficam registados — cada ação é guardada no diário com utilizador e hora.
Feld antippen, um eine Schicht zu wählen oder eine individuelle Zeit einzutragen.|Toque num campo para escolher um turno ou inserir uma hora personalizada.
Früh|Manhã
Spät|Tarde
Ganztag|Dia inteiro
+ Schichtart|+ Tipo de turno
Frei|Folga
Kommen und Gehen wird je Benutzer mit Kasse und Uhrzeit protokolliert.|Entradas e saídas são registadas por utilizador com caixa e hora.
Gehen|Saída
Ausgestempelt|Registou saída
Kommen|Entrada
Rolle wechseln|Mudar de função
Zuweisung ändern|Alterar atribuição
Benutzer bearbeiten|Editar utilizador
Benutzer aktiv|Utilizador ativo
Benutzer entfernen|Remover utilizador
Kasse aktiv|Caixa ativa
Kasse umbenennen|Mudar nome da caixa
Kasse entfernen|Remover caixa
Rolle entfernen|Remover função
Admin hat immer alle Rechte|O administrador tem sempre todas as permissões
Recht entziehen|Retirar permissão
Recht erteilen|Conceder permissão
Änderungen werden sofort gespeichert und gelten für alle Kassen und Dokumente.|As alterações são guardadas de imediato e aplicam-se a todas as caixas e documentos.
Zurücksetzen|Repor
Beleg-Vorschau|Pré-visualização do talão
Erscheint als Absender auf Belegen, Rechnungen und Bestellungen.|Aparece como remetente em talões, faturas e encomendas.
Firmenname|Nome da empresa
Zusatz / Branche|Complemento / setor
Straße und Hausnummer|Rua e número
PLZ und Ort|Código postal e localidade
Land|País
Telefon|Telefone
Website|Website
Pflichtangaben im Fuß von Rechnungen.|Dados obrigatórios no rodapé das faturas.
USt-IdNr.|NIF-IVA
Steuernummer|Número fiscal
Handelsregister|Registo comercial
Geschäftsführung / Inhaber|Gerência / proprietário
Für Rechnungen und Überweisungen.|Para faturas e transferências.
Kontoinhaber|Titular da conta
Bank|Banco
Eigenes Logo und Akzentfarbe für alle Dokumente.|Logótipo e cor de destaque próprios para todos os documentos.
Standard: zykol-Logo|Predefinido: logótipo zykol
· PNG, JPG oder SVG|· PNG, JPG ou SVG
Logo hochladen|Carregar logótipo
Akzentfarbe|Cor de destaque
Für Bestellbelege, Abholscheine und den Dokumentfuß.|Para notas de encomenda, de levantamento e rodapé.
Montag – Freitag|Segunda – sexta
Kassenbeleg|Talão de caixa
Standardwerte für Rechnungen, Angebote und Belege.|Valores predefinidos para faturas, orçamentos e talões.
Zahlungsziel (Tage)|Prazo de pagamento (dias)
Angebot gültig (Tage)|Validade do orçamento (dias)
Rückgabefrist (Tage)|Prazo de devolução (dias)
Danke-Text auf Belegen|Texto de agradecimento nos talões
Zusätzliche Fußzeile|Rodapé adicional
Verhalten an der Kasse und Adresse für Beleg-QR-Codes.|Comportamento na caixa e endereço dos códigos QR dos talões.
Aus|Desligado
Basis-Adresse für Beleg-QR-Codes|Endereço base dos códigos QR dos talões
geschlossen|fechado
Vielen Dank für Ihren Einkauf!|Obrigado pela sua compra!
z. B. Eigentumsvorbehalt, Garantiehinweise|p. ex. reserva de propriedade, garantia
Gemeinsames Layout für alle Druck- und PDF-Exporte.|Layout comum para todas as impressões e exportações PDF.
Kassenbericht & Z-Bon|Relatório de caixa e fecho Z
Artikelliste|Lista de artigos
Stammdaten-Export|Exportação de dados mestre
Bestands- & Inventurliste|Lista de stock e inventário
Zählprotokoll|Registo de contagem
DSFinV-K Protokoll|Registo DSFinV-K
Betriebsprüfung|Inspeção fiscal
Layout & Briefkopf|Layout e cabeçalho
Papierformat|Formato do papel
Seitenrand|Margem
zykol-logo.png · Kopfzeile links|zykol-logo.png · cabeçalho à esquerda
Schriften|Tipos de letra
Absenderzeile|Linha do remetente
Inhalte auf allen Dokumenten|Conteúdo em todos os documentos
Logo in der Kopfzeile|Logótipo no cabeçalho
Auf jeder gedruckten Seite|Em cada página impressa
Seitenzahl in der Fußzeile|Número de página no rodapé
Bankverbindung im Fuß|Dados bancários no rodapé
Pflicht auf Rechnungen|Obrigatório nas faturas
TSE-QR-Code auf Belegen|Código QR TSE nos talões
Prüfwert nach DSFinV-K|Valor de verificação DSFinV-K
Rechtliche Hinweise|Avisos legais
Zahlungsziel, Eigentumsvorbehalt, Rückgabe|Prazo de pagamento, reserva de propriedade, devolução
Zahlungsdienstleister und Terminal für EC- und Kreditkarten.|Prestador de pagamentos e terminal para cartões de débito e crédito.
Terminal verbunden · bereit|Terminal ligado · pronto
Testbuchung senden|Enviar transação de teste
Zahlungsdienstleister|Prestador de pagamentos
Händler-Nr. (VU-Nummer)|N.º de comerciante
Terminal-ID|ID do terminal
Terminal-Modell|Modelo do terminal
Verbindung|Ligação
Abrechnungskonto|Conta de liquidação
Girocard-Verfahren|Procedimento girocard
girocard (electronic cash) + Kontaktlos|girocard (electronic cash) + contactless
Auszahlung|Pagamento
wie zugrunde liegende Karte|como o cartão subjacente
Abwicklung & Kassenschnitt|Liquidação e fecho de caixa
Letzte Transaktion|Última transação
Umsatz Karte heute|Vendas com cartão hoje
Kassenschnitt|Fecho de caixa
Letzter Kassenschnitt|Último fecho de caixa
Trinkgeld / Tip|Gorjeta
deaktiviert|desativado
Zahlung ohne Netz|Pagamento offline
Technische Sicherheitseinrichtung (TSE)|Dispositivo de segurança técnica (TSE)
Aktiv · Zertifikat gültig|Ativo · certificado válido
Selbsttest starten|Iniciar autoteste
Hardware-TSE (USB)|TSE de hardware (USB)
Hardware-TSE (microSD)|TSE de hardware (microSD)
Keine TSE|Sem TSE
TSE-Typ|Tipo de TSE
Seriennummer|Número de série
Zertifikat gültig bis|Certificado válido até
Kassen-ID (Client)|ID da caixa (cliente)
Signaturzähler|Contador de assinaturas
Verbleibende Signaturen|Assinaturas restantes
unbegrenzt (Cloud)|ilimitado (nuvem)
Meldung ans Finanzamt|Comunicação às Finanças
Zeitsynchronisation|Sincronização horária
Belegausgabepflicht|Obrigação de emitir talão
Beleg wird bei jedem Vorgang erstellt|É criado um talão em cada operação
QR-Code auf dem Beleg|Código QR no talão
Prüfwert nach DSFinV-K auf dem Bon drucken|Imprimir valor DSFinV-K no talão
Offline-Signaturen zwischenspeichern|Guardar assinaturas offline
Täglicher DSFinV-K-Export|Exportação DSFinV-K diária
Kasse ohne TSE sperren|Bloquear caixa sem TSE
Kein Verkauf, wenn die Signatureinheit ausfällt|Sem vendas se a unidade de assinatura falhar
Protokoll & Export|Registo e exportação
Letzte Signatur|Última assinatura
Letzter Selbsttest|Último autoteste
Letzter DSFinV-K-Export|Última exportação DSFinV-K
Kassenabschluss|Fecho de caixa
täglich, automatisch|diário, automático
Aufbewahrung|Conservação
Primäre Warenwirtschaft ·|Sistema de gestão principal ·
Verbindung testen|Testar ligação
Mandant|Cliente
API-Endpunkt|Endpoint da API
API-Schlüssel|Chave API
Kassen-ID / Terminal|ID da caixa / terminal
Abgleichintervall|Intervalo de sincronização
Belegexport|Exportação de talões
Artikel & Preise|Artigos e preços
Stammdaten und Varianten aus zykol.ERP übernehmen|Importar dados mestre e variantes do zykol.ERP
Bestände|Stock
Bidirektional, Lagerorte inklusive|Bidirecional, incluindo locais de armazém
Vereine, Firmen und Verbände mit Konditionen|Clubes, empresas e federações com condições
Belege & Buchungen|Talões e movimentos
Kassenjournal an die Finanzbuchhaltung|Diário de caixa para a contabilidade
Offene Posten|Itens em aberto
Zahlungsstatus von Rechnungskunden zurücklesen|Ler o estado de pagamento de clientes a fatura
Alternativ zu zykol.ERP — Zugangsdaten je System.|Alternativa ao zykol.ERP — credenciais por sistema.
Individuell (REST)|Personalizado (REST)
Verbindungsart|Tipo de ligação
Endpunkt|Endpoint
Mandant / Berater-Nr.|Cliente / n.º de consultor
Datenumfang|Âmbito dos dados
Artikel, Bestand, Belege|Artigos, stock, talões
Konfliktregel|Regra de conflito
ERP führt bei Preisen, Kasse bei Beständen|O ERP prevalece nos preços, a caixa no stock
Verbindung aktiv|Ligação ativa
Artikel, Bestände und Bestellungen mit dem Onlineshop abgleichen.|Sincronizar artigos, stock e encomendas com a loja online.
Aktiv · Bestände live|Ativo · stock em tempo real
Inaktiv|Inativo
nicht verbunden|não ligado
Zugangsdaten erforderlich|Credenciais necessárias
REST oder Webhook für Systeme ohne fertigen Konnektor.|REST ou webhook para sistemas sem conector pronto.
In der Anleitung suchen|Pesquisar no manual
Standardsprache und Sprache je Benutzer festlegen.|Definir idioma predefinido e por utilizador.
Alle sicherheitsrelevanten Aktionen im Volltext einsehen.|Ver em detalhe todas as ações relevantes para a segurança.
Sicherungen, Wiederherstellung und Datenexport.|Cópias, restauro e exportação de dados.
Übersetzt werden Navigation, Überschriften, Beschriftungen und Schaltflächen. Artikel-, Kunden- und Belegdaten bleiben in der erfassten Sprache.|São traduzidos navegação, títulos, etiquetas e botões. Os dados de artigos, clientes e talões ficam no idioma em que foram inseridos.
Als Angebot speichern|Guardar como orçamento
Warenkorb einklappen|Recolher carrinho
Separaten Bestellbeleg mit Personalisierung drucken|Imprimir nota de encomenda separada com personalização
Warenkorb als Angebot (Entwurf) speichern|Guardar carrinho como orçamento (rascunho)
Separat zum Kassenbeleg ·|Separado do talão de caixa ·
Schließen|Fechar
Drucken / PDF|Imprimir / PDF
personalisiert|personalizado
Standard|Padrão
Kunde & Übergabe|Cliente e entrega
Druckoptionen|Opções de impressão
mit Preisen · Unterschrift|com preços · assinatura
Kunde: ______________________|Cliente: ______________________
Bestell-Nr.|N.º de encomenda
Abholbereit ab|Pronto para levantar a partir de
Übergabe|Entrega
Bearbeitet von|Tratado por
Vielen Dank für Ihre Bestellung. Wir melden uns, sobald Ihre Ware abholbereit ist.|Obrigado pela sua encomenda. Entraremos em contacto assim que a mercadoria estiver pronta para levantar.
Artikel & Personalisierung|Artigos e personalização
Ort, Datum|Local, data
Unterschrift Kunde – Personalisierung geprüft|Assinatura do cliente – personalização verificada
· Kein Kassenbeleg.|· Não é um talão de caixa.
Bestellung online abrufen|Ver encomenda online
Im Kalender|No calendário
Wechselgeld zählen und Kasse öffnen|Contar o troco e abrir a caixa
Bestellvorschläge für Nelo und Plastex prüfen|Verificar sugestões de encomenda para Nelo e Plastex
Sonntag · Laden geschlossen, Regatta|Domingo · loja fechada, regata
Einstellungen öffnen|Abrir definições
Lieferanten öffnen|Abrir fornecedores
Reformationstag · geschlossen. Termine und Aufgaben stehen am nächsten Werktag.|Dia da Reforma · fechado. Compromissos e tarefas passam para o próximo dia útil.
Ware bereitstellen|Preparar a mercadoria
Im Kalender zeigen|Mostrar no calendário
Verkaufsfläche|Área de venda
Lieferung|Entrega
Abholung|Levantamento
Werkstatt|Oficina
Regatta|Regata
Messe|Feira
Regatta / Messe|Regata / feira
Alle Lagerorte|Todos os locais de armazém
Rechnungsdrucker|Impressora de faturas
Labeldrucker|Impressora de etiquetas
QR-Etikettendrucker|Impressora de etiquetas QR
Firma & Kontakt|Empresa e contacto
Rechtliches & Steuern|Legal e impostos
Bankverbindung|Dados bancários
Logo & Farben|Logótipo e cores
Öffnungszeiten|Horário de abertura
Nummernkreise|Numeração
Bestellbeleg|Nota de encomenda
Konditionen & Texte|Condições e textos
Kasse & Online|Caixa e online
Portugal|Portugal
Polen|Polónia
Serbien|Sérvia
Deutschland|Alemanha
Niederlande|Países Baixos
Ansprechpartner (Demo)|Pessoa de contacto (demo)
ganztägig|todo o dia
Tagesabschluss Kasse durchführen|Fazer o fecho diário da caixa
Backup-Protokoll prüfen|Verificar registo de cópias
TSE-Export für Steuerberater erstellen|Criar exportação TSE para o contabilista
Inventur Paddelschrank abschließen|Concluir inventário do armário de pagaias
Reklamation Nelo beantworten|Responder à reclamação Nelo
Offene Stornos freigeben|Aprovar anulações pendentes
Okt|Out
Nov|Nov
Dez|Dez
Jan|Jan
Feb|Fev
Mär|Mar
Apr|Abr
Mai|Mai
Jun|Jun
Jul|Jul
Aug|Ago
Sep|Set
Mo|Seg
Di|Ter
Mi|Qua
Do|Qui
Fr|Sex
Sa|Sáb
So|Dom
Light|Claro
Dark|Escuro
Kanupolo|Kayak-polo
Canadier|Canoa
Status|Estado
Logo|Logótipo
`;
  var dict = {};
  L.split('\n').forEach(function (l) {
    var p = l.split('|');
    if (p.length === 4) dict[p[0].trim()] = {en: p[1].trim(), fr: p[2].trim(), es: p[3].trim()};
  });
  P.split('\n').forEach(function (l) {
    var p = l.split('|');
    if (p.length !== 2) return;
    var k = p[0].trim();
    dict[k] = dict[k] || {};
    dict[k].pt = p[1].trim();
  });
  window.ZYKOL_I18N = {dict: dict};
})();

(function () {
  var D = window.ZYKOL_I18N && window.ZYKOL_I18N.dict; if (!D) return;
  D['Bedienungsanleitung'] = {en: 'User manual', fr: 'Mode d’emploi', es: 'Manual de usuario', pt: 'Manual de utilização'};
  D['Schritt für Schritt durch alle Funktionen, in fünf Sprachen'] = {en: 'Step by step through every function, in five languages', fr: 'Toutes les fonctions pas à pas, en cinq langues', es: 'Todas las funciones paso a paso, en cinco idiomas', pt: 'Todas as funções passo a passo, em cinco idiomas'};
})();

// v8.11 (/sprachen): weitere feste Texte, Monate, Feiertage und Muster für Texte mit Zahlen/Datum
(function () {
  var I = window.ZYKOL_I18N; if (!I) return;
  var D = I.dict;
  var add = function (de, en, fr, es, pt) { D[de] = {en: en, fr: fr, es: es, pt: pt}; };
  // v12.10: Rechnung nur mit Kunden, Rabatt nur ab Filialleitung
  add('Rechnungsempfänger', 'Invoice recipient', 'Destinataire de la facture', 'Destinatario de la factura', 'Destinatário da fatura');
  add('Ändern', 'Change', 'Modifier', 'Cambiar', 'Alterar');
  add('Eine Rechnung braucht einen Kunden. Bitte Rechnungsempfänger wählen.', 'An invoice needs a customer. Please choose the recipient.', 'Une facture nécessite un client. Veuillez choisir le destinataire.', 'Una factura necesita un cliente. Elija el destinatario.', 'Uma fatura precisa de um cliente. Escolha o destinatário.');
  add('Kunde suchen – Name, Nummer oder Ort', 'Search customer – name, number or town', 'Rechercher un client – nom, numéro ou ville', 'Buscar cliente: nombre, número o ciudad', 'Pesquisar cliente – nome, número ou localidade');
  add('+ Neuen Kunden anlegen', '+ Create new customer', '+ Créer un client', '+ Crear cliente nuevo', '+ Criar novo cliente');
  add('Neuer Kunde', 'New customer', 'Nouveau client', 'Cliente nuevo', 'Novo cliente');
  add('Neue Kunden starten ohne Rabatt. Rabatte vergibt die Filialleitung im Kundenstamm.', 'New customers start without a discount. Discounts are granted by the store manager in the customer records.', 'Les nouveaux clients commencent sans remise. Les remises sont accordées par la direction du magasin.', 'Los clientes nuevos empiezan sin descuento. Los descuentos los concede la dirección de tienda.', 'Novos clientes começam sem desconto. Os descontos são atribuídos pela gerência da loja.');
  add('Anlegen & als Empfänger wählen', 'Create & choose as recipient', 'Créer et choisir comme destinataire', 'Crear y elegir como destinatario', 'Criar e escolher como destinatário');
  add('Für die Rechnung bitte Name, Straße und PLZ/Ort eintragen.', 'For the invoice please enter name, street and postcode/town.', 'Pour la facture, veuillez saisir nom, rue et code postal/ville.', 'Para la factura, introduzca nombre, calle y código postal/ciudad.', 'Para a fatura, indique nome, rua e código postal/localidade.');
  add('Name / Firma *', 'Name / company *', 'Nom / société *', 'Nombre / empresa *', 'Nome / empresa *');
  add('Straße und Hausnummer *', 'Street and number *', 'Rue et numéro *', 'Calle y número *', 'Rua e número *');
  add('PLZ und Ort *', 'Postcode and town *', 'Code postal et ville *', 'Código postal y ciudad *', 'Código postal e localidade *');
  add('Rabatt % (nur Filialleitung)', 'Discount % (store manager only)', 'Remise % (direction uniquement)', 'Descuento % (solo dirección)', 'Desconto % (só gerência)');
  add('Rabatt nur durch Filialleitung oder Admin', 'Discount only by store manager or admin', 'Remise uniquement par la direction ou l’admin', 'Descuento solo por dirección o administrador', 'Desconto só pela gerência ou admin');
  // v12.08: Bestellvorschlag je Lieferant, neuer Artikel
  add('Günstigster Lieferant', 'Cheapest supplier', 'Fournisseur le moins cher', 'Proveedor más barato', 'Fornecedor mais barato');
  add('Schnellster Lieferant', 'Fastest supplier', 'Fournisseur le plus rapide', 'Proveedor más rápido', 'Fornecedor mais rápido');
  add('Bestellungen je Lieferant', 'Orders per supplier', 'Commandes par fournisseur', 'Pedidos por proveedor', 'Encomendas por fornecedor');
  add('Lieferanten (mehrere möglich)', 'Suppliers (several possible)', 'Fournisseurs (plusieurs possibles)', 'Proveedores (varios posibles)', 'Fornecedores (vários possíveis)');
  add('Hersteller / Marke *', 'Manufacturer / brand *', 'Fabricant / marque *', 'Fabricante / marca *', 'Fabricante / marca *');
  add('Anfangsbestand', 'Opening stock', 'Stock initial', 'Existencias iniciales', 'Stock inicial');
  add('Lagerort', 'Storage location', 'Emplacement', 'Ubicación', 'Localização');
  add('Artikel anlegen', 'Create item', 'Créer l’article', 'Crear artículo', 'Criar artigo');
  add('Bitte Hersteller, Bezeichnung und Verkaufspreis eintragen.', 'Please enter manufacturer, name and sales price.', 'Veuillez saisir fabricant, désignation et prix de vente.', 'Introduzca fabricante, denominación y precio de venta.', 'Indique fabricante, designação e preço de venda.');
  add('Bisher nicht bei diesem Lieferanten', 'Not yet with this supplier', 'Pas encore chez ce fournisseur', 'Aún no con este proveedor', 'Ainda não neste fornecedor');
  add('Artikelverwaltung', 'Item management', 'Gestion des articles', 'Gestión de artículos', 'Gestão de artigos');
  // v12.07: Bestellungen (Kunden/Lieferanten), Kundenakte, Firmendaten
  add('Kundenbestellungen', 'Customer orders', 'Commandes clients', 'Pedidos de clientes', 'Encomendas de clientes');
  add('Lieferantenbestellungen', 'Supplier orders', 'Commandes fournisseurs', 'Pedidos a proveedores', 'Encomendas a fornecedores');
  add('Bestellungen', 'Orders', 'Commandes', 'Pedidos', 'Encomendas');
  add('Bestellungen bei Herstellern und Lieferanten – vom Bestellvorschlag bis zum Wareneingang.', 'Orders with manufacturers and suppliers – from order proposal to goods receipt.', 'Commandes auprès des fabricants et fournisseurs – de la proposition à la réception.', 'Pedidos a fabricantes y proveedores: de la propuesta a la recepción de mercancía.', 'Encomendas a fabricantes e fornecedores – da proposta à receção de mercadoria.');
  add('Neue Bestellung', 'New order', 'Nouvelle commande', 'Nuevo pedido', 'Nova encomenda');
  add('Bestätigt', 'Confirmed', 'Confirmée', 'Confirmado', 'Confirmada');
  add('Teilgeliefert', 'Partly delivered', 'Livrée en partie', 'Entregado en parte', 'Entregue em parte');
  add('Geliefert', 'Delivered', 'Livrée', 'Entregado', 'Entregue');
  add('beim Lieferanten in Arbeit', 'in progress at supplier', 'en cours chez le fournisseur', 'en curso en el proveedor', 'em curso no fornecedor');
  add('Rest folgt', 'Remainder to follow', 'Reste à suivre', 'El resto llegará', 'O resto segue');
  add('Wareneingang gebucht', 'Goods receipt posted', 'Réception enregistrée', 'Recepción registrada', 'Receção registada');
  add('Offener Bestellwert', 'Open order value', 'Valeur de commande ouverte', 'Valor de pedido abierto', 'Valor de encomenda em aberto');
  add('EK netto, noch nicht geliefert', 'Net cost, not yet delivered', 'Prix d’achat net, pas encore livré', 'Coste neto, aún no entregado', 'Custo líquido, ainda não entregue');
  add('Bestellvorschlag', 'Order proposal', 'Proposition de commande', 'Propuesta de pedido', 'Proposta de encomenda');
  add('Bestellvorschlag öffnen', 'Open order proposal', 'Ouvrir la proposition', 'Abrir propuesta', 'Abrir proposta');
  add('Nummer, Lieferant oder Artikel', 'Number, supplier or item', 'Numéro, fournisseur ou article', 'Número, proveedor o artículo', 'Número, fornecedor ou artigo');
  add('Bestellung', 'Order', 'Commande', 'Pedido', 'Encomenda');
  add('Liefertermin', 'Delivery date', 'Date de livraison', 'Fecha de entrega', 'Data de entrega');
  add('EK netto', 'Net cost', 'Achat net', 'Coste neto', 'Custo líquido');
  add('Notiz:', 'Note:', 'Note :', 'Nota:', 'Nota:');
  add('Notiz', 'Note', 'Note', 'Nota', 'Nota');
  add('Bestellung als PDF', 'Order as PDF', 'Commande en PDF', 'Pedido en PDF', 'Encomenda em PDF');
  add('Bestätigung erfassen', 'Record confirmation', 'Saisir la confirmation', 'Registrar confirmación', 'Registar confirmação');
  add('Rest einbuchen', 'Post remainder', 'Enregistrer le reste', 'Registrar el resto', 'Registar o resto');
  add('Keine Lieferantenbestellung gefunden.', 'No supplier order found.', 'Aucune commande fournisseur trouvée.', 'No se encontró ningún pedido a proveedor.', 'Nenhuma encomenda a fornecedor encontrada.');
  add('In der Artikelliste suchen', 'Search item list', 'Rechercher dans les articles', 'Buscar en la lista de artículos', 'Pesquisar na lista de artigos');
  add('Bezeichnung *', 'Name *', 'Désignation *', 'Denominación *', 'Designação *');
  add('Artikelart', 'Item type', 'Type d’article', 'Tipo de artículo', 'Tipo de artigo');
  add('Artikelnummer', 'Item number', 'Référence', 'Número de artículo', 'Referência');
  add('Verkaufspreis € *', 'Sales price € *', 'Prix de vente € *', 'Precio de venta € *', 'Preço de venda € *');
  add('Bestellmenge *', 'Order quantity *', 'Quantité commandée *', 'Cantidad pedida *', 'Quantidade encomendada *');
  add('Anlegen & übernehmen', 'Create & add', 'Créer et reprendre', 'Crear y añadir', 'Criar e adicionar');
  add('Gewünschter Liefertermin', 'Requested delivery date', 'Date de livraison souhaitée', 'Fecha de entrega deseada', 'Data de entrega pretendida');
  add('z. B. Vereinsfarben, Sammeltransport', 'e.g. club colours, joint transport', 'p. ex. couleurs du club, transport groupé', 'p. ej. colores del club, transporte conjunto', 'p. ex. cores do clube, transporte conjunto');
  add('Bestellung anlegen', 'Create order', 'Créer la commande', 'Crear pedido', 'Criar encomenda');
  add('offen', 'open', 'ouvert', 'abierto', 'em aberto');
  add('Bons & Rechnungen', 'Receipts & invoices', 'Tickets et factures', 'Tickets y facturas', 'Talões e faturas');
  add('Bestellungen, Angebote & Termine', 'Orders, quotes & appointments', 'Commandes, devis et rendez-vous', 'Pedidos, ofertas y citas', 'Encomendas, propostas e marcações');
  add('Termin', 'Appointment', 'Rendez-vous', 'Cita', 'Marcação');
  add('Anschrift', 'Address', 'Adresse', 'Dirección', 'Morada');
  add('Gesellschaft (Fußzeile)', 'Company (footer)', 'Société (pied de page)', 'Sociedad (pie de página)', 'Sociedade (rodapé)');
  add('Bitte mindestens eine Menge eintragen.', 'Please enter at least one quantity.', 'Veuillez saisir au moins une quantité.', 'Introduzca al menos una cantidad.', 'Indique pelo menos uma quantidade.');
  add('Bitte Bezeichnung, Verkaufspreis und Menge eintragen.', 'Please enter name, sales price and quantity.', 'Veuillez saisir désignation, prix de vente et quantité.', 'Introduzca denominación, precio de venta y cantidad.', 'Indique designação, preço de venda e quantidade.');
  add('Bestellbeleg öffnen', 'Open order slip', 'Ouvrir le bon de commande', 'Abrir hoja de pedido', 'Abrir nota de encomenda');
  add('Angebot öffnen', 'Open quote', 'Ouvrir le devis', 'Abrir oferta', 'Abrir proposta');
  add('PDF auf beleg.zykol.de öffnen', 'Open PDF on beleg.zykol.de', 'Ouvrir le PDF sur beleg.zykol.de', 'Abrir PDF en beleg.zykol.de', 'Abrir PDF em beleg.zykol.de');
  // v12.01: Urlaubsantrag im Schichtplan
  add('Urlaub beantragen', 'Request leave', 'Demander un congé', 'Solicitar vacaciones', 'Pedir férias');
  add('Bemerkung (optional)', 'Note (optional)', 'Remarque (facultatif)', 'Nota (opcional)', 'Observação (opcional)');
  add('z. B. Familienfeier', 'e.g. family celebration', 'p. ex. fête de famille', 'p. ej. celebración familiar', 'p. ex. festa de família');
  add('Antrag senden', 'Send request', 'Envoyer la demande', 'Enviar solicitud', 'Enviar pedido');
  add('Bitte Beginn und Ende angeben.', 'Please enter start and end.', 'Veuillez indiquer le début et la fin.', 'Indique el inicio y el fin.', 'Indique o início e o fim.');
  add('Das Ende liegt vor dem Beginn.', 'The end is before the start.', 'La fin est avant le début.', 'El fin es anterior al inicio.', 'O fim é anterior ao início.');
  add('Zeiterfassung', 'Time tracking', 'Pointage', 'Fichaje', 'Ponto');
  // v11.13: Übersichtsseite Warenwirtschaft
  add('Artikel, Bestände, Einkauf und Bootsakten an einem Ort.', 'Items, stock, purchasing and boat records in one place.', 'Articles, stocks, achats et dossiers bateaux au même endroit.', 'Artículos, existencias, compras y fichas de barcos en un solo lugar.', 'Artigos, stock, compras e fichas de barcos num só lugar.');
  add('Übersicht', 'Overview', 'Aperçu', 'Resumen', 'Visão geral');
  add('Warenwirtschaft', 'Inventory', 'Gestion des stocks', 'Inventario', 'Gestão de stock');
  // v11.12: Schichtplan im Kalender (nur Ansicht)
  add('Schichtplan · Woche 35', 'Shift plan · week 35', 'Planning des équipes · semaine 35', 'Plan de turnos · semana 35', 'Escala de turnos · semana 35');
  add('Nur zur Ansicht. Geplant wird unter Einstellungen → Benutzer & Rollen.', 'View only. Planning is done under Settings → Users & roles.', 'Consultation uniquement. La planification se fait sous Paramètres → Utilisateurs et rôles.', 'Solo lectura. La planificación se hace en Ajustes → Usuarios y roles.', 'Apenas visualização. O planeamento faz-se em Definições → Utilizadores e funções.');
  // v11.11: Arbeitszeiterfassung als eigene Seite
  add('Personal', 'Staff', 'Personnel', 'Personal', 'Pessoal');
  add('Kommen und Gehen stempeln, Stunden und Saldo je Mitarbeitende.', 'Clock in and out, hours and balance per employee.', 'Pointer arrivées et départs, heures et solde par collaborateur.', 'Fichar entradas y salidas, horas y saldo por empleado.', 'Registar entradas e saídas, horas e saldo por colaborador.');
  add('Stempelübersicht', 'Time clock overview', 'Aperçu des pointages', 'Resumen de fichajes', 'Resumo de registos');
  [
    ['Januar','January','Janvier','Enero','Janeiro'], ['Februar','February','Février','Febrero','Fevereiro'], ['März','March','Mars','Marzo','Março'],
    ['April','April','Avril','Abril','Abril'], ['Mai','May','Mai','Mayo','Maio'], ['Juni','June','Juin','Junio','Junho'], ['Juli','July','Juillet','Julio','Julho'],
    ['August','August','Août','Agosto','Agosto'], ['September','September','Septembre','Septiembre','Setembro'], ['Oktober','October','Octobre','Octubre','Outubro'],
    ['November','November','Novembre','Noviembre','Novembro'], ['Dezember','December','Décembre','Diciembre','Dezembro'],
    ['Neujahr','New Year’s Day','Jour de l’An','Año Nuevo','Ano Novo'], ['Karfreitag','Good Friday','Vendredi saint','Viernes Santo','Sexta-feira Santa'],
    ['Ostermontag','Easter Monday','Lundi de Pâques','Lunes de Pascua','Segunda-feira de Páscoa'], ['Tag der Arbeit','Labour Day','Fête du Travail','Día del Trabajo','Dia do Trabalhador'],
    ['Christi Himmelfahrt','Ascension Day','Ascension','Ascensión','Dia da Ascensão'], ['Pfingstmontag','Whit Monday','Lundi de Pentecôte','Lunes de Pentecostés','Segunda-feira de Pentecostes'],
    ['Tag der Deutschen Einheit','German Unity Day','Fête de l’Unité allemande','Día de la Unidad Alemana','Dia da Unidade Alemã'], ['Reformationstag','Reformation Day','Fête de la Réformation','Día de la Reforma','Dia da Reforma'],
    ['1. Weihnachtstag','Christmas Day','Noël','Navidad','Dia de Natal'], ['2. Weihnachtstag','Boxing Day','Lendemain de Noël','San Esteban','2.º dia de Natal'],
    ['Laden geschlossen','Store closed','Magasin fermé','Tienda cerrada','Loja fechada'], ['Laden geschlossen, Regatta','Store closed, regatta','Magasin fermé, régate','Tienda cerrada, regata','Loja fechada, regata'],
    ['geschlossen. Termine und Aufgaben stehen am nächsten Werktag.','closed. Appointments and tasks are on the next working day.','fermé. Rendez-vous et tâches sont reportés au prochain jour ouvré.','cerrado. Citas y tareas pasan al siguiente día laborable.','fechado. Compromissos e tarefas passam para o próximo dia útil.'],
    ['Rest der Woche','Rest of the week','Reste de la semaine','Resto de la semana','Resto da semana'], ['Alle auf heute','All to today','Tout à aujourd’hui','Todo a hoy','Tudo para hoje'],
    ['Verteilen an …','Assign to …','Attribuer à …','Asignar a …','Atribuir a …'], ['Alle Terminarten','All appointment types','Tous les types de rendez-vous','Todos los tipos de cita','Todos os tipos de compromisso'],
    ['Für mich','For me','Pour moi','Para mí','Para mim'], ['Einkauf','Purchasing','Achats','Compras','Compras'], ['Gesamt','Total','Total','Total','Total'],
    ['Kein Kunde eingetragen','No customer entered','Aucun client saisi','Ningún cliente indicado','Nenhum cliente indicado'], ['Verbunden','Connected','Connecté','Conectado','Ligado'],
    ['Schichtplanung','Shift planning','Planning des équipes','Planificación de turnos','Planeamento de turnos'], ['Büro','Office','Bureau','Oficina','Escritório'],
    ['Lager','Warehouse','Entrepôt','Almacén','Armazém'], ['gekoppelt','paired','appairé','emparejado','emparelhado'],
    ['Bondrucker, Etiketten und A4-Ausgabe','Receipt printers, labels and A4 output','Imprimantes à tickets, étiquettes et sortie A4','Impresoras de tickets, etiquetas y salida A4','Impressoras de talões, etiquetas e saída A4'],
    ['A4-Rechnungen für Vereine, Firmen und Verbände','A4 invoices for clubs, companies and associations','Factures A4 pour clubs, entreprises et fédérations','Facturas A4 para clubes, empresas y federaciones','Faturas A4 para clubes, empresas e federações'],
    ['A4 Simplex/Duplex','A4 simplex/duplex','A4 recto/recto-verso','A4 una/dos caras','A4 simples/frente e verso'],
    ['80 ms zwischen Zeichen','80 ms between characters','80 ms entre caractères','80 ms entre caracteres','80 ms entre caracteres'],
    ['Systemzugang mit Vollzugriff — im Prototyp ohne PIN. Demo-PIN für Mitarbeitende: 1234.','System access with full rights — no PIN in the prototype. Demo PIN for staff: 1234.','Accès système complet — sans PIN dans le prototype. PIN de démo pour le personnel : 1234.','Acceso al sistema con todos los permisos — sin PIN en el prototipo. PIN de demostración para el personal: 1234.','Acesso ao sistema com todas as permissões — sem PIN no protótipo. PIN de demonstração para a equipa: 1234.'],
    ['Stempelungen im Prototyp wirken lokal und ersetzen keine gesetzeskonforme Zeiterfassung nach § 16 ArbZG.','Clock-ins in the prototype are local only and do not replace legally compliant time recording under § 16 ArbZG.','Les pointages du prototype restent locaux et ne remplacent pas un enregistrement du temps conforme au § 16 ArbZG.','Los fichajes del prototipo son solo locales y no sustituyen el registro horario legal según § 16 ArbZG.','Os registos de ponto no protótipo são apenas locais e não substituem o registo legal de horas segundo o § 16 ArbZG.'],
    ['Pflicht nach §146a AO und KassenSichV — Signatureinheit dieses Terminals.','Required under §146a AO and KassenSichV — signature unit of this terminal.','Obligatoire selon §146a AO et KassenSichV — module de signature de ce terminal.','Obligatorio según §146a AO y KassenSichV — unidad de firma de este terminal.','Obrigatório segundo §146a AO e KassenSichV — unidade de assinatura deste terminal.'],
    ['Design-Prototyp — Belegdaten sind Beispiele, keine Bestätigung der Anforderungen aus KassenSichV, DSFinV-K oder §146a AO.','Design prototype — receipt data are examples, not confirmation of requirements under KassenSichV, DSFinV-K or §146a AO.','Prototype de design — les données des tickets sont des exemples, sans confirmation des exigences KassenSichV, DSFinV-K ou §146a AO.','Prototipo de diseño — los datos de tickets son ejemplos, sin confirmar requisitos de KassenSichV, DSFinV-K o §146a AO.','Protótipo de design — os dados dos talões são exemplos, sem confirmação dos requisitos de KassenSichV, DSFinV-K ou §146a AO.'],
    ['„Seite 2 von 3"','“Page 2 of 3”','« Page 2 sur 3 »','«Página 2 de 3»','«Página 2 de 3»'],
    ['täglich, Valuta T+1','daily, value date T+1','quotidien, date de valeur J+1','diario, fecha valor T+1','diário, data-valor T+1'],
    ['täglich 22:00, automatisch','daily 22:00, automatic','tous les jours à 22:00, automatique','diario 22:00, automático','diário 22:00, automático'],
    ['Nachsignierung bei Netzstörung, max. 24 h','Re-signing after network outage, max. 24 h','Signature différée en cas de panne réseau, 24 h max.','Firma posterior tras caída de red, máx. 24 h','Assinatura posterior após falha de rede, máx. 24 h'],
    ['Automatisch um 23:30 in die Cloud','Automatically to the cloud at 23:30','Automatiquement vers le cloud à 23:30','Automáticamente a la nube a las 23:30','Automaticamente para a nuvem às 23:30'],
    ['DSFinV-K, täglich 23:30','DSFinV-K, daily 23:30','DSFinV-K, tous les jours à 23:30','DSFinV-K, diario 23:30','DSFinV-K, diário 23:30'],
    ['Anzahlung 30 %, Rest vor Versand','30 % deposit, balance before shipping','Acompte 30 %, solde avant expédition','Anticipo 30 %, resto antes del envío','Sinal 30 %, restante antes do envio'],
    ['4–8 Wochen (laminiert), 1–2 Wochen (PE, Paddel)','4–8 weeks (laminated), 1–2 weeks (PE, paddles)','4–8 semaines (stratifié), 1–2 semaines (PE, pagaies)','4–8 semanas (laminado), 1–2 semanas (PE, palas)','4–8 semanas (laminado), 1–2 semanas (PE, pagaias)'],
    ['Rennkajaks K1–K4, Renncanadier','Racing kayaks K1–K4, racing canoes','Kayaks de course K1–K4, canoës de course','Kayaks de competición K1–K4, canoas de competición','Caiaques de competição K1–K4, canoas de competição'],
    ['Offline-Autorisierung bis 50 €','Offline authorisation up to 50 €','Autorisation hors ligne jusqu’à 50 €','Autorización sin conexión hasta 50 €','Autorização offline até 50 €'],
    ['A4, Rechnungskunden','A4, invoice customers','A4, clients sur facture','A4, clientes con factura','A4, clientes a fatura'],
    ['A4 · Hochformat','A4 · portrait','A4 · portrait','A4 · vertical','A4 · vertical'],
    ['Bondruck 80 mm & PDF','80 mm receipt & PDF','Ticket 80 mm et PDF','Ticket 80 mm y PDF','Talão 80 mm e PDF'],
    ['Hochformat','Portrait','Portrait','Vertical','Vertical'], ['Vorschau','Preview','Aperçu','Vista previa','Pré-visualização']
  ].forEach(function (r) { add.apply(null, r); });

  // Muster: §n = Gruppe n über das Wörterbuch übersetzen, §ln = dasselbe kleingeschrieben, $n = Gruppe n unverändert
  var WT = '(Montag|Dienstag|Mittwoch|Donnerstag|Freitag|Samstag|Sonntag)';
  var MO = '(Januar|Februar|März|April|Mai|Juni|Juli|August|September|Oktober|November|Dezember)';
  var Z = '([\\d.,]+)';
  I.muster = [
    [WT + ', (\\d{1,2})\\. ' + MO + ' (\\d{4})', {en: '§1, §3 $2, $4', fr: '§1 $2 §l3 $4', es: '§1, $2 de §l3 de $4', pt: '§1, $2 de §l3 de $4'}],
    [MO + ' (\\d{4})', {en: '§1 $2', fr: '§1 $2', es: '§1 $2', pt: '§1 $2'}],
    ['Guten Morgen, (.+)', {en: 'Good morning, $1', fr: 'Bonjour, $1', es: 'Buenos días, $1', pt: 'Bom dia, $1'}],
    ['Guten Tag, (.+)', {en: 'Good afternoon, $1', fr: 'Bonjour, $1', es: 'Buenas tardes, $1', pt: 'Boa tarde, $1'}],
    ['Guten Abend, (.+)', {en: 'Good evening, $1', fr: 'Bonsoir, $1', es: 'Buenas noches, $1', pt: 'Boa noite, $1'}],
    ['(\\d+) Aufgaben? offen', {en: '$1 open tasks', fr: '$1 tâches ouvertes', es: '$1 tareas pendientes', pt: '$1 tarefas pendentes'}],
    ['Fällig seit (\\S+) · (\\d+) Tag', {en: 'Overdue since $1 · $2 day', fr: 'En retard depuis le $1 · $2 jour', es: 'Vencido desde $1 · $2 día', pt: 'Em atraso desde $1 · $2 dia'}],
    ['Fällig seit (\\S+) · (\\d+) Tage', {en: 'Overdue since $1 · $2 days', fr: 'En retard depuis le $1 · $2 jours', es: 'Vencido desde $1 · $2 días', pt: 'Em atraso desde $1 · $2 dias'}],
    ['(\\d+) von (\\d+) erledigt', {en: '$1 of $2 done', fr: '$1 sur $2 terminées', es: '$1 de $2 hechas', pt: '$1 de $2 concluídas'}],
    ['(\\d+) von (\\d+)', {en: '$1 of $2', fr: '$1 sur $2', es: '$1 de $2', pt: '$1 de $2'}],
    ['\\+ (\\d+) weitere', {en: '+ $1 more', fr: '+ $1 autres', es: '+ $1 más', pt: '+ $1 mais'}],
    ['(\\d+) weitere anzeigen', {en: 'Show $1 more', fr: 'Afficher $1 de plus', es: 'Mostrar $1 más', pt: 'Mostrar mais $1'}],
    ['(\\d+) Termin im ' + MO, {en: '$1 appointment in §2', fr: '$1 rendez-vous en §l2', es: '$1 cita en §l2', pt: '$1 compromisso em §l2'}],
    ['(\\d+) Termine im ' + MO, {en: '$1 appointments in §2', fr: '$1 rendez-vous en §l2', es: '$1 citas en §l2', pt: '$1 compromissos em §l2'}],
    ['Alle auf ' + WT, {en: 'All to §1', fr: 'Tout à §l1', es: 'Todo al §l1', pt: 'Tudo para §l1'}],
    ['Termine für (.+)', {en: 'Appointments for $1', fr: 'Rendez-vous pour $1', es: 'Citas para $1', pt: 'Compromissos para $1'}],
    ['An (.+)', {en: 'To $1', fr: 'À $1', es: 'A $1', pt: 'Para $1'}],
    [Z + ' Positionen', {en: '$1 items', fr: '$1 lignes', es: '$1 líneas', pt: '$1 linhas'}],
    [Z + ' Bons', {en: '$1 receipts', fr: '$1 tickets', es: '$1 tickets', pt: '$1 talões'}],
    [Z + ' offen', {en: '$1 open', fr: '$1 ouverts', es: '$1 pendientes', pt: '$1 pendentes'}],
    [Z + ' % Rabatt', {en: '$1 % discount', fr: 'Remise $1 %', es: '$1 % de descuento', pt: '$1 % de desconto'}],
    [Z + ' % MwSt\\.', {en: '$1 % VAT', fr: 'TVA $1 %', es: 'IVA $1 %', pt: 'IVA $1 %'}],
    ['darin ' + Z + ' % MwSt\\.', {en: 'incl. $1 % VAT', fr: 'dont TVA $1 %', es: 'incl. IVA $1 %', pt: 'incl. IVA $1 %'}],
    [Z + ' Transaktionen', {en: '$1 transactions', fr: '$1 transactions', es: '$1 transacciones', pt: '$1 transações'}],
    [Z + ' Transaktionen \\(modelliert\\)', {en: '$1 transactions (modelled)', fr: '$1 transactions (modélisées)', es: '$1 transacciones (modeladas)', pt: '$1 transações (modeladas)'}],
    [Z + ' Vorgänge', {en: '$1 transactions', fr: '$1 opérations', es: '$1 operaciones', pt: '$1 operações'}],
    [Z + ' % Anteil', {en: '$1 % share', fr: 'part $1 %', es: 'cuota $1 %', pt: 'quota $1 %'}],
    ['([+−-]?' + '[\\d.,]+) % vs\\. Vorwoche', {en: '$1 % vs. last week', fr: '$1 % vs semaine préc.', es: '$1 % vs. semana anterior', pt: '$1 % vs. semana anterior'}],
    ['([+−-]?' + '[\\d.,]+) vs\\. Vorwoche', {en: '$1 vs. last week', fr: '$1 vs semaine préc.', es: '$1 vs. semana anterior', pt: '$1 vs. semana anterior'}],
    ['Quote ' + Z + ' % vom Umsatz', {en: 'Rate $1 % of sales', fr: 'Taux $1 % du CA', es: 'Tasa $1 % de las ventas', pt: 'Taxa $1 % das vendas'}],
    ['(.+) je Transaktion', {en: '$1 per transaction', fr: '$1 par transaction', es: '$1 por transacción', pt: '$1 por transação'}],
    [Z + ' Artikel im Sortiment', {en: '$1 products in range', fr: '$1 articles au catalogue', es: '$1 artículos en catálogo', pt: '$1 artigos no catálogo'}],
    [Z + ' Artikel gekauft', {en: '$1 products bought', fr: '$1 articles achetés', es: '$1 artículos comprados', pt: '$1 artigos comprados'}],
    [Z + ' Artikel', {en: '$1 products', fr: '$1 articles', es: '$1 artículos', pt: '$1 artigos'}],
    [Z + ' Stück', {en: '$1 units', fr: '$1 unités', es: '$1 unidades', pt: '$1 unidades'}],
    [Z + ' Einträge', {en: '$1 entries', fr: '$1 entrées', es: '$1 entradas', pt: '$1 entradas'}],
    [Z + ' Farben', {en: '$1 colours', fr: '$1 couleurs', es: '$1 colores', pt: '$1 cores'}],
    [Z + ' Größen', {en: '$1 sizes', fr: '$1 tailles', es: '$1 tallas', pt: '$1 tamanhos'}],
    [Z + ' Angebote', {en: '$1 quotes', fr: '$1 devis', es: '$1 presupuestos', pt: '$1 orçamentos'}],
    [Z + ' entschieden', {en: '$1 decided', fr: '$1 décidés', es: '$1 decididos', pt: '$1 decididos'}],
    [Z + ' Kundenarten', {en: '$1 customer types', fr: '$1 types de clients', es: '$1 tipos de cliente', pt: '$1 tipos de cliente'}],
    [Z + ' Rubriken', {en: '$1 categories', fr: '$1 rubriques', es: '$1 categorías', pt: '$1 categorias'}],
    [Z + ' Länder', {en: '$1 countries', fr: '$1 pays', es: '$1 países', pt: '$1 países'}],
    [Z + ' € Volumen', {en: '$1 € volume', fr: 'Volume $1 €', es: 'Volumen $1 €', pt: 'Volume $1 €'}],
    [Z + ' € berechnet', {en: '$1 € charged', fr: '$1 € facturés', es: '$1 € cobrados', pt: '$1 € cobrados'}],
    [Z + ' h geplant', {en: '$1 h planned', fr: '$1 h prévues', es: '$1 h previstas', pt: '$1 h previstas'}],
    [Z + ' Benutzer zugewiesen', {en: '$1 users assigned', fr: '$1 utilisateurs affectés', es: '$1 usuarios asignados', pt: '$1 utilizadores atribuídos'}],
    ['(\\d+)–(\\d+) Wochen', {en: '$1–$2 weeks', fr: '$1–$2 semaines', es: '$1–$2 semanas', pt: '$1–$2 semanas'}],
    ['(\\d+)–(\\d+) Werktage', {en: '$1–$2 working days', fr: '$1–$2 jours ouvrés', es: '$1–$2 días laborables', pt: '$1–$2 dias úteis'}],
    ['Rechnung (\\d+) Tage', {en: 'Invoice $1 days', fr: 'Facture $1 jours', es: 'Factura $1 días', pt: 'Fatura $1 dias'}],
    ['Letzte (\\d+) Tage', {en: 'Last $1 days', fr: '$1 derniers jours', es: 'Últimos $1 días', pt: 'Últimos $1 dias'}],
    ['alle (\\d+) Minuten', {en: 'every $1 minutes', fr: 'toutes les $1 minutes', es: 'cada $1 minutos', pt: 'a cada $1 minutos'}],
    ['(\\d+) Jahre, revisionssicher', {en: '$1 years, audit-proof', fr: '$1 ans, inaltérable', es: '$1 años, a prueba de auditoría', pt: '$1 anos, à prova de auditoria'}],
    ['Barbeträge auf (\\d+) Cent runden', {en: 'Round cash amounts to $1 cents', fr: 'Arrondir les espèces à $1 centimes', es: 'Redondear el efectivo a $1 céntimos', pt: 'Arredondar numerário a $1 cêntimos'}],
    ['Eingestempelt seit (\\S+)', {en: 'Clocked in since $1', fr: 'Pointé depuis $1', es: 'Fichado desde $1', pt: 'Entrada desde $1'}],
    ['Schicht seit (\\S+)', {en: 'Shift since $1', fr: 'En poste depuis $1', es: 'Turno desde $1', pt: 'Turno desde $1'}],
    ['Woche (\\d+)', {en: 'Week $1', fr: 'Semaine $1', es: 'Semana $1', pt: 'Semana $1'}],
    ['Letzter Abgleich: heute (\\S+)', {en: 'Last sync: today $1', fr: 'Dernière synchro : aujourd’hui $1', es: 'Última sincronización: hoy $1', pt: 'Última sincronização: hoje $1'}],
    ['letzter Abgleich (\\S+)', {en: 'last sync $1', fr: 'dernière synchro $1', es: 'última sincronización $1', pt: 'última sincronização $1'}],
    ['Abholung ab (\\S+)', {en: 'Pick-up from $1', fr: 'Retrait à partir du $1', es: 'Recogida desde $1', pt: 'Levantamento a partir de $1'}],
    ['Abweichung (\\S+) s', {en: 'Deviation $1 s', fr: 'Écart $1 s', es: 'Desviación $1 s', pt: 'Desvio $1 s'}],
    ['gemeldet am (\\S+)', {en: 'reported on $1', fr: 'déclaré le $1', es: 'notificado el $1', pt: 'comunicado em $1'}],
    ['Meldebestand ≤ (\\d+)', {en: 'Reorder level ≤ $1', fr: 'Seuil de réassort ≤ $1', es: 'Stock mínimo ≤ $1', pt: 'Stock mínimo ≤ $1'}],
    ['Bestand ([+−-]\\d+)', {en: 'Stock $1', fr: 'Stock $1', es: 'Stock $1', pt: 'Stock $1'}],
    ['bis (\\d[\\d.]*)', {en: 'until $1', fr: 'jusqu’au $1', es: 'hasta $1', pt: 'até $1'}],
    ['seit (\\d[\\d.]*)', {en: 'since $1', fr: 'depuis $1', es: 'desde $1', pt: 'desde $1'}]
  ].map(function (m) { return [new RegExp('^' + m[0] + '$'), m[1]]; });
})();

(function () {
  var I = window.ZYKOL_I18N; if (!I) return; var D = I.dict;
  D['Gesamt ·'] = {en: 'Total ·', fr: 'Total ·', es: 'Total ·', pt: 'Total ·'};
  D['Preisliste Lettmann 2027 einpflegen'] = {en: 'Enter Lettmann 2027 price list', fr: 'Saisir la liste de prix Lettmann 2027', es: 'Introducir lista de precios Lettmann 2027', pt: 'Introduzir tabela de preços Lettmann 2027'};
  D['Wochenbericht Umsatz prüfen'] = {en: 'Check weekly sales report', fr: 'Vérifier le rapport hebdomadaire des ventes', es: 'Revisar informe semanal de ventas', pt: 'Verificar relatório semanal de vendas'};
  D['Verkaufsfläche auffüllen und Preisschilder prüfen'] = {en: 'Restock sales floor and check price tags', fr: 'Réassortir la surface de vente et vérifier les étiquettes', es: 'Reponer la zona de venta y revisar etiquetas de precio', pt: 'Repor a área de venda e verificar etiquetas de preço'};
  D['Paddel und Westen'] = {en: 'Paddles and buoyancy aids', fr: 'Pagaies et gilets', es: 'Palas y chalecos', pt: 'Pagaias e coletes'};
  D['Kassenbestand 300,00 €'] = {en: 'Cash float 300.00 €', fr: 'Fonds de caisse 300,00 €', es: 'Fondo de caja 300,00 €', pt: 'Fundo de caixa 300,00 €'};
  D['Automatisches Backup · 03:00 Uhr'] = {en: 'Automatic backup · 03:00', fr: 'Sauvegarde automatique · 03:00', es: 'Copia automática · 03:00', pt: 'Cópia automática · 03:00'};
  D['Lieferanten · Mindestbestand unterschritten'] = {en: 'Suppliers · below minimum stock', fr: 'Fournisseurs · stock minimum dépassé', es: 'Proveedores · por debajo del stock mínimo', pt: 'Fornecedores · abaixo do stock mínimo'};
  D['Auf Rechnung abschließen'] = {en: 'Complete on invoice', fr: 'Clôturer sur facture', es: 'Cerrar con factura', pt: 'Concluir com fatura'};
  D['Bestellbelege'] = {en: 'Order slips', fr: 'Bons de commande', es: 'Hojas de pedido', pt: 'Notas de encomenda'};
  D['Jeder gedruckte Bestellbeleg wird hier abgelegt – mit Status bis zur Übergabe.'] = {en: 'Every printed order slip is filed here – with its status until handover.', fr: 'Chaque bon de commande imprimé est classé ici – avec son statut jusqu’à la remise.', es: 'Cada hoja de pedido impresa se archiva aquí, con su estado hasta la entrega.', pt: 'Cada nota de encomenda impressa fica guardada aqui – com o estado até à entrega.'};
  D['Bestellt'] = {en: 'Ordered', fr: 'Commandé', es: 'Pedido', pt: 'Encomendado'};
  D['Abholbereit'] = {en: 'Ready for pickup', fr: 'Prêt à retirer', es: 'Listo para recoger', pt: 'Pronto para levantamento'};
  D['Übergeben'] = {en: 'Handed over', fr: 'Remis', es: 'Entregado', pt: 'Entregue'};
  D['Ware bestellt oder in Arbeit'] = {en: 'Goods ordered or in progress', fr: 'Marchandise commandée ou en cours', es: 'Mercancía pedida o en curso', pt: 'Mercadoria encomendada ou em curso'};
  D['Kunde kann abholen'] = {en: 'Customer can pick up', fr: 'Le client peut retirer', es: 'El cliente puede recoger', pt: 'O cliente pode levantar'};
  D['abgeschlossen'] = {en: 'completed', fr: 'terminé', es: 'cerrado', pt: 'concluído'};
  D['Anzahlungen offen'] = {en: 'Open deposits', fr: 'Acomptes en cours', es: 'Anticipos abiertos', pt: 'Sinais em aberto'};
  D['bei nicht übergebenen Belegen'] = {en: 'on slips not yet handed over', fr: 'sur les bons non remis', es: 'en hojas aún no entregadas', pt: 'em notas ainda não entregues'};
  D['Nummer, Kunde, Telefon oder Artikel'] = {en: 'Number, customer, phone or item', fr: 'Numéro, client, téléphone ou article', es: 'Número, cliente, teléfono o artículo', pt: 'Número, cliente, telefone ou artigo'};
  D['Anzahlung'] = {en: 'Deposit', fr: 'Acompte', es: 'Anticipo', pt: 'Sinal'};
  D['Ohne Personalisierung'] = {en: 'No personalisation', fr: 'Sans personnalisation', es: 'Sin personalización', pt: 'Sem personalização'};
  D['Erneut drucken'] = {en: 'Print again', fr: 'Réimprimer', es: 'Volver a imprimir', pt: 'Imprimir novamente'};
  D['Kein Bestellbeleg gefunden.'] = {en: 'No order slip found.', fr: 'Aucun bon de commande trouvé.', es: 'No se encontró ninguna hoja de pedido.', pt: 'Nenhuma nota de encomenda encontrada.'};
  D['Neue Bestellbelege entstehen im Warenkorb über „Bestellbeleg“ → „Drucken / PDF“.'] = {en: 'New order slips are created in the cart via “Order slip” → “Print / PDF”.', fr: 'Les nouveaux bons de commande se créent dans le panier via « Bon de commande » → « Imprimer / PDF ».', es: 'Las nuevas hojas de pedido se crean en el carrito con «Hoja de pedido» → «Imprimir / PDF».', pt: 'As novas notas de encomenda criam-se no carrinho em «Nota de encomenda» → «Imprimir / PDF».'};
  D['1 Position'] = {en: '1 item', fr: '1 position', es: '1 posición', pt: '1 linha'};
  D['Kunde, Übergabe & Bezahlung'] = {en: 'Customer, handover & payment', fr: 'Client, remise et paiement', es: 'Cliente, entrega y pago', pt: 'Cliente, entrega e pagamento'};
  D['Bezahlung'] = {en: 'Payment', fr: 'Paiement', es: 'Pago', pt: 'Pagamento'};
  D['Noch offen'] = {en: 'Not yet paid', fr: 'Pas encore payé', es: 'Pendiente de pago', pt: 'Ainda por pagar'};
  D['Bezahlt · Karte'] = {en: 'Paid · card', fr: 'Payé · carte', es: 'Pagado · tarjeta', pt: 'Pago · cartão'};
  D['Bezahlt · Bar'] = {en: 'Paid · cash', fr: 'Payé · espèces', es: 'Pagado · efectivo', pt: 'Pago · numerário'};
  D['Übergabe erst nach Bezahlung.'] = {en: 'Handover only after payment.', fr: 'Remise uniquement après paiement.', es: 'Entrega solo tras el pago.', pt: 'Entrega só após pagamento.'};
  D['Übergabe erlaubt, Zahlung per Rechnung.'] = {en: 'Handover allowed, payment by invoice.', fr: 'Remise autorisée, paiement sur facture.', es: 'Entrega permitida, pago con factura.', pt: 'Entrega permitida, pagamento com fatura.'};
  D['Bezahlt – Übergabe erlaubt.'] = {en: 'Paid – handover allowed.', fr: 'Payé – remise autorisée.', es: 'Pagado – entrega permitida.', pt: 'Pago – entrega permitida.'};
  D['Noch zu kassieren'] = {en: 'Still to collect', fr: 'Reste à encaisser', es: 'Pendiente de cobro', pt: 'Por cobrar'};
  D['vor der Übergabe, ohne Rechnungskunden'] = {en: 'before handover, excluding invoice customers', fr: 'avant la remise, hors clients sur facture', es: 'antes de la entrega, sin clientes con factura', pt: 'antes da entrega, sem clientes a fatura'};
  D['Noch nicht bezahlt – Übergabe erst nach Bezahlung oder mit Zahlungsziel auf Rechnung.'] = {en: 'Not yet paid – handover only after payment or with a payment term on invoice.', fr: 'Pas encore payé – remise uniquement après paiement ou avec délai de paiement sur facture.', es: 'Aún no pagado: entrega solo tras el pago o con plazo de pago en factura.', pt: 'Ainda não pago – entrega só após pagamento ou com prazo de pagamento em fatura.'};
  D['Bezahlt mit Karte'] = {en: 'Paid by card', fr: 'Payé par carte', es: 'Pagado con tarjeta', pt: 'Pago com cartão'};
  D['Bezahlt bar'] = {en: 'Paid in cash', fr: 'Payé en espèces', es: 'Pagado en efectivo', pt: 'Pago em numerário'};
  D['Auf Rechnung (14 Tage)'] = {en: 'On invoice (14 days)', fr: 'Sur facture (14 jours)', es: 'Con factura (14 días)', pt: 'Com fatura (14 dias)'};
  D['Übergabe nicht möglich: Die Bestellung ist noch nicht bezahlt.'] = {en: 'Handover not possible: the order has not been paid yet.', fr: 'Remise impossible : la commande n’est pas encore payée.', es: 'Entrega no posible: el pedido aún no está pagado.', pt: 'Entrega impossível: a encomenda ainda não foi paga.'};
  D['Erst kassieren – Bestellung ist noch nicht bezahlt'] = {en: 'Collect payment first – order not yet paid', fr: 'Encaisser d’abord – commande pas encore payée', es: 'Cobrar primero: pedido aún no pagado', pt: 'Cobrar primeiro – encomenda ainda não paga'};
  D['Kunde suchen — Name, Nummer oder Telefon'] = {en: 'Search customer — name, number or phone', fr: 'Rechercher un client — nom, numéro ou téléphone', es: 'Buscar cliente — nombre, número o teléfono', pt: 'Procurar cliente — nome, número ou telefone'};
  D['Kein Kunde gefunden — unten als neuen Kunden eintragen.'] = {en: 'No customer found — enter a new customer below.', fr: 'Aucun client trouvé — saisissez un nouveau client ci-dessous.', es: 'No se encontró ningún cliente: introduzca uno nuevo abajo.', pt: 'Nenhum cliente encontrado — introduza um novo cliente abaixo.'};
  D['Oder neuen Kunden eintragen:'] = {en: 'Or enter a new customer:', fr: 'Ou saisir un nouveau client :', es: 'O introducir un cliente nuevo:', pt: 'Ou introduzir um novo cliente:'};
  D['Anderer Kunde'] = {en: 'Other customer', fr: 'Autre client', es: 'Otro cliente', pt: 'Outro cliente'};
  D['Als neuen Kunden speichern'] = {en: 'Save as new customer', fr: 'Enregistrer comme nouveau client', es: 'Guardar como cliente nuevo', pt: 'Guardar como novo cliente'};
  D['Belegausgabe'] = {en: 'Receipt output', fr: 'Sortie des justificatifs', es: 'Emisión de comprobantes', pt: 'Emissão de comprovativos'};
  D['Bon drucken'] = {en: 'Print receipt', fr: 'Imprimer le ticket', es: 'Imprimir ticket', pt: 'Imprimir talão'};
  D['Wird immer gedruckt'] = {en: 'Always printed', fr: 'Toujours imprimé', es: 'Se imprime siempre', pt: 'Sempre impresso'};
  D['Rechnung drucken'] = {en: 'Print invoice', fr: 'Imprimer la facture', es: 'Imprimir factura', pt: 'Imprimir fatura'};
  D['Zusätzlich zum Bon, direkt am Drucker'] = {en: 'In addition to the receipt, straight to the printer', fr: 'En plus du ticket, directement sur l’imprimante', es: 'Además del ticket, directamente en la impresora', pt: 'Além do talão, diretamente na impressora'};
  D['Rechnung per E-Mail senden'] = {en: 'Send invoice by email', fr: 'Envoyer la facture par e-mail', es: 'Enviar factura por e-mail', pt: 'Enviar fatura por e-mail'};
  D['Als PDF an den Kunden'] = {en: 'As a PDF to the customer', fr: 'En PDF au client', es: 'En PDF al cliente', pt: 'Em PDF para o cliente'};
  D['Bon und Rechnung werden am Vorgang abgelegt (Transaktionen).'] = {en: 'Receipt and invoice are attached to the transaction (Transactions).', fr: 'Le ticket et la facture sont joints à l’opération (Transactions).', es: 'El ticket y la factura se adjuntan a la operación (Transacciones).', pt: 'O talão e a fatura ficam anexados à operação (Transações).'};
  D['Abschließen · Bon drucken'] = {en: 'Complete · print receipt', fr: 'Terminer · imprimer le ticket', es: 'Finalizar · imprimir ticket', pt: 'Concluir · imprimir talão'};
  D['Abschließen · Bon + Rechnung drucken'] = {en: 'Complete · print receipt + invoice', fr: 'Terminer · imprimer ticket + facture', es: 'Finalizar · imprimir ticket + factura', pt: 'Concluir · imprimir talão + fatura'};
  D['Abschließen · Bon drucken, Rechnung senden'] = {en: 'Complete · print receipt, send invoice', fr: 'Terminer · imprimer le ticket, envoyer la facture', es: 'Finalizar · imprimir ticket, enviar factura', pt: 'Concluir · imprimir talão, enviar fatura'};
  D['Angehängte Dokumente'] = {en: 'Attached documents', fr: 'Documents joints', es: 'Documentos adjuntos', pt: 'Documentos anexados'};
  D['Bon'] = {en: 'Receipt', fr: 'Ticket', es: 'Ticket', pt: 'Talão'};
  D['gedruckt'] = {en: 'printed', fr: 'imprimé', es: 'impreso', pt: 'impresso'};
  D['E-Mail-Adresse für die Rechnung'] = {en: 'Email address for the invoice', fr: 'Adresse e-mail pour la facture', es: 'Dirección de e-mail para la factura', pt: 'Endereço de e-mail para a fatura'};
  D['Bei Zahlart Rechnung gibt es keinen Bon. Die Rechnung ist Pflicht: drucken oder per E-Mail senden.'] = {en: 'With payment by invoice there is no receipt. The invoice is required: print it or send it by email.', fr: 'En paiement sur facture, il n’y a pas de ticket. La facture est obligatoire : l’imprimer ou l’envoyer par e-mail.', es: 'Con pago por factura no hay ticket. La factura es obligatoria: imprimirla o enviarla por e-mail.', pt: 'Com pagamento por fatura não há talão. A fatura é obrigatória: imprimir ou enviar por e-mail.'};
  D['Abschließen · Rechnung drucken'] = {en: 'Complete · print invoice', fr: 'Terminer · imprimer la facture', es: 'Finalizar · imprimir factura', pt: 'Concluir · imprimir fatura'};
  D['Abschließen · Rechnung senden'] = {en: 'Complete · send invoice', fr: 'Terminer · envoyer la facture', es: 'Finalizar · enviar factura', pt: 'Concluir · enviar fatura'};
  D['Direkt am Drucker'] = {en: 'Straight to the printer', fr: 'Directement sur l’imprimante', es: 'Directamente en la impresora', pt: 'Diretamente na impressora'};
  D['Die Rechnung wird am Vorgang abgelegt (Transaktionen).'] = {en: 'The invoice is attached to the transaction (Transactions).', fr: 'La facture est jointe à l’opération (Transactions).', es: 'La factura se adjunta a la operación (Transacciones).', pt: 'A fatura fica anexada à operação (Transações).'};
  D['Bezahlen'] = {en: 'Pay', fr: 'Payer', es: 'Pagar', pt: 'Pagar'};
  D['Zahlart wählen'] = {en: 'Choose payment method', fr: 'Choisir le mode de paiement', es: 'Elegir forma de pago', pt: 'Escolher meio de pagamento'};
  D['Abschluss auf Rechnung (Rechnungskunden, Paddel-IDs)'] = {en: 'Complete on invoice (invoice customers, paddle IDs)', fr: 'Clôture sur facture (clients sur facture, ID de pagaie)', es: 'Cierre con factura (clientes con factura, ID de palas)', pt: 'Conclusão com fatura (clientes a fatura, ID de pagaias)'};
  D['Etikett für jedes verkaufte Boot, zum Aufkleben am Boot. Der QR-Code führt zur Bootsakte mit Garantie und Service.'] = {en: 'A label for every boat sold, to stick on the boat. The QR code leads to the boat file with warranty and service.', fr: 'Une étiquette pour chaque bateau vendu, à coller sur le bateau. Le QR code mène à la fiche bateau avec garantie et service.', es: 'Una etiqueta para cada barco vendido, para pegar en el barco. El código QR lleva a la ficha del barco con garantía y servicio.', pt: 'Uma etiqueta para cada barco vendido, para colar no barco. O código QR leva à ficha do barco com garantia e assistência.'};
  D['1 Boot · QR-Etikett mit Seriennummer'] = {en: '1 boat · QR label with serial number', fr: '1 bateau · étiquette QR avec numéro de série', es: '1 barco · etiqueta QR con número de serie', pt: '1 barco · etiqueta QR com número de série'};
  D['Nachdrucken'] = {en: 'Reprint', fr: 'Réimprimer', es: 'Reimprimir', pt: 'Reimprimir'};
  [
    ['Abgelaufenes Angebot (\\S+) nachfassen', {en: 'Follow up expired quote $1', fr: 'Relancer le devis expiré $1', es: 'Seguimiento del presupuesto vencido $1', pt: 'Acompanhar orçamento expirado $1'}],
    ['Nachfassen: Angebot (\\S+)', {en: 'Follow up: quote $1', fr: 'Relance : devis $1', es: 'Seguimiento: presupuesto $1', pt: 'Acompanhamento: orçamento $1'}],
    ['Angebot (\\S+) versenden', {en: 'Send quote $1', fr: 'Envoyer le devis $1', es: 'Enviar presupuesto $1', pt: 'Enviar orçamento $1'}],
    ['Angebot (\\S+) läuft ab', {en: 'Quote $1 expires', fr: 'Le devis $1 expire', es: 'El presupuesto $1 vence', pt: 'O orçamento $1 expira'}],
    ['gültig bis (\\S+)', {en: 'valid until $1', fr: 'valable jusqu’au $1', es: 'válido hasta $1', pt: 'válido até $1'}],
    ['Kasse (.+)', {en: 'Register $1', fr: 'Caisse $1', es: 'Caja $1', pt: 'Caixa $1'}],
    ['Zeitraum (.+)', {en: 'Period $1', fr: 'Période $1', es: 'Periodo $1', pt: 'Período $1'}],
    ['(\\d+) Boote · QR-Etiketten mit Seriennummer', {en: '$1 boats · QR labels with serial number', fr: '$1 bateaux · étiquettes QR avec numéro de série', es: '$1 barcos · etiquetas QR con número de serie', pt: '$1 barcos · etiquetas QR com número de série'}],
    ['(\\d+) Positionen', {en: '$1 items', fr: '$1 positions', es: '$1 posiciones', pt: '$1 linhas'}],
    ['(Abholung|Lieferung|Versand) ab (\\S+)', {en: '§1 from $2', fr: '§1 à partir du $2', es: '§1 desde el $2', pt: '§1 a partir de $2'}],
    ['Bestellbeleg (\\S+) abgelegt — zu finden unter „Bestellbelege“\\.', {en: 'Order slip $1 filed — find it under “Order slips”.', fr: 'Bon de commande $1 classé — à retrouver sous « Bons de commande ».', es: 'Hoja de pedido $1 archivada — está en «Hojas de pedido».', pt: 'Nota de encomenda $1 guardada — encontra-a em «Notas de encomenda».'}],
    ['Bestellbeleg (\\S+) aktualisiert — zu finden unter „Bestellbelege“\\.', {en: 'Order slip $1 updated — find it under “Order slips”.', fr: 'Bon de commande $1 mis à jour — à retrouver sous « Bons de commande ».', es: 'Hoja de pedido $1 actualizada — está en «Hojas de pedido».', pt: 'Nota de encomenda $1 atualizada — encontra-a em «Notas de encomenda».'}],
    ['Erstellt (\\S+) · (.+) · (.+) · Gesamt (.+)', {en: 'Created $1 · $2 · $3 · Total $4', fr: 'Créé le $1 · $2 · $3 · Total $4', es: 'Creado $1 · $2 · $3 · Total $4', pt: 'Criado $1 · $2 · $3 · Total $4'}],
    ['Rechnung · (\\d+) Tage', {en: 'Invoice · $1 days', fr: 'Facture · $1 jours', es: 'Factura · $1 días', pt: 'Fatura · $1 dias'}],
    ['Noch offen: (.+) \\(Anzahlung (.+) erhalten\\)', {en: 'Still open: $1 (deposit $2 received)', fr: 'Reste dû : $1 (acompte $2 reçu)', es: 'Pendiente: $1 (anticipo $2 recibido)', pt: 'Em aberto: $1 (sinal $2 recebido)'}],
    ['Noch offen: (.+)', {en: 'Still open: $1', fr: 'Reste dû : $1', es: 'Pendiente: $1', pt: 'Em aberto: $1'}],
    ['Bon ([A-Z]+-\\d{4}-\\d+)', {en: 'Receipt $1', fr: 'Ticket $1', es: 'Ticket $1', pt: 'Talão $1'}],
    ['Rechnung ([A-Z]+-\\d{4}-\\d+)', {en: 'Invoice $1', fr: 'Facture $1', es: 'Factura $1', pt: 'Fatura $1'}],
    ['per E-Mail an (.+)', {en: 'by email to $1', fr: 'par e-mail à $1', es: 'por e-mail a $1', pt: 'por e-mail para $1'}],
    ['Vorgang (\\S+) abgeschlossen — Bon gedruckt\\. Belege hängen am Vorgang\\.', {en: 'Transaction $1 completed — receipt printed. Documents are attached to the transaction.', fr: 'Opération $1 terminée — ticket imprimé. Les justificatifs sont joints à l’opération.', es: 'Operación $1 finalizada — ticket impreso. Los comprobantes están adjuntos a la operación.', pt: 'Operação $1 concluída — talão impresso. Os comprovativos estão anexados à operação.'}],
    ['Vorgang (\\S+) abgeschlossen — Bon gedruckt, Rechnung (\\S+) gedruckt\\. Belege hängen am Vorgang\\.', {en: 'Transaction $1 completed — receipt printed, invoice $2 printed. Documents are attached to the transaction.', fr: 'Opération $1 terminée — ticket imprimé, facture $2 imprimée. Les justificatifs sont joints à l’opération.', es: 'Operación $1 finalizada — ticket impreso, factura $2 impresa. Los comprobantes están adjuntos a la operación.', pt: 'Operação $1 concluída — talão impresso, fatura $2 impressa. Os comprovativos estão anexados à operação.'}],
    ['Vorgang (\\S+) abgeschlossen — Bon gedruckt, Rechnung (\\S+) an (\\S+) gesendet\\. Belege hängen am Vorgang\\.', {en: 'Transaction $1 completed — receipt printed, invoice $2 sent to $3. Documents are attached to the transaction.', fr: 'Opération $1 terminée — ticket imprimé, facture $2 envoyée à $3. Les justificatifs sont joints à l’opération.', es: 'Operación $1 finalizada — ticket impreso, factura $2 enviada a $3. Los comprobantes están adjuntos a la operación.', pt: 'Operação $1 concluída — talão impresso, fatura $2 enviada para $3. Os comprovativos estão anexados à operação.'}],
    ['Vorgang (\\S+) abgeschlossen — Rechnung (\\S+) gedruckt\\. Belege hängen am Vorgang\\.', {en: 'Transaction $1 completed — invoice $2 printed. Documents are attached to the transaction.', fr: 'Opération $1 terminée — facture $2 imprimée. Les justificatifs sont joints à l’opération.', es: 'Operación $1 finalizada — factura $2 impresa. Los comprobantes están adjuntos a la operación.', pt: 'Operação $1 concluída — fatura $2 impressa. Os comprovativos estão anexados à operação.'}],
    ['Vorgang (\\S+) abgeschlossen — Rechnung (\\S+) an (\\S+) gesendet\\. Belege hängen am Vorgang\\.', {en: 'Transaction $1 completed — invoice $2 sent to $3. Documents are attached to the transaction.', fr: 'Opération $1 terminée — facture $2 envoyée à $3. Les justificatifs sont joints à l’opération.', es: 'Operación $1 finalizada — factura $2 enviada a $3. Los comprobantes están adjuntos a la operación.', pt: 'Operação $1 concluída — fatura $2 enviada para $3. Os comprovativos estão anexados à operação.'}],
    ['Berichte · KW (\\d+)', {en: 'Reports · week $1', fr: 'Rapports · semaine $1', es: 'Informes · semana $1', pt: 'Relatórios · semana $1'}]
  ].forEach(function (m) { I.muster.push([new RegExp('^' + m[0] + '$'), m[1]]); });
})();
(function () {
  var D = window.ZYKOL_I18N && window.ZYKOL_I18N.dict; if (!D) return;
  D['Angebote aus der Kasse'] = {en: 'Quotes from checkout', fr: 'Devis de la caisse', es: 'Presupuestos de caja', pt: 'Orçamentos da caixa'};
  D['In Warenkorb laden'] = {en: 'Load into cart', fr: 'Charger dans le panier', es: 'Cargar en el carrito', pt: 'Carregar no carrinho'};
  D['Barkunde (ohne Kundendaten)'] = {en: 'Cash customer (no customer data)', fr: 'Client comptant (sans données client)', es: 'Cliente de contado (sin datos)', pt: 'Cliente a dinheiro (sem dados)'};
  D['Barkunde'] = {en: 'Cash customer', fr: 'Client comptant', es: 'Cliente de contado', pt: 'Cliente a dinheiro'};
  // v12.11: Überschrift Umsatz-Dashboard
  D['Umsatz-Dashboard Kanurennsport'] = {en: 'Sales dashboard canoe sprint', fr: 'Tableau des ventes canoë-kayak de course en ligne', es: 'Panel de ventas piragüismo de velocidad', pt: 'Painel de vendas canoagem de velocidade'};
})();
// v12.13: restliche Texte aus Umsatz-Dashboard, Fußleiste, Kalender und Bedienhilfen (aria-label)
(function () {
  var I = window.ZYKOL_I18N; if (!I || !I.dict) return;
  var D = I.dict, add = function (de, en, fr, es, pt) { D[de] = {en: en, fr: fr, es: es, pt: pt}; };
  [
    ['bis', 'to', 'à', 'a', 'a'],
    ['Stand:', 'As of:', 'État :', 'Estado:', 'Estado:'],
    ['Basis:', 'Based on:', 'Base :', 'Base:', 'Base:'],
    ['Verkaufsraum', 'Sales floor', 'Surface de vente', 'Sala de ventas', 'Área de venda'],
    ['Laden', 'Store', 'Magasin', 'Tienda', 'Loja'],
    ['Laufkundschaft', 'Walk-in customers', 'Clients de passage', 'Clientes de paso', 'Clientes de passagem'],
    ['Paketdienst', 'Parcel service', 'Service colis', 'Mensajería', 'Serviço de encomendas'],
    ['Einzelkunde', 'Individual customer', 'Client individuel', 'Cliente individual', 'Cliente individual'],
    ['Transaktionen', 'Transactions', 'Transactions', 'Transacciones', 'Transações'],
    ['Steueranlage K1 Sete tauschen', 'Replace rudder system K1 Sete', 'Remplacer le gouvernail K1 Sete', 'Cambiar timón K1 Sete', 'Trocar leme K1 Sete'],
    ['Steuerseil Surfski erneuern', 'Renew surfski rudder cable', 'Remplacer le câble de gouvernail du surfski', 'Renovar cable de timón del surfski', 'Renovar cabo do leme do surfski'],
    ['Sitzanpassung Rennboot', 'Seat fitting racing boat', 'Réglage du siège bateau de course', 'Ajuste de asiento barco de competición', 'Ajuste do assento barco de competição'],
    ['Aufgabe verteilen', 'Assign task', 'Attribuer la tâche', 'Asignar tarea', 'Atribuir tarefa'],
    ['Fällig am', 'Due on', 'Échéance', 'Vence el', 'Prazo'],
    ['Terminart', 'Appointment type', 'Type de rendez-vous', 'Tipo de cita', 'Tipo de compromisso'],
    ['Zur Kasse', 'To checkout', 'Vers la caisse', 'A caja', 'Para a caixa'],
    ['Zuweisen an', 'Assign to', 'Attribuer à', 'Asignar a', 'Atribuir a'],
    ['Berichte öffnen', 'Open reports', 'Ouvrir les rapports', 'Abrir informes', 'Abrir relatórios'],
    ['Transaktionen ·', 'Transactions ·', 'Transactions ·', 'Transacciones ·', 'Transações ·']
  ].forEach(function (r) { add.apply(null, r); });
  var K = '(Jan|Feb|Mär|Apr|Mai|Jun|Jul|Aug|Sep|Okt|Nov|Dez)';
  [
    [K + ' (\\d{2,4}) – ' + K + ' (\\d{2,4})', {en: '§1 $2 – §3 $4', fr: '§1 $2 – §3 $4', es: '§1 $2 – §3 $4', pt: '§1 $2 – §3 $4'}],
    [K + ' (\\d{2})', {en: '§1 $2', fr: '§1 $2', es: '§1 $2', pt: '§1 $2'}],
    ['Rennkajak (K\\d)', {en: 'Racing kayak $1', fr: 'Kayak de course $1', es: 'Kayak de competición $1', pt: 'Caiaque de competição $1'}],
    ['Renncanadier (C\\d)', {en: 'Racing canoe $1', fr: 'Canoë de course $1', es: 'Canoa de competición $1', pt: 'Canoa de competição $1'}],
    ['Wareneingang (.+)', {en: 'Goods receipt $1', fr: 'Réception $1', es: 'Entrada de mercancía $1', pt: 'Receção de mercadoria $1'}],
    ['Großhandel: (.+)', {en: 'Wholesale: $1', fr: 'Grossistes : $1', es: 'Mayoristas: $1', pt: 'Grossistas: $1'}],
    ['Mo – So, KW (\\d+)', {en: 'Mon – Sun, week $1', fr: 'lun. – dim., semaine $1', es: 'lun. – dom., semana $1', pt: 'seg. – dom., semana $1'}],
    ['(\\d+) Hersteller', {en: '$1 manufacturers', fr: '$1 fabricants', es: '$1 fabricantes', pt: '$1 fabricantes'}],
    ['(\\d+) Artikel unter Meldebestand', {en: '$1 items below reorder level', fr: '$1 articles sous le seuil de commande', es: '$1 artículos bajo el punto de pedido', pt: '$1 artigos abaixo do ponto de encomenda'}],
    ['([\\d.,]+) € EK netto', {en: '$1 € net purchase', fr: '$1 € achat HT', es: '$1 € compra neto', pt: '$1 € compra líquido'}],
    ['Angebot (\\S+) öffnen', {en: 'Open quote $1', fr: 'Ouvrir le devis $1', es: 'Abrir presupuesto $1', pt: 'Abrir orçamento $1'}],
    ['(.+) öffnen', {en: 'Open §1', fr: 'Ouvrir §1', es: 'Abrir §1', pt: 'Abrir §1'}]
  ].forEach(function (m) { I.muster.push([new RegExp('^' + m[0] + '$'), m[1]]); });
})();

/* v12.16 Artikel & Bestand */
(function () {
  var I = window.ZYKOL_I18N; if (!I) return;
  var D = I.dict;
  [
    ['Artikel & Bestand', 'Products & stock', 'Articles & stock', 'Artículos y existencias', 'Artigos e stock'],
    ['Lager & Historie', 'Stock & history', 'Stock & historique', 'Existencias e historial', 'Stock e histórico'],
    ['Bestand ändert sich nur durch Verkauf, Wareneingang oder eine Buchung mit Grund.', 'Stock only changes through sales, goods receipts or a booking with a reason.', 'Le stock ne change que par une vente, une réception de marchandises ou une écriture motivée.', 'Las existencias solo cambian por ventas, entradas de mercancía o un asiento con motivo.', 'O stock só muda por vendas, receção de mercadoria ou um lançamento com motivo.'],
    ['Wareneingang buchen', 'Book goods receipt', 'Enregistrer une réception', 'Registrar entrada de mercancía', 'Registar receção de mercadoria'],
    ['Buchen', 'Book', 'Enregistrer', 'Registrar', 'Registar'],
    ['Bestand buchen', 'Book stock change', 'Enregistrer un mouvement', 'Registrar movimiento', 'Registar movimento'],
    ['Bestandshistorie', 'Stock history', 'Historique du stock', 'Historial de existencias', 'Histórico de stock'],
    ['Bestandsbuchungen wirken in diesem Prototyp nur lokal — keine Anbindung an Warenwirtschaft oder TSE.', 'Stock bookings in this prototype are local only — no connection to inventory management or TSE.', 'Dans ce prototype, les mouvements de stock restent locaux — sans liaison à la gestion des stocks ni à la TSE.', 'En este prototipo los movimientos de existencias solo son locales — sin conexión con la gestión de inventario ni la TSE.', 'Neste protótipo os movimentos de stock são apenas locais — sem ligação à gestão de stock nem à TSE.'],
    ['Buchungen im Prototyp wirken nur lokal und ersetzen keine dokumentierte Inventur.', 'Bookings in the prototype are local only and do not replace a documented stocktake.', 'Les écritures du prototype restent locales et ne remplacent pas un inventaire documenté.', 'Los asientos del prototipo solo son locales y no sustituyen un inventario documentado.', 'Os lançamentos do protótipo são apenas locais e não substituem um inventário documentado.'],
    ['Art der Buchung', 'Booking type', 'Type d’écriture', 'Tipo de asiento', 'Tipo de lançamento'],
    ['Schwund', 'Shrinkage', 'Démarque', 'Merma', 'Quebra'],
    ['Defekt', 'Defect', 'Défaut', 'Defecto', 'Defeito'],
    ['Sonstiges', 'Other', 'Autre', 'Otros', 'Outro'],
    ['Richtung', 'Direction', 'Sens', 'Dirección', 'Sentido'],
    ['Abgang', 'Outgoing', 'Sortie', 'Salida', 'Saída'],
    ['Zugang', 'Incoming', 'Entrée', 'Entrada', 'Entrada'],
    ['Menge', 'Quantity', 'Quantité', 'Cantidad', 'Quantidade'],
    ['Grund (Pflicht)', 'Reason (required)', 'Motif (obligatoire)', 'Motivo (obligatorio)', 'Motivo (obrigatório)'],
    ['Wareneingang gibt es nur zu einer Lieferantenbestellung. Gelieferte Mengen je Position eintragen.', 'Goods receipts are only possible for a supplier order. Enter the delivered quantity per line.', 'Une réception n’est possible que pour une commande fournisseur. Saisir les quantités livrées par ligne.', 'Las entradas de mercancía solo son posibles para un pedido a proveedor. Indique la cantidad entregada por línea.', 'A receção de mercadoria só é possível para uma encomenda a fornecedor. Indique a quantidade entregue por linha.'],
    ['Lieferantenbestellung', 'Supplier order', 'Commande fournisseur', 'Pedido a proveedor', 'Encomenda a fornecedor'],
    ['Geliefert', 'Delivered', 'Livré', 'Entregado', 'Entregue'],
    ['Lieferschein-Nr. (optional)', 'Delivery note no. (optional)', 'N° de bon de livraison (facultatif)', 'N.º de albarán (opcional)', 'N.º da guia de remessa (opcional)'],
    ['Bestellung wählen …', 'Choose order …', 'Choisir une commande …', 'Elegir pedido …', 'Escolher encomenda …'],
    ['Keine offene Lieferantenbestellung', 'No open supplier order', 'Aucune commande fournisseur ouverte', 'Ningún pedido a proveedor abierto', 'Nenhuma encomenda a fornecedor aberta'],
    ['Noch keine Buchungen für diesen Artikel.', 'No bookings for this item yet.', 'Aucune écriture pour cet article.', 'Aún no hay asientos para este artículo.', 'Ainda sem lançamentos para este artigo.'],
    ['Der Bestand startet bei 0 und kommt über den Wareneingang einer Lieferantenbestellung.', 'Stock starts at 0 and comes in through the goods receipt of a supplier order.', 'Le stock démarre à 0 et entre par la réception d’une commande fournisseur.', 'Las existencias empiezan en 0 y entran con la entrada de mercancía de un pedido a proveedor.', 'O stock começa em 0 e entra pela receção de mercadoria de uma encomenda a fornecedor.'],
    ['Bitte eine Menge ab 1 eintragen.', 'Please enter a quantity of at least 1.', 'Veuillez saisir une quantité d’au moins 1.', 'Introduzca una cantidad de al menos 1.', 'Introduza uma quantidade de pelo menos 1.'],
    ['Bitte einen Grund angeben – ohne Grund wird nicht gebucht.', 'Please give a reason – nothing is booked without one.', 'Veuillez indiquer un motif – sans motif, rien n’est enregistré.', 'Indique un motivo: sin motivo no se registra nada.', 'Indique um motivo – sem motivo nada é registado.'],
    ['Bitte eine offene Lieferantenbestellung wählen.', 'Please choose an open supplier order.', 'Veuillez choisir une commande fournisseur ouverte.', 'Elija un pedido a proveedor abierto.', 'Escolha uma encomenda a fornecedor aberta.'],
    ['Bitte mindestens eine gelieferte Menge eintragen.', 'Please enter at least one delivered quantity.', 'Veuillez saisir au moins une quantité livrée.', 'Indique al menos una cantidad entregada.', 'Indique pelo menos uma quantidade entregue.'],
    ['Ihre Rolle darf keinen Wareneingang buchen.', 'Your role may not book goods receipts.', 'Votre rôle ne permet pas d’enregistrer des réceptions.', 'Su rol no puede registrar entradas de mercancía.', 'A sua função não pode registar receções de mercadoria.'],
    ['Keine Berechtigung', 'No permission', 'Pas d’autorisation', 'Sin permiso', 'Sem permissão'],
    ['Bestand buchen (Schwund, Defekt, Sonstiges)', 'Book stock changes (shrinkage, defect, other)', 'Enregistrer des mouvements (démarque, défaut, autre)', 'Registrar movimientos (merma, defecto, otros)', 'Registar movimentos (quebra, defeito, outro)'],
    ['Bestandshistorie einsehen', 'View stock history', 'Consulter l’historique du stock', 'Ver historial de existencias', 'Ver histórico de stock'],
    ['z. B. bei Inventur nicht auffindbar', 'e.g. not found at stocktake', 'p. ex. introuvable lors de l’inventaire', 'p. ej. no encontrado en el inventario', 'p. ex. não encontrado no inventário'],
    ['z. B. Transportschaden, Riss im Rumpf', 'e.g. transport damage, crack in the hull', 'p. ex. dommage de transport, fissure de coque', 'p. ej. daño de transporte, grieta en el casco', 'p. ex. dano de transporte, fissura no casco'],
    ['z. B. Vorführmodell an Verein, Fund bei Inventur', 'e.g. demo model to a club, found at stocktake', 'p. ex. modèle de démonstration à un club, trouvé à l’inventaire', 'p. ej. modelo de demostración a un club, hallado en inventario', 'p. ex. modelo de demonstração a um clube, encontrado no inventário']
  ].forEach(function (r) { if (!D[r[0]]) D[r[0]] = {en: r[1], fr: r[2], es: r[3], pt: r[4]}; });
  I.muster.push([/^(Schwund|Defekt|Sonstiges|Verkauf) · (.+)$/, {en: '§1 · $2', fr: '§1 · $2', es: '§1 · $2', pt: '§1 · $2'}]);
})();

/* v12.17 Angebot im Warenkorb */
(function () {
  var I = window.ZYKOL_I18N; if (!I) return;
  var D = I.dict;
  [
    ['Im Warenkorb zusammenstellen', 'Build in cart', 'Composer dans le panier', 'Montar en el carrito', 'Montar no carrinho'],
    ['Ins Angebot übernehmen', 'Apply to quote', 'Reprendre dans le devis', 'Pasar al presupuesto', 'Passar para o orçamento'],
    ['Angebotsmodus · keine Zahlung, kein Beleg', 'Quote mode · no payment, no receipt', 'Mode devis · ni paiement, ni ticket', 'Modo presupuesto · sin pago ni ticket', 'Modo orçamento · sem pagamento nem talão'],
    ['Kasse im Angebotsmodus öffnen: Artikel per Kachel, Suche oder Scanner hinzufügen', 'Open checkout in quote mode: add items by tile, search or scanner', 'Ouvrir la caisse en mode devis : ajouter des articles par tuile, recherche ou scanner', 'Abrir la caja en modo presupuesto: añadir artículos por mosaico, búsqueda o escáner', 'Abrir a caixa em modo orçamento: adicionar artigos por mosaico, pesquisa ou leitor'],
    ['Artikel & Bestand ansehen', 'View products & stock', 'Consulter articles & stock', 'Ver artículos y existencias', 'Ver artigos e stock']
  ].forEach(function (r) { if (!D[r[0]]) D[r[0]] = {en: r[1], fr: r[2], es: r[3], pt: r[4]}; });
  I.muster.push([/^(\d+) Positionen aus dem Warenkorb übernommen – bitte speichern\.$/, {en: '$1 lines taken from the cart – please save.', fr: '$1 lignes reprises du panier – veuillez enregistrer.', es: '$1 líneas tomadas del carrito: guarde, por favor.', pt: '$1 linhas retiradas do carrinho – guarde, por favor.'}]);
  I.muster.push([/^Angebot (\S+) · (.+)$/, {en: 'Quote $1 · $2', fr: 'Devis $1 · $2', es: 'Presupuesto $1 · $2', pt: 'Orçamento $1 · $2'}]);
})();

/* v12.18 Shop & Lagerorte */
(function () {
  var I = window.ZYKOL_I18N; if (!I) return;
  var D = I.dict;
  [
    ['Shop & Lagerorte', 'Shop & storage locations', 'Boutique & emplacements', 'Tienda y ubicaciones', 'Loja e localizações'],
    ['Ebenen der Lagerorte', 'Location levels', 'Niveaux d’emplacement', 'Niveles de ubicación', 'Níveis de localização'],
    ['Wie fein wird gelagert? Von nur „Hauptlager“ bis Lager › Zone › Regal › Fach. Die Namen der Ebenen sind frei wählbar.', 'How fine-grained is storage? From just “main warehouse” to warehouse › zone › shelf › bin. Level names are up to you.', 'Quel niveau de détail ? De « entrepôt principal » seul à entrepôt › zone › étagère › casier. Les noms des niveaux sont libres.', '¿Con qué detalle se almacena? Desde solo «almacén principal» hasta almacén › zona › estante › casilla. Los nombres de los niveles son libres.', 'Com que detalhe se armazena? Desde só «armazém principal» até armazém › zona › prateleira › compartimento. Os nomes dos níveis são livres.'],
    ['Anzahl Ebenen', 'Number of levels', 'Nombre de niveaux', 'Número de niveles', 'Número de níveis'],
    ['Lagerorte', 'Storage locations', 'Emplacements', 'Ubicaciones', 'Localizações'],
    ['Typ „Lager“ oder „Verkaufsfläche“ gilt für den ganzen Zweig. Lagerorte mit Bestand lassen sich nicht deaktivieren.', 'Type “warehouse” or “sales floor” applies to the whole branch. Locations holding stock cannot be deactivated.', 'Le type « entrepôt » ou « surface de vente » vaut pour toute la branche. Un emplacement avec du stock ne peut pas être désactivé.', 'El tipo «almacén» o «zona de venta» se aplica a toda la rama. Las ubicaciones con existencias no se pueden desactivar.', 'O tipo «armazém» ou «área de venda» aplica-se a todo o ramo. Localizações com stock não podem ser desativadas.'],
    ['Neuer Lagerort', 'New location', 'Nouvel emplacement', 'Nueva ubicación', 'Nova localização'],
    ['Oberste Ebene', 'Top level', 'Niveau supérieur', 'Nivel superior', 'Nível superior'],
    ['Aktivieren', 'Activate', 'Activer', 'Activar', 'Ativar'],
    ['Deaktivieren', 'Deactivate', 'Désactiver', 'Desactivar', 'Desativar'],
    ['Lager', 'Warehouse', 'Entrepôt', 'Almacén', 'Armazém'],
    ['Verkaufsfläche', 'Sales floor', 'Surface de vente', 'Zona de venta', 'Área de venda'],
    ['Zone', 'Zone', 'Zone', 'Zona', 'Zona'],
    ['Regal', 'Shelf', 'Étagère', 'Estante', 'Prateleira'],
    ['Fach', 'Bin', 'Casier', 'Casilla', 'Compartimento'],
    ['Einlagern', 'Put away to', 'Stocker dans', 'Almacenar en', 'Armazenar em'],
    ['Standardplatz', 'Default location', 'Emplacement par défaut', 'Ubicación predeterminada', 'Localização predefinida'],
    ['Verschieben', 'Move', 'Déplacer', 'Mover', 'Mover'],
    ['Shop & Lagerorte konfigurieren', 'Configure shop & locations', 'Configurer boutique & emplacements', 'Configurar tienda y ubicaciones', 'Configurar loja e localizações'],
    ['Jeder Artikel hat einen Standardplatz. Der Bestand wird dort geführt; beim Wareneingang lässt sich ein anderer Einlagerort angeben.', 'Every item has a default location where its stock is kept; a different location can be chosen at goods receipt.', 'Chaque article a un emplacement par défaut où son stock est tenu ; un autre emplacement peut être choisi à la réception.', 'Cada artículo tiene una ubicación predeterminada donde se llevan sus existencias; en la entrada de mercancía se puede elegir otra.', 'Cada artigo tem uma localização predefinida onde o stock é gerido; na receção de mercadoria pode escolher-se outra.']
  ].forEach(function (r) { if (!D[r[0]]) D[r[0]] = {en: r[1], fr: r[2], es: r[3], pt: r[4]}; });
  I.muster.push([/^Ebene (\d)$/, {en: 'Level $1', fr: 'Niveau $1', es: 'Nivel $1', pt: 'Nível $1'}]);
  I.muster.push([/^(.+) · (\d+) Stück$/, {en: '§1 · $2 pcs', fr: '§1 · $2 pièces', es: '§1 · $2 uds.', pt: '§1 · $2 un.'}]);
  I.muster.push([/^\+ (.+)$/, {en: '+ §1', fr: '+ §1', es: '+ §1', pt: '+ §1'}]);
})();

/* v12.19 Werkstatt */
(function () {
  var I = window.ZYKOL_I18N; if (!I) return;
  var D = I.dict;
  [
    ['Service', 'Service', 'Service', 'Servicio', 'Serviço'],
    ['Werkstatt', 'Workshop', 'Atelier', 'Taller', 'Oficina'],
    ['Eingang, Voranschlag, Auftrag, Reparatur, Abweichungen und Übergabe – auch für Fremdprodukte.', 'Intake, estimate, order, repair, deviations and handover – also for third-party products.', 'Réception, devis, ordre, réparation, écarts et restitution – aussi pour les produits tiers.', 'Recepción, presupuesto, orden, reparación, desviaciones y entrega, también para productos de terceros.', 'Receção, orçamento, ordem, reparação, desvios e entrega – também para produtos de terceiros.'],
    ['Neuer Werkstattauftrag', 'New repair order', 'Nouvel ordre d’atelier', 'Nueva orden de taller', 'Nova ordem de oficina'],
    ['Werkstattauftrag', 'Repair order', 'Ordre d’atelier', 'Orden de taller', 'Ordem de oficina'],
    ['Eingang & Voranschlag', 'Intake & estimate', 'Réception & devis', 'Recepción y presupuesto', 'Receção e orçamento'],
    ['warten auf Freigabe', 'awaiting approval', 'en attente d’accord', 'esperando aprobación', 'a aguardar aprovação'],
    ['In Arbeit', 'In progress', 'En cours', 'En curso', 'Em curso'],
    ['Auftrag bis Abweichungen', 'Order to deviations', 'De l’ordre aux écarts', 'De la orden a las desviaciones', 'Da ordem aos desvios'],
    ['Zur Übergabe', 'Ready for handover', 'Prêt à rendre', 'Listo para entregar', 'Pronto para entrega'],
    ['fertig, Kunde informieren', 'done, inform customer', 'terminé, informer le client', 'terminado, avisar al cliente', 'concluído, informar o cliente'],
    ['Fremdprodukte', 'Third-party products', 'Produits tiers', 'Productos de terceros', 'Produtos de terceiros'],
    ['Fremdprodukt', 'Third-party product', 'Produit tiers', 'Producto de terceros', 'Produto de terceiros'],
    ['Aufträge zu Fremdprodukten', 'Orders for third-party products', 'Ordres pour produits tiers', 'Órdenes de productos de terceros', 'Ordens de produtos de terceiros'],
    ['Auftrag, Kunde, Produkt – oder Produkt-QR scannen', 'Order, customer, product – or scan product QR', 'Ordre, client, produit – ou scanner le QR produit', 'Orden, cliente, producto, o escanear el QR del producto', 'Ordem, cliente, produto – ou ler o QR do produto'],
    ['Eingang', 'Intake', 'Réception', 'Recepción', 'Receção'],
    ['Voranschlag', 'Estimate', 'Devis', 'Presupuesto', 'Orçamento'],
    ['Auftrag', 'Order', 'Ordre', 'Orden', 'Ordem'],
    ['Reparatur', 'Repair', 'Réparation', 'Reparación', 'Reparação'],
    ['Abweichungen', 'Deviations', 'Écarts', 'Desviaciones', 'Desvios'],
    ['Übergabe', 'Handover', 'Restitution', 'Entrega', 'Entrega'],
    ['Abgeschlossen', 'Completed', 'Terminé', 'Completado', 'Concluído'],
    ['Nur Fremdprodukte', 'Third-party only', 'Produits tiers seulement', 'Solo productos de terceros', 'Só produtos de terceiros'],
    ['Keine Werkstattaufträge gefunden.', 'No repair orders found.', 'Aucun ordre d’atelier trouvé.', 'No se encontraron órdenes de taller.', 'Nenhuma ordem de oficina encontrada.'],
    ['← Alle Werkstattaufträge', '← All repair orders', '← Tous les ordres d’atelier', '← Todas las órdenes de taller', '← Todas as ordens de oficina'],
    ['Nur Ansicht – Ihre Rolle darf Werkstattaufträge nicht bearbeiten.', 'View only – your role may not edit repair orders.', 'Lecture seule – votre rôle ne peut pas modifier les ordres d’atelier.', 'Solo lectura: su rol no puede editar órdenes de taller.', 'Só leitura – a sua função não pode editar ordens de oficina.'],
    ['Reparaturprotokoll', 'Repair log', 'Journal de réparation', 'Registro de reparación', 'Registo de reparação'],
    ['Abweichungen gegenüber Voranschlag', 'Deviations from estimate', 'Écarts par rapport au devis', 'Desviaciones respecto al presupuesto', 'Desvios face ao orçamento'],
    ['Kunde', 'Customer', 'Client', 'Cliente', 'Cliente'],
    ['Produkt des Kunden', 'Customer’s product', 'Produit du client', 'Producto del cliente', 'Produto do cliente'],
    ['+ Fremdprodukt anlegen', '+ Add third-party product', '+ Ajouter un produit tiers', '+ Añadir producto de terceros', '+ Adicionar produto de terceiros'],
    ['QR-Etikett drucken', 'Print QR label', 'Imprimer l’étiquette QR', 'Imprimir etiqueta QR', 'Imprimir etiqueta QR'],
    ['QR-Etikett', 'QR label', 'Étiquette QR', 'Etiqueta QR', 'Etiqueta QR'],
    ['Neues Fremdprodukt', 'New third-party product', 'Nouveau produit tiers', 'Nuevo producto de terceros', 'Novo produto de terceiros'],
    ['Kategorie', 'Category', 'Catégorie', 'Categoría', 'Categoria'],
    ['Hersteller *', 'Manufacturer *', 'Fabricant *', 'Fabricante *', 'Fabricante *'],
    ['Modell *', 'Model *', 'Modèle *', 'Modelo *', 'Modelo *'],
    ['Modell', 'Model', 'Modèle', 'Modelo', 'Modelo'],
    ['Seriennummer', 'Serial number', 'Numéro de série', 'Número de serie', 'Número de série'],
    ['Farbe', 'Colour', 'Couleur', 'Color', 'Cor'],
    ['Kaufdatum (optional)', 'Purchase date (optional)', 'Date d’achat (facultatif)', 'Fecha de compra (opcional)', 'Data de compra (opcional)'],
    ['Garantie bis (optional)', 'Warranty until (optional)', 'Garantie jusqu’au (facultatif)', 'Garantía hasta (opcional)', 'Garantia até (opcional)'],
    ['Kaufdatum', 'Purchase date', 'Date d’achat', 'Fecha de compra', 'Data de compra'],
    ['Garantie bis', 'Warranty until', 'Garantie jusqu’au', 'Garantía hasta', 'Garantia até'],
    ['Beim Kunden hinterlegen', 'Save to customer', 'Enregistrer chez le client', 'Guardar en el cliente', 'Guardar no cliente'],
    ['Zustand bei Eingang (antippen: in Ordnung → Mangel → nicht geprüft)', 'Condition at intake (tap: OK → defect → not checked)', 'État à la réception (toucher : OK → défaut → non vérifié)', 'Estado a la recepción (tocar: correcto → defecto → sin revisar)', 'Estado na receção (tocar: OK → defeito → não verificado)'],
    ['Rumpf/Hülle ohne Risse', 'Hull without cracks', 'Coque sans fissures', 'Casco sin grietas', 'Casco sem fissuras'],
    ['Oberfläche ohne Kratzer', 'Surface without scratches', 'Surface sans rayures', 'Superficie sin arañazos', 'Superfície sem riscos'],
    ['Steuer-/Ruderanlage gängig', 'Rudder system moves freely', 'Gouvernail fonctionnel', 'Timón funciona', 'Leme funcional'],
    ['Sitz & Fußstütze fest', 'Seat & footrest secure', 'Siège & cale-pieds fixés', 'Asiento y reposapiés firmes', 'Assento e apoio dos pés firmes'],
    ['Luken & Schotten dicht', 'Hatches & bulkheads sealed', 'Trappes & cloisons étanches', 'Escotillas y mamparos estancos', 'Escotilhas e anteparas estanques'],
    ['Nähte & Manschetten dicht', 'Seams & seals watertight', 'Coutures & manchons étanches', 'Costuras y manguitos estancos', 'Costuras e punhos estanques'],
    ['Finne/Finnenkasten fest', 'Fin/fin box secure', 'Aileron/boîtier fixé', 'Quilla/caja firme', 'Quilha/caixa firme'],
    ['Zubehör vollständig', 'Accessories complete', 'Accessoires complets', 'Accesorios completos', 'Acessórios completos'],
    ['Schäden', 'Damage', 'Dommages', 'Daños', 'Danos'],
    ['Zubehör', 'Accessories', 'Accessoires', 'Accesorios', 'Acessórios'],
    ['Kundenwunsch', 'Customer request', 'Demande du client', 'Petición del cliente', 'Pedido do cliente'],
    ['Unterschrift des Kunden bestätigen', 'Confirm customer signature', 'Confirmer la signature du client', 'Confirmar la firma del cliente', 'Confirmar assinatura do cliente'],
    ['✓ Kunde hat den Eingang unterschrieben', '✓ Customer signed the intake', '✓ Le client a signé la réception', '✓ El cliente firmó la recepción', '✓ O cliente assinou a receção'],
    ['Eingangsbeleg drucken', 'Print intake receipt', 'Imprimer le bon de réception', 'Imprimir resguardo de recepción', 'Imprimir talão de receção'],
    ['Noch keine Positionen.', 'No lines yet.', 'Aucune ligne pour l’instant.', 'Aún no hay líneas.', 'Ainda sem linhas.'],
    ['Voraussichtlich gesamt', 'Estimated total', 'Total estimé', 'Total estimado', 'Total estimado'],
    ['Text', 'Text', 'Texte', 'Texto', 'Texto'],
    ['Stunden / Menge', 'Hours / quantity', 'Heures / quantité', 'Horas / cantidad', 'Horas / quantidade'],
    ['Preis € (freie Position)', 'Price € (free line)', 'Prix € (ligne libre)', 'Precio € (línea libre)', 'Preço € (linha livre)'],
    ['+ Arbeitszeit', '+ Labour', '+ Main-d’œuvre', '+ Mano de obra', '+ Mão de obra'],
    ['+ Freie Position', '+ Free line', '+ Ligne libre', '+ Línea libre', '+ Linha livre'],
    ['Teil aus der Artikelliste hinzufügen — Name oder Artikelnummer', 'Add part from item list — name or item number', 'Ajouter une pièce de la liste — nom ou référence', 'Añadir pieza de la lista — nombre o referencia', 'Adicionar peça da lista — nome ou referência'],
    ['Noch keine Freigabe durch den Kunden', 'Not yet approved by the customer', 'Pas encore accepté par le client', 'Aún sin aprobación del cliente', 'Ainda sem aprovação do cliente'],
    ['mündlich', 'verbal', 'oral', 'verbal', 'verbal'],
    ['telefonisch', 'by phone', 'par téléphone', 'por teléfono', 'por telefone'],
    ['schriftlich', 'in writing', 'par écrit', 'por escrito', 'por escrito'],
    ['Kunde gibt frei', 'Customer approves', 'Le client accepte', 'El cliente aprueba', 'O cliente aprova'],
    ['Kunde lehnt ab', 'Customer declines', 'Le client refuse', 'El cliente rechaza', 'O cliente recusa'],
    ['Voranschlag drucken', 'Print estimate', 'Imprimer le devis', 'Imprimir presupuesto', 'Imprimir orçamento'],
    ['Mitarbeiter', 'Employee', 'Collaborateur', 'Empleado', 'Colaborador'],
    ['Fertig bis (Termin)', 'Due by (date)', 'Prêt pour le (date)', 'Listo para (fecha)', 'Pronto até (data)'],
    ['Wartet auf Teile', 'Waiting for parts', 'En attente de pièces', 'Esperando piezas', 'A aguardar peças'],
    ['Noch keine Arbeitsschritte.', 'No work steps yet.', 'Aucune étape pour l’instant.', 'Aún no hay pasos de trabajo.', 'Ainda sem passos de trabalho.'],
    ['Arbeitsschritt', 'Work step', 'Étape de travail', 'Paso de trabajo', 'Passo de trabalho'],
    ['Minuten', 'Minutes', 'Minutes', 'Minutos', 'Minutos'],
    ['Eintragen', 'Add', 'Ajouter', 'Añadir', 'Adicionar'],
    ['Verbaute Teile', 'Parts fitted', 'Pièces montées', 'Piezas montadas', 'Peças montadas'],
    ['Teil aus dem Bestand verbauen — bucht den Bestand ab', 'Fit part from stock — deducts stock', 'Monter une pièce du stock — déduit le stock', 'Montar pieza del stock: descuenta existencias', 'Montar peça do stock — abate o stock'],
    ['Freies Teil (ohne Bestand)', 'Free part (no stock)', 'Pièce libre (hors stock)', 'Pieza libre (sin stock)', 'Peça livre (sem stock)'],
    ['Preis €', 'Price €', 'Prix €', 'Precio €', 'Preço €'],
    ['+ Freies Teil', '+ Free part', '+ Pièce libre', '+ Pieza libre', '+ Peça livre'],
    ['aus dem Bestand gebucht', 'deducted from stock', 'déduit du stock', 'descontado del stock', 'abatido do stock'],
    ['freie Position, ohne Bestand', 'free line, no stock', 'ligne libre, hors stock', 'línea libre, sin stock', 'linha livre, sem stock'],
    ['Tatsächlich', 'Actual', 'Réel', 'Real', 'Real'],
    ['Differenz', 'Difference', 'Écart', 'Diferencia', 'Diferença'],
    ['Kunde genehmigt Abweichung', 'Customer approves deviation', 'Le client accepte l’écart', 'El cliente aprueba la desviación', 'O cliente aprova o desvio'],
    ['Übergabeprotokoll', 'Handover record', 'Procès-verbal de restitution', 'Acta de entrega', 'Auto de entrega'],
    ['✓ Kunde hat abgenommen und unterschrieben', '✓ Customer accepted and signed', '✓ Le client a réceptionné et signé', '✓ El cliente aceptó y firmó', '✓ O cliente aceitou e assinou'],
    ['Abnahme durch den Kunden bestätigen', 'Confirm customer acceptance', 'Confirmer la réception par le client', 'Confirmar aceptación del cliente', 'Confirmar aceitação do cliente'],
    ['Übergabeprotokoll drucken', 'Print handover record', 'Imprimer le procès-verbal', 'Imprimir acta de entrega', 'Imprimir auto de entrega'],
    ['Abrechnen:', 'Bill:', 'Facturer :', 'Cobrar:', 'Faturar:'],
    ['Werkstattaufträge wirken im Prototyp nur lokal. Die Abrechnung erzeugt einen Demo-Beleg ohne echte TSE-Signatur.', 'Repair orders are local only in the prototype. Billing creates a demo receipt without a real TSE signature.', 'Les ordres d’atelier restent locaux dans le prototype. La facturation crée un ticket de démo sans vraie signature TSE.', 'Las órdenes de taller solo son locales en el prototipo. El cobro crea un ticket de demostración sin firma TSE real.', 'As ordens de oficina são apenas locais no protótipo. A faturação cria um talão de demonstração sem assinatura TSE real.'],
    ['Produktakte', 'Product file', 'Fiche produit', 'Ficha de producto', 'Ficha do produto'],
    ['aus unserem Verkauf', 'sold by us', 'vendu par nous', 'vendido por nosotros', 'vendido por nós'],
    ['Historie', 'History', 'Historique', 'Historial', 'Histórico'],
    ['Noch keine Einträge.', 'No entries yet.', 'Aucune entrée pour l’instant.', 'Aún no hay entradas.', 'Ainda sem entradas.'],
    ['Produkte des Kunden', 'Customer’s products', 'Produits du client', 'Productos del cliente', 'Produtos do cliente'],
    ['Bestellungen, Angebote, Werkstatt & Termine', 'Orders, quotes, workshop & appointments', 'Commandes, devis, atelier & rendez-vous', 'Pedidos, presupuestos, taller y citas', 'Encomendas, orçamentos, oficina e compromissos'],
    ['Produkt-ID', 'Product ID', 'ID produit', 'ID de producto', 'ID do produto'],
    ['· Scannen öffnet diese Akte', '· Scanning opens this file', '· Le scan ouvre cette fiche', '· Escanear abre esta ficha', '· Ler abre esta ficha'],
    ['Kajak', 'Kayak', 'Kayak', 'Kayak', 'Caiaque'],
    ['Kanu', 'Canoe', 'Canoë', 'Canoa', 'Canoa'],
    ['SUP', 'SUP', 'SUP', 'SUP', 'SUP'],
    ['Schwimmweste', 'Buoyancy aid', 'Gilet', 'Chaleco', 'Colete'],
    ['Sonstiges', 'Other', 'Autre', 'Otros', 'Outro'],
    ['Voranschlag freigeben & Abweichung genehmigen', 'Approve estimate & deviations', 'Valider devis & écarts', 'Aprobar presupuesto y desviaciones', 'Aprovar orçamento e desvios'],
    ['Werkstatt abrechnen', 'Bill workshop orders', 'Facturer l’atelier', 'Cobrar taller', 'Faturar oficina'],
    ['Werkstatt ansehen', 'View workshop', 'Consulter l’atelier', 'Ver taller', 'Ver oficina'],
    ['Werkstattauftrag anlegen & bearbeiten', 'Create & edit repair orders', 'Créer & modifier des ordres d’atelier', 'Crear y editar órdenes de taller', 'Criar e editar ordens de oficina'],
    ['Bitte ein Produkt wählen oder ein Fremdprodukt anlegen.', 'Please choose a product or add a third-party product.', 'Veuillez choisir un produit ou ajouter un produit tiers.', 'Elija un producto o añada uno de terceros.', 'Escolha um produto ou adicione um de terceiros.'],
    ['Bitte die Unterschrift des Kunden zum Eingang bestätigen.', 'Please confirm the customer’s intake signature.', 'Veuillez confirmer la signature du client.', 'Confirme la firma del cliente en la recepción.', 'Confirme a assinatura do cliente na receção.'],
    ['Bitte mindestens eine Position in den Voranschlag aufnehmen.', 'Please add at least one line to the estimate.', 'Veuillez ajouter au moins une ligne au devis.', 'Añada al menos una línea al presupuesto.', 'Adicione pelo menos uma linha ao orçamento.'],
    ['Der Kunde hat den Voranschlag noch nicht freigegeben.', 'The customer has not approved the estimate yet.', 'Le client n’a pas encore accepté le devis.', 'El cliente aún no ha aprobado el presupuesto.', 'O cliente ainda não aprovou o orçamento.'],
    ['Bitte einen Mitarbeiter zuweisen.', 'Please assign an employee.', 'Veuillez attribuer un collaborateur.', 'Asigne un empleado.', 'Atribua um colaborador.'],
    ['Bitte mindestens einen Arbeitsschritt protokollieren.', 'Please log at least one work step.', 'Veuillez saisir au moins une étape.', 'Registre al menos un paso de trabajo.', 'Registe pelo menos um passo de trabalho.'],
    ['Bitte Hersteller und Modell eintragen.', 'Please enter manufacturer and model.', 'Veuillez saisir fabricant et modèle.', 'Indique fabricante y modelo.', 'Indique fabricante e modelo.'],
    ['Bitte zuerst die Abnahme durch den Kunden bestätigen.', 'Please confirm customer acceptance first.', 'Veuillez d’abord confirmer la réception par le client.', 'Confirme primero la aceptación del cliente.', 'Confirme primeiro a aceitação do cliente.'],
    ['— Kunde wählen —', '— Choose customer —', '— Choisir un client —', '— Elegir cliente —', '— Escolher cliente —'],
    ['— Produkt des Kunden wählen —', '— Choose customer’s product —', '— Choisir le produit du client —', '— Elegir producto del cliente —', '— Escolher produto do cliente —'],
    ['— zuerst Kunden wählen —', '— choose customer first —', '— choisir d’abord le client —', '— primero elija el cliente —', '— escolha primeiro o cliente —'],
    ['— Mitarbeiter wählen —', '— Choose employee —', '— Choisir un collaborateur —', '— Elegir empleado —', '— Escolher colaborador —']
  ].forEach(function (r) { if (!D[r[0]]) D[r[0]] = {en: r[1], fr: r[2], es: r[3], pt: r[4]}; });
  I.muster.push([/^(\d) · (.+)$/, {en: '$1 · §2', fr: '$1 · §2', es: '$1 · §2', pt: '$1 · §2'}]);
  I.muster.push([/^(\d) (Eingang|Voranschlag|Auftrag|Reparatur|Abweichungen|Übergabe)$/, {en: '$1 §2', fr: '$1 §2', es: '$1 §2', pt: '$1 §2'}]);
  I.muster.push([/^Weiter zu (.+) →$/, {en: 'Continue to §1 →', fr: 'Continuer vers §1 →', es: 'Continuar a §1 →', pt: 'Continuar para §1 →'}]);
  I.muster.push([/^Arbeitszeit ([\d.,]+ €) je Stunde$/, {en: 'Labour $1 per hour', fr: 'Main-d’œuvre $1 par heure', es: 'Mano de obra $1 por hora', pt: 'Mão de obra $1 por hora'}]);
  I.muster.push([/^Innerhalb von (\d+) % – keine erneute Freigabe nötig\.$/, {en: 'Within $1 % – no new approval needed.', fr: 'Moins de $1 % – pas de nouvel accord nécessaire.', es: 'Dentro del $1 %: no hace falta nueva aprobación.', pt: 'Dentro de $1 % – não é necessária nova aprovação.'}]);
  I.muster.push([/^Mehr als (\d+) % Abweichung – der Kunde muss erneut freigeben\.$/, {en: 'More than $1 % deviation – the customer must approve again.', fr: 'Écart de plus de $1 % – le client doit à nouveau accepter.', es: 'Desviación superior al $1 %: el cliente debe aprobar de nuevo.', pt: 'Desvio superior a $1 % – o cliente tem de aprovar novamente.'}]);
})();

/* v12.20 Bestand je Lagerort */
(function () {
  var I = window.ZYKOL_I18N; if (!I) return;
  var D = I.dict;
  [
    ['Umlagern', 'Transfer', 'Transférer', 'Trasladar', 'Transferir'],
    ['Von', 'From', 'De', 'Desde', 'De'],
    ['Nach', 'To', 'Vers', 'Hacia', 'Para'],
    ['Abgang von Lagerort', 'Remove from location', 'Sortie de l’emplacement', 'Salida de la ubicación', 'Saída da localização'],
    ['Zugang an Lagerort', 'Add to location', 'Entrée à l’emplacement', 'Entrada en la ubicación', 'Entrada na localização'],
    ['Grund (optional)', 'Reason (optional)', 'Motif (facultatif)', 'Motivo (opcional)', 'Motivo (opcional)'],
    ['z. B. für die Ausstellung', 'e.g. for the display', 'p. ex. pour l’exposition', 'p. ej. para la exposición', 'p. ex. para a exposição'],
    ['Bitte einen anderen Ziel-Lagerort wählen.', 'Please choose a different target location.', 'Veuillez choisir un autre emplacement cible.', 'Elija otra ubicación de destino.', 'Escolha outra localização de destino.'],
    ['+ weiterer Lagerort', '+ another location', '+ autre emplacement', '+ otra ubicación', '+ outra localização'],
    ['Bestand je Lagerort', 'Stock by location', 'Stock par emplacement', 'Existencias por ubicación', 'Stock por localização'],
    ['Kein Bestand', 'No stock', 'Pas de stock', 'Sin existencias', 'Sem stock'],
    ['Bestand umlagern', 'Transfer stock', 'Transférer du stock', 'Trasladar existencias', 'Transferir stock'],
    ['Bestand wird je Lagerort geführt. Neue Ware kommt an den Standardplatz des Artikels, beim Wareneingang lässt sie sich auf mehrere Orte aufteilen.', 'Stock is kept per location. New goods go to the item’s default location and can be split across locations at goods receipt.', 'Le stock est tenu par emplacement. La marchandise arrive à l’emplacement par défaut et peut être répartie à la réception.', 'Las existencias se llevan por ubicación. La mercancía nueva va a la ubicación predeterminada y puede repartirse en la entrada.', 'O stock é gerido por localização. A mercadoria nova vai para a localização predefinida e pode ser repartida na receção.'],
    ['Stundensatz für Arbeitszeit und ab welcher Abweichung vom Voranschlag der Kunde erneut freigeben muss.', 'Hourly labour rate and the deviation from the estimate at which the customer must approve again.', 'Taux horaire et écart par rapport au devis à partir duquel le client doit accepter à nouveau.', 'Tarifa por hora y desviación respecto al presupuesto a partir de la cual el cliente debe aprobar de nuevo.', 'Taxa horária e desvio face ao orçamento a partir do qual o cliente tem de aprovar novamente.'],
    ['Stundensatz Arbeitszeit (€ brutto)', 'Hourly labour rate (€ gross)', 'Taux horaire (€ TTC)', 'Tarifa por hora (€ brutos)', 'Taxa horária (€ brutos)'],
    ['Erneute Freigabe ab Abweichung (%)', 'New approval from deviation (%)', 'Nouvel accord à partir d’un écart de (%)', 'Nueva aprobación a partir de desviación (%)', 'Nova aprovação a partir de desvio (%)']
  ].forEach(function (r) { if (!D[r[0]]) D[r[0]] = {en: r[1], fr: r[2], es: r[3], pt: r[4]}; });
  I.muster.push([/^Am Lagerort (.+) sind nur (\d+) Stück\.$/, {en: 'Only $2 pcs at $1.', fr: 'Seulement $2 pièces à $1.', es: 'Solo hay $2 uds. en $1.', pt: 'Só há $2 un. em $1.'}]);
})();

/* v12.21 Zahlungsarten */
(function () {
  var I = window.ZYKOL_I18N; if (!I) return;
  var D = I.dict;
  [
    ['Zahlungsarten', 'Payment methods', 'Moyens de paiement', 'Formas de pago', 'Meios de pagamento'],
    ['Zahlungsarten an der Kasse', 'Payment methods at checkout', 'Moyens de paiement en caisse', 'Formas de pago en caja', 'Meios de pagamento na caixa'],
    ['Welche Zahlungsarten die Kasse anbietet und in welcher Reihenfolge. Anbindungen sind im Prototyp simuliert; Schlüssel und Passwörter werden nicht gespeichert.', 'Which payment methods the checkout offers and in which order. Connections are simulated in the prototype; keys and passwords are not stored.', 'Quels moyens de paiement la caisse propose et dans quel ordre. Les connexions sont simulées ; clés et mots de passe ne sont pas enregistrés.', 'Qué formas de pago ofrece la caja y en qué orden. Las conexiones están simuladas; las claves y contraseñas no se guardan.', 'Que meios de pagamento a caixa oferece e por que ordem. As ligações são simuladas; chaves e palavras-passe não são guardadas.'],
    ['Bargeld ist gesetzliches Zahlungsmittel. Bar nur ausblenden, wenn Barzahlung ausdrücklich ausgeschlossen ist.', 'Cash is legal tender. Only hide cash if cash payment is expressly excluded.', 'Les espèces ont cours légal. Ne masquer les espèces que si le paiement en espèces est expressément exclu.', 'El efectivo es de curso legal. Oculte el efectivo solo si el pago en efectivo está excluido expresamente.', 'O numerário tem curso legal. Só oculte o numerário se o pagamento em numerário estiver expressamente excluído.'],
    ['Mindestens eine Zahlungsart muss aktiv bleiben.', 'At least one payment method must stay active.', 'Au moins un moyen de paiement doit rester actif.', 'Al menos una forma de pago debe seguir activa.', 'Pelo menos um meio de pagamento tem de ficar ativo.'],
    ['Aktiv', 'Active', 'Actif', 'Activo', 'Ativo'],
    ['Aus', 'Off', 'Désactivé', 'Desactivado', 'Desligado'],
    ['Ausblenden', 'Hide', 'Masquer', 'Ocultar', 'Ocultar'],
    ['Anbindung', 'Connection', 'Connexion', 'Conexión', 'Ligação'],
    ['Anbindung schließen', 'Close connection', 'Fermer la connexion', 'Cerrar conexión', 'Fechar ligação'],
    ['Verbindung testen', 'Test connection', 'Tester la connexion', 'Probar conexión', 'Testar ligação'],
    ['Nicht getestet', 'Not tested', 'Non testé', 'No probado', 'Não testado'],
    ['Nach oben', 'Move up', 'Monter', 'Subir', 'Subir'],
    ['Nach unten', 'Move down', 'Descendre', 'Bajar', 'Descer'],
    ['PayPal', 'PayPal', 'PayPal', 'PayPal', 'PayPal'],
    ['Gutschein', 'Gift voucher', 'Bon d’achat', 'Vale', 'Vale'],
    ['Vorkasse', 'Prepayment', 'Paiement anticipé', 'Pago anticipado', 'Pagamento antecipado'],
    ['Bargeld, Kassenlade', 'Cash, cash drawer', 'Espèces, tiroir-caisse', 'Efectivo, cajón', 'Numerário, gaveta'],
    ['girocard/EC, Kreditkarte, Apple Pay, Google Pay', 'girocard/debit, credit card, Apple Pay, Google Pay', 'girocard/EC, carte de crédit, Apple Pay, Google Pay', 'girocard/débito, tarjeta de crédito, Apple Pay, Google Pay', 'girocard/débito, cartão de crédito, Apple Pay, Google Pay'],
    ['QR-Code an der Kasse oder PayPal-Terminal', 'QR code at checkout or PayPal terminal', 'QR code en caisse ou terminal PayPal', 'Código QR en caja o terminal PayPal', 'Código QR na caixa ou terminal PayPal'],
    ['Kauf auf Rechnung, nur mit Kunde', 'Purchase on invoice, customer required', 'Achat sur facture, client requis', 'Compra a crédito, con cliente', 'Compra a fatura, com cliente'],
    ['Geschenkgutscheine einlösen', 'Redeem gift vouchers', 'Encaisser des bons d’achat', 'Canjear vales', 'Resgatar vales'],
    ['Überweisung vor der Übergabe', 'Bank transfer before handover', 'Virement avant remise', 'Transferencia antes de la entrega', 'Transferência antes da entrega'],
    ['Kassenlade-Anschluss', 'Cash drawer connection', 'Raccordement du tiroir', 'Conexión del cajón', 'Ligação da gaveta'],
    ['Terminal-Anbieter', 'Terminal provider', 'Fournisseur du terminal', 'Proveedor del terminal', 'Fornecedor do terminal'],
    ['Verbindungsart', 'Connection type', 'Type de connexion', 'Tipo de conexión', 'Tipo de ligação'],
    ['Terminal-ID', 'Terminal ID', 'ID du terminal', 'ID del terminal', 'ID do terminal'],
    ['IP-Adresse : Port (ZVT)', 'IP address : port (ZVT)', 'Adresse IP : port (ZVT)', 'Dirección IP : puerto (ZVT)', 'Endereço IP : porta (ZVT)'],
    ['API-Schlüssel', 'API key', 'Clé API', 'Clave API', 'Chave API'],
    ['Modus', 'Mode', 'Mode', 'Modo', 'Modo'],
    ['Händler-ID / E-Mail', 'Merchant ID / e-mail', 'ID marchand / e-mail', 'ID de comercio / e-mail', 'ID de comerciante / e-mail'],
    ['Umgebung', 'Environment', 'Environnement', 'Entorno', 'Ambiente'],
    ['Client-ID', 'Client ID', 'ID client', 'ID de cliente', 'ID de cliente'],
    ['Client-Secret', 'Client secret', 'Secret client', 'Secreto de cliente', 'Segredo de cliente'],
    ['1. Mahnung nach (Tagen)', '1st reminder after (days)', '1re relance après (jours)', '1.er recordatorio tras (días)', '1.º lembrete após (dias)'],
    ['2. Mahnung nach (Tagen)', '2nd reminder after (days)', '2e relance après (jours)', '2.º recordatorio tras (días)', '2.º lembrete após (dias)'],
    ['3. Mahnung nach (Tagen)', '3rd reminder after (days)', '3e relance après (jours)', '3.er recordatorio tras (días)', '3.º lembrete após (dias)'],
    ['Gültigkeit (Jahre)', 'Validity (years)', 'Validité (années)', 'Validez (años)', 'Validade (anos)'],
    ['Nummernkreis-Präfix', 'Number prefix', 'Préfixe de numérotation', 'Prefijo de numeración', 'Prefixo de numeração'],
    ['Verwendungszweck ({nr} = Belegnummer)', 'Payment reference ({nr} = receipt number)', 'Référence ({nr} = numéro de ticket)', 'Concepto ({nr} = número de ticket)', 'Referência ({nr} = número do talão)'],
    ['nicht hinterlegt', 'not stored', 'non enregistré', 'no guardado', 'não guardado'],
    ['•••••••• hinterlegt', '•••••••• stored', '•••••••• enregistré', '•••••••• guardado', '•••••••• guardado'],
    ['PayPal-QR zeigen', 'Show PayPal QR', 'Afficher le QR PayPal', 'Mostrar QR de PayPal', 'Mostrar QR PayPal'],
    ['Gutschein einlösen', 'Redeem voucher', 'Encaisser le bon', 'Canjear vale', 'Resgatar vale'],
    ['Vorkasse prüfen', 'Check prepayment', 'Vérifier le paiement anticipé', 'Comprobar pago anticipado', 'Verificar pagamento antecipado'],
    ['Zahlungsarten konfigurieren', 'Configure payment methods', 'Configurer les moyens de paiement', 'Configurar formas de pago', 'Configurar meios de pagamento'],
    ['Bezahlt · PayPal', 'Paid · PayPal', 'Payé · PayPal', 'Pagado · PayPal', 'Pago · PayPal']
  ].forEach(function (r) { if (!D[r[0]]) D[r[0]] = {en: r[1], fr: r[2], es: r[3], pt: r[4]}; });
  I.muster.push([/^DSFinV-K: (.+)$/, {en: 'DSFinV-K: $1', fr: 'DSFinV-K : $1', es: 'DSFinV-K: $1', pt: 'DSFinV-K: $1'}]);
  I.muster.push([/^Verbunden \(Simulation\) · (\d\d:\d\d)$/, {en: 'Connected (simulation) · $1', fr: 'Connecté (simulation) · $1', es: 'Conectado (simulación) · $1', pt: 'Ligado (simulação) · $1'}]);
  I.muster.push([/^Fehlt: (.+)$/, {en: 'Missing: §1', fr: 'Manque : §1', es: 'Falta: §1', pt: 'Em falta: §1'}]);
})();

/* v12.22 E-Rechnung */
(function () {
  var I = window.ZYKOL_I18N; if (!I) return;
  var D = I.dict;
  [
    ['E-Rechnung', 'E-invoice', 'Facture électronique', 'Factura electrónica', 'Fatura eletrónica'],
    ['ZUGFeRD 2.3 – Profil', 'ZUGFeRD 2.3 – profile', 'ZUGFeRD 2.3 – profil', 'ZUGFeRD 2.3 – perfil', 'ZUGFeRD 2.3 – perfil'],
    ['XRechnung 3.0 – Syntax', 'XRechnung 3.0 – syntax', 'XRechnung 3.0 – syntaxe', 'XRechnung 3.0 – sintaxis', 'XRechnung 3.0 – sintaxe'],
    ['Rechnungen an Firmen, Vereine, Verbände und Schulen gehen als ZUGFeRD, an die Öffentliche Hand als XRechnung (mit Leitweg-ID). Privatkunden erhalten weiter PDF.', 'Invoices to companies, clubs, associations and schools are sent as ZUGFeRD, to public authorities as XRechnung (with routing ID). Private customers keep receiving PDF.', 'Les factures aux entreprises, clubs, fédérations et écoles partent en ZUGFeRD, au secteur public en XRechnung (avec Leitweg-ID). Les particuliers reçoivent toujours un PDF.', 'Las facturas a empresas, clubes, federaciones y escuelas se envían como ZUGFeRD, al sector público como XRechnung (con Leitweg-ID). Los particulares siguen recibiendo PDF.', 'As faturas a empresas, clubes, federações e escolas seguem em ZUGFeRD, ao setor público em XRechnung (com Leitweg-ID). Os particulares continuam a receber PDF.'],
    ['Pflichtangaben des Verkäufers', 'Mandatory seller details', 'Mentions obligatoires du vendeur', 'Datos obligatorios del vendedor', 'Dados obrigatórios do vendedor'],
    ['Kommen aus Einstellungen → Shop.', 'Taken from Settings → Shop.', 'Issus de Paramètres → Boutique.', 'Proceden de Ajustes → Tienda.', 'Vêm de Definições → Loja.'],
    ['Übermittlung', 'Transmission', 'Transmission', 'Transmisión', 'Transmissão'],
    ['Im Prototyp simuliert – es wird nichts übertragen.', 'Simulated in the prototype – nothing is transmitted.', 'Simulé dans le prototype – rien n’est transmis.', 'Simulado en el prototipo: no se transmite nada.', 'Simulado no protótipo – nada é transmitido.'],
    ['E-Mail an die E-Rechnungs-Adresse des Kunden', 'E-mail to the customer’s e-invoice address', 'E-mail à l’adresse de facturation électronique du client', 'E-mail a la dirección de factura electrónica del cliente', 'E-mail para o endereço de fatura eletrónica do cliente'],
    ['DATEV (Belegtransfer / Rechnungsdatenservice)', 'DATEV (document transfer / invoice data service)', 'DATEV (transfert de pièces / service de données)', 'DATEV (transferencia de documentos / servicio de datos)', 'DATEV (transferência de documentos / serviço de dados)'],
    ['Peppol-Netzwerk', 'Peppol network', 'Réseau Peppol', 'Red Peppol', 'Rede Peppol'],
    ['ZRE / OZG-RE-Portal (Bund und Länder)', 'ZRE / OZG-RE portal (federal and state)', 'Portail ZRE / OZG-RE (État fédéral et Länder)', 'Portal ZRE / OZG-RE (federación y estados)', 'Portal ZRE / OZG-RE (federação e estados)'],
    ['An', 'On', 'Activé', 'Activado', 'Ligado'],
    ['DATEV Beraternummer', 'DATEV consultant number', 'Numéro de conseiller DATEV', 'Número de asesor DATEV', 'Número de consultor DATEV'],
    ['DATEV Mandantennummer', 'DATEV client number', 'Numéro de mandant DATEV', 'Número de cliente DATEV', 'Número de cliente DATEV'],
    ['Peppol-Teilnehmer-ID (z. B. 0204:…)', 'Peppol participant ID (e.g. 0204:…)', 'ID participant Peppol (p. ex. 0204:…)', 'ID de participante Peppol (p. ej. 0204:…)', 'ID de participante Peppol (p. ex. 0204:…)'],
    ['ZRE/OZG-RE Benutzerkonto', 'ZRE/OZG-RE user account', 'Compte utilisateur ZRE/OZG-RE', 'Cuenta de usuario ZRE/OZG-RE', 'Conta de utilizador ZRE/OZG-RE'],
    ['vorhanden', 'present', 'présent', 'presente', 'presente'],
    ['fehlt', 'missing', 'manquant', 'falta', 'em falta'],
    ['Firmenname', 'Company name', 'Raison sociale', 'Razón social', 'Nome da empresa'],
    ['USt-IdNr. oder Steuernummer', 'VAT ID or tax number', 'N° TVA ou numéro fiscal', 'NIF-IVA o número fiscal', 'NIF-IVA ou número fiscal'],
    ['Bankverbindung (IBAN)', 'Bank details (IBAN)', 'Coordonnées bancaires (IBAN)', 'Datos bancarios (IBAN)', 'Dados bancários (IBAN)'],
    ['XML anzeigen', 'Show XML', 'Afficher le XML', 'Mostrar XML', 'Mostrar XML'],
    ['XML herunterladen', 'Download XML', 'Télécharger le XML', 'Descargar XML', 'Transferir XML'],
    ['KoSIT prüfen', 'KoSIT check', 'Contrôle KoSIT', 'Validar KoSIT', 'Validar KoSIT'],
    ['Übermitteln', 'Transmit', 'Transmettre', 'Transmitir', 'Transmitir'],
    ['Pflichtfelder geprüft', 'Mandatory fields checked', 'Champs obligatoires vérifiés', 'Campos obligatorios comprobados', 'Campos obrigatórios verificados'],
    ['Simulation: PDF und XML liegen getrennt vor; die Einbettung als PDF/A-3 (ZUGFeRD-Hybrid) folgt mit der Anbindung.', 'Simulation: PDF and XML are separate; embedding as PDF/A-3 (ZUGFeRD hybrid) follows with the integration.', 'Simulation : PDF et XML sont séparés ; l’intégration en PDF/A-3 (hybride ZUGFeRD) suivra avec la connexion.', 'Simulación: PDF y XML están separados; la incrustación como PDF/A-3 (híbrido ZUGFeRD) llegará con la integración.', 'Simulação: PDF e XML estão separados; a incorporação em PDF/A-3 (híbrido ZUGFeRD) virá com a integração.'],
    ['Keine E-Rechnung für diesen Kunden (Privatkunde oder abgewählt).', 'No e-invoice for this customer (private or deselected).', 'Pas de facture électronique pour ce client (particulier ou désactivé).', 'Sin factura electrónica para este cliente (particular o desactivada).', 'Sem fatura eletrónica para este cliente (particular ou desativada).'],
    ['Keine E-Rechnung – der Rechnung ist kein Kunde zugeordnet.', 'No e-invoice – no customer is assigned to this invoice.', 'Pas de facture électronique – aucun client n’est associé.', 'Sin factura electrónica: la factura no tiene cliente.', 'Sem fatura eletrónica – a fatura não tem cliente.'],
    ['Öffentliche Hand', 'Public sector', 'Secteur public', 'Sector público', 'Setor público'],
    ['Leitweg-ID', 'Routing ID (Leitweg-ID)', 'Leitweg-ID', 'Leitweg-ID', 'Leitweg-ID'],
    ['Leitweg-ID (Pflicht bei Öffentlicher Hand)', 'Routing ID (required for public sector)', 'Leitweg-ID (obligatoire pour le secteur public)', 'Leitweg-ID (obligatorio para el sector público)', 'Leitweg-ID (obrigatório no setor público)'],
    ['E-Rechnungs-E-Mail', 'E-invoice e-mail', 'E-mail de facturation électronique', 'E-mail de factura electrónica', 'E-mail de fatura eletrónica'],
    ['Käuferreferenz', 'Buyer reference', 'Référence acheteur', 'Referencia del comprador', 'Referência do comprador'],
    ['Automatisch', 'Automatic', 'Automatique', 'Automático', 'Automático'],
    ['Keine', 'None', 'Aucune', 'Ninguna', 'Nenhuma'],
    ['keine', 'none', 'aucune', 'ninguna', 'nenhuma'],
    ['Für Öffentliche Hand ist die Leitweg-ID Pflicht (XRechnung).', 'A routing ID is required for the public sector (XRechnung).', 'La Leitweg-ID est obligatoire pour le secteur public (XRechnung).', 'La Leitweg-ID es obligatoria para el sector público (XRechnung).', 'A Leitweg-ID é obrigatória para o setor público (XRechnung).'],
    ['E-Rechnung konfigurieren', 'Configure e-invoicing', 'Configurer la facture électronique', 'Configurar factura electrónica', 'Configurar fatura eletrónica']
  ].forEach(function (r) { if (!D[r[0]]) D[r[0]] = {en: r[1], fr: r[2], es: r[3], pt: r[4]}; });
  I.muster.push([/^(\d+) Pflichtangaben fehlen$/, {en: '$1 mandatory details missing', fr: '$1 mentions obligatoires manquantes', es: 'Faltan $1 datos obligatorios', pt: 'Faltam $1 dados obrigatórios'}]);
  I.muster.push([/^Rechnung · (ZUGFeRD|XRechnung) (✓|⚠)$/, {en: 'Invoice · $1 $2', fr: 'Facture · $1 $2', es: 'Factura · $1 $2', pt: 'Fatura · $1 $2'}]);
})();

/* v12.23 Ausschreibungen */
(function () {
  var I = window.ZYKOL_I18N; if (!I) return;
  var D = I.dict;
  [
    ['Ausschreibungen', 'Tenders', 'Appels d’offres', 'Licitaciones', 'Concursos'],
    ['Ausschreibung', 'Tender', 'Appel d’offres', 'Licitación', 'Concurso'],
    ['Öffentliche Vergaben von der Sichtung bis zum Zuschlag – mit Fristen, Nachweisen und Angebot.', 'Public tenders from screening to award – with deadlines, certificates and quote.', 'Marchés publics de la veille à l’attribution – avec délais, justificatifs et offre.', 'Licitaciones públicas desde la revisión hasta la adjudicación, con plazos, certificados y oferta.', 'Concursos públicos da análise à adjudicação – com prazos, certificados e proposta.'],
    ['Neue Ausschreibung', 'New tender', 'Nouvel appel d’offres', 'Nueva licitación', 'Novo concurso'],
    ['Offen', 'Open', 'Ouvert', 'Abierto', 'Aberto'],
    ['Frist diese Woche', 'Deadline this week', 'Échéance cette semaine', 'Plazo esta semana', 'Prazo esta semana'],
    ['Abgegeben', 'Submitted', 'Remis', 'Presentado', 'Entregue'],
    ['Zuschlagsquote', 'Win rate', 'Taux d’attribution', 'Tasa de adjudicación', 'Taxa de adjudicação'],
    ['gesichtet bis Angebot in Arbeit', 'screened to quote in progress', 'de la veille à l’offre en cours', 'de revisado a oferta en curso', 'de analisado a proposta em curso'],
    ['Angebotsabgabe < 7 Tage', 'Submission < 7 days', 'Remise < 7 jours', 'Entrega < 7 días', 'Entrega < 7 dias'],
    ['warten auf Zuschlag', 'awaiting award', 'en attente d’attribution', 'esperando adjudicación', 'a aguardar adjudicação'],
    ['Zuschlag', 'Award', 'Attribution', 'Adjudicación', 'Adjudicação'],
    ['Absage / Aufgehoben', 'Rejected / cancelled', 'Rejeté / annulé', 'Rechazado / anulado', 'Rejeitado / anulado'],
    ['Alle Vergabestellen', 'All contracting authorities', 'Tous les pouvoirs adjudicateurs', 'Todos los órganos de contratación', 'Todas as entidades adjudicantes'],
    ['Titel, Vergabenummer oder Vergabestelle', 'Title, tender number or authority', 'Titre, numéro de marché ou acheteur', 'Título, número o órgano de contratación', 'Título, número ou entidade'],
    ['Keine Ausschreibungen gefunden.', 'No tenders found.', 'Aucun appel d’offres trouvé.', 'No se encontraron licitaciones.', 'Nenhum concurso encontrado.'],
    ['← Alle Ausschreibungen', '← All tenders', '← Tous les appels d’offres', '← Todas las licitaciones', '← Todos os concursos'],
    ['Nur Ansicht – Ihre Rolle darf Ausschreibungen nicht bearbeiten.', 'View only – your role may not edit tenders.', 'Lecture seule – votre rôle ne peut pas modifier les appels d’offres.', 'Solo lectura: su rol no puede editar licitaciones.', 'Só leitura – a sua função não pode editar concursos.'],
    ['Status & nächster Schritt', 'Status & next step', 'Statut & étape suivante', 'Estado y siguiente paso', 'Estado e próximo passo'],
    ['Grund / Notiz zur Entscheidung', 'Reason / note on the decision', 'Motif / note sur la décision', 'Motivo / nota de la decisión', 'Motivo / nota da decisão'],
    ['Vergabe', 'Procurement', 'Marché', 'Contratación', 'Contratação'],
    ['Vergabestelle', 'Contracting authority', 'Pouvoir adjudicateur', 'Órgano de contratación', 'Entidade adjudicante'],
    ['Vergabeart', 'Procedure', 'Procédure', 'Procedimiento', 'Procedimento'],
    ['Titel', 'Title', 'Titre', 'Título', 'Título'],
    ['Vergabenummer', 'Tender number', 'Numéro de marché', 'Número de licitación', 'Número do concurso'],
    ['Vergabeplattform (Link)', 'Tender platform (link)', 'Plateforme (lien)', 'Plataforma (enlace)', 'Plataforma (ligação)'],
    ['Leistungsbeschreibung', 'Specification', 'Cahier des charges', 'Pliego de prescripciones', 'Caderno de encargos'],
    ['+ Unterlage (Platzhalter)', '+ Document (placeholder)', '+ Document (espace réservé)', '+ Documento (marcador)', '+ Documento (marcador)'],
    ['Keine Unterlagen', 'No documents', 'Aucun document', 'Sin documentos', 'Sem documentos'],
    ['Lose', 'Lots', 'Lots', 'Lotes', 'Lotes'],
    ['+ Los', '+ Lot', '+ Lot', '+ Lote', '+ Lote'],
    ['Fristen', 'Deadlines', 'Délais', 'Plazos', 'Prazos'],
    ['Bieterfragen bis', 'Bidder questions until', 'Questions jusqu’au', 'Preguntas hasta', 'Perguntas até'],
    ['Angebotsabgabe bis', 'Submission until', 'Remise jusqu’au', 'Entrega hasta', 'Entrega até'],
    ['Bindefrist bis', 'Binding period until', 'Délai de validité jusqu’au', 'Plazo de vinculación hasta', 'Prazo de vinculação até'],
    ['Ausführung ab', 'Execution from', 'Exécution à partir du', 'Ejecución desde', 'Execução a partir de'],
    ['Ausführung bis', 'Execution until', 'Exécution jusqu’au', 'Ejecución hasta', 'Execução até'],
    ['Eignungsnachweise', 'Qualification certificates', 'Justificatifs de capacité', 'Certificados de aptitud', 'Certificados de habilitação'],
    ['Gewerbeanmeldung', 'Business registration', 'Déclaration d’activité', 'Alta de actividad', 'Registo de atividade'],
    ['Handelsregisterauszug', 'Commercial register extract', 'Extrait Kbis', 'Extracto del registro mercantil', 'Certidão comercial'],
    ['Unbedenklichkeitsbescheinigung Finanzamt', 'Tax clearance certificate', 'Attestation de régularité fiscale', 'Certificado de estar al corriente (Hacienda)', 'Certidão de não dívida (Finanças)'],
    ['Unbedenklichkeitsbescheinigung Krankenkasse', 'Social security clearance', 'Attestation de régularité sociale', 'Certificado de estar al corriente (Seg. Social)', 'Certidão de não dívida (Seg. Social)'],
    ['Berufsgenossenschaft', 'Employers’ liability insurance', 'Assurance accidents du travail', 'Mutua de accidentes', 'Seguro de acidentes de trabalho'],
    ['Referenzen (3 vergleichbare Aufträge)', 'References (3 comparable contracts)', 'Références (3 marchés comparables)', 'Referencias (3 contratos comparables)', 'Referências (3 contratos comparáveis)'],
    ['Eigenerklärung §§ 123/124 GWB', 'Self-declaration §§ 123/124 GWB', 'Déclaration sur l’honneur §§ 123/124 GWB', 'Declaración responsable §§ 123/124 GWB', 'Declaração §§ 123/124 GWB'],
    ['Tariftreueerklärung', 'Collective wage declaration', 'Déclaration de respect des conventions', 'Declaración de cumplimiento salarial', 'Declaração de cumprimento salarial'],
    ['liegt vor', 'available', 'disponible', 'disponible', 'disponível'],
    ['läuft vor Abgabe ab', 'expires before submission', 'expire avant la remise', 'caduca antes de la entrega', 'expira antes da entrega'],
    ['gültig bis', 'valid until', 'valable jusqu’au', 'válido hasta', 'válido até'],
    ['Gültig bis', 'Valid until', 'Valable jusqu’au', 'Válido hasta', 'Válido até'],
    ['Kalkulation (netto)', 'Calculation (net)', 'Calcul (HT)', 'Cálculo (neto)', 'Cálculo (líquido)'],
    ['Marge', 'Margin', 'Marge', 'Margen', 'Margem'],
    ['Position', 'Item', 'Poste', 'Posición', 'Posição'],
    ['Unterlagen und Abgabe laufen über die Vergabeplattform. Der Prototyp hält Status, Fristen und Nachweise lokal.', 'Documents and submission go through the tender platform. The prototype keeps status, deadlines and certificates locally.', 'Documents et remise passent par la plateforme. Le prototype garde statut, délais et justificatifs en local.', 'Los documentos y la entrega se hacen en la plataforma. El prototipo guarda estado, plazos y certificados en local.', 'Documentos e entrega passam pela plataforma. O protótipo guarda estado, prazos e certificados localmente.'],
    ['Gesichtet', 'Screened', 'Repéré', 'Revisado', 'Analisado'],
    ['In Prüfung', 'Under review', 'En examen', 'En revisión', 'Em análise'],
    ['Teilnahme beschlossen', 'Participation decided', 'Participation décidée', 'Participación decidida', 'Participação decidida'],
    ['Angebot in Arbeit', 'Quote in progress', 'Offre en cours', 'Oferta en curso', 'Proposta em curso'],
    ['Absage', 'Rejected', 'Rejeté', 'Rechazado', 'Rejeitado'],
    ['Aufgehoben', 'Cancelled', 'Annulé', 'Anulado', 'Anulado'],
    ['Keine Teilnahme', 'Not participating', 'Pas de participation', 'Sin participación', 'Sem participação'],
    ['Zur Prüfung', 'To review', 'À examiner', 'A revisión', 'Para análise'],
    ['Teilnahme: ja', 'Participate: yes', 'Participer : oui', 'Participar: sí', 'Participar: sim'],
    ['Teilnahme: nein', 'Participate: no', 'Participer : non', 'Participar: no', 'Participar: não'],
    ['Angebot erzeugen', 'Create quote', 'Créer l’offre', 'Crear oferta', 'Criar proposta'],
    ['Angebot öffnen', 'Open quote', 'Ouvrir l’offre', 'Abrir oferta', 'Abrir proposta'],
    ['Angebot freigeben & abgeben', 'Approve & submit quote', 'Valider & remettre l’offre', 'Aprobar y presentar oferta', 'Aprovar e entregar proposta'],
    ['Zuschlag erhalten', 'Contract awarded', 'Marché attribué', 'Adjudicado', 'Adjudicado'],
    ['In Warenkorb laden (Rechnung)', 'Load into cart (invoice)', 'Charger dans le panier (facture)', 'Cargar en el carrito (factura)', 'Carregar no carrinho (fatura)'],
    ['Bitte einen Grund für die Absage der Teilnahme eintragen.', 'Please give a reason for not participating.', 'Veuillez indiquer un motif de non-participation.', 'Indique un motivo para no participar.', 'Indique um motivo para não participar.'],
    ['Das Angebot hat noch keine Preise – bitte erst kalkulieren.', 'The quote has no prices yet – please calculate first.', 'L’offre n’a pas encore de prix – veuillez d’abord chiffrer.', 'La oferta aún no tiene precios: calcule primero.', 'A proposta ainda não tem preços – calcule primeiro.'],
    ['Vergabenummer', 'Tender number', 'Numéro de marché', 'Número de licitación', 'Número do concurso'],
    ['UVgO – Öffentliche Ausschreibung', 'UVgO – open tender', 'UVgO – appel d’offres ouvert', 'UVgO – licitación abierta', 'UVgO – concurso público'],
    ['UVgO – Beschränkte Ausschreibung', 'UVgO – restricted tender', 'UVgO – appel d’offres restreint', 'UVgO – licitación restringida', 'UVgO – concurso limitado'],
    ['UVgO – Verhandlungsvergabe (freihändig)', 'UVgO – negotiated award', 'UVgO – procédure négociée', 'UVgO – procedimiento negociado', 'UVgO – ajuste direto'],
    ['VgV – Offenes Verfahren', 'VgV – open procedure', 'VgV – procédure ouverte', 'VgV – procedimiento abierto', 'VgV – procedimento aberto'],
    ['VgV – Nicht offenes Verfahren', 'VgV – restricted procedure', 'VgV – procédure restreinte', 'VgV – procedimiento restringido', 'VgV – procedimento restrito'],
    ['Ausschreibungen ansehen', 'View tenders', 'Consulter les appels d’offres', 'Ver licitaciones', 'Ver concursos'],
    ['Ausschreibungen bearbeiten', 'Edit tenders', 'Modifier les appels d’offres', 'Editar licitaciones', 'Editar concursos'],
    ['Teilnahme entscheiden & Angebot freigeben', 'Decide participation & approve quote', 'Décider la participation & valider l’offre', 'Decidir participación y aprobar oferta', 'Decidir participação e aprovar proposta']
  ].forEach(function (r) { if (!D[r[0]]) D[r[0]] = {en: r[1], fr: r[2], es: r[3], pt: r[4]}; });
  I.muster.push([/^Abgabe (\d\d\.\d\d\.\d{4}) · in (\d+) Tagen$/, {en: 'Submission $1 · in $2 days', fr: 'Remise $1 · dans $2 jours', es: 'Entrega $1 · en $2 días', pt: 'Entrega $1 · em $2 dias'}]);
  I.muster.push([/^(\d+) von (\d+) Nachweisen liegen vor$/, {en: '$1 of $2 certificates available', fr: '$1 justificatifs sur $2 disponibles', es: '$1 de $2 certificados disponibles', pt: '$1 de $2 certificados disponíveis'}]);
  I.muster.push([/^Angebotsabgabe in (\d+) Tagen: (.+)$/, {en: 'Submission in $1 days: $2', fr: 'Remise dans $1 jours : $2', es: 'Entrega en $1 días: $2', pt: 'Entrega em $1 dias: $2'}]);
})();

/* v12.23b Dashboard-Hinweis */
(function () {
  var I = window.ZYKOL_I18N; if (!I) return;
  var D = I.dict;
  if (!D['Ausschreibungen · Frist in weniger als 7 Tagen']) D['Ausschreibungen · Frist in weniger als 7 Tagen'] = {en: 'Tenders · deadline in less than 7 days', fr: 'Appels d’offres · échéance dans moins de 7 jours', es: 'Licitaciones · plazo en menos de 7 días', pt: 'Concursos · prazo em menos de 7 dias'};
})();

/* v12.24 Werkstatt-Katalog, Menü, ZUGFeRD-PDF */
(function () {
  var I = window.ZYKOL_I18N; if (!I) return;
  var D = I.dict;
  [
    ['Werkstatt-Leistungen', 'Workshop services', 'Prestations d’atelier', 'Servicios de taller', 'Serviços de oficina'],
    ['+ Arbeitsschritt', '+ Work step', '+ Étape', '+ Paso de trabajo', '+ Passo de trabalho'],
    ['+ Arbeitsschritt aus Katalog', '+ Work step from catalogue', '+ Étape du catalogue', '+ Paso del catálogo', '+ Passo do catálogo'],
    ['Katalog schließen', 'Close catalogue', 'Fermer le catalogue', 'Cerrar catálogo', 'Fechar catálogo'],
    ['Arbeitsschritt suchen', 'Search work step', 'Rechercher une étape', 'Buscar paso', 'Procurar passo'],
    ['Kein passender Arbeitsschritt.', 'No matching work step.', 'Aucune étape correspondante.', 'Ningún paso coincidente.', 'Nenhum passo correspondente.'],
    ['Keine Standard-Teile', 'No standard parts', 'Aucune pièce standard', 'Sin piezas estándar', 'Sem peças padrão'],
    ['+ Standard-Teil', '+ Standard part', '+ Pièce standard', '+ Pieza estándar', '+ Peça padrão'],
    ['Teile leeren', 'Clear parts', 'Vider les pièces', 'Vaciar piezas', 'Limpar peças'],
    ['Min.', 'Min.', 'Min.', 'Min.', 'Min.'],
    ['Pauschale €', 'Flat rate €', 'Forfait €', 'Tarifa plana €', 'Valor fixo €'],
    ['Pauschal', 'Flat rate', 'Forfait', 'Tarifa plana', 'Valor fixo'],
    ['Teil', 'Part', 'Pièce', 'Pieza', 'Peça'],
    ['Arbeit', 'Labour', 'Main-d’œuvre', 'Mano de obra', 'Mão de obra'],
    ['Frei', 'Free', 'Libre', 'Libre', 'Livre'],
    ['Kajak/Kanadier', 'Kayak/canoe', 'Kayak/canoë', 'Kayak/canoa', 'Caiaque/canoa'],
    ['Bekleidung/Neopren', 'Clothing/neoprene', 'Vêtements/néoprène', 'Ropa/neopreno', 'Vestuário/neopreno'],
    ['Rettungswesten', 'Buoyancy aids', 'Gilets', 'Chalecos', 'Coletes'],
    ['Finne tauschen', 'Replace fin', 'Changer l’aileron', 'Cambiar quilla', 'Trocar quilha'],
    ['Finnenkasten neu einkleben', 'Re-bond fin box', 'Recoller le boîtier d’aileron', 'Volver a pegar caja de quilla', 'Recolar caixa da quilha'],
    ['Steuerseil erneuern', 'Renew rudder cable', 'Remplacer le câble de gouvernail', 'Renovar cable de timón', 'Substituir cabo do leme'],
    ['Ruderanlage einstellen', 'Adjust rudder', 'Régler le gouvernail', 'Ajustar timón', 'Ajustar leme'],
    ['Rumpf spachteln / Gelcoat ausbessern', 'Fill hull / repair gelcoat', 'Mastiquer la coque / réparer le gelcoat', 'Enmasillar casco / reparar gelcoat', 'Betumar casco / reparar gelcoat'],
    ['Kielschutzband aufbringen', 'Apply keel strip', 'Poser une bande de quille', 'Colocar banda de quilla', 'Aplicar fita de quilha'],
    ['Lukendeckel tauschen', 'Replace hatch cover', 'Changer le couvercle de trappe', 'Cambiar tapa de escotilla', 'Trocar tampa da escotilha'],
    ['Sitz / Rückenlehne erneuern', 'Renew seat / backrest', 'Remplacer siège / dossier', 'Renovar asiento / respaldo', 'Substituir assento / encosto'],
    ['Fußstützen tauschen', 'Replace footrests', 'Changer les cale-pieds', 'Cambiar reposapiés', 'Trocar apoios dos pés'],
    ['Paddelschaft kürzen', 'Shorten paddle shaft', 'Raccourcir le manche', 'Acortar pala', 'Encurtar haste'],
    ['Paddelblatt reparieren', 'Repair paddle blade', 'Réparer la pale', 'Reparar hoja', 'Reparar pá'],
    ['Teilungsverbindung tauschen', 'Replace ferrule', 'Changer le raccord', 'Cambiar unión', 'Trocar união'],
    ['SUP-Ventil tauschen', 'Replace SUP valve', 'Changer la valve SUP', 'Cambiar válvula SUP', 'Trocar válvula SUP'],
    ['SUP-Naht kleben', 'Glue SUP seam', 'Recoller la couture SUP', 'Pegar costura SUP', 'Colar costura SUP'],
    ['Trockenanzug: Halsmanschette erneuern', 'Drysuit: replace neck seal', 'Combinaison étanche : changer le manchon de cou', 'Traje seco: cambiar cuello', 'Fato seco: trocar vedante do pescoço'],
    ['Trockenanzug: Armmanschetten erneuern', 'Drysuit: replace wrist seals', 'Combinaison étanche : changer les manchons', 'Traje seco: cambiar puños', 'Fato seco: trocar punhos'],
    ['Reißverschluss tauschen', 'Replace zip', 'Changer la fermeture éclair', 'Cambiar cremallera', 'Trocar fecho'],
    ['Neopren-Naht kleben', 'Glue neoprene seam', 'Recoller la couture néoprène', 'Pegar costura de neopreno', 'Colar costura de neopreno'],
    ['Rettungsweste: Sichtprüfung', 'Buoyancy aid: visual check', 'Gilet : contrôle visuel', 'Chaleco: inspección visual', 'Colete: inspeção visual'],
    ['Automatikweste warten / Patrone tauschen', 'Service auto lifejacket / replace cylinder', 'Entretien gilet auto / changer la cartouche', 'Mantener chaleco automático / cambiar cartucho', 'Manutenção colete automático / trocar cartucho'],
    ['Spritzdecke: Gummizug tauschen', 'Spray deck: replace bungee', 'Jupe : changer l’élastique', 'Cubrebañeras: cambiar elástico', 'Saia: trocar elástico'],
    ['Bootswagen: Reifen tauschen', 'Boat trolley: replace tyres', 'Chariot : changer les pneus', 'Carro: cambiar ruedas', 'Carrinho: trocar pneus'],
    ['Inspektion / Sicherheitscheck Boot', 'Boat inspection / safety check', 'Inspection / contrôle sécurité bateau', 'Inspección / control de seguridad', 'Inspeção / verificação de segurança'],
    ['Inspektion SUP', 'SUP inspection', 'Inspection SUP', 'Inspección SUP', 'Inspeção SUP'],
    ['Reinigung / Desinfektion', 'Cleaning / disinfection', 'Nettoyage / désinfection', 'Limpieza / desinfección', 'Limpeza / desinfeção'],
    ['Bootswagen: Achse richten', 'Boat trolley: straighten axle', 'Chariot : redresser l’essieu', 'Carro: enderezar eje', 'Carrinho: endireitar eixo'],
    ['Kanadier: Süllrand reparieren', 'Canoe: repair gunwale', 'Canoë : réparer le plat-bord', 'Canoa: reparar borda', 'Canoa: reparar borda'],
    ['Wintereinlagerung vorbereiten', 'Prepare winter storage', 'Préparer l’hivernage', 'Preparar almacenaje invernal', 'Preparar armazenamento de inverno'],
    ['Standard wiederherstellen', 'Restore default', 'Rétablir par défaut', 'Restaurar predeterminado', 'Repor predefinição'],
    ['Eigene Reihenfolge verwerfen', 'Discard own order', 'Abandonner l’ordre personnel', 'Descartar orden propio', 'Descartar ordem própria'],
    ['Dashboard steht fest oben', 'Dashboard is fixed at the top', 'Le tableau de bord reste en haut', 'El panel está fijo arriba', 'O painel fica fixo no topo'],
    ['E-Rechnung (PDF mit XML)', 'E-invoice (PDF with XML)', 'Facture électronique (PDF avec XML)', 'Factura electrónica (PDF con XML)', 'Fatura eletrónica (PDF com XML)'],
    ['Sichtkopie (PDF)', 'Visual copy (PDF)', 'Copie visuelle (PDF)', 'Copia visual (PDF)', 'Cópia visual (PDF)'],
    ['PDF wird erzeugt …', 'Creating PDF …', 'Création du PDF …', 'Creando PDF …', 'A criar PDF …'],
    ['ZUGFeRD: PDF mit eingebetteter factur-x.xml (PDF/A-3-Anhang, XMP-Metadaten). Nicht vollständig PDF/A-3-konform: Seiten als Bild, ohne ICC-Farbprofil; nicht mit veraPDF geprüft. XRechnung bleibt reines XML, das PDF ist nur eine Sichtkopie.', 'ZUGFeRD: PDF with embedded factur-x.xml (PDF/A-3 attachment, XMP metadata). Not fully PDF/A-3 compliant: pages as images, no ICC colour profile; not checked with veraPDF. XRechnung stays pure XML, the PDF is only a visual copy.', 'ZUGFeRD : PDF avec factur-x.xml intégré (pièce jointe PDF/A-3, métadonnées XMP). Pas entièrement conforme PDF/A-3 : pages en image, sans profil ICC ; non vérifié avec veraPDF. XRechnung reste du XML pur, le PDF n’est qu’une copie visuelle.', 'ZUGFeRD: PDF con factur-x.xml incrustado (adjunto PDF/A-3, metadatos XMP). No totalmente conforme a PDF/A-3: páginas como imagen, sin perfil ICC; no validado con veraPDF. XRechnung sigue siendo XML puro; el PDF es solo una copia visual.', 'ZUGFeRD: PDF com factur-x.xml incorporado (anexo PDF/A-3, metadados XMP). Não totalmente conforme PDF/A-3: páginas como imagem, sem perfil ICC; não validado com veraPDF. A XRechnung continua XML puro, o PDF é só uma cópia visual.'],
    ['Feste Arbeitsschritte für Voranschlag und Reparaturprotokoll: Richtzeit oder Pauschalpreis, dazu Standard-Teile.', 'Fixed work steps for estimate and repair log: standard time or flat rate, plus standard parts.', 'Étapes fixes pour devis et journal : temps de référence ou forfait, plus pièces standard.', 'Pasos fijos para presupuesto y registro: tiempo de referencia o tarifa plana, más piezas estándar.', 'Passos fixos para orçamento e registo: tempo de referência ou valor fixo, mais peças padrão.']
  ].forEach(function (r) { if (!D[r[0]]) D[r[0]] = {en: r[1], fr: r[2], es: r[3], pt: r[4]}; });
  I.muster.push([/^(\d+) aktive Arbeitsschritte$/, {en: '$1 active work steps', fr: '$1 étapes actives', es: '$1 pasos activos', pt: '$1 passos ativos'}]);
})();

/* v12.24b Rolle Werkstatt */
(function () {
  var I = window.ZYKOL_I18N; if (!I) return;
  var D = I.dict;
  D['Werkstatt (Technik)'] = {en: 'Workshop technician', fr: 'Technicien atelier', es: 'Técnico de taller', pt: 'Técnico de oficina'};
})();

/* v12.25 Notion-Import Ausschreibungen */
(function () {
  var I = window.ZYKOL_I18N; if (!I) return;
  var D = I.dict;
  [
    ['Aus Notion importieren', 'Import from Notion', 'Importer depuis Notion', 'Importar desde Notion', 'Importar do Notion'],
    ['Neu & zu prüfen', 'New & to review', 'Nouveaux & à vérifier', 'Nuevas y por revisar', 'Novos e a verificar'],
    ['Alle offenen (inkl. nicht relevant)', 'All open (incl. not relevant)', 'Tous ouverts (y c. non pertinents)', 'Todas abiertas (incl. no relevantes)', 'Todos em aberto (incl. não relevantes)'],
    ['Bereits übernommen', 'Already imported', 'Déjà importés', 'Ya importadas', 'Já importados'],
    ['Übernehmen', 'Import', 'Importer', 'Importar', 'Importar'],
    ['Auswählen', 'Select', 'Sélectionner', 'Seleccionar', 'Selecionar'],
    ['✓ Ausgewählt', '✓ Selected', '✓ Sélectionné', '✓ Seleccionada', '✓ Selecionado'],
    ['Bekanntmachung öffnen ↗', 'Open notice ↗', 'Ouvrir l’avis ↗', 'Abrir anuncio ↗', 'Abrir anúncio ↗'],
    ['Ausschreibung öffnen', 'Open tender', 'Ouvrir l’appel d’offres', 'Abrir licitación', 'Abrir concurso'],
    ['Keine Einträge in diesem Filter.', 'No entries in this filter.', 'Aucune entrée dans ce filtre.', 'Sin entradas en este filtro.', 'Sem entradas neste filtro.'],
    ['Vergabestelle wird als Kunde (Öffentliche Hand) angelegt', 'Contracting authority will be created as customer (public sector)', 'L’acheteur sera créé comme client (secteur public)', 'El órgano de contratación se creará como cliente (sector público)', 'A entidade adjudicante será criada como cliente (setor público)'],
    ['Nichts übernommen – die Auswahl ist schon vorhanden.', 'Nothing imported – the selection already exists.', 'Rien importé – la sélection existe déjà.', 'Nada importado: la selección ya existe.', 'Nada importado – a seleção já existe.'],
    ['Notion: Neu', 'Notion: New', 'Notion : nouveau', 'Notion: nueva', 'Notion: novo'],
    ['Notion: Nicht relevant', 'Notion: Not relevant', 'Notion : non pertinent', 'Notion: no relevante', 'Notion: não relevante'],
    ['Notion: Prüfen', 'Notion: Review', 'Notion : à vérifier', 'Notion: revisar', 'Notion: verificar'],
    ['Momentaufnahme der Notion-Datenbank „Ausschreibungen“ (TED und service.bund.de). Später kann eine Server-Anbindung an Notion die Liste direkt laden. Übernommene Einträge starten mit Status „Gesichtet“; Doppelte erkennt die Kasse an Vergabenummer oder Link.', 'Snapshot of the Notion database “Tenders” (TED and service.bund.de). Later a server connection to Notion can load the list directly. Imported entries start with status “Screened”; duplicates are detected by tender number or link.', 'Instantané de la base Notion « Appels d’offres » (TED et service.bund.de). Plus tard, une connexion serveur à Notion pourra charger la liste directement. Les entrées importées commencent au statut « Repéré » ; les doublons sont détectés par numéro ou lien.', 'Instantánea de la base de Notion «Licitaciones» (TED y service.bund.de). Más adelante, una conexión de servidor con Notion podrá cargar la lista directamente. Las entradas importadas empiezan con estado «Revisado»; los duplicados se detectan por número o enlace.', 'Instantâneo da base Notion «Concursos» (TED e service.bund.de). Mais tarde, uma ligação de servidor ao Notion poderá carregar a lista diretamente. As entradas importadas começam com o estado «Analisado»; os duplicados são detetados pelo número ou link.']
  ].forEach(function (r) { if (!D[r[0]]) D[r[0]] = {en: r[1], fr: r[2], es: r[3], pt: r[4]}; });
  I.muster.push([/^Notion-Stand vom ([\d.]+) · (\d+) Einträge, davon (\d+) noch nicht übernommen$/, {en: 'Notion snapshot of $1 · $2 entries, $3 not yet imported', fr: 'État Notion du $1 · $2 entrées, dont $3 non importées', es: 'Estado de Notion del $1 · $2 entradas, $3 sin importar', pt: 'Estado do Notion de $1 · $2 entradas, $3 por importar'}]);
  I.muster.push([/^Auswahl übernehmen \((\d+)\)$/, {en: 'Import selection ($1)', fr: 'Importer la sélection ($1)', es: 'Importar selección ($1)', pt: 'Importar seleção ($1)'}]);
  I.muster.push([/^Vergabestelle vorhanden: (.+)$/, {en: 'Contracting authority exists: $1', fr: 'Acheteur existant : $1', es: 'Órgano existente: $1', pt: 'Entidade existente: $1'}]);
  I.muster.push([/^Bereits übernommen als (.+)$/, {en: 'Already imported as $1', fr: 'Déjà importé comme $1', es: 'Ya importada como $1', pt: 'Já importado como $1'}]);
  I.muster.push([/^Aus Notion übernommen · Quelle (.+) · Stand (.+)$/, {en: 'Imported from Notion · source $1 · as of $2', fr: 'Importé de Notion · source $1 · état $2', es: 'Importada de Notion · fuente $1 · estado $2', pt: 'Importado do Notion · fonte $1 · estado $2'}]);
  I.muster.push([/^(\d+) Ausschreibungen? als „Gesichtet“ übernommen \((.+)\)(.*)$/, {en: '$1 tender(s) imported as “Screened” ($2)$3', fr: '$1 appel(s) d’offres importé(s) comme « Repéré » ($2)$3', es: '$1 licitación(es) importada(s) como «Revisado» ($2)$3', pt: '$1 concurso(s) importado(s) como «Analisado» ($2)$3'}]);
})();

/* v12.26 Rolle Werkstatt, Übergabe an Kasse */
(function () {
  var I = window.ZYKOL_I18N; if (!I) return;
  var D = I.dict;
  [
    ['+ Neuer Kunde', '+ New customer', '+ Nouveau client', '+ Nuevo cliente', '+ Novo cliente'],
    ['Neuer Kunde', 'New customer', 'Nouveau client', 'Nuevo cliente', 'Novo cliente'],
    ['Name *', 'Name *', 'Nom *', 'Nombre *', 'Nome *'],
    ['PLZ / Ort', 'Postcode / town', 'CP / ville', 'CP / localidad', 'CP / localidade'],
    ['Kunde anlegen & wählen', 'Create & select customer', 'Créer et choisir le client', 'Crear y elegir cliente', 'Criar e escolher cliente'],
    ['Zur Abrechnung an Kasse übergeben', 'Hand over to till for billing', 'Transmettre à la caisse pour facturation', 'Pasar a caja para cobrar', 'Passar à caixa para faturar'],
    ['Abrechnen darf der Verkauf an der Kasse.', 'Sales staff bill this at the till.', 'La vente facture à la caisse.', 'Ventas cobra en caja.', 'As vendas faturam na caixa.'],
    ['Bitte den Namen des Kunden eintragen.', 'Please enter the customer’s name.', 'Veuillez saisir le nom du client.', 'Introduzca el nombre del cliente.', 'Introduza o nome do cliente.'],
    ['Bitte Telefon oder E-Mail eintragen, damit die Werkstatt den Kunden erreicht.', 'Please enter phone or e-mail so the workshop can reach the customer.', 'Veuillez saisir téléphone ou e-mail pour joindre le client.', 'Introduzca teléfono o e-mail para contactar al cliente.', 'Introduza telefone ou e-mail para contactar o cliente.'],
    ['Termine dieser Kasse', 'Appointments at this till', 'Rendez-vous de cette caisse', 'Citas de esta caja', 'Marcações desta caixa'],
    ['Termine dieser Woche', 'Appointments this week', 'Rendez-vous de la semaine', 'Citas de esta semana', 'Marcações desta semana'],
    ['Werkstatt öffnen', 'Open workshop', 'Ouvrir l’atelier', 'Abrir taller', 'Abrir oficina']
  ].forEach(function (r) { if (!D[r[0]]) D[r[0]] = {en: r[1], fr: r[2], es: r[3], pt: r[4]}; });
  I.muster.push([/^Zur Abrechnung an die Kasse übergeben am ([\d.]+) von (.+) – Verkauf rechnet ab\.$/, {en: 'Handed over to the till for billing on $1 by $2 – sales will bill it.', fr: 'Transmis à la caisse le $1 par $2 – la vente facture.', es: 'Pasado a caja el $1 por $2: ventas lo cobra.', pt: 'Passado à caixa em $1 por $2 – as vendas faturam.'}]);
  I.muster.push([/^Werkstatt abrechnen: (.+)$/, {en: 'Bill workshop job: $1', fr: 'Facturer l’atelier : $1', es: 'Cobrar taller: $1', pt: 'Faturar oficina: $1'}]);
  I.muster.push([/^An Kasse übergeben am ([\d.]+) von (.+)$/, {en: 'Handed to till on $1 by $2', fr: 'Transmis à la caisse le $1 par $2', es: 'Pasado a caja el $1 por $2', pt: 'Passado à caixa em $1 por $2'}]);
})();
