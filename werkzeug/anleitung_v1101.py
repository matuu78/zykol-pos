# Anleitung v11.00: Kapitel bezahlen neu (Belegausgabe), Kapitel transaktionen um angehängte Dokumente ergänzt
import json, sys
p = sys.argv[1]
s = open(p, encoding='utf-8').read()
j = json.loads(s[s.index('{'):s.rstrip().rstrip(';').rindex('}') + 1])
j['version'] = 'v11.00'
K = {}
K['de'] = {
 'bezahlen': {'titel': 'Bezahlen und Beleg', 'intro': 'Zahlart wählen, bezahlen, Bon und Rechnung ausgeben. Die Belege hängen danach am Vorgang.', 'schritte': [
   'Im Warenkorb „Bezahlen“ antippen. Darunter erscheint „Zahlart wählen“ mit Karte, Bar und Rechnung. „Zurück“ klappt die Auswahl wieder zu.',
   'Karte: Der Kunde zahlt am Terminal. Bar: den gegebenen Betrag eingeben oder einen Schnellbetrag wählen, das Rückgeld erscheint sofort. Rechnung: für Rechnungskunden wie Vereine und Firmen; enthält der Einkauf Paddel, werden die Paddel-IDs vergeben und angezeigt.',
   'Enthält der Einkauf ein Boot, zeigt der Dialog seine Seriennummer und „QR-Etiketten drucken“ – bei jeder Zahlart.',
   'Im Dialog „Bezahlen“ antippen. Es erscheint die Belegausgabe.',
   'Karte und Bar: Der Bon wird immer gedruckt. Zusätzlich optional „Rechnung drucken“ oder „Rechnung per E-Mail senden“ wählen; die E-Mail-Adresse des Kunden wird übernommen.',
   'Zahlart Rechnung: Es gibt keinen Bon. Die Rechnung ist Pflicht – „Rechnung drucken“ oder „Rechnung per E-Mail senden“ wählen.',
   '„Abschließen“ antippen. Bon und Rechnung gehen direkt an den Drucker, ohne Vorschau. Ein Hinweis bestätigt den Abschluss; „Öffnen“ zeigt den Vorgang in den Transaktionen.',
   '„Bestellbeleg“ druckt zusätzlich einen Bestellbeleg. „Zurück“ kehrt ohne Abschluss in den Warenkorb bzw. zur Zahlung zurück.'],
   'tipp': 'Jeder Beleg trägt einen QR-Code, über den Kunden ihn online abrufen. TSE, Kartenzahlung, Drucker und E-Mail-Versand sind im Prototyp simuliert.'},
 'transaktionen': {'titel': 'Transaktionen und Tagesabschluss', 'intro': 'Alle Verkäufe nachschlagen, Belege ansehen und erneut drucken, den Tag abschließen.', 'schritte': [
   'Zeitraum wählen: Heute, Gestern, Letzte 7 Tage, Dieser Monat, Vormonat, Quartal oder Benutzerdefiniert. Nach Zahlart oder Status filtern.',
   'Eine Zeile öffnen, um Positionen, TSE-Daten und den digitalen Beleg zu sehen.',
   'Unter „Angehängte Dokumente“ stehen Bon und Rechnung des Vorgangs, mit Vermerk „gedruckt“ oder „per E-Mail an …“. „Ansehen“ zeigt das Dokument, „Drucken“ druckt es erneut.',
   'Storno oder Retoure aus dem Belegdetail starten (Recht „Storno / Retoure“).',
   'Am Ende des Tages den Tagesabschluss erstellen.'],
   'tipp': 'Jede Kasse hat ein eigenes Journal. Ein Tipp auf den Tabellenkopf sortiert die Spalte.'}}
K['en'] = {
 'bezahlen': {'titel': 'Payment and receipt', 'intro': 'Choose a payment method, pay, issue receipt and invoice. The documents are then attached to the transaction.', 'schritte': [
   'In the cart, tap “Pay”. “Choose payment method” appears below with Card, Cash and Invoice. “Back” closes the selection.',
   'Card: the customer pays at the terminal. Cash: enter the amount given or choose a quick amount; the change appears instantly. Invoice: for invoice customers such as clubs and companies; if the purchase includes paddles, their paddle IDs are assigned and shown.',
   'If the purchase includes a boat, the dialog shows its serial number and “Print QR labels” – with any payment method.',
   'In the dialog, tap “Pay”. The receipt output appears.',
   'Card and cash: the receipt is always printed. Optionally also choose “Print invoice” or “Send invoice by email”; the customer’s email address is filled in.',
   'Payment by invoice: there is no receipt. The invoice is required – choose “Print invoice” or “Send invoice by email”.',
   'Tap “Complete”. Receipt and invoice go straight to the printer, without a preview. A notice confirms the sale; “Open” shows the transaction under Transactions.',
   '“Order slip” also prints an order slip. “Back” returns to the cart or the payment without completing.'],
   'tipp': 'Every receipt carries a QR code customers can use to view it online. TSE, card payment, printer and email sending are simulated in the prototype.'},
 'transaktionen': {'titel': 'Transactions and end of day', 'intro': 'Look up all sales, view and reprint documents, close the day.', 'schritte': [
   'Choose a period: Today, Yesterday, Last 7 days, This month, Last month, Quarter or Custom. Filter by payment method or status.',
   'Open a row to see the items, TSE data and the digital receipt.',
   '“Attached documents” lists the receipt and invoice of the transaction, marked “printed” or “by email to …”. “View” shows the document, “Print” prints it again.',
   'Start a void or return from the receipt detail (permission “Void / return”).',
   'At the end of the day, create the end-of-day report.'],
   'tipp': 'Each register has its own journal. Tapping a column header sorts the column.'}}
