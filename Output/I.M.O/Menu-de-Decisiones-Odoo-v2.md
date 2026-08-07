---
proyecto: Koral Morrocoy
documento: Menú de Decisiones de Parametrización Odoo (v2)
version: 2.0 - borrador para validación
fecha_publicacion: 2026-08-03
deadline_produccion: 2026-10-01
enfoque: parametrización de la base de datos Odoo 19 (no AS-IS)
fuentes: documentación oficial Odoo 19 (ODOO/odoo-19-docs), código fuente Community y Enterprise (ODOO/odoo-19-source, ODOO/odoo-19-enterprise), localización Almus (ODOO/odoo-venezuela), vertical hotelera Almus (ODOO/almus_hotel)
---

# Menú de Decisiones de Parametrización Odoo (v2) - Koral

## Qué es este documento y en qué cambia respecto al menú anterior

Este documento recorre las decisiones que Odoo 19 obliga a tomar al construir la base de datos de Koral: cuántas compañías, qué plan de cuentas, qué árbol de categorías y ubicaciones, cuántos POS, qué roles de acceso. El punto de partida ya no es el AS-IS: es la parametrización del sistema. Cada punto explica qué exige definir Odoo, dónde vive el parámetro, qué es irreversible, y las opciones son exactamente las que el sistema permite, verificadas contra la documentación oficial y el código fuente. La realidad del hotel aparece solo como contexto para la recomendación.

El menú v1 (por departamento, con origen en el AS-IS) sigue vigente como material de lectura de los líderes de área y cubre los circuitos operativos (conciliación bancaria, aprobación de pagos, CxP, mantenimiento, reporte Venetur). Este v2 es la guía de decisiones para la implantación técnica; donde ambos tocan el mismo tema, el punto v2 lo indica.

## La plataforma Almus es la base

El proyecto arranca sobre la localización venezolana de Almus (v1.2.1: tasa BCV, doble moneda, plan de cuentas VE, facturación fiscal, retenciones, libros, IGTF, POS dual, nómina LOTTT) y la vertical hotelera (PMS, pagos de reservas, cargo a habitación, housekeeping). Lo que la plataforma fija se presenta como dato, no como opción. Índices: `ODOO/digests/localizacion-almus-ve.md` y `ODOO/digests/vertical-almus-hotel.md`.

## Cómo leer cada punto

- **ID** (ej. EST-01): dominio de parametrización + número.
- **DECISIÓN A TOMAR** (cuadro): la pregunta y cómo parametriza Odoo el asunto: dónde vive el parámetro, qué comportamientos cambia, qué es irreversible. Verificado.
- **Depende de / Condiciona:** el orden real de decisión; ninguna decisión se toma aislada.
- **Contexto Koral:** la realidad del grupo, solo como insumo de la recomendación.
- **Opciones A, B, C:** cómo se configura Odoo y cómo afecta la operación. Enterprise, desarrollo o tercero se marca en el texto.
- **Ruta:** navegación verificada.
- **Recomendación del consultor** y **Elección** (casillas, mismas letras que usará la encuesta).

## Orden de decisión sugerido

1. **EST-01 a EST-03** (alcance societario, plan de cuentas, sucursales): definen la estructura y son las menos reversibles.
2. **EST-05 a EST-08** (analítica, bloqueos, usuarios, diarios) junto con **SEG-01 a SEG-04** (roles y licencias).
3. **CAT-01 a CAT-07** (catálogo): prerrequisito de la carga inicial de datos.
4. **INV-01 a INV-09** (almacenes, valoración, circuito de compra): habilitan la toma física.
5. **POS-01 a POS-08** (puntos de venta): sobre catálogo e inventario ya definidos.
6. **RHU-01 a RHU-05** (RRHH): en paralelo desde el punto 2.

## Índice

| ID | Tema | Dominio |
|---|---|---|
| EST-01 | Alcance societario del sistema | Estructura corporativa |
| EST-02 | Plan de cuentas en multicompañía | Estructura corporativa |
| EST-03 | Sucursales internas de SERAC | Estructura corporativa |
| EST-04 | Transacciones interempresa | Estructura corporativa |
| EST-05 | Arquitectura analítica | Estructura corporativa |
| EST-06 | Ejercicio fiscal y bloqueos | Estructura corporativa |
| EST-07 | Usuarios y acceso por compañía | Estructura corporativa |
| EST-08 | Estructura de diarios | Estructura corporativa |
| CAT-01 | Árbol de categorías de productos | Catálogo |
| CAT-02 | Criterios de creación de variantes | Catálogo |
| CAT-03 | Unidades de medida y empaques | Catálogo |
| CAT-04 | Referencias internas y códigos de barras | Catálogo |
| CAT-05 | Maestro de contactos | Catálogo |
| CAT-06 | Listas de precios de venta | Catálogo |
| CAT-07 | Servicios y consumibles internos | Catálogo |
| INV-01 | Estructura de almacenes | Inventario y compras |
| INV-02 | Árbol de ubicaciones y conteo cíclico | Inventario y compras |
| INV-03 | Valoración: método y momento | Inventario y compras |
| INV-04 | Pasos de recepción y entrega | Inventario y compras |
| INV-05 | Trazabilidad: lotes y caducidad | Inventario y compras |
| INV-06 | Reposición: reglas y sugerencias | Inventario y compras |
| INV-07 | Circuito de compra: aprobación y control de facturas | Inventario y compras |
| INV-08 | Acuerdos de compra | Inventario y compras |
| INV-09 | Mermas: desecho vs ajuste | Inventario y compras |
| POS-01 | Número de POS y alcance | Punto de Venta |
| POS-02 | Métodos de pago por POS | Punto de Venta |
| POS-03 | Sesiones y responsabilidad de caja | Punto de Venta |
| POS-04 | Restaurante: mesas, cursos y 10% servicio | Punto de Venta |
| POS-05 | Canal de preparación | Punto de Venta |
| POS-06 | Recetas y descuento de insumos | Punto de Venta |
| POS-07 | Categorías POS y presets | Punto de Venta |
| POS-08 | Facturación desde el POS | Punto de Venta |
| RHU-01 | Estructura organizativa | RRHH |
| RHU-02 | Contratos, datos y horarios | RRHH |
| RHU-03 | Alcance de nómina fase 1 | RRHH |
| RHU-04 | Asistencias: kiosco y horas extra | RRHH |
| RHU-05 | Ausencias: tipos y acumulación | RRHH |
| SEG-01 | Mapa de roles y grupos | Usuarios y seguridad |
| SEG-02 | Segregación contable y solo lectura | Usuarios y seguridad |
| SEG-03 | Acceso multicompañía por usuario | Usuarios y seguridad |
| SEG-04 | Usuarios internos vs operación sin licencia | Usuarios y seguridad |

Correspondencia con el menú v1 donde ambos tocan el mismo tema: CAT-02 ↔ COM-D02 · INV-03 ↔ COM-D03/COM-D04/AABB-D06 · INV-04 ↔ COM-D09 · INV-06 ↔ COM-D08 · INV-07 ↔ COM-D07 · INV-08 ↔ COM-D06 · INV-09 ↔ AABB-D07 · POS-03 ↔ AABB-D09 · POS-05 ↔ AABB-D02 · POS-06 ↔ AABB-D05 · POS-07 ↔ AABB-D11 · RHU-03 ↔ RH-D01 · RHU-04 ↔ RH-D02/RH-D03 · RHU-05 ↔ RH-D05 · SEG-02 ↔ CON-D02 (v1). Una decisión tomada en cualquiera de los dos vale para ambos.

---

# 1. Estructura corporativa y contabilidad base

**Fijado por la plataforma (no se decide):** localización Almus VE instalada en cada compañía venezolana: moneda funcional Bs con doble moneda y tasa BCV (`l10n_ve_rate`, `l10n_ve_account`), plan de cuentas VE sembrado por asistente (`l10n_ve_account_setup` + `l10n_ve_coa`), diarios, impuestos y posiciones fiscales de bootstrap, retenciones, libros IVA y facturación fiscal SENIAT. La vertical hotelera opera sobre esa base. Las decisiones siguientes son las que Odoo 19 obliga a tomar al montar la base de datos.

### EST-01 · Alcance societario del sistema

> **DECISIÓN A TOMAR: ¿Se lleva en Odoo solo la operadora del hotel (SERAC C.A.) o todas las entidades del grupo, cada una como compañía?**
>
> Odoo exige definir cuántas `res.company` existirán y con qué RIF, país y moneda cada una, porque el país elegido al crear cada compañía determina la localización fiscal que se instala y esta no puede cambiarse una vez posteado el primer asiento. Las entidades con RIF propio NO pueden modelarse como sucursales: la documentación es explícita en que las filiales independientes se crean como compañías adicionales, y las sucursales son solo subdivisiones de una misma entidad legal. Activar más de una compañía enciende todo el comportamiento multicompañía (selector, registros compartidos o restringidos por compañía). En Odoo Online, habilitar multicompañía en plan Standard fuerza el upsell a plan Custom.

**Depende de:** ninguna · **Condiciona:** EST-02, EST-03, EST-04, EST-07, EST-08

**Contexto Koral:** el grupo tiene tres entidades fiscales (SERAC C.A. opera el hotel; Eracon Alimentos; Eracon Salud), todas contribuyentes con RIF propio; SERAC además tiene oficina en Caracas y operación en Morrocoy.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Una sola compañía: SERAC C.A. (RIF, dirección fiscal, Bs). Eracon Alimentos y Eracon Salud se cargan como contactos (cliente/proveedor) | Base simple, sin selector de compañía. La contabilidad de las Eracon queda fuera de Odoo; las operaciones entre entidades se registran como compras/ventas a terceros normales |
| **B** | Tres compañías desde el arranque, una por RIF, cada una con la localización VE sembrada por el asistente Almus | Contabilidad completa del grupo en una base; habilita reglas interempresa (EST-04) y reportes agregados; exige decidir EST-02 y EST-07, y disciplina de compañía activa en cada registro |
| **C** | Fase 1 solo SERAC; las Eracon se agregan como compañías cuando su operación esté lista | Arranque enfocado en el hotel. Ojo: Odoo no crea automáticamente almacenes ni datos operativos para compañías agregadas después del setup inicial; el asistente VE debe correrse por cada compañía nueva |

**Ruta:** `Ajustes > Usuarios y compañías > Compañías` [verificada; nativo]

**Recomendación del consultor:** C. La implantación tiene que estabilizar el hotel (SERAC) primero; el modelo B es el destino natural del grupo, pero incorporar las Eracon como compañías es una migración de bajo costo cuando la operación SERAC ya esté rodada.

**Elección:** [ ] A · [ ] B · [ ] C

### EST-02 · Plan de cuentas en escenario multicompañía

> **DECISIÓN A TOMAR: ¿Cuentas contables compartidas entre compañías, el mismo plan Almus sembrado por separado en cada una, o planes distintos por giro?**
>
> En Odoo 19 la cuenta contable es multicompañía por diseño: `account.account.company_ids` es un Many2many obligatorio, y el modelo `account.code.mapping` permite que una misma cuenta tenga un código distinto por compañía (pestaña de mapeo visible cuando el usuario ve más de una compañía). La doc lo expone como la funcionalidad "Shared Accounts". Lo que NO se comparte nunca son impuestos, diarios ni fechas de bloqueo: eso es siempre por compañía. Las cuentas no se pueden borrar tras registrar movimientos, solo marcar como obsoletas (Deprecated).

**Depende de:** EST-01 (solo aplica si B o C llega a multicompañía) · **Condiciona:** consolidación y reportes comparables, EST-04, EST-08

**Contexto Koral:** hotel, alimentos y salud son giros distintos, pero el grupo querrá comparar resultados y eventualmente consolidar; la contabilidad la coordina un mismo equipo corporativo en Caracas.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Cuentas compartidas: en cada cuenta relevante se agregan las tres compañías en `Companies`, con código por compañía en la pestaña de mapeo si difiere | Mantenimiento único del catálogo y comparabilidad máxima; pero todo cambio de una cuenta afecta a las tres entidades, y exige gobernanza central estricta del plan |
| **B** | El mismo plan Almus VE sembrado por el asistente en cada compañía, cuentas independientes con códigos idénticos | Independencia total por entidad; los reportes por código siguen siendo comparables mientras nadie cree cuentas fuera del estándar; riesgo de divergencia gradual sin un dueño del catálogo |
| **C** | Planes distintos por giro (hotel vs alimentos vs salud), partiendo del plan VE y especializando cada uno | Cada gerencia ve "sus" cuentas; se pierde comparabilidad directa y la consolidación exige mapeos manuales; solo se justifica si un ente regulador del giro impone catálogo propio |

**Ruta:** `Contabilidad > Configuración > Plan de cuentas` (campo Companies y pestaña de mapeo de códigos en la cuenta) [verificada; nativo Community]

**Recomendación del consultor:** B al incorporar cada compañía: sembrar el mismo plan Almus por el asistente, con norma escrita de que toda cuenta nueva se crea desde el corporativo con el mismo código en todas las entidades. A (compartidas) es elegante pero acopla la contabilidad de tres RIF en un solo registro, un riesgo innecesario en la fase inicial.

**Elección:** [ ] A · [ ] B · [ ] C

### EST-03 · Sucursales internas de SERAC (Caracas vs Hotel)

> **DECISIÓN A TOMAR: ¿CCS y Hotel como sucursales (branches) de la compañía SERAC, o una sola compañía sin sucursales apoyada en analítica?**
>
> Las branches de Odoo son subdivisiones de una misma entidad legal que cuelgan de una compañía padre; heredan la configuración contable del padre pero todo lo demás (tarifas, ubicaciones, layout) se configura por sucursal, y cada documento queda ligado a su sucursal. Dos advertencias verificadas: crear la primera sucursal activa el comportamiento multicompañía en toda la base, y la jerarquía no es reversible: una compañía definida como padre no puede convertirse después en sucursal (hay que definir la estructura antes de crear nada). La propia doc, para líneas de negocio internas, recomienda evaluar analítica en lugar de entidades adicionales.

**Depende de:** EST-01 · **Condiciona:** EST-05, EST-07

**Contexto Koral:** la oficina de Caracas es administrativa (compras, finanzas, comercial); no emite facturas de hospedaje ni tiene serie fiscal propia. El punto de emisión fiscal está en el hotel.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | SERAC como compañía padre y dos branches (CCS, Hotel) creadas en la pestaña Branches de la compañía | Separación dura de documentos por sede y reportes padre+sucursales; a cambio, selector de compañía para todos, más complejidad en secuencias y en la facturación fiscal VE, y estructura irreversible |
| **B** | SERAC como compañía única; la separación CCS vs Hotel se lleva por plan analítico (EST-05) y por equipos/almacenes | Cero fricción multicompañía; la vista por sede sale de reportes analíticos; suficiente mientras Caracas no facture con serie propia |

**Ruta:** `Ajustes > Usuarios y compañías > Compañías > (SERAC) > pestaña Branches` [verificada; nativo]

**Recomendación del consultor:** B. Caracas es un centro de costo, no un emisor fiscal; las branches agregarían el peso completo del multicompañía sin beneficio fiscal, y la decisión sería irreversible. Reevaluar solo si Caracas llega a facturar con numeración propia.

**Elección:** [ ] A · [ ] B

### EST-04 · Transacciones interempresa (documento espejo)

