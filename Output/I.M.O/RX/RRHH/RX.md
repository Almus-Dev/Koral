---
proyecto: Koral Morrocoy (Hotel)
departamento: Talento Humano
codigo_departamento: RRH
documento: RX — Radiografía del Proceso
estado: Borrador — pendiente firma del dueño del proceso
fecha_publicacion: 2026-06-16
fuente_as_is: Output/RRHH/AS-IS RRHH.md
---

# RX — Talento Humano

## Resumen ejecutivo

Talento Humano concentra en una estructura mínima —un Licenciado coordinador en Caracas y una Analista en el hotel (Tucacas), con apoyo puntual de un calculista de horas extras— el ciclo completo del personal: cumplimiento parafiscal y fiscal, nómina, reclutamiento e inducción, expedientes, relaciones laborales, tributos laborales, egreso, gestión de pasantes y comunicación interna. La operación es marcadamente manual y bicéfala geográficamente: el cálculo de nómina, horas extras, bonos, descuentos, cuentas por cobrar y liquidaciones se realiza en hojas de Excel paralelas, mientras Odoo se usa de forma acotada para registro de empleados y validación contable de pagos. La información del trabajador vive simultáneamente en Excel, expedientes físicos, OneDrive/SharePoint y Odoo, sin una fuente única de verdad. La coordinación operativa depende de canales informales (WhatsApp) que luego se formalizan por correo, y varias decisiones críticas (aprobación de ingreso, cambios de condiciones) se comunican verbalmente. La tensión principal es la duplicación de datos y cálculos entre múltiples herramientas, sostenida por un equipo reducido sobre el que recae un volumen alto de tareas regulatorias y operativas con plazos legales.

---

## Indicadores del estado actual

| Indicador | Valor | Notas |
| --- | --- | --- |
| Tareas identificadas | 49 | Áreas 1-5; incluye entradas consolidadas (1.2.1/1.2.2, 4.1.1, 4.1.4/4.1.5, 4.1.9/4.1.10) |
| Tareas con dependencia externa | 24 | Administración y Finanzas, Legal, Gerencia General, banca, portales estatales, universidad, IT |
| Sistemas y herramientas en uso | 13 | Odoo, Excel, Word, PowerPoint, portales estatales, portal bancario Banplus, Tango Uno, Poster, OneDrive/SharePoint, WhatsApp, Telegram, correo, Phoom |
| Tareas con cálculo manual en Excel | 14 | Previsión, asistencia, horas extras, bonos, descuentos, CxC, ISLR/DPP, ARC/ARI, liquidación, horarios |
| Tareas con respaldo físico/digital definido | ~20 | Carpeta Oslo, expedientes físicos en Caracas, OneDrive/SharePoint, carteleras |
| Tareas con pendientes de validación abiertos | 1 | AS-IS 2.3.5 (bono camareras): fuente de registro y excepciones por validar |

---

## Análisis de la operación actual

### Fortalezas

