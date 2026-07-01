# Plan de Implementación y Migración en Odoo — Koral Morrocoy

Tareas derivadas del TO-BE. La unidad es el grupo de similitud (GS): un grupo, una tarea. Formato según `Arquitectura/Plantilla-Tareas-Implementacion-Odoo.md`.

## Contexto del proyecto
Koral opera actualmente en **Odoo 16** y el proyecto es una **migración a Odoo 19**. En consecuencia: (a) buena parte de la parametrización ya existe en 16 y se migra y reajusta a 19, no se crea de cero; (b) las rutas de este plan están validadas contra Odoo 19; y (c) **los maestros de datos los generamos y curamos nosotros** —proveedores, productos, ubicaciones, listas de precio, empleados y plan de cuentas—: extracción desde Odoo 16, depuración y normalización, carga a Odoo 19 y conciliación de conteos 16 vs 19. La generación de maestros es un entregable propio del equipo, no un dato que se asume heredado.

Estado: Borrador. 63 grupos (43 nativos, 8 parciales, 10 desarrollo, 2 fuera de alcance) + GS-000, tarea transversal de migración de datos. Prioridad en estrellas (★/★★/★★★).

---

# GS-000 · Migración de datos y preparación del entorno (Odoo 16 → 19)

**Tipo:** Migración · **Módulo:** Transversal · **Edición:** — · **Áreas:** Todas · **Fase:** 0 · **Depende de:** — · **Estado:** Pendiente · **Prioridad:** ★★★

### Qué atiende
Koral opera en Odoo 16 y el proyecto migra a Odoo 19. Antes de configurar los procesos hay que preparar el entorno de Odoo 19 y gobernar la migración de los datos maestros, para que el resto de las tareas trabajen sobre información real y conciliada y no sobre una base vacía o heredada sin depurar.

### Cómo se configura
Se levanta el entorno de Odoo 19 con la localización venezolana y los módulos del alcance instalados. Se define la estrategia de migración de los maestros: extracción desde Odoo 16, depuración y normalización, carga a Odoo 19 y conciliación de conteos. Los maestros que genera el equipo son proveedores y clientes, productos, ubicaciones de inventario, listas de precio, empleados y el plan de cuentas. Esta tarea es prerrequisito de las tareas de maestros (GS-001, GS-002, GS-007, GS-021, GS-038) y del arranque contable.

Rutas de referencia: `Ajustes > General` para módulos y localización; la carga de cada maestro se realiza por importación en el módulo correspondiente.

### Revisión posterior (QA / gerencia de proyecto)
1. El entorno de Odoo 19 responde con la localización venezolana y los módulos del alcance instalados.
2. Existe un procedimiento escrito de extracción, depuración y carga de los maestros.
3. Para cada maestro cargado, el conteo de registros en Odoo 19 concilia contra Odoo 16, con las diferencias justificadas por la depuración.

La tarea se da por **Lista** cuando el entorno está montado y la conciliación de los maestros cargados cuadra.

### Trazabilidad
Tarea transversal de migración (Odoo 16 → 19). Prerrequisito de GS-001, GS-002, GS-007, GS-021, GS-038 y del arranque contable.

---

# GS-001 · Maestro de proveedores y clientes

**Tipo:** Configuración y migración · **Módulo:** Contactos (con localización venezolana) · **Edición:** Community
**Áreas:** Compras y Almacén, Administración/CCS · **Fase:** 1 · **Depende de:** GS-000 · **Estado:** Pendiente · **Prioridad:** ★★★

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

### Migración de datos (16 → 19)
El maestro se genera extrayendo el dato desde Odoo 16, depurándolo y normalizándolo, y cargándolo a Odoo 19. Como control, el conteo de registros y los totales relevantes en Odoo 19 se concilian contra Odoo 16; las diferencias deben quedar justificadas por la depuración de duplicados u obsoletos.

### Trazabilidad
GS-001 (COM-1.1, CCS-4.5.1) · Propuesta PROP-NAT-001

---

# GS-002 · Maestro de productos y clasificación contable

**Tipo:** Configuración y migración · **Módulo:** Inventario (con cuentas de Contabilidad) · **Edición:** Community
**Áreas:** Compras y Almacén, Administración (CCS y Hotel), Gerencia Hotelera · **Fase:** 1 · **Depende de:** GS-000 · **Estado:** Pendiente · **Prioridad:** ★★★

### Qué atiende
El catálogo actual crece con duplicados porque se crea un producto distinto por cada variante, el criterio de qué es almacenable o consumible depende de cada persona, y las categorías no reflejan el tratamiento contable correcto. Esta tarea establece un maestro de productos único, con variantes, tipo y clasificación contable bien definidos, que sostiene compras, inventario y contabilidad.

### Cómo se configura
Cada producto se crea una sola vez y sus diferencias —marca, color, presentación— se manejan como variantes del mismo producto, en lugar de ítems separados. A cada producto se le define el tipo, almacenable o consumible, bajo un criterio único: lo que entra por almacén físico es almacenable. La categoría del producto determina las cuentas contables por defecto, de modo que el tratamiento contable no se asigne caso por caso. Finalmente se migra el catálogo actual depurando duplicados.

Rutas de referencia: `Inventario > Productos > Productos > Nuevo` para el alta, el tipo y la categoría; `Inventario > Configuración > Atributos` para las variantes; `Inventario > Configuración > Categorías de productos` para las cuentas por categoría.

### Revisión posterior (QA / gerencia de proyecto)
1. Crear un producto con dos presentaciones distintas: debe quedar una sola ficha con variantes, no dos productos.
2. Abrir cualquier producto: debe tener definido si es almacenable o consumible.
3. Revisar la categoría de un producto: debe traer sus cuentas contables por defecto.
4. Buscar varios productos conocidos en el catálogo migrado: deben aparecer una sola vez.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Migración de datos (16 → 19)
El maestro se genera extrayendo el dato desde Odoo 16, depurándolo y normalizándolo, y cargándolo a Odoo 19. Como control, el conteo de registros y los totales relevantes en Odoo 19 se concilian contra Odoo 16; las diferencias deben quedar justificadas por la depuración de duplicados u obsoletos.

### Trazabilidad
GS-002 (COM-1.2, CCS-4.4.5, CCS-4.4.6, CCS-4.5.2, AFL-13.1, AFL-13.2, AFL-13.5, GHO-1.4.5) · Propuesta PROP-NAT-002

---

# GS-003 · Cotización, comparación de precios y orden de compra a proveedor

**Tipo:** Configuración · **Módulo:** Compras · **Edición:** Community
**Áreas:** Compras y Almacén, AABB Bar, AABB Cocina, Operaciones, Administración/Finanzas (Hotel-Juan) · **Fase:** 2 · **Depende de:** GS-001, GS-002 · **Estado:** Pendiente · **Prioridad:** ★★★

### Qué atiende
Hoy solo una fracción de las compras pasa por análisis de precio; la mayoría se transcribe según la indicación de Gerencia sobre a qué proveedor comprar, sin presupuesto comparativo, y con frecuencia el pedido se monta a posteriori solo para dar cobertura contable. Esta tarea encauza todo el abastecimiento externo por un mismo circuito de cotización, comparación y orden de compra, de modo que la compra siempre nazca de una orden previa y trazable.

### Cómo se configura
Se levanta la cotización pidiéndola a uno o varios proveedores para poder comparar, y al confirmar la elegida queda convertida en orden de compra. Para los proveedores recurrentes se cargan en la ficha del producto sus precios y condiciones, de modo que el pedido se genere al vuelo sin volver a cotizar cada vez. Si se quiere exigir aprobación por encima de cierto monto, se activa el flujo de aprobación por importe. Esta tarea es la base de la solicitud de compra por faltante, que más adelante puede originarse desde las reglas de reabastecimiento en lugar de gestionarse a mano.

Rutas de referencia: `Compras > Solicitudes de cotización > Nuevo` para levantar y comparar cotizaciones; la ficha del producto, pestaña `Compra`, para los precios y condiciones de proveedores recurrentes; `Compras > Configuración > Ajustes` para activar la aprobación por monto.

### Revisión posterior (QA / gerencia de proyecto)
1. Crear una solicitud de cotización a dos proveedores por el mismo producto: el sistema debe permitir comparar sus precios antes de decidir.
2. Confirmar la cotización elegida: debe quedar convertida en orden de compra sin volver a capturar los datos.
3. Cargar precio y condiciones a un proveedor recurrente en la ficha del producto y generar un pedido: el precio debe traerse automáticamente.
4. Con la aprobación por monto activada, crear una orden por encima del umbral: debe quedar retenida a la espera de aprobación.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-003 (COM-1.3, COM-4, BAR-4.5, COC-4.5, OPE-3.6, AFJ-1.2) · Propuesta PROP-NAT-003

---

# GS-004 · Requisiciones internas y aprobación de pedidos de reposición

**Tipo:** Configuración · **Módulo:** Compras, Inventario · **Edición:** Community
**Áreas:** Compras y Almacén, AABB Caja, AABB Bar, AABB Cocina, Operaciones, Gerencia Hotelera, Administración/Finanzas (Hotel-Juan), Administración/Finanzas (Hotel-Libny) · **Fase:** 2 · **Depende de:** GS-002 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
La solicitud de reposición desde las áreas hacia almacén se lleva hoy en papel y por WhatsApp: se cuenta a mano, se arma una lista y el formato físico circula entre áreas para recabar la firma de Gerencia. Ese formato se anula y se rehace completo ante cualquier tachadura, se traspapela y, si el autorizador no está, la firma queda pendiente y se retrasa la salida de insumos. Esta tarea reemplaza ese circuito por una requisición digital, trazable y aprobada en línea.

### Cómo se configura
La requisición interna se registra en el sistema con su flujo de aprobación, de modo que la solicitud, la autorización y el seguimiento queden en línea y no dependan de un papel que viaja entre áreas. Cada área solicita su reposición, la aprobación se resuelve dentro del sistema y el estado de la solicitud queda visible para todos los involucrados, eliminando la circulación de formatos y la firma física. Esta requisición es el paso previo a la salida de mercancía de almacén y a la compra cuando no hay existencia.

Rutas de referencia: `Compras > Solicitudes de cotización > Nuevo` como origen de la solicitud interna de reposición; `Compras > Configuración > Ajustes` para activar el flujo de aprobación; `Ajustes > Usuarios y compañías > Grupos` para definir quién solicita y quién aprueba.

### Revisión posterior (QA / gerencia de proyecto)
1. Registrar una requisición desde un área hacia almacén: debe quedar guardada con su solicitante y fecha, sin papel de por medio.
2. Enviar la requisición a aprobación: el aprobador designado debe poder autorizarla o rechazarla dentro del sistema.
3. Consultar el estado de una requisición en curso: debe reflejar si está pendiente, aprobada o rechazada sin preguntar a nadie.
4. Intentar aprobar una requisición con un usuario sin permiso de aprobación: el sistema no debe permitirlo.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-004 (COM-Alm-1.1, COM-Alm-1.2, COM-Alm-1.3, COM-Alm-1.4, COM-Alm-1.5, COM-Alm-1.13, CAJ-3.2, CAJ-3.3, CAJ-3.4, BAR-4.2, BAR-4.3, COC-4.2, COC-4.3, OPE-3.3, OPE-4.4, GHO-3.5, GHO-4.1, GHO-5.1, AFJ-8.1, AFL-14.1) · Propuesta PROP-NAT-004

---

# GS-005 · Recepción de mercancía y validación cruzada contra pedido y documento del proveedor

**Tipo:** Configuración · **Módulo:** Inventario, Compras · **Edición:** Community
**Áreas:** Compras y Almacén, AABB Cocina, Administración/Finanzas (Hotel-Juan), Administración/Finanzas (Hotel-Libny), Gerencia Hotelera · **Fase:** 2 · **Depende de:** GS-002, GS-003, GS-007 · **Estado:** Pendiente · **Prioridad:** ★★★

### Qué atiende
Hoy la mercancía a veces se recibe días después de llegar, cuando el rol gerencial tiene tiempo de cargarla, y en ocasiones el registro solo aparece al llegar la factura, con lo que la mercancía y su documento quedan desvinculados. Esta tarea establece la recepción como un albarán de entrada atado a la orden de compra, de modo que el stock entre en el momento en que la mercancía llega y la factura quede ligada al pedido efectivamente recibido.

### Cómo se configura
La mercancía se recibe comparando lo físico contra el pedido y contra el documento del proveedor; si algo no cuadra se ajustan las cantidades realmente recibidas y solo entonces se valida la recepción. La factura se genera después desde la orden de compra sobre lo recibido. Como la recepción vive en el sistema, puede registrarla directamente el área que recibe y tiene acceso, sin depender de Gerencia. El sistema concilia por cantidades pedido-recepción-factura de forma automática, pero el cotejo contra el documento físico del proveedor sigue siendo un control que hace el operario al recibir, no un cruce automático.

Rutas de referencia: `Inventario > Recepciones > Nuevo`, o el botón `Recepción` desde la propia orden de compra, ajustando ahí las cantidades antes de validar; `Compras > Órdenes de compra > Crear factura` para generar la factura sobre lo recibido.

### Revisión posterior (QA / gerencia de proyecto)
1. Recibir una orden de compra registrando una cantidad menor a la pedida: el sistema debe permitir ajustar lo realmente recibido antes de validar.
2. Validar la recepción: el stock del producto debe aumentar en la cantidad recibida en ese momento.
3. Generar la factura desde la orden de compra: debe reflejar lo recibido y quedar ligada al pedido, no suelta.
4. Registrar una recepción con un usuario del área receptora (no gerencial) que tenga acceso: debe poder hacerlo sin depender de Gerencia.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-005 (COM-Alm-1.6, COM-Alm-1.7, COM-Alm-1.8, COM-Alm-1.9, COC-4.4, COC-4.6, AFJ-3.7, AFJ-7.1, AFJ-7.2, AFJ-7.5, AFL-14.2, GHO-3.1, GHO-3.2) · Propuesta PROP-NAT-005

---

# GS-006 · Transferencias internas y despacho de mercancía entre ubicaciones

**Tipo:** Configuración · **Módulo:** Inventario · **Edición:** Community
**Áreas:** Compras y Almacén, AABB Caja, AABB Bar, Operaciones, Administración/Finanzas (Hotel-Juan) · **Fase:** 2 · **Depende de:** GS-002, GS-007 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
El despacho de almacén a las áreas y la entrega de herramientas desde el taller se manejan hoy con formatos físicos que se rehacen por errores y viajan entre áreas, o de forma directa sin registro alguno, con lo que el operador a veces descubre el faltante en sitio. Esta tarea modela esos movimientos como transferencias internas entre ubicaciones, con salida registrada contra la requisición del área y respaldo digital del movimiento.

### Cómo se configura
Quien despacha registra la transferencia indicando la ubicación de origen y la de destino, y al validarla el stock se descuenta del origen y queda el respaldo del movimiento, sustituyendo el formato físico. Cada salida se genera contra la requisición del área. Quién puede validar la salida se controla por permisos de usuario.

Rutas de referencia: `Inventario > Operaciones > Transferencias > Nuevo`, eligiendo el tipo de operación de transferencia interna; `Inventario > Configuración > Ubicaciones` para las ubicaciones de origen y destino, con las ubicaciones de almacenamiento activadas en `Inventario > Configuración > Ajustes`; `Ajustes > Usuarios y compañías > Usuarios` para quién puede validar la salida.

### Revisión posterior (QA / gerencia de proyecto)
1. Crear una transferencia interna de una ubicación de origen a una de destino y validarla: el stock debe descontarse del origen y sumarse al destino.
2. Consultar el histórico de un producto: la transferencia debe quedar registrada con origen, destino y responsable.
3. Intentar validar una salida con un usuario sin permiso: el sistema no debe permitirlo.
4. Generar una salida a partir de una requisición del área: debe quedar el vínculo entre la solicitud y el movimiento.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-006 (COM-Alm-1.11, CAJ-1.5, CAJ-3.5, BAR-4.4, OPE-3.5, AFJ-7.3) · Propuesta PROP-NAT-006

---

# GS-007 · Almacenes y ubicaciones internas de inventario

**Tipo:** Configuración · **Módulo:** Inventario · **Edición:** Community
**Áreas:** Compras y Almacén · **Fase:** 1 · **Depende de:** GS-000 · **Estado:** Pendiente · **Prioridad:** ★★★

### Qué atiende
La mercancía se ubica físicamente por tipo de producto, pero Odoo opera hoy con un almacén general único sin ubicaciones específicas configuradas. Esta tarea subdivide el almacén en ubicaciones internas que reflejan el esquema físico real, de modo que cada existencia tenga un lugar definido sobre el que contar, transferir y reponer. Es un dato maestro de inventario y la base sobre la que corren las transferencias internas, el conteo por zona y el reabastecimiento.

### Cómo se configura
Primero se habilitan las ubicaciones de almacenamiento y luego se crea una ubicación interna por cada zona física del almacén, colgándolas del almacén existente para que reflejen la organización real por tipo de producto. No se crea un almacén nuevo: se estructura el que ya existe.

