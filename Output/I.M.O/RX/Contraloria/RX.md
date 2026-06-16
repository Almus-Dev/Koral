---
proyecto: Koral Morrocoy (Hotel)
departamento: Contraloria
codigo_departamento: CTR
documento: RX — Radiografía del Proceso
estado: Borrador — pendiente firma del dueño del proceso
fecha_publicacion: 2026-06-16
fuente_as_is: Output/Contraloria/AS-IS Contraloria.md
---

# RX — Contraloria

## Resumen ejecutivo

Contraloria es la función de control interno del hotel: supervisa la ejecución de procesos por departamento, monitorea saldos y movimientos, analiza la información financiera mensual y coordina auditorías y la organización documental para fiscalizaciones. Su núcleo de control (supervisión general, monitoreo de operaciones, análisis financiero y emisión de informes a gerencia) está hoy inactivo y depende de un solo rol, el Gerente de Contraloría, que además absorbe tareas operativas que no le corresponden (ejecución de pagos bancarios, depuración de inventario, corrección de pedidos de Compras). La tensión principal es estructural: las funciones de control no pueden ejecutarse porque sus insumos —cierres mensuales departamentales y reportes confiables de Odoo— no existen, mientras los períodos contables permanecen abiertos y se modifican retroactivamente, invalidando cualquier reporte ya emitido. El departamento opera, en la práctica, como soporte administrativo y de tesorería suplente en lugar de como órgano de control.

---

## Indicadores del estado actual

| Indicador | Valor | Notas |
| --- | --- | --- |
| Tareas identificadas | 15 | Áreas 1 a 7 del AS-IS |
| Tareas de control no ejecutadas actualmente | 8 | 1.1, 1.2, 1.3, 1.4, 2.2, 2.3, 5.1 (esporádica), 5.3 (reactiva) |
| Tareas en desarrollo / no formalizadas | 3 | 2.1, 2.3, 3.3 |
| Tareas asumidas de forma temporal/suplente | 4 | 3.1, 3.3, 6.1, 6.2 |
| Tareas con dependencia externa | 1 | 5.1 (asesor contable externo) |
| Tareas que dependen de cierres mensuales inexistentes | 5 | 1.1, 1.2, 1.3, 5.3, 7.2 |
| Sistemas y herramientas en uso | 6 | Odoo, Word, plataformas bancarias, WhatsApp, almacenamiento en nube, Excel |
| Tareas con output formal definido | 6 (40%) | 1.4, 3.3, 6.2, 7.1, 7.2, 2.3 (registro) |
| Tareas sin registro/output formal | 3 | 4.1, 6.1, 5.1 (sin reporte de cierre) |

---

## Análisis de la operación actual

### Fortalezas

1. **Verificación de inventario en sistema operativa y confiable.** Es la única función que el dueño del proceso reporta funcionando bien hoy: consulta de existencia, costo, ubicación e historial de movimientos en Odoo para detectar inconsistencias. `[Ev: CTR-3.2 · ISO: 9001:2015 §8.5.1]`
2. **Metodología de inventario cíclico diario establecida.** Existe un flujo definido y recurrente de selección de productos, conteo físico con el almacenista, verificación contra sistema y ajuste, con notificación a gerencia. `[Ev: CTR-3.1, CTR-7.1 · ISO: 9001:2015 §8.5.1]`
3. **Reporte de depuración de inventario estructurado.** La depuración integral genera un reporte en Excel con columnas definidas (Producto, Categoría, Almacén, U/M, Lote, Validado, Odoo, Conteo, Dif, Resultado) entregado a presidencia, con criterio de cierre y transferencia de responsabilidad. `[Ev: CTR-3.3 · ISO: 9001:2015 §7.5.3]`
4. **Enfoque preventivo y de causa raíz en auditoría.** La revisión de auditoría busca la causa raíz del error en origen ("irse a la raíz del problema") para evitar recurrencia, criterio alineado a la mejora y la acción correctiva. `[Ev: CTR-5.1, CTR-2.2 · ISO: 9001:2015 §10.2]`

### Áreas de mejora

