---
proyecto: Koral Morrocoy (Hotel)
departamento: Gerencia Hotelera
codigo_departamento: GHO
documento: RX — Radiografía del Proceso
estado: Borrador — pendiente firma del dueño del proceso
fecha_publicacion: 2026-06-16
fuente_as_is: Output/Gerencia Hotelera/AS-IS Gerencia Hotelera.md
---

# RX — Gerencia Hotelera

## Resumen ejecutivo

Gerencia Hotelera concentra la operación de cara al huésped del Hotel Koral Morrocoy: recepción y administración (check-in/out, cobros, conciliación de pagos, llaves, tiendas), ventas y atención al cliente (mensajería, reservas, agencias, eventos, VIP), gestión de talento del área, y soporte operativo a Alimentos y Bebidas, Ama de Llaves y Lavandería en ausencia de jefaturas propias de esos departamentos. El proceso descansa sobre dos sistemas centrales —Cloudbeds como PMS y Odoo como sistema contable— complementados por una constelación de herramientas paralelas (Microsoft Teams, Excel, WhatsApp, Visito, Poster, TT Hotel, Time Locks). La tensión principal es la doble carga: por un lado, una operación transaccional con triple registro manual del mismo pago (Cloudbeds → Odoo → Teams) y dependencia de validaciones externas; por otro, una concentración de funciones supervisoras y de soporte de otros departamentos en un único rol gerencial, que actúa como cuello de botella para autorizaciones, recepciones de pedidos y resolución de excepciones. La satisfacción del cliente se gestiona reactivamente, sin instrumento documentado de medición.

---

## Indicadores del estado actual

| Indicador | Valor | Notas |
| --- | --- | --- |
| Tareas identificadas | 52 | Área 1: 20; Área 2: 20; Área 3: 6; Área 4: 4; Área 5: 2 |
| Tareas con dependencia externa | 18 | Dependen de Administración, Talento Humano, Compras, A&B, Ama de Llaves, técnico externo, presidencia/gerencia para completarse |
| Sistemas y herramientas en uso | 18 | Cloudbeds, Odoo, Teams, Excel, WhatsApp, Visito, Poster, TT Hotel, Time Locks/Lockia, BCV, Cachea, Binance, PDV, correo corporativo, teléfono corporativo, radio/walkie-talkie, papel/recibo físico, agenda física |
| Tareas que tocan cobro o registro de pago | 11 | 1.1.3, 1.1.4, 1.1.5, 1.1.6, 1.1.7, 1.2.1, 1.2.2, 1.2.3, 1.2.4, 1.3.1, 1.4.2 |
| Tareas con campo "ideal" o "excepción" aún pendiente de validar | 24 | Según tabla de pendientes del AS-IS |

---

## Análisis de la operación actual

### Fortalezas

1. **Proceso de check-in documentado con doble vía y manejo de excepciones.** El registro de huéspedes está descrito paso a paso para entrada por puerta y con reserva previa, con captura de datos de identidad, adjuntos y firma de normativas, y rutas definidas para casos institucionales, Venetur y Family & Friends. `[Ev: GHO-1.1.1 · ISO: 9001:2015 §8.2 · Odoo: PMS — Cloudbeds]`
2. **Verificación de duplicados de cliente como paso explícito del registro.** El alta de huéspedes incluye una verificación previa de existencia del contacto antes de crear el registro, criterio de calidad del dato maestro. `[Ev: GHO-1.1.2 · ISO: 9001:2015 §7.5.3]`
3. **Cobro multimétodo cubierto extremo a extremo.** La gestión de pagos abarca PDV, pago móvil, transferencia, Zelle, efectivo, Cachea y Binance, con el detalle de validación y registro por cada método, incluyendo el escenario de huésped sin comprobante. `[Ev: GHO-1.1.3, GHO-1.1.4 · ISO: 9001:2015 §8.2]`
4. **Trazabilidad del consumo de tienda con descuento automático de inventario.** Las ventas a huéspedes registradas en Cloudbeds generan el descuento automático del stock; el inventario mensual se contrasta físicamente contra el sistema. `[Ev: GHO-1.4.1, GHO-1.4.4 · Odoo: PMS / inventario tienda — Cloudbeds]`
5. **Centralización de la mensajería de prospectos con asistencia automatizada.** Visito unifica WhatsApp e Instagram con respuesta por IA y modo manual de respaldo, con conversión a reserva en Cloudbeds. `[Ev: GHO-2.1.1 · ISO: 9001:2015 §8.2]`
6. **Capacitación práctica del personal nuevo sobre los tres sistemas.** La orientación cubre Cloudbeds, Odoo y Teams más atención al cliente y normativas, con simulación práctica. `[Ev: GHO-2.4.2 · ISO: 9001:2015 §7.2]`
7. **Escalamiento definido para resolución de conflictos.** Existe un esquema de tres niveles (recepcionista → gerencia de calidad → gerencia general) según la gravedad del caso del huésped. `[Ev: GHO-2.3.2 · ISO: 9001:2015 §9.1.2]`

