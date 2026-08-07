---
proyecto: Koral Morrocoy
documento: Menú de Decisiones Odoo (abanico de propuestas)
version: 1.0 - borrador para validación por departamento
fecha_publicacion: 2026-08-03
deadline_produccion: 2026-10-01
fuentes: AS-IS normalizados (Output/), RX por área (Output/I.M.O/RX/), propuestas previas ya validadas con el cliente (códigos PROP-NAT / PROP-DEV), documentación oficial Odoo 19 (ODOO/odoo-19-docs)
---

# Menú de Decisiones Odoo - Koral

## Qué es este documento

Este es el menú de opciones que cada departamento debe revisar y decidir antes de configurar Odoo. Cada punto parte de una necesidad real detectada en el levantamiento (AS-IS y RX), explica las distintas maneras en que Odoo 19 puede resolverla, y muestra cómo afecta cada alternativa a la operación de Koral, para que el equipo entienda primero qué hace cada opción y después decida con criterio.

Las decisiones tomadas aquí alimentan directamente dos cosas:

1. **El Estado Final**: cada punto decidido se redacta como propuesta definitiva en el formato de redacción aprobado con el cliente.
2. **Las tareas de implementación en Odoo**: cada decisión genera tareas concretas de configuración, carga de datos y capacitación, usando `Arquitectura/Plantilla-Tareas-Implementacion-Odoo.md`.

La salida a producción es el **1 de octubre de 2026**. Para que dé tiempo de configurar, migrar datos, probar y capacitar, las decisiones de este menú deben cerrarse a más tardar el **viernes 21 de agosto de 2026**.

## Cómo se usa (instrucciones por departamento)

Cada departamento trabaja solo su sección, en una sesión de decisión con el dueño del proceso:

1. **Leer** la necesidad detectada y verificar que refleja la realidad. Si no, se corrige el AS-IS primero.
2. **Entender** cada opción: qué hace y cómo afecta a la operación diaria. Preguntar todo lo que no esté claro antes de decidir.
3. **Decidir** una opción (o la combinación que el punto proponga) marcando su casilla en la línea "Elección del área". La elección formal se registrará además en una encuesta por departamento.
4. Si la decisión difiere de la recomendación del consultor, dejar el motivo por escrito en la sesión: es el registro de la razón de negocio.

Nadie decide por otro departamento. Los puntos marcados como transversales (ver siguiente sección) se deciden en mesa conjunta.

## Cómo leer cada punto

- **ID** (ej. COM-D03): prefijo del área + número de decisión. Se usa para referirse al punto en sesiones, encuestas y tareas.
- **DECISIÓN A TOMAR** (cuadro al inicio): la pregunta que el área debe responder y cómo parametriza Odoo ese asunto: dónde vive el parámetro y qué comportamientos cambia. Todo verificado contra la documentación oficial de Odoo 19 y su código fuente.
- **Situación actual:** cómo se hace hoy, según el AS-IS.
- **Origen:** de dónde sale la necesidad: archivo AS-IS y tarea, hallazgo del RX con su evidencia `[Ev: ...]`, y propuesta previa (PROP-XXX-nnn) si ya existía una validada. Todo punto es rastreable hasta su fuente.
- **Opciones A, B, C...:** las alternativas reales de configuración. Cada fila dice cómo se configura Odoo y cómo afecta la operación de Koral (la columna que importa para decidir). Cuando una opción implica desarrollo, edición Enterprise, un tercero o solo procedimiento, se dice en el propio texto.
- **Ruta:** navegación en Odoo, verificada contra la documentación oficial; se marca explícito lo que requiere Enterprise y lo que no es nativo.
- **Recomendación del consultor:** sugerencia fundamentada. No sustituye la decisión del área.
- **Elección del área:** casillas al pie; se marca `[x]` en la opción elegida (varias si el punto propone combinarlas). La misma letra se usará en la encuesta de registro.

## Decisiones transversales (mesa conjunta)

Estos temas aparecen en más de un área y deben decidirse en conjunto, una sola vez:

| Tema | Puntos involucrados | Áreas en la mesa |
|---|---|---|
| Método de valoración de inventario y momento de contabilización | COM-D03, COM-D04, AABB-D06 | Compras, AABB, Administración y Finanzas, Contraloría |
| Ubicaciones internas y sub-almacenes | COM-D10, AABB-D03, GH-D03, OPE-D03 | Compras, AABB, Gerencia Hotelera, Operaciones |
| Aprobaciones por monto (compras y pagos) | COM-D07, AABB-D04, AYF-D04, CON-D02 | Gerencia General, Compras, AyF, Contraloría |
| Edición Enterprise (Nómina, Studio, informes contables, Documentos, pantalla de preparación) | AABB-D02, AABB-D10, AYF-D02, AYF-D03, AYF-D04, AYF-D06, AYF-D07, CON-D01, CON-D04, CON-D05, RH-D01 | Gerencia General, AyF, RRHH, Contraloría |

## La plataforma Almus (localización Venezuela + vertical hotelera)

El proyecto arranca sobre dos piezas de Almus que se instalan, no se desarrollan:

**Localización venezolana** (`Almus-Dev/odoo-venezuela`, v1.2.1, LGPL-3, versionada por SemVer, desplegable como submódulo en Odoo.sh). Índice local: `ODOO/digests/localizacion-almus-ve.md`.

| Cluster | Módulos | Qué resuelve | Relación con este menú |
|---|---|---|---|
| Datos maestros | `l10n_ve_rate`, `l10n_ve_contact` | Tasa BCV automática con fuentes en cascada y auditoría; RIF con validación SENIAT en contactos | Resuelto: tasa y doble moneda (ver sección siguiente) · PROP-NAT-001 |
| Contabilidad | `l10n_ve_account`, `l10n_ve_account_setup`, `l10n_ve_coa` | Doble moneda con tasa congelada al asentar, Unidad Tributaria histórica, plan de cuentas VE sembrado por asistente | Base de AYF-D01 y CON-D01 |
| Facturación | `l10n_ve_invoice`, `l10n_ve_invoice_base_currency`, `l10n_ve_invoice_report`, `l10n_ve_edi`, `l10n_ve_edi_tfhka`, `l10n_ve_fiscal_printer` | Factura fiscal SENIAT (Nº de control, rangos, ND/NC), factura siempre en Bs, facturación digital TFHKA y máquina fiscal | Resuelto: facturación fiscal del hotel y del POS |
| IGTF | `l10n_ve_igtf`, `l10n_ve_pos_igtf` | IGTF 3% sobre pagos en divisa, en facturas y en el POS | Opera bajo AYF-D02 (modelos de conciliación) y AABB-D09 |
| POS | `l10n_ve_pos`, `l10n_ve_pos_fiscal_printer` | Dualidad Bs/USD y datos fiscales en el Punto de Venta; impresión en máquina fiscal | Base de AABB-D01 y AABB-D09 |
| Retenciones y declaraciones | `l10n_ve_withholding`, `l10n_ve_withholding_tfhka`, `l10n_ve_iva_declaration_txt`, `l10n_ve_islr_declaration_xml`, `l10n_ve_iva_books` | Motor de retenciones IVA/ISLR/municipal, comprobantes (también electrónicos), TXT quincenal IVA, XML mensual ISLR, Libros de IVA | Resuelto (ver sección siguiente) |
| Inventario fiscal | `l10n_ve_stock`, `l10n_ve_stock_guide`, `l10n_ve_stock_manifest`, `l10n_ve_stock_guide_manifest_link` | Guía de despacho SENIAT (doc. tipo 04) y manifiesto de transporte | Complemento de salidas; no toca COM-D09 (recepción) |
| Nómina | `l10n_ve_hr`, `l10n_ve_hr_payroll`, `l10n_ve_hr_salary_attachment` | Motor de nómina LOTTT/LSS: estructuras VE, parámetros legales fechados, salario integral, dualidad de moneda (requiere Odoo Enterprise) | Base de RH-D01, RH-D03 y RH-D06 |
| En diseño | clusters de arquitectura | ISLR salarial, prestaciones al egreso, reportes/declaraciones de nómina, Libro de Inventario fiscal | Condiciona RH-D01 (alcance fase 1) y RH-D06 |

**Vertical hotelera** (`Almus-Dev/almus_hotel`, en arquitectura, concepto validado contra los AS-IS de Koral). Índice local: `ODOO/digests/vertical-almus-hotel.md`.

| Módulo | Qué resuelve | Relación con este menú |
|---|---|---|
| `almus_hotel` (núcleo PMS) | Reserva como orden de venta, Gantt de habitaciones sin solapes, check-in/out, walk-in, huéspedes con documento, tarifas por temporada con packs, agencias con % de comisión, cancelación/no-show con política | Resuelto: sustituye a Cloudbeds; muere la decisión de PMS |
| `almus_hotel_payment` | Anticipos con comprobante, referencia y tasa BCV congelada sobre cuenta transitoria conciliable; cierre de turno por medio de pago; factura final con Bs históricos sin recotizar | Resuelto: registro único del cobro; acota AYF-D02 |
| `almus_hotel_pos` | Cargo de consumos a la habitación, titular visible, guard de consumos abiertos al checkout, facturación a pasantes, desayuno incluido a precio 0, 10% servicio en caja del restaurante | Resuelto: AABB-D08 original; da la opción C de AABB-D10 |
| `almus_hotel_housekeeping` | Estados limpia/sucia/bloqueada por habitación; bloqueo por mantenimiento sale de disponibilidad | Resuelto: estado de habitaciones |
| `almus_hotel_report` (diferido) | Ocupación, ADR, RevPAR, ingresos por segmento | Condiciona AYF-D07 (reporte Venetur) |

## Ya resuelto por la plataforma (sin decisión que tomar)

Estas necesidades del AS-IS quedan resueltas por la localización o la vertical: no ofrecen opciones al usuario porque la plataforma ya define cómo se hacen. Se listan para trazabilidad; sus tareas pasan directo al plan de implementación.

- **Tasa BCV y doble moneda Bs/USD** (antes AYF-D01): `l10n_ve_rate` + `l10n_ve_account`. Tasa oficial automática con respaldo en cascada y auditoría; conversión y diferencial cambiario asentados por el sistema; desaparecen el Excel de tasa promedio y la carga manual diaria.
- **Retenciones IVA/ISLR, comprobantes y declaraciones** (antes AYF-D03): `l10n_ve_withholding` (+ TFHKA), `l10n_ve_iva_declaration_txt`, `l10n_ve_islr_declaration_xml`. Cálculo, comprobante, asiento conciliado y archivos para el portal SENIAT en un solo flujo. Pendiente único: el XML de retención salarial (ISLR de nómina) no está cubierto (`l10n_ve_hr_payroll_islr` en diseño); se mantiene el procedimiento actual como interín y se valida en sandbox el caso de facturas con 3+ impuestos.
- **Libros legales y fiscales** (antes CON-D02): `l10n_ve_iva_books` para los Libros de IVA (Prov. 2013/0071, XLSX legal + PDF, cuadrados por construcción) y los informes nativos de Contabilidad para diario, mayor y balance, con cifras estables una vez aplicado CON-D01.
- **Sistema de gestión hotelera (PMS)** (antes decisión de Gerencia Hotelera): la vertical `almus_hotel` sustituye a Cloudbeds: reservas, disponibilidad, huéspedes, tarifas por temporada y agencias en el mismo Odoo. La disyuntiva Cloudbeds vs Odoo deja de existir.
- **Registro único del cobro al huésped**: `almus_hotel_payment`. El anticipo es un solo registro con comprobante adjunto y tasa congelada; la conciliación bancaria es la confirmación del pago (muere la validación por WhatsApp y el triple registro Cloudbeds/Odoo/Teams).
- **Estado de habitaciones y ama de llaves**: `almus_hotel_housekeeping`. Estados limpia/sucia/bloqueada con comentario, independientes de la reserva; el bloqueo por avería saca la habitación de la venta. El ciclo de reparación del equipo averiado sigue vivo como decisión en GH-D01.
- **Tarifas por temporada y comisiones de agencia**: `almus_hotel`. Tarifas con rango de fechas y tramos por noche, packs (niño 4-12, pax extra, mascota) y comisión por agente aplicadas por sistema. Queda viva solo la excepción fuera de tarifa (GH-D02).
- **Cargo del consumo de A&B a la habitación y desayuno incluido** (antes AABB-D08 y parte de AABB-D11): `almus_hotel_pos` + `l10n_ve_pos*`. Cargo a la cuenta del huésped con titular visible y guard al checkout; desayuno como línea a precio 0 por motivo; facturación directa a pasantes; dualidad Bs/USD, IGTF e impresión fiscal cubiertas por la localización.
- **Motor de cálculo de la nómina LOTTT** (parte de RH-D01): `l10n_ve_hr` + `l10n_ve_hr_payroll` + `l10n_ve_hr_salary_attachment` sobre Nómina Enterprise. La decisión que queda (RH-D01) es solo el alcance de la fase 1 mientras la localización libera ISLR salarial, prestaciones y reportes.

## Índice de decisiones

| ID | Tema | Área |
|---|---|---|
| COM-D01 | Rastrear inventario o no (almacenable vs consumible) | Compras y Almacén |
| COM-D02 | Variantes: criterios, nomenclatura y responsables | Compras y Almacén |
| COM-D03 | Método de coste (Estándar, AVCO, FIFO) | Compras y Almacén |
| COM-D04 | Valoración periódica vs perpetua | Compras y Almacén |
| COM-D05 | Comparación de precios de compra | Compras y Almacén |
| COM-D06 | Pedido abierto vs plantilla de compra | Compras y Almacén |
| COM-D07 | Aprobación de compras por monto | Compras y Almacén |
| COM-D08 | Reposición: reglas de reorden | Compras y Almacén |
| COM-D09 | Recepción en 1, 2 o 3 pasos | Compras y Almacén |
| COM-D10 | Toma física, ubicaciones y conteo cíclico | Compras y Almacén |
| AABB-D01 | Captura de la comanda | AABB |
| AABB-D02 | Aviso a cocina y barra (impresora vs pantalla) | AABB |
| AABB-D03 | Sub-almacenes por área y momento del descuento | AABB |
| AABB-D04 | Requisición interna y su autorización | AABB |
| AABB-D05 | Recetas: kits u órdenes de producción | AABB |
| AABB-D06 | Método de costeo de A&B | AABB |
| AABB-D07 | Mermas y trazabilidad de proteínas | AABB |
| AABB-D09 | Turnos, arqueo y responsabilidad de caja | AABB |
| AABB-D10 | Control del préstamo de cavas | AABB |
| AABB-D11 | Comedor de personal | AABB |
| AYF-D01 | Estructura del grupo: compañías, sucursales, analítica | Administración y Finanzas |
| AYF-D02 | Conciliación bancaria del resto de bancos | Administración y Finanzas |
| AYF-D03 | Planificación de pagos y CxP | Administración y Finanzas |
| AYF-D04 | Flujo de aprobación de pagos | Administración y Finanzas |
| AYF-D05 | Cajas de efectivo y divisas digitales | Administración y Finanzas |
| AYF-D06 | Anticipos a proveedores y partidas con socios | Administración y Finanzas |
| AYF-D07 | Reporte diario Venetur/INATUR | Administración y Finanzas |
| CON-D01 | Cierre y bloqueo de períodos | Contraloría |
| CON-D02 | Segregación de funciones y pagos | Contraloría |
| CON-D03 | Supervisión de gestión y cuestionarios | Contraloría |
| CON-D04 | Análisis financiero mensual | Contraloría |
| CON-D05 | Archivo documental para fiscalizaciones | Contraloría |
| GH-D01 | Mantenimiento de equipos del hotel | Gerencia Hotelera |
| GH-D02 | Excepciones de precio y descuentos fuera de tarifa | Gerencia Hotelera |
| GH-D03 | Requisiciones internas y recepción de pedidos | Gerencia Hotelera |
| OPE-D01 | Órdenes de trabajo | Operaciones |
| OPE-D02 | Correctivo vs preventivo | Operaciones |
| OPE-D03 | Entrega y devolución de herramientas | Operaciones |
| OPE-D04 | Reposición de materiales | Operaciones |
| OPE-D05 | Niveles de agua, gasoil y gas | Operaciones |
| RH-D01 | Alcance de la fase 1 de la nómina | Talento Humano |
| RH-D02 | Registro de asistencia | Talento Humano |
| RH-D03 | Horas extras y bonos variables | Talento Humano |
| RH-D04 | Fuente única de datos del empleado | Talento Humano |
| RH-D05 | Vacaciones, permisos y reposos | Talento Humano |
| RH-D06 | Pago de nómina por lote (TXT bancario) | Talento Humano |

Notas de alcance: Legal queda fuera del alcance de Odoo (definido en STATUS del proyecto). AABB-D08 y los antiguos AYF-D01, AYF-D03, CON-D02, GH-D01, GH-D02, GH-D03 y GH-D05 salieron del menú por estar resueltos por la plataforma (ver sección anterior); los IDs de AyF, Contraloría y Gerencia Hotelera fueron renumerados y cada título indica su ID anterior.

---

# 1. Compras y Almacén

**Para el equipo de Compras y Almacén:** esta sección define las bases del inventario de todo el hotel: qué productos se rastrean, cómo se valoran, cómo se repone y cómo se recibe. Varias de estas decisiones son prerrequisito de las demás áreas (AABB, Operaciones y Gerencia Hotelera consumen inventario). El orden sugerido de decisión es: D01 y D02 (catálogo), D10 (toma física), D03 y D04 (valoración, en mesa conjunta con Contabilidad), y después el resto.

### COM-D01 · Clasificación de productos: rastrear inventario o no (almacenable vs consumible)

> **DECISIÓN A TOMAR: ¿Qué productos del catálogo llevarán la casilla "Rastrear inventario" activada?**
>
> En Odoo 19 esto se parametriza producto por producto: en la ficha del producto (tipo "Bienes"), pestaña Información general, la casilla "Rastrear inventario" define si el sistema mantiene existencias de ese artículo (con la opción "Por cantidad" para el caso general). No es un parámetro de la categoría: cada producto se marca individualmente, aunque puede fijarse en masa por importación. Sin la casilla activa, el producto no aparece en el Inventario físico, no dispara reglas de reposición y no entra en la valoración; con ella activa, cada entrada y salida debe registrarse para que el stock del sistema sea fiable.

**Situación actual:** La base de productos está en reclasificación y no existe lista oficial aprobada por Administración y Contabilidad sobre qué productos son almacenables o consumibles; el criterio depende de la interpretación de cada área.

**Origen:** AS-IS Compras y Almacén, tarea 1.2 (Compras) · RX Compras y Almacén, área de mejora 4 `[Ev: COM-1.2]` · PROP-NAT-002

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | "Rastrear inventario" (Por cantidad) activo en todo producto que Victor recibe y despacha; servicios y bienes sin control físico quedan sin la casilla | El sistema muestra existencias reales de víveres, químicos y refrescos, habilita reposición automática, conteos y valoración. Exige disciplina total: cada entrada y salida se registra o el stock vuelve a desalinearse |
| **B** | Casilla activa solo en categorías de alta rotación o valor (víveres, bebidas, químicos); papelería y suministros menores sin rastreo | Menos carga de registro para el almacenista y conteos más cortos, pero los no rastreados no aparecen en existencias ni disparan reposición: su recompra sigue siendo manual y a ojo |
| **C** | Ningún producto con la casilla activa; todo entra al gasto al recibirse | Elimina el problema del inventario desalineado "por decreto", pero renuncia a existencias, reglas de reposición y valoración; contradice la operación actual del almacén |

