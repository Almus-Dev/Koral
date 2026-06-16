---
proyecto: Koral Morrocoy (Hotel)
departamento: Operaciones
codigo_departamento: OPE
documento: RX — Radiografía del Proceso
estado: Borrador — pendiente firma del dueño del proceso
fecha_publicacion: 2026-06-16
fuente_as_is: Output/Operaciones/AS-IS Operaciones.md
---

# RX — Operaciones

## Resumen ejecutivo

Operaciones es el departamento responsable del mantenimiento físico del hotel: tratamiento de la piscina, áreas verdes y externas, electricidad, recepción de servicios básicos (agua, gasoil, gas) y verificación de pozos y aguas negras. El equipo se compone de roles operativos especializados (piscinero, electricistas, jardineros, palmeros, mecánico, operadores de mantenimiento) coordinados por un encargado de operaciones, con apoyo de contratados externos (albañiles, plomeros, mecánico de bombas). La operación es intensamente física y se gestiona casi por completo fuera de cualquier sistema: la coordinación ocurre por radio, WhatsApp y formatos físicos, y el encargado de operaciones no opera Odoo. La tensión principal es la ausencia de registro estructurado de las solicitudes, los activos y los consumos, que concentra el control en el conocimiento del encargado y deja sin trazabilidad las órdenes de trabajo, las entregas de herramientas y los niveles de los tanques.

---

## Indicadores del estado actual

| Indicador | Valor | Notas |
| --- | --- | --- |
| Tareas identificadas | 22 | 6 áreas: piscina, externas, planificación, electricidad, recepción de servicios, pozos y aguas negras. |
| Tareas con dependencia externa | 9 | Gerencia, Ama de Llaves y otros deptos (3.1, 3.2, 4.3); Almacén/Compras (3.3, 3.6); proveedores de servicios (5.1, 5.3, 5.5); mecánico externo de bombas (6.2, 6.4). |
| Sistemas y herramientas en uso | 3 sistemas de coordinación | WhatsApp, radio portátil y formatos físicos (requisición, salida de almacén, planillas). No se usa Odoo en el departamento. |
| Tareas con respaldo definido | 0 (0%) | Ninguna tarea registra respaldo/registro digital; el control de herramientas, órdenes de trabajo y consumos queda en físico o sin registro. |
| Tareas con pendientes de validación | 11 | Marcadas "Pendiente validar en sesión próxima": 1.1, 1.2, 3.4, 3.5, 4.4, 5.1, 5.3, 6.1, 6.2, 6.3, 6.4. |

---

## Análisis de la operación actual

### Fortalezas

1. **Rutinas diarias de mantenimiento estandarizadas en piscina y áreas externas.** Las tareas de inicio de jornada (medición de cloro/pH, aspiración y retrolavado, activación de bombas, limpieza de áreas verdes y recolección de residuos) tienen disparador, frecuencia y pasos definidos, lo que sostiene la operación física diaria sin depender de instrucción externa. `[Ev: OPE-1.1, OPE-1.2, OPE-1.3, OPE-2.1, OPE-2.2 · ISO: 9001:2015 §8.5.1]`
2. **Especialización clara de roles operativos.** Cada tipo de trabajo (eléctrico, piscina, plomería, jardinería, palmero, bombas) se asigna al operador con el perfil adecuado, y las emergencias eléctricas críticas se canalizan al único electricista habilitado, con personal de guardia por turno. `[Ev: OPE-3.4, OPE-4.6 · ISO: 9001:2015 §7.2]`
3. **Procedimientos de seguridad presentes en tareas de riesgo.** El llenado de gas, las emergencias eléctricas y el mantenimiento de aguas negras contemplan EPP específico, delimitación de área, verificación de extintores y parada de emergencia. `[Ev: OPE-4.6, OPE-5.6, OPE-6.4 · ISO: 9001:2015 §8.5.1]`
4. **Verificación preventiva rutinaria de infraestructura crítica.** El pozo de agua y las bombas de aguas negras se verifican periódicamente (nivel, luces piloto, sonido del motor) antes de que falle el suministro o el drenaje. `[Ev: OPE-6.1, OPE-6.3 · ISO: 9001:2015 §7.1.3]`

### Áreas de mejora

