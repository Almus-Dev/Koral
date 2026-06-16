---
proyecto: Koral Morrocoy (Hotel)
departamento: AABB Cocina
codigo_departamento: COC
documento: RX — Radiografía del Proceso
estado: Borrador — pendiente firma del dueño del proceso
fecha: 2026-06-16
fuente_as_is: Output/AABB/AS-IS AABB Cocina.md
---

# RX — AABB Cocina

## Resumen ejecutivo

La cocina del hotel opera la producción de alimentos y bebidas en tres servicios diarios (desayuno incluido en hospedaje; almuerzo, snacks y cena por pedido y venta), más un comedor de personal y un área de carnicería que procesa proteínas para abastecer todos los servicios. El equipo se estructura en dos turnos (mañana 7:00 AM – 4:00 PM, encabezado por el jefe de cocina; tarde/noche 3:00 PM – 11:00 PM) con un cocinero que abre a las 5:00 AM. Operativamente la cocina depende de un flujo de papel para inventarios, requisiciones y comandas, y de WhatsApp como canal con recepción; la única integración a Odoo hoy es la recepción de servicios de agua y gas, ejecutada por Gerencia de Operaciones y no por el propio departamento. La tensión principal es la ausencia total de un control de inventario sistematizado: cada conteo de insumos, cada requisición y cada registro de proteínas procesadas se hace a mano y bajo presión de tiempo, lo que expone la producción a quiebres de stock y dificulta el control de mermas y costos de A&B.

---

## Indicadores del estado actual

| Indicador | Valor | Notas |
| --- | --- | --- |
| Tareas identificadas | 27 | 7 áreas: Desayunos (5), Almuerzo (5), Snacks (4), Requisiciones (6), Cena (4), Limpiezas (3), Carnicería (5) |
| Tareas con dependencia externa | 9 | Recepción (1.1, 1.5), Almacén General (1.3, 4.4), Compras (4.5), Gerencia de Operaciones (4.3, 4.6), Mantenimiento (6.3), caja/POS para cobro (2.4, 3.3) |
| Sistemas y herramientas en uso | 5 | WhatsApp, Odoo (parcial, vía Gerencia), POS/sistema de facturación, formato físico de requisiciones, hojas/inventario manual |
| Tareas con respaldo definido (contingencia documentada) | 24 de 27 (89%) | 24 tareas describen qué se hace cuando no salen normal; 3 lo dejan implícito o sin detalle |
| Tareas con inventario o registro manual | 7 | 1.3, 2.2, 3.1, 4.1, 4.2, 5.1, 7.4 — todas sin sistema |
| Tareas con pendientes de validación abiertos | 6 | 4.3, 4.5, 4.6, 5.1, 7.1, 7.2, 7.3, 7.4, 7.5 contienen campos marcados "Pendiente validar" |

---

## Análisis de la operación actual

### Fortalezas

