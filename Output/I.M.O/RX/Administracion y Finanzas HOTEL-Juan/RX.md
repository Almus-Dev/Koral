---
proyecto: Koral Morrocoy (Hotel)
departamento: Administración y Finanzas (HOTEL-Juan)
codigo_departamento: AFJ
documento: RX — Radiografía del Proceso
estado: Borrador — pendiente firma del dueño del proceso
fecha_publicacion: 2026-06-16
fuente_as_is: Output/Administracion y Finanzas/AS-IS HOTEL-Juan.md
---

# RX — Administración y Finanzas (HOTEL-Juan)

## Resumen ejecutivo

El rol de Facturación de Compras del Hotel concentra el cierre del ciclo de compra a proveedor: valida documentos fiscales, registra facturas en Odoo, gestiona el pago, concilia contra banco y prepara el cierre fiscal quincenal de la empresa como contribuyente especial. Un único analista absorbe 50 tareas distribuidas en cinco bloques (Facturación en Compras, Cierre Fiscal Quincenal, Cuentas por Pagar, Funciones Operativas y Funciones Administrativas), de las cuales un número significativo son operativas y administrativas que el propio analista declara ajenas a su función. La tensión principal es la dependencia de procesos aguas arriba (Compras, Almacén, áreas solicitantes) y de soportes paralelos a Odoo —un Excel de cuentas por pagar y carpetas en la nube— que el sistema no cubre por sí solo, lo que convierte al puesto en filtro final, supervisor de errores ajenos y consolidador manual.

---

## Indicadores del estado actual

| Indicador | Valor | Notas |
| --- | --- | --- |
| Tareas identificadas | 50 | Áreas 1 (19), 2 (7), 3 (11), 7 (10), 8 (3) |
| Tareas con dependencia externa | 24 | Dependen de Compras, Almacén, Finanzas, gerencia o proveedores para iniciar o cerrar |
| Sistemas y herramientas en uso | 8 | Odoo, WhatsApp, correo/nube corporativa (Microsoft), Excel en la nube, escáner, impresora, terminal POS bancario, archivo físico |
| Tareas soportadas en Odoo | 27 (54%) | Usan Odoo como herramienta principal o de registro |
| Tareas con respaldo manual paralelo a Odoo | 6 | CxP en Excel y control de anticipos en carpeta local (`AFJ-3.1`, `AFJ-3.2`, `AFJ-3.3`, `AFJ-3.9`, `AFJ-3.10`, `AFJ-1.18`) |
| Obligaciones fiscales/regulatorias atendidas | 4 | SENIAT (IVA quincenal, retenciones IVA/ISLR), SUNAGRO SICA |
| Tareas que el analista declara ajenas a su rol | 10 | `AFJ-1.2`, `AFJ-1.15`, `AFJ-1.17`, `AFJ-7.1`, `AFJ-7.2`, `AFJ-7.6`, `AFJ-7.8`, `AFJ-7.10`, `AFJ-3.7`, `AFJ-8.2` |

---

## Análisis de la operación actual

### Fortalezas