### Áreas de mejora

1. **Triple registro manual del mismo pago.** Cada pago se carga en Cloudbeds, luego en Odoo (recibo de cliente) y luego se copia/pega en una carpeta de Microsoft Teams con el comprobante adjunto. La misma transacción se reescribe en tres entornos sin integración. Severidad: Alto. `[Ev: GHO-1.1.4, GHO-1.1.5, GHO-1.1.6, GHO-1.2.2, GHO-1.2.3, GHO-1.2.4 · ISO: 9001:2015 §7.5]`
2. **Duplicación de clientes y errores de tipeo en el registro contable.** El alta del cliente en Odoo depende de una verificación manual de duplicados; se reportan duplicados, montos errados, banco equivocado y método mal clasificado como errores frecuentes que requieren soporte para corregir. Severidad: Alto. `[Ev: GHO-1.1.5, GHO-2.1.7 · ISO: 9001:2015 §7.5.2]`
3. **Cobro de pagos sin acceso directo a banco depende de validación externa con demora.** Recepción no tiene acceso al banco; pago móvil, transferencia y Zelle deben validarse con Administración vía WhatsApp, lo que en temporada alta puede tardar hasta un día y deja pagos pendientes después de que el huésped se fue. Severidad: Alto. `[Ev: GHO-1.1.3, GHO-1.3.1 · ISO: 9001:2015 §8.2]`
4. **Estado de habitaciones en el PMS no es confiable.** Ama de Llaves no actualiza Cloudbeds en tiempo real, por lo que recepción debe verificar físicamente; se reportó la venta de una habitación sin colchón retirado para mantenimiento. Severidad: Alto. `[Ev: GHO-2.1.6, GHO-4.2, GHO-4.3 · ISO: 9001:2015 §8.5.1 · Odoo: housekeeping / estado de habitación — Cloudbeds]`
5. **Dos sistemas de cerraduras en paralelo.** Las llaves se programan en TT Hotel o en Time Locks/Lockia según el tipo de cerradura de la habitación, con la operación en transición hacia cerraduras inteligentes. Severidad: Medio. `[Ev: GHO-1.1.8, GHO-1.1.9 · ISO: 9001:2015 §7.1.3]`
6. **Cobro del servicio (10%) por canal separado en el check-out.** El servicio se cobra exclusivamente por pago móvil a la cuenta de los mesoneros; cuando el huésped paga por PDV, se generan dos pagos y una devolución gestionada con Administración. Severidad: Medio. `[Ev: GHO-1.2.1, GHO-3.6 · ISO: 9001:2015 §8.2]`
7. **Autorizaciones comerciales caso por caso dependientes de presidencia.** Comisiones de agencias, descuentos de grupos/eventos y compensaciones se consultan individualmente con presidencia/gerencia, sin tabla de tarifas o descuentos predefinida; la demora hace perder clientes. Severidad: Medio. `[Ev: GHO-2.2.1, GHO-2.2.2, GHO-2.3.3 · ISO: 9001:2015 §8.2.3]`
8. **Recepción de pedidos en Odoo sujeta a disponibilidad de un solo rol.** El agua, el gas y los servicios de reparación se reciben en Odoo cuando el rol gerencial tiene tiempo; a veces se entera días después por factura, retrasando el registro y el pago. Severidad: Medio. `[Ev: GHO-3.1, GHO-3.2, GHO-3.3 · ISO: 9001:2015 §8.4 · Odoo: recepción de compras — Purchase]`
9. **Cierre de turno y registro de horas en herramientas ofimáticas/papel desconectadas.** El cierre de turno se consolida en Excel y se publica en Teams; el control de redobles depende de una agenda física, con riesgo de olvido si no se anota en el momento. Severidad: Medio. `[Ev: GHO-1.1.7, GHO-2.4.4 · ISO: 9001:2015 §7.5.3]`
10. **Ventas a no-huéspedes sin perfil en el sistema.** Las ventas de tienda a visitantes externos se anotan en papel y se ajustan manualmente en Cloudbeds porque no existe un perfil de cliente visitante, lo que descuadra el inventario. Severidad: Medio. `[Ev: GHO-1.4.1, GHO-1.4.4 · ISO: 9001:2015 §7.5.3]`
11. **Mercancía e ingresos que evaden el flujo formal de compras/almacén.** Mercancía comprada por el dueño entra a las tiendas sin factura ni paso por almacén, y la Tienda Playera cobra a cuenta externa del propietario con recibo en papel; ambos rompen la trazabilidad del inventario y del ingreso. Severidad: Medio. `[Ev: GHO-1.4.2, GHO-1.4.4]`
12. **Reparaciones técnicas sin flujo estandarizado ni seguimiento.** Cada reparación con técnico externo se gestiona ad hoc; el técnico a veces actúa de forma autónoma sin notificar, y no hay registro que dé seguimiento desde la detección del daño hasta el pago. Severidad: Medio. `[Ev: GHO-3.3 · ISO: 9001:2015 §8.5.1 · Odoo: mantenimiento — Maintenance]`
13. **Requisiciones de insumos en papel sin control de consumo.** A&B, Ama de Llaves y Lavandería entregan requisiciones en papel que se firman a criterio visual; cocina hace múltiples pedidos por semana y lavandería no lleva control de consumo por ciclo. Severidad: Medio. `[Ev: GHO-3.5, GHO-4.1, GHO-5.1, GHO-5.2 · ISO: 9001:2015 §8.5.1]`
14. **Capacitación dependiente de un solo rol sin instructivo vigente.** No existe instructivo actualizado y disponible; la orientación depende de la memoria y disponibilidad del rol gerencial. Severidad: Bajo. `[Ev: GHO-2.4.2 · ISO: 9001:2015 §7.2]`
15. **Entrega de normativas solo en físico.** Las normas del hotel se entregan impresas para firma, sin alternativa de consulta digital para el huésped. Severidad: Bajo. `[Ev: GHO-1.1.1 · ISO: 9001:2015 §7.5.3]`