1. **Flujo de producción escalonado y secuencial bien definido.** Cada servicio sigue una cadena clara: verificación de insumos → mise en place → recepción de pedido/lista → preparación → despacho, con disparadores explícitos entre tareas. Esto da continuidad operativa a lo largo del día y permite que el turno entrante reciba el área en condición de operar. `[Ev: COC-1.2, COC-1.3, COC-2.2, COC-2.3, COC-3.1, COC-3.2, COC-5.1, COC-5.2 · ISO: 9001:2015 §8.5.1]`
2. **Control de porciones y proteínas con disciplina de carnicería.** El área de carnicería ejecuta una secuencia de limpieza, pesado, embolsado y conteo de proteínas con estándares de porción y separación por tipo, lo que constituye un control de producción y de merma incipiente sobre el insumo de mayor valor. `[Ev: COC-7.1, COC-7.2, COC-7.3, COC-7.4 · ISO: 9001:2015 §8.5.1]`
3. **Protocolos de contingencia operativa interiorizados.** Casi todas las tareas describen respuestas concretas ante fallas (equipos de respaldo manuales o del bar, descongelado de emergencia, raciones de emergencia, compra local urgente, traslado de producto a cava de contingencia), lo que refleja resiliencia operativa frente a quiebres de servicio. `[Ev: COC-1.2, COC-3.2, COC-4.5, COC-7.3 · ISO: 9001:2015 §8.7]`
4. **Trazabilidad documental del flujo de requisiciones.** El formato de requisiciones lleva numeración correlativa, diferenciación por destino (huéspedes/personal) y firmas de solicitante, autorizador y entrega, lo que crea un rastro auditable de la salida de insumos del almacén. `[Ev: COC-4.2, COC-4.3, COC-4.4 · ISO: 9001:2015 §7.5.3]`
5. **Higiene y sanitización con cierre por turno.** La limpieza está formalizada por turno (mañana y tarde/noche) y por área crítica (carnicería obligatoria tras cada procesamiento), con uso de desengrasantes, desinfección de superficies de contacto y entrega del área lista para la apertura siguiente. `[Ev: COC-6.1, COC-6.2, COC-7.5 · ISO: 9001:2015 §7.1.4 · ISO: 9001:2015 §8.5.4]`

### Áreas de mejora

1. **Inventario de insumos 100% manual y bajo presión de tiempo.** La verificación de stock para cada servicio y el inventario diario del almacén de cocina se hacen por conteo físico contra un stock ideal anotado a mano, sin sistema; el equipo describe el "conteo manual bajo presión cada mañana" como punto de dolor recurrente. Severidad: Alto. `[Ev: COC-1.3, COC-2.2, COC-3.1, COC-4.1, COC-5.1 · ISO: 9001:2015 §8.5.1 · ISO: 9001:2015 §7.1.4]`
2. **Requisiciones en papel con cuello de botella en la firma de autorización.** La solicitud de insumos depende de un formato físico numerado que debe circular para recabar la firma de Gerencia de Operaciones; si el autorizador no está presente, la firma queda pendiente y se retrasa la salida de insumos, afectando la producción de la cena. Severidad: Alto. `[Ev: COC-4.2, COC-4.3 · ISO: 9001:2015 §7.5.3 · ISO: 9001:2015 §8.4.1]`
3. **Comandas en papel sin captura digital del pedido.** Almuerzo, snacks y cena dependen de comanderos físicos que el mesero traslada caminando a cocina; no hay medición de tiempos pedido-despacho y los tickets pueden mojarse o perderse. Severidad: Medio. `[Ev: COC-2.4, COC-3.3, COC-5.4 · ISO: 9001:2015 §8.5.1]`
4. **Registro de mermas y de producción de proteínas sin sistematizar.** El conteo de proteínas procesadas se registra a mano en hojas de producción y la merma se controla por revisión manual contra el peso inicial; las diferencias se escalan a Gerencia, pero no hay registro estructurado que permita seguimiento histórico de mermas. Severidad: Medio. `[Ev: COC-7.2, COC-7.4 · ISO: 9001:2015 §8.7 · ISO: 9001:2015 §8.5.1]`
5. **Recepción de insumos críticos en Odoo no la ejecuta el departamento.** La recepción de agua y gas en Odoo la realiza hoy Gerencia de Operaciones; el equipo opera el consumo pero no tiene acceso al registro de la recepción en el sistema, lo que separa la responsabilidad operativa del registro documental. Severidad: Medio. `[Ev: COC-4.6, COC-4.4 · ISO: 9001:2015 §7.5.3]`
6. **Dependencia de canal informal (WhatsApp) y listas físicas para datos de servicio.** La lista de desayunos llega por WhatsApp y se opera en papel tachando huéspedes; los ajustes por grupos sin reserva o huéspedes no anotados se resuelven verbalmente, sin registro que cierre el ciclo de planificación de producción. Severidad: Medio. `[Ev: COC-1.1, COC-1.5 · ISO: 9001:2015 §7.4 · ISO: 9001:2015 §8.5.1]`
7. **Registros de raciones de comedor de personal dispersos y manuales.** El control de raciones servidas al personal (desayuno, almuerzo, cena) se lleva en hojas y firmas separadas por servicio, sin consolidación que alimente el control de costos de A&B de forma confiable. Severidad: Bajo. `[Ev: COC-1.4, COC-2.1, COC-5.3 · ISO: 9001:2015 §8.5.1]`

