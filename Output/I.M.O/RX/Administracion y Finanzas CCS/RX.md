---
proyecto: Koral Morrocoy (Hotel)
departamento: Administración y Finanzas (CCS)
codigo_departamento: CCS
documento: RX — Radiografía del Proceso
estado: Borrador — pendiente firma del dueño del proceso
fecha_publicacion: 2026-06-16
fuente_as_is: Output/Administracion y Finanzas/AS-IS CCS.md
---

# RX — Administración y Finanzas (CCS)

## Resumen ejecutivo

El departamento de Administración y Finanzas con sede en Caracas (CCS) concentra la tesorería, los pagos a proveedores y obligaciones externas, el cumplimiento tributario y parafiscal, el registro contable en Odoo, la administración de maestros (proveedores y productos) y la facturación intercompany del grupo SERAC. El equipo nuclear se compone de un rol gerencial (Gerente de Administración y Finanzas) y dos asistentes administrativos —uno en CCS y uno en el Hotel— apoyados por un contador externo para las presentaciones fiscales y por incorporaciones recientes para archivo. Operativamente, el departamento ya usa Odoo como sistema contable central, pero sostiene una capa paralela de controles manuales (plantillas en Excel, macros, corrección manual de XML, archivos de tarjetas) y un canal de coordinación informal vía WhatsApp personal. La tensión principal es la dependencia de procesos manuales y de un sistema con limitaciones declaradas (errores de XML, cierres no cuadrados, ausencia de validaciones), que conviven con obligaciones fiscales de plazo estricto propias de un contribuyente especial.

---

## Indicadores del estado actual

| Indicador | Valor | Notas |
| --- | --- | --- |
| Tareas identificadas | 44 | Áreas 1-6 (4.1.1 a 4.6.2) |
| Tareas con dependencia externa | 18 | Banca, SENIAT, FONACIT, INATUR, INPARQUES, Alcaldías, Venetur, Cashea, Simple TV, contador externo, Talento Humano, Compras |
| Sistemas y herramientas en uso | 12 | Odoo, portales bancarios, Excel, WhatsApp, Office 365, correo, portal SENIAT, portal BCV, portal Aseo de Silva, Cashea, Credicard, Profit |
| Tareas con pendientes de validación abiertos | 12 | Marcadas con "Pendiente validar en sesión próxima" en el AS-IS |
| Tareas con mejora ideal expresada por el equipo | 27 | Resto sin enunciar deseo o con pendiente |

---

## Análisis de la operación actual

### Fortalezas

1. **Disciplina de cumplimiento tributario y parafiscal de plazo fijo.** El departamento ejecuta declaraciones quincenales de retención de IVA, aportes mensuales a FONACIT (0,50%), INATUR (1%), Alcaldía Silva (2%), INPARQUES, Aseo Urbano (ISMA) y pago del VACC, cada uno con su fecha límite y base de cálculo identificada. `[Ev: CCS-4.3.1, CCS-4.3.6, CCS-4.3.7, CCS-4.3.8, CCS-4.3.9, CCS-4.3.10, CCS-4.2.10 · Norma: contribuyente especial — IVA/ISLR · ISO: 9001:2015 §8.4]`
2. **Rutina diaria de tesorería estandarizada.** Existe un proceso definido de disponibilidad diaria antes de las 10:30 am: revisión de saldos, descarga de extracto, depuración y carga en Odoo, y notificación al equipo para conciliar. `[Ev: CCS-4.1.1, CCS-4.1.7 · ISO: 9001:2015 §7.5]`
3. **Control de pago contra autorización.** Todo pago a proveedores se verifica contra un pedido previamente autorizado por la Gerencia General antes de ejecutarse desde la plataforma bancaria. `[Ev: CCS-4.2.1 · Odoo: Cuentas por pagar — Accounting · ISO: 9001:2015 §8.4]`
4. **Trazabilidad documental del soporte fiscal.** Las facturas de compra se enumeran con correlativo Odoo, se escanean a Office 365 por quincena y se vinculan al registro en Odoo mediante hipervínculo. `[Ev: CCS-4.4.3, CCS-4.4.9 · ISO: 9001:2015 §7.5.3]`
5. **Verificación fiscal del maestro de proveedores.** Al crear un proveedor se valida el porcentaje de retención calificado en el portal del SENIAT antes de habilitarlo para procesar facturas. `[Ev: CCS-4.5.1, CCS-4.2.4 · Norma: retenciones IVA/ISLR · ISO: 9001:2015 §8.4]`