1. **Cumplimiento parafiscal y fiscal estructurado por ciclo mensual.** El área ejecuta un ciclo definido de revisión, validación, solicitud de compromiso de pago y archivo para IVSS, INCES, FAOV y MPPPST, con documentación consolidada en la carpeta Oslo disponible ante inspecciones. `[Ev: RRH-1.1.1, RRH-1.1.2, RRH-1.1.3, RRH-1.1.4 · ISO: 9001:2015 §7.5 · Norma: LOTTT — obligaciones parafiscales del empleador]`
2. **Trazabilidad documental del ciclo de vida del empleado en expediente.** Cada ingreso, modificación y egreso deja constancia firmada en el expediente físico (contrato, normativa, kit de egreso con firma, fecha y huellas), con respaldo digital en la nube ante deterioro físico. `[Ev: RRH-3.2.1, RRH-3.2.3, RRH-3.3.2, RRH-3.7.2 · ISO: 9001:2015 §7.5.3]`
3. **Mecanismo formal de evaluación de desempeño por cargo.** Existen plantillas predeterminadas con 20-25 indicadores por cargo y escala 1-5, aplicadas al cierre del período de prueba con participación del coordinador de área. `[Ev: RRH-3.6.1 · ISO: 9001:2015 §7.2]`
4. **Doble control de cumplimiento sanitario en Alimentos y Bebidas.** Se controla mensualmente la vigencia de certificados de manipulación de alimentos y de salud del personal de A&B, preparando al área ante visitas de Sanidad. `[Ev: RRH-1.3.1, RRH-1.3.2 · ISO: 9001:2015 §7.1.2]`
5. **Cierre de egreso con revocación de accesos y devolución de activos.** El egreso integra notificación a departamentos, baja en Odoo y canales, revocación de accesos por IT y verificación de devolución de uniformes y equipos mediante checklist. `[Ev: RRH-3.7.3, RRH-3.7.4 · ISO: 9001:2015 §7.5.3]`

### Áreas de mejora

1. **Cálculo de nómina, horas extras, bonos, descuentos y liquidaciones íntegramente manual en Excel.** Todo el procesamiento de pago se realiza en hojas paralelas, con consolidación, sumatorias y transcripción manuales sujetas a error y reproceso. Severidad: Alto. `[Ev: RRH-2.1.2, RRH-2.3.1, RRH-2.3.5, RRH-2.5.2, RRH-3.7.1 · ISO: 9001:2015 §7.1.2]`
2. **Datos del trabajador duplicados en múltiples repositorios sin fuente única.** La base de datos detallada vive en Excel (activos/egresados) porque Odoo no captura salud, carga familiar, estado civil ni datos bancarios; coexiste con expedientes físicos, OneDrive/SharePoint y Odoo, exigiendo conciliaciones periódicas. Severidad: Alto. `[Ev: RRH-3.3.1, RRH-3.2.2, RRH-3.3.2 · ISO: 9001:2015 §7.5.3]`
3. **Registro de asistencia y horas extras dependiente de formatos físicos y reportes manuales.** La asistencia se lleva entre Tango Uno, un listado manual y Excel; las horas extras circulan en formatos físicos impresos y distribuidos, con riesgo de descuentos incorrectos por coberturas no notificadas. Severidad: Alto. `[Ev: RRH-2.2.1, RRH-2.2.2, RRH-2.2.3 · ISO: 9001:2015 §7.5]`
4. **Decisiones y aprobaciones críticas comunicadas de forma verbal o informal.** La aprobación final de ingreso por Gerencia General, los cambios de condiciones laborales y varias notificaciones se transmiten verbalmente o por WhatsApp, sin respaldo escrito sistemático. Severidad: Alto. `[Ev: RRH-3.1.5, RRH-3.2.1, RRH-3.3.3 · ISO: 9001:2015 §7.5.3 · Norma: LOTTT — formalización de condiciones de trabajo]`
5. **Conciliación de pagos y cuentas por cobrar duplicada entre Odoo y Excel.** La conciliación se valida en Odoo pero los estados de CxC por trabajador se mantienen manualmente en Excel, generando desfases temporales entre ambos. Severidad: Medio. `[Ev: RRH-2.4.1, RRH-2.4.2 · ISO: 9001:2015 §7.5.3]`
6. **Reclutamiento sin formato estandarizado ni registro único de candidatos.** La preselección se basa en criterio profesional sin formato estructurado; los currículos llegan por correo, presencial y grupos dispersos, dificultando la comparación objetiva. Severidad: Medio. `[Ev: RRH-3.1.2, RRH-3.1.3, RRH-3.1.4 · ISO: 9001:2015 §7.2]`
7. **Ausencia de flujo documentado para notificaciones, observaciones o multas de entes.** No existe registro interno estandarizado ni flujo con responsables y plazos para atender notificaciones de inspecciones gubernamentales. Severidad: Medio. `[Ev: RRH-1.2.3 · ISO: 9001:2015 §10.2 · Norma: LOTTT / normativa de los entes inspectores]`
8. **Atomización del control en formatos físicos y carteleras.** Horarios, certificados, inventario de uniformes, asignación de equipos y publicaciones del Ministerio del Trabajo se gestionan en Excel y se publican impresos, con desfases temporales frente a la realidad operativa. Severidad: Medio. `[Ev: RRH-3.4.1, RRH-3.4.3, RRH-3.8.1, RRH-3.8.2 · Norma: LOTTT — publicación del horario de trabajo]`
9. **Sistema de Seguridad y Salud Laboral aún no consolidado.** La gestión de políticas SST y el comité de seguridad ante el INPSASEL están en fase de implementación, gestionados de forma reactiva y sin plataforma especializada. Severidad: Alto. `[Ev: RRH-5.2 · ISO: 9001:2015 §7.1.4 · Norma: LOPCYMAT / INPSASEL]`
10. **Pérdida de trazabilidad por uso predominante de WhatsApp como primer canal.** La coordinación interna y el reporte de novedades parten de WhatsApp y se formalizan por correo solo después, con riesgo de novedades que no llegan en tiempo real. Severidad: Medio. `[Ev: RRH-5.3, RRH-5.4, RRH-2.2.2 · ISO: 9001:2015 §7.4]`

