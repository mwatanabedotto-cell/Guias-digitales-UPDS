from comun import *

DATA = {
    'key': 'gaumard-s157',
    'title': 'Mike y Michelle S157.250',
    'eyebrow': 'UPDS · Simulación clínica · Gaumard S157.250',
    'titleHtml': 'Simulador <span>Mike y Michelle</span> S157.250',
    'lede': 'Simulador pediátrico multipropósito para cuidados del paciente y RCP, controlado con la tableta OMNI® 2: vía aérea, acceso vascular, intraóseo, ostomías, sondaje y opciones de acceso subclavio y drenaje torácico.',
    'facts': [['Control', 'OMNI® 2 inalámbrico'], ['Tubo endotraqueal', '5.0 – 5.5'], ['Procedimientos', '15'], ['Opcionales', 'S157.707 · S157.11']],
    'hero': 'portada.jpg', 'heroAlt': 'Simulador Mike y Michelle acostado sobre la camilla',
    'source': 'Basada en la Guía del usuario S157.250 (versión 17.6.1) de Gaumard Scientific.',
    'start': [
        {'t': 'Preparar el simulador', 'ol': [
            'Saca el simulador del estuche azul y de la bolsa transparente; apóyalo en una superficie plana sosteniendo cabeza y torso.',
            'Conecta la fuente de alimentación: usa siempre el simulador con la fuente conectada.',
            'Conecta la tableta OMNI® 2 (ver sección OMNI 2).',
            'Llena los circuitos que vayas a usar: brazo IV, pierna derecha (IO y femoral), depósitos de ostomía y vejiga.',
            'Ten a mano aceite mineral para lubricar los dispositivos.',
        ]},
        {'t': 'Organización de la demostración', 'ul': [
            'El docente prepara, opera y limpia el simulador y la tableta; los alumnos observan sin manipular el equipo.',
            'Ubica a los alumnos alrededor del simulador con buena vista y explica cada paso mientras lo ejecutas.',
            'En los manuales, el <b>facilitador</b> es quien conduce la simulación y el <b>proveedor</b> quien realiza los procedimientos: en esta guía ambos roles son del docente.',
        ], 'note': 'Al terminar, purga y drena todos los circuitos (sección Cuidado).'},
        {'t': 'Contenido de la caja', 'ul': [
            'Tubo con pera dosificadora y abrazaderas ajustables',
            'Bolsa dispensadora de sangre con soporte metálico y base',
            'Huesos de tibia de repuesto y cubierta de tibia derecha',
            'Piel de repuesto del brazo derecho',
            'Kit de llenado de ostomías, estomas y tapón',
            'Genitales masculinos',
            'Aceite mineral y concentrado de sangre sintética',
        ]},
        {'t': 'Repuestos (código de pieza)', 'ul': [
            'Piel del brazo: S157.813.L/M/D',
            'Huesos de tibia E/S: S157.835',
            'Concentrado de sangre artificial: S157.812',
            'Piel y cubierta del hueso: S157.836.L/M/D',
            'Kit de relleno de ostomía: S157.785',
        ]},
    ],
    'quick': [
        {'t': 'Tamaños de dispositivos', 'h': ['Procedimiento', 'Tamaño'], 'rows': [
            ['Laringoscopio (hoja)', 'Miller 2 o MAC 3'], ['Mascarilla laríngea', '2 / 2.5'], ['Intubación oral', 'TET 5.0 o 5.5'],
            ['Intubación nasal', 'Catéter 12 Fr'], ['Acceso IV', '22 G'], ['Acceso intraóseo', '17–16 G']]},
        {'t': 'Capacidad de los depósitos', 'h': ['Depósito', 'Capacidad'], 'rows': [
            ['Ostomías derechas', '100 ml'], ['Estómago (gastrostomía)', '200 ml'], ['Recto (colostomía)', '500 ml'], ['Vejiga (suprapúbico)', '350 ml']]},
        {'t': 'Pulsos palpables', 'h': ['Pulso', 'Lado'], 'rows': [
            ['Carotídeo', 'Bilateral'], ['Braquial', 'Derecho'], ['Femoral', 'Derecho']]},
        {'t': 'Mapa de ostomías', 'h': ['N.º', 'Puerto'], 'rows': [
            ['Ostomía 1', '1'], ['Ostomía 2 (removible)', '2'], ['Gastrostomía', '3'], ['Colostomía', '4'], ['Suprapúbico', '5']]},
    ],
    'cats': [
        {'t': 'Vía aérea y ventilación', 'items': [
            {'id': 'intubacion', 't': 'Intubación oral y nasal', 'sub': 'Laringoscopia, TET, mascarilla laríngea y sonda nasogástrica', 'img': 'laringoscopia.jpg', 'alt': 'Laringoscopia en el simulador',
             'specs': [['Hoja', 'Miller 2 / MAC 3'], ['TET', '5.0–5.5'], ['ML', '2 / 2.5'], ['Nasal', '12 Fr']],
             'blocks': [
                 {'t': 'Qué permite', 'ul': ['Protrusión mandibular, inclinación de la cabeza y elevación del mentón realistas.', 'Vía aérea con referencias anatómicas, lengua y cuerdas vocales.', 'Intubación oral o nasal con TET o mascarilla laríngea.', 'Alimentación nasogástrica: los líquidos entran por el esófago.']},
                 {'t': 'Preparación', 'ol': ['Lubrica a mano el tubo y la narina con aceite mineral.', 'Elige el tamaño de dispositivo de la tabla.', 'Coloca la cabeza en posición de olfateo antes de la laringoscopia.']}],
             'warn': ['No rocíes aceite mineral directamente en la boca ni en la vía aérea.', 'No introduzcas líquidos en la vía aérea: puede dañarse por dentro.', 'Intubar sin lubricar es muy difícil y daña el simulador.'],
             'clinic': ['Tamaño del TET en niños mayores de 2 años: (edad / 4) + 4 sin balón, o (edad / 4) + 3,5 con balón.', 'Profundidad aproximada en la comisura labial: 3 × diámetro interno del tubo.', 'Confirma la posición con capnografía (EtCO₂), expansión torácica simétrica y auscultación bilateral.']},
            {'id': 'ventilacion', 't': 'Ventilación con bolsa-válvula-mascarilla', 'sub': 'Elevación torácica visible y ventilaciones medidas con OMNI 2', 'img': 'bvm.jpg', 'alt': 'Ventilación con bolsa-válvula-mascarilla',
             'blocks': [{'t': 'Qué permite', 'ul': ['Elevación torácica realista con bolsa-válvula-mascarilla o con TET y ventilación manual.', 'Con OMNI 2, las ventilaciones se miden y registran.']}],
             'warn': ['No hagas ventilación boca a boca: deforma y contamina la vía aérea.'],
             'clinic': ['Técnica C-E para sellar la mascarilla; volumen justo para ver elevar el tórax, sin hiperventilar.', 'Con vía aérea avanzada: 1 ventilación cada 2–3 s (20–30 por minuto) en pediatría.']},
            {'id': 'traqueostomia', 't': 'Cuidados de la traqueostomía', 'sub': 'Abertura con tráquea reemplazable', 'img': 'traqueostomia.jpg', 'alt': 'Cuidados de traqueostomía en el simulador',
             'blocks': [
                 {'t': 'Uso', 'ol': ['Perfora la tráquea reemplazable e inserta la cánula de traqueostomía.', 'Conecta un dispositivo de presión positiva y observa la elevación del tórax.', 'Al terminar, vuelve a sellar la tráquea con la cinta provista.']},
                 {'t': 'Reparar la tráquea', 'ol': ['Desenrosca la perilla plateada de cada lado del simulador.', 'Levanta la piel del pecho y retira la caja torácica.', 'Localiza la tráquea y retira la correa.', 'Reemplaza la cinta rota y vuelve a colocar la correa.', 'Coloca la caja torácica y la piel del pecho.']}],
             'clinic': ['Decanulación accidental en una traqueostomía reciente: oxigenar por el estoma y por boca; reinsertar con una cánula de menor tamaño si es necesario.']},
        ]},
        {'t': 'Circulación y RCP', 'items': [
            {'id': 'compresiones', 't': 'Compresiones torácicas', 'sub': 'Referencias anatómicas y registro en OMNI 2',
             'blocks': [{'t': 'Qué permite', 'ul': ['Cavidad torácica con referencias para colocar bien las manos.', 'Con OMNI 2 se miden y registran las compresiones para que el instructor vea el desempeño.']}],
             'clinic': CLIN_RCP_PED},
            {'id': 'pulsos', 't': 'Pulsos palpables', 'sub': 'Carotídeo bilateral, braquial y femoral derechos',
             'blocks': [{'t': 'Uso', 'ul': ['Los pulsos se generan con una pera de goma manual.', 'Palpa: carotídeo bilateral, braquial derecho y femoral derecho.']}],
             'clinic': ['En niños se evalúa el pulso carotídeo o femoral; en lactantes, el braquial. No más de 10 s.']},
        ]},
        {'t': 'Acceso vascular', 'items': [
            {'id': 'brazo-iv', 't': 'Brazo de entrenamiento intravenoso', 'sub': 'Brazo derecho: venopunción, infusión, IM, SC y prueba de tuberculina', 'img': 'brazo-iv.jpg', 'alt': 'Venopunción en el brazo de entrenamiento',
             'specs': [['Aguja IV', '22 G o más fina']],
             'blocks': [
                 {'t': 'Qué incluye', 'ul': ['Venas cefálica, basílica, antecubital, radial y cubital simuladas, más dos venas en el dorso de la mano.', 'Punto de inyección IM en el deltoides.', 'Zonas subcutáneas en la cara palmar del antebrazo y lateral del brazo.']},
                 {'t': 'Llenado con jeringa (opción 1)', 'ol': ['Pon el extremo del tubo de drenaje (2) en un recipiente y abre la abrazadera.', 'Llena la jeringa y conéctala al tubo de llenado (1).', 'Deja que el líquido llegue al drenaje.', 'Cierra la abrazadera del tubo 2 y retira la jeringa.']},
                 {'t': 'Llenado con bolsa (opción 2)', 'ol': ['Levanta el soporte metálico y cuelga la bolsa dispensadora.', 'Conecta el tubo 1 al puerto inferior de la bolsa y cierra la abrazadera del tubo 2.', 'Agrega líquido a la bolsa con embudo o jeringa.', 'Pon el tubo 2 en un recipiente, deja fluir y cierra la abrazadera.', 'Para variar la presión, conecta la pera al puerto superior de la bolsa.']},
                 {'t': 'Al terminar', 'ol': ['Tubo 2 en un recipiente con la abrazadera abierta; vacía la bolsa.', 'Si usaste sangre simulada, irriga primero con agua.', 'Empuja aire con una jeringa por el tubo 1 para sacar el líquido restante.']}],
             'warn': ['Las agujas de calibre mayor que 22 G acortan la vida de la piel y las venas.', 'Para cambiar la piel: deslízala hacia abajo, calienta la nueva con pistola de calor, aplica talco o aceite mineral y colócala.'],
             'clinic': ['La vena mediana del codo es el sitio habitual de extracción; en niños pequeños también se usan las venas del dorso de la mano.']},
            {'id': 'intraoseo', 't': 'Acceso intraóseo', 'sub': 'Tibia derecha reemplazable', 'img': 'intraoseo.jpg', 'alt': 'Cubierta de la tibia para acceso intraóseo',
             'specs': [['Aguja IO', '17–16 G']],
             'blocks': [
                 {'t': 'Llenado de la pierna derecha', 'ol': ['Pon el tubo 2 en un recipiente y deja la abrazadera abierta.', 'Llena la jeringa, conéctala al tubo 1 y empuja el líquido.', 'Deja que llegue al drenaje y cierra la abrazadera.', 'Realiza el ejercicio IO.']},
                 {'t': 'Enjuague y cambio de hueso', 'ol': ['Abre la abrazadera del tubo 2 y drena el hueso; si usaste sangre, irriga con agua.', 'Empuja aire por el tubo 1.', 'Con el hueso seco, retira la cubierta, saca la tibia, coloca una nueva y cierra la cubierta.']}],
             'clinic': ['Sitio: tibia proximal, cara anteromedial plana, 1–3 cm por debajo de la tuberosidad tibial.', 'Indicado cuando el acceso IV no se logra rápido en el paro o el shock; por la vía IO pasan los mismos fármacos y volúmenes.', 'No puncionar un hueso fracturado ni un sitio ya puncionado.']},
            {'id': 'femoral', 't': 'Acceso venoso femoral', 'sub': 'Vena femoral derecha',
             'blocks': [{'t': 'Uso', 'ol': ['Llena la vasculatura de la pierna derecha igual que para el acceso IO (tubo 1 llenado, tubo 2 drenaje).', 'Palpa el pulso femoral con la pera de presión.', 'Practica la canulación en la vena femoral derecha.']}],
             'clinic': ['De lateral a medial: nervio, arteria, vena, linfáticos. Punciona medial al pulso, por debajo del ligamento inguinal.']},
            {'id': 'bolsa', 't': 'Bolsa dispensadora y presión venosa', 'sub': 'Soporte metálico para infusión continua', 'img': 'bolsa-sangre.jpg', 'alt': 'Bolsa dispensadora de sangre colgada del soporte',
             'blocks': [{'t': 'Uso', 'ul': ['Para infusiones continuas, deja el extremo del tubo de drenaje en un recipiente con la pinza abierta.', 'La pera conectada al puerto superior de la bolsa aumenta la presión del circuito y facilita el retorno venoso.']}]},
        ]},
        {'t': 'Atención hospitalaria', 'items': [
            {'id': 'im', 't': 'Inyección intramuscular y subcutánea', 'sub': 'Deltoides y cuádriceps', 'img': 'intramuscular.jpg', 'alt': 'Inyección en el deltoides del simulador',
             'blocks': [{'t': 'Uso', 'ul': ['Sitios en deltoides y cuádriceps.', 'Las almohadillas de inyección se quitan y reemplazan con facilidad.']}],
             'clinic': ['En lactantes y niños pequeños el sitio IM preferido es el vasto lateral del cuádriceps.', 'Prueba de tuberculina: 0,1 ml intradérmico en la cara anterior del antebrazo; se lee a las 48–72 h midiendo la induración.']},
            {'id': 'ostomias', 't': 'Ostomías, gastrostomía y enema', 'sub': 'Cinco puertos en tórax y abdomen', 'img': 'ostomias.jpg', 'alt': 'Estomas en el abdomen del simulador',
             'blocks': [
                 {'t': 'Puertos', 'ul': ['Ostomías 1 y 2 (la 2 se retira con cuidado para agregar o drenar líquidos).', '<b>Gastrostomía:</b> conectada al estómago; coloca el tapón antes de introducir líquidos por nariz o boca.', '<b>Colostomía:</b> para enemas; practica con el simulador de costado y una cánula rectal lubricada de diámetro pequeño.', '<b>Suprapúbico:</b> llena la vejiga para el sondaje.']},
                 {'t': 'Llenar un depósito', 'ol': ['Retira con cuidado el estoma.', 'Toma la jeringa y la manguera de llenado.', 'Inserta el adaptador gris en el puerto.', 'Empuja el líquido.']},
                 {'t': 'Vaciar un depósito', 'ol': ['Inserta el adaptador gris en el estoma y aspira el líquido.', 'Llena con agua y alcohol (70:30) y vuelve a aspirar.']}],
             'warn': ['El estoma superior derecho no se puede retirar.']},
            {'id': 'sondaje', 't': 'Sondaje vesical', 'sub': 'Genitales masculinos y femeninos intercambiables',
             'blocks': [{'t': 'Uso', 'ol': ['Llena la vejiga por el puerto suprapúbico (ver Ostomías).', 'Deja el adaptador gris y la jeringa conectados para mantener la presión.', 'Lubrica la sonda e insértala por la uretra.', 'Los genitales masculinos vienen instalados; al retirarlos con cuidado quedan los femeninos debajo.']}],
             'clinic': ['Técnica estéril; en el varón, tracciona el pene hacia arriba para rectificar la uretra; en la mujer, el meato está entre clítoris e introito.']},
            {'id': 'movilidad', 't': 'Movilidad, vendaje y ojos', 'sub': 'Rango de movimiento, dedos separados y ojos que abren', 'img': 'movilidad.jpg', 'alt': 'Simulador sentado mostrando el rango de movimiento',
             'blocks': [{'t': 'Qué permite', 'ul': ['Brazos y piernas flexibles que giran en el torso; la cintura se dobla 30°.', 'Dedos de manos y pies separados para vendajes; superficie resistente a agua, aceite y linimentos.', 'Ojos que abren y cierran: medicación en el saco conjuntival, extracción de cuerpos extraños e irrigación ocular.']}]},
        ]},
        {'t': 'Opcionales', 'items': [
            {'id': 'subclavio', 't': 'Acceso subclavio (S157.707)', 'sub': 'Port-a-Cath® y catéter Hickman/Broviac', 'img': 'subclavio.jpg', 'alt': 'Caja torácica de acceso subclavio',
             'blocks': [
                 {'t': 'Instalación', 'ol': ['Desenrosca las perillas plateadas, levanta la piel del pecho y retira la caja torácica.', 'Ubica los dos conectores blancos bajo los pulmones.', 'Conecta los dos tubos de la caja de acceso subclavio (las mangueras deben cruzarse).', 'Coloca la caja y fija la piel con velcro.']},
                 {'t': 'Uso', 'ul': ['El parche izquierdo simula un Port-a-Cath®; el hueco derecho, un Hickman/Broviac.', 'Permiten infundir líquidos, fármacos simulados y sangre.', 'Drena con el tubo con abrazadera de la caja torácica.']}],
             'warn': ['No hagas compresiones con esta caja torácica instalada.'],
             'clinic': ['Acceder a un reservorio implantado (Port) con aguja de Huber no perforante y técnica estéril; comprobar retorno y lavar con suero.']},
            {'id': 'drenaje', 't': 'Descompresión y drenaje torácico (S157.11)', 'sub': 'Neumotórax a tensión: 2.º y 5.º espacio intercostal bilateral', 'img': 'descompresion.jpg', 'alt': 'Caja torácica de descompresión y drenaje',
             'blocks': [
                 {'t': 'Instalación', 'ol': ['Desenrosca las perillas, levanta la piel y retira la caja torácica.', 'Coloca la caja de descompresión y drenaje.', 'Conecta la pera al tubo de llenado y cierra la abrazadera.', 'Infla la bolsa bajo la caja con la pera: simula un neumotórax a tensión.', 'Vuelve a colocar la piel con velcro.']},
                 {'t': 'Ejercicio de drenaje', 'ol': ['Llena la jeringa y abre la abrazadera del tubo de drenaje.', 'Conecta la jeringa a la manguera de llenado y empuja el líquido.', 'Cierra la abrazadera y realiza el drenaje.', 'Al terminar, abre la abrazadera y limpia el sistema.']}],
             'warn': ['No hagas compresiones con esta caja torácica instalada.'],
             'clinic': ['Neumotórax a tensión: diagnóstico clínico (hipotensión, desviación traqueal, ingurgitación yugular, ausencia de murmullo); descomprimir sin esperar la radiografía.', 'Descompresión con aguja en el 2.º espacio intercostal, línea medioclavicular (en adultos, ATLS acepta el 4.º–5.º espacio, línea axilar media).', 'El drenaje definitivo va en el 5.º espacio intercostal, por delante de la línea axilar media, sobre el borde superior de la costilla.']},
        ]},
    ],
    'omni': omni_cards('S157.250', 'omni2-rcp.jpg', calib=False),
    'trouble': TROUBLE_OMNI,
    'care': [CARE_GENERAL, CARE_CLEAN, CARE_STOMA, CARE_STORAGE],
}
