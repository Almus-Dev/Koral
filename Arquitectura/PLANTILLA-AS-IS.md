# Plantilla Estandar — Documento AS-IS

Uso: todo documento AS-IS producido por este proyecto debe seguir esta estructura exacta.
Los bloques entre corchetes `[...]` son instrucciones internas — no aparecen en el documento final.

---

# AS - IS: [Nombre del Area] ([Sub-area si aplica])

Creado: [fecha de creacion del documento]

---

# Área [N]: [Nombre del area funcional]

[Una area funcional agrupa tareas relacionadas bajo un mismo proceso o responsabilidad. Puede haber multiples areas en un documento.]

- TAREA [N.N.N]: [Nombre descriptivo de la tarea]

    [El nombre de la tarea debe coincidir con el que aparece en el Inventario de tareas. Si la tarea no aparece en el Inventario, indicar la fuente de origen.]

    - AS-IS [N.N.N]: [Nombre descriptivo de la tarea]

        - ¿Qué es esta tarea?
            - [Descripcion concisa de en que consiste la tarea. Que se hace, sobre que objeto o informacion se opera. No incluir el por que ni el como aqui.]

        - ¿Para qué se hace?
            - [Proposito o razon de negocio de la tarea. Que decision, registro o resultado habilita esta tarea.]

        - ¿Qué roles ejecutan esta tarea?
            - [Nombre real (Cargo o Departamento): descripcion del rol en esta tarea especifica.]
            - [Listar todos los roles involucrados. Usar nombre real segun tabla de alias en CLAUDE.md. Si hay mas de un rol, listar cada uno en linea separada.]

        - ¿Cuándo se hace?
            - Disparador: [evento o condicion que inicia la tarea]
            - Frecuencia: [periodicidad — diaria / semanal / mensual / aleatoria / por demanda. Incluir restricciones de horario si las hay.]

        - ¿Cómo se hace?
            - Paso 1: [primer paso]
            - Paso 2: [segundo paso]
            - [Continuar numerando. Cada paso es una accion concreta y discreta. No agrupar acciones distintas en un mismo paso.]

        - ¿Qué necesitan para hacer esta tarea?
            - [Insumos, accesos, herramientas o informacion previa que se requiere para poder ejecutar la tarea. Puede ser un sistema, un archivo, un permiso o el output de otra tarea.]

        - ¿Qué se genera al terminar?
            - [Output concreto de la tarea: documento, registro en sistema, notificacion, decision tomada. Debe ser especifico y verificable.]

        - ¿Qué sistemas o herramientas usan?
            - [Sistema o herramienta]: [para que se usa especificamente en esta tarea, no descripcion generica del sistema.]
            - [Listar cada sistema en linea separada.]

        - ¿Qué pasa cuando las cosas no salen normal?
            - [Descripcion de las excepciones, errores o casos borde conocidos y como se manejan. Si no se conoce, marcar con ⚠️.]

        - ¿Cómo les gustaría que funcionara idealmente?
            - [Mejora deseada expresada por el informante en la Minuta. Si no hay expresion de mejora registrada, dejar como Pendiente.]

    - Propuesta [N.N.N]: [Nombre descriptivo de la tarea]
        - [Propuesta de mejora TO-BE basada en lo expresado por el informante. Durante Fase 1 (AS-IS), dejar como "Pendiente." salvo que la Minuta contenga una mejora deseada explicita.]

---

[Separador --- obligatorio entre tareas. Repetir el bloque TAREA para cada tarea del area. Repetir el bloque Area para cada area funcional del documento.]

---

## Reglas de uso de esta plantilla

1. No modificar los nombres de los campos (las preguntas).
2. No agregar campos que no esten en esta estructura.
3. No eliminar campos — si no hay informacion disponible, marcar con `⚠️ Pendiente validar en sesion proxima.`
4. Si la pendencia requiere especificidad: `⚠️ Pendiente validar con [nombre/cargo]: [que se necesita confirmar].`
5. Nombres de personas: usar nombre real con cargo entre parentesis. Nunca usar alias.
6. Pasos del "Como se hace": numerados, una accion por paso.
7. Tono: ejecutivo-formal, directo, sin redundancia.
8. Idioma: español formal.
9. La seccion "Propuesta" es para TO-BE. En Fase 1 va como "Pendiente." salvo mejora explicita del informante.