> **DECISIÓN A TOMAR: ¿Se activan las reglas interempresa entre las compañías del grupo y en qué modo?**
>
> La funcionalidad Inter-Company Transactions se activa por compañía y genera contradocumentos automáticos. Modos reales verificados en Odoo 19: `Create Vendor Bills` (al confirmar una factura para la otra compañía se crea su factura de proveedor/reembolso), `Create Sales Orders` (un PO confirmado genera cotización espejo), `Create Purchase Orders` (un SO confirmado genera RFQ espejo, con almacén configurable en `Use Warehouse`), `Synchronize Stock Moves` (sincroniza movimientos de stock entre compañías), y la opción `Validated` que valida automáticamente los documentos espejo. Requiere posiciones fiscales y localización bien configuradas. Los módulos que lo implementan (`account_inter_company_rules`, `sale_purchase_inter_company_rules`, `sale_purchase_stock_inter_company_rules`) son exclusivos de Enterprise.

**Depende de:** EST-01 = B (o C ya expandido), EST-02 · **Condiciona:** circuito de compras entre SERAC y Eracon Alimentos

**Contexto Koral:** el flujo natural es Eracon Alimentos vendiendo insumos de A&B a SERAC; cada operación cruzada es fiscalmente una venta entre contribuyentes (factura con Nº de control, retenciones IVA/ISLR entre agentes de retención).

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | No activar: cada compañía registra sus documentos cruzados a mano, tratando a la otra como tercero | Sin automatismo pero sin sorpresas; el riesgo es descuadre entre lo que factura una y lo que registra la otra |
| **B** | Activar solo `Create Vendor Bills` en las compañías receptoras, sin validación automática | Al postear la factura de Eracon a SERAC nace el borrador espejo en SERAC; el contador lo revisa y le aplica el circuito fiscal VE (retenciones, libros) antes de validar |
| **C** | B + `Create Sales Orders` / `Create Purchase Orders` (y `Synchronize Stock Moves` si hay traslados), con o sin `Validated` | Cadena completa pedido-espejo; conviene solo cuando el flujo logístico entre compañías esté estable; `Validated` no se recomienda con retenciones de por medio |

**Ruta:** `Ajustes > sección Compañías > Inter-Company Transactions` (por compañía, con la compañía activa seleccionada) [verificada; **Enterprise**]

**Recomendación del consultor:** A mientras el alcance sea solo SERAC; B al incorporar Eracon Alimentos, dejando siempre el documento espejo en borrador para que pase por el circuito de retenciones de la localización.

**Elección:** [ ] A · [ ] B · [ ] C

### EST-05 · Arquitectura analítica (puntos de operación)

> **DECISIÓN A TOMAR: ¿Un solo plan analítico por punto de operación con aplicabilidad obligatoria, o varios planes (punto + temporada/proyecto) y con qué modelos de distribución?**
>
> Odoo obliga a definir: los planes (`account.analytic.plan`) con su `Default Applicability` (Optional / Mandatory / Unavailable, verificado en el modelo; el valor es configurable por compañía), líneas de aplicabilidad fina por dominio de documento, prefijos de cuentas financieras y categoría de producto (la línea siempre gana sobre el default), las cuentas analíticas de cada plan (cada plan necesita al menos una), y los modelos de distribución automática por prefijo de cuenta, partner, producto o compañía. Con Mandatory, el asiento no se puede confirmar sin cuenta analítica. Se activa como funcionalidad en ajustes de Contabilidad.

**Depende de:** EST-03 (si se eligió B, la analítica carga también la vista CCS vs Hotel) · **Condiciona:** EST-08, presupuestos y reportes de rentabilidad por punto

**Contexto Koral:** los puntos de operación son Recepción (hospedaje), A&B, Marina, Estacionamiento, Boca Seca y Arrendamientos, más la oficina CCS como centro de costo; la dirección quiere P&G por punto.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Un plan "Puntos de operación" con una cuenta analítica por punto (+ CCS), Default Applicability = Mandatory con líneas de aplicabilidad limitadas a prefijos de ingresos y costos, y modelos de distribución por producto/diario para que el usuario casi nunca escoja a mano | P&G por punto garantizado (nada se postea sin punto); los modelos de distribución absorben el trabajo: consumos A&B al punto A&B, hospedaje a Recepción, gastos comunes distribuidos por porcentaje |
| **B** | El mismo plan único pero Optional | Sin fricción al postear, pero el reporte por punto queda incompleto en cuanto alguien omita la distribución; inaceptable si el P&G por punto es un entregable |
| **C** | Dos planes: "Puntos de operación" (Mandatory en P&G) + "Temporada/Proyectos" (Optional) para temporada alta/baja, eventos o proyectos de inversión | Doble eje de análisis en la misma línea contable; el segundo plan solo se justifica si alguien va a explotar ese reporte, porque cada plan agrega una columna a la ventana de distribución |

**Ruta:** `Contabilidad > Configuración > Planes analíticos / Cuentas analíticas / Modelos de distribución analítica` (activar antes Analítica en `Contabilidad > Configuración > Ajustes`) [verificada; nativo Community]

**Recomendación del consultor:** A de arranque, con los modelos de distribución cargados antes del go-live; migrar a C solo cuando la operación pida formalmente el eje temporada/proyecto.

**Elección:** [ ] A · [ ] B · [ ] C

### EST-06 · Ejercicio fiscal y política de bloqueos

> **DECISIÓN A TOMAR: ¿Con qué cadencia se mueven las fechas de bloqueo, cuáles se usan (Bloquear todo / Declaración fiscal / Hard Lock) y quién puede moverlas?**
>
> El ejercicio se define por compañía (`Last Day` en Fiscal Periods; default 31/12, que coincide con el ejercicio civil venezolano). Odoo 19 maneja cinco fechas de bloqueo por compañía, verificadas en el modelo: Global/Lock Everything (`fiscalyear_lock_date`), Tax Return (`tax_lock_date`, que se fija sola al postear el cierre de impuestos), Sales, Purchase y Hard Lock (`hard_lock_date`). Un asiento con fecha dentro del bloqueo se pospone automáticamente al día siguiente del bloqueo. Los administradores de Contabilidad pueden crear excepciones (para mí / para todos, con duración y motivo, todo logueado en el chatter de la compañía), EXCEPTO sobre el Hard Lock, que es irreversible y no admite excepción alguna. El asistente de Lock Dates vive en `account_accountant` (Enterprise).

**Depende de:** EST-01 (las fechas son por compañía: cada RIF lleva las suyas) · **Condiciona:** calendario de cierre mensual y declaraciones SENIAT

**Contexto Koral:** contribuyente especial: libros IVA y retenciones con calendario SENIAT estricto; una vez presentada la declaración, el período no debe moverse.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Cierre mensual: tras presentar libros y declaraciones del mes, el administrador contable mueve Lock Everything al último día del mes declarado (Tax Return se fija sola con el cierre de impuestos); Hard Lock solo al cerrar el ejercicio auditado | Nadie retoca un período ya declarado al SENIAT; las correcciones legítimas pasan por excepción documentada; el ejercicio auditado queda inalterable |
| **B** | Solo bloqueo anual al cierre del ejercicio | Mínima fricción diaria, pero cualquier usuario contable puede alterar meses ya declarados: riesgo directo de descuadre contra libros presentados |
| **C** | Hard Lock mensual | Inalterabilidad máxima, pero sin marcha atrás ante un error legítimo del mes recién cerrado; excesivo salvo exigencia expresa del auditor |

**Ruta:** `Contabilidad > Contabilidad > Fechas de bloqueo` y `Contabilidad > Configuración > Ajustes > Períodos fiscales` [verificadas; el menú de fechas de bloqueo es **Enterprise** (account_accountant); los campos existen en Community]

**Recomendación del consultor:** A, con el rol de mover bloqueos restringido al administrador contable corporativo y las excepciones auditadas por el chatter de la compañía.

**Elección:** [ ] A · [ ] B · [ ] C

### EST-07 · Usuarios y acceso por compañía

> **DECISIÓN A TOMAR: ¿Usuarios con acceso a varias compañías o segregados en la suya?**
>
> En multicompañía cada usuario tiene compañías permitidas y una compañía activa; el selector de la esquina superior permite marcar varias a la vez, y los documentos nuevos se crean en la compañía activa. Los registros ligados a una compañía solo se ven con esa compañía seleccionada; productos y contactos nacen compartidos salvo que se les fije compañía. El riesgo operativo clásico es registrar un documento en la compañía equivocada por tener varias seleccionadas.

**Depende de:** EST-01, EST-03 · **Condiciona:** reglas de registro y matriz de perfiles del proyecto (SEG-03)

**Contexto Koral:** finanzas y compras se llevan desde Caracas para todo el grupo; la operación del hotel (recepción, A&B, housekeeping) solo toca SERAC.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Mixto: equipo corporativo con las tres compañías permitidas; usuarios operativos limitados a SERAC | El corporativo consolida y opera cruzado; el personal del hotel ni ve el selector; el riesgo de compañía equivocada queda confinado a pocos usuarios entrenados |
| **B** | Todos segregados: cada usuario en una sola compañía | Cero riesgo de cruce, pero el equipo corporativo necesitaría usuarios duplicados o cambios de configuración constantes para trabajar el grupo |

**Ruta:** `Ajustes > Usuarios y compañías > Usuarios` (compañías permitidas y compañía por defecto por usuario) [verificada; nativo]

**Recomendación del consultor:** A. Segregar la operación y dar multicompañía solo al núcleo corporativo; incluir en la capacitación la disciplina del selector (trabajar con una sola compañía marcada al registrar documentos).

**Elección:** [ ] A · [ ] B

### EST-08 · Estructura de diarios

> **DECISIÓN A TOMAR: ¿Con qué granularidad se crean los diarios de ventas, compras, bancos y efectivo en cada compañía?**
>
> Odoo maneja seis tipos de diario (ventas, compras, banco, efectivo, tarjeta de crédito, varios) y permite múltiples diarios del mismo tipo; cada diario tiene código corto único que prefija sus asientos y su propia secuencia. Los diarios de banco/efectivo llevan cuenta puente (suspense), cuentas outstanding por método de pago y, en efectivo, cuentas de ganancia/pérdida de arqueo; se pueden restringir las cuentas permitidas por diario. La regla práctica: un diario de banco por cuenta bancaria (y por moneda, fijando la moneda del diario), un diario de efectivo por caja física. La localización Almus siembra los diarios base por el asistente, y sobre ventas cuelga la numeración fiscal (Nº de control, series por rangos de `l10n_ve_invoice`); el POS y los pagos de la vertical hotelera usan sus propios diarios.

**Depende de:** EST-01, EST-05 · **Condiciona:** conciliación bancaria, cierres de caja por turno, libros de ventas por serie, POS-02

**Contexto Koral:** múltiples puntos de cobro (recepción, restaurante, marina, estacionamiento), cajas físicas en Bs y divisas, varias cuentas bancarias, y máquinas fiscales/imprenta digital por punto de emisión.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Mínima: un diario de ventas, uno de compras, un banco por cuenta bancaria, un efectivo por caja física; la segmentación por punto se lee de la analítica (EST-05) | Menos secuencias que administrar; los libros fiscales salen unificados; sirve mientras un solo punto de emisión fiscal concentre la facturación |
| **B** | Ventas por punto de emisión fiscal: un diario de ventas por serie/máquina fiscal (Recepción, A&B pasantes, Marina...), más la estructura A en compras, bancos y efectivo | Cada punto con su secuencia y su correlativo fiscal alineado a su máquina/serie SENIAT; conciliación y cierres de turno por caja quedan naturales; más diarios que mantener |
| **C** | Máxima: además, compras separadas por giro interno u oficina | Rara vez paga: la vista por punto ya la da la analítica; solo si el volumen de A&B exige circuito documental propio |

**Ruta:** `Contabilidad > Configuración > Diarios` [verificada; nativo. Los diarios base VE los siembra el asistente de la localización Almus]

**Recomendación del consultor:** B en ventas (la numeración fiscal por punto de emisión lo exige en la práctica venezolana) y A en el resto: bancos estrictamente uno por cuenta y moneda, efectivo uno por caja física con cuentas de arqueo, y la segmentación gerencial siempre por analítica, no multiplicando diarios.

**Elección:** [ ] A · [ ] B · [ ] C

## NOTAS DE VERIFICACIÓN

Rutas de archivos sobre `/Users/killthesnitch/Almus/ODOO/`.

**EST-01 / EST-03 (compañías y branches)** · `odoo-19-docs/content/applications/general/companies.rst`: branches como subdivisiones de una compañía (79-81); "Independent subsidiaries should be created as additional companies, not branches" (87-88); estructura irreversible, "A company defined as a parent cannot be converted into a branch later" y crear el padre primero (103-107); crear branches en la pestaña Branches (109-115); agregar una branch habilita multicompañía (125-126); configuración contable heredada del padre, resto por sucursal (138-142). `general/companies/multi_company.rst`: upsell a plan Custom al habilitar multicompañía en Standard (18-28); ruta Ajustes > Usuarios y compañías > Compañías (42-44). Localización no modificable tras postear: `finance/accounting/get_started/chart_of_accounts.rst` (34-36). Almacenes no creados automáticamente para compañías posteriores: `multi_company.rst` (156-160).

**EST-02 (plan de cuentas)** · `odoo-19-source/addons/account/models/account_account.py`: `company_ids = fields.Many2many('res.company', ..., required=True)` (línea 97); `code_mapping_ids` One2many a `account.code.mapping` (línea 100); pestaña de mapeo visible con más de una compañía, `display_mapping_tab` (línea 129). `odoo-19-source/addons/account/models/account_code_mapping.py`: modelo `account.code.mapping` (línea 14). Doc "Shared Accounts": `chart_of_accounts.rst` (172-179); Deprecated (181-186).

**EST-04 (interempresa)** · `general/companies/multi_company.rst`: activación por compañía en Ajustes > sección Compañías (138-141); modos `Create Vendor Bills`, `Create Sales Orders`, `Create Purchase Orders` con `Use Warehouse`, `Synchronize Stock Moves` (143-151); opción `Validated` (153-154); requisito de posiciones fiscales/localización (132-136). Solo Enterprise: `account_inter_company_rules`, `sale_purchase_inter_company_rules`, `sale_purchase_stock_inter_company_rules` existen en `odoo-19-enterprise/` y no en `odoo-19-source/addons/` (verificado por listado de directorios).

**EST-05 (analítica)** · `odoo-19-source/addons/analytic/models/analytic_plan.py`: `default_applicability` Selection optional/mandatory/unavailable, `company_dependent=True` (líneas 77-85); `applicability_ids` (87-90). `finance/accounting/reporting/analytic_accounting.rst`: activación en Ajustes (9-10); rutas de planes/cuentas/modelos (22-23, 47, 138-139); Mandatory impide confirmar sin cuenta analítica (56, 107-111); líneas de aplicabilidad por dominio/prefijo/categoría que priman sobre el default (61-69); cada plan requiere al menos una cuenta analítica (83-84); modelos de distribución por prefijo/partner/producto/compañía (151-162).

**EST-06 (ejercicio y bloqueos)** · `odoo-19-source/addons/account/models/company.py`: `fiscalyear_last_day/month` default 31/12 (74-75); `fiscalyear_lock_date` "Global Lock Date" (76-80); `tax_lock_date` autofijada al postear el cierre de impuestos (81-86); `sale_lock_date` (87-91); `purchase_lock_date` (92-96); `hard_lock_date` "irreversible and does not allow any exception" (97-102). `finance/accounting/reporting/year_end.rst`: Last Day en Fiscal Periods (19-25); ruta Accounting > Accounting > Lock Dates (111-113); excepciones para mí/para todos con motivo y log en chatter (123-133); Hard Lock irreversible (135-139). El asistente es Enterprise: `odoo-19-enterprise/account_accountant/wizard/account_change_lock_date.py` (etiquetas "Lock Everything", "Lock Tax Return", etc., líneas 26-93); no existe en Community.

