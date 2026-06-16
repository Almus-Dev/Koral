---
proyecto: Koral Morrocoy (Hotel)
departamento: Compras y Almacén
codigo_departamento: COM
documento: RX — Radiografía del Proceso
estado: Borrador — pendiente firma del dueño del proceso
fecha_publicacion: 2026-06-16
fuente_as_is: Output/Compras/AS-IS Compras y Almacen.md
---

# RX — Compras y Almacén

## Resumen ejecutivo

El departamento de Compras y Almacén abastece la operación del hotel mediante dos áreas encadenadas: Compras, que registra proveedores y productos, compara precios, gestiona documentos soporte y acuerdos marco, y cierra pedidos quincenalmente; y Almacén, que cuenta existencias, requisa reposiciones, recibe mercancía, la valida contra pedido y factura, la ubica y la despacha a los departamentos internos. La operación se apoya principalmente en Odoo (registro de proveedores, productos, pedidos, recepciones y salidas de inventario), complementado con WhatsApp como canal de coordinación entre almacén y compras, correo electrónico para gestión de reembolsos, y hojas físicas para el conteo y la aprobación de pedidos. La tensión principal es doble: el inventario de Odoo no refleja la realidad física desde 2024 y parte de 2025, lo que obliga a contar exclusivamente en físico, y la mayoría de las compras se transcriben por indicación directa de Gerencia General sin comparación de precios, frecuentemente solicitadas en fin de semana. El control documental y la validación cruzada en recepción están razonablemente estructurados, pero conviven con datos maestros en reclasificación y sin lista oficial de criterios.

---

## Indicadores del estado actual

| Indicador | Valor | Notas |
| --- | --- | --- |
| Tareas identificadas | 20 | 7 en Compras (1.1, 1.2, 1.3, 1.4, 2, 3, 4) y 13 en Almacén (1.1–1.13) |
| Tareas con dependencia externa | 9 | Gerencia General aprueba/indica compras (Compras 1.3, 3, 4; Almacén 1.1, 1.3, 1.4, 1.5, 1.13); Administración procesa retenciones/pago/factura (Compras 1.4; Almacén 1.8); Contraloría exige corrección de cuentas (Compras 1.1) |
| Sistemas y herramientas en uso | 4 | Odoo, WhatsApp, correo electrónico, hojas físicas |
| Tareas con respaldo definido en sistema (Odoo) | 13 (65%) | Compras 1.1, 1.2, 1.3, 1.4, 2, 4; Almacén 1.3, 1.6, 1.7, 1.8, 1.9, 1.11; recepción/salidas registradas en Odoo |
| Tareas que operan fuera de Odoo (físico/WhatsApp/correo) | 7 (35%) | Almacén 1.1, 1.2, 1.4, 1.5, 1.10, 1.12, 1.13; Compras 3 (reembolsos por correo) |
| Tareas con campos "Pendiente validar" | 12 | Compras 1.3, 1.4, 2, 3, 4; Almacén 1.2, 1.4, 1.5, 1.6, 1.8, 1.9, 1.10, 1.11, 1.12 |
| Análisis de precio efectivo | ~10% de las compras | El 90% se transcribe por indicación de Gerencia (Compras 1.3) |

---

## Análisis de la operación actual

### Fortalezas

1. **Recepción con validación cruzada estructurada.** El almacén compara la mercancía física contra el pedido en Odoo y contra el documento del proveedor (factura o nota de entrega), corrige el pedido en Odoo antes de confirmar la recepción y solo entonces Administración factura, evitando devoluciones complejas posteriores. `[Ev: COM-Alm-1.6, COM-Alm-1.8, COM-Alm-1.9 · ISO: 9001:2015 §8.4]`
2. **Centralización de solicitudes en almacén.** Las requisiciones de los departamentos internos pasan por el almacén, que valida existencia antes de generar orden de compra, eliminando los pedidos dispersos que antes llegaban directamente a Compras y generaban duplicidad. `[Ev: COM-Alm-1.3, COM-Alm-1.11 · ISO: 9001:2015 §4.4]`
3. **Despacho interno contra requisición escrita.** La salida de mercancía a los departamentos exige requisición por escrito y se registra como salida de inventario en Odoo, dando respaldo documental al movimiento. `[Ev: COM-Alm-1.11 · ISO: 9001:2015 §7.5.3]`
4. **Acuerdos marco para proveedores recurrentes.** Las condiciones y precios fijos de proveedores constantes se configuran en Odoo, permitiendo generar pedidos recurrentes de forma rápida sin renegociar cada vez. `[Ev: COM-4 · ISO: 9001:2015 §8.4]`
5. **Cierre quincenal de pedidos con informe al tesorero.** El estado de los pedidos (cerrados, por facturar, por recibir) se revisa al cierre de cada quincena cruzando los módulos de Compras e Inventario, y se entrega informe al tesorero. `[Ev: COM-2 · ISO: 9001:2015 §9.1]`

