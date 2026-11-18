"""Genera la página índice: ../index.html (enlaces relativos) y un fragmento para artefacto (enlaces a claude.ai).
Uso: python3 indice/build_indice.py [carpeta_fragmento]"""
import os, sys, html
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.join(HERE, '..')
sys.path.insert(0, os.path.join(ROOT, 'marca'))
from marca import barra, icono

GRUPOS = [
  ('Anatomía', 'Mesa de disección virtual', [
    dict(id='anatomage', nombre='Mesa Anatomage', modelo='Table EDU 12.0', paciente='Cadáveres digitales',
         img='anatomage/img/cv-06.jpg', rel='anatomage/index.html', url='https://claude.ai/artifact/EmKeZaHJLdfCL2VKUhb6RC',
         dato='10 sistemas · 274 vistas', practica='Disección virtual, planos, TC, clases guiadas con estructuras ES–PT y preguntas para la clase.')]),
  ('Pediatría', 'Cuidados del paciente y RCP pediátrica', [
    dict(id='s117', nombre='Simulador pediátrico', modelo='Gaumard S117 / S117.250', paciente='Niño pequeño',
         img='gaumard-s117/img/portada.jpg', rel='gaumard-s117/index.html', url='https://claude.ai/artifact/1fekbKP5dP2dDaibemTWic',
         dato='16 procedimientos · TET 3.5', practica='Vía aérea, RCP, acceso IV, intraóseo y femoral, ostomías, sondaje y auscultación.'),
    dict(id='s157', nombre='Mike y Michelle', modelo='Gaumard S157.250', paciente='Niño escolar',
         img='gaumard-s157/img/portada.jpg', rel='gaumard-s157/index.html', url='https://claude.ai/artifact/BHBBoAQ55LhUrzBLFWL8Fn',
         dato='15 procedimientos · TET 5.0–5.5', practica='Vía aérea, RCP, acceso vascular, ostomías, acceso subclavio y drenaje torácico.')]),
  ('Neonatología', 'Reanimación neonatal', [
    dict(id='s320', nombre='PEDI Blue', modelo='Gaumard S320', paciente='Recién nacido a término',
         img='gaumard-s320/img/portada.jpg', rel='gaumard-s320/index.html', url='https://claude.ai/artifact/H37q9UFCGTgyuCsDk1ZrAe',
         dato='9 procedimientos · cianosis SmartSkin', practica='Ventilación, intubación, RCP 3:1, cateterismo umbilical e intraóseo.')]),
  ('Obstetricia', 'Parto y posparto', [
    dict(id='s550', nombre='NOELLE', modelo='Gaumard S550.100', paciente='Madre y recién nacido',
         img='gaumard-s550/img/portada.jpg', rel='gaumard-s550/index.html', url='https://claude.ai/artifact/8n3cvC25nhVSdRXDUDaty4',
         dato='17 procedimientos · parto automático', practica='Leopold, parto, ventosa, distocia, cesárea, nalgas, hemorragia posparto y episiotomía.')]),
  ('Ginecología', 'Examen y procedimientos ginecológicos', [
    dict(id='s504', nombre='ZOE', modelo='Gaumard S504.100', paciente='Pelvis femenina adulta',
         img='gaumard-s504/img/portada.jpg', rel='gaumard-s504/index.html', url='https://claude.ai/artifact/4SsqWefL8VY3GLt8KswbWS',
         dato='12 procedimientos · 6 úteros', practica='Espéculo, examen bimanual, DIU, oclusión tubárica y AMV.')]),
]