1. **Núcleo de control inactivo.** Supervisión general, monitoreo de operaciones, análisis financiero mensual e informe de resultados no se ejecutan; el departamento no está activo y la responsable atiende soporte administrativo en su lugar. Severidad: Alto. `[Ev: CTR-1.1, CTR-1.2, CTR-1.3, CTR-1.4 · ISO: 9001:2015 §9.1.1]`
2. **Períodos contables abiertos y modificación retroactiva.** Los reportes descargados no son confiables porque períodos anteriores siguen siendo modificados —se han hecho registros de un año atrás— alterando cifras de reportes ya emitidos e invalidando análisis previos. Severidad: Alto. `[Ev: CTR-1.2, CTR-1.3, CTR-7.2 · ISO: 9001:2015 §7.5.3 · Norma: Código de Comercio (libros) · Norma: COT — obligaciones SENIAT]`
3. **Parametrización incorrecta de Odoo que distorsiona saldos.** La parametrización errada genera asientos contables equivocados que distorsionan los saldos, base de todos los análisis. Severidad: Alto. `[Ev: CTR-1.2, CTR-1.3 · ISO: 9001:2015 §7.5.3]`
4. **Descuadre mensual recurrente de IVA.** Los libros de IVA compras y ventas no cuadran cada mes, generando inconsistencias en los libros fiscales. Severidad: Alto. `[Ev: CTR-5.2, CTR-7.2 · Norma: LIVA — libros de compras y ventas · ISO: 9001:2015 §8.7.1]`
5. **Libros contables obligatorios no emitidos desde 2023.** Falta incorporar libro diario, libro de inventario y balance; el Código de Comercio exige impresión mensual y no se cumple por ausencia de cierres; la responsable indica no saber descargar el libro diario de Odoo. Severidad: Alto. `[Ev: CTR-7.2 · Norma: Código de Comercio Art. 32-34 · ISO: 9001:2015 §7.5.3]`
6. **Funciones de tesorería asumidas por Contraloría sin segregación.** La ejecución de pagos y la administración de usuarios bancarios recaen en Contraloría de forma temporal, comprometiendo la independencia del control respecto de la operación que controla. Severidad: Alto. `[Ev: CTR-6.1, CTR-6.2 · ISO: 9001:2015 §5.3]`
7. **Administración de usuarios bancarios dispersa.** La gestión del usuario máster está dividida entre dos roles (Contraloría y Administración y Finanzas) sin responsable único ni niveles de aprobación definidos. Severidad: Medio. `[Ev: CTR-6.1 · ISO: 9001:2015 §5.3]`
8. **Organización documental reactiva ante fiscalizaciones.** Desde 2023 la documentación no se archiva preventivamente; al llegar una fiscalización los departamentos buscan y escanean papeles de urgencia, con riesgo de presentar información incompleta. Severidad: Alto. `[Ev: CTR-5.3 · Norma: COT — deberes formales ante SENIAT · ISO: 9001:2015 §7.5.3]`
9. **Asesoría a departamentos sin registro.** La atención de consultas a administración y talento humano se resuelve verbalmente o por mensajería sin dejar trazabilidad. Severidad: Bajo. `[Ev: CTR-4.1 · ISO: 9001:2015 §7.5.1]`
10. **Coordinación de auditorías informal y esporádica.** La coordinación con el asesor contable externo se hace por WhatsApp, sin canal estructurado ni trazabilidad de errores detectados y corregidos; debería ser mensual y formal. Severidad: Medio. `[Ev: CTR-5.1, CTR-5.2 · ISO: 9001:2015 §8.4.1]`
11. **Cuestionarios de control en herramienta manual.** La validación de gestión por departamento se registra en Word y se comunica por llamada o WhatsApp, sin consolidación ni resultados en tiempo real. Severidad: Medio. `[Ev: CTR-2.3 · ISO: 9001:2015 §9.1.3]`
12. **Informes de resultados sin retroalimentación efectiva.** Los informes a gerencia "no los leen igual", lo que limita el impacto del control y la acción correctiva resultante. Severidad: Medio. `[Ev: CTR-1.4 · ISO: 9001:2015 §9.3]`

### Oportunidades (acotadas a Odoo)

