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