Rutas de referencia: `Inventario > Configuración > Ajustes`, sección Almacén, para habilitar las ubicaciones de almacenamiento; `Inventario > Configuración > Ubicaciones > Nuevo` para crear cada ubicación interna bajo el almacén existente.

### Revisión posterior (QA / gerencia de proyecto)
1. Revisar la lista de ubicaciones: deben existir ubicaciones internas que correspondan a las zonas físicas reales del almacén.
2. Consultar el stock de un producto: debe poder verse en qué ubicación interna se encuentra.
3. Crear una nueva ubicación interna bajo el almacén existente: debe quedar disponible para asignar existencias.

La tarea se da por **Lista** cuando las tres pruebas se cumplen.

### Migración de datos (16 → 19)
El maestro se genera extrayendo el dato desde Odoo 16, depurándolo y normalizándolo, y cargándolo a Odoo 19. Como control, el conteo de registros y los totales relevantes en Odoo 19 se concilian contra Odoo 16; las diferencias deben quedar justificadas por la depuración de duplicados u obsoletos.

### Trazabilidad
GS-007 (COM-Alm-1.10) · Propuesta PROP-NAT-007

---

# GS-008 · Conteo de existencias, inventario cíclico y ajuste contra sistema

**Tipo:** Configuración · **Módulo:** Inventario · **Edición:** Community
**Áreas:** Contraloría, AABB Caja, AABB Bar, AABB Cocina, Administración/Finanzas (Hotel-Juan), Administración/Finanzas (Hotel-Libny), Gerencia Hotelera · **Fase:** 2 · **Depende de:** GS-002, GS-007 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
El conteo de existencias se lleva hoy en hojas y libretas físicas contra un stock ideal anotado a mano, y los registros del sistema arrastran datos que no reflejan el inventario real, por lo que el almacenista cuenta solo en físico. Esta tarea lleva el conteo y el ajuste al sistema con registro auditable, resolviendo la desalineación entre el stock físico y el del sistema y habilitando el conteo cíclico sobre las zonas que más rotan.

### Cómo se configura
Se cuenta por ubicación, se carga la cantidad real frente a la que figura en el sistema y, al validar, el sistema genera el ajuste y deja asentadas la fecha, el responsable y la diferencia, sustituyendo las hojas y libretas físicas. Para repetir el conteo de forma recurrente y concentrarlo en las zonas de mayor rotación (inventario cíclico), se aprovechan las ubicaciones definidas, fijando en cada una su frecuencia de conteo.

Rutas de referencia: `Inventario > Operaciones > Inventario físico` para cargar la cantidad contada por línea y aplicar la diferencia; `Inventario > Configuración > Ajustes` para tener activadas las ubicaciones de almacenamiento; `Inventario > Configuración > Ubicaciones` para fijar la frecuencia de conteo por ubicación.

### Revisión posterior (QA / gerencia de proyecto)
1. Cargar en un conteo una cantidad distinta a la del sistema y validar: el sistema debe generar el ajuste por la diferencia.
2. Consultar el ajuste generado: deben quedar registradas la fecha, el responsable y la diferencia aplicada.
3. Realizar un conteo acotado a una sola ubicación: el sistema debe permitir contar por zona sin tocar el resto.
4. Fijar una frecuencia de conteo a una ubicación de alta rotación: la ubicación debe quedar marcada para recuento recurrente.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-008 (CTR-3.1, CTR-3.2, CTR-3.3, CTR-7.1, CAJ-1.3, CAJ-1.4, CAJ-1.6, CAJ-1.16, CAJ-3.1, CAJ-4.8, BAR-2.2, BAR-2.11, BAR-4.1, COC-1.3, COC-2.2, COC-3.1, COC-4.1, COC-5.1, AFJ-7.9, AFL-15.1, GHO-1.4.1, GHO-1.4.4) · Propuesta PROP-NAT-008

---

# GS-009 · Reglas de reabastecimiento por stock mínimo / punto de pedido

**Tipo:** Configuración · **Módulo:** Inventario, Compras · **Edición:** Community
**Áreas:** AABB Bar · **Fase:** 2 · **Depende de:** GS-002, GS-001 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
Hoy la confirmación de que hay stock suficiente se hace de forma manual, por comunicación verbal o radio, usando la lista de huéspedes para estimar mentalmente la disponibilidad; no hay visibilidad sistematizada del agotamiento de un ítem. Esta tarea define reglas de stock mínimo que disparan la propuesta de reposición automáticamente antes del agotamiento, anticipando los faltantes en lugar de reaccionar a ellos.

### Cómo se configura
A cada producto se le define un stock mínimo y un máximo, y cuando la existencia cae por debajo del mínimo el sistema dispara la propuesta de reposición, generando la orden de compra al proveedor o la solicitud de reabastecimiento según corresponda. Para que la regla termine en una orden de compra al proveedor, el producto debe tener cargados su proveedor y precio en la pestaña de Compra de su ficha; esto conecta esta tarea con el maestro de productos y proveedores.

Rutas de referencia: `Inventario > Operaciones > Reabastecimiento > Nuevo` para definir por producto y ubicación las cantidades mínima y máxima; `Inventario > Productos > Productos`, pestaña `Compra`, para el proveedor y precio del producto.

### Revisión posterior (QA / gerencia de proyecto)
1. Definir una regla de mínimo y máximo a un producto: la regla debe quedar guardada por producto y ubicación.
2. Bajar la existencia del producto por debajo del mínimo: el sistema debe proponer la reposición automáticamente.
3. Ejecutar la propuesta sobre un producto con proveedor y precio cargados: debe generar la orden de compra al proveedor.

La tarea se da por **Lista** cuando las tres pruebas se cumplen.

### Trazabilidad
GS-009 (BAR-1.5, BAR-3.4) · Propuesta PROP-NAT-009

---

# GS-010 · Punto de venta de restaurante: comanda, mesa/habitación y envío a cocina

**Tipo:** Desarrollo · **Módulo:** Punto de venta, Restaurante · **Edición:** —
**Áreas:** AABB Caja, AABB Bar, AABB Cocina · **Fase:** 2 · **Depende de:** GS-002 · **Estado:** Pendiente · **Prioridad:** ★

### Qué atiende
Hoy el mesonero anota el pedido a mano y lo traslada físicamente a caja, donde recién se digita; la impresora de cocina está fuera de servicio y caja termina imprimiendo todas las comandas, añadiendo carga e intermediación. No hay medición de tiempos entre pedido y despacho y los tickets pueden mojarse o perderse. Esta tarea lleva la comanda al punto de venta en modo restaurante, con asignación de mesa o habitación y ruteo directo a la estación que prepara cada línea.

### Cómo se configura
En el punto de venta en modo restaurante, el mesonero registra el pedido en el terminal asignando mesa o habitación, y el sistema rutea cada línea solo a la estación que la prepara (cocina o barra), eliminando la comanda en papel, la doble digitación en caja y la impresión centralizada. El modo restaurante se activa en ajustes y las impresoras de cada estación se asignan por categoría de producto. Lo que no es nativo es la emisión del documento fiscal venezolano: la máquina o impresora fiscal homologada, el IGTF en el ticket y los correlativos y formatos fiscales no vienen de fábrica, por lo que el cierre fiscal de la venta se resuelve con un desarrollo de localización fiscal sobre ese núcleo, alcance que se confirma contra la documentación oficial antes de asentarlo.

Rutas de referencia: `Punto de venta > Configuración > Ajustes` para activar el modo restaurante; `Punto de venta > Configuración > Punto de venta` para asignar las impresoras de estación por categoría de producto.

### Revisión posterior (QA / gerencia de proyecto)
1. Registrar un pedido en el terminal asignándole una mesa o habitación: la comanda debe quedar asociada a esa mesa o habitación.
2. Incluir en un mismo pedido un ítem de cocina y uno de barra: cada línea debe rutearse solo a la estación que la prepara.
3. Enviar el pedido: debe llegar a la estación correcta sin pasar por caja ni requerir reimpresión centralizada.
4. Emitir el documento fiscal de la venta: debe cumplir el formato fiscal venezolano (desarrollo de localización), no la salida estándar del punto de venta.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen, incluida la verificación del comportamiento fiscal desarrollado.

### Trazabilidad
GS-010 (CAJ-1.7, CAJ-1.8, CAJ-1.9, CAJ-1.10, CAJ-1.11, CAJ-1.15, CAJ-4.1, CAJ-4.2, CAJ-4.3, CAJ-4.4, CAJ-4.5, CAJ-2.8, BAR-1.6, BAR-1.7, BAR-1.8, BAR-1.9, BAR-1.10, BAR-2.4, BAR-2.5, BAR-2.6, BAR-2.7, BAR-2.8, BAR-3.5, BAR-3.6, BAR-3.7, BAR-3.8, BAR-3.9, COC-2.4, COC-3.3, COC-5.4, COC-3.4, COC-2.5) · Propuesta PROP-DEV-001

---

# GS-011 · Cierre y arqueo de sesión de POS / entrega de turno de A&B

**Tipo:** Configuración · **Módulo:** Punto de venta · **Edición:** Community
**Áreas:** AABB Caja, AABB Bar · **Fase:** 2 · **Depende de:** GS-010 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
La entrega de turno se sostiene hoy en el cuaderno de novedades, la libreta de faltantes y mensajes de WhatsApp; no existe un acta formal de entrega ni un arqueo respaldado por el sistema. Esta tarea formaliza el cierre y arqueo mediante el cierre de sesión del punto de venta, que levanta el acta con el monto esperado, el contado y la diferencia.

### Cómo se configura
Cada caja abre y cierra su propia sesión contando el efectivo al cierre, y el sistema levanta el acta con el monto esperado, el contado y la diferencia, dejando formalizado el arqueo y la entrega de guardia. El control de quién puede abrir o cerrar sesiones se define en la configuración del punto de venta.

Rutas de referencia: `Punto de venta > Sesiones` para cerrar la sesión del turno con el conteo de efectivo; `Punto de venta > Configuración > Punto de venta` para definir quién puede abrir o cerrar sesiones.

### Revisión posterior (QA / gerencia de proyecto)
1. Cerrar una sesión ingresando el efectivo contado: el sistema debe mostrar el monto esperado, el contado y la diferencia.
2. Cerrar una sesión con una diferencia entre lo esperado y lo contado: la diferencia debe quedar registrada en el acta de cierre.
3. Intentar cerrar una sesión con un usuario sin permiso: el sistema no debe permitirlo.
4. Consultar una sesión cerrada: debe conservar el arqueo como respaldo de la entrega de turno.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-011 (CAJ-4.0, CAJ-1.12, BAR-2.10, BAR-3.11) · Propuesta PROP-DEV-002


---

# GS-012 · Cargo del consumo de A&B a la cuenta del huésped

**Tipo:** Desarrollo · **Módulo:** Punto de venta, Hotel/PMS · **Edición:** —
**Áreas:** AABB Caja, Gerencia Hotelera · **Fase:** 5 · **Depende de:** GS-010, GS-047 · **Estado:** Pendiente · **Prioridad:** ★

### Qué atiende
Hoy el consumo de A&B se envía de Poster a Clover para cargarlo a la habitación, con control manual de check-outs; si Recepción no avisa la salida a tiempo o el envío digital falla, el huésped sale sin que se cargue lo consumido. Además, buena parte del servicio se cobra por pago móvil a cuentas personales de los mesoneros, lo que genera pagos dobles y devoluciones gestionadas con Administración. Esta tarea busca que lo consumido en A&B quede cargado a la cuenta de la habitación y se cobre una sola vez al check-out.

### Cómo se configura
Odoo no trae un folio de habitación nativo —no cuenta con un PMS hotelero oficial—, de modo que esta capacidad no se resuelve con configuración estándar. El cargo del consumo desde el Punto de venta a la cuenta del huésped se apoya en el PMS de terceros o en el desarrollo que se adopte para la operación hotelera, integrando el pedido del POS contra el folio de la habitación para que se liquide en un único cobro al egreso. El alcance depende del PMS elegido en GS-047 y del punto de venta configurado en GS-010, por lo que su definición se cierra una vez decidida esa plataforma.

Ruta de referencia del origen del consumo: `Punto de venta > Pedidos`.

### Revisión posterior (QA / gerencia de proyecto)
1. Registrar un consumo de A&B a nombre de una habitación ocupada: debe quedar asociado a la cuenta del huésped y no cobrarse en el momento.
2. Registrar varios consumos en distintos momentos a la misma habitación: todos deben acumularse en la misma cuenta.
3. Hacer el check-out del huésped: el sistema debe presentar el consumo acumulado para su cobro en un solo movimiento.
4. Revisar el cobro del check-out: no debe existir un segundo pago ni una devolución asociada al mismo consumo.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-012 (CAJ-1.13, CAJ-1.14, CAJ-1.18, CAJ-4.7, CAJ-2.6, CAJ-2.5, CAJ-4.6, GHO-1.2.1) · Propuesta PROP-DEV-003

---

# GS-013 · Recetas y consumo de insumos por producción

**Tipo:** Configuración · **Módulo:** Fabricación · **Edición:** Community
**Áreas:** AABB Cocina · **Fase:** 2 · **Depende de:** GS-002 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
El cálculo de raciones del mise en place y el control de insumos por plato se hacen hoy de forma manual, contando contra un stock ideal anotado a mano. Esta tarea define para cada plato su escandallo, de modo que producir o vender descuente automáticamente la materia prima y exista una base única de raciones por receta.

### Cómo se configura
A cada plato se le carga una lista de materiales que relaciona la ración con las cantidades de cada insumo. Al confirmar la producción, el sistema descuenta los componentes del stock según la receta, sin recálculo manual. El maestro de productos e insumos sobre el que se apoyan las recetas es el establecido en GS-002.

Rutas de referencia: `Fabricación > Productos > Listas de materiales > Nuevo` para cargar la receta con sus insumos y cantidades; `Fabricación > Operaciones > Órdenes de fabricación` para la producción que dispara el descuento de componentes.

### Revisión posterior (QA / gerencia de proyecto)
1. Cargar la receta de un plato con sus insumos: debe quedar registrada la cantidad de cada componente por ración.
2. Confirmar una orden de fabricación de ese plato: los insumos deben descontarse del stock según la receta.
3. Producir varias raciones del mismo plato: el descuento de insumos debe escalar proporcionalmente a las raciones.
4. Revisar el stock de un insumo antes y después de producir: la diferencia debe corresponder a lo que indica la receta.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-013 (COC-1.2, COC-2.3, COC-3.2, COC-5.2) · Propuesta PROP-DEV-004

---

# GS-014 · Control de mermas y procesamiento de proteínas

**Tipo:** Configuración · **Módulo:** Inventario · **Edición:** Community
**Áreas:** AABB Cocina · **Fase:** 2 · **Depende de:** GS-002, GS-007 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
El conteo de proteínas procesadas se lleva hoy a mano en hojas de producción y la merma se controla por revisión manual contra el peso inicial; las diferencias se escalan a Gerencia pero no dejan un registro estructurado que permita seguir el histórico de mermas. Esta tarea lleva la producción de carnicería y sus descartes al sistema como movimientos de inventario consultables.

### Cómo se configura
Lo efectivamente procesado se asienta con un ajuste de inventario, y la merma se registra como desecho contra una ubicación de descarte, lo que descuenta esa cantidad del stock y deja fecha, producto y cantidad. Con esto la diferencia entre lo recibido y lo aprovechado queda como histórico estructurado en lugar de hojas en papel. Las ubicaciones sobre las que se descuenta se apoyan en el esquema de almacenes y ubicaciones de GS-007, y los productos e insumos en el maestro de GS-002.

Rutas de referencia: `Inventario > Operaciones > Órdenes de desecho > Nuevo` para registrar la merma; `Inventario > Operaciones > Inventario físico` para asentar lo procesado; `Inventario > Informes > Movimientos de producto` para consultar el histórico de mermas.

### Revisión posterior (QA / gerencia de proyecto)
1. Registrar una orden de desecho por una merma de proteína: la cantidad debe descontarse del stock.
2. Asentar el conteo de lo procesado con un ajuste: el stock debe reflejar la cantidad real contada.
3. Consultar el informe de movimientos filtrando los desechos: la merma registrada debe aparecer con fecha, producto y cantidad.
4. Comparar dos periodos de producción: el histórico debe permitir ver la merma de cada uno sin recurrir a hojas manuales.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-014 (COC-7.1, COC-7.2, COC-7.3, COC-7.4) · Propuesta PROP-NAT-010

---

# GS-015 · Préstamo de cavas con identificación y control de devolución

**Tipo:** Configuración · **Módulo:** Inventario · **Edición:** Community
**Áreas:** AABB Caja · **Fase:** 2 · **Depende de:** GS-002 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
El préstamo de cavas al huésped se gestiona hoy en un listado manual exclusivo de caja, sin número grabado por cava ni registro digital; no se lleva orden ni conteo, y el huésped podría devolver una cava distinta sin que se note. Esta tarea da trazabilidad real al préstamo identificando cada cava de forma unívoca.

