---
proyecto: Koral Morrocoy
documento: Decisiones de Configuración de Odoo
version: 4.0 - para validación por área
fecha: 2026-08-04
salida a producción: 1 de octubre de 2026
---

# Decisiones de Configuración de Odoo - Koral

## Para qué es este documento

Antes de configurar Odoo hay que tomar 57 decisiones. No son decisiones técnicas: son decisiones de cómo quiere Koral trabajar. El sistema puede hacer lo mismo de varias maneras, y cada manera produce una información distinta y exige un trabajo distinto.

Cada decisión se presenta con sus opciones reales y con lo que cada una produce en la operación, descrito de forma neutral: qué información entrega, qué trabajo exige y qué condiciones requiere. La comparación entre opciones la hace el área. Al pie de cada decisión hay una recomendación del consultor, identificada como tal, que no sustituye la decisión de Koral.

**Lo que ya está resuelto no aparece aquí.** Koral arranca sobre dos desarrollos que Almus ya construyó: el paquete venezolano (tasa del BCV, facturación fiscal, retenciones, libros de IVA, IGTF, nómina venezolana) y el sistema hotelero (reservas, cobro de anticipos, cargo de consumos a la habitación, estado de habitaciones). Eso funciona de una sola manera y no hay nada que decidir.

## Cómo está organizado

Cada sección corresponde a un ámbito del negocio y se divide en dos partes:

- **Configuración:** cómo se comporta el sistema. Define qué información entrega y qué pasos exige.
- **Gobernanza:** quién hace qué. Define quién crea, quién autoriza y quién mantiene. Sin esto, la configuración queda a merced de la costumbre.

Al cierre de cada sección hay una tabla de responsables por designar: cargos que hay que nombrar, sin opciones que elegir.

Cuando dos opciones son niveles acumulativos (la siguiente incluye a la anterior), el punto lo indica. Cuando una decisión depende de otra, se señala al inicio con "Antes".

## Cómo usarlo

Cada área revisa solo su sección, en una sesión con el dueño del proceso. Por cada decisión: leer qué se decide, revisar las opciones, marcar una. Si la elección difiere de la recomendación, dejar dicho el motivo. Toma entre 40 y 70 minutos por área.

Fecha límite para cerrar las decisiones: **viernes 21 de agosto de 2026**.

## Índice

| Sección | Configuración | Gobernanza | Áreas que deciden |
|---|---|---|---|
| La empresa y la contabilidad | 1 a 7 | 8 a 9 | Gerencia General, Administración y Finanzas, Contraloría |
| Los productos | 10 a 17 | 18 a 20 | Compras, Almacén, A&B |
| El almacén y las compras | 21 a 31 | 32 a 33 | Compras, Almacén, Contraloría |
| Las cajas y el restaurante | 34 a 44 | 45 | A&B, Gerencia Hotelera |
| El personal | 46 a 53 | 54 | Talento Humano |
| Los accesos | 55 a 57 | - | Gerencia General, Contraloría |

---

# La empresa y la contabilidad

*Definen la estructura sobre la que se monta todo lo demás, así que van primero. Las decisiones 1 y 3 no se pueden revertir una vez aplicadas.*

## Configuración

### 1 · Qué empresas del grupo se llevan en el sistema

**La decisión:** ¿Odoo llevará solo la empresa que opera el hotel, o también las otras empresas del grupo?

**Por qué importa:** cada empresa con RIF propio necesita su propio espacio en el sistema, con contabilidad y libros separados. No pueden compartir uno solo ni una puede depender de la otra: para el fisco son entidades independientes.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Solo la operadora del hotel. Las otras empresas del grupo se registran únicamente como clientes o proveedores | Una sola contabilidad dentro del sistema. No hay que seleccionar empresa al registrar documentos. La contabilidad de las otras dos empresas se lleva fuera de Odoo |
| **B** | Las tres empresas del grupo desde el arranque, cada una con su contabilidad completa | Contabilidad y libros de las tres empresas en el sistema, con reportes por empresa y del grupo. Los usuarios habilitados en más de una seleccionan en cuál registran cada documento. La configuración contable inicial se realiza para cada empresa |
| **C** | El hotel primero; las demás se incorporan cuando su operación esté lista | En la primera etapa funciona como la opción A. Incorporar cada empresa posterior requiere realizar su configuración contable en ese momento |

**Dato a considerar:** la moneda de cada empresa se define al crearla y no puede modificarse una vez registrado el primer asiento contable.

**Recomendación del consultor:** C. Concentrar la implantación en el hotel y sumar las demás empresas después, cuando la operación esté estabilizada.

**Elección:** [ ] A · [ ] B · [ ] C

### 2 · Catálogo de cuentas cuando hay varias empresas

**Antes:** depende de la decisión 1. Si se lleva una sola empresa, esta decisión no aplica.

**La decisión:** ¿las empresas del grupo usan exactamente las mismas cuentas contables, cada una las suyas con la misma numeración, o cada giro de negocio tiene su propio catálogo?

**Por qué importa:** de esto depende cómo se comparan y consolidan los resultados entre empresas, y cómo se mantiene el catálogo en el tiempo.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Un solo catálogo de cuentas compartido por las tres empresas | El catálogo se mantiene una sola vez y las tres empresas usan las mismas cuentas. Un cambio en una cuenta aplica simultáneamente a las tres |
| **B** | El mismo catálogo, cargado por separado en cada empresa | Cada empresa tiene sus cuentas propias. Un cambio en una empresa no afecta a las otras. Mantener la misma numeración entre empresas depende de un procedimiento interno |
| **C** | Un catálogo distinto por tipo de negocio (hotel, alimentos, salud) | Cada empresa tiene el catálogo ajustado a su actividad. Comparar o consolidar entre empresas requiere una tabla de equivalencias entre cuentas |

**Recomendación del consultor:** B, apoyado en la regla de creación de cuentas de la tabla de responsables al cierre de esta sección.

**Elección:** [ ] A · [ ] B · [ ] C

### 3 · Caracas y el hotel: ¿sedes separadas dentro de la misma empresa?

**La decisión:** ¿la oficina de Caracas y el hotel se registran como dos sedes formalmente separadas, o como una sola empresa donde la separación se obtiene por reportes?

**Por qué importa:** define si cada documento queda marcado con la sede que lo originó, y cómo se trabaja la conciliación bancaria: los bancos y sus extractos quedan registrados en la empresa matriz, no en la sede.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Dos sedes formales: Caracas y Hotel | Cada documento queda identificado con su sede y los reportes se emiten por sede o consolidados. Los bancos y los extractos se registran en la matriz, de modo que conciliar un cobro de la sede cruza ambas: quien concilia trabaja en la matriz y en la sede. Los usuarios seleccionan sede al registrar |
| **B** | Una sola empresa; la separación Caracas vs Hotel se obtiene de la contabilidad analítica (decisión 5) | Los documentos no llevan sede asociada; la información por sede sale de la clasificación analítica. Bancos, extractos y conciliación quedan en una sola empresa y nadie cambia de empresa para conciliar. Los usuarios no seleccionan sede |

**Dato a considerar:** esta estructura no puede deshacerse una vez creada.

**Recomendación del consultor:** B, considerando que la conciliación cruzada obliga a los usuarios de la sede a trabajar también en la matriz.

**Elección:** [ ] A · [ ] B

### 4 · Operaciones entre empresas del grupo

**Antes:** solo aplica si se decidió llevar varias empresas (decisión 1).

**La decisión:** ¿se activan las operaciones entre empresas y, si se activan, hasta dónde se lleva el automatismo?

**Por qué importa:** con esta función activa, cuando una empresa del grupo registra un documento a nombre del contacto que representa a otra empresa del grupo, el sistema crea automáticamente el documento correspondiente en esa otra empresa. Cada opción es un nivel: la siguiente incluye a la anterior.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | No se activa | Cada empresa registra su documento por separado. La misma operación se captura dos veces y la coincidencia entre ambas se verifica manualmente |
| **B** | Se activa para la facturación | Al registrar la factura de venta en una empresa, el sistema crea la factura de compra correspondiente en la otra. La operación se captura una vez. El documento creado queda sin validar y sigue el circuito de revisión de la empresa que lo recibe. Requiere la versión de pago avanzada de Odoo |
| **C** | Se activa para la facturación y también para pedidos y movimientos de mercancía | Además de las facturas, el pedido de compra de una empresa genera el pedido de venta en la otra, y los movimientos de inventario entre ellas quedan reflejados en ambas. Requiere la versión de pago avanzada y que los flujos entre empresas estén definidos |