**Ruta:** `Inventario > Productos > Productos > (producto) > pestaña Información general > casilla Rastrear inventario` (con tipo de producto "Bienes")

**Recomendación del consultor:** Opción A, condicionada a que Administración y Contabilidad emitan primero la lista oficial de criterios que el propio equipo pidió; la opción B es el punto de partida realista si la toma física inicial no puede cubrir todo el catálogo.

**Elección del área:** [ ] A · [ ] B · [ ] C

### COM-D02 · Variantes: criterios de atributos, nomenclatura y responsables

> **DECISIÓN A TOMAR: ¿Con qué criterios se decidirá qué atributos generan variantes, cómo se nombran los productos y quién puede crear variantes?**
>
> El equipo ya decidió trabajar con variantes; lo que falta es la regla de manejo. En Odoo 19 las variantes se activan en Ajustes de Ventas y se construyen con atributos y valores (ej. atributo "Presentación" con valores 1 L / 4 L): cada combinación genera una variante que es una referencia completa por sí misma, con su propio stock (la ficha general solo muestra la suma), su propio código de barras y referencia interna, su precio (precio de la plantilla más el extra del valor de atributo), su foto, y su propia línea en la lista de precios del proveedor. Cada atributo tiene un modo de creación de variantes (Instantáneamente, Dinámicamente o Nunca: este último deja el atributo como dato descriptivo sin crear variantes) y ese modo no puede editarse una vez asignado al producto, por lo que el criterio debe fijarse antes de seguir reclasificando. En la práctica: en compras, POS y conteos se elige siempre la variante exacta, y en las importaciones y tomas físicas cada variante es una línea separada.

**Situación actual:** Lourdes y Asdrúbal ya reclasifican la base usando un producto general con atribuciones (marca, color, presentación) para reducir la lista fragmentada de ítems; falta formalizar la convención antes de seguir, para no rehacer trabajo.

**Origen:** AS-IS Compras y Almacén, tarea 1.2 (Compras) · RX Compras y Almacén, oportunidad 6 `[Ev: COM-1.2]` · PROP-NAT-002

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Criterio funcional: un atributo genera variante solo si cambia el stock que hay que contar por separado o el precio/proveedor de compra (presentación, tamaño, contenido); marca y color se cargan como atributos en modo "Nunca" (descriptivos) salvo que se compren distinto. Producto aparte (otra plantilla) cuando cambian el uso operativo o la categoría contable. Nomenclatura única: nombre genérico en la plantilla, el detalle lo aportan los valores de atributo. Solo Compras (Lourdes) crea atributos, valores y variantes | Catálogo corto con variantes solo donde importan para comprar y contar; conteos e importaciones de tamaño manejable; una sola mano crea variantes, lo que evita duplicados. Requiere disciplina para consultar a Compras cuando un área "necesita" un valor nuevo |
| **B** | Criterio exhaustivo: todo atributo físico registrado (presentación, color, marca) se crea en modo "Instantáneamente" y genera variantes; solo las notas quedan descriptivas | Máxima granularidad: se sabe exactamente qué marca y color hay en el estante. El costo es la explosión combinatoria: muchas más líneas en tomas físicas e importaciones, y una lista de precios de proveedor por cada variante que mantener en un mercado volátil |
| **C** | Sin regla formal: quien reclasifica decide caso por caso qué atributo genera variante y cómo se nombra (statu quo del trabajo en curso) | No frena la reclasificación actual, pero reproduce el problema de origen: criterios distintos por persona, duplicados nuevos y variantes irreversibles mal planteadas (el modo de creación no se puede editar después) |

**Ruta:** `Ventas > Configuración > Ajustes > sección Catálogo de productos > Variantes` (activar) · atributos y valores en `Ventas > Configuración > Atributos` · por producto, pestaña `Atributos y variantes` de la ficha (botón inteligente Variantes para ver las combinaciones)

**Recomendación del consultor:** Opción A: es la formalización del camino que el equipo ya inició, con la salvaguarda de que marca y color no exploten el catálogo. Documentar la convención en una página y aplicarla a todo lo reclasificado antes de cargar variantes, porque el modo de creación de cada atributo no se puede corregir después.

**Elección del área:** [ ] A · [ ] B · [ ] C

### COM-D03 · Método de coste del inventario (Estándar, AVCO o FIFO)

> **DECISIÓN A TOMAR: ¿Con qué método valorará Koral el costo de sus existencias?**
>
> En Odoo 19 el método de coste se define a nivel de compañía en los Ajustes de Contabilidad (sección Valoración del inventario) y puede sobreescribirse por categoría de producto en el campo "Método de coste" de cada categoría; nunca es un parámetro por producto individual. Las tres opciones (Precio estándar, Coste promedio AVCO, FIFO) cambian cómo el sistema calcula el costo de cada salida y, con ello, el costo de venta y el valor del almacén que verán Contraloría y Contabilidad.

**Situación actual:** La reclasificación de productos y la futura toma física obligan a definir con qué método se valorará el inventario, algo que hoy no está decidido; en un entorno de precios volátiles en divisa, la elección tiene impacto directo en el costo reportado.

**Origen:** AS-IS Compras y Almacén, tarea 1.2 (Compras) · RX Compras y Almacén, área de mejora 4 y área de mejora 1 `[Ev: COM-1.2, COM-Alm-1.1]` · Sin PROP previa específica (PROP-NAT-002 toca la categoría contable)

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Método de coste = Precio estándar: costo fijo por unidad definido a mano en cada ficha | Simple de entender, pero con inflación y precios en USD el costo fijado queda obsoleto rápido y alguien debe actualizarlo producto por producto; las diferencias contra el precio real facturado deben vigilarse aparte |
| **B** | Método de coste = Coste promedio (AVCO): el sistema recalcula el promedio ponderado con cada recepción | El costo se actualiza solo con cada compra, sin mantenimiento manual; suaviza las variaciones de precio. Es el equilibrio típico para hotelería con víveres de alta rotación |
| **C** | Método de coste = FIFO: cada salida toma el costo de la capa de entrada más antigua | Máxima precisión por lote de compra y coherente con la rotación física de víveres, pero más sensible a errores si las recepciones no se registran en orden y a tiempo |

**Ruta:** `Contabilidad > Configuración > Ajustes > sección Valoración del inventario > Método de coste` (valor por defecto de la compañía) · excepciones por categoría en `Inventario > Configuración > Categorías de productos > Método de coste`

**Recomendación del consultor:** AVCO como método general: se mantiene solo, absorbe la variación de precios y no depende de la disciplina de capas que FIFO exige a un almacén que apenas va a realinear su inventario. Decisión a validar en mesa conjunta con Contabilidad.

**Elección del área:** [ ] A · [ ] B · [ ] C

### COM-D04 · Momento de contabilización de la valoración: periódica vs perpetua

> **DECISIÓN A TOMAR: ¿La valoración del inventario impactará la contabilidad solo al cierre del periodo o de forma continua al facturar?**
>
> En Odoo 19 este parámetro vive a nivel de compañía en los Ajustes de Contabilidad, sección Valoración del inventario: "Periódico (al cierre)" o "Perpetuo (en la facturación)". Odoo 19 rediseñó este mecanismo: la valoración perpetua ya no genera un asiento por cada movimiento de almacén (como hasta Odoo 18) sino que impacta la cuenta de valoración al contabilizar facturas, y un proceso de asiento de cierre concilia el resto; la periódica, por su parte, ganó cierre automatizable (Manual, Diario o Mensual). Cuentas y método pueden sobreescribirse por categoría de producto.

**Situación actual:** Junto al método de coste, hay que decidir cuándo la valoración del inventario impacta la contabilidad: solo al cierre del periodo o de forma continua al facturar. Esto define cuánto trabajo de cierre asume Contabilidad y qué tan "en vivo" es el valor del almacén.

**Origen:** AS-IS Compras y Almacén, tareas 1.2 y 2 (Compras) · RX Compras y Almacén, área de mejora 4 `[Ev: COM-1.2, COM-2]` · Sin PROP previa específica

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Valoración = Periódico (al cierre), con el asiento de cierre en modo Manual o programado (Diario/Mensual) | Las facturas de proveedor van al gasto y la valoración contable se sincroniza con el asiento de cierre; encaja con el cierre quincenal que Compras ya practica y en Odoo 19 el asiento puede automatizarse, pero entre cierres el balance no refleja el valor del almacén |
| **B** | Valoración = Perpetuo (en la facturación) | La valoración contable se actualiza al contabilizar facturas y facturas de proveedor, y el asiento de cierre cubre lo recibido o entregado aún sin factura; el balance refleja el inventario de forma casi continua, pero exige que recepciones y facturas se registren con rigor y a tiempo |

**Ruta:** `Contabilidad > Configuración > Ajustes > sección Valoración del inventario > Valoración del inventario` (Periódico al cierre / Perpetuo en la facturación, más la programación del cierre)

**Recomendación del consultor:** Iniciar con periódica apoyada en el cierre quincenal existente (en Odoo 19 el asiento de cierre programado abarata mucho esta opción) y evaluar el paso a perpetua cuando la disciplina de recepción y facturación sobre pedido esté consolidada; decisión a tomar con Contabilidad, no solo con Compras.

**Elección del área:** [ ] A · [ ] B

### COM-D05 · Comparación de precios: cómo llevar el 90% transcrito a un circuito comparable

> **DECISIÓN A TOMAR: ¿Con qué mecanismo del sistema se compararán precios antes de comprar?**
>
> Odoo ofrece dos mecanismos parametrizables: las listas de precios de proveedor (pestaña Compra de cada producto, o el menú Listas de precios de proveedor en Configuración de Compras), que autocompletan el precio del proveedor en cada solicitud de cotización, y las solicitudes de cotización alternativas (pestaña Alternativas de la orden), que permiten pedir a varios proveedores y comparar líneas para adjudicar por producto; estas últimas requieren activar "Acuerdos de compra" en los Ajustes de Compras. El primero hace la comparación instantánea con datos precargados; el segundo la hace formal y documentada pero necesita tiempo de respuesta del proveedor.

**Situación actual:** Solo el 10% de las compras pasa por análisis de precio; el 90% se transcribe por indicación de Gerencia General, frecuentemente en fin de semana y sin tiempo hábil para cotizar.

**Origen:** AS-IS Compras y Almacén, tarea 1.3 (Compras) · RX Compras y Almacén, área de mejora 2, área de mejora 3 y oportunidad 2 `[Ev: COM-1.3, COM-Alm-1.7, COM-Alm-1.13]` · PROP-NAT-003

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Cada producto lleva sus proveedores con precio en la pestaña Compra (carga manual o importación masiva) | La comparación es instantánea al armar el pedido, sin esperar cotizaciones; sirve incluso para pedidos de sábado. Requiere mantener los precios al día en un mercado volátil |
| **B** | Activar Acuerdos de compra y usar la pestaña Alternativas de la orden: se crean cotizaciones espejo a varios proveedores y se comparan líneas para adjudicar por producto | Comparación formal y documentada, ideal para compras grandes o nuevas; necesita días hábiles de respuesta del proveedor, incompatible con pedidos de última hora |
| **C** | Esquema mixto: listas de precios cargadas para recurrentes y alternativas de cotización para compras mayores o esporádicas | Cubre el grueso del gasto sin frenar la operación; exige definir el umbral (monto o tipo de producto) que obliga a licitar |
| **D** | Statu quo instrumentado: se sigue transcribiendo la indicación de Gerencia, pero siempre como orden de compra previa en el sistema | No mejora el precio pero al menos garantiza trazabilidad y cierre quincenal limpio; deja intacto el sobrecosto señalado en el RX |

**Ruta:** precios en `Compras > Productos > Productos > (producto) > pestaña Compra` o en `Compras > Configuración > Listas de precios de proveedor` · alternativas en la pestaña `Alternativas` de la solicitud de cotización, previa activación de `Compras > Configuración > Ajustes > sección Órdenes > Acuerdos de compra`

**Recomendación del consultor:** Opción C: cargar los precios de los proveedores habituales de una vez (el equipo ya los conoce) y reservar las cotizaciones alternativas para compras sobre un umbral que Gerencia acuerde. Este punto es tanto de configuración como de política: sin el compromiso de Gerencia de planificar de lunes a viernes, ninguna opción técnica funciona.

**Elección del área:** [ ] A · [ ] B · [ ] C · [ ] D

### COM-D06 · Instrumento para proveedores recurrentes: pedido abierto vs plantilla de compra

> **DECISIÓN A TOMAR: ¿Qué tipo de acuerdo de compra se usará con cada proveedor recurrente?**
>
> Con la función "Acuerdos de compra" activada, Odoo 19 ofrece dos tipos en el campo "Tipo de acuerdo de compra": el pedido abierto (blanket order), atado a un solo proveedor, con precios pactados por línea y un campo "Validez del acuerdo" con fechas, del que las entregas parciales van descontando; y la plantilla de compra, un pedido tipo reutilizable con productos y cantidades precargados que puede dejarse sin proveedor para usarse con varios. El pedido abierto controla compromiso y vigencia; la plantilla solo acelera la creación de cotizaciones repetitivas.

**Situación actual:** Los acuerdos marco ya se usan en Odoo para proveedores constantes con precio fijo en USD, y hay casos de acuerdos vencidos sin cerrar.

**Origen:** AS-IS Compras y Almacén, tarea 4 (Compras) · RX Compras y Almacén, fortaleza 4 `[Ev: COM-4]` · PROP-NAT-003 (tarifas de recurrentes)

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Tipo de acuerdo = Pedido abierto: proveedor único, cantidades y precios pactados por línea (se cargan a mano, no se heredan de la ficha), fechas en Validez del acuerdo | Es el esquema actual; adecuado cuando Gerencia negoció volumen y precio con un proveedor específico. La vigencia queda visible en el sistema, atacando los acuerdos que hoy vencen sin cerrarse |
| **B** | Tipo de acuerdo = Plantilla de compra: productos y cantidades precargados, campo Proveedor vacío para poder usarla con varios | Ideal para el pedido recurrente sin volumen comprometido: la cotización se genera en segundos y puede rotar de proveedor; no controla vigencia ni cantidad pactada |
| **C** | Sin acuerdos: el precio pactado vive solo en la lista de precios de proveedor del producto | Menos objetos que mantener, pero se pierde el registro del compromiso negociado y su vigencia; retrocede respecto a lo que ya funciona |

**Ruta:** `Compras > Órdenes > Acuerdos de compra > Nuevo`, campo `Tipo de acuerdo de compra` (Pedido abierto / Plantilla de compra); requiere `Compras > Configuración > Ajustes > sección Órdenes > Acuerdos de compra`

**Recomendación del consultor:** Mantener pedidos abiertos donde exista negociación real de precio y volumen, y adoptar plantillas de compra para los pedidos repetitivos sin compromiso (quincenas de víveres), revisando trimestralmente los acuerdos por vencer.

**Elección del área:** [ ] A · [ ] B · [ ] C

### COM-D07 · Aprobación de compras por Gerencia dentro del sistema

> **DECISIÓN A TOMAR: ¿Cómo se registrará en el sistema la autorización de Gerencia sobre las compras?**
>
> Odoo 19 trae la aprobación por monto de forma nativa (sin Studio ni Enterprise): en los Ajustes de Compras, la opción "Aprobación del pedido de compra" con su "Importe mínimo" hace que toda orden igual o superior a ese monto, confirmada por un usuario sin rol de Administrador de Compras, quede en estado "A aprobar" hasta que un administrador la apruebe; las órdenes bajo el monto fluyen directo. Para que el circuito funcione, quien elabora (Lourdes) debe tener rol Usuario de Compras y el aprobador (Dr. Alberto) rol Administrador, porque un administrador que confirma su propia orden se la aprueba a sí mismo.

**Situación actual:** Hoy la aprobación de Gerencia General ocurre en reunión presencial con hoja física y WhatsApp, incluso en fin de semana, sin rastro en Odoo.

**Origen:** AS-IS Compras y Almacén, tareas 1.4 y 1.13 (Almacén) · RX Compras y Almacén, área de mejora 7 y oportunidad 7 `[Ev: COM-Alm-1.4, COM-Alm-1.5, COM-Alm-1.13]` · PROP-NAT-003 y PROP-NAT-004

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Activar "Aprobación del pedido de compra" con un Importe mínimo acordado; Lourdes con rol Usuario, Dr. Alberto con rol Administrador de Compras | La aprobación queda registrada con fecha y responsable, y Gerencia puede aprobar desde el celular en lugar de reunión con papel; los montos menores fluyen sin fricción. Requiere que Gerencia realmente use el sistema |
| **B** | Solo control por permisos: Compras y almacén con permisos que no confirman órdenes; únicamente el usuario autorizado confirma | El control existe sin activar nada más, pero no hay estado visible de "pendiente de aprobación": la orden simplemente espera en borrador a que el autorizado la confirme |
| **C** | Aprobación fuera del sistema: Gerencia sigue aprobando verbalmente o por WhatsApp y Compras confirma dejando nota en el chatter | Cambio mínimo de hábitos, pero la trazabilidad depende de la disciplina de anotar; el RX seguiría marcando el hallazgo como abierto |

**Ruta:** `Compras > Configuración > Ajustes > sección Órdenes > Aprobación del pedido de compra` (casilla + campo Importe mínimo); roles en `Ajustes > Usuarios y compañías > Usuarios > permisos de Compras` (funcionalidad nativa, no requiere Studio ni Enterprise)

**Recomendación del consultor:** Opción A con el umbral por monto: montos menores fluyen sin fricción y Gerencia solo interviene sobre el umbral, lo que además reduce la presión de aprobar en fin de semana. Si la adopción de Gerencia es incierta, arrancar con la opción B como transición.

**Elección del área:** [ ] A · [ ] B · [ ] C

### COM-D08 · Reposición: reglas de reorden automáticas, manuales o conteo actual

> **DECISIÓN A TOMAR: ¿Cómo disparará el sistema la reposición del almacén?**
>
> Las reglas de reorden se crean por producto (o desde el menú Reposición) con mínimo y máximo, y su columna "Activador" define el grado de automatismo: en Auto, Odoo crea solo la solicitud de cotización al proveedor de la ficha cuando el stock previsto cae bajo el mínimo; en Manual, el producto aparece en el tablero de Reposición y el usuario decide cuándo ordenar. Adicionalmente, la función "Sugerir" del catálogo de la solicitud de cotización propone cantidades según la demanda histórica (días a cubrir y periodo de referencia), pero exige historial de salidas validadas en el sistema, proveedor con precio cargado y productos rastreados por cantidad. Todas las variantes dependen de un stock de sistema fiable: son posteriores a la toma física de COM-D10.

**Situación actual:** La reposición depende del conteo físico semanal contra un stock mínimo que Gerencia definió de palabra, con lista en papel y envío por WhatsApp.