### Cómo se configura
Cada cava se sigue por número de serie, de modo que la entrega registre la salida de esa unidad concreta y la devolución se confirme contra el mismo número. Se activa el seguimiento por números de serie, se marca ese seguimiento en la ficha de la cava y se da de alta cada número de serie; la entrega y la devolución quedan como movimientos de la unidad serializada. La ficha de la cava se apoya en el maestro de productos de GS-002.

Rutas de referencia: `Inventario > Configuración > Ajustes`, sección Trazabilidad, para activar el seguimiento por número de serie; `Inventario > Productos > Productos` para marcarlo en la ficha de la cava; `Inventario > Productos > Números de serie/lotes` para dar de alta cada unidad.

### Revisión posterior (QA / gerencia de proyecto)
1. Dar de alta varias cavas con su número de serie: cada una debe quedar identificada de forma única.
2. Registrar la entrega de una cava a un huésped: debe salir del stock la unidad concreta con su número de serie.
3. Registrar la devolución de esa cava: el sistema debe confirmarla contra el mismo número de serie entregado.
4. Intentar cerrar la devolución con una cava de número distinto al prestado: el registro debe evidenciar la discrepancia.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-015 (CAJ-2.1, CAJ-2.2, CAJ-2.3, CAJ-2.4, CAJ-2.7) · Propuesta PROP-NAT-011

---

# GS-016 · Cierre de caja por punto de venta y conciliación del efectivo

**Tipo:** Configuración · **Módulo:** Contabilidad · **Edición:** Community
**Áreas:** Administración/AFL, Gerencia Hotelera · **Fase:** 3 · **Depende de:** GS-011, GS-020 · **Estado:** Pendiente · **Prioridad:** ★★★

### Qué atiende
Cada cierre de turno se valida hoy primero por el punto de venta y luego por Administración, cruzando el sistema contra el efectivo físico, los reportes del punto de venta bancario y los comprobantes electrónicos; el resultado se consolida en Excel y se publica en Teams. Esta tarea lleva ese cuadre y la doble revisión al sistema, con un diario de efectivo por cada punto de venta.

### Cómo se configura
Cada punto de venta —recepción, A&B, estacionamiento— tiene su propio diario de efectivo, donde el efectivo entregado se cruza contra los reportes del sistema, los comprobantes electrónicos y los reportes del punto de venta bancario, de modo que el cierre quede asentado y conciliado en línea y se elimine la consolidación en Excel. El cierre se apoya en el arqueo de sesión del POS de GS-011 y en las facturas de venta emitidas en GS-020.

Rutas de referencia: `Contabilidad > Configuración > Diarios` para dar de alta cada diario de efectivo; `Contabilidad > Conciliación` para asentar y conciliar el cierre de turno.

### Revisión posterior (QA / gerencia de proyecto)
1. Registrar el cierre de un turno con su efectivo en el diario del punto de venta correspondiente: debe quedar asentado en ese diario.
2. Cruzar el efectivo entregado contra los reportes del sistema y los comprobantes: el sistema debe mostrar el cuadre o la diferencia.
3. Cerrar un turno con una diferencia entre lo esperado y lo entregado: la diferencia debe quedar visible y documentada.
4. Consultar los cierres de un día: deben estar en el sistema sin necesidad del archivo de Excel en Teams.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-016 (AFL-1.2, AFL-1.3, AFL-1.4, AFL-1.5, AFL-1.6, AFL-3.2, AFL-3.3, AFL-3.4, AFL-3.5, AFL-3.6, AFL-5.2, AFL-5.3, AFL-5.4, AFL-8.1, AFL-8.2, GHO-1.1.7) · Propuesta PROP-NAT-012

---

# GS-017 · Verificación bancaria del cobro y registro del pago del huésped

**Tipo:** Configuración · **Módulo:** Contabilidad · **Edición:** Community
**Áreas:** Administración/AFL, Gerencia Hotelera · **Fase:** 3 · **Depende de:** GS-001, GS-020 · **Estado:** Pendiente · **Prioridad:** ★★★

### Qué atiende
Hoy cada pago del huésped se carga en Cloudbeds, luego en Odoo como recibo de cliente y luego se copia en una carpeta de Teams con el comprobante adjunto: la misma transacción se reescribe en tres entornos sin integración. Además, ningún pago móvil o transferencia se da por válido hasta confirmar su ingreso real en el portal del banco. Esta tarea centraliza el cobro en el sistema contable, registrándolo una sola vez.

### Cómo se configura
El cobro del huésped se registra mediante un recibo vinculado a su factura, que se asienta al confirmar el ingreso real en banco; con ello el pago queda centralizado en la contabilidad y desaparece el triple registro. La factura se emite y el cobro se aplica desde la propia factura, lo que descuenta el saldo pendiente. Se apoya en el maestro de clientes de GS-001 y en la facturación de servicios de GS-020.

Rutas de referencia: `Contabilidad > Clientes > Facturas` para emitir la factura; el botón Registrar pago de la factura para aplicar el cobro sobre el saldo pendiente.

### Revisión posterior (QA / gerencia de proyecto)
1. Emitir una factura a un huésped y registrar su pago desde la factura: el saldo pendiente debe reducirse en el monto cobrado.
2. Registrar el cobro solo tras confirmar el ingreso en el portal del banco: el recibo debe quedar asociado a la factura correspondiente.
3. Buscar un cobro registrado: debe existir un único asiento del pago, no varios registros del mismo cobro.
4. Consultar el saldo de un huésped tras el pago total: la factura debe quedar saldada.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-017 (AFL-1.1, AFL-1.7, AFL-1.8, AFL-3.1, AFL-3.7, AFL-3.8, AFL-4.1, AFL-4.2, AFL-5.1, AFL-6.1, AFL-6.2, AFL-6.3, AFL-6.4, AFL-7.1, AFL-7.2, AFL-7.3, AFL-7.4, AFL-11.1, AFL-12.1, GHO-1.1.3, GHO-1.1.4, GHO-1.1.5, GHO-1.1.6, GHO-1.2.2, GHO-1.2.3, GHO-1.2.4, GHO-1.3.1, GHO-1.3.2) · Propuesta PROP-NAT-013

---

# GS-018 · Conciliación bancaria asistida con importación de extractos

**Tipo:** Configuración · **Módulo:** Contabilidad · **Edición:** Community (importación) / Enterprise (sincronización automática)
**Áreas:** Administración/CCS, Administración/AFJ, Administración/AFL, Talento Humano · **Fase:** 3 · **Depende de:** GS-017, GS-023 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
La conciliación bancaria es diaria y la ejecutan varios roles cotejando manualmente los extractos de Banesco, Banplus, Bancamiga y Banco Exterior, más los lotes de Credicard, contra los recibos y pagos; los estados de cuenta se mantienen en Excel en paralelo. Los pagos devueltos que no se detectan a tiempo generan notas de débito, disputas y retrabajo de días a semanas. Esta tarea apoya el cruce en la conciliación nativa a partir de extractos importados y reglas.

### Cómo se configura
Los movimientos del banco se cruzan contra los recibos y pagos importando los extractos; los lotes de POS y Credicard entran vía diarios puente. Las reglas de conciliación automatizan comisiones, tasas y partidas recurrentes, con lo que el cotejo manual se reduce y los estados de cuenta dejan de llevarse en Excel. Se apoya en los cobros registrados en GS-017 y en los pagos a proveedor de GS-023. La importación manual de extractos y las reglas son nativas; la sincronización bancaria automática requiere la edición Enterprise, detalle que se confirma contra la documentación oficial de Odoo.

Rutas de referencia: `Contabilidad > Banco`, botón Importar, para cargar el extracto; `Contabilidad > Configuración > Reglas de conciliación` para las reglas; `Contabilidad > Conciliación` para ejecutar el cruce.

### Revisión posterior (QA / gerencia de proyecto)
1. Importar un extracto bancario: sus movimientos deben quedar disponibles para conciliar.
2. Ejecutar la conciliación de un extracto con recibos y pagos: las partidas que coinciden deben cruzarse.
3. Definir una regla para una comisión recurrente y volver a conciliar: la comisión debe aplicarse automáticamente.
4. Introducir un pago devuelto en el extracto: la conciliación debe evidenciar que no cruza contra ningún cobro.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-018 (CCS-4.1.1, CCS-4.1.3, CCS-4.1.7, CCS-4.1.8, AFJ-1.10, AFJ-1.11, AFL-10.1, AFL-10.2, AFL-10.3, RRH-2.4.1) · Propuesta PROP-DEV-005

---

# GS-019 · Conciliación de caja física y de divisas digitales

**Tipo:** Configuración + desarrollo de integración · **Módulo:** Contabilidad · **Edición:** Community
**Áreas:** Administración/AFL · **Fase:** 3 · **Depende de:** GS-017, GS-018 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
A diferencia del extracto bancario importable, los extractos de la caja física y de las plataformas de divisas —PayPal, Binance, Zelle— se crean hoy a mano en Odoo antes de poder conciliar los recibos. Además, una factura con saldo cero pero sin conciliar permanece en "En proceso de pago" en vez de "Pagada", generando confusión sobre el estado real del cobro. Esta tarea concilia los diarios de caja y multimoneda y aclara el estado de cada factura.

### Cómo se configura
La conciliación nativa de los diarios de caja y multimoneda distingue la factura ya pagada de la que solo tiene el cobro pendiente de conciliar, con lo que se resuelve la confusión de saldos. El cruce se ejecuta sobre los diarios dados de alta, apoyándose en los cobros de GS-017 y en la conciliación bancaria de GS-018. La carga de los extractos de caja física y de las plataformas de divisas no tiene un origen importable nativo: automatizar esa entrada requiere un desarrollo de integración, alcance que se confirma contra la documentación oficial de Odoo; mientras tanto esos extractos se crean manualmente.

Rutas de referencia: `Contabilidad > Configuración > Diarios` para los diarios de caja y multimoneda; `Contabilidad > Conciliación` para el cruce.

### Revisión posterior (QA / gerencia de proyecto)
1. Conciliar un recibo de cobro contra un extracto de caja física: la partida debe quedar cruzada.
2. Conciliar un cobro en divisas contra su extracto: el movimiento debe cruzarse en la moneda correspondiente.
3. Revisar una factura con saldo cero ya conciliada: su estado debe pasar a "Pagada".
4. Revisar una factura con saldo cero pero sin conciliar: debe distinguirse de la anterior y no figurar como pagada.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-019 (AFL-8.5, AFL-11.2, AFL-11.3, AFL-12.2, AFL-12.3) · Propuesta PROP-DEV-006

---

# GS-020 · Facturación de venta de servicios del hotel

**Tipo:** Configuración · **Módulo:** Contabilidad, Ventas · **Edición:** Community
**Áreas:** Administración/AFL · **Fase:** 3 · **Depende de:** GS-001, GS-002 · **Estado:** Pendiente · **Prioridad:** ★★★

### Qué atiende
Para cada factura se descarga hoy la cuenta del cliente a un Excel auxiliar donde se calcula la tasa promedio de pagos en distintas fechas y se discrimina la base imponible, porque Odoo recibe la base y no el total con IVA. Esta tarea hace que el propio sistema calcule el IVA y la conversión de moneda al emitir la factura de los servicios del hotel: hospedaje, A&B, estacionamiento, marina y arrendamientos.

### Cómo se configura
El sistema toma la base imponible y la discrimina dentro del documento, aplicando el IVA y la tasa de cambio configurados, con lo que se elimina el Excel auxiliar de tasa promedio y discriminación por factura. Los servicios facturables se apoyan en el maestro de productos de GS-002 y los clientes en el maestro de GS-001. Cabe notar que hoy todas las facturas se emiten como facturas de contingencia por no contar con máquina fiscal integrada; el cálculo de impuestos y moneda es nativo, mientras que la emisión del comprobante fiscal venezolano corresponde a la localización y se trata en su propia tarea.

Rutas de referencia: `Contabilidad > Configuración > Impuestos` para las tasas de impuesto; `Contabilidad > Configuración > Monedas` para las monedas y sus tasas; `Contabilidad > Clientes > Facturas` para emitir la factura.

### Revisión posterior (QA / gerencia de proyecto)
1. Emitir una factura de un servicio del hotel: el IVA debe calcularse y discriminarse dentro del documento.
2. Emitir una factura en una moneda distinta a la funcional: el sistema debe aplicar la tasa de cambio configurada.
3. Revisar una factura emitida: la base imponible y el impuesto deben aparecer separados sin necesidad de un Excel auxiliar.
4. Emitir facturas de distintos servicios (hospedaje, A&B, estacionamiento): todas deben calcular impuestos y moneda de la misma forma.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-020 (AFL-2.1, AFL-2.2, AFL-2.3, AFL-2.4, AFL-2.5, AFL-4.3, AFL-5.5, AFL-6.5, AFL-16.1, AFL-16.2) · Propuesta PROP-NAT-014

---

# GS-021 · Listas de precio, tarifario y reglas de descuento por segmento

**Tipo:** Configuración · **Módulo:** Ventas · **Edición:** Community
**Áreas:** Administración/AFL, Gerencia Hotelera · **Fase:** 1 · **Depende de:** GS-000 · **Estado:** Pendiente · **Prioridad:** ★★★

### Qué atiende
Las comisiones de agencias, los descuentos de grupos y eventos y las compensaciones se consultan hoy caso por caso con presidencia o gerencia, sin una tabla de tarifas o descuentos predefinida, y la demora hace perder clientes. Además, el menú impreso puede quedar desincronizado de los precios cargados, arriesgando cobrar un precio distinto al registrado. Esta tarea parametriza las tarifas y descuentos por segmento sobre el catálogo único.

### Cómo se configura
Las tarifas por segmento —agencias, grupos, eventos— y los descuentos quedan definidos en listas de precio sobre el catálogo, de modo que el precio aplicable salga predefinido del sistema en lugar de una consulta caso por caso. Al estar el precio cargado una sola vez sobre el producto, se elimina la desincronización entre el menú impreso y lo que se cobra. Se apoya en el maestro de productos de GS-002 como catálogo único de referencia.

Rutas de referencia: `Ventas > Configuración > Ajustes`, sección Precios, para activar las listas de precio; `Ventas > Configuración > Listas de precios > Nuevo` para crear y mantener cada lista con su segmento, condiciones y descuentos.

### Revisión posterior (QA / gerencia de proyecto)
1. Crear una lista de precio para un segmento (por ejemplo agencias) con su descuento: debe quedar registrada.
2. Aplicar esa lista a una venta del segmento: el precio debe salir predefinido del sistema, sin consulta manual.
3. Comparar el precio de un mismo producto en dos listas distintas: cada segmento debe reflejar su tarifa.
4. Modificar el precio de un producto en el catálogo: la venta debe tomar ese precio, sin discrepancia respecto a lo cargado.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Migración de datos (16 → 19)
El maestro se genera extrayendo el dato desde Odoo 16, depurándolo y normalizándolo, y cargándolo a Odoo 19. Como control, el conteo de registros y los totales relevantes en Odoo 19 se concilian contra Odoo 16; las diferencias deben quedar justificadas por la depuración de duplicados u obsoletos.

### Trazabilidad
GS-021 (AFL-13.6, AFL-13.9, GHO-2.2.1, GHO-2.2.2, GHO-2.2.3, GHO-2.2.4, GHO-2.3.3) · Propuesta PROP-NAT-015


---

# GS-022 · Cuentas por pagar: vencimientos, antigüedad y planificación de pagos

**Tipo:** Configuración · **Módulo:** Contabilidad, Compras · **Edición:** Community
**Áreas:** Administración/CCS, Administración/Hotel (Juan), Compras y Almacén · **Fase:** 3 · **Depende de:** GS-001, GS-023 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
La planificación de pagos se sostiene hoy en una plantilla de cuentas por pagar en Excel que se actualiza tres veces al día, porque el módulo de Compras arrastra pedidos basura que impiden extraer la información directamente del sistema. Los servicios fijos mensuales —CORPOELEC, TELMACA, seguridad— y las facturas de proveedor con factura directa se cargan a mano en ese archivo o quedan fuera de la planificación. Esta tarea traslada el control de vencimientos y prioridades al reporte nativo de cuentas por pagar, para leerlos del sistema y eliminar la doble gestión.

### Cómo se configura
Las facturas de proveedor se cargan en Contabilidad con su fecha de vencimiento, y las obligaciones recurrentes de monto fijo —los servicios mensuales— se asientan como facturas recurrentes para que aparezcan por sí solas en el calendario de pagos sin recargarlas cada mes. Con las facturas y sus vencimientos en el sistema, la planificación se lee del reporte de cuentas a pagar vencidas, que muestra la antigüedad de saldos y permite priorizar. Requisito previo: los pedidos que hoy ensucian el módulo deben depurarse para que el reporte sea confiable.

Rutas de referencia: `Contabilidad > Proveedores > Facturas` para el registro; el reporte en `Contabilidad > Informes > Cuentas a pagar vencidas`.