**Dato a considerar:** el documento en la otra empresa se crea únicamente cuando el cliente o proveedor seleccionado es el contacto que representa a esa empresa dentro de Odoo. Con cualquier otro contacto, el sistema no genera nada adicional.

**Recomendación del consultor:** A mientras solo esté el hotel en el sistema; evaluar B al incorporar la empresa de alimentos, que es donde existe el flujo cruzado.

**Elección:** [ ] A · [ ] B · [ ] C

### 5 · Contabilidad analítica (resultado por unidad de negocio)

**La decisión:** ¿se lleva contabilidad analítica y, si se lleva, con qué alcance?

**Por qué importa:** la contabilidad analítica es una segunda clasificación que acompaña a la cuenta contable e indica a qué unidad de negocio pertenece cada ingreso y cada gasto: hospedaje, A&B, marina, estacionamiento, Boca Seca, arrendamientos. Permite obtener el resultado de cada una sin crear empresas ni cuentas adicionales. Cada opción es un nivel: la siguiente incluye a la anterior.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | No se lleva | El resultado se obtiene a nivel de empresa y por cuenta contable. Conocer el resultado de cada unidad de negocio requiere reconstruirlo fuera del sistema |
| **B** | Se lleva con clasificación opcional | Los registros pueden clasificarse por unidad de negocio, pero el sistema no lo exige. El reporte por unidad refleja únicamente lo que se haya clasificado |
| **C** | Se lleva con clasificación obligatoria y asignación automática en los casos repetitivos | Todos los ingresos y gastos quedan clasificados y el reporte por unidad cubre el total. Un registro no se confirma sin clasificación; el sistema la propone en los casos repetitivos y el usuario la elige en el resto |
| **D** | Se lleva con un segundo criterio además de la unidad de negocio (temporada, evento, proyecto) | Se obtienen dos ángulos de análisis sobre los mismos registros. Cada registro presenta dos clasificaciones en lugar de una |

**Recomendación del consultor:** C, con la asignación automática cargada antes del arranque. El segundo criterio puede agregarse después sin rehacer lo anterior.

**Elección:** [ ] A · [ ] B · [ ] C · [ ] D

### 6 · Cierre de períodos contables

**La decisión:** ¿con qué frecuencia se aplica el cierre que admite excepciones y en qué momento se aplica el cierre definitivo?

**Por qué importa:** el sistema maneja dos tipos de cierre. Uno admite excepciones: un responsable puede levantarlo puntualmente y esa autorización queda registrada con motivo. El otro es definitivo y no admite excepción de ningún tipo. Ambos pueden usarse a la vez, con frecuencias distintas.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Cierre con excepciones cada mes, al presentar libros y declaraciones; cierre definitivo al cerrar el ejercicio auditado | Un mes cerrado no se modifica salvo autorización expresa, que queda con responsable y motivo. El ejercicio auditado queda sin posibilidad de modificación |
| **B** | Cierre con excepciones una sola vez al año, al cerrar el ejercicio; sin cierre definitivo | Los meses del ejercicio en curso permanecen modificables por los usuarios contables. Los reportes de meses ya emitidos pueden variar si se registra algo con fecha anterior |
| **C** | Cierre definitivo mes a mes | Un mes cerrado no admite modificación alguna, ni con autorización. Toda corrección posterior se registra en el mes en curso |

**Dato a considerar:** la pantalla para mover estos bloqueos está en la versión de pago avanzada de Odoo.

**Recomendación del consultor:** A.

**Elección:** [ ] A · [ ] B · [ ] C

### 7 · Libros de ventas

**La decisión:** ¿un solo libro de ventas para todo el hotel, o uno por cada punto que emite facturas?

**Por qué importa:** cada libro lleva su propia numeración correlativa. Si varios puntos emiten facturas con máquinas o series distintas, la numeración de cada uno debe corresponder con su punto de emisión. Cada opción es un nivel: la siguiente incluye a la anterior.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Un libro de ventas único para todo el hotel | Una sola numeración correlativa. Menos elementos que crear y mantener. Corresponde a un único punto de emisión fiscal |
| **B** | Un libro de ventas por cada punto que emite facturas | Cada punto lleva su numeración alineada con su máquina fiscal y sus ventas quedan separadas. Hay que crear y mantener un libro por punto |
| **C** | Además, libros de compras separados por área | Los documentos de compra quedan separados por área, adicional a la clasificación analítica. Hay más libros que crear y mantener |

**Dato a considerar:** cada cuenta bancaria y cada caja física llevan su propio libro en cualquiera de las opciones; es lo que permite conciliar cada una por separado.

**Recomendación del consultor:** B, por la correspondencia entre la numeración y el punto de emisión fiscal.

**Elección:** [ ] A · [ ] B · [ ] C

## Gobernanza

### 8 · Quién queda habilitado en más de una empresa

**Antes:** solo aplica si se decidió llevar varias empresas (decisión 1).

**La decisión:** ¿qué usuarios pueden trabajar en más de una empresa del grupo?

**Por qué importa:** el documento se registra en la empresa que el usuario tenga seleccionada al momento de crearlo.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | El equipo corporativo (finanzas, compras, contraloría, gerencia) habilitado en todas; el personal operativo solo en la empresa del hotel | El personal operativo no selecciona empresa y sus documentos siempre quedan en la del hotel. La selección de empresa aplica solo a los perfiles corporativos |
| **B** | Cada usuario habilitado en una sola empresa | Ningún usuario selecciona empresa. Quien deba operar en más de una necesita un usuario adicional por cada empresa |
| **C** | Todos los usuarios habilitados en todas las empresas | Cualquier usuario puede registrar en cualquier empresa, según cuál tenga seleccionada al momento |

**Recomendación del consultor:** A.

**Elección:** [ ] A · [ ] B · [ ] C

### 9 · Quién autoriza las excepciones de cierre

**Antes:** aplica si en la decisión 6 se eligió A o B.

**La decisión:** ¿quién puede levantar puntualmente un cierre para corregir un período ya cerrado?

**Por qué importa:** la autorización queda registrada con responsable y motivo, pero quien la otorga puede modificar información de períodos ya declarados.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Un solo responsable corporativo (administrador contable) | Todas las correcciones de períodos cerrados pasan por una misma persona, que responde por ellas. Su ausencia detiene las correcciones |
| **B** | Dos responsables designados | Siempre hay alguien disponible para autorizar. La responsabilidad se comparte entre dos personas |
| **C** | Cualquier usuario con perfil contable completo | No hay demoras para corregir. La autorización deja de ser un control y pasa a ser un trámite del propio usuario |

**Recomendación del consultor:** A, con un suplente designado por escrito para ausencias prolongadas.

**Elección:** [ ] A · [ ] B · [ ] C

### Responsables por designar en esta sección

| Función | Responsable |
|---|---|
| Crear y modificar cuentas del catálogo contable | ______ |
| Aplicar el cierre mensual y el cierre definitivo | ______ |
| Definir y mantener las unidades de negocio de la clasificación analítica | ______ |
| Autorizar la creación de una nueva empresa o sede en el sistema | ______ |

---

# Los productos

*Definen cómo se construye el catálogo. Conviene cerrarlas antes de cargar los datos: las decisiones 11 y 12 no admiten corrección posterior sobre lo ya cargado.*

## Configuración

### 10 · Cómo se agrupan los productos

**La decisión:** ¿los productos se agrupan por lo que son (víveres, bebidas, químicos, ferretería), por quién los consume (cocina, bar, housekeeping, mantenimiento), o por naturaleza con un segundo nivel de detalle?

**Por qué importa:** el grupo al que pertenece un producto define cómo se calcula su costo y a qué cuenta contable va. Un producto pertenece a un solo grupo, y el segundo nivel no hereda la configuración del primero.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Un nivel, por lo que son: víveres, bebidas, químicos y limpieza, ferretería y repuestos, suministros de huésped, servicios | Cada familia comparte forma de costeo y cuentas contables. Los productos que usan varias áreas existen una sola vez. El consumo por área se obtiene por zona del depósito y por la clasificación analítica |
| **B** | Un nivel, por quién los consume: cocina, bar, housekeeping, mantenimiento | Los productos usados por más de un área se registran en cada rama o se asignan a una sola. La configuración de costeo y cuentas se define en cada rama por separado |
| **C** | Dos niveles: familias por naturaleza con subfamilias dentro de cada una (bebidas / licores, bebidas / gaseosas) | Permite costeo y cuentas distintas por subfamilia. Cada subfamilia requiere su propia configuración contable, que no se hereda de la familia |

