"""Genera anatomage/index.html a partir de anatomage/fuente.html (contenido de la guía)
agregando la cabecera HTML y la barra institucional UPDS. Uso: python3 anatomage/build.py"""
import os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HERE, '..', 'marca'))
from marca import barra, icono
src = open(os.path.join(HERE, 'fuente.html'), encoding='utf-8').read()
marker = '<header class="masthead">'
assert src.count(marker) == 1
head = '<!doctype html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n' + icono('../')
out = head + src.replace(marker, barra('../') + marker) + '\n</html>\n'
open(os.path.join(HERE, 'index.html'), 'w', encoding='utf-8').write(out)
print('anatomage ok')