**Origen:** AS-IS Compras y Almacén, tareas 1.1, 1.2 y 1.5 (Almacén) · RX Compras y Almacén, área de mejora 7 y oportunidad 1 `[Ev: COM-Alm-1.1, COM-Alm-1.2, COM-Alm-1.5]` · PROP-NAT-009 (y PROP-NAT-026 para agua/gasoil/gas)

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Reglas de reorden con Activador = Auto, mínimos y máximos por producto, proveedor y precio en la ficha | Cero conteo para decidir qué pedir: el sistema genera la cotización solo. Si el stock del sistema está mal, compra mal; exige inventario fiable y fichas de proveedor completas |
| **B** | Reglas de reorden con Activador = Manual: el tablero de Reposición lista lo que está bajo mínimo y el usuario pulsa Ordenar | El almacenista conserva el criterio (y Gerencia su aprobación de COM-D07) pero deja de contar y calcular a mano; paso natural intermedio tras la toma física |
| **C** | Función Sugerir en el catálogo de la solicitud de cotización: días a cubrir + periodo histórico de referencia, y el sistema propone cantidades por proveedor | Útil para dimensionar pedidos de fin de semana según consumo histórico; requiere historial de salidas validadas en el sistema, que hoy no existe, y precio cargado por proveedor |
| **D** | Sin reglas: se sigue contando en físico, pero la lista se carga como solicitud de cotización en Odoo en lugar de papel y WhatsApp | Mejora trazabilidad sin depender del stock del sistema; no elimina el trabajo de conteo ni el riesgo de quiebre entre conteos |

**Ruta:** `Inventario > Operaciones > Reposición` (crear reglas y habilitar la columna `Activador`: Auto / Manual); también desde el botón de reposición en la ficha de cada producto · sugerencias con el botón `Catálogo` de la solicitud de cotización en `Compras`, interruptor `Sugerir`

**Recomendación del consultor:** Secuencia D, B, A: registrar ya las requisiciones en sistema, pasar a reglas manuales inmediatamente después de la toma física, y automatizar solo los productos de consumo estable (agua, gas, químicos) cuando el stock del sistema haya demostrado ser fiable un par de meses.

**Elección del área:** [ ] A · [ ] B · [ ] C · [ ] D

### COM-D09 · Recepción en 1, 2 o 3 pasos

> **DECISIÓN A TOMAR: ¿La recepción de mercancía se registrará en el sistema como uno, dos o tres pasos?**
>
> El parámetro vive en la ficha del almacén, pestaña Configuración del almacén, campo "Envíos entrantes": recibir directo (1 paso), pasar por una ubicación de entrada y luego almacenar (2 pasos), o añadir además una etapa de control de calidad (3 pasos). Para que ese campo aparezca con las opciones multietapa hay que activar "Rutas multietapa" en los Ajustes de Inventario, lo que a su vez activa "Ubicaciones de almacenamiento": esta decisión está por tanto encadenada a COM-D10. Cada paso adicional es una transferencia más que validar por cada llegada de proveedor.

**Situación actual:** La recepción actual es fuerte en control (validación física contra pedido y contra documento del proveedor, corrección del pedido antes de confirmar) pero se ejecuta como un solo movimiento en Odoo.

**Origen:** AS-IS Compras y Almacén, tareas 1.7, 1.8 y 1.9 (Almacén) · RX Compras y Almacén, fortaleza 1 `[Ev: COM-Alm-1.6, COM-Alm-1.7, COM-Alm-1.8, COM-Alm-1.9]` · PROP-NAT-005

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Envíos entrantes = Recibir bienes directamente (1 paso) | Refleja lo que Victor ya hace: verifica en despacho y da entrada; mínima fricción y menos clics. La validación cruzada sigue siendo un control humano previo a validar |
| **B** | Envíos entrantes = 2 pasos (entrada + almacenaje), con Rutas multietapa activas | Separa "recibí del proveedor" de "ya está ubicado y disponible"; útil si se activan ubicaciones internas, pero duplica operaciones para un almacén de una sola persona |
| **C** | Envíos entrantes = 3 pasos (entrada + calidad + almacenaje) | Sobredimensionado para el volumen actual del hotel; el control de cantidad y documento no requiere esta etapa formal |

**Ruta:** `Inventario > Configuración > Almacenes > (almacén) > pestaña Configuración del almacén > Envíos entrantes`; las opciones de 2 y 3 pasos requieren `Inventario > Configuración > Ajustes > sección Almacén > Rutas multietapa` (que activa también Ubicaciones de almacenamiento)

**Recomendación del consultor:** Opción A: el control que la ISO reconocería ya existe en el procedimiento humano y no necesita etapas de sistema adicionales; revisar la opción B solo si el despacho llega a operarse con más de una persona y ubicaciones activas.

**Elección del área:** [ ] A · [ ] B · [ ] C

### COM-D10 · Realineación del inventario: toma física, ubicaciones y estrategia de conteo

> **DECISIÓN A TOMAR: ¿Con qué estructura se hará la toma física y cómo se mantendrá alineado el inventario después?**
>
> Tres parámetros encadenados: la casilla "Ubicaciones de almacenamiento" en los Ajustes de Inventario habilita crear ubicaciones internas que repliquen las zonas físicas; cada ubicación tiene en su ficha, sección Recuento cíclico, el campo "Frecuencia de inventario" (en días) que programa la fecha del próximo conteo de esa zona; y los conteos y ajustes se ejecutan desde la página Inventario físico, que también permite solicitar conteos a un usuario y fija por defecto el "Día y mes del inventario anual" definido en Ajustes. Sin ubicaciones activas no hay conteo cíclico, porque en Odoo los ciclos de conteo se programan por ubicación.

**Situación actual:** El inventario en Odoo no refleja la realidad física desde 2024 y parte de 2025, y el sistema opera con un almacén general único sin ubicaciones aunque físicamente la mercancía se ordena por tipo de producto.

**Origen:** AS-IS Compras y Almacén, tareas 1.1 y 1.10 (Almacén) y 1.2 (Compras) · RX Compras y Almacén, área de mejora 1, área de mejora 9, oportunidades 4 y 5 `[Ev: COM-Alm-1.1, COM-Alm-1.2, COM-Alm-1.10, COM-1.2]` · PROP-NAT-007 y PROP-NAT-008

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Toma física global sobre el almacén único desde Inventario físico + Día y mes del inventario anual programado | Resuelve la desalineación de una vez con la estructura actual, sin configurar nada más; entre tomas anuales el error puede volver a acumularse |
| **B** | Activar Ubicaciones de almacenamiento, crear ubicaciones que repliquen las zonas físicas (víveres, químicos, etc.) y hacer la toma zona por zona | La foto inicial queda ordenada por zona y habilita transferencias internas y conteo por área; añade la elección de ubicación en cada recepción y despacho |
| **C** | Opción B + Frecuencia de inventario por ubicación (ej. víveres cada 30 días, ferretería cada 180): el sistema agenda los recuentos por zona | El inventario se mantiene alineado de forma continua con conteos cortos y frecuentes en lo que más rota, en lugar de una toma anual traumática; requiere constancia del almacenista |

**Ruta:** `Inventario > Configuración > Ajustes > sección Almacén > Ubicaciones de almacenamiento` (activar) · ubicaciones y su `Frecuencia de inventario` (sección Recuento cíclico) en `Inventario > Configuración > Ubicaciones` · conteos, ajustes y solicitudes de conteo en `Inventario > Operaciones > Inventario físico` · `Día y mes del inventario anual` en `Inventario > Configuración > Ajustes > sección Operaciones`

**Recomendación del consultor:** Opción B para la toma inicial (crear las ubicaciones cuesta poco y ordena el arranque) y evolucionar a la C activando frecuencias solo en las zonas de alta rotación. Este punto es prerrequisito de COM-D08: ninguna regla de reorden debe activarse antes de la toma física.

**Elección del área:** [ ] A · [ ] B · [ ] C

---

# 2. Alimentos y Bebidas (Bar, Caja, Cocina)

**Para el equipo de AABB:** esta sección cubre desde que se toma la comanda hasta que el consumo se cobra o se descuenta del inventario: POS, cocina, barra, recetas, mermas y caja. Se asume como base la plataforma Almus: la vertical hotelera (`almus_hotel_pos`) resuelve el cargo a habitación y el desayuno incluido, y la localización VE (`l10n_ve_pos`, `l10n_ve_pos_igtf`, `l10n_ve_pos_fiscal_printer`) resuelve la dualidad Bs/USD, el IGTF y la impresión fiscal del POS (ver la sección "Ya resuelto por la plataforma"). Las decisiones D01 a D04 aplican a las tres sub-áreas y conviene decidirlas juntas; D05 a D07 son de Cocina/Bar; D09 a D11 son de Caja. La decisión D03 (ubicaciones) depende de lo que Compras decida en COM-D10.

### AABB-D01 · Captura de la comanda

**Aplica a:** Bar / Caja / Cocina

> **DECISIÓN A TOMAR: ¿Dónde se digita la comanda: en la caja, en la tablet del mesonero o la envía el propio huésped por QR?**
>
> Con la vertical, la comanda vive siempre en el POS estándar de Odoo; lo que se decide es el punto de entrada. Activar "Es un bar/restaurante" en los ajustes del POS habilita el plano de piso con mesas, cursos y traslado de cuentas entre mesas, operable desde cualquier tablet con navegador. El autopedido se activa en la sección "Mobile self-order & Kiosk" de los mismos ajustes, eligiendo entre "QR menu" (solo carta), "QR menu + Ordering" (el huésped pide y paga desde su teléfono) o "Kiosk"; en restaurante Odoo genera un QR por mesa.

**Situación actual:** El mesonero anota el pedido a mano y lo lleva caminando a Caja, donde recién se digita en el POS; la tablet existe pero no se usa por fallas de red. Hay doble digitación, traslado físico del papel y riesgo de pérdida del pedido.

**Origen:** AS-IS AABB Bar.md, tareas BAR-1.6/BAR-1.7/BAR-2.4/BAR-3.5 · AS-IS AABB Caja.md, tareas CAJ-4.1/CAJ-4.2/CAJ-4.3 · AS-IS AABB Cocina.md, tareas COC-2.4/COC-3.3 · RX Bar, mejora 1 `[Ev: BAR-1.6, BAR-1.7, BAR-2.4, BAR-3.5]` · RX Caja, oportunidad 1 `[Ev: CAJ-1.9, CAJ-4.2]` · RX Cocina, mejora 3 `[Ev: COC-2.4, COC-3.3, COC-5.4]`

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Caja como único punto de registro: un solo POS en el mostrador; el plano de piso se usa desde la caja | Cambio mínimo de hábitos; se mantienen la doble digitación y el traslado del papel del mesonero a la caja |
| **B** | POS de restaurante en tablet del mesonero: mismo POS abierto en el navegador de cada tablet, con plano de piso, cursos y traslado de mesas | Elimina el papel y la doble digitación y el pedido llega a preparación al confirmarse; exige WiFi estable en salón, piscina y muelle y tablets dedicadas |
| **C** | Autopedido "QR menu + Ordering": QR por mesa generado desde el ajuste, con presets disponibles en la interfaz self-order | Descarga al mesonero en horas pico; depende del teléfono y los datos del huésped y cambia la experiencia de servicio |

**Ruta:** `Punto de Venta > Configuración > Ajustes > sección Punto de Venta > Es un bar/restaurante` · `Punto de Venta > Configuración > Planos de piso` · `Ajustes > sección Mobile self-order & Kiosk > QR menu & Kiosk activation` [verificada; opciones B y C requieren hardware (tablets) y red; el autopedido es módulo estándar Community]

**Recomendación del consultor:** Opción B como objetivo (es la que elimina la causa raíz), arrancando con la opción A mientras se resuelve la cobertura de red; el QR puede evaluarse después como complemento en piscina.

**Elección del área:** [ ] A · [ ] B · [ ] C

### AABB-D02 · Aviso a cocina y barra (impresora vs pantalla)

**Aplica a:** Bar / Caja / Cocina

> **DECISIÓN A TOMAR: ¿La comanda llega a cocina y barra por impresora, por pantalla de preparación o por ambas?**
>
> Las impresoras de preparación se activan en la sección "Preparación" de los ajustes del POS y cada impresora se asocia a categorías de producto impresas, de modo que cocina y barra reciben solo lo suyo; los tipos soportados son impresora vía IoT o Epson por IP de red. La pantalla de preparación se configura por registro en `Punto de Venta > Órdenes > Pantalla de preparación`: se le asignan POS y categorías, etapas con color y temporizador de alerta por etapa, y corre en el navegador de una tablet o pantalla táctil (las cajas IoT no están soportadas para la pantalla). En Odoo 19 la pantalla forma parte del paquete Enterprise (`pos_enterprise`).

**Situación actual:** La impresora de cocina está dañada, Caja imprime todas las comandas y la confirmación de que el pedido llegó completo a cocina se hace por WhatsApp, radio o en persona.

**Origen:** AS-IS AABB Bar.md, tareas BAR-1.8/BAR-2.6/BAR-3.7 · AS-IS AABB Caja.md, tareas CAJ-1.10/CAJ-4.4 · RX Bar, mejora 1 y riesgo 1 `[Ev: BAR-1.6, BAR-1.7, BAR-1.8]` · RX Caja, mejora 2 `[Ev: CAJ-1.10, CAJ-4.4, CAJ-1.9]` · RX Cocina, oportunidad 7 `[Ev: COC-2.4, COC-3.3]`

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Impresoras de preparación por categoría (ajuste "Impresoras de preparación" + categorías impresas por impresora) | Reproduce el flujo que existía antes de dañarse la impresora; requiere comprar y mantener hardware (Epson en red o vía IoT) |
| **B** | Pantalla de preparación con etapas y alarmas de tiempo, filtrada por categorías de producto | Elimina papel e impresora; la cocina confirma al mover la orden de etapa, sustituyendo el WhatsApp de verificación, y se empiezan a medir tiempos pedido-despacho que hoy no existen |
| **C** | Pantalla en cocina como canal principal + impresora de respaldo en barra o contingencia | Máxima resiliencia ante fallas de un canal, coherente con la cultura de contingencia del equipo; suma ambos costos |

**Ruta:** `Punto de Venta > Configuración > Ajustes > sección Preparación > Impresoras de preparación` (también `Punto de Venta > Órdenes > Impresoras de preparación`) · `Punto de Venta > Órdenes > Pantalla de preparación` [verificada; la pantalla de preparación requiere Enterprise (`pos_enterprise`); la impresora requiere hardware Epson de red o sistema IoT; la pantalla corre en navegador, sin caja IoT]

**Recomendación del consultor:** Opción B: resuelve a la vez la impresora dañada y la confirmación informal de llegada del pedido, y habilita medición de tiempos; añadir impresora (opción C) solo si el presupuesto lo permite. Nota: exige plan Enterprise, lo que debe confirmarse con la decisión de plataforma del proyecto.

**Elección del área:** [ ] A · [ ] B · [ ] C

### AABB-D03 · Modelado del inventario del área y momento del descuento

**Aplica a:** Bar / Caja / Cocina

> **DECISIÓN A TOMAR: ¿Cómo se representan los sub-almacenes de A&B en Odoo y en qué momento descuenta stock el POS?**
>
> Las ubicaciones internas se habilitan con el ajuste "Ubicaciones de almacenamiento" de Inventario y se crean en `Configuración > Ubicaciones`. Cada POS tiene su propio Tipo de operación, cuya ubicación de origen define de qué ubicación descuenta ese punto de venta (así la barra puede descontar de "Barra" y la caja de "Caja/Nevera"). El momento del descuento es el parámetro "Actualizar cantidades en stock" (En tiempo real / Al cierre de sesión): vive en la compañía, aplica a todos los POS de la empresa y solo es visible en los ajustes del POS con el modo desarrollador activo; el valor por defecto es En tiempo real.

**Situación actual:** Los sub-almacenes reales (almacén general, almacén de cocina, barra, almacén de caja con nevera y vitrina) no existen en ningún sistema: todo se cuenta en libreta u hoja.

**Origen:** AS-IS AABB Bar.md, tareas BAR-2.2/BAR-4.1 · AS-IS AABB Caja.md, tareas CAJ-1.3/CAJ-1.4/CAJ-1.16/CAJ-3.1 · AS-IS AABB Cocina.md, tarea COC-4.1 · RX Bar, mejora 2 `[Ev: BAR-2.2, BAR-2.11, BAR-3.11, BAR-4.1]` · RX Caja, mejora 3 `[Ev: CAJ-1.3, CAJ-1.4, CAJ-1.16]` · RX Cocina, mejora 1 `[Ev: COC-1.3, COC-2.2, COC-4.1]`

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Un almacén con ubicaciones internas por área ("Cocina", "Barra", "Caja/Nevera"), tipo de operación propio por POS y descuento En tiempo real | Existencias visibles por área durante el servicio: el Capitán ve qué se agotó sin llamar por radio; los conteos manuales pasan a ser verificación, no registro |
| **B** | Igual que A, pero "Actualizar cantidades en stock" en Al cierre de sesión (un solo movimiento por sesión) | Menos movimientos que revisar; durante el día el stock en pantalla no refleja lo vendido, así que no sirve para verificar disponibilidad en servicio |
| **C** | Almacenes separados por área con rutas de reabastecimiento entre ellos | Reportes y responsables claramente separados por área; configuración y operación más pesadas para un equipo que recién se digitaliza |
| **D** | Solo el almacén general en sistema; las áreas sin sub-stock | Esfuerzo mínimo, pero nevera, vitrina y barra seguirían en libreta: no resuelve el hallazgo |

**Ruta:** `Inventario > Configuración > Ajustes > sección Almacén > Ubicaciones de almacenamiento` · `Inventario > Configuración > Ubicaciones` · momento del descuento: `Punto de Venta > Configuración > Ajustes > sección Inventario > Actualizar cantidades en stock` [verificada; este último parámetro es por compañía, no por POS, y solo aparece con modo desarrollador]

**Recomendación del consultor:** Opción A: la visibilidad en tiempo real es justamente lo que hoy se suple con cálculo mental y radio (BAR-1.5, BAR-3.4); la opción C queda para una segunda fase si se necesita separar responsabilidades contables por área. Coordinar con COM-D10.

**Elección del área:** [ ] A · [ ] B · [ ] C · [ ] D

### AABB-D04 · Requisición interna y su autorización

**Aplica a:** Bar / Caja / Cocina

> **DECISIÓN A TOMAR: ¿Cómo se reemplaza la requisición en papel y dónde queda la firma de Gerencia?**
>
> Odoo no trae un flujo nativo de requisición con aprobación previa para movimientos internos (la vertical lo declara como hueco, candidato a add-on): la transferencia interna registra quién pidió, quién validó y cuándo, pero sin paso de firma. Las reglas de reabastecimiento mín/máx se definen por producto y ubicación y generan la transferencia sola cuando el stock del área cae bajo el mínimo. La aprobación por monto sí existe de forma nativa en Compras: el ajuste "Aprobación del pedido de compra" exige un segundo nivel sobre un monto mínimo configurable.

**Situación actual:** La requisición al almacén general viaja en papel recabando firma de Gerencia de Operaciones y firma de entrega de Almacén; si el autorizador no está, el pedido se estanca, y un error obliga a rehacer el formato completo.

**Origen:** AS-IS AABB Bar.md, tareas BAR-4.2/BAR-4.3/BAR-4.4 · AS-IS AABB Caja.md, tareas CAJ-3.2 a CAJ-3.5 · AS-IS AABB Cocina.md, tareas COC-4.2/COC-4.3/COC-4.4 · RX Bar, mejora 3 y riesgo 3 `[Ev: BAR-4.2, BAR-4.3, BAR-4.4]` · RX Caja, mejora 6 `[Ev: CAJ-3.2, CAJ-3.3, CAJ-3.4, CAJ-3.5]` · RX Cocina, mejoras 1-2 y riesgo 2 `[Ev: COC-4.2, COC-4.3]`

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Transferencia interna: el área la crea en borrador y Almacén la valida al entregar | Elimina el papel y el re-trabajo por tachaduras; la firma previa de Gerencia se sustituye por trazabilidad y revisión posterior en sistema |
| **B** | Reglas de reabastecimiento mín/máx por producto y ubicación de área | Para productos recurrentes ya nadie llena requisiciones: el sistema las propone solo; exige stocks confiables (depende de AABB-D03) |
| **C** | Aprobación en dos pasos de las órdenes de compra sobre un monto mínimo | La firma de Gerencia se conserva donde hay gasto real de dinero y deja de frenar los movimientos internos diarios |