**Recomendación del consultor:** C, con subfamilias únicamente en las familias donde el costeo o la cuenta contable cambien; en el resto, un solo nivel como en A.

**Elección:** [ ] A · [ ] B · [ ] C

### 11 · Qué característica abre una variante

**La decisión:** ¿qué característica de un producto hace que se abra en variantes: presentación y tamaño, o también marca y color?

**Por qué importa:** cada variante es una referencia independiente, con su propio inventario, su propio precio de proveedor y su propia línea en cada conteo.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Abren variante solo las características que obligan a contar por separado o que cambian el precio de compra: presentación, tamaño, contenido. Marca y color quedan como información del producto | El catálogo tiene una línea por cada artículo que se cuenta o se compra por separado. Marca y color se consultan en la ficha pero no generan existencias propias |
| **B** | Abre variante cada característica física registrada, incluidas marca y color | Se identifican marca y color en existencias. Cada combinación aparece como línea propia en conteos, órdenes de compra y precios de proveedor |
| **C** | Ninguna característica abre variantes: cada presentación es un producto independiente | Cada presentación se crea y mantiene por separado, sin relación entre ellas en el catálogo |

**Dato a considerar:** una vez que una característica se usa en un producto, la regla de esa característica no se puede cambiar.

**Recomendación del consultor:** A, aplicando la regla a lo ya reclasificado antes de continuar la carga.

**Elección:** [ ] A · [ ] B · [ ] C

### 12 · Unidades de compra y de consumo

**La decisión:** ¿el sistema convierte automáticamente entre la unidad en que se compra (caja, saco) y la unidad en que se consume (unidad, kilo, litro), y hasta dónde se lleva?

**Por qué importa:** define si la conversión la hace el sistema o una persona, y si se puede calcular el costo por porción. Cada opción es un nivel: la siguiente incluye a la anterior.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Todo se maneja en "unidad", sin conversiones | Las compras en caja o saco se traducen a unidades antes de registrarlas. El costo por kilo o por porción no se calcula en el sistema |
| **B** | El almacén cuenta en unidad, kilo o litro; la orden de compra sale en la unidad del proveedor y el sistema convierte al recibir | La conversión se define una vez por producto y el sistema la aplica en cada compra y recepción. Los conteos se hacen siempre en la unidad base |
| **C** | Además, código de barras por empaque para recibir y contar escaneando la caja completa | Permite registrar recepciones y conteos por empaque completo. Requiere mantener un código adicional por producto |

**Dato a considerar:** si una conversión se define mal, corregirla después no ajusta los movimientos ya registrados con ella.

**Recomendación del consultor:** B, y C en las familias que se reciban con escáner.

**Elección:** [ ] A · [ ] B · [ ] C

### 13 · Códigos internos y de barras

**La decisión:** ¿se impone una forma única de codificar los productos y se etiqueta con código de barras lo que no lo traiga de fábrica?

**Por qué importa:** define cómo se busca un producto en el punto de venta y si los conteos pueden hacerse con escáner. Cada opción es un nivel: la siguiente incluye a la anterior.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Sin regla de codificación; código de barras solo el que traiga el fabricante | Los productos se buscan por nombre. Los conteos con escáner cubren únicamente los productos que traen código de fábrica |
| **B** | Código interno con la misma lógica para todos (prefijo de familia más correlativo); código de barras solo el de fábrica | Todos los productos se buscan por su código interno. El escaneo sigue limitado a lo que trae código de fábrica |
| **C** | Código interno normado y etiqueta de código de barras propia para lo que no lo traiga | Todos los productos se buscan por código y se escanean. El sistema impide repetir un código de barras. Requiere etiquetar los productos que no lo traen |

**Dato a considerar:** realizar conteos y recepciones escaneando con dispositivo requiere la versión de pago avanzada de Odoo.

**Recomendación del consultor:** C, definiendo la codificación durante la misma reclasificación del catálogo.

**Elección:** [ ] A · [ ] B · [ ] C

### 14 · Estructura del maestro de contactos

**La decisión:** ¿los proveedores y agencias se registran como empresa con sus contactos y direcciones asociados, o cada contacto y dirección va como registro independiente?

**Por qué importa:** el RIF, su validación y el bloqueo de RIF repetidos ya vienen resueltos por el paquete venezolano. Lo que se define es cómo se agrupan los saldos, las retenciones y los libros.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Cada proveedor o agencia es una empresa con su RIF; sus vendedores, cobranzas y direcciones quedan asociados a ella. Las personas naturales se registran como individuo | Saldos, retenciones y libros se agrupan por empresa proveedora. Los cambios de personal de contacto no modifican el registro fiscal |
| **B** | Cada persona o dirección se registra como un contacto independiente | Un mismo proveedor puede existir en varios registros, con los saldos y documentos repartidos entre ellos |

**Recomendación del consultor:** A.

**Elección:** [ ] A · [ ] B

### 15 · Estructura de las listas de precios de venta

**La decisión:** ¿una sola lista de precios o una lista base con listas derivadas por segmento (empleados, agencias, eventos)?

**Por qué importa:** las tarifas de habitación las maneja el sistema hotelero. Esto aplica a A&B, lavandería, estacionamiento y marina.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Una sola lista de precios; las diferencias por segmento se aplican como descuento en cada venta | Un solo precio por producto que mantener. El descuento por segmento se aplica venta por venta |
| **B** | Lista base más listas derivadas por segmento, calculadas como porcentaje sobre la base | El precio de cada segmento se calcula solo y se actualiza al cambiar la base. Requiere definir los segmentos y su porcentaje |
| **C** | Una lista independiente por segmento, con precios cargados uno a uno | Cada segmento tiene precios propios sin relación con los demás. Un cambio de precio se replica manualmente en cada lista |

**Recomendación del consultor:** B.

**Elección:** [ ] A · [ ] B · [ ] C

### 16 · Moneda en que se expresan los precios de venta

**La decisión:** ¿los precios de venta se cargan en divisa o en bolívares?

**Por qué importa:** el cobro en bolívares con la tasa del día lo resuelve el paquete venezolano en cualquiera de los dos casos. Lo que cambia es en qué moneda se mantiene la lista.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Precios cargados en divisa; el sistema los convierte a bolívares con la tasa del día al momento de cobrar | El precio se mantiene estable frente a la variación de la tasa. La lista se edita solo cuando cambia la política de precios |
| **B** | Precios cargados en bolívares | El precio en bolívares es exactamente el cargado, sin conversión. Cada variación de tasa requiere editar la lista |

**Recomendación del consultor:** A.

**Elección:** [ ] A · [ ] B

### 17 · Servicios y consumibles internos

**La decisión:** ¿qué se registra como servicio, qué como producto con control de existencias y qué como producto sin control?

**Por qué importa:** solo lo que tiene control de existencias aparece en los conteos, avisa cuando se agota y entra en la valoración del inventario. Las tres categorías conviven: la decisión es qué familia va en cada una.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Servicios: lavandería, estacionamiento, marina, decoraciones | Se cobran o se cargan a la habitación sin generar movimientos de almacén. No aparecen en conteos ni en la valoración del inventario |
| **B** | Con control de existencias: químicos, repuestos, blancos, víveres y bebidas | Aparecen en conteos, permiten alerta de faltante y registran costo de consumo por área. Cada entrada y salida debe registrarse |
| **C** | Sin control de existencias: papelería y artículos menores | Se registran como gasto al comprarse. No aparecen en conteos ni generan alertas de faltante |

**Recomendación del consultor:** adoptar las tres como regla escrita de qué familia corresponde a cada tipo, y revisar en la carga que ningún servicio quede cargado como mercancía.

**Elección:** [ ] Las tres, con la asignación de familias propuesta · [ ] Otra asignación de familias

## Gobernanza

### 18 · Quién crea y modifica el catálogo de productos

**La decisión:** ¿quién puede crear productos, variantes y categorías?