### Áreas de mejora

1. **Plantilla manual de CxP en Excel paralela a Odoo.** La planificación de pagos depende de una plantilla manual de cuentas por pagar en Excel para identificar vencimientos y priorizar, manteniendo doble gestión respecto del sistema contable. Severidad: Alto. `[Ev: CCS-4.1.2 · Odoo: Cuentas por pagar / vencimientos — Accounting]`
2. **Corrección manual de XML antes de cada declaración.** La versión actual de Odoo genera XML inválido cuando una factura tiene más de dos impuestos (Digitel, Triple A) o base imponible alterada, lo que obliga a corrección manual antes de enviar al contador, bajo riesgo de rechazo del SENIAT. Severidad: Alto. `[Ev: CCS-4.3.1 · Odoo: Retenciones / generación de XML — Accounting · Norma: declaración quincenal IVA contribuyente especial]`
3. **Macro manual para el XML de retención de sueldos y salarios.** Odoo no genera el XML de retención sobre nómina; se produce con una macro manual y se fusiona con el XML de compras, proceso enteramente manual de consolidación. Severidad: Alto. `[Ev: CCS-4.3.2 · Odoo: Retenciones de nómina / XML — Payroll/Accounting · Norma: retención ISLR sueldos y salarios]`
4. **Coordinación operativa sobre WhatsApp personal.** El envío de extractos, soportes de pago y reportes de propinas/vueltos se canaliza por grupos de WhatsApp en dispositivos personales, sin historial institucional y con riesgo de pérdida si el equipo personal falla. Severidad: Alto. `[Ev: CCS-4.1.1, CCS-4.1.9, CCS-4.2.1 · ISO: 9001:2015 §7.5.3]`
5. **CxP de socios mezcladas con proveedores externos.** Los asientos de facturas pagadas por los socios se acumulan como CxP a proveedor cuando la deuda real es con el socio que efectuó el pago, distorsionando el saldo de proveedores y la posición real de CxP. Severidad: Alto. `[Ev: CCS-4.4.4, CCS-4.2.7, CCS-4.2.10 · Odoo: Cuentas por pagar / contabilidad analítica — Accounting]`
6. **Seguimiento de reembolsos de retención sin registro centralizado.** Cuando un proveedor exige pago del 100%, SERAC recupera la retención de IVA por seguimiento discontinuo vía WhatsApp, sin registro formal de reembolsos pendientes; los no recuperados dentro del período fiscal se llevan a pérdida. Severidad: Alto. `[Ev: CCS-4.2.2 · Norma: retención IVA contribuyente especial · Odoo: Cuentas por cobrar — Accounting]`
7. **Validación de tasas y comisiones bancarias manual y aleatoria.** No existe registro interno formal de tasas calificadas por banco; la verificación de comisiones es aleatoria y manual, con riesgo de no detectar un cambio de porcentaje dado el volumen de transacciones. Severidad: Medio. `[Ev: CCS-4.1.3 · Odoo: Conciliación bancaria — Accounting]`
8. **Pagos de tarjetas Simple TV individuales sin control de estado.** Las 23 tarjetas se pagan una a una con un archivo manual y la conciliación se imputa tarjeta por tarjeta; no existe un sistema interno que mida el estado de corte de cada tarjeta. Severidad: Medio. `[Ev: CCS-4.2.3 · Odoo: Pagos / conciliación — Accounting]`
9. **Categorías y cuentas contables configuradas sin criterio contable formal.** Las categorías de productos se asignaron según el mejor criterio del equipo y no necesariamente reflejan el tratamiento contable correcto; la revisión de cuentas en cada factura corrige manualmente esa configuración. Severidad: Medio. `[Ev: CCS-4.4.5, CCS-4.4.6, CCS-4.5.2 · Odoo: Plan de cuentas / categorías de producto — Accounting/Inventory]`
10. **Detección tardía de errores en pedidos y devoluciones.** Los errores de costo o cantidad se detectan al procesar la factura, 7 a 15 días después de que Compras montó el pedido y Almacén lo recepcionó, generando devoluciones que retrasan el pago al proveedor. Severidad: Medio. `[Ev: CCS-4.4.8 · Odoo: Compras / Inventario / devoluciones — Purchase/Inventory]`
11. **Backlog de archivo de facturas fiscales desde noviembre 2024.** Existe un acumulado de facturas fiscales de compra y venta pendiente de archivar y ordenar, ejecutado de forma esporádica y con apoyo variable. Severidad: Medio. `[Ev: CCS-4.4.9 · ISO: 9001:2015 §7.5.3]`
12. **Reporte mensual a Venetur completamente manual.** El cruce de pagos, EDR e informe de obras a Venetur se prepara manualmente, lo que el equipo identifica como riesgo de actas de reparo en futuras revisiones. Severidad: Medio. `[Ev: CCS-4.4.2 · ISO: 9001:2015 §7.5.3]`
13. **Cotejo mensual de estado de cuenta manual.** La carga y cotejo del EDC bancario contra los saldos de Odoo, con el mismo tratamiento para caja, se hace de forma comparativa manual. Severidad: Bajo. `[Ev: CCS-4.1.8 · Odoo: Conciliación bancaria — Accounting]`
14. **Seguimiento de gestiones sin estándar de priorización.** El seguimiento de gestiones y reportes internos no tiene horario, periodicidad ni criterio de priorización definido; cada quien prioriza lo urgente según su criterio. Severidad: Bajo. `[Ev: CCS-4.4.1]`

