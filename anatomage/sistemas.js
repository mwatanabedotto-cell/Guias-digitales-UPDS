/*
 * Manuales por sistema de la mesa Anatomage Table (vistas preestablecidas).
 * Para agregar un sistema nuevo:
 *   1. Exporta las capturas en orden como img/<prefijo>-01.jpg, -02.jpg, …
 *   2. Agrega un objeto a SISTEMAS con el mismo prefijo en `img`.
 * Cada estructura es "Nombre en español|Nome em português" o una clave del léxico L.
 * side: 'der' | 'izq' | '' indica el lado mostrado en la captura.
 */
(function () {
  var L = {
    /* Músculos repetidos */
    occ: 'Occipitofrontal|Occipitofrontal', proc: 'Prócer|Prócero', oro: 'Orbicular del ojo|Orbicular do olho',
    els: 'Elevador del labio superior|Levantador do lábio superior', cma: 'Cigomático mayor|Zigomático maior', cme: 'Cigomático menor|Zigomático menor',
    dab: 'Depresor del ángulo de la boca|Abaixador do ângulo da boca', dli: 'Depresor del labio inferior|Abaixador do lábio inferior',
    plat: 'Platisma|Platisma', ment: 'Mentoniano|Mentual', orb: 'Orbicular de la boca|Orbicular da boca', bucc: 'Buccinador|Bucinador',
    eab: 'Elevador del ángulo de la boca|Levantador do ângulo da boca', esc: 'Esternocleidomastoideo|Esternocleidomastóideo',
    ean: 'Escaleno anterior|Escaleno anterior', eme: 'Escaleno medio|Escaleno médio', epo: 'Escaleno posterior|Escaleno posterior',
    pmy: 'Pectoral mayor|Peitoral maior', pme: 'Pectoral menor|Peitoral menor', int: 'Intercostales|Intercostais',
    lcap: 'Longísimo de la cabeza|Longuíssimo da cabeça', oint: 'Oblicuo interno del abdomen|Oblíquo interno do abdome',
    pubc: 'Pubococcígeo (elevador del ano)|Pubococcígeo (levantador do ânus)', pubr: 'Puborrectal (elevador del ano)|Puborretal (levantador do ânus)',
    ilic: 'Iliococcígeo (elevador del ano)|Iliococcígeo (levantador do ânus)',
    supra: 'Supraespinoso|Supraespinal', infra: 'Infraespinoso|Infraespinal', rme: 'Redondo menor|Redondo menor', rma: 'Redondo mayor|Redondo maior',
    delt: 'Deltoides|Deltoide', dors: 'Dorsal ancho|Latíssimo do dorso', cora: 'Coracobraquial|Coracobraquial', bic: 'Bíceps braquial|Bíceps braquial',
    braq: 'Braquial|Braquial', tric: 'Tríceps braquial|Tríceps braquial', anc: 'Ancóneo|Ancôneo', brr: 'Braquiorradial|Braquiorradial',
    prr: 'Pronador redondo|Pronador redondo', prc: 'Pronador cuadrado|Pronador quadrado', sup: 'Supinador|Supinador',
    frc: 'Flexor radial del carpo|Flexor radial do carpo', fcc: 'Flexor cubital del carpo|Flexor ulnar do carpo', pal: 'Palmar largo|Palmar longo',
    fsd: 'Flexor superficial de los dedos|Flexor superficial dos dedos', fpd: 'Flexor profundo de los dedos|Flexor profundo dos dedos',
    flp: 'Flexor largo del pulgar|Flexor longo do polegar', fcp: 'Flexor corto del pulgar|Flexor curto do polegar',
    erl: 'Extensor radial largo del carpo|Extensor radial longo do carpo', erc: 'Extensor radial corto del carpo|Extensor radial curto do carpo',
    ecc: 'Extensor cubital del carpo|Extensor ulnar do carpo', ed: 'Extensor de los dedos|Extensor dos dedos', edm: 'Extensor del meñique|Extensor do dedo mínimo',
    alp: 'Abductor largo del pulgar|Abdutor longo do polegar', ecp: 'Extensor corto del pulgar|Extensor curto do polegar',
    elp: 'Extensor largo del pulgar|Extensor longo do polegar', ei: 'Extensor del índice|Extensor do indicador',
    acp: 'Abductor corto del pulgar|Abdutor curto do polegar', adp: 'Aductor del pulgar|Adutor do polegar', abm: 'Abductor del meñique|Abdutor do dedo mínimo',
    fcm: 'Flexor corto del meñique|Flexor curto do dedo mínimo', lum: 'Lumbricales de la mano|Lumbricais da mão',
    iod: 'Interóseos dorsales de la mano|Interósseos dorsais da mão', iop: 'Interóseos palmares|Interósseos palmares',
    psoas: 'Psoas mayor|Psoas maior', ili: 'Ilíaco|Ilíaco', tfl: 'Tensor de la fascia lata|Tensor da fáscia lata', sart: 'Sartorio|Sartório',
    rf: 'Recto femoral|Reto femoral', vl: 'Vasto lateral|Vasto lateral', vm: 'Vasto medial|Vasto medial', vi: 'Vasto intermedio|Vasto intermédio',
    pec: 'Pectíneo|Pectíneo', al: 'Aductor largo|Adutor longo', ac: 'Aductor corto|Adutor curto', am: 'Aductor mayor|Adutor magno', grac: 'Grácil|Grácil',
    tit: 'Tracto iliotibial|Trato iliotibial', gma: 'Glúteo mayor|Glúteo máximo', gme: 'Glúteo medio|Glúteo médio', gmi: 'Glúteo mínimo|Glúteo mínimo',
    bf: 'Bíceps femoral|Bíceps femoral', st: 'Semitendinoso|Semitendíneo', sm: 'Semimembranoso|Semimembranáceo',
    pir: 'Piriforme|Piriforme', gs: 'Gemelo superior|Gêmeo superior', gi: 'Gemelo inferior|Gêmeo inferior', oi: 'Obturador interno|Obturador interno',
    cf: 'Cuadrado femoral|Quadrado femoral', ta: 'Tibial anterior|Tibial anterior', tp: 'Tibial posterior|Tibial posterior',
    eld: 'Extensor largo de los dedos|Extensor longo dos dedos', elh: 'Extensor largo del dedo gordo|Extensor longo do hálux',
    pl: 'Peroneo largo|Fibular longo', pc: 'Peroneo corto|Fibular curto', gast: 'Gastrocnemio|Gastrocnêmio', sol: 'Sóleo|Sóleo', plan: 'Plantar|Plantar',
    fld: 'Flexor largo de los dedos|Flexor longo dos dedos', flh: 'Flexor largo del dedo gordo|Flexor longo do hálux',
    ecd: 'Extensor corto de los dedos|Extensor curto dos dedos', ech: 'Extensor corto del dedo gordo|Extensor curto do hálux',
    ah: 'Abductor del dedo gordo|Abdutor do hálux', fcd: 'Flexor corto de los dedos|Flexor curto dos dedos', abmp: 'Abductor del meñique del pie|Abdutor do dedo mínimo do pé',
    fch: 'Flexor corto del dedo gordo|Flexor curto do hálux', adh: 'Aductor del dedo gordo|Adutor do hálux', fcmp: 'Flexor corto del meñique del pie|Flexor curto do dedo mínimo do pé',
    iodp: 'Interóseos dorsales del pie|Interósseos dorsais do pé', iopp: 'Interóseos plantares|Interósseos plantares',
    /* Vasos repetidos */
    sca: 'Arteria subclavia|Artéria subclávia', tbc: 'Tronco braquiocefálico|Tronco braquiocefálico', aa: 'Aorta ascendente|Parte ascendente da aorta',
    arco: 'Arco aórtico|Arco da aorta', tp0: 'Tronco pulmonar|Tronco pulmonar', vcs: 'Vena cava superior|Veia cava superior', vci: 'Vena cava inferior|Veia cava inferior',
    vpsd: 'Vena pulmonar superior derecha|Veia pulmonar superior direita', vpid: 'Vena pulmonar inferior derecha|Veia pulmonar inferior direita',
    tts: 'Arteria temporal superficial|Artéria temporal superficial', fac: 'Arteria facial|Artéria facial', max: 'Arteria maxilar|Artéria maxilar',
    sinc: 'Seno cavernoso|Seio cavernoso', ptp: 'Plexo pterigoideo|Plexo pterigóideo', vinf: 'Vena infraorbitaria|Veia infraorbital',
    vyi: 'Vena yugular interna|Veia jugular interna', vbc: 'Vena braquiocefálica|Veia braquiocefálica', vsc: 'Vena subclavia|Veia subclávia',
    ttc: 'Tronco tirocervical|Tronco tireocervical', axi: 'Arteria axilar|Artéria axilar', vert: 'Arteria vertebral|Artéria vertebral',
    tsup: 'Arteria tiroidea superior|Artéria tireóidea superior', esp: 'Arteria esplénica|Artéria esplênica', porta: 'Vena porta hepática|Veia porta do fígado',
    vms: 'Vena mesentérica superior|Veia mesentérica superior', ams: 'Arteria mesentérica superior|Artéria mesentérica superior',
    ami: 'Arteria mesentérica inferior|Artéria mesentérica inferior', aii: 'Arteria ilíaca interna|Artéria ilíaca interna', aie: 'Arteria ilíaca externa|Artéria ilíaca externa',
    aic: 'Arteria ilíaca común|Artéria ilíaca comum', fem: 'Arteria femoral|Artéria femoral', avs: 'Arteria vesical superior|Artéria vesical superior',
    vii: 'Vena ilíaca interna|Veia ilíaca interna', vie: 'Vena ilíaca externa|Veia ilíaca externa', vic: 'Vena ilíaca común|Veia ilíaca comum',
    vvs: 'Vena vesical superior|Veia vesical superior', atp: 'Arteria tibial posterior|Artéria tibial posterior', dpie: 'Arteria dorsal del pie|Artéria dorsal do pé',
    /* Otros */
    parot: 'Glándula parótida|Glândula parótida', subm: 'Glándula submandibular|Glândula submandibular', subl: 'Glándula sublingual|Glândula sublingual',
    ves: 'Vesícula biliar|Vesícula biliar', apen: 'Apéndice vermiforme|Apêndice vermiforme', recto: 'Recto|Reto', canal: 'Canal anal|Canal anal',
    pancr: 'Páncreas|Pâncreas', clit: 'Clítoris|Clitóris', lov: 'Ligamento propio del ovario|Ligamento útero-ovárico'
  };

  var SISTEMAS = [
    {
      id: 'cv', img: 'cv', color: 'var(--artery)', name: 'Cardiovascular', pt: 'Sistema cardiovascular',
      surg: [
        'Venopunción de rutina en la <b>vena mediana del codo</b>, que comunica la cefálica con la basílica.',
        'La <b>vena safena mayor</b> pasa por delante del maléolo medial (venodisección) y es el injerto más usado en la revascularización coronaria.',
        'Pulsos de control: radial, braquial, femoral, poplíteo, tibial posterior (detrás del maléolo medial) y dorsal del pie.',
        'Hipertensión portal: anastomosis portosistémicas en esófago (gástrica izquierda y ácigos), ombligo (cabeza de medusa) y recto.'
      ],
      rev: [
        'La coronaria derecha irriga el nodo AV en la mayoría de las personas: el IAM inferior (DII, DIII, aVF) se asocia a bradiarritmias.',
        'La descendente anterior es la arteria más ocluida; su territorio da el IAM anterior (V1–V4).',
        'Triángulo peligroso de la cara: la vena angular comunica con la oftálmica superior y el <b>seno cavernoso</b>; riesgo de tromboflebitis.',
        'La arteria apendicular es rama de la ileocólica (mesentérica superior).'
      ],
      groups: [
        { name: 'Corazón', pt: 'Coração', views: [
          { t: 'Cámaras', items: ['Aurícula derecha|Átrio direito', 'Ventrículo derecho|Ventrículo direito', 'Aurícula izquierda|Átrio esquerdo', 'Ventrículo izquierdo|Ventrículo esquerdo'] },
          { t: 'Válvulas', items: ['Válvula tricúspide|Valva tricúspide', 'Válvula pulmonar|Valva do tronco pulmonar', 'Válvula mitral (bicúspide)|Valva mitral (bicúspide)', 'Válvula aórtica|Valva da aorta'] },
          { t: 'Válvulas auriculoventriculares y semilunares', items: ['Cuerdas tendinosas de la válvula mitral|Cordas tendíneas da valva mitral', 'Cuerdas tendinosas de la válvula tricúspide|Cordas tendíneas da valva tricúspide'] },
          { t: 'Arterias coronarias', items: ['Arteria coronaria derecha|Artéria coronária direita', 'Arteria marginal derecha (aguda)|Ramo marginal direito', 'Arteria coronaria izquierda|Artéria coronária esquerda', 'Arteria interventricular anterior (descendente anterior)|Ramo interventricular anterior', 'Rama circunfleja de la coronaria izquierda|Ramo circunflexo'] },
          { t: 'Venas cardíacas', items: ['Seno coronario|Seio coronário', 'Vena cardíaca mayor|Veia cardíaca magna', 'Vena cardíaca media|Veia cardíaca média', 'Vena cardíaca menor|Veia cardíaca parva', 'Venas cardíacas anteriores|Veias cardíacas anteriores'] },
          { t: 'Grandes vasos', items: ['vcs', 'vci', 'aa', 'arco', 'tp0', 'Arteria pulmonar derecha|Artéria pulmonar direita', 'vpsd', 'vpid'] },
          { t: 'Vasos pulmonares', items: ['tp0', 'Arteria pulmonar izquierda|Artéria pulmonar esquerda', 'vpsd', 'vpid'] },
          { t: 'Ramas del arco aórtico', items: ['tbc', 'Arteria subclavia derecha|Artéria subclávia direita', 'Arteria carótida común derecha|Artéria carótida comum direita', 'Arteria carótida común izquierda|Artéria carótida comum esquerda', 'Arteria subclavia izquierda|Artéria subclávia esquerda'] }
        ] },
        { name: 'Cabeza y cuello', pt: 'Cabeça e pescoço', views: [
          { t: 'Ramas de la carótida común', side: 'der', items: ['Arteria carótida común|Artéria carótida comum', 'Arteria carótida interna|Artéria carótida interna', 'Arteria carótida externa|Artéria carótida externa'] },
          { t: 'Ramas de la carótida externa', side: 'izq', items: ['Arteria carótida externa|Artéria carótida externa', 'tsup', 'Arteria faríngea ascendente|Artéria faríngea ascendente', 'Arteria lingual|Artéria lingual', 'fac', 'Arteria occipital|Artéria occipital', 'Arteria auricular posterior|Artéria auricular posterior', 'max', 'tts'] },
          { t: 'Arterias del encéfalo', side: 'der', items: ['Arteria carótida interna|Artéria carótida interna', 'Porción petrosa de la carótida interna|Parte petrosa da carótida interna', 'Porción cavernosa de la carótida interna|Parte cavernosa da carótida interna', 'Arteria cerebral anterior (ACA)|Artéria cerebral anterior', 'Arteria cerebral media (ACM)|Artéria cerebral média', 'Arterias comunicantes posteriores|Artérias comunicantes posteriores', 'Arteria cerebral posterior (ACP)|Artéria cerebral posterior', 'vert', 'Arteria basilar|Artéria basilar', 'Arteria cerebelosa superior|Artéria superior do cerebelo', 'Arteria cerebelosa anteroinferior (AICA)|Artéria inferior anterior do cerebelo', 'Arteria cerebelosa posteroinferior (PICA)|Artéria inferior posterior do cerebelo'] },
          { t: 'Venas del encéfalo y senos durales', items: ['Seno sagital superior|Seio sagital superior', 'Seno sagital inferior|Seio sagital inferior', 'Seno recto|Seio reto', 'Confluencia de los senos|Confluência dos seios', 'Seno transverso|Seio transverso', 'Seno sigmoideo|Seio sigmóide', 'Seno occipital|Seio occipital', 'sinc', 'Plexo basilar|Plexo basilar', 'Venas emisarias occipitales|Veias emissárias occipitais', 'Venas cerebrales|Veias cerebrais'] },
          { t: 'Arteria facial y sus ramas', side: 'izq', items: ['fac', 'Arteria submentoniana|Artéria submentual', 'Arteria palatina ascendente|Artéria palatina ascendente', 'Arteria amigdalina|Ramo tonsilar', 'Arteria labial inferior|Artéria labial inferior', 'Arteria labial superior|Artéria labial superior', 'Arteria nasal lateral|Ramo nasal lateral', 'Arteria angular|Artéria angular', 'Arteria nasal dorsal|Artéria dorsal do nariz', 'Arteria facial transversa|Artéria transversa da face', 'tts'] },
          { t: 'Arteria maxilar y sus ramas', side: 'izq', items: ['max', 'Arteria meníngea media|Artéria meníngea média', 'Arteria auricular profunda|Artéria auricular profunda', 'Arteria alveolar inferior|Artéria alveolar inferior', 'Arteria mentoniana|Artéria mentual', 'Arteria masetérica|Artéria massetérica', 'Arteria bucal|Artéria bucal', 'Arteria palatina mayor (descendente)|Artéria palatina maior', 'Arteria infraorbitaria|Artéria infraorbital'] },
          { t: 'Venas superficiales de la cabeza', side: 'izq', items: ['Vena facial|Veia facial', 'Vena angular|Veia angular', 'Vena nasofrontal|Veia nasofrontal', 'Vena labial superior|Veia labial superior', 'Vena labial inferior|Veia labial inferior', 'Vena submentoniana|Veia submentual', 'Vena facial transversa|Veia transversa da face', 'Vena temporal superficial|Veia temporal superficial', 'Vena retromandibular|Veia retromandibular', 'Vena auricular posterior|Veia auricular posterior', 'Vena yugular externa|Veia jugular externa', 'Vena yugular externa posterior|Veia jugular externa posterior', 'vyi'] },
          { t: 'Venas profundas de la cabeza', side: 'izq', items: ['Vena maxilar|Veia maxilar', 'ptp', 'vinf', 'Vena alveolar inferior|Veia alveolar inferior', 'Vena lingual|Veia lingual', 'Vena sublingual|Veia sublingual'] },
          { t: 'Arterias de la órbita', side: 'der', items: ['Arteria oftálmica|Artéria oftálmica', 'Arteria central de la retina|Artéria central da retina', 'Arteria lagrimal|Artéria lacrimal', 'Arterias ciliares posteriores largas|Artérias ciliares posteriores longas', 'Arterias ciliares posteriores cortas|Artérias ciliares posteriores curtas', 'Arteria etmoidal anterior|Artéria etmoidal anterior', 'Arteria etmoidal posterior|Artéria etmoidal posterior', 'Arteria supraorbitaria|Artéria supraorbital', 'Arteria supratroclear|Artéria supratroclear'] },
          { t: 'Venas de la órbita', side: 'der', items: ['Vena oftálmica superior|Veia oftálmica superior', 'Vena oftálmica inferior|Veia oftálmica inferior', 'Vena central de la retina|Veia central da retina', 'Vena supraorbitaria|Veia supraorbital', 'Vena frontal (supratroclear)|Veia supratroclear', 'vinf', 'ptp', 'sinc'] },
          { t: 'Arterias del cuello', side: 'der', items: ['sca', 'vert', 'ttc', 'Arteria tiroidea inferior|Artéria tireóidea inferior', 'Arteria cervical ascendente|Artéria cervical ascendente', 'Tronco costocervical|Tronco costocervical', 'Arteria cervical profunda|Artéria cervical profunda', 'tsup', 'Arteria laríngea superior|Artéria laríngea superior', 'Arteria cricotiroidea|Ramo cricotireóideo'] },
          { t: 'Venas del cuello', side: 'der', items: ['vbc', 'vsc', 'Vena yugular anterior|Veia jugular anterior', 'Vena tiroidea superior|Veia tireóidea superior', 'Vena tiroidea media|Veia tireóidea média', 'Vena tiroidea inferior|Veia tireóidea inferior', 'Vena laríngea superior|Veia laríngea superior', 'Vena vertebral|Veia vertebral', 'Vena cervical profunda|Veia cervical profunda'] }
        ] },
        { name: 'Miembro superior', pt: 'Membro superior', views: [
          { t: 'Arterias de la región escapular', side: 'der', items: ['sca', 'ttc', 'Arteria cervical transversa|Artéria cervical transversa', 'Arteria dorsal de la escápula|Artéria dorsal da escápula', 'axi', 'Arteria toracoacromial|Artéria toracoacromial', 'Arteria subescapular|Artéria subescapular', 'Arteria circunfleja escapular|Artéria circunflexa da escápula', 'Arteria toracodorsal|Artéria toracodorsal'] },
          { t: 'Arterias del brazo y antebrazo', side: 'der', items: ['axi', 'Arteria circunfleja humeral anterior|Artéria circunflexa anterior do úmero', 'Arteria circunfleja humeral posterior|Artéria circunflexa posterior do úmero', 'Arteria braquial|Artéria braquial', 'Arteria radial|Artéria radial', 'Arteria cubital|Artéria ulnar'] },
          { t: 'Venas superficiales del brazo y antebrazo', side: 'der', items: ['Vena cefálica|Veia cefálica', 'Vena basílica|Veia basílica', 'Vena mediana del codo (cubital media)|Veia intermédia do cotovelo', 'Vena axilar|Veia axilar'] },
          { t: 'Venas profundas del brazo y antebrazo', side: 'der', items: ['Venas radiales|Veias radiais', 'Venas cubitales|Veias ulnares', 'Vena braquial|Veias braquiais', 'Vena circunfleja humeral anterior|Veia circunflexa anterior do úmero', 'Vena circunfleja humeral posterior|Veia circunflexa posterior do úmero'] },
          { t: 'Arterias de la mano', side: 'der', items: ['Arco palmar superficial|Arco palmar superficial', 'Arco palmar profundo|Arco palmar profundo', 'Arco carpiano palmar|Rede carpal palmar', 'Arco carpiano dorsal|Rede carpal dorsal', 'Arteria principal del pulgar|Artéria principal do polegar', 'Arteria radial del índice|Artéria radial do indicador', 'Arterias digitales palmares comunes|Artérias digitais palmares comuns', 'Arterias digitales palmares propias|Artérias digitais palmares próprias', 'Arterias metacarpianas palmares|Artérias metacarpais palmares', 'Arterias metacarpianas dorsales|Artérias metacarpais dorsais', 'Arterias digitales dorsales|Artérias digitais dorsais'] },
          { t: 'Venas de la mano', side: 'der', items: ['Arco venoso palmar superficial|Arco venoso palmar superficial', 'Arco venoso palmar profundo|Arco venoso palmar profundo', 'Venas digitales palmares|Veias digitais palmares', 'Venas metacarpianas palmares|Veias metacarpais palmares', 'Venas digitales dorsales|Veias digitais dorsais', 'Venas metacarpianas dorsales|Veias metacarpais dorsais'] }
        ] },
        { name: 'Tórax', pt: 'Tórax', views: [
          { t: 'Arterias del tórax', side: 'der', items: ['aa', 'arco', 'tbc', 'sca', 'Aorta torácica|Parte torácica da aorta', 'Aorta abdominal|Parte abdominal da aorta', 'Arteria torácica interna (mamaria interna)|Artéria torácica interna', 'Arteria musculofrénica|Artéria musculofrênica', 'Arteria intercostal superior|Artéria intercostal suprema', 'Arterias intercostales|Artérias intercostais posteriores', 'Arteria subcostal|Artéria subcostal', 'Arteria bronquial|Ramos bronquiais'] },
          { t: 'Venas del tórax', side: 'der', items: ['vcs', 'vci', 'vbc', 'vyi', 'vsc', 'Vena ácigos|Veia ázigo', 'Arco de la vena ácigos|Arco da veia ázigo', 'Vena hemiácigos|Veia hemiázigo', 'Vena hemiácigos accesoria|Veia hemiázigo acessória', 'Vena intercostal superior|Veia intercostal superior', 'Venas intercostales|Veias intercostais posteriores', 'Vena subcostal|Veia subcostal', 'Vena torácica interna (mamaria interna)|Veia torácica interna', 'Vena musculofrénica|Veia musculofrênica'] },
          { t: 'Ramas de la aorta abdominal', items: ['Tronco celíaco|Tronco celíaco', 'Arteria gástrica izquierda|Artéria gástrica esquerda', 'esp', 'Arteria hepática común|Artéria hepática comum', 'ams', 'Arteria renal derecha|Artéria renal direita', 'Arteria ovárica derecha|Artéria ovárica direita', 'ami', 'Arteria ilíaca común derecha|Artéria ilíaca comum direita'] },
          { t: 'Vascularización del hígado y la vesícula', items: ['Arteria hepática propia|Artéria hepática própria', 'Arteria hepática derecha|Ramo direito da artéria hepática própria', 'Arteria hepática izquierda|Ramo esquerdo da artéria hepática própria', 'Arteria cística|Artéria cística', 'Vena hepática derecha|Veia hepática direita', 'Vena hepática intermedia|Veia hepática intermédia', 'Vena hepática izquierda|Veia hepática esquerda'] }
        ] },
        { name: 'Abdomen y pelvis', pt: 'Abdome e pelve', views: [
          { t: 'Arterias del estómago y del páncreas', items: ['esp', 'Arteria gastroduodenal|Artéria gastroduodenal', 'Arteria gástrica derecha|Artéria gástrica direita', 'Arteria gastroepiploica derecha|Artéria gastromental direita', 'Arteria pancreaticoduodenal anterosuperior|Artéria pancreaticoduodenal superior anterior', 'Arteria pancreaticoduodenal anteroinferior|Ramo anterior da pancreaticoduodenal inferior', 'Arteria pancreática dorsal|Artéria pancreática dorsal', 'Arteria pancreática inferior|Artéria pancreática inferior'] },
          { t: 'Venas del estómago y del páncreas', items: ['porta', 'vms', 'Vena gástrica derecha|Veia gástrica direita', 'Vena gastroepiploica izquierda|Veia gastromental esquerda', 'Vena prepilórica|Veia pré-pilórica', 'Vena pancreaticoduodenal anterosuperior|Veia pancreaticoduodenal superior anterior', 'Vena pancreaticoduodenal posterosuperior|Veia pancreaticoduodenal superior posterior', 'Vena pancreaticoduodenal anteroinferior|Veia pancreaticoduodenal inferior anterior'] },
          { t: 'Ramas de la mesentérica superior', items: ['ams', 'Arterias yeyunales e ileales|Artérias jejunais e ileais', 'Arterias rectas|Artérias retas', 'Arteria cólica media|Artéria cólica média', 'Arteria cólica derecha|Artéria cólica direita', 'Arteria ileocólica|Artéria ileocólica', 'Arteria apendicular|Artéria apendicular', 'Arteria marginal|Artéria marginal do colo'] },
          { t: 'Ramas de la mesentérica inferior', items: ['ami', 'Arteria cólica izquierda|Artéria cólica esquerda', 'Arterias sigmoideas|Artérias sigmóideas', 'Arteria rectal superior|Artéria retal superior'] },
          { t: 'Sistema porta hepático', items: ['porta', 'vms', 'Vena mesentérica inferior|Veia mesentérica inferior', 'Vena esplénica|Veia esplênica'] },
          { t: 'Arterias del sistema urinario', side: 'izq', items: ['Arteria renal|Artéria renal', 'Rama ureteral de la arteria renal|Ramo ureteral da artéria renal', 'aii', 'avs', 'Arteria vesical inferior|Artéria vesical inferior'] },
          { t: 'Venas del sistema urinario', side: 'izq', items: ['Vena renal|Veia renal', 'vic', 'vii', 'vvs', 'Vena vesical inferior|Veia vesical inferior'] },
          { t: 'Arterias del sistema reproductor femenino', items: ['Arteria ovárica|Artéria ovárica', 'Arteria uterina|Artéria uterina', 'Arteria vaginal|Artéria vaginal', 'aii', 'avs', 'Arteria pudenda interna|Artéria pudenda interna', 'Arteria perineal|Artéria perineal', 'Arteria del bulbo del vestíbulo|Artéria do bulbo do vestíbulo', 'Arteria labial posterior|Ramos labiais posteriores', 'Arteria dorsal del clítoris|Artéria dorsal do clitóris', 'Arteria profunda del clítoris|Artéria profunda do clitóris', 'Arteria pudenda externa superficial|Artéria pudenda externa superficial', 'Arteria pudenda externa profunda|Artéria pudenda externa profunda'] },
          { t: 'Venas del sistema reproductor femenino', items: ['Vena ovárica|Veia ovárica', 'Plexo venoso uterino|Plexo venoso uterino', 'Vena uterina|Veias uterinas', 'Vena vaginal|Veia vaginal', 'Plexo venoso vaginal|Plexo venoso vaginal', 'Plexo venoso vesical|Plexo venoso vesical', 'Plexo venoso rectal|Plexo venoso retal', 'Vena pudenda interna|Veia pudenda interna', 'vvs', 'Vena profunda del clítoris|Veia profunda do clitóris', 'Vena labial posterior|Veias labiais posteriores'] }
        ] },
        { name: 'Miembro inferior', pt: 'Membro inferior', views: [
          { t: 'Arterias de la cadera', side: 'izq', items: ['Aorta descendente|Aorta descendente', 'aic', 'Arteria sacra media|Artéria sacral mediana', 'Arteria sacra lateral|Artéria sacral lateral', 'aii', 'Arteria iliolumbar|Artéria iliolombar', 'aie', 'Arteria circunfleja ilíaca profunda|Artéria circunflexa ilíaca profunda', 'Arteria circunfleja ilíaca superficial|Artéria circunflexa ilíaca superficial', 'fem'] },
          { t: 'Venas de la cadera', side: 'izq', items: ['vci', 'vic', 'Vena sacra media|Veia sacral mediana', 'Vena sacra lateral|Veias sacrais laterais', 'vii', 'Vena iliolumbar|Veia iliolombar', 'Vena glútea superior|Veias glúteas superiores', 'Vena glútea inferior|Veias glúteas inferiores', 'vie'] },
          { t: 'Arterias del miembro inferior', side: 'izq', items: ['aic', 'aie', 'fem', 'Arteria poplítea|Artéria poplítea', 'Arteria tibial anterior|Artéria tibial anterior', 'atp', 'Arteria peronea|Artéria fibular', 'dpie'] },
          { t: 'Venas del miembro inferior', side: 'izq', items: ['vie', 'Vena femoral|Veia femoral', 'Vena safena mayor|Veia safena magna', 'Vena safena menor|Veia safena parva', 'Vena poplítea|Veia poplítea', 'Venas tibiales anteriores|Veias tibiais anteriores', 'Venas tibiales posteriores|Veias tibiais posteriores', 'Venas peroneas|Veias fibulares'] },
          { t: 'Arterias dorsales del pie', side: 'izq', items: ['dpie', 'Arteria maleolar anterior medial|Artéria maleolar anterior medial', 'Arteria maleolar anterior lateral|Artéria maleolar anterior lateral', 'Arteria tarsiana medial|Artérias tarsais mediais', 'Arteria tarsiana lateral|Artéria tarsal lateral', 'Arteria arqueada|Artéria arqueada', 'Primera arteria metatarsiana dorsal|Primeira artéria metatarsal dorsal', 'Arterias metatarsianas dorsales|Artérias metatarsais dorsais', 'Arterias digitales dorsales del pie|Artérias digitais dorsais do pé'] },
          { t: 'Arterias plantares del pie', side: 'izq', items: ['atp', 'Arteria plantar medial|Artéria plantar medial', 'Arteria plantar lateral|Artéria plantar lateral', 'Arco plantar|Arco plantar profundo', 'Arteria plantar profunda|Artéria plantar profunda', 'Arterias metatarsianas plantares|Artérias metatarsais plantares', 'Arterias digitales plantares comunes|Artérias digitais plantares comuns', 'Arterias digitales plantares propias|Artérias digitais plantares próprias', 'Ramas calcáneas mediales|Ramos calcâneos mediais', 'Ramas calcáneas laterales|Ramos calcâneos laterais', 'Ramas maleolares posteromediales|Ramos maleolares mediais', 'Ramas maleolares posterolaterales|Ramos maleolares laterais'] },
          { t: 'Venas dorsales del pie', side: 'izq', items: ['Arco venoso dorsal del pie|Arco venoso dorsal do pé', 'Venas metatarsianas dorsales|Veias metatarsais dorsais', 'Venas digitales dorsales del pie|Veias digitais dorsais do pé'] },
          { t: 'Venas plantares del pie', side: 'izq', items: ['Arco venoso plantar|Arco venoso plantar', 'Vena plantar medial|Veias plantares mediais', 'Vena plantar lateral|Veias plantares laterais', 'Venas metatarsianas plantares|Veias metatarsais plantares', 'Venas digitales plantares|Veias digitais plantares'] }
        ] }
      ]
    },
    {
      id: 'sk', img: 'sk', color: 'var(--muted)', name: 'Esquelético', pt: 'Sistema esquelético',
      surg: [
        'Fractura del cuello del fémur: riesgo de necrosis avascular de la cabeza femoral, que se irriga sobre todo por las arterias circunflejas femorales.',
        'Fractura del escafoides (dolor en la tabaquera anatómica): riesgo de necrosis del polo proximal y seudoartrosis.',
        'Punción lumbar entre L3–L4 o L4–L5: la línea que une las crestas ilíacas (línea de Tuffier) cruza L4.',
        'Esguince de tobillo por inversión: el ligamento talofibular anterior es el primero en romperse.'
      ],
      rev: [
        'Tríada de O’Donoghue: ligamento cruzado anterior, colateral medial y menisco medial. El LCA se explora con las pruebas de Lachman y del cajón anterior.',
        'Luxación anterior del hombro: el nervio axilar es el más expuesto.',
        'El semilunar es el hueso del carpo que más se luxa y puede comprimir el nervio mediano.',
        'C7 es la vértebra prominente; el ángulo esternal (de Louis) marca la 2.ª costilla y el nivel T4–T5.'
      ],
      groups: [
        { name: 'Cabeza y cuello', pt: 'Cabeça e pescoço', views: [
          { t: 'Huesos craneales y huesos faciales', items: ['Huesos del neurocráneo|Ossos do neurocrânio', 'Huesos de la cara|Ossos da face'] },
          { t: 'Huesos del cráneo', items: ['Hueso frontal|Osso frontal', 'Hueso parietal|Osso parietal', 'Hueso temporal|Osso temporal', 'Hueso occipital|Osso occipital', 'Hueso esfenoides|Osso esfenoide', 'Hueso etmoides|Osso etmoide'] },
          { t: 'Huesos de la cara', items: ['Hueso nasal|Osso nasal', 'Maxilar|Maxila', 'Cornete nasal inferior|Concha nasal inferior', 'Hueso lagrimal|Osso lacrimal', 'Hueso cigomático|Osso zigomático', 'Vómer|Vômer', 'Mandíbula|Mandíbula'] },
          { t: 'Hueso hioides', items: ['Hueso hioides|Osso hioide', 'Ligamento estilohioideo|Ligamento estilo-hióideo', 'Membrana tirohioidea|Membrana tíreo-hióidea', 'Cartílago tiroides|Cartilagem tireóidea', 'Cartílago cricoides|Cartilagem cricóidea'] },
          { t: 'Arco dental maxilar', side: 'izq', items: ['Incisivo central superior|Incisivo central superior', 'Incisivo lateral superior|Incisivo lateral superior', 'Canino superior|Canino superior', 'Primer premolar superior|Primeiro pré-molar superior', 'Segundo premolar superior|Segundo pré-molar superior', 'Primer molar superior|Primeiro molar superior', 'Segundo molar superior|Segundo molar superior', 'Tercer molar superior|Terceiro molar superior'] },
          { t: 'Arco dental mandibular', side: 'izq', items: ['Incisivo central inferior|Incisivo central inferior', 'Incisivo lateral inferior|Incisivo lateral inferior', 'Canino inferior|Canino inferior', 'Primer premolar inferior|Primeiro pré-molar inferior', 'Segundo premolar inferior|Segundo pré-molar inferior', 'Primer molar inferior|Primeiro molar inferior', 'Segundo molar inferior|Segundo molar inferior', 'Tercer molar inferior|Terceiro molar inferior'] },
          { t: 'Articulación temporomandibular', side: 'izq', items: ['Disco articular de la ATM|Disco articular da ATM', 'Cápsula de la ATM|Cápsula da ATM', 'Ligamento temporomandibular (lateral)|Ligamento lateral da ATM', 'Ligamento esfenomandibular|Ligamento esfenomandibular', 'Ligamento estilomandibular|Ligamento estilomandibular'] },
          { t: 'Huesos y cartílagos de la nariz', items: ['Hueso nasal|Osso nasal', 'Cartílago septal|Cartilagem do septo nasal', 'Cartílago lateral (proceso lateral del septal)|Processo lateral da cartilagem do septo', 'Cartílago alar mayor|Cartilagem alar maior', 'Cartílagos alares menores|Cartilagens alares menores', 'Cartílagos nasales accesorios|Cartilagens nasais acessórias', 'Tejido fibroadiposo del ala|Tecido fibroadiposo da asa do nariz'] },
          { t: 'Esqueleto de la laringe', items: ['Hueso hioides|Osso hioide', 'Membrana tirohioidea|Membrana tíreo-hióidea', 'Cartílago tiroides|Cartilagem tireóidea', 'Cartílago aritenoides|Cartilagem aritenóidea', 'Ligamento cricotiroideo medio|Ligamento cricotireóideo mediano', 'Ligamento cricotiroideo lateral|Ligamento cricotireóideo lateral'] },
          { t: 'Oído externo', side: 'der', items: ['Cartílago de la oreja|Cartilagem da orelha', 'Meato acústico externo|Meato acústico externo', 'Membrana timpánica|Membrana timpânica'] },
          { t: 'Oído medio', items: ['Martillo|Martelo', 'Yunque|Bigorna', 'Cavidad timpánica|Cavidade timpânica', 'Membrana timpánica|Membrana timpânica'] },
          { t: 'Oído interno', side: 'der', items: ['Conductos semicirculares|Canais semicirculares', 'Vestíbulo|Vestíbulo', 'Cóclea|Cóclea', 'Trompa auditiva (de Eustaquio)|Tuba auditiva', 'Cartílago de la trompa auditiva|Cartilagem da tuba auditiva'] }
        ] },
        { name: 'Columna vertebral', pt: 'Coluna vertebral', views: [
          { t: 'Regiones de la columna', items: ['Vértebras cervicales|Vértebras cervicais', 'Vértebras torácicas|Vértebras torácicas', 'Vértebras lumbares|Vértebras lombares', 'Sacro|Sacro', 'Cóccix|Cóccix'] },
          { t: 'Columna cervical', items: ['Atlas (C1)|Atlas (C1)', 'Vértebra prominente (C7)|Vértebra proeminente (C7)'] },
          { t: 'Columna torácica', items: ['Primera vértebra torácica (T1)|Primeira vértebra torácica (T1)', 'Duodécima vértebra torácica (T12)|Décima segunda vértebra torácica (T12)'] },
          { t: 'Columna lumbar', items: ['Primera vértebra lumbar (L1)|Primeira vértebra lombar (L1)', 'Quinta vértebra lumbar (L5)|Quinta vértebra lombar (L5)'] },
          { t: 'Sacro y cóccix', items: ['Sacro|Sacro', 'Cóccix|Cóccix'] },
          { t: 'Ligamentos de la columna', items: ['Ligamento longitudinal anterior|Ligamento longitudinal anterior', 'Ligamento longitudinal posterior|Ligamento longitudinal posterior', 'Ligamento amarillo|Ligamento amarelo', 'Ligamentos interespinosos|Ligamentos interespinais', 'Ligamento supraespinoso|Ligamento supraespinal', 'Ligamento nucal|Ligamento nucal'] }
        ] },
        { name: 'Caja torácica', pt: 'Caixa torácica', views: [
          { t: 'Costillas y esternón', items: ['Manubrio del esternón|Manúbrio do esterno', 'Apófisis xifoides|Processo xifoide', 'Costillas verdaderas (1.ª–7.ª)|Costelas verdadeiras', 'Costillas flotantes (11.ª–12.ª)|Costelas flutuantes'] },
          { t: 'Articulaciones de las costillas', items: ['Clavícula|Clavícula', 'Articulación esternoclavicular|Articulação esternoclavicular', 'Ligamento esternoclavicular anterior|Ligamento esternoclavicular anterior', 'Ligamento interclavicular|Ligamento interclavicular', 'Articulación manubrioesternal|Sínfise manubriesternal', 'Articulación xifoesternal|Sínfise xifosternal', 'Articulaciones esternocostales|Articulações esternocostais', 'Ligamentos esternocostales radiados|Ligamentos esternocostais radiados', 'Cartílago costal|Cartilagem costal', 'Articulaciones intercondrales|Articulações intercondrais'] },
          { t: 'Articulaciones costovertebrales', items: ['Articulación costotransversa|Articulação costotransversária', 'Articulación de la cabeza de la costilla (costovertebral)|Articulação da cabeça da costela'] }
        ] },
        { name: 'Miembro superior', pt: 'Membro superior', views: [
          { t: 'Cintura escapular', side: 'der', items: ['Escápula|Escápula', 'Clavícula|Clavícula', 'Ligamento acromioclavicular|Ligamento acromioclavicular', 'Ligamento coracoclavicular (trapezoide y conoide)|Ligamento coracoclavicular (trapezoide e conoide)', 'Ligamento coracoacromial|Ligamento coracoacromial', 'Ligamento transverso superior de la escápula|Ligamento transverso superior da escápula'] },
          { t: 'Articulación acromioclavicular', items: ['Articulación acromioclavicular|Articulação acromioclavicular'] },
          { t: 'Articulación glenohumeral', side: 'der', items: ['Húmero|Úmero', 'Escápula|Escápula', 'Ligamento coracohumeral|Ligamento coracoumeral', 'Ligamento glenohumeral superior|Ligamento glenoumeral superior', 'Ligamento glenohumeral medio|Ligamento glenoumeral médio', 'Ligamento glenohumeral inferior|Ligamento glenoumeral inferior', 'Ligamento humeral transverso|Ligamento transverso do úmero'] },
          { t: 'Articulación del codo', side: 'izq', items: ['Húmero|Úmero', 'Cúbito|Ulna', 'Radio|Rádio', 'Ligamento colateral cubital|Ligamento colateral ulnar', 'Ligamento colateral radial|Ligamento colateral radial'] },
          { t: 'Articulación radiocubital proximal', side: 'izq', items: ['Ligamento anular del radio|Ligamento anular do rádio', 'Ligamento cuadrado|Ligamento quadrado', 'Membrana interósea del antebrazo|Membrana interóssea do antebraço'] },
          { t: 'Huesos del carpo', side: 'izq', items: ['Escafoides|Escafoide', 'Semilunar|Semilunar', 'Piramidal|Piramidal', 'Pisiforme|Pisiforme', 'Trapecio|Trapézio', 'Trapezoide|Trapezoide', 'Grande|Capitato', 'Ganchoso|Hamato'] },
          { t: 'Metacarpianos', side: 'izq', items: ['Primer metacarpiano|Primeiro metacarpal', 'Quinto metacarpiano|Quinto metacarpal'] },
          { t: 'Falanges de la mano', side: 'izq', items: ['Falange proximal del pulgar|Falange proximal do polegar', 'Falange distal del pulgar|Falange distal do polegar', 'Falange proximal del 2.º dedo|Falange proximal do 2.º dedo', 'Falange media del 2.º dedo|Falange média do 2.º dedo', 'Falange distal del 2.º dedo|Falange distal do 2.º dedo'] }
        ] },
        { name: 'Miembro inferior', pt: 'Membro inferior', views: [
          { t: 'Cintura pélvica y articulaciones', items: ['Ilion|Ílio', 'Isquion|Ísquio', 'Pubis|Púbis', 'Sacro|Sacro', 'Cóccix|Cóccix', 'Articulación sacroilíaca|Articulação sacroilíaca', 'Ligamentos sacroilíacos anteriores|Ligamentos sacroilíacos anteriores', 'Ligamentos sacroilíacos posteriores|Ligamentos sacroilíacos posteriores', 'Ligamento de la sínfisis púbica|Ligamento da sínfise púbica'] },
          { t: 'Ligamentos de la cadera', side: 'der', items: ['Ligamento iliofemoral|Ligamento iliofemoral', 'Ligamento pubofemoral|Ligamento pubofemoral', 'Ligamento isquiofemoral|Ligamento isquiofemoral', 'Ligamento transverso del acetábulo|Ligamento transverso do acetábulo'] },
          { t: 'Huesos de la rodilla', side: 'der', items: ['Fémur|Fêmur', 'Rótula|Patela', 'Tibia|Tíbia', 'Peroné|Fíbula'] },
          { t: 'Articulaciones de la rodilla', side: 'der', items: ['Articulación femorotibial|Articulação femorotibial', 'Articulación femororrotuliana|Articulação femoropatelar', 'Articulación tibioperonea superior|Articulação tibiofibular'] },
          { t: 'Meniscos y ligamentos cruzados', side: 'der', items: ['Menisco medial|Menisco medial', 'Menisco lateral|Menisco lateral', 'Ligamento cruzado anterior|Ligamento cruzado anterior', 'Ligamento cruzado posterior|Ligamento cruzado posterior', 'Ligamento meniscofemoral posterior|Ligamento meniscofemoral posterior'] },
          { t: 'Otros ligamentos de la rodilla', side: 'der', items: ['Ligamento rotuliano|Ligamento da patela', 'Ligamento colateral medial (tibial)|Ligamento colateral tibial', 'Ligamento colateral lateral (peroneo)|Ligamento colateral fibular', 'Retináculo rotuliano medial|Retináculo medial da patela', 'Retináculo rotuliano lateral|Retináculo lateral da patela', 'Ligamento anterior de la cabeza del peroné|Ligamento anterior da cabeça da fíbula', 'Ligamento posterior de la cabeza del peroné|Ligamento posterior da cabeça da fíbula'] },
          { t: 'Cápsula y bolsas de la rodilla', side: 'der', items: ['Cápsula articular de la rodilla|Cápsula articular do joelho'] },
          { t: 'Huesos del tarso', side: 'der', items: ['Astrágalo|Tálus', 'Calcáneo|Calcâneo', 'Navicular|Navicular', 'Cuboides|Cuboide', 'Cuneiforme medial|Cuneiforme medial', 'Cuneiforme intermedio|Cuneiforme intermédio', 'Cuneiforme lateral|Cuneiforme lateral', 'Huesos sesamoideos del pie|Ossos sesamoides do pé'] },
          { t: 'Metatarsianos', side: 'der', items: ['Primer metatarsiano|Primeiro metatarsal', 'Quinto metatarsiano|Quinto metatarsal'] },
          { t: 'Falanges del pie', side: 'der', items: ['Falange proximal del dedo gordo|Falange proximal do hálux', 'Falange distal del dedo gordo|Falange distal do hálux', 'Falange proximal del 5.º dedo|Falange proximal do 5.º dedo', 'Falange distal del 5.º dedo|Falange distal do 5.º dedo'] },
          { t: 'Retináculos del tobillo', side: 'der', items: ['Retináculo de los flexores|Retináculo dos músculos flexores', 'Retináculo superior de los extensores|Retináculo superior dos músculos extensores', 'Retináculo inferior de los extensores|Retináculo inferior dos músculos extensores'] },
          { t: 'Articulación del tobillo (talocrural)', side: 'der', items: ['Ligamento talofibular anterior|Ligamento talofibular anterior', 'Ligamento talofibular posterior|Ligamento talofibular posterior', 'Ligamento calcaneofibular|Ligamento calcaneofibular', 'Ligamento deltoideo: porción tibiotalar anterior|Ligamento colateral medial: parte tibiotalar anterior', 'Ligamento deltoideo: porción tibiotalar posterior|Ligamento colateral medial: parte tibiotalar posterior', 'Ligamento deltoideo: porción tibiocalcánea|Ligamento colateral medial: parte tibiocalcânea', 'Ligamento deltoideo: porción tibionavicular|Ligamento colateral medial: parte tibionavicular'] },
          { t: 'Otros ligamentos del pie, vista anterior', side: 'der', items: ['Ligamento talofibular anterior|Ligamento talofibular anterior', 'Ligamento talocalcáneo interóseo|Ligamento talocalcâneo interósseo', 'Ligamento bifurcado (calcaneonavicular y calcaneocuboideo)|Ligamento bifurcado', 'Ligamento calcaneocuboideo dorsal|Ligamento calcaneocubóideo dorsal', 'Ligamento talonavicular dorsal|Ligamento talonavicular', 'Ligamento cuboideonavicular dorsal|Ligamento cuboideonavicular dorsal', 'Ligamentos cuneonaviculares dorsales|Ligamentos cuneonaviculares dorsais', 'Ligamento cuneonavicular plantar|Ligamento cuneonavicular plantar'] },
          { t: 'Otros ligamentos del pie, vista posterior', side: 'der', items: ['Ligamento talofibular posterior|Ligamento talofibular posterior', 'Ligamento talocalcáneo posterior|Ligamento talocalcâneo posterior', 'Ligamento talocalcáneo medial|Ligamento talocalcâneo medial', 'Ligamento talocalcáneo lateral|Ligamento talocalcâneo lateral', 'Ligamento calcaneonavicular plantar (en resorte)|Ligamento calcaneonavicular plantar', 'Ligamento cuboideonavicular plantar|Ligamento cuboideonavicular plantar', 'Ligamento plantar largo|Ligamento plantar longo', 'Ligamento plantar corto (calcaneocuboideo plantar)|Ligamento calcaneocubóideo plantar'] }
        ] }
      ]
    },
    {
      id: 'ne', img: 'ne', color: 'var(--nerve)', name: 'Nervioso', pt: 'Sistema nervoso',
      surg: [
        'Parotidectomía: el nervio facial se divide dentro de la parótida (pata de ganso); se identifica el tronco antes de resecar.',
        'Hernioplastia inguinal: los nervios ilioinguinal, iliohipogástrico y la rama genital del genitofemoral son la causa del dolor crónico posoperatorio si se atrapan.',
        'Punción lumbar: la médula termina en L1–L2 en el adulto; por debajo solo está la cola de caballo.',
        'Inyección glútea en el cuadrante superolateral para no lesionar el nervio ciático.'
      ],
      rev: [
        'Parálisis del III par: ojo hacia abajo y afuera, ptosis y midriasis (compresiva, por ejemplo aneurisma de la comunicante posterior o herniación uncal).',
        'Parálisis facial periférica: compromete toda la hemicara; la central respeta la frente.',
        'Síndrome de cola de caballo: anestesia en silla de montar, retención urinaria y debilidad de miembros inferiores; es una urgencia quirúrgica.',
        'El dolor de vesícula se refiere al hombro derecho por el nervio frénico (C3–C5): «C3, 4 y 5 mantienen vivo el diafragma».'
      ],
      groups: [
        { name: 'Encéfalo y ojo', pt: 'Encéfalo e olho', views: [
          { t: 'Sistema nervioso central', items: ['Sistema nervioso central|Sistema nervoso central'] },
          { t: 'Sistema nervioso periférico', items: ['Sistema nervioso periférico|Sistema nervoso periférico'] },
          { t: 'Encéfalo', side: 'izq', items: ['Lóbulo frontal|Lobo frontal', 'Lóbulo parietal|Lobo parietal', 'Lóbulo temporal|Lobo temporal', 'Lóbulo occipital|Lobo occipital', 'Puente (protuberancia)|Ponte', 'Bulbo raquídeo|Bulbo (medula oblonga)', 'Cerebelo|Cerebelo', 'Médula espinal|Medula espinal'] },
          { t: 'Ojo: capa externa', side: 'der', items: ['Pupila|Pupila', 'Esclerótica|Esclera', 'Iris|Íris'] },
          { t: 'Ojo: coroides y cámaras', side: 'der', items: ['Cámara anterior|Câmara anterior', 'Cámara posterior|Câmara posterior', 'Coroides|Corioide'] },
          { t: 'Ojo: cristalino y cuerpo ciliar', side: 'der', items: ['Cristalino|Lente (cristalino)', 'Músculo del cuerpo ciliar|Músculo ciliar'] },
          { t: 'Ojo: retina y cuerpo vítreo', side: 'der', items: ['Cuerpo vítreo|Corpo vítreo', 'Retina|Retina'] }
        ] },
        { name: 'Médula espinal', pt: 'Medula espinal', views: [
          { t: 'Médula espinal', items: ['Médula espinal|Medula espinal'] },
          { t: 'Raíces y ganglios espinales', items: ['Raíz posterior (dorsal)|Raiz posterior', 'Ganglio de la raíz posterior|Gânglio sensitivo do nervo espinal', 'Raíz anterior (ventral)|Raiz anterior'] },
          { t: 'Raíces espinales por región', items: ['Raíces cervicales|Raízes cervicais', 'Raíces torácicas|Raízes torácicas', 'Raíces lumbares|Raízes lombares', 'Raíces sacras|Raízes sacrais', 'Cola de caballo|Cauda equina'] }
        ] },
        { name: 'Nervios craneales', pt: 'Nervos cranianos', views: [
          { t: 'Visión general de los nervios craneales', items: ['Nervios craneales|Nervos cranianos'] },
          { t: 'Nervio olfatorio', side: 'der', items: ['Nervio olfatorio (NC I)|Nervo olfatório (NC I)'] },
          { t: 'Nervio óptico', side: 'der', items: ['Nervio óptico (NC II)|Nervo óptico (NC II)'] },
          { t: 'Nervio oculomotor', side: 'der', items: ['Nervio oculomotor (NC III)|Nervo oculomotor (NC III)'] },
          { t: 'Nervio troclear', side: 'der', items: ['Nervio troclear (NC IV)|Nervo troclear (NC IV)'] },
          { t: 'Nervio trigémino', side: 'der', items: ['Nervio trigémino (NC V)|Nervo trigêmeo (NC V)', 'Rama oftálmica (V1)|Nervo oftálmico (V1)', 'Rama maxilar (V2)|Nervo maxilar (V2)', 'Rama mandibular (V3)|Nervo mandibular (V3)'] },
          { t: 'Nervio abducens', side: 'der', items: ['Nervio abducens (NC VI)|Nervo abducente (NC VI)'] },
          { t: 'Nervio facial', side: 'der', items: ['Nervio facial (NC VII)|Nervo facial (NC VII)'] },
          { t: 'Nervio vestibulococlear', items: ['Nervio vestibulococlear (NC VIII)|Nervo vestibulococlear (NC VIII)'] },
          { t: 'Nervio glosofaríngeo', side: 'der', items: ['Nervio glosofaríngeo (NC IX)|Nervo glossofaríngeo (NC IX)'] },
          { t: 'Nervio vago', side: 'der', items: ['Nervio vago (NC X)|Nervo vago (NC X)'] },
          { t: 'Nervio accesorio', side: 'der', items: ['Nervio accesorio (NC XI)|Nervo acessório (NC XI)'] },
          { t: 'Nervio hipogloso', side: 'der', items: ['Nervio hipogloso (NC XII)|Nervo hipoglosso (NC XII)'] },
          { t: 'Los doce pares craneales', items: ['Nervios craneales I a XII|Nervos cranianos I a XII'] }
        ] },
        { name: 'Nervios de la cara', pt: 'Nervos da face', views: [
          { t: 'Nervio trigémino y sus ramas', side: 'der', items: ['Ganglio trigeminal (semilunar)|Gânglio trigeminal', 'Rama oftálmica (V1)|Nervo oftálmico (V1)', 'Nervio frontal (V1)|Nervo frontal (V1)', 'Nervio lagrimal (V1)|Nervo lacrimal (V1)', 'Nervio nasociliar (V1)|Nervo nasociliar (V1)', 'Rama maxilar (V2)|Nervo maxilar (V2)', 'Nervio infraorbitario|Nervo infraorbital', 'Nervios alveolares superiores|Nervos alveolares superiores', 'Rama mandibular (V3)|Nervo mandibular (V3)', 'Nervio auriculotemporal|Nervo auriculotemporal', 'Nervio lingual|Nervo lingual', 'Nervio sublingual|Nervo sublingual', 'Nervio alveolar inferior|Nervo alveolar inferior', 'Cuerda del tímpano|Corda do tímpano'] },
          { t: 'Nervio facial y sus ramas', side: 'der', items: ['Nervio facial (NC VII)|Nervo facial (NC VII)', 'Pata de ganso (plexo intraparotídeo)|Plexo intraparotídeo', 'Rama temporal|Ramos temporais', 'Rama cigomática|Ramos zigomáticos', 'Rama bucal|Ramos bucais', 'Rama marginal de la mandíbula|Ramo marginal da mandíbula', 'Rama cervical|Ramo cervical'] }
        ] },
        { name: 'Plexo braquial', pt: 'Plexo braquial', views: [
          { t: 'Plexo braquial completo', items: ['Plexo braquial|Plexo braquial'] },
          { t: 'Nervios supraclaviculares', side: 'izq', items: ['Nervios supraclaviculares (C3–C4)|Nervos supraclaviculares (C3–C4)'] },
          { t: 'Nervio mediano', side: 'izq', items: ['Nervio mediano|Nervo mediano'] },
          { t: 'Nervio musculocutáneo', side: 'izq', items: ['Nervio musculocutáneo|Nervo musculocutâneo'] },
          { t: 'Nervio cubital', side: 'izq', items: ['Nervio cubital|Nervo ulnar'] },
          { t: 'Nervio radial', side: 'izq', items: ['Nervio radial|Nervo radial'] },
          { t: 'Nervios cutáneos mediales', side: 'izq', items: ['Nervio cutáneo medial del brazo|Nervo cutâneo medial do braço', 'Nervio cutáneo medial del antebrazo|Nervo cutâneo medial do antebraço'] },
          { t: 'Nervios cutáneos posteriores', side: 'izq', items: ['Nervio cutáneo posterior del brazo|Nervo cutâneo posterior do braço', 'Nervio cutáneo posterior del antebrazo|Nervo cutâneo posterior do antebraço'] },
          { t: 'Nervios cutáneos laterales', side: 'izq', items: ['Nervio cutáneo lateral superior del brazo|Nervo cutâneo lateral superior do braço', 'Nervio cutáneo lateral inferior del brazo|Nervo cutâneo lateral inferior do braço'] }
        ] },
        { name: 'Nervios del tórax', pt: 'Nervos do tórax', views: [
          { t: 'Ramas ventral y dorsal de un nervio espinal', items: ['Rama ventral del 3.er nervio intercostal|Ramo anterior do 3.º nervo intercostal', 'Rama dorsal del 3.er nervio torácico|Ramo posterior do 3.º nervo torácico'] },
          { t: 'Tronco simpático', side: 'izq', items: ['Tronco simpático torácico|Tronco simpático torácico'] },
          { t: 'Nervio vago en el mediastino', side: 'izq', items: ['Nervio vago (NC X)|Nervo vago (NC X)'] },
          { t: 'Plexo cardíaco', items: ['Plexo cardíaco|Plexo cardíaco'] },
          { t: 'Pulmones', side: 'izq', items: ['Ramas pulmonares del vago|Ramos pulmonares do vago'] },
          { t: 'Tráquea y bronquios', items: ['Nervio laríngeo superior|Nervo laríngeo superior', 'Nervio laríngeo recurrente izquierdo|Nervo laríngeo recorrente esquerdo', 'Ramas pulmonares derechas del vago|Ramos pulmonares direitos do vago'] },
          { t: 'Nervio frénico', side: 'izq', items: ['Nervio frénico (C3–C5)|Nervo frênico (C3–C5)'] }
        ] },
        { name: 'Plexo lumbar', pt: 'Plexo lombar', views: [
          { t: 'Plexo lumbar completo', items: ['Plexo lumbar|Plexo lombar'] },
          { t: 'Nervio iliohipogástrico', side: 'der', items: ['Nervio iliohipogástrico|Nervo ílio-hipogástrico'] },
          { t: 'Nervio ilioinguinal', side: 'der', items: ['Nervio ilioinguinal|Nervo ilioinguinal'] },
          { t: 'Nervio genitofemoral', side: 'der', items: ['Nervio genitofemoral|Nervo genitofemoral'] },
          { t: 'Nervio cutáneo femoral lateral', side: 'der', items: ['Nervio cutáneo femoral lateral|Nervo cutâneo femoral lateral'] },
          { t: 'Nervio obturador', side: 'der', items: ['Nervio obturador|Nervo obturatório'] },
          { t: 'Nervio femoral', side: 'der', items: ['Nervio femoral|Nervo femoral'] },
          { t: 'Nervio safeno', side: 'der', items: ['Nervio safeno|Nervo safeno'] },
          { t: 'Nervios cluneales superiores', side: 'der', items: ['Nervios cluneales superiores|Nervos clúnios superiores'] }
        ] },
        { name: 'Inervación autónoma', pt: 'Inervação autônoma', views: [
          { t: 'Estómago', items: ['Tronco vagal anterior|Tronco vagal anterior', 'Tronco vagal posterior|Tronco vagal posterior', 'Ramas gástricas anteriores y posteriores|Ramos gástricos anteriores e posteriores', 'Rama celíaca del vago|Ramo celíaco do vago', 'Plexo y ganglios celíacos|Plexo e gânglios celíacos', 'Nervio esplácnico mayor|Nervo esplâncnico maior', 'Nervio esplácnico menor|Nervo esplâncnico menor'] },
          { t: 'Intestinos', items: ['Nervios esplácnicos lumbares|Nervos esplâncnicos lombares', 'Ganglio y plexo mesentérico superior|Gânglio e plexo mesentérico superior', 'Ganglio y plexo mesentérico inferior|Gânglio e plexo mesentérico inferior', 'Plexo hipogástrico inferior|Plexo hipogástrico inferior', 'Plexo rectal|Plexo retal'] },
          { t: 'Hígado y vesícula', items: ['Plexo hepático|Plexo hepático', 'Rama hepática del vago|Ramo hepático do vago'] },
          { t: 'Páncreas y bazo', items: ['Plexo esplénico|Plexo esplênico'] },
          { t: 'Sistema urinario', items: ['Plexo renal y suprarrenal|Plexo renal e suprarrenal', 'Rama renal del vago|Ramo renal do vago', 'Ganglios aorticorrenales|Gânglios aorticorrenais', 'Plexo hipogástrico superior|Plexo hipogástrico superior', 'Nervios hipogástricos|Nervos hipogástricos', 'Plexo hipogástrico inferior|Plexo hipogástrico inferior', 'Nervios esplácnicos pélvicos|Nervos esplâncnicos pélvicos'] },
          { t: 'Sistema reproductor', items: ['Plexo ovárico|Plexo ovárico', 'Plexo uterovaginal|Plexo uterovaginal', 'Ganglios lumbares y sacros del simpático|Gânglios lombares e sacrais', 'Nervio pudendo|Nervo pudendo', 'Nervio perineal|Nervos perineais', 'Nervio dorsal del clítoris|Nervo dorsal do clitóris', 'Nervios labiales anteriores y posteriores|Nervos labiais anteriores e posteriores', 'Nervio del elevador del ano|Nervo do levantador do ânus', 'Nervio ilioinguinal|Nervo ilioinguinal', 'Nervio genitofemoral|Nervo genitofemoral'] }
        ] },
        { name: 'Plexo sacro y miembro inferior', pt: 'Plexo sacral e membro inferior', views: [
          { t: 'Plexo sacro completo', items: ['Plexo sacro|Plexo sacral'] },
          { t: 'Nervio glúteo superior', side: 'izq', items: ['Nervio glúteo superior|Nervo glúteo superior'] },
          { t: 'Nervio glúteo inferior', side: 'izq', items: ['Nervio glúteo inferior|Nervo glúteo inferior'] },
          { t: 'Nervio cutáneo femoral posterior', side: 'izq', items: ['Nervio cutáneo femoral posterior|Nervo cutâneo femoral posterior'] },
          { t: 'Nervio del piriforme', side: 'izq', items: ['Nervio del músculo piriforme|Nervo do músculo piriforme'] },
          { t: 'Nervio del obturador interno', side: 'izq', items: ['Nervio del obturador interno|Nervo do músculo obturador interno'] },
          { t: 'Nervio del cuadrado femoral', side: 'izq', items: ['Nervio del cuadrado femoral|Nervo do músculo quadrado femoral'] },
          { t: 'Nervio ciático', side: 'izq', items: ['Nervio ciático|Nervo isquiático'] },
          { t: 'Nervio peroneo común', side: 'izq', items: ['Nervio peroneo común|Nervo fibular comum'] },
          { t: 'Nervio tibial', side: 'izq', items: ['Nervio tibial|Nervo tibial'] },
          { t: 'Nervio coccígeo', side: 'izq', items: ['Nervio coccígeo|Nervo coccígeo'] },
          { t: 'Nervios peroneos superficial y profundo', side: 'izq', items: ['Nervio peroneo superficial|Nervo fibular superficial', 'Nervio peroneo profundo|Nervo fibular profundo'] },
          { t: 'Nervio sural', side: 'izq', items: ['Nervio sural|Nervo sural'] },
          { t: 'Nervio obturador y sus ramas', side: 'izq', items: ['Nervio obturador|Nervo obturatório', 'Rama articular para la cadera|Ramo articular para o quadril', 'Rama anterior|Ramo anterior', 'Rama posterior|Ramo posterior'] },
          { t: 'Nervio femoral y sus ramas', side: 'izq', items: ['Nervio femoral|Nervo femoral', 'Rama articular|Ramo articular', 'Ramas cutáneas anteriores|Ramos cutâneos anteriores', 'Nervio del vasto medial|Nervo do vasto medial'] },
          { t: 'Nervios glúteos superior e inferior', side: 'izq', items: ['Nervio glúteo superior|Nervo glúteo superior', 'Nervio glúteo inferior|Nervo glúteo inferior'] },
          { t: 'Nervios del pie', side: 'izq', items: ['Nervio plantar medial|Nervo plantar medial', 'Nervio plantar lateral|Nervo plantar lateral', 'Ramas calcáneas mediales del tibial|Ramos calcâneos mediais', 'Ramas calcáneas laterales del tibial|Ramos calcâneos laterais', 'Nervio del abductor del meñique|Nervo do abdutor do dedo mínimo', 'Nervios digitales plantares|Nervos digitais plantares', 'Ramas digitales dorsales del peroneo superficial|Nervos digitais dorsais do fibular superficial', 'Rama digital dorsal del peroneo profundo|Nervo digital dorsal do fibular profundo'] }
        ] },
        { name: 'Cerebro', pt: 'Cérebro', views: [
          { t: 'Visión general', items: ['Corteza cerebral|Córtex cerebral', 'Cerebelo|Cerebelo', 'Tronco encefálico|Tronco encefálico'] },
          { t: 'Lóbulos', side: 'izq', items: ['Lóbulo frontal|Lobo frontal', 'Lóbulo parietal|Lobo parietal', 'Lóbulo temporal|Lobo temporal', 'Lóbulo occipital|Lobo occipital'] },
          { t: 'Giros y surcos', items: ['Surco central (de Rolando)|Sulco central', 'Giro precentral|Giro pré-central', 'Surco precentral|Sulco pré-central', 'Surco poscentral|Sulco pós-central', 'Giro frontal superior|Giro frontal superior', 'Giro frontal medio|Giro frontal médio', 'Giro frontal inferior|Giro frontal inferior', 'Fisura lateral (de Silvio)|Sulco lateral', 'Giro temporal superior|Giro temporal superior', 'Giro temporal medio|Giro temporal médio', 'Giro temporal inferior|Giro temporal inferior', 'Surco intraparietal|Sulco intraparietal', 'Giro supramarginal|Giro supramarginal', 'Giro angular|Giro angular'] },
          { t: 'Tronco encefálico', items: ['Mesencéfalo|Mesencéfalo', 'Puente (protuberancia)|Ponte', 'Bulbo raquídeo|Bulbo (medula oblonga)'] },
          { t: 'Tálamo e hipotálamo', items: ['Tálamo|Tálamo', 'Hipotálamo|Hipotálamo'] },
          { t: 'Sistema ventricular', items: ['Ventrículo lateral|Ventrículo lateral', 'Tercer ventrículo|Terceiro ventrículo', 'Acueducto cerebral (de Silvio)|Aqueduto do mesencéfalo', 'Cuarto ventrículo|Quarto ventrículo'] },
          { t: 'Quiasma óptico y estructuras vecinas', items: ['Quiasma óptico|Quiasma óptico', 'Cuerpo mamilar|Corpo mamilar', 'Fórnix|Fórnice'] },
          { t: 'Estructuras internas (1)', side: 'izq', items: ['Núcleo caudado|Núcleo caudado', 'Cápsula interna|Cápsula interna', 'Amígdala|Corpo amigdaloide', 'Hipocampo|Hipocampo', 'Cuerpo calloso|Corpo caloso', 'Giro cingulado|Giro do cíngulo'] },
          { t: 'Estructuras internas (2)', side: 'izq', items: ['Núcleo accumbens|Núcleo accumbens', 'Comisura anterior|Comissura anterior', 'Claustro|Claustro', 'Putamen|Putame', 'Globo pálido|Globo pálido'] }
        ] }
      ]
    },
    {
      id: 'mu', img: 'mu', color: 'var(--artery)', name: 'Muscular', pt: 'Sistema muscular',
      surg: [
        'Inyección intramuscular glútea en el cuadrante superolateral, para no lesionar el nervio ciático.',
        'Mastectomía y vaciamiento axilar: proteger el nervio torácico largo; su lesión paraliza el serrato anterior y produce escápula alada.',
        'Síndrome compartimental de la pierna: la fasciotomía descomprime los cuatro compartimentos; el anterior contiene al tibial anterior.',
        'Manguito rotador: el supraespinoso es el tendón que más se rompe (prueba de Jobe).'
      ],
      rev: [
        'Lesión del nervio peroneo común en el cuello del peroné: pie caído y marcha en estepaje (dorsiflexores paralizados).',
        'Signo de Trendelenburg: lesión del nervio glúteo superior (glúteo medio y mínimo).',
        'Parálisis facial periférica (VII par) afecta toda la hemicara, incluida la frente; la central respeta la frente.',
        'Músculos accesorios de la inspiración: esternocleidomastoideo, escalenos y pectoral menor; el diafragma es el principal.'
      ],
      groups: [
        { name: 'Cabeza y cuello', pt: 'Cabeça e pescoço', views: [
          { t: 'Expresión facial, vista anterior', items: ['occ', 'proc', 'Corrugador superciliar|Corrugador do supercílio', 'oro', 'Elevador del párpado superior|Levantador da pálpebra superior', 'Nasal|Nasal', 'els', 'eab', 'cma', 'cme', 'orb', 'bucc', 'dab', 'dli', 'ment', 'plat'] },
          { t: 'Expresión facial, vista lateral', side: 'der', items: ['occ', 'oro', 'els', 'eab', 'cma', 'cme', 'orb', 'bucc', 'dab', 'dli', 'ment', 'plat'] },
          { t: 'Músculos extrínsecos del ojo', side: 'der', items: ['Recto superior|Reto superior', 'Recto inferior|Reto inferior', 'Recto medial|Reto medial', 'Recto lateral|Reto lateral', 'Oblicuo superior|Oblíquo superior', 'Oblicuo inferior|Oblíquo inferior'] },
          { t: 'Masticación', items: ['Temporal|Temporal', 'Masetero|Masseter', 'Pterigoideo medial|Pterigóideo medial', 'Pterigoideo lateral|Pterigóideo lateral'] },
          { t: 'Movimiento de la lengua', items: ['Geniogloso|Genioglosso', 'Hiogloso|Hioglosso', 'Estilogloso|Estiloglosso', 'Palatogloso|Palatoglosso', 'Lengua|Língua'] },
          { t: 'Faringe', items: ['Constrictor superior de la faringe|Constritor superior da faringe', 'Constrictor medio de la faringe|Constritor médio da faringe', 'Constrictor inferior de la faringe|Constritor inferior da faringe', 'Estilofaríngeo|Estilofaríngeo', 'Palatofaríngeo|Palatofaríngeo', 'Salpingofaríngeo|Salpingofaríngeo'] },
          { t: 'Suprahioideos', items: ['Digástrico|Digástrico', 'Estilohioideo|Estilo-hióideo', 'Milohioideo|Milo-hióideo', 'Geniohioideo|Gênio-hióideo'] },
          { t: 'Infrahioideos', items: ['Esternohioideo|Esterno-hióideo', 'Omohioideo|Omo-hióideo', 'Esternotiroideo|Esternotireóideo', 'Tirohioideo|Tíreo-hióideo', 'Cricotiroideo|Cricotireóideo'] },
          { t: 'Cuello anterior', items: ['esc', 'ean', 'eme', 'epo', 'Largo de la cabeza|Longo da cabeça', 'Largo del cuello|Longo do pescoço'] },
          { t: 'Cuello posterior', items: ['Esplenio de la cabeza|Esplênio da cabeça', 'Esplenio del cuello|Esplênio do pescoço', 'Semiespinoso de la cabeza|Semiespinal da cabeça', 'lcap', 'Elevador de la escápula|Levantador da escápula', 'Recto posterior mayor de la cabeza|Reto posterior maior da cabeça', 'Recto posterior menor de la cabeza|Reto posterior menor da cabeça', 'Oblicuo superior de la cabeza|Oblíquo superior da cabeça', 'Oblicuo inferior de la cabeza|Oblíquo inferior da cabeça'] }
        ] },
        { name: 'Tronco', pt: 'Tronco', views: [
          { t: 'Tórax anterior superficial y profundo', items: ['pmy', 'pme', 'Subclavio|Subclávio', 'Serrato anterior|Serrátil anterior', 'int'] },
          { t: 'Músculos de la inspiración', items: ['Diafragma|Diafragma', 'int', 'esc', 'ean', 'eme', 'epo', 'pme'] },
          { t: 'Tronco posterior superficial e intermedio', items: ['Trapecio|Trapézio', 'dors', 'Romboides mayor|Romboide maior', 'Romboides menor|Romboide menor', 'Serrato posteroinferior|Serrátil posterior inferior'] },
          { t: 'Tronco posterior profundo', items: ['Serrato posterosuperior|Serrátil posterior superior', 'Iliocostal cervical|Iliocostal do pescoço', 'Iliocostal torácico|Iliocostal do tórax', 'Iliocostal lumbar|Iliocostal do lombo', 'Longísimo cervical|Longuíssimo do pescoço', 'Longísimo torácico|Longuíssimo do tórax', 'lcap', 'Espinoso torácico|Espinal do tórax', 'Semiespinoso torácico|Semiespinal do tórax', 'Multífido|Multífido', 'Cuadrado lumbar|Quadrado do lombo'] },
          { t: 'Tronco posterior más profundo', items: ['Rotadores|Rotadores', 'Interespinosos|Interespinais', 'Intertransversos|Intertransversários'] },
          { t: 'Abdomen superficial e intermedio', items: ['Oblicuo externo del abdomen|Oblíquo externo do abdome', 'oint'] },
          { t: 'Abdomen intermedio y profundo', items: ['Recto del abdomen|Reto do abdome', 'Transverso del abdomen|Transverso do abdome', 'oint'] },
          { t: 'Diafragma pélvico, vista superior', items: ['pubc', 'pubr', 'ilic'] },
          { t: 'Suelo pélvico, vista inferior', items: ['Isquiocavernoso|Isquiocavernoso', 'Bulboesponjoso|Bulboesponjoso', 'Transverso profundo del periné|Transverso profundo do períneo', 'Cuerpo perineal|Corpo do períneo', 'pubc', 'pubr', 'ilic', 'Uretra|Uretra', 'Vagina|Vagina'] }
        ] },
        { name: 'Miembro superior: ubicación', pt: 'Membro superior: localização', views: [
          { t: 'Manguito rotador, vista anterior', side: 'der', items: ['supra', 'Subescapular|Subescapular'] },
          { t: 'Manguito rotador, vista posterior', side: 'der', items: ['supra', 'infra', 'rme'] },
          { t: 'Brazo anterior', side: 'der', items: ['cora', 'bic', 'braq'] },
          { t: 'Brazo posterior', side: 'der', items: ['tric'] },
          { t: 'Antebrazo anterior superficial', side: 'der', items: ['prr', 'frc', 'pal', 'fcc'] },
          { t: 'Antebrazo anterior intermedio', side: 'der', items: ['fsd'] },
          { t: 'Antebrazo anterior profundo', side: 'der', items: ['fpd', 'flp', 'prc'] },
          { t: 'Antebrazo posterior superficial', side: 'der', items: ['brr', 'anc', 'erl', 'erc', 'ed', 'edm', 'ecc'] },
          { t: 'Antebrazo posterior profundo', side: 'der', items: ['sup', 'alp', 'ecp', 'elp', 'ei'] },
          { t: 'Palma de la mano, plano superficial', side: 'der', items: ['acp', 'fcp', 'adp', 'abm', 'fcm', 'lum', 'iod'] },
          { t: 'Palma de la mano, plano profundo', side: 'der', items: ['Oponente del pulgar|Oponente do polegar', 'Oponente del meñique|Oponente do dedo mínimo', 'adp', 'iop'] },
          { t: 'Dorso de la mano', side: 'der', items: ['iod'] }
        ] },
        { name: 'Miembro superior: acción', pt: 'Membro superior: ação', views: [
          { t: 'Extensores del hombro', side: 'der', items: ['delt', 'dors', 'rma', 'rme', 'infra', 'tric'] },
          { t: 'Flexores del hombro', side: 'der', items: ['pmy', 'delt', 'cora', 'bic'] },
          { t: 'Abductores del brazo', side: 'der', items: ['delt', 'supra'] },
          { t: 'Aductores del brazo', side: 'der', items: ['pmy', 'rma', 'dors'] },
          { t: 'Extensores del antebrazo (codo)', side: 'der', items: ['tric', 'anc'] },
          { t: 'Flexores del antebrazo (codo)', side: 'der', items: ['bic', 'braq', 'brr'] },
          { t: 'Pronadores del antebrazo', side: 'der', items: ['prr', 'prc'] },
          { t: 'Supinadores del antebrazo', side: 'der', items: ['bic', 'sup'] },
          { t: 'Extensores de la muñeca', side: 'der', items: ['erl', 'erc', 'ecc'] },
          { t: 'Flexores de la muñeca', side: 'der', items: ['pal', 'fcc', 'frc'] },
          { t: 'Abductores de la muñeca (desviación radial)', side: 'der', items: ['erl', 'erc', 'frc'] },
          { t: 'Aductores de la muñeca (desviación cubital)', side: 'der', items: ['ecc', 'fcc'] },
          { t: 'Extensores de los dedos', side: 'der', items: ['elp', 'ecp', 'ei', 'iop', 'iod', 'lum'] },
          { t: 'Flexores de los dedos', side: 'der', items: ['fpd', 'flp', 'fcp', 'fcm'] },
          { t: 'Abductores de los dedos', side: 'der', items: ['alp', 'acp', 'abm', 'iod'] },
          { t: 'Aductores de los dedos', side: 'der', items: ['adp', 'iop'] }
        ] },
        { name: 'Miembro inferior: ubicación', pt: 'Membro inferior: localização', views: [
          { t: 'Muslo anterior', side: 'der', items: ['psoas', 'ili', 'tfl', 'sart', 'rf', 'vl', 'vm', 'pec', 'al', 'grac', 'tit'] },
          { t: 'Muslo anterior, plano intermedio', side: 'der', items: ['psoas', 'ili', 'pec', 'al', 'grac', 'vm', 'vi', 'sart', 'tfl', 'tit'] },
          { t: 'Muslo lateral', side: 'der', items: ['gma', 'gme', 'tfl', 'tit', 'rf', 'vl', 'bf', 'sm'] },
          { t: 'Muslo posterior', side: 'der', items: ['gma', 'gme', 'bf', 'st', 'sm', 'am'] },
          { t: 'Región glútea profunda', side: 'der', items: ['gme', 'gmi', 'pir', 'gs', 'oi', 'gi', 'cf'] },
          { t: 'Pierna anterior', side: 'der', items: ['ta', 'eld', 'elh', 'pl', 'pc'] },
          { t: 'Pierna lateral', side: 'der', items: ['pl', 'pc', 'gast', 'sol', 'ta', 'eld', 'elh'] },
          { t: 'Pierna posterior superficial', side: 'der', items: ['gast', 'sol', 'plan'] },
          { t: 'Pierna posterior profunda', side: 'der', items: ['Poplíteo|Poplíteo', 'tp', 'fld', 'flh', 'plan', 'pc'] },
          { t: 'Dorso del pie', side: 'der', items: ['ecd', 'ech', 'iodp'] },
          { t: 'Planta del pie, plano superficial', side: 'der', items: ['ah', 'fcd', 'abmp'] },
          { t: 'Planta del pie, plano intermedio', side: 'der', items: ['Cuadrado plantar|Quadrado plantar', 'Lumbricales del pie|Lumbricais do pé'] },
          { t: 'Planta del pie, plano profundo', side: 'der', items: ['fch', 'adh', 'fcmp', 'iopp'] }
        ] },
        { name: 'Miembro inferior: acción', pt: 'Membro inferior: ação', views: [
          { t: 'Extensores de la cadera', side: 'der', items: ['gma', 'bf', 'st', 'sm', 'am'] },
          { t: 'Flexores de la cadera', side: 'der', items: ['psoas', 'ili', 'rf', 'sart', 'pec', 'al', 'ac'] },
          { t: 'Abductores de la cadera', side: 'der', items: ['gme', 'gmi', 'tfl'] },
          { t: 'Aductores de la cadera', side: 'der', items: ['al', 'ac', 'am', 'pec', 'grac'] },
          { t: 'Rotadores laterales de la cadera', items: ['pir', 'gs', 'oi', 'gi', 'cf', 'Obturador externo|Obturador externo', 'gma', 'sart'] },
          { t: 'Rotadores mediales de la cadera', side: 'der', items: ['gme', 'gmi', 'tfl'] },
          { t: 'Extensores de la rodilla (cuádriceps)', side: 'der', items: ['rf', 'vl', 'vm', 'vi'] },
          { t: 'Flexores de la rodilla', side: 'der', items: ['bf', 'st', 'sm', 'grac', 'sart'] },
          { t: 'Dorsiflexores del tobillo', side: 'der', items: ['ta', 'eld', 'elh'] },
          { t: 'Flexores plantares del tobillo', side: 'der', items: ['gast', 'sol', 'plan', 'tp', 'fld', 'flh', 'pl', 'pc'] },
          { t: 'Evertores del pie', side: 'der', items: ['pl', 'pc'] },
          { t: 'Inversores del pie', side: 'izq', items: ['ta', 'tp'] },
          { t: 'Extensores de los dedos del pie', side: 'der', items: ['elh', 'eld', 'ech', 'ecd'] },
          { t: 'Flexores de los dedos del pie', side: 'der', items: ['flh', 'fld', 'fcd', 'fch', 'fcmp'] },
          { t: 'Abductores de los dedos del pie', side: 'der', items: ['ah', 'abmp', 'iodp'] },
          { t: 'Aductores de los dedos del pie', side: 'der', items: ['adh', 'iopp'] }
        ] }
      ]
    },
    {
      id: 'gi', img: 'gi', color: 'var(--nerve)', name: 'Digestivo', pt: 'Sistema digestório',
      surg: [
        'Apendicectomía: punto de McBurney, en la unión del tercio lateral con los dos tercios mediales de la línea entre la espina ilíaca anterosuperior y el ombligo. La base del apéndice está donde convergen las tenias del ciego.',
        'Úlcera duodenal posterior perforada: puede erosionar la arteria gastroduodenal y causar hemorragia masiva.',
        'Cálculo impactado en la ampolla hepatopancreática: ictericia, colangitis y pancreatitis biliar.',
        'El omento mayor tiende a envolver focos inflamatorios (apendicitis, perforaciones) y se usa como parche en cirugía.'
      ],
      rev: [
        'Divertículo de Meckel: regla de los 2 (2 % de la población, a unos 60 cm de la válvula ileocecal, 2 tipos de mucosa ectópica).',
        'El lóbulo caudado drena directamente a la vena cava inferior; por eso se hipertrofia en el síndrome de Budd-Chiari.',
        'El conducto pancreático principal (Wirsung) se une al colédoco en la ampolla de Vater, en la segunda porción del duodeno.',
        'Las glándulas parótidas, submandibulares y sublinguales son las tres glándulas salivales mayores; el conducto parotídeo desemboca frente al 2.º molar superior.'
      ],
      groups: [
        { name: 'Órganos digestivos', pt: 'Órgãos digestórios', views: [
          { t: 'Tracto gastrointestinal', items: ['Esófago|Esôfago', 'Estómago|Estômago', 'Intestino delgado|Intestino delgado', 'Intestino grueso|Intestino grosso', 'apen', 'recto', 'canal'] },
          { t: 'Partes del estómago', items: ['Esfínter cardíaco (cardias)|Óstio cárdico', 'Porción cardíaca|Parte cárdica', 'Fondo|Fundo gástrico', 'Cuerpo|Corpo gástrico', 'Píloro|Parte pilórica', 'Esfínter pilórico|Músculo esfíncter do piloro'] },
          { t: 'Intestino delgado', items: ['Duodeno|Duodeno', 'Yeyuno|Jejuno', 'Íleon|Íleo'] },
          { t: 'Intestino grueso, recto y canal anal', items: ['Ciego|Ceco', 'apen', 'Colon ascendente|Colo ascendente', 'Colon transverso|Colo transverso', 'Colon descendente|Colo descendente', 'Colon sigmoide|Colo sigmoide', 'recto', 'canal'] }
        ] },
        { name: 'Órganos accesorios', pt: 'Órgãos anexos', views: [
          { t: 'Visión general', items: ['parot', 'subm', 'subl', 'Hígado|Fígado', 'ves', 'pancr'] },
          { t: 'Glándulas salivales', side: 'izq', items: ['parot', 'subm', 'subl'] },
          { t: 'Lóbulos y ligamentos del hígado', items: ['Lóbulo derecho|Lobo direito', 'Lóbulo izquierdo|Lobo esquerdo', 'Lóbulo cuadrado|Lobo quadrado', 'Lóbulo caudado|Lobo caudado', 'Ligamento falciforme|Ligamento falciforme'] },
          { t: 'Árbol biliar', items: ['Conducto hepático derecho|Ducto hepático direito', 'Conducto hepático izquierdo|Ducto hepático esquerdo', 'Conducto hepático común|Ducto hepático comum', 'ves', 'Conducto cístico|Ducto cístico', 'Colédoco (conducto biliar común)|Ducto colédoco', 'Ampolla hepatopancreática (de Vater)|Ampola hepatopancreática', 'Conducto pancreático principal (de Wirsung)|Ducto pancreático', 'Conducto pancreático accesorio (de Santorini)|Ducto pancreático acessório'] },
          { t: 'Partes del páncreas', items: ['Cabeza del páncreas|Cabeça do pâncreas', 'Cuello del páncreas|Colo do pâncreas', 'Cuerpo del páncreas|Corpo do pâncreas', 'Cola del páncreas|Cauda do pâncreas'] },
          { t: 'Omento mayor', items: ['Omento mayor (epiplón mayor)|Omento maior'] },
          { t: 'Omento menor y mesenterio', items: ['Omento menor (epiplón menor)|Omento menor', 'Mesenterio|Mesentério'] }
        ] }
      ]
    },
    {
      id: 're', img: 're', color: 'var(--vein)', name: 'Respiratorio', pt: 'Sistema respiratório',
      surg: [
        'Cricotiroidotomía: incisión en el ligamento cricotiroideo, entre los cartílagos tiroides y cricoides.',
        'Un cuerpo extraño aspirado suele ir al bronquio principal derecho, que es más corto, ancho y vertical.',
        'El lóbulo medio derecho solo se ausculta por delante; por detrás se auscultan sobre todo los lóbulos inferiores.'
      ],
      rev: [
        'Aspiración en decúbito supino: segmento superior del lóbulo inferior o segmento posterior del lóbulo superior, sobre todo del lado derecho.',
        'La sinusitis etmoidal en niños puede extenderse a la órbita (celulitis orbitaria) a través de la lámina papirácea.',
        'Epiglotitis: signo del pulgar en la radiografía lateral de cuello.'
      ],
      groups: [
        { name: 'Respiratorio', pt: 'Respiratório', views: [
          { t: 'Lóbulos y fisuras pulmonares', side: 'der', items: ['Ápice del pulmón|Ápice do pulmão', 'Lóbulo superior|Lobo superior', 'Lóbulo medio|Lobo médio', 'Lóbulo inferior|Lobo inferior', 'Base del pulmón|Base do pulmão'] },
          { t: 'Tráquea y bronquios', side: 'izq', items: ['Tráquea|Traqueia', 'Bronquio principal|Brônquio principal', 'Bronquios lobulares|Brônquios lobares', 'Bronquio terciario (segmentario)|Brônquio segmentar'] },
          { t: 'Laringe', items: ['Epiglotis|Epiglote', 'Cartílago tiroides|Cartilagem tireóidea', 'Cartílago cricoides|Cartilagem cricóidea', 'Cartílago aritenoides|Cartilagem aritenóidea', 'Membrana tirohioidea|Membrana tíreo-hióidea', 'Ligamento cricotiroideo lateral|Ligamento cricotireóideo lateral'] },
          { t: 'Senos paranasales', items: ['Seno frontal|Seio frontal', 'Seno etmoidal|Células etmoidais', 'Seno esfenoidal|Seio esfenoidal'] }
        ] }
      ]
    },
    {
      id: 'ur', img: 'ur', color: 'var(--nerve)', name: 'Urinario', pt: 'Sistema urinário',
      surg: [
        'Los cálculos ureterales se impactan en tres estrechamientos: unión pieloureteral, cruce de los vasos ilíacos y unión ureterovesical.',
        'Hilio renal, de anterior a posterior: vena renal, arteria renal y pelvis renal.',
        'Sondaje vesical: la uretra femenina mide unos 4 cm; en el varón hay que sortear las curvaturas de la uretra prostática y membranosa.'
      ],
      rev: [
        'El riñón derecho está más bajo que el izquierdo porque el hígado lo desplaza.',
        'La vena renal izquierda pasa entre la aorta y la mesentérica superior (síndrome del cascanueces); la vena gonadal izquierda drena en ella, por eso el varicocele es más frecuente a la izquierda.',
        'El riñón en herradura queda retenido en su ascenso por la arteria mesentérica inferior.'
      ],
      groups: [
        { name: 'Sistema urinario', pt: 'Sistema urinário', views: [
          { t: 'Sistema urinario: introducción', items: ['Glándula suprarrenal|Glândula suprarrenal', 'Riñón|Rim', 'Uréter|Ureter', 'Corteza renal|Córtex renal', 'Médula renal (pirámides)|Medula renal (pirâmides renais)', 'Pelvis renal|Pelve renal', 'Cálices mayores y menores|Cálices renais maiores e menores', 'Vejiga urinaria|Bexiga urinária', 'Uretra|Uretra'] }
        ] }
      ]
    },
    {
      id: 'rp', img: 'rp', color: 'var(--artery)', name: 'Reproductor', pt: 'Sistema genital feminino',
      surg: [
        'Histerectomía: el uréter pasa por debajo de la arteria uterina en la base del ligamento ancho («el agua pasa bajo el puente»).',
        'Absceso de la glándula de Bartholin: drenaje o marsupialización.',
        'El embarazo ectópico es más frecuente en la ampolla de la trompa uterina.'
      ],
      rev: [
        'El prolapso uterino se relaciona con el debilitamiento de los ligamentos cardinales y uterosacros.',
        'El ligamento redondo atraviesa el conducto inguinal; su estiramiento causa dolor inguinal en el embarazo.',
        'Los vasos ováricos viajan en el ligamento suspensorio del ovario (infundibulopélvico); se torsionan en la torsión ovárica.'
      ],
      groups: [
        { name: 'Reproductor femenino', pt: 'Genital feminino', views: [
          { t: 'Genitales externos', items: ['clit', 'Labios mayores|Lábios maiores', 'Labios menores|Lábios menores'] },
          { t: 'Genitales internos', items: ['Útero|Útero', 'Ovario|Ovário', 'Trompa uterina (de Falopio)|Tuba uterina', 'lov', 'Vagina|Vagina', 'Glándula vestibular mayor (de Bartholin)|Glândula vestibular maior', 'clit'] },
          { t: 'Ligamentos del aparato reproductor', items: ['Ligamento ancho|Ligamento largo do útero', 'Ligamento redondo del útero|Ligamento redondo do útero', 'lov', 'Ligamentos cardinales|Ligamentos transversos do colo'] }
        ] }
      ]
    },
    {
      id: 'en', img: 'en', color: 'var(--lymph)', name: 'Endocrino', pt: 'Sistema endócrino',
      surg: [
        'Tiroidectomía: identificar y preservar las paratiroides y los nervios laríngeos (ver práctica P4).',
        'La vena suprarrenal derecha es corta y drena directo en la vena cava inferior: es el punto de mayor riesgo en la adrenalectomía derecha. La izquierda drena en la vena renal izquierda.',
        'Abordaje transesfenoidal de los adenomas hipofisarios, a través del seno esfenoidal.'
      ],
      rev: [
        'Un adenoma hipofisario que comprime el quiasma óptico produce hemianopsia bitemporal.',
        'La neurohipófisis libera ADH y oxitocina producidas en el hipotálamo; la adenohipófisis secreta GH, PRL, TSH, ACTH, FSH y LH.',
        'Las paratiroides inferiores derivan de la 3.ª bolsa faríngea (con el timo) y las superiores de la 4.ª.'
      ],
      groups: [
        { name: 'Glándulas endocrinas', pt: 'Glândulas endócrinas', views: [
          { t: 'Glándulas pineal e hipófisis', items: ['Glándula pineal|Glândula pineal', 'Hipófisis anterior (adenohipófisis)|Adeno-hipófise', 'Hipófisis posterior (neurohipófisis)|Neuro-hipófise'] },
          { t: 'Glándulas tiroides y paratiroides', items: ['Glándula tiroides|Glândula tireoide', 'Glándulas paratiroides|Glândulas paratireoides'] },
          { t: 'Glándulas suprarrenales y páncreas', items: ['Glándula suprarrenal derecha|Glândula suprarrenal direita', 'pancr'] }
        ] }
      ]
    },
    {
      id: 'ly', img: 'ly', color: 'var(--lymph)', name: 'Linfático', pt: 'Sistema linfático',
      surg: [
        'El bazo se proyecta bajo las costillas 9 a 11 izquierdas y es el órgano más lesionado en el trauma abdominal cerrado.',
        'Tras una esplenectomía se vacuna contra bacterias encapsuladas: neumococo, meningococo y Haemophilus influenzae tipo b.',
        'Biopsia del ganglio centinela axilar para estadificar el cáncer de mama.'
      ],
      rev: [
        'Anillo de Waldeyer: amígdalas faríngea (adenoides), tubáricas, palatinas y lingual. La hipertrofia adenoidea causa respiración bucal y otitis media.',
        'Los ganglios inguinales superficiales drenan el miembro inferior, el periné y el canal anal bajo la línea pectínea; el testículo drena a los ganglios paraaórticos.',
        'Ganglio de Virchow (supraclavicular izquierdo) aumentado: sospechar neoplasia abdominal.'
      ],
      groups: [
        { name: 'Órganos y ganglios linfáticos', pt: 'Órgãos e linfonodos', views: [
          { t: 'Bazo', items: ['Bazo|Baço'] },
          { t: 'Amígdalas', side: 'izq', items: ['Amígdala faríngea (adenoides)|Tonsila faríngea (adenoide)', 'Amígdala palatina|Tonsila palatina', 'Amígdala lingual|Tonsila lingual'] },
          { t: 'Ganglios y vasos linfáticos', items: ['Ganglios linfáticos cervicales|Linfonodos cervicais', 'Ganglios linfáticos axilares|Linfonodos axilares', 'Ganglios linfáticos inguinales|Linfonodos inguinais', 'Vasos linfáticos|Vasos linfáticos'] }
        ] }
      ]
    }
  ];

  /* Resuelve las claves del léxico */
  SISTEMAS.forEach(function (s) {
    var n = 0;
    s.groups.forEach(function (g) {
      g.views.forEach(function (v) {
        n += 1;
        v.n = n;
        v.items = v.items.map(function (it) {
          var raw = it.indexOf('|') === -1 ? L[it] : it;
          if (!raw) { throw new Error('Clave no encontrada en el léxico: ' + it); }
          var p = raw.split('|');
          return { es: p[0], pt: p[1] };
        });
      });
    });
    s.total = n;
  });
  window.SISTEMAS = SISTEMAS;
})();
