# Instrucciones de Proyecto — Koral Morrocoy

Ultima actualizacion: 2026-05-04

---

## 1. Objetivo del pipeline

Producir documentos AS-IS confiables por area: toda informacion verificable, discrepancias resueltas o formalmente marcadas. El output de cada area es un AS-IS reescrito en `Output/[Area]/` listo para sign-off.

---

## 2. Fuentes por area

Por cada area se trabaja con tres fuentes en este orden de jerarquia:

| Fuente | Descripcion | Ubicacion |
|---|---|---|
| Inventario de tareas | Lista estructurada de tareas del area | `Input/[Area]/Inventario...` |
| Transcripts (Minutas) | Transcripcion de sesiones de levantamiento | `Transcripts/` |
| AS-IS previo | Documento existente, punto de partida | `Input/[Area]/AS - IS...` |

El AS-IS reescrito que produce Propuesta se guarda en `Output/[Area]/`.

---

## 3. Protocolo de 3 checks

Se ejecuta por area, en este orden. No se omite ningun check.

### CHECK 1 — COBERTURA

Inventario de tareas vs AS-IS previo.

Preguntas a responder:
- Hay tareas en el Inventario que no estan en el AS-IS?
- Hay tareas en el AS-IS que no tienen respaldo en el Inventario?

Resultado esperado: lista de gaps de cobertura en ambas direcciones.

### CHECK 2 — COMPLETITUD

Por cada tarea del AS-IS, clasificar el estado de sus campos:

| Estado | Criterio |
|---|---|
| COMPLETO | Todos los campos tienen contenido especifico y verificable |
| PARCIAL | Entre 1 y 4 campos marcados como "Pendiente validar" |
| VACIO | 5 o mas campos marcados como "Pendiente validar" |

Orden de prioridad para llenado: VACIAS primero, luego PARCIALES. Fuente para llenado: Transcripts (Minutas).

### CHECK 3 — COHERENCIA

Minuta vs AS-IS campo por campo.

Preguntas a responder:
- La Minuta contradice algo en el AS-IS?
- La Minuta agrega informacion que el AS-IS no tiene?
- Hay informacion en el AS-IS sin respaldo en Minuta ni Inventario?

Resultado esperado:
- Gaps rellenables con fuentes disponibles: se incorporan directamente al AS-IS reescrito.
- Contradicciones directas entre fuentes: se marcan y escalan al usuario.

---

## 4. Criterio de campo validado

Un campo se considera validado cuando cumple las tres condiciones:

1. Tiene contenido especifico — no es generico ni vago.
2. La fuente es identificable — Minuta sesion X, Inventario, AS-IS previo.
3. No contradice otra fuente sin nota explicativa.

Si no cumple las tres condiciones, el campo queda marcado como `⚠️ Pendiente validar en sesion proxima` con descripcion de que se debe validar y con quien.

---

## 5. Criterio de cierre de area

Un area se considera cerrada (lista para sign-off) cuando:

- Todos los checks ejecutados.
- Todas las tareas del Inventario presentes en el AS-IS reescrito, o con justificacion documentada de exclusion.
- Todos los campos son COMPLETO o estan formalmente marcados con `⚠️` con descripcion especifica.
- No hay contradicciones sin resolver entre fuentes.
- `Pendientes.md` y `STATUS.md` actualizados.

El estado "Validada" solo lo puede asignar el usuario. Claude no marca un area como Validada.

---

## 6. Formato del documento AS-IS

### Estructura del archivo

```
# AS - IS: [Area] ([Sub-area si aplica])

Creado: [fecha]

# Área N: [Nombre del area funcional]

- TAREA N.N.N: [Nombre de la tarea]
    - AS-IS N.N.N: [Nombre de la tarea]
        - ¿Qué es esta tarea?
        - ¿Para qué se hace?
        - ¿Qué roles ejecutan esta tarea?
        - ¿Cuándo se hace?
        - ¿Cómo se hace?
        - ¿Qué necesitan para hacer esta tarea?
        - ¿Qué se genera al terminar?
        - ¿Qué sistemas o herramientas usan?
        - ¿Qué pasa cuando las cosas no salen normal?
        - ¿Cómo les gustaría que funcionara idealmente?
    - Propuesta N.N.N: [Nombre de la tarea]
        - [Pendiente / contenido de propuesta de mejora]

---
```

### Reglas de formato

- Numeracion de tareas: seguir la numeracion existente en el AS-IS previo. Si se agrega una tarea nueva, asignar el siguiente numero disponible en la seccion correspondiente.
- Separador `---` entre tareas.
- Nombres de personas: usar nombre real segun la tabla de alias en `CLAUDE.md`. El cargo va entre parentesis.
- Pasos del "Como se hace": numerados secuencialmente (Paso 1, Paso 2...).
- Sistemas y herramientas: listar con descripcion de para que se usa en esa tarea especifica, no descripcion generica.
- Tono: ejecutivo-formal, directo, sin redundancia ni frases de presentacion.
- Idioma: español formal.

### Marcacion de campos pendientes

Cuando un campo no puede llenarse con las fuentes disponibles:

```
⚠️ Pendiente validar en sesion proxima.
```

Cuando la pendencia requiere especificidad:

```
⚠️ Pendiente validar con [nombre/cargo]: [descripcion exacta de que se necesita confirmar].
```

### Campo "Propuesta"

El campo `Propuesta N.N.N` al final de cada tarea es para propuestas de mejora TO-BE. Durante Fase 1 (AS-IS), se deja como `Pendiente.` salvo que el informante haya expresado una mejora deseada en la Minuta, en cuyo caso se documenta en ese campo.

---

## 7. Reglas de escritura para el rol Propuesta

- No inventar informacion. Todo campo completado debe tener fuente identificable.
- No inferir pasos que no estan en ninguna fuente.
- Si una fuente dice algo diferente a otra, no elegir una — marcar con `⚠️` y escalar.
- No usar el nombre de alias en documentos — usar nombre real con cargo.
- No agregar campos que no esten en la estructura estandar.
- No eliminar tareas del AS-IS aunque no aparezcan en el Inventario — marcar como sin respaldo y escalar.

---

## 8. Output de cada area

| Archivo | Descripcion | Ubicacion |
|---|---|---|
| AS-IS reescrito | Documento final del area | `Output/[Area]/AS-IS [Area].md` |
| Actualizacion de Pendientes | Items marcados `⚠️` registrados | `Arquitectura/Pendientes.md` |
| Actualizacion de STATUS | Estado del area actualizado | `STATUS.md` |
| Log de sesion | Registro del trabajo realizado (si el volumen lo justifica) | `Arquitectura/Log-Sesiones/YYYY-MM-DD.md` |
