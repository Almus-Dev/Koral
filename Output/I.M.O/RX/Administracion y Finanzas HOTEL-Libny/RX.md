---
proyecto: Koral Morrocoy (Hotel)
departamento: Administración y Finanzas (HOTEL-Libny)
codigo_departamento: AFL
documento: RX — Radiografía del Proceso
estado: Borrador — pendiente firma del dueño del proceso
fecha_publicacion: 2026-06-16
fuente_as_is: Output/Administracion y Finanzas/AS-IS HOTEL-Libny.md
---

# RX — Administración y Finanzas (HOTEL-Libny)

## Resumen ejecutivo

El departamento de Administración y Finanzas del Hotel concentra en un núcleo operativo muy reducido todo el ciclo financiero de la propiedad: verificación bancaria de pagos, recepción y custodia del efectivo, facturación de todos los puntos de venta (recepción, A&B, estacionamiento, Marina, Boca Seca, arrendamientos), conciliación bancaria, de caja y de divisas, reportes regulatorios a Venetur e INATUR, y mantenimiento de maestros en Odoo, Cloudbeds y Poster. La operación funciona sobre tres sistemas no integrados —Odoo (contabilidad/facturación), Cloudbeds (PMS/recepción) y Poster (POS de A&B)— que obligan a cruces y reconstrucciones manuales en hojas de Excel intermedias. La tensión principal es la centralización del proceso en un único acceso a portales bancarios y a la facturación en Odoo, combinada con la ausencia de máquina fiscal (toda factura es de contingencia) y con la dependencia de mecanismos manuales —recibos de caja en papel, cálculo externo de IVA y tasa promedio, fe de errata por la imposibilidad de corregir en Poster— para sostener la integridad contable.

---

## Indicadores del estado actual

| Indicador | Valor | Notas |
| --- | --- | --- |
| Tareas identificadas | 75 | 18 áreas funcionales (cierres, facturación, conciliaciones, reportes, maestros, formatos) |
| Sistemas y herramientas en uso | 11 | Odoo, Cloudbeds, Poster, portales bancarios, Credicard, PayPal/Binance/Zelle, Excel, WhatsApp, Microsoft Teams, Canva, impresora |
| Tareas con dependencia externa | 14 | Recepción, A&B, estacionamiento/seguridad, Marina, Boca Seca, Compras, Talento Humano, contador externo, Venetur, INATUR |
| Tareas con cierre/conciliación contable en Odoo | 13 | Diarios de caja, conciliación bancaria, de caja y de divisas (Áreas 8, 10, 11, 12) |
| Tareas con paso a paso documentado | 47 (≈63%) | El resto remite a sesión de validación para el detalle interno en Odoo |
| Accesos críticos concentrados en un solo rol | 2 | Portales bancarios y facturación en Odoo recaen únicamente en Administración |

---

## Análisis de la operación actual

### Fortalezas

1. **Control cruzado del cierre de caja en doble revisión.** Cada cierre de turno se valida primero por el punto de venta (recepción o A&B) y luego por Administración, cruzando el sistema (Cloudbeds/Poster) contra el efectivo físico, los reportes de punto de venta bancario y los comprobantes electrónicos antes de aceptar la entrega. `[Ev: AFL-1.4, AFL-1.7, AFL-3.4, AFL-3.7 · ISO: 9001:2015 §8.5.1]`
2. **Verificación bancaria previa a la confirmación de todo pago electrónico.** Ningún pago móvil o transferencia se da por válido hasta confirmarse su ingreso real en el portal del banco, dato que se devuelve sobre el propio comprobante; este control aplica de forma transversal a recepción, A&B, estacionamiento y Marina. `[Ev: AFL-1.1, AFL-3.1, AFL-5.1, AFL-6.2 · ISO: 9001:2015 §8.5.1]`
3. **Constancia documental de discrepancias no corregibles.** Cuando Poster no permite anular ni rectificar un registro errado, se deja una fe de errata en la observación del asiento de Odoo describiendo el error y la corrección, conservando trazabilidad documental del movimiento real. `[Ev: AFL-3.8 · ISO: 9001:2015 §7.5.3]`
4. **Conciliación bancaria con evidencia auditable y meta de cierre definida.** La conciliación de ingresos cruza extracto bancario y detalle de lotes de Credicard contra los recibos de cobro de Odoo (filtro "No match"), apoyada en un archivo Excel de control que sirve como evidencia auditable, con la meta de cerrar el mes dentro de los primeros cinco días del siguiente. `[Ev: AFL-10.1, AFL-10.2, AFL-10.3 · ISO: 9001:2015 §7.5.3]`
5. **Autorización y trazabilidad de egresos de la caja principal.** Todo pago a proveedores o empleados desde la caja principal exige autorización previa de la Gerencia General, recibo físico firmado por el receptor y conciliación posterior en Odoo por el área responsable (Compras o Talento Humano). `[Ev: AFL-8.3, AFL-8.4 · ISO: 9001:2015 §8.5.1]`

