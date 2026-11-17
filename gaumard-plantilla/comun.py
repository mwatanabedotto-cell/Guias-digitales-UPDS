"""Bloques comunes a los simuladores Gaumard con OMNI 2 (según los manuales del fabricante)."""

CARE_GENERAL = {
    't': 'Reglas generales',
    'ul': [
        'Bolígrafos, tinta y marcadores manchan la piel de forma permanente: no escribas sobre el simulador.',
        'No lo envuelvas ni lo apoyes sobre papel de diario u otro material impreso.',
        'Trátalo con las mismas precauciones que a un paciente real.',
        'Los lubricantes y accesorios son solo para el simulador; nunca para uso humano.',
        'No hagas ventilación boca a boca: contamina la vía aérea, que no se puede limpiar ni desinfectar.',
        'Los tubos de las venas contienen <b>látex</b>: las personas alérgicas deben evitar el contacto.',
    ],
}

CARE_CLEAN = {
    't': 'Limpieza al terminar',
    'ul': [
        'Paño humedecido con detergente lavavajillas diluido; seca bien.',
        'Retira todo resto de lubricante.',
        'No uses productos abrasivos ni povidona yodada.',
        'Es resistente a salpicaduras, no impermeable: no lo sumerjas ni dejes entrar agua.',
        'Purga las venas con agua limpia y drena los depósitos en cada sesión; una vez al mes, irriga con agua y alcohol isopropílico 70:30.',
        'Usa solo la sangre simulada de Gaumard: otras con azúcar o aditivos obstruyen el sistema.',
    ],
}

CARE_STOMA = {
    't': 'Estomas',
    'ul': [
        'Manipúlalos con las manos limpias y sin uñas.',
        'Límpialos con agua y jabón suave; nunca con alcohol ni solventes.',
        'Evita que algo los presione: se deforman (recuperan la forma al quitar la presión).',
        'Aplica talco para bebés para quitar la pegajosidad y devolver la textura de piel.',
    ],
}

CARE_STORAGE = {
    't': 'Condiciones de uso y almacenamiento',
    'ul': [
        'Uso: 10 a 35 °C, humedad 5 a 95 % sin condensación.',
        'Almacenamiento prolongado: 0 a 29 °C, humedad 40 a 60 %; fuera de ese rango el material se ablanda y se deforma.',
        'Guárdalo y transpórtalo en la bolsa de polietileno transparente provista.',
        'No apiles objetos pesados sobre la caja.',
        'Solo enciende con la fuente de alimentación conectada.',
    ],
}


def omni_cards(model, rcp_img=None, calib=True):
    cards = [
        {'t': 'Conectar la tableta', 'ol': [
            'Conecta la fuente de alimentación al simulador.',
            'Enciende la tableta OMNI® 2 manteniendo pulsado el botón ON del lado derecho.',
            'Toca «Permitir» para activar el Bluetooth.',
            'Espera la pantalla de inicio mientras detecta el simulador.',
            'La primera vez aparece un tutorial: avanza con «ENTENDIDO» o sal con «INICIO». Complétalo una vez o volverá a salir.',
            'Al terminar, OMNI 2 abre la página de Favoritos y se conecta al simulador.',
        ]},
        {'t': 'Cambiar un signo vital', 'ol': [
            'Toca el signo vital en la pantalla principal (Favoritos).',
            'Ajusta el valor con los iconos +/− o el control deslizante.',
            'Toca «APLICAR AHORA».',
        ]},
        {'t': 'Evaluar la RCP', 'p': 'OMNI 2 incluye un evaluador y un entrenador de RCP con gráficos de retroalimentación en tiempo real; los rangos siguen las guías de la AHA.',
         'ul': ['Iniciar y finalizar la sesión de RCP.', 'Reiniciar la sesión.', 'Activar el entrenador audible.', 'Desfibrilar virtualmente el simulador.'],
         'img': rcp_img, 'alt': 'Gráficos de retroalimentación de RCP en OMNI 2'},
    ]
    if calib:
        cards.append({'t': 'Calibrar las compresiones', 'p': 'Recomendado antes del primer uso.', 'ol': [
            'Toca el engranaje arriba a la derecha.', 'Selecciona «Calibración» y luego «Compresión».',
            'Toca «INICIAR» y realiza 5 compresiones.', 'Toca «GUARDAR».']})
    cards += [
        {'t': 'Monitor virtual (opcional)', 'ol': [
            'Conecta el enrutador provisto a la pared.',
            'En OMNI 2: engranaje › «Configuración de conexión WiFi» › red «Gaumard + número de serie».',
            'Engranaje › «Monitor virtual»; verifica el número de serie e ingresa el código de activación (distingue mayúsculas).',
            'Anota la IP y el puerto de OMNI y toca «CONECTAR».',
            'En la computadora del monitor, conéctate a la misma red y abre el software de monitores Gaumard.',
            'Toca la «V» arriba a la izquierda › «Configuración de comunicación», confirma IP y puerto y toca «Conectar».',
        ]},
        {'t': 'Emparejar con OMNI Link', 'p': 'Solo si aparece el aviso de que OMNI 2 debe emparejarse con un simulador.', 'ol': [
            'Conecta la fuente de alimentación al simulador.',
            'Engranaje › «Configuración de conexión Bluetooth».',
            'Elige el simulador en «Dispositivos disponibles» (se llama Gaumard_ + número de serie) y espera el emparejamiento (hasta unos 30 segundos).',
            'Vuelve atrás, toca el engranaje › «Conectar con simulador», elígelo y toca «Conectar y guardar como predeterminado».',
        ]},
        {'t': 'Advertencias', 'ul': [
            'Distancia máxima entre tableta y simulador: 10 metros.',
            'Los puntos verdes junto al nombre del simulador indican la intensidad de la conexión.',
            'No conectes el simulador ni la tableta a una computadora, red LAN o equipo de diagnóstico no autorizado: puede dañarse.',
        ]},
    ]
    return cards


TROUBLE_OMNI = [
    ['La tableta no se comunica con el simulador', 'Tableta a más de 10 m', 'Acércala al simulador.'],
    ['La tableta no se comunica con el simulador', 'El simulador no está emparejado', 'Desconecta la alimentación del simulador, apaga el Bluetooth de la tableta, vuelve a conectar el simulador y enciende el Bluetooth.'],
    ['No enciende o no responde', 'Fuente de alimentación desconectada', 'Verifica que la fuente esté conectada al simulador.'],
    ['No se detectan las compresiones', 'Sensor sin calibrar', 'Engranaje › Calibración: reinicia el sensor de compresión.'],
    ['No se detectan las ventilaciones', 'Sensor sin calibrar', 'Engranaje › Calibración: reinicia el sensor de ventilación.'],
]

CLIN_RCP_PED = [
    'RCP pediátrica (AHA): 30:2 con un reanimador y 15:2 con dos; con vía aérea avanzada, compresiones continuas y 1 ventilación cada 2–3 s.',
    'Compresiones de 100 a 120/min, profundidad de al menos un tercio del diámetro anteroposterior del tórax, reexpansión completa y mínimas interrupciones.',
    'Desfibrilación pediátrica: 2 J/kg, luego 4 J/kg (máximo 10 J/kg o la dosis de adulto). Adrenalina 0,01 mg/kg IV/IO cada 3–5 min.',
]