### Oportunidades (acotadas a Odoo)

1. **Centralizar el cálculo y procesamiento de nómina, horas extras, bonos y deducciones.** El procesamiento manual en Excel podría sustituirse por el módulo de nómina nativo, que soporta estructuras salariales, reglas de cálculo y conceptos de deducción. `[Ev: RRH-2.1.2, RRH-2.3.1, RRH-2.5.2 · Odoo: Cálculo de nómina y reglas salariales — Payroll]`
2. **Capturar la información integral del empleado en un único registro.** Los campos de salud, carga familiar, estado civil, datos bancarios y foto que hoy obligan a una base Excel paralela podrían residir en la ficha del empleado. `[Ev: RRH-3.3.1, RRH-3.2.2, RRH-3.3.5 · Odoo: Ficha de empleado y campos personalizados — Employees]`
3. **Registrar asistencia y horas extras digitalmente alimentando la nómina.** El fichaje manual entre Tango Uno y Excel podría reemplazarse por registro de asistencia que alimente el cálculo de extras. `[Ev: RRH-2.2.1, RRH-2.2.3 · Odoo: Registro de asistencia — Attendances]`
4. **Centralizar la captación y selección de candidatos en un único flujo.** La recepción dispersa de currículos y la preselección sin formato podrían canalizarse por el módulo de reclutamiento con postulaciones y documentación unificadas. `[Ev: RRH-3.1.2, RRH-3.1.3, RRH-3.1.4 · Odoo: Pipeline de reclutamiento y portal de postulación — Recruitment]`
5. **Gestionar solicitudes, permisos y vacaciones con flujo de aprobación.** Las solicitudes en recibos manuales y la planificación de vacaciones en Excel podrían atenderse con solicitudes de ausencia y aprobaciones registradas. `[Ev: RRH-3.4.4, RRH-3.4.5, RRH-3.5.1 · Odoo: Solicitudes de ausencia y aprobaciones — Time Off]`
6. **Centralizar la gestión documental del expediente en el propio sistema.** Las carpetas físicas y la nube paralela podrían sustituirse por documentos adjuntos al registro del empleado. `[Ev: RRH-3.3.2, RRH-3.7.2 · Odoo: Documentos del empleado — Documents/Employees]`
7. **Reflejar la estructura organizacional automáticamente con cargos y departamentos.** El organigrama actualizado manualmente podría derivarse de la jerarquía de empleados, cargos y departamentos. `[Ev: RRH-3.3.4 · Odoo: Organigrama por estructura de empleados — Employees]`
8. **Conciliar cuentas por cobrar de empleados sin Excel paralelo.** Los préstamos, anticipos y abonos hoy en Excel podrían registrarse y conciliarse junto a los movimientos contables. `[Ev: RRH-2.4.1, RRH-2.4.2 · Odoo: Conciliación y cuentas por cobrar — Accounting]`
9. **Automatizar comunicaciones de cumpleaños y aniversarios laborales.** El listado y flyer manuales mensuales podrían sustituirse por comunicaciones derivadas de las fechas registradas en la ficha del empleado. `[Ev: RRH-3.4.6 · Odoo: Ficha de empleado / actividades programadas — Employees]`