### Áreas de mejora

1. **Inventario en sistema desalineado de la realidad física.** Odoo contiene registros desde 2024 y parte de 2025 que no reflejan el inventario físico real; el almacenista no puede validarlos y realiza el conteo exclusivamente en físico hasta una toma física formal. La cifra de existencias en sistema no es confiable para reponer ni para despachar. Severidad: Alto (compromete la trazabilidad de inventario y la base sobre la que se decide comprar). `[Ev: COM-Alm-1.1, COM-Alm-1.2, COM-1.2 · ISO: 9001:2015 §7.5.3]`
2. **Compras por transcripción sin comparación de precios.** Solo cerca del 10% de las compras pasa por análisis de precio; el 90% restante se transcribe según la indicación de Gerencia General sobre a qué proveedor comprar, sin presupuesto comparativo. Severidad: Alto (impacto monetario recurrente sobre el gasto de compra). `[Ev: COM-1.3 · ISO: 9001:2015 §8.4]`
3. **Pedidos en fin de semana sin tiempo de gestión.** Gerencia General solicita compras los sábados/fines de semana, lo que impide comparar precios y obliga al almacenista o a la coordinadora de compras a atender en días libres. Severidad: Medio (costo operativo recurrente e imposibilidad práctica de comparar precios). `[Ev: COM-1.3, COM-Alm-1.7, COM-Alm-1.13 · ISO: 9001:2015 §8.4]`
4. **Datos maestros de producto en reclasificación sin criterio oficial.** No existe lista oficial aprobada por Administración y Contabilidad sobre qué productos son almacenables o consumibles; el criterio depende de interpretaciones por área y la base se está reclasificando con productos generales y atribuciones. Severidad: Medio (afecta consistencia contable y de inventario de forma recurrente). `[Ev: COM-1.2 · ISO: 9001:2015 §7.5.3]`
5. **Registro temporal de proveedores con datos bancarios no conformes.** Proveedores jurídicos se registran con cuentas personales y se aceptan pagos móviles sin cuenta completa, situación que el AS-IS marca como no conforme al criterio de la empresa y que Contraloría exige corregir; complica además las conciliaciones de Administración. Severidad: Medio (riesgo de control interno señalado por Contraloría, con efecto en conciliaciones). `[Ev: COM-1.1 · ISO: 9001:2015 §8.7]`
6. **Seguimiento de reembolsos sin mecanismo formal.** La recuperación de retenciones de IVA/ISLR ante proveedores que exigen pago completo se gestiona solo por correo con insistencia manual, sin mecanismo formal de seguimiento; el AS-IS deja pendiente validar si el proceso se registra en Odoo. Severidad: Medio (fondos de la empresa expuestos a demora o pérdida, sin control sistémico). `[Ev: COM-3 · ISO: 9001:2015 §8.4]`
7. **Conteo y aprobación de pedidos en hoja física fuera del sistema.** El conteo semanal de víveres, la lista de reposición y la aprobación de Gerencia se llevan en papel y se comunican por WhatsApp, sin registro en Odoo del flujo de requisición-aprobación. Severidad: Medio (pérdida de trazabilidad del ciclo de reposición y dependencia de canales informales). `[Ev: COM-Alm-1.1, COM-Alm-1.2, COM-Alm-1.4, COM-Alm-1.5, COM-Alm-1.13 · ISO: 9001:2015 §7.5.3]`
8. **Recepciones de pedidos no generados por el almacenista dependientes de aviso informal.** Cuando un pedido se genera sin participación del almacenista, su verificación previa depende de que Compras lo notifique por WhatsApp; el AS-IS deja pendiente qué ocurre si la notificación no llega. Severidad: Bajo (ineficiencia y exposición puntual a recepciones no anticipadas). `[Ev: COM-Alm-1.6 · ISO: 9001:2015 §8.4]`
9. **Ubicaciones de almacén sin parametrizar en sistema.** La mercancía se ubica físicamente por tipo de producto, pero Odoo opera con un almacén general único sin ubicaciones específicas configuradas. Severidad: Bajo (ineficiencia en localización; sin impacto monetario directo registrado). `[Ev: COM-Alm-1.10 · ISO: 9001:2015 §7.5.3]`

### Oportunidades (acotadas a Odoo)