### Oportunidades (acotadas a Odoo)

1. **Gestión de vencimientos y antigüedad de saldos de CxP en el sistema.** La priorización de pagos por vencimiento que hoy vive en una plantilla manual de Excel corresponde a una capacidad de cuentas por pagar y reportes de antigüedad nativa. `[Ev: CCS-4.1.2 · Odoo: Cuentas por pagar y reporte de antigüedad de saldos — Accounting]`
2. **Conciliación bancaria asistida por reglas.** El cotejo manual de extractos, comisiones y EDC podría apoyarse en la conciliación bancaria de Odoo con reglas de conciliación. `[Ev: CCS-4.1.3, CCS-4.1.8, CCS-4.4.10 · Odoo: Conciliación bancaria con reglas — Accounting]`
3. **Importación de extractos bancarios.** La depuración y carga manual del extracto en formato adaptado podría atenderse con la importación de estados de cuenta de Odoo. `[Ev: CCS-4.1.1, CCS-4.1.7 · Odoo: Importación de estados de cuenta — Accounting]`
4. **Retenciones de IVA e ISLR de la localización venezolana.** La generación de comprobantes y archivos de retención, hoy con corrección manual de XML y macro externa, corresponde a la localización fiscal venezolana de Odoo. `[Ev: CCS-4.3.1, CCS-4.3.2, CCS-4.4.7 · Odoo: Retenciones IVA/ISLR — l10n_ve / Accounting · Norma: contribuyente especial]`
5. **Cuentas por cobrar a socios diferenciadas.** El registro de pagos por cuenta de socios (Racid) como CxC y la diferenciación de las CxP de socios respecto de proveedores externos corresponde a la gestión de cuentas por cobrar/pagar con contabilidad analítica. `[Ev: CCS-4.4.4, CCS-4.2.7, CCS-4.2.10, CCS-4.2.2 · Odoo: Cuentas por cobrar y por pagar — Accounting]`
6. **Validación de cuentas por defecto desde categorías de producto.** La asignación correcta de cuentas contables que hoy se revisa factura por factura corresponde a la configuración de cuentas por defecto de las categorías de producto. `[Ev: CCS-4.4.5, CCS-4.4.6, CCS-4.5.2 · Odoo: Categorías de producto y cuentas por defecto — Accounting/Inventory]`
7. **Notas de crédito y devoluciones contables.** El procesamiento de devoluciones por error de costo o cantidad corresponde a la gestión de notas de crédito y reversiones de Odoo. `[Ev: CCS-4.4.8 · Odoo: Notas de crédito / devoluciones — Accounting/Inventory]`
8. **Facturación intercompany.** La facturación recurrente de Eracon Alimentos a SERAC y la eventual de Eracon Salud corresponde a la facturación entre compañías de Odoo. `[Ev: CCS-4.6.1, CCS-4.6.2 · Odoo: Facturación entre compañías — Accounting/Inter-company]`