**EST-07 (usuarios multicompañía)** · `general/companies/multi_company.rst`: selector de compañía y compañía activa (76-93); registros por compañía visibles solo con esa compañía seleccionada, compañía activa autoseleccionada en documentos (100-112); productos/contactos compartidos por defecto (111-112). `general/companies.rst`: acceso restringible por padre o por sucursal (149-153).

**EST-08 (diarios)** · `finance/accounting/get_started/journals.rst`: seis tipos y múltiples diarios del mismo tipo, ejemplo un banco por cuenta (5-19); código corto único como prefijo de asientos (29-30); moneda del diario (31-33); cuentas permitidas por diario (37-38); cuenta suspense y outstanding por método de pago (62-90, 100-128); cuentas de ganancia/pérdida de arqueo en efectivo (174-179); secuencias dedicadas de NC/ND en ventas y compras (215-220, 244-249).

**Plataforma Almus (datos fijados)** · `digests/localizacion-almus-ve.md`: módulos y alcance (líneas 12-39), asistentes de bootstrap de plan/impuestos/diarios `l10n_ve_account_setup` (16), factura en Bs (19), numeración fiscal por rangos (18). `digests/vertical-almus-hotel.md`: módulos de la vertical y decisiones que absorbe (6-25).

# 2. Catálogo de productos y datos maestros

### CAT-01 · Árbol de categorías de productos

> **DECISIÓN A TOMAR: ¿El árbol de categorías se estructura por naturaleza contable, por área consumidora, o mixto?**
>
> Todo producto exige una categoría (`categ_id`) y la categoría es el punto donde Odoo 19 fija, por compañía: método de costo (Precio estándar / FIFO / AVCO), tipo de valoración (Periódica / Perpetua), diario de existencias, cuenta de valoración y cuenta de diferencia de precio, además de rutas y estrategia de retirada forzada (FIFO/LIFO/FEFO/Closest/Least Packages). Verificado en fuente: los parámetros contables NO se heredan del padre; el fallback cuando la categoría no define valor es el default de la compañía, mientras que las rutas SÍ se acumulan desde las categorías ancestro. Cambiar el método de costo de una categoría dispara el recálculo del costo estándar de todos sus productos: no es irreversible, pero reescribe valoración y es delicado con historial de movimientos. La estrategia de retirada de la categoría prevalece sobre la de la ubicación.

**Depende de:** INV-03 (política de valoración) · plan de cuentas de la localización · **Condiciona:** CAT-06 (reglas de lista por categoría), conteos y reportes de inventario, análisis de costos de A&B, putaway y removal

**Contexto Koral:** el catálogo llega fragmentado y en reclasificación; el árbol nuevo es la oportunidad de que la estructura del inventario coincida con la estructura contable desde el día uno.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Árbol por naturaleza contable: Víveres, Bebidas, Químicos y limpieza, Ferretería y repuestos, Suministros de huésped, Servicios; 1-2 niveles; costo/valoración/cuentas definidos en cada categoría hoja | Cada familia valora y contabiliza homogéneo; los reportes de inventario cuadran directo contra contabilidad; el área consumidora se resuelve con ubicaciones y analítica, no con el árbol |
| **B** | Árbol por área consumidora: Cocina, Bar, Housekeeping, Mantenimiento; parámetros contables repetidos manualmente en cada rama (no hay herencia) | El mismo insumo (cloro, harina) aparecería en varias ramas o forzaría una sola área ficticia; parametrización contable duplicada y propensa a divergir |
| **C** | Mixto: nivel 1 por naturaleza contable, nivel 2 por subfamilia operativa (Bebidas / Licores, Bebidas / Gaseosas), recordando que el hijo NO hereda cuentas ni costo del padre y hay que fijarlos en cada hoja | Mayor granularidad de análisis a costo de más categorías que mantener; útil solo si cada subfamilia realmente necesita cuenta o costo distinto |

**Ruta:** `Inventario > Configuración > Categorías de productos` (parámetros contables visibles con Contabilidad instalada; defaults de compañía en Contabilidad > Configuración > Ajustes)

**Recomendación del consultor:** Opción A con subfamilias solo donde cambie el tratamiento contable (variante acotada de C): la reclasificación pendiente se hace una sola vez contra un árbol contable estable, y el consumo por área se lee por ubicación de destino y cuentas analíticas.

**Elección:** [ ] A · [ ] B · [ ] C

### CAT-02 · Criterios de creación de variantes

> **DECISIÓN A TOMAR: ¿Qué criterio decide que un atributo genere variante y en qué modo de creación?**
>
> El modo de creación (`create_variant`) se define por ATRIBUTO, no por producto: Instantáneamente (crea todas las combinaciones al asignar el atributo), Dinámicamente (crea la variante solo al usarse en un pedido) o Nunca (no crea variantes; el valor es descriptivo o de precio extra). Verificado en fuente: el modo NO puede cambiarse una vez que el atributo está usado en algún producto (Odoo lanza error y lista los productos), el atributo tampoco puede eliminarse ni archivarse mientras esté en uso, y el tipo de visualización Multi-checkbox solo admite modo Nunca. El precio de proveedor puede fijarse por variante específica (línea de proveedor con campo Variante). Requiere activar el grupo Variantes.

**Depende de:** decisión ya validada de usar variantes (COM-D02 en v1) · CAT-04 (barcode y referencia viven en la variante) · **Condiciona:** CAT-06 (reglas de precio por variante), conteos, POS, compras por presentación

**Contexto Koral:** ya se decidió trabajar con variantes; falta congelar el criterio de cuándo un atributo las genera, porque el modo elegido queda bloqueado al primer uso.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Criterio físico estricto: solo genera variante el atributo que distingue un ítem físicamente almacenable distinto (presentación, tamaño, sabor); esos atributos en Instantáneamente; todo lo demás en Nunca | Cada referencia real del almacén existe como variante contable y escaneable; los modificadores de A&B (término de cocción, sin hielo) no ensucian el stock |
| **B** | Criterio comercial amplio: atributos de venta también generan variante, en Dinámicamente para no poblar la base con combinaciones no usadas | Catálogo de venta flexible, pero variantes aparecen "solas" al confirmar pedidos; complica conteos y disciplina de datos maestros en un hotel |
| **C** | Sin atributos generadores: todos en Nunca y productos separados por cada presentación | Renuncia a la decisión ya tomada; duplica plantillas y pierde el configurador |

**Ruta:** `Ventas > Configuración > Ajustes > Variantes` (activación) y `Ventas > Configuración > Atributos` (modo por atributo)

**Recomendación del consultor:** Opción A, con creación de atributos y valores reservada a un rol único de datos maestros (administrador de Inventario): la irreversibilidad del modo exige que nadie cree atributos "de prueba" en producción.

**Elección:** [ ] A · [ ] B · [ ] C

### CAT-03 · Unidades de medida y empaques

> **DECISIÓN A TOMAR: ¿Se activan las unidades de medida y con qué política de compra en bulto / consumo en unidad?**
>
> Odoo 19 rediseñó las UoM: ya no existen categorías de unidad; cada unidad se define relativa a una unidad de referencia (campos Reference Unit y Contains, p. ej. Caja 24 = 24 x Unidad) y solo se convierte entre unidades que comparten cadena de referencia. Verificado en fuente: el producto tiene UNA unidad (`uom_id`, compartida por venta e inventario; el costo y precio se expresan en ella), la unidad de compra se fija por línea de proveedor (campo Unit obligatorio en la lista de proveedores), y los empaques adicionales son el campo Packagings (`uom_ids`) del producto, con barcode opcional por empaque (modelo product.uom, barcode único). El redondeo es global (precisión decimal "Product Unit"). Modificar el factor de una unidad en uso NO recalcula datos existentes (Odoo solo advierte): definir mal una conversión y corregirla tarde deja historial inconsistente.

**Depende de:** CAT-01 (familias donde aplica peso/volumen) · **Condiciona:** CAT-04 (barcode por empaque), compras a proveedores, recetas de cocina, conteos

**Contexto Koral:** A&B compra en cajas, bultos y sacos y consume en unidad, kg y litro; sin UoM el costeo de cocina y las órdenes de compra no cierran.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | No activar el ajuste: todo en "Unidad" | Compras en caja habría que traducirlas a mano a unidades; costeo de cocina por kg imposible; inviable para A&B |
| **B** | Activar "Unidades de medida y empaques"; inventario en unidad base (Unidad, kg, L); unidades de compra (Caja x24, Saco 25 kg) definidas como UoM relativas y asignadas en la línea de cada proveedor | El almacén siempre cuenta en unidad base; la orden de compra sale en la unidad del proveedor y Odoo convierte en la recepción; conversiones definidas una sola vez y congeladas |
| **C** | Opción B + Packagings con barcode por empaque en los productos que se reciben escaneando | Recepción y conteo escaneando la caja completa; exige mantener el barcode del empaque además del de la unidad |

**Ruta:** `Inventario > Configuración > Ajustes > Productos > Unidades de medida y empaques`; unidad en el producto, unidad de compra en la pestaña Compra (línea de proveedor), empaques en la pestaña Ventas

**Recomendación del consultor:** Opción B como piso, extendiendo a C solo en las familias que se reciban con escáner; congelar el catálogo de UoM antes de la carga inicial porque corregir factores con movimientos hechos no repara el historial.

**Elección:** [ ] A · [ ] B · [ ] C

### CAT-04 · Referencias internas y códigos de barras

> **DECISIÓN A TOMAR: ¿Se impone nomenclatura de referencia interna y qué política de barcode (EAN del fabricante vs códigos propios)?**
>
> Verificado en fuente: la referencia interna (`default_code`) y el barcode viven en la VARIANTE, no en la plantilla; la referencia no es obligatoria ni única para Odoo (cualquier regla es de procedimiento), mientras que el barcode sí está bloqueado contra duplicados por compañía (error al guardar) y tampoco puede chocar con un barcode de empaque. El POS y la app Código de barras buscan por barcode según nomenclaturas configurables (estándar o GS1). La app Código de barras (operaciones y conteos con escáner) es Enterprise (`stock_barcode`).

**Depende de:** CAT-02 (un barcode por variante) · CAT-03 (barcodes de empaque) · **Condiciona:** velocidad del POS del bar/restaurante, conteos cíclicos de almacén, recepciones

**Contexto Koral:** catálogo fragmentado implica referencias históricas inconsistentes; el POS de A&B y los conteos del almacén general son los consumidores directos de esta decisión.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Sin política: referencia libre u omitida, barcode solo donde el fabricante lo trae | Búsquedas por nombre, colisiones de nombres parecidos, conteos con escáner parciales; reproduce la fragmentación actual |
| **B** | Nomenclatura de referencia obligatoria por procedimiento (prefijo de familia + correlativo, p. ej. BEB-0145) cargada en cada variante; barcode = EAN del fabricante donde exista, y etiquetas internas (serie propia, p. ej. EAN-13 con prefijo 2xx) para productos sin EAN (porciones de cocina, servicios vendidos en POS) | Todo ítem es escaneable y buscable por referencia; el bloqueo nativo de barcodes duplicados protege la disciplina; conteos y POS completos |
| **C** | Ignorar EAN del fabricante y etiquetar todo con serie interna | Re-etiquetar mercancía que ya trae barcode: trabajo permanente sin beneficio |

**Ruta:** campos Referencia interna y Código de barras en la variante; `Inventario > Configuración > Nomenclaturas de código de barras` (visible con la app Código de barras, **Enterprise**); nomenclatura de respaldo del POS en los ajustes de Punto de Venta

**Recomendación del consultor:** Opción B; definir la nomenclatura de referencia en el plan de carga inicial (mismo prefijo que la familia contable de CAT-01) para que la reclasificación y la codificación se hagan en una sola pasada.

**Elección:** [ ] A · [ ] B · [ ] C

### CAT-05 · Maestro de contactos (proveedores y clientes)

> **DECISIÓN A TOMAR: ¿Estructura del maestro de contactos: compañías con contactos hijos o registros planos, y qué campos se exigen al crear?**
>
> Odoo distingue Individuo vs Compañía (`company_type`) y permite colgar de una compañía direcciones hijas tipadas: Contacto, Dirección de factura, Dirección de entrega, Otra. Verificado en fuente: el único campo que Odoo exige nativamente es el nombre; no impide duplicados de nombre ni de NIF (base_vat solo valida formato). En Koral eso lo cubre la localización: l10n_ve_contact bloquea RIF y email duplicados con modos configurables por compañía (desactivado / por compañía / global) además de la validación SENIAT del RIF. La deduplicación masiva posterior (fusión de registros) es de la app Data Cleaning, Enterprise.

**Depende de:** l10n_ve_contact instalado (dato, no decisión) · **Condiciona:** retenciones y libros IVA (un RIF limpio por tercero), cuentas por pagar, comisiones de agencias, historial de huéspedes

**Contexto Koral:** los huéspedes ya tienen modelo propio en la vertical (almus.hotel.guest); este maestro gobierna proveedores, agencias y clientes de facturación.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Proveedores y agencias como Compañía (RIF en la compañía) con hijos tipo Contacto (vendedor, cobranzas) y direcciones de entrega/factura; personas naturales como Individuo; etiquetas por rol (Proveedor A&B, Proveedor mantenimiento, Agencia, Cliente eventos); modo RIF duplicado en "global" | Retenciones, libros IVA y estados de cuenta consolidan por RIF; el contacto humano cambia sin tocar el tercero fiscal |
| **B** | Registros planos: cada persona/dirección como contacto independiente | El mismo proveedor termina repetido con saldos repartidos; los libros fiscales salen fragmentados; exactamente el problema que se quiere eliminar |

**Ruta:** app `Contactos` (formulario: tipo Individuo/Compañía, pestaña Contactos y direcciones, Etiquetas); modo de duplicados RIF/email en los ajustes de la compañía (l10n_ve_contact)

**Recomendación del consultor:** Opción A, con procedimiento de alta que exija RIF y etiqueta de rol antes de registrar la primera factura; apoyarse en el bloqueo de duplicados de la localización en modo global desde el día uno.

**Elección:** [ ] A · [ ] B

### CAT-06 · Listas de precios de venta (POS, A&B y servicios)

> **DECISIÓN A TOMAR: ¿Una lista base más listas por segmento, y en qué moneda se expresan?**
>
> Activar Pricelists habilita listas con moneda propia (default: la de la compañía), grupos de país y reglas por Todos los productos / Categoría / Producto / Variante, con cálculo Precio fijo, Descuento (visible al cliente) o Fórmula (descuento + redondeo + cargo extra, no visible), base en Precio de venta, Costo u otra lista, cantidad mínima y vigencia. Verificado: la lista "default" es la primera sin grupo de país; la columna Seleccionable solo aplica a eCommerce; desactivar la funcionalidad ARCHIVA todas las listas activas; cada cliente puede tener lista asignada (campo en la ficha) y el POS restringe qué listas ofrece.

**Depende de:** CAT-01 (reglas por categoría) · moneda funcional y tasa BCV (l10n_ve_rate, dato) · **Condiciona:** POS de restaurante y bar, cotización de eventos, convenios con agencias para extras