1. **Órdenes de trabajo sin registro: las solicitudes viven fuera de todo sistema.** Las solicitudes de gerencia y de los demás departamentos se reciben por WhatsApp, radio o de forma verbal y no se cargan a ninguna plataforma; el encargado no usa Odoo, por lo que la solicitud queda fuera de seguimiento hasta que alguien más la registre, si es que ocurre. No hay trazabilidad del tiempo de respuesta ni del cierre de la falla. Severidad: Alto. `[Ev: OPE-3.1, OPE-3.2 · ISO: 9001:2015 §8.5.1]`
2. **Sin control de inventario de insumos ni de entrega/devolución de herramientas.** La solicitud de insumos a almacén y la entrega de herramientas desde el taller se manejan con formatos físicos o de forma directa, sin registro de qué herramienta salió, a qué operador y cuándo se devolvió; queda pendiente de validar si existe algún control. El operador llega al sitio y descubre que falta la pieza o que la herramienta no funciona, duplicando traslados. Severidad: Alto. `[Ev: OPE-3.3, OPE-3.5, OPE-4.4 · ISO: 9001:2015 §7.1.3]`
3. **Sin programa de mantenimiento preventivo planificado.** La planificación eléctrica y la atención de fallas son mayormente reactivas; el trabajo preventivo depende del criterio del operador y no de un calendario por tiempo de uso de los activos (contactores, bombas, planta). Severidad: Medio. `[Ev: OPE-4.2, OPE-4.5 · ISO: 9001:2015 §7.1.3]`
4. **Medición manual y subjetiva de parámetros críticos.** La calidad del agua de piscina se evalúa por comparación visual de color y los niveles de tanques (agua, gasoil, gas) se leen con vara o reloj indicador, sin registro estructurado de las lecturas. Severidad: Medio. `[Ev: OPE-1.1, OPE-5.4, OPE-5.5 · ISO: 9001:2015 §7.1.5]`
5. **Carga administrativa concentrada en el encargado de operaciones.** Recepción de solicitudes, requisiciones, coordinación con almacén/compras y supervisión física recaen sobre un único rol, lo que el propio equipo identifica como cuello de botella operativo. Severidad: Medio. `[Ev: OPE-3.4, OPE-3.6, OPE-5.1]`
6. **Solicitud de compra ruteada por almacén en lugar de compras.** La solicitud de materiales faltantes se canaliza a través de almacén y no directamente al departamento de compras, lo que el equipo señala como ruta incorrecta que añade demora a las reparaciones. Severidad: Bajo. `[Ev: OPE-3.6, OPE-3.3 · ISO: 9001:2015 §8.4]`

### Oportunidades (acotadas a Odoo)

1. **Registro de órdenes de trabajo de mantenimiento.** Las solicitudes hoy verbales/WhatsApp de gerencia y otros departamentos podrían capturarse como solicitudes y órdenes con estado y responsable, dando trazabilidad al tiempo de respuesta y al cierre. `[Ev: OPE-3.1, OPE-3.2, OPE-4.5 · Odoo: gestión de solicitudes y órdenes de mantenimiento — Maintenance]`
2. **Mantenimiento preventivo por activo.** Los equipos críticos (bombas de piscina, bombas sumergibles de aguas negras, planta eléctrica, pozo) podrían registrarse como activos con planes de mantenimiento preventivo por tiempo/uso, sustituyendo la dependencia del criterio individual. `[Ev: OPE-4.2, OPE-6.1, OPE-6.3 · Odoo: ficha de equipos y mantenimiento preventivo — Maintenance · ISO: 9001:2015 §7.1.3]`
3. **Requisiciones internas y control de existencias de insumos.** La solicitud de insumos a almacén y la salida de material podrían gestionarse como requisiciones y movimientos de inventario, evitando que el operador descubra el faltante en sitio. `[Ev: OPE-3.3, OPE-3.5 · Odoo: requisiciones internas y movimientos de existencias — Inventory]`
4. **Solicitud de compra de materiales faltantes.** La reposición de materiales no disponibles en almacén podría originarse como solicitud de compra trazable hacia el departamento de compras, en lugar de formatos físicos por WhatsApp. `[Ev: OPE-3.6 · Odoo: solicitudes de compra — Purchase]`

### Riesgos si se mantiene