1. **Bloqueo de períodos contables cerrados.** La necesidad expresada de impedir modificaciones retroactivas a períodos cerrados corresponde a una capacidad nativa de cierre y bloqueo de fechas en contabilidad. `[Ev: CTR-1.2, CTR-1.3, CTR-7.2 · Odoo: Bloqueo de periodos / Lock dates — Accounting · ISO: 9001:2015 §7.5.3]`
2. **Cuestionarios periódicos a departamentos.** La aplicación de cuestionarios personalizados por departamento con resultados en tiempo real, hoy en Word, puede atenderse con el módulo de encuestas mencionado en el AS-IS. `[Ev: CTR-2.3, CTR-1.1 · Odoo: Encuestas / Surveys — Odoo 19 · ISO: 9001:2015 §9.1.3]`
3. **Localización venezolana para cuadre de IVA y libros fiscales.** El descuadre mensual de IVA y la emisión de libros fiscales se asocian al paquete de localización venezolana, capacidad referida en el propio AS-IS. `[Ev: CTR-5.2, CTR-7.2 · Odoo: Localización venezolana (l10n_ve) — Accounting · Norma: LIVA]`
4. **Libro diario y libros legales desde contabilidad.** La emisión del libro diario, mayor e inventario exigidos por el Código de Comercio, hoy no localizados por el usuario, corresponde a reportes legales del módulo de contabilidad. `[Ev: CTR-7.2 · Odoo: Reportes legales / Libro diario y mayor — Accounting · Norma: Código de Comercio Art. 32-34]`
5. **Aprobación y ejecución de pagos en sistema.** El deseo expresado de automatizar el flujo de aprobación y pago, hoy autorizado por grupo de WhatsApp, corresponde a la gestión de pagos a proveedores con flujo de aprobación en contabilidad. `[Ev: CTR-6.2 · Odoo: Pagos a proveedores y flujo de aprobación — Accounting · ISO: 9001:2015 §5.3]`
6. **Trazabilidad e historial de fichas de producto.** Las mejoras deseadas sobre historial de cambios en fichas de producto y libro de inventario fiscal corresponden a capacidades de trazabilidad y reportes del módulo de inventario. `[Ev: CTR-3.2 · Odoo: Trazabilidad e historial de productos — Inventory · ISO: 9001:2015 §8.5.2]`
7. **Gestión documental para fiscalizaciones.** El archivo digital ordenado y disponible por departamento y período, hoy en nube sin estructura, puede soportarse con la gestión de documentos y adjuntos del sistema. `[Ev: CTR-5.3 · Odoo: Gestión documental / Documents — Documents · ISO: 9001:2015 §7.5.3]`

### Riesgos si se mantiene

1. **Sanciones y multas por incumplimiento fiscal y parafiscal.** El AS-IS cita parafiscales (IVSS) no pagados y descuadres de IVA; sin control activo el riesgo de multas es directo. Impacto: Alto. Probabilidad: Alta. `[Ev: CTR-1.2, CTR-2.2, CTR-5.2 · Norma: LIVA · Norma: Ley del Seguro Social · ISO: 9001:2015 §6.1]`
2. **Información financiera no confiable para la toma de decisiones.** Períodos abiertos, registros retroactivos y parametrización errada producen reportes que pueden invalidarse en cualquier momento. Impacto: Alto. Probabilidad: Alta. `[Ev: CTR-1.2, CTR-1.3, CTR-7.2 · ISO: 9001:2015 §9.1.1]`
3. **Exposición ante fiscalización del SENIAT.** La documentación reactiva y los libros legales no emitidos desde 2023 exponen a la empresa a hallazgos y sanciones en una fiscalización. Impacto: Alto. Probabilidad: Media. `[Ev: CTR-5.3, CTR-7.2 · Norma: COT — deberes formales · Norma: Código de Comercio Art. 32-34]`
4. **Pérdida de independencia del control.** Que Contraloría ejecute pagos y administre usuarios bancarios sobre fondos que debería controlar anula la segregación de funciones. Impacto: Alto. Probabilidad: Alta. `[Ev: CTR-6.1, CTR-6.2 · ISO: 9001:2015 §5.3]`
5. **Concentración en un solo rol.** Todo el conocimiento y ejecución del control reside en el Gerente de Contraloría, que además cubre funciones ajenas; su indisponibilidad detiene el control. Impacto: Alto. Probabilidad: Media. `[Ev: CTR-1.1, CTR-6.2, CTR-3.3 · ISO: 9001:2015 §7.1.2]`
6. **Control ineficaz por falta de retroalimentación.** Si los informes no se leen ni derivan en acción correctiva, el ciclo de control no cierra y los hallazgos se repiten. Impacto: Medio. Probabilidad: Alta. `[Ev: CTR-1.4 · ISO: 9001:2015 §9.3 · ISO: 9001:2015 §10.2]`
7. **Inventario sin base auditable confiable.** Sin la depuración completada y transferida, el inventario hereda errores acumulados que comprometen valoración y cumplimiento del libro de inventario fiscal. Impacto: Medio. Probabilidad: Media. `[Ev: CTR-3.3, CTR-3.2 · Norma: Código de Comercio Art. 32 · ISO: 9001:2015 §8.5.1]`

---

## Conexiones con otros departamentos

