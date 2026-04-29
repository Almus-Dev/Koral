# KM-MIN-001: Administración y Finanzas (HOTEL-LIBNY) - Sesion 1

Fecha: 17 de marzo de 2026

### 📝 Informe de la reunión entre Rodrigo Gramcko y Administración Koral Ohs

### 📜 Contexto:

La reunión tuvo como objetivo principal realizar un levantamiento detallado y análisis del inventario de tareas relacionadas con la administración y operación de caja, recepción y alimentos y bebidas en Koral Ohs. Se buscó entender los procesos actuales, validar roles, herramientas utilizadas y detectar oportunidades de mejora, especialmente en la integración y automatización con el sistema Odoo y otros sistemas como Cloud y Poster. La sesión también abordó problemas técnicos de conexión que afectaron la comunicación.

### 📅 Agenda:

- Revisión y validación del inventario de tareas de recepción y caja (primer y segundo turno).
- Análisis detallado de cada tarea: descripción, frecuencia, roles involucrados, herramientas y sistemas usados, resultados esperados y manejo de excepciones.
- Conciliación y verificación de pagos de clientes en bancos nacionales y sistemas Cloud y Poster.
- Registro y facturación en Odoo, incluyendo validación de datos y emisión de recibos y facturas.
- Procesos específicos para alimentos y bebidas, con uso del sistema Poster y su integración con Odoo.
- Discusión sobre problemas técnicos y limitaciones actuales, como la falta de multimoneda en Cloud y la imposibilidad de anular registros en Poster.
- Propuesta y discusión de mejoras, especialmente en la automatización de recibos y conciliaciones.
- Temas espontáneos relacionados con anticipos, ajustes y problemas en la gestión de actividades duplicadas.
- Pausa técnica debido a problemas de conexión.

### 🔑 Cifras clave:

- Recepción puede recibir entre 1 y 20 confirmaciones de pago por día, con días que pueden llegar hasta 100 confirmaciones o ninguno.
- Pago de hospedaje y pack adicional dividido en dos partes: 50% anticipado y 50% al llegar el cliente.
- Ejemplo de anticipo mensual mencionado: 609 euros.
- Tamaño sugerido para recibo impreso: aproximadamente 8 centímetros de ancho.
- Anticipos y ajustes mencionados con valores específicos: 1.54, 0.47, 705 (sin especificar moneda), 46 bolívares, 1789 (sin especificar moneda).

### 📋 Temas detallados:

### 1️⃣ 💼 Inventario y validación de tareas de recepción y caja

- Se revisó un inventario que unifica funciones de Lidny y Juan.
- Se identificó que recepción es responsable principal de registrar pagos en Odoo, aunque en casos de alta carga administrativa, administración puede apoyar.
- Se confirmó que recepción no tiene acceso directo al banco, solo administración.
- Se utiliza un celular corporativo con WhatsApp para enviar comprobantes de pago móvil o transferencias.
- Registro en Cloud y Odoo: recepción registra pagos en Cloud (como pagos en la ficha del cliente) y luego en Odoo como recibos de cobro.
- Se enfatizó la necesidad de validar y conciliar pagos entre reporte de punto de venta y sistema Cloud, con ajustes manuales cuando hay errores.

### 2️⃣ 📊 Generación y conciliación de informes

- Al finalizar cada turno, recepcionistas generan archivos XLSX desde Cloud con información de actividad diaria, caja en bolívares y divisas.
- Administración revisa estos archivos para conciliar pagos y detectar errores.
- En caso de errores, se solicita a recepción anular y corregir registros, proceso supervisado por Adriana.
- Se destacó que Cloud no es multimoneda, por lo que el efectivo en bolívares se debe ingresar manualmente, lo que genera complejidad.

### 3️⃣ 💵 Recepción y verificación de efectivo y divisas

- Recepción cierra caja y entrega informe a administración.
- Administración verifica que el efectivo retirado coincida con lo registrado en Cloud y Odoo.
- Se registran observaciones en caso de anulaciones o correcciones.
- Actualmente, la impresión de recibos de caja es manual, con tickets escritos a mano y firmados, lo que genera una oportunidad de mejora para automatizar este proceso en Odoo.
- Se propuso implementar un recibo automático pequeño (aprox. 8 cm) para impresión rápida y firma.

### 4️⃣ 🧾 Registro y facturación en Odoo

- Administración es responsable de registrar clientes, recibos de cobro y facturas en Odoo, especialmente en casos donde recepción no puede hacerlo por carga o falta de usuario.
- Se explicó que Odoo no tiene tarifario ni cálculo automático de IVA, por lo que se usa una tabla Excel para discriminar base imponible y aplicar impuestos correctamente.
- Facturas se imprimen desde Odoo, aunque actualmente se usan facturas de contingencia por falta de máquina fiscal.
- Se registran datos completos de clientes, no se usan contactos genéricos, para cumplir con requisitos legales.