**Por qué importa:** el catálogo actual está fragmentado por haberse cargado desde varios frentes. La regla de variantes de la decisión 11 solo se sostiene si alguien la aplica de forma consistente.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Solo Compras crea productos, variantes y categorías; las áreas solicitan | Un solo criterio aplicado al catálogo. Las áreas dependen de Compras para incorporar un artículo nuevo |
| **B** | Compras crea productos y variantes; las categorías las administra Contabilidad | El criterio contable queda en manos de quien responde por él. Requiere coordinación entre ambas áreas para dar de alta un producto nuevo |
| **C** | Cada área crea los productos de su ámbito | Cada área incorpora lo que necesita sin esperar. El criterio de catálogo y de variantes depende de cada persona que carga |

**Recomendación del consultor:** B, que mantiene un solo criterio de catálogo y deja la configuración contable en Contabilidad.

**Elección:** [ ] A · [ ] B · [ ] C

### 19 · Quién da de alta proveedores y clientes

**La decisión:** ¿quién registra un proveedor o cliente nuevo y qué datos se exigen antes de poder operar con él?

**Por qué importa:** un proveedor sin RIF o mal clasificado se detecta al momento de retener o de armar los libros, cuando la factura ya está registrada.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Un área designada da de alta a todos los terceros, exigiendo RIF, tipo de contribuyente y clasificación antes del primer documento | Los terceros entran completos desde el inicio. Registrar una operación con un proveedor nuevo requiere el paso previo de alta |
| **B** | Cada área da de alta a sus terceros, con los mismos datos obligatorios | No hay esperas para registrar. La consistencia de la clasificación depende de cada área |
| **C** | Cada área da de alta a sus terceros sin requisitos previos, y se completan los datos después | El registro es inmediato. Los datos faltantes se detectan al momento de retener, facturar o emitir libros |

**Recomendación del consultor:** A.

**Elección:** [ ] A · [ ] B · [ ] C

### 20 · Quién puede vender fuera de la lista de precios

**La decisión:** ¿los descuentos y precios fuera de lista los puede aplicar cualquier persona que cobra, nadie, o solo un perfil autorizado?

**Por qué importa:** define si el precio de venta es una regla del sistema o una decisión de quien atiende al cliente.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | El descuento manual queda deshabilitado: se vende siempre al precio de la lista que corresponda al cliente | El precio cobrado siempre coincide con la lista. Toda excepción exige crear o ajustar una lista de precios antes de vender |
| **B** | El descuento manual queda habilitado para quienes cobran | Las excepciones se resuelven en el momento. El descuento aplicado queda registrado en cada venta y se revisa después |
| **C** | El descuento manual se restringe a un perfil autorizado | Solo el perfil autorizado aplica excepciones. Requiere personalización, porque el sistema habilita el descuento para todos los usuarios de venta o para ninguno |

**Recomendación del consultor:** A, resolviendo los casos recurrentes con listas por segmento (decisión 15).

**Elección:** [ ] A · [ ] B · [ ] C

### Responsables por designar en esta sección

| Función | Responsable |
|---|---|
| Mantener la regla de variantes y aprobar características nuevas | ______ |
| Definir y mantener las listas de precios por segmento | ______ |
| Autorizar la creación de categorías y su configuración contable | ______ |
| Depurar duplicados del catálogo y del maestro de contactos | ______ |

---

# El almacén y las compras

*Las decisiones 23 y 24 se toman junto con Contabilidad. La 27 no se puede activar hasta que se realice la toma física.*

## Configuración

### 21 · Un depósito o varios

**La decisión:** ¿el hotel tiene un solo depósito con zonas internas (cocina, barra, nevera de caja, taller), o cada área es un depósito independiente?

**Por qué importa:** un depósito independiente tiene sus propias entradas, salidas y reposición. Una zona interna es una división del mismo depósito y los movimientos entre zonas son transferencias internas.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Un solo depósito con zonas internas por área | Un solo juego de documentos de entrada y salida. Los movimientos entre zonas se registran como transferencias internas. El stock de todas las zonas se consulta en una vista |
| **B** | Cuatro depósitos independientes (general, cocina, barra, taller) | Cada área lleva sus propios documentos de entrada, salida y reposición, y requiere quien los registre. Los movimientos entre áreas generan documentos de traslado entre depósitos |
| **C** | Depósito general más un depósito independiente para el taller | El inventario de mantenimiento queda separado, con sus propios documentos y responsable. El resto de las áreas opera como zonas del depósito general |

**Recomendación del consultor:** A, considerando que el hotel opera hoy con un solo almacenista.

**Elección:** [ ] A · [ ] B · [ ] C

### 22 · Zonas del depósito y conteos programados

**Antes:** depende de la decisión 21.

**La decisión:** ¿se crean zonas dentro del depósito y el sistema programa conteos por zona?

**Por qué importa:** el inventario del sistema está desalineado desde 2024. La frecuencia de conteo determina en cuánto tiempo se detecta una diferencia. Cada opción es un nivel: la siguiente incluye a la anterior.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Sin zonas: un solo espacio de existencias, con conteo una vez al año | El stock se ve en total, sin distinguir en qué área está físicamente. Las diferencias se detectan en el conteo anual |
| **B** | Zonas por área física, sin conteos programados | El stock se consulta por zona y los ajustes se hacen por zona. La programación de los conteos queda fuera del sistema |
| **C** | Zonas por área física, cada una con su frecuencia de conteo (por ejemplo: cocina, barra y nevera cada 30 días; depósito general cada 90; taller cada 180) | El sistema indica qué zona tiene el conteo vencido. Las diferencias se detectan dentro del plazo definido para cada zona. Requiere realizar esos conteos en la frecuencia establecida |

**Recomendación del consultor:** C, ajustando las frecuencias a los tres meses según las diferencias que se observen.

**Elección:** [ ] A · [ ] B · [ ] C

### 23 · Método de costo del inventario

**La decisión:** ¿el costo de cada producto es un valor fijo que se actualiza manualmente, el promedio de lo pagado, o el de la compra más antigua que queda en existencia?

**Por qué importa:** es el costo con que se valora cada plato, cada salida y cada merma, y el que forma el valor del almacén.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Costo fijo, actualizado manualmente | El costo se mantiene en el valor cargado hasta que alguien lo modifique. Cada actualización se hace producto por producto |
| **B** | Costo promedio: el sistema lo recalcula con cada compra | El costo refleja el promedio de lo efectivamente pagado y se actualiza sin intervención. Las variaciones de precio se reparten entre todas las unidades en existencia |
| **C** | Costo de la compra más antigua en existencia: cada salida toma el costo de la compra más vieja que quede | El costo de cada salida corresponde a una compra concreta. Exige que las recepciones se registren en el orden y la fecha en que ocurrieron |

**Dato a considerar:** el método se define por familia de productos, de modo que puede ser distinto en víveres y en ferretería.

**Recomendación del consultor:** B para las familias de A&B y suministros, por la variación de precios entre compras.

**Elección:** [ ] A · [ ] B · [ ] C

### 24 · Momento en que el inventario impacta la contabilidad

**Antes:** se decide junto con la 23.

**La decisión:** ¿el valor del inventario se lleva a la contabilidad con un asiento al cierre del mes, o con cada factura registrada?

**Por qué importa:** define en qué momento el balance refleja el valor del almacén y cuándo hace Contabilidad ese trabajo.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Al cierre del mes, con un asiento que el sistema propone | El trabajo contable se concentra en el cierre. Entre cierres, el valor contable del almacén corresponde al último cierre realizado |
| **B** | Con cada factura registrada | El valor contable del almacén se actualiza de forma continua. Requiere que las facturas se registren en su período y que las cuentas de inventario estén configuradas desde el inicio |

**Recomendación del consultor:** A, con la posibilidad de pasar a B cuando el registro de facturas opere sin rezago.

**Elección:** [ ] A · [ ] B

### 25 · Pasos de la recepción de mercancía

**La decisión:** ¿recibir y guardar es un solo movimiento, o se separa en recibir primero y guardar después?

**Por qué importa:** cada paso es un documento que alguien valida por cada llegada de proveedor.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Un paso: se recibe y la mercancía queda disponible | Un documento por recepción. La verificación contra pedido y factura se realiza antes de validarlo |
| **B** | Dos pasos: recibir en una zona de entrada y luego guardar | Dos documentos por recepción. El sistema distingue la mercancía recibida de la ya ubicada en su zona |
| **C** | Tres pasos: recibir, revisar y guardar | Tres documentos por recepción, con una etapa de revisión registrada entre ambas |