1. **Pérdida de solicitudes de mantenimiento sin trazabilidad.** Al no quedar registradas, las solicitudes prioritarias simultáneas se atienden por criterio del momento y las reparaciones pendientes pueden olvidarse, especialmente las que esperan materiales de fuera de la localidad. Impacto: Alto. Probabilidad: Alta. `[Ev: OPE-3.1, OPE-3.6 · ISO: 9001:2015 §8.5.1]`
2. **Colapso del suministro de agua o del drenaje por falla no anticipada.** El pozo y las bombas de aguas negras dependen de verificación manual e intervención de un mecánico externo; un tiempo de respuesta largo puede dejar al hotel sin agua o provocar rebose de aguas negras hacia áreas comunes. Impacto: Alto. Probabilidad: Media. `[Ev: OPE-6.2, OPE-6.4 · ISO: 9001:2015 §7.1.3]`
3. **Apagón total por desabastecimiento de combustible.** La gestión de niveles de gasoil/gas por lectura manual y solicitud bajo demanda expone al hotel a quedarse sin autonomía energética o sin gas para cocinas si el proveedor se retrasa. Impacto: Alto. Probabilidad: Media. `[Ev: OPE-5.3, OPE-5.5, OPE-4.6]`
4. **Pérdida o deterioro de herramientas y activos.** Sin registro de entrega y devolución, no hay responsabilidad rastreable sobre las herramientas del taller ni control de su estado, lo que favorece pérdidas y tiempo perdido por equipo defectuoso. Impacto: Medio. Probabilidad: Media. `[Ev: OPE-3.5, OPE-4.4 · ISO: 9001:2015 §7.1.3]`
5. **Eventos de calidad del agua de piscina por medición subjetiva.** La dosificación de cloro depende de una lectura visual; una medición errónea puede dejar el agua fuera de parámetros seguros para los huéspedes. Impacto: Medio. Probabilidad: Media. `[Ev: OPE-1.1, OPE-1.4 · ISO: 9001:2015 §8.5.1]`

---

## Conexiones con otros departamentos

| Departamento | Qué necesitan de ellos | Qué les entregan | Medio | Estado |
| --- | --- | --- | --- | --- |
| Gerencia | Solicitudes de mantenimiento y actividades especiales; autorización de compras | Ejecución de trabajos solicitados; aviso de autonomía de combustible | WhatsApp, llamada, radio, verbal | Sin sistema; queda fuera de Odoo `[Ev: OPE-3.1, OPE-5.4]` |
| Ama de Llaves | Reporte semanal (lunes) y reportes inmediatos de fallas en habitaciones | Reparaciones (eléctricas, bombillos, manijas, pintura) | Reporte físico, radio, WhatsApp | Activo; en físico/verbal `[Ev: OPE-3.2, OPE-4.3]` |
| Otros deptos (A&B, Recepción, Marina) | Solicitudes de mantenimiento puntual | Atención de la falla reportada | Verbal, radio, WhatsApp | Activo; sin registro `[Ev: OPE-3.2]` |
| Almacén | Insumos y materiales para mantenimiento | Requisición / formato de solicitud | Formato físico, verbal, WhatsApp | Activo; en físico `[Ev: OPE-3.3, OPE-3.5]` |
| Compras | Adquisición de materiales faltantes y coordinación con proveedores de servicios | Solicitud/requisición de compra con especificaciones | Formato físico, WhatsApp (vía almacén) | Ruta indirecta; el equipo pide ruta directa `[Ev: OPE-3.6, OPE-5.1, OPE-5.3]` |
| Administración | Procesamiento de pago a proveedores | Remisión/factura firmada de agua, gasoil y gas | Documento físico | Activo `[Ev: OPE-5.2, OPE-5.4]` |
| Gestión de Calidad y Seguimiento | — | — | — | Gestiona actualmente las solicitudes de llenado de tanques (agua, gasoil, gas) `[Ev: OPE-5.1, OPE-5.3, OPE-5.5]` |
| Proveedores externos / contratados | Servicio de cisterna (agua), gasoil, gas; mecánico de bombas; albañiles y plomeros | Recepción y supervisión del servicio; verificación de cantidades | Coordinación vía compras / contacto directo | Activo; sin sistema `[Ev: OPE-5.2, OPE-6.2, OPE-6.4]` |

---

## Herramientas y sistemas actuales