| Departamento | Qué necesitan de ellos | Qué les entregan | Medio | Estado |
| --- | --- | --- | --- | --- |
| Todos los departamentos | Cierres mensuales contables, administrativos y operativos | Supervisión, hallazgos y recomendaciones | Plan de trabajo / informe | No operativo (cierres inexistentes) `[Ev: CTR-1.1, CTR-1.2]` |
| Gerencia General | Autorización de pagos; lectura de informes | Informe de resultados; notificación de anomalías; reporte de depuración | Correo / WhatsApp / verbal | Parcial (informes sin retroalimentación) `[Ev: CTR-1.4, CTR-6.2]` |
| Presidencia | Decisión de iniciar depuración de inventario | Reporte de inventario depurado (Excel) | Excel | Activo (tarea única) `[Ev: CTR-3.3]` |
| Compras y Almacén | Conteo físico del almacenista; existencias | Coordinación de inventario cíclico y ajustes | Odoo / coordinación directa | Activo `[Ev: CTR-3.1, CTR-3.2]` |
| Administración (Hotel) | Recepción futura del inventario depurado | Transferencia de responsabilidad de inventario cíclico | Odoo / Excel | Pendiente de transferencia `[Ev: CTR-3.1, CTR-3.3]` |
| Administración y Finanzas | Coordinación de usuarios bancarios máster | Soporte en ejecución de pagos | Plataformas bancarias / WhatsApp | Dispersa, sin responsable único `[Ev: CTR-6.1, CTR-6.2]` |
| Talento Humano y Administración | Consultas a resolver | Asesoría estratégica | WhatsApp / llamada / presencial | Activo, sin registro `[Ev: CTR-4.1]` |
| Asesor contable externo | Ejecución de correcciones contables | Información de errores detectados y causa raíz | WhatsApp | Esporádico, informal `[Ev: CTR-5.1]` |

---

## Herramientas y sistemas actuales

| Herramienta | Tareas principales | Observaciones |
| --- | --- | --- |
| Odoo | Reportes de inventario y contables, estados financieros, verificación y ajuste de existencias, libros fiscales | Parametrización incorrecta; períodos no bloqueados; libro diario no localizado; valoración de inventario no usada `[Ev: CTR-1.2, CTR-3.2, CTR-7.1, CTR-7.2]` |
| Word / Microsoft Office | Informe de resultados; cuestionarios; plan de trabajo | Soporte manual de tareas que podrían sistematizarse `[Ev: CTR-1.4, CTR-2.1, CTR-2.3]` |
| Excel | Reporte de inventario depurado | Estructura de columnas definida `[Ev: CTR-3.3]` |
| Plataformas bancarias (Banplus, BNC, BFC, BM, Bicentenario, Banesco) | Administración de usuarios y ejecución de pagos | Gestión dispersa; sin niveles de aprobación formales `[Ev: CTR-6.1, CTR-6.2]` |
| WhatsApp | Autorización de pagos; asesoría; coordinación con asesor externo | Canal informal sin trazabilidad `[Ev: CTR-4.1, CTR-5.1, CTR-6.2]` |
| Almacenamiento en nube / carpetas digitales | Archivo documental para fiscalizaciones | Sin estructura; uso reactivo `[Ev: CTR-5.3]` |

---

## Mapa de procesos del departamento

### Supervisión y control de gestión
- `CTR-1.1` — Supervisión general de ejecución de procesos por departamento
- `CTR-1.2` — Monitoreo y seguimiento de operaciones
- `CTR-2.3` — Ejecución de entrevistas/cuestionarios periódicos a departamentos

### Análisis financiero y reporte a gerencia
- `CTR-1.3` — Análisis mensual de información financiera
- `CTR-1.4` — Elaboración de informe de resultados para gerencia
- `CTR-7.2` — Descarga de libros contables desde Odoo

### Planificación y gestión de riesgos
- `CTR-2.1` — Elaboración del plan de trabajo del departamento de Contraloría
- `CTR-2.2` — Identificación de riesgos y definición del ambiente de control

### Control de inventario físico
- `CTR-3.1` — Coordinación de inventario cíclico diario con encargado de almacén
- `CTR-3.2` — Verificación en sistema de existencias y movimientos de productos
- `CTR-3.3` — Depuración integral del inventario para entrega a responsable administrativo
- `CTR-7.1` — Descarga de reportes de inventario desde Odoo

### Auditoría y control documental
- `CTR-5.1` — Coordinación de auditorías y envío de información a asesor contable externo
- `CTR-5.2` — Auditoría de movimientos fiscales
- `CTR-5.3` — Organización preventiva de documentación para fiscalizaciones

### Tesorería y asesoría (funciones suplentes)
- `CTR-6.1` — Administración de usuarios de cuentas bancarias corporativas
- `CTR-6.2` — Ejecución de pagos en plataformas bancarias
- `CTR-4.1` — Asesoría estratégica a administración y talento humano
