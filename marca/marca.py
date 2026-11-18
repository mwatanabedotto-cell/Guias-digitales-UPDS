"""Barra institucional UPDS para las páginas del repositorio.
Uso: from marca import barra, icono  (con la carpeta marca/ en sys.path)
prefix: ruta relativa a la raíz del repositorio ('' en la raíz, '../' en una subcarpeta)."""

AZUL = '#203C85'


def icono(prefix=''):
    return f'<link rel="icon" type="image/png" href="{prefix}marca/favicon.png">\n'


def barra(prefix='', texto='Carrera de Medicina · Guías para docentes', inicio=True):
    enlace = f'{prefix}index.html' if inicio else ''
    abre = f'<a href="{enlace}" class="upds-home" aria-label="Volver al índice de guías">' if enlace else '<span class="upds-home">'
    cierra = '</a>' if enlace else '</span>'
    return f'''<style>
.upds-bar {{ background: {AZUL}; color: #FFFFFF; }}
.upds-bar-in {{ max-width: 1180px; margin: 0 auto; padding-block: 10px; padding-left: max(16px, env(safe-area-inset-left, 0px)); padding-right: max(16px, env(safe-area-inset-right, 0px)); display: flex; flex-wrap: wrap; align-items: center; gap: 8px 16px; }}
.upds-home {{ display: inline-flex; align-items: center; gap: 12px; text-decoration: none; }}
.upds-home img {{ display: block; width: auto; }}
.upds-sym {{ height: 56px; }}
.upds-name {{ height: 54px; }}
.upds-tag {{ margin-left: auto; font: 600 0.82rem/1.3 "Source Sans 3", "Segoe UI", Arial, sans-serif; letter-spacing: .02em; color: #DCE6FA; }}
@media (max-width: 520px) {{ .upds-sym {{ height: 44px; }} .upds-name {{ height: 42px; }} .upds-tag {{ margin-left: 0; width: 100%; }} }}
</style>
<div class="upds-bar"><div class="upds-bar-in">{abre}<img class="upds-sym" src="{prefix}marca/upds-simbolo-blanco.png" alt="" width="50" height="58"><img class="upds-name" src="{prefix}marca/upds-nombre-blanco.png" alt="Universidad Privada Domingo Savio · Profesionales + humanos" width="144" height="59">{cierra}<span class="upds-tag">{texto}</span></div></div>
'''