### Oportunidades (acotadas a Odoo)

1. **Integración del cobro y el registro contable del huésped en un solo flujo.** El triple registro manual del pago podría atenderse con un módulo que vincule el documento del cliente y el asiento contable. `[Ev: GHO-1.1.4, GHO-1.1.5, GHO-1.1.6 · Odoo: recibo de cliente y conciliación — Accounting]`
2. **PMS hotelero nativo sobre Odoo para reservas, check-in/out y estado de habitación.** La gestión de reservas, asignación de habitación y estado de limpieza que hoy vive en Cloudbeds tiene equivalente en el módulo de hotelería de Odoo. `[Ev: GHO-1.1.1, GHO-2.1.4, GHO-2.1.6, GHO-4.2, GHO-4.3 · Odoo: gestión hotelera / reservas — Hotel/PMS]`
3. **Punto de venta unificado para tiendas con descuento automático de inventario.** Las ventas de tienda y el ajuste de stock —incluyendo un perfil de cliente genérico para no-huéspedes— pueden cubrirse con el PDV nativo enlazado a inventario. `[Ev: GHO-1.4.1, GHO-1.4.4 · Odoo: punto de venta e inventario — Point of Sale / Inventory]`
4. **Lista de precios y reglas de descuento parametrizadas.** Las tarifas de agencias (10% / 20%) y descuentos de grupos podrían sostenerse en listas de precios y reglas, reduciendo la consulta caso por caso. `[Ev: GHO-2.2.1, GHO-2.2.2, GHO-2.3.3 · Odoo: listas de precios y descuentos — Sales]`
5. **Recepción de compras y servicios trazable en Odoo.** El registro de recepción de agua, gas y reparaciones podría gestionarse como recepción de pedido de compra con seguimiento del estado. `[Ev: GHO-3.1, GHO-3.2, GHO-3.3 · Odoo: recepción de compras — Purchase]`
6. **Gestión de mantenimiento con solicitudes y seguimiento.** Las reparaciones técnicas ad hoc podrían registrarse como solicitudes de mantenimiento con estado desde la detección hasta el cierre. `[Ev: GHO-3.3 · Odoo: solicitudes de mantenimiento — Maintenance]`
7. **Encuesta de satisfacción del huésped.** La resolución reactiva de quejas podría complementarse con un instrumento de medición de satisfacción. `[Ev: GHO-2.3.2, GHO-2.3.3 · Odoo: encuestas — Surveys · ISO: 9001:2015 §9.1.2]`
8. **Portal o registro digital de normativas.** La entrega de normativas y su firma podría ofrecerse en formato digital consultable por el huésped. `[Ev: GHO-1.1.1 · Odoo: portal del cliente / documentos — Website/Sign]`
9. **Registro de horas extras y turnos en el módulo de personal.** El control de redobles que hoy depende de agenda física tiene equivalente en la gestión de asistencia/hojas de horas. `[Ev: GHO-2.4.4 · Odoo: hojas de horas y asistencia — Employees/Attendances]`