**Contexto Koral:** las tarifas de habitación y temporadas las gobierna la vertical hotelera; aquí se decide el precio de A&B, lavandería, estacionamiento y marina.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Una sola lista base (moneda de referencia comercial, USD) sin listas derivadas; descuentos manuales caso a caso | Simple, pero cortesías, precios de empleados y convenios quedan a discreción del cajero, sin regla auditable |
| **B** | Lista base en USD + listas derivadas por segmento (Empleados, All-inclusive, Agencias/convenios, Eventos) construidas con reglas Descuento/Fórmula sobre la base o por categoría de CAT-01; asignación por cliente y por sesión de POS | Un solo lugar donde mantener el precio de tarifa; los segmentos se mueven solos cuando cambia la base; la facturación en Bs con tasa BCV la resuelve la localización |
| **C** | Listas expresadas en Bs con precios fijos | Cada ajuste de tasa obliga a reeditar todas las reglas a mano; insostenible con la dinámica cambiaria venezolana |

**Ruta:** `Ventas > Configuración > Ajustes > Precios > Listas de precios` y `Ventas > Productos > Listas de precios`; asignación por cliente en la ficha del contacto y por caja en los ajustes del POS

**Recomendación del consultor:** Opción B: base USD con reglas porcentuales por segmento (Fórmula donde el descuento no deba mostrarse, Descuento donde sí), y ninguna regla por variante salvo necesidad probada, para que el mantenimiento quede en pocas filas.

**Elección:** [ ] A · [ ] B · [ ] C

### CAT-07 · Productos de servicio y consumibles internos

> **DECISIÓN A TOMAR: ¿Qué tipo de producto recibe cada servicio del hotel y cada consumible interno?**
>
> Odoo 19 obliga a elegir Tipo de producto: Bienes (`consu`), Servicio o Combo; y solo en Bienes aparece el check Rastrear inventario (`is_storable`), que decide si hay existencias, pronósticos y conteos. Verificado: los servicios no son rastreables en Inventario; la política de facturación (cantidades pedidas vs entregadas) aparece con Ventas instalada; el Combo mezcla bienes y servicios en una sola línea de venta. El tipo es editable, pero pasar un producto con movimientos de Bienes a Servicio rompe la trazabilidad: tratarlo como decisión de una sola vez.

**Depende de:** CAT-01 (categoría "Servicios" sin valoración de stock) · CAT-06 (los servicios se venden por lista) · **Condiciona:** qué aparece en conteos y valoración, cargos a habitación vía POS de la vertical

**Contexto Koral:** lavandería, estacionamiento y marina se cobran al huésped; habitaciones y packs ya son productos de la vertical y no se duplican aquí; mantenimiento y housekeeping consumen insumos que nadie vende.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Servicios vendibles (lavandería, estacionamiento, marina, decoraciones) como tipo Servicio, casilla Ventas, política de facturación por cantidades pedidas | Cargables a la habitación o facturables directo sin generar movimientos de almacén ni aparecer en conteos |
| **B** | Insumos internos de valor controlado (químicos, repuestos, blancos) como Bienes con Rastrear inventario; su salida a mantenimiento/housekeeping se registra como transferencia o consumo | Stock real, alertas de reposición y costo del consumo por área; es donde hoy se pierde el dinero |
| **C** | Insumos menores de bajo valor (artículos de oficina, amenities de reposición inmediata) como Bienes SIN Rastrear inventario | Se compran y gastan sin existencias ni conteos; menos carga administrativa a cambio de no controlar |

**Ruta:** formulario de producto, campo `Tipo de producto` + check `Rastrear inventario` (pestaña Información general)

**Recomendación del consultor:** las tres opciones son complementarias, no excluyentes: adoptar A+B+C como regla de tipificación escrita (qué familia va a cada tipo, alineada con CAT-01) y validar que ningún servicio quede creado como Bienes, que es el error de carga más común.

**Elección:** [ ] A+B+C como política combinada · [ ] Otra segmentación

## NOTAS DE VERIFICACIÓN

Fuente Community: `odoo-19-source/addons/` · Enterprise: `odoo-19-enterprise/` · Docs: `odoo-19-docs/content/applications/`.

- CAT-01: categoría base sin campos contables, jerarquía por `parent_id`: `product/models/product_category.py:8-27`. `property_valuation` y `property_cost_method` company_dependent con default de compañía: `stock_account/models/product.py:740-764`; diario y cuentas: `:765-775`; fallback a compañía, no al padre: `:79,:86`; cambio de método recalcula standard price: `:784-796`. Rutas acumuladas de ancestros: `stock/models/product.py:1294-1339`; removal de categoría prevalece sobre ubicación: `stock/models/stock_quant.py:618-626`.
- CAT-02: modos `create_variant`: `product/models/product_attribute.py:24-36`; irreversible en uso: `:107-123`; no borrable/archivable en uso: `:133-152`; multi-checkbox solo `no_variant`: `:14-17`. Activación: `sales/sales/products_prices/products/variants.rst:37,47,117-123`. Precio proveedor por variante: `product/models/product_supplierinfo.py:42`.
- CAT-03: sin categorías de UoM; `relative_uom_id` + `relative_factor`: `uom/models/uom_uom.py:17-49,69-75`; conversión solo con referencia común: `:147-176,218-230`; redondeo global: `:62-67`; warning "existing data WON'T be updated": `:79-112`. Producto `uom_id` único y `uom_ids` Packagings: `product/models/product_template.py:118-122`. Unidad de compra por línea de proveedor: `product/models/product_supplierinfo.py:25-26`. Barcode por empaque: `product/models/product_uom.py:8-27`. Ajuste `group_uom`: `product/models/res_config_settings.py:9`; flujo compra/venta: `inventory_and_mrp/inventory/product_management/configure/uom.rst:24-31,40-80,104-110`.
- CAT-04: `default_code` sin required ni unique: `product/models/product_product.py:35`; barcode y referencia en variante: `product/models/product_template.py:152-155,340-351`; unicidad de barcode por compañía: `product/models/product_product.py:246-269`. App Código de barras Enterprise: `stock_barcode` solo en `odoo-19-enterprise/`; nomenclatura de respaldo POS: `point_of_sale/models/pos_config.py:202`.
- CAT-05: `company_type` y tipos de hijo: `odoo/addons/base/models/res_partner.py:254-260,281-284`; nombre obligatorio solo para tipo contact: `:327`. base_vat sin constraint de unicidad. l10n_ve_contact bloqueo RIF duplicado disabled/per_company/global: `odoo-venezuela/addons/l10n_ve_contact/models/res_partner.py:324-340`; email: `:392`. Data Cleaning Enterprise. Doc: `essentials/contacts.rst:24-31,67-72`.
- CAT-06: grupo pricelist y archivado al desactivar: `product/models/res_config_settings.py:12-13,23-33`; moneda y grupos de país: `product/models/product_pricelist.py:16-17,36-38,49-53`; reglas applied_on/base/cálculo: `product/models/product_pricelist_item.py:34-114`; default y Selectable: `sales/sales/products_prices/prices/pricing.rst:37-44,89-119`; lista por cliente: `product/models/res_partner.py:9-14`.
- CAT-07: `type` consu/service/combo: `product/models/product_template.py:54-64`; `is_storable` en `stock/models/product.py:827`; doc tipos e Invoicing Policy: `inventory_and_mrp/inventory/product_management/configure/type.rst:40-95`.

# 3. Inventario y compras

### INV-01 · Estructura de almacenes

> **DECISIÓN A TOMAR: ¿Un almacén único con ubicaciones internas por zona, o varios almacenes Odoo (general, cocina, barra, taller)?**
>
> Odoo obliga a elegir la figura al crear la BD: un `stock.warehouse` es una entidad pesada que genera automáticamente sus propios tipos de operación (Recepción, Entrega, Interno, Pick, Pack, QC, Almacenaje, Cross Dock), sus rutas de recepción/entrega y, si se marcan almacenes proveedores en "Reabastecer de", rutas de reabastecimiento entre almacenes con documento de transferencia formal. Una `stock.location` interna es solo un nodo del árbol de existencias: moverse entre ubicaciones del mismo almacén es una transferencia interna simple, sin ruta ni reabastecimiento propio. Cada almacén exige nombre y código corto únicos por compañía. Verificado en fuente: pasos y reabastecimiento son atributos del almacén, no de la ubicación.

**Depende de:** realidad física del hotel y dotación de personal (un solo almacenista) · **Condiciona:** INV-02 (árbol de ubicaciones), INV-04 (pasos por almacén), INV-06 (reglas por ubicación)

**Contexto Koral:** existe un almacén general con un almacenista responsable; cocina, barra y nevera de caja son sub-áreas físicas de A&B, y mantenimiento tiene un taller. Nadie en esas áreas operará Odoo como almacenista formal.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Un solo almacén (ALM) y ubicaciones internas hijas: ALM/Existencias, ALM/Cocina, ALM/Barra, ALM/Nevera-Caja, ALM/Taller. Requiere activar "Ubicaciones de almacenamiento" en Ajustes | Un solo juego de operaciones que maneja el almacenista; pasar insumos a cocina es una transferencia interna de dos clics; el stock total del hotel se ve en una sola vista |
| **B** | Cuatro almacenes (General, Cocina, Barra, Taller), cada uno con sus tipos de operación y rutas; reabastecimiento configurado en "Reabastecer de" del almacén destino | Cada área tendría recepciones, entregas y reglas propias; exige un responsable por almacén y multiplica por cuatro los documentos y la disciplina de registro; sobredimensionado para un almacenista único |
| **C** | Híbrido: almacén General + un segundo almacén solo para Taller | Aísla el inventario de mantenimiento, pero duplica operaciones para un área de bajo movimiento; el taller se cubre igual con una ubicación interna |

**Ruta:** `Inventario > Configuración > Almacenes` y `Inventario > Configuración > Ajustes > Almacén > Ubicaciones de almacenamiento` [verificada]

**Recomendación del consultor:** Opción A. Con un almacenista único y sub-áreas físicas dentro del mismo predio, varios almacenes solo agregan burocracia documental; las ubicaciones internas dan la misma visibilidad por zona con una fracción del esfuerzo.

**Elección:** [ ] A · [ ] B · [ ] C

### INV-02 · Árbol de ubicaciones y conteo cíclico

> **DECISIÓN A TOMAR: ¿Qué árbol de ubicaciones internas se crea y se activa conteo cíclico por ubicación?**
>
> Con "Ubicaciones de almacenamiento" activo, Odoo obliga a definir el tipo de cada ubicación (Vista, Interna, Pérdida de inventario, Producción, Tránsito) y su jerarquía padre-hijo. Además, cada ubicación interna tiene el campo "Frecuencia de inventario (días)": si es mayor que 0, Odoo programa automáticamente la próxima fecha de conteo de los productos allí almacenados y los presenta en Inventario físico. El día/mes de inventario anual se fija por compañía en Ajustes. Verificado en fuente: la frecuencia cíclica aplica a ubicaciones internas y de tránsito.

**Depende de:** INV-01 · **Condiciona:** INV-09 (ubicación de pérdida), la toma física inicial y la disciplina de conteos posterior

**Contexto Koral:** el inventario del sistema está desalineado desde 2024: la toma física inicial es obligatoria, y el hábito de conteo debe institucionalizarse para no volver a perder la foto.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Solo las ubicaciones que Odoo crea por defecto (Existencias única), sin frecuencia de conteo; inventario anual en fecha fija | Arranque mínimo, pero no se sabe qué hay en cocina vs barra y el desalineamiento puede repetirse un año entero sin detectarse |
| **B** | Árbol por zona física (Existencias, Cocina, Barra, Nevera-Caja, Taller) + ubicaciones virtuales estándar de pérdida, sin conteo cíclico | Visibilidad por zona y ajustes localizados; el conteo queda a criterio del almacenista, sin recordatorio del sistema |
| **C** | Árbol por zona + "Frecuencia de inventario" por ubicación: p. ej. 30 días en Cocina/Barra/Nevera (alta rotación y merma), 90 en Existencias, 180 en Taller | Odoo agenda los conteos y los muestra vencidos en Inventario físico; el desalineamiento se corrige por zonas pequeñas y frecuentes en vez de una toma anual traumática |

**Ruta:** `Inventario > Configuración > Ubicaciones` (campo Frecuencia de inventario) y `Inventario > Operaciones > Inventario físico` [verificada]

**Recomendación del consultor:** Opción C. Después de la toma física inicial, el conteo cíclico por ubicación es el mecanismo nativo que impide repetir el escenario 2024; las frecuencias se calibran a los tres meses según varianza real.

**Elección:** [ ] A · [ ] B · [ ] C

### INV-03 · Valoración de inventario: método y momento

> **DECISIÓN A TOMAR: ¿Qué método de costo por categoría (Estándar, AVCO, FIFO) y qué momento de valoración (Periódico al cierre vs Perpetuo al facturar)?**
>
> Odoo 19 rediseñó la valoración: ambos parámetros viven en la categoría de producto ("Método de costo" y "Valoración de inventario") con un valor por defecto a nivel de compañía, que además define el "Período de inventario" del cierre (Manual, Diario, Mensual). En Periódico los asientos se proponen desde el informe de Valoración al cierre; en Perpetuo el asiento impacta la cuenta de valoración al registrar la factura (ya no un asiento por cada movimiento de stock, como antes de la 19), y el cierre gestiona facturas por recibir y diferidos. Verificado en fuente y documentación.

**Depende de:** plan de cuentas VE (l10n_ve_coa) y calendario de cierre contable · **Condiciona:** INV-09 (cuenta de pérdida por merma), costo de A&B, estados financieros. Equivale a COM-D03/COM-D04/AABB-D06 del menú v1.

**Contexto Koral:** compras en bolívares y divisa con tasa BCV variable hacen que los costos de reposición fluctúen; la contabilidad hoy no refleja inventario confiable.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Categorías de A&B y suministros con Método de costo = AVCO, Valoración = Periódico (al cierre), Período de inventario = Mensual | El costo promedio absorbe la variación de precios BCV; contabilidad recibe un asiento de cierre mensual propuesto por el informe de Valoración, sin ruido diario; es el esquema de menor fricción para un equipo contable pequeño |
| **B** | AVCO + Valoración = Perpetuo (al facturar) | El inventario contable se actualiza al registrar cada factura de proveedor; exige cuentas de valoración y diferencia de precio bien parametrizadas desde el día uno y disciplina estricta de facturación |
| **C** | Método de costo = Precio estándar con revisión manual periódica | Simple, pero con inflación en divisa el estándar queda obsoleto en semanas y la merma se valora mal; desaconsejado en Venezuela |

**Ruta:** `Inventario > Configuración > Categorías de productos` (Método de costo, Valoración de inventario) y `Inventario > Informes > Valoración` (cierre) [verificada]

**Recomendación del consultor:** Opción A: AVCO con valoración Periódica y cierre Mensual, alineado con el cierre contable. Migrar a Perpetuo solo si Gerencia exige inventario contable al día y el circuito de facturas ya opera sin rezago.

**Elección:** [ ] A · [ ] B · [ ] C

### INV-04 · Pasos de recepción y entrega

