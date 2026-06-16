---
proyecto: Koral Morrocoy (Hotel)
departamento: AABB Caja
codigo_departamento: CAJ
documento: RX — Radiografía del Proceso
estado: Borrador — pendiente firma del dueño del proceso
fecha_publicacion: 2026-06-16
fuente_as_is: Output/AABB/AS-IS AABB Caja.md
---

# RX — AABB Caja

## Resumen ejecutivo

Caja de Alimentos y Bebidas es el punto operativo que registra, comanda, controla y traspasa a recepción todo el consumo de huéspedes en restaurante, piscina y muelle, además de administrar un sub-almacén propio (neveras, vitrina, almacén de caja) y el servicio de préstamo de cavas. Opera en turnos de mañana y tarde con un equipo de cajeros que también asumen tareas de inventario, requisición, limpieza y atención directa al huésped. Su sistema de venta es Poster (POS), enlazado con el sistema de recepción Clover para el traslado del cargo a la cuenta de la habitación. La tensión principal es la fragilidad técnica del flujo: la conectividad intermitente y la impresora de cocina fuera de servicio empujan la operación hacia mecanismos manuales de contingencia (papel, WhatsApp, radio), y los controles centrales —cavas, inventario cíclico, listado de huéspedes— se sostienen en registros físicos sin respaldo en sistema.

---

## Indicadores del estado actual

| Indicador | Valor | Notas |
| --- | --- | --- |
| Tareas identificadas | 43 | Área 1 Desayunos (19), Área 2 Cava (8), Área 3 Requisiciones (5), Área 4 Almuerzos/Snacks/Cenas (11) |
| Tareas con dependencia externa | 13 | Envío/entrega a recepción, requisición a almacén general, lista de huéspedes desde recepción, firma de gerencia |
| Sistemas y herramientas en uso | 11 | Poster, Clover, PC de caja, tablet de mesonero, impresora de caja, Internet, radio, WhatsApp, registros físicos, alarma, insumos |
| Tareas con respaldo definido | 39 de 43 (91%) | 4 tareas del Área 4 conservan campos "Pendiente validar" (4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4.10 con vacíos parciales en "ideal" / contingencia) |
| Tareas que dependen de conectividad a Internet | 8 | 1.2, 1.9, 1.10, 1.11, 1.13, 4.2, 4.4, 4.7 |
| Controles soportados solo en papel/manual | 9 | Listas de huéspedes, hojas de inventario, ficha de reposición, listado de cavas, comanderas, formato de requisición |

---

## Análisis de la operación actual

### Fortalezas

1. **Doble respaldo del consumo (digital + físico).** Cada consumo de huésped se registra en Poster y se envía digitalmente a Clover, y además se conserva la comanda firmada físicamente entregada a recepción. La redundancia da soporte ante fallas de un canal. `[Ev: CAJ-1.13, CAJ-1.14 · ISO: 9001:2015 §7.5.3]`
2. **Confirmación del pedido con el mesonero antes de imprimir.** En el turno de tarde se valida con el mesonero que la comanda registrada coincide con lo solicitado antes de enviarla a preparación, lo que reduce errores de traspaso manual. `[Ev: CAJ-4.3 · ISO: 9001:2015 §8.5.1]`
3. **Procedimientos de contingencia explícitos.** Ante caída de Internet, falla de impresora o de Poster, el equipo opera con notas manuales, cuadernos sellados, listas de contingencia y avisos por radio/WhatsApp, manteniendo la continuidad del servicio. `[Ev: CAJ-1.10, CAJ-1.13, CAJ-2.4 · ISO: 9001:2015 §8.7]`
4. **Control activo de check-out para no perder cargos.** Caja monitorea los check-outs en todo momento y prioriza el envío de comandas pendientes antes de la salida del huésped, evitando consumos no cobrados. `[Ev: CAJ-1.18, CAJ-1.14 · ISO: 9001:2015 §8.5.1]`
5. **Trazabilidad firmada de movimientos de sub-almacén.** La reposición de neveras y vitrina se registra y firma en ficha estandarizada con fecha, hora y productos, y el retiro de almacén general circula con firma de autorización gerencial y de "Recibido Conforme". `[Ev: CAJ-1.6, CAJ-3.4, CAJ-3.5 · ISO: 9001:2015 §7.5.3]`