### Riesgos si se mantiene

1. **Pérdida de conciliación de pagos por registro fragmentado.** Reescribir cada pago en tres entornos no integrados favorece discrepancias entre Cloudbeds, Odoo y Teams. Impacto: Alto. Probabilidad: Alta. `[Ev: GHO-1.1.4, GHO-1.1.5, GHO-1.1.6 · ISO: 9001:2015 §7.5]`
2. **Cobro no validado al cierre del check-out.** En alta ocupación los pagos se montan después de que el huésped se fue, dejando incertidumbre sobre si el ingreso entró efectivamente en cuenta. Impacto: Alto. Probabilidad: Alta. `[Ev: GHO-1.1.3, GHO-1.3.1]`
3. **Sobreventa o entrega de habitación no apta.** El estado poco confiable del PMS puede derivar en asignar una habitación bloqueada, en mantenimiento o sin colchón. Impacto: Alto. Probabilidad: Media. `[Ev: GHO-2.1.6, GHO-4.2, GHO-4.3 · ISO: 9001:2015 §8.5.1]`
4. **Descuadre persistente del inventario de tiendas.** Salidas del dueño sin registro, ventas a visitantes en papel y mercancía sin factura mantienen una diferencia entre físico y sistema. Impacto: Medio. Probabilidad: Alta. `[Ev: GHO-1.4.1, GHO-1.4.4, GHO-1.4.2]`
5. **Pérdida de oportunidades comerciales por demora en autorización.** La consulta caso por caso a presidencia para tarifas y descuentos hace que grupos y agencias se pierdan mientras se espera la respuesta. Impacto: Medio. Probabilidad: Media. `[Ev: GHO-2.2.1, GHO-2.2.2, GHO-2.3.3]`
6. **Concentración de funciones en un único rol gerencial.** Recepción de pedidos, supervisión de A&B, Ama de Llaves y Lavandería, soporte, reservas, capacitación y autorizaciones recaen sobre el mismo rol, generando cuellos de botella y registros retrasados cuando no está disponible. Impacto: Alto. Probabilidad: Alta. `[Ev: GHO-3.1, GHO-3.3, GHO-3.6, GHO-4.4, GHO-5.2, GHO-2.4.5]`
7. **Solicitudes de huéspedes in-house sin atención garantizada.** La IA de Visito responde solicitudes operativas de huéspedes hospedados sin que recepción las vea a tiempo, y no hay teléfono en habitación. Impacto: Medio. Probabilidad: Media. `[Ev: GHO-2.1.1, GHO-2.1.3 · ISO: 9001:2015 §9.1.2]`
8. **Reparaciones y servicios sin pago ni recepción oportuna.** El registro tardío del servicio técnico en Odoo retrasa el pago al técnico y rompe la trazabilidad del gasto. Impacto: Medio. Probabilidad: Media. `[Ev: GHO-3.3]`
9. **Capacitación no replicable por falta de instructivo.** Sin instructivo vigente, la calidad de la formación del personal nuevo depende de la disponibilidad de una sola persona. Impacto: Medio. Probabilidad: Media. `[Ev: GHO-2.4.2 · ISO: 9001:2015 §7.2]`