### 5️⃣ 🍽️ Procesos en alimentos y bebidas (IB)

- Se utiliza el sistema Poster para registro de ventas y cierres de caja, con posterior registro en Odoo por administración.
- Poster no permite anulaciones ni rectificaciones; cualquier error se corrige mediante notas o fe de erratas.
- Se genera archivo XLSX desde Poster con informe de turno y recibos para conciliación.
- Administración revisa y registra consumos y pagos en Odoo para facturación.
- Se trabaja en un proyecto para integrar y centralizar operaciones en un sistema cloud basado en Odoo, eliminando la doble gestión.

### 6️⃣ ⚠️ Manejo de errores y excepciones

- En caso de errores en registros de pagos o cierres, se informa a recepción para anulación y corrección.
- Poster no permite anulaciones, por lo que se documentan errores y se corrigen manualmente.
- En Cloud, se pueden anular pagos erróneos para evitar que recepcionistas tengan que cubrir diferencias.

### 7️⃣ 🛠️ Problemas técnicos y operativos

- Problemas recurrentes de conexión a internet afectaron la comunicación durante la reunión.
- Limitaciones del sistema Cloud (no multimoneda) y Poster (sin anulaciones) generan trabajo manual y riesgos de errores.
- Falta de usuarios Odoo para recepción limita la automatización y obliga a administración a hacer registros manuales.
- Se mencionó la necesidad de mejorar la impresión de recibos y la conciliación automática.

### 8️⃣ 🗂️ Temas adicionales espontáneos

- Se discutieron problemas con anticipos duplicados y ajustes pendientes, con montos específicos y dificultades para aplicar pagos correctamente.
- Se mencionó la necesidad de eliminar actividades duplicadas para evitar confusiones y trabajo repetido.
- Se evidenció cansancio y frustración por la gestión de anticipos y ajustes.

### 🤝 Conclusión:

La reunión permitió un análisis exhaustivo de los procesos administrativos y operativos relacionados con la gestión de pagos, caja y facturación en Koral Ohs. Se identificaron claramente los roles, herramientas y flujos actuales, así como las limitaciones técnicas que generan trabajo manual y riesgos de errores. Se detectaron oportunidades de mejora, especialmente en la automatización de recibos y conciliaciones mediante Odoo, y en la integración de sistemas para evitar duplicidades y facilitar la gestión. La comunicación se vio afectada por problemas técnicos, pero se acordó continuar con el levantamiento en próximas sesiones.

### 🎯 Enfoque en el punto más importante:

Automatización y mejora del proceso de conciliación y emisión de recibos en Odoo

El tema central y más relevante de la reunión fue la necesidad de optimizar y automatizar el proceso de conciliación de pagos y la emisión de recibos dentro del sistema Odoo, para reducir la carga manual, minimizar errores y mejorar la trazabilidad. Actualmente, la recepción registra pagos en Cloud y Poster, sistemas que presentan limitaciones: Cloud no soporta multimoneda y Poster no permite anulaciones ni rectificaciones, lo que obliga a realizar conciliaciones manuales y ajustes posteriores.

Administración es la encargada de validar y conciliar estos pagos, generando reportes en Excel y revisando cada cierre de caja para asegurar que los montos coincidan con lo recibido en efectivo y transferencias. En caso de errores, se solicita a recepción anular y corregir registros, proceso que puede ser lento y propenso a fallas.

Además, la impresión de recibos es actualmente manual: se imprimen tickets genéricos, se escriben montos a mano y se firman, lo que es ineficiente y poco profesional. Se propuso implementar en Odoo la generación automática de recibos de caja en formato pequeño (aproximadamente 8 cm de ancho), que puedan imprimirse rápidamente y firmarse, agilizando el proceso y mejorando el control.

También se destacó la falta de usuarios Odoo para recepción, lo que limita que ellos mismos registren pagos y facturen, aumentando la dependencia de administración y la duplicidad de tareas.

Finalmente, se mencionó un proyecto en desarrollo para integrar y centralizar todas las operaciones en un sistema cloud basado en Odoo, eliminando la necesidad de usar múltiples sistemas y facilitando la gestión integral de reservas, pagos, caja y facturación. Esta integración será clave para mejorar la eficiencia y reducir errores en el futuro cercano.

Este enfoque en la automatización y centralización es fundamental para optimizar los procesos administrativos, mejorar la experiencia del cliente y facilitar el trabajo del equipo operativo y administrativo.