**Ruta:** `Inventario > Operaciones > Transferencias > Internas` · `Inventario > Operaciones > Abastecimiento > Reabastecimiento` · `Compras > Configuración > Ajustes > Aprobación del pedido de compra` (campo Importe mínimo) [verificada; un flujo de requisición con aprobación previa no es nativo: sería add-on de la vertical]

**Recomendación del consultor:** Combinar A + B + C: transferencias validadas para lo puntual, reglas mín/máx para lo recurrente y la autorización gerencial trasladada a las compras. Es una decisión de política interna que Gerencia de Operaciones debe avalar, porque cambia el momento de su control (de firma previa a supervisión en sistema).

**Elección del área:** [ ] A · [ ] B · [ ] C · [ ] A+B+C

### AABB-D05 · Recetas: cómo relacionar plato e insumos

**Aplica a:** Bar / Cocina

> **DECISIÓN A TOMAR: ¿Se levantan recetas en Odoo y de qué tipo: kits que descuentan al vender u órdenes de producción?**
>
> La receta se modela como lista de materiales (LdM) en la app Fabricación. Con tipo "Kit", el producto vendido no lleva stock propio: al pasar la venta del POS al movimiento de inventario, Odoo explota la LdM y descuenta los componentes (el módulo puente pos_mrp, auto-instalable con POS + Fabricación, ajusta costeo y lotes de esos kits). Con tipo "Fabricar este producto", los elaborados se producen mediante órdenes de fabricación que consumen insumos y generan stock del producto terminado.

**Situación actual:** No existe relación registrada entre lo que se vende (plato, cóctel) y los insumos que consume: el mise en place se calcula a mano y no hay forma de costear un plato ni de explicar diferencias de inventario contra ventas.

**Origen:** AS-IS AABB Cocina.md, tareas COC-1.2/COC-2.3/COC-3.2/COC-5.2 · AS-IS AABB Bar.md, tareas BAR-2.2/BAR-3.11 · RX Cocina, oportunidad 4 `[Ev: COC-1.2, COC-2.3, COC-3.2, COC-5.2]` · RX Bar, riesgo 2 `[Ev: BAR-2.2, BAR-4.1, BAR-3.11]`

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Productos simples sin LdM; los insumos se ajustan por conteo periódico | Rápido de arrancar; el inventario de ingredientes sigue sin explicarse por las ventas |
| **B** | LdM tipo Kit por plato/cóctel con porciones estándar | Cada venta del POS consume harina, proteína, refresco, etc. sin trabajo extra en cocina; requiere levantar y mantener las recetas |
| **C** | LdM "Fabricar este producto" + órdenes de fabricación para la producción del día (buffet, salsas, carnicería) | Control fino de costos y mermas por producción; exige disciplina diaria de registrar cada producción |

**Ruta:** `Fabricación > Productos > Listas de materiales` (campo Tipo de LdM: Kit / Fabricar este producto) [verificada; requiere instalar la app Fabricación (Community); el puente pos_mrp se instala solo]

**Recomendación del consultor:** Opción B para todo lo que se vende por comanda (platos a la carta, cócteles, snacks) y opción C limitada a carnicería y producciones de buffet; la opción A solo como etapa transitoria del catálogo.

**Elección del área:** [ ] A · [ ] B · [ ] C · [ ] B+C

### AABB-D06 · Método de valoración y costeo de A&B

**Aplica a:** Cocina

> **DECISIÓN A TOMAR: ¿Con qué método de costo se valoran los insumos de A&B: precio estándar, promedio (AVCO) o FIFO?**
>
> Ambos parámetros viven en la categoría de producto y son por compañía: "Método de costo" (Precio estándar / AVCO / FIFO) y "Valoración de inventario", que en Odoo 19 se elige entre "Periódica (al cierre)" y "Perpetua (al facturar)", donde la perpetua genera el asiento contable automáticamente. Al definirse por categoría, puede refinarse después (por ejemplo FIFO solo para proteínas) sin rehacer el catálogo.

**Situación actual:** El costeo de alimentos y bebidas no es confiable: raciones de personal, proteínas procesadas y mermas se registran en hojas dispersas y las diferencias se detectan de forma reactiva.

**Origen:** AS-IS AABB Cocina.md, tareas COC-7.4/COC-1.4/COC-2.1/COC-5.3 · RX Cocina, mejora 4 y riesgo 3 `[Ev: COC-7.4, COC-1.4, COC-2.1, COC-5.3]`

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Método de costo "Precio estándar" en las categorías de A&B | Simple de entender; con la inflación y compra local en Venezuela el costo fijo se desactualiza rápido y distorsiona el costo de los platos |
| **B** | Método de costo "Costo promedio (AVCO)" | El costo de los insumos sigue los precios reales sin trabajo manual; punto medio recomendado para alimentos con precios volátiles |
| **C** | Método de costo "FIFO" | Costo más exacto por partida (útil en proteínas), pero más movimientos que entender y auditar para un equipo que empieza |

**Ruta:** `Inventario > Configuración > Categorías de productos > Método de costo` y `Valoración de inventario` (Periódica al cierre / Perpetua al facturar) [verificada contra el fuente de Odoo 19; las etiquetas "Manual/Automatizada" de versiones previas ya no existen]

**Recomendación del consultor:** AVCO con valoración perpetua para las categorías de insumos de A&B. Debe decidirse en la misma mesa que COM-D03/COM-D04 con Administración y Finanzas.

**Elección del área:** [ ] A · [ ] B · [ ] C

### AABB-D07 · Registro de mermas y trazabilidad de proteínas

**Aplica a:** Cocina

> **DECISIÓN A TOMAR: ¿Cada merma se registra como orden de desecho, se absorbe en el conteo, o además se controlan lotes con caducidad en proteínas?**
>
> La orden de desecho (Scrap) mueve el producto a una ubicación de tipo "Pérdida de inventario", que puede llevar una cuenta contable de pérdida, dejando historial por producto, fecha y responsable. Los lotes se habilitan con "Números de lote y de serie" en los ajustes de Inventario, y al activarlos aparece la opción adicional de "Fechas de caducidad" con alertas por lote; la trazabilidad se define por producto (campo de seguimiento en la ficha).

**Situación actual:** La merma de carnicería se controla comparando a mano contra el peso inicial y los descartes por descomposición no dejan registro histórico; en contingencias se etiquetan lotes de proteína sin sistema que los siga.

**Origen:** AS-IS AABB Cocina.md, tareas COC-7.1 a COC-7.4 · RX Cocina, mejora 4, oportunidad 5 y riesgo 5 `[Ev: COC-7.1, COC-7.2, COC-7.4, COC-7.3]`

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Órdenes de desecho hacia ubicación de pérdida (cuenta de pérdida opcional en la ubicación) | Historial de mermas por producto, fecha y responsable; Gerencia deja de depender de la revisión manual para detectar diferencias |
| **B** | Ajustes de inventario periódicos: las diferencias se absorben en el conteo físico | Muy simple, pero mezcla merma real, robo y error de conteo en un solo número: no permite gestionar la causa |
| **C** | A + lotes con fecha de caducidad en proteínas (seguimiento por lote en la ficha del producto) | Máximo control de inocuidad y rotación (cadena de frío); exige etiquetar y registrar cada lote en carnicería, con carga operativa diaria alta |

**Ruta:** `Inventario > Operaciones > Ajustes > Desechar` · lotes: `Inventario > Configuración > Ajustes > sección Trazabilidad > Números de lote y de serie` + `Fechas de caducidad` [verificada]

**Recomendación del consultor:** Opción A desde el arranque para toda la cocina y el bar; evaluar la opción C solo para el área de carnicería una vez que el equipo domine el flujo básico, dado el riesgo de inocuidad señalado en el RX.

**Elección del área:** [ ] A · [ ] B · [ ] C

### AABB-D09 · Turnos, arqueo y responsabilidad de caja

**Aplica a:** Caja

> **DECISIÓN A TOMAR: ¿Se cierra una sesión de POS por turno con arqueo propio, o una sesión diaria con cajeros identificados por empleado?**
>
> El cierre de caja de Odoo cuenta billetes y monedas, compara contra lo esperado por método de pago y registra la diferencia con nota de cierre; la dualidad Bs/USD del cobro ya la aporta l10n_ve_pos. "Iniciar sesión con empleados" (sección Interfaz PdV) permite que varios cajeros compartan una sesión identificándose con PIN o gafete, con tres niveles de derechos (Mínimos, Básicos, Avanzados: solo el nivel avanzado puede cerrar la caja). "Establecer diferencia máxima" (sección Pago) define una Diferencia autorizada: si el descuadre la supera, el cierre exige aprobación de un gerente.

**Situación actual:** El relevo de las 3:00 PM se documenta en cuaderno de novedades y no existe arqueo formal del fondo de caja.

**Origen:** AS-IS AABB Caja.md, tarea CAJ-4.0 · RX Caja, oportunidad 5 y riesgo 6 `[Ev: CAJ-4.0]`

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Una sesión de POS por turno: cada cajero abre y cierra la suya con conteo y nota de cierre | El relevo de las 3:00 PM se vuelve un cierre formal con arqueo; cada descuadre queda atribuido a un turno concreto |
| **B** | Sesión única diaria + "Iniciar sesión con empleados" (PIN/gafete, derechos por nivel) | Menos cierres y más fluidez, cada transacción queda firmada por empleado; el arqueo es uno solo al final del día, diluyendo la responsabilidad del efectivo por turno |
| **C** | A + "Establecer diferencia máxima" con Diferencia autorizada; sobre el límite cierra un gerente | Control más estricto del efectivo, alineado con el rol de Gerencia de Calidad/Seguimiento; algo más de fricción en cierres |

**Ruta:** cierre: interfaz del POS > `Cerrar caja` · `Punto de Venta > Configuración > Ajustes > sección Pago > Establecer diferencia máxima` (campo Diferencia autorizada) · `Ajustes > sección Interfaz PdV > Iniciar sesión con empleados` (derechos Mínimos/Básicos/Avanzados; PIN y gafete en la ficha del empleado, app Empleados) [verificada]

**Recomendación del consultor:** Opción C: reproduce el corte real de turnos con arqueo y umbral de descuadre; añadir el login por empleado solo si más de una persona opera la misma sesión.

**Elección del área:** [ ] A · [ ] B · [ ] C

### AABB-D10 · Control del préstamo de cavas

**Aplica a:** Caja

> **DECISIÓN A TOMAR: ¿Las cavas se controlan con número de serie e inventario, con la app Alquiler, o con un cargo reembolsable a la habitación?**
>
> La vertical declara el préstamo de cavas como hueco (candidato a add-on), así que la decisión se toma sobre Odoo nativo. Con "Números de lote y de serie" activo y seguimiento "Por número de serie único" en la ficha del producto, cada cava numerada se mueve por transferencia interna a una ubicación "Prestado a huésped" y de vuelta. La app Alquiler (Enterprise) formaliza entrega, devolución y depósito por orden. Como tercera vía, almus_hotel_pos permite cargar un depósito reembolsable a la cuenta de la habitación y anularlo a la devolución.

**Situación actual:** Las cavas se prestan al huésped contra un listado manual exclusivo de Caja, sin numeración por cava ni registro digital; una cava puede no devolverse o devolverse cambiada sin que se note.

**Origen:** AS-IS AABB Caja.md, tareas CAJ-2.1/CAJ-2.3/CAJ-2.7 · RX Caja, mejora 4 y riesgo 4 `[Ev: CAJ-2.1, CAJ-2.3, CAJ-2.7]`

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Cava = producto con número de serie; préstamo y devolución como transferencias a/desde la ubicación "Prestado a huésped" | Se sabe exactamente qué cava tiene qué huésped y cuáles no han vuelto; requiere numerar las cavas físicas y registrar cada movimiento |
| **B** | App Alquiler: cada préstamo es una orden con fechas, entrega/devolución y depósito opcional | Flujo completo con garantía; añade una app Enterprise y un proceso más al cajero para un servicio gratuito de alto volumen en temporada |
| **C** | Cargo reembolsable a la cuenta de la habitación (vía almus_hotel_pos) que se anula a la devolución | Muy poco esfuerzo y crea incentivo económico de devolución; no identifica la cava individual (no detecta el cambio de una por otra) |

**Ruta:** `Inventario > Configuración > Ajustes > sección Trazabilidad > Números de lote y de serie` + `Inventario > Configuración > Ubicaciones` · app `Alquiler` [verificada; la app Alquiler es Enterprise]

**Recomendación del consultor:** Opción A: ataca las dos fallas señaladas (sin identificación unívoca y sin registro); la B es sobredimensionada para un préstamo de cortesía y la C puede sumarse como incentivo si Gerencia aprueba pedir depósito.

**Elección del área:** [ ] A · [ ] B · [ ] C · [ ] A+C

### AABB-D11 · Comedor de personal

**Aplica a:** Bar / Caja / Cocina

> **DECISIÓN A TOMAR: ¿Las raciones del comedor de personal se registran por comensal en el POS o solo como consumo interno en bloque?**
>
> El desayuno incluido de huéspedes ya lo resuelve almus_hotel_pos (línea a precio 0 por motivo), pero el comedor de personal no está cubierto por la vertical. En Odoo nativo hay dos vías: un preset "Comedor personal" con su propia tarifa a precio 0 y posición fiscal, registrando cada ración con el empleado como cliente (los presets se habilitan con "Para llevar / Entrega / Miembros" en los ajustes del POS), o capturar solo el costo, registrando la producción diaria del comedor como orden de fabricación o transferencia interna que consume insumos sin detalle por comensal.

**Situación actual:** Las raciones del comedor de personal se llevan en hojas y firmas dispersas y no alimentan el control de costos.

**Origen:** AS-IS AABB Caja.md, tareas CAJ-1.0/CAJ-1.7/CAJ-1.15 · AS-IS AABB Cocina.md, tareas COC-1.1/COC-1.4/COC-2.1/COC-5.3 · AS-IS AABB Bar.md, tarea BAR-1.1 · RX Caja, mejora 5 `[Ev: CAJ-1.0, CAJ-1.7, CAJ-1.15]` · RX Cocina, mejoras 6 y 7 `[Ev: COC-1.1, COC-1.5, COC-1.4, COC-2.1, COC-5.3]`

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Preset "Comedor personal" con tarifa a precio 0; cada ración se registra en el POS con el empleado | Conteo exacto de raciones por empleado y, si hay recetas (AABB-D05), descuento de insumos por ración; añade clics en cada servicio |
| **B** | Consumo interno en bloque: orden de fabricación o transferencia interna diaria que consume los insumos del comedor | Cero fricción en el servicio y costo capturado por día; sin detalle por comensal |
| **C** | Mantener hojas y firmas fuera del sistema | Sin cambio; persiste el costeo no confiable |

**Ruta:** `Punto de Venta > Configuración > Ajustes > sección Punto de Venta > Para llevar / Entrega / Miembros` · `Punto de Venta > Configuración > Presets` (campos Tarifa y Posición fiscal en el formulario del preset) · `Inventario > Operaciones > Transferencias > Internas` [verificada]

**Recomendación del consultor:** Opción B: para el comedor de personal basta el costo agregado por día; el conteo por persona (opción A) solo se justifica si RRHH lo pide como control de beneficio.

**Elección del área:** [ ] A · [ ] B · [ ] C

---

# 3. Administración y Finanzas (CCS, HOTEL-Juan, HOTEL-Libny)

**Para el equipo de Administración y Finanzas:** esta sección define cómo vivirá la contabilidad en Odoo: estructura del grupo, bancos y conciliación, pagos, cajas y reportes regulatorios. La moneda dual con tasa BCV y el motor de retenciones ya no son decisiones: los resuelve la localización Almus instalada de base (ver la sección "Ya resuelto por la plataforma"). El orden sugerido es: D01 primero (define la estructura), luego el resto.

### AYF-D01 · Estructura del grupo: multicompañía, sucursales o planes analíticos (antes AYF-D04)

**Aplica a:** CCS / HOTEL-Juan / HOTEL-Libny

> **DECISIÓN A TOMAR: ¿El grupo se modela como compañías separadas por entidad legal, como sucursales dentro de SERAC, como planes analíticos por punto de operación, o como combinación de estas figuras?**
>
> Las compañías y sus sucursales se definen en la aplicación Ajustes: cada compañía tiene su propio RIF (campo Tax ID) y las sucursales se agregan en la pestaña Sucursales de la ficha de la compañía madre. Las transacciones interempresa (documento espejo automático entre compañías) se activan compañía por compañía en Ajustes, sección Compañías. Los planes analíticos viven en Contabilidad y cada plan define su Aplicabilidad por defecto (Opcional u Obligatoria), lo que permite forzar que ningún asiento se registre sin su punto de operación. Advertencia de la documentación: una compañía madre no puede convertirse después en sucursal, y las filiales independientes deben crearse como compañías, nunca como sucursales; la jerarquía debe definirse antes de crear nada.

**Situación actual:** Conviven SERAC (hotel), Eracon Alimentos y Eracon Salud con facturación intercompany manual, y dentro del hotel se necesita leer resultados por punto de operación (recepción, A&B, estacionamiento, Marina, Boca Seca, arrendamientos) que hoy se reconstruyen a mano.

**Origen:** AS-IS CCS.md, tareas 4.6.1 y 4.6.2 · RX CCS, oportunidad 8 `[Ev: CCS-4.6.1, CCS-4.6.2]` · RX AFL `[Ev: AFL-9.1, AFL-9.2]` · PROP-NAT-028

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Una compañía por entidad legal (SERAC, Eracon Alimentos, Eracon Salud) en Ajustes, cada una con su RIF; se activa Transacciones interempresa en cada compañía para que la factura confirmada en una genere el documento espejo en la otra | Libros fiscales separados por RIF (obligatorio si declaran por separado) y fin de la facturación intercompany manual; los usuarios operan con el selector de compañía y deben acostumbrarse a verificar en cuál están parados |
| **B** | Sucursales de SERAC (por ejemplo CCS y Hotel) en la pestaña Sucursales de la ficha de la compañía, con acceso por usuario y vistas consolidadas o por sucursal | Separa la vista CCS/Hotel sin duplicar libros; no sirve para entidades con RIF distinto y la estructura es difícil de revertir (una madre no se convierte luego en sucursal), por lo que exige definir la jerarquía antes de arrancar |
| **C** | Un plan analítico "Punto de operación" con cuentas analíticas (Recepción, A&B, Marina, Estacionamiento, Boca Seca, Arrendamientos); Aplicabilidad por defecto Obligatoria para forzar la imputación y modelos de distribución analítica para automatizarla por proveedor, cuenta o producto | Entrega el P&G por área que piden Venetur y la gerencia sin tocar la estructura legal; la disciplina de imputación deja de depender de las personas si el plan se marca obligatorio y los casos repetitivos se cubren con modelos de distribución |

**Ruta:** `Ajustes > Usuarios y compañías > Compañías` (compañías, pestaña Sucursales y activación de Transacciones interempresa por compañía) · analítica se activa en `Contabilidad > Configuración > Ajustes > Contabilidad analítica`; planes en `Contabilidad > Configuración > Planes analíticos` y modelos en `Contabilidad > Configuración > Modelos de distribución analítica`. Todo nativo; los informes con filtro analítico (P&G) requieren Enterprise (account_reports).

