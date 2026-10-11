# zykol.POS – Karte von index.html: Überblick, gezielte Suche, Zeilenausschnitte mit kurzen Ausgaben
import sys, re
p = sys.argv[1]
L = open(p, encoding='utf-8').read().split('\n')
kurz = lambda s, n=160: (s.strip()[:n] + ('…' if len(s.strip()) > n else ''))
arg = sys.argv[2:] or ['--karte']

def karte():
    t = next((kurz(re.sub('<.*?>', '', l)) for l in L if '<title>' in l), '?')
    print(f'# Karte {p} · {len(L)} Zeilen · {t}')
    tpl_a = next(i for i, l in enumerate(L) if l.startswith('</helmet'))
    tpl_e = next(i for i, l in enumerate(L) if l.startswith('</x-dc'))
    sc_a = next(i for i, l in enumerate(L) if 'type="text/x-dc"' in l)
    print(f'Kopf/Stile 1–{tpl_a+1} · Vorlage {tpl_a+2}–{tpl_e+1} · Skript {sc_a+1}–{len(L)}')
    print('\n## Stilblöcke')
    for i, l in enumerate(L[:tpl_a]):
        if l.startswith('<style>'):
            m = re.search(r'/\*\s*(.*?)\s*(\*/|$)', l)
            if m and 'cyrillic' not in m.group(1) and 'latin' not in m.group(1) and 'vietnamese' not in m.group(1):
                print(f'{i+1}: {kurz(m.group(1), 90)}')
            elif not m: print(f'{i+1}: (ohne Kommentar)')
            else: print(f'{i+1}: Schriften (@font-face)')
    for i, l in enumerate(L[:tpl_a]):
        if '@media' in l: print(f'{i+1}: {kurz(l, 90)}')
    print('\n## Vorlage: Bereiche, Reiter, Dialoge (sc-if)')
    for i in range(tpl_a, tpl_e):
        m = re.match(r'^( *)<sc-if value="\{\{ ([A-Za-z.]+) \}\}"', L[i])
        if m and len(m.group(1)) <= 8 and re.search(r'(View|Offen|Da|Sichtbar|^tab[A-Z])', m.group(2)):
            print(f'{i+1}: {m.group(2)}')
    seen = set()
    for i in range(tpl_a, tpl_e):
        for c in re.findall(r'class="(zk-[a-z-]+)', L[i]):
            if c not in seen: seen.add(c); print(f'{i+1}: .{c}')
    print('\n## Skript: Klassen, Methoden (2er-Einrückung)')
    for i in range(sc_a, len(L)):
        l = L[i]
        if re.match(r'^class \w+', l): print(f'{i+1}: {kurz(l, 70)}')
        m = re.match(r'^  (?:async )?([A-Za-z_]\w*)\s*(?:\(([^)]*)\)\s*\{|=\s*(?:\([^)]*\)|\w+)\s*=>)', l)
        if m and m.group(1) not in ('if', 'for', 'while', 'switch', 'return', 'const', 'let'):
            print(f'{i+1}: {m.group(1)}()')
    r = max(i for i, l in enumerate(L) if l.startswith('  renderVals()'))
    print(f'\n## renderVals ab {r+1}: Bausteine (Name:Zeile; danach folgt das große Rückgabeobjekt mit allen {{{{ … }}}}-Werten)')
    print(' · '.join(f'{m.group(1)}:{i+1}' for i in range(r, len(L)) for m in [re.match(r'^    const ([A-Za-z_]\w*) =', L[i])] if m))
    print('\n## Skript: Konstanten (Name: Zeile)')
    ks = [f'{m.group(1)}:{i+1}' for i in range(sc_a, len(L)) for m in [re.match(r'^const ([A-Za-z_]\w*)', L[i])] if m]
    print(' · '.join(ks))

def suche(begriff, maxn=25):
    n = 0
    for i, l in enumerate(L):
        if begriff in l:
            k = l.find(begriff); a = max(0, k - 60)
            print(f'{i+1}: …{l[a:k+100].strip()}…' if len(l) > 170 else f'{i+1}: {l.strip()}')
            n += 1
            if n >= maxn: print(f'(abgebrochen nach {maxn} Treffern)'); break
    if not n: print('kein Treffer')

def zeilen(a, b, breite=220):
    for i in range(a - 1, min(b, len(L))): print(f'{i+1}: {L[i][:breite]}' + ('…' if len(L[i]) > breite else ''))

if arg[0] == '--karte': karte()
elif arg[0] == '--suche': suche(arg[1], int(arg[2]) if len(arg) > 2 else 25)
elif arg[0] == '--zeilen': a, b = map(int, arg[1].split('-')); zeilen(a, b, int(arg[2]) if len(arg) > 2 else 220)
