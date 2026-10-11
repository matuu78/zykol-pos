# zykol.POS – Karte der Quellteile: Überblick, gezielte Suche, Zeilenausschnitte mit kurzen Ausgaben
#   python3 karte.py <quelle>                      Karte aller Teile
#   python3 karte.py <quelle> --suche <text> [max] Treffer als datei:zeile, gekürzt
#   python3 karte.py <quelle>/<teil> --zeilen a-b [breite]
import sys, re, os, glob
p = sys.argv[1]; arg = sys.argv[2:] or ['--karte']
dateien = sorted(glob.glob(os.path.join(p, '*.html')) + glob.glob(os.path.join(p, '*.js'))) if os.path.isdir(p) else [p]
kurz = lambda s, n=160: (s.strip()[:n] + ('…' if len(s.strip()) > n else ''))
lies = lambda f: open(f, encoding='utf-8').read().split('\n')

def karte():
    for f in dateien:
        L = lies(f); n = os.path.basename(f)
        print(f'\n## {n} · {len(L)} Zeilen · {os.path.getsize(f)//1024} KB')
        z = []
        for i, l in enumerate(L):
            m = re.match(r'^( *)<sc-if value="\{\{ ([A-Za-z.]+) \}\}"', l)
            if m and len(m.group(1)) <= 8 and re.search(r'(View|Offen|Da|Sichtbar|^tab[A-Z])', m.group(2)): z.append(f'{i+1}:{m.group(2)}')
            if l.startswith('<style>'):
                k = re.search(r'/\*\s*(.*?)\s*(\*/|$)', l); t = k.group(1) if k else 'Stil'
                if not re.search('cyrillic|latin|vietnamese', t): z.append(f'{i+1}:<style> {kurz(t, 60)}')
            if '@media' in l: z.append(f'{i+1}:{kurz(l, 40)}')
            if re.match(r'^class \w+', l): z.append(f'{i+1}:{kurz(l, 50)}')
            m = re.match(r'^  (?:async )?([A-Za-z_]\w*)\s*(?:\([^)]*\)\s*\{|=\s*(?:\([^)]*\)|\w+)\s*=>)', l)
            if m and m.group(1) not in ('if', 'for', 'while', 'switch', 'return', 'const', 'let'): z.append(f'{i+1}:{m.group(1)}()')
            m = re.match(r'^(?:const|    const) ([A-Za-z_]\w*) =', l)
            if m: z.append(f'{i+1}:{m.group(1)}')
        kl = []
        for i, l in enumerate(L):
            for c in re.findall(r'class="(zk-[a-z-]+)', l):
                if c not in kl: kl.append(c)
        print(' · '.join(z))
        if kl: print('Klassen: ' + ' '.join('.' + c for c in kl))

def suche(t, maxn=25):
    n = 0
    for f in dateien:
        for i, l in enumerate(lies(f)):
            if t in l:
                k = l.find(t); a = max(0, k - 60)
                print(f'{os.path.basename(f)}:{i+1}: ' + (f'…{l[a:k+100].strip()}…' if len(l) > 170 else l.strip()))
                n += 1
                if n >= maxn: print(f'(abgebrochen nach {maxn} Treffern)'); return
    if not n: print('kein Treffer')

def zeilen(a, b, breite=220):
    L = lies(dateien[0])
    for i in range(a - 1, min(b, len(L))): print(f'{i+1}: {L[i][:breite]}' + ('…' if len(L[i]) > breite else ''))

if arg[0] == '--karte': karte()
elif arg[0] == '--suche': suche(arg[1], int(arg[2]) if len(arg) > 2 else 25)
elif arg[0] == '--zeilen': a, b = map(int, arg[1].split('-')); zeilen(a, b, int(arg[2]) if len(arg) > 2 else 220)