### Revisión posterior (QA / gerencia de proyecto)
1. Registrar una factura de proveedor con fecha de vencimiento y consultar el reporte de cuentas a pagar vencidas: la factura debe aparecer clasificada por su tramo de antigüedad.
2. Configurar un servicio fijo mensual como factura recurrente: al generarse el período, debe aparecer en la planificación sin cargarla a mano.
3. Registrar el pago de una factura pendiente: debe salir del reporte de cuentas por pagar vencidas.
4. Filtrar el reporte por proveedor y por rango de vencimiento: debe listar solo las obligaciones que cumplen el filtro.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-022 (CCS-4.1.2, AFJ-3.1, AFJ-3.2, AFJ-3.3, AFJ-3.4, AFJ-3.5, AFJ-3.6, AFJ-3.8, AFJ-3.9, AFJ-3.10, COM-2) · Propuesta PROP-NAT-016

---

# GS-023 · Registro de factura de proveedor, pago y conciliación de la partida

**Tipo:** Configuración · **Módulo:** Contabilidad, Compras · **Edición:** Community
**Áreas:** Administración/CCS, Administración/Hotel (Juan), Administración/Hotel (Libny), Compras y Almacén, Gerencia Hotelera, Operaciones · **Fase:** 3 · **Depende de:** GS-001, GS-005 · **Estado:** Pendiente · **Prioridad:** ★★★

### Qué atiende
El pago a proveedores se controla hoy de forma dispersa —23 tarjetas que se pagan una a una con un archivo manual, conciliación imputada tarjeta por tarjeta y sin un estado único por pago—. Esta tarea cierra el ciclo de compra a pago dentro del sistema: la factura nace del pedido autorizado, el pago se registra contra esa factura y la conciliación bancaria deja cada partida con un solo estado, conservando el control de que todo pago se verifica contra un pedido previamente autorizado por Gerencia General.

### Cómo se configura
La factura de proveedor se genera a partir del pedido de compra ya autorizado y recibido, de modo que el documento quede atado a lo efectivamente comprado. El pago se ejecuta desde la propia factura, que descuenta el saldo pendiente, y luego se cruza contra el movimiento de banco en la conciliación, cerrando la partida con un único estado. La verificación documental contra requisitos del SENIAT y la comprobación de la tasa de cambio antes de registrar siguen siendo un control que hace el área en el primer eslabón, no un cruce automático.

Rutas de referencia: `Contabilidad > Proveedores > Facturas` para el registro; el botón Registrar pago de la factura para el pago; `Contabilidad > Conciliación` para el cruce contra banco.

### Revisión posterior (QA / gerencia de proyecto)
1. Generar la factura desde un pedido de compra recibido: las líneas y montos deben corresponder a lo recibido, no a un documento suelto.
2. Registrar el pago desde la factura: el saldo pendiente de la factura debe quedar en cero.
3. Conciliar el pago contra el movimiento de banco: la partida debe quedar marcada como conciliada.
4. Consultar el estado de un pago cualquiera: debe verse un único estado, sin controles paralelos por tarjeta.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-023 (CCS-4.2.1, CCS-4.2.3, CCS-4.2.5, CCS-4.2.6, CCS-4.2.8, CCS-4.1.9, CCS-4.1.10, AFJ-1.1, AFJ-1.3, AFJ-1.4, AFJ-1.5, AFJ-1.7, AFJ-1.8, AFJ-1.9, AFL-8.3, AFL-8.4, COM-1.4, GHO-3.4, OPE-5.2) · Propuesta PROP-NAT-017

---

# GS-024 · Anticipos de proveedor y depuración de partidas abiertas

**Tipo:** Configuración · **Módulo:** Contabilidad · **Edición:** Community
**Áreas:** Administración/Hotel (Juan) · **Fase:** 3 · **Depende de:** GS-023 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
El control de pagos anticipados a proveedores vive hoy en una carpeta local del computador y en recordatorios. Los saldos de anticipo de 2023 y 2024 quedan abiertos y distorsionan el balance, y su depuración es compleja y voluminosa. Esta tarea lleva el control de anticipos al sistema, donde el adelanto se registra y luego se descuenta de la factura correspondiente, y permite depurar los saldos antiguos cruzándolos contra sus facturas.

### Cómo se configura
El adelanto al proveedor se asienta como un pago que queda pendiente de aplicar. Cuando llega la factura, el sistema ofrece esos pagos pendientes del proveedor y el anticipo se descuenta contra la factura, de modo que el saldo se cierra dentro de la contabilidad y no en una carpeta aparte. Los anticipos antiguos abiertos se depuran aplicándolos a las facturas ya emitidas o ajustándolos según corresponda.

Rutas de referencia: `Contabilidad > Proveedores > Pagos` para asentar el anticipo; el botón Registrar pago de la factura para aplicarlo.

### Revisión posterior (QA / gerencia de proyecto)
1. Registrar un pago anticipado a un proveedor: debe quedar como pago pendiente de aplicar, sin factura asociada.
2. Al recibir la factura de ese proveedor, aplicar el anticipo pendiente: el saldo de la factura debe reducirse en el monto del anticipo.
3. Consultar el estado de cuenta del proveedor: no debe quedar el anticipo duplicado ni el saldo distorsionado.

La tarea se da por **Lista** cuando las tres pruebas se cumplen.

### Trazabilidad
GS-024 (AFJ-1.18, AFJ-1.19) · Propuesta PROP-NAT-018

---

# GS-025 · Cuentas por pagar/cobrar con socios y contabilidad analítica

**Tipo:** Configuración · **Módulo:** Contabilidad · **Edición:** Community
**Áreas:** Administración/CCS · **Fase:** 3 · **Depende de:** GS-023 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
Cuando un socio paga una factura de la empresa, el asiento se acumula hoy como cuenta por pagar a proveedor, aunque la deuda real es con el socio que efectuó el pago. Eso distorsiona el saldo de proveedores y la posición real de cuentas por pagar y por cobrar. Esta tarea separa contablemente las deudas y cobros con socios de las de proveedores externos.

### Cómo se configura
Se habilitan cuentas contables propias para las obligaciones y cobros con socios, distintas de las cuentas de proveedores externos. Al asentar el pago que hace un socio, la operación se registra contra esas cuentas de socio, de modo que la deuda quede atribuida a quien corresponde y el saldo de proveedores refleje solo a terceros externos.

Rutas de referencia: `Contabilidad > Configuración > Plan de cuentas` para crear las cuentas de socios; `Contabilidad > Proveedores > Pagos` para asentar el pago contra la cuenta correcta.

### Revisión posterior (QA / gerencia de proyecto)
1. Verificar que existen cuentas contables específicas para deudas y cobros con socios, separadas de las de proveedores.
2. Registrar el pago de una factura efectuado por un socio: la obligación debe quedar asentada contra la cuenta del socio, no contra proveedores.
3. Consultar el saldo de cuentas por pagar a proveedores externos: no debe incluir la deuda con el socio.

La tarea se da por **Lista** cuando las tres pruebas se cumplen.

### Trazabilidad
GS-025 (CCS-4.4.4, CCS-4.2.7, CCS-4.2.9, CCS-4.2.10) · Propuesta PROP-NAT-019

---

# GS-026 · Notas de crédito y devoluciones contables

**Tipo:** Configuración · **Módulo:** Contabilidad · **Edición:** Community
**Áreas:** Administración/CCS · **Fase:** 3 · **Depende de:** GS-023 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
Los errores de costo o cantidad de una factura de proveedor se detectan hoy al procesarla, entre 7 y 15 días después de que Compras montó el pedido y Almacén lo recibió. La corrección se tramita como una devolución manual que retrasa el pago al proveedor. Esta tarea documenta esos ajustes dentro del sistema mediante notas de crédito o reverso del documento.

### Cómo se configura
Sobre la factura del proveedor con error se emite una nota de crédito que corrige el costo o la cantidad, dejando el ajuste asentado y trazable en lugar de gestionarlo como una devolución fuera del sistema. Las notas emitidas quedan disponibles para consulta y afectan el saldo de la factura corregida.

Rutas de referencia: desde la factura en `Contabilidad > Proveedores > Facturas`, el botón Nota de crédito; las notas emitidas se consultan en `Contabilidad > Proveedores > Notas de crédito`.

### Revisión posterior (QA / gerencia de proyecto)
1. Sobre una factura de proveedor con error de costo, emitir una nota de crédito parcial: el saldo de la factura debe ajustarse por el monto de la nota.
2. Consultar el listado de notas de crédito: la nota emitida debe aparecer vinculada a su factura de origen.
3. Verificar que el ajuste queda registrado en el sistema y no como una devolución manual externa.

La tarea se da por **Lista** cuando las tres pruebas se cumplen.

### Trazabilidad
GS-026 (CCS-4.4.8) · Propuesta PROP-NAT-020

---

# GS-027 · Retenciones de IVA e ISLR y generación de comprobantes (localización VE)

**Tipo:** Configuración (apoyada en localización venezolana) · **Módulo:** Contabilidad (localización VE) · **Edición:** Community
**Áreas:** Administración/CCS, Administración/Hotel (Juan), Administración/Hotel (Libny), Talento Humano, Compras y Almacén · **Fase:** 3 · **Depende de:** GS-001, GS-023 · **Estado:** Pendiente · **Prioridad:** ★★★

### Qué atiende
La versión actual de Odoo genera un XML de retención inválido cuando una factura tiene más de dos impuestos o base imponible alterada, lo que obliga a corregirlo a mano antes de enviarlo al contador, con riesgo de rechazo del SENIAT; además, el XML de retención sobre nómina se produce con una macro manual y se fusiona con el de compras. Esta tarea calcula las retenciones de IVA e ISLR sobre cada factura y emite los comprobantes y el archivo XML del período desde el sistema, dejando el certificado de retención y el seguimiento de reembolsos en un único flujo.

### Cómo se configura
Las retenciones y sus porcentajes se parametrizan como impuestos y se aplican sobre la factura del proveedor; al cierre del período, los comprobantes y los archivos XML se obtienen desde los informes. Debe decirse con honestidad: el soporte de retenciones de IVA/ISLR para contribuyente especial no forma parte del núcleo estándar de Odoo, sino de la localización fiscal venezolana, que en la versión actual se cubre con módulos de la comunidad. Ese paquete, su cobertura y el formato del XML se confirman contra la documentación de la localización antes de darlo por cerrado; sin la localización instalada, esta tarea no puede validarse.

Rutas de referencia: `Contabilidad > Configuración > Impuestos` para las retenciones y su porcentaje; `Contabilidad > Proveedores > Facturas` para aplicarlas; `Contabilidad > Informes` para los comprobantes y archivos del período.

### Revisión posterior (QA / gerencia de proyecto)
1. Confirmar que la localización venezolana de retenciones está instalada y activa.
2. Registrar una factura de proveedor sujeta a retención de IVA e ISLR: el sistema debe calcular ambos montos según el porcentaje del proveedor.
3. Emitir el comprobante de retención de esa factura: debe generarse desde el sistema, sin corrección manual.
4. Generar el archivo XML de retenciones del período con una factura de más de dos impuestos: el archivo debe salir válido, sin edición a mano.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-027 (CCS-4.3.1, CCS-4.3.2, CCS-4.4.7, CCS-4.2.2, AFJ-2.6, AFJ-3.11, AFL-17.1, AFL-17.2, RRH-2.6.1, RRH-2.6.2, COM-3) · Propuesta PROP-NAT-021

---

# GS-028 · Declaración fiscal quincenal de IVA y libro de compras (localización VE)

**Tipo:** Configuración (apoyada en localización venezolana) · **Módulo:** Contabilidad (localización VE) · **Edición:** Community
**Áreas:** Administración/Hotel (Juan), Contraloría · **Fase:** 3 · **Depende de:** GS-027 · **Estado:** Pendiente · **Prioridad:** ★★★

### Qué atiende
El cierre quincenal del contribuyente especial exige contar, escanear y enumerar facturas a mano, y hoy los libros de IVA de compras y ventas no cuadran mes a mes, generando inconsistencias en los libros fiscales. Esta tarea genera el libro de compras del período directamente desde el diario contable, produciendo el documento íntegro y numerado sin el conteo y la enumeración manual.

### Cómo se configura
Una vez cerrado el período, el libro de compras se obtiene desde los informes, tomando como única fuente las facturas ya registradas en el sistema, lo que asegura que lo declarado coincida con lo contabilizado. Debe decirse con honestidad: el libro de compras en el formato fiscal venezolano no es un informe del núcleo estándar de Odoo, sino de la localización fiscal venezolana, hoy cubierta por módulos de la comunidad. Ese paquete y el formato exacto del libro se confirman contra la documentación de la localización antes de darlo por cerrado.

Rutas de referencia: `Contabilidad > Proveedores > Facturas` como fuente; `Contabilidad > Informes` para generar el libro una vez cerrado el período.

### Revisión posterior (QA / gerencia de proyecto)
1. Confirmar que la localización venezolana que provee el libro de compras está instalada.
2. Cerrar un período quincenal y generar el libro de compras: debe salir numerado y con todas las facturas del período.
3. Cotejar el total del libro de compras contra el total de facturas registradas en ese período: deben coincidir.
4. Verificar que el libro se genera desde el sistema sin conteo ni enumeración manual de facturas.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-028 (AFJ-2.1, AFJ-2.2, AFJ-2.3, AFJ-2.5, AFJ-2.7, CTR-5.2, CTR-7.2) · Propuesta PROP-NAT-022

---

# GS-029 · Bloqueo de períodos contables y emisión de libros legales

**Tipo:** Configuración · **Módulo:** Contabilidad · **Edición:** Community
**Áreas:** Contraloría · **Fase:** 3 · **Depende de:** GS-023 · **Estado:** Pendiente · **Prioridad:** ★★★

### Qué atiende
Los reportes descargados del sistema no son confiables porque los períodos anteriores se siguen modificando, alterando cifras de reportes ya emitidos e invalidando análisis previos. Además, faltan el libro diario, el libro de inventario y el balance, cuya impresión mensual exige el Código de Comercio y hoy no se cumple por ausencia de cierres. Esta tarea fija una fecha de bloqueo que impide tocar períodos cerrados y habilita la emisión de los libros legales.

### Cómo se configura
Se establece una fecha de bloqueo que impide crear o modificar asientos en períodos ya cerrados, con lo que los reportes vuelven a ser estables. Los libros de diario, mayor e inventario se emiten desde los informes. Debe decirse con honestidad: la disponibilidad nativa del libro de inventario y el formato exacto de cada libro legal venezolano se confirman contra la documentación de Odoo antes de darlo por cerrado.

Rutas de referencia: `Contabilidad > Contabilidad > Fechas de bloqueo` para el bloqueo; `Contabilidad > Informes` para los libros legales.

### Revisión posterior (QA / gerencia de proyecto)
1. Fijar una fecha de bloqueo e intentar modificar un asiento de un período anterior a ella: el sistema debe impedirlo.
2. Emitir un reporte, cerrar el período y volver a emitirlo: las cifras deben mantenerse idénticas.
3. Generar el libro diario y el libro mayor del período: deben producirse desde el sistema.
4. Generar el libro de inventario: debe emitirse o, si no es nativo, quedar documentado el alcance confirmado contra la documentación.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-029 (CTR-1.2, CTR-1.3) · Propuesta PROP-NAT-023

---

# GS-030 · Aportes parafiscales y municipales de fecha fija (localización VE)

**Tipo:** Configuración (apoyada en localización venezolana) · **Módulo:** Contabilidad (localización VE) · **Edición:** Community
**Áreas:** Administración/CCS · **Fase:** 3 · **Depende de:** GS-022 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
Los aportes parafiscales y municipales de fecha fija —FONACIT, INATUR, Alcaldía, INPARQUES, aseo urbano, VACC— tienen plazos estrictos: INPARQUES e INATUR el día 5, Alcaldía de Silva el 15, VACC el 10. Su incumplimiento genera multa, y hoy cada fecha se sigue manualmente. Esta tarea registra cada obligación en el sistema para que aparezca por sí sola en el calendario de pagos y en el reporte de cuentas por pagar.

### Cómo se configura
Cada aporte de fecha fija se carga como factura o asiento recurrente con su base y su fecha de vencimiento, de modo que se genere solo cada período y entre en la planificación de pagos junto con el resto de las cuentas por pagar. Debe decirse con honestidad: el cálculo de los tributos municipales según la normativa venezolana se apoya en la localización fiscal venezolana, hoy cubierta por módulos de la comunidad; ese alcance se confirma contra la documentación antes de darlo por cerrado. El registro de la obligación con su vencimiento es nativo.

Rutas de referencia: `Contabilidad > Proveedores > Facturas` para cargar cada obligación con su vencimiento; `Contabilidad > Informes` para revisar la planificación de cuentas por pagar.