---

## Conexiones con otros departamentos

| Departamento | Qué necesitan de ellos | Qué les entregan | Medio | Estado |
| --- | --- | --- | --- | --- |
| Administración / Finanzas | Validación en banco de pago móvil, transferencia, Zelle; montaje en sistema de Zelle y efectivo; gestión de devoluciones | Comprobantes de pago para validar; pagos registrados | WhatsApp, correo | Operativo con demora en alta ocupación `[Ev: GHO-1.1.3, GHO-1.3.1]` |
| Alimentos y Bebidas (A&B) | Comandas físicas diarias; carga de consumos en Poster (sincroniza a Cloudbeds); solicitud de agua/gas | Cobro de consumos en check-out; supervisión; recepción de suministros en Odoo; firma de requisiciones | Comanda física, Poster→Cloudbeds, papel | Operativo; recepción depende de un solo rol `[Ev: GHO-1.2.1, GHO-3.1, GHO-3.2, GHO-3.5, GHO-3.6]` |
| Ama de Llaves | Estado físico real y actualización de habitaciones | Firma de requisiciones; supervisión; bloqueo/desbloqueo en Cloudbeds | WhatsApp, Cloudbeds, papel | Sistema no confiable; actualización en adopción `[Ev: GHO-2.1.6, GHO-4.1, GHO-4.2, GHO-4.3, GHO-4.4]` |
| Lavandería | Requisición semanal de químicos e insumos | Firma de requisición; supervisión | Papel | Operativo sin control de consumo `[Ev: GHO-5.1, GHO-5.2]` |
| Compras | Montaje de pedido formal de agua/gas; compra de repuestos | Notificación de fecha de llegada; recepción del pedido en Odoo | Teléfono, WhatsApp, Odoo | Operativo `[Ev: GHO-3.1, GHO-3.2, GHO-3.3, GHO-3.4]` |
| Almacén | Entrega de insumos contra requisición firmada | Requisiciones firmadas | Papel | Operativo `[Ev: GHO-3.5, GHO-4.1, GHO-5.1]` |
| Talento Humano | Formalización de horario, contratación, descuentos por nómina | Borrador de horario; registro de redobles; reporte de ventas a empleados; perfiles preevaluados | Papel/entrega física en oficina | Operativo; política de descuento por nómina en cambio `[Ev: GHO-1.4.3, GHO-2.4.1, GHO-2.4.4, GHO-2.4.5]` |
| Presidencia / Gerencia General | Autorización de comisiones, descuentos, tarifas, compras urgentes, casos graves | Solicitudes y propuestas de compensación; firma de pedidos extraordinarios | WhatsApp, presencial, papel | Operativo; consulta caso por caso genera demora `[Ev: GHO-2.2.1, GHO-2.2.2, GHO-2.3.3, GHO-3.4]` |
| Departamento Legal | Formalización de contratos con agencias | Documentación de agencias (RIF, registro mercantil) | Correo | Pendiente: no produce contratos `[Ev: GHO-2.2.1]` |
| Técnico externo (refrigeración/AA) | Reparación y mantenimiento de equipos | Coordinación de acceso; firma de comprobante; recepción en Odoo | WhatsApp, teléfono, papel | Ad hoc, sin estandarizar `[Ev: GHO-3.3]` |