**Recomendación del consultor:** No son excluyentes: multicompañía para las tres entidades legales (A) y plan analítico obligatorio por punto de operación dentro de SERAC (C). Sucursales (B) solo si se decide separar formalmente la vista CCS/Hotel, y en ese caso definir la jerarquía completa antes de crear las compañías, porque no es reversible.

**Elección del área:** [ ] A · [ ] B · [ ] C · [ ] A+C

### AYF-D02 · Conciliación bancaria del resto de bancos (antes AYF-D02, acotado)

**Aplica a:** CCS / HOTEL-Juan / HOTEL-Libny

> **DECISIÓN A TOMAR: ¿Los movimientos de los bancos operativos entran a Odoo tecleados a mano o importados por archivo, y se concilian con modelos automáticos?**
>
> Los cobros de huéspedes salen de esta decisión: la vertical Almus (almus_hotel_payment) registra cada anticipo contra una cuenta transitoria conciliable y conciliar esa transitoria equivale a confirmar el pago, con cierre de turno por medio de pago. Lo que queda por decidir es el circuito de los demás bancos (Banesco, Banplus, Bancamiga, Banco Exterior, Activo) y los lotes de Credicard. Odoo importa extractos en CAMT.053, CSV, XLSX, OFX y QIF desde la tarjeta del diario en el tablero; para CSV y XLSX se mapean las columnas una vez y se prueba antes de importar. Los modelos de conciliación se definen por diario y pueden ser manuales (botón durante la conciliación) o automatizados (se aplican solos a las transacciones que cumplen las condiciones). La sincronización directa banco-Odoo queda descartada: la banca venezolana no está cubierta por los proveedores de sincronización.

**Situación actual:** El extracto se depura y carga a mano en Caracas, el hotel cruza recibos contra extractos de cuatro bancos y lotes de Credicard con un Excel de control, y la conciliación se hace "cuando hay tiempo"; los pagos devueltos no detectados generan notas de débito y semanas de retrabajo.

**Origen:** AS-IS CCS.md, tareas 4.1.1, 4.1.7 y 4.1.8 · RX CCS, oportunidades 2 y 3 `[Ev: CCS-4.1.1, CCS-4.1.7, CCS-4.1.8]` · RX AFJ, mejora 4 `[Ev: AFJ-1.10, AFJ-1.11]` · RX AFL, oportunidad 1 `[Ev: AFL-10.1, AFL-10.2, AFL-10.3]` · PROP-DEV-005

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Transacciones tecleadas directamente en el diario bancario y conciliadas contra pagos y facturas | Ordena el proceso pero mantiene el tipeo; solo defendible para bancos de muy poco movimiento |
| **B** | Importación por archivo en cada diario bancario: se descarga el extracto del portal del banco y se sube desde la tarjeta del diario; el mapeo de columnas CSV/XLSX se define una vez por banco | Elimina la depuración y carga manual diaria; el trabajo inicial es definir una plantilla por banco y el hábito diario se reduce a descargar e importar |
| **C** | Opción B más modelos de conciliación por diario: reglas automatizadas para comisiones bancarias, IGTF, tasas y lotes de punto de venta, con contrapartida y etiqueta analítica predefinidas | La conciliación pasa de cruce manual a revisión por excepción; los cambios de comisión que hoy se detectan al azar saltan a la vista porque la regla deja de calzar |

**Ruta:** tablero de `Contabilidad` > tarjeta del diario bancario > menú desplegable > `Importar archivo` (o botón `Subir`, o arrastrar el archivo sobre la tarjeta); modelos desde la misma tarjeta > menú desplegable > `Modelos` (sección Conciliación). La importación por archivo y la vista de conciliación requieren Enterprise (account_bank_statement_import, account_accountant).

**Recomendación del consultor:** Opción C: importación por archivo con modelos de conciliación para comisiones, IGTF y lotes Credicard. Es el estándar realista en Venezuela y ataca a la vez los hallazgos de CCS, Juan y Libny; la transitoria de huéspedes ya viene resuelta por la vertical.

**Elección del área:** [ ] A · [ ] B · [ ] C

### AYF-D03 · Planificación de pagos y CxP: sistema vs Excel paralelo (antes AYF-D05)

**Aplica a:** CCS / HOTEL-Juan

> **DECISIÓN A TOMAR: ¿La planificación de pagos vive en Odoo con facturas al vencimiento y documentos recurrentes, o se mantiene el Excel de CxP?**
>
> Odoo deriva el calendario de pagos de la fecha de vencimiento de cada factura de proveedor; el informe de Cuentas por pagar vencidas (Aged Payable) muestra por proveedor lo pendiente y su antigüedad, exportable a PDF o XLSX. Las obligaciones de fecha fija se automatizan con el campo Contabilización automática del propio documento (valores En fecha, Mensual, Trimestral o Anual, con fecha límite "Contabilizar hasta"): el sistema genera y asienta la siguiente copia sin intervención. No existe un menú aparte de "asientos recurrentes"; el parámetro vive en cada factura o asiento.

**Situación actual:** La planificación de pagos vive en una plantilla Excel de CxP actualizada hasta tres veces al día, porque el módulo tiene "pedidos basura" y porque los servicios fijos y los aportes de fecha fija no dejan pedido y se agregan a mano; Gerencia General ya expresó insatisfacción con el método.

**Origen:** AS-IS HOTEL-Juan.md, tareas 3.1 a 3.3, 3.9 y 3.10 · RX AFJ, mejoras 1 y 2 `[Ev: AFJ-3.1, AFJ-3.2, AFJ-3.3, AFJ-3.9, AFJ-3.10]` · RX CCS, mejora 1 `[Ev: CCS-4.1.2]` · PROP-NAT-016, PROP-NAT-024

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Toda obligación se registra como factura de proveedor con término de pago y fecha de vencimiento; el informe de CxP vencidas se consulta y exporta directo del sistema | Sustituye el Excel y el reporte diario por WhatsApp; exige depurar antes los pedidos abiertos "basura" para que el dato sea confiable |
| **B** | Opción A más recurrencia: en la factura o asiento de cada servicio fijo (CORPOELEC, TELMACA, seguridad) y aporte parafiscal (FONACIT, INATUR, Alcaldía, INPARQUES, VACC) se fija Contabilización automática Mensual/Anual con su fecha; Odoo genera la siguiente copia solo | Nada de fecha fija depende de la memoria de una persona; reduce el riesgo de multa por plazo (INPARQUES día 5, VACC día 10, Alcaldía día 15) |
| **C** | El Excel se conserva pero se llena exportando el listado de facturas por pagar desde Odoo | Cambio mínimo de hábito, pero persiste la doble gestión y el error de transcripción que ya distorsionó el balance |

**Ruta:** `Contabilidad > Proveedores > Facturas` (campo Contabilización automática en la pestaña Otra información del documento); informe en `Contabilidad > Informes > Cuentas por pagar vencidas` (Enterprise, account_reports).

**Recomendación del consultor:** Opción B. La depuración previa de pedidos es la condición de éxito; sin ella cualquier reporte nativo repetirá el problema que originó el Excel.

**Elección del área:** [ ] A · [ ] B · [ ] C

### AYF-D04 · Flujo de aprobación de pagos (antes AYF-D06)

**Aplica a:** CCS / HOTEL-Juan / HOTEL-Libny

> **DECISIÓN A TOMAR: ¿La autorización de Gerencia General se convierte en un bloqueo duro sobre el botón de pago o en una disciplina de actividades registradas?**
>
> Studio permite agregar pasos de aprobación a cualquier botón, incluido Registrar pago: cada paso define sus aprobadores, puede condicionarse (por ejemplo por monto), crea automáticamente una actividad al aprobador y deja cada aprobación o rechazo registrado en el chatter del documento; hasta que el último paso no se aprueba, el botón no ejecuta. Requiere edición Enterprise con Studio. La alternativa nativa en cualquier edición son actividades y mensajes en el chatter, que documentan pero no bloquean.

**Situación actual:** Toda ejecución de pago requiere autorización de Gerencia General, pero esa autorización viaja por WhatsApp personal, audio o de forma verbal, sin rastro en el sistema; lo mismo aplica a los egresos de la caja principal del hotel.

**Origen:** AS-IS CCS.md, tarea 4.2.1 · RX CCS, fortaleza 3 y riesgo 2 `[Ev: CCS-4.2.1, CCS-4.1.9]` · RX AFJ `[Ev: AFJ-1.7, AFJ-3.4]` · RX AFL, fortaleza 5 `[Ev: AFL-8.3, AFL-8.4]`

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | La solicitud de pago se registra como actividad asignada al aprobador sobre la factura o el pago; la aprobación queda escrita en el chatter | Saca la autorización de WhatsApp sin cambiar la mecánica; es disciplina, no control duro: nada impide pagar sin la actividad cerrada |
| **B** | Pasos de aprobación de Studio sobre el botón Registrar pago, con condición por monto y Gerencia General como aprobador; la actividad al aprobador se crea sola y el rastro queda en el chatter | Control duro: el pago no sale sin la aprobación registrada; requiere Enterprise con Studio y definir los umbrales de monto con Gerencia General |
| **C** | Se mantiene la aprobación por el canal actual y Odoo solo registra el pago ya ejecutado | Cero cambio de hábito para la Presidencia/Gerencia, pero el riesgo de historial en dispositivos personales sigue intacto |

**Ruta:** botón `Registrar pago` en la factura (`Contabilidad > Proveedores > Facturas`); reglas: abrir Studio sobre el formulario > seleccionar el botón > `Agregar un paso de aprobación` (Enterprise, Studio).

**Recomendación del consultor:** Opción B para pagos sobre un umbral de monto y opción A para el resto. Definir el umbral con Gerencia General es la decisión clave de esta mesa.

**Elección del área:** [ ] A · [ ] B · [ ] C

### AYF-D05 · Cajas de efectivo y divisas digitales (antes AYF-D07)

**Aplica a:** HOTEL-Libny / CCS

> **DECISIÓN A TOMAR: ¿Cada caja administrativa y cada plataforma de divisas (PayPal, Binance, Zelle) se modela como diario propio, y con qué mecanismo entran sus movimientos?**
>
> El cobro al huésped ya lo resuelve la vertical (transitoria conciliable y cierre de turno por medio de pago); esta decisión cubre las cajas administrativas y las plataformas de divisas. En Odoo cada caja es un diario tipo Efectivo, que se configura a mano: cuenta de efectivo dedicada, cuentas de ganancia y pérdida para las diferencias de arqueo, y campo Divisa del diario para fijarlo en USD. Además, la cuenta contable puede forzar su moneda (campo Moneda de la cuenta), impidiendo asentar en Bs dentro de la caja USD. Las plataformas se modelan como diarios tipo Banco y, donde exporten historial CSV/XLSX, este se importa como extracto.

**Situación actual:** Los extractos de la caja física y de las plataformas de divisas se crean a mano en Odoo antes de poder conciliar, cada movimiento de efectivo genera un recibo en papel, y una factura cobrada queda "En proceso de pago" hasta que alguien concilia.

**Origen:** AS-IS HOTEL-Libny.md, tareas 11.1 a 11.3 y 12.1 a 12.3 · RX AFL, mejoras 5, 6, 9 y 10 `[Ev: AFL-11.2, AFL-12.2, AFL-10.3, AFL-11.3]` · RX CCS `[Ev: CCS-4.1.8]` · PROP-NAT-012, PROP-DEV-006

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Un diario tipo Efectivo por caja (Caja Principal USD, Caja Bs), con Divisa USD en el diario y Moneda forzada en la cuenta contable de la caja en divisas; entradas y salidas se asientan y concilian en el diario | Elimina el extracto de caja creado a mano y da estado real a cada factura (pagada vs pendiente de conciliar); imposibilita registrar en la caja USD un movimiento en Bs por error; los recibos de papel quedan solo como respaldo físico |
| **B** | Un diario tipo Banco por plataforma (PayPal, Binance, Zelle); donde la plataforma exporte historial CSV/XLSX se importa como extracto con mapeo de columnas definido una vez | Reduce la creación manual del extracto de divisas al mínimo; Zelle y Binance pueden requerir armar el archivo, no hay conexión nativa |
| **C** | Desarrollo de un conector que traiga los movimientos de las plataformas automáticamente | Conciliación de divisas sin intervención; costo y mantenimiento de un desarrollo no nativo para un volumen que hay que dimensionar antes de invertir |

**Ruta:** `Contabilidad > Configuración > Diarios` (tipo Efectivo/Banco, campo Divisa; cuentas de ganancia/pérdida de arqueo en el diario de efectivo); moneda por cuenta en `Contabilidad > Configuración > Plan de cuentas`. La importación de historial por archivo requiere Enterprise (account_bank_statement_import); el conector de la opción C no es nativo.

**Recomendación del consultor:** Opción A de inmediato para todas las cajas y opción B para las plataformas de divisas; la C solo si el volumen de operaciones en divisas digitales lo justifica tras seis meses de operación.

**Elección del área:** [ ] A · [ ] B · [ ] C · [ ] A+B

### AYF-D06 · Anticipos a proveedores y partidas con socios (antes AYF-D08)

**Aplica a:** CCS / HOTEL-Juan

> **DECISIÓN A TOMAR: ¿Los anticipos a proveedores se administran como pagos pendientes dentro de Odoo y las partidas con socios se separan en cuentas propias con seguimiento?**
>
> Con las cuentas pendientes (outstanding) configuradas en las pestañas Pagos entrantes/salientes del diario, un pago sin factura queda como débito pendiente del proveedor; al validar la factura posterior aparece un aviso con el botón Añadir bajo Débitos pendientes que lo aplica de inmediato, y la herramienta de emparejamiento de pagos permite cruzar en lote. Las cuentas de socios son cuentas nuevas del plan contable. El seguimiento de cobros (niveles con días y acciones de correo, WhatsApp o SMS, más el Reporte de seguimiento) es Enterprise (account_followup); los mensajes WhatsApp/SMS consumen créditos IAP.

**Situación actual:** Los anticipos a proveedores se controlan en una carpeta local del computador y hay saldos 2023-2024 abiertos que distorsionan el balance; las facturas pagadas por los socios se acumulan como CxP a proveedor cuando la deuda real es con el socio.

**Origen:** AS-IS HOTEL-Juan.md, tareas 1.18 y 1.19 · RX AFJ, mejora 3 y riesgo 3 `[Ev: AFJ-1.18, AFJ-1.19]` · AS-IS CCS.md, tarea 4.4.4 · RX CCS, mejora 5 y riesgo 3 `[Ev: CCS-4.4.4, CCS-4.2.7, CCS-4.2.10]` · PROP-NAT-018, PROP-NAT-019

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Cuentas pendientes configuradas en el diario de pagos; el adelanto se registra como pago sin factura y se aplica desde el aviso de Débitos pendientes al llegar la factura | El control de anticipos vive en el sistema y los saldos antiguos 2023-2024 se depuran cruzándolos contra sus facturas; muere la carpeta local y los recordatorios manuales |
| **B** | Cuentas de CxP/CxC de socios creadas en el plan de cuentas, separadas de proveedores externos; el pago hecho por un socio se asienta contra su cuenta | La posición real de proveedores deja de estar inflada y la deuda con cada socio es consultable al día; requiere reclasificar el histórico acumulado |
| **C** | Opción B más seguimiento de cobros: niveles de seguimiento con días y acciones configurados, y Reporte de seguimiento por socio para reembolsos de retención y CxC (Racid, VACC) | El seguimiento discontinuo por WhatsApp que ya causó pérdidas de retenciones no recuperadas pasa a recordatorios sistemáticos con rastro |

**Ruta:** `Contabilidad > Proveedores > Pagos`; cuentas pendientes en `Contabilidad > Configuración > Diarios`, pestañas Pagos entrantes/salientes; cuentas de socios en `Contabilidad > Configuración > Plan de cuentas`; seguimiento en `Contabilidad > Configuración > Niveles de seguimiento` y reporte desde `Contabilidad > Informes > Libro mayor de socios > Reporte de seguimiento` (Enterprise, account_followup; WhatsApp/SMS con créditos IAP).

**Recomendación del consultor:** Las tres son complementarias; ejecutar A y B en la implantación inicial y activar C para el caso específico de reembolsos de retención, que ya generó pérdidas en 2023-2024.

**Elección del área:** [ ] A · [ ] B · [ ] C

### AYF-D07 · Reporte diario Venetur/INATUR (antes AYF-D09)

**Aplica a:** HOTEL-Libny / CCS

> **DECISIÓN A TOMAR: ¿Cómo se produce el reporte diario a Venetur en el interín y se encarga el desarrollo del formato regulatorio sobre la vertical?**
>
> Con la vertical Almus el problema cambia de naturaleza: ocupación e ingresos viven en el mismo sistema (la reserva es una orden de venta del PMS almus_hotel), así que desaparece el cruce Odoo-Cloudbeds. Pero el módulo de reporting hotelero (almus_hotel_report: ocupación, ADR, RevPAR, ingresos por segmento) está diferido en el roadmap y el formato regulatorio Venetur/INATUR no está contemplado en ningún módulo de la vertical ni de la localización. La decisión real es doble: el proceso interino y si se prioriza el desarrollo del formato.

**Situación actual:** El reporte diario a Venetur se reconstruye a mano cada noche cruzando ingresos de Odoo con ocupación de Cloudbeds en el formato Excel del organismo, con ventana de envío de 12:00 a 1:00 AM en temporada alta; el cruce mensual con Caracas también es manual.

**Origen:** AS-IS HOTEL-Libny.md, tareas 9.1 a 9.6 · RX AFL, mejora 2 y riesgo 2 `[Ev: AFL-9.1, AFL-9.3, AFL-9.4, AFL-9.5, AFL-9.6]` · AS-IS CCS.md, tarea 4.4.2 · RX CCS, mejora 12 `[Ev: CCS-4.4.2]` · PROP-DEV-030

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Interín con lo ya configurado: P&G con filtro analítico (plan de puntos de operación de AYF-D01) para los ingresos del día, y ocupación leída de las reservas de la vertical (Gantt/listado); volcado manual al Excel del organismo | Reduce la reconstrucción nocturna a un volcado desde un solo sistema con dos consultas ya ordenadas; sigue habiendo un paso manual con plazo crítico |
| **B** | Encargar a Almus el desarrollo del formato regulatorio: adelantar almus_hotel_report (hoy diferido) y construir sobre él la salida en el formato exacto del organismo | Elimina el riesgo de retraso y error en la ventana nocturna; implica priorizar en el roadmap de la vertical un módulo diferido y dimensionar el formato con el organismo |
| **C** | Status quo asistido: se mantienen el Excel del organismo y el volcado manual, alimentados por exportaciones estándar del P&G y de reservas | Sin inversión, pero el riesgo regulatorio nocturno queda igual |

**Ruta:** `Contabilidad > Informes > Ganancias y pérdidas` con filtro analítico (Enterprise, account_reports); planes en `Contabilidad > Configuración > Planes analíticos`. El formato regulatorio Venetur/INATUR no es nativo de Odoo ni está en la vertical (almus_hotel_report diferido, formato no contemplado): la opción B es desarrollo a encargar.

**Recomendación del consultor:** Opción A como interín desde el arranque de la vertical y opción B como destino. La condición previa ya no es la decisión de PMS (la vertical sustituye a Cloudbeds); lo que hay que decidir con Almus es la prioridad de almus_hotel_report en el roadmap antes de comprometer fecha.

