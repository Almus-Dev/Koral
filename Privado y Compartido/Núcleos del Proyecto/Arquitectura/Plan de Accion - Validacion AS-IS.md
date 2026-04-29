# Plan de Accion: Validacion AS-IS Koral Morrocoy

Creado: 29 de abril de 2026

---

## Objetivo inmediato

Producir documentos AS-IS confiables: toda informacion es verificable, las discrepancias entre Inventario + Minuta + AS-IS estan resueltas o formalmente marcadas para validacion en sesion.

## Objetivo final (siguiente fase)

Gap analysis: comparar AS-IS validado contra estado deseado (TO-BE).

---

## Fases

### Fase 0 — Setup

Definir areas del proyecto y su estado, establecer protocolo de trabajo, integrar la matriz de dimension.

- Entregable: este plan aprobado + tabla de areas completa

### Fase 1 — Ejecucion por area

Por cada area, ejecutar el protocolo de 3 checks (ver seccion Protocolo).

- Entregable por area: AS-IS reescrito + log de pendientes de validacion

### Fase 2 — Revision y sign-off por area

El responsable designado revisa el AS-IS reescrito, aprueba o solicita ajustes.

- Entregable: AS-IS marcado como Validado

### Fase 3 — Gap analysis

*(Fuera de scope actual. Se activa una vez que todos los AS-IS esten en estado Validado.)*

---

## Protocolo por area (los 3 checks)

### CHECK 1 — COBERTURA

Inventario de tareas vs AS-IS existente.

- Faltan tareas en el AS-IS que existen en el Inventario?
- Hay tareas en el AS-IS que no estan en el Inventario?

### CHECK 2 — COMPLETITUD

Por cada tarea, cuantos campos son "Pendiente validar".

Clasificacion por tarea:

| Estado | Criterio |
|---|---|
| COMPLETO | Todos los campos tienen contenido especifico |
| PARCIAL | 1 a 4 campos son Pendiente validar |
| VACIO | 5 o mas campos son Pendiente validar |

Prioridad de llenado: VACIAS primero, luego PARCIALES, usando la Minuta como fuente.

### CHECK 3 — COHERENCIA

Minuta vs AS-IS campo por campo.

- La Minuta contradice algo en el AS-IS?
- La Minuta agrega info que el AS-IS no tiene?
- Hay informacion en el AS-IS sin respaldo en Minuta ni Inventario?

---

## Output por area

- Discrepancias resolvibles con documentos disponibles: se reescriben en el AS-IS directamente.
- Discrepancias no resolvibles: quedan marcadas `⚠️ Pendiente validar en sesion` con descripcion especifica de QUE se debe validar y CON QUIEN.

---

## Criterio de campo validado

Un campo se considera validado cuando:

1. Tiene contenido especifico (no es generico ni vago).
2. La fuente es identificable (Minuta sesion X, Inventario, AS-IS previo).
3. No contradice otra fuente sin nota explicativa.

---

## Estado actual por area

| # | Area | Inventario | Minuta | AS-IS previo | AS-IS reescrito | Estado |
|---|---|---|---|---|---|---|
| 1 | Adm y Finanzas CCS | Leido | 1 sesion leida | Leido | Completo | En revision |
| 2 | Adm y Finanzas HOTEL-Juan | Pendiente | 2 sesiones leidas | Leido | Pendiente | — |
| 3 | Adm y Finanzas HOTEL-Libny | Pendiente | 2 sesiones leidas | Leido | Pendiente | — |
| 4 | Compras y Almacen | Pendiente | 1 sesion leida | Leido | Pendiente | — |
| 5+ | Resto de areas | Por definir | Por definir | Por definir | No iniciado | — |

*(Tabla se actualiza con la matriz de dimension)*

---

## Pendientes para cerrar Fase 0

- [ ] Recibir e integrar la matriz de dimension
- [ ] Confirmar orden de prioridad de areas
- [ ] Confirmar quien valida y aprueba cada AS-IS
- [ ] Completar tabla de estado con todas las areas del proyecto

---

## Historial de cambios

| Fecha | Cambio |
|---|---|
| 2026-04-29 | Version inicial creada |
