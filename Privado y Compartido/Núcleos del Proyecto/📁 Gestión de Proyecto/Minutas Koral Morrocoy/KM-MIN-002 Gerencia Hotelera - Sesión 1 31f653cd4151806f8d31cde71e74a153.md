# KM-MIN-002: Gerencia Hotelera - Sesión 1

Fecha: 9 de marzo de 2026
Participantes: Rodrigo, Adriana y Recepcionista.

### 📝 Informe detallado de la llamada de Rodrigo Gramcko con Calidad, Seguimiento y Control (09 marzo 2026)

---

### 📜 Contexto:

En esta reunión se realizó un levantamiento detallado de las actividades y procesos que ejecuta el área de Calidad, Seguimiento y Control, con el objetivo de documentar cada tarea para su posterior adaptación e implementación en una nueva versión del sistema Odoo. Se revisaron procesos clave como check-in, reservas, gestión de pagos, elaboración de llaves electrónicas y cierre de turno, entre otros. La conversación también abordó herramientas utilizadas, roles involucrados y posibles mejoras en los flujos actuales.

---

### 📅 Agenda:

- Levantamiento y documentación de tareas actuales.
- Detalle del proceso de check-in de huéspedes (con y sin reserva).
- Gestión y validación de pagos en Cloudbeds y conciliación en Odoo.
- Registro y reporte de ingresos en Microsoft Teams.
- Ejecución de cierres de turno y formatos utilizados.
- Elaboración y gestión de llaves electrónicas y magnéticas.
- Proceso de checkout y validación de consumos adicionales.
- Identificación de excepciones y oportunidades de mejora en los procesos.

---

### 🔑 Cifras clave:

- Pago adelantado del 50% para reservas.
- Recargo de 20 USD por pérdida de llave de toalla.
- Tiempo aproximado para check-in: 10 minutos (incluyendo explicación de normativas).
- Métodos de pago múltiples: punto de venta, pago móvil, transferencia, Zelle, efectivo, Cachea, Binance.
- Uso de formatos Excel para cierre de turno con sumas automáticas.
- Dos tipos principales de llaves: electrónicas (chip) y magnéticas (Time Locks).

---

### 📋 Temas detallados:

### 1️⃣ 🏨 Proceso de Check-in de Huéspedes

- **Objetivo:** Hospedar al huésped en el hotel.
- **Pasos principales:**
    - Solicitud de documentación (cédula o pasaporte).
    - Confirmación de número de personas y habitaciones requeridas.
    - Verificación de tarifas y disponibilidad en Cloudbeds, actualizadas con tasa del Banco Central de Venezuela para euros.
    - Definición del método de pago y registro completo de datos personales (dirección, teléfono, correo, municipio, parroquia).
- **Tipos de check-in:**
    - Por reserva (con pago adelantado del 50%).
    - Por puerta (sin pago previo, pago completo en el momento).
- **Validación de pagos:** Se recibe comprobante (foto o captura) vía correo o WhatsApp, que se confirma con administración (Libni o Erika).
- **Herramientas:** Cloudbeds para gestión y registro, WhatsApp y correo para comunicación.
- **Oportunidad de mejora:** Digitalizar la entrega de normativas mediante un código QR para agilizar el proceso y asegurar que el huésped tenga acceso a las reglas del hotel.

### 2️⃣ 📅 Gestión de Reservas

- Las reservas pueden hacerse vía llamada, redes sociales o página web.
- El cliente puede ingresar datos directamente en un link o hacerlo a través de un operador humano.
- Toda la información se registra en Cloudbeds, incluyendo datos personales y pagos.
- Confirmación de pago y abono del 50% para reservas, con el resto a pagar en check-in.
- Excepciones: reservas institucionales, familiares o alianzas Venetur que no requieren pago.

### 3️⃣ 💳 Gestión y Conciliación de Pagos