**Elección del área:** [ ] A · [ ] B · [ ] C

---

# 4. Contraloría

**Para Contraloría:** esta sección devuelve al área su rol de control: cierres y bloqueos de período, segregación de funciones, supervisión de gestión, análisis financiero y archivo documental. Los libros legales y fiscales (antes CON-D02) salen del menú: los resuelven los informes nativos de Contabilidad y la localización Almus ya desarrollada (ver la sección "Ya resuelto por la plataforma" al inicio del documento). Las decisiones D01 y D02 cambian la operación diaria de otros (nadie más podrá tocar períodos cerrados ni pagar sin flujo); por eso se validan en mesa conjunta con AyF y Gerencia General.

### CON-D01 · Cierre y bloqueo de períodos contables

> **DECISIÓN A TOMAR: ¿Con qué rigidez se cierran los períodos: bloqueo total con excepciones auditadas, bloqueo total más fecha de declaración fiscal, o bloqueo irreversible con hash?**
>
> Odoo 19 maneja el cierre con fechas de bloqueo por compañía en `Contabilidad > Contabilidad > Fechas de bloqueo` (app Contabilidad completa, Enterprise). Hay cinco fechas: Bloquear todo, Declaración fiscal, Ventas, Compras y Bloqueo irreversible (Hard Lock). Un asiento con fecha igual o anterior a la fecha de bloqueo no puede crearse ni modificarse; las excepciones solo las crea un administrador de Contabilidad, son temporales ("para mí" o "para todos", con duración y motivo) y quedan registradas en el chatter de la compañía. El Hard Lock no admite excepción nunca.

**Situación actual:** Los períodos contables siguen abiertos y se registran asientos de hasta un año atrás, lo que altera cifras de reportes ya emitidos e invalida cualquier análisis. El propio dueño del proceso pide que el sistema bloquee modificaciones a períodos cerrados.

**Origen:** AS-IS Contraloria.md, tareas 1.2, 1.3 y 7.2 · RX Contraloría, áreas de mejora 2 y 5, riesgo 2 `[Ev: CTR-1.2, CTR-1.3, CTR-7.2]` · PROP-NAT-023

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Fecha "Bloquear todo" fijada al último día de cada mes cerrado; toda corrección retroactiva pasa por una excepción temporal creada por un administrador, con motivo, registrada en el chatter de la compañía | Cierre mensual disciplinado: los reportes emitidos dejan de cambiar y cada corrección retroactiva deja rastro de quién, cuándo y por qué |
| **B** | Lo de A más la fecha de "Declaración fiscal", que protege por separado los impuestos ya declarados al SENIAT; el asesor contable externo depura el histórico mediante excepciones temporales auditadas, sin abrir el período a la operación | Permite depurar la contabilidad 2023-2025 con el contador sin que la operación siga metiendo registros viejos, y lo declarado al SENIAT queda intocable aunque se ajuste otra cosa del período |
| **C** | Lo de B más el Hard Lock por ejercicio firmado (sin excepciones, irreversible) y "Asegurar asientos publicados con hash" en los diarios de venta, compra y varios (pestaña Ajustes avanzados del diario); el reporte de inalterabilidad demuestra ante terceros que los asientos no fueron alterados | Máxima defensa ante una fiscalización: cadena SHA-256 verificable; pero un error tras el Hard Lock ya no se corrige jamás, exige contabilidad depurada y firmada antes de aplicarlo |

**Ruta:** `Contabilidad > Contabilidad > Fechas de bloqueo` (app Contabilidad completa, Enterprise: account_accountant) · hash por diario en `Contabilidad > Configuración > Diarios`, pestaña `Ajustes avanzados` · reporte de inalterabilidad en `Contabilidad > Configuración > Ajustes`, sección `Informes`

**Recomendación del consultor:** Opción B como rutina mensual mientras se depura el histórico, y pasar a C (Hard Lock por ejercicio cerrado) una vez que el asesor externo firme cada año.

**Elección del área:** [ ] A · [ ] B · [ ] C

### CON-D02 (antes CON-D03) · Segregación de funciones y aprobación de pagos

> **DECISIÓN A TOMAR: ¿Cómo se separa quién compra, quién paga y quién audita: solo con grupos de acceso, sumando la doble validación de compras por monto, o añadiendo además una regla de aprobación sobre el pago?**
>
> La segregación vive en los grupos de acceso por aplicación (`Ajustes > Administrar usuarios`; con modo desarrollador, `Ajustes > Usuarios y compañías > Grupos`, afinables por reglas de registro con dominios). La doble validación de compras es un parámetro nativo: casilla "Aprobación de órdenes de compra" con "Monto mínimo" en los ajustes de Compras (dos niveles: confirmar y aprobar). Sobre la acción de pagar, Odoo no trae aprobación nativa: se agrega con reglas de aprobación de Studio (Enterprise).

**Situación actual:** Contraloría ejecuta pagos bancarios y coadministra el usuario máster de seis bancos, controlando fondos que debería auditar; la autorización de pagos se da por grupo de WhatsApp sin trazabilidad.

**Origen:** AS-IS Contraloria.md, tareas 6.1 y 6.2 · RX Contraloría, áreas de mejora 6 y 7, riesgo 4 `[Ev: CTR-6.1, CTR-6.2]` · PROP-NAT-017, PROP-DEV-031

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Grupos de acceso distintos para quien factura, quien registra pagos y quien concilia; Contraloría con nivel de solo lectura en Contabilidad; reglas de registro para afinar por documento si hace falta | Contraloría recupera independencia: audita sin poder ejecutar, y queda rastro de quién registró cada pago |
| **B** | Lo de A más "Aprobación de órdenes de compra" con monto mínimo: toda compra sobre el umbral queda "Para aprobar" hasta que la valide el nivel definido | Sustituye la autorización por WhatsApp por una aprobación registrada dentro del sistema, antes de comprometer el gasto: ninguna factura llega a pago sin orden aprobada |
| **C** | Lo de B más una regla de aprobación de Studio (Enterprise) sobre el registro del pago, que exige la validación de un usuario específico antes de ejecutar la acción de pagar | Segundo candado directamente sobre el pago, no solo sobre la compra; requiere Studio (Enterprise) |

**Ruta:** `Ajustes > Administrar usuarios` · con modo desarrollador: `Ajustes > Usuarios y compañías > Grupos` · `Compras > Configuración > Ajustes`, sección `Órdenes`, casilla `Aprobación de órdenes de compra` + `Monto mínimo` · reglas de aprobación: Studio (Enterprise). Importante: la ejecución bancaria y el usuario máster viven en los portales de los bancos, fuera de Odoo; eso se resuelve por política de responsable único (PROP-DEV-031), no por sistema.

**Recomendación del consultor:** Opción B de inmediato; devolver la ejecución de pagos a Tesorería/Administración y dejar a Contraloría en rol de solo lectura es la decisión organizativa que Odoo apuntala pero no toma. La C solo si el proyecto adopta Studio.

**Elección del área:** [ ] A · [ ] B · [ ] C

### CON-D03 (antes CON-D04) · Supervisión de gestión y cuestionarios a departamentos

> **DECISIÓN A TOMAR: ¿La supervisión de gestión se instrumenta con encuestas puntuadas, con un proyecto de hallazgos, o con actividades sobre el documento observado?**
>
> La app Encuestas (nativa) arma cuestionarios con puntuación (pestaña Opciones, sección Puntaje), se reenvían periódicamente y consolidan resultados en tiempo real. La app Proyecto convierte cada hallazgo en una tarea con etapa, responsable y fecha límite. Las actividades se programan desde el chatter de cualquier documento (factura, asiento, orden) y aparecen como pendientes al responsable.

**Situación actual:** La validación de gestión por departamento se hace en Word y se comunica por llamada o WhatsApp, sin consolidación ni resultados en tiempo real; el plan de trabajo de control no tiene seguimiento y los informes a gerencia no generan acción.

**Origen:** AS-IS Contraloria.md, tareas 2.1, 2.3 y 1.4 · RX Contraloría, áreas de mejora 11 y 12 `[Ev: CTR-2.3, CTR-2.1, CTR-1.4]` · PROP-DEV-032

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Una encuesta por departamento con preguntas puntuadas (puntaje en pestaña Opciones), enviada cada período; los resultados se consolidan solos en la vista de análisis | El cuestionario de Word desaparece; Contraloría ve el estado de todos los departamentos sin llamar a nadie y compara períodos |
| **B** | Un proyecto "Plan de control" con una tarea por hallazgo: responsable, etapa, fecha límite y seguimiento hasta el cierre | El ciclo de control cierra: los informes que "no se leen" se convierten en tareas asignadas que gerencia ve pendientes |
| **C** | Actividad programada al responsable directamente sobre la factura o asiento con error, desde el chatter | Ligero y sin proyecto: útil para hallazgos puntuales, pero no consolida ni mide tendencias |

**Ruta:** `Encuestas > Nuevo` (puntuación en pestaña `Opciones`, sección `Puntaje`) · `Proyecto > Nuevo` · actividades desde el chatter de cualquier documento; tipos de actividad en `Ajustes`, sección `Discusiones`

**Recomendación del consultor:** Combinar A + B tal como plantea PROP-DEV-032, y usar C como mecanismo diario para errores detectados en documentos concretos.

**Elección del área:** [ ] A · [ ] B · [ ] C

### CON-D04 (antes CON-D05) · Análisis financiero mensual y reporte a gerencia

> **DECISIÓN A TOMAR: ¿El informe mensual sale de los informes contables nativos, de una hoja de cálculo viva, de tableros consultables, o se eleva a control presupuestario plan vs real?**
>
> Los informes contables (Pérdidas y ganancias, Balance, comparación de períodos) vienen listos en la app Contabilidad completa (Enterprise). La Hoja de cálculo de Odoo se conecta a datos vivos de la base y forma parte de la app Documentos (Enterprise); los Tableros se construyen sobre esas hojas y se filtran globalmente. El control presupuestario se activa con "Gestión de presupuestos" y compara plan contra ejecutado por cuenta o por eje analítico.

**Situación actual:** El análisis financiero mensual y el informe de resultados están inactivos por falta de cierres y de reportes confiables; cuando existieron, se hacían en Word y gerencia no los aprovechaba.

**Origen:** AS-IS Contraloria.md, tareas 1.3 y 1.4 · RX Contraloría, área de mejora 1, riesgo 2 `[Ev: CTR-1.3, CTR-1.4, CTR-1.1]`

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Informes nativos: Pérdidas y ganancias, Balance y comparación de períodos desde el menú Informes de Contabilidad, sin construir nada | El informe mensual sale del sistema en minutos en vez de armarse en Word; exige CON-D01 resuelto para que las cifras no cambien |
| **B** | Plantilla de informe gerencial en Hoja de cálculo de Odoo con celdas conectadas a datos vivos de la contabilidad, que se actualiza sola cada mes | Un solo formato de informe, siempre vigente; requiere diseñar la plantilla una vez y la app Documentos (Enterprise) |
| **C** | Tablero con indicadores (ingresos, CxP, inventario) y filtros globales, consultable en cualquier momento; construir tableros propios requiere Enterprise | Gerencia deja de depender de que le envíen el informe: lo consulta sola; cambia el hábito de la reunión mensual |
| **D** | Activar `Gestión de presupuestos` (ajustes de Contabilidad, sección Analítica), crear presupuestos analíticos por departamento y financieros por cuenta, comparación automática plan vs real | Convierte el análisis en control presupuestario real; requiere definir antes los planes analíticos por departamento (AYF-D04) |

**Ruta:** `Contabilidad > Informes > Pérdidas y ganancias` (Enterprise) · Hoja de cálculo: parte de la app `Documentos` (Enterprise) · app `Tableros` (tableros propios requieren Enterprise) · presupuestos: activar `Gestión de presupuestos` en `Contabilidad > Configuración > Ajustes`, sección `Analítica`; crear en `Contabilidad > Contabilidad > Presupuestos analíticos`; el presupuesto financiero se compara en el informe de Pérdidas y ganancias

**Recomendación del consultor:** Opción A desde el primer mes cerrado; incorporar D al ejercicio siguiente, porque el presupuesto por departamento es lo que le da a Contraloría una vara objetiva de control.

**Elección del área:** [ ] A · [ ] B · [ ] C · [ ] D

### CON-D05 (antes CON-D06) · Archivo documental para fiscalizaciones

> **DECISIÓN A TOMAR: ¿El soporte documental vive como adjunto en cada transacción, en la app Documentos, o sigue en la nube actual con política de carpetas?**
>
> Todo documento de Odoo acepta adjuntos desde el chatter, en cualquier edición y sin configurar nada. La app Documentos (Enterprise) organiza los archivos en carpetas con permisos de acceso por carpeta, etiquetas y alias de correo por carpeta (los archivos enviados al alias caen solos en su carpeta; exige dominio de alias propio), y centraliza automáticamente los documentos contables en carpetas dedicadas, función que para Contabilidad no puede desactivarse.

**Situación actual:** Desde 2023 la documentación no se archiva preventivamente; ante una fiscalización del SENIAT los departamentos buscan y escanean papeles de urgencia con riesgo de presentar información incompleta.

**Origen:** AS-IS Contraloria.md, tarea 5.3 · RX Contraloría, área de mejora 8, riesgo 3 `[Ev: CTR-5.3]` · PROP-DEV-007

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Adjuntar el soporte escaneado a cada factura, pago o asiento desde el chatter; el historial de cambios queda en el mismo documento | El soporte fiscal se encuentra buscando la factura, no buscando en carpetas; disponible en cualquier edición, sin costo extra |
| **B** | App Documentos (Enterprise): carpetas por departamento y período con permisos por carpeta, etiquetas y alias de correo; la centralización de archivos contables se configura en sus ajustes | Ante una fiscalización se filtra por carpeta y etiqueta y se entrega; los documentos llegan incluso por correo a la carpeta correcta |
| **C** | Mantener la nube actual con política de nomenclatura y archivo mensual, sin cambio de sistema | Costo cero, pero el cumplimiento depende de disciplina manual, que es justo lo que falló desde 2023 |

**Ruta:** adjuntos desde el chatter de cada documento (nativo) · app `Documentos` (Enterprise): carpetas desde el árbol con `Nuevo > Carpeta`; etiquetas en `Documentos > Configuración > Etiquetas`; centralización de archivos en `Documentos > Configuración > Ajustes`

**Recomendación del consultor:** La opción A es el piso obligatorio e inmediato; la B se justifica si el proyecto adopta Enterprise, como ya plantea PROP-DEV-007.

**Elección del área:** [ ] A · [ ] B · [ ] C

---

# 5. Gerencia Hotelera

**Para Gerencia Hotelera:** la decisión más grande del área, el sistema de gestión hotelera, dejó de ser una decisión: la vertical Almus `almus_hotel` (en arquitectura, validada contra los AS-IS de Koral) sustituye a Cloudbeds y resuelve reservas, registro único del cobro, housekeeping y tarifas con comisiones (ver la sección "Ya resuelto por la plataforma" al inicio del documento). Quedan tres decisiones, todas de parametrización nativa e independientes del calendario de la vertical: mantenimiento de equipos (GH-D01), excepciones de precio fuera de tarifa (GH-D02) y requisiciones internas con recepción delegada (GH-D03).

### GH-D01 (antes GH-D04) · Mantenimiento correctivo y preventivo de equipos

> **DECISIÓN A TOMAR: ¿Se implanta solo el correctivo, correctivo más preventivo por calendario, o además se enlaza cada reparación externa a una orden de compra?**
>
> La app Mantenimiento (nativa) registra cada equipo censado (Máquinas y herramientas, por categoría y equipo de mantenimiento responsable) y cada falla como solicitud de tipo Correctivo o Preventivo que avanza por etapas kanban. El preventivo se programa con recurrencia nativa por calendario (repetir cada N días, semanas o meses); el preventivo por horas de uso o medidor no existe. El enlace con Compras para pagar al técnico externo no es automático: es un paso de proceso (emitir la orden de compra del servicio referenciando la solicitud).

**Situación actual:** Las reparaciones con el técnico externo de refrigeración se gestionan ad hoc, a veces sin notificación, y no existe registro que siga la falla desde la detección hasta el pago; los mantenimientos se anotan en una agenda física.

**Origen:** AS-IS Gerencia Hotelera.md, tarea 3.3 · RX Gerencia Hotelera, área de mejora 12, riesgo 8 `[Ev: GHO-3.3]` · PROP-DEV-028, PROP-DEV-029

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Solo correctivo: censo de equipos y solicitudes de mantenimiento con tipo Correctivo, responsable, equipo de mantenimiento y etapas hasta el cierre | Nadie "se entera por la factura": la reparación existe en el sistema desde el día uno, con fechas y responsable |
| **B** | Lo de A más solicitudes Preventivas recurrentes por calendario para AA, refrigeración y bombas (repetir cada N semanas/meses) | Menos fallas de emergencia en temporada alta; exige censar los equipos primero; el preventivo por horas de uso NO es nativo |
| **C** | Lo de A más el paso de proceso con Compras: la solicitud atendida por el técnico externo dispara la orden de compra del servicio, que habilita recepción, factura y pago | Cierra el ciclo detección-reparación-pago que hoy se corta; el pago al técnico deja de retrasarse; la orden no se genera sola, es un paso definido del procedimiento |

**Nota de alcance:** el bloqueo de la habitación averiada lo maneja la vertical (`almus_hotel_housekeeping`: estado bloqueada, fuera de disponibilidad y visible en el Gantt); esta decisión cubre el equipo dañado (AA, nevera, bomba) y su ciclo hasta el pago. Coordinar con OPE-D01/OPE-D02 para usar los mismos equipos de mantenimiento.

**Ruta:** `Mantenimiento > Mantenimiento > Solicitudes de mantenimiento > Nuevo` · equipos en `Mantenimiento > Equipos > Máquinas y herramientas` · categorías y equipos de trabajo en `Mantenimiento > Configuración` · calendario en `Mantenimiento > Mantenimiento > Calendario de mantenimiento`

**Recomendación del consultor:** A + C de arranque, que atacan el problema real con el técnico externo; el preventivo (B) al segundo trimestre, cuando el inventario de equipos esté cargado.

**Elección del área:** [ ] A · [ ] B · [ ] C

### GH-D02 (antes GH-D05) · Excepciones de precio y descuentos fuera de tarifa

> **DECISIÓN A TOMAR: ¿Qué pasa cuando un caso se sale de la tarifa aprobada: no se permite, se permite con descuento visible y medible, o se aprueba dentro del sistema con registro?**
>
> Las tarifas por temporada, los packs y el % de comisión de cada agencia los aplica sola la vertical `almus_hotel`: lo estándar deja de consultarse con presidencia. Lo que queda por parametrizar es la excepción: la casilla Descuentos de Ventas (ajustes, sección Precios) habilita el descuento por línea y el botón Descuento en el pedido; desactivada, se vende a tarifa. La aprobación formal de una excepción no es nativa: se instrumenta con una actividad al aprobador o con una regla de aprobación de Studio (Enterprise).

**Situación actual:** Las comisiones de agencias (10% / 20%), los descuentos de grupos y las compensaciones se consultan caso por caso con presidencia; la demora hace perder clientes.

