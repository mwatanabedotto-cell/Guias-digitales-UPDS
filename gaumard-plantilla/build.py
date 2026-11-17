"""Genera las guías Gaumard: python3 build.py  ->  ../gaumard-<id>/index.html (+ fragmento para artefacto)."""
import json, os, sys, importlib
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
TPL = open(os.path.join(HERE, 'plantilla.html'), encoding='utf-8').read()
FRAG_DIR = os.environ.get('FRAG_DIR')
for mod in sys.argv[1:] or ['s117', 's157', 's320', 's504']:
    try: d = importlib.import_module('datos_' + mod).DATA
    except ModuleNotFoundError: continue
    frag = TPL.replace('__TITLE__', d['title']).replace('__DATA__', json.dumps(d, ensure_ascii=False))
    out = os.path.join(HERE, '..', 'gaumard-' + mod); os.makedirs(out, exist_ok=True)
    head = '<!doctype html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
    open(os.path.join(out, 'index.html'), 'w', encoding='utf-8').write(head + frag + '\n</html>\n')
    if FRAG_DIR: open(os.path.join(FRAG_DIR, 'gaumard-' + mod + '.html'), 'w', encoding='utf-8').write(frag)
    missing = [p['img'] for c in d['cats'] for p in c['items'] if p.get('img') and not os.path.exists(os.path.join(out, 'img', p['img']))]
    print(mod, 'ok', 'procs', sum(len(c['items']) for c in d['cats']), 'missing imgs', missing)