- Registro inicial en Cloudbeds con validación previa con administración.
- Métodos de pago incluyen: punto de venta, pago móvil, transferencia, Zelle, efectivo, Cachea (en dólares), Binance.
- Cada método tiene un formato específico para registrar banco, fecha, referencia, monto, tasa de cambio y tipo de transacción.
- Registro posterior en Odoo, dentro del módulo de Contabilidad, en “recibo de cliente”.
- Se verifica si el cliente ya existe para evitar duplicados; si no, se registra uno nuevo.
- Excepciones: pagos por servicios (como masajes) no se registran en Cloudbeds ni Odoo, sino que los maneja administración.
- Uso de formatos Excel para cierres de turno, donde se consolidan todos los pagos recibidos y se envían reportes vía Microsoft Teams.

### 4️⃣ 📂 Reporte y Centralización de Información en Microsoft Teams

- Se copia y pega la información de pagos de Cloudbeds y Odoo en una carpeta compartida en Teams.
- Incluye soportes fotográficos de comprobantes de pago.
- Permite acceso a recepción, administración y finanzas para consulta y auditoría.

### 5️⃣ 🔐 Elaboración y Gestión de Llaves Electrónicas y Magnéticas

- Llaves electrónicas gestionadas a través de un formato o aplicación llamada TT Hotel.
- Se registra habitación, nombre del huésped, fecha y hora de salida (hora límite de acceso).
- Llaves magnéticas gestionadas con sistema Time Locks (L-O-X Time Locks), donde se registra número de habitación y número de noches, sin nombre del huésped.
- Uso de llaves maestras para supervisores y personal autorizado, gestionadas por administración.
- Actualmente, no todas las habitaciones cuentan con cerraduras inteligentes; se está en proceso de transición.
- Problemas de permisos de usuario para generar llaves en algunos casos.

### 6️⃣ 🧾 Proceso de Checkout y Validación de Consumos Adicionales

- Se recopilan comandas físicas de alimentos y bebidas entregadas diariamente por el departamento correspondiente.
- Se comparan con registros en Cloudbeds para validar consumos.
- Poster es el sistema que genera comandas en alimentos y bebidas y sincroniza la información con Cloudbeds.
- En caso de discrepancias, se realiza revisión para corregir antes del cierre.

---

### 🤝 Conclusión:

La reunión permitió un levantamiento exhaustivo y detallado de los procesos actuales del área de Calidad, Seguimiento y Control, especialmente en la gestión de huéspedes, pagos y llaves. Se identificaron claramente las herramientas utilizadas (Cloudbeds, Odoo, Microsoft Teams, Poster, TT Hotel, Time Locks) y los roles responsables en cada etapa. Además, se detectaron oportunidades de mejora, como la digitalización de normativas para agilizar el check-in. Este análisis servirá como base para la futura adaptación e implementación en la nueva versión de Odoo, buscando optimizar la eficiencia y trazabilidad de los procesos.

---

### 🎯 Enfoque en el punto más importante:

Proceso de Check-in de Huéspedes

El proceso de check-in es el núcleo operativo del área y fue analizado con gran detalle. Su objetivo principal es hospedar al cliente, garantizando que se cumplan todos los requisitos legales y administrativos. Se inicia con la solicitud de documentación oficial (cédula o pasaporte), seguido de la confirmación del número de personas y habitaciones, lo que permite calcular el monto total a pagar. La tarifa se verifica en Cloudbeds, actualizada con la tasa oficial del Banco Central de Venezuela para euros, asegurando precisión en la conversión monetaria.

Se identificaron dos modalidades: check-in por reserva, donde el cliente ya ha realizado un pago adelantado del 50%, y check-in por puerta, donde el pago se realiza en el momento. En ambos casos, se registra toda la información del huésped en Cloudbeds, incluyendo datos personales completos y método de pago. La validación del pago es rigurosa, requiriendo comprobantes enviados por correo o WhatsApp, que luego se confirman con administración (Libni o Erika).