> **DECISIÓN A TOMAR: ¿Cuántos pasos tendrán los envíos entrantes y salientes del almacén?**
>
> Cada almacén exige definir "Envíos entrantes" (Recibir y almacenar en 1 paso; Recibir y luego almacenar en 2; Recibir, control de calidad y almacenar en 3) y "Envíos salientes" (Entregar en 1 paso; Preparar y entregar en 2; Preparar, empaquetar y entregar en 3). Elegir 2 o 3 pasos exige activar antes "Rutas multietapa" en Ajustes (que a su vez fuerza Ubicaciones de almacenamiento) y hace que Odoo cree ubicaciones intermedias (Entrada, Control de calidad, Salida, Empaquetado) y tipos de operación adicionales encadenados. Verificado en fuente.

**Depende de:** INV-01, INV-02 · **Condiciona:** número de documentos por cada llegada de proveedor, INV-07 (recepción que libera factura). Equivale a COM-D09 del menú v1.

**Contexto Koral:** las compras llegan al almacén general y las recibe el mismo almacenista que las guarda; no hay muelle ni área de control de calidad separada.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Entrantes 1 paso y salientes 1 paso (valores por defecto del almacén) | Una recepción valida y almacena de una vez; una entrega despacha de una vez; mínimo de pantallas para el almacenista |
| **B** | Entrantes 2 pasos (recibir, luego almacenar) | Agrega la ubicación Entrada y un documento interno extra por cada compra; útil solo si hubiera zona de descarga separada con verificación posterior, que no existe |
| **C** | Entrantes 3 pasos o salientes 2/3 pasos | Circuito de distribución logística con control de calidad o empaquetado; no corresponde a la escala de un hotel con un almacenista |

**Ruta:** `Inventario > Configuración > Almacenes > [almacén] > Envíos entrantes / Envíos salientes`; prerrequisito en `Inventario > Configuración > Ajustes > Almacén > Rutas multietapa` [verificada]

**Recomendación del consultor:** Opción A en recepción y entrega. Los pasos adicionales solo agregan documentos que el almacenista único no va a validar a tiempo, y la trazabilidad por zona ya la dan las ubicaciones de INV-02.

**Elección:** [ ] A · [ ] B · [ ] C

### INV-05 · Trazabilidad: lotes y caducidad

> **DECISIÓN A TOMAR: ¿Se rastrean lotes con fechas de caducidad, y en qué categorías de producto?**
>
> Odoo exige dos activaciones encadenadas: "Números de lote y de serie" (grupo de seguridad en Ajustes) y, solo sobre esa base, "Fechas de caducidad" (instala el módulo product_expiry; Odoo lo desactiva si se apagan los lotes). Después, la trazabilidad se decide producto a producto con el campo Seguimiento (Sin seguimiento, Por lotes, Por número de serie); con caducidad activa, cada producto define días de expiración y alerta que se propagan al lote en la recepción. Consecuencia operativa: cada recepción y cada consumo de un producto rastreado obliga a capturar el lote. Verificado en fuente.

**Depende de:** CAT-01 (categorías de perecederos) · **Condiciona:** tiempo de captura en recepciones, INV-02 (conteos por lote), alertas de vencimiento en nevera. Relacionado con AABB-D07 del menú v1.

**Contexto Koral:** las proteínas y perecederos de A&B son el riesgo real de merma por vencimiento; los suministros de mantenimiento y limpieza no lo son. La captura la haría el único almacenista.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Sin lotes: ambos ajustes apagados | Recepciones rápidas, pero ninguna alerta de vencimiento; la rotación de proteínas queda en la memoria del cocinero |
| **B** | Lotes + Fechas de caducidad activos; Seguimiento = Por lotes solo en proteínas y perecederos críticos; resto del catálogo sin seguimiento | El almacenista captura lote y fecha solo en la nevera y proteínas; Odoo alerta vencimientos y permite retirar por antigüedad; carga de captura acotada al riesgo real |
| **C** | Lotes en todo el catálogo de A&B | Trazabilidad completa pero cada salida a cocina exige elegir lote; con un almacenista, el sistema se abandona en semanas |

**Ruta:** `Inventario > Configuración > Ajustes > Trazabilidad > Números de lote y de serie + Fechas de caducidad`; por producto en la pestaña Inventario (Seguimiento) [verificada]

**Recomendación del consultor:** Opción B. Activar la infraestructura completa pero rastrear solo donde el vencimiento cuesta dinero; ampliar categoría por categoría si la disciplina se sostiene.

**Elección:** [ ] A · [ ] B · [ ] C

### INV-06 · Reposición: reglas de reorden y sugerencias

> **DECISIÓN A TOMAR: ¿Reglas de reorden automáticas, manuales, o sugerencias por demanda histórica al cotizar?**
>
> Cada regla de reorden exige producto, ubicación, stock mínimo y máximo, y un Disparador: Auto (el planificador genera solo el borrador de pedido de compra al caer bajo el mínimo) o Manual (la necesidad aparece como sugerencia en el informe de Reposición y alguien decide ordenar o posponer). Prerrequisitos reales: stock en sistema confiable (si el stock está desalineado, Auto compra basura) y proveedor con precio en la lista de precios del producto para que el pedido se genere completo. La vía alternativa, sugerencias por demanda histórica, vive dentro del catálogo de la solicitud de cotización y exige apps Ventas+Inventario+Compras, al menos una entrega validada por producto y proveedor con precio configurado. Verificado en fuente y documentación.

**Depende de:** toma física inicial cerrada (INV-02), maestro de proveedores con precios (INV-07/08) · **Condiciona:** carga de trabajo del comprador y riesgo de quiebre de stock. Equivale a COM-D08 del menú v1.

**Contexto Koral:** el inventario está desalineado desde 2024: cualquier automatismo antes de la toma física generaría compras erróneas. Las compras son centralizadas con aprobación de Gerencia.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Reglas de reorden con Disparador = Manual en los insumos críticos; revisión semanal del informe de Reposición | Odoo calcula y sugiere, la persona decide; compatible con compras centralizadas y con un stock aún en estabilización |
| **B** | Disparador = Auto con mínimo/máximo por producto | Borradores de compra sin intervención; solo sano cuando el stock ya es confiable y los mínimos están calibrados con meses de datos |
| **C** | Sin reglas; usar la función Sugerir del catálogo en cada cotización, con cantidades calculadas sobre la demanda histórica | Útil para armar el pedido semanal al proveedor recurrente; requiere historial de entregas validadas en Odoo, así que solo rinde después de meses de operación |

**Ruta:** `Inventario > Operaciones > Reposición` (reglas y sugerencias); Sugerir por demanda dentro de `Compras > [cotización] > Catálogo` [verificada]

**Recomendación del consultor:** Arrancar con A (Manual) sobre los 30-50 insumos críticos tras la toma física; pasar a B producto a producto cuando tres meses de datos validen los mínimos, y sumar C como apoyo al pedido recurrente de A&B.

**Elección:** [ ] A · [ ] B · [ ] C · [ ] A luego B

### INV-07 · Circuito de compra: aprobación y control de facturas

> **DECISIÓN A TOMAR: ¿Toda compra nace como solicitud de cotización con aprobación de Gerencia por monto, y la factura se controla contra lo recibido?**
>
> Odoo obliga a fijar tres parámetros. Uno: "Aprobación del pedido de compra" con "Importe mínimo" (nativo Community): los pedidos sobre ese monto quedan "Por aprobar" y solo un Administrador de Compras los confirma; el Usuario de compras crea y confirma bajo el umbral. Dos: la "Política de control" de facturas por producto (Sobre cantidades pedidas vs Sobre cantidades recibidas, por defecto recibidas): con "recibidas", la factura de proveedor se propone con lo efectivamente recepcionado, forzando recibir antes de facturar. Tres: la casilla "Conciliación de 3 vías" existe en Ajustes de Compras Community pero instala el módulo account_3way_match, que es Enterprise: agrega el semáforo "Debería pagarse" en la factura comparando pedido, recepción y factura antes del pago. Verificado en fuente.

**Depende de:** organigrama (quién es Usuario y quién Administrador de Compras), umbral definido por Gerencia · **Condiciona:** INV-08, registro de facturas de proveedor y retenciones, INV-04. Equivale a COM-D07 del menú v1.

**Contexto Koral:** las compras son centralizadas y Gerencia aprueba; el riesgo actual es pagar facturas de mercancía no recibida o con cantidades distintas.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Aprobación por monto activa (umbral definido con Gerencia); comprador = Usuario de compras, Gerencia = Administrador; Política de control = Sobre cantidades recibidas | Toda compra nace de cotización; las menores fluyen sin cuello de botella y las mayores esperan la aprobación de Gerencia; contabilidad solo puede facturar lo que el almacenista recepcionó |
| **B** | Igual que A + Conciliación de 3 vías (requiere Enterprise, módulo account_3way_match) | Añade el bloqueo de pago automático cuando factura, pedido y recepción no cuadran; máximo control, condicionado a licencia Enterprise |
| **C** | Sin aprobación por monto (un solo nivel); control sobre cantidades pedidas | Cualquier usuario de compras confirma todo y la factura se emite aunque no haya llegado la mercancía; reproduce el descontrol actual |

**Ruta:** `Compras > Configuración > Ajustes > Órdenes > Aprobación del pedido de compra + Importe mínimo` y `Conciliación de 3 vías` [verificada; 3 vías = **Enterprise**]; política de control por producto en pestaña Compra

**Recomendación del consultor:** Opción A desde el día uno: es 100% Community y cubre el mandato de Gerencia. Evaluar B solo si el proyecto termina en licencia Enterprise por otras razones.

**Elección:** [ ] A · [ ] B · [ ] C

### INV-08 · Acuerdos de compra

> **DECISIÓN A TOMAR: ¿Se activan los Acuerdos de compra, y como pedidos abiertos, como plantillas, o ambos?**
>
> Activar "Acuerdos de compra" en Ajustes instala purchase_requisition y obliga a elegir el Tipo de acuerdo en cada documento: Pedido abierto (blanket order: proveedor fijo, precios pactados por línea con vigencia, del cual se van girando pedidos parciales; Odoo avisa si ya existe uno abierto para el mismo proveedor y no permite confirmarlo sin precio en las líneas) o Plantilla de compra (lista de productos reutilizable, sin compromiso de precio, para regenerar pedidos recurrentes, incluso comparando varios proveedores). Verificado en fuente.

**Depende de:** INV-07 (el pedido girado sigue el circuito de aprobación) · **Condiciona:** INV-06, estabilidad de precios de compra. Equivale a COM-D06 del menú v1.

**Contexto Koral:** A&B compra a proveedores recurrentes (proteínas, bebidas) con listas de precios renegociadas periódicamente por la variación cambiaria; el resto son compras puntuales.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Acuerdos activos; Pedidos abiertos con los 3-5 proveedores recurrentes de A&B, vigencia corta (30-60 días) por la volatilidad de precios | El precio pactado se respeta en cada pedido parcial y la renegociación es renovar el acuerdo; menos captura y menos discusión de precio en cada entrega |
| **B** | Acuerdos activos; solo Plantillas de compra para regenerar el pedido semanal | Ahorra captura del pedido recurrente pero no fija precios; cada pedido vuelve a negociarse |
| **C** | Sin acuerdos: cada compra es una cotización independiente | Máxima flexibilidad, cero estructura; el comprador reescribe el mismo pedido cada semana |

**Ruta:** `Compras > Configuración > Ajustes > Órdenes > Acuerdos de compra`; documentos en `Compras > Órdenes > Acuerdos de compra` [verificada]

**Recomendación del consultor:** Opción A para los recurrentes de A&B, con vigencias cortas alineadas a la renegociación cambiaria, y plantillas (B) como complemento para listas sin precio comprometido. C solo para compras puntuales, que igual conviven con A.

**Elección:** [ ] A · [ ] B · [ ] C · [ ] A+B

### INV-09 · Mermas: desecho vs ajuste de inventario

> **DECISIÓN A TOMAR: ¿La merma se registra con la operación Desechar hacia una ubicación de pérdida con cuenta contable propia, o se absorbe en ajustes de inventario?**
>
> Odoo obliga a distinguir dos vías. Desechar mueve el producto a una ubicación de tipo "Pérdida de inventario" (en Odoo 19 el desecho toma por defecto la primera ubicación de ese tipo de la compañía) y esa ubicación admite una "Cuenta de pérdida" (valuation_account_id) que recalifica contablemente el costo de lo desechado; queda documento, fecha, cantidad y motivo. El ajuste de inventario, en cambio, solo corrige la cantidad contada contra la ubicación virtual de pérdida genérica, sin distinguir merma de error de conteo. Verificado en fuente.

**Depende de:** INV-02 (la ubicación de pérdida existe en el árbol), INV-03 (la cuenta de pérdida se refleja según el momento de valoración) · **Condiciona:** visibilidad del costo de merma de A&B en el P&G. Equivale a AABB-D07 del menú v1.

**Contexto Koral:** la merma de proteínas y perecederos es hoy invisible: se descubre en la toma física como faltante genérico, sin poder distinguir vencimiento, daño o fuga.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Ubicación "Pérdida por merma" tipo Pérdida de inventario con Cuenta de pérdida dedicada; política: todo vencimiento/daño pasa por Desechar; el ajuste de inventario queda reservado a diferencias de conteo | La merma tiene documento, responsable y cuenta contable propia; el P&G separa merma de descuadre; los conteos cíclicos (INV-02) dejan de mezclar ambas cosas |
| **B** | Sin política de desecho: toda diferencia se corrige por ajuste de inventario contra la pérdida genérica | Mínimo esfuerzo, pero la merma sigue siendo un número ciego y nadie responde por ella; repite la situación actual |

**Ruta:** `Inventario > Operaciones > Desechar`; ubicación y Cuenta de pérdida en `Inventario > Configuración > Ubicaciones > [ubicación tipo Pérdida de inventario]` [verificada]

**Recomendación del consultor:** Opción A. El costo de configuración es una ubicación y una cuenta; el retorno es que Gerencia vea por primera vez cuánto cuesta la merma de A&B por mes y por zona.

**Elección:** [ ] A · [ ] B

## NOTAS DE VERIFICACIÓN

Fuente Community: `odoo-19-source/addons/` · Enterprise: `odoo-19-enterprise/` · Docs: `odoo-19-docs/content/applications/inventory_and_mrp/`.

- INV-01: `stock/models/stock_warehouse.py:56-67` (reception_steps/delivery_steps del almacén), `:73-81` (tipos de operación propios), `:83-87` (resupply_wh_ids), `:93-96` (nombre y código únicos por compañía). Ubicaciones: `stock/models/res_config_settings.py:46`.
- INV-02: `stock/models/stock_location.py:32-39` (usage), `:81-83` (cyclic_inventory_frequency y next_inventory_date), `:141-153` (aplica a internal/transit); inventario anual por compañía `stock/models/res_config_settings.py:48-49`.
- INV-03: `stock_account/models/product.py:740-744` (property_valuation periodic/real_time), `:750-755` (property_cost_method); defaults y período de cierre en `stock_account/models/res_company.py:19-49`. Rediseño 19: `inventory/inventory_valuation/cheat_sheet.rst:435-441`.
- INV-04: `stock/models/stock_warehouse.py:56-67`; Rutas multietapa `stock/models/res_config_settings.py:23,87-90` (fuerza ubicaciones).
- INV-05: `stock/models/res_config_settings.py:11,13,76-80` (lotes, caducidad, dependencia); `product_expiry/models/product_product.py:38-41`.
- INV-06: `stock/models/stock_orderpoint.py:31-32` (trigger auto/manual), `:56-61` (min/max). Sugerencias: `purchase/advanced/suggest.rst:13-27`.
- INV-07: `purchase/models/res_config_settings.py:12-14` (aprobación por monto, Community); roles `purchase/security/purchase_security.xml:11,18-22`; política de control `purchase/models/product.py:14-24` (default "recibidas"); 3 vías: casilla en Community (`res_config_settings.py:17`) pero `account_3way_match` solo en `odoo-19-enterprise/` (release to pay).
- INV-08: `purchase_requisition/models/purchase_requisition.py:21-23,52-57,133-136`; activación `purchase/models/res_config_settings.py:18`.
- INV-09: `stock/models/stock_scrap.py:89-98,136` (destino = primera ubicación usage='inventory'); cuenta de pérdida `stock_account/models/stock_location.py:11-14` + etiqueta "Loss Account" `stock_account/views/stock_location_views.xml:13`; doc `inventory/inventory_valuation/scrapped_inventory_valuation.rst:62-74`.

