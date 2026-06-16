---
proyecto: Koral Morrocoy (Hotel)
departamento: AABB Bar
codigo_departamento: BAR
documento: RX — Radiografía del Proceso
estado: Borrador — pendiente firma del dueño del proceso
fecha_publicacion: 2026-06-16
fuente_as_is: Output/AABB/AS-IS AABB Bar.md
---

# RX — AABB Bar

## Resumen ejecutivo

El departamento AABB Bar opera el servicio de alimentos y bebidas de salón, piscina y áreas externas del hotel a lo largo de tres jornadas operativas (desayuno, organización/almuerzo esporádico, snacks/cena), más un proceso transversal de reabastecimiento e inventario. El equipo se estructura alrededor del rol de Capitán de servicio y mesoneros por turno, con dependencias directas de Cocina, Caja, Recepción y Almacén. Su sistema operativo de punto de venta es Poster, hoy confinado a la estación de Caja. La tensión central del departamento es la brecha entre un flujo de servicio que ya pasa por un POS y un conjunto de prácticas manuales paralelas —comandas en papel, inventarios en libreta, requisiciones físicas y traspasos de turno informales— que conviven con el sistema sin integrarse a él.

---

## Indicadores del estado actual

| Indicador | Valor | Notas |
| --- | --- | --- |
| Tareas identificadas | 38 | Áreas 1 (11), 2 (11), 3 (11), 4 (5). |
| Áreas funcionales | 4 | Desayunos; Organización/limpieza; Snacks/Cena; Reabastecimiento e inventario. |
| Tareas con dependencia externa | 18 | Cocina, Caja, Recepción, Almacén, Gerencia de Operaciones, Mantenimiento/Ama de Llaves. |
| Sistemas y herramientas en uso | 4 principales | Poster (POS en Caja), WhatsApp, comanda manual en papel, formato físico de requisiciones. |
| Tareas con respaldo en sistema (Poster) | 3 (8%) | Solo el procesamiento de comanda y facturación en Caja (BAR-1.7, BAR-2.5, BAR-3.6). |
| Tareas de inventario sin sistema | 4 | BAR-2.2, BAR-2.11, BAR-3.11, BAR-4.1, todas manuales. |
| Tareas con pendientes de validación abiertos | 2 | BAR-2.11 (varios campos), BAR-2.1 / BAR-3.10 (campo ideal). |

---

## Análisis de la operación actual

### Fortalezas

1. **Flujo de servicio estandarizado y replicado entre las tres jornadas.** El ciclo toma de pedido → procesamiento en Caja → verificación de llegada a cocina → preparación → entrega al comensal se ejecuta de forma idéntica en desayuno, almuerzo y cena, lo que da consistencia al servicio sin importar el turno. `[Ev: BAR-1.6, BAR-1.7, BAR-1.8, BAR-1.9, BAR-1.10 · ISO: 9001:2015 §8.5.1]`
2. **Mise en place y verificación previa formalizados por turno.** Cada jornada arranca con preparación anticipada de productos y materiales y una inspección del salón antes de recibir comensales, lo que reduce demoras al inicio del servicio. `[Ev: BAR-1.2, BAR-1.3, BAR-3.1, BAR-3.2 · ISO: 9001:2015 §8.1]`
3. **Punto de venta operativo en Caja.** El departamento ya canaliza el registro de la comanda y la facturación a través de Poster en la estación de Caja, con asignación de número de habitación y mesa. `[Ev: BAR-1.7 · Odoo: Punto de venta — POS]`
4. **Cierre con limpieza y traspaso de turno como práctica establecida.** Todas las fases se cierran con limpieza del área y una entrega de guardia que comunica pendientes al turno entrante, dando continuidad operativa. `[Ev: BAR-1.11, BAR-2.9, BAR-2.10, BAR-3.10, BAR-3.11 · ISO: 9001:2015 §8.5.1]`

### Áreas de mejora