### Riesgos si se mantiene

1. **Errores de pago por cálculo manual y datos bancarios desactualizados.** El procesamiento manual y la dependencia de datos bancarios en Excel exponen a transferencias rechazadas, montos incorrectos y reclamos del personal. Impacto: Alto. Probabilidad: Alta. `[Ev: RRH-2.3.3, RRH-2.3.4, RRH-2.5.2 · ISO: 9001:2015 §8.5]`
2. **Incumplimiento o sanción ante entes por desfase documental o falta de flujo de subsanación.** Sin flujo estandarizado de respuesta a notificaciones y ante documentación que puede vencer o no publicarse a tiempo, aumenta la exposición a multas e intereses por mora. Impacto: Alto. Probabilidad: Media. `[Ev: RRH-1.2.1, RRH-1.2.3, RRH-1.1.3 · Norma: LOTTT y entes parafiscales/fiscales · ISO: 9001:2015 §10.2]`
3. **Exposición legal por condiciones laborales no formalizadas por escrito.** La comunicación verbal de aprobaciones de ingreso y cambios de condiciones debilita el respaldo documental ante reclamos laborales. Impacto: Alto. Probabilidad: Media. `[Ev: RRH-3.1.5, RRH-3.2.1, RRH-3.3.3 · Norma: LOTTT — condiciones de trabajo · ISO: 9001:2015 §7.5.3]`
4. **Pérdida o inconsistencia de información por dispersión en múltiples repositorios.** La duplicación entre Excel, físico, nube y Odoo y la dependencia de bases paralelas elevan el riesgo de desfases y pérdida de datos del personal. Impacto: Alto. Probabilidad: Alta. `[Ev: RRH-3.3.1, RRH-2.4.2 · ISO: 9001:2015 §7.5.3]`
5. **Incumplimiento normativo en Seguridad y Salud Laboral por sistema no consolidado.** El comité y las políticas SST en fase reactiva exponen a la empresa ante inspecciones del INPSASEL. Impacto: Alto. Probabilidad: Media. `[Ev: RRH-5.2 · Norma: LOPCYMAT / INPSASEL · ISO: 9001:2015 §7.1.4]`
6. **Sobrecarga del equipo reducido y dependencia de personas clave.** El volumen de tareas manuales recae en dos personas, con solicitudes del personal fuera de horario y concentración de credenciales y cálculos en roles específicos. Impacto: Medio. Probabilidad: Alta. `[Ev: RRH-1.1.1, RRH-3.4.4, RRH-2.3.4 · ISO: 9001:2015 §7.1.2]`
7. **Descuentos incorrectos por coberturas y novedades no notificadas a tiempo.** El registro manual de asistencia y la dependencia del reporte de jefes generan errores en descuentos y reclamos. Impacto: Medio. Probabilidad: Alta. `[Ev: RRH-2.2.1, RRH-2.2.2 · ISO: 9001:2015 §8.5]`

---

## Conexiones con otros departamentos