### Áreas de mejora

1. **Dependencia crítica de la conectividad a Internet.** Al menos 8 tareas del flujo de comandas dejan de procesarse cuando el Internet falla o es intermitente; el equipo lo describe como problema recurrente que vuelve manual y engorroso un flujo antes automático. Severidad: Alto. `[Ev: CAJ-1.2, CAJ-1.9, CAJ-1.10, CAJ-1.13, CAJ-4.2, CAJ-4.7 · ISO: 9001:2015 §7.1.3]`
2. **Impresión de comandas centralizada en caja por impresora de cocina dañada.** Caja imprime todas las comandas de cocina y barra porque la impresora de cocina está fuera de servicio; el flujo directo tablet-a-cocina existía antes y dejó de operar, añadiendo carga e intermediación a caja. Severidad: Alto. `[Ev: CAJ-1.10, CAJ-4.4, CAJ-1.9 · ISO: 9001:2015 §7.1.3]`
3. **Inventario cíclico de sub-almacén llevado en papel.** Las verificaciones de nevera, vitrina y almacén de caja (tres veces al día) se registran en hoja manual sin cálculo automático de reposición ni respaldo en sistema. Severidad: Medio. `[Ev: CAJ-1.3, CAJ-1.4, CAJ-1.16, CAJ-3.1, CAJ-4.8 · ISO: 9001:2015 §7.1.5]`
4. **Control de cavas sin sistema y sin identificación unívoca.** El préstamo de cavas se gestiona en un listado manual exclusivo de caja, sin número grabado por cava ni registro digital; el AS-IS señala que no se lleva orden ni conteo y que el huésped podría devolver una distinta sin que se note. Severidad: Medio. `[Ev: CAJ-2.1, CAJ-2.3, CAJ-2.7 · ISO: 9001:2015 §7.5.3]`
5. **Lista de huéspedes en doble fuente con discrepancia.** La cantidad de huéspedes que reporta el grupo de WhatsApp difiere de la del sistema de recepción, obligando al cajero a desplazarse a recepción para confirmar; el conteo de desayunos por habitación se sostiene en lista impresa marcada a mano. Severidad: Medio. `[Ev: CAJ-1.0, CAJ-1.7, CAJ-1.15 · ISO: 9001:2015 §7.5.3]`
6. **Requisición a almacén general en formato físico con re-trabajo por errores.** El formato manual se anula y rehace completo ante tachaduras, enmiendas o corrector, y circula físicamente para recabar firma de autorización, generando traslados y reprocesos. Severidad: Medio. `[Ev: CAJ-3.2, CAJ-3.3, CAJ-3.4, CAJ-3.5 · ISO: 9001:2015 §7.5.3]`
7. **Carga operativa ajena al rol de caja.** El cajero asume tareas no transaccionales (encendido de cornetas, limpieza del área, alimentación de las guacamayas a las 4:30 PM con alarma programada) que compiten con la atención y el control de consumos en horas pico. Severidad: Bajo. `[Ev: CAJ-1.1, CAJ-1.17, CAJ-4.9, CAJ-4.10]`
8. **Asignación de mesa por cartelitos físicos que se agotan en alta ocupación.** En ocupación del 100% se acaban los números de mesa y el personal improvisa anotando en hojas o usando el número de habitación, debilitando el control de entrega de pedidos preparados al momento. Severidad: Bajo. `[Ev: CAJ-1.8 · ISO: 9001:2015 §8.5.1]`

### Oportunidades (acotadas a Odoo)

