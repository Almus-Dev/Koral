# Plantilla — Tareas de Implementación en Odoo (Koral)

Molde para redactar las tareas de implementación a partir del TO-BE. La unidad es el **grupo de similitud (GS)**: un grupo = una tarea. Sirve para cargar tareas a Odoo Project y para que QA y la gerencia de proyecto del cliente verifiquen qué está listo y qué no.

Aprobado sobre el ejemplo GS-001 (2026-06-30).

---

## Estructura fija de cada tarea

```
# GS-0NN · [Nombre del grupo]

**Tipo:** [Configuración / Desarrollo / Migración / Integración / Validación, o combinación] · **Módulo:** [módulo(s) Odoo, en español] · **Edición:** [Community / Enterprise]
**Áreas:** [departamentos involucrados] · **Fase:** [N] · **Depende de:** [GS-... o —] · **Estado:** [Pendiente / En progreso / Lista / Validada por cliente / Fuera de alcance] · **Prioridad:** [★ / ★★ / ★★★]

### Qué atiende
[2-4 oraciones: la situación actual que se resuelve y para qué sirve la tarea. Contexto, no lista.]

### Cómo se configura
[Párrafo(s) en prosa con la solución: qué se parametriza, qué se llena y qué no, quién. Honesto cuando algo no es nativo de un clic o lo aporta la localización. Cerrar con las rutas de referencia en formato `Módulo > Menú > Acción`.]

### Revisión posterior (QA / gerencia de proyecto)
[Pruebas numeradas, sencillas, que cualquiera pueda ejecutar tras la configuración. Cada prueba: acción + resultado esperado.]

La tarea se da por **Lista** cuando [condición: todas las pruebas se cumplen].

### Trazabilidad
GS-0NN ([códigos de tarea del inventario]) · Propuesta [PROP-...]
```

---

## Reglas de redacción

1. **Redacción humana y profesional, concisa.** Sin relleno, sin listas donde la prosa comunica mejor, sin emojis.
2. **Una tarea por grupo.** El código GS va en el nombre para mantener la trazabilidad al TO-BE.
3. **Si una tarea se hace muy grande, se divide** en subtareas GS-0NN-a, GS-0NN-b (mismo grupo, alcance partido), cada una con su propia estructura completa. Una tarea es "muy grande" cuando abarca configuraciones de módulos distintos o su revisión QA supera ~6 pruebas.
4. **El estado es a nivel de grupo.** No se trackean actividades sueltas como subtareas; lo que marca listo/no-listo es la revisión posterior (QA).
5. **La revisión QA es el contrato de "Listo".** Debe ser verificable por alguien no técnico.
6. **Honestidad técnica.** Lo que no sea nativo de un clic, lo que dependa de la localización venezolana, o de la edición Enterprise, se indica.
7. **Departamento y módulo son etiquetas**, no jerarquía; la tarea vive a nivel de grupo.

## Estados
- **Pendiente** — sin iniciar.
- **En progreso** — en configuración.
- **Lista** — configurada y con la revisión QA cumplida.
- **Validada por cliente** — aprobada por el dueño del proceso / PM del cliente.
- **Fuera de alcance** — no es configuración de Odoo (externo, físico o de terceros).

## Tipos
Configuración · Desarrollo · Migración · Integración · Validación (pueden combinarse).

## Prioridad (esquema de estrellas, como Odoo)
- **★★★ Alta** — habilitadores (maestros/estructura), núcleo transaccional imprescindible y cumplimiento fiscal obligatorio.
- **★★ Media** — operación e ítems importantes que no frenan el arranque.
- **★ Baja** — desarrollo y externos (dependen de terceros/definiciones), mejoras no urgentes y fuera de alcance.

Regla: no arrancar una tarea si su "Depende de" no está en Lista.

## Carga a Odoo Project
GS = tarea del proyecto "Implementación Odoo"; Estado = etapa Kanban; la revisión QA vive en la descripción de la tarea; Depende de = dependencias de tarea. El nombre lleva el código GS.

---

## Ejemplo de referencia — GS-001

# GS-001 · Maestro de proveedores y clientes

**Tipo:** Configuración y migración · **Módulo:** Contactos (con localización venezolana) · **Edición:** Community
**Áreas:** Compras y Almacén, Administración/CCS · **Fase:** 1 · **Depende de:** — · **Estado:** Pendiente

### Qué atiende
El registro de terceros se lleva hoy de forma dispersa: se duplican proveedores, cada quien los crea a su manera y con frecuencia quedan sin los datos fiscales necesarios para operarlos. Esta tarea establece un maestro único y confiable de proveedores y clientes, que es la base del ciclo de compras, ventas y contabilidad.

### Cómo se configura
Los datos fiscales quedan obligatorios en el alta del contacto —RIF, tipo de contribuyente y porcentaje de retención—; los datos bancarios no se exigen en este esquema. La validación que impide un RIF repetido la aporta la localización venezolana, por lo que se confirma con la localización instalada y no se construye manualmente. La creación de contactos se restringe al departamento responsable mediante grupos de acceso. Por último, se migra el maestro actual depurando duplicados y completando la información fiscal faltante.

Rutas de referencia: `Contactos > Crear` para el alta y los campos obligatorios; `Ajustes > Usuarios y compañías > Grupos` para el permiso de creación.

### Revisión posterior (QA / gerencia de proyecto)
1. Guardar un contacto sin RIF, tipo de contribuyente o retención: el sistema debe impedirlo.
2. Registrar un segundo contacto con un RIF ya existente: el sistema debe bloquearlo.
3. Intentar crear un contacto con un usuario ajeno al departamento responsable: no debe permitirlo.
4. Buscar varios proveedores conocidos en el maestro migrado: deben aparecer una sola vez y con sus datos fiscales completos.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-001 (COM-1.1, CCS-4.5.1) · Propuesta PROP-NAT-001