| Departamento | Qué necesitan de ellos | Qué les entregan | Medio | Estado |
| --- | --- | --- | --- | --- |
| Administración y Finanzas | Confirmación y ejecución del compromiso de pago parafiscal; gestión de fondos; declaración oficial de ISLR/DPP/ARC ante SENIAT; comprobantes de pago | Solicitud de compromiso de pago; previsión de fondos quincenal/mensual; archivos XML y hojas de trabajo; ARC | Correo electrónico, WhatsApp | Activo, con desfases de confirmación `[Ev: RRH-1.1.3, RRH-2.1.3, RRH-2.6.1, RRH-3.6.3]` |
| Legal | Elaboración y modificación de contratos laborales | Datos del nuevo empleado, condiciones laborales y descripción de funciones | Correo electrónico | Activo `[Ev: RRH-3.2.1, RRH-3.3.3]` |
| Gerencia General | Aprobación final de ingresos, horas extras, solicitudes, vacaciones, liquidaciones, agasajos; definición de actividades | Cuadros, reportes, cálculos, listados de cumpleaños y reportes de incidencias | WhatsApp, presencial, correo | Activo, aprobaciones informales `[Ev: RRH-2.3.2, RRH-3.1.5, RRH-3.4.4, RRH-3.7.1, RRH-5.4]` |
| Jefes / Coordinadores de departamento | Confirmación de retardos, ausencias, novedades; formatos de horas extras; visto bueno de solicitudes; necesidades de cobertura | Formatos en blanco, horarios, listados de candidatos | WhatsApp, correo, formato físico | Activo, dependiente de notificación oportuna `[Ev: RRH-2.2.1, RRH-2.2.2, RRH-2.2.3, RRH-3.4.1]` |
| Sistemas / IT | Revocación de accesos y correos corporativos al egreso | Notificación de egreso | Correo, WhatsApp | Activo `[Ev: RRH-3.7.4]` |
| Servicio al Huésped | Distribución de habitaciones de pernocta para pasantes | Reporte de pasantes confirmados | Correo, WhatsApp, impreso | Activo `[Ev: RRH-4.1.3]` |
| Alimentos y Bebidas | Gestión y control de certificados sanitarios del personal de A&B | Control mensual de vigencia | Carpeta física | Activo `[Ev: RRH-1.3.1, RRH-1.3.2]` |
| Entes externos (banca, portales estatales, universidad) | Ejecución de pagos; solvencias y planillas; base de pasantes y cartas | Archivos de pago, solicitudes, documentación | Portal bancario, portales estatales, correo, teléfono | Activo, dependiente de disponibilidad externa `[Ev: RRH-2.3.3, RRH-1.1.2, RRH-3.5.1, RRH-4.1.1]` |

---

## Herramientas y sistemas actuales