### Oportunidades (acotadas a Odoo)

1. **Control de stock de insumos de cocina con niveles mínimos y alertas de reposición.** La verificación e inventario manual de insumos por servicio podría apoyarse en el seguimiento de existencias por ubicación y reglas de stock mínimo. `[Ev: COC-1.3, COC-2.2, COC-3.1, COC-4.1, COC-5.1 · Odoo: Gestión de existencias por ubicación y reglas de reordenamiento — Inventory]`
2. **Requisiciones internas entre cocina y almacén como transferencias internas.** El formato físico de requisición con autorización y entrega podría sustituirse por solicitudes y transferencias internas registradas digitalmente. `[Ev: COC-4.2, COC-4.3, COC-4.4 · Odoo: Solicitudes y transferencias internas entre almacenes — Inventory]`
3. **Aprobación de requisiciones por flujo digital.** El cuello de botella de la firma física de Gerencia podría atenderse con un esquema de aprobación accesible desde el sistema. `[Ev: COC-4.3 · Odoo: Flujos de aprobación de solicitudes — Inventory/Purchase]`
4. **Recetas y consumo de insumos por producción (escandallos / listas de materiales).** El cálculo de raciones por ingrediente en el mise en place y el descuento de insumos al producir podría apoyarse en listas de materiales/recetas que relacionan plato e insumos. `[Ev: COC-1.2, COC-2.3, COC-3.2, COC-5.2 · Odoo: Listas de materiales y consumo por producción — Manufacturing]`
5. **Control de mermas como ajustes/scrap de inventario.** El registro de proteínas procesadas y de descartes por descomposición podría capturarse como movimientos de desecho que afectan el inventario y permiten seguimiento de pérdidas. `[Ev: COC-7.1, COC-7.4 · Odoo: Registro de desechos y ajustes de inventario — Inventory]`
6. **Recepción de compras e insumos críticos por el propio departamento.** La recepción de agua, gas y mercancía que hoy ejecuta Gerencia podría asignarse al área con acceso al sistema mediante el registro de recepciones. `[Ev: COC-4.4, COC-4.6 · Odoo: Recepción de mercancía y validación de albaranes — Inventory]`
7. **Captura del pedido y comanda en punto de venta.** Las comandas en papel de almuerzo, snacks y cena podrían capturarse en el sistema de punto de venta del hotel, con envío a cocina y cargo a la cuenta del huésped. `[Ev: COC-2.4, COC-3.3, COC-3.4, COC-5.4 · Odoo: Punto de venta de restaurante con comanda a cocina — Point of Sale]`
8. **Solicitud de compra automática por stock mínimo del almacén.** La solicitud de compra que hoy gestiona el almacén cuando no tiene existencia podría originarse desde reglas de reabastecimiento. `[Ev: COC-4.5 · Odoo: Reglas de reordenamiento y solicitudes de compra — Purchase]`

### Riesgos si se mantiene