1. **Validación fiscal estricta en la entrada.** La revisión documental contra requisitos SENIAT (RIF, dirección fiscal, número de factura, número de control, fecha, membrete, legibilidad) y la verificación de tasa de cambio antes de registrar funcionan como control de calidad robusto en el primer eslabón. `[Ev: AFJ-1.1 · ISO: 9001:2015 §8.4.2 · Norma: Providencia SENIAT facturación / Ley IVA]`
2. **Doble filtro sobre el pedido antes de facturar.** El analista revisa el pedido de Compras (productos, cantidades, precios, condiciones) como segundo control independiente antes de importarlo a la factura, reduciendo el arrastre de errores al pago y la conciliación. `[Ev: AFJ-1.3 · ISO: 9001:2015 §8.5.1]`
3. **Cumplimiento puntual de la guía SUNAGRO SICA.** La recepción de la guía en el portal el mismo día evita multas del ente regulador; el proceso opera sin incidencias con las herramientas actuales. `[Ev: AFJ-1.6 · Norma: SUNAGRO SICA]`
4. **Trazabilidad documental del pago hacia el proveedor.** El envío del comprobante por WhatsApp y su archivo en el historial del chat protege a la empresa ante reclamos y cobros duplicados de proveedores estatales. `[Ev: AFJ-1.8 · ISO: 9001:2015 §7.5.3]`
5. **Cadena de custodia en la recepción centralizada por Almacén.** La norma de que todo pedido pase primero por Almacén con firmas, sellos y documento de entrega corrigió el extravío de documentos y la desvinculación factura-mercancía; hoy Almacén lo ejecuta con autonomía creciente. `[Ev: AFJ-3.7 · ISO: 9001:2015 §8.5.2]`
6. **Cierre fiscal quincenal con control de integridad documento a documento.** El conteo exacto de facturas escaneadas contra las declaradas y la numeración del libro de compras solo cuando el período está cerrado garantizan que el libro a declarar sea íntegro. `[Ev: AFJ-1.12, AFJ-2.7 · Norma: contribuyente especial IVA quincenal · ISO: 9001:2015 §7.5.3]`

### Áreas de mejora

1. **Dependencia de un Excel paralelo a Odoo para cuentas por pagar.** La relación de CxP se mantiene manualmente en Excel porque el módulo de Compras contiene "pedidos basura" (abiertos que no son CxP reales) que impiden extraer la información directa del sistema; la actualización se hace tres veces al día. Gerencia General ha expresado insatisfacción con el método pero no hay alternativa actual. Severidad: Alto. `[Ev: AFJ-3.1, AFJ-3.2, AFJ-3.3 · Odoo: Aged Payable / cuentas por pagar — Accounting · ISO: 9001:2015 §7.5.3]`
2. **Inclusión manual de obligaciones que no dejan pedido.** Facturas de proveedores con factura directa y servicios fijos mensuales (CORPOELEC, TELMACA, seguridad) deben cargarse a mano en el Excel o quedan fuera de la planificación de pagos. Severidad: Alto. `[Ev: AFJ-3.9, AFJ-3.10 · Odoo: facturas recurrentes / órdenes recurrentes — Accounting/Purchase]`
3. **Gestión de anticipos sin factura y depuración de saldos antiguos.** El control de pagos anticipados se apoya en una carpeta local del computador y en recordatorios; la depuración de saldos de anticipo 2023-2024 es compleja y voluminosa, y los anticipos antiguos quedan abiertos distorsionando el balance. Severidad: Alto. `[Ev: AFJ-1.18, AFJ-1.19 · Odoo: anticipos de proveedor / conciliación de partidas — Accounting · ISO: 9001:2015 §7.5.3]`
4. **Conciliación bancaria como responsabilidad compartida sin proceso dedicado.** La conciliación pago-extracto es diaria y la ejecutan varios roles; los pagos devueltos no detectados a tiempo generan notas de débito, disputas y retrabajo que toman de días a semanas. El analista pide personal dedicado. Severidad: Medio. `[Ev: AFJ-1.10 · Odoo: conciliación bancaria asistida — Accounting]`
5. **Archivo de conciliaciones y soportes disperso en carpetas de nube.** Cada conciliación se respalda con capturas y comprobantes en carpetas enlazadas al correo corporativo, totalizadas mensualmente contra los movimientos bancarios; el cruce manual es la única vía de detectar faltantes o duplicados. Severidad: Medio. `[Ev: AFJ-1.11 · Odoo: adjuntos y conciliación contable — Accounting/Documents · ISO: 9001:2015 §7.5.3]`
6. **Solicitud y recepción de facturas a proveedores fuera de un canal trazable.** La gestión de facturas pendientes se centraliza en WhatsApp por practicidad ante la imposibilidad de establecer un canal formal por correo; la factura llega como foto/PDF y el original solo después del pago, lo que expone a extravío. Severidad: Medio. `[Ev: AFJ-1.4, AFJ-1.7, AFJ-2.4 · ISO: 9001:2015 §7.5.3]`
7. **Reporte y seguimiento de errores ajenos absorbidos por el puesto.** El analista detecta, reporta, asigna actividad en Odoo y da seguimiento al cierre de errores de pedidos/facturas originados por otros departamentos; declara que la supervisión de terceros no es su rol y genera tensión interpersonal y retrabajo. Severidad: Medio. `[Ev: AFJ-1.15, AFJ-1.16, AFJ-1.17 · ISO: 9001:2015 §10.2]`
8. **Solicitud de pedidos excepcionales para regularizar compras fuera del canal formal.** Compras que ocurren sin orden previa obligan a montar un pedido a posteriori para dar cobertura contable, generando pedidos abiertos sin receptor formal y retrabajo (aprox. uno por día). Severidad: Medio. `[Ev: AFJ-1.2 · ISO: 9001:2015 §8.4.1]`
9. **Controles operativos sin sistema de registro formal.** El resguardo de llaves se lleva en una tabla física de ganchos sin registro de control; el resguardo de equipos asignados, la entrega de equipos dañados (cuaderno físico) y la recepción de artículos no almacenables carecen de trazabilidad sistematizada. Severidad: Bajo. `[Ev: AFJ-7.5, AFJ-7.6, AFJ-7.7, AFJ-7.8 · ISO: 9001:2015 §7.5.3]`