**Recomendación del consultor:** A, dado que la verificación contra pedido y factura ya se realiza al momento de recibir.

**Elección:** [ ] A · [ ] B · [ ] C

### 26 · Control de lotes y vencimiento

**La decisión:** ¿se registran lote y fecha de vencimiento, y en qué productos?

**Por qué importa:** cada producto con control de lote obliga a indicar el lote en cada recepción y en cada salida. Cada opción es un nivel: la siguiente incluye a la anterior.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Sin control de lotes | Las recepciones y salidas no piden lote. El sistema no emite alertas de vencimiento |
| **B** | Control de lote y vencimiento en proteínas y perecederos críticos | En esos productos, cada recepción y salida piden lote y fecha; el sistema alerta los próximos a vencer y permite despachar primero el más antiguo. El resto del catálogo no pide lote |
| **C** | Control de lotes en todo el catálogo de A&B | Todas las recepciones y salidas de A&B piden lote, incluidas las salidas diarias a cocina |

**Recomendación del consultor:** B.

**Elección:** [ ] A · [ ] B · [ ] C

### 27 · Cómo se dispara la reposición

**Antes:** no se activa antes de la toma física (decisión 22): el sistema propone en función del stock que tenga registrado.

**La decisión:** ¿se usan mínimos de reposición y, si se usan, el sistema avisa o genera el pedido directamente?

**Por qué importa:** define quién decide qué se pide y qué condiciones deben cumplirse para que la propuesta del sistema sea utilizable.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Sin mínimos: el pedido se arma a partir del conteo o del criterio de quien compra | El sistema no interviene en la decisión de qué pedir. No requiere mínimos cargados |
| **B** | Con mínimos, en modo aviso: el sistema lista los productos bajo mínimo y una persona decide qué pedir | El cálculo de qué está bajo mínimo lo hace el sistema; la decisión de compra sigue siendo de una persona. Requiere mínimos definidos por producto |
| **C** | Con mínimos, en modo automático: el sistema genera el pedido al proveedor de la ficha | El pedido se crea sin intervención. Requiere mínimos calibrados, proveedor y precio cargados en cada producto, y stock del sistema coincidente con el físico |

**Dato a considerar:** el modo se define producto por producto, de manera que B y C pueden convivir en el mismo catálogo. Existe además la posibilidad de que el sistema proponga cantidades según el consumo histórico, disponible una vez que haya historial de salidas registrado.

**Recomendación del consultor:** B al cerrar la toma física, pasando a C en los productos de consumo estable cuando los mínimos estén validados con datos.

**Elección:** [ ] A · [ ] B · [ ] C

### 28 · Aprobación de compras por monto

**La decisión:** ¿las compras requieren una aprobación registrada en el sistema a partir de cierto monto?

**Por qué importa:** hoy la aprobación de Gerencia ocurre fuera del sistema. Cada opción es un nivel: la siguiente incluye a la anterior.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Sin aprobación en el sistema | Cualquier usuario de compras confirma cualquier monto. La autorización se sigue gestionando por el canal actual |
| **B** | Las compras sobre un monto definido quedan en espera hasta que un aprobador las confirme; las menores se confirman directo | La aprobación queda registrada con fecha y responsable y puede darse desde cualquier dispositivo. Las compras sobre el monto se detienen hasta que el aprobador actúe |
| **C** | Lo anterior más una señal que marca el pago cuando pedido, recepción y factura no coinciden | Agrega una verificación automática antes de pagar. Requiere la versión de pago avanzada de Odoo |

**Recomendación del consultor:** B, con el monto definido en la decisión 32.

**Elección:** [ ] A · [ ] B · [ ] C

### 29 · Control de la factura contra lo recibido

**La decisión:** ¿la factura del proveedor se registra por lo que se pidió o por lo que efectivamente se recibió?

**Por qué importa:** define si puede registrarse una factura antes de que la mercancía llegue.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Por las cantidades recibidas | La factura se propone con lo que el almacén dio por recibido. Facturar exige que la recepción esté registrada primero |
| **B** | Por las cantidades pedidas | La factura se propone con lo que se pidió, sin esperar la recepción. Las diferencias entre lo pedido y lo recibido se detectan al conciliar o al contar |

**Dato a considerar:** el criterio se define por producto, de modo que puede ser distinto en mercancía y en servicios.

**Recomendación del consultor:** A para mercancía y B para servicios, donde no hay recepción física que registrar.

**Elección:** [ ] A · [ ] B · [ ] A para mercancía y B para servicios

### 30 · Acuerdos con proveedores recurrentes

**La decisión:** ¿se registran acuerdos con los proveedores de siempre y, si se registran, de qué tipo?

**Por qué importa:** define de dónde toma el precio cada pedido y cuánto se captura de nuevo en cada compra. Los dos tipos pueden usarse a la vez con proveedores distintos.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Sin acuerdos: cada pedido se arma desde cero, eligiendo proveedor y precios en el momento | No hay documentos adicionales que mantener. El precio se negocia y se captura en cada compra |
| **B** | Acuerdo con precios pactados y fecha de vencimiento; los pedidos descuentan de él | Los pedidos toman el precio pactado y la vigencia del acuerdo queda visible en el sistema. Los precios se cargan al crear el acuerdo y se actualizan al renovarlo |
| **C** | Plantilla de pedido reutilizable, sin precios comprometidos | El pedido recurrente se genera desde una lista precargada y puede dirigirse a distintos proveedores. El precio se define en cada pedido |

**Recomendación del consultor:** B con los proveedores recurrentes de A&B, con vigencias cortas por la variación de precios, y C para los pedidos repetitivos sin precio comprometido.

**Elección:** [ ] A · [ ] B · [ ] C · [ ] B y C combinadas

### 31 · Registro de la merma

**La decisión:** ¿lo que se daña o se vence se registra como merma con su motivo, o se refleja como faltante en el conteo?

**Por qué importa:** define si la merma se puede separar de las diferencias de conteo en los reportes.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Cada merma se registra al ocurrir, con fecha, cantidad, responsable y motivo, en una cuenta de gasto separada | La merma se consulta por producto, período y zona, separada de los descuadres de conteo. Requiere registrar cada merma en el momento en que ocurre |
| **B** | Las mermas y las diferencias de conteo se registran juntas como un mismo ajuste | Un solo número de ajuste por conteo, sin distinguir vencimiento, daño o diferencia de conteo. No requiere registro adicional durante el mes |

**Recomendación del consultor:** A.

**Elección:** [ ] A · [ ] B

## Gobernanza

### 32 · Quién aprueba las compras y desde qué monto

**Antes:** aplica si en la decisión 28 se eligió B o C.

**La decisión:** ¿quién puede aprobar las compras que superan el monto, y cuál es ese monto?

**Por qué importa:** el aprobador es quien libera la compra para que se ejecute; su disponibilidad determina el tiempo de respuesta ante una necesidad urgente.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Un único aprobador: Gerencia General | Toda compra sobre el monto pasa por la misma persona. Su ausencia detiene esas compras hasta su regreso |
| **B** | Dos o tres aprobadores habilitados; cualquiera de ellos puede aprobar | Siempre hay alguien disponible para aprobar, incluso en fin de semana. La responsabilidad se comparte entre los habilitados |
| **C** | El aprobador varía según el área que compra | Cada área responde por su gasto. Requiere definir y mantener la correspondencia entre área y aprobador |

**Monto a partir del cual se requiere aprobación:** ______

**Recomendación del consultor:** B, para que la aprobación no dependa de una sola persona.

**Elección:** [ ] A · [ ] B · [ ] C

### 33 · Quién puede ajustar inventario y registrar mermas

**La decisión:** ¿quién puede modificar las existencias del sistema fuera de una compra o una venta?

**Por qué importa:** un ajuste de inventario cambia el valor del almacén sin que exista un documento de compra o venta detrás.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Solo el almacenista registra conteos y mermas; los ajustes de valor los revisa Contabilidad | Las existencias las modifica quien las custodia y el impacto contable queda revisado. Requiere que el almacenista registre en el momento |
| **B** | El almacenista y los responsables de cocina y barra registran mermas de su área; los conteos los realiza el almacenista | Cada área registra su propia merma, más cerca del momento en que ocurre. Más personas con capacidad de modificar existencias |
| **C** | Cualquier usuario de inventario puede ajustar y registrar mermas | No hay demoras para corregir una diferencia. La trazabilidad de quién ajustó qué depende de la revisión posterior |