# 4. Punto de Venta y A&B

**Fijado por la plataforma (no se decide):** dualidad Bs/USD, IGTF sobre pagos en divisa e impresión en máquina fiscal (`l10n_ve_pos`, `l10n_ve_pos_igtf`, `l10n_ve_pos_fiscal_printer`); cargo de consumos a la habitación contra la cuenta del huésped, desayuno incluido a precio 0, facturación directa a pasantes y 10% de servicio cobrado en la caja del restaurante (`almus_hotel_pos`).

### POS-01 · Número de POS y alcance de cada uno

> **DECISIÓN A TOMAR: ¿Se crea un punto de venta por punto físico (restaurante, bar, caja de piscina/tienda) o un único POS para todo el hotel?**
>
> Cada punto de venta es un registro `pos.config` con nombre propio y con parámetros que solo viven a ese nivel: tipo de operación de inventario (y con él la ubicación de la que descuenta), diarios de órdenes y de facturas, métodos de pago, tarifas, presets, plano de mesas y empleados autorizados. Las sesiones y sus cierres de caja son por POS, así que la granularidad de POS define la granularidad del arqueo y del reporte por punto. En cambio, "Actualizar cantidades en stock" (tiempo real vs al cierre) es un parámetro por compañía, visible solo en modo desarrollador: aplica igual a todos los POS.

**Depende de:** layout físico del hotel y cajas reales con dinero · **Condiciona:** POS-02 a POS-08 (todo se parametriza POS por POS), cierres, reportes por punto, ubicaciones de stock por área (INV-02)

**Contexto Koral:** el hotel opera restaurante (salón, piscina, muelle), bar y caja de tienda/piscina; la vertical permite activar el cargo a habitación por caja (la tienda puede quedar excluida).

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Un POS por punto físico: "Restaurante", "Bar", "Tienda/Piscina". Cada uno con su tipo de operación apuntando a la ubicación de stock de su área, sus métodos de pago y su modo restaurante solo donde aplica | Cierre y arqueo independientes por caja, ventas y mermas por área, responsabilidad separable; más sesiones que abrir/cerrar a diario |
| **B** | Un solo POS con todas las categorías y todos los métodos de pago | Una sola sesión y un solo cierre; imposible separar el arqueo del bar del de la tienda, stock descontado de una sola ubicación, el plano de mesas se mezcla con la venta de mostrador |
| **C** | Intermedio: un POS restaurante+bar (comparten barra y plano) y un POS tienda/piscina | Dos cierres; el bar pierde arqueo propio pero comparte inventario y mesas con el restaurante |

**Ruta:** `Punto de Venta > Configuración > Puntos de venta` y `Punto de Venta > Configuración > Ajustes` (selector de POS arriba). "Actualizar cantidades en stock": mismos Ajustes, sección Inventario, con modo desarrollador (parámetro por compañía)

**Recomendación del consultor:** Opción A si tienda y bar manejan caja y stock propios; C si el bar factura contra la caja del restaurante en la práctica actual. Nunca B: el cierre por punto es la principal herramienta de control interno del hotel.

**Elección:** [ ] A · [ ] B · [ ] C

### POS-02 · Métodos de pago por POS

> **DECISIÓN A TOMAR: ¿Un método de pago por cada medio real (efectivo Bs, efectivo USD, punto bancario, pago móvil, Zelle) o métodos agregados?**
>
> Cada método de pago define su diario contable destino, si es efectivo contable (tipo efectivo/banco/pagar después) y a qué POS se asigna. El cierre de sesión totaliza y concilia por método: lo que no sea un método separado no aparece separado en el cierre. La localización Almus añade por método la moneda del medio, la categoría SENIAT, la caja destino del efectivo al cierre, la exigencia de referencia (pago móvil/transferencia) y la marca de IGTF. El redondeo de efectivo se activa por POS, con opción "solo efectivo".

**Depende de:** POS-01 (cada POS elige sus métodos), EST-08 (diarios) · **Condiciona:** cierre por medio de pago, conciliación bancaria, IGTF, formas de pago SENIAT en máquina fiscal

**Contexto Koral:** se cobra en efectivo Bs y USD, punto de venta bancario, pago móvil y Zelle; el IGTF del 3% aplica a los pagos en divisa vía la localización.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Un método por medio real, cada uno con su diario propio: Efectivo Bs, Efectivo USD (IGTF activo), Punto bancario, Pago móvil (exige referencia), Zelle (USD, IGTF activo). Más el método "Cargo a habitación" (pagar después) que trae la vertical | El cierre muestra un total por medio; cada diario se concilia contra su banco/caja real; el IGTF se aplica exactamente a los medios en divisa |
| **B** | Métodos agregados (un "Efectivo" único, un "Digital" único) | Cierre ciego: no se sabe cuántos Bs vs USD hay en gaveta ni qué conciliar en cada banco; el IGTF no puede discriminar el medio; descartado por la dualidad de moneda |

Complemento no excluyente: activar el redondeo de efectivo en los POS con cobro en Bs si la denominación física lo exige.

**Ruta:** `Punto de Venta > Configuración > Métodos de pago` y asignación por POS en `Configuración > Ajustes`, sección Pagos [verificada]

**Recomendación del consultor:** Opción A sin discusión; es además el prerrequisito de la conciliación de `almus_hotel_payment` y del cierre de turno por medio de pago.

**Elección:** [ ] A · [ ] B

### POS-03 · Sesiones y responsabilidad de caja

> **DECISIÓN A TOMAR: ¿Sesión por turno de cajero o sesión diaria compartida con identificación por empleado?**
>
> Odoo obliga a definir por POS quién puede operar y con qué derechos: "Iniciar sesión con empleados" habilita el login con PIN o gafete y tres listas por POS (derechos Mínimos, Básicos y Avanzados; las dos primeras vacías = todos los empleados entran; solo el nivel avanzado cierra la caja). Aparte, el control de caja: "Establecer diferencia máxima" con la "Diferencia autorizada" que exige un gerente cuando el conteo del cierre se desvía más de lo permitido.

**Depende de:** POS-01, turnos reales, empleados cargados en RRHH (RHU-02) · **Condiciona:** a quién se atribuye cada orden y cada faltante, POS-04. Equivale a AABB-D09 del menú v1.

**Contexto Koral:** restaurante con turnos largos y varios mesoneros sobre la misma caja; el cierre de turno por medio de pago ya es práctica de la casa.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Sesión por turno: cada cajero abre y cierra su sesión con conteo de fondo y diferencia máxima activada | Responsabilidad individual del efectivo por turno; dos o tres cierres al día por caja; corte operativo al cambiar de turno |
| **B** | Sesión diaria + "Iniciar sesión con empleados": cada empleado se identifica con PIN/gafete y sus órdenes quedan a su nombre; derechos Mínimos para mesoneros, Básicos para cajeros, Avanzados para el gerente | Sin cortes durante el servicio; el efectivo es responsabilidad del equipo del día; la diferencia autorizada controla el cierre único |
| **C** | B + conteo intermedio manual (entrada/salida de efectivo al cambio de turno) | Mantiene sesión diaria pero deja rastro del efectivo entregado entre turnos |

**Ruta:** `Punto de Venta > Configuración > Ajustes`, sección Interfaz PdV ("Iniciar sesión con empleados") y sección Pago ("Establecer diferencia máxima"); gafete y PIN en la ficha del empleado [verificada]

**Recomendación del consultor:** Opción B en restaurante y bar (la identificación por empleado es la que necesita el 10% de servicio y la comanda por mesonero) y A en la tienda si su turno coincide con una sola persona. Activar siempre la diferencia máxima con monto bajo.

**Elección:** [ ] A · [ ] B · [ ] C

### POS-04 · Restaurante: mesas, cursos y 10% de servicio

> **DECISIÓN A TOMAR: ¿Cómo se estructura el plano de mesas por zona y cómo se parametriza el 10% de servicio que se cobra en la caja del restaurante?**
>
> Activar "Es un bar/restaurante" por POS obliga a definir los pisos (compartibles entre POS) y sus mesas (número, forma, asientos, posición). Los cursos (tiempos de servicio) son nativos: botón Curso y "Lanzar curso" para disparar el siguiente. La transferencia de órdenes entre mesas es estándar. La propina se activa por POS ("Propinas") y crea/usa el producto de propina; la vertical define que el 10% se cobra en la caja del restaurante configurando ese producto nativo, no con desarrollo.

**Depende de:** POS-01 (qué POS son restaurante), zonas físicas reales · **Condiciona:** POS-05 (categorías por estación), operación de mesoneros, destino contable del 10%

**Contexto Koral:** tres zonas de servicio (salón, piscina, muelle) atendidas por el mismo restaurante; el 10% de servicio es obligatorio en la cuenta y se reparte a los mesoneros.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Un piso por zona (Salón, Piscina, Muelle) con mesas numeradas sin repetirse entre zonas; "Propinas" activo con producto de servicio 10% apuntando a una cuenta de pasivo "servicio por pagar a mesoneros"; división y preimpresión de cuenta activas; pantalla inicial en Mesas | El mesonero ve su zona y transfiere mesas entre zonas al mover al cliente; el 10% queda separado de la venta en el cierre y auditable para el reparto |
| **B** | Un solo piso con todas las mesas; 10% como producto de servicio agregado manualmente por línea | Plano confuso con tres zonas mezcladas; el 10% depende de que el cajero lo agregue; solo aceptable si el volumen es muy bajo |

Sub-decisión abierta (la fija Contabilidad, no el POS): cuenta destino del producto de servicio, pasivo por pagar vs ingreso propio. Es el pendiente D-4 declarado por la vertical.

**Ruta:** `Punto de Venta > Configuración > Ajustes` con el POS restaurante seleccionado: "Es un bar/restaurante", sección Planos y mesas, sección Pagos (Propinas). Edición de mesas también desde el propio plano en el POS [verificada]

**Recomendación del consultor:** Opción A. Definir los tres pisos desde el arranque y cerrar con Contabilidad el destino del 10% antes del go-live, porque cambia la cuenta del producto de propina.

**Elección:** [ ] A · [ ] B

### POS-05 · Canal de preparación: impresoras vs pantalla

> **DECISIÓN A TOMAR: ¿Comandas por impresoras de preparación por categoría o pantalla de preparación en cocina/barra?**
>
> Las impresoras de preparación son Community: se activan por POS y cada impresora define su tipo (IoT o Epson por IP) y las categorías POS que imprime, lo que enruta cocina vs barra. La pantalla de preparación es del módulo `pos_enterprise` (solo Enterprise) y se crea en Órdenes > Pantalla de preparación, también filtrable por categoría, con etapas y temporizadores.

**Depende de:** POS-01 y POS-07 (el enrutamiento es por categoría POS), edición contratada, hardware · **Condiciona:** compra de impresoras/pantallas, flujo cocina-barra. Equivale a AABB-D02 del menú v1.

**Contexto Koral:** cocina y barra separadas del punto de toma de pedido (zonas piscina y muelle a distancia del pase).

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Impresoras de preparación: una por estación (Cocina: categorías de comida; Barra: bebidas), IoT o Epson de red | Comanda física, funciona en Community, robusta ante fallas de pantalla; sin estado de la orden en tiempo real |
| **B** | Pantalla de preparación (**Enterprise**) por estación, con cursos y estados | Cocina ve, marca y avisa; requiere Enterprise y una pantalla táctil por estación |
| **C** | Mixto: pantalla en cocina, impresora en barra | Cada estación con el canal que le calza; máxima inversión |

**Ruta:** A: `Punto de Venta > Configuración > Ajustes`, sección Preparación. B: `Punto de Venta > Órdenes > Pantalla de preparación` [**Enterprise**, `pos_enterprise`]

**Recomendación del consultor:** si la suscripción es Enterprise (la nómina de la localización ya lo exige), Opción B en cocina; la barra puede resolver con impresora (C) si no se justifica segunda pantalla.

**Elección:** [ ] A · [ ] B · [ ] C

### POS-06 · Recetas y descuento de insumos

> **DECISIÓN A TOMAR: ¿Los platos descuentan insumos con lista de materiales tipo Kit al vender, o se fabrican por orden de producción las preparaciones de lote?**
>
> Cada producto vendible del menú debe llevar una lista de materiales tipo Kit; el módulo puente `pos_mrp` (auto instalable con POS + Fabricación, Community) hace que la venta en POS explote el kit y descuente los componentes según el parámetro por compañía de actualización de stock (tiempo real o al cierre de sesión). Las producciones de lote (salsas, masas, porcionado de proteína) se configuran como lista de materiales normal con orden de fabricación. Lo que se carga al montar la BD: maestro de insumos con unidades de cocina (CAT-03), una lista de materiales por plato, y su categoría POS (POS-07).

**Depende de:** CAT-03 (unidades), INV-02 (ubicaciones), app Fabricación · **Condiciona:** costo de venta por plato, mermas detectables, costo del desayuno incluido a precio 0. Equivale a AABB-D05 del menú v1.

**Contexto Koral:** cocina con recetas estables y producciones intermedias diarias; hoy el consumo de insumos no se descuenta de forma sistemática.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Kit por plato (`pos_mrp`) + lista de materiales de fabricación solo para preparaciones intermedias | Descuento automático de insumos con cada venta, incluida la línea de desayuno a precio 0; carga inicial de recetas exigente |
| **B** | Solo kits, sin órdenes de fabricación (las preparaciones se recetean como insumos directos del plato) | Más simple, pero el stock de salsas/producciones no existe como producto y el costeo intermedio se pierde |
| **C** | Sin listas de materiales: los platos no descuentan stock | Cero mantenimiento y cero control de insumos; anula el objetivo de inventario de A&B |

**Ruta:** `Fabricación > Productos > Listas de materiales` (tipo Kit) + `Punto de Venta > Configuración > Ajustes > Inventario` ("Actualizar cantidades en stock", por compañía, modo desarrollador). `pos_mrp` se instala solo al coexistir ambas apps [verificada]

**Recomendación del consultor:** Opción A, arrancando con los 30-40 platos de mayor rotación y completando recetas en operación. Definir desde el día uno la política tiempo real vs cierre (cierre de sesión suele bastar y alivia el rendimiento).

**Elección:** [ ] A · [ ] B · [ ] C

### POS-07 · Categorías POS y presets

> **DECISIÓN A TOMAR: ¿Qué árbol de categorías verá el cajero en pantalla y qué presets de servicio (Comedor, Para llevar, Comedor personal) se habilitan con tarifa y posición fiscal propias?**
>
> Las categorías POS son un árbol independiente del contable: ordenan la pantalla del cajero y enrutan la preparación (POS-05); cada POS puede restringir cuáles muestra. Los presets se activan por POS con "Para llevar / Entrega / Miembros" y cada preset fija su propia tarifa, posición fiscal e identificación exigida al cliente (ninguna/nombre/dirección).