Un aspecto crítico es la entrega y explicación de las normativas del hotel, que actualmente se realiza en formato físico y toma aproximadamente 10 minutos, lo que puede ralentizar el proceso. Se propuso la implementación de un código QR para que los huéspedes puedan acceder digitalmente a estas normativas, facilitando la comunicación y reduciendo tiempos.

Este proceso se apoya en herramientas digitales (Cloudbeds para reservas y pagos, WhatsApp y correo para comunicación) y en la coordinación con administración para la confirmación de pagos, lo que garantiza un flujo ordenado y transparente. La documentación detallada de este proceso permitirá su futura optimización y adaptación en Odoo, asegurando una experiencia más ágil y eficiente para huéspedes y personal.

---

**Fin del informe.**

### Parte 2

### Tema número 1:

Verificación y conciliación de reclamos de consumo y servicios en habitaciones

- Se identifican reclamos frecuentes de huéspedes relacionados con discrepancias en los cargos, tales como:
    - Cargos por consumos que el huésped niega haber realizado (ejemplo: “esa comanda no es mía”).
    - Discrepancias en la cantidad de productos cobrados (ejemplo: cobraron 12 aguas cuando solo se consumieron 2).
    - Firmas que el huésped niega haber realizado.
- El proceso implica una verificación exhaustiva para validar cada reclamo, buscando el origen de la factura o el motivo de la diferencia.
- Cada comanda tiene dos montos asociados:
    - Monto de consumo (productos o servicios consumidos).
    - Monto por servicio, que corresponde al 10% y equivale a la propina para los mesoneros.
- Los pagos se realizan en dos transacciones separadas:
    - Pago de consumo: va directamente a las cuentas del hotel y puede ser por pago móvil, transferencia o punto de venta.
    - Pago de servicio: se realiza exclusivamente por pago móvil a una cuenta específica de los mesoneros.
- Se identificó una oportunidad de mejora en la gestión del cobro del servicio (propina):
    - Actualmente, el cobro del 10% se realiza en recepción, lo que genera confusión y rechazo por parte de algunos huéspedes.
    - Se propone que el departamento de Alimentos y Bebidas (A y B) gestione directamente el cobro del servicio, ya que ellos tienen la caja y realizan las comandas.
    - Esto evitaría que el huésped firme sin estar informado sobre el cobro del servicio y facilitaría la conciliación de pagos.
- La separación de pagos genera complicaciones en el momento del check-out, ya que:
    - El huésped puede querer cancelar todo en un solo pago (punto de venta), pero el servicio solo se puede cancelar por pago móvil.
    - Esto genera un proceso engorroso tanto para el cliente como para el recepcionista.

---

### Tema número 2:

Registro, carga y conciliación de pagos en el sistema Cloudbeds durante check-in y check-out

- El proceso de registro de pagos en Cloudbeds es similar para check-in y check-out, con la diferencia de que en check-out se especifica si el ingreso corresponde a consumo o servicio.
- Los pagos pueden ser realizados por diferentes medios:
    - Pago móvil.
    - Transferencia bancaria.
    - Punto de venta.
- Los comprobantes de pago de transferencias y pagos móviles se envían al departamento de administración para su validación.
- La validación de pagos por punto de venta y efectivo es realizada directamente por el equipo de recepción, ya que estos pagos se ejecutan en el momento.
- Se identifican dificultades en la conciliación de pagos:
    - La validación por parte de administración no siempre es inmediata, especialmente en temporadas altas o cuando hay alta ocupación.
    - A veces se requiere reenviar comprobantes o solicitar confirmación, lo que puede retrasar el proceso.
    - En el check-out, el cliente ya se ha ido cuando se realiza la validación, lo que dificulta la confirmación inmediata.
- Se plantea la necesidad de mejorar la eficiencia del proceso de conciliación y validación de pagos con administración para evitar retrasos y confusiones.

---

### Tema número 3:

Gestión y control de inventarios en las tiendas del hotel (Mambo y tienda playera)

- La gestión del inventario es responsabilidad del equipo de Calidad, Seguimiento y Control, con participación directa de Adriana para validaciones.
- El inventario mensual se realiza manualmente:
    - Una ayudante en turno visita ambas tiendas y anota físicamente la cantidad y descripción de los productos en un cuaderno.