1. **Reglas de reabastecimiento sobre stock mínimo.** El conteo manual frente a un stock mínimo definido por Gerencia podría apoyarse en reglas de reposición automática que Odoo gestiona de forma nativa. `[Ev: COM-Alm-1.1, COM-Alm-1.2 · Odoo: Reglas de reabastecimiento / punto de pedido — Inventory]`
2. **Solicitudes de presupuesto y comparación de precios en sistema.** El análisis de precios que hoy ocurre en ~10% de los casos podría centralizarse mediante peticiones de presupuesto a múltiples proveedores. `[Ev: COM-1.3 · Odoo: Solicitudes de presupuesto / RFQ — Purchase]`
3. **Requisiciones internas estructuradas.** El flujo de solicitudes de departamentos hacia almacén, hoy por escrito y WhatsApp, podría registrarse como solicitudes internas trazables. `[Ev: COM-Alm-1.3, COM-Alm-1.11 · Odoo: Solicitudes de compra / aprobación — Purchase]`
4. **Ubicaciones internas de almacén.** El esquema físico por tipo de producto podría reflejarse mediante ubicaciones dentro del almacén en el sistema, hoy operado como almacén general único. `[Ev: COM-Alm-1.10 · Odoo: Ubicaciones de almacén — Inventory]`
5. **Toma física y ajuste de inventario.** La desalineación entre físico y sistema desde 2024–2025 podría resolverse mediante la funcionalidad de ajustes/recuento de inventario. `[Ev: COM-Alm-1.1, COM-1.2 · Odoo: Ajustes de inventario / recuento físico — Inventory]`
6. **Variantes de producto por atributos.** El esquema de producto general con atribuciones (marca, color, presentación) que ya se busca aplicar corresponde a la gestión de variantes por atributos. `[Ev: COM-1.2 · Odoo: Variantes de producto por atributos — Inventory/Sales]`
7. **Flujo de aprobación de compras.** La aprobación de Gerencia que hoy se da en reunión presencial y papel podría operar como aprobación de órdenes dentro del sistema. `[Ev: COM-Alm-1.4 · Odoo: Aprobación de órdenes de compra — Purchase]`

### Riesgos si se mantiene

1. **Decisiones de reposición sobre datos de inventario no confiables.** Mantener el inventario de sistema desalineado obliga a depender del conteo físico y expone a quiebres de stock o sobrecompra. Impacto: Alto. Probabilidad: Alta. `[Ev: COM-Alm-1.1, COM-Alm-1.2, COM-1.2 · ISO: 9001:2015 §7.5.3]`
2. **Sobrecosto sostenido por ausencia de comparación de precios.** Transcribir el 90% de las compras sin presupuesto comparativo mantiene el gasto sin optimización. Impacto: Alto. Probabilidad: Alta. `[Ev: COM-1.3 · ISO: 9001:2015 §8.4]`
3. **Pérdida o demora de fondos por reembolsos sin seguimiento formal.** La recuperación de retenciones depende de insistencia manual por correo; sin mecanismo formal, los fondos de la empresa quedan expuestos a no recuperarse. Impacto: Medio. Probabilidad: Media. `[Ev: COM-3 · ISO: 9001:2015 §8.4]`
4. **Observación de Contraloría sin resolver por datos bancarios no conformes.** Mantener proveedores jurídicos con cuentas personales y pagos móviles deja abierta la no conformidad señalada por Contraloría y complica las conciliaciones. Impacto: Medio. Probabilidad: Media. `[Ev: COM-1.1 · ISO: 9001:2015 §8.7]`
5. **Interrupciones operativas por pedidos de fin de semana.** Mantener la solicitud de compras los fines de semana sostiene la carga en días libres y la imposibilidad de comparar precios. Impacto: Medio. Probabilidad: Alta. `[Ev: COM-1.3, COM-Alm-1.7, COM-Alm-1.13 · ISO: 9001:2015 §8.4]`
6. **Recepciones no anticipadas por dependencia de avisos informales.** Mantener la notificación por WhatsApp como único canal para pedidos no generados por el almacenista expone a recepciones sin verificación previa cuando el aviso falla. Impacto: Bajo. Probabilidad: Media. `[Ev: COM-Alm-1.6 · ISO: 9001:2015 §8.4]`

---

## Conexiones con otros departamentos