**Origen:** AS-IS Gerencia Hotelera.md, tareas 2.2.1, 2.2.2 y 2.3.3 · RX Gerencia Hotelera, área de mejora 7, riesgo 5 `[Ev: GHO-2.2.1, GHO-2.2.2, GHO-2.3.3]` · PROP-NAT-015

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Casilla `Descuentos` desactivada: recepción y ventas trabajan solo con la tarifa de la vertical; la excepción se tramita fuera del sistema con presidencia | Lo estándar sale al momento y lo atípico sigue el circuito actual; simple, pero la excepción sigue sin rastro en el sistema |
| **B** | Casilla `Descuentos` activada: descuento por línea visible en el pedido y medible en informes de ventas | El descuento discrecional se vuelve dato: se ve quién lo dio, a quién y cuánto; la restricción por usuario no es nativa, el control es por revisión |
| **C** | Lo de B más excepción con aprobación registrada: actividad al aprobador sobre el pedido, o regla de aprobación con Studio (Enterprise) que exige validación antes de confirmar | Presidencia conserva la última palabra en lo atípico, con registro y sin frenar lo estándar |

**Ruta:** `Ventas > Configuración > Ajustes`, sección `Precios`, casilla `Descuentos` · tarifas, packs y comisiones de agencia: vertical `almus_hotel` (no requiere decisión aquí) · aprobación de excepciones: actividades desde el chatter (nativo) o Studio (Enterprise)

**Recomendación del consultor:** Opción C: el valor está en sacar la decisión comercial del caso por caso sin perder el control de presidencia sobre lo atípico. Arrancar con la variante de actividades (nativa) y evaluar Studio solo si el volumen de excepciones lo justifica.

**Elección del área:** [ ] A · [ ] B · [ ] C

### GH-D03 (antes GH-D06) · Requisiciones internas y recepción de pedidos

> **DECISIÓN A TOMAR: ¿Quién registra la llegada de mercancía y cómo se digitalizan las requisiciones: recepción delegada por permisos, transferencias internas entre ubicaciones, o además reabastecimiento automático por mínimos?**
>
> La recepción es un albarán que valida cualquier usuario con permisos de Inventario: delegarla es cuestión de grupos, no de desarrollo. Las requisiciones se digitalizan activando `Ubicaciones de almacenamiento` (ajustes de Inventario, sección Almacén) y registrando cada entrega como transferencia interna hacia la ubicación del departamento, con lo que el consumo por área se vuelve medible. Las reglas de reabastecimiento mínimo/máximo se crean por producto y ubicación y proponen la reposición sola. El análisis de cobertura de la vertical declara el flujo requisición-aprobación-entrega como hueco (candidato a add-on); mientras tanto se resuelve con estos medios nativos.

**Situación actual:** A&B, Ama de Llaves y Lavandería entregan requisiciones en papel firmadas "a criterio visual" y sin control de consumo; la recepción en Odoo del agua, el gas y los servicios depende de que el rol gerencial tenga tiempo, y a veces se entera días después por la factura.

**Origen:** AS-IS Gerencia Hotelera.md, tareas 3.1, 3.2, 3.5, 4.1 y 5.1 · RX Gerencia Hotelera, áreas de mejora 8 y 13, riesgo 6 `[Ev: GHO-3.1, GHO-3.2, GHO-3.5, GHO-4.1, GHO-5.1]` · PROP-NAT-004, PROP-NAT-005, PROP-NAT-006

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Permisos de Inventario al área que recibe físicamente: el albarán de entrada del agua, el gas o el servicio lo valida quien lo recibe, no la gerencia | Desaparece el cuello de botella del rol gerencial; el stock entra el día que llega y el pago al proveedor no se retrasa |
| **B** | Lo de A más `Ubicaciones de almacenamiento` activadas y una ubicación por departamento (A&B, Ama de Llaves, Lavandería); cada requisición es una transferencia interna validada por permisos | El papel que viaja entre áreas desaparece y por fin hay consumo por departamento medible (lavandería incluida) |
| **C** | Lo de B más reglas de reabastecimiento mínimo/máximo por producto y ubicación para insumos recurrentes (agua, gas, químicos) | Se deja de pedir "cuando se nota que falta": al caer bajo el mínimo el sistema propone la reposición; requiere mantener niveles y consumos al día |

**Ruta:** recepciones desde la tarjeta `Recepciones` de `Inventario` (o botón Recepción de la orden de compra) · `Inventario > Configuración > Ajustes`, sección `Almacén`, casilla `Ubicaciones de almacenamiento`; ubicaciones en `Inventario > Configuración > Ubicaciones`; transferencias internas desde su tarjeta de operación · reglas mínimo/máximo en `Inventario > Operaciones > Reabastecimiento`

**Recomendación del consultor:** Opción A es solo permisos y debe hacerse ya; la B al estructurar ubicaciones por departamento (base de PROP-NAT-007 y COM-D10) y la C para agua y gas una vez estabilizado el dato de consumo.

**Elección del área:** [ ] A · [ ] B · [ ] C

# 6. Operaciones

**Para el equipo de Operaciones:** esta sección lleva al sistema el trabajo que hoy vive en WhatsApp, radio y planillas: órdenes de trabajo, mantenimiento preventivo, herramientas del taller, materiales y niveles de tanques. La decisión D01 (dónde se registran las solicitudes) condiciona a D02; D03 a D05 pueden decidirse en paralelo.

### OPE-D01 · Captura y seguimiento de órdenes de trabajo

> **DECISIÓN A TOMAR: ¿En qué aplicación se registran y siguen las solicitudes de reparación: Mantenimiento, Helpdesk, Proyecto o Field Service?**
>
> El módulo Mantenimiento (nativo, Community) registra cada falla como solicitud con equipo afectado, tipo (correctivo/preventivo), equipo responsable, técnico, prioridad y etapas kanban (Nueva solicitud, En progreso, Reparado, Desechar), con vista de calendario. Los equipos de mantenimiento se crean en Configuración y el acceso se controla por derechos (Encargado de equipos) o agregando usuarios como seguidores de cada equipo. Helpdesk y Field Service ofrecen pipelines de tickets y órdenes en sitio, pero ambos requieren Enterprise y no traen ficha de activos.

**Situación actual:** Las solicitudes de reparación de gerencia, Ama de Llaves y otros departamentos llegan por WhatsApp, radio o de forma verbal y no quedan registradas en ningún sistema; no hay trazabilidad del tiempo de respuesta ni del cierre de la falla, y el encargado de operaciones no usa Odoo.

**Origen:** AS-IS Operaciones.md, tareas 3.1, 3.2, 4.5 · RX Operaciones, área de mejora 1 y riesgo 1 `[Ev: OPE-3.1, OPE-3.2, OPE-4.5]` · PROP-DEV-028

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Módulo Mantenimiento (Community): crear equipos de mantenimiento en `Mantenimiento > Configuración > Equipos de mantenimiento`, dar de alta los activos y registrar cada falla como solicitud con tipo Correctivo, responsable, prioridad y fecha programada | Toda solicitud queda con estado, responsable y tiempos medibles; nada se olvida. Es la base directa de OPE-D02 (activos y preventivo) y del historial por equipo |
| **B** | Helpdesk (Enterprise): equipos de soporte interno con pipeline propio en `Helpdesk > Configuración > Equipos de Helpdesk`; los departamentos levantan tickets | Control de solicitudes por etapas, pero el ticket no se vincula al equipo físico (bomba, tablero) ni alimenta métricas de mantenimiento; suma requisito de edición Enterprise |
| **C** | Proyecto (Community): un proyecto "Mantenimiento" con tareas kanban por etapas asignadas a operadores | Lo más simple de arrancar, pero sin ficha de activos, sin tipo correctivo/preventivo y sin métricas de mantenimiento |
| **D** | Field Service (Enterprise): órdenes de trabajo en sitio con hojas de trabajo (checklists) e itinerario | Útil si se quieren checklists firmados por trabajo; app orientada a servicios en campo, sobredimensionada para mantenimiento interno de un solo recinto y requiere Enterprise |

**Ruta:** `Mantenimiento > Mantenimiento > Solicitudes de mantenimiento > Nuevo` (nativo, Community) · equipos de mantenimiento en `Mantenimiento > Configuración > Equipos de mantenimiento` · calendario en `Mantenimiento > Mantenimiento > Calendario de mantenimiento`. Helpdesk y Field Service requieren Enterprise; las hojas de trabajo personalizadas de Mantenimiento (worksheets) también son Enterprise.

**Recomendación del consultor:** Opción A, con un punto único de captura (quien recibe la solicitud la registra: Gestión de Calidad o recepción) mientras el encargado adopta el sistema; Helpdesk y Field Service no aportan la ficha de activos que Operaciones necesita.

**Elección del área:** [ ] A · [ ] B · [ ] C · [ ] D

### OPE-D02 · Mantenimiento correctivo vs preventivo planificado

> **DECISIÓN A TOMAR: ¿El plan arranca solo con correctivo, con preventivo recurrente por calendario, o además con ficha de fallas (MTBF) por activo?**
>
> En Odoo 19 la solicitud preventiva es nativa y puede hacerse recurrente: se marca Recurrente y se define "Repetir cada" N días/semanas/meses/años, con o sin fecha fin; al completarse una, el sistema genera solo la siguiente. La ficha de cada equipo calcula automáticamente MTBF, MTTR y "próxima falla estimada" a partir de los correctivos cerrados (solo el MTBF esperado es editable), pero esos indicadores no disparan solicitudes: son insumo para ajustar las frecuencias. El disparo por horas de uso o lectura de medidor no existe en el módulo.

**Situación actual:** El trabajo eléctrico y de bombas es mayormente reactivo; el preventivo depende del criterio del operador. El propio equipo pidió "un programa que avise al electricista de las labores que tocan por tiempo de uso" (ej. limpieza de contactores de piscina).

**Origen:** AS-IS Operaciones.md, tareas 4.2, 6.1, 6.3 (solicitud explícita de preventivo automatizado) · RX Operaciones, área de mejora 3 y riesgo 2 `[Ev: OPE-4.2, OPE-4.5, OPE-6.1, OPE-6.3]` · PROP-DEV-029

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Solo solicitudes tipo Correctivo cuando ocurre la falla | Da trazabilidad pero no anticipa nada; el pozo, las bombas y la planta siguen dependiendo del criterio individual |
| **B** | Solicitudes tipo Preventivo con recurrencia nativa (Recurrente + Repetir cada) por cada rutina de cada activo crítico: contactores, retrolavado de filtro, revisión de planta | El sistema recuerda las rutinas y regenera cada solicitud al cerrarse la anterior; solo requiere cargar el plan inicial una vez |
| **C** | Opción B + ficha completa del activo: fecha efectiva y MTBF esperado en la pestaña Mantenimiento; Odoo calcula MTBF real y próxima falla estimada desde los correctivos cerrados | Historial de fallas por activo y frecuencias preventivas ajustadas con datos reales; exige disciplina de registrar cada intervención en el sistema |
| **D** | Disparo por horas de uso o lectura de contador | No es nativo en Odoo 19 (verificado contra doc y código del módulo Mantenimiento); requiere desarrollo. Descartable en fase inicial |

**Ruta:** `Mantenimiento > Equipos > Máquinas y herramientas > Nuevo` (ficha con pestañas Información del producto y Mantenimiento: MTBF, MTTR, próxima falla estimada; nativo, Community) · solicitudes preventivas recurrentes en `Mantenimiento > Mantenimiento > Solicitudes de mantenimiento` con tipo Preventivo y campo Recurrente (nativo). El preventivo por uso/medidor NO es nativo.

**Recomendación del consultor:** Arrancar con opción B sobre los 6-8 activos críticos y evolucionar a opción C cuando exista historial; la opción D se descarta por costo/beneficio.

**Elección del área:** [ ] A · [ ] B · [ ] C · [ ] D

### OPE-D03 · Control de entrega y devolución de herramientas del taller

> **DECISIÓN A TOMAR: ¿El control de herramientas se lleva por asignación permanente a empleado, por movimientos de inventario, por ambos con números de serie, o sigue en físico?**
>
> Odoo cubre esto con dos piezas: la ficha de equipo de Mantenimiento admite "Usado por: Empleado" (la dotación asignada se ve desde la ficha del empleado con el botón Equipos, requiere el módulo Mantenimiento instalado), y el inventario permite modelar el taller y los operadores como ubicaciones para registrar cada entrega y devolución como transferencia interna, con números de serie opcionales por unidad. No existe un flujo nativo dedicado de "préstamo con acuse"; se modela con estas piezas.

**Situación actual:** Las herramientas salen del taller sin registro de qué se entregó, a quién y cuándo se devolvió; no hay responsabilidad rastreable y se pierde tiempo por equipo defectuoso o extraviado.

**Origen:** AS-IS Operaciones.md, tareas 3.5, 4.4 · RX Operaciones, área de mejora 2 y riesgo 4 `[Ev: OPE-3.5, OPE-4.4]` · PROP-DEV-017, PROP-NAT-006

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Cada herramienta relevante como equipo de Mantenimiento con "Usado por: Empleado" en `Mantenimiento > Equipos > Máquinas y herramientas` | Se sabe quién tiene qué de forma permanente (dotación fija: guarañas, multímetros) y se ve desde la ficha del empleado; no modela el préstamo diario con devolución, que quedaría por procedimiento |
| **B** | Ubicaciones internas Taller y por operador/cuadrilla (activar Ubicaciones de almacenamiento en Ajustes de Inventario); cada salida y devolución es una transferencia interna validada | Registro fecha a fecha de entrega y devolución, ideal para consumibles y herramienta rotativa; exige que el responsable del taller opere Odoo en cada entrega |
| **C** | Opción B + activar Lotes y números de serie en `Inventario > Configuración > Ajustes` y serializar las herramientas de valor | La entrega y devolución se registran contra la unidad exacta; evita que se devuelva una herramienta distinta o deteriorada sin que se note. Más disciplina de registro |
| **D** | Sin Odoo: cuaderno o formato con firma bajo responsable de taller | Sin inversión, pero persiste el hallazgo: sin trazabilidad ni respaldo ante pérdida |

**Ruta:** `Mantenimiento > Equipos > Máquinas y herramientas` (campo Usado por; nativo, Community; visible en la ficha del empleado vía botón Equipos) · ubicaciones en `Inventario > Configuración > Ubicaciones` (requiere activar Ubicaciones de almacenamiento) · transferencias internas desde el Resumen de Inventario, tarjeta del tipo de operación Transferencias internas (nativo) · series en `Inventario > Configuración > Ajustes`, opción Lotes y números de serie (nativo). No existe flujo nativo de préstamo con acuse.

**Recomendación del consultor:** Opción A para la dotación fija por rol y opción B solo para herramientas compartidas de valor; la C se reserva para equipos costosos (polipastos, extractores).

**Elección del área:** [ ] A · [ ] B · [ ] C · [ ] D

### OPE-D04 · Origen de la reposición de materiales: requisición, regla automática o compra directa

> **DECISIÓN A TOMAR: ¿La reposición de materiales de mantenimiento nace de una requisición a almacén, de reglas mín/máx automáticas, de una solicitud de cotización directa a Compras, o de una combinación?**
>
> Odoo separa los tres caminos: lo stockeado se entrega por transferencia interna desde almacén; los consumibles recurrentes se reponen solos con reglas de reordenamiento mín/máx (la ficha del producto debe tener proveedor y precio para que el sistema proponga la compra); y lo no stockeado nace como solicitud de cotización en Compras, creada por un usuario con permiso. El tablero de Reabastecimiento centraliza las reglas y las propuestas de compra.

**Situación actual:** El operador descubre el faltante en sitio; la solicitud de compra se rutea por almacén y no directo a Compras, lo que el equipo señala como ruta incorrecta que demora reparaciones.

**Origen:** AS-IS Operaciones.md, tareas 3.3, 3.6 · RX Operaciones, áreas de mejora 2 y 6 `[Ev: OPE-3.3, OPE-3.6]` · PROP-NAT-003, PROP-NAT-004, PROP-NAT-006, PROP-NAT-009

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Requisición interna: Operaciones solicita, almacén valida y entrega por transferencia interna entre ubicaciones | Elimina el papel y da respaldo de cada entrega, pero mantiene a almacén como intermediario de toda compra; la demora denunciada persiste para lo no stockeado |
| **B** | Reglas de reordenamiento mín/máx sobre los consumibles recurrentes (bombillos, cloro, filtros, EPP): ficha de producto con proveedor y precio + regla en `Inventario > Operaciones > Reabastecimiento` | Nadie tiene que "darse cuenta" del faltante: al caer bajo el mínimo el sistema propone la compra solo. Requiere depurar productos y cargar proveedor y precio en cada ficha |
| **C** | Usuario de Operaciones con permiso de Compras crea la solicitud de cotización directa en `Compras > Órdenes > Solicitudes de cotización` para materiales puntuales no stockeados | Resuelve la ruta indirecta que el equipo reclama: el repuesto específico nace como solicitud trazable sin pasar por almacén; exige definir quién en Operaciones tiene usuario y permiso |

**Ruta:** `Inventario > Operaciones > Reabastecimiento > Nuevo` (nativo) · reglas también desde la ficha del producto en `Inventario > Productos > Productos` (nativo) · `Compras > Órdenes > Solicitudes de cotización > Nuevo` (nativo) · entregas internas desde el Resumen de Inventario, tarjeta Transferencias internas (nativo)

**Recomendación del consultor:** Combinar: opción B para los 20-30 consumibles recurrentes de mantenimiento y opción C para repuestos puntuales; la requisición a almacén (opción A) queda solo para lo que sí está en stock.

**Elección del área:** [ ] A · [ ] B · [ ] C

### OPE-D05 · Control de niveles de agua, gasoil y gas

> **DECISIÓN A TOMAR: ¿El nivel de los tanques se lleva solo como recepciones de compra, como stock en sistema con mínimo que dispara la reposición, o con telemetría?**
>
> Modelando cada tanque como producto almacenable, la recepción de la cisterna suma stock, la lectura de vara se registra como conteo en el Inventario físico (el descuento del consumo no es automático) y una regla de reordenamiento con mínimo dispara la propuesta de compra antes de perder autonomía. La telemetría de sensores no es nativa de Odoo.

**Situación actual:** Los niveles de los tanques se leen con vara o reloj y la reposición se pide bajo demanda; un retraso del proveedor puede dejar al hotel sin autonomía eléctrica o sin gas de cocina.

**Origen:** AS-IS Operaciones.md, tareas 5.1 a 5.6 · RX Operaciones, área de mejora 4 y riesgo 3 `[Ev: OPE-5.3, OPE-5.4, OPE-5.5]` · PROP-NAT-026

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Solo compra + recepción: cada cisterna o llenado entra por orden de compra y recepción validada en `Inventario > Operaciones > Recepciones` | Ordena la relación con proveedores y el pago en Administración, pero el nivel del tanque sigue viviendo en la planilla física |
| **B** | Producto almacenable por tanque (gasoil, gas, agua): recepción suma, lectura de vara registrada como conteo periódico en Inventario físico, regla de reordenamiento con mínimo de seguridad | El pedido al proveedor sale antes de perder autonomía; requiere disciplina de registrar la lectura (diaria o por turno) porque el descuento del consumo no es automático |
| **C** | Telemetría de tanques: sensores que actualizan el nivel solos | No es nativo de Odoo; requiere hardware y desarrollo de integración. Solo tiene sentido tras estabilizar la opción B |

**Ruta:** `Compras > Órdenes > Solicitudes de cotización` + recepción en `Inventario > Operaciones > Recepciones` (nativo) · nivel en `Inventario > Operaciones > Inventario físico` (nativo) · mínimos en `Inventario > Operaciones > Reabastecimiento` (nativo). La lectura automática de tanques NO es nativa.

