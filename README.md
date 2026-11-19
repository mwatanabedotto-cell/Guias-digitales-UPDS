# Guías digitales UPDS

Guías de laboratorio interactivas para los docentes de la carrera de Medicina (UPDS)
que operan la mesa Anatomage y los simuladores Gaumard en clase. Los alumnos observan
las demostraciones sin manipular los equipos.

**Sitio web:** https://mwatanabedotto-cell.github.io/Guias-digitales-UPDS/ (GitHub Pages, desde la rama principal).

Abre [`index.html`](index.html) para ver todas las guías, con una tarjeta por muñeco o equipo.
Se genera con `python3 indice/build_indice.py`; ahí se agregan los equipos nuevos.

| Guía | Archivo |
|------|---------|
| Mesa de disección virtual Anatomage | [`anatomage/index.html`](anatomage/index.html) |
| Simulador pediátrico Gaumard S117 / S117.250 | [`gaumard-s117/index.html`](gaumard-s117/index.html) |
| Gaumard Mike y Michelle S157.250 | [`gaumard-s157/index.html`](gaumard-s157/index.html) |
| Simulador neonatal Gaumard PEDI Blue S320 | [`gaumard-s320/index.html`](gaumard-s320/index.html) |
| Simulador ginecológico Gaumard ZOE S504.100 | [`gaumard-s504/index.html`](gaumard-s504/index.html) |
| Simulador de parto Gaumard NOELLE S550.100 | [`gaumard-s550/index.html`](gaumard-s550/index.html) |

Cada guía es una página HTML con sus recursos al lado (datos e imágenes): se abre
directamente en el navegador o se publica con GitHub Pages. El avance de las listas de cotejo y del quiz se
guarda solo en el navegador de cada estudiante.

## Guía Anatomage

- Organización de la sesión (antes / durante / después) y roles del grupo
- Gestos táctiles y herramientas del software
- Planos anatómicos (diagrama interactivo) y ventanas de TC en unidades Hounsfield
- Seis prácticas guiadas por región, con lista de cotejo ES/PT, correlación
  quirúrgica y temas de alto rendimiento para el Revalida
- Manuales por sistema (cardiovascular, esquelético, nervioso, muscular, digestivo,
  respiratorio, urinario, reproductor, endocrino y linfático): 274 preajustes
  con su captura y 1244 estructuras para identificar
- Iconos de la mesa, uno por uno: 210 iconos con su imagen y explicación
  (datos en `anatomage/iconos.js`, imágenes en `anatomage/iconos/`)
- Herramientas, cuerpos disponibles, controles con teclado, biblioteca de casos,
  anatomía funcional y solución de problemas según las guías de interfaz y el
  manual de usuario de la Table EDU 12.0

### Agregar un manual de sistema

1. Exporta las capturas del PDF en orden a `anatomage/img/<prefijo>-01.jpg`, `-02.jpg`, …
2. Agrega el sistema a `anatomage/sistemas.js` con el mismo prefijo en `img`.
   Cada estructura es `"Nombre en español|Nome em português"`.
- Autoevaluación de 12 preguntas, glosario español–português y normas del laboratorio

## Guías Gaumard

Las guías de simuladores Gaumard se generan desde `gaumard-plantilla/`:

- `plantilla.html`: diseño y lógica comunes (preparación, referencia rápida,
  procedimientos con avance guardado, OMNI 2, solución de problemas, cuidado).
- `datos_<modelo>.py`: contenido de cada simulador; `comun.py` reúne los bloques
  compartidos (OMNI 2, limpieza, RCP pediátrica).
- Para regenerar después de editar los datos: `python3 gaumard-plantilla/build.py`.
- Las fotos de cada guía están en `gaumard-<modelo>/img/`.

## Marca UPDS

Las páginas del repositorio llevan arriba la barra institucional de la UPDS
(símbolo, nombre y lema en blanco sobre azul `#203C85`) y el favicon.

- `marca/`: logo completo, símbolo y nombre en blanco y en azul, icono y favicon.
- `marca/marca.py`: genera la barra; la usan los tres scripts de construcción.
- La guía Anatomage se edita en `anatomage/fuente.html` y se genera con
  `python3 anatomage/build.py`.
- Las guías Gaumard: `python3 gaumard-plantilla/build.py`.
- El índice: `python3 indice/build_indice.py`.

Los logos se recortaron de la portada del Reglamento Estudiantil (409 px de ancho).
Para mejor nitidez, reemplaza los archivos de `marca/` por los originales en alta
resolución con el mismo nombre y vuelve a generar las páginas.