### Oportunidades (acotadas a Odoo)

1. **Cuentas por pagar gestionadas dentro del sistema.** El reporte de antigüedad de saldos y el listado de facturas por pagar son capacidades nativas que podrían sustituir el Excel manual y el reporte diario por WhatsApp, sujeto a depurar los pedidos abiertos que hoy ensucian el módulo. `[Ev: AFJ-3.1, AFJ-3.2, AFJ-3.3 · Odoo: Aged Payable Report / Vendor Bills — Accounting]`
2. **Facturas y obligaciones recurrentes sin carga manual.** Los servicios fijos mensuales (electricidad, telecomunicaciones, seguridad) y los proveedores con factura directa podrían reflejarse mediante facturas recurrentes o pedidos recurrentes, evitando la inclusión manual en el Excel. `[Ev: AFJ-3.9, AFJ-3.10 · Odoo: Recurring Vendor Bills / Recurring Purchase — Accounting/Purchase]`
3. **Conciliación bancaria asistida sobre extracto.** La importación de extractos y la conciliación asistida es capacidad nativa; podría reducir el cruce manual y la dispersión del archivo de soportes en carpetas de nube. `[Ev: AFJ-1.10, AFJ-1.11 · Odoo: Bank Reconciliation — Accounting]`
4. **Anticipos de proveedor y aplicación a factura en el sistema.** El registro de anticipos y su aplicación/encuadre posterior sobre la factura es manejo nativo de partidas; podría reemplazar la carpeta local de pendientes y facilitar la depuración de saldos antiguos. `[Ev: AFJ-1.18, AFJ-1.19 · Odoo: Vendor Advances / Outstanding Payments — Accounting]`
5. **Retenciones IVA/ISLR y certificados con localización venezolana.** La generación, validación quincenal y emisión del certificado de retención ya se apoyan en Odoo; la localización fiscal venezolana es el marco nativo para sostener este flujo. `[Ev: AFJ-1.5, AFJ-2.6, AFJ-3.11 · Odoo: Withholding / l10n_ve — Accounting · Norma: retenciones IVA/ISLR SENIAT]`
6. **Libro de compras y soporte del cierre fiscal desde el sistema.** El descargue del libro de compras y la asociación de documentos escaneados como adjuntos son capacidades del módulo contable y de gestión documental, que podrían reducir el escaneo-numeración-carga manual del cierre quincenal. `[Ev: AFJ-2.7, AFJ-1.12 · Odoo: Purchase Journal / Documents — Accounting · Norma: contribuyente especial IVA quincenal]`
7. **Reporte y seguimiento de novedades mediante actividades del sistema.** La asignación de actividades en Odoo ya se usa para activar reportes formales y dar trazabilidad; ampliar su uso podría sustituir parte del escalamiento por WhatsApp/correo en el seguimiento de errores. `[Ev: AFJ-1.16, AFJ-1.17 · Odoo: Activities / Discuss — Mail]`