**Depende de:** POS-01, carta real, CAT-06 (tarifas) · **Condiciona:** POS-05 (impresión por categoría), velocidad del cajero, precio y tratamiento fiscal por tipo de servicio. Equivale a AABB-D11 del menú v1 (comedor de personal).

**Contexto Koral:** carta de restaurante, bar y tienda; existe consumo del personal (comedor de empleados) y venta para llevar en la zona de piscina.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Árbol por estación y familia (Comida > Entradas/Fuertes/Postres; Bebidas > Barra/Cava; Tienda) restringido por POS; presets "Comedor" (por defecto), "Para llevar" y "Comedor personal" (tarifa de empleado y, si aplica, posición fiscal propia) | Pantalla limpia por punto, comandas bien enrutadas y precio de empleado sin intervención manual del cajero |
| **B** | Categorías planas mínimas y sin presets; el precio de empleado se resuelve cambiando la tarifa a mano por orden | Menos carga inicial, pero cada consumo de personal depende de disciplina del cajero y no queda tipificado para reporte |

**Ruta:** `Punto de Venta > Configuración > Categorías de PdV`; restricción por POS en Ajustes; presets en `Configuración > Ajustes > Para llevar / Entrega / Miembros` y `Configuración > Presets` [verificada]

**Recomendación del consultor:** Opción A; el preset "Comedor personal" es la forma limpia de tipificar el consumo de empleados sin tocar precios a mano, y deja el dato listo para el reporte de costo de personal.

**Elección:** [ ] A · [ ] B

### POS-08 · Facturación desde el POS

> **DECISIÓN A TOMAR: ¿Qué ventas del POS generan factura fiscal en el momento y cuáles quedan como órdenes con impresión en máquina fiscal, y cuándo es obligatorio identificar al cliente?**
>
> En el POS estándar toda orden emite recibo; la factura se genera solo al marcar el check "Factura" en el pago (o a posteriori desde la orden) y exige asignar cliente; los diarios destino de órdenes y facturas se definen por POS. Si el contacto es tipo Compañía, el check Factura se marca solo. Sobre esto, la plataforma fija dos reglas: `l10n_ve_pos_fiscal_printer` manda las ventas del POS a la máquina fiscal del local, y la vertical resuelve que el cargo a habitación va por "pagar después" sin factura fiscal en el POS (la factura sale al checkout con todos los consumos) mientras que el pasante se factura directo en el POS.

**Depende de:** POS-01 y POS-02 (diarios), reglas SENIAT de la localización, vertical (huésped vs pasante) · **Condiciona:** correlativo de máquina fiscal por punto, libros de IVA, guard de checkout del huésped

**Contexto Koral:** conviven tres públicos en el mismo restaurante: huésped (carga a habitación), pasante (paga y puede exigir factura con RIF) y consumo interno.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Pasante: orden normal con impresión en máquina fiscal; factura (con cliente y RIF) solo si la pide, marcando el check Factura. Huésped: método "Cargo a habitación" (pagar después), sin documento fiscal en POS, factura al checkout. Cliente no obligatorio por defecto | Flujo rápido en barra y piscina; el documento fiscal siempre existe (ticket fiscal o factura); el huésped recibe una sola factura consolidada |
| **B** | Facturar todo pasante siempre (cliente obligatorio en cada orden) | Cada venta exige capturar cliente; frena la caja y duplica esfuerzo frente al ticket de máquina fiscal, que ya es documento válido |

**Ruta:** `Punto de Venta > Configuración > Ajustes > Contabilidad` (diarios predeterminados de órdenes y facturas) y check Factura en la pantalla de pago; máquina fiscal según parametrización de la localización por POS/local [verificada]

**Recomendación del consultor:** Opción A: es el diseño que la vertical y la localización ya traen resuelto; parametrizar cliente genérico no obligatorio y entrenar al cajero en el flujo "pide factura, cliente con RIF, check Factura".

**Elección:** [ ] A · [ ] B

## NOTAS DE VERIFICACIÓN

Fuente Community: `odoo-19-source/addons/` · Enterprise: `odoo-19-enterprise/` · Docs: `odoo-19-docs/content/applications/sales/point_of_sale/` · Localización: `odoo-venezuela/addons/` · Vertical: `almus_hotel/`.

- POS-01: `point_of_sale/models/pos_config.py:71,76,83,90,130,143,170,180` (name, picking_type_id, diarios, sesiones, compañía, métodos, almacén). "Actualizar cantidades en stock" por compañía: `point_of_sale/models/res_config_settings.py:41`.
- POS-02: `pos_config.py:174-176` (redondeo); `pos_payment_method.py:35-59` (is_cash_count, journal_id, split_transactions, config_ids, type). Localización: `l10n_ve_pos/models/pos_payment_method.py:16-60`; IGTF `l10n_ve_pos_igtf/models/pos_payment_method.py:11`, `pos_config.py:12-25`. Doc métodos: `payment_methods.rst:41`.
- POS-03: `pos_config.py:121,165-168`; `pos_hr/models/pos_config.py:11-18` (tres listas de derechos). Doc `extra/employee_login.rst:8,24-31,98-114`.
- POS-04: `pos_config.py:159,148-149` (module_pos_restaurant, tips); `pos_restaurant/models/pos_config.py:11-15`; `pos_restaurant.py:15-22,96-108`; cursos `restaurant_order_course.py:8-17`. Doc `restaurant.rst:54,127-128,269-274,288-302,419-443`. Pendiente D-4 (destino del 10%): `almus_hotel/arquitectura/cluster_01_hotel/almus_hotel_pos.md:166-167`.
- POS-05: impresoras Community `pos_config.py:72-73`, `pos_printer.py:35-47`; doc `restaurant.rst:305-330`. Pantalla: `odoo-19-enterprise/pos_enterprise/__manifest__.py:5,26`; doc `extra/preparation.rst:23-24`.
- POS-06: `pos_mrp/__manifest__.py` (auto_install con point_of_sale+mrp, Community).
- POS-07: `pos_category.py:25-28`; menú `pos_config_view.xml:206-208`; `pos_config.py:112,154-158`; `pos_preset.py:12-15`. Doc `extra/presets.rst:33,42`.
- POS-08: `pos_config.py:83-95`; doc `use/pos_invoices.rst:25-56`. Vertical: `almus_hotel_pos.md:56,61,84,123` (cargo pay_later sin factura en POS, factura al checkout, toggle por caja, data del método). Máquina fiscal: `digests/localizacion-almus-ve.md:36`.
- Docs de restaurante 19 consolidados en `restaurant.rst` (rutas de Ajustes en `:366,406`).

# 5. Talento Humano

**Fijado por la plataforma (no se decide):** motor de nómina venezolano de la localización Almus (`l10n_ve_hr`, `l10n_ve_hr_payroll`, `l10n_ve_hr_salary_attachment`): estructuras LOTTT/LSS, parámetros legales fechados, salario integral y dualidad de moneda con tasa fijada al período. Requiere Odoo Enterprise. ISLR salarial, prestaciones al egreso y reportes de nómina están en diseño.

### RHU-01 · Estructura organizativa en la base de datos

> **DECISIÓN A TOMAR: ¿Se replica el organigrama real del hotel en departamentos y puestos, o se carga una estructura simplificada?**
>
> Odoo obliga a asignar cada empleado a un departamento (con jerarquía por departamento padre) y permite definir puestos de trabajo. Además, cada ficha lleva un campo Responsable (Manager), y ese campo no es decorativo: alimenta el organigrama, calcula por defecto el Coach, y al asignarlo Odoo propone automáticamente al responsable como Aprobador de ausencias del empleado. Asistencias añade su propio aprobador. Es decir, la jerarquía que se cargue define de facto quién aprueba vacaciones y horas extra.

**Depende de:** organigrama real aprobado por Gerencia · **Condiciona:** RHU-04 (quién valida extras), RHU-05 (quién aprueba ausencias), SEG-01 (grupos por rol)

**Contexto Koral:** el hotel opera con Gerencia Hotelera, A&B, Operaciones (habitaciones/mantenimiento), Administración y Finanzas y RRHH; los jefes de área son quienes hoy autorizan permisos en papel.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Espejo del organigrama real: departamentos por área (Gerencia, A&B, Operaciones, AyF, RRHH) con subdepartamentos si aplica, puestos por cargo y Responsable cargado en cada ficha | Aprobaciones de ausencias y extras caen solas en el jefe correcto; reportes de nómina y asistencia filtrables por área; más datos que mantener al rotar personal |
| **B** | Estructura simplificada: pocos departamentos genéricos, sin puestos formales, Responsable solo en niveles clave | Arranque más rápido; las aprobaciones se concentran en RRHH (aprobador por defecto), perdiendo el control del jefe directo |

**Ruta:** `Empleados > Departamentos` y `Empleados > Puestos de trabajo`; Responsable en la ficha del empleado, pestaña Información de trabajo [verificada]

**Recomendación del consultor:** Opción A con un solo nivel de departamentos por área; el costo de mantenimiento es bajo y habilita el flujo de aprobación por jefe directo que el hotel ya practica en papel.

**Elección:** [ ] A · [ ] B

### RHU-02 · Contratos, datos del empleado y horarios

> **DECISIÓN A TOMAR: ¿Qué datos mínimos se cargan por empleado al arranque, en qué moneda se pacta cada contrato y cuántos horarios de trabajo se crean?**
>
> En Odoo 19 el contrato ya no es un modelo aparte: vive en la versión del empleado (`hr.version`), con fechas de contrato, tipo, tipo de estructura salarial y salario. El campo moneda del salario es un related de la moneda de la compañía (solo lectura): el estándar guarda el sueldo en la moneda de la compañía, y es la localización Almus la que resuelve la dualidad Bs/divisa con tasa fijada al período; los bonos y deducciones se registran en la moneda pactada. Los datos privados (dirección, cédula, banco, familia) se cargan en la pestaña Personal. El horario de trabajo se asigna por versión; sin calendario, Odoo trata al empleado como de horario totalmente flexible.

**Depende de:** EST-01 (moneda de la compañía), plantilla depurada · **Condiciona:** RHU-03 (estructura salarial), RHU-04 (el horario define qué es hora extra), RHU-05 (duración de ausencias)

**Contexto Koral:** los sueldos se pactan en la práctica en USD con pago mixto Bs/USD; el hotel maneja turnos rotativos en recepción y A&B y horario administrativo en oficinas.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Carga completa: ficha con pestaña Personal llena (cédula, banco, cargas familiares), versión con contrato fechado, tipo de estructura VE y salario pactado; calendarios por turno hotelero (administrativo, 2 o 3 turnos operativos) | Nómina y asistencias correctas desde el primer cierre; las extras se calculan contra el turno real de cada quien; mayor esfuerzo de carga inicial |
| **B** | Carga mínima: nombre, departamento, salario y un único calendario general; datos personales se completan después | Arranque rápido pero el primer ciclo de nómina saldrá con datos incompletos y las extras de turnistas se calcularán contra un horario que no es el suyo |

**Ruta:** `Empleados > Empleados` (pestañas Información de trabajo, Personal y Salario); horarios en `Empleados > Configuración > Horarios de trabajo`; estructuras salariales requieren Nómina (**Enterprise**) [verificada]

**Recomendación del consultor:** Opción A: en un hotel con turnos, el calendario por turno es prerrequisito de las horas extra automáticas (RHU-04); cargar datos personales después solo difiere el problema al primer recibo.

**Elección:** [ ] A · [ ] B

### RHU-03 · Alcance de nómina fase 1

> **DECISIÓN A TOMAR: ¿Qué estructuras de la localización Almus se activan en fase 1 y qué entradas de trabajo alimentan el recibo?**
>
> La fase 1 corre el ciclo regular en Odoo con las reglas Almus; en parametrización esto se traduce en: qué estructuras (regular, utilidades, vacaciones, prestaciones, anticipos, liquidación) se habilitan para uso, qué tipo de estructura se asigna a cada versión de empleado, y qué entradas de trabajo (asistencias, ausencias, extras) alimentan los procesos de nómina. ISLR salarial y prestaciones al egreso quedan fuera hasta que la localización los libere. Todo esto requiere `hr_payroll`, que es Enterprise.

**Depende de:** RHU-02, RHU-04 y RHU-05 (entradas de trabajo) · **Condiciona:** asientos contables de nómina, calendario de cierres. Equivale a RH-D01 del menú v1.

**Contexto Koral:** hoy la nómina se calcula en hoja de cálculo quincenal; el objetivo de fase 1 es sacar el ciclo regular del Excel sin esperar los módulos en diseño.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Activar solo estructura regular (más anticipos si se usan) alimentada por asistencias validadas y ausencias aprobadas; utilidades y vacaciones se corren como procesos puntuales cuando toquen; liquidación desactivada | Ciclo quincenal reproducible desde el mes 1; los egresos se siguen liquidando fuera del sistema hasta que Almus libere prestaciones al egreso |
| **B** | Activar todas las estructuras disponibles desde el día 1, incluida liquidación con reglas parciales | Aparenta cobertura total pero produce liquidaciones incompletas (sin ISLR ni prestaciones al egreso definitivas), con riesgo de pagar mal un egreso |

**Ruta:** `Nómina > Configuración > Estructuras salariales` y `Nómina > Recibos de nómina > Procesos de nómina` [**Enterprise**, requiere hr_payroll + l10n_ve_hr_payroll]

**Recomendación del consultor:** Opción A; es el alcance ya validado y evita usar en producción estructuras cuyo marco legal (egreso, ISLR) la localización aún no cubre.

**Elección:** [ ] A · [ ] B

### RHU-04 · Asistencias: kiosco, PIN y horas extra

> **DECISIÓN A TOMAR: ¿Con qué modo marca el personal en el kiosco y las horas extra se calculan con reglas automáticas o las valida el jefe?**
>
> El kiosco obliga a elegir modo de identificación por compañía: Código de barras/RFID, Código de barras/RFID y selección manual (por defecto) o Selección manual, con lector, cámara frontal o trasera como fuente del código, y opcionalmente PIN numérico por empleado. Aparte, la validación de extras es una opción de compañía: aprobación automática o por responsable. Para el cálculo automático, Odoo 19 trae conjuntos de reglas de horas extra: se instala un conjunto por defecto genérico (regla de horario y regla de días no laborables, tasa 1.0), sin recargos venezolanos precargados; los recargos LOTTT (nocturnidad, feriados, límites) hay que definirlos como reglas propias con su tasa.

**Depende de:** RHU-02 (calendarios por turno), RHU-01 (aprobador) · **Condiciona:** RHU-03 (entradas de trabajo del recibo), costo de hardware. Equivale a RH-D02/RH-D03 del menú v1.

**Contexto Koral:** el control actual es un cuaderno de firmas; hay rotación y personal compartido entre áreas, por lo que la suplantación de marcas es un riesgo real.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Kiosco en modo Código de barras/RFID con carnet por empleado + PIN activado; extras con conjunto de reglas propio LOTTT (recargos definidos regla a regla) y validación por responsable | Marca rápida y difícil de suplantar; las extras salen calculadas con recargo correcto y el jefe solo confirma; exige carnetizar y parametrizar bien las reglas |
| **B** | Kiosco en selección manual con PIN; extras sin reglas propias: el conjunto por defecto a tasa 1.0 y el jefe valida y ajusta manualmente | Sin hardware adicional; más lento en cambio de turno y el recargo LOTTT se sigue calculando a mano fuera del sistema |
| **C** | Modo mixto (Código de barras/RFID y manual, el valor por defecto) + PIN; conjunto de reglas LOTTT desde el arranque | Transición suave: quien tiene carnet escanea, el resto selecciona; mismo esfuerzo de reglas que A |