1. **Quiebre de stock que detiene un servicio.** Sin control sistematizado de existencias, un faltante detectado tarde obliga a requisición de emergencia, compra local o retirar un plato de la venta; si el almacén ya cerró, el servicio queda comprometido. Impacto: Alto (interrupción de servicio y venta perdida). Probabilidad: Alta. `[Ev: COC-3.1, COC-4.1, COC-4.5 · ISO: 9001:2015 §8.5.1 · ISO: 9001:2015 §8.4.1]`
2. **Retraso de producción por firma de autorización no disponible.** La dependencia de una firma física de Gerencia para liberar insumos puede dejar a la cocina sin materia prima para la cena o el desayuno del día siguiente cuando el autorizador no está presente. Impacto: Alto. Probabilidad: Media. `[Ev: COC-4.3 · ISO: 9001:2015 §7.5.3]`
3. **Pérdida de control de costos y mermas de A&B.** El registro manual y disperso de raciones de personal, proteínas procesadas y mermas impide un costeo confiable; las diferencias solo se detectan por revisión manual y se escalan reactivamente. Impacto: Medio. Probabilidad: Alta. `[Ev: COC-7.4, COC-1.4, COC-2.1, COC-5.3 · ISO: 9001:2015 §8.7]`
4. **Errores de pedido y de cobro por comanda en papel.** Las comandas manuales que cruzan distintas manos (mesero, cocinero, caja) exponen a errores de transcripción, pedidos no cobrados y tickets perdidos o mojados, sobre todo si cae el sistema de facturación. Impacto: Medio. Probabilidad: Media. `[Ev: COC-2.4, COC-3.3, COC-5.4 · ISO: 9001:2015 §8.5.1]`
5. **Inocuidad alimentaria por rotura de cadena de frío o contaminación cruzada.** El procesamiento de proteínas y su almacenamiento dependen del estado de neveras/cavas y de empaque manual; una falla de temperatura o de empaque exige traslado de emergencia y etiquetado de lotes, con riesgo sanitario si no se gestiona a tiempo. Impacto: Alto (riesgo de inocuidad). Probabilidad: Media. `[Ev: COC-7.1, COC-7.3 · ISO: 9001:2015 §7.1.4 · ISO: 9001:2015 §8.5.4]`
6. **Descalce de planificación de desayuno por dato informal.** Los ajustes de última hora por grupos sin reserva o huéspedes no anotados, gestionados verbalmente o por WhatsApp, generan raciones de emergencia y sobre/sub producción no controlada. Impacto: Bajo. Probabilidad: Media. `[Ev: COC-1.1, COC-1.5 · ISO: 9001:2015 §8.5.1]`

---

## Conexiones con otros departamentos

| Departamento | Qué necesitan de ellos | Qué les entregan | Medio | Estado |
| --- | --- | --- | --- | --- |
| Recepción | Lista de desayunos (huéspedes y cantidad); aviso de grupos sin reserva | Servicio de desayuno ejecutado; conteo de comensales | WhatsApp; lista física | Activo, informal |
| Almacén General | Entrega de insumos solicitados por requisición; firma de entrega | Formato de requisición autorizado | Formato físico numerado | Activo, en papel |
| Compras | Gestión de compra cuando almacén no tiene existencia | Necesidad de insumo faltante (vía almacén) | Odoo (módulo compras), WhatsApp/correo | Activo, parcial pendiente validar |
| Gerencia de Operaciones | Firma de autorización de requisiciones; gestión y recepción en Odoo de agua y gas | Formato de requisición; notificación de agotamiento de agua/gas | Formato físico; aviso directo; Odoo | Activo |
| Mantenimiento | Intervención en cañerías, desagües y reparaciones; mantenimiento de equipos | Aviso de incidencia | Radio (sin registro escrito) | Activo, informal |
| Sala / Meseros | Toma y traslado de comandas; despacho de platos al huésped | Plato terminado en zona de despacho | Comanda física; aviso verbal | Activo, en papel |
| Caja | Cargo a la habitación o cobro del pedido | Comanda que respalda el cargo | POS / sistema de facturación; comanda física | Activo |

---

## Herramientas y sistemas actuales