### Riesgos si se mantiene

1. **Rechazo o reparo fiscal por corrección manual de declaraciones.** La corrección manual del XML y la fusión por macro antes de cada declaración quincenal son puntos de fallo humano que pueden derivar en rechazo del SENIAT o presentación incorrecta no corregible una vez declarada. Impacto: Alto (sanción fiscal, contribuyente especial). Probabilidad: Media. `[Ev: CCS-4.3.1, CCS-4.3.2, CCS-4.4.9 · Norma: declaración quincenal IVA / retenciones]`
2. **Pérdida de información de coordinación en dispositivos personales.** El uso de WhatsApp personal para extractos, soportes y reportes implica pérdida del historial institucional si el dispositivo del titular falla o es sustituido. Impacto: Alto. Probabilidad: Media. `[Ev: CCS-4.1.1, CCS-4.1.9, CCS-4.2.1 · ISO: 9001:2015 §7.5.3]`
3. **Distorsión de la posición financiera real de CxP.** La acumulación de deudas con socios como CxP de proveedores externos distorsiona el saldo de proveedores y la posición de cuentas por pagar, afectando decisiones de pago y cierres. Impacto: Alto. Probabilidad: Alta. `[Ev: CCS-4.4.4 · Odoo: Cuentas por pagar — Accounting]`
4. **Pérdida económica por retenciones no reembolsadas.** El seguimiento discontinuo de reembolsos de retención sin registro centralizado lleva a registrar como pérdida lo no recuperado dentro del período fiscal, como ocurrió en 2023-2024. Impacto: Alto. Probabilidad: Media. `[Ev: CCS-4.2.2 · Norma: retención IVA contribuyente especial]`
5. **Multa por incumplimiento de plazo en obligaciones de fecha fija.** INPARQUES (día 5), INATUR (día 5), Alcaldía Silva (día 15), VACC (día 10) y la facturación intercompany de Eracon Alimentos tienen plazos estrictos cuyo incumplimiento genera multa. Impacto: Medio. Probabilidad: Baja. `[Ev: CCS-4.3.9, CCS-4.3.7, CCS-4.3.8, CCS-4.2.10, CCS-4.6.2 · Norma: obligaciones parafiscales y municipales VE]`
6. **Saldos no razonables para la declaración patrimonial y de renta.** Los cierres y cuadres no razonables en Odoo obligan a que el contador externo elabore una propuesta de trabajo para declarar ISLR e IGP, dependiendo de un criterio externo en lugar de saldos del sistema. Impacto: Medio. Probabilidad: Media. `[Ev: CCS-4.3.4, CCS-4.3.5 · Norma: ISLR / IGP contribuyente especial]`
7. **Interrupción de servicio al huésped por pago tardío.** El corte de Simple TV por pago tardío puede obligar a cambiar de habitación al huésped, imposible con ocupación total; el pago tardío a proveedores a crédito puede suspender el despacho de mercancía. Impacto: Medio. Probabilidad: Media. `[Ev: CCS-4.2.3, CCS-4.2.1]`
8. **Imputación contable errónea por categorías mal configuradas.** Una categoría mal configurada imputa múltiples facturas a cuentas incorrectas, afectando la integridad de la información financiera y fiscal y generando retrabajo de corrección. Impacto: Medio. Probabilidad: Media. `[Ev: CCS-4.4.5, CCS-4.4.6, CCS-4.5.2 · Odoo: Plan de cuentas — Accounting]`

---

## Conexiones con otros departamentos