1. **Registro de comandas y consumo en POS nativo.** La creación de comandas, asignación de mesa/habitación, ítems y cierre de cuenta que hoy vive en Poster es una capacidad nativa del punto de venta de Odoo. `[Ev: CAJ-1.9, CAJ-4.2, CAJ-2.4 · Odoo: Gestión de comandas y mesas — Point of Sale · Norma: IVA s/consumos adicionales]`
2. **Impresión por estación de preparación (cocina/barra) desde el POS.** El enrutamiento de comandas a impresoras por área de preparación es una capacidad del POS que podría sustituir la centralización forzada en caja. `[Ev: CAJ-1.10, CAJ-4.4 · Odoo: Impresoras de pedido por categoría — Point of Sale]`
3. **Inventario integrado al punto de venta con descuento automático.** El control de nevera, vitrina y almacén de caja, hoy en hoja manual, podría sostenerse con el inventario vinculado al POS que descuenta stock al vender y dispara reposición. `[Ev: CAJ-1.3, CAJ-1.4, CAJ-1.16, CAJ-4.8 · Odoo: Inventario vinculado al POS — Point of Sale / Inventory]`
4. **Requisición interna entre almacén de caja y almacén general como transferencia de inventario.** El movimiento entre sub-almacén de caja y almacén general puede modelarse como transferencia interna con autorización, en lugar de formato físico que se rehace por errores. `[Ev: CAJ-3.2, CAJ-3.3, CAJ-3.5 · Odoo: Transferencias internas y rutas — Inventory]`
5. **Cierre de caja y arqueo de turno en el POS.** El traspaso de turno y la verificación de fondo de caja que hoy se anotan en cuaderno de novedades corresponden al cierre de sesión y arqueo nativo del POS. `[Ev: CAJ-4.0 · Odoo: Cierre y arqueo de sesión — Point of Sale]`
6. **Cargo del consumo a la cuenta de la habitación.** El envío del consumo de Poster a Clover para cargar a la habitación apunta a la capacidad de facturar/diferir el cargo a un cliente o folio en el POS. `[Ev: CAJ-1.13, CAJ-2.6, CAJ-4.7 · Odoo: Facturación a cliente desde POS — Point of Sale · Norma: IVA / IGTF s/medio de pago]`
7. **Identificación de productos por código de barras/QR en venta y reposición.** El escaneo de snacks en venta y de productos al retirar del almacén de caja, hoy inexistente, es una capacidad de captura por código de barras del POS y el inventario. `[Ev: CAJ-1.4, CAJ-1.5, CAJ-1.6 · Odoo: Lectura de código de barras — Point of Sale / Inventory]`

### Riesgos si se mantiene

1. **Consumos no cobrados por check-out anticipado o falla de envío.** Si recepción no avisa el check-out a tiempo o el envío digital a Clover falla, una comanda puede quedar sin trasladar y el huésped sale sin que se cargue su consumo. Impacto: Alto (pérdida de ingreso). Probabilidad: Media. `[Ev: CAJ-1.14, CAJ-1.18, CAJ-4.7 · ISO: 9001:2015 §8.5.1 · Norma: IVA s/consumo no facturado]`
2. **Interrupción del servicio de comandas por caída de Internet o impresora.** Con el flujo dependiente de conectividad y de la impresora de caja única, una falla detiene la impresión y obliga a operación manual completa en horas pico. Impacto: Alto (parálisis operativa). Probabilidad: Alta. `[Ev: CAJ-1.2, CAJ-1.10, CAJ-4.4 · ISO: 9001:2015 §7.1.3]`
3. **Pérdida o discrepancia de soportes físicos firmados.** Comandas, fichas y listados en papel pueden traspapelarse o atascarse en la impresora en el pico, comprometiendo el respaldo del consumo y del control interno. Impacto: Medio. Probabilidad: Media. `[Ev: CAJ-1.11, CAJ-1.12, CAJ-1.6 · ISO: 9001:2015 §7.5.3]`
4. **Descuadre o extravío de cavas prestadas.** Sin identificación unívoca ni registro en sistema, una cava puede no devolverse o devolverse cambiada sin detección, y a la hora de la cena se activa un barrido reactivo de búsqueda. Impacto: Medio (pérdida de activo). Probabilidad: Media. `[Ev: CAJ-2.1, CAJ-2.3, CAJ-2.7 · ISO: 9001:2015 §7.1.3]`
5. **Quiebres de stock en sub-almacén por inventario manual.** El control cíclico en papel sin cálculo de reposición puede no anticipar faltantes, dejando nevera o vitrina sin producto durante el servicio. Impacto: Medio. Probabilidad: Media. `[Ev: CAJ-1.3, CAJ-1.16, CAJ-3.1 · ISO: 9001:2015 §7.1.5]`
6. **Cobertura de caja interrumpida en el relevo de turno.** Si el cajero entrante no llega a las 3:00 PM, el saliente no puede abandonar el puesto y la operación queda en espera de instrucciones de gerencia. Impacto: Medio. Probabilidad: Baja. `[Ev: CAJ-4.0]`