K['fr'] = {
 'bezahlen': {'titel': 'Paiement et ticket', 'intro': 'Choisir le mode de paiement, payer, émettre ticket et facture. Les justificatifs sont ensuite joints à l’opération.', 'schritte': [
   'Dans le panier, touchez « Payer ». « Choisir le mode de paiement » apparaît en dessous avec Carte, Espèces et Facture. « Retour » referme le choix.',
   'Carte : le client paie au terminal. Espèces : saisissez le montant remis ou choisissez un montant rapide ; la monnaie à rendre s’affiche aussitôt. Facture : pour les clients sur facture comme les clubs et les entreprises ; si l’achat contient des pagaies, leurs ID sont attribués et affichés.',
   'Si l’achat contient un bateau, la fenêtre affiche son numéro de série et « Imprimer les étiquettes QR », quel que soit le mode de paiement.',
   'Dans la fenêtre, touchez « Payer ». La sortie des justificatifs apparaît.',
   'Carte et espèces : le ticket est toujours imprimé. En option, choisissez aussi « Imprimer la facture » ou « Envoyer la facture par e-mail » ; l’adresse e-mail du client est reprise.',
   'Paiement sur facture : il n’y a pas de ticket. La facture est obligatoire – choisissez « Imprimer la facture » ou « Envoyer la facture par e-mail ».',
   'Touchez « Terminer ». Ticket et facture partent directement à l’imprimante, sans aperçu. Un message confirme la vente ; « Ouvrir » affiche l’opération dans Transactions.',
   '« Bon de commande » imprime en plus un bon de commande. « Retour » revient au panier ou au paiement sans terminer.'],
   'tipp': 'Chaque ticket porte un code QR permettant au client de le consulter en ligne. TSE, paiement par carte, imprimante et envoi d’e-mail sont simulés dans le prototype.'},
 'transaktionen': {'titel': 'Transactions et clôture journalière', 'intro': 'Consulter toutes les ventes, voir et réimprimer les justificatifs, clôturer la journée.', 'schritte': [
   'Choisissez une période : Aujourd’hui, Hier, 7 derniers jours, Ce mois-ci, Mois précédent, Trimestre ou Personnalisé. Filtrez par mode de paiement ou statut.',
   'Ouvrez une ligne pour voir les positions, les données TSE et le ticket numérique.',
   '« Documents joints » contient le ticket et la facture de l’opération, avec la mention « imprimé » ou « par e-mail à … ». « Voir » affiche le document, « Imprimer » le réimprime.',
   'Lancez une annulation ou un retour depuis le détail du ticket (droit « Annulation / retour »).',
   'En fin de journée, effectuez la clôture journalière.'],
   'tipp': 'Chaque caisse a son propre journal. Toucher l’en-tête d’une colonne la trie.'}}