1. **Comanda manual en papel como registro primario del pedido.** El mesonero anota el pedido a mano y lo traslada físicamente a Caja, donde recién se digita en Poster; la tablet existe pero no se usa por limitaciones de red, y la impresora de cocina está fuera de servicio, por lo que Caja centraliza todas las impresiones. Esto introduce doble digitación, traslado físico y riesgo de pérdida del papel. Severidad: Medio. `[Ev: BAR-1.6, BAR-1.7, BAR-2.4, BAR-3.5 · ISO: 9001:2015 §7.5.3]`
2. **Inventario del área llevado de forma manual, sin sistema.** El inventario de productos, el de barra y el de platería y mantelería se realizan en libreta o conteo físico, sin registro digital; el equipo refiere que antes existía un programa que registraba inventarios y solicitudes y que dejó de usarse. Severidad: Medio. `[Ev: BAR-2.2, BAR-2.11, BAR-3.11, BAR-4.1 · ISO: 9001:2015 §7.5.3]`
3. **Requisición de reabastecimiento en formato físico con firma manual.** La requisición se llena en papel, circula para recabar la firma de autorización de Gerencia de Operaciones y luego se presenta en Almacén para la firma de entrega; un formato físico que viaja entre áreas puede traspapelarse y obligar a repetir el conteo desde cero, y la ausencia del autorizador estanca el pedido. Severidad: Medio. `[Ev: BAR-4.2, BAR-4.3, BAR-4.4 · ISO: 9001:2015 §8.4.1]`
4. **Verificación de productos a servir basada en cálculo mental, sin disponibilidad en sistema.** La confirmación de que cocina tiene stock suficiente se hace de forma manual y por comunicación verbal o radio, usando la lista de huéspedes como referencia para estimar mentalmente; no hay visibilidad sistematizada del agotamiento de un ítem. Severidad: Medio. `[Ev: BAR-1.5, BAR-3.4 · ISO: 9001:2015 §8.5.1]`
5. **Traspaso de turno e inventario de cierre apoyados en libreta y WhatsApp.** La entrega de guardia se sustenta en anotaciones informales en la "Libreta de Faltantes", el libro de novedades físico y mensajes de WhatsApp; no existe un acta formal de entrega, lo que provoca que detalles importantes se olviden en el cambio de turno. Severidad: Medio. `[Ev: BAR-2.10, BAR-3.11 · ISO: 9001:2015 §7.5.3]`
6. **Dependencia de WhatsApp para insumos operativos del servicio.** La lista de huéspedes del día y la confirmación de que el pedido llegó completo a cocina dependen de un grupo de WhatsApp; un mensaje puede perderse entre chats o no llegar a tiempo, obligando a respaldo por radio o presencia física. Severidad: Bajo. `[Ev: BAR-1.1, BAR-1.8 · ISO: 9001:2015 §7.4]`
7. **Sin notificación sistematizada de faltante de stock en Almacén.** Cuando Almacén no tiene el producto solicitado se gestiona una solicitud de compra, pero no existe sistema que avise al Capitán hasta que el producto llega físicamente al mostrador; la coordinación se lleva por libro de novedades o WhatsApp. Severidad: Bajo. `[Ev: BAR-4.5 · ISO: 9001:2015 §8.4.1]`

### Oportunidades (acotadas a Odoo)

1. **Toma de pedido y envío a cocina desde el propio punto de venta.** El registro del pedido y su despacho a cocina, hoy partidos entre comanda de papel y digitación posterior en Caja, podrían concentrarse en una terminal de punto de venta que envíe la orden directamente al área de preparación. `[Ev: BAR-1.6, BAR-1.7, BAR-2.4, BAR-3.5 · Odoo: Punto de venta con envío a cocina — POS / Restaurant]`
2. **Inventario del área con control de existencias en sistema.** Los inventarios de productos, barra, platería y mantelería que hoy se cuentan en libreta podrían registrarse y consultarse en un módulo de inventario, dando trazabilidad y existencias actualizadas. `[Ev: BAR-2.2, BAR-2.11, BAR-3.11, BAR-4.1 · Odoo: Control de existencias — Inventory]`
3. **Requisición interna entre el área y Almacén gestionada en sistema.** El flujo de requisición física con firmas podría manejarse como una solicitud interna de reabastecimiento entre ubicaciones, con su autorización registrada, eliminando el traslado del papel entre áreas. `[Ev: BAR-4.2, BAR-4.3, BAR-4.4 · Odoo: Solicitudes internas de reabastecimiento — Inventory]`
4. **Punto de reorden / stock mínimo para anticipar faltantes.** La gestión de faltantes que hoy se detecta tarde y se escala manualmente podría apoyarse en reglas de existencia mínima que señalen la reposición antes del agotamiento. `[Ev: BAR-4.1, BAR-4.5 · Odoo: Reglas de reabastecimiento (stock mínimo) — Inventory]`
5. **Disponibilidad de productos y ventas reflejadas desde el POS.** La verificación manual de qué se puede ofrecer y el inventario de cierre cruzado contra ventas podrían apoyarse en el registro de ventas del propio punto de venta. `[Ev: BAR-1.5, BAR-3.4, BAR-3.11 · Odoo: Reporte de ventas del POS — POS]`