---

## Herramientas y sistemas actuales

| Herramienta | Tareas principales | Observaciones |
| --- | --- | --- |
| Cloudbeds (PMS) | Reservas, check-in/out, datos de huésped, registro y conciliación de pagos, inventario y precios de tiendas, estado de habitaciones | Sistema central de recepción; estado de habitaciones no confiable; sin perfil de cliente visitante `[Ev: GHO-1.1.1, GHO-1.1.4, GHO-1.4.1, GHO-2.1.6]` |
| Odoo | Registro contable del pago (recibo de cliente); recepción de pedidos de agua, gas y servicios | Uso parcial; recepción depende de disponibilidad de un rol; duplicados y errores de tipeo frecuentes `[Ev: GHO-1.1.5, GHO-3.1, GHO-3.3]` |
| Microsoft Teams | Publicación de ingresos y comprobantes (carpeta "Ingreso Recepción"); cierres de turno | Tercer punto de registro manual del mismo pago `[Ev: GHO-1.1.6, GHO-1.1.7]` |
| Excel | Formato de cierre de turno con totalización por método | Herramienta ofimática desconectada del PMS `[Ev: GHO-1.1.7]` |
| WhatsApp | Validación de pagos con Administración; comunicación con equipo, gerencia, proveedores, técnicos | Canal informal crítico para validaciones y autorizaciones `[Ev: GHO-1.3.1, GHO-2.1.5]` |
| Visito | Centralización de WhatsApp e Instagram con IA y modo manual | La IA atiende también a huéspedes in-house sin control humano garantizado `[Ev: GHO-2.1.1]` |
| Poster | Sistema de A&B que genera comandas y sincroniza con Cloudbeds | Recepción no accede directamente `[Ev: GHO-1.2.1]` |
| TT Hotel | Programación de cerraduras inteligentes y llaves maestras | Convive con Time Locks; maestras requieren usuario administrador `[Ev: GHO-1.1.8, GHO-1.1.9]` |
| Time Locks / Lockia | Programación de cerraduras magnéticas | En transición hacia TT Hotel `[Ev: GHO-1.1.8]` |
| BCV | Tasa del euro para cálculo de montos | Insumo de tarificación `[Ev: GHO-1.1.1]` |
| Cachea / Binance | Verificación y registro de pagos en dólar/cripto | Métodos de pago adicionales `[Ev: GHO-1.1.3, GHO-1.1.4]` |
| Terminal PDV | Procesamiento de pagos con tarjeta | Verificado por recepción sin validación de Administración `[Ev: GHO-1.1.3]` |
| Correo corporativo | Recepción de comprobantes, solicitudes de reserva, documentación de agencias | Cuentas de recepción, reservas y gerencia de calidad `[Ev: GHO-2.1.2]` |
| Teléfono corporativo | Atención de llamadas de clientes y agencias | Sin teléfono en habitaciones `[Ev: GHO-2.1.3]` |
| Radio / walkie-talkie | Comunicación inmediata con el equipo de recepción | Medio alternativo a WhatsApp `[Ev: GHO-2.1.5]` |
| Recibo / papel físico | Ventas de tienda, requisiciones, comprobantes de servicio, normativas | Múltiples procesos manuales fuera de sistema `[Ev: GHO-1.4.2, GHO-3.5, GHO-3.3]` |
| Agenda física | Registro de redobles, horas extras y mantenimientos | Riesgo de olvido; control personal no sistematizado `[Ev: GHO-2.4.4, GHO-3.3]` |

---

## Mapa de procesos del departamento

### Recepción y front-desk (Área 1.1)
- `GHO-1.1.1` — Check-in de los huéspedes
- `GHO-1.1.2` — Registro de datos de los huéspedes en Cloudbeds
- `GHO-1.1.8` — Elaboración de llaves electrónicas de habitaciones
- `GHO-1.1.9` — Realización de llaves maestras para ama de llaves, jefes y supervisores