### Revisión posterior (QA / gerencia de proyecto)
1. Registrar un aporte de fecha fija como obligación recurrente con su vencimiento: debe generarse solo en el período siguiente.
2. Consultar el reporte de cuentas por pagar cerca de una fecha límite: la obligación correspondiente debe aparecer entre los vencimientos próximos.
3. Verificar que todas las obligaciones de fecha fija identificadas quedan cargadas y aparecen en el calendario de pagos.

La tarea se da por **Lista** cuando las tres pruebas se cumplen.

### Trazabilidad
GS-030 (CCS-4.3.6, CCS-4.3.7, CCS-4.3.8, CCS-4.3.9, CCS-4.3.10) · Propuesta PROP-NAT-024

---

# GS-031 · Cumplimiento parafiscal laboral y declaración de tributos sobre nómina (localización VE)

**Tipo:** Configuración (apoyada en localización venezolana) · **Módulo:** Contabilidad (localización VE) · **Edición:** Community
**Áreas:** Talento Humano, Administración/CCS · **Fase:** 3 · **Depende de:** GS-027 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
Talento Humano ejecuta un ciclo definido de revisión, validación, solicitud de compromiso de pago y archivo para IVSS, INCES, FAOV y MPPPST. Del lado contable, los cierres y cuadres no razonables en Odoo obligan a que el contador externo elabore una propuesta de trabajo para declarar ISLR e IGP, dependiendo de un criterio externo en lugar de los saldos del sistema. Esta tarea soporta las declaraciones de tributos sobre nómina (ARC/ARI, IPP, ISLR/IGP) a partir de los saldos del propio sistema.

### Cómo se configura
Las retenciones sobre nómina y sus tarifas se parametrizan como impuestos, y los soportes del período se emiten desde los informes tomando los saldos del sistema, reduciendo la consolidación manual fuera de Odoo. Debe decirse con honestidad: el tratamiento de retenciones sobre nómina conforme a la normativa venezolana no es parte del núcleo estándar, sino de la localización fiscal venezolana, cubierta hoy por módulos de la comunidad; ese paquete y su cobertura sobre nómina se confirman contra la documentación antes de darlo por cerrado.

Rutas de referencia: `Contabilidad > Configuración > Impuestos` para las retenciones y tarifas; `Contabilidad > Informes` para los soportes del período.

### Revisión posterior (QA / gerencia de proyecto)
1. Confirmar que la localización venezolana de retenciones cubre los conceptos sobre nómina requeridos.
2. Parametrizar una retención sobre nómina y verificar que se refleja en los saldos del sistema.
3. Emitir el soporte del período para una declaración de tributos sobre nómina: debe generarse desde los saldos del sistema.
4. Cotejar el soporte emitido contra los saldos contables del período: deben coincidir sin consolidación manual externa.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-031 (RRH-1.1.1, RRH-1.1.2, RRH-1.1.3, RRH-1.1.4, RRH-3.6.3, RRH-3.6.4, CCS-4.3.3, CCS-4.3.4, CCS-4.3.5) · Propuesta PROP-NAT-025

---

# GS-032 · Gestión documental para fiscalizaciones y cumplimiento ante entes

**Tipo:** Configuración · **Módulo:** Documentos · **Edición:** Enterprise
**Áreas:** Contraloría, Talento Humano, Administración/Hotel (Juan), Administración/CCS · **Fase:** 3 · **Depende de:** — · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
Desde 2023 la documentación no se archiva de forma preventiva; al llegar una fiscalización, los departamentos buscan y escanean papeles de urgencia, con riesgo de presentar información incompleta. No existe un flujo estandarizado con responsables y plazos para atender notificaciones de inspecciones, y hay un acumulado de facturas fiscales de compra y venta pendiente de ordenar. Esta tarea centraliza el archivo digital para que la documentación se ordene de forma preventiva y las notificaciones lleguen a una carpeta con responsable asignado.

### Cómo se configura
El archivo se organiza en espacios de trabajo por departamento y período, con etiquetas para clasificar, permisos por usuario y un alias de correo por espacio, de modo que un documento enviado por mail caiga directamente en la carpeta que le corresponde y con su responsable. Debe decirse con honestidad: el módulo Documentos pertenece a la edición Enterprise de Odoo; esta tarea no está disponible en Community.

Rutas de referencia: `Documentos > Configuración > Espacios de trabajo` para los espacios y sus permisos; `Documentos > Configuración` para las etiquetas y el alias de correo de cada espacio.

### Revisión posterior (QA / gerencia de proyecto)
1. Confirmar que la instalación cuenta con la edición Enterprise y el módulo Documentos activo.
2. Crear un espacio de trabajo por departamento con permisos por usuario: un usuario ajeno no debe ver los documentos de otro departamento.
3. Enviar un documento al alias de correo de un espacio: debe archivarse automáticamente en ese espacio.
4. Etiquetar y buscar un documento por su etiqueta y período: debe recuperarse sin búsqueda de urgencia.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-032 (CTR-5.1, CTR-5.3, RRH-1.2.1/1.2.2, RRH-1.2.3, RRH-3.6.5, AFJ-1.12, AFJ-1.13, AFJ-1.14, AFJ-2.4, CCS-4.4.3, CCS-4.4.9) · Propuesta PROP-DEV-007


---

# GS-033 · Recepción de guía SUNAGRO de traslado de mercancía

**Tipo:** Desarrollo · **Módulo:** Externo (SUNAGRO) · **Edición:** —
**Áreas:** Administración y Finanzas (Hotel-Juan) · **Fase:** 4 · **Depende de:** — · **Estado:** Desarrollo · **Prioridad:** ★

### Qué atiende
La guía de traslado de mercancía debe recibirse en el portal estatal SUNAGRO SICA dentro de un plazo, y el incumplimiento genera multa y medidas disciplinarias de gerencia. Hoy el control del plazo depende de la atención del responsable, sin aviso automático. Esta tarea busca que la guía y su fecha límite queden registradas y vigiladas para no perder el plazo.

### Cómo se configura
SUNAGRO SICA es un portal gubernamental venezolano externo que Odoo no contempla de forma estándar, por lo que no hay vía nativa ni de localización. El control se sostiene sobre un desarrollo de integración con ese portal que registre cada guía, su fecha límite de recepción y dispare una alerta antes del vencimiento. Mientras no exista esa integración, el seguimiento del plazo se apoya en una actividad o tarea programada dentro del sistema, cargada a mano, que recuerde la fecha límite al responsable. El alcance de la integración se confirma contra las condiciones del portal antes de asentarlo.

### Revisión posterior (QA / gerencia de proyecto)
1. Registrar una guía con su fecha límite: debe quedar guardada con esa fecha visible para el responsable.
2. Programar el aviso de vencimiento y adelantar la fecha del sistema al día previo al plazo: el responsable debe recibir la alerta antes del vencimiento.
3. Marcar una guía como recibida: debe quedar cerrada y salir de los pendientes de vencimiento.

La tarea se da por **Lista** cuando las tres pruebas se cumplen sobre el mecanismo de seguimiento acordado (integración o actividad programada).

### Trazabilidad
GS-033 (AFJ-1.6) · Propuesta PROP-DEV-008

---

# GS-034 · Cálculo y procesamiento de nómina, conceptos, bonos y deducciones

**Tipo:** Configuración y desarrollo · **Módulo:** Nómina · **Edición:** Enterprise
**Áreas:** Talento Humano · **Fase:** 4 · **Depende de:** GS-038, GS-036 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
Todo el procesamiento de pago se hace hoy en hojas de Excel paralelas, con consolidación, sumatorias y transcripción manuales sujetas a error y reproceso. Esta tarea lleva el cálculo de nómina —conceptos, horas extras, bonos, descuentos por consumo o ausencia y liquidaciones— al sistema, de modo que el recibo se genere y se contabilice sin hojas externas.

### Cómo se configura
El procesamiento corre sobre estructuras y reglas salariales que calculan los conceptos, se definen en `Nómina > Configuración > Estructuras salariales`, y el período se procesa en `Nómina > Recibos de nómina > Lotes`. El motor de nómina es nativo, pero corresponde a la edición Enterprise. Lo que no sale nativo es el cálculo venezolano: no existe una localización fiscal VE oficial, de modo que las reglas de LOTTT, IVSS, FAOV e INCES se configuran como reglas salariales propias o se incorporan mediante un módulo de tercero. Ese paquete y su alcance se confirman contra la documentación antes de asentarlos. El cálculo se alimenta de la ficha del empleado (GS-038) y de las horas y ausencias registradas (GS-036).

### Revisión posterior (QA / gerencia de proyecto)
1. Procesar un lote de nómina de un período y generar los recibos: cada empleado debe salir con su salario, conceptos y deducciones calculados por el sistema.
2. Cargar horas extras de un empleado y volver a calcular: el recibo debe reflejar el monto de esas horas sin cálculo manual.
3. Aplicar un descuento por consumo o ausencia a un empleado: debe restarse en el recibo con el concepto identificado.
4. Revisar las deducciones legales (IVSS, FAOV, INCES) de un recibo contra el valor esperado del período: deben coincidir con las reglas configuradas.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen con las reglas venezolanas ya configuradas.

### Trazabilidad
GS-034 (RRH-2.1.2, RRH-2.1.3, RRH-2.3.1, RRH-2.3.2, RRH-2.3.5, RRH-2.5.1, RRH-2.5.2, RRH-2.4.2, RRH-3.7.1) · Propuesta PROP-DEV-009

---

# GS-035 · Ejecución de pagos de nómina por archivo bancario

**Tipo:** Configuración y desarrollo · **Módulo:** Nómina, Contabilidad · **Edición:** Enterprise
**Áreas:** Talento Humano · **Fase:** 4 · **Depende de:** GS-034 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
El pago de la nómina y de las horas extras se hace hoy elaborando a mano un archivo masivo TXT y ejecutando transferencias individuales para los colaboradores con cuentas de otros bancos. Esta tarea busca emitir el pago por lote desde el sistema, dejando el registro contable del pago amarrado al recibo, en lugar de procesar transferencias una a una.

### Cómo se configura
El lote de pago se genera en `Nómina > Recibos de nómina > Lotes` y el pago se registra en `Contabilidad > Proveedores > Pagos`. El pago por lote es nativo, pero produce el archivo en formato SEPA; el archivo TXT que exige el banco venezolano no es un formato estándar de Odoo. Generar ese TXT desde el lote es un desarrollo del formato de país que sustituye la elaboración manual del archivo. El motor de nómina corresponde a la edición Enterprise. El formato exacto del TXT por banco y el alcance del desarrollo se confirman contra la documentación y contra el layout que exige cada entidad antes de asentarlos.

### Revisión posterior (QA / gerencia de proyecto)
1. Generar el lote de pago de un período y producir el archivo bancario: debe salir un archivo con los empleados y montos del lote.
2. Abrir el archivo generado y comparar su formato contra el layout que exige el banco: los campos deben corresponder al TXT esperado por la entidad.
3. Registrar el pago del lote en contabilidad: cada recibo debe quedar marcado como pagado y conciliable contra el movimiento de banco.

La tarea se da por **Lista** cuando las tres pruebas se cumplen y el archivo es aceptado por el banco en una prueba de carga.

### Trazabilidad
GS-035 (RRH-2.3.3, RRH-2.3.4) · Propuesta PROP-DEV-010

---

# GS-036 · Registro de asistencia, retardos y horas extras

**Tipo:** Configuración · **Módulo:** Asistencias · **Edición:** Community
**Áreas:** Talento Humano, Gerencia Hotelera · **Fase:** 4 · **Depende de:** GS-038 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
La asistencia se lleva hoy repartida entre Tango Uno, un listado manual y Excel; las horas extras circulan en formatos físicos impresos y distribuidos, con riesgo de descuentos incorrectos por coberturas que no se notifican, y los redobles dependen de una agenda física. Esta tarea unifica el fichaje de entrada y salida, el control de retardos y las horas extras en el sistema, que luego alimentan la nómina.

### Cómo se configura
El fichaje de entrada y salida se realiza en `Asistencias > Fichar` y el control de jornadas se consulta en `Asistencias > Asistencias`. La tolerancia de retardo y el tratamiento de las horas extras se parametrizan en `Asistencias > Configuración`, de modo que esos datos pasen al recibo de nómina (GS-034). La asignación de horarios y la ficha de cada empleado provienen de Empleados (GS-038).

### Revisión posterior (QA / gerencia de proyecto)
1. Fichar la entrada y la salida de un empleado: la jornada debe quedar registrada con sus horas.
2. Fichar una entrada después del margen de tolerancia configurado: el sistema debe marcarla como retardo.
3. Registrar una jornada que exceda el horario y revisar las horas extras: deben calcularse según la parametrización.
4. Consultar el resumen de un empleado en un período: las horas trabajadas, retardos y extras deben estar disponibles para la nómina.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-036 (RRH-2.2.1, RRH-2.2.2, RRH-2.2.3, GHO-2.4.4) · Propuesta PROP-DEV-011

---

# GS-037 · Reclutamiento, preselección y aprobación de ingreso de candidatos

**Tipo:** Configuración · **Módulo:** Reclutamiento · **Edición:** Community
**Áreas:** Talento Humano, Gerencia Hotelera · **Fase:** 4 · **Depende de:** — · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
La preselección se basa hoy en criterio profesional sin formato estructurado; los currículos llegan por correo, presencial y grupos dispersos, lo que dificulta comparar candidatos de forma objetiva. Esta tarea lleva la captación y la preselección a un único flujo de etapas donde cada postulante avanza con su documentación adjunta y queda en un mismo tablero comparable.

### Cómo se configura
Los puestos se publican en `Reclutamiento > Puestos de trabajo`, las candidaturas y sus etapas se gestionan en `Reclutamiento > Solicitudes`, y los documentos del postulante se adjuntan en la propia ficha de la candidatura. Las etapas del flujo (recepción, preselección, pruebas, presentación a gerencia) se ordenan sobre el tablero de reclutamiento para que cada candidato avance por ellas de forma trazable.

### Revisión posterior (QA / gerencia de proyecto)
1. Publicar un puesto de trabajo y registrar una candidatura contra él: la candidatura debe quedar asociada al puesto.
2. Adjuntar el currículo y la documentación a un candidato: los archivos deben quedar en su ficha.
3. Mover un candidato entre etapas del flujo: el tablero debe reflejar la etapa actual de cada postulante.
4. Filtrar los candidatos de un puesto: deben poder compararse en un mismo tablero.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-037 (RRH-3.1.1, RRH-3.1.2, RRH-3.1.3, RRH-3.1.4, RRH-3.1.5, GHO-2.4.5) · Propuesta PROP-DEV-012

---

# GS-038 · Ficha integral del empleado, expediente y organigrama

**Tipo:** Configuración y migración · **Módulo:** Empleados, Documentos · **Edición:** Community
**Áreas:** Talento Humano · **Fase:** 1 · **Depende de:** GS-000 · **Estado:** Pendiente · **Prioridad:** ★★★

### Qué atiende
La base de datos detallada del personal vive hoy en Excel porque Odoo no captura salud, carga familiar, estado civil ni datos bancarios, y el expediente coexiste disperso entre físico, OneDrive/SharePoint y Odoo. Esta tarea establece la ficha del empleado como registro único —datos personales y bancarios, salud, carga familiar, estado civil, foto, expediente y posición en el organigrama—, que es la base sobre la que corren nómina, asistencias y el resto de RR.HH.

### Cómo se configura
El alta y la edición se hacen en `Empleados > Empleados > Nuevo`, llenando los datos personales, los datos bancarios en la pestaña de RR.HH. y la información privada de salud, dependientes y estado civil en la pestaña de Información privada. El organigrama se arma asignando el responsable de cada empleado en esa misma ficha. El expediente documental se ordena en Documentos. Como cierre, se migra la base actual en Excel a las fichas, completando los campos que hoy no viven en Odoo y eliminando la base paralela.

### Revisión posterior (QA / gerencia de proyecto)
1. Crear un empleado con datos personales, bancarios, salud y carga familiar: todos los campos deben guardarse en la ficha.
2. Asignar el responsable de un empleado y consultar el organigrama: la jerarquía debe reflejarse.
3. Cargar un documento al expediente de un empleado: debe quedar asociado a su ficha.
4. Buscar varios empleados de la base migrada: deben aparecer con su información completa y sin depender del Excel anterior.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Migración de datos (16 → 19)
El maestro se genera extrayendo el dato desde Odoo 16, depurándolo y normalizándolo, y cargándolo a Odoo 19. Como control, el conteo de registros y los totales relevantes en Odoo 19 se concilian contra Odoo 16; las diferencias deben quedar justificadas por la depuración de duplicados u obsoletos.

### Trazabilidad
GS-038 (RRH-3.2.2, RRH-3.2.4, RRH-3.3.1, RRH-3.3.2, RRH-3.3.3, RRH-3.3.4, RRH-3.3.5) · Propuesta PROP-DEV-013

---

# GS-039 · Inducción, contrato, egreso y revocación de accesos