**Recomendación del consultor:** B para mermas, A para conteos y ajustes de valor.

**Elección:** [ ] A · [ ] B · [ ] C

### Responsables por designar en esta sección

| Función | Responsable |
|---|---|
| Definir y mantener los mínimos de reposición por producto | ______ |
| Ejecutar la toma física inicial y los conteos programados | ______ |
| Negociar y renovar los acuerdos con proveedores recurrentes | ______ |
| Revisar mensualmente el reporte de mermas | ______ |

---

# Las cajas y el restaurante

*El cargo de consumos a la habitación, el desayuno incluido y la facturación al huésped ya vienen resueltos por el sistema hotelero: no aparecen aquí.*

## Configuración

### 34 · Cuántas cajas se configuran

**La decisión:** ¿una caja por punto físico (restaurante, bar, tienda/piscina) o una sola para todo el hotel?

**Por qué importa:** el cierre, el arqueo y el descuento de inventario se hacen por caja.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Una caja por punto físico, cada una descontando del inventario de su área | Cada punto tiene su cierre, su arqueo y sus ventas por separado. Se abre y cierra una sesión por caja cada día |
| **B** | Una sola caja para todo el hotel | Un cierre por día. Las ventas y el efectivo de los tres puntos se totalizan juntos y el inventario se descuenta de una sola ubicación |
| **C** | Restaurante y bar comparten caja; tienda/piscina tiene la suya | Dos cierres por día. Restaurante y bar comparten arqueo, inventario y plano de mesas; la tienda queda separada |

**Recomendación del consultor:** A si el bar y la tienda manejan efectivo e inventario propios; C si el bar cobra por la caja del restaurante como se hace hoy.

**Elección:** [ ] A · [ ] B · [ ] C

### 35 · Formas de pago

**La decisión:** ¿cada medio de cobro se registra por separado (efectivo en bolívares, efectivo en dólares, punto bancario, pago móvil, Zelle) o se agrupan?

**Por qué importa:** el cierre de caja cuadra por forma de pago y cada forma se concilia contra su banco o caja.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Un medio por cada forma real de cobro, cada uno con su banco o caja de destino y con número de referencia obligatorio donde aplique | El cierre muestra el total cobrado por cada medio y cada uno se concilia contra su destino. El impuesto a las transacciones en divisa se aplica a los medios que corresponda. Requiere configurar cada medio con su destino |
| **B** | Medios agrupados (un "efectivo", un "digital") | El cierre muestra totales agrupados. La separación por moneda y por banco se realiza fuera del sistema |

**Recomendación del consultor:** A, que además es lo que utiliza el cobro de anticipos del hotel para conciliar.

**Elección:** [ ] A · [ ] B

### 36 · Apertura y cierre de caja

**La decisión:** ¿cada cajero abre y cierra su propio turno, o la caja queda abierta todo el día y cada quien se identifica con su clave?

**Por qué importa:** define a qué turno o a qué persona queda asociada una diferencia de efectivo. Cada opción es un nivel: la siguiente incluye a la anterior.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Un turno, un cierre: cada cajero cuenta el efectivo al abrir y al cerrar | Las diferencias quedan asociadas a un turno y a quien lo cerró. Se realizan dos o tres cierres al día por caja |
| **B** | Caja abierta todo el día; cada empleado se identifica con clave o carnet y sus ventas quedan a su nombre | Cada venta queda asociada a quien la registró. El conteo de efectivo es uno al día, asociado al cierre del día y no a cada turno |
| **C** | Lo anterior más registro del efectivo entregado en cada cambio de turno | Cada venta queda asociada a quien la registró y el efectivo entregado en cada relevo queda documentado. Agrega un registro por cambio de turno |

**Recomendación del consultor:** B en restaurante y bar, donde la identificación por empleado sirve además para el reparto del 10%, y A en la tienda si la atiende una sola persona por turno.

**Elección:** [ ] A · [ ] B · [ ] C

### 37 · Descuadre máximo tolerado en el cierre

**La decisión:** ¿el sistema exige autorización de un gerente cuando el conteo del cierre no coincide con lo esperado por encima de cierto monto?

**Por qué importa:** define si un descuadre puede cerrarse sin que nadie más lo vea.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Se define un monto máximo de diferencia; por encima, el cierre requiere autorización de un gerente | Los descuadres relevantes quedan revisados y autorizados en el momento. Cerrar con una diferencia mayor exige la presencia de un gerente |
| **B** | Sin monto máximo: el cierre se completa con la diferencia que resulte | El cierre nunca se detiene. Las diferencias se revisan después, en el reporte de cierres |

**Monto máximo de diferencia (si se elige A):** ______

**Recomendación del consultor:** A, con un monto bajo definido por Administración.

**Elección:** [ ] A · [ ] B

### 38 · Plano de mesas por zona

**La decisión:** ¿las mesas se organizan en un plano por zona de servicio (salón, piscina, muelle) o en un solo plano?

**Por qué importa:** el mesonero trabaja sobre el plano para tomar y cobrar la cuenta de cada mesa.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Un plano por zona, con mesas numeradas sin repetirse entre zonas | Cada mesonero trabaja sobre el plano de su zona y puede mover la cuenta de una zona a otra. Requiere definir y mantener los tres planos |
| **B** | Un solo plano con todas las mesas | Todas las mesas se ven en la misma pantalla, sin distinción de zona |

**Recomendación del consultor:** A.

**Elección:** [ ] A · [ ] B

### 39 · Tratamiento del 10% de servicio

**La decisión:** ¿el 10% se suma automáticamente a la cuenta y se registra aparte, o se agrega manualmente en cada cobro?

**Por qué importa:** el 10% se reparte a los mesoneros, de modo que debe poder separarse del ingreso por venta.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Se suma automáticamente a cada cuenta y se registra en una cuenta contable separada | El monto acumulado del 10% se consulta por período y queda disponible para el reparto. Se aplica a todas las cuentas por igual |
| **B** | Se agrega manualmente en cada cobro | Cada cuenta se cobra con o sin el 10% según el caso. El monto a repartir se reconstruye a partir de las ventas que lo incluyeron |

**Pendiente asociado:** Contabilidad debe definir si ese 10% se registra como dinero que el hotel debe a los mesoneros o como ingreso propio. Cambia la cuenta contable, no la operación.

**Recomendación del consultor:** A.

**Elección:** [ ] A · [ ] B

### 40 · Cómo llega la comanda a cocina y barra

**La decisión:** ¿por impresora en cada estación, por pantalla, o una combinación?

**Por qué importa:** hoy la impresora de cocina está dañada, la caja imprime todas las comandas y la confirmación de que el pedido llegó se hace por WhatsApp o radio.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Una impresora por estación: cocina recibe la comida, barra las bebidas | La comanda llega impresa en cada estación. Requiere una impresora por estación y su mantenimiento. La confirmación de recepción se sigue haciendo por el canal actual |
| **B** | Una pantalla por estación, donde la orden pasa de "por preparar" a "listo" con alarma de tiempo | La cocina confirma la orden moviéndola en pantalla y el sistema registra el tiempo transcurrido de cada pedido. Requiere la versión de pago avanzada de Odoo y una pantalla por estación |
| **C** | Pantalla en una estación e impresora en otra | Cada estación opera con el canal elegido. Requiere ambos equipos |

**Recomendación del consultor:** B en cocina si el proyecto queda en la versión de pago, que la nómina venezolana ya requiere; evaluar impresora en barra.

**Elección:** [ ] A · [ ] B · [ ] C

### 41 · Recetas

**La decisión:** ¿se cargan recetas para que cada plato descuente sus ingredientes al venderse, y hasta dónde?

**Por qué importa:** define si el consumo de insumos se explica por las ventas y si se puede calcular el costo de cada plato. Cada opción es un nivel: la siguiente incluye a la anterior.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Sin recetas | Las ventas no afectan el inventario de ingredientes; los insumos se ajustan por conteo |
| **B** | Receta por plato, que descuenta los ingredientes al vender | Cada venta descuenta los ingredientes definidos. Requiere levantar y mantener la receta de cada plato |
| **C** | Además, registro de las producciones del día (salsas, porcionado, buffet) | Las preparaciones intermedias existen como producto con su propio costo y existencias. Requiere registrar cada producción cuando se hace |