CSS = """
/* Layout: índice de equipos — una banda por especialidad, tarjetas con foto del muñeco. */
:root { --paper:#F1F5F4; --surface:#FFFFFF; --surface-2:#E6EDEC; --ink:#132226; --muted:#53656A; --line:#D3DDDC; --accent:#0A6A6E; --accent-soft:#D5EAE9;
  --font-display:"Archivo","Helvetica Neue",Arial,sans-serif; --font-body:"Source Sans 3","Segoe UI",Roboto,Arial,sans-serif; --font-mono:"IBM Plex Mono",ui-monospace,Menlo,Consolas,monospace; }
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { --paper:#0D1618; --surface:#142024; --surface-2:#1B2A2E; --ink:#E2EBEA; --muted:#95A8AA; --line:#283A3E; --accent:#52C0C1; --accent-soft:#163A3C; color-scheme:dark; } }
:root[data-theme="dark"] { --paper:#0D1618; --surface:#142024; --surface-2:#1B2A2E; --ink:#E2EBEA; --muted:#95A8AA; --line:#283A3E; --accent:#52C0C1; --accent-soft:#163A3C; color-scheme:dark; }
*, *::before, *::after { box-sizing:border-box; }
body { margin:0; background:var(--paper); color:var(--ink); font:1.0625rem/1.6 var(--font-body); }
.wrap { max-width:1100px; margin:0 auto; padding-block:36px 64px; padding-left:max(16px, env(safe-area-inset-left, 0px)); padding-right:max(16px, env(safe-area-inset-right, 0px)); display:grid; gap:40px; }
.eyebrow { font:0.75rem var(--font-mono); text-transform:uppercase; letter-spacing:.08em; color:var(--muted); margin:0; }
h1, h2, h3 { font-family:var(--font-display); margin:0; line-height:1.15; text-wrap:balance; }
h1 { font-size:2.3rem; font-weight:800; letter-spacing:-.02em; }
h1 span { color:var(--accent); }
.lede { color:var(--muted); max-width:62ch; margin:0; font-size:1.1rem; }
.head { display:grid; gap:12px; }
.group { display:grid; gap:16px; }
.group-head { display:flex; flex-wrap:wrap; gap:4px 14px; align-items:baseline; border-top:2px solid var(--ink); padding-top:12px; }
.group-head h2 { font-size:1.5rem; font-weight:700; }
.group-head p { margin:0; color:var(--muted); font-size:.95rem; }
.grid { display:grid; gap:18px; grid-template-columns:repeat(auto-fill, minmax(min(100%, 300px), 1fr)); }
a.card { display:grid; grid-template-rows:auto 1fr; background:var(--surface); border:1px solid var(--line); border-radius:12px; overflow:hidden; color:var(--ink); text-decoration:none; transition:border-color .15s, transform .15s; }
a.card:hover, a.card:focus-visible { border-color:var(--accent); transform:translateY(-2px); outline:none; }
@media (prefers-reduced-motion: reduce) { a.card { transition:none; } a.card:hover { transform:none; } }
.photo { aspect-ratio:16/9; width:100%; max-width:100%; object-fit:cover; display:block; background:var(--surface-2); }
.body { padding:16px 18px 18px; display:grid; gap:8px; align-content:start; }
.top { display:flex; flex-wrap:wrap; gap:6px 10px; align-items:baseline; justify-content:space-between; }
.body h3 { font-size:1.3rem; font-weight:700; color:var(--accent); }
.chip { font:0.72rem var(--font-mono); text-transform:uppercase; letter-spacing:.05em; border:1px solid var(--line); border-radius:999px; padding:2px 10px; color:var(--muted); white-space:nowrap; }
.modelo { font:0.85rem var(--font-mono); color:var(--muted); margin:0; }
.practica { margin:0; font-size:.95rem; }
.dato { margin:0; font:0.8rem var(--font-mono); color:var(--ink); background:var(--accent-soft); border-radius:6px; padding:4px 8px; justify-self:start; }
.open { font-weight:600; font-size:.92rem; color:var(--accent); }
footer { color:var(--muted); font-size:.85rem; border-top:1px solid var(--line); padding-top:16px; }
"""

def build(mode):
    cards = []
    for nombre, sub, items in GRUPOS:
        for it in items:
            href = it['rel'] if mode == 'repo' else it['url']
            img = it['img'] if mode == 'repo' else 'img/' + it['id'] + '.jpg'
            tgt = '' if mode == 'repo' else ' target="_blank" rel="noopener"'
            cards.append(f'''      <a class="card" href="{href}"{tgt}>
        <img class="photo" src="{img}" alt="{html.escape(it['nombre'])}" loading="lazy" width="640" height="360">
        <div class="body">
          <p class="eyebrow">{nombre}</p>
          <div class="top"><h3>{html.escape(it['nombre'])}</h3><span class="chip">{html.escape(it['paciente'])}</span></div>
          <p class="modelo">{html.escape(it['modelo'])}</p>
          <p class="practica">{html.escape(it['practica'])}</p>
          <p class="dato">{html.escape(it['dato'])}</p>
          <span class="open">Abrir guía →</span>
        </div>
      </a>''')
    out = [f'''  <div class="grid">
{chr(10).join(cards)}
  </div>''']
    body = f'''<title>Guías docentes UPDS</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800&family=IBM+Plex+Mono:wght@400&family=Source+Sans+3:wght@400;600&display=swap">
<style>{CSS}</style>
<div class="wrap">
  <header class="head">
    <p class="eyebrow">UPDS · Carrera de Medicina · Guías para docentes</p>
    <h1>Guías digitales <span>por equipo</span></h1>
    <p class="lede">Guías para los docentes que operan cada muñeco o equipo en clase; los alumnos observan sin manipularlos. Cada guía tiene la preparación, los pasos de cada demostración, puntos clínicos para discutir y el cuidado del equipo.</p>
  </header>
{chr(10).join(out)}
  <footer>Material para docentes de la UPDS basado en los manuales de Anatomage y Gaumard Scientific.</footer>
</div>
'''
    return body

head = '<!doctype html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
open(os.path.join(ROOT, 'index.html'), 'w', encoding='utf-8').write(head + icono('') + build('repo').replace('<div class="wrap">', '</head>\n<body>\n' + barra('', inicio=False) + '<div class="wrap">', 1) + '</body>\n</html>\n')
if len(sys.argv) > 1:
    d = sys.argv[1]; os.makedirs(os.path.join(d, 'img'), exist_ok=True)
    open(os.path.join(d, 'indice.html'), 'w', encoding='utf-8').write(build('artifact'))
    from PIL import Image
    for _, _, items in GRUPOS:
        for it in items:
            im = Image.open(os.path.join(ROOT, it['img'])).convert('RGB'); im.thumbnail((640, 640))
            im.save(os.path.join(d, 'img', it['id'] + '.jpg'), 'JPEG', quality=78, optimize=True)
print('ok')