K['es'] = {
 'bezahlen': {'titel': 'Pago y ticket', 'intro': 'Elegir forma de pago, pagar, emitir ticket y factura. Después, los comprobantes quedan adjuntos a la operación.', 'schritte': [
   'En el carrito, toque «Pagar». Aparece «Elegir forma de pago» con Tarjeta, Efectivo y Factura. «Atrás» cierra la selección.',
   'Tarjeta: el cliente paga en el terminal. Efectivo: introduzca el importe entregado o elija un importe rápido; el cambio aparece al momento. Factura: para clientes con factura como clubes y empresas; si incluye palas, se asignan y muestran sus ID.',
   'Si la compra incluye un barco, el diálogo muestra su número de serie y «Imprimir etiquetas QR», con cualquier forma de pago.',
   'En el diálogo, toque «Pagar». Aparece la emisión de comprobantes.',
   'Tarjeta y efectivo: el ticket se imprime siempre. Opcionalmente elija además «Imprimir factura» o «Enviar factura por e-mail»; se toma el e-mail del cliente.',
   'Pago por factura: no hay ticket. La factura es obligatoria: elija «Imprimir factura» o «Enviar factura por e-mail».',
   'Toque «Finalizar». Ticket y factura van directamente a la impresora, sin vista previa. Un aviso confirma la venta; «Abrir» muestra la operación en Transacciones.',
   '«Hoja de pedido» imprime además una hoja de pedido. «Atrás» vuelve al carrito o al pago sin cerrar.'],
   'tipp': 'Cada ticket lleva un código QR con el que el cliente lo consulta en línea. TSE, pago con tarjeta, impresora y envío de e-mail están simulados en el prototipo.'},
 'transaktionen': {'titel': 'Transacciones y cierre diario', 'intro': 'Consultar todas las ventas, ver y reimprimir comprobantes, cerrar el día.', 'schritte': [
   'Elija un periodo: Hoy, Ayer, Últimos 7 días, Este mes, Mes anterior, Trimestre o Personalizado. Filtre por forma de pago o estado.',
   'Abra una fila para ver las posiciones, los datos TSE y el ticket digital.',
   'En «Documentos adjuntos» están el ticket y la factura de la operación, con la nota «impreso» o «por e-mail a …». «Ver» muestra el documento, «Imprimir» lo vuelve a imprimir.',
   'Inicie una anulación o devolución desde el detalle del ticket (permiso «Anulación / devolución»).',
   'Al final del día, haga el cierre diario.'],
   'tipp': 'Cada caja tiene su propio diario. Tocar la cabecera de una columna la ordena.'}}
K['pt'] = {
 'bezahlen': {'titel': 'Pagamento e talão', 'intro': 'Escolher o meio de pagamento, pagar, emitir talão e fatura. Depois, os comprovativos ficam anexados à operação.', 'schritte': [
   'No carrinho, toque em «Pagar». Aparece «Escolher meio de pagamento» com Cartão, Numerário e Fatura. «Voltar» fecha a seleção.',
   'Cartão: o cliente paga no terminal. Numerário: introduza o valor entregue ou escolha um valor rápido; o troco aparece de imediato. Fatura: para clientes com fatura como clubes e empresas; se a compra incluir pagaias, os respetivos IDs são atribuídos e mostrados.',
   'Se a compra incluir um barco, o diálogo mostra o número de série e «Imprimir etiquetas QR», com qualquer meio de pagamento.',
   'No diálogo, toque em «Pagar». Aparece a emissão de comprovativos.',
   'Cartão e numerário: o talão é sempre impresso. Opcionalmente escolha também «Imprimir fatura» ou «Enviar fatura por e-mail»; o e-mail do cliente é preenchido.',
   'Pagamento por fatura: não há talão. A fatura é obrigatória – escolha «Imprimir fatura» ou «Enviar fatura por e-mail».',
   'Toque em «Concluir». Talão e fatura vão diretamente para a impressora, sem pré-visualização. Um aviso confirma a venda; «Abrir» mostra a operação em Transações.',
   '«Nota de encomenda» imprime também uma nota de encomenda. «Voltar» regressa ao carrinho ou ao pagamento sem concluir.'],
   'tipp': 'Cada talão tem um código QR com o qual o cliente o consulta online. TSE, pagamento com cartão, impressora e envio de e-mail são simulados no protótipo.'},
 'transaktionen': {'titel': 'Transações e fecho do dia', 'intro': 'Consultar todas as vendas, ver e reimprimir comprovativos, fechar o dia.', 'schritte': [
   'Escolha um período: Hoje, Ontem, Últimos 7 dias, Este mês, Mês anterior, Trimestre ou Personalizado. Filtre por meio de pagamento ou estado.',
   'Abra uma linha para ver as posições, os dados TSE e o talão digital.',
   'Em «Documentos anexados» estão o talão e a fatura da operação, com a nota «impresso» ou «por e-mail para …». «Ver» mostra o documento, «Imprimir» volta a imprimi-lo.',
   'Inicie uma anulação ou devolução a partir do detalhe do talão (permissão «Anulação / devolução»).',
   'No fim do dia, faça o fecho do dia.'],
   'tipp': 'Cada caixa tem o seu próprio diário. Tocar no cabeçalho de uma coluna ordena-a.'}}
for lang, kap in K.items():
    for k, v in kap.items():
        assert k in j['sprachen'][lang]['kapitel']
        j['sprachen'][lang]['kapitel'][k] = v
kopf = '// zykol.POS – Bedienungsanleitung (DE, EN, FR, ES, PT). Quelle für die Ansicht in Einstellungen und für das PDF. Stand v11.00.\n'
open(p, 'w', encoding='utf-8').write(kopf + 'window.ZYKOL_ANLEITUNG = ' + json.dumps(j, ensure_ascii=False, indent=2) + ';\n')
print('ok', j['version'], len(j['meta']))