| Herramienta | Tareas principales | Observaciones |
| --- | --- | --- |
| Odoo | Registro y baja de empleado, carga de foto, validación contable de pagos | Uso acotado; no captura datos de salud, carga familiar ni nómina completa; referenciado como ADU `[Ev: RRH-3.2.2, RRH-2.4.1, RRH-3.3.5]` |
| Excel | Previsión de fondos, asistencia, horas extras, bonos, descuentos, CxC, ISLR/DPP, ARC/ARI, liquidación, horarios, base de datos de personal, inventario | Herramienta central de cálculo; bases paralelas a Odoo `[Ev: RRH-2.1.2, RRH-2.3.1, RRH-3.3.1, RRH-3.7.1]` |
| Portales estatales (IVSS, INCES, FAOV, MPPPST) | Descarga de facturas, solvencias, listados; Forma 14-73; constancias 14-100/14-02 | Demoras en reflejar movimientos `[Ev: RRH-1.1.1, RRH-1.1.2, RRH-3.5.1, RRH-3.6.5]` |
| Portal bancario (Banplus) | Carga de archivo TXT masivo y transferencias individuales | Banco principal de nómina; cuentas de otros bancos exigen pago individual `[Ev: RRH-2.3.3, RRH-2.3.4]` |
| Tango Uno | Registro de entrada del personal en la puerta del hotel | Control complementado manualmente en oficina `[Ev: RRH-2.2.1]` |
| Poster | Validación de consumos internos del personal | Cruce contra comandas físicas y estados de cuenta `[Ev: RRH-2.5.1]` |
| OneDrive / SharePoint | Almacenamiento digital de expedientes escaneados | Respaldo ante deterioro físico `[Ev: RRH-3.3.2]` |
| Correo electrónico | Solicitudes, aprobaciones, reportes, constancias formales | Canal de formalización `[Ev: RRH-1.1.3, RRH-3.2.1, RRH-5.3]` |
| WhatsApp / Telegram | Coordinación interna, aprobaciones rápidas, info sensible, publicación de vacantes | Primer canal; riesgo de pérdida de trazabilidad `[Ev: RRH-2.3.2, RRH-3.1.2, RRH-5.3, RRH-5.4]` |
| Word / PowerPoint | Flyers de vacantes, llamados de atención, informes, contratos de pasantía, cartas | Documentos corporativos manuales `[Ev: RRH-3.1.1, RRH-3.5.2, RRH-3.5.4, RRH-4.1.1]` |
| Phoom (app móvil) | Edición de foto tipo carnet del empleado | Foto tomada con teléfono y editada para Odoo `[Ev: RRH-3.3.5]` |
| Archivo físico / carteleras | Carpeta Oslo, expedientes, cartelera fiscal, horarios, checklist, kit de egreso | Soporte físico predominante `[Ev: RRH-1.1.4, RRH-3.4.3, RRH-3.7.3]` |

---

## Mapa de procesos del departamento

### Cumplimiento parafiscal, fiscal y sanitario
- `RRH-1.1.1` — Revisión mensual de documentación de IVSS, INCES, FAOV y MPPPST
- `RRH-1.1.2` — Listado de personal activo, estados de cuenta y solvencias
- `RRH-1.1.3` — Reporte de compromisos y seguimiento de pagos a Administración y Finanzas
- `RRH-1.1.4` — Actualización mensual de la carpeta Oslo con información parafiscal
- `RRH-1.2.1/1.2.2` — Solicitud y revisión de documentación de SENIAT, INATUR, Alcaldía, Bomberos, MINTUR, RUPDAE y LOCTI
- `RRH-1.2.3` — Atención a entes gubernamentales y soporte en auditorías
- `RRH-1.3.1` — Verificación mensual del Certificado de Manipulación de Alimentos
- `RRH-1.3.2` — Control mensual de vencimiento del Certificado de Salud

### Planificación, asistencia y ejecución de nómina
- `RRH-2.1.2` — Planificación mensual y quincenal de pagos
- `RRH-2.1.3` — Envío de previsión de fondos a Administración y Finanzas
- `RRH-2.2.1` — Registro diario de asistencia del personal
- `RRH-2.2.2` — Revisión diaria de retardos y ausencias justificadas e injustificadas
- `RRH-2.2.3` — Recepción y validación de horas extras por departamento
- `RRH-2.3.1` — Cálculo semanal de horas extras
- `RRH-2.3.2` — Envío de reporte para aprobación a Administración y Finanzas
- `RRH-2.3.3` — Elaboración de archivo masivo (TXT) para pago de horas extras y nómina
- `RRH-2.3.4` — Transferencias individuales a colaboradores con cuentas de otros bancos
- `RRH-2.3.5` — Gestión del bono de productividad a camareras
- `RRH-2.5.1` — Registro quincenal de consumos internos del personal
- `RRH-2.5.2` — Aplicación de descuentos por consumos, ausencias, retardos y abonos a CxC