**Recomendación del consultor:** C, comenzando por los platos de mayor rotación y completando el resto durante la operación.

**Elección:** [ ] A · [ ] B · [ ] C

### 42 · Organización de la pantalla del cajero

**La decisión:** ¿los productos se agrupan en la pantalla por estación y familia, mostrando en cada caja solo los suyos, o se presentan en un listado único?

**Por qué importa:** define cuántos pasos toma registrar un consumo en hora pico y hacia qué estación se dirige cada comanda.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Agrupados por estación y familia; cada caja muestra solo sus productos | Cada caja presenta un listado corto y las comandas se dirigen a la estación correspondiente. Requiere definir la agrupación y mantenerla al cambiar la carta |
| **B** | Un listado único con todos los productos en todas las cajas | No hay agrupación que mantener. El cajero busca dentro del listado completo y la comanda se dirige según lo definido en cada producto |

**Recomendación del consultor:** A.

**Elección:** [ ] A · [ ] B

### 43 · Modos de servicio

**La decisión:** ¿se habilitan modos de servicio distintos (comedor, para llevar, comedor de personal) con su propio precio?

**Por qué importa:** define si el consumo de personal y la venta para llevar quedan identificados como tales y con qué precio se cobran.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Se habilitan los modos y cada uno aplica su propio precio | El consumo de personal aplica su precio automáticamente y queda identificado en los reportes. El cajero selecciona el modo al iniciar la cuenta |
| **B** | Sin modos de servicio | Todas las ventas se registran igual. El precio del consumo de personal se ajusta en cada caso y no queda identificado como tal |

**Recomendación del consultor:** A.

**Elección:** [ ] A · [ ] B

### 44 · Emisión de factura en el punto de venta

**La decisión:** al cliente de paso que consume en el restaurante, ¿se le factura siempre o solo cuando la solicita?

**Por qué importa:** el huésped no entra en esta decisión: sus consumos van a la habitación y se facturan al salir. La pregunta aplica al cliente que no está hospedado.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Se emite el comprobante fiscal en toda venta; la factura con RIF se emite cuando el cliente la solicita | Toda venta queda con documento fiscal válido. Los datos del cliente se capturan solo cuando pide factura |
| **B** | Se emite factura en todas las ventas | Toda venta queda facturada a nombre de un cliente identificado. Requiere capturar los datos del cliente antes de cobrar en cada venta |

**Recomendación del consultor:** A.

**Elección:** [ ] A · [ ] B

## Gobernanza

### 45 · Quién autoriza descuadres y anulaciones

**La decisión:** ¿quién autoriza un cierre de caja con diferencia y quién puede anular una venta ya registrada?

**Por qué importa:** son las dos operaciones que permiten modificar lo que la caja reporta al final del día.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Un gerente de turno autoriza ambas; el cajero no puede anular ni cerrar con diferencia por su cuenta | Toda excepción queda revisada por un segundo par de ojos en el momento. Requiere que haya un gerente disponible en cada turno |
| **B** | El cajero puede anular durante su turno; el cierre con diferencia lo autoriza un gerente | Las correcciones del propio turno son ágiles. Las anulaciones quedan registradas y se revisan después |
| **C** | El cajero puede anular y cerrar con diferencia sin autorización | El cierre nunca se detiene. La revisión ocurre completamente después, sobre el reporte |

**Recomendación del consultor:** B.

**Elección:** [ ] A · [ ] B · [ ] C

### Responsables por designar en esta sección

| Función | Responsable |
|---|---|
| Mantener la carta y los precios del punto de venta | ______ |
| Levantar y actualizar las recetas | ______ |
| Revisar los cierres de caja y sus diferencias | ______ |
| Autorizar el uso del modo comedor de personal | ______ |

---

# El personal

*El cálculo de la nómina venezolana (sueldos, cestaticket, aportes, utilidades, vacaciones) ya lo resuelve el paquete de Almus: no se decide cómo se calcula, sino hasta dónde llega la primera etapa.*

## Configuración

### 46 · El organigrama dentro del sistema

**La decisión:** ¿se carga el organigrama real (áreas, cargos y jefe de cada quien) o una estructura simplificada?

**Por qué importa:** el jefe registrado en cada ficha es a quien el sistema dirige las solicitudes de vacaciones, permisos y horas extra de esa persona.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Áreas reales (Gerencia Hotelera, A&B, Operaciones, Administración, RRHH), cargos y jefe directo en cada ficha | Las solicitudes llegan al jefe registrado y los reportes se filtran por área y cargo. Requiere actualizar la ficha cuando alguien cambia de puesto o de jefe |
| **B** | Pocas áreas genéricas, sin cargos, con jefe solo en los niveles altos | Las solicitudes llegan al nivel cargado. Los reportes tienen el nivel de detalle de la estructura registrada |

**Recomendación del consultor:** A con un solo nivel de áreas.

**Elección:** [ ] A · [ ] B

### 47 · Alcance de la carga de datos del empleado

**La decisión:** ¿qué datos de cada empleado se cargan antes del arranque?

**Por qué importa:** los datos que falten al momento del primer recibo se completan a mano o quedan fuera del cálculo.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Ficha completa: identificación, datos bancarios, carga familiar, contrato con fecha y sueldo | El primer recibo se calcula con los datos definitivos de cada persona. Requiere completar la ficha de toda la plantilla antes del arranque |
| **B** | Solo identificación, contrato y sueldo; el resto se completa después | La carga inicial es menor. Los pagos que dependan de datos faltantes (banco, carga familiar) se gestionan aparte hasta completarlos |

**Recomendación del consultor:** A.

**Elección:** [ ] A · [ ] B

### 48 · Horarios de trabajo

**La decisión:** ¿se crea un horario por cada turno real o un único horario general?

**Por qué importa:** el horario asignado a cada persona es la referencia contra la que el sistema mide las horas trabajadas de más.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Un horario por turno real: administrativo y los turnos operativos del hotel | Las horas extra se calculan contra el turno propio de cada persona. Requiere definir cada turno y asignarlo en la ficha |
| **B** | Un horario general para toda la plantilla | Un solo horario que mantener. Las horas fuera de ese horario general se consideran extra, independientemente del turno real de cada quien |

**Recomendación del consultor:** A.

**Elección:** [ ] A · [ ] B

### 49 · Alcance de la nómina en la primera etapa

**La decisión:** ¿qué se corre en Odoo desde el arranque y qué se sigue calculando aparte?

**Por qué importa:** el recibo quincenal, las utilidades y las vacaciones ya están construidos. El impuesto sobre la renta del trabajador y el cálculo de liquidaciones al egreso están en desarrollo.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | En Odoo: recibo quincenal, horas extra, bonos, y utilidades y vacaciones cuando corresponda. Fuera: liquidaciones de egreso e impuesto sobre la renta del trabajador | El pago recurrente sale del sistema desde el primer mes. Los egresos se siguen calculando fuera hasta que esos cálculos estén disponibles |
| **B** | Todo en Odoo desde el inicio, incluidas las liquidaciones | Se utilizan también las estructuras de liquidación, que aún no incorporan el impuesto sobre la renta del trabajador ni el cálculo definitivo de prestaciones al egreso |

**Recomendación del consultor:** A, corriendo dos o tres quincenas en paralelo con el cálculo actual antes de dejar la hoja de cálculo.

**Elección:** [ ] A · [ ] B

### 50 · Modo de marcaje de entrada y salida

**La decisión:** ¿cómo se identifica el personal al marcar: con carnet, eligiendo su nombre en pantalla, o ambos?

**Por qué importa:** define qué tan rápido es el marcaje en el cambio de turno y qué tan fácil es marcar por otra persona.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Con carnet más clave personal | El marcaje requiere el carnet del empleado. Requiere emitir carnets a toda la plantilla |
| **B** | Eligiendo el nombre en pantalla más clave personal | No requiere carnets. La identificación depende de la clave de cada quien |
| **C** | Ambos modos disponibles a la vez | Quien tiene carnet lo usa y el resto elige su nombre. Permite emitir los carnets de forma progresiva |

**Recomendación del consultor:** C.

**Elección:** [ ] A · [ ] B · [ ] C

### 51 · Cálculo de horas extra

**La decisión:** ¿las horas extra las calcula el sistema con los recargos configurados o las revisa y ajusta el jefe?

