/**
 * Koral Morrocoy - Encuestas de decision Odoo (v2)
 * Basado en el "Menu de Decisiones Odoo" refinado (46 decisiones, agosto 2026).
 * Esta version: LIMPIA lo creado por la version anterior y crea la encuesta
 * completa del area COMPRAS Y ALMACEN (COM-D01 a COM-D10) con el texto
 * integro del documento.
 *
 * Uso:
 * 1. script.google.com > Nuevo proyecto > pegar este archivo en Code.gs.
 * 2. Ejecutar crearEncuestas(). Autorizar permisos la primera vez.
 * 3. Ver > Registros: URLs de responder/editar. Todo queda en la carpeta
 *    de Drive "Encuestas Koral Odoo" (recreada desde cero).
 *
 * La limpieza envia a la papelera la carpeta "Encuestas Koral Odoo" anterior
 * con todas las encuestas, hojas de respuestas e indice que contenia.
 */

const CARPETA = 'Encuestas Koral Odoo';

const PREAMBULO =
  'PARA QUÉ ES ESTA ENCUESTA\n' +
  'Registra las decisiones de parametrización de Odoo del área Compras y Almacén. ' +
  'Cada sección es un punto de decisión del documento "Menú de Decisiones Odoo": ' +
  'explica qué se está decidiendo, cómo se hace hoy, y las opciones reales de configuración ' +
  'con su efecto en la operación de Koral. Las necesidades que ya resuelve la plataforma Almus ' +
  '(localización venezolana y vertical hotelera) no aparecen aquí: no requieren decisión.\n\n' +
  'CÓMO RESPONDER\n' +
  '1. Lea la decisión y la situación actual; verifique que refleja la realidad del área.\n' +
  '2. Entienda cada opción: cómo se configura y cómo afecta la operación diaria. Pregunte antes de decidir.\n' +
  '3. Marque la opción elegida (o la combinación, si el punto lo propone).\n' +
  '4. Si su elección difiere de la recomendación del consultor, explique el motivo: es el registro de la razón de negocio.\n\n' +
  'Responda idealmente durante o justo después de la sesión de decisión del área, con el documento a la vista. ' +
  'Fecha límite: 21 de agosto de 2026.';