### Riesgos si se mantiene

1. **Sanción fiscal por información incompleta o tardía en el cierre quincenal.** La declaración de IVA como contribuyente especial exige el libro de compras íntegro y a tiempo; si al cierre faltan facturas, hay errores de retención o el registro se extiende más allá del horario, se incurre en falta sancionable y posible multa. Impacto: Alto. Probabilidad: Media. `[Ev: AFJ-2.2, AFJ-2.5, AFJ-2.6, AFJ-2.7 · Norma: contribuyente especial IVA quincenal SENIAT]`
2. **Multa SUNAGRO por no recepcionar la guía a tiempo.** La guía tiene fecha de vencimiento para su recepción en el portal; el incumplimiento genera multa y medidas disciplinarias de gerencia. Impacto: Alto. Probabilidad: Baja. `[Ev: AFJ-1.6 · Norma: SUNAGRO SICA]`
3. **Distorsión del balance por anticipos y CxP mal reflejados.** Anticipos abiertos indefinidamente, saldos fantasma por asientos duplicados y obligaciones no informadas por error en el Excel manual impiden sincerar el balance financiero. Impacto: Alto. Probabilidad: Media. `[Ev: AFJ-1.18, AFJ-1.19, AFJ-3.9 · Odoo: cuentas por pagar / anticipos — Accounting]`
4. **Cuentas de proveedor "en el limbo".** Si una cuenta anterior no se cierra antes de abrir la siguiente, la nueva queda atrapada y puede pasar desapercibida durante meses hasta que un contador la detecte. Impacto: Medio. Probabilidad: Media. `[Ev: AFJ-3.8 · ISO: 9001:2015 §7.5.3]`
5. **Pérdida o no disponibilidad de documentos físicos.** La factura original solo llega después del pago y los documentos se acumulan hasta el envío trimestral de la valija a Caracas; el incumplimiento en el archivo y disponibilidad en la nube es sancionable. Impacto: Medio. Probabilidad: Media. `[Ev: AFJ-1.7, AFJ-1.13, AFJ-1.14 · Norma: resguardo de soportes fiscales]`
6. **Concentración operativa en un único analista.** El puesto absorbe tareas de conciliación, supervisión de errores ajenos, control de inventario de oficina, llaves y equipos sin respaldo dedicado; la ausencia o saturación del analista frena el cierre del ciclo de compra y el cierre fiscal. Impacto: Medio. Probabilidad: Media. `[Ev: AFJ-1.10, AFJ-1.17, AFJ-7.6, AFJ-7.9 · ISO: 9001:2015 §7.1.2]`
7. **Diferencial cambiario por demora en obtener factura y ejecutar pago.** Los retrasos del proveedor en emitir la factura y de la autorización de pago exponen el monto disponible al diferencial cambiario en un entorno de doble moneda. Impacto: Medio. Probabilidad: Media. `[Ev: AFJ-1.4, AFJ-1.7 · Norma: doble moneda / tasa BCV]`

---

## Conexiones con otros departamentos