### Áreas de mejora

1. **Cálculo manual de base imponible de IVA y tasa promedio en Excel externo.** Para cada factura se descarga la cuenta del cliente a un Excel auxiliar donde se calcula la tasa promedio de pagos en distintas fechas y se discrimina la base imponible, porque Odoo recibe la base y no el total con IVA. Es un cálculo fiscal sensible ejecutado fuera del sistema contable. Severidad: Alto. `[Ev: AFL-2.1, AFL-2.4 · Norma: LIVA Art. 20, 28-29 · ISO: 9001:2015 §7.5.3]`
2. **Reconstrucción manual de reportes regulatorios cruzando dos sistemas.** El reporte diario a Venetur consolida a mano, en el formato Excel del organismo, los ingresos por categoría de Odoo y los indicadores de ocupación de Cloudbeds, con plazos nocturnos estrictos en temporada alta. Severidad: Alto. `[Ev: AFL-9.1, AFL-9.3, AFL-9.4, AFL-9.5, AFL-9.6 · Norma: Ley Orgánica de Turismo — reporte INATUR]`
3. **Emisión de comprobante fiscal solo por contingencia, sin máquina fiscal.** Todas las facturas (recepción, A&B, estacionamiento, Marina, arrendamientos) se emiten como facturas de contingencia y se imprimen en impresora común por no contar con máquina fiscal integrada. Severidad: Alto. `[Ev: AFL-2.4, AFL-2.5, AFL-4.3, AFL-5.5, AFL-6.5 · Norma: Providencia SENIAT 00102 sobre facturación]`
4. **Discriminación manual de pagos por canal en Poster.** Poster agrupa bajo "tarjeta" tanto los pagos por punto de venta bancario como los procesados vía Cloudbeds y no es multimoneda, obligando a revisar recibo por recibo para separar canales en cada cierre de A&B. Severidad: Medio. `[Ev: AFL-3.6, AFL-3.7 · ISO: 9001:2015 §8.5.1]`
5. **Emisión manual de recibos de caja en papel.** Cada ingreso o egreso de efectivo (cierres de recepción, A&B, pagos a proveedores y empleados) genera un recibo escrito a mano, impreso en impresora normal, recortado y archivado físicamente. Severidad: Medio. `[Ev: AFL-1.3, AFL-3.3, AFL-8.1, AFL-8.3, AFL-8.4 · ISO: 9001:2015 §7.5.3]`
6. **Extracto de caja y de divisas creado manualmente en Odoo.** A diferencia del extracto bancario importable, los extractos de la caja física y de las plataformas de divisas (PayPal, Binance, Zelle) se crean manualmente en Odoo antes de poder conciliar los recibos de cobro. Severidad: Medio. `[Ev: AFL-11.2, AFL-12.2 · ISO: 9001:2015 §7.5.3]`
7. **Doble registro en Odoo por ausencia de usuario en la caja de A&B.** Como la caja de A&B no tiene usuario de Odoo, Administración registra manualmente cada recibo de cobro (uno por pago) y la factura de consumos al cierre, duplicando el trabajo ya capturado en Poster. Severidad: Medio. `[Ev: AFL-4.1, AFL-4.2 · ISO: 9001:2015 §7.1.3]`
8. **Maestros de productos y precios mantenidos en paralelo en tres sistemas.** Los productos se crean y los precios se actualizan por separado en Odoo, Cloudbeds y Poster, y el menú físico se diseña aparte en Canva, lo que permite discrepancias entre el precio cobrado y el registrado. Severidad: Medio. `[Ev: AFL-13.1, AFL-13.2, AFL-13.5, AFL-13.6, AFL-13.9 · ISO: 9001:2015 §7.1.3]`
9. **Frecuencia de conciliación bancaria sujeta a disponibilidad de tiempo.** La conciliación bancaria, de caja y de divisas debería ser semanal pero en la práctica se realiza cuando hay tiempo disponible, lo que retrasa la detección de movimientos sin recibo de cobro asociado. Severidad: Medio. `[Ev: AFL-10.3, AFL-11.3, AFL-12.3 · ISO: 9001:2015 §9.1.1]`
10. **Estado de factura "En proceso de pago" no distingue saldo cero de conciliación pendiente.** Una factura con saldo cero pero sin conciliar permanece en "En proceso de pago" en lugar de "Pagada", generando confusión operativa sobre el estado real del cobro. Severidad: Bajo. `[Ev: AFL-11.3 · ISO: 9001:2015 §9.1.1]`

