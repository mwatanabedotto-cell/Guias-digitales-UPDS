from comun import *

DATA = {
    'key': 'gaumard-s320',
    'title': 'PEDI Blue S320',
    'eyebrow': 'UPDS · Simulación clínica · Gaumard S320.100.250 / S320.200.250',
    'titleHtml': 'Simulador neonatal <span>PEDI® Blue</span> con SmartSkin™',
    'lede': 'Recién nacido a término (percentil 50 a las 40 semanas) para reanimación neonatal: vía aérea, ventilación, RCP con retroalimentación, cianosis que responde a la ventilación, cateterismo umbilical, intraóseo y brazo de inyección, controlado con OMNI® 2.',
    'facts': [['Control', 'OMNI® 2'], ['Tubo endotraqueal', '3.0 – 3.5 sin balón'], ['Cianosis', 'Central y periférica'], ['Procedimientos', '9']],
    'hero': 'portada.jpg', 'heroAlt': 'Simulador neonatal PEDI Blue con piel de color saludable',
    'source': 'Basada en el Manual de usuario PEDI® S320.100.250 / S320.200.250 (versión 16.8.1) de Gaumard Scientific.',
    'start': [
        {'t': 'Preparar el simulador', 'ol': [
            'Conecta la fuente de alimentación a la entrada del lado izquierdo de PEDI Blue y luego a la pared. Úsalo siempre con la fuente conectada.',
            'Enciende la tableta OMNI 2 y conéctala (ver sección OMNI 2).',
            'Calibra las compresiones antes de cada escenario de RCP.',
            'Llena los circuitos que vayas a usar (cordón umbilical, tibia, brazo IV) y ten a mano el lubricante provisto.',
        ]},
        {'t': 'Modelos', 'ul': [
            '<b>S320.100.250:</b> solo tubos 3, 4 y 5 (cordón y estómago). Femoral, intraóseo y brazo IV son opcionales.',
            '<b>S320.200.250:</b> agrega acceso intraóseo en la tibia, vena y arteria femorales derechas, brazo de inyección y pulsos braquial y radial.',
        ], 'note': 'Las opciones de pulsos e intraóseo no están disponibles en el paquete Noelle S550.100.250.'},
        {'t': 'Tubos de llenado y drenaje', 'ul': [
            'Todos salen del lado derecho del neonato, excepto el tubo 7.',
            '<b>Tubo 1:</b> drena el brazo IV · <b>Tubo 2:</b> llena el brazo IV.',
            '<b>Tubo 3:</b> llena el cordón umbilical · <b>Tubo 4:</b> drena el cordón.',
            '<b>Tubo 5:</b> drena el contenido gástrico introducido por la boca.',
            '<b>Tubo 6:</b> llena la tibia · <b>Tubo 7:</b> drena la tibia desde el pie izquierdo.',
        ]},
        {'t': 'Repuestos (código de pieza)', 'ul': [
            'Concentrado de sangre simulada: S320.100.080',
            'Lubricante: S320.100.081',
            'Huesos de tibia de E/S: S320.200.835',
            'Cubierta de piel y hueso E/S (clara, media, oscura): S320.200.836.L',
            'Piel de brazos derecho e izquierdo: S320.200.813.L',
        ]},
    ],
    'quickTitle': 'Tamaños de dispositivos y pulsos',
    'quick': [
        {'t': 'Tamaños de dispositivos', 'h': ['Procedimiento', 'Tamaño'], 'rows': [
            ['Laringoscopio (hoja)', 'Miller 1'], ['Tubo endotraqueal', '3.0–3.5 mm sin balón, con estilete'], ['Mascarilla', 'Tamaño neonatal'],
            ['Aguja intraósea', '17–16 G'], ['Brazo de inyección', '23–25 G'], ['Cordón umbilical', '2–3 cc de agua']]},
        {'t': 'Pulsos palpables', 'h': ['Pulso', 'Modelos'], 'rows': [
            ['Umbilical', 'Todos'], ['Femoral derecho, tibial y poplíteo izquierdos', 'S320.100.1 · S320.200.250'], ['Braquial y radial derechos', 'S320.100.2 · S320.200.250']]},
    ],
    'cats': [
        {'t': 'Vía aérea y ventilación', 'items': [
            {'id': 'intubacion', 't': 'Intubación oral y nasal con aspiración', 'sub': 'Miller 1 y TET 3.0–3.5 sin balón', 'img': 'intubacion.jpg', 'alt': 'Intubación del simulador neonatal',
             'specs': [['Hoja', 'Miller 1'], ['TET', '3.0–3.5 mm']],
             'blocks': [
                 {'t': 'Qué permite', 'ul': ['Intubación oral o nasal y aspiración.', 'Mascarilla laríngea.', 'Maniobra de Sellick (presión cricoidea).', 'Expansión pulmonar bilateral con elevación torácica realista.', 'Vía aérea con lengua, cuerdas vocales, tráquea y esófago.']},
                 {'t': 'Preparación', 'ol': ['Lubrica siempre el extremo distal del tubo con el lubricante provisto.', 'Usa hoja Miller 1 y TET sin balón de 3–3,5 mm con estilete.']}],
             'warn': ['Insertar tubos endotraqueales, nasofaríngeos u óseos sin lubricar daña la vía aérea.'],
             'clinic': ['TET según edad gestacional: menos de 28 semanas 2,5; 28–34 semanas 3,0; más de 34 semanas 3,5.', 'Profundidad en el labio (cm) ≈ peso en kg + 6.', 'Confirma con detector de CO₂, aumento de la frecuencia cardíaca y expansión torácica simétrica.']},
            {'id': 'bvm', 't': 'Ventilación con bolsa-válvula-mascarilla', 'sub': 'Mascarilla neonatal; ventilaciones medidas por OMNI 2', 'img': 'bvm.jpg', 'alt': 'Ventilación con bolsa y mascarilla neonatal',
             'blocks': [{'t': 'Qué permite', 'ul': ['Ventilación con mascarilla de tamaño infantil y retroalimentación de la cadencia en OMNI 2.', 'La ventilación adecuada mejora el color de la piel en el modo hipoxia.']}],
             'warn': ['No hagas ventilación boca a boca: la vía aérea se contamina y es difícil de limpiar.'],
             'clinic': ['Ventilación a presión positiva: 40–60 por minuto. Es la intervención más importante de la reanimación neonatal.', 'Si no mejora: corrige con MR. SOPA (mascarilla, reposicionar, succionar, abrir la boca, presión, vía aérea alternativa).']},
            {'id': 'sng', 't': 'Sonda nasogástrica', 'sub': 'Líquidos al depósito gástrico; drenaje por el tubo 5', 'img': 'sng.jpg', 'alt': 'Simulador neonatal con la boca abierta para sonda gástrica',
             'blocks': [{'t': 'Uso', 'ul': ['Introduce líquidos al estómago por una sonda nasogástrica.', 'Drena el contenido por el tubo 5.']}],
             'clinic': ['Con ventilación con mascarilla prolongada, una sonda orogástrica descomprime el estómago.']},
        ]},
        {'t': 'Hipoxia y RCP', 'items': [
            {'id': 'cianosis', 't': 'Cianosis SmartSkin™', 'sub': 'Antebrazos, piernas (periférica) y mejillas (central)', 'img': 'cianosis.jpg', 'alt': 'Simulador neonatal con coloración cianótica',
             'blocks': [{'t': 'Qué permite', 'ul': ['La piel pasa de rosada a azul en antebrazos y piernas (cianosis periférica) y en las mejillas (cianosis central).', 'Se controla desde OMNI 2 y funciona con el modelo de hipoxia.', 'Si las ventilaciones cumplen los estándares de RCP neonatal, la piel recupera el color; si son inadecuadas o no hay, se vuelve azul.']}],
             'clinic': ['La acrocianosis es normal en las primeras horas; la cianosis central es patológica.', 'SpO₂ preductal objetivo: 1 min 60–65 %, 3 min 70–75 %, 5 min 80–85 %, 10 min 85–95 %.']},
            {'id': 'rcp', 't': 'Compresiones torácicas', 'sub': 'Cadencia y profundidad medidas por OMNI 2', 'img': 'rcp.jpg', 'alt': 'Compresiones torácicas en el simulador neonatal',
             'blocks': [{'t': 'Qué permite', 'ul': ['OMNI 2 mide y registra compresiones y ventilaciones en tiempo real.', 'Calibra las compresiones antes de cada escenario.']}],
             'clinic': ['Compresiones si la FC es menor de 60/min tras 30 s de ventilación efectiva.', 'Relación 3:1 (90 compresiones y 30 ventilaciones por minuto), técnica de dos pulgares en el tercio inferior del esternón, profundidad de un tercio del diámetro AP.', 'Adrenalina IV/IO 0,01–0,03 mg/kg; endotraqueal 0,05–0,1 mg/kg.']},
        ]},
        {'t': 'Acceso vascular', 'items': [
            {'id': 'umbilical', 't': 'Cateterismo umbilical', 'sub': 'Cordón permeable con pulso palpable', 'img': 'umbilical.jpg', 'alt': 'Cateterismo del cordón umbilical',
             'blocks': [
                 {'t': 'Llenado del cordón', 'ol': ['Pon el extremo del tubo 4 en un recipiente y abre la abrazadera.', 'Llena la jeringa dispensadora con agua (el cordón admite 2–3 cc).', 'Conéctala al tubo 3 y libera el agua hasta que drene.', 'Cierra la abrazadera.']},
                 {'t': 'Uso', 'ul': ['Lubrica la punta del catéter umbilical antes de insertarlo.', 'El pulso umbilical se genera con la pera de goma.']}],
             'clinic': ['El cordón tiene una vena (grande, de pared delgada) y dos arterias.', 'En la reanimación, el catéter venoso umbilical se introduce solo 2–4 cm, hasta obtener retorno de sangre.']},
            {'id': 'intraoseo', 't': 'Acceso intraóseo (S320.200.250)', 'sub': 'Tibia de plástico duro; llena por el tubo 6 y drena por el 7', 'img': 'intraoseo.jpg', 'alt': 'Pierna del simulador neonatal',
             'specs': [['Aguja', '17–16 G']],
             'blocks': [
                 {'t': 'Uso', 'ol': ['Pon el extremo del tubo 7 en un recipiente y abre la abrazadera.', 'Llena la jeringa dispensadora y empuja el líquido hasta que llegue al drenaje.', 'Cierra la abrazadera del tubo 7 y realiza las punciones.', 'Cada 10–20 punciones, repite el llenado.', 'Al terminar, abre el tubo 7 y drena; expulsa el resto con aire. Si usaste sangre, enjuaga con 2–3 jeringas de agua.']},
                 {'t': 'Cambiar la tibia', 'ol': ['Drena todo el sistema.', 'Aplica calor uniforme a la piel de la pierna durante 10–15 minutos.', 'Retira la piel y la cubierta de la tibia.', 'Saca el hueso con un destornillador plano y pon uno nuevo, o gíralo para usar el otro extremo.', 'Vuelve a colocar la cubierta y la piel.']}],
             'warn': ['Los orificios del hueso pueden filtrar: se sellan con pegamento instantáneo.', 'El manual cita los tubos 4 y 5 en algunos pasos; según su propia tabla, la tibia usa los tubos 6 (llenado) y 7 (drenaje). Verifica en el equipo.'],
             'clinic': ['En el recién nacido, el catéter venoso umbilical es de elección; la vía IO es una alternativa válida si no se logra.']},
            {'id': 'femoral', 't': 'Vena y arteria femorales', 'sub': 'Estándar en S320.200.250',
             'blocks': [{'t': 'Uso', 'ul': ['La vena y la arteria femorales derechas vienen en el S320.200.250 (opcionales en el S320.100.250).', 'Los pulsos femoral, tibial y poplíteo se generan con la pera de compresión.']}],
             'clinic': ['La vena femoral es medial a la arteria.']},
            {'id': 'brazo', 't': 'Brazo de inyección pediátrico (S320.200.250)', 'sub': 'Venas de látex bajo piel translúcida', 'img': 'brazo.jpg', 'alt': 'Brazo de inyección del simulador neonatal',
             'specs': [['Aguja', '23–25 G']],
             'blocks': [
                 {'t': 'Llenado', 'ol': ['Pon el tubo de drenaje 1 en un recipiente y abre la abrazadera.', 'Llena la jeringa dispensadora y conéctala al tubo 2.', 'Deja que el líquido llegue al drenaje y cierra la abrazadera.', 'Retira la jeringa del tubo 2.']},
                 {'t': 'Uso', 'ul': ['Presionar la jeringa hace más visibles las venas, como un torniquete; al soltar, las venas colapsan.', 'Para simular administración IV, deja el drenaje en un recipiente con la pinza abierta.']}],
             'warn': ['Los tubos de las venas contienen látex.'],
             'clinic': ['En neonatos, las venas del dorso de la mano, el pie y el cuero cabelludo son las más usadas.']},
        ]},
    ],
    'omni': [
        {'t': 'Modo hipoxia', 'p': 'Simula un evento hipóxico que se trata con manejo de la vía aérea y ventilación; OMNI 2 detecta las ventilaciones y mide si cumplen los estándares.', 'ol': [
            'Abre la página de Hipoxia.',
            'Elige el estado inicial: ninguno, cianosis periférica o central.',
            'Ajusta la tasa de deterioro (cuánto empeora sin ventilación).',
            'Ajusta la tasa de mejoría por cada ronda de ventilación correcta.',
            'Toca «INICIAR».',
        ], 'img': 'hipoxia.jpg', 'alt': 'Pantalla de hipoxia en OMNI 2'},
    ] + omni_cards('S320', 'omni2-rcp.jpg', calib=True),
    'trouble': TROUBLE_OMNI + [['La tableta no se comunica con el simulador', 'Hay más de un dispositivo emparejado', 'En Configuración de conexión Bluetooth, toca el engranaje del dispositivo sobrante y elige «Olvidar».']],
    'care': [CARE_GENERAL, CARE_CLEAN, CARE_STORAGE],
}