### Conciliación y tributos laborales
- `RRH-2.4.1` — Conciliación en Odoo de movimientos vinculados a pagos
- `RRH-2.4.2` — Actualización de estados de CxC por trabajador
- `RRH-2.6.1` — Elaboración de archivo XML para declaración de retenciones ISLR
- `RRH-2.6.2` — Elaboración mensual de hoja de trabajo para la contribución DPP
- `RRH-3.6.3` — Preparación de ARC (Comprobante de Agente de Retención)
- `RRH-3.6.4` — Preparación de ARI (Ajuste de Retenciones de ISLR)

### Reclutamiento, ingreso e inducción
- `RRH-3.1.1` — Elaboración de flyers de vacantes
- `RRH-3.1.2` — Publicación de vacantes en WhatsApp, Telegram y grupos operativos
- `RRH-3.1.3` — Preselección, filtros, entrevistas y aplicación de pruebas
- `RRH-3.1.4` — Entrega y recepción de kit de reclutamiento
- `RRH-3.1.5` — Presentación final de candidatos a Gerencia General
- `RRH-3.2.1` — Solicitud de contrato al Departamento Legal
- `RRH-3.2.2` — Creación de empleado en Odoo
- `RRH-3.2.3` — Inducción general y recorrido por las instalaciones
- `RRH-3.2.4` — Entrega de tarjeta bancaria y activación del kit nómina

### Administración de personal, expedientes y operación
- `RRH-3.3.1` — Actualización permanente de base de datos de personal
- `RRH-3.3.2` — Mantenimiento de expedientes físicos y digitales
- `RRH-3.3.3` — Levantamiento de información para descripciones de cargo
- `RRH-3.3.4` — Actualización de organigrama
- `RRH-3.3.5` — Registro fotográfico del personal
- `RRH-3.4.1` — Revisión semanal de horarios del personal
- `RRH-3.4.2` — Coordinación de días libres del personal administrativo que pernocta
- `RRH-3.4.3` — Publicación de horario requerido por el Ministerio del Trabajo
- `RRH-3.4.4` — Gestión de solicitudes del personal (préstamos, vacaciones, adelantos, constancias)
- `RRH-3.4.5` — Entrega y control de planillas de vacaciones
- `RRH-3.4.6` — Actualización del listado de cumpleaños y reporte mensual a Gerencia
- `RRH-3.8.1` — Inventario y control de uniformes
- `RRH-3.8.2` — Entrega de dotación de equipos

### Relaciones laborales, desempeño y egreso
- `RRH-3.5.1` — Atención de solicitudes, permisos, reposos y certificados médicos (Forma 14-73)
- `RRH-3.5.2` — Elaboración de llamados de atención y comunicaciones disciplinarias
- `RRH-3.5.4` — Redacción de informes requeridos por la Gerencia General
- `RRH-3.6.1` — Análisis de indicadores y ejecución de la evaluación de desempeño
- `RRH-3.6.5` — Emisión de constancias de trabajo, 14-100, 14-02, certificados IVSS y FAOV
- `RRH-3.7.1` — Pago de liquidación
- `RRH-3.7.2` — Entrega de kit de egreso
- `RRH-3.7.3` — Recepción de uniformes
- `RRH-3.7.4` — Cierre de proceso por correo con documentación digital

### Pasantes, comunicación interna y bienestar
- `RRH-4.1.1` — Entrevistas con universidades y solicitud de documentación
- `RRH-4.1.3` — Elaboración de data y reporte a Gerencia General
- `RRH-4.1.4/4.1.5` — Coordinación de pernocta y recepción y bienvenida de pasantes
- `RRH-4.1.7` — Elaboración de horarios semanales de pasantes
- `RRH-4.1.8` — Mantenimiento de expediente físico de pasantes
- `RRH-4.1.9/4.1.10` — Evaluación final, carta de culminación y reporte a la coordinación universitaria
- `RRH-5.1` — Organización de agasajos y actividades corporativas
- `RRH-5.2` — Seguimiento de políticas de Seguridad y Salud en el Trabajo
- `RRH-5.3` — Comunicación interna
- `RRH-5.4` — Reporte inmediato de incidencias relacionadas con el personal