const DATA = [
  {
    "id": "COM-D01",
    "tema": "Clasificación de productos: rastrear inventario o no (almacenable vs consumible)",
    "decision": "DECISIÓN A TOMAR: ¿Qué productos del catálogo llevarán la casilla \"Rastrear inventario\" activada?\nEn Odoo 19 esto se parametriza producto por producto: en la ficha del producto (tipo \"Bienes\"), pestaña Información general, la casilla \"Rastrear inventario\" define si el sistema mantiene existencias de ese artículo (con la opción \"Por cantidad\" para el caso general). No es un parámetro de la categoría: cada producto se marca individualmente, aunque puede fijarse en masa por importación. Sin la casilla activa, el producto no aparece en el Inventario físico, no dispara reglas de reposición y no entra en la valoración; con ella activa, cada entrada y salida debe registrarse para que el stock del sistema sea fiable.",
    "situacion": "La base de productos está en reclasificación y no existe lista oficial aprobada por Administración y Contabilidad sobre qué productos son almacenables o consumibles; el criterio depende de la interpretación de cada área.",
    "origen": "AS-IS Compras y Almacén, tarea 1.2 (Compras) · RX Compras y Almacén, área de mejora 4 `[Ev: COM-1.2]` · PROP-NAT-002",
    "opciones": [
      {
        "letra": "A",
        "config": "\"Rastrear inventario\" (Por cantidad) activo en todo producto que Victor recibe y despacha; servicios y bienes sin control físico quedan sin la casilla",
        "afecta": "El sistema muestra existencias reales de víveres, químicos y refrescos, habilita reposición automática, conteos y valoración. Exige disciplina total: cada entrada y salida se registra o el stock vuelve a desalinearse"
      },
      {
        "letra": "B",
        "config": "Casilla activa solo en categorías de alta rotación o valor (víveres, bebidas, químicos); papelería y suministros menores sin rastreo",
        "afecta": "Menos carga de registro para el almacenista y conteos más cortos, pero los no rastreados no aparecen en existencias ni disparan reposición: su recompra sigue siendo manual y a ojo"
      },
      {
        "letra": "C",
        "config": "Ningún producto con la casilla activa; todo entra al gasto al recibirse",
        "afecta": "Elimina el problema del inventario desalineado \"por decreto\", pero renuncia a existencias, reglas de reposición y valoración; contradice la operación actual del almacén"
      }
    ],
    "ruta": "Inventario > Productos > Productos > (producto) > pestaña Información general > casilla Rastrear inventario (con tipo de producto \"Bienes\")",
    "recomendacion": "Opción A, condicionada a que Administración y Contabilidad emitan primero la lista oficial de criterios que el propio equipo pidió; la opción B es el punto de partida realista si la toma física inicial no puede cubrir todo el catálogo.",
    "elecciones": [
      "A",
      "B",
      "C"
    ]
  },
  {
    "id": "COM-D02",
    "tema": "Variantes: criterios de atributos, nomenclatura y responsables",
    "decision": "DECISIÓN A TOMAR: ¿Con qué criterios se decidirá qué atributos generan variantes, cómo se nombran los productos y quién puede crear variantes?\nEl equipo ya decidió trabajar con variantes; lo que falta es la regla de manejo. En Odoo 19 las variantes se activan en Ajustes de Ventas y se construyen con atributos y valores (ej. atributo \"Presentación\" con valores 1 L / 4 L): cada combinación genera una variante que es una referencia completa por sí misma, con su propio stock (la ficha general solo muestra la suma), su propio código de barras y referencia interna, su precio (precio de la plantilla más el extra del valor de atributo), su foto, y su propia línea en la lista de precios del proveedor. Cada atributo tiene un modo de creación de variantes (Instantáneamente, Dinámicamente o Nunca: este último deja el atributo como dato descriptivo sin crear variantes) y ese modo no puede editarse una vez asignado al producto, por lo que el criterio debe fijarse antes de seguir reclasificando. En la práctica: en compras, POS y conteos se elige siempre la variante exacta, y en las importaciones y tomas físicas cada variante es una línea separada.",
    "situacion": "Lourdes y Asdrúbal ya reclasifican la base usando un producto general con atribuciones (marca, color, presentación) para reducir la lista fragmentada de ítems; falta formalizar la convención antes de seguir, para no rehacer trabajo.",
    "origen": "AS-IS Compras y Almacén, tarea 1.2 (Compras) · RX Compras y Almacén, oportunidad 6 `[Ev: COM-1.2]` · PROP-NAT-002",
    "opciones": [
      {
        "letra": "A",
        "config": "Criterio funcional: un atributo genera variante solo si cambia el stock que hay que contar por separado o el precio/proveedor de compra (presentación, tamaño, contenido); marca y color se cargan como atributos en modo \"Nunca\" (descriptivos) salvo que se compren distinto. Producto aparte (otra plantilla) cuando cambian el uso operativo o la categoría contable. Nomenclatura única: nombre genérico en la plantilla, el detalle lo aportan los valores de atributo. Solo Compras (Lourdes) crea atributos, valores y variantes",
        "afecta": "Catálogo corto con variantes solo donde importan para comprar y contar; conteos e importaciones de tamaño manejable; una sola mano crea variantes, lo que evita duplicados. Requiere disciplina para consultar a Compras cuando un área \"necesita\" un valor nuevo"
      },
      {
        "letra": "B",
        "config": "Criterio exhaustivo: todo atributo físico registrado (presentación, color, marca) se crea en modo \"Instantáneamente\" y genera variantes; solo las notas quedan descriptivas",
        "afecta": "Máxima granularidad: se sabe exactamente qué marca y color hay en el estante. El costo es la explosión combinatoria: muchas más líneas en tomas físicas e importaciones, y una lista de precios de proveedor por cada variante que mantener en un mercado volátil"
      },
      {
        "letra": "C",
        "config": "Sin regla formal: quien reclasifica decide caso por caso qué atributo genera variante y cómo se nombra (statu quo del trabajo en curso)",
        "afecta": "No frena la reclasificación actual, pero reproduce el problema de origen: criterios distintos por persona, duplicados nuevos y variantes irreversibles mal planteadas (el modo de creación no se puede editar después)"
      }
    ],
    "ruta": "Ventas > Configuración > Ajustes > sección Catálogo de productos > Variantes (activar) · atributos y valores en Ventas > Configuración > Atributos · por producto, pestaña Atributos y variantes de la ficha (botón inteligente Variantes para ver las combinaciones)",
    "recomendacion": "Opción A: es la formalización del camino que el equipo ya inició, con la salvaguarda de que marca y color no exploten el catálogo. Documentar la convención en una página y aplicarla a todo lo reclasificado antes de cargar variantes, porque el modo de creación de cada atributo no se puede corregir después.",
    "elecciones": [
      "A",
      "B",
      "C"
    ]
  },
  {
    "id": "COM-D03",
    "tema": "Método de coste del inventario (Estándar, AVCO o FIFO)",
    "decision": "DECISIÓN A TOMAR: ¿Con qué método valorará Koral el costo de sus existencias?\nEn Odoo 19 el método de coste se define a nivel de compañía en los Ajustes de Contabilidad (sección Valoración del inventario) y puede sobreescribirse por categoría de producto en el campo \"Método de coste\" de cada categoría; nunca es un parámetro por producto individual. Las tres opciones (Precio estándar, Coste promedio AVCO, FIFO) cambian cómo el sistema calcula el costo de cada salida y, con ello, el costo de venta y el valor del almacén que verán Contraloría y Contabilidad.",
    "situacion": "La reclasificación de productos y la futura toma física obligan a definir con qué método se valorará el inventario, algo que hoy no está decidido; en un entorno de precios volátiles en divisa, la elección tiene impacto directo en el costo reportado.",
    "origen": "AS-IS Compras y Almacén, tarea 1.2 (Compras) · RX Compras y Almacén, área de mejora 4 y área de mejora 1 `[Ev: COM-1.2, COM-Alm-1.1]` · Sin PROP previa específica (PROP-NAT-002 toca la categoría contable)",
    "opciones": [
      {
        "letra": "A",
        "config": "Método de coste = Precio estándar: costo fijo por unidad definido a mano en cada ficha",
        "afecta": "Simple de entender, pero con inflación y precios en USD el costo fijado queda obsoleto rápido y alguien debe actualizarlo producto por producto; las diferencias contra el precio real facturado deben vigilarse aparte"
      },
      {
        "letra": "B",
        "config": "Método de coste = Coste promedio (AVCO): el sistema recalcula el promedio ponderado con cada recepción",
        "afecta": "El costo se actualiza solo con cada compra, sin mantenimiento manual; suaviza las variaciones de precio. Es el equilibrio típico para hotelería con víveres de alta rotación"
      },
      {
        "letra": "C",
        "config": "Método de coste = FIFO: cada salida toma el costo de la capa de entrada más antigua",
        "afecta": "Máxima precisión por lote de compra y coherente con la rotación física de víveres, pero más sensible a errores si las recepciones no se registran en orden y a tiempo"
      }
    ],
    "ruta": "Contabilidad > Configuración > Ajustes > sección Valoración del inventario > Método de coste (valor por defecto de la compañía) · excepciones por categoría en Inventario > Configuración > Categorías de productos > Método de coste",
    "recomendacion": "AVCO como método general: se mantiene solo, absorbe la variación de precios y no depende de la disciplina de capas que FIFO exige a un almacén que apenas va a realinear su inventario. Decisión a validar en mesa conjunta con Contabilidad.",
    "elecciones": [
      "A",
      "B",
      "C"
    ]
  },
  {
    "id": "COM-D04",
    "tema": "Momento de contabilización de la valoración: periódica vs perpetua",
    "decision": "DECISIÓN A TOMAR: ¿La valoración del inventario impactará la contabilidad solo al cierre del periodo o de forma continua al facturar?\nEn Odoo 19 este parámetro vive a nivel de compañía en los Ajustes de Contabilidad, sección Valoración del inventario: \"Periódico (al cierre)\" o \"Perpetuo (en la facturación)\". Odoo 19 rediseñó este mecanismo: la valoración perpetua ya no genera un asiento por cada movimiento de almacén (como hasta Odoo 18) sino que impacta la cuenta de valoración al contabilizar facturas, y un proceso de asiento de cierre concilia el resto; la periódica, por su parte, ganó cierre automatizable (Manual, Diario o Mensual). Cuentas y método pueden sobreescribirse por categoría de producto.",
    "situacion": "Junto al método de coste, hay que decidir cuándo la valoración del inventario impacta la contabilidad: solo al cierre del periodo o de forma continua al facturar. Esto define cuánto trabajo de cierre asume Contabilidad y qué tan \"en vivo\" es el valor del almacén.",
    "origen": "AS-IS Compras y Almacén, tareas 1.2 y 2 (Compras) · RX Compras y Almacén, área de mejora 4 `[Ev: COM-1.2, COM-2]` · Sin PROP previa específica",
    "opciones": [
      {
        "letra": "A",
        "config": "Valoración = Periódico (al cierre), con el asiento de cierre en modo Manual o programado (Diario/Mensual)",
        "afecta": "Las facturas de proveedor van al gasto y la valoración contable se sincroniza con el asiento de cierre; encaja con el cierre quincenal que Compras ya practica y en Odoo 19 el asiento puede automatizarse, pero entre cierres el balance no refleja el valor del almacén"
      },
      {
        "letra": "B",
        "config": "Valoración = Perpetuo (en la facturación)",
        "afecta": "La valoración contable se actualiza al contabilizar facturas y facturas de proveedor, y el asiento de cierre cubre lo recibido o entregado aún sin factura; el balance refleja el inventario de forma casi continua, pero exige que recepciones y facturas se registren con rigor y a tiempo"
      }
    ],
    "ruta": "Contabilidad > Configuración > Ajustes > sección Valoración del inventario > Valoración del inventario (Periódico al cierre / Perpetuo en la facturación, más la programación del cierre)",
    "recomendacion": "Iniciar con periódica apoyada en el cierre quincenal existente (en Odoo 19 el asiento de cierre programado abarata mucho esta opción) y evaluar el paso a perpetua cuando la disciplina de recepción y facturación sobre pedido esté consolidada; decisión a tomar con Contabilidad, no solo con Compras.",
    "elecciones": [
      "A",
      "B"
    ]
  },
  {
    "id": "COM-D05",
    "tema": "Comparación de precios: cómo llevar el 90% transcrito a un circuito comparable",
    "decision": "DECISIÓN A TOMAR: ¿Con qué mecanismo del sistema se compararán precios antes de comprar?\nOdoo ofrece dos mecanismos parametrizables: las listas de precios de proveedor (pestaña Compra de cada producto, o el menú Listas de precios de proveedor en Configuración de Compras), que autocompletan el precio del proveedor en cada solicitud de cotización, y las solicitudes de cotización alternativas (pestaña Alternativas de la orden), que permiten pedir a varios proveedores y comparar líneas para adjudicar por producto; estas últimas requieren activar \"Acuerdos de compra\" en los Ajustes de Compras. El primero hace la comparación instantánea con datos precargados; el segundo la hace formal y documentada pero necesita tiempo de respuesta del proveedor.",
    "situacion": "Solo el 10% de las compras pasa por análisis de precio; el 90% se transcribe por indicación de Gerencia General, frecuentemente en fin de semana y sin tiempo hábil para cotizar.",
    "origen": "AS-IS Compras y Almacén, tarea 1.3 (Compras) · RX Compras y Almacén, área de mejora 2, área de mejora 3 y oportunidad 2 `[Ev: COM-1.3, COM-Alm-1.7, COM-Alm-1.13]` · PROP-NAT-003",
    "opciones": [
      {
        "letra": "A",
        "config": "Cada producto lleva sus proveedores con precio en la pestaña Compra (carga manual o importación masiva)",
        "afecta": "La comparación es instantánea al armar el pedido, sin esperar cotizaciones; sirve incluso para pedidos de sábado. Requiere mantener los precios al día en un mercado volátil"
      },
      {
        "letra": "B",
        "config": "Activar Acuerdos de compra y usar la pestaña Alternativas de la orden: se crean cotizaciones espejo a varios proveedores y se comparan líneas para adjudicar por producto",
        "afecta": "Comparación formal y documentada, ideal para compras grandes o nuevas; necesita días hábiles de respuesta del proveedor, incompatible con pedidos de última hora"
      },
      {
        "letra": "C",
        "config": "Esquema mixto: listas de precios cargadas para recurrentes y alternativas de cotización para compras mayores o esporádicas",
        "afecta": "Cubre el grueso del gasto sin frenar la operación; exige definir el umbral (monto o tipo de producto) que obliga a licitar"
      },
      {
        "letra": "D",
        "config": "Statu quo instrumentado: se sigue transcribiendo la indicación de Gerencia, pero siempre como orden de compra previa en el sistema",
        "afecta": "No mejora el precio pero al menos garantiza trazabilidad y cierre quincenal limpio; deja intacto el sobrecosto señalado en el RX"
      }
    ],
    "ruta": "precios en Compras > Productos > Productos > (producto) > pestaña Compra o en Compras > Configuración > Listas de precios de proveedor · alternativas en la pestaña Alternativas de la solicitud de cotización, previa activación de Compras > Configuración > Ajustes > sección Órdenes > Acuerdos de compra",
    "recomendacion": "Opción C: cargar los precios de los proveedores habituales de una vez (el equipo ya los conoce) y reservar las cotizaciones alternativas para compras sobre un umbral que Gerencia acuerde. Este punto es tanto de configuración como de política: sin el compromiso de Gerencia de planificar de lunes a viernes, ninguna opción técnica funciona.",
    "elecciones": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "id": "COM-D06",
    "tema": "Instrumento para proveedores recurrentes: pedido abierto vs plantilla de compra",
    "decision": "DECISIÓN A TOMAR: ¿Qué tipo de acuerdo de compra se usará con cada proveedor recurrente?\nCon la función \"Acuerdos de compra\" activada, Odoo 19 ofrece dos tipos en el campo \"Tipo de acuerdo de compra\": el pedido abierto (blanket order), atado a un solo proveedor, con precios pactados por línea y un campo \"Validez del acuerdo\" con fechas, del que las entregas parciales van descontando; y la plantilla de compra, un pedido tipo reutilizable con productos y cantidades precargados que puede dejarse sin proveedor para usarse con varios. El pedido abierto controla compromiso y vigencia; la plantilla solo acelera la creación de cotizaciones repetitivas.",
    "situacion": "Los acuerdos marco ya se usan en Odoo para proveedores constantes con precio fijo en USD, y hay casos de acuerdos vencidos sin cerrar.",
    "origen": "AS-IS Compras y Almacén, tarea 4 (Compras) · RX Compras y Almacén, fortaleza 4 `[Ev: COM-4]` · PROP-NAT-003 (tarifas de recurrentes)",
    "opciones": [
      {
        "letra": "A",
        "config": "Tipo de acuerdo = Pedido abierto: proveedor único, cantidades y precios pactados por línea (se cargan a mano, no se heredan de la ficha), fechas en Validez del acuerdo",
        "afecta": "Es el esquema actual; adecuado cuando Gerencia negoció volumen y precio con un proveedor específico. La vigencia queda visible en el sistema, atacando los acuerdos que hoy vencen sin cerrarse"
      },
      {
        "letra": "B",
        "config": "Tipo de acuerdo = Plantilla de compra: productos y cantidades precargados, campo Proveedor vacío para poder usarla con varios",
        "afecta": "Ideal para el pedido recurrente sin volumen comprometido: la cotización se genera en segundos y puede rotar de proveedor; no controla vigencia ni cantidad pactada"
      },
      {
        "letra": "C",
        "config": "Sin acuerdos: el precio pactado vive solo en la lista de precios de proveedor del producto",
        "afecta": "Menos objetos que mantener, pero se pierde el registro del compromiso negociado y su vigencia; retrocede respecto a lo que ya funciona"
      }
    ],
    "ruta": "Compras > Órdenes > Acuerdos de compra > Nuevo, campo Tipo de acuerdo de compra (Pedido abierto / Plantilla de compra); requiere Compras > Configuración > Ajustes > sección Órdenes > Acuerdos de compra",
    "recomendacion": "Mantener pedidos abiertos donde exista negociación real de precio y volumen, y adoptar plantillas de compra para los pedidos repetitivos sin compromiso (quincenas de víveres), revisando trimestralmente los acuerdos por vencer.",
    "elecciones": [
      "A",
      "B",
      "C"
    ]
  },
  {
    "id": "COM-D07",
    "tema": "Aprobación de compras por Gerencia dentro del sistema",
    "decision": "DECISIÓN A TOMAR: ¿Cómo se registrará en el sistema la autorización de Gerencia sobre las compras?\nOdoo 19 trae la aprobación por monto de forma nativa (sin Studio ni Enterprise): en los Ajustes de Compras, la opción \"Aprobación del pedido de compra\" con su \"Importe mínimo\" hace que toda orden igual o superior a ese monto, confirmada por un usuario sin rol de Administrador de Compras, quede en estado \"A aprobar\" hasta que un administrador la apruebe; las órdenes bajo el monto fluyen directo. Para que el circuito funcione, quien elabora (Lourdes) debe tener rol Usuario de Compras y el aprobador (Dr. Alberto) rol Administrador, porque un administrador que confirma su propia orden se la aprueba a sí mismo.",
    "situacion": "Hoy la aprobación de Gerencia General ocurre en reunión presencial con hoja física y WhatsApp, incluso en fin de semana, sin rastro en Odoo.",
    "origen": "AS-IS Compras y Almacén, tareas 1.4 y 1.13 (Almacén) · RX Compras y Almacén, área de mejora 7 y oportunidad 7 `[Ev: COM-Alm-1.4, COM-Alm-1.5, COM-Alm-1.13]` · PROP-NAT-003 y PROP-NAT-004",
    "opciones": [
      {
        "letra": "A",
        "config": "Activar \"Aprobación del pedido de compra\" con un Importe mínimo acordado; Lourdes con rol Usuario, Dr. Alberto con rol Administrador de Compras",
        "afecta": "La aprobación queda registrada con fecha y responsable, y Gerencia puede aprobar desde el celular en lugar de reunión con papel; los montos menores fluyen sin fricción. Requiere que Gerencia realmente use el sistema"
      },
      {
        "letra": "B",
        "config": "Solo control por permisos: Compras y almacén con permisos que no confirman órdenes; únicamente el usuario autorizado confirma",
        "afecta": "El control existe sin activar nada más, pero no hay estado visible de \"pendiente de aprobación\": la orden simplemente espera en borrador a que el autorizado la confirme"
      },
      {
        "letra": "C",
        "config": "Aprobación fuera del sistema: Gerencia sigue aprobando verbalmente o por WhatsApp y Compras confirma dejando nota en el chatter",
        "afecta": "Cambio mínimo de hábitos, pero la trazabilidad depende de la disciplina de anotar; el RX seguiría marcando el hallazgo como abierto"
      }
    ],
    "ruta": "Compras > Configuración > Ajustes > sección Órdenes > Aprobación del pedido de compra (casilla + campo Importe mínimo); roles en Ajustes > Usuarios y compañías > Usuarios > permisos de Compras (funcionalidad nativa, no requiere Studio ni Enterprise)",
    "recomendacion": "Opción A con el umbral por monto: montos menores fluyen sin fricción y Gerencia solo interviene sobre el umbral, lo que además reduce la presión de aprobar en fin de semana. Si la adopción de Gerencia es incierta, arrancar con la opción B como transición.",
    "elecciones": [
      "A",
      "B",
      "C"
    ]
  },
  {
    "id": "COM-D08",
    "tema": "Reposición: reglas de reorden automáticas, manuales o conteo actual",
    "decision": "DECISIÓN A TOMAR: ¿Cómo disparará el sistema la reposición del almacén?\nLas reglas de reorden se crean por producto (o desde el menú Reposición) con mínimo y máximo, y su columna \"Activador\" define el grado de automatismo: en Auto, Odoo crea solo la solicitud de cotización al proveedor de la ficha cuando el stock previsto cae bajo el mínimo; en Manual, el producto aparece en el tablero de Reposición y el usuario decide cuándo ordenar. Adicionalmente, la función \"Sugerir\" del catálogo de la solicitud de cotización propone cantidades según la demanda histórica (días a cubrir y periodo de referencia), pero exige historial de salidas validadas en el sistema, proveedor con precio cargado y productos rastreados por cantidad. Todas las variantes dependen de un stock de sistema fiable: son posteriores a la toma física de COM-D10.",
    "situacion": "La reposición depende del conteo físico semanal contra un stock mínimo que Gerencia definió de palabra, con lista en papel y envío por WhatsApp.",
    "origen": "AS-IS Compras y Almacén, tareas 1.1, 1.2 y 1.5 (Almacén) · RX Compras y Almacén, área de mejora 7 y oportunidad 1 `[Ev: COM-Alm-1.1, COM-Alm-1.2, COM-Alm-1.5]` · PROP-NAT-009 (y PROP-NAT-026 para agua/gasoil/gas)",
    "opciones": [
      {
        "letra": "A",
        "config": "Reglas de reorden con Activador = Auto, mínimos y máximos por producto, proveedor y precio en la ficha",
        "afecta": "Cero conteo para decidir qué pedir: el sistema genera la cotización solo. Si el stock del sistema está mal, compra mal; exige inventario fiable y fichas de proveedor completas"
      },
      {
        "letra": "B",
        "config": "Reglas de reorden con Activador = Manual: el tablero de Reposición lista lo que está bajo mínimo y el usuario pulsa Ordenar",
        "afecta": "El almacenista conserva el criterio (y Gerencia su aprobación de COM-D07) pero deja de contar y calcular a mano; paso natural intermedio tras la toma física"
      },
      {
        "letra": "C",
        "config": "Función Sugerir en el catálogo de la solicitud de cotización: días a cubrir + periodo histórico de referencia, y el sistema propone cantidades por proveedor",
        "afecta": "Útil para dimensionar pedidos de fin de semana según consumo histórico; requiere historial de salidas validadas en el sistema, que hoy no existe, y precio cargado por proveedor"
      },
      {
        "letra": "D",
        "config": "Sin reglas: se sigue contando en físico, pero la lista se carga como solicitud de cotización en Odoo en lugar de papel y WhatsApp",
        "afecta": "Mejora trazabilidad sin depender del stock del sistema; no elimina el trabajo de conteo ni el riesgo de quiebre entre conteos"
      }
    ],
    "ruta": "Inventario > Operaciones > Reposición (crear reglas y habilitar la columna Activador: Auto / Manual); también desde el botón de reposición en la ficha de cada producto · sugerencias con el botón Catálogo de la solicitud de cotización en Compras, interruptor Sugerir",
    "recomendacion": "Secuencia D, B, A: registrar ya las requisiciones en sistema, pasar a reglas manuales inmediatamente después de la toma física, y automatizar solo los productos de consumo estable (agua, gas, químicos) cuando el stock del sistema haya demostrado ser fiable un par de meses.",
    "elecciones": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "id": "COM-D09",
    "tema": "Recepción en 1, 2 o 3 pasos",
    "decision": "DECISIÓN A TOMAR: ¿La recepción de mercancía se registrará en el sistema como uno, dos o tres pasos?\nEl parámetro vive en la ficha del almacén, pestaña Configuración del almacén, campo \"Envíos entrantes\": recibir directo (1 paso), pasar por una ubicación de entrada y luego almacenar (2 pasos), o añadir además una etapa de control de calidad (3 pasos). Para que ese campo aparezca con las opciones multietapa hay que activar \"Rutas multietapa\" en los Ajustes de Inventario, lo que a su vez activa \"Ubicaciones de almacenamiento\": esta decisión está por tanto encadenada a COM-D10. Cada paso adicional es una transferencia más que validar por cada llegada de proveedor.",
    "situacion": "La recepción actual es fuerte en control (validación física contra pedido y contra documento del proveedor, corrección del pedido antes de confirmar) pero se ejecuta como un solo movimiento en Odoo.",
    "origen": "AS-IS Compras y Almacén, tareas 1.7, 1.8 y 1.9 (Almacén) · RX Compras y Almacén, fortaleza 1 `[Ev: COM-Alm-1.6, COM-Alm-1.7, COM-Alm-1.8, COM-Alm-1.9]` · PROP-NAT-005",
    "opciones": [
      {
        "letra": "A",
        "config": "Envíos entrantes = Recibir bienes directamente (1 paso)",
        "afecta": "Refleja lo que Victor ya hace: verifica en despacho y da entrada; mínima fricción y menos clics. La validación cruzada sigue siendo un control humano previo a validar"
      },
      {
        "letra": "B",
        "config": "Envíos entrantes = 2 pasos (entrada + almacenaje), con Rutas multietapa activas",
        "afecta": "Separa \"recibí del proveedor\" de \"ya está ubicado y disponible\"; útil si se activan ubicaciones internas, pero duplica operaciones para un almacén de una sola persona"
      },
      {
        "letra": "C",
        "config": "Envíos entrantes = 3 pasos (entrada + calidad + almacenaje)",
        "afecta": "Sobredimensionado para el volumen actual del hotel; el control de cantidad y documento no requiere esta etapa formal"
      }
    ],
    "ruta": "Inventario > Configuración > Almacenes > (almacén) > pestaña Configuración del almacén > Envíos entrantes; las opciones de 2 y 3 pasos requieren Inventario > Configuración > Ajustes > sección Almacén > Rutas multietapa (que activa también Ubicaciones de almacenamiento)",
    "recomendacion": "Opción A: el control que la ISO reconocería ya existe en el procedimiento humano y no necesita etapas de sistema adicionales; revisar la opción B solo si el despacho llega a operarse con más de una persona y ubicaciones activas.",
    "elecciones": [
      "A",
      "B",
      "C"
    ]
  },
  {
    "id": "COM-D10",
    "tema": "Realineación del inventario: toma física, ubicaciones y estrategia de conteo",
    "decision": "DECISIÓN A TOMAR: ¿Con qué estructura se hará la toma física y cómo se mantendrá alineado el inventario después?\nTres parámetros encadenados: la casilla \"Ubicaciones de almacenamiento\" en los Ajustes de Inventario habilita crear ubicaciones internas que repliquen las zonas físicas; cada ubicación tiene en su ficha, sección Recuento cíclico, el campo \"Frecuencia de inventario\" (en días) que programa la fecha del próximo conteo de esa zona; y los conteos y ajustes se ejecutan desde la página Inventario físico, que también permite solicitar conteos a un usuario y fija por defecto el \"Día y mes del inventario anual\" definido en Ajustes. Sin ubicaciones activas no hay conteo cíclico, porque en Odoo los ciclos de conteo se programan por ubicación.",
    "situacion": "El inventario en Odoo no refleja la realidad física desde 2024 y parte de 2025, y el sistema opera con un almacén general único sin ubicaciones aunque físicamente la mercancía se ordena por tipo de producto.",
    "origen": "AS-IS Compras y Almacén, tareas 1.1 y 1.10 (Almacén) y 1.2 (Compras) · RX Compras y Almacén, área de mejora 1, área de mejora 9, oportunidades 4 y 5 `[Ev: COM-Alm-1.1, COM-Alm-1.2, COM-Alm-1.10, COM-1.2]` · PROP-NAT-007 y PROP-NAT-008",
    "opciones": [
      {
        "letra": "A",
        "config": "Toma física global sobre el almacén único desde Inventario físico + Día y mes del inventario anual programado",
        "afecta": "Resuelve la desalineación de una vez con la estructura actual, sin configurar nada más; entre tomas anuales el error puede volver a acumularse"
      },
      {
        "letra": "B",
        "config": "Activar Ubicaciones de almacenamiento, crear ubicaciones que repliquen las zonas físicas (víveres, químicos, etc.) y hacer la toma zona por zona",
        "afecta": "La foto inicial queda ordenada por zona y habilita transferencias internas y conteo por área; añade la elección de ubicación en cada recepción y despacho"
      },
      {
        "letra": "C",
        "config": "Opción B + Frecuencia de inventario por ubicación (ej. víveres cada 30 días, ferretería cada 180): el sistema agenda los recuentos por zona",
        "afecta": "El inventario se mantiene alineado de forma continua con conteos cortos y frecuentes en lo que más rota, en lugar de una toma anual traumática; requiere constancia del almacenista"
      }
    ],
    "ruta": "Inventario > Configuración > Ajustes > sección Almacén > Ubicaciones de almacenamiento (activar) · ubicaciones y su Frecuencia de inventario (sección Recuento cíclico) en Inventario > Configuración > Ubicaciones · conteos, ajustes y solicitudes de conteo en Inventario > Operaciones > Inventario físico · Día y mes del inventario anual en Inventario > Configuración > Ajustes > sección Operaciones",
    "recomendacion": "Opción B para la toma inicial (crear las ubicaciones cuesta poco y ordena el arranque) y evolucionar a la C activando frecuencias solo en las zonas de alta rotación. Este punto es prerrequisito de COM-D08: ninguna regla de reorden debe activarse antes de la toma física.",
    "elecciones": [
      "A",
      "B",
      "C"
    ]
  }
];