| Departamento | Qué necesitan de ellos | Qué les entregan | Medio | Estado |
| --- | --- | --- | --- | --- |
| Gerencia General | Aprobación de compras, indicación de proveedor, ajuste de cantidades, stock mínimo de referencia, negociación de acuerdos marco | Listas de pedidos a aprobar, presentación de reposiciones | Reunión presencial, hoja física, WhatsApp | Activo; aprobación frecuente en fin de semana |
| Administración | Procesamiento de retenciones, pago, facturación sobre pedido corregido, coordinación de pagos a crédito | Documentos soporte anexados en Odoo (factura/nota de entrega), pedido corregido en recepción | Odoo | Activo; afectado por datos bancarios no conformes y reembolsos |
| Contraloría | Exigencia de corregir cuentas bancarias de proveedores | Registro de proveedores (en corrección) | No especificado en el AS-IS | Activo; observación pendiente de corrección |
| Tesorería | — | Informe quincenal del estado de pedidos | No especificado en el AS-IS | Activo; entrega quincenal |
| Departamentos internos (secretaría, mantenimiento, IB, snack, otros) | Requisiciones escritas de suministros | Despacho de productos con salida registrada en Odoo; gestión de compra si no hay existencia | Solicitud por escrito | Activo; centralizado en almacén |
| Proveedores | RIF, datos bancarios, factura/nota de entrega, entrega de mercancía, reembolso de retenciones | Pago, comprobante de retención, indicación de cuenta para reembolso | WhatsApp, correo electrónico, Odoo | Activo |

---

## Herramientas y sistemas actuales

| Herramienta | Tareas principales | Observaciones |
| --- | --- | --- |
| Odoo | Registro de proveedores y productos; comparación de precios; documentos de compra; cierre quincenal; acuerdos marco; verificación, recepción, entrada y salida de inventario | Sistema central; inventario desalineado del físico desde 2024–2025; almacén general único sin ubicaciones configuradas `[Ev: COM-1.1, COM-1.2, COM-1.3, COM-2, COM-4, COM-Alm-1.3, COM-Alm-1.6, COM-Alm-1.7, COM-Alm-1.8, COM-Alm-1.9, COM-Alm-1.10, COM-Alm-1.11]` |
| WhatsApp | Envío de listas de reposición, notificación de entregas, aviso de incongruencias, coordinación de pedidos de fin de semana, comunicación con proveedor de acuerdo marco | Canal informal entre almacén, compras, gerencia y proveedores `[Ev: COM-4, COM-Alm-1.2, COM-Alm-1.5, COM-Alm-1.6, COM-Alm-1.7, COM-Alm-1.8, COM-Alm-1.13]` |
| Correo electrónico | Envío de factura y comprobante de pago al proveedor; gestión y seguimiento de reembolsos de IVA/ISLR | Único medio formal para reembolsos; sin seguimiento sistémico `[Ev: COM-3]` |
| Hoja física | Conteo de víveres, lista de reposición, lista de pedidos para reunión de aprobación y para fin de semana | Sustituye al inventario de sistema mientras no se realiza la toma física `[Ev: COM-Alm-1.1, COM-Alm-1.4, COM-Alm-1.13]` |

---

## Mapa de procesos del departamento

### Datos maestros (Compras)
- `COM-1.1` — Creación de proveedores nuevos
- `COM-1.2` — Creación de productos

### Abastecimiento y negociación (Compras)
- `COM-1.3` — Comparación de precios y selección de proveedor
- `COM-1.4` — Solicitud y gestión de documentos al proveedor según condición de pago
- `COM-4` — Gestión de acuerdos marco con proveedores recurrentes

### Control y cierre (Compras)
- `COM-2` — Revisión y cierre quincenal de pedidos
- `COM-3` — Gestión de reembolsos de IVA e ISLR con proveedores

### Planificación y requisición (Almacén)
- `COM-Alm-1.1` — Conteo físico de mercancías para determinar pedidos semanales
- `COM-Alm-1.2` — Planificación y requisición de reposición de productos
- `COM-Alm-1.3` — Atención a solicitudes de suministros de departamentos internos
- `COM-Alm-1.4` — Aprobación de pedidos por Gerencia General
- `COM-Alm-1.5` — Envío de pedidos aprobados al departamento de Compras
- `COM-Alm-1.13` — Planificación y coordinación de pedidos para fines de semana

### Recepción y validación (Almacén)
- `COM-Alm-1.6` — Verificación de pedidos en tránsito
- `COM-Alm-1.7` — Recepción física y en sistema de mercancía de proveedores
- `COM-Alm-1.8` — Validación cruzada entre mercancía recibida, pedido y documentos del proveedor
- `COM-Alm-1.9` — Confirmación y registro de entrada de mercancía en el sistema

### Almacenamiento y despacho (Almacén)
- `COM-Alm-1.10` — Ubicación física de mercancía recepcionada en el almacén
- `COM-Alm-1.11` — Despacho de mercancía a departamentos internos contra requisición escrita
- `COM-Alm-1.12` — Mantenimiento de limpieza del almacén
