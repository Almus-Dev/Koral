# Formato de redacción — Propuestas TO-BE (Koral)

Define cómo se escribe cada propuesta de la hoja "Propuestas" del TO-BE. Aprobado por el cliente (Alejandro) el 2026-06-17 sobre el ejemplo PROP-NAT-001. Todas las propuestas deben seguir este formato; es replicable tarea por tarea.

## Principios

1. **Entender la necesidad primero, pero NO escribirla.** Antes de redactar, comprende qué duele y qué hace falta (desde el AS-IS / RX). Eso fundamenta la solución, pero el texto de la propuesta NO lleva una sección "Necesidad"; va directo a la solución.
2. **Prosa humana, no listas.** Se escribe en párrafos corridos, en tono natural y directo —como lo escribiría el propio cliente en un comentario—, no en viñetas ni en lenguaje de manual.
3. **El qué Y el cómo.** No basta con decir qué resuelve. Hay que decir cómo se hace: qué se configura, qué se llena y qué no, quién lo hace, cómo se comporta el sistema.
4. **Ruta verificable.** Toda propuesta incluye al menos una ruta de navegación concreta en Odoo, en formato `Módulo > Menú > Acción`. Ejemplos: `Contactos > Crear`, `Inventario > Recepciones > Nuevo`. El TO-BE debe poder verificarse siguiendo esa ruta en el sistema.
5. **Honestidad sobre lo nativo.** Si algo no se logra con un clic nativo, se dice explícitamente y se marca que se confirma el detalle contra la documentación oficial de Odoo antes de afirmarlo. No se inventan capacidades ni rutas.
6. **Qué llenar y qué no.** Cuando aplica, se aclara qué campos son obligatorios y cuáles no en este esquema (ej. "los datos bancarios no se exigen"), en vez de hablar en abstracto.
7. **No mencionar la herramienta de configuración (Studio).** El texto va al nivel funcional —qué se llena, cómo se comporta—, no a la herramienta técnica con que se configura.
8. **Sin ruido interno.** No se incluyen aclaratorias que eran correcciones internas del análisis (ej. "no interviene tal departamento"); solo va la solución real.
9. **Alcance claro.** Se nombra el módulo/área sobre el que se trabaja.

## Ejemplo de referencia — PROP-NAT-001 (maestro de proveedores/clientes)

> Se trabaja sobre el módulo de Contactos. El sistema impide crear dos contactos con el mismo RIF, con lo que se acaban los duplicados, y se dejan como obligatorios los datos que de verdad se necesitan para operar al proveedor —RIF, tipo de contribuyente y porcentaje de retención—, de modo que no se pueda completar un alta a medias; los datos bancarios no se exigen en este esquema. Además se define un departamento específico encargado de crear proveedores y clientes, para que el alta no la haga cualquiera.
>
> El alta se hace en `Contactos > Crear`, llenando el RIF, el tipo de contribuyente y la retención. Que solo el departamento encargado pueda crearlos se controla desde `Ajustes > Usuarios y compañías > Grupos`. Lo único que no sale con un clic es el bloqueo del RIF repetido: se asegura con una validación que impide guardar un RIF ya existente, detalle que confirmo contra la documentación antes de dejarlo asentado.

## Método de trabajo

- Se trabaja **grupo por grupo, uno a la vez**, validando con el cliente antes de pasar al siguiente.
- La trazabilidad técnica (anclas Odoo, hallazgos del RX que resuelve) se conserva en `propuestas.json`, fuera del entregable visible.
- Al cerrar las propuestas, se regenera el xlsx con `_trabajo/render_xlsx.py`.