function crearEncuestas() {
  limpiarAnterior_();
  const folder = DriveApp.createFolder(CARPETA);

  const form = FormApp.create('Koral - Decisiones Odoo - Compras y Almacen');
  form.setDescription(PREAMBULO);
  try { form.setCollectEmail(true); } catch (e) { /* cuenta sin soporte */ }
  form.setProgressBar(true);

  form.addTextItem().setTitle('Nombre y apellido').setRequired(true);
  form.addTextItem().setTitle('Cargo').setRequired(true);

  DATA.forEach(function (p) {
    const page = form.addPageBreakItem();
    page.setTitle(p.id + ' - ' + p.tema);
    page.setHelpText(recortar_(
      p.decision +
      '\n\nSITUACIÓN ACTUAL: ' + p.situacion +
      '\n\nORIGEN: ' + p.origen
    ));

    let optTexto = '';
    p.opciones.forEach(function (o) {
      optTexto += 'OPCIÓN ' + o.letra + '\n' +
        'Cómo se configura: ' + o.config + '\n' +
        'Cómo afecta la operación de Koral: ' + o.afecta + '\n\n';
    });
    optTexto += 'RUTA EN ODOO: ' + p.ruta;
    form.addSectionHeaderItem()
      .setTitle('Opciones de configuración')
      .setHelpText(recortar_(optTexto));

    const q = form.addCheckboxItem();
    q.setTitle(p.id + ' - ¿Cuál opción elige su área?');
    q.setHelpText(recortar_(
      'RECOMENDACIÓN DEL CONSULTOR: ' + p.recomendacion +
      '\n\nMarque una opción, o varias solo si decide combinarlas.'
    ));
    q.setChoices(p.elecciones.map(function (e) {
      return q.createChoice(e.length > 1 ? 'Combinación ' + e : 'Opción ' + e);
    }));
    q.setRequired(true);

    form.addParagraphTextItem()
      .setTitle(p.id + ' - Motivo o comentario (opcional)')
      .setHelpText('Obligatorio explicar aquí si su elección difiere de la recomendación del consultor.');
  });

  const ss = SpreadsheetApp.create('Respuestas - Decisiones Odoo - Compras y Almacen');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  moverAcarpeta_(form.getId(), folder);
  moverAcarpeta_(ss.getId(), folder);

  const idx = SpreadsheetApp.create('Indice - Encuestas Koral Odoo');
  const sh = idx.getActiveSheet();
  sh.appendRow(['Area', 'Puntos', 'URL para responder', 'URL de edicion', 'Hoja de respuestas']);
  sh.appendRow(['Compras y Almacen', DATA.length, form.getPublishedUrl(), form.getEditUrl(), ss.getUrl()]);
  sh.autoResizeColumns(1, 5);
  moverAcarpeta_(idx.getId(), folder);

  Logger.log('Compras y Almacen -> responder: %s | editar: %s', form.getPublishedUrl(), form.getEditUrl());
  Logger.log('Indice: %s', idx.getUrl());
}

function limpiarAnterior_() {
  const it = DriveApp.getFoldersByName(CARPETA);
  while (it.hasNext()) {
    const f = it.next();
    const files = f.getFiles();
    while (files.hasNext()) files.next().setTrashed(true);
    f.setTrashed(true);
    Logger.log('Carpeta anterior "%s" enviada a la papelera con su contenido.', CARPETA);
  }
}

function moverAcarpeta_(fileId, folder) {
  DriveApp.getFileById(fileId).moveTo(folder);
}

function recortar_(t) {
  return t.length > 4000 ? t.substring(0, 3997) + '...' : t;
}