| Departamento | Qué necesitan de ellos | Qué les entregan | Medio | Estado |
| --- | --- | --- | --- | --- |
| Compras | Pedido montado, recepcionado y validado; orden de compra previa | Reporte de incidencias y errores de pedido; solicitud de pedidos excepcionales | Odoo, WhatsApp, correo | Operativo con fricción (errores arrastrados, pedidos sin orden) |
| Finanzas (Gerencia Adm. y Finanzas) | Aprobación de pago, comprobante de pago, asiento de cierre de anticipos, priorización de CxP | Factura registrada lista para pago, reporte diario de CxP, libro de compras, reporte de anticipos | Odoo, WhatsApp (grupo de pago), nube, reunión | Operativo, dependencia fuerte |
| Gerencia General | Autorización de pago, instrucciones de prioridad y disponibilidad, autorización de órdenes de salida | Información de obligaciones de pago, informes de novedades, órdenes de salida | Verbal/audio, correo, WhatsApp | Operativo |
| Almacén | Recepción física, firmas y sellos, entrega de guías y documentos a Administración | Supervisión de recepción, validación de respaldo documental | Odoo, presencial, documento físico | Operativo, mejorado |
| Proveedores | Emisión y entrega de factura fiscal, guía SUNAGRO, reconocimiento de saldos/anticipos | Comprobantes de pago, certificados de retención, solicitudes de factura | WhatsApp, correo, impreso | Operativo con fricción (demoras, tasa, facturas en tránsito) |
| Talento Humano | Material de orientación de procesos, gestión de casos de personal | Registro de dotaciones entregadas, informes de eventualidades con trabajadores | Correo, registro físico | Operativo |
| Tecnología / Electrónica | Reparación de equipos | Coordinación y documentación de entrega/devolución de equipos dañados | Cuaderno físico de minutas | Operativo, asignación cuestionada |
| Administración Caracas | Resguardo central de documentos físicos | Valija de documentos del período | Mensajería física, correo | Operativo (trimestral, se prefiere mensual) |

---

## Herramientas y sistemas actuales

| Herramienta | Tareas principales | Observaciones |
| --- | --- | --- |
| Odoo | Validación/registro de facturas, importación de pedidos, retenciones, conciliación, anticipos, libro de compras, actividades, recepción contable | Sistema central; el módulo de Compras contiene pedidos abiertos "basura" que obligan a soporte manual paralelo |
| Excel en la nube (Microsoft) | Relación y totalización de cuentas por pagar, marcado de facturas autorizadas, servicios fijos mensuales | Soporte paralelo a Odoo; Gerencia General insatisfecha pero sin alternativa actual |
| Correo / nube corporativa (Microsoft Outlook) | Archivo de conciliaciones y soportes, carga de facturas escaneadas, libro de compras, comunicaciones formales | Repositorio compartido con Finanzas; totalización mensual manual |
| WhatsApp | Solicitud de facturas, envío de comprobantes y certificados, gestión de CxP vencidas, reporte diario de CxP (grupo de pago), seguimiento de proveedores | Canal principal con proveedores por practicidad; sin canal formal alterno |
| Escáner | Digitalización de facturas para cierre fiscal y notas de despacho | Verificación manual de legibilidad documento a documento |
| Impresora | Emisión impresa de certificados de retención, copias | Soporte de oficina |
| Terminal POS bancario | Actualización del sistema operativo del terminal a solicitud del banco | Esporádico |
| Archivo físico | Resguardo de facturas, notas de despacho, certificados firmados, registro de dotaciones | Disponible para fiscalización y envío a Caracas; apoyo de pasantes esporádico |
| Portal SUNAGRO | Recepción de guías de traslado de mercancía | Plazo de vencimiento estricto |
| Tabla física de llaves | Resguardo de llaves originales y copias | Sin registro de control formal |

---

## Mapa de procesos del departamento

### Ciclo de factura de compra y pago
- `AFJ-1.1` — Verificación y validación del documento antes de procesarlo
- `AFJ-1.2` — Solicitud de pedidos de compras excepcionales
- `AFJ-1.3` — Verificación y validación del pedido antes de importarlo a la factura
- `AFJ-1.4` — Solicitud de facturas a proveedores (chat directo)
- `AFJ-1.5` — Registro de facturas
- `AFJ-1.7` — Solicitud de pago a Finanzas
- `AFJ-1.8` — Emisión de pagos de facturas a proveedores (envío de comprobante)
- `AFJ-1.9` — Aplicación de pago a la factura