**Tipo:** Configuración y desarrollo · **Módulo:** Empleados · **Edición:** Community
**Áreas:** Talento Humano · **Fase:** 4 · **Depende de:** GS-038 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
La aprobación final de ingreso, los cambios de condiciones laborales y varias notificaciones se transmiten hoy verbalmente o por WhatsApp, sin respaldo escrito sistemático; el egreso integra notificación a departamentos, baja, revocación de accesos y verificación de devolución de uniformes y equipos. Esta tarea formaliza el ingreso y el egreso mediante planes de actividades que disparan las tareas con sus responsables y aprobaciones, dejando respaldo de cada paso.

### Cómo se configura
Los planes se configuran en `Empleados > Configuración > Planes de actividad` y se ejecutan desde la ficha del empleado al darlo de alta o de baja: inducción, solicitud de contrato a Legal, devolución de activos y baja quedan como tareas con responsable y aprobación. Lo que no es nativo es la revocación de accesos, que no es un paso del plan y se resuelve con configuración o desarrollo adicional; y la liquidación, que depende del módulo de Nómina (GS-034). Ambos detalles se confirman contra la documentación antes de asentarlos.

### Revisión posterior (QA / gerencia de proyecto)
1. Dar de alta un empleado con el plan de ingreso: deben generarse las actividades de inducción y contrato con su responsable.
2. Dar de baja un empleado con el plan de egreso: deben generarse las tareas de devolución de activos, baja y notificación.
3. Cerrar cada actividad de un plan: debe quedar registro de quién la completó y cuándo.
4. Verificar el paso de revocación de accesos: debe existir como tarea con responsable, según el mecanismo acordado (configuración o desarrollo).

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-039 (RRH-3.2.1, RRH-3.2.3, RRH-3.7.2, RRH-3.7.3, RRH-3.7.4) · Propuesta PROP-DEV-014

---

# GS-040 · Solicitudes de ausencia, permisos y vacaciones con aprobación

**Tipo:** Configuración · **Módulo:** Ausencias · **Edición:** Community
**Áreas:** Talento Humano, Gerencia Hotelera · **Fase:** 4 · **Depende de:** GS-038 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
Las solicitudes de permiso, reposo, vacaciones, préstamos y días libres se llevan hoy en recibos manuales y la planificación de vacaciones en Excel. Esta tarea lleva esas solicitudes al sistema con su flujo de aprobación y su acumulación registrada, y permite ver la planificación del equipo para las temporadas altas.

### Cómo se configura
El empleado solicita en `Ausencias > Mis tiempos libres`, la aprobación se gestiona en `Ausencias > Aprobaciones`, y los tipos de ausencia y la asignación de saldos se definen en `Ausencias > Configuración`. El calendario del equipo permite ver la planificación para temporadas altas. Los saldos y las solicitudes quedan vinculados a la ficha del empleado (GS-038).

### Revisión posterior (QA / gerencia de proyecto)
1. Solicitar una ausencia como empleado: debe quedar pendiente de aprobación.
2. Aprobar y rechazar solicitudes: el estado debe cambiar y el solicitante debe verlo reflejado.
3. Asignar un saldo de vacaciones y solicitar contra él: el saldo disponible debe descontarse.
4. Consultar el calendario del equipo: las ausencias aprobadas deben visualizarse para planificar.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-040 (RRH-3.4.1, RRH-3.4.2, RRH-3.4.4, RRH-3.4.5, RRH-3.5.1, GHO-2.4.1, GHO-2.4.3) · Propuesta PROP-DEV-015

---

# GS-041 · Evaluación de desempeño por cargo

**Tipo:** Configuración · **Módulo:** Evaluaciones · **Edición:** Community
**Áreas:** Talento Humano · **Fase:** 4 · **Depende de:** GS-038 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
Existen plantillas de evaluación con 20-25 indicadores por cargo y escala 1-5, aplicadas al cierre del período de prueba con participación del coordinador de área, hoy en plantillas sueltas. Esta tarea lleva la evaluación de desempeño al sistema, de modo que los indicadores por cargo, las metas y la escala queden en plantillas y los resultados consolidados en el expediente del empleado.

### Cómo se configura
Las plantillas se definen en `Evaluaciones > Configuración > Plantillas de evaluación`, recogiendo los indicadores por cargo, las metas y la escala. Cada evaluación se gestiona en `Evaluaciones > Evaluaciones` y queda vinculada a la ficha del empleado evaluado (GS-038), de modo que el resultado se consulte desde su expediente.

### Revisión posterior (QA / gerencia de proyecto)
1. Crear una plantilla con los indicadores y la escala de un cargo: debe guardarse y quedar disponible para aplicar.
2. Lanzar una evaluación a un empleado con esa plantilla: debe generarse con sus indicadores.
3. Registrar los resultados y cerrar la evaluación: el puntaje debe quedar consolidado.
4. Consultar la ficha del empleado evaluado: la evaluación debe aparecer en su expediente.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-041 (RRH-3.6.1) · Propuesta PROP-DEV-016

---

# GS-042 · Control de uniformes, dotación y activos asignados al personal

**Tipo:** Configuración y desarrollo · **Módulo:** Empleados, Mantenimiento · **Edición:** Community
**Áreas:** Talento Humano, Administración y Finanzas (Hotel-Juan) · **Fase:** 4 · **Depende de:** GS-038 · **Estado:** Pendiente · **Prioridad:** ★

### Qué atiende
Los uniformes se controlan hoy sin trazabilidad sistematizada, el resguardo de llaves se lleva en una tabla física de ganchos y los equipos asignados y dañados se anotan en cuaderno físico. Esta tarea registra los uniformes, equipos y llaves entregados al personal como activos asignados al empleado, para saber quién tiene qué y sustituir los cuadernos.

### Cómo se configura
La dotación se asigna desde la ficha del empleado (GS-038) en su pestaña de RR.HH., y el inventario de equipos se administra en `Mantenimiento > Equipos`, indicando el empleado responsable. Lo que no es nativo es el flujo formal de entrega y devolución con su acuse, y el control de llaves físicas como tal, que no tienen un proceso dedicado y se cubren con configuración o desarrollo adicional. Este detalle se confirma contra la documentación antes de asentarlo.

### Revisión posterior (QA / gerencia de proyecto)
1. Asignar un uniforme o equipo a un empleado: debe quedar registrado como activo bajo su responsabilidad.
2. Consultar por empleado los activos que tiene asignados: la lista debe reflejar lo entregado.
3. Registrar la devolución de un activo: debe quedar liberado del empleado, según el mecanismo acordado.
4. Consultar un equipo específico: debe mostrar quién es su responsable actual.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-042 (RRH-3.8.1, RRH-3.8.2, AFJ-7.6, AFJ-7.7, AFJ-7.8, AFJ-7.10) · Propuesta PROP-DEV-017

---

# GS-043 · Control de certificados sanitarios del personal de A&B

**Tipo:** Configuración · **Módulo:** Empleados · **Edición:** Community
**Áreas:** Talento Humano · **Fase:** 4 · **Depende de:** GS-038 · **Estado:** Pendiente · **Prioridad:** ★

### Qué atiende
Hoy se controla mensualmente y a mano la vigencia de los certificados de manipulación de alimentos y de salud del personal de A&B, para preparar al área ante visitas de Sanidad. Esta tarea lleva ese control a actividades programadas sobre la ficha del empleado que avisen antes del vencimiento, sustituyendo la revisión manual.

### Cómo se configura
Cada certificado se carga en la ficha del empleado en `Empleados > Empleados` (GS-038) y se le programa una actividad de seguimiento con la fecha de vencimiento, de modo que el sistema notifique al responsable cuando se acerque el plazo. El mecanismo de alerta de vencimiento es nativo; para los certificados sanitarios se apoya en esa fecha de vencimiento más las actividades programadas.

### Revisión posterior (QA / gerencia de proyecto)
1. Cargar un certificado a un empleado con su fecha de vencimiento: debe quedar registrado en su ficha.
2. Programar la actividad de seguimiento y adelantar la fecha del sistema al aviso previo: el responsable debe recibir la notificación antes del vencimiento.
3. Renovar el certificado y actualizar la fecha: el aviso debe reprogramarse a la nueva vigencia.

La tarea se da por **Lista** cuando las tres pruebas se cumplen.

### Trazabilidad
GS-043 (RRH-1.3.1, RRH-1.3.2) · Propuesta PROP-DEV-018

---

# GS-044 · Gestión de pasantes

**Tipo:** Configuración y desarrollo · **Módulo:** Empleados, Reclutamiento · **Edición:** Community
**Áreas:** Talento Humano · **Fase:** 4 · **Depende de:** GS-037, GS-038, GS-041 · **Estado:** Pendiente · **Prioridad:** ★

### Qué atiende
El ciclo del pasante incluye entrevistas con universidades y solicitud de documentación, elaboración de horarios semanales, evaluación final, carta de culminación y reporte a la coordinación universitaria. Esta tarea lleva ese ciclo a un flujo registrado sobre el sistema, en lugar de gestionarlo por fuera.

### Cómo se configura
La captación y las entrevistas con universidades se manejan como una candidatura en `Reclutamiento > Solicitudes` (GS-037); el pasante admitido se registra con su expediente y sus horarios en `Empleados > Empleados` (GS-038); y la evaluación final con su reporte se documenta en `Evaluaciones > Evaluaciones` (GS-041). Lo que no es nativo es el convenio de pasantía específico con la universidad, que se cubre con configuración o desarrollo adicional. Este detalle se confirma contra la documentación antes de asentarlo.

### Revisión posterior (QA / gerencia de proyecto)
1. Registrar un candidato a pasante desde reclutamiento: debe quedar en el flujo con su documentación.
2. Convertir el pasante admitido en ficha de empleado con su horario: debe registrarse su expediente.
3. Aplicar la evaluación final al pasante: el resultado debe quedar en su ficha.
4. Verificar el registro del convenio de pasantía: debe existir según el mecanismo acordado.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-044 (RRH-4.1.1, RRH-4.1.3, RRH-4.1.4/4.1.5, RRH-4.1.7, RRH-4.1.8, RRH-4.1.9/4.1.10) · Propuesta PROP-DEV-019

---

# GS-045 · Seguridad y salud laboral (SST)

**Tipo:** Desarrollo · **Módulo:** SST · **Edición:** —
**Áreas:** Talento Humano · **Fase:** 4 · **Depende de:** — · **Estado:** Desarrollo · **Prioridad:** ★

### Qué atiende
La gestión de políticas de seguridad y salud en el trabajo y el comité de seguridad ante el INPSASEL están en fase de implementación, gestionados de forma reactiva y sin plataforma especializada. Esta tarea busca soportar la evidencia y los registros asociados, reconociendo que el cumplimiento normativo en sí queda fuera de lo que el sistema cubre de forma estándar.

### Cómo se configura
El cumplimiento SST y del comité ante el INPSASEL es una capacidad regulatoria venezolana (LOPCYMAT) que Odoo no resuelve de forma nativa y requiere desarrollo a medida. Lo que sí se apoya en el sistema es la evidencia: los documentos y soportes se ordenan en Documentos, y los formularios o autoevaluaciones del comité se levantan con Encuestas en `Encuestas > Nuevo`. El cumplimiento normativo como tal no forma parte del alcance estándar y se trata como desarrollo.

### Revisión posterior (QA / gerencia de proyecto)
1. Ordenar los soportes SST en un espacio de Documentos: deben quedar accesibles y clasificados.
2. Levantar un formulario o autoevaluación del comité con Encuestas: debe poder aplicarse y recoger respuestas.
3. Consultar la evidencia de una actuación del comité: debe estar disponible para una eventual fiscalización.

Al ser una capacidad regulatoria sin vía nativa, la tarea se da por **Lista** cuando la evidencia y los registros de soporte quedan operativos en Documentos y Encuestas; el cumplimiento normativo de fondo se atiende por el desarrollo a medida acordado.

### Trazabilidad
GS-045 (RRH-5.2) · Propuesta PROP-DEV-020

---

# GS-046 · Comunicación interna corporativa y agasajos

**Tipo:** Configuración · **Módulo:** Conversaciones, Empleados · **Edición:** Community
**Áreas:** Talento Humano · **Fase:** 4 · **Depende de:** GS-038 · **Estado:** Pendiente · **Prioridad:** ★

### Qué atiende
La coordinación interna y el reporte de novedades parten hoy de WhatsApp y se formalizan por correo solo después, con riesgo de que las novedades no lleguen en tiempo real. Esta tarea lleva la comunicación interna, el reporte de incidencias y las comunicaciones de cumpleaños y agasajos a canales y mensajes del sistema, de modo que las novedades dejen rastro y se reduzca la dependencia de WhatsApp como primer canal.

### Cómo se configura
Los canales y mensajes directos se gestionan en `Conversaciones`, donde se crean los canales por tema o departamento para la coordinación y el reporte de novedades. Las tareas o recordatorios de seguimiento, y los avisos de cumpleaños y aniversarios, se programan como actividades sobre la ficha del empleado en `Empleados > Empleados` (GS-038), apoyándose en la fecha de nacimiento y de ingreso ya registradas.

### Revisión posterior (QA / gerencia de proyecto)
1. Crear un canal y publicar una novedad: los miembros deben recibirla y quedar registrada.
2. Enviar un mensaje directo entre dos usuarios: debe entregarse y conservarse el historial.
3. Programar un recordatorio de cumpleaños o aniversario sobre un empleado: debe avisar en la fecha esperada.

La tarea se da por **Lista** cuando las tres pruebas se cumplen.

### Trazabilidad
GS-046 (RRH-3.4.3, RRH-3.4.6, RRH-3.5.2, RRH-3.5.4, RRH-5.1, RRH-5.3, RRH-5.4) · Propuesta PROP-DEV-021


---

# GS-047 · PMS hotelero: reservas, check-in/out y estado de habitación

**Tipo:** Desarrollo · **Módulo:** Hotel/PMS · **Edición:** —
**Áreas:** Gerencia Hotelera · **Fase:** 5 · **Depende de:** — · **Estado:** Desarrollo · **Prioridad:** ★

### Qué atiende
La operación hotelera se lleva hoy en Cloudbeds y el estado de la habitación no es confiable: Ama de Llaves no lo actualiza en tiempo real, por lo que recepción tiene que verificarlo físicamente y se ha llegado a vender una habitación con el colchón retirado por mantenimiento. Esta tarea lleva al sistema la gestión de reservas, check-in y check-out, los datos del huésped y la disponibilidad y estado de limpieza y mantenimiento de cada habitación, de modo que el estado sea confiable sin verificación física y el registro del huésped —captura de identidad, adjuntos y firma de normativas— quede completo.

### Cómo se configura
Odoo 19 no incluye un PMS hotelero oficial, por lo que esta capacidad no es una configuración de un módulo estándar. Se cubre por una de tres vías: un módulo de la comunidad (OCA, la aplicación `pms`), un módulo de un tercero del marketplace, o un desarrollo a medida que sustituya a Cloudbeds. Sobre la vía elegida se modela el calendario de habitaciones, el ciclo de reserva, el flujo de check-in/check-out con captura de datos del huésped y adjuntos, y el estado de limpieza y mantenimiento por habitación conectado con Ama de Llaves. La vía concreta y su alcance real se confirman contra la documentación del módulo elegido antes de comprometerla; ninguna de las tres es nativa de Odoo.

### Revisión posterior (QA / gerencia de proyecto)
1. Crear una reserva y ejecutar el check-in: el sistema debe capturar identidad, adjuntos y firma de normativas del huésped y quedar registrada la ocupación de la habitación.
2. Marcar una habitación como sucia o en mantenimiento desde Ama de Llaves: recepción debe ver ese estado sin verificar físicamente.
3. Intentar reservar o vender una habitación marcada en mantenimiento: el sistema debe impedirlo o advertirlo.
4. Ejecutar el check-out de una reserva: la habitación debe pasar a estado de limpieza pendiente de forma automática.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen sobre el módulo/desarrollo adoptado y la vía queda confirmada contra su documentación.

### Trazabilidad
GS-047 (GHO-1.1.1, GHO-1.1.2, GHO-2.1.4, GHO-2.1.6, GHO-2.1.7, GHO-2.1.8, GHO-2.3.1, GHO-4.2, GHO-4.3) · Propuesta PROP-DEV-022

---

# GS-048 · Punto de venta de tienda con descuento de inventario y cliente genérico

**Tipo:** Desarrollo · **Módulo:** Punto de venta, Inventario · **Edición:** —
**Áreas:** Gerencia Hotelera · **Fase:** 5 · **Depende de:** — · **Estado:** Desarrollo · **Prioridad:** ★

### Qué atiende
Las ventas de tienda a visitantes externos se anotan hoy en papel y se ajustan a mano en Cloudbeds porque no existe un perfil de cliente visitante, lo que descuadra el inventario; además, mercancía comprada por el dueño entra a las tiendas sin factura ni paso por almacén y la Tienda Playera cobra a cuenta externa del propietario con recibo en papel. Esta tarea registra la venta de tienda a huéspedes y visitantes en un terminal que descuenta el stock de forma automática y usa un cliente genérico para el visitante, eliminando la venta en papel y el descuadre.