### Cobros, conciliación y reporte de ingresos (Áreas 1.1, 1.2, 1.3)
- `GHO-1.1.3` — Gestión de cobros multimedia
- `GHO-1.1.4` — Carga y conciliación de pagos en Cloudbeds
- `GHO-1.1.5` — Carga de registros contables en Odoo
- `GHO-1.1.6` — Anexo y reporte de ingresos en Microsoft Teams
- `GHO-1.1.7` — Ejecución de cierres de turnos
- `GHO-1.2.1` — Gestión de cobros de consumos y servicios adicionales
- `GHO-1.2.2` — Carga y conciliación de pagos de check-out en Cloudbeds
- `GHO-1.2.3` — Carga de registros contables de salida en Odoo
- `GHO-1.2.4` — Anexo y reporte de ingresos de check-out en Teams
- `GHO-1.3.1` — Envío de comprobantes de pagos a Administración
- `GHO-1.3.2` — Confirmación de pagos a los huéspedes por correo

### Tiendas e inventario (Área 1.4)
- `GHO-1.4.1` — Inventario mensual de mercancía (Mambo y Playera)
- `GHO-1.4.2` — Gestión y envío de pagos a los propietarios (cuentas externas)
- `GHO-1.4.3` — Reporte a Talento Humano de ventas a empleados
- `GHO-1.4.4` — Registro de movimientos de inventario en Cloudbeds
- `GHO-1.4.5` — Actualización de lista de precios al público

### Ventas, reservas y atención al cliente (Áreas 2.1, 2.2, 2.3)
- `GHO-2.1.1` — Gestión de mensajería a través de Visito
- `GHO-2.1.2` — Revisión y respuesta de correos corporativos
- `GHO-2.1.3` — Atención de canales telefónicos
- `GHO-2.1.4` — Elaboración de cotizaciones y creación de reservas
- `GHO-2.1.5` — Informar al personal de recepción sobre características de cada reserva
- `GHO-2.1.6` — Verificar y actualizar disponibilidad de habitaciones
- `GHO-2.1.7` — Soporte en elaboración de ingresos y ocupación
- `GHO-2.1.8` — Apoyar en el registro de huéspedes
- `GHO-2.2.1` — Gestión de cuentas de agencias de viajes y operadores
- `GHO-2.2.2` — Coordinación de grupos y eventos
- `GHO-2.2.3` — Protocolo de atención a clientes VIP
- `GHO-2.2.4` — Atención a agentes gubernamentales
- `GHO-2.3.1` — Acompañamiento a conocer las instalaciones
- `GHO-2.3.2` — Resolución de conflictos
- `GHO-2.3.3` — Aplicación y autorización de descuentos especiales

### Gestión de talento del área (Área 2.4)
- `GHO-2.4.1` — Elaboración de horarios del departamento
- `GHO-2.4.2` — Orientación a pasantes o personal de nuevo ingreso
- `GHO-2.4.3` — Planificación estratégica de equipos para temporadas altas
- `GHO-2.4.4` — Control de redobles y gestión de días libres trabajados
- `GHO-2.4.5` — Análisis de perfiles para reclutamiento de recepción

### Soporte operativo a A&B, Ama de Llaves y Lavandería (Áreas 3, 4, 5)
- `GHO-3.1` — Gestión y solicitud de suministro de agua potable
- `GHO-3.2` — Solicitud de llenado de tanques de gas
- `GHO-3.3` — Coordinación de reparaciones técnicas con personal externo
- `GHO-3.4` — Firma de pedidos extraordinarios en ausencia de Gerencia General
- `GHO-3.5` — Firma y validación semanal de requisiciones para Almacén (A&B)
- `GHO-3.6` — Chequeo y supervisión del personal de A&B
- `GHO-4.1` — Firma y control de requisiciones semanales (Ama de Llaves)
- `GHO-4.2` — Verificación y actualización de disponibilidad de habitaciones
- `GHO-4.3` — Chequeo de habitaciones en mantenimiento para bloqueo/desbloqueo
- `GHO-4.4` — Supervisión del personal de ama de llaves
- `GHO-5.1` — Firma y control de requisiciones semanales (Lavandería)
- `GHO-5.2` — Supervisión del área de lavandería en general