**Ruta:** `Ajustes > Asistencias` (modo de kiosco, fuente del código, PIN, validación de horas extra); PIN por empleado en su ficha; conjuntos de reglas en `Asistencias > Configuración` [verificada]

**Recomendación del consultor:** Opción C para arrancar sin bloquear por carnetización, con el conjunto de reglas LOTTT definido desde el día 1 y validación por responsable: es el único punto donde el recargo legal queda automatizado.

**Elección:** [ ] A · [ ] B · [ ] C

### RHU-05 · Ausencias: tipos venezolanos y acumulación

> **DECISIÓN A TOMAR: ¿Qué tipos de ausencia se crean y las vacaciones se asignan a mano o con plan de acumulación por antigüedad?**
>
> Odoo no trae tipos venezolanos: hay que crear cada tipo decidiendo si requiere asignación previa (por defecto sí), quién aprueba (nadie, responsable de Ausencias, aprobador del empleado, o ambos), la unidad (día, medio día, hora), si es no remunerada y si exige documento de soporte, pensado justo para el reposo IVSS. Para vacaciones, la alternativa a asignar días a mano cada año son los planes de acumulación con hitos que aumentan los días devengados según antigüedad, que es exactamente la mecánica LOTTT (15 días más 1 adicional por año hasta 15).

**Depende de:** RHU-01 (aprobador por jefe), fechas de ingreso correctas en RHU-02 · **Condiciona:** RHU-03 (la ausencia aprobada alimenta el recibo), provisión contable de vacaciones. Equivale a RH-D05 del menú v1.

**Contexto Koral:** las vacaciones se llevan hoy en un cuaderno de RRHH con cálculo manual de días por antigüedad; los reposos IVSS llegan en papel y a veces sin soporte.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Catálogo VE completo: Vacaciones LOTTT con plan de acumulación con hitos por antigüedad, Reposo IVSS con documento de soporte obligatorio y aprobación de RRHH, permisos remunerados (aprobación del jefe) y no remunerados (aprobación jefe + RRHH) | El devengo de vacaciones corre solo por empleado y antigüedad; el reposo no se aprueba sin certificado adjunto; requiere fechas de ingreso fiables |
| **B** | Catálogo VE con asignación manual: mismos tipos pero RRHH asigna los días de vacaciones de cada empleado una vez al año | Control total de RRHH y arranque más simple; mantiene el cálculo de antigüedad como tarea manual anual, con el mismo riesgo de error actual |

**Ruta:** `Ausencias > Configuración > Tipos de ausencia` y `Ausencias > Configuración > Planes de acumulación` [verificada]

**Recomendación del consultor:** Opción A: el plan de acumulación con hitos reproduce el día adicional por año de la LOTTT sin intervención, y el soporte obligatorio del reposo cierra la brecha documental frente al IVSS.

**Elección:** [ ] A · [ ] B

---

# 6. Usuarios y seguridad

### SEG-01 · Mapa de roles y grupos de acceso

> **DECISIÓN A TOMAR: ¿Se cubre cada rol del hotel con la matriz estándar de grupos por aplicación o se crean grupos a medida?**
>
> Odoo obliga a asignar a cada usuario un nivel por aplicación (típicamente Usuario/Oficial y Administrador; en RRHH por ejemplo "Oficial: gestionar todos los empleados" y "Administrador"; en Ausencias hay tres niveles: Responsable, Oficial y Administrador; en Asistencias cuatro, incluido "leer solo sus propias asistencias"). Lo que el selector estándar no cubre se resuelve con grupos técnicos y reglas de registro, que exigen modo desarrollador para crearse o modificarse.

**Depende de:** RHU-01 (quién es jefe de qué), EST-01 · **Condiciona:** SEG-02, SEG-03, SEG-04, auditabilidad general

**Contexto Koral:** roles reales: recepcionista, cajero A&B, almacenista, comprador, contadora, contralor (solo lectura) y gerencia; hoy no existe segregación formal de accesos.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Matriz mínima: solo grupos estándar por app (recepcionista: usuario de Hotel/POS; comprador: usuario de Compras; contadora: Contabilidad; gerencia: administrador de sus apps) documentada en una tabla rol x app | Rápida de montar y de auditar; algunos roles verán más de lo estrictamente necesario dentro de su app |
| **B** | Roles finos: matriz estándar + grupos a medida y reglas de registro para casos puntuales (p. ej. cajero A&B limitado a su punto de venta) creados en modo desarrollador | Acceso al milímetro, pero cada grupo a medida es deuda de mantenimiento en cada actualización y exige a alguien que lo entienda |

**Ruta:** `Ajustes > Usuarios y compañías > Usuarios` (pestaña Permisos de acceso); grupos y reglas de registro en `Ajustes > Usuarios y compañías > Grupos` [modo desarrollador]

**Recomendación del consultor:** Opción A como base para el arranque, reservando la Opción B solo para las dos excepciones que la justifican: Contraloría en solo lectura (SEG-02) y cajas.

**Elección:** [ ] A · [ ] B

### SEG-02 · Segregación contable y Contraloría en solo lectura

> **DECISIÓN A TOMAR: ¿Cómo se separa facturar, pagar y conciliar, y con qué grupo se da a Contraloría acceso de solo lectura?**
>
> Los grupos reales de Contabilidad en el fuente de Odoo 19 son: "Facturación" (facturas, pagos y reportes básicos), "Administrador" (acceso total con configuración), y como grupos técnicos "Mostrar funciones contables completas" y "Mostrar funciones contables - Solo lectura". No existe un grupo llamado "Auditor" en 19: el rol de solo lectura es el grupo técnico de solo lectura, que tiene reglas de registro propias que le permiten leer todos los asientos sin escribirlos; los usuarios de "Facturación" están limitados por regla a documentos de cliente/proveedor y no ven asientos generales. Existe además un grupo de inalterabilidad de asientos y otro para validar cuentas bancarias.

**Depende de:** SEG-01, definición de firmas y topes de pago · **Condiciona:** confianza de Contraloría en el sistema, cierre contable. Equivale a CON-D02 del menú v1.

**Contexto Koral:** la contadora factura, paga y concilia hoy sin contrapeso; el contralor revisa a posteriori en papel y exige poder ver todo sin poder tocar nada.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Segregación en tres: recepción/cajas con "Facturación" (solo documentos de cliente), contadora con acceso contable completo para pagos y conciliación, contralor con el grupo de solo lectura; validación de cuentas bancarias reservada a administración | Cada quien ve lo suyo, Contraloría lee todo sin escribir; requiere modo desarrollador para asignar los grupos técnicos |
| **B** | Solo niveles del selector: todos los contables como "Facturación" o "Administrador"; el contralor recibe "Facturación" | Sin modo desarrollador, pero el contralor podría crear y modificar facturas: no hay solo lectura real y la segregación queda en política verbal |

**Ruta:** grupos definidos en `account/security/account_security.xml`; asignación en `Ajustes > Usuarios y compañías > Usuarios`, grupos técnicos visibles en modo desarrollador

**Recomendación del consultor:** Opción A; el grupo de solo lectura contable existe precisamente para el rol de Contraloría y es la única forma verificada de dar visibilidad total sin capacidad de escritura.

**Elección:** [ ] A · [ ] B

### SEG-03 · Acceso multicompañía por usuario

> **DECISIÓN A TOMAR: ¿Qué compañías permitidas y qué compañía por defecto se asigna a cada usuario (si EST-01 termina en multicompañía)?**
>
> Cada usuario tiene una compañía por defecto (obligatoria) y una lista de compañías permitidas; Odoo valida que la primera esté dentro de la segunda. El usuario con varias compañías permitidas puede activarlas a la vez en el selector superior, y todo documento nuevo nace en la compañía activa: ese es el origen del riesgo clásico de facturar o pagar en la compañía equivocada. Las reglas multicompañía de cada módulo filtran solo por las compañías activas del usuario.

**Depende de:** EST-01, EST-07 · **Condiciona:** SEG-02, limpieza de datos contables

**Contexto Koral:** pendiente de EST-01; si operación hotelera y A&B quedan en entidades distintas, recepción y cajas tocarían ambas.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Acceso restringido: cada usuario operativo con una sola compañía permitida (la suya); solo contadora, contralor y gerencia con varias | Elimina el error de compañía equivocada para el 90% del personal; quien necesita cruzar compañías cambia de sesión conscientemente |
| **B** | Acceso amplio: usuarios operativos con varias compañías permitidas y la principal por defecto | Comodidad para roles mixtos, pero cualquier documento creado con la compañía activa incorrecta cae en la entidad equivocada y hay que detectarlo en conciliación |

**Ruta:** ficha del usuario en `Ajustes > Usuarios y compañías > Usuarios` (compañías permitidas y compañía por defecto)

**Recomendación del consultor:** Opción A: en multicompañía, restringir por defecto y ampliar por excepción es la única salvaguarda estructural contra registrar en la entidad equivocada.

**Elección:** [ ] A · [ ] B

### SEG-04 · Usuarios internos, portal y operación sin licencia

> **DECISIÓN A TOMAR: ¿Quiénes necesitan usuario interno (licencia) y quiénes operan solo por kiosco o POS con PIN o carnet, sin usuario?**
>
> Odoo distingue usuario interno (consume licencia Enterprise por usuario), usuario de portal (externo, sin costo de licencia, solo sus propios documentos) y empleados sin usuario. Dos mecanismos verificados permiten operar sin usuario: el kiosco de Asistencias corre en una URL con token propio de la compañía donde el empleado se identifica por carnet, selección o PIN; y en el POS con `pos_hr` los empleados abren caja y operan identificándose con su código de barras o PIN de la ficha de empleado, sin usuario del sistema. El tipo de usuario se cambia en la ficha (visible en modo desarrollador).

**Depende de:** SEG-01 (qué roles necesitan backend), RHU-04 (kiosco), POS-03 · **Condiciona:** número de licencias Enterprise a contratar, presupuesto anual

**Contexto Koral:** plantilla de decenas de empleados pero solo un núcleo (recepción, compras, almacén, contabilidad, RRHH, gerencia) necesita el backend; camareros, cocina y mantenimiento solo marcan asistencia o cobran en POS.

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Licencias solo para el núcleo de backend (aprox. un usuario por rol de SEG-01); resto de la plantilla como empleados sin usuario, operando por kiosco de asistencias y POS con PIN/carnet | Factura de licencias mínima y estable; toda la plantilla queda igualmente cubierta en asistencia y nómina |
| **B** | Usuario interno para todo el que toque cualquier pantalla, incluidos cajeros y turnistas | Cada empleado con autoservicio completo (sus recibos, sus solicitudes), a costo de una licencia por cabeza y administración de decenas de credenciales |

**Ruta:** tipo de usuario en `Ajustes > Usuarios y compañías > Usuarios` [modo desarrollador para ver Interno/Portal]; kiosco por URL con token en `Ajustes > Asistencias`; login POS por PIN requiere el módulo `pos_hr`

**Recomendación del consultor:** Opción A; el kiosco y `pos_hr` existen precisamente para que el personal operativo no consuma licencia, y el autoservicio de ausencias puede concentrarse en los jefes de área.

**Elección:** [ ] A · [ ] B

## NOTAS DE VERIFICACIÓN

Fuente: `odoo-19-source/addons/` · Docs: `odoo-19-docs/content/applications/`.

- RHU-01: `hr/models/hr_employee.py:193-201` (parent_id "Manager", child_ids, coach computado); `hr_holidays/models/hr_employee.py:18-23,160-168` (leave_manager_id y propuesta automática al cambiar manager); `hr_attendance/models/hr_employee.py:13` (attendance_manager_id); módulo `hr_org_chart`.
- RHU-02: `hr/models/hr_version.py:34-39` (modelo hr.version), `:177-178` (currency_id related readonly, wage Monetary), `:150` (resource_calendar_id por versión), `:486` (sin calendario = flexible). Dualidad de moneda: `digests/localizacion-almus-ve.md:38-39`.
- RHU-03: `digests/localizacion-almus-ve.md:38` (estructuras VE y exclusiones); hr_payroll Enterprise; menú Pay Runs (`hr/payroll/pay_runs.rst:19`).
- RHU-04: `hr_attendance/models/res_company.py:21-39` (modos de kiosco, fuente del código, token de URL, PIN, validación de extras); PIN por empleado `hr/models/hr_employee.py:209,1290-1293`; reglas de extras `hr_attendance/models/hr_attendance_overtime_rule.py:71-127` (amount_rate default 1.0) y conjunto por defecto en `data/hr_attendance_overtime_ruleset_data.xml:4-9` + `data/hr_attendance_overtime_rule_data.xml:4-23` (genérico, sin recargos por país). Docs `hr/attendances/kiosks.rst`, `hr/attendances/overtime.rst`.
- RHU-05: `hr_holidays/models/hr_leave_type.py:83-113` (leave_validation_type, requires_allocation, request_unit, unpaid, support_document); acumulación `hr_leave_accrual_plan.py:10-21` y `hr_leave_accrual_plan_level.py:23-45,148-150` (hitos). Docs `hr/time_off/accrual_plans.rst`, `time_off_types.rst`.
- SEG-01: `hr/security/hr_security.xml:10-19`; `hr_holidays/security/hr_holidays_security.xml:9-22`; `hr_attendance/security/hr_attendance_security.xml:9-33`.
- SEG-02 (grupos contables reales en `account/security/account_security.xml`): group_account_readonly (línea 50), group_account_invoice (55), group_account_basic (63), group_account_user (68), group_account_manager (73), group_account_secured (82), group_validate_bank_account (101). Reglas: solo lectura ve todos los asientos (263), Facturación limitado a documentos de cliente/proveedor (285). No existe grupo "Auditor" en 19.
- SEG-03: `odoo/addons/base/models/res_users.py:245-247` (company_id required, company_ids m2m), `:501-507` (constraint compañía por defecto dentro de permitidas).
- SEG-04: `pos_hr/models/hr_employee.py:36-62` (identificación por barcode/PIN sin usuario); kiosco con token `hr_attendance/models/res_company.py:32-33`; tipos de usuario `general/users/user_portals.rst`. Costo por usuario interno: condición comercial de Odoo Enterprise.

---

# Qué sigue después de decidir

1. Cada decisión cerrada se convierte en una tarea de configuración del plan de implantación, con responsable y fecha, respetando el orden de dependencias declarado en cada punto (Depende de / Condiciona).
2. Las decisiones marcadas como irreversibles (EST-01, EST-03, CAT-02, CAT-03) se validan en el ambiente de pruebas antes de aplicarse en producción.
3. Las decisiones que quedan condicionadas a la edición Enterprise (EST-04, EST-06, INV-07 opción B, POS-05 opción B, RHU-03, CAT-04 con app Código de barras) se agrupan en una sola conversación de licenciamiento con Gerencia General, porque la nómina de la localización ya obliga a Enterprise.
4. Los puntos operativos que no son parametrización (conciliación bancaria, aprobación de pagos, planificación de CxP, mantenimiento de equipos, reporte Venetur) siguen viviendo en el menú v1 por departamento.