**Por qué importa:** define quién produce el número que llega a la nómina.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | El sistema las calcula con los recargos configurados y el jefe las confirma | El cálculo de recargos lo hace el sistema sobre el marcaje y el horario de cada quien. Requiere configurar los recargos de ley antes del arranque |
| **B** | El sistema muestra las horas trabajadas de más y el jefe define el monto | El jefe mantiene el criterio caso por caso. El cálculo de recargos se hace fuera del sistema |

**Dato a considerar:** los recargos de ley venezolanos (nocturnidad, feriados) deben configurarse; el sistema no los trae cargados.

**Recomendación del consultor:** A.

**Elección:** [ ] A · [ ] B

### 52 · Acumulación de vacaciones

**La decisión:** ¿los días de vacaciones se cargan manualmente cada año por empleado o el sistema los acumula según la antigüedad?

**Por qué importa:** define quién calcula los días que corresponden a cada persona.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | El sistema acumula los días según la antigüedad registrada de cada empleado | El cálculo por antigüedad lo hace el sistema. Requiere que las fechas de ingreso estén correctas en todas las fichas |
| **B** | RRHH carga los días de cada empleado una vez al año | RRHH mantiene el control del cálculo, que se realiza fuera del sistema una vez al año por empleado |

**Recomendación del consultor:** A, previa verificación de las fechas de ingreso.

**Elección:** [ ] A · [ ] B

### 53 · Tipos de ausencia y soporte documental

**La decisión:** ¿qué tipos de ausencia se crean y cuáles exigen adjuntar un documento para poder aprobarse?

**Por qué importa:** define si un reposo puede aprobarse sin el certificado y si los permisos con y sin goce de sueldo quedan diferenciados en el recibo.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Tipos separados (vacaciones, reposo, permiso con goce, permiso sin goce) y documento obligatorio en el reposo | Cada ausencia queda clasificada y el reposo no se aprueba sin el soporte cargado. Requiere que el empleado o RRHH adjunte el documento |
| **B** | Tipos separados sin exigir documento | La clasificación se mantiene y el soporte se archiva por el canal actual. El sistema no lo verifica |
| **C** | Un solo tipo general de ausencia | Todas las ausencias se registran igual. La diferencia entre reposo, vacaciones y permiso se lleva fuera del sistema |

**Recomendación del consultor:** A.

**Elección:** [ ] A · [ ] B · [ ] C

## Gobernanza

### 54 · Quién aprueba ausencias y horas extra

**La decisión:** ¿quién aprueba las solicitudes: el jefe directo, RRHH, o ambos en secuencia?

**Por qué importa:** el aprobador designado es quien recibe cada solicitud y de quien depende que se procese a tiempo para la nómina.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | El jefe directo registrado en la ficha | La solicitud llega a quien conoce la operación del área. Requiere que el jefe de cada persona esté correctamente registrado (decisión 46) |
| **B** | RRHH aprueba todas las solicitudes | Un solo criterio para toda la plantilla. RRHH decide sin el detalle operativo de cada área |
| **C** | Primero el jefe directo y luego RRHH | Cada solicitud pasa por el criterio operativo y por el criterio de RRHH. La solicitud avanza cuando ambos actúan |

**Recomendación del consultor:** A para permisos y horas extra; C para vacaciones, donde RRHH verifica el saldo disponible.

**Elección:** [ ] A · [ ] B · [ ] C

### Responsables por designar en esta sección

| Función | Responsable |
|---|---|
| Mantener las fichas del personal y sus horarios | ______ |
| Configurar y mantener los recargos de horas extra | ______ |
| Emitir y controlar los carnets de marcaje | ______ |
| Correr y validar la nómina de cada período | ______ |

---

# Los accesos

*Definen quién puede hacer qué dentro del sistema y cuántas licencias se contratan.*

## Configuración

### 55 · Perfiles de acceso

**La decisión:** ¿se usan los perfiles estándar del sistema por área (recepción, compras, contabilidad) o se construyen permisos a la medida?

**Por qué importa:** define el nivel de detalle con que se limita lo que cada persona puede ver y hacer.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Perfiles estándar por área, documentados en una tabla de quién accede a qué | La asignación de permisos se hace con lo que trae el sistema. Dentro de su área, cada rol accede a las funciones completas de esa área |
| **B** | Perfiles estándar más ajustes a la medida en los casos que lo requieran | El acceso se ajusta al detalle en los roles definidos. Cada ajuste a medida debe revisarse en cada actualización del sistema |

**Recomendación del consultor:** B, con ajustes a medida limitados a Contraloría y cajas.

**Elección:** [ ] A · [ ] B

### 56 · Segregación contable y acceso de Contraloría

**La decisión:** ¿se separa quién factura, quién paga y quién concilia? ¿Contraloría accede en modo solo lectura?

**Por qué importa:** hoy las tres funciones las ejerce la misma persona y Contraloría revisa fuera del sistema.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Recepción y cajas acceden a documentos de clientes; contabilidad registra pagos y conciliaciones; Contraloría consulta toda la contabilidad sin poder modificarla | Cada función queda separada por perfil y Contraloría revisa dentro del sistema sin capacidad de edición. Requiere definir la asignación por persona |
| **B** | Todos los usuarios contables, incluido el contralor, con el mismo nivel de acceso | Cualquier usuario contable puede crear y modificar documentos, incluida Contraloría. La separación de funciones se sostiene por procedimiento y no por el sistema |

**Recomendación del consultor:** A.

**Elección:** [ ] A · [ ] B

### 57 · Quién necesita usuario del sistema

**La decisión:** ¿a quiénes se les crea usuario del sistema?

**Por qué importa:** en la versión de pago, cada usuario del sistema se factura mensualmente; los empleados sin usuario no se facturan. Marcar asistencia no requiere usuario: el kiosco funciona en un dispositivo dedicado donde cada quien se identifica con carnet, con su nombre o con clave. En la caja, cada cajero se identifica igual sin usuario propio, pero **abrir la caja sí requiere un usuario del sistema**, así que cada punto de venta necesita al menos uno. Consultar el propio recibo de pago o solicitar vacaciones también requiere usuario: no hay una vía de consulta para empleados sin él.

| Opción | Qué significa | Qué implica para Koral |
|:---:|---|---|
| **A** | Usuario solo para quienes trabajan en el sistema: recepción, compras, almacén, contabilidad, RRHH, gerencia, más un usuario por cada punto de venta para abrir la caja | Se factura licencia por ese grupo. El resto de la plantilla queda registrada en asistencia y nómina, marca en el kiosco y cobra identificándose con clave o carnet, sin consultar sus propios documentos en el sistema |
| **B** | Lo anterior más los jefes de área | Los jefes aprueban ausencias y horas extra de su equipo dentro del sistema y consultan su información. Se factura licencia por ese grupo ampliado |
| **C** | Usuario del sistema para todo el personal | Cada empleado consulta sus recibos y registra sus solicitudes por su cuenta. Se factura una licencia por empleado y se administran las credenciales de toda la plantilla |

**Dato a considerar:** si en la decisión 54 las aprobaciones quedan en el jefe directo, ese jefe necesita usuario del sistema para poder aprobar.

**Recomendación del consultor:** B, que sostiene el circuito de aprobaciones de la decisión 54 sin extender la licencia a toda la plantilla.

**Elección:** [ ] A · [ ] B · [ ] C

### Responsables por designar en esta sección

| Función | Responsable |
|---|---|
| Crear, modificar y desactivar usuarios | ______ |
| Aprobar cambios en los perfiles de acceso | ______ |
| Revisar periódicamente quién tiene acceso a qué | ______ |

---

# Qué pasa después

Con las decisiones marcadas, el equipo de Almus las convierte en tareas de configuración con responsable y fecha, respetando el orden en que unas dependen de otras. Las decisiones que no admiten reversión (1, 3, 11 y 12) se prueban en un ambiente de ensayo antes de aplicarse.

Las opciones que requieren la versión de pago avanzada de Odoo se agrupan en una sola conversación de presupuesto con Gerencia General, dado que la nómina venezolana ya requiere esa versión.

Los responsables designados en las tablas de cada sección se incorporan al plan de implantación junto con las tareas: cada configuración necesita quien la mantenga después del arranque.

Los temas operativos que no son configuración del sistema (conciliación bancaria, autorización de pagos, planificación de pagos a proveedores, mantenimiento de equipos, reporte a Venetur) se tratan en el documento por departamento que ya está en manos de cada área.

