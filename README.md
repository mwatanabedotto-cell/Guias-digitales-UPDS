# Guías digitales UPDS

Guías de laboratorio interactivas para la carrera de Medicina (UPDS).

| Guía | Archivo |
|------|---------|
| Mesa de disección virtual Anatomage | [`anatomage/index.html`](anatomage/index.html) |

Cada guía es una página HTML con sus recursos al lado (datos e imágenes): se abre
directamente en el navegador o se publica con GitHub Pages. El avance de las listas de cotejo y del quiz se
guarda solo en el navegador de cada estudiante.

## Guía Anatomage

- Organización de la sesión (antes / durante / después) y roles del grupo
- Gestos táctiles y herramientas del software
- Planos anatómicos (diagrama interactivo) y ventanas de TC en unidades Hounsfield
- Seis prácticas guiadas por región, con lista de cotejo ES/PT, correlación
  quirúrgica y temas de alto rendimiento para el Revalida
- Manuales por sistema (cardiovascular, muscular, digestivo, respiratorio, urinario,
  reproductor, endocrino y linfático): 148 preajustes con su captura y 827
  estructuras para identificar
- Herramientas y anatomía funcional según las guías de interfaz de la Table 12.0

### Agregar un manual de sistema

1. Exporta las capturas del PDF en orden a `anatomage/img/<prefijo>-01.jpg`, `-02.jpg`, …
2. Agrega el sistema a `anatomage/sistemas.js` con el mismo prefijo en `img`.
   Cada estructura es `"Nombre en español|Nome em português"`.
- Autoevaluación de 12 preguntas, glosario español–português y normas del laboratorio