### Oportunidades (acotadas a Odoo)

1. **Conciliación bancaria asistida con importación de extractos.** El cruce manual de extractos descargados de Banesco, Banplus, Bancamiga y Banco Exterior, y de lotes de Credicard, contra los recibos de cobro podría apoyarse en la conciliación nativa con importación de extractos bancarios. `[Ev: AFL-10.1, AFL-10.2, AFL-10.3 · Odoo: Conciliación bancaria con importación de extractos — Accounting]`
2. **Diarios de efectivo y conciliación de caja/divisas dentro del módulo contable.** El registro del efectivo en los diarios Caja Principal USD/BDS y la conciliación de recibos contra extractos de caja y de divisas digitales son funciones de los diarios de efectivo del módulo contable, hoy soportadas con extractos creados a mano. `[Ev: AFL-1.5, AFL-3.5, AFL-8.2, AFL-11.1, AFL-11.2, AFL-11.3, AFL-12.1, AFL-12.2, AFL-12.3 · Odoo: Diarios de efectivo y conciliación de caja — Accounting]`
3. **Cálculo automático de impuestos y manejo de tasa de cambio en factura.** La discriminación de la base imponible del IVA y el manejo de pagos en distintas tasas, hoy resueltos en Excel externo, corresponden al motor de impuestos y a la gestión multimoneda del módulo contable. `[Ev: AFL-2.1, AFL-2.4 · Odoo: Cálculo de impuestos y multimoneda en facturación — Accounting · Norma: LIVA Art. 20, 28-29]`
4. **Tarifario y lista de precios sobre maestro único de productos.** El ingreso manual de cada concepto en la factura y el mantenimiento de precios en paralelo podrían apoyarse en un catálogo de productos con listas de precios. `[Ev: AFL-2.4, AFL-13.1, AFL-13.6 · Odoo: Listas de precios sobre catálogo de productos — Sales/Inventory]`
5. **Punto de venta integrado para A&B sobre el mismo maestro contable.** El doble registro y la discriminación manual de canales derivados de Poster podrían atenderse con el punto de venta nativo, que comparte productos y diarios con la contabilidad. `[Ev: AFL-3.6, AFL-4.1, AFL-4.2, AFL-13.5 · Odoo: Punto de venta integrado a contabilidad e inventario — Point of Sale]`
6. **Gestión nativa de retenciones de IVA e ISLR.** El registro de los comprobantes de retención de contribuyentes especiales corresponde a la funcionalidad de retenciones de la localización fiscal venezolana. `[Ev: AFL-16.1, AFL-17.1, AFL-17.2 · Odoo: Retenciones de IVA e ISLR — Accounting (localización VE) · Norma: Providencia SENIAT sobre retenciones de IVA]`
7. **Recepción de mercancía y traslados internos sobre inventario.** La recepción de pedidos y las expediciones entre almacén general y administración ya se gestionan en Odoo y se sostienen sobre el módulo de inventario, hoy con datos en depuración. `[Ev: AFL-14.2, AFL-15.1 · Odoo: Recepciones y transferencias internas — Inventory]`

### Riesgos si se mantiene

