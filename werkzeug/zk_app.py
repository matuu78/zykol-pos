# zykol.POS – Quellteile <-> ausgelieferte Teile
#   python3 zk_app.py auspacken <ordner> <quelle>   assets/app/*.js -> quelle/NN-name.html|js (lesbarer Code)
#   python3 zk_app.py bauen <quelle> <ordner>       quelle -> assets/app/*.js + Ladeliste in index.html
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

def bauen(quelle, ordner):
    idx = os.path.join(ordner, 'index.html')
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
    {'auspacken': auspacken, 'bauen': bauen}[sys.argv[1]](sys.argv[2], sys.argv[3])