| Herramienta | Tareas principales | Observaciones |
| --- | --- | --- |
| WhatsApp | Recepción de solicitudes, coordinación de cuadrillas, aviso de niveles de tanque | Canal principal de coordinación; sin trazabilidad ni cierre formal `[Ev: OPE-3.1, OPE-3.2, OPE-4.5, OPE-5.1]` |
| Radio portátil (walkie-talkie) | Asignación de actividades y emergencias en campo | Respuesta inmediata; sin registro `[Ev: OPE-3.4, OPE-4.6, OPE-4.7]` |
| Formatos físicos (requisición, salida de almacén, planilla de combustible/gas) | Solicitud de insumos, salida de material, control de llenados | En papel; no integrados a inventario `[Ev: OPE-3.3, OPE-3.6, OPE-5.6]` |
| Instrumentos de medición (recolector de muestra, vara, reloj/medidor de tanque, manómetro, multímetro) | Cloro/pH, nivel de tanques y pozo, pruebas eléctricas | Lectura manual; cloro/pH por comparación visual `[Ev: OPE-1.1, OPE-5.4, OPE-5.5, OPE-6.1]` |
| Equipos de piscina (bomba centrífuga, filtro de arena, válvulas, tablero) | Filtrado y circulación del agua | Operación y encendido manual `[Ev: OPE-1.2, OPE-1.3]` |
| Tableros eléctricos y sistema de transferencia | Iluminación externa, planta eléctrica, emergencias | Maniobra manual de interruptores `[Ev: OPE-4.1, OPE-4.6, OPE-4.7]` |
| Bombas sumergibles y tableros con alternador (pozo y aguas negras) | Suministro de agua y drenaje | Verificación manual de luces piloto y sonido `[Ev: OPE-6.1, OPE-6.3]` |
| EPP especializado (alta tensión, nitrilo, careta arc flash) | Emergencias eléctricas y mantenimiento de aguas negras | Presente en tareas de riesgo `[Ev: OPE-4.6, OPE-6.4]` |
| Herramientas de taller y jardinería (guarañas, sopladora, polipastos, extractores) | Poda, izamiento, reparaciones | Sin inventario digital `[Ev: OPE-2.3, OPE-3.5, OPE-6.4]` |

Nota: el departamento no utiliza Odoo en ninguna de sus tareas; el encargado de operaciones no maneja la plataforma `[Ev: OPE-3.1, OPE-3.3, OPE-3.6]`.

---

## Mapa de procesos del departamento

### Tratamiento y operación de piscina
- `OPE-1.1` — Medición de cloro y pH
- `OPE-1.2` — Aspiración y retrolavado de piscina
- `OPE-1.3` — Activación de bombas de piscina
- `OPE-1.4` — Mantenimiento nocturno de piscina (vertido de cloro)

### Mantenimiento de áreas externas y jardinería
- `OPE-2.1` — Limpieza de áreas verdes
- `OPE-2.2` — Recolección de potes de residuos
- `OPE-2.3` — Podar matas

### Planificación, asignación y abastecimiento de trabajos
- `OPE-3.1` — Recepción de solicitud de gerencia
- `OPE-3.2` — Recepción de solicitud de ama de llaves u otros departamentos
- `OPE-3.3` — Solicitud de insumos a almacén
- `OPE-3.4` — Encomiendas de actividades al equipo operativo
- `OPE-3.5` — Entrega de herramientas y materiales desde el taller
- `OPE-3.6` — Solicitud de compra de suministros y materiales

### Mantenimiento eléctrico
- `OPE-4.1` — Apagar luces de áreas externas
- `OPE-4.2` — Planificación de actividades de electricidad
- `OPE-4.3` — Recepción de reporte de ama de llaves
- `OPE-4.4` — Solicitud de herramientas y materiales a Richard en el taller
- `OPE-4.5` — Ejecución de las actividades solicitadas
- `OPE-4.6` — Atención de solicitudes de emergencia/inmediatas
- `OPE-4.7` — Encendido de luces externas

### Recepción de servicios básicos (agua, gasoil, gas)
- `OPE-5.1` — Recepción de solicitud de llenado de tanque de agua
- `OPE-5.2` — Llenado de tanque de agua
- `OPE-5.3` — Recepción de solicitud de llenado de tanque de gasoil
- `OPE-5.4` — Llenado de tanque de gasoil
- `OPE-5.5` — Recepción de solicitud de llenado de tanque de gas
- `OPE-5.6` — Llenado de tanque de gas

### Verificación y mantenimiento de pozos y aguas negras
- `OPE-6.1` — Verificación del pozo de agua
- `OPE-6.2` — Mantenimiento del pozo
- `OPE-6.3` — Verificación de bombas sumergibles de aguas negras
- `OPE-6.4` — Mantenimiento de las bombas sumergibles de aguas negras