1. **Error fiscal por cálculo de IVA fuera del sistema.** Discriminar la base imponible y la tasa promedio en una hoja de Excel externa expone cada factura a errores de fórmula o de captura que afectan el monto declarado de IVA. Impacto: Alto. Probabilidad: Media. `[Ev: AFL-2.1, AFL-2.4 · Norma: LIVA Art. 20, 28-29]`
2. **Incumplimiento de plazo regulatorio en reporte a Venetur/INATUR.** La reconstrucción nocturna y manual del reporte cruzando dos sistemas, con ventana de envío entre las 12:00 AM y la 1:00 AM en temporada alta, es vulnerable a retrasos y errores de consolidación ante el organismo. Impacto: Alto. Probabilidad: Media. `[Ev: AFL-9.4, AFL-9.5, AFL-9.6 · Norma: Ley Orgánica de Turismo — reporte INATUR]`
3. **Concentración de accesos críticos en un solo rol.** El acceso a los portales bancarios y la facturación en Odoo recaen únicamente en Administración; en su ausencia, la confirmación de pagos y la emisión de facturas quedan sin respaldo operativo equivalente. Impacto: Alto. Probabilidad: Media. `[Ev: AFL-1.1, AFL-2.4, AFL-8.1 · ISO: 9001:2015 §7.1.2]`
4. **Pérdida de integridad de inventario por data sucia en Odoo.** El inventario presenta productos duplicados y referencias incorrectas en depuración, y la supervisión es aleatoria sobre cinco o seis productos sin frecuencia fija, lo que deja discrepancias físicas-sistema sin detectar oportunamente. Impacto: Medio. Probabilidad: Alta. `[Ev: AFL-15.1 · ISO: 9001:2015 §7.1.5]`
5. **Cobro mal reflejado por discrepancia entre menú físico y sistema.** El menú impreso en Canva puede quedar desincronizado de los precios de Poster, obligando a reimprimir y arriesgando cobrar un precio distinto al registrado. Impacto: Medio. Probabilidad: Media. `[Ev: AFL-13.6, AFL-13.9 · ISO: 9001:2015 §8.5.1]`
6. **Facturas que no cierran por conciliación de egresos pendiente.** Las transacciones de egreso quedan "en el aire" hasta que Compras o Talento Humano las concilian; si la conciliación no ocurre, la factura del proveedor permanece indefinidamente "En proceso de pago". Impacto: Medio. Probabilidad: Media. `[Ev: AFL-8.2, AFL-8.3, AFL-8.4 · ISO: 9001:2015 §9.1.1]`
7. **Diferencias contables no detectadas por conciliación tardía.** Al hacerse la conciliación cuando hay tiempo en lugar de semanalmente, los ingresos sin recibo de cobro asociado o desconciliados pueden distorsionar saldos hasta el cierre mensual. Impacto: Medio. Probabilidad: Media. `[Ev: AFL-10.3, AFL-11.3, AFL-12.3 · ISO: 9001:2015 §9.1.1]`

---

## Conexiones con otros departamentos

| Departamento / Entidad | Qué necesitan de ellos | Qué les entregan | Medio | Estado |
| --- | --- | --- | --- | --- |
| Recepción | Comprobantes de pago, cierre de caja en Cloudbeds, registro de contacto y recibos de cobro | Confirmación bancaria de pagos, informe de caja, validación del cierre | WhatsApp corporativo, Cloudbeds | Operativo |
| Caja de A&B | Cierre en Poster, efectivo, comprobantes, notificación de errores | Confirmación bancaria, registro en Odoo de recibos y facturas (A&B no tiene usuario Odoo) | WhatsApp (grupo), Poster | Operativo con dependencia total en Odoo |
| Estacionamiento / Seguridad | Reporte físico de pagos, cierres de punto de venta | Confirmación bancaria, formato de registro | Físico, Microsoft Teams | Operativo |
| Marina | Relación semanal de traslados, pago | Confirmación de pago, factura | Microsoft Teams, banco | Operativo |
| Boca Seca | Relación semanal de ventas, pago en efectivo | Registro en Odoo sin factura (NF) | Microsoft Teams, físico | Operativo |
| Compras | Conciliación en Odoo del egreso a proveedores, creación de pedidos | Transacción de egreso registrada, solicitud de artículos | Odoo | Operativo |
| Talento Humano | Conciliación en Odoo del egreso a empleados, lista de pagos | Transacción de egreso registrada, formatos | Odoo, físico | Operativo |
| Gerencia General | Autorización de pagos a proveedores y empleados | Ejecución y registro del egreso | Directo | Operativo |
| Contador externo (Somaterm) | Asignación de cuentas contables a productos nuevos | — | Pendiente validar | Bloqueante para creación de productos |
| Venetur | Formato Excel de reporte diario | Reporte de ocupación e ingresos | Correo electrónico, WhatsApp | Operativo, plazo crítico |
| INATUR | Formato de reporte de ocupación | Reporte de ocupación de alojamiento turístico | WhatsApp | Operativo |

---

## Herramientas y sistemas actuales