---

## Conexiones con otros departamentos

| Departamento | Qué necesitan de ellos | Qué les entregan | Medio | Estado |
| --- | --- | --- | --- | --- |
| Recepción | Lista de huéspedes del día siguiente; aviso de check-outs; carga de cargos en Clover | Consumo digital por habitación; comandas firmadas físicas; avisos de contingencia | Poster→Clover, WhatsApp, radio, entrega física | Operativo con fricción (discrepancia de lista, avisos tardíos de check-out) `[Ev: CAJ-1.0, CAJ-1.13, CAJ-1.14, CAJ-1.18]` |
| Cocina / Barra | Preparación de pedidos comandados | Comandas impresas desde caja (impresora de cocina dañada) | Comanda impresa entregada por mesonero | Operativo con sobrecarga en caja `[Ev: CAJ-1.10, CAJ-4.4]` |
| Mesoneros | Toma del pedido en mesa; confirmación de comanda; entrega al huésped | Comanda registrada y confirmada en Poster | Comandera física, tablet, confirmación verbal | Operativo `[Ev: CAJ-4.1, CAJ-4.3, CAJ-4.5]` |
| Almacén general | Despacho de productos solicitados | Formato de requisición; firma de "Recibido Conforme" | Formato físico de requisición | Operativo manual `[Ev: CAJ-3.2, CAJ-3.5]` |
| Gerencia (Calidad/Seguimiento, Coordinación Administración Hotel) | Firma de autorización de requisición; instrucciones en relevo | Formato de requisición completado; reporte de novedades de turno | Formato físico, radio/WhatsApp, cuaderno de novedades | Operativo con dependencia de disponibilidad de firmante `[Ev: CAJ-3.4, CAJ-4.0]` |
| Muelle | Entrega de hielo al huésped contra recibo | Recibo de hielo impreso desde Poster | Recibo físico (vale) | Operativo `[Ev: CAJ-2.8]` |
| Mantenimiento | Reparación de cornetas, impresora de cocina, conectividad | — | Reporte verbal | Pendiente / no resuelto (impresora cocina, Internet) `[Ev: CAJ-1.1, CAJ-1.10]` |

---

## Herramientas y sistemas actuales

| Herramienta | Tareas principales | Observaciones |
| --- | --- | --- |
| Poster (POS) | Crear comandas, asignar habitación/mesa, registrar ítems, generar comprobantes, enviar a recepción | Sistema operativo central de AABB; depende de Internet `[Ev: CAJ-1.9, CAJ-1.13, CAJ-4.2]` |
| Clover (recepción) | Recibe el consumo enviado desde Poster para cargo a la cuenta | Vinculado a Poster por botón de asignación de habitación `[Ev: CAJ-1.13, CAJ-4.7]` |
| PC de caja | Operar Poster e imprimir | Equipo único de caja `[Ev: CAJ-1.2, CAJ-1.9]` |
| Tablet de mesonero | Crear/enviar comanda cuando la conectividad lo permite | Uso limitado por Internet; antes enlazaba directo a cocina `[Ev: CAJ-1.9]` |
| Impresora de caja | Imprimir comandas de cocina, barra, snacks, comprobante por habitación, recibo de hielo | Centraliza impresión por impresora de cocina dañada `[Ev: CAJ-1.10, CAJ-4.4, CAJ-2.8]` |
| Internet | Procesar comandas, impresión, sincronización Poster-Clover | Intermitente; problema recurrente `[Ev: CAJ-1.2, CAJ-1.10]` |
| Radio | Comunicación con recepción (check-outs, contingencia) | `[Ev: CAJ-1.18, CAJ-1.13]` |
| WhatsApp | Recepción de lista de huéspedes; avisos de contingencia | Fuente que discrepa del sistema de recepción `[Ev: CAJ-1.0, CAJ-1.13]` |
| Registros físicos manuales | Hoja de inventario, ficha de reposición, listado de cavas, comandera, formato de requisición, cuaderno de novedades, lista de huéspedes | Núcleo de control sin respaldo en sistema `[Ev: CAJ-1.3, CAJ-1.6, CAJ-2.7, CAJ-3.3, CAJ-4.0]` |
| Alarma programada | Recordatorio de alimentación de guacamayas (4:30 PM) | `[Ev: CAJ-4.10]` |
| Cornetas / insumos de limpieza / cartelitos de mesa | Ambientación, higiene, identificación de mesa | Tareas operativas no transaccionales `[Ev: CAJ-1.1, CAJ-1.8, CAJ-1.17]` |