### Cómo se configura
El terminal y su almacén de descuento se parametrizan en el Punto de venta enlazado a Inventario, y el cliente genérico para el visitante se da de alta como contacto reutilizable, de modo que cada venta descuente el stock del almacén de la tienda sin ajuste manual. Lo que no es nativo es la emisión del documento fiscal venezolano —máquina o impresora fiscal homologada, IGTF en el ticket, correlativos y formatos fiscales—: esa parte se completa con un desarrollo de localización fiscal sobre el núcleo del POS, cuyo detalle se confirma contra la documentación oficial antes de afirmarlo.

Rutas de referencia: `Punto de venta > Configuración > Punto de venta` para el terminal y su almacén de descuento; `Punto de venta > Pedidos > Clientes` para el cliente genérico del visitante.

### Revisión posterior (QA / gerencia de proyecto)
1. Registrar una venta a un visitante con el cliente genérico: el pedido debe quedar guardado sin necesidad de crear un contacto nuevo cada vez.
2. Cerrar esa venta y consultar el inventario del producto: el stock del almacén de la tienda debe haber bajado automáticamente.
3. Verificar sobre el terminal la emisión del ticket fiscal (IGTF, correlativo y formato del organismo): comportamiento a cargo del desarrollo de localización, no del núcleo POS.
4. Cerrar la sesión de caja del terminal: el arqueo debe cuadrar con las ventas registradas, sin ajuste en papel.

La tarea se da por **Lista** cuando las pruebas 1, 2 y 4 se cumplen sobre el núcleo POS y la prueba 3 queda cubierta por el desarrollo fiscal confirmado.

### Trazabilidad
GS-048 (GHO-1.4.2, GHO-1.4.3) · Propuesta PROP-DEV-023

---

# GS-049 · Programación de llaves electrónicas de habitación

**Tipo:** Desarrollo / Integración · **Módulo:** Externo (cerraduras) · **Edición:** —
**Áreas:** Gerencia Hotelera · **Fase:** 5 · **Depende de:** GS-047 · **Estado:** Desarrollo · **Prioridad:** ★

### Qué atiende
Las llaves de habitación —de huésped y maestras— se programan hoy por separado en TT Hotel o en Time Locks/Lockia según el tipo de cerradura, con la operación en transición hacia cerraduras inteligentes. Esta tarea busca que la programación de la llave salga del propio flujo de reserva, sin tener que operar por separado cada sistema de cerradura.

### Cómo se configura
Esta capacidad depende de hardware externo que Odoo no controla de forma estándar; no hay una vía nativa. Se resuelve con un desarrollo de integración a medida contra cada sistema de cerradura (TT Hotel, Time Locks, Lockia), disparado desde el check-in de la reserva, por lo que queda condicionado al PMS que finalmente gestione las reservas (GS-047). La vía y su viabilidad se confirman con el proveedor de la cerradura antes de comprometerla.

### Revisión posterior (QA / gerencia de proyecto)
1. Ejecutar el check-in de una reserva y solicitar la llave de huésped: la integración debe programar la cerradura de la habitación sin operar el sistema de cerradura por separado. Comportamiento esperado del desarrollo, no configuración de Odoo.
2. Solicitar una llave maestra para personal autorizado: debe programarse con el alcance de acceso correspondiente.
3. Confirmar con el proveedor de cada cerradura (TT Hotel, Time Locks, Lockia) la existencia de interfaz de integración: nota de viabilidad por sistema antes de comprometer el desarrollo.

La tarea se da por **Lista** cuando la integración programa correctamente llave de huésped y maestra desde el flujo de reserva y la viabilidad queda confirmada con cada proveedor de cerradura.

### Trazabilidad
GS-049 (GHO-1.1.8, GHO-1.1.9) · Propuesta PROP-DEV-024

---

# GS-050 · Canales de atención al cliente y mensajería de prospectos

**Tipo:** Configuración / Desarrollo · **Módulo:** CRM, Chat en vivo · **Edición:** Community
**Áreas:** Gerencia Hotelera · **Fase:** 5 · **Depende de:** GS-047 · **Estado:** Pendiente · **Prioridad:** ★

### Qué atiende
La atención de prospectos se apoya hoy en Visito, que unifica WhatsApp e Instagram con respuesta por IA y modo manual de respaldo, y convierte la reserva en Cloudbeds; además, la IA responde solicitudes de huéspedes ya hospedados sin que recepción las vea a tiempo y no hay teléfono en habitación. Esta tarea centraliza la mensajería, el correo y el teléfono, y convierte cada conversación de un prospecto en una oportunidad dentro de un mismo pipeline con seguimiento por etapas.

### Cómo se configura
Las conversaciones se centralizan en CRM, donde cada prospecto se registra como oportunidad y se le da seguimiento por etapas en un único pipeline. El chat del sitio web se habilita en Conversaciones en vivo y puede generar la oportunidad de forma automática mediante el comando `/lead` cuando el prospecto muestra interés. La parte nativa llega hasta la gestión del prospecto y su seguimiento; la conversión del prospecto en reserva no es nativa, ya que depende de un PMS hotelero del que Odoo 19 no dispone de forma oficial (GS-047), por lo que ese último paso requiere desarrollo o integración.

Rutas de referencia: `CRM > Ventas > Mi pipeline` para el seguimiento por etapas; Conversaciones en vivo para habilitar el chat del sitio y el comando `/lead`.

### Revisión posterior (QA / gerencia de proyecto)
1. Registrar una conversación de un prospecto como oportunidad en el pipeline: debe quedar visible con su etapa y responsable.
2. Iniciar un chat desde el sitio web y usar `/lead`: debe generarse la oportunidad de forma automática en el pipeline.
3. Mover una oportunidad entre etapas: el pipeline debe reflejar el avance sin salir del sistema.
4. Convertir una oportunidad en reserva: paso a cargo del desarrollo/integración con el PMS, no nativo del CRM.

La tarea se da por **Lista** cuando las pruebas 1, 2 y 3 se cumplen de forma nativa y la prueba 4 queda cubierta por la integración con el PMS adoptado.

### Trazabilidad
GS-050 (GHO-2.1.1, GHO-2.1.2, GHO-2.1.3, GHO-2.1.5) · Propuesta PROP-DEV-025

---

# GS-051 · Medición de satisfacción y resolución de conflictos del huésped

**Tipo:** Configuración · **Módulo:** Encuestas · **Edición:** Community
**Áreas:** Gerencia Hotelera · **Fase:** 5 · **Depende de:** — · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
La satisfacción del cliente se gestiona hoy de forma reactiva, atendiendo quejas a medida que llegan y sin un instrumento documentado de medición. Esta tarea establece un cuestionario de satisfacción con envío, puntuación y análisis de resultados, de modo que la percepción del huésped quede como un dato estructurado y consultable para decidir, en lugar de depender de la reacción ante cada queja.

### Cómo se configura
Se crea la encuesta de satisfacción definiendo sus preguntas, la escala de puntuación y el responsable, y se habilita su envío al huésped. Los resultados se siguen desde el propio módulo, que consolida las respuestas y su análisis, dando una lectura estructurada de la satisfacción sin trabajo manual de tabulación.

Rutas de referencia: `Encuestas > Nuevo` para crear el cuestionario con sus preguntas y escala; el propio módulo de Encuestas para el envío y el análisis de resultados.

### Revisión posterior (QA / gerencia de proyecto)
1. Crear una encuesta con preguntas y escala de puntuación: debe quedar guardada y lista para enviar.
2. Enviar la encuesta a un huésped de prueba y responderla: la respuesta debe quedar registrada con su puntuación.
3. Consultar el análisis de resultados: el módulo debe mostrar las respuestas consolidadas y la puntuación agregada.

La tarea se da por **Lista** cuando las tres pruebas se cumplen.

### Trazabilidad
GS-051 (GHO-2.3.2) · Propuesta PROP-DEV-026

---

# GS-052 · Capacitación del personal y formación sobre sistemas

**Tipo:** Configuración · **Módulo:** eLearning · **Edición:** Community
**Áreas:** Gerencia Hotelera · **Fase:** 5 · **Depende de:** — · **Estado:** Pendiente · **Prioridad:** ★

### Qué atiende
La orientación del personal nuevo sobre los sistemas y las normativas depende hoy de la memoria y la disponibilidad del rol gerencial, sin un instructivo actualizado y disponible. Esta tarea organiza la capacitación en cursos con contenidos, evaluaciones y certificación, de modo que el instructivo quede vigente, centralizado y disponible en el sistema y deje de depender de una sola persona.

### Cómo se configura
Se arman los cursos con sus secciones y contenidos —material sobre sistemas y normativas del hotel— y se agregan los cuestionarios de evaluación que permiten certificar al participante. El personal accede a los cursos desde el sistema, avanza a su ritmo y su progreso queda registrado, con lo que la formación deja de ser presencial y dependiente de la agenda de un rol.

Rutas de referencia: `eLearning > Cursos > Cursos > Nuevo` para crear el curso, sus secciones, contenidos y los cuestionarios de evaluación.

### Revisión posterior (QA / gerencia de proyecto)
1. Crear un curso con al menos una sección, un contenido y un cuestionario: debe quedar publicado y disponible.
2. Inscribir a un empleado de prueba y completar el contenido: el avance debe quedar registrado.
3. Responder el cuestionario de evaluación: el sistema debe calificar y reflejar la certificación del participante.

La tarea se da por **Lista** cuando las tres pruebas se cumplen.

### Trazabilidad
GS-052 (GHO-2.4.2) · Propuesta PROP-DEV-027

---

# GS-053 · Órdenes y solicitudes de mantenimiento correctivo

**Tipo:** Configuración · **Módulo:** Mantenimiento · **Edición:** Community
**Áreas:** Operaciones, Gerencia Hotelera · **Fase:** 2 · **Depende de:** — · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
Las solicitudes de reparación de gerencia y de los demás departamentos llegan hoy por WhatsApp, radio o de forma verbal y no se cargan a ninguna plataforma, por lo que no hay trazabilidad del tiempo de respuesta ni del cierre de la falla; las reparaciones con técnico externo se gestionan ad hoc y el técnico a veces actúa por su cuenta sin notificar. Esta tarea registra cada solicitud de reparación como una orden con responsable y etapas, dejando trazabilidad desde la detección del daño hasta su cierre, incluidas las atendidas por técnico externo.

### Cómo se configura
La solicitud de mantenimiento correctivo se levanta en el sistema indicando el equipo o área afectada, el responsable y la etapa, de modo que reemplace el WhatsApp, la radio y el aviso verbal por un registro único y trazable. La orden avanza por etapas hasta el cierre, y las reparaciones con técnico externo se registran de la misma forma para que quede constancia desde la detección hasta el pago, sin gestiones autónomas sin registro.

Rutas de referencia: `Mantenimiento > Mantenimiento > Solicitudes de mantenimiento > Nuevo` para levantar la solicitud con equipo, responsable y etapa.

### Revisión posterior (QA / gerencia de proyecto)
1. Levantar una solicitud de reparación indicando equipo o área, responsable y etapa: debe quedar registrada, sin depender de WhatsApp o aviso verbal.
2. Avanzar la solicitud por sus etapas hasta cerrarla: el sistema debe reflejar el cambio de estado y la fecha de cierre.
3. Registrar una reparación atendida por técnico externo: debe quedar con la misma trazabilidad que una interna.
4. Consultar el tiempo transcurrido entre la apertura y el cierre de una solicitud: debe poder leerse del propio registro.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-053 (OPE-3.1, OPE-3.2, OPE-3.4, OPE-4.3, OPE-4.5, OPE-4.6, GHO-3.3) · Propuesta PROP-DEV-028

---

# GS-054 · Mantenimiento preventivo por activo y verificación de equipos críticos

**Tipo:** Configuración / Desarrollo · **Módulo:** Mantenimiento · **Edición:** Community
**Áreas:** Operaciones · **Fase:** 2 · **Depende de:** GS-053 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
La planificación eléctrica y la atención de fallas son hoy mayormente reactivas: el trabajo preventivo depende del criterio del operador y no de un calendario ligado al tiempo de uso de los activos. Esta tarea registra los equipos críticos como activos y define sobre ellos planes de mantenimiento preventivo por tiempo, de modo que las rutinas se disparen según calendario y no según la disponibilidad o el juicio del operador.

### Cómo se configura
Los equipos críticos se dan de alta como activos y sobre cada uno se define un plan de mantenimiento preventivo por tiempo, usando la frecuencia o el MTBF para que el sistema genere las órdenes preventivas de forma anticipada. El preventivo por tiempo es nativo; lo que no está cubierto de forma nativa es el preventivo por uso o por lectura de medidor (por horas de operación o consumo), que requiere configuración o desarrollo adicional y se evalúa aparte según el equipo.

Rutas de referencia: `Mantenimiento > Equipos > Máquinas y herramientas > Nuevo` para dar de alta el equipo; el plan preventivo por tiempo se configura sobre cada equipo con su frecuencia/MTBF.

### Revisión posterior (QA / gerencia de proyecto)
1. Dar de alta un equipo crítico como activo con sus datos: debe quedar registrado y disponible para asociarle un plan.
2. Definir un plan preventivo por tiempo (frecuencia/MTBF): el sistema debe generar la orden preventiva según el calendario, sin intervención del operador.
3. Verificar que la orden preventiva aparece con anticipación al vencimiento: debe quedar programada, no reactiva.
4. Confirmar el tratamiento del preventivo por uso/medidor: dejar constancia de que no es nativo y requiere configuración o desarrollo adicional.

La tarea se da por **Lista** cuando las pruebas 1, 2 y 3 se cumplen de forma nativa y la prueba 4 queda documentada.

### Trazabilidad
GS-054 (OPE-4.2, OPE-6.1, OPE-6.2, OPE-6.3, OPE-6.4) · Propuesta PROP-DEV-029

---

# GS-055 · Recepción y control de niveles de servicios básicos (agua, gasoil, gas)

**Tipo:** Configuración · **Módulo:** Compras, Inventario · **Edición:** Community
**Áreas:** Operaciones, AABB Cocina · **Fase:** 2 · **Depende de:** GS-002 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
La gestión de niveles de gasoil y gas se lleva hoy por lectura manual del tanque y solicitud bajo demanda, lo que expone al hotel a quedarse sin autonomía energética o sin gas para las cocinas si el proveedor se retrasa. Esta tarea gestiona el agua, el gasoil y el gas como productos almacenables con control de niveles, de modo que la reposición se dispare de forma anticipada y no dependa de recordar leer el tanque.

### Cómo se configura
El agua, el gasoil y el gas se dan de alta como productos almacenables. Cada recepción del proveedor entra al sistema y suma al nivel, y una regla de stock mínimo dispara la reposición antes de quedarse sin autonomía o sin gas. Como el descuento no proviene de una lectura automática del tanque, el nivel se mantiene fiel al consumo real registrando el gasto periódico con un ajuste de inventario físico; ese ajuste manual periódico es la parte que sostiene la exactitud del nivel.

Rutas de referencia: `Compras > Solicitudes de cotización > Nuevo` para la compra al proveedor; `Inventario > Operaciones > Transferencias` para validar la recepción del suministro; `Inventario > Operaciones > Reabastecimiento > Nuevo` para la regla de stock mínimo; `Inventario > Operaciones > Inventario físico` para el ajuste periódico del nivel del tanque.

### Revisión posterior (QA / gerencia de proyecto)
1. Registrar la compra de gasoil o gas y validar su recepción: el nivel del producto debe aumentar en el sistema.
2. Configurar una regla de stock mínimo y bajar el nivel por debajo del umbral: debe dispararse una propuesta de reposición.
3. Registrar el consumo periódico con un ajuste de inventario físico: el nivel debe reflejar el gasto real del tanque.
4. Consultar el nivel actual de cada servicio (agua, gasoil, gas): debe leerse del sistema sin ir a mirar el tanque.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-055 (OPE-5.1, OPE-5.3, OPE-5.4, OPE-5.5, OPE-5.6) · Propuesta PROP-NAT-026

---

# GS-056 · Rutinas operativas físicas sin captura digital

**Tipo:** — · **Módulo:** Fuera de alcance · **Edición:** —
**Áreas:** Compras y Almacén, AABB Caja, AABB Bar, AABB Cocina, Operaciones · **Fase:** — · **Depende de:** — · **Estado:** Fuera de alcance · **Prioridad:** ★

### Qué atiende
Las tareas operativas puramente físicas —limpieza, montaje, ambientación, jardinería, piscina, alimentar fauna, manejo de residuos, medición de cloro/pH, entrega de guardia— y el soporte ofimático general no implican una transacción contable ni un dato maestro. Aunque tengan disparador, frecuencia y pasos definidos, no son objeto de Odoo y se documentan aquí para dejar constancia de su descarte explícito.