| Herramienta | Tareas principales | Observaciones |
| --- | --- | --- |
| Odoo | Facturación, recibos de cobro, diarios de caja, conciliación bancaria/caja/divisas, retenciones, productos, recepción de inventario | Sistema contable central; sin máquina fiscal, sin tarifario, no discrimina IVA automáticamente; extractos de caja y divisas creados a mano `[Ev: AFL-2.4, AFL-10.3, AFL-11.2]` |
| Cloudbeds | PMS de recepción: fichas de cliente, registro de pagos, informes de caja y de ocupación | No es multimoneda; bolívares se ingresan manualmente; fuente de ocupación para Venetur `[Ev: AFL-1.2, AFL-9.3]` |
| Poster | POS de A&B: registro de consumos, informes de turno y de recibos | No permite anulaciones ni rectificaciones; agrupa canales bajo "tarjeta"; sin usuario Odoo en la caja; solo Presidencia puede modificar `[Ev: AFL-3.6, AFL-3.8]` |
| Portales bancarios | Confirmación de pagos electrónicos, descarga de extractos | Banesco, Banplus, Bancamiga, Banco Exterior, Activo; acceso exclusivo de Administración `[Ev: AFL-1.1, AFL-10.1]` |
| Credicard | Detalle de lotes de punto de venta para conciliación | Lotes de Bancamiga, Activo, Banplus `[Ev: AFL-10.2]` |
| PayPal / Binance / Zelle | Cobros en divisas digitales | Sin extracto importable; conciliación con extracto manual `[Ev: AFL-12.1, AFL-12.2]` |
| Excel | Cálculo de IVA y tasa promedio, control de conciliación, reporte Venetur | Hojas auxiliares externas que suplen funciones ausentes del sistema `[Ev: AFL-2.1, AFL-9.4, AFL-10.3]` |
| WhatsApp | Confirmación de pagos, notificación de errores, respaldo de reporte a Venetur, reporte a INATUR | Canal operativo transversal `[Ev: AFL-1.1, AFL-9.5, AFL-9.6]` |
| Microsoft Teams | Envío de reportes de estacionamiento, Marina y Boca Seca a Administración | `[Ev: AFL-5.3, AFL-6.3, AFL-7.3]` |
| Canva | Diseño del menú físico de A&B | Fuente de precios paralela al sistema; riesgo de desincronización `[Ev: AFL-13.9]` |
| Impresora | Impresión de facturas de contingencia y recibos de caja | Impresora común; recibos manuales `[Ev: AFL-2.5, AFL-1.3]` |

---

## Mapa de procesos del departamento

### Cierre y conciliación de cajas por punto de venta
- `AFL-1.1` — Verificación de pagos bancarios y confirmación a recepción
- `AFL-1.2` — Exportación y validación del informe de caja desde Cloudbeds
- `AFL-1.3` — Recepción física del efectivo al cierre de turno de recepción
- `AFL-1.4` — Conciliación del efectivo entregado contra registros de Cloudbeds
- `AFL-1.5` — Registro del efectivo del cierre en los diarios de caja de Odoo
- `AFL-1.6` — Exportación del informe de conciliación de pagos desde Cloudbeds
- `AFL-1.7` — Verificación cruzada de pagos electrónicos contra Cloudbeds y banco
- `AFL-1.8` — Notificación de errores a recepción y gestión de anulaciones
- `AFL-3.1` — Verificación de pagos bancarios para la caja de A&B
- `AFL-3.2` — Exportación del informe de turno de caja desde Poster
- `AFL-3.3` — Recepción física del efectivo del cierre de turno de A&B
- `AFL-3.4` — Conciliación del efectivo de A&B contra registros de Poster
- `AFL-3.5` — Registro contable del efectivo de A&B en diarios de caja
- `AFL-3.6` — Exportación del informe de recibos desde Poster
- `AFL-3.7` — Conciliación de pagos electrónicos de A&B contra banco y Poster
- `AFL-3.8` — Gestión de errores en el cierre de A&B (fe de errata)
- `AFL-5.1` — Verificación de pagos bancarios para el cierre de estacionamiento
- `AFL-5.2` — Recepción del reporte físico de estacionamiento
- `AFL-5.3` — Elaboración y envío del reporte de cierre de estacionamiento