### Riesgos si se mantiene

1. **Pérdida o descuadre de pedidos por dependencia del papel y de canales informales.** Con la comanda manual como registro primario, la impresora de cocina fuera de servicio y la confirmación de llegada por WhatsApp, un pedido puede perderse o llegar incompleto, generando entregas deficientes y reprocesos. Impacto: Medio. Probabilidad: Media. `[Ev: BAR-1.6, BAR-1.7, BAR-1.8 · ISO: 9001:2015 §8.5.1]`
2. **Descuadre de inventario y faltantes en pleno servicio.** El inventario manual y un estándar fijo para cincuenta personas implican que, si el conteo se hace tarde o llega un grupo mayor, el área puede quedarse sin productos básicos durante el servicio; al cierre, los faltantes que no coinciden con las ventas obligan a revisar comandas de todo el día. Impacto: Medio. Probabilidad: Media. `[Ev: BAR-2.2, BAR-4.1, BAR-3.11 · ISO: 9001:2015 §7.5.3]`
3. **Estancamiento del reabastecimiento por la requisición física.** El pedido queda detenido si el autorizador no está disponible o si el formato se traspapela; la falta de la firma o del documento puede causar faltantes en el servicio. Impacto: Medio. Probabilidad: Media. `[Ev: BAR-4.3, BAR-4.4 · ISO: 9001:2015 §8.4.1]`
4. **Pérdida de información en el cambio de turno.** Sin acta formal de entrega, los pendientes y novedades se apoyan en libreta y WhatsApp, y detalles relevantes pueden olvidarse al traspasar la guardia, afectando la continuidad del servicio. Impacto: Bajo. Probabilidad: Media. `[Ev: BAR-2.10, BAR-3.11 · ISO: 9001:2015 §7.5.3]`
5. **Pérdida de validez documental ante auditoría.** Cuando se agotan las hojas físicas de requisición el proceso se improvisa en hojas blancas, perdiendo validez ante auditoría. Impacto: Bajo. Probabilidad: Baja. `[Ev: BAR-4.2 · ISO: 9001:2015 §7.5.3]`

---

## Conexiones con otros departamentos

| Departamento | Qué necesitan de ellos | Qué les entregan | Medio | Estado |
| --- | --- | --- | --- | --- |
| Recepción | Lista de huéspedes/comensales del día | — | Grupo de WhatsApp (respaldo: radio / presencial) | Activo |
| Caja | Procesamiento de la comanda y facturación en Poster; impresión y envío a cocina | Comanda manual con el pedido del huésped | Entrega física del papel + Poster | Activo |
| Cocina | Preparación del pedido; confirmación de recepción completa | Pedido procesado y "cantado"; restricciones alimentarias | Comanda impresa / WhatsApp / verbal / radio | Activo |
| Almacén | Entrega de productos requisados; firma de constancia; gestión de compra si no hay stock | Formato de requisiciones autorizado | Formato físico de requisiciones | Activo |
| Gerencia de Operaciones | Firma de autorización de la requisición | Formato de requisiciones completado | Formato físico (firma) | Activo |
| Compras / Administración | Gestión de la compra cuando Almacén no tiene el producto | Solicitud de compra originada en la requisición | Almacén → Compras (libro de novedades / WhatsApp) | Activo |
| Mantenimiento / Ama de Llaves | Limpieza profunda y reparación de averías detectadas | Reporte de avería u orden de trabajo | Radio / WhatsApp | Activo (bajo demanda) |

---

## Herramientas y sistemas actuales