| Departamento / Entidad | Qué necesitan de ellos | Qué les entregan | Medio | Estado |
| --- | --- | --- | --- | --- |
| Compras y Almacén | Pedidos autorizados y correctos; consulta de pedidos pendientes (Asdrubal) | Pago a proveedores; devoluciones por error de pedido | Odoo, WhatsApp | Activo, con retrabajo por errores tardíos `[Ev: CCS-4.2.1, CCS-4.4.8]` |
| Talento Humano | Notificación de personal apto para cuenta nómina; archivo de IPP | Cuenta asignada (RIF, cédula, firma); IPP revisado | Banca en línea, correo | Activo `[Ev: CCS-4.1.5, CCS-4.1.6, CCS-4.3.3]` |
| Legal | Declaración INATUR en portal; formalización ante Venetur; registro FONACIT | Monto calculado; cruce de pagos revisado | Correo, WhatsApp | Activo `[Ev: CCS-4.3.6, CCS-4.3.7, CCS-4.4.2]` |
| Administración Hotel (Coordinación) | Reporte de estado de puntos de venta, propinas/vueltos, ventas para Alcaldía y Aseo | Solvencias y comprobantes recibidos | WhatsApp, correo, recepción | Activo `[Ev: CCS-4.1.4, CCS-4.1.9, CCS-4.3.8, CCS-4.3.10]` |
| Recepción Hotel | Notificación de ventas en Cashea | Conciliación de cuotas del período | WhatsApp, Cashea | Activo `[Ev: CCS-4.4.10]` |
| Gerencia General / Presidencia | Autorización de pagos; instrucción de compras urgentes, arrendamientos, intercompany; efectivo de arrendamiento piso 4 | Pagos ejecutados; CxC/CxP de socios registradas | WhatsApp, presencial | Activo `[Ev: CCS-4.2.1, CCS-4.2.4, CCS-4.2.7, CCS-4.2.9, CCS-4.6.1]` |
| Contador externo | Presentación de declaraciones; propuesta de trabajo para ISLR/IGP | XML/TXT corregidos; papeles de trabajo; archivo IPP | Correo, WhatsApp | Activo `[Ev: CCS-4.3.1, CCS-4.3.2, CCS-4.3.3, CCS-4.3.4, CCS-4.3.5]` |

---

## Herramientas y sistemas actuales

| Herramienta | Tareas principales | Observaciones |
| --- | --- | --- |
| Odoo | Importación de extracto, conciliación, registro y retención de facturas, asientos, maestros, facturación intercompany | Sistema contable central; limitaciones declaradas (XML de múltiples impuestos, no genera XML de nómina, cierres no cuadrados, sin validación de retención al guardar) `[Ev: CCS-4.3.1, CCS-4.3.2, CCS-4.5.1]` |
| Portales bancarios (banca en línea) | Consulta de saldos, descarga de extractos, ejecución de pagos y transferencias | Múltiples entidades (Banplus, Banco Activo, Bancamiga) `[Ev: CCS-4.1.1, CCS-4.2.1]` |
| Excel | Plantilla manual de CxP, archivo de tarjetas Simple TV, macro de XML de nómina | Capa manual paralela a Odoo `[Ev: CCS-4.1.2, CCS-4.2.3, CCS-4.3.2]` |
| WhatsApp | Distribución de extractos, soportes de pago, reportes operativos, seguimiento de reembolsos | Grupos en dispositivos personales; sin historial institucional `[Ev: CCS-4.1.1, CCS-4.2.1, CCS-4.2.2]` |
| Office 365 (carpeta Finanzas en la nube) | Archivo digital de EDC y facturas escaneadas; histórico | Origen del hipervínculo vinculado a Odoo `[Ev: CCS-4.1.8, CCS-4.4.3, CCS-4.4.9]` |
| Correo electrónico | Envío a contador, Venetur, proveedores; solicitudes de reembolso; solvencias | `[Ev: CCS-4.2.2, CCS-4.3.4, CCS-4.4.2]` |
| Portal SENIAT | Verificación de porcentaje de retención calificado del proveedor | `[Ev: CCS-4.2.4, CCS-4.5.1]` |
| Portal BCV | Consulta de tasa oficial del día para pagos en euros | INPARQUES, Aseo Urbano `[Ev: CCS-4.3.9, CCS-4.3.10]` |
| Portal Aseo de Silva (aseodesilva.sirid.net) | Declaración, cálculo y pago del aseo urbano | Operativo desde marzo 2024; sin multas desde entonces `[Ev: CCS-4.3.10]` |
| Cashea | Verificación de órdenes y seguimiento de cuotas de ventas del hotel | Posición financiera 4% a pagar / cobro por morosidad `[Ev: CCS-4.4.10]` |
| Credicard | Cierre de lote de puntos de venta | Validación adicional de cobro `[Ev: CCS-4.1.4]` |
| Profit | Información contable de la unidad de construcciones | Sistema separado de Odoo para ISLR/IGP `[Ev: CCS-4.3.4, CCS-4.3.5]` |