| Herramienta | Tareas principales | Observaciones |
| --- | --- | --- |
| WhatsApp | Recepción de lista de desayunos; coordinación rápida con proveedores | Canal informal; sin registro estructurado `[Ev: COC-1.1, COC-4.5]` |
| Odoo (uso parcial) | Recepción de servicio de agua y gas; registro de necesidad de compra | Lo opera Gerencia de Operaciones, no el departamento; existe intención de que A&B reciba directamente `[Ev: COC-4.5, COC-4.6]` |
| POS / sistema de facturación | Registro fiscal de venta de snacks y cena; cargo a habitación | Tiene plan de contingencia manual ante caída del sistema `[Ev: COC-3.3, COC-3.4]` |
| Formato físico de requisiciones | Solicitud, autorización y entrega de insumos desde almacén | Numerado y correlativo; se anula a mano ante error; cuello de botella si se agota `[Ev: COC-4.2, COC-4.3, COC-4.4]` |
| Hojas de inventario / control (manual) | Verificación de insumos, inventario diario, conteo de proteínas, raciones de comedor | Sin sistema; conteo físico contra stock ideal `[Ev: COC-1.3, COC-4.1, COC-7.4]` |
| Comanderos físicos | Captura de pedidos de almuerzo, snacks y cena | En papel; trasladados a mano a cocina y a caja `[Ev: COC-2.4, COC-3.3]` |
| Radio | Solicitud de apoyo a mantenimiento | Sin formato ni registro escrito de la solicitud `[Ev: COC-6.3]` |
| Equipos de cocción y frío | Producción, conservación de proteínas y mise en place | Planchas, freidoras, hornos, balanza, neveras/cavas; con protocolos de respaldo ante falla `[Ev: COC-7.2, COC-7.3]` |

---

## Mapa de procesos del departamento

### Planificación y verificación de insumos
- `COC-1.1` — Recepción de lista de desayunos
- `COC-1.3` — Verificación de productos/insumos para el desayuno
- `COC-2.2` — Verificación de productos/insumos para almuerzo
- `COC-3.1` — Inventario de productos para snacks
- `COC-5.1` — Inventario de productos para cena

### Mise en place
- `COC-1.2` — Mise en place de productos y utensilios (desayuno)
- `COC-2.3` — Mise en place de productos y utensilios (almuerzo)
- `COC-3.2` — Mise en place de productos y utensilios (snacks)
- `COC-5.2` — Mise en place de productos y utensilios (cena)

### Producción y servicio de A&B
- `COC-1.4` — Desayunos del personal
- `COC-1.5` — Desayunos de huéspedes
- `COC-2.1` — Almuerzos de personal
- `COC-2.4` — Recepción de pedidos de huéspedes (almuerzo)
- `COC-2.5` — Almuerzos de huéspedes
- `COC-3.3` — Recepción de pedidos de huéspedes (snacks/cena)
- `COC-3.4` — Snacks para huéspedes
- `COC-5.3` — Cena de personal
- `COC-5.4` — Cena de huéspedes

### Abastecimiento, requisiciones y compras
- `COC-4.1` — Inventario diario/manual en el almacén de cocina
- `COC-4.2` — Relleno de formato de requisiciones
- `COC-4.3` — Solicitud de firma de requisición a Gerencia / Jefe de cocina
- `COC-4.4` — Entrega de productos desde almacén y firma de entrega
- `COC-4.5` — Solicitud de compra cuando almacén no tiene el producto
- `COC-4.6` — Notificación a Gerencia de reabastecimiento de agua potable y gas

### Carnicería y procesamiento de proteínas
- `COC-7.1` — Limpiezas de proteínas (carne, pollo, mariscos y pescado)
- `COC-7.2` — Pesos de proteínas
- `COC-7.3` — Embolsado de proteínas
- `COC-7.4` — Inventario de lo que se saca (conteo)

### Limpieza y mantenimiento de áreas
- `COC-6.1` — Limpieza general del turno de la mañana
- `COC-6.2` — Limpieza general del turno de la tarde/noche
- `COC-6.3` — Solicitud de apoyo a Mantenimiento para casos especiales
- `COC-7.5` — Limpieza de área de carnicería