| Herramienta | Tareas principales | Observaciones |
| --- | --- | --- |
| Poster (POS, estación de Caja) | Procesamiento de comanda, asignación de habitación/mesa, facturación, impresión a cocina, reporte de ventas | Sistema operativo del área; confinado a Caja. Se reporta lentitud y problemas de red intermitentes. |
| Comanda manual (papel) | Toma de pedido del huésped en mesa | Registro primario del pedido; se traslada físicamente a Caja. |
| Tablet de mesonero | Soporte para escribir el pedido | Disponible pero no se usa para envío directo por limitaciones de red; antes había impresora en cocina, hoy dañada. |
| WhatsApp (grupos operativos) | Recepción de lista de huéspedes, confirmación de llegada de pedido a cocina, coordinación de faltantes | Canal informal; mensajes pueden perderse o no llegar a tiempo. |
| Formato físico de requisiciones | Solicitud de reabastecimiento, autorización, constancia de entrega | Documento manual que circula entre área, Gerencia y Almacén; riesgo de traspapeleo. |
| Libreta / libro de novedades (físico) | Inventarios, faltantes, entrega de guardia, inventario de cierre | Sin acta formal; el equipo refiere haber tenido antes un programa que digitalizaba inventarios y solicitudes. |
| Radio | Respaldo de comunicación con Recepción, Cocina, Mantenimiento | Canal de contingencia ante caída de WhatsApp o red. |

---

## Mapa de procesos del departamento

### Apertura y montaje de servicio
- `BAR-1.1` — Recepción de lista de huéspedes desde grupo de WhatsApp
- `BAR-1.2` — Mise en place de productos y materiales para la producción
- `BAR-1.3` — Verificación de salón de restaurante
- `BAR-1.4` — Limpieza de área de restaurante (apertura, bajo demanda)
- `BAR-1.5` — Verificación de productos a servir
- `BAR-3.1` — Mise en place de productos y materiales (turno tarde)
- `BAR-3.2` — Verificación de salón de restaurante (turno tarde)
- `BAR-3.3` — Limpieza de área de restaurante (turno tarde, bajo demanda)
- `BAR-3.4` — Verificación de productos a servir (cena)

### Ciclo de pedido y servicio al comensal
- `BAR-1.6` — Toma de pedido de huéspedes (desayuno)
- `BAR-1.7` — Entrega de comandas a Caja para enviar a Cocina (desayuno)
- `BAR-1.8` — Verificar que el pedido haya llegado completo a cocina (desayuno)
- `BAR-1.9` — Preparación del pedido (desayuno)
- `BAR-1.10` — Entrega al comensal (desayuno)
- `BAR-2.4` — Toma de pedido de huéspedes (almuerzo esporádico)
- `BAR-2.5` — Entrega de comandas a Caja para enviar a Cocina (almuerzo)
- `BAR-2.6` — Verificar que el pedido haya llegado completo a cocina (almuerzo)
- `BAR-2.7` — Preparación del pedido (almuerzo)
- `BAR-2.8` — Entrega al comensal (almuerzo)
- `BAR-3.5` — Toma de pedido de huéspedes (snack/cena)
- `BAR-3.6` — Entrega de comandas a Caja para enviar a Cocina (cena)
- `BAR-3.7` — Verificar que el pedido haya llegado completo a cocina (cena)
- `BAR-3.8` — Preparación del pedido (cena)
- `BAR-3.9` — Entrega al comensal (cena)

### Disponibilidad y atención en período de baja afluencia
- `BAR-2.3` — Prevención de cualquier pedido de huéspedes

### Cierre, limpieza y traspaso de turno
- `BAR-1.11` — Limpieza de área (cierre de desayuno)
- `BAR-2.1` — Limpieza de área de restaurante (período de organización)
- `BAR-2.9` — Limpieza de área (cierre de organización)
- `BAR-2.10` — Entrega de guardia de turno (mañana → tarde)
- `BAR-3.10` — Limpieza de área (cierre de cena)
- `BAR-3.11` — Entrega de guardia de turno (tarde → mañana, con inventario de cierre)

### Inventario de barra, platería y mantelería
- `BAR-2.2` — Inventario de productos y mise en place de suministros y materiales
- `BAR-2.11` — Inventario de platería y mantelería

### Reabastecimiento e inventario
- `BAR-4.1` — Inventario diario/manual del área
- `BAR-4.2` — Relleno de formato de requisiciones
- `BAR-4.3` — Solicitud de firma de requisición a Gerencia de Operaciones
- `BAR-4.4` — Entrega de productos desde almacén y firma de entrega
- `BAR-4.5` — Solicitud de compra cuando almacén no tiene el producto