### Conciliación, anticipos y resguardo de soportes
- `AFJ-1.10` — Conciliación de pagos y cierre de factura
- `AFJ-1.11` — Archivo de pagos por origen bancario con su comprobante en la nube
- `AFJ-1.18` — Facturación de proveedores pagados sin factura y encuadre de anticipos
- `AFJ-1.19` — Validación y aplicación/depuración de anticipos de proveedores

### Cierre fiscal quincenal (contribuyente especial)
- `AFJ-1.6` — Recepción de guías SUNAGRO SICA
- `AFJ-1.12` — Escaneo e identificación de documentos para el cierre fiscal
- `AFJ-1.13` — Archivo y resguardo de documentos físicos procesados
- `AFJ-1.14` — Organizar, embalar y enviar valija a administración Caracas
- `AFJ-2.1` — Informar el cese de registro de facturas e iniciar el descargue del libro
- `AFJ-2.2` — Verificación en 1era revisión de documentos a declarar
- `AFJ-2.3` — Verificación y conteo de documentos archivados Tucacas/Caracas
- `AFJ-2.4` — Seguimiento de documentos en tránsito en manos de proveedores
- `AFJ-2.5` — Validar el cierre total de las facturas a declarar
- `AFJ-2.6` — Revisión y validación de retenciones IVA/ISLR del período
- `AFJ-2.7` — Enumeración del libro de compras en la nube
- `AFJ-3.11` — Emisión y archivo de certificados de retención

### Cuentas por pagar y relación con proveedores
- `AFJ-3.1` — Verificación de pedidos de proveedores con ventas a crédito
- `AFJ-3.2` — Organizar manualmente los pedidos para totalizar en archivo
- `AFJ-3.3` — Reporte diario de actualización de cuentas por pagar
- `AFJ-3.4` — Marcar facturas pagadas/pendientes con tutoría de Gerencia de Finanzas
- `AFJ-3.5` — Validación de cuentas por pagar vencidas en plazos de crédito
- `AFJ-3.6` — Registro y archivo de notas de despacho de cuentas por pagar
- `AFJ-3.7` — Supervisión de pedidos recibidos en Almacén con respaldo documental
- `AFJ-3.8` — Comunicación con proveedores sobre pagos, solvencias y comprobantes
- `AFJ-3.9` — Actualización manual de CxP de proveedores con factura directa
- `AFJ-3.10` — Inclusión manual de servicios mensuales (CORPOELEC/TELMACA/seguridad)

### Reporte y seguimiento de errores
- `AFJ-1.15` — Reportar novedades de facturas/pedidos que ameriten corrección
- `AFJ-1.16` — Asignación de actividades en Odoo por información o error
- `AFJ-1.17` — Seguimiento y cierre de facturas/pedidos con error reportados

### Funciones operativas de apoyo
- `AFJ-7.1` — Atención a proveedores en despachos (agua, gas, Internet)
- `AFJ-7.2` — Supervisión de recepción de pedidos de gran envergadura
- `AFJ-7.3` — Órdenes de entrada y salida de productos, mercancía, artículos
- `AFJ-7.4` — Atención y asesoramiento al personal y terceros en procesos
- `AFJ-7.5` — Recepción de mercancías/equipos no almacenables en administración
- `AFJ-7.6` — Resguardo de llaves en la oficina de administración
- `AFJ-7.7` — Resguardo de material y equipo asignado por Gerencia General
- `AFJ-7.8` — Entrega de equipos dañados al Departamento de Tecnología
- `AFJ-7.9` — Apoyo en la realización de inventarios generales o departamentales
- `AFJ-7.10` — Distribución enlistada de uniformes, materiales y equipos

### Soporte administrativo y documental
- `AFJ-8.1` — Realizar oficios, requisiciones, inventarios y listas de personal
- `AFJ-8.2` — Operaciones de soporte administrativo (copias, sello, POS, equipos)
- `AFJ-8.3` — Informar sobre eventualidades por los distintos medios