---

## Mapa de procesos del departamento

### Tesorería y operaciones bancarias
- `CCS-4.1.1` — Disponibilidad diaria (antes de las 10:30 am)
- `CCS-4.1.3` — Seguimiento a las tasas bancarias
- `CCS-4.1.4` — Seguimiento y actualización de puntos de venta del hotel
- `CCS-4.1.5` — Apertura de cuentas jurídicas
- `CCS-4.1.6` — Apertura de cuentas nóminas
- `CCS-4.1.7` — Carga de extracto bancario luego de las 10:30 am
- `CCS-4.1.8` — Carga y cotejo del estado de cuenta bancario y caja

### Planificación y ejecución de pagos
- `CCS-4.1.2` — Planificación de pagos (proveedores, gubernamental, municipal)
- `CCS-4.1.9` — Transferencias por propina, vuelto o error
- `CCS-4.1.10` — Recarga de Cobre TAG (pago de presidencia)
- `CCS-4.2.1` — Pago a proveedores verificando pedido autorizado
- `CCS-4.2.3` — Pago mensual de 23 tarjetas Simple TV
- `CCS-4.2.5` — Recarga de combustible semanal (chofer de presidencia)
- `CCS-4.2.6` — Pago de combustible Tiggo Pro8
- `CCS-4.2.7` — Pago de arrendamiento Dr. Acid Margarita (CxC socio)
- `CCS-4.2.8` — Pago Corpoelec Dr. Acid Margarita + Prados del Este
- `CCS-4.2.9` — Relación de CxP de arrendamiento piso 4
- `CCS-4.2.10` — Pago del VACC (CxC socios Racid)

### Cumplimiento tributario y parafiscal
- `CCS-4.2.2` — Solicitar reembolso de retenciones a proveedores
- `CCS-4.3.1` — Revisar XML + TXT por inconsistencias (declaración quincenal)
- `CCS-4.3.2` — Generar y fusionar XML de retención de sueldos y salarios
- `CCS-4.3.3` — Revisión y envío mensual del IPP de trabajadores
- `CCS-4.3.4` — Preparación de información para declaración anual de ISLR
- `CCS-4.3.5` — Preparación de información para declaración de IGP
- `CCS-4.3.6` — Pago mensual de FONACIT (0,50%)
- `CCS-4.3.7` — Pago mensual de INATUR (1%)
- `CCS-4.3.8` — Pago mensual ante Alcaldía Municipio Silva (2%)
- `CCS-4.3.9` — Pago mensual de INPARQUES
- `CCS-4.3.10` — Pago mensual de aseo urbano (ISMA)

### Contabilidad y cierre en Odoo
- `CCS-4.4.1` — Seguimiento de gestiones y reportes internos
- `CCS-4.4.2` — Envío mensual de reporte y pago a Venetur
- `CCS-4.4.3` — Vinculación de facturas escaneadas en Odoo (cierre)
- `CCS-4.4.4` — Asientos contables en facturas de compra para CxP socios Racid
- `CCS-4.4.5` — Revisión de categorías contables en Odoo
- `CCS-4.4.6` — Revisión de cuentas contables en facturas de compra
- `CCS-4.4.7` — Verificación de aplicación de ISLR en líneas de factura
- `CCS-4.4.8` — Devoluciones en Odoo por error
- `CCS-4.4.9` — Archivo y orden de facturas fiscales de compra y venta
- `CCS-4.4.10` — Supervisión y conciliación de ventas ejecutadas por Cashea

### Maestros y configuración en Odoo
- `CCS-4.5.1` — Creación de proveedores en Odoo
- `CCS-4.5.2` — Creación de productos en Odoo

### Inventarios y facturación intercompany
- `CCS-4.6.1` — Actualización de inventario intercompany Eracon Salud — SERAC
- `CCS-4.6.2` — Actualización de inventario intercompany Eracon Alimentos — SERAC