**Recomendación del consultor:** Opción B: convierte la lectura de vara que ya se hace en un dato del sistema y automatiza el aviso de reposición, que es el riesgo real (apagón o cocina sin gas).

**Elección del área:** [ ] A · [ ] B · [ ] C

---

# 7. Talento Humano

**Para el equipo de Talento Humano:** esta sección decide cómo se calcula y paga la nómina, cómo se marca la asistencia y dónde vive el expediente del trabajador. El motor de nómina venezolano ya no se decide: lo aporta la localización Almus sobre el módulo Nómina de Odoo (edición Enterprise). La decisión D01 pasa a ser el alcance de la fase 1, y de ella dependen el calendario de RH-D03 y RH-D06. D02, D04 y D05 pueden decidirse y arrancarse de inmediato.

### RH-D01 · Alcance de la fase 1 de la nómina en Odoo (localización Almus)

> **DECISIÓN A TOMAR: ¿Qué procesos de nómina corren en Odoo desde el arranque y cuáles se quedan fuera hasta que la localización libere ISLR salarial, prestaciones al egreso y reportes?**
>
> El motor ya existe: la localización Almus (`l10n_ve_hr` + `l10n_ve_hr_payroll` + `l10n_ve_hr_salary_attachment`, v1.2.1) corre sobre el módulo Nómina de Odoo (Enterprise) con estructuras venezolanas (regular, utilidades, vacaciones, prestaciones, anticipos, liquidación), reglas LOTTT/LSS con parámetros legales fechados, salario integral Art. 104 y dualidad Bs/divisa con tasa fijada al período. Quedan fuera de la localización por ahora, en diseño: ISLR salarial, prestaciones al egreso y reportes/declaraciones de nómina. Lo que se decide es el alcance de la fase 1: cuántas de las estructuras publicadas entran al sistema desde el arranque y qué sigue calculándose fuera mientras esos módulos se liberan.

**Situación actual:** Sueldos, cestatickets, bonificaciones, horas extras, utilidades, vacaciones y liquidaciones se calculan íntegramente en hojas de Excel paralelas y se transcriben a mano, con alto riesgo de error y reproceso.

**Origen:** AS-IS RRHH.md, tareas 2.1.2, 2.3.1, 2.5.2, 3.7.1 (el propio equipo pide "que todo el cálculo se gestione desde el módulo de nómina de Odoo") · RX Talento Humano, área de mejora 1 y riesgo 1 `[Ev: RRH-2.1.2, RRH-2.3.1, RRH-2.5.2, RRH-3.7.1]` · PROP-DEV-009

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Alcance completo publicado: instalar la localización Almus, cargar contratos y activar desde el arranque las seis estructuras (regular, utilidades, vacaciones, prestaciones, anticipos, liquidación); ISLR salarial y cálculos de egreso se cargan como entradas manuales calculadas fuera | Máximo reemplazo del Excel de una sola vez, pero obliga a validar seis estructuras en simultáneo durante el corte; el arranque es más largo y el riesgo de arrastre de errores mayor |
| **B** | Alcance recurrente primero: fase 1 solo con el ciclo regular (recibo quincenal, horas extras, bonos y deducciones vía salary attachment, cestaticket, anticipos); utilidades, vacaciones y liquidaciones siguen en Excel y entran en fase 2 sobre las estructuras ya publicadas | Elimina el grueso del Excel donde más errores se repiten (el pago recurrente) con un corte controlado; el resto entra por fases sin apostar de entrada lo que la localización aún no cubre |
| **C** | Nómina fuera de Odoo: cálculo externo (Excel estandarizado o sistema local) y solo el asiento contable resumen del período en Contabilidad | Riesgo de cálculo se mantiene fuera y el costo de arranque es mínimo, pero persisten las hojas paralelas y la asistencia nunca alimenta el pago |

**Ruta:** `Nómina > Configuración > Estructuras` (estructuras salariales) y `Nómina > Recibos de nómina > Procesos de nómina` (en Odoo 19 los lotes se llaman Pay Runs / Procesos de nómina). El módulo Nómina es Enterprise; la localización de nómina Venezuela NO es nativa de Odoo: la provee Almus (requiere Odoo 19 Enterprise).

**Recomendación del consultor:** Opción B con nómina sombra: correr 2-3 períodos en paralelo contra el Excel actual antes de cortar, y ampliar al alcance A (utilidades, vacaciones, liquidación) al cierre del primer ciclo estable; ISLR salarial, prestaciones al egreso y declaraciones entran cuando la localización libere esos módulos.

**Elección del área:** [ ] A · [ ] B · [ ] C

### RH-D02 · Registro de asistencia: kiosco, fichaje individual o statu quo

> **DECISIÓN A TOMAR: ¿La asistencia se marca en un kiosco en la entrada, desde el navegador de cada usuario, con ambos métodos, o sigue en Tango Uno?**
>
> El modo kiosco es nativo del módulo Asistencias (Community): un dispositivo dedicado con URL propia donde el personal sin usuario de Odoo marca por selección manual, código de barras/RFID o PIN, todo configurado en los Ajustes de Asistencias. El fichaje desde el backend (icono de asistencia en la base de datos) convive con el kiosco y registra IP y coordenadas GPS como dato informativo del punto de marcaje, no como geocerca. El PIN y el número de gafete se definen en la pestaña Ajustes de la ficha de cada empleado.

**Situación actual:** La asistencia se reparte entre Tango Uno en la puerta, un listado manual en oficina y Excel; los retardos y ausencias se confirman por WhatsApp con los jefes, generando descuentos incorrectos.

**Origen:** AS-IS RRHH.md, tareas 2.2.1, 2.2.2 · RX Talento Humano, área de mejora 3 y riesgo 7 `[Ev: RRH-2.2.1, RRH-2.2.2]` · PROP-DEV-011

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Kiosco en la entrada: tablet o PC con la URL de kiosco; Modo de quiosco en Ajustes con selección manual, código de barras/RFID o ambos, y PIN opcional por empleado | Sustituye a Tango Uno con un solo punto de marcaje para todo el personal operativo, sin que cada empleado necesite usuario de Odoo. Inversión: dispositivo y, si se quiere, carnets con código |
| **B** | Fichaje desde el navegador: activar Asistencias desde el backend en Ajustes; cada empleado con usuario marca desde el icono de asistencia | Sirve para administrativos con computadora (incluida la coordinación en Caracas); inviable como método único porque el personal operativo no tiene equipo |
| **C** | Mixto: kiosco para operativos + backend para administrativos; ambos alimentan el mismo registro | Cobertura total con un solo repositorio de asistencia que alimenta las entradas de trabajo de Nómina (RH-D01) y las reglas de horas extras (RH-D03) |
| **D** | Mantener Tango Uno + transcripción | Sin inversión, pero la asistencia nunca alimenta la nómina y el hallazgo persiste completo |

**Ruta:** `Asistencias > Configuración > Ajustes` (secciones Modos y Ajustes del quiosco: Modo de quiosco, fuente del código, PIN, URL del kiosco; nativo, Community) · entrada al kiosco con el botón Modo de quiosco del menú superior de Asistencias o con la URL dedicada · PIN y gafete en la pestaña Ajustes de la ficha del empleado. El GPS/IP registrado es informativo del punto de marcaje, no un control de geocerca.

**Recomendación del consultor:** Opción C: el kiosco replica el hábito ya existente de marcar en la puerta y el fichaje web resuelve a los administrativos y a Caracas sin hardware adicional.

**Elección del área:** [ ] A · [ ] B · [ ] C · [ ] D

### RH-D03 · Horas extras y bonos variables (bono de camareras)

> **DECISIÓN A TOMAR: ¿Las horas extras se calculan con reglas automáticas desde el marcaje o se aprueban a mano, y el bono de camareras entra como otra entrada del recibo o con un desarrollo de captura?**
>
> Asistencias trae Reglas de horas extra (rulesets) por país: reglas por cantidad (horas que exceden el contrato o una duración fija, por día o semana) o por horario (día no laborable, fuera de un horario o calendario), con tolerancias, tarifa porcentual y el tipo de entrada de trabajo que pasa a Nómina; el excedente puede pagarse o compensarse en tiempo. Ninguna regla viene precargada: los recargos LOTTT hay que definirlos. La validación de extras se configura como automática o aprobada por gerente. Los conceptos variables como el bono de camareras entran al recibo como Otros tipos de entrada más una regla salarial.

**Situación actual:** Las horas extras circulan en formatos físicos por departamento y se calculan a mano cada semana; el bono de productividad de camareras (1 USD por habitación limpiada tras la jornada) se gestiona aparte y se paga con las extras del lunes.

**Origen:** AS-IS RRHH.md, tareas 2.2.3, 2.3.1, 2.3.5 (bono documentado en minuta kmmin001; fuente de registro aún por validar) · RX Talento Humano, área de mejora 3 `[Ev: RRH-2.2.3, RRH-2.3.1, RRH-2.3.5]` · PROP-DEV-011

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Ruleset de horas extras con los recargos LOTTT (diurna, nocturna, día no laborable) en `Asistencias > Configuración > Reglas de horas extra`, enlazado al tipo de entrada de trabajo de Nómina | Desaparece el cálculo semanal manual: las extras salen del marcaje y el rol de calculista se vuelve verificador. Nota: no viene ninguna regla preconfigurada; los recargos hay que definirlos y validarlos |
| **B** | Validación de extras "Aprobada por gerente" en Ajustes de Asistencias; el jefe valida las horas adicionales marcadas y RRHH las vuelca a Nómina como entrada del período | Elimina el formato físico que viaja y mantiene el control humano; el cálculo sigue siendo semiautomático |
| **C** | Bono camareras como otra entrada del recibo: tipo en `Nómina > Configuración > Otros tipos de entradas` + regla salarial que convierte habitaciones en monto (con `l10n_ve_hr_salary_attachment` el bono puede pactarse en USD) | El pago queda dentro del recibo y auditable; el conteo de habitaciones sigue siendo un dato externo que RRHH carga cada semana |
| **D** | Desarrollo de captura de productividad: registro digital de habitaciones limpiadas que alimente el bono automáticamente | Elimina el dato manual, pero es desarrollo a medida sobre un proceso que aún tiene pendiente de validación su fuente de registro (AS-IS 2.3.5) |

**Ruta:** `Asistencias > Configuración > Reglas de horas extra` (nativo, Community, sin reglas precargadas) · validación de extras en `Asistencias > Configuración > Ajustes`, sección Horas extras · entradas del recibo en `Nómina > Configuración > Otros tipos de entradas` y `Nómina > Recibos de nómina` (Enterprise; depende de adoptar Nómina, ver RH-D01)

**Recomendación del consultor:** Opciones A + C: automatizar las extras desde el marcaje y tratar el bono como entrada manual controlada; la opción D no se justifica mientras la fuente del conteo esté sin validar.

**Elección del área:** [ ] A · [ ] B · [ ] C · [ ] D

### RH-D04 · Fuente única de datos del empleado y expediente documental

> **DECISIÓN A TOMAR: ¿La ficha de Empleados se convierte en el registro único del trabajador, sola, con el módulo Documentos, o enlazada a OneDrive/SharePoint?**
>
> La ficha de empleado de Odoo 19 (Community) concentra en pestañas los datos que hoy viven dispersos: Trabajo (puesto, departamento, responsable), Personal (cuentas bancarias, contacto de emergencia, estado civil, hijos dependientes, educación), Nómina y Ajustes (PIN y gafete de asistencia). Datos de salud detallados no tienen campos estándar y pueden requerir campos personalizados. El expediente documental con espacios de trabajo, etiquetas y permisos lo aporta el módulo Documentos, que es Enterprise.

**Situación actual:** Los datos del trabajador viven a la vez en Excel, expediente físico, OneDrive/SharePoint y Odoo, porque la ficha actual no captura salud, carga familiar, estado civil ni datos bancarios; se concilia a mano.

**Origen:** AS-IS RRHH.md, tareas 3.3.1, 3.3.2 · RX Talento Humano, área de mejora 2 y riesgo 4 `[Ev: RRH-3.3.1, RRH-3.2.2, RRH-3.3.2]` · PROP-DEV-013, PROP-DEV-007

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Ficha de Empleados como registro único: completar las pestañas Trabajo, Personal y Ajustes de cada trabajador; documentos escaneados adjuntos a la ficha | Muere la base Excel paralela. La migración inicial de la base actual es el trabajo real; salud detallada puede requerir campos personalizados |
| **B** | Opción A + módulo Documentos (Enterprise): espacios de trabajo documentales por departamento con etiquetas y permisos por usuario | Expediente digital completo con control de acceso (relevante por la carpeta Oslo y las inspecciones); la edición Enterprise ya viene impuesta por Nómina (RH-D01) |
| **C** | Opción A + OneDrive/SharePoint enlazado: la ficha manda en datos y la nube sigue guardando los escaneos, referenciados desde Odoo | Aprovecha lo ya escaneado sin migrar documentos; la dispersión documental se reduce pero no desaparece |

**Ruta:** `Empleados > Empleados > Nuevo`, pestañas Trabajo, Personal, Nómina y Ajustes (nativo, Community; en Odoo 19 los datos privados viven en la pestaña Personal) · Documentos requiere Enterprise

**Recomendación del consultor:** Opción A de inmediato (es la condición previa de Nómina, Asistencias y Ausencias) y evaluar la B aprovechando que la edición Enterprise ya la impone la nómina (RH-D01).

**Elección del área:** [ ] A · [ ] B · [ ] C

### RH-D05 · Vacaciones, permisos y reposos: asignación manual o acumulación automática

> **DECISIÓN A TOMAR: ¿El saldo de vacaciones se carga a mano cada aniversario o se acumula solo con un plan por antigüedad, y los reposos IVSS entran como tipos de ausencia con documento obligatorio?**
>
> El módulo Ausencias (Community) trae seis tipos precargados y permite crear tipos propios con la opción "Requiere documento de soporte" para exigir el adjunto (Forma 14-73) en la solicitud. El saldo se otorga por asignaciones manuales o por planes de acumulación con hitos, que modelan derechos crecientes por antigüedad (esquema LOTTT de 15 días más 1 adicional por año). Solicitud y aprobación corren en línea: el empleado solicita desde Mi tiempo y el jefe aprueba desde Administración.

**Situación actual:** Las solicitudes de vacaciones, permisos y adelantos se gestionan con planillas físicas y Excel, con aprobaciones verbales o por WhatsApp; los reposos IVSS (Forma 14-73) se tramitan aparte sin saldo controlado por trabajador.

**Origen:** AS-IS RRHH.md, tareas 3.4.4, 3.4.5, 3.5.1 · RX Talento Humano, oportunidad 5 y área de mejora 4 `[Ev: RRH-3.4.4, RRH-3.4.5, RRH-3.5.1]` · PROP-DEV-015

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Asignación manual: RRHH carga los días de vacaciones de cada empleado en cada aniversario en `Ausencias > Administración > Asignaciones`; el empleado solicita y el jefe aprueba en línea | Aprobaciones dejan de ser verbales y el saldo es visible; la carga anual por empleado sigue siendo tarea de RRHH |
| **B** | Plan de acumulación con hitos por antigüedad en `Ausencias > Configuración > Planes de acumulación`, asociado al tipo Vacaciones (modelable el esquema LOTTT de 15 días más 1 por año) | El derecho se calcula sin intervención y a prueba de olvidos; configurar bien los hitos exige validar el esquema legal con el calculista |
| **C** | Tipos de ausencia dedicados (reposo IVSS, permiso remunerado/no remunerado) en `Ausencias > Configuración > Tipos de ausencia`, con "Requiere documento de soporte" activado para el reposo | El reposo queda documentado en el mismo flujo y descuenta o no descuenta según el tipo; complementa a A o B, no las sustituye |
| **D** | Mantener planillas físicas y Excel | Sin inversión; persisten aprobaciones sin respaldo escrito, señaladas como riesgo legal en el RX |

**Ruta:** solicitudes en `Ausencias > Mi tiempo` · aprobaciones y asignaciones en `Ausencias > Administración` · tipos en `Ausencias > Configuración > Tipos de ausencia` · acumulación en `Ausencias > Configuración > Planes de acumulación` (todo nativo, Community)

**Recomendación del consultor:** Opciones A + C en el arranque (valor inmediato con poca configuración) y migrar a B cuando el esquema de antigüedad esté validado contra los cálculos actuales del equipo.

**Elección del área:** [ ] A · [ ] B · [ ] C · [ ] D

### RH-D06 · Pago de nómina por lote: archivo TXT bancario

> **DECISIÓN A TOMAR: ¿El TXT de Banplus se genera con un desarrollo directo desde el proceso de nómina o se arma con una plantilla controlada sobre el reporte exportado de Odoo?**
>
> El proceso de nómina nativo (Pay Runs) consolida los recibos del período y genera los pagos y el asiento; el único archivo bancario nativo es SEPA (ajuste Payroll SEPA), pensado para la zona euro, no el TXT posicional venezolano. El formato Banplus es por tanto desarrollo a medida o plantilla externa alimentada con la exportación de los montos del proceso.

**Situación actual:** El archivo masivo TXT para Banplus se arma a mano cada período y los empleados con cuentas de otros bancos se pagan con transferencias individuales, una a una.

**Origen:** AS-IS RRHH.md, tareas 2.3.3, 2.3.4 · RX Talento Humano, riesgo 1 `[Ev: RRH-2.3.3, RRH-2.3.4]` · PROP-DEV-010

| Opción | Cómo se configura Odoo | Cómo afecta la operación de Koral |
|:---:|---|---|
| **A** | Desarrollo del formato TXT Banplus generado directamente desde el proceso de nómina (candidato natural a extensión de la localización Almus: su cluster de reportes de nómina, `l10n_ve_hr_payroll_reports`, está en diseño) | Cero transcripción: el TXT sale de los mismos montos del recibo. Es desarrollo (validado en PROP-DEV-010) y conviene coordinarlo con Almus para no duplicar lo que la localización libere |
| **B** | Exportar los montos consolidados del proceso de nómina y armar el TXT con una plantilla controlada fuera de Odoo | Elimina el riesgo de transcribir montos aunque mantiene un paso manual; disponible desde el día uno de Nómina |
| **C** | Mantener elaboración manual completa en Excel | Sin dependencia de Odoo, pero doble transcripción (cálculo y archivo) con riesgo de transferencias erradas |

**Ruta:** `Nómina > Recibos de nómina > Procesos de nómina` (nativo, Enterprise) + `Contabilidad > Proveedores > Pagos` (registro contable, nativo). El archivo bancario nativo es SEPA (`Nómina > Configuración > Ajustes`, opción Payroll SEPA); el TXT de banco venezolano NO es nativo. Las transferencias a otros bancos seguirán siendo individuales en el portal bancario en cualquiera de las opciones.

**Recomendación del consultor:** Opción B mientras la nómina en Odoo se estabiliza (depende de RH-D01) y opción A como mejora de segunda fase, cuando el volumen y la estabilidad del cálculo justifiquen el desarrollo, verificando antes si la localización Almus ya lo cubre.

**Elección del área:** [ ] A · [ ] B · [ ] C

# Qué sigue después de decidir

1. Cada decisión cerrada se redacta como propuesta del **Estado Final** en el formato aprobado (prosa, ruta verificable, qué se llena y qué no).
2. De cada decisión nacen las **tareas de implementación** (configuración, carga de datos, pruebas, capacitación) con la plantilla existente, calendarizadas hacia el 1 de octubre.
3. Los puntos donde el departamento pida más información se resuelven con una demo en el ambiente de pruebas antes de decidir, nunca después de configurar.