### Facturación de los servicios
- `AFL-2.1` — Revisión de la cuenta del cliente en Cloudbeds previo a facturar
- `AFL-2.2` — Validación del contacto del cliente en Odoo previo a facturar
- `AFL-2.3` — Validación de los recibos de cobro del cliente en Odoo
- `AFL-2.4` — Creación de la factura de venta en Odoo
- `AFL-2.5` — Impresión de la factura de contingencia
- `AFL-4.1` — Creación del contacto del cliente en Odoo para A&B
- `AFL-4.2` — Registro de recibos de cobro y factura de consumos de A&B
- `AFL-4.3` — Impresión de la factura de contingencia de A&B
- `AFL-5.4` — Registro en Odoo de los pagos de estacionamiento
- `AFL-5.5` — Impresión de la factura de contingencia de estacionamiento
- `AFL-6.4` — Registro en Odoo del pago de traslados de la Marina
- `AFL-6.5` — Impresión de la factura de contingencia de la Marina
- `AFL-16.2` — Emisión de factura de arrendamiento en Odoo

### Cierres semanales de servicios externos (Marina, Boca Seca)
- `AFL-6.1` — Recepción y desglose del reporte semanal de traslados de la Marina
- `AFL-6.2` — Confirmación del pago de la Marina
- `AFL-6.3` — Envío del reporte semanal de traslados a Administración
- `AFL-7.1` — Recepción y desglose del reporte semanal de Boca Seca
- `AFL-7.2` — Confirmación del pago de Boca Seca
- `AFL-7.3` — Envío del reporte semanal de Boca Seca a Administración
- `AFL-7.4` — Registro en Odoo de pagos en efectivo de Boca Seca (NF)

### Tesorería, conciliación y cumplimiento contable
- `AFL-8.1` — Recepción y resguardo del efectivo en la caja principal
- `AFL-8.2` — Registro contable de movimientos de la caja principal en Odoo
- `AFL-8.3` — Pago a proveedores desde la caja principal con autorización
- `AFL-8.4` — Pago a empleados desde la caja principal con autorización
- `AFL-8.5` — Conciliación de la caja principal (remite a Área 11)
- `AFL-10.1` — Descarga del extracto bancario de cada banco
- `AFL-10.2` — Descarga del detalle de lotes de POS desde Credicard
- `AFL-10.3` — Conciliación bancaria cruzando recibos con extractos
- `AFL-11.1` — Registro del recibo de cobro en efectivo en Odoo
- `AFL-11.2` — Creación manual del extracto de caja en Odoo
- `AFL-11.3` — Conciliación de recibos en efectivo contra extracto de caja
- `AFL-12.1` — Registro del recibo de cobro en divisas digitales
- `AFL-12.2` — Creación manual del extracto de divisas en Odoo
- `AFL-12.3` — Conciliación de recibos en divisas contra extracto
- `AFL-16.1` — Gestión de cobro a arrendatarios y emisión de factura
- `AFL-17.1` — Registro de comprobantes de retención de IVA en Odoo
- `AFL-17.2` — Registro de comprobantes de retención de ISLR en Odoo

### Reportes regulatorios de ocupación e ingresos
- `AFL-9.1` — Exportación del informe de Ganancias y Pérdidas desde Odoo
- `AFL-9.2` — Verificación y clasificación de los ingresos operativos del día
- `AFL-9.3` — Exportación del informe de hospedados desde Cloudbeds
- `AFL-9.4` — Consolidación de datos en el archivo Excel para Venetur
- `AFL-9.5` — Envío del reporte diario a Venetur
- `AFL-9.6` — Envío del reporte de ocupación a INATUR

### Mantenimiento de maestros y formatos
- `AFL-13.1` — Creación de productos en Odoo
- `AFL-13.2` — Creación de productos en Cloudbeds
- `AFL-13.3` — Configuración de métodos de pago en Cloudbeds
- `AFL-13.4` — Creación de usuarios en Cloudbeds
- `AFL-13.5` — Creación de productos en Poster
- `AFL-13.6` — Actualización de precios de productos en Poster
- `AFL-13.7` — Creación de usuarios en Poster
- `AFL-13.8` — Creación de clientes en Poster
- `AFL-13.9` — Diseño e impresión del menú físico de A&B en Canva
- `AFL-18.1` — Diseño y mantenimiento de formatos operativos

### Inventario y abastecimiento de administración
- `AFL-14.1` — Solicitud de artículos de oficina y mercancía a compras
- `AFL-14.2` — Recepción física y en Odoo de pedidos
- `AFL-15.1` — Supervisión aleatoria de inventarios en almacenes