- Posteriormente, Adriana compara el inventario físico anotado con el inventario registrado en Cloudbeds para validar las cantidades.
- En caso de discrepancias entre inventario físico y sistema:
    - Adriana es la responsable de investigar y ajustar las cantidades o precios en el sistema.
    - Ella también modifica tarifas y precios autorizados por el doctor o la gerencia.
- El registro de movimientos de inventario en Cloudbeds incluye:
    - Entradas de mercancía (por compras o entregas).
    - Salidas de mercancía por ventas a huéspedes.
    - Salidas de mercancía para visitantes o gerencia, que no están registradas como huéspedes en el sistema.
- Se identificó una oportunidad de mejora para gestionar a los visitantes como clientes genéricos en Cloudbeds, permitiendo registrar ventas y salidas de mercancía a personas que no son huéspedes.
- Se detecta que algunas mercancías ingresan al hotel sin factura, compradas directamente por el doctor, lo que dificulta el control y enlace con almacén.
- Se sugiere mejorar la integración entre almacén y tiendas para enlazar entradas y salidas de inventario y facilitar la trazabilidad.

---

### Tema número 4:

Gestión de pagos y reportes relacionados con la tienda playera y empleados

- Los ingresos de la tienda playera van directamente a la cuenta bancaria del doctor.
- Para cada venta se genera un recibo físico que incluye:
    - Cantidad y descripción del producto.
    - Costo.
    - Nombre del cliente o empleado.
    - Número de habitación (en caso de huéspedes).
    - Fecha y firmas del huésped/empleado y del recepcionista en turno.
- Cuando un empleado desea retirar productos con descuento:
    - Se utiliza un formato especial que incluye nombre, apellido, cédula, detalle del producto y firma.
    - Este reporte se envía a Talento Humano para su registro y control.
- Recientemente, se ha cambiado la política y ya no se permite descontar productos de nómina; los empleados deben pagarlos directamente.
- Se plantea la dificultad de controlar pagos de empleados que no vienen a cancelar, y se sugiere que administración gestione un fondo o mecanismo para descontar y transferir el dinero a la cuenta del doctor.
- El registro de movimientos de inventario en Cloudbeds es actualizado manualmente para reflejar entradas y salidas, incluyendo ventas a visitantes y salidas para gerencia.
- Se reconoce que el sistema reduce automáticamente el inventario al registrar una venta, pero hay salidas manuales que deben ser gestionadas para mantener la precisión.

---

### Tema número 5:

Oportunidades de mejora y recomendaciones generales

- Centralizar y unificar la gestión de cobros de servicios (propinas) en el departamento de Alimentos y Bebidas para evitar confusiones y agilizar el proceso de check-out.
- Mejorar la conciliación y validación de pagos con administración, buscando automatizar o acelerar la confirmación para evitar retrasos y la necesidad de reenvíos.
- Implementar en Cloudbeds la figura de “cliente visitante” para registrar ventas y salidas de mercancía a personas que no son huéspedes, mejorando el control y trazabilidad.
- Fortalecer la integración entre almacén y tiendas para enlazar entradas y salidas de inventario, incluyendo mercancía sin factura y compras directas del doctor.
- Revisar y formalizar el proceso de descuentos y pagos de empleados para evitar morosidad y facilitar la conciliación con Talento Humano y administración.
- Continuar con la actualización manual de precios y cantidades en Cloudbeds, pero evaluar la posibilidad de automatizar o facilitar esta tarea para reducir errores y tiempo invertido.
- Dividir la reunión en sesiones para evitar fatiga y permitir mayor profundidad en cada tema, como se acordó para continuar con el departamento de reservas y otros procesos.

---

Este informe resume los puntos clave discutidos en la llamada, destacando procesos actuales, excepciones, responsabilidades y oportunidades de mejora para optimizar la operación y gestión administrativa del hotel.