# zykol.POS – Quellteile <-> ausgelieferte Teile
#   python3 zk_app.py auspacken <ordner> <quelle>   assets/app/*.js -> quelle/NN-name.html|js (lesbarer Code)
#   python3 zk_app.py bauen <quelle> <ordner> [X.Y] quelle -> assets/app/*.js + Ladeliste in index.html;
#                                                   mit X.Y wird die Version nur in index.html gesetzt (Teile nutzen __ZK_V__)
#   python3 zk_app.py delta <alter_ordner> <neuer_ordner>  listet geänderte Dateien (für Update-Veröffentlichung und Update-ZIP)
# .html-Teile ergeben zusammen die Vorlage (Oberfläche), .js-Teile die Logik. Reihenfolge = Dateiname.
import sys, os, re, json, glob
GRENZE = 200 * 1024
KOPF = '/* zykol.POS – Teil {n} ({art}); Quelle: {q}. Nicht direkt bearbeiten: zk_app.py auspacken/bauen */\n'

def auspacken(ordner, quelle):
    os.makedirs(quelle, exist_ok=True)
    for f in sorted(glob.glob(os.path.join(ordner, 'assets/app/*.js'))):
        s = open(f, encoding='utf-8').read()
        m = re.search(r"\.push\(\['(vorlage|logik)', (\".*\")\]\);\s*$", s, re.S)
        if not m: continue
        ext = '.html' if m.group(1) == 'vorlage' else '.js'
        name = os.path.basename(f)[:-3] + ext
        open(os.path.join(quelle, name), 'w', encoding='utf-8').write(json.loads(m.group(2)))
        print('ausgepackt', name)

def version_setzen(quelle, ordner, v):
    # Die Versionsnummer steht nur in index.html: Titel, window.ZK_V und Cache-Buster ?v=.
    # Die Teile enthalten den Platzhalter __ZK_V__ (Fußzeile, ?v= von sprachen.js/bedienungsanleitung.js),
    # den der Lader beim Start ersetzt. So ändern sich bei einer neuen Version nur index.html und die wirklich geänderten Teile.
    f = os.path.join(ordner, 'index.html')
    t = open(f, encoding='utf-8').read()
    t = re.sub(r'zykol\.POS v[\d.]+ – Testversion', f'zykol.POS v{v} – Testversion', t)
    t = re.sub(r"window\.ZK_V = '[\d.]+'", f"window.ZK_V = '{v}'", t)
    t = re.sub(r'(\.js)\?v=[\d.]+', r'\1?v=' + v, t)
    open(f, 'w', encoding='utf-8').write(t)

def delta(alt, neu):
    # Listet alle Dateien, die sich zwischen zwei gebauten Versionsordnern unterscheiden (neu oder geändert)
    import filecmp
    for wurzel, _, dateien in os.walk(neu):
        for d in sorted(dateien):
            n = os.path.join(wurzel, d); r = os.path.relpath(n, neu); a = os.path.join(alt, r)
            if not os.path.exists(a) or not filecmp.cmp(a, n, shallow=False): print(r)

def bauen(quelle, ordner, version=None):
    idx = os.path.join(ordner, 'index.html')
    if version: version_setzen(quelle, ordner, version.lstrip('v'))
    h = open(idx, encoding='utf-8').read()
    v = re.search(r'zykol\.POS v([\d.]+)', h).group(1)
    for alt in glob.glob(os.path.join(ordner, 'assets/app/*.js')): os.remove(alt)
    os.makedirs(os.path.join(ordner, 'assets/app'), exist_ok=True)
    tags, fehler = [], []
    for q in sorted(glob.glob(os.path.join(quelle, '*.html')) + glob.glob(os.path.join(quelle, '*.js'))):
        stem, ext = os.path.splitext(os.path.basename(q))
        art = 'vorlage' if ext == '.html' else 'logik'
        txt = open(q, encoding='utf-8').read()
        js = KOPF.format(n=stem, art=art, q=stem + ext) + "(window.ZK_TEILE = window.ZK_TEILE || []).push(['" + art + "', " + json.dumps(txt, ensure_ascii=False).replace('</', '<\\/') + ']);\n'
        ziel = os.path.join(ordner, 'assets/app', stem + '.js')
        open(ziel, 'w', encoding='utf-8').write(js)
        g = len(js.encode())
        if g > GRENZE: fehler.append(f'{stem}.js {g//1024} KB')
        tags.append(f'<script src="assets/app/{stem}.js?v={v}"></script>')
        print(f'{stem}.js {g//1024} KB')
    tags.sort(key=lambda t: t)  # Dateiname bestimmt die Reihenfolge
    h = re.sub(r'<!--zk-teile-->.*?<!--/zk-teile-->', lambda m: '<!--zk-teile-->\n' + '\n'.join(tags) + '\n<!--/zk-teile-->', h, flags=re.S)
    h = re.sub(r'(assets/js/dc-runtime\.js)\?v=[\d.]+', r'\1?v=' + v, h)
    open(idx, 'w', encoding='utf-8').write(h)
    g = len(h.encode()); print(f'index.html {g//1024} KB')
    if g > GRENZE: fehler.append(f'index.html {g//1024} KB')
    print('ZU GROSS: ' + ', '.join(fehler) if fehler else 'alle Dateien unter 200 KB')

if __name__ == '__main__':
    {'auspacken': auspacken, 'bauen': bauen, 'delta': delta}[sys.argv[1]](*sys.argv[2:])