---

## Mapa de procesos del departamento

### Apertura y preparación de turno
- `CAJ-1.0` — Verificación de lista de huéspedes (día anterior)
- `CAJ-1.1` — Encendido de cornetas
- `CAJ-1.2` — Encendido de PC, verificación de Internet e impresora

### Gestión de comandas y consumo de huéspedes
- `CAJ-1.7` — Conteo de desayuno por habitación
- `CAJ-1.8` — Asignación de número de mesa al huésped
- `CAJ-1.9` — Creación de comanda en Poster (habitación, mesa, pedido)
- `CAJ-1.10` — Impresión de comandas para cocina y barra
- `CAJ-1.11` — Impresión de comanda general por habitación
- `CAJ-1.12` — Recolección de firma de huésped
- `CAJ-1.15` — Determinar huéspedes faltantes por comer
- `CAJ-4.1` — Recepción del pedido de huésped
- `CAJ-4.2` — Creación de comanda en Poster (habitación, nombre, pedido)
- `CAJ-4.3` — Confirmación con el mesonero
- `CAJ-4.4` — Impresión de comanda para cocina/barra/snacks
- `CAJ-4.5` — Verificación del pedido
- `CAJ-4.6` — Recolección de firma de huésped para la comanda
- `CAJ-2.8` — Impresión de recibo de hielo para huésped

### Traslado del consumo a recepción y cierre de cuenta
- `CAJ-1.13` — Envío de comandas a recepción desde Poster
- `CAJ-1.14` — Envío de comanda firmada por huésped a recepción
- `CAJ-1.18` — Verificación de día de check-out de huésped
- `CAJ-4.7` — Envío de comandas a recepción desde Poster (turno tarde)

### Servicio de préstamo de cavas
- `CAJ-2.1` — Asignación de cava para el huésped
- `CAJ-2.2` — Solicitud de firma de huésped para cava
- `CAJ-2.3` — Identificación de huésped para la cava
- `CAJ-2.4` — Recepción de pedido para cava en Poster
- `CAJ-2.5` — Recolección de firma de huésped para la comanda de cava
- `CAJ-2.6` — Envío de comanda firmada por huésped a recepción
- `CAJ-2.7` — Crear el listado de cavas por huésped

### Control de inventario y reposición de sub-almacén
- `CAJ-1.3` — Inventario cíclico para reposición de productos en la nevera
- `CAJ-1.4` — Inventario cíclico para reposición de productos en la vitrina
- `CAJ-1.5` — Reposición de productos para nevera y vitrina en el almacén de caja
- `CAJ-1.6` — Firma de ficha de reposición de productos
- `CAJ-1.16` — Verificación de inventario, nevera y vitrina
- `CAJ-4.8` — Inventario de productos (turno tarde)

### Requisición a almacén general
- `CAJ-3.1` — Inventario general
- `CAJ-3.2` — Solicitud de requisición de productos a almacén general
- `CAJ-3.3` — Llenado de formato de requisición
- `CAJ-3.4` — Solicitud de firma a Gerencia
- `CAJ-3.5` — Retiro de productos solicitados y almacenamiento en el almacén de caja

### Cierre de turno y tareas operativas del área
- `CAJ-1.16` — Verificación de inventario al cierre de desayuno
- `CAJ-1.17` — Limpieza de área de caja
- `CAJ-4.0` — Entrega de guardia de turno (3:00 PM)
- `CAJ-4.9` — Limpieza de área (turno tarde)
- `CAJ-4.10` — Alimentar a las guacamayas