### Cómo se configura
No aplica configuración: estas rutinas quedan fuera del alcance del sistema. Se gestionan con los instructivos y controles operativos propios de cada área. Si en algún caso una de estas rutinas necesitara seguimiento en el sistema, se evaluaría por separado como una tarea distinta; en el estado actual del alcance no corresponde parametrizar nada en Odoo.

### Trazabilidad
GS-056 (COM-Alm-1.12, CAJ-1.0, CAJ-1.1, CAJ-1.2, CAJ-1.17, CAJ-4.9, CAJ-4.10, BAR-1.1, BAR-1.2, BAR-1.3, BAR-1.4, BAR-1.11, BAR-2.1, BAR-2.3, BAR-2.9, BAR-3.1, BAR-3.2, BAR-3.3, BAR-3.10, COC-1.1, COC-1.4, COC-1.5, COC-2.1, COC-5.3, COC-6.1, COC-6.2, COC-6.3, COC-7.5, OPE-1.1, OPE-1.2, OPE-1.3, OPE-1.4, OPE-2.1, OPE-2.2, OPE-2.3, OPE-4.1, OPE-4.7) · Propuesta PROP-DEV-034

---

# GS-057 · Reportes regulatorios de ocupación e ingresos (Venetur / INATUR)

**Tipo:** Desarrollo · **Módulo:** Contabilidad, Hotel/PMS · **Edición:** —
**Áreas:** Administración/Finanzas (Hotel-Libny), Administración/CCS · **Fase:** 5 · **Depende de:** GS-047 · **Estado:** Desarrollo · **Prioridad:** ★

### Qué atiende
El reporte diario a Venetur se consolida hoy a mano, en el formato Excel del organismo, cruzando los ingresos por categoría de Odoo con los indicadores de ocupación de Cloudbeds, con plazos nocturnos estrictos en temporada alta; el equipo identifica el cruce de pagos, EDR e informe de obras como riesgo de actas de reparo. Esta tarea busca generar el reporte regulatorio sin esa reconstrucción nocturna y manual.

### Cómo se configura
Los ingresos por categoría salen de la contabilidad y del Punto de venta, consultables de forma nativa, pero los indicadores de ocupación dependen del PMS, del que Odoo no dispone de forma nativa (GS-047). Por eso el reporte no es una configuración de un informe estándar: se arma con un desarrollo que consolide ambas fuentes —ingresos del sistema contable y ocupación del PMS adoptado— en el formato exigido por el organismo. La vía y el formato de salida se confirman contra el requerimiento del organismo antes de comprometerlos.

Rutas de referencia: `Contabilidad > Informes` y `Punto de venta > Informes` para el origen de los ingresos; la ocupación proviene del PMS (GS-047) y el ensamblado en el formato Venetur/INATUR es a cargo del desarrollo.

### Revisión posterior (QA / gerencia de proyecto)
1. Consultar los ingresos por categoría del día en Contabilidad y en Punto de venta: deben coincidir con lo facturado, de forma nativa.
2. Obtener los indicadores de ocupación del día: deben provenir del PMS adoptado, no de una hoja aparte.
3. Generar el reporte consolidado en el formato del organismo: comportamiento a cargo del desarrollo, que debe unir ingresos y ocupación sin reconstrucción manual.
4. Contrastar el reporte generado contra el formato exigido por Venetur/INATUR: debe cumplir la estructura requerida.

La tarea se da por **Lista** cuando las pruebas 1 y 2 se cumplen sobre sus fuentes y las pruebas 3 y 4 quedan cubiertas por el desarrollo confirmado contra el formato del organismo.

### Trazabilidad
GS-057 (AFL-9.1, AFL-9.2, AFL-9.3, AFL-9.4, AFL-9.5, AFL-9.6, CCS-4.4.2) · Propuesta PROP-DEV-030


---

# GS-058 · Apertura de cuentas bancarias y administración de usuarios bancarios

**Tipo:** Desarrollo · **Módulo:** Externo (banca) · **Edición:** —
**Áreas:** Administración y Finanzas (CCS), Contraloría · **Fase:** 5 · **Depende de:** — · **Estado:** Desarrollo · **Prioridad:** ★

### Qué atiende
La apertura de cuentas jurídicas y de nómina y la administración de los usuarios de las plataformas bancarias ocurren enteramente en los portales de cada banco, fuera de Odoo. Hoy la gestión del usuario master está repartida entre Contraloría y Administración sin un responsable único ni niveles de aprobación definidos, lo que diluye el control sobre quién puede operar la banca. Esta tarea no habilita una capacidad del sistema, sino que fija una definición de control sobre esa gestión externa.

### Cómo se configura
No es configuración de Odoo: la administración de cuentas y usuarios bancarios permanece en los portales de cada banco, porque esa capacidad no vive en el sistema. Lo que sí se define es el control: un responsable único de la gestión del usuario master y niveles de aprobación separados de la operación que controlan, de modo que quien aprueba no sea quien opera. El soporte documental de esos perfiles, autorizaciones y aperturas de cuenta puede archivarse y versionarse en Odoo para dejar constancia, sin que ello traslade la administración bancaria al sistema.

Ruta de referencia para el soporte documental: `Documentos > Subir` para archivar perfiles de usuario, autorizaciones y respaldos de apertura de cuenta. La administración de los usuarios bancarios se mantiene en los portales de cada banco.

### Revisión posterior (QA / gerencia de proyecto)
1. Consultar quién es el responsable único de la gestión del usuario master: debe existir una sola persona designada, no una responsabilidad compartida entre áreas.
2. Revisar un cambio de usuario o perfil bancario: debe haber pasado por el nivel de aprobación definido, separado de quien lo ejecuta.
3. Buscar en Documentos el respaldo de una apertura de cuenta o de una autorización de perfil: debe estar archivado y localizable.

Esta tarea corresponde a una plataforma externa: la administración bancaria en sí no es configuración de Odoo. Se da por **Lista** cuando el control (responsable único, niveles de aprobación y respaldo documental) queda establecido y las tres pruebas se cumplen.

### Trazabilidad
GS-058 (CCS-4.1.5, CCS-4.1.6, CTR-6.1, CTR-6.2) · Propuesta PROP-DEV-031

---

# GS-059 · Conciliación de cobros por financiamiento y pasarelas externas

**Tipo:** Configuración · **Módulo:** Contabilidad · **Edición:** Community
**Áreas:** Administración y Finanzas (CCS) · **Fase:** 3 · **Depende de:** — · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
El seguimiento de las ventas y cuotas gestionadas por Cashea y de los lotes de Credicard se lleva hoy por fuera del sistema, igual que el cobro por morosidad, sin un cruce formal contra la posición financiera. Esta tarea traslada esa conciliación al núcleo contable de Odoo, usando la facturación y los cobros nativos para verificar el cierre de lote de cada punto de venta y el estado de lo pendiente por cobrar dentro del sistema.

### Cómo se configura
Las ventas se registran como facturas de cliente y los cobros como pagos, de modo que las cuotas de Cashea y los lotes de Credicard queden reflejados en la posición financiera. El cruce contra los lotes que reporta el banco se resuelve con la conciliación bancaria del tablero de contabilidad, que empareja cada cobro recibido con su factura y deja marcado lo que ya entró. El seguimiento de cuotas y del cobro por morosidad —hoy manual— pasa a leerse del análisis de cuentas por cobrar. Lo que no automatiza esta configuración es la entrada de datos de la pasarela: mientras Cashea y Credicard operen como sistemas externos, sus movimientos se cargan por extracto o a mano; acercar esa carga de forma automática requeriría un desarrollo de integración con cada pasarela.

Rutas de referencia: `Contabilidad > Clientes > Facturas` para registrar las ventas; `Contabilidad > Clientes > Pagos` para los cobros; `Contabilidad > Tablero` para la conciliación bancaria contra los lotes; `Contabilidad > Informes` para el análisis de cuentas por cobrar.

### Revisión posterior (QA / gerencia de proyecto)
1. Registrar una venta financiada como factura de cliente y su cobro parcial como pago: la cuota debe reflejarse contra la posición financiera.
2. Conciliar un lote de Credicard contra los cobros del extracto bancario: cada cobro debe emparejarse con su factura y quedar marcado.
3. Consultar el análisis de cuentas por cobrar: debe mostrar lo pendiente de las cuotas de Cashea y el saldo por morosidad sin cálculo aparte.
4. Verificar un cierre de lote de un punto de venta: el total conciliado debe coincidir con lo reportado por el banco.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-059 (CCS-4.4.10, CCS-4.1.4) · Propuesta PROP-NAT-027

---

# GS-060 · Facturación entre compañías del grupo (intercompany)

**Tipo:** Configuración · **Módulo:** Contabilidad, Interempresa · **Edición:** Community
**Áreas:** Administración y Finanzas (CCS) · **Fase:** 3 · **Depende de:** GS-001 · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
La facturación recurrente de Eracon Alimentos a SERAC —y la eventual de Eracon Salud— se lleva hoy con actualización manual del inventario y registros intercompany hechos a mano en cada compañía. Esta tarea activa la facturación entre compañías nativa de Odoo, de modo que una sola factura genere de forma automática su documento espejo en la otra compañía, eliminando la doble captura y sus discrepancias.

### Cómo se configura
Se habilitan las transacciones interempresa entre las compañías del grupo y se afina por compañía el comportamiento: al validar una factura de cliente en la compañía emisora, el sistema crea automáticamente la factura de proveedor correspondiente en la compañía destino, sin volver a capturarla. Esto sustituye la actualización manual del inventario y los asientos intercompany que hoy se replican a mano. La facturación se emite normalmente desde el módulo de contabilidad; el resto lo genera el sistema al confirmar. Requiere que las compañías involucradas y sus contactos estén dados de alta en un mismo Odoo, apoyándose en el maestro único de terceros.

Rutas de referencia: `Ajustes > Compañías > Transacciones interempresa` para habilitar la funcionalidad; `Ajustes > Usuarios y compañías > Compañías` para afinar el comportamiento por compañía; `Contabilidad > Clientes > Facturas` para emitir la factura que dispara el espejo.

### Revisión posterior (QA / gerencia de proyecto)
1. Confirmar una factura de cliente de Eracon Alimentos a SERAC: el sistema debe generar automáticamente la factura de proveedor en SERAC.
2. Revisar el documento espejo generado: sus líneas y montos deben coincidir con la factura de origen sin captura manual.
3. Repetir la operación con Eracon Salud como emisora: debe comportarse igual, según lo configurado por compañía.
4. Confirmar una factura de una compañía sin transacción interempresa activada: no debe generar espejo, para verificar que el automatismo solo aplica a las compañías configuradas.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-060 (CCS-4.6.1, CCS-4.6.2) · Propuesta PROP-NAT-028

---

# GS-061 · Supervisión de control de gestión por departamento (cuestionarios)

**Tipo:** Configuración · **Módulo:** Encuestas, Proyecto · **Edición:** Community
**Áreas:** Contraloría, Administración y Finanzas (CCS), Administración y Finanzas (Hotel-Libny), Administración y Finanzas (Hotel-Juan), Gerencia Hotelera · **Fase:** 3 · **Depende de:** — · **Estado:** Pendiente · **Prioridad:** ★★

### Qué atiende
La validación de gestión por departamento se registra hoy en Word y se comunica por llamada o WhatsApp, sin consolidación de resultados ni visibilidad en tiempo real, y el escalamiento de los hallazgos es informal. En paralelo, el analista que detecta y reporta errores de otros departamentos ya asigna y sigue actividades en Odoo. Esta tarea da soporte a la supervisión de control de gestión con cuestionarios periódicos por departamento y un seguimiento formal de los hallazgos hasta su cierre.

### Cómo se configura
Los cuestionarios periódicos por departamento se levantan en el módulo de Encuestas, con lo que sus resultados quedan consolidados y consultables en tiempo real, sustituyendo el registro en Word. El plan de trabajo de control y el seguimiento de cada hallazgo hasta su cierre se llevan como tareas de un proyecto de control de gestión, asignadas a un responsable y con etapas que reflejan su avance, reemplazando la comunicación por WhatsApp y el escalamiento informal por un flujo trazable. Un cuestionario que arroje un hallazgo se traduce en una tarea del proyecto, de modo que la detección y el cierre queden encadenados dentro del sistema.

Rutas de referencia: `Encuestas > Nuevo` para crear los cuestionarios por departamento; `Encuestas > Informes` para consultar los resultados consolidados; `Proyecto > Nuevo` para el plan de control y las tareas de seguimiento de hallazgos.

### Revisión posterior (QA / gerencia de proyecto)
1. Levantar un cuestionario para un departamento y responderlo: los resultados deben consolidarse y verse sin recopilarlos a mano.
2. Consultar el informe de un cuestionario cerrado: debe mostrar los resultados en tiempo real, no en un documento aparte.
3. Registrar un hallazgo como tarea del proyecto de control, asignarlo a un responsable y moverlo de etapa: el avance debe quedar reflejado y trazable.
4. Seguir un hallazgo hasta su etapa de cierre: debe poder verificarse quién lo atendió y cuándo se cerró.

La tarea se da por **Lista** cuando las cuatro pruebas se cumplen.

### Trazabilidad
GS-061 (CTR-1.1, CTR-1.4, CTR-2.1, CTR-2.2, CTR-2.3, CTR-4.1, CCS-4.4.1, AFL-18.1, AFJ-1.15, AFJ-1.16, AFJ-1.17, AFJ-8.3, GHO-3.6, GHO-4.4, GHO-5.2) · Propuesta PROP-DEV-032

---

# GS-062 · Maestro de usuarios, clientes y métodos de pago en sistemas de punto de servicio

**Tipo:** Desarrollo · **Módulo:** Externo (Cloudbeds/Poster) · **Edición:** —
**Áreas:** Administración y Finanzas (Hotel-Libny) · **Fase:** 5 · **Depende de:** — · **Estado:** Desarrollo · **Prioridad:** ★

### Qué atiende
La creación de usuarios y clientes y la configuración de métodos de pago se hacen hoy directamente en Cloudbeds (recepción) y Poster (A&B), que operan como sistemas externos. Mientras esos sistemas sigan en uso, esa administración vive fuera de Odoo y no puede gestionarse desde el sistema. Esta tarea deja constancia de esa condición y de la única vía para acercarla, sin trasladar hoy la configuración a Odoo.

### Cómo se configura
No es configuración de Odoo mientras Cloudbeds y Poster sigan operando: la administración de sus usuarios, clientes y métodos de pago permanece en cada plataforma. Acercar esa gestión al sistema solo es posible con un desarrollo de integración a medida contra cada plataforma, que sincronice los maestros externos. La alternativa de fondo es la migración: si la recepción pasa a un PMS sobre Odoo y A&B a Punto de venta, esta configuración se absorbe en los maestros propios de Odoo —usuarios, clientes y métodos de pago del punto de venta— y deja de requerir integración externa.

Rutas de referencia, aplicables solo si la operación migra a Odoo: `Ajustes > Usuarios y compañías > Usuarios` para los usuarios; `Punto de venta > Pedidos > Clientes` para los clientes; `Punto de venta > Configuración > Métodos de pago` para los métodos de pago. Mientras persistan Cloudbeds y Poster, la administración se mantiene en cada sistema.

### Revisión posterior (QA / gerencia de proyecto)
1. Verificar dónde se crean hoy los usuarios y clientes de recepción y A&B: deben seguir gestionándose en Cloudbeds y Poster, no en Odoo.
2. Si se aprueba una integración, comprobar que un alta de cliente o método de pago hecha en el sistema externo se refleje en Odoo por sincronización.
3. Si se decide migrar, verificar que los maestros de usuarios, clientes y métodos de pago queden en los menús propios de Odoo.

Esta tarea corresponde a sistemas externos: no es configuración de Odoo mientras Cloudbeds y Poster sigan en uso. Se da por **Lista** cuando se confirma la vía elegida —permanencia en los sistemas externos, integración a medida o migración— y las pruebas aplicables a esa vía se cumplen.

### Trazabilidad
GS-062 (AFL-13.3, AFL-13.4, AFL-13.7, AFL-13.8) · Propuesta PROP-DEV-033

---

# GS-063 · Soporte administrativo ofimático y atención general

**Tipo:** —  · **Módulo:** Fuera de alcance · **Edición:** —
**Áreas:** Administración y Finanzas (Hotel-Juan) · **Fase:** — · **Depende de:** — · **Estado:** Fuera de alcance · **Prioridad:** ★

### Qué atiende
Las operaciones de soporte de oficina —copias, sellado, uso del POS como apoyo, atención de equipos y asesoramiento al personal y a terceros— no implican una transacción contable ni un dato maestro. No son objeto del sistema y se documentan únicamente para dejar constancia de su descarte explícito.

### Cómo se configura
No corresponde. Este grupo queda fuera del alcance de Odoo: no hay configuración, migración ni integración asociada, porque las tareas no generan un asiento contable ni administran un maestro. Su registro sirve solo para trazar que fueron evaluadas y descartadas de forma deliberada, no omitidas.

### Trazabilidad
GS-063 (AFJ-7.4, AFJ-8.2) · Propuesta PROP-DEV-034


---
