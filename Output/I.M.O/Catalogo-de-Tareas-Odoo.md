---
proyecto: Koral Morrocoy
documento: Catálogo de Tareas de Configuración
version: 1.0
fecha: 2026-08-10
salida a producción: 1 de octubre de 2026
documento hermano: Cronograma de Implementación
base: Registro de Decisiones y Plan de Configuración v2.0
---

# Catálogo de Tareas de Configuración - Koral

## Qué es este documento

El desglose completo del trabajo de configuración del sistema. Cada tarea de este catálogo nace de una decisión ya aprobada en el **Registro de Decisiones y Plan de Configuración**; no hay tareas inventadas ni alcance agregado por el camino. Cuando una tarea proviene de una decisión, se indica su número; cuando proviene de una definición incorporada después de la sesión, se indica como definición.

La secuencia y las dependencias entre tareas macro están en el **Cronograma de Implementación**, que es el documento hermano.

## Cómo se lee

El trabajo se organiza en dos niveles. Una **tarea macro** es un bloque de configuración con un resultado verificable (por ejemplo, la parametrización de ubicaciones de almacén). Dentro de ella viven las **tareas micro**, que son los pasos concretos que hay que ejecutar para lograrlo.

Cada tarea micro trae cuatro cosas:

- **Qué es:** en qué consiste la tarea, en términos del sistema.
- **Para qué:** qué problema del hotel resuelve, y de qué decisión viene.
- **Cómo se hace:** la ruta dentro del sistema y los pasos. Todas las rutas están verificadas contra la documentación oficial de Odoo 19.
- **Criterios de aprobación:** qué hay que poder comprobar para dar la tarea por cerrada. Si no se cumple, la tarea no está terminada.

## Convención de las rutas

Las rutas se escriben como aparecen en el menú del sistema: `Aplicación → Menú → Submenú`. Los nombres de campo y de botón van entre comillas. El sistema se configura en español, de modo que los nombres pueden variar levemente respecto a la documentación oficial, que está en inglés; cuando hay riesgo de confusión se indica el nombre en inglés entre paréntesis.

Varias configuraciones exigen tener activado el **modo desarrollador**. Cuando una tarea lo requiere, se indica expresamente.

---

# Fase 1 · Ambiente y base fiscal

---

## M01 · Preparación del entorno de trabajo

**Origen:** condición previa a todas las decisiones. **Resultado:** un sistema operativo, con la localización venezolana y la vertical hotelera instaladas, y con ambientes separados para probar sin afectar la operación.

### M01.1 · Creación del proyecto y sus ramas

**Qué es.** Levantar el proyecto en Odoo.sh y definir sus tres ramas de trabajo: producción, prueba y desarrollo.

**Para qué.** La rama de producción es donde vive la operación real. La rama de prueba permite ensayar una configuración sobre una copia de los datos reales sin riesgo. La de desarrollo se usa para los desarrollos a la medida. Sin esa separación, cualquier prueba se hace sobre datos reales.

**Cómo se hace.** Desde el panel de Odoo.sh, en la pestaña de ramas (*Branches*), se crea la rama de producción y se añaden las ramas de prueba y desarrollo arrastrándolas a su etapa correspondiente. El repositorio de código del proyecto queda vinculado al proyecto de Odoo.sh mediante la clave de despliegue que se configura en el propio repositorio.

**Criterios de aprobación.**
- Existen las tres ramas y cada una levanta una instancia accesible.
- La rama de prueba se puede regenerar desde una copia de producción.
- El acceso al panel está restringido al equipo del proyecto.

### M01.2 · Incorporación de la localización venezolana

**Qué es.** Sumar al proyecto el paquete venezolano desarrollado por Almus, anclado a una versión específica.

**Para qué.** Resuelve la tasa del BCV, la doble moneda, la validación del RIF, la factura como documento fiscal, las retenciones, los libros de IVA y el IGTF. Es la base sobre la que se monta toda la contabilidad, y no hay alternativa que evaluar: viene resuelto.

**Cómo se hace.** El paquete se incorpora como submódulo del repositorio del proyecto, anclado siempre a una etiqueta de versión y nunca a una rama, según la práctica de despliegue definida para la localización. La guía de instalación está en `docs/MANUAL_INSTALACION_LOCALIZACION.md` y la de submódulos en `docs/GUIA_SUBMODULO_ODOO_SH.md`, dentro del propio repositorio de la localización.

**Criterios de aprobación.**
- El submódulo apunta a una etiqueta concreta, verificable con el historial del repositorio.
- La lista de aplicaciones muestra los módulos de la localización disponibles para instalar.
- La versión instalada queda registrada en la documentación del proyecto.

### M01.3 · Incorporación de la vertical hotelera

**Qué es.** Sumar al proyecto los módulos del sistema hotelero de Almus.

**Para qué.** Resuelve reservas, cobro de anticipos, cargo de consumos a la habitación y estado de habitaciones. Igual que la localización, no es materia de decisión: viene construido.

**Cómo se hace.** Mismo mecanismo que la localización: submódulo del repositorio del proyecto anclado a versión.

**Criterios de aprobación.**
- Los módulos de la vertical aparecen disponibles en la lista de aplicaciones.
- La versión instalada queda registrada en la documentación del proyecto.

### M01.4 · Instalación de las aplicaciones

**Qué es.** Instalar las aplicaciones que el proyecto va a usar: Contabilidad, Inventario, Compras, Ventas, Punto de Venta, Fabricación, Empleados, Ausencias, Asistencias, Nómina, Mantenimiento y Código de barras.

**Para qué.** Cada área del hotel opera sobre una aplicación distinta, y la configuración de cada fase presupone que la aplicación ya está instalada.

**Cómo se hace.** Desde `Aplicaciones`, buscar cada aplicación e instalarla. Si un módulo recién incorporado no aparece en la lista, hay que activar el modo desarrollador y usar `Aplicaciones → Actualizar lista de aplicaciones` (*Update Apps List*).

**Criterios de aprobación.**
- Todas las aplicaciones de la lista aparecen instaladas.
- Ninguna instalación arrojó error en el registro del sistema.
- El menú principal muestra las aplicaciones esperadas.

### M01.5 · Datos de la empresa, idioma, zona horaria y moneda

**Qué es.** Completar la ficha de la empresa operadora y fijar los parámetros generales del sistema.

**Para qué.** El nombre, el RIF y la dirección de la empresa salen impresos en cada documento fiscal. La zona horaria determina la fecha con la que se registra cada operación, y con turnos que cruzan la medianoche eso no es un detalle.

**Cómo se hace.** Ruta: `Ajustes → Usuarios y compañías → Compañías` (*Settings → Users & Companies → Companies*). Completar razón social, RIF, dirección y datos de contacto. El idioma y la zona horaria se fijan en `Ajustes → Configuración general`. La moneda principal se define en `Contabilidad → Configuración → Ajustes`, sección de monedas.

**Criterios de aprobación.**
- La ficha de la empresa está completa y el RIF pasa la validación del paquete venezolano.
- Una factura de prueba imprime los datos correctos.
- La fecha y hora del sistema coinciden con la hora local del hotel.

---

## M02 · Constitución de la empresa y base fiscal venezolana

**Origen:** decisiones 1, 2, 3, 4 y 8. **Resultado:** una sola empresa configurada, con sus impuestos y reglas fiscales cargadas.

### M02.1 · Confirmación de la estructura de una sola empresa

**Qué es.** Verificar que el sistema queda con una única empresa, la operadora del hotel, sin sedes formalmente separadas.

**Para qué.** Es la decisión 1. Con una sola empresa, nadie selecciona empresa al registrar un documento, y los bancos, extractos y conciliación quedan en un solo lugar. Las decisiones 2, 4 y 8 quedan sin efecto en esta etapa como consecuencia directa.

**Cómo se hace.** Ruta: `Ajustes → Usuarios y compañías → Compañías`. Debe existir un solo registro. No se activa la función de operaciones entre empresas, que en la documentación oficial se configura en la ficha de la empresa y solo aplica en entornos de varias empresas.

**Criterios de aprobación.**
- Existe una única compañía en el sistema.
- Ningún usuario ve un selector de empresa en la barra superior.
- No hay reglas de sincronización entre empresas activas.

### M02.2 · Carga de la base fiscal venezolana

**Qué es.** Ejecutar los asistentes del paquete venezolano que siembran impuestos, posiciones fiscales y configuración fiscal de la empresa.

**Para qué.** El IVA, las retenciones y los tipos de operación del SENIAT deben existir antes de crear cualquier producto o factura, porque cada uno los referencia.

**Cómo se hace.** El paquete venezolano incorpora asistentes de arranque para el plan de cuentas, los impuestos, los diarios y las posiciones fiscales. La configuración específica de Venezuela vive, desde la versión 1.2.0 de la localización, en `Contabilidad → Configuración`. Los impuestos resultantes se revisan en `Contabilidad → Configuración → Impuestos` y las posiciones fiscales en `Contabilidad → Configuración → Posiciones fiscales`.

**Criterios de aprobación.**
- Los impuestos venezolanos aparecen creados con sus alícuotas correctas.
- Las posiciones fiscales están cargadas.
- Una factura de prueba calcula el IVA correctamente.

### M02.3 · Configuración de la tasa de cambio

**Qué es.** Verificar que la toma automática de la tasa del BCV está operando.

**Para qué.** Toda la operación se cotiza en divisa y se cobra en bolívares. La tasa la resuelve la localización con fuentes configurables y respaldo en cascada; solo hay que comprobar que está funcionando.

**Cómo se hace.** Ruta: `Contabilidad → Configuración → Ajustes`, sección de monedas, donde se verifica la actualización automática de tasas. El detalle de la tasa operativa y su auditoría los maneja el módulo de tasa de la localización.

**Criterios de aprobación.**
- La tasa del día se muestra actualizada.
- Una factura en divisa se convierte a bolívares con la tasa correcta.
- Queda registro de qué fuente entregó la tasa.

---

## M03 · Plan de cuentas contables

**Origen:** decisiones 2 y 5, y definición 5 (revisión de los planes del grupo). **Resultado:** el plan de cuentas cargado, revisado y aprobado por Contabilidad.

### M03.1 · Carga del plan de cuentas venezolano

**Qué es.** Sembrar el catálogo de cuentas base que trae el paquete venezolano.

**Para qué.** Es el esqueleto contable de todo el sistema. Cada categoría de producto, cada diario y cada forma de pago apunta a una cuenta de este plan.

**Cómo se hace.** El paquete venezolano incluye un plan de cuentas propio sobre base genérica, que se carga con los asistentes de arranque. El resultado se revisa en `Contabilidad → Configuración → Plan de cuentas` (*Chart of Accounts*).

**Criterios de aprobación.**
- El plan de cuentas está cargado y se puede consultar completo.
- Cada cuenta tiene su tipo correcto.
- No hay cuentas duplicadas ni con numeración inconsistente.

### M03.2 · Ajuste del plan a la operación del hotel

**Qué es.** Agregar, renombrar o desactivar cuentas para que el plan refleje la operación real: unidades de negocio, tipos de gasto por área, cuentas de inventario y de merma.

**Para qué.** El plan base es genérico. Las decisiones 20, 23, 31 y la definición 3 exigen cuentas específicas: la cuenta de gasto de merma separada, las cuentas de destino de consumo por área, y las cuentas de valoración y variación de inventario.

**Cómo se hace.** Ruta: `Contabilidad → Configuración → Plan de cuentas`. Crear las cuentas faltantes con `Nuevo`, indicando código, nombre y tipo. Los grupos de cuentas, que sirven para agregar el reporte por rangos de código, se configuran en `Contabilidad → Configuración → Grupos de cuentas` (*Account Groups*).

**Criterios de aprobación.**
- Existe una cuenta de gasto de merma separada de las diferencias de conteo.
- Existen cuentas de valoración de inventario y de variación de inventario.
- Existen las cuentas de gasto que cada destino de consumo va a usar.
- Contabilidad aprueba el plan por escrito.

### M03.3 · Verificación de compatibilidad con el grupo

**Qué es.** Contrastar el plan que se está montando contra los planes de cuentas que hoy usan las demás empresas del grupo.

**Para qué.** Es la definición 5. Si cada empresa arranca por su lado, consolidar después obliga a mantener tablas de equivalencias a mano de forma permanente.

**Cómo se hace.** Es una revisión documental, no una configuración: se comparan las numeraciones y se ajusta el plan del hotel donde haga falta, antes de que empiece a haber movimientos registrados.

**Criterios de aprobación.**
- Existe un cuadro comparativo entre el plan del hotel y el de las demás empresas.
- Las diferencias identificadas están resueltas o documentadas con su motivo.
- La dirección da por revisado el punto.

---

# Fase 2 · Contabilidad

---

## M04 · Diarios contables

**Origen:** decisión 7 y definición 2. **Resultado:** un diario por cada punto que emite facturas, por cada cuenta bancaria y por cada caja física.

### M04.1 · Diarios de venta por punto de emisión

**Qué es.** Crear un diario de ventas por cada punto que emite facturas, con uno propio por cada máquina fiscal, y separados por sede.

**Para qué.** Es la decisión 7 y la definición 2. Cada máquina fiscal lleva su propia numeración correlativa; un diario compartido entre dos máquinas produce correlativos que no cuadran. La separación por sede responde al impuesto municipal: lo que se vende en Caracas no tributa en la misma alcaldía que lo del hotel.

**Cómo se hace.** Ruta: `Contabilidad → Configuración → Diarios` (*Journals*). Crear con `Nuevo` un diario de tipo Ventas por cada punto de emisión, con nombre y código corto que lo identifiquen sin ambigüedad, y su secuencia propia. El manejo del número de control y las secuencias por rango lo aporta el módulo de facturación de la localización.

**Criterios de aprobación.**
- Existe un diario de ventas por cada máquina fiscal en operación.
- Los diarios de Caracas y del hotel están claramente diferenciados por nombre y por código.
- Una factura emitida desde cada punto toma el correlativo de su propio diario.
- El libro de ventas que se presenta al fisco sigue siendo uno solo y consolida todos los diarios.

### M04.2 · Diarios de compra

**Qué es.** Crear los diarios de compra, separados por sede.

**Para qué.** Decisión 7. Fiscalmente no hace falta separarlos porque la declaración es consolidada; se separan por criterio de gestión, para poder ver qué compra cada sede.

**Cómo se hace.** Ruta: `Contabilidad → Configuración → Diarios`, tipo Compras.

**Criterios de aprobación.**
- Existe un diario de compras por sede.
- Una factura de proveedor de cada sede entra en su diario correspondiente.

### M04.3 · Diarios de banco

**Qué es.** Crear un diario por cada cuenta bancaria del hotel.

**Para qué.** Cada cuenta se concilia contra su propio extracto. Con un diario compartido, la conciliación se vuelve una reconstrucción manual.

**Cómo se hace.** Ruta: `Contabilidad → Configuración → Diarios`, tipo Banco, indicando el número de cuenta. Alternativamente, desde el tablero de Contabilidad con `Añadir una cuenta bancaria`.

**Criterios de aprobación.**
- Existe un diario por cada cuenta bancaria real.
- Cada diario apunta a su cuenta contable correcta.

### M04.4 · Diarios de caja

**Qué es.** Crear un diario por cada caja física del hotel.

**Para qué.** Sostiene la decisión 34: cada punto de venta tiene su cierre y su arqueo por separado, y para eso el efectivo de cada caja tiene que llegar a un destino contable distinto.

**Cómo se hace.** Ruta: `Contabilidad → Configuración → Diarios`, tipo Efectivo, uno por cada caja física.

**Criterios de aprobación.**
- Existe un diario de efectivo por cada punto de cobro físico.
- Cada uno apunta a su cuenta de caja propia.

---

## M05 · Contabilidad analítica

**Origen:** decisiones 3 y 5. **Resultado:** la clasificación por unidad de negocio operativa y obligatoria, con asignación automática en los casos repetitivos.

### M05.1 · Activación de la contabilidad analítica

**Qué es.** Encender la función que permite clasificar cada ingreso y cada gasto.

**Para qué.** Es la base de la decisión 5 y la única vía para obtener el resultado de cada unidad de negocio y de cada sede sin crear empresas adicionales, que es lo que resuelve también la decisión 3.

**Cómo se hace.** Ruta: `Contabilidad → Configuración → Ajustes`, sección `Analítica` (*Analytics*), activar `Contabilidad analítica` (*Analytic Accounting*) y guardar.

**Criterios de aprobación.**
- La opción está activa.
- Aparecen los menús de planes y cuentas analíticas en el menú de configuración.

### M05.2 · Creación del plan de unidades de negocio

**Qué es.** Crear el plan analítico que agrupa las unidades de negocio y sus cuentas: hospedaje, alimentos y bebidas, marina, estacionamiento, Boca Seca y arrendamientos.

**Para qué.** Decisión 5. Es lo que permite emitir el estado de resultados de cada unidad de negocio por separado.

**Cómo se hace.** Ruta: `Contabilidad → Configuración → Planes analíticos` (*Analytic Plans*). Crear el plan con `Nuevo`. Luego, en `Contabilidad → Configuración → Cuentas analíticas` (*Analytic Accounts*), crear una cuenta por unidad de negocio y vincularla al plan mediante el campo `Plan`. La documentación oficial advierte que cada plan analítico debe tener al menos una cuenta analítica.

**Criterios de aprobación.**
- El plan existe y contiene una cuenta por cada unidad de negocio.
- Los nombres coinciden con los que usa la dirección en sus reportes.

### M05.3 · Creación del segundo criterio de clasificación

**Qué es.** Crear el segundo plan analítico, con el eje adicional acordado: temporada, evento o proyecto.

**Para qué.** Decisión 5. Un solo eje responde "cuánto dejó A&B"; el segundo responde "cuánto dejó A&B en temporada alta" o "cuánto costó ese evento". Los dos ejes se cruzan en el mismo asiento.

**Cómo se hace.** Ruta: `Contabilidad → Configuración → Planes analíticos`, crear un segundo plan independiente del primero, con sus cuentas en `Contabilidad → Configuración → Cuentas analíticas`. En la ventana de distribución analítica, cada plan aparece como una columna separada.

**Criterios de aprobación.**
- Existe el segundo plan con sus cuentas.
- En una factura de prueba se pueden asignar simultáneamente una cuenta de cada plan.

### M05.4 · Configuración de la obligatoriedad

**Qué es.** Hacer que un registro no se pueda confirmar sin su clasificación analítica.

**Para qué.** Decisión 5. Se escogió obligatoria porque si el sistema no la exige, cualquier omisión deja un hueco y el estado de resultados por área nunca cuadra.

**Cómo se hace.** Ruta: `Contabilidad → Configuración → Planes analíticos`, abrir el plan y fijar el campo `Aplicabilidad por defecto` (*Default Applicability*) en `Obligatorio` (*Mandatory*). La documentación oficial precisa que con esa configuración el asiento no se puede confirmar si no se selecciona una cuenta analítica. Para afinar dónde aplica y dónde no, se agregan líneas en la pestaña `Aplicabilidad`, donde se puede condicionar por tipo de documento, por prefijo de cuenta contable o por categoría de producto; la aplicabilidad definida en una línea siempre prevalece sobre la aplicabilidad por defecto.

**Criterios de aprobación.**
- Un asiento sin clasificación analítica no se puede confirmar.
- Los casos donde la clasificación no aplica están resueltos con líneas de aplicabilidad y documentados.
- El mensaje de error que ve el usuario es comprensible.

### M05.5 · Reglas de asignación automática

**Qué es.** Cargar las reglas que rellenan la clasificación sola en las operaciones repetitivas.

**Para qué.** Decisión 5. El objetivo es que el usuario solo tenga que elegir en los casos que de verdad son ambiguos. La dirección señaló que el éxito de esta decisión depende de no convertirla en una carga diaria.

**Cómo se hace.** Ruta: `Contabilidad → Configuración → Modelos de distribución analítica` (*Analytic Distribution Models*). Crear un modelo con `Nuevo` y fijar las condiciones bajo las que aplica: `Prefijos de cuentas`, `Empresa` (el tercero), `Producto`, y con el icono de ajustes se despliegan además `Categoría de empresa` y `Categoría de producto`. En `Distribución analítica` se indica el reparto que se aplicará. La documentación oficial precisa dos cosas importantes: todas las condiciones de un modelo deben cumplirse para que se aplique, de modo que una regla por condición individual exige un modelo por condición; y los modelos se pueden combinar y ordenar arrastrándolos, lo que permite repartir sobre varios planes a la vez.

**Criterios de aprobación.**
- Las operaciones repetitivas de cada área se clasifican solas, verificado con al menos un caso real por área.
- Ninguna regla asigna una clasificación equivocada en los casos probados.
- Las reglas están documentadas para poder mantenerlas.

### M05.6 · Prueba del reporte por unidad de negocio

**Qué es.** Emitir el estado de resultados filtrado por unidad de negocio y por sede, con datos de prueba.

**Para qué.** Es el objetivo final de toda la tarea macro. Si el reporte no sale, la configuración no sirve, por más que los campos estén llenos.

**Cómo se hace.** Se registran facturas y gastos de prueba con su clasificación, y se consulta el resultado por cuenta analítica. Los apuntes contables con su distribución se revisan en `Contabilidad → Contabilidad → Apuntes contables` (*Journal Items*), donde además la distribución se puede editar en masa seleccionando varias líneas.

**Criterios de aprobación.**
- El reporte muestra ingresos y gastos separados por unidad de negocio.
- El reporte permite separar Caracas del hotel.
- La suma de las unidades de negocio coincide con el total de la empresa.

---

## M06 · Control de cierres contables

**Origen:** decisiones 6 y 9. **Resultado:** los períodos cerrados protegidos, con excepciones autorizadas y trazables.

### M06.1 · Configuración del cierre mensual

**Qué es.** Fijar la fecha hasta la cual no se pueden crear ni modificar asientos.

**Para qué.** Decisión 6. Hoy se registran asientos con fecha de hasta un año atrás, lo que cambia cifras de reportes ya emitidos y de declaraciones ya presentadas.

**Cómo se hace.** Ruta: `Contabilidad → Contabilidad → Fechas de bloqueo` (*Lock Dates*). En la ventana `Bloquear asientos contables`, fijar la fecha en `Bloquear todo` (*Lock Everything*) y guardar. La documentación oficial precisa que esto impide modificar asientos ya publicados con fecha contable igual o anterior, e impide publicar asientos nuevos con esa fecha: en ese caso el sistema mueve automáticamente la fecha contable al día siguiente del bloqueo.

**Criterios de aprobación.**
- Con la fecha fijada, un intento de registrar un asiento en el mes cerrado es rechazado o desplazado de fecha.
- El procedimiento mensual de fijar la nueva fecha está documentado y asignado.

### M06.2 · Habilitación de las excepciones autorizadas

**Qué es.** Dejar configurado el mecanismo por el cual dos personas distintas pueden levantar puntualmente un cierre para corregir un período.

**Para qué.** Decisión 9. Se optó por dos autorizadores para que siempre haya uno disponible y las correcciones no dependan de una sola persona. La decisión 6 exige que el bloqueo no impida corregir un error legítimo.

**Cómo se hace.** La documentación oficial establece que solo los usuarios con permisos de Administrador en Contabilidad pueden crear excepciones. El procedimiento es: en `Contabilidad → Contabilidad → Fechas de bloqueo`, retirar la fecha de `Bloquear todo`; en el aviso de `Excepción` que aparece, elegir si aplica `para mí` o `para todos` y cuánto dura; y agregar el `Motivo`. Toda esa información queda registrada en el historial de la ficha de la empresa.

**Criterios de aprobación.**
- Las dos personas designadas tienen el permiso necesario y ninguna otra lo tiene.
- Una excepción de prueba queda registrada con responsable, motivo y duración.
- El resto de los usuarios no puede levantar el bloqueo.

### M06.3 · Cierre definitivo del ejercicio auditado

**Qué es.** Dejar documentado el procedimiento del bloqueo irreversible que se aplica cuando el ejercicio queda auditado.

**Para qué.** Decisión 6. Una vez auditado el ejercicio, ese año queda sin posibilidad de modificación.

**Cómo se hace.** Se usa la fecha de `Bloqueo definitivo` (*Hard Lock*), en la misma ventana de fechas de bloqueo. La documentación oficial advierte expresamente que, a diferencia del bloqueo normal, **el bloqueo definitivo es irreversible**: no se puede levantar con una excepción, porque su función es garantizar la inalterabilidad de los registros.

**Criterios de aprobación.**
- El procedimiento está documentado, con la advertencia de irreversibilidad en primer plano.
- Está definido quién lo ejecuta y con qué aprobación previa.
- No se aplica durante la implantación, solo al cierre del primer ejercicio auditado.

---

# Fase 3 · Datos maestros

---

## M07 · Unidades de medida y empaques

**Origen:** decisión 12. **Resultado:** cada producto con su unidad base de conteo y sus unidades de compra, con las conversiones cerradas antes de la carga.

### M07.1 · Activación de las unidades de medida

**Qué es.** Encender la función que permite manejar un producto en más de una unidad.

**Para qué.** Decisión 12. Se compra y se consume en unidades distintas, y traducir a mano cada compra es una fuente de error permanente. El ejemplo trabajado en la sesión fue la harina: se mide en gramos, se presenta en paquetes, y se compra por paquete o por bulto.

**Cómo se hace.** Ruta: `Inventario → Configuración → Ajustes`, sección `Productos`, activar `Unidades de medida y empaques` (*Units of Measure & Packagings*) y guardar.

**Criterios de aprobación.**
- La opción está activa.
- Aparece el menú `Inventario → Configuración → Unidades y empaques`.

### M07.2 · Definición de las unidades base

**Qué es.** Crear o revisar las unidades en las que se cuenta y se valora cada producto: gramos, unidades, litros.

**Para qué.** Decisión 12. La unidad base es la que usa el almacén para contar y la que usa el sistema para valorar el inventario. Es la referencia contra la que se define todo lo demás.

**Cómo se hace.** Ruta: `Inventario → Configuración → Unidades y empaques` (*Units & Packagings*). Revisar las unidades existentes y crear las que falten.

**Criterios de aprobación.**
- Cada familia de productos tiene definida su unidad base.
- El almacén confirma que esa es la unidad en la que efectivamente cuenta.

### M07.3 · Definición de las unidades de compra y sus conversiones

**Qué es.** Definir, por producto, en qué unidad se compra y cuántas unidades base contiene.

**Para qué.** Decisión 12. La orden de compra sale en la unidad del proveedor (paquete, bulto, saco) y el sistema convierte al recibir. La conversión se define una sola vez por producto.

**Cómo se hace.** Las unidades en las que se compra un producto se definen en la pestaña `Compra` de la ficha del producto, en `Inventario → Productos → Productos`. La documentación oficial precisa que la unidad de compra debe pertenecer a la misma categoría que la unidad por defecto del producto, y que el sistema convierte automáticamente entre ambas. Los empaques de venta se definen en la pestaña `Ventas` de la ficha, en el campo `Empaques`.

**Criterios de aprobación.**
- Cada producto que se compra en unidad distinta tiene su conversión cargada.
- Una orden de compra de prueba en unidad de proveedor ingresa la cantidad correcta en unidad base.
- Compras y el almacén validaron las conversiones antes de la carga masiva.

### M07.4 · Congelamiento de las conversiones antes de la carga

**Qué es.** Cerrar formalmente las conversiones y dejar constancia de la revisión antes de cargar productos.

**Para qué.** Decisión 12, advertencia expresa: si una conversión se define mal, corregirla después **no arregla los movimientos ya registrados con ella**. Es un punto de no retorno práctico.

**Cómo se hace.** Es un control de proyecto, no una configuración: se emite el listado de conversiones, se revisa con el almacén y con compras, y se firma antes de habilitar la carga.

**Criterios de aprobación.**
- Existe el listado revisado y aprobado.
- La carga de productos no arranca antes de esta aprobación.

---

## M08 · Características que abren variante

**Origen:** decisión 11. **Resultado:** las características de variante definidas y congeladas antes de cargar el catálogo.

### M08.1 · Activación de las variantes

**Qué es.** Encender la función de variantes de producto.

**Para qué.** Decisión 11. La operación necesita distinguir el agua en todos sus formatos y marcas, porque no es lo mismo la botella plástica pequeña que la de vidrio, ni una marca que otra al momento de comprar o de reponer.

**Cómo se hace.** Ruta: `Ventas → Configuración → Ajustes`, sección `Catálogo de productos`, activar `Variantes` (*Variants*) y guardar.

**Criterios de aprobación.**
- La opción está activa.
- Aparece el menú de atributos y la pestaña de variantes en la ficha del producto.

### M08.2 · Creación de las características

**Qué es.** Crear las características que abren variante: presentación, tamaño, contenido, marca y color, con sus valores.

**Para qué.** Decisión 11. Cada combinación es una referencia independiente, con su propio inventario, su propio precio de proveedor y su propia línea en cada conteo.

**Cómo se hace.** Ruta: `Inventario → Configuración → Atributos` (también accesible desde `Ventas → Configuración → Atributos`). Crear cada característica con `Nuevo`, indicando su nombre y su tipo de visualización, y cargar sus valores en la pestaña `Valores del atributo`.

**Criterios de aprobación.**
- Existen las cinco características decididas, con sus valores cargados.
- Los valores están escritos de forma uniforme, sin variantes de escritura del mismo valor.

### M08.3 · Definición del modo de creación de variantes

**Qué es.** Fijar, en cada característica, si las variantes se crean todas de una vez, solo cuando se usan, o nunca.

**Para qué.** Es la decisión con mayor riesgo de todo el proyecto. La documentación oficial es explícita: **una vez que la característica se ha añadido a un producto, su modo de creación de variantes ya no se puede editar**. Corregirlo después implica rehacer los productos afectados.

**Cómo se hace.** Ruta: `Inventario → Configuración → Atributos`, abrir cada característica y fijar el campo `Creación de variantes` (*Variant Creation*). Las tres opciones que documenta Odoo son: `Instantáneamente` (*Instantly*), que crea todas las combinaciones posibles apenas se añaden los valores al producto; `Dinámicamente` (*Dynamically*), que crea la variante solo cuando efectivamente se usa; y `Nunca` (*Never*), que impide la creación automática.

**Criterios de aprobación.**
- Cada característica tiene su modo definido y justificado por escrito.
- El criterio de qué característica abre variante en cada familia está cerrado y aprobado por Koral. *(Este criterio está en definición según el registro de decisiones y debe cerrarse antes de esta tarea.)*
- La revisión quedó documentada como hito del proyecto, por el carácter irreversible de la configuración.

---

## M09 · Árbol de categorías de producto

**Origen:** decisiones 10, 17, 18 y 23. **Resultado:** dos niveles de categorías, cada una con su configuración contable.

### M09.1 · Creación de las familias y subfamilias

**Qué es.** Crear el árbol de categorías en dos niveles: familia por naturaleza y subfamilia dentro de cada una.

**Para qué.** Decisión 10. La dirección fue explícita en que los productos no pueden agruparse por quien los consume: el agua es agua, y la consume el personal de limpieza, ama de llaves, el huésped o se vende en el bar. Un producto que usan varias áreas existe una sola vez en el catálogo.

**Cómo se hace.** Ruta: `Inventario → Configuración → Categorías de productos` (*Product Categories*). Crear cada familia con `Nuevo` y luego cada subfamilia indicando su familia en el campo `Categoría padre`.

**Criterios de aprobación.**
- El árbol tiene exactamente dos niveles.
- Ninguna categoría corresponde a un área consumidora.
- Cada producto del catálogo depurado tiene una subfamilia donde encajar.

### M09.2 · Configuración contable de cada categoría

**Qué es.** Asignar a cada categoría las cuentas de inventario, de gasto y de ingreso que le corresponden.

**Para qué.** Decisiones 10 y 18. Cada familia comparte su forma de costeo y sus cuentas contables, y el segundo nivel permite distinguir donde ese tratamiento cambia. La configuración contable de una categoría es una decisión contable, y por eso la decisión 18 la deja en manos de Contabilidad junto con Compras.

**Cómo se hace.** Ruta: `Inventario → Configuración → Categorías de productos`, abrir cada categoría y completar sus cuentas. La documentación oficial confirma que las cuentas por defecto, el método de valoración y el método de costo definidos a nivel de compañía **pueden sobrescribirse en la ficha de la categoría de producto**.

**Criterios de aprobación.**
- Cada categoría tiene sus cuentas asignadas.
- Contabilidad aprobó la asignación categoría por categoría.
- Una compra de prueba en cada familia genera el asiento esperado.

### M09.3 · Definición del procedimiento de alta de categorías

**Qué es.** Dejar documentado que las categorías se crean entre Compras y Contabilidad, y no por un área sola.

**Para qué.** Decisión 18. Dar de alta un producto nuevo exige coordinación entre ambas áreas cuando implica una categoría nueva, porque la configuración contable no la puede decidir Compras.

**Cómo se hace.** Es un procedimiento, no una configuración del sistema. Se documenta y se refuerza en la Fase 8 restringiendo el permiso de creación de categorías a los perfiles correspondientes.

**Criterios de aprobación.**
- El procedimiento está escrito y comunicado a ambas áreas.
- Quedó registrado como requisito para la configuración de perfiles de la Fase 8.

---

## M10 · Carga del catálogo de productos y variantes

**Origen:** decisiones 10, 11, 12, 13, 17 y 18. **Resultado:** el catálogo completo cargado, con sus variantes, unidades, códigos y tipo correcto.

### M10.1 · Definición del tipo de cada producto

**Qué es.** Clasificar cada artículo del catálogo en uno de los tres tipos: servicio, bien con control de existencias, o bien sin control de existencias.

**Para qué.** Decisión 17. Control de existencias significa que el sistema lleva la cuenta de cuánto hay: aparece en los conteos, avisa cuando baja del mínimo y forma parte del valor del inventario. Lo que no lo tiene se registra como gasto al comprarse. Los servicios no generan ningún movimiento de almacén.

**Cómo se hace.** En la ficha del producto, en `Inventario → Productos → Productos`, pestaña `Información general`: el campo `Tipo de producto` define si es `Bienes` (*Goods*) o `Servicio`, y la casilla `Rastrear inventario` (*Track Inventory*) define si ese bien lleva control de existencias. **Nota técnica importante:** esta casilla está en la ficha del producto, no en la categoría; no se puede configurar de forma masiva desde la categoría.

**Criterios de aprobación.**
- Lavandería, estacionamiento, marina y decoraciones están cargados como servicios.
- Químicos, repuestos, blancos, víveres y bebidas están cargados con control de existencias.
- Papelería y artículos menores están cargados sin control de existencias.
- Se hizo una revisión específica buscando servicios cargados por error como mercancía, que la decisión 17 identifica como el error de carga más común.

### M10.2 · Carga de los productos base

**Qué es.** Cargar la plantilla de cada producto con su nombre, su categoría, su unidad base y su configuración contable.

**Para qué.** Es el maestro sobre el que opera todo el sistema: compras, inventario, punto de venta, recetas y precios.

**Cómo se hace.** Ruta: `Inventario → Productos → Productos`. La carga masiva se hace con la función de importación desde archivo, que la documentación oficial describe en la ruta `Ventas → Productos → Productos → Importar registros → Subir archivo`.

**Criterios de aprobación.**
- Todos los productos del catálogo depurado están cargados.
- Cada uno tiene categoría, unidad base y tipo.
- No hay duplicados: se verificó específicamente que un mismo artículo no exista dos veces por presentaciones distintas, que es el problema que la decisión 18 identifica como origen de la fragmentación actual.

### M10.3 · Generación de las variantes

**Qué es.** Asignar a cada producto sus características y generar sus variantes.

**Para qué.** Decisión 11. Cada combinación es una referencia independiente con su propio inventario y su propia línea en cada conteo.

**Cómo se hace.** En la ficha del producto, pestaña `Atributos y variantes`, añadir una línea por característica y seleccionar los valores que aplican a ese producto. Las variantes resultantes se consultan en `Inventario → Productos → Variantes de producto`. La documentación oficial advierte que el orden de las características en la página de atributos determina el orden en que aparecen en el producto.

**Criterios de aprobación.**
- Los productos que llevan variante las tienen generadas.
- El número de variantes por producto es el esperado, sin combinaciones imposibles.
- La regla de variantes se aplicó de forma homogénea dentro de cada familia.

### M10.4 · Carga de códigos de barras

**Qué es.** Cargar el código de barras de fábrica en cada variante que lo tenga.

**Para qué.** Decisión 13. El objetivo real es poder contar con lector, no etiquetar por etiquetar.

**Cómo se hace.** El código de barras se carga por variante, en el campo `Código de barras` de la ficha. La decisión 12 establece además código de barras por empaque, que se carga en los empaques definidos en la ficha del producto.

**Criterios de aprobación.**
- Toda variante con código de fábrica lo tiene cargado.
- Un lector reconoce correctamente una muestra de al menos veinte productos distintos.
- No hay códigos de barras repetidos entre variantes distintas.

### M10.5 · Etiquetas de anaquel para productos sin código

**Qué es.** Generar e imprimir las etiquetas de los productos que no traen código de fábrica, para colocarlas en el anaquel.

**Para qué.** Decisión 13. Etiquetar unidad por unidad los productos que no traen código no es sostenible en la práctica y se abandonaría en semanas. La etiqueta en el anaquel, acompañada del nombre del producto en grande, cumple la misma función con una fracción del trabajo.

**Cómo se hace.** Se genera un código interno para esas variantes y se imprime la etiqueta desde la propia lista de productos, seleccionando los registros y usando la acción de impresión de etiquetas.

**Criterios de aprobación.**
- Todos los productos sin código de fábrica tienen su etiqueta impresa.
- La etiqueta incluye el nombre del producto en tamaño legible desde el pasillo.
- Las etiquetas están colocadas en el anaquel correspondiente.

### M10.6 · Carga de precios de proveedor

**Qué es.** Cargar, por variante, qué proveedor la surte y a qué precio.

**Para qué.** Decisión 11. Cada variante tiene su propio precio de proveedor, y es lo que alimenta las órdenes de compra y los acuerdos de la tarea M22.

**Cómo se hace.** En la pestaña `Compra` de la ficha del producto, o de forma centralizada en `Compras → Configuración → Listas de precios de proveedor` (*Vendor Pricelists*).

**Criterios de aprobación.**
- Los productos de compra recurrente tienen al menos un proveedor asignado.
- El precio y la unidad de compra corresponden a lo pactado.

---

## M11 · Maestro de contactos

**Origen:** decisiones 14 y 19. **Resultado:** clientes y proveedores cargados con la estructura de empresa y contactos anidados.

### M11.1 · Depuración del maestro actual

**Qué es.** Limpiar el maestro de clientes y proveedores extraído de la base actual antes de cargarlo.

**Para qué.** Decisión 14. Un mismo tercero repartido en varios registros independientes fragmenta el saldo y los libros fiscales, que es justo el problema que se está depurando. Los contactos no se pueden reinventar porque tienen saldos e historia.

**Cómo se hace.** Es trabajo de datos previo a la carga: se identifican los registros que corresponden al mismo tercero y se consolidan. La aplicación `Contactos` dispone de una función de fusión de contactos duplicados para resolver los casos que se detecten después de cargar.

**Criterios de aprobación.**
- No hay dos registros con el mismo RIF.
- Cada tercero tiene identificado cuál de sus registros es la empresa y cuáles son sus direcciones o personas.

### M11.2 · Carga de las empresas

**Qué es.** Cargar cada cliente y proveedor que es una empresa como una sola ficha, la de la empresa, con su RIF.

**Para qué.** Decisión 14. La ficha de la empresa es la que lleva el RIF y es la entidad fiscal: ahí consolidan el saldo, las retenciones y los libros, sin importar a cuál de sus direcciones o contactos se haya emitido el documento.

**Cómo se hace.** Ruta: `Contactos`. Crear el registro con `Nuevo` marcando el tipo `Empresa`, y completar RIF, dirección fiscal y datos de contacto. La validación del RIF ante el SENIAT y el bloqueo de RIF repetidos los aporta el paquete venezolano.

**Criterios de aprobación.**
- Cada empresa existe una sola vez.
- El RIF pasa la validación en todos los casos.
- El tipo de contribuyente está cargado.

### M11.3 · Carga de los contactos y direcciones anidados

**Qué es.** Colgar de cada empresa sus personas de contacto y sus direcciones.

**Para qué.** Decisión 14. Resuelve el caso de una empresa con varias direcciones fiscales, donde según la operación hay que facturar a una o a otra: cada dirección se registra colgando de la empresa, y al emitir la factura se elige a cuál va. El documento sale con esa dirección, pero el sistema sigue reconociendo a la empresa como el tercero contable, de modo que el estado de cuenta no se fragmenta. También permite que cambie la persona de contacto sin tocar el registro fiscal.

**Cómo se hace.** En la ficha de la empresa, pestaña `Contactos y direcciones`, añadir cada registro indicando su tipo: dirección de facturación, dirección de entrega, o contacto.

**Criterios de aprobación.**
- Las empresas con varias direcciones fiscales las tienen cargadas como direcciones anidadas.
- Una factura emitida a una dirección anidada muestra esa dirección en el documento y consolida el saldo en la empresa.
- Ninguna dirección de una empresa quedó cargada como empresa independiente.

### M11.4 · Carga de personas naturales

**Qué es.** Cargar como persona natural a quien actúa por cuenta propia y no pertenece a ninguna empresa.

**Para qué.** Decisión 14. Es el caso complementario del anterior: sin nada colgando.

**Cómo se hace.** Ruta: `Contactos`, crear el registro con tipo `Individual`, sin empresa asociada.

**Criterios de aprobación.**
- Las personas naturales están cargadas sin empresa padre.
- Su documento de identidad está cargado y validado.

### M11.5 · Definición de los datos obligatorios y del procedimiento de alta

**Qué es.** Fijar qué datos son obligatorios al crear un tercero y documentar que cada área da de alta los suyos.

**Para qué.** Decisión 19. Se busca que cada departamento sea responsable de crear sus propios contactos, para repartir la carga y evitar que un único responsable se convierta en punto de fricción. La consistencia depende entonces de que los datos obligatorios estén claros.

**Cómo se hace.** El bloqueo de RIF repetidos del paquete venezolano ya acota el riesgo de duplicados. El resto se documenta como procedimiento y se refuerza con la formación del área.

**Criterios de aprobación.**
- La lista de datos obligatorios está escrita y comunicada a todas las áreas.
- Un intento de crear un tercero con RIF ya existente es rechazado por el sistema.

---

## M12 · Listas de precios

**Origen:** decisiones 15 y 16. **Resultado:** una lista base y las derivadas calculándose solas.

### M12.1 · Activación de las listas de precios

**Qué es.** Encender la función de listas de precios.

**Para qué.** Decisión 15. Permite tener precios distintos por segmento sin duplicar el catálogo.

**Cómo se hace.** Ruta: `Ventas → Configuración → Ajustes`, sección `Precios`, activar `Listas de precios` (*Pricelists*) y guardar.

**Criterios de aprobación.**
- La opción está activa.
- Aparece el menú `Ventas → Productos → Listas de precios`.

### M12.2 · Creación de la lista base en divisa

**Qué es.** Crear la lista de precios principal, con los precios cargados en divisa.

**Para qué.** Decisión 16. Con precios cargados en bolívares, cada movimiento de tasa obliga a reeditar toda la lista a mano. En divisa, el precio se mantiene estable frente a la variación de la tasa y la lista solo se edita cuando cambia la política comercial. El cobro en bolívares con la tasa del día lo resuelve el paquete venezolano.

**Cómo se hace.** Ruta: `Ventas → Productos → Listas de precios`. Crear con `Nuevo`, asignar el nombre y seleccionar la divisa en el campo `Moneda`.

**Criterios de aprobación.**
- La lista base existe y está en divisa.
- Una cotización de prueba muestra el precio en divisa y el equivalente en bolívares a la tasa del día.

### M12.3 · Creación de las listas derivadas

**Qué es.** Crear las listas de cada segmento (empleados, agencias, eventos) calculadas como un porcentaje de la base.

**Para qué.** Decisión 15. Mantener precios independientes en cada lista obliga a replicar manualmente cada cambio, y en la práctica terminan desalineados. Derivadas, el precio de cada segmento se calcula solo y se actualiza cuando cambia la base.

**Cómo se hace.** Ruta: `Ventas → Productos → Listas de precios`, crear la lista y en la pestaña `Reglas de precio` añadir una línea con `Tipo de precio` en `Fórmula` (*Formula*). En la fórmula, el campo `Basado en` (*Based on*) se fija en `Otra lista de precios` apuntando a la lista base, y el `Descuento` se carga con el porcentaje del segmento. La documentación oficial precisa que con el tipo `Fórmula` el descuento **no** es visible para el cliente, a diferencia del tipo `Descuento`.

**Criterios de aprobación.**
- Cada segmento tiene su lista derivada.
- Un cambio en un precio de la lista base se refleja automáticamente en todas las derivadas.
- El descuento no aparece expuesto en el documento del cliente.

### M12.4 · Delimitación del alcance

**Qué es.** Verificar que las tarifas de habitación quedan fuera de estas listas.

**Para qué.** Decisión 15. Las tarifas de habitación las maneja el sistema hotelero, con sus temporadas, tramos por noche y comisiones de agencia. Esta estructura aplica a alimentos y bebidas, lavandería, estacionamiento y marina.

**Cómo se hace.** Verificación: ningún producto de hospedaje debe aparecer en las reglas de estas listas.

**Criterios de aprobación.**
- Las listas contienen únicamente productos de A&B, lavandería, estacionamiento y marina.
- Las tarifas de habitación se siguen consultando en el sistema hotelero.

---

# Fase 4 · Inventario

---

## M13 · Almacenes por área

**Origen:** decisión 21. **Resultado:** un almacén por área, cada uno con su código corto y su circuito de recepción.

### M13.1 · Activación de las funciones de almacén

**Qué es.** Encender las opciones que permiten manejar varios almacenes, ubicaciones dentro de ellos y recorridos entre ellos.

**Para qué.** Decisión 21 y decisión 22. Sin estas opciones el sistema opera con un solo almacén y un solo depósito, y no hay dónde registrar qué tiene cada área.

**Cómo se hace.** Ruta: `Inventario → Configuración → Ajustes`, sección `Almacenes`. Activar `Ubicaciones de almacenamiento` (*Storage Locations*) y `Rutas multi-etapa` (*Multi-Step Routes*), y guardar. La documentación oficial señala que las ubicaciones de almacenamiento se usan típicamente junto con las rutas multi-etapa, y que activar ubicaciones es requisito para los conteos cíclicos.

**Criterios de aprobación.**
- Ambas opciones están activas.
- Aparecen los menús de almacenes, ubicaciones y rutas en el menú de configuración.

### M13.2 · Creación de los almacenes

**Qué es.** Crear un almacén por cada área que guarda mercancía: general, cocina, ama de llaves, lavandería, mantenimiento, administración y los demás espacios de guarda.

**Para qué.** Decisión 21. Hoy hay mercancía repartida en espacios que nadie controla en el sistema, y la dirección quiere ver cuánto tiene cada área. Cada área lleva sus propios movimientos de entrada y salida.

**Cómo se hace.** Ruta: `Inventario → Configuración → Almacenes` (*Warehouses*). Crear cada uno con `Nuevo`, completando los campos obligatorios: `Almacén` (nombre completo), `Nombre corto` (*Short Name*) y `Dirección`. La documentación oficial advierte que el nombre corto **admite un máximo de cinco caracteres** y que aparece impreso en los documentos del almacén, de modo que conviene que sea reconocible.

**Criterios de aprobación.**
- Existe un almacén por cada área definida en la plantilla entregada por Koral.
- Cada uno tiene un nombre corto de hasta cinco caracteres, único y reconocible.
- La lista definitiva de almacenes quedó cerrada y aprobada.

### M13.3 · Configuración de la recepción en un paso

**Qué es.** Fijar que la mercancía se recibe y queda disponible con un solo documento.

**Para qué.** Decisión 25. Toda la mercancía llega al mismo almacén y allí se queda, así que separar recepción y almacenamiento agregaría una transacción adicional al ochenta y cinco por ciento de las compras sin aportar control. La verificación contra el pedido y la factura se sigue haciendo antes de validar, como hoy.

**Cómo se hace.** Ruta: `Inventario → Configuración → Almacenes`, abrir el almacén y fijar `Envíos entrantes` (*Incoming Shipments*) en la opción de recepción en un paso.

**Criterios de aprobación.**
- Una recepción de prueba genera un solo documento.
- La mercancía queda disponible en el almacén al validar.

### M13.4 · Recorridos automáticos para productos de destino fijo

**Qué es.** Configurar, en los productos que siempre van directo a otra área, un recorrido que los dirija solo al almacén que corresponde al recibirlos.

**Para qué.** Decisión 25, excepción prevista. Evita que el almacenista tenga que mover a mano lo que siempre tiene el mismo destino.

**Cómo se hace.** Ruta: `Inventario → Configuración → Rutas` (*Routes*) para revisar y crear el recorrido, y luego asignarlo en la ficha del producto o en su categoría, según la documentación oficial de rutas, que permite aplicarlas en `Inventario → Configuración → Categorías de productos` o en `Inventario → Productos → Productos`.

**Criterios de aprobación.**
- Los productos con destino fijo tienen su recorrido asignado.
- Una recepción de prueba de uno de esos productos lo deja en el almacén destino sin intervención manual.

---

## M14 · Ubicaciones, zonas y conteos cíclicos

**Origen:** decisiones 13 y 22, y definición 4. **Resultado:** la estructura física completa dentro de cada almacén, con códigos de barras y frecuencia de conteo.

### M14.1 · Recepción y validación de la plantilla de ubicaciones

**Qué es.** Revisar la plantilla de almacenes y ubicaciones que entrega Koral antes de cargarla.

**Para qué.** Decisión 22. Las zonas replican la realidad física del espacio. Si la plantilla no corresponde con lo que hay, se carga una estructura que nadie reconoce y el conteo por zonas no funciona.

**Cómo se hace.** Revisión documental contra la plantilla entregada: que cada fila sea un sitio físico real, que los niveles vayan de lo general a lo específico, y que el código de almacén de cada fila exista entre los almacenes creados en M13.

**Criterios de aprobación.**
- Cada fila de la plantilla corresponde a un sitio físico donde efectivamente se guarda algo.
- Ningún nivel corresponde a una categoría de producto en lugar de a un lugar.
- Todos los códigos de almacén referenciados existen.

### M14.2 · Creación de las zonas dentro de cada almacén

**Qué es.** Crear las zonas que replican la realidad física de cada almacén: en el almacén general, los anaqueles, la cava, el piso principal, la oficina de artículos de alto valor y el pasillo exterior.

**Para qué.** Decisión 22. Es la división que permite contar por partes en lugar de contar todo el almacén de una vez.

**Cómo se hace.** Ruta: `Inventario → Configuración → Ubicaciones` (*Locations*). Crear cada zona con `Nuevo`, indicando `Nombre de ubicación`, la `Ubicación padre` que la contiene (el almacén) y el `Tipo de ubicación` en `Interna`. La documentación oficial explica que las ubicaciones se listan después según su jerarquía, formando el árbol.

**Criterios de aprobación.**
- Cada almacén tiene sus zonas creadas bajo él.
- El árbol de ubicaciones refleja la plantilla aprobada.

### M14.3 · Creación de las ubicaciones puntuales

**Qué es.** Crear, dentro de cada zona, las ubicaciones concretas donde se guarda cada cosa.

**Para qué.** Decisión 22. Es el nivel al que llega el almacenista cuando busca o cuando cuenta.

**Cómo se hace.** Misma ruta: `Inventario → Configuración → Ubicaciones`, con la zona como `Ubicación padre`.

**Criterios de aprobación.**
- Las ubicaciones puntuales existen bajo su zona.
- Una persona que no participó en la carga puede ubicar físicamente cualquier ubicación del sistema leyendo su nombre.

### M14.4 · Carga de los códigos de barras de ubicación

**Qué es.** Asignar a cada ubicación su propio código de barras e imprimir las etiquetas para colocarlas en el sitio.

**Para qué.** Definición 4 y decisión 13. Es lo que hace viable el conteo con lector en un almacén con zonas: el lector identifica tanto el producto como el sitio donde está.

**Cómo se hace.** Ruta: `Inventario → Configuración → Ubicaciones`, abrir cada ubicación y completar el campo `Código de barras`. La documentación oficial indica que este campo se usa con la aplicación de Código de barras.

**Criterios de aprobación.**
- Toda ubicación tiene su código de barras cargado y sin repeticiones.
- Las etiquetas están impresas y colocadas físicamente.
- Un conteo de prueba con lector identifica correctamente la ubicación.

### M14.5 · Configuración de la frecuencia de conteo por zona

**Qué es.** Asignar a cada zona cada cuántos días toca contarla, con frecuencia mínima semanal.

**Para qué.** Decisión 22. El inventario del sistema está desalineado desde 2024, y una toma anual no evita que vuelva a pasar. Contar seguido y por partes pequeñas es lo que mantiene la foto alineada. Hoy se cuenta a diario de forma manual, lo que la propia dirección reconoció como insostenible.

**Cómo se hace.** Ruta: `Inventario → Configuración → Ubicaciones`, abrir la ubicación y en la sección `Conteo cíclico` (*Cyclic Counting*) cargar el número de días en el campo `Frecuencia de inventario` (*Inventory Frequency*), que viene en cero por defecto. La documentación oficial precisa que, después de aplicar el primer ajuste de inventario en esa ubicación, el sistema calcula automáticamente la siguiente fecha de conteo a partir de ese valor, y la muestra en el campo `Próximo esperado`.

**Criterios de aprobación.**
- Cada zona tiene su frecuencia cargada, ninguna superior a siete días.
- Después de un conteo de prueba, el sistema calcula y muestra la próxima fecha esperada.
- El listado de conteos vencidos es consultable y comprensible para el almacenista.

### M14.6 · Ubicaciones de pérdida de inventario

**Qué es.** Crear las ubicaciones especiales contra las que se registran las mermas y los ajustes, con su cuenta contable propia.

**Para qué.** Decisión 31. La merma se registra en una cuenta de gasto separada, para poder consultarla por producto, período y zona, distinguida de las diferencias de conteo. Hoy la merma aparece como un faltante genérico en el conteo, sin poder distinguir vencimiento, daño o error, y por lo tanto sin poder gestionar la causa.

**Cómo se hace.** Ruta: `Inventario → Configuración → Ubicaciones`. La documentación oficial indica que la lista viene filtrada por ubicaciones `Internas`, de modo que hay que quitar ese filtro para ver todas. Crear la ubicación con `Nuevo`, fijar el `Tipo de ubicación` en `Pérdida de inventario` (*Inventory Loss*) y cargar la cuenta en el campo `Cuenta de pérdida` (*Loss Account*), en la sección de información contable. Las mismas cuentas se pueden alcanzar desde `Contabilidad → Configuración → Ajustes`, sección de valoración de inventario, siguiendo el enlace a ubicaciones.

**Criterios de aprobación.**
- Existe una ubicación de pérdida de inventario destinada a merma, con su cuenta de gasto propia.
- Está separada de la ubicación que usa el sistema para las diferencias de ajuste.
- Una merma de prueba impacta la cuenta esperada.

---

## M15 · Almacén de resguardo de las tiendas

**Origen:** definición 1. **Resultado:** la mercancía de las tiendas bajo control físico del hotel pero fuera de su valoración de inventario.

### M15.1 · Activación de la mercancía de terceros

**Qué es.** Encender la función que permite indicar que una existencia pertenece a un tercero.

**Para qué.** Definición 1. Esa mercancía se recibe, se cuenta y se mueve como cualquier otra, pero no suma al valor del inventario del hotel: no infla el activo del balance ni el costo, porque no es suya.

**Cómo se hace.** Ruta: `Inventario → Configuración → Ajustes`, sección `Trazabilidad` (*Traceability*), activar `Consignación` (*Consignment*) y guardar.

**Criterios de aprobación.**
- La opción está activa.
- El campo de propietario aparece disponible en las recepciones.

### M15.2 · Creación del almacén de resguardo

**Qué es.** Crear el almacén donde queda físicamente la mercancía de las tiendas.

**Para qué.** Definición 1. El hotel controla lo que entra y lo que sale de ese espacio, aunque la mercancía no sea suya.

**Cómo se hace.** Ruta: `Inventario → Configuración → Almacenes`, con el mismo procedimiento de M13.2. Sus ubicaciones se crean como en M14.

**Criterios de aprobación.**
- El almacén existe con su nombre corto propio.
- Sus ubicaciones están creadas y etiquetadas.

### M15.3 · Alta de las tiendas como terceros propietarios

**Qué es.** Cargar cada tienda como contacto, para poder indicarla como propietaria de la mercancía.

**Para qué.** Definición 1. Es el registro contra el que se marca la propiedad de las existencias y contra el que se hará la liquidación periódica.

**Cómo se hace.** Ruta: `Contactos`, con el procedimiento de M11.2.

**Criterios de aprobación.**
- Cada tienda existe como contacto con su identificación fiscal.
- Está marcada como proveedor, para poder emitirle el documento de liquidación.

### M15.4 · Procedimiento de recepción en resguardo

**Qué es.** Documentar y probar el circuito de recepción de mercancía de las tiendas.

**Para qué.** Definición 1. La tienda entrega y se recibe indicándola como propietaria, sin factura de compra. Es un circuito distinto al de compra normal, y quien lo opera tiene que tenerlo claro.

**Cómo se hace.** La documentación oficial precisa que la mercancía en consignación no se compra al proveedor: no hay cotización ni orden de compra, de modo que **cada recepción de mercancía en resguardo se crea manualmente**. En `Inventario`, sección de recepciones, crear el documento indicando la tienda tanto en `Recibir de` como en `Asignar propietario` (*Assign Owner*). La documentación advierte que ambos campos deben coincidir, porque la mercancía recibida del proveedor será propiedad de ese mismo proveedor.

**Criterios de aprobación.**
- Una recepción de prueba en resguardo se registra con propietario y no genera valoración en el inventario del hotel.
- El reporte de existencias distingue la mercancía propia de la de terceros.
- El procedimiento está escrito y el personal de almacén lo conoce.

### M15.5 · Circuito de liquidación

**Qué es.** Dejar definido cómo se cruza lo vendido, se le compra a la tienda esa cantidad y ella emite una sola factura al hotel por el período.

**Para qué.** Definición 1. Es lo que cierra el hueco fiscal: sin ese documento el hotel vende mercancía sin respaldo de compra, paga el IVA completo de esas ventas sin crédito fiscal que descontar, y no puede deducir ese costo del impuesto sobre la renta.

**Cómo se hace.** Depende de condiciones que todavía no están acordadas con las tiendas. **Esta tarea está bloqueada** hasta que se defina la periodicidad de la liquidación, si se liquida por lo vendido o por lo consumido, y quién asume las mermas y faltantes de esa mercancía mientras está bajo custodia del hotel.

**Criterios de aprobación.**
- Las tres condiciones pendientes están acordadas por escrito con las tiendas.
- El circuito está configurado y probado de punta a punta con un período de prueba.
- No se recibe mercancía en resguardo antes de cerrar este punto.

---

## M16 · Estructura de habitaciones, activos y equipos

**Origen:** decisión 21 y definición 3. **Resultado:** las habitaciones como ubicaciones de consumibles, y los activos con su doble registro contable y de mantenimiento.

### M16.1 · Estructura de ubicaciones de habitaciones

**Qué es.** Crear la estructura de habitaciones por módulo y número dentro del almacén correspondiente.

**Para qué.** Decisión 21 y definición 3. Los consumibles de habitación, como el agua de cortesía y las amenidades, van por inventario, con la habitación como ubicación. La estructura por módulo responde a poder consultar qué hay en cada uno.

**Cómo se hace.** Ruta: `Inventario → Configuración → Ubicaciones`, creando el nivel de módulo como ubicación padre y cada habitación colgando de él.

**Criterios de aprobación.**
- Cada habitación existe como ubicación bajo su módulo.
- Se puede consultar el inventario de un módulo completo y el de una habitación individual.

### M16.2 · Registro contable de los activos

**Qué es.** Cargar los activos de habitación como activos contables, para su depreciación.

**Para qué.** Definición 3. El módulo de activos responde a cuánto vale y cuánto se deprecia. **No guarda ubicación física**: esa pregunta la responde el otro registro.

**Cómo se hace.** Ruta: `Contabilidad → Contabilidad → Activos` (*Assets*) para el registro de cada activo, y `Contabilidad → Configuración → Modelos de activos` (*Assets Models*) para definir las reglas de depreciación por tipo. Las cuentas que generan activos automáticamente se configuran desde `Contabilidad → Configuración → Plan de cuentas`.

**Criterios de aprobación.**
- Los activos de habitación están registrados con su valor y su plazo de depreciación.
- La depreciación de un mes de prueba se calcula correctamente.

### M16.3 · Registro de equipos para mantenimiento

**Qué es.** Cargar los mismos activos como equipos, con su ubicación de uso.

**Para qué.** Definición 3. El registro de equipos responde a dónde está y qué mantenimiento lleva. Son dos necesidades distintas que suelen confundirse: mezclarlas deja una de las dos preguntas sin respuesta.

**Cómo se hace.** Ruta: `Mantenimiento → Equipos → Máquinas y herramientas` (*Equipment → Machines & Tools*). Las categorías de equipo se crean en `Mantenimiento → Configuración → Categorías de equipo` y los equipos de mantenimiento en `Mantenimiento → Configuración → Equipos de mantenimiento`.

**Criterios de aprobación.**
- Cada activo de habitación existe también como equipo, con su ubicación de uso.
- Una solicitud de mantenimiento de prueba se registra contra el equipo correcto.
- Está claro para el usuario cuál registro consulta para qué pregunta.

### M16.4 · Ubicaciones de activos por área

**Qué es.** Crear el almacén de activos con sus ubicaciones por área: cocina, bar, habitaciones, recepción.

**Para qué.** Permite ubicar físicamente cualquier equipo del hotel, no solo los de habitación.

**Cómo se hace.** Mismo procedimiento de M13.2 para el almacén y M14.2 para las ubicaciones, con el área como primer nivel y el número de habitación como nivel siguiente donde aplique.

**Criterios de aprobación.**
- El almacén de activos existe con sus áreas como ubicaciones.
- Las habitaciones aparecen como ubicaciones de activos, además de como ubicaciones de consumibles.

---

## M17 · Control de lotes y fecha de vencimiento

**Origen:** decisión 26. **Resultado:** todo el catálogo de alimentos y bebidas con trazabilidad por lote y vencimiento.

### M17.1 · Activación de la trazabilidad

**Qué es.** Encender el control de lotes y el control de fechas de vencimiento.

**Para qué.** Decisión 26. Se extendió a todo el catálogo de alimentos y bebidas para llevar un control más preciso del inventario de alimentos. A cambio, el sistema alerta lo próximo a vencer y permite despachar primero lo más antiguo.

**Cómo se hace.** Ruta: `Inventario → Configuración → Ajustes`, sección `Trazabilidad`, activar `Lotes y números de serie` (*Lots & Serial Numbers*) y `Fechas de caducidad` (*Expiration Dates*), y guardar. La documentación oficial señala que la opción de fechas de caducidad solo aparece una vez activados los lotes.

**Criterios de aprobación.**
- Ambas opciones están activas.
- Aparece el menú `Inventario → Productos → Lotes / Números de serie`.

### M17.2 · Configuración de la trazabilidad por producto

**Qué es.** Marcar, en cada producto de alimentos y bebidas, que su seguimiento es por lote y que lleva fecha de vencimiento.

**Para qué.** Decisión 26. Cada recepción y cada salida de esos productos exige indicar el lote y su fecha de vencimiento, incluidas las salidas diarias a cocina.

**Cómo se hace.** En la ficha del producto, en `Inventario → Productos → Productos`, pestaña `Inventario`, fijar el campo de seguimiento en `Por lotes` y activar la casilla de fecha de caducidad, que habilita los plazos de alerta.

**Criterios de aprobación.**
- Todo el catálogo de alimentos y bebidas tiene el seguimiento por lote activo.
- Una recepción de prueba exige el lote y la fecha para poder validarse.
- El reporte de próximos a vencer devuelve resultados correctos.

### M17.3 · Configuración de la estrategia de salida

**Qué es.** Fijar que se despache primero lo que vence antes.

**Para qué.** Decisión 26. Es la contrapartida operativa del esfuerzo de capturar el lote: si el sistema no ordena la salida por vencimiento, el dato no sirve de nada.

**Cómo se hace.** Ruta: `Inventario → Configuración → Ubicaciones`, sección `Logística`, campo `Estrategia de remoción` (*Removal Strategy*). Entre las opciones que documenta Odoo está `Primero en expirar, primero en salir` (*First Expiry First Out*, FEFO). También se puede fijar a nivel de categoría de producto.

**Criterios de aprobación.**
- La estrategia por vencimiento está aplicada en las ubicaciones de alimentos y bebidas.
- Una salida de prueba propone el lote más próximo a vencer.

### M17.4 · Ajuste de la planilla de conteo

**Qué es.** Rediseñar la planilla con la que el almacenista sale a contar, para que capture lote y vencimiento por línea.

**Para qué.** Decisión 26, consecuencia expresa. En la toma física inicial cada línea de conteo de estos productos debe traer lote y vencimiento, lo que cambia la planilla y hay que preverlo antes de la toma.

**Cómo se hace.** La hoja de conteo se genera desde `Inventario → Operaciones → Inventario físico`, con la acción `Imprimir → Hoja de conteo`. Se verifica que incluya las columnas de lote y vencimiento para los productos que las requieren, y se ajusta el procedimiento de conteo en consecuencia.

**Criterios de aprobación.**
- La planilla incluye lote y vencimiento para los productos rastreados.
- El almacenista hizo una prueba de conteo con la planilla nueva.
- El tiempo estimado de la toma física se recalculó considerando esta captura adicional.

---

## M18 · Método de costo y momento de valoración

**Origen:** decisiones 23 y 24. **Resultado:** costo promedio y valoración periódica al cierre del mes, con validación del equipo contable.

### M18.1 · Configuración del método de costo

**Qué es.** Fijar el costo promedio como método de valoración de las existencias.

**Para qué.** Decisión 23. El costo de cada producto se recalcula solo con cada compra, y las variaciones de precio se reparten entre las unidades en existencia. Es el costo con el que se valora cada salida, cada plato y cada merma. Se evaluó usar el costo de la última compra, que refleja mejor el costo de reposición en una economía inflacionaria, pero el sistema solo ofrece tres métodos y ese no está entre ellos.

**Cómo se hace.** Ruta: `Contabilidad → Configuración → Ajustes`, sección `Valoración de inventario`, campo `Método de costo de inventario` (*Inventory Cost Method*). La documentación oficial lista exactamente tres opciones: `Precio estándar`, `Primeras entradas, primeras salidas (FIFO)` y `Costo promedio (AVCO)`. Se selecciona el costo promedio. Este valor se puede sobrescribir por categoría en la ficha de la categoría de producto.

**Criterios de aprobación.**
- El método está fijado en costo promedio a nivel de compañía.
- Las categorías que requieran un tratamiento distinto lo tienen justificado por escrito.
- Dos compras de prueba del mismo producto a precios distintos recalculan el costo como se espera.

### M18.2 · Configuración de la valoración periódica

**Qué es.** Fijar que el inventario impacta la contabilidad al cierre del mes y no movimiento por movimiento.

**Para qué.** Decisión 24. Se quería que las devoluciones y ajustes del mes se netearan antes de llegar a la contabilidad, en lugar de generar movimientos contables cruzados como ocurría en la versión anterior. Durante el mes los movimientos de almacén no tocan la contabilidad: se van acumulando en un reporte.

**Cómo se hace.** Ruta: `Contabilidad → Configuración → Ajustes`, sección `Valoración de inventario`, campo `Valoración de inventario` (*Inventory Valuation*), opción `Periódica (al cierre)` (*Periodic (at closing)*). La documentación oficial explica que con esta opción la valoración solo se actualiza al generar el asiento del proceso de cierre, y que los movimientos se siguen registrando físicamente aunque no se sincronicen automáticamente con la contabilidad.

**Criterios de aprobación.**
- La valoración está fijada en periódica.
- Un movimiento de almacén de prueba no genera asiento contable inmediato.
- El reporte de valoración muestra la diferencia acumulada.

### M18.3 · Configuración del asiento de cierre en modo manual

**Qué es.** Dejar el proceso de cierre en modo manual, de forma que el sistema calcule pero no contabilice solo.

**Para qué.** Decisión 24, punto expreso. El cálculo lo hace el sistema completo: nadie arma nada a mano. Pero el equipo contable revisa antes de que el asiento afecte los libros, no después. La modalidad totalmente automática se descartó porque contabiliza sin pasar por revisión, y cualquier corrección tendría que hacerse sobre un asiento ya registrado.

**Cómo se hace.** Ruta: `Contabilidad → Configuración → Ajustes`, sección `Valoración de inventario`, campo `Valoración periódica` (*Periodic Valuation*), fijado en `Manual`. La documentación oficial lista las tres opciones disponibles: `Manual`, `Diaria` y `Mensual`, siendo estas dos últimas las que automatizan la contabilización.

**Criterios de aprobación.**
- El campo está en `Manual`.
- No existe ninguna acción programada que contabilice el cierre automáticamente.
- Un cierre de prueba genera el asiento en borrador y espera confirmación.

### M18.4 · Configuración de las cuentas de valoración

**Qué es.** Asignar la cuenta de valoración, la cuenta de variación y el diario donde se registra el asiento de inventario.

**Para qué.** Es lo que hace que el asiento mensual llegue a las cuentas correctas. Sin esto, el cierre no se puede generar.

**Cómo se hace.** Ruta: `Contabilidad → Configuración → Ajustes`, sección `Valoración de inventario`. El campo `Cuenta de valoración` (*Valuation Account*) registra el valor del inventario como activo del balance. Desde el enlace interno junto a ese campo se abre la cuenta y se actualiza la `Cuenta de variación` (*Variation Account*), que es donde se registran las variaciones del período. El campo `Diario` define dónde se contabilizan los asientos de valoración.

**Criterios de aprobación.**
- Las tres configuraciones están cargadas y aprobadas por Contabilidad.
- Un cierre de prueba genera el asiento contra las cuentas esperadas.

### M18.5 · Prueba del cierre mensual completo

**Qué es.** Ejecutar el proceso de cierre de inventario de punta a punta con datos de prueba.

**Para qué.** Decisión 24. Es el circuito que el equipo contable va a ejecutar todos los meses, y tiene que estar probado antes de la salida. La condición operativa es tener el inventario revisado antes del cierre de cada mes.

**Cómo se hace.** Ruta: `Contabilidad → Revisión → Valoración de inventario` (*Review → Inventory Valuation*). El reporte muestra el saldo inicial, la variación de existencias y el saldo final. Según la documentación oficial, el procedimiento es: abrir el reporte, ajustar la fecha de cierre si hace falta con el selector `A fecha`, pulsar `Generar asiento` (*Generate Entry*), revisar el borrador de `Cierre de existencias` y publicarlo con `Publicar`.

**Criterios de aprobación.**
- El reporte muestra correctamente, de un lado el valor que la contabilidad tiene registrado y del otro el valor real según las existencias.
- El asiento generado corresponde a la diferencia entre ambos valores.
- El equipo contable ejecutó el procedimiento completo al menos una vez y lo tiene documentado.

---

## M19 · Reposición por mínimos

**Origen:** decisión 27. **Resultado:** el cálculo de qué está por debajo del mínimo automatizado, con la decisión de compra en manos de una persona.

### M19.1 · Definición de los mínimos por producto y almacén

**Qué es.** Cargar, para cada producto que lo requiera, la cantidad mínima por almacén.

**Para qué.** Decisión 27. Cuando la existencia baja de ese número, el sistema lo lista y una persona decide qué pedir. El beneficio principal es dejar de contar y calcular a mano.

**Cómo se hace.** Ruta: `Inventario → Operaciones → Reabastecimiento` (*Replenishment*). Crear con `Nuevo` y completar los campos que documenta Odoo: `Producto`, `Ubicación` donde se almacena, `Mín` (la cantidad mínima por debajo de la cual se dispara la regla) y `Máx` (la cantidad hasta la que se repone). También se puede crear desde el botón `Reglas de reabastecimiento` de la ficha del producto.

**Criterios de aprobación.**
- Los productos de consumo recurrente tienen su mínimo cargado por almacén.
- Los valores fueron validados con el área que consume, no fijados por criterio del implantador.

### M19.2 · Configuración del modo aviso

**Qué es.** Fijar que la regla solo liste el producto, sin generar el pedido sola.

**Para qué.** Decisión 27. El modo automático genera el pedido solo, pero funciona sobre el stock que el sistema tenga registrado. Con el inventario aún por realinear, eso produciría compras equivocadas.

**Cómo se hace.** Ruta: `Inventario → Operaciones → Reabastecimiento`. Según la documentación oficial, la columna `Disparador` (*Trigger*) no está visible por defecto: hay que habilitarla con el icono de ajustes y marcar la casilla correspondiente. Luego se fija cada regla en `Manual` en lugar de `Automático`.

**Criterios de aprobación.**
- Todas las reglas están en modo manual.
- Un producto por debajo del mínimo aparece listado sin que se genere una orden de compra.
- Compras sabe dónde consultar ese listado.

### M19.3 · Activación diferida hasta después de la toma física

**Qué es.** Dejar establecido que los mínimos no se activan hasta que el inventario refleje la realidad.

**Para qué.** Decisión 27. Un mínimo calculado sobre existencias falsas genera compras equivocadas. La decisión prevé pasar a automático producto por producto cuando los mínimos estén validados con datos.

**Cómo se hace.** Control de proyecto: la carga de los mínimos puede hacerse antes, pero su uso operativo arranca después de M36.

**Criterios de aprobación.**
- Está documentado que la activación es posterior a la toma física.
- Después de la toma, se revisó una muestra de mínimos contra las existencias reales antes de ponerlos en uso.

---

## M20 · Merma, ajustes y cuentas de destino de consumo

**Origen:** decisiones 10, 31 y 33. **Resultado:** la merma registrada al ocurrir y separada del ajuste de conteo, y el gasto imputado al área que consume.

### M20.1 · Configuración del registro de merma

**Qué es.** Dejar operativo el registro de merma, con fecha, cantidad, responsable y motivo.

**Para qué.** Decisión 31. Hoy la merma aparece como un faltante genérico en el conteo, sin poder distinguir vencimiento, daño o error de conteo, y por lo tanto sin poder gestionar la causa. Separarla es lo que permite que Gerencia vea cuánto cuesta al mes y por área.

**Cómo se hace.** Ruta: `Inventario → Operaciones → Desecho` (*Scrap*). Crear con `Nuevo`, indicando `Producto`, `Cantidad`, `Ubicación de origen`, `Ubicación de desecho` (que apunta a la ubicación de pérdida creada en M14.6) y, según documenta Odoo, un `Motivo de desecho` (*Scrap Reason*). También se puede registrar durante una operación, desde el menú de acciones del documento correspondiente.

**Criterios de aprobación.**
- Una merma de prueba queda registrada con fecha, cantidad, responsable y motivo.
- La merma impacta la cuenta de gasto separada y no la de ajustes.
- El total de mermas se puede consultar por producto, por período y por zona.

### M20.2 · Separación entre quien cuenta y quien ajusta

**Qué es.** Configurar los accesos de modo que el almacenista registre los conteos y Contraloría realice los ajustes.

**Para qué.** Decisión 33. Un ajuste de inventario modifica el valor del almacén sin que exista una compra o una venta detrás, así que separar el conteo del ajuste es un control básico. Son dos manos distintas sobre la misma operación.

**Cómo se hace.** Se resuelve con permisos, y su configuración concreta pertenece a la tarea M35. Aquí queda registrado el requisito: el perfil de almacén permite registrar el conteo en `Inventario → Operaciones → Inventario físico`, y el perfil de Contraloría es el único que puede aplicar la corrección de cantidad y de valor.

**Criterios de aprobación.**
- El requisito está documentado como insumo de M35.
- Después de configurados los perfiles, una prueba confirma que el almacenista no puede aplicar el ajuste.

### M20.3 · Cuentas de gasto por destino de consumo

**Qué es.** Configurar las ubicaciones de consumo de cada área con su propia cuenta de gasto.

**Para qué.** Decisión 10, consecuencia de configuración expresa. El producto se transfiere al almacén del área y, al salir de ahí hacia el consumo, se determina la cuenta de gasto que corresponde: la misma agua va a atención al huésped si sale de ama de llaves y a costo de alimentos y bebidas si sale del bar. Y hay un punto técnico que no se puede pasar por alto: **un movimiento entre dos almacenes no genera asiento contable**, porque la mercancía sigue siendo del hotel y solo cambió de sitio. Para que la salida pegue en la cuenta correcta, tiene que registrarse como consumo contra una ubicación que lleve su propia cuenta, no como un traslado.

**Cómo se hace.** Ruta: `Inventario → Configuración → Ubicaciones`. Crear una ubicación de consumo por área, con el tipo de ubicación que corresponda a una salida del inventario, y cargarle su cuenta contable en la sección de información contable de la ficha, del mismo modo que se hace con la cuenta de pérdida en M14.6.

**Criterios de aprobación.**
- Cada área de consumo tiene su ubicación con su cuenta de gasto.
- Una salida de prueba desde ama de llaves y otra desde el bar del mismo producto impactan cuentas distintas.
- El procedimiento de expedición está documentado para el personal de almacén.

### M20.4 · Límite de merma por producto

**Qué es.** Dejar señalado que el tope de merma por producto es un desarrollo y no una configuración.

**Para qué.** Decisión 33. El sistema no tiene un tope de merma configurable. Mientras no exista, opera como control por reporte.

**Cómo se hace.** No se configura. Se registra en el catálogo de desarrollos, se presupuesta y se aprueba por separado. No bloquea la salida a producción.

**Criterios de aprobación.**
- Está documentado como desarrollo, con su alcance definido.
- Mientras tanto, existe un reporte de merma por producto que permite el control manual.

---

# Fase 5 · Compras y ventas

---

## M21 · Circuito de compras

**Origen:** decisiones 25, 28, 29 y 32. **Resultado:** el circuito de compra operativo, sin aprobación en el sistema y con la factura controlada contra lo recibido.

### M21.1 · Configuración del control de factura contra lo recibido

**Qué es.** Fijar que la factura de mercancía se registra por lo que el almacén dio por recibido, y la de servicios por lo pedido.

**Para qué.** Decisión 29. El riesgo que se quería cerrar es pagar mercancía que no entró. Aplicar el mismo criterio a los servicios habría trabado su facturación sin motivo, porque en ellos no hay recepción física que registrar.

**Cómo se hace.** Ruta: `Compras → Productos → Productos`, pestaña `Compra`, sección `Facturas de proveedor`, campo `Política de control` (*Control Policy*). La documentación oficial precisa que las dos opciones son `En cantidades pedidas` (*On ordered quantities*), que permite crear la factura apenas se confirma el pedido, y `En cantidades recibidas` (*On received quantities*), que solo la permite después de que parte del pedido haya sido recibido. También precisa que la política por defecto de un producto la determina su tipo.

**Criterios de aprobación.**
- Todos los productos de mercancía están en cantidades recibidas.
- Todos los servicios están en cantidades pedidas.
- Una prueba confirma que no se puede facturar mercancía sin recepción previa.

### M21.2 · Activación del control de tres vías

**Qué es.** Encender la verificación que compara el pedido, la recepción y la factura.

**Para qué.** Refuerza la decisión 29: señala al usuario cuándo una factura no cuadra con lo que se pidió y lo que llegó, antes de pagarla.

**Cómo se hace.** Ruta: `Compras → Configuración → Ajustes`, sección `Facturación`, activar `Verificación en tres pasos` (*3-way matching*) y guardar. La documentación oficial explica que con esta opción las facturas de proveedor muestran el campo `Debería pagarse` (*Should Be Paid*) en la pestaña `Más información`, con los valores `Sí`, `No` y `Excepción`, y que este último aparece cuando el sistema detecta una discrepancia. Aclara además que el sistema **señala la discrepancia pero no bloquea** el registro.

**Criterios de aprobación.**
- La opción está activa.
- Una factura de prueba con cantidad distinta a la recibida queda marcada como excepción.
- El equipo de cuentas por pagar sabe qué hacer cuando aparece esa marca.

### M21.3 · Verificación de la ausencia de aprobación por monto

**Qué es.** Confirmar que no se activa ninguna regla de aprobación de compras dentro del sistema.

**Para qué.** Decisión 28. Lo que la operación necesita no es aprobar por monto sino por rubro: como lo planteó la dirección, mil dólares en comida es una compra normal, mientras que trescientos en otro rubro puede no serlo. El sistema solo permite condicionar por monto; condicionar por categoría de producto exige desarrollo, y se decidió no hacerlo. La decisión 32 queda sin efecto como consecuencia: al no haber aprobación, no hay aprobador que designar.

**Cómo se hace.** Ruta: `Compras → Configuración → Ajustes`. Verificar que la opción de aprobación de órdenes de compra permanece desactivada.

**Criterios de aprobación.**
- La opción está desactivada.
- Cualquier usuario de compras confirma un pedido de cualquier monto sin que el sistema lo detenga.
- Está documentado que la autorización se sigue gestionando por el canal actual.

### M21.4 · Prueba del circuito completo de compra

**Qué es.** Ejecutar una compra de punta a punta: pedido, recepción, factura y pago.

**Para qué.** Es el circuito que Compras, Almacén y Cuentas por pagar van a usar todos los días.

**Cómo se hace.** Se crea la solicitud en `Compras → Órdenes → Solicitudes de presupuesto`, se confirma, se recibe en `Inventario`, se factura desde el propio pedido con `Crear factura` y se registra el pago.

**Criterios de aprobación.**
- El circuito se completó sin intervención del implantador.
- La clasificación analítica se asignó sola donde debía, según M05.5.
- El asiento contable resultante es el esperado.
- Cada área involucrada ejecutó su paso.

---

## M22 · Acuerdos con proveedores y plantillas de pedido

**Origen:** decisión 30. **Resultado:** los consumos con tope autorizado bajo acuerdo con vigencia, y los pedidos repetitivos precargados.

### M22.1 · Activación de los acuerdos de compra

**Qué es.** Encender la función de acuerdos con proveedores.

**Para qué.** Decisión 30. El caso que la dirección describió es el de consumos con tope autorizado: combustible por un monto mensual, o una cantidad definida de botellones de agua por oficina.

**Cómo se hace.** Ruta: `Compras → Configuración → Ajustes`, sección `Órdenes`, activar `Acuerdos de compra` (*Purchase Agreements*) y guardar.

**Criterios de aprobación.**
- La opción está activa.
- Aparece el menú `Compras → Órdenes → Acuerdos de compra`.

### M22.2 · Carga de los acuerdos con precio pactado y vigencia

**Qué es.** Crear un acuerdo por cada consumo con tope autorizado, con proveedor, productos, precio pactado, cantidad autorizada y fecha de vencimiento.

**Para qué.** Decisión 30. Cada pedido toma ese precio y va descontando de la cantidad, y el sistema muestra cuánto queda y cuándo vence.

**Cómo se hace.** Ruta: `Compras → Órdenes → Acuerdos de compra`, crear con `Nuevo`. Según la documentación oficial, se completa el `Proveedor`, el `Comprador`, el `Tipo de acuerdo` fijado en `Orden abierta` (*Blanket Order*), la `Moneda`, la `Validez del acuerdo` con su rango de fechas y el `Tipo de operación`. En las líneas se cargan los productos con su `Cantidad` y su `Precio unitario` pactado, y se confirma. La documentación precisa que el consumo se sigue en el campo `Ordenado` del acuerdo, y que una vez confirmado el acuerdo se añade una línea de proveedor en la pestaña `Compra` de cada producto incluido, con el proveedor, el precio y el acuerdo referenciados.

**Criterios de aprobación.**
- Cada consumo con tope autorizado tiene su acuerdo cargado.
- Un pedido generado desde el acuerdo toma el precio pactado.
- El sistema muestra cuánto queda de la cantidad autorizada y cuándo vence.

### M22.3 · Creación de las plantillas de pedido

**Qué es.** Crear listas de productos precargadas para generar los pedidos repetitivos sin volver a armarlos.

**Para qué.** Decisión 30. Es distinto del acuerdo: la plantilla ahorra la captura sin comprometer precio, porque el precio se negocia en cada compra. Es la solución para los pedidos repetitivos donde no hay tope pactado.

**Cómo se hace.** Ruta: `Compras → Configuración → Ajustes` para habilitar la función, y luego `Compras → Órdenes → Acuerdos de compra` para crear la plantilla, que es un tipo de acuerdo distinto de la orden abierta.

**Criterios de aprobación.**
- Existen plantillas para los pedidos que se repiten.
- Un pedido generado desde plantilla trae los productos precargados y permite definir el precio.
- Compras confirma que las plantillas corresponden a sus compras recurrentes reales.

---

## M23 · Circuito de ventas y control de descuentos

**Origen:** decisiones 15, 16 y 20. **Resultado:** el circuito de venta operativo, con el descuento bloqueado salvo para el grupo autorizado.

### M23.1 · Configuración de los descuentos en ventas

**Qué es.** Definir si la función de descuento está disponible en cotizaciones y facturas del escritorio.

**Para qué.** Decisión 20. El precio cobrado debe coincidir siempre con la lista, salvo cuando interviene alguien del grupo autorizado.

**Cómo se hace.** Ruta: `Ventas → Configuración → Ajustes`, sección `Precios`, casilla `Descuentos` (*Discounts*). **Advertencia factual, ya recogida en la decisión 20:** fuera de la caja, el sistema habilita el descuento para todos los usuarios de venta o para ninguno. No existe una configuración estándar que lo restrinja a personas concretas en el escritorio.

**Criterios de aprobación.**
- La configuración escogida está aplicada y documentada.
- Está registrado que la restricción por persona fuera de la caja requiere desarrollo.

### M23.2 · Registro del desarrollo de restricción de descuentos

**Qué es.** Dejar formalizado que restringir el descuento a personas concretas fuera de la caja es un desarrollo.

**Para qué.** Decisión 20. En la caja sí se resuelve con configuración, y eso se hace en M25.4. Fuera de ella, no.

**Cómo se hace.** No se configura. Se documenta el alcance, se presupuesta y se aprueba por separado. No bloquea la salida a producción.

**Criterios de aprobación.**
- El desarrollo está documentado con su alcance.
- La dirección conoce que hasta que se desarrolle, el control fuera de la caja es procedimental.

### M23.3 · Asignación de listas de precios por segmento

**Qué es.** Asignar a cada cliente la lista de precios que le corresponde.

**Para qué.** Decisión 15. Es lo que hace que el precio del segmento se aplique solo, sin que el vendedor tenga que recordarlo.

**Cómo se hace.** En la ficha del cliente, pestaña `Ventas y compras`, campo de lista de precios. La documentación oficial precisa que si una cotización no tiene lista asignada, se aplica la lista por defecto, que es la primera de la lista sin grupo de país asignado.

**Criterios de aprobación.**
- Los clientes de cada segmento tienen su lista asignada.
- Una cotización de prueba a un cliente de cada segmento toma el precio correcto.

### M23.4 · Prueba del circuito completo de venta

**Qué es.** Ejecutar una venta de escritorio de punta a punta: cotización, confirmación, entrega y factura.

**Para qué.** Es el circuito de las ventas que no pasan por caja: eventos, agencias, arrendamientos.

**Cómo se hace.** Se crea la cotización en `Ventas → Órdenes → Cotizaciones`, se confirma, se entrega desde `Inventario` y se factura.

**Criterios de aprobación.**
- El circuito se completó sin intervención del implantador.
- La clasificación analítica se asignó correctamente.
- La factura salió con la numeración del diario correspondiente al punto de emisión.

---

# Fase 6 · Punto de venta

---

## M24 · Cajas del punto de venta

**Origen:** decisión 34. **Resultado:** una caja configurada por cada punto físico, cada una descontando de su almacén.

### M24.1 · Creación de las cajas

**Qué es.** Crear una configuración de punto de venta por cada punto físico de cobro.

**Para qué.** Decisión 34. El cierre por punto es la principal herramienta de control de efectivo. Con una sola caja para todo, un faltante no se puede atribuir a un punto concreto.

**Cómo se hace.** Ruta: `Punto de venta → Configuración → Puntos de venta` (*Point of Sales*), crear con `Nuevo` y asignar el nombre. La configuración detallada de cada una se abre desde `Punto de venta → Configuración → Ajustes`, seleccionando la caja en el desplegable superior.

**Criterios de aprobación.**
- Existe una caja por cada punto físico de cobro del hotel.
- Los nombres identifican el punto sin ambigüedad.

### M24.2 · Asignación del almacén de cada caja

**Qué es.** Vincular cada caja al almacén del área desde el que descuenta su inventario.

**Para qué.** Decisión 34. Cada punto descuenta del inventario de su área; con un solo destino, el inventario se descuenta de un solo lugar y no se sabe qué consumió cada punto.

**Cómo se hace.** Ruta: `Punto de venta → Configuración → Ajustes`, con la caja seleccionada, en la sección de inventario, asignando el almacén correspondiente.

**Criterios de aprobación.**
- Cada caja apunta al almacén de su área.
- Una venta de prueba en cada caja descuenta del almacén correcto.

### M24.3 · Vinculación con el diario contable

**Qué es.** Asociar cada caja con el diario de ventas de su punto de emisión.

**Para qué.** Decisión 7 y definición 2. Cada máquina fiscal lleva su propio correlativo, y el diario es lo que lo mantiene alineado.

**Cómo se hace.** Ruta: `Punto de venta → Configuración → Ajustes`, con la caja seleccionada, en la sección de facturación, asignando el diario de ventas creado en M04.1.

**Criterios de aprobación.**
- Cada caja apunta a su diario propio.
- Una venta de prueba toma el correlativo del diario esperado.

### M24.4 · Identificación de los cajeros

**Qué es.** Configurar que cada cajero se identifique con su clave al operar la caja.

**Para qué.** Decisiones 36 y 45. Cada diferencia queda asociada a un turno y a quien lo cerró. El cajero no necesita usuario del sistema para cobrar, pero sí debe quedar identificado.

**Cómo se hace.** Ruta: `Punto de venta → Configuración → Ajustes`, con la caja seleccionada, en la sección de interfaz, activar `Iniciar sesión con empleados` (*Log in with Employees*) y guardar. Al volver a la opción, se completan los campos de derechos `Avanzados`, `Básicos` y `Mínimos` con los empleados que corresponden a cada nivel. La documentación oficial precisa que dejar vacíos los campos de derechos mínimos y básicos permite el acceso a todos los empleados, y que dejar vacío el de derechos avanzados otorga esos permisos a los usuarios de Odoo. La clave personal de cada empleado se carga en el campo `Código PIN`, en la pestaña `Ajustes` de su ficha, sección de asistencia y punto de venta.

**Criterios de aprobación.**
- Cada cajero tiene su clave cargada.
- La caja exige identificación al iniciar y el nombre queda registrado en la venta.
- Los niveles de derechos corresponden a lo que cada persona debe poder hacer.

---

## M25 · Formas de pago y reglas de cierre de caja

**Origen:** decisiones 35, 36, 37, 44 y 45. **Resultado:** cada forma real de cobro separada, con su destino, y la caja que no cierra si no cuadra.

### M25.1 · Creación de las formas de pago

**Qué es.** Crear un medio de pago por cada forma real de cobro: efectivo en bolívares, efectivo en divisas, punto bancario, pago móvil y transferencia.

**Para qué.** Decisión 35. Lo que no está separado en el sistema no aparece separado en el cierre, y la conciliación se vuelve una reconstrucción manual. Es además lo que necesita el cobro de anticipos del hotel para conciliar automáticamente.

**Cómo se hace.** Ruta: `Punto de venta → Configuración → Métodos de pago` (*Payment Methods*). Crear uno por cada forma, indicando su diario de destino.

**Criterios de aprobación.**
- Existe un medio por cada forma real de cobro, sin agrupaciones.
- Cada uno apunta a su banco o caja de destino.
- El cierre de una sesión de prueba muestra cada medio por separado.

### M25.2 · Configuración de la referencia obligatoria

**Qué es.** Exigir el número de referencia en los medios que lo requieren.

**Para qué.** Decisión 35. Sin la referencia, conciliar un pago móvil o una transferencia contra el extracto obliga a buscarlo a mano.

**Cómo se hace.** En la ficha de cada método de pago, en `Punto de venta → Configuración → Métodos de pago`, activando la captura de referencia donde aplique.

**Criterios de aprobación.**
- Los medios electrónicos exigen referencia para poder validar el cobro.
- El efectivo no la exige.

### M25.3 · Verificación del impuesto a las transacciones en divisa

**Qué es.** Confirmar que el impuesto a las transacciones en divisa se aplica exactamente a los medios que corresponde.

**Para qué.** Decisión 35. Aplicarlo de más o de menos es un error fiscal. Lo resuelve el paquete venezolano; aquí solo se verifica el mapeo con los medios creados.

**Cómo se hace.** Los módulos de IGTF de la localización aplican el impuesto sobre los pagos en divisa, incluidos los del punto de venta. Se verifica cobrando con cada medio y revisando el resultado.

**Criterios de aprobación.**
- Un cobro en divisa aplica el impuesto.
- Un cobro en bolívares no lo aplica.
- El monto calculado es el correcto.

### M25.4 · Restricción de descuentos y precios en caja

**Qué es.** Configurar que solo los perfiles autorizados puedan modificar precios o aplicar descuentos en la caja.

**Para qué.** Decisión 20. En la caja esto sí se resuelve con la configuración estándar, a diferencia del escritorio.

**Cómo se hace.** Ruta: `Punto de venta → Configuración → Ajustes`, con la caja seleccionada. En la sección de precios se controlan los descuentos con las opciones `Descuentos globales` (*Global Discounts*), que permite descontar sobre el pedido completo, y `Descuentos por línea` (*Line Discounts*), que permite descontar producto por producto. La restricción de la modificación de precio a los responsables se activa con la opción `Restringir modificaciones de precio a los gerentes` (*Restrict Price Modifications to Managers*), que exige la clave de un perfil de gerente para alterar el precio.

**Criterios de aprobación.**
- Un cajero sin autorización no puede alterar el precio ni aplicar descuento.
- Una persona del grupo autorizado sí puede, y la operación queda registrada a su nombre.

### M25.5 · Configuración del descuadre cero

**Qué es.** Fijar en cero la diferencia tolerada al cerrar la caja.

**Para qué.** Decisión 37. La posición de la dirección es que la caja cuadra o no cierra. Configurarlo en cero convierte esa política en una regla del sistema y no en una expectativa.

**Cómo se hace.** Ruta: `Punto de venta → Configuración → Ajustes`, con la caja seleccionada, sección `Pago`, activar `Establecer diferencia máxima` (*Set Maximum Difference*) y cargar cero en el campo de monto autorizado de diferencia. La documentación oficial confirma que esta opción impide que los usuarios cierren la caja cuando hay una discrepancia.

**Criterios de aprobación.**
- Una caja con diferencia, por mínima que sea, no se puede cerrar.
- El mensaje que ve el cajero es claro sobre qué debe hacer.
- El procedimiento de autorización del gerente está documentado.

### M25.6 · Configuración del cierre por turno y el relevo

**Qué es.** Dejar operativo el arqueo por turno y el registro del efectivo entregado en cada relevo.

**Para qué.** Decisión 36. Es la forma en que se opera hoy y no se consideró necesario cambiarla. El sistema formaliza el arqueo por turno, que hasta ahora se anotaba en un cuaderno de novedades, y deja registrado el efectivo que pasa de mano en mano.

**Cómo se hace.** El arqueo de apertura y cierre lo gobierna el control de efectivo, que según el modelo del punto de venta se activa cuando la caja tiene al menos un método de pago en efectivo. Al abrir, el cajero confirma el efectivo inicial en el control de apertura; al cerrar, cuenta y el sistema compara con lo esperado. El registro del efectivo entregado en el relevo se documenta como procedimiento apoyado en ese arqueo de cierre.

**Criterios de aprobación.**
- La apertura exige contar el efectivo inicial.
- El cierre exige contar y compara con lo esperado.
- El procedimiento de relevo está escrito y probado con un cambio de turno real.

### M25.7 · Configuración de la emisión de comprobantes

**Qué es.** Fijar que toda venta emite comprobante fiscal, y que la factura con RIF se emite solo cuando el cliente la solicita.

**Para qué.** Decisión 44. Pedir los datos del cliente en cada venta frena la caja en barra y piscina sin aportar nada, porque el comprobante fiscal ya es documento válido. El huésped no entra en esta decisión: sus consumos van a la habitación y se facturan al salir.

**Cómo se hace.** Ruta: `Punto de venta → Configuración → Ajustes`, con la caja seleccionada, sección de facturación. La emisión en la máquina fiscal la resuelven los módulos de punto de venta y de impresora fiscal de la localización venezolana.

**Criterios de aprobación.**
- Una venta sin cliente emite comprobante fiscal válido.
- Una venta con solicitud de factura captura los datos del cliente y emite el documento con RIF.
- El cargo de consumos a la habitación sigue el circuito del sistema hotelero y no genera documento fiscal en la caja.

### M25.8 · Autorización de anulaciones

**Qué es.** Configurar que el cajero no pueda anular por su cuenta.

**Para qué.** Decisión 45. Un gerente autoriza tanto los descuadres como las anulaciones; son las dos operaciones que permiten modificar lo que la caja reporta al final del día. Requiere que haya un gerente disponible en cada turno.

**Cómo se hace.** Se resuelve con los niveles de derechos configurados en M24.4: la anulación queda entre las funciones de derechos avanzados, reservadas a los perfiles de gerencia.

**Criterios de aprobación.**
- Un cajero no puede anular una operación sin la clave de un gerente.
- La anulación queda registrada con la identificación de quien la autorizó.

---

## M26 · Restaurante: planos de mesa, comandas y pantalla del cajero

**Origen:** decisiones 38, 40 y 42. **Resultado:** cada zona de servicio con su plano, las comandas llegando impresas a su estación y la pantalla organizada.

### M26.1 · Creación de los planos por zona

**Qué es.** Crear un plano de mesas por cada zona de servicio: salón, piscina y muelle.

**Para qué.** Decisión 38. Con un solo plano, las tres zonas se mezclan en la misma pantalla y la operación se vuelve confusa en hora pico. Cada mesonero trabaja sobre el plano de su zona.

**Cómo se hace.** Ruta: `Punto de venta → Configuración → Planos de piso` (*Floor Plans*). Crear un plano por zona y colocar sus mesas.

**Criterios de aprobación.**
- Existe un plano por zona de servicio.
- El plano refleja la disposición física real del espacio.

### M26.2 · Numeración de las mesas

**Qué es.** Numerar las mesas sin que se repita un número entre zonas.

**Para qué.** Decisión 38. Permite mover la cuenta de una zona a otra si el cliente se traslada, sin ambigüedad sobre a qué mesa se refiere una comanda.

**Cómo se hace.** En cada plano, asignando el número a cada mesa. La numeración se define de modo que ninguna se repita entre planos.

**Criterios de aprobación.**
- No hay números de mesa repetidos entre zonas.
- Una cuenta de prueba se mueve de una zona a otra sin perder su contenido.

### M26.3 · Configuración de las impresoras de comanda

**Qué es.** Configurar una impresora por estación, en cocina y en barra, y asignar qué productos se imprimen en cada una.

**Para qué.** Decisión 40. La comanda llega impresa a cada estación. Hoy la impresora de cocina está dañada y la caja imprime todas las comandas, así que reponerla resuelve el problema inmediato. Hay una impresora por estación que hay que comprar y mantener.

**Cómo se hace.** Ruta: `Punto de venta → Pedidos → Impresoras de preparación` (*Preparations Printers*). Se registra cada impresora y se le asignan las categorías de producto cuyas comandas debe imprimir. La opción se habilita previamente en los ajustes de la caja de restaurante.

**Criterios de aprobación.**
- Existe una impresora configurada por estación.
- Un pedido de prueba con productos de cocina y de barra imprime en cada estación solo lo suyo.
- La caja deja de imprimir las comandas que corresponden a las estaciones.

### M26.4 · Organización de la pantalla del cajero

**Qué es.** Agrupar los productos por estación y familia, y limitar cada caja a los productos que le corresponden.

**Para qué.** Decisión 42. Define cuántos pasos toma registrar un consumo en hora pico, y es además lo que enruta cada comanda a cocina o a barra. Hay que mantener la agrupación cuando cambia la carta.

**Cómo se hace.** Ruta: `Punto de venta → Configuración → Categorías de producto del PdV` (*PoS Product Categories*), donde se crea la agrupación que ve el cajero. Luego, en `Punto de venta → Configuración → Ajustes`, con cada caja seleccionada, se restringe qué categorías muestra esa caja.

**Criterios de aprobación.**
- Cada caja presenta únicamente los productos de su punto.
- La agrupación coincide con las estaciones a las que se enrutan las comandas.
- Un mesonero registra un consumo de prueba en menos pasos que en el sistema actual.

### M26.5 · Registro de la pantalla de cocina como etapa posterior

**Qué es.** Dejar documentado que la pantalla de cocina entra en una fase posterior.

**Para qué.** Decisión 40. En el arranque se repone el canal impreso, que es el que la operación conoce. La confirmación de que el pedido llegó se sigue haciendo por el canal actual hasta que entre la pantalla.

**Cómo se hace.** No se configura ahora. Cuando entre, la ruta es `Punto de venta → Pedidos → Pantalla de preparación` (*Preparation Display*).

**Criterios de aprobación.**
- Está documentado como etapa posterior con su ruta identificada.
- El personal de cocina conoce cuál es el canal de confirmación mientras tanto.

---

## M27 · Modos de servicio

**Origen:** decisión 43. **Resultado:** comedor, para llevar y comedor de personal, cada uno con su precio.

### M27.1 · Activación de los modos de servicio

**Qué es.** Encender la función que permite al cajero elegir la forma de atención al abrir la cuenta.

**Para qué.** Decisión 43. Sin modos, el precio del consumo de personal se ajusta a mano en cada caso y nunca queda tipificado, así que no se puede saber cuánto cuesta alimentar al equipo.

**Cómo se hace.** Ruta: `Punto de venta → Configuración → Ajustes`, con la caja seleccionada, sección `Punto de venta`, activar `Para llevar / Entrega / Miembros` (*Take out / Delivery / Members*) y guardar. La documentación oficial señala que si ya existe una caja de restaurante en la base de datos, hay modos preconfigurados disponibles automáticamente.

**Criterios de aprobación.**
- La opción está activa en las cajas de restaurante.
- El cajero ve la selección de modo al abrir la cuenta.

### M27.2 · Configuración de cada modo con su lista de precios

**Qué es.** Crear los tres modos y asignar a cada uno su lista de precios.

**Para qué.** Decisión 43. Cada modo puede tener su propia lista, de modo que el consumo de personal aplica su precio automáticamente y queda identificado como tal en los reportes.

**Cómo se hace.** Ruta: `Punto de venta → Configuración → Preajustes` (*Presets*). En cada uno se completa la `Etiqueta` y se selecciona su `Lista de precios` y, si aplica, su `Posición fiscal`. El modo predeterminado se fija en el campo correspondiente de los ajustes de la caja.

**Criterios de aprobación.**
- Existen los tres modos: comedor, para llevar y comedor de personal.
- Cada uno apunta a su lista de precios, con la del personal aplicando su tarifa propia.
- Una venta de prueba en modo personal toma el precio correcto sin ajuste manual.
- El reporte de ventas permite separar el consumo de personal del resto.

### M27.3 · Configuración del 10% de servicio

**Qué es.** Dejar el 10% de servicio como una línea que el cajero agrega manualmente cuando el cliente lo acepta.

**Para qué.** Decisión 39. El 10% no es obligatorio en la práctica de Koral: el mesonero le pregunta al cliente si desea agregarlo y el cliente decide. Como no aplica a todas las cuentas, no puede sumarse de forma automática. El monto a repartir entre los mesoneros se reconstruye a partir de las ventas que lo incluyeron.

**Cómo se hace.** Se carga como un producto de servicio identificable, disponible en la pantalla de las cajas de restaurante, que el cajero añade a la cuenta cuando corresponde. Su cuenta contable depende de si se trata como deuda con los mesoneros o como ingreso propio, lo que Contabilidad debe definir antes de esta configuración.

**Criterios de aprobación.**
- El 10% no se agrega solo a ninguna cuenta.
- El cajero lo puede añadir en un solo paso.
- El total del período se puede consultar por separado para el reparto.
- Contabilidad definió y aprobó su cuenta contable.

---

## M28 · Recetas y registro de producciones

**Origen:** decisión 41. **Resultado:** cada venta descuenta sus ingredientes, y las preparaciones intermedias existen como producto con su costo.

### M28.1 · Levantamiento de las recetas

**Qué es.** Documentar, plato por plato, qué ingredientes lleva y en qué cantidad.

**Para qué.** Decisión 41. Es lo que conecta las ventas con el consumo de insumos y permite costear el plato. Sin recetas, el inventario de ingredientes nunca se explica por lo vendido y las diferencias se descubren solo en el conteo.

**Cómo se hace.** Es trabajo de campo con la cocina, previo a la carga. La decisión establece arrancar por los platos de mayor rotación y completar el resto durante la operación.

**Criterios de aprobación.**
- Los platos de mayor rotación tienen su receta documentada con cantidades.
- Las cantidades están expresadas en la unidad base de cada ingrediente, según M07.2.
- La cocina validó cada receta.

### M28.2 · Carga de las recetas de plato

**Qué es.** Cargar cada receta de modo que la venta del plato descuente sus ingredientes del inventario.

**Para qué.** Decisión 41. Cada venta descuenta los ingredientes definidos, sin que nadie tenga que registrar la salida.

**Cómo se hace.** Ruta: `Fabricación → Productos → Listas de materiales` (*Bills of Materials*). Crear con `Nuevo`, seleccionar el plato en el campo `Producto` y fijar el campo `Tipo de lista de materiales` (*BoM Type*) en `Kit`. En la pestaña `Componentes` se añade cada ingrediente con su cantidad. La documentación oficial explica que con el tipo `Kit` los componentes son los que se descuentan, no el producto terminado, y que no hace falta configurar operaciones de fabricación.

**Criterios de aprobación.**
- Cada plato con receta cargada descuenta sus ingredientes al venderse en la caja.
- Una venta de prueba de cada plato descuenta las cantidades correctas.
- El costo del plato se puede consultar.

### M28.3 · Carga de las preparaciones intermedias

**Qué es.** Crear como producto propio las preparaciones intermedias (salsas, porcionado, buffet), con su receta de fabricación.

**Para qué.** Decisión 41. Existen como producto con su propio costo y existencias, porque se preparan en lote y se consumen a lo largo del día en varios platos.

**Cómo se hace.** Se crean como productos en `Inventario → Productos → Productos` y se les carga su lista de materiales en `Fabricación → Productos → Listas de materiales`, esta vez con el `Tipo de lista de materiales` en `Fabricar este producto` (*Manufacture this Product*), que es el tipo que sí genera órdenes de producción.

**Criterios de aprobación.**
- Cada preparación intermedia existe como producto con su receta.
- Su costo se calcula a partir de los ingredientes.
- Aparece en el inventario con sus existencias propias.

### M28.4 · Registro de las producciones del día

**Qué es.** Dejar operativo el registro de cada producción cuando se hace.

**Para qué.** Decisión 41. Exige levantar y mantener las recetas y registrar cada producción. Es lo que hace que las existencias de la preparación intermedia sean reales y no teóricas.

**Cómo se hace.** Ruta: `Fabricación → Operaciones → Órdenes de fabricación` (*Manufacturing Orders*). Se crea la orden por la cantidad producida y se valida, lo que descuenta los ingredientes y da de alta la preparación.

**Criterios de aprobación.**
- La cocina registró una producción de prueba de punta a punta.
- El registro descuenta los ingredientes y da de alta la preparación.
- El procedimiento diario está documentado y asignado a un turno concreto.

---

# Fase 7 · Personal

---

## M29 · Estructura organizativa

**Origen:** decisión 46. **Resultado:** áreas reales, cargos y jefe directo cargados en el sistema.

### M29.1 · Creación de las áreas

**Qué es.** Cargar las áreas reales del hotel como departamentos.

**Para qué.** Decisión 46. Los reportes se filtran por área y cargo, y es la base sobre la que se dirige cada solicitud.

**Cómo se hace.** Ruta: `Empleados → Departamentos` (*Departments*). Crear cada área con `Nuevo`, indicando su nombre y, cuando corresponda, el departamento del que depende.

**Criterios de aprobación.**
- Las áreas cargadas coinciden con la estructura real del hotel.
- La jerarquía entre áreas refleja la organización vigente.

### M29.2 · Creación de los cargos

**Qué es.** Cargar los cargos que existen en la operación.

**Para qué.** Decisión 46. Permite filtrar reportes por cargo y sostiene la ficha del empleado.

**Cómo se hace.** Ruta: `Empleados → Configuración → Reclutamiento → Puestos de trabajo` (*Job Positions*).

**Criterios de aprobación.**
- Cada cargo real tiene su registro.
- Los nombres coinciden con los que usa Talento Humano.

### M29.3 · Definición de los lugares de trabajo

**Qué es.** Cargar los lugares físicos donde trabaja el personal.

**Para qué.** Permite distinguir en los reportes al personal de Caracas del personal del hotel, coherente con la separación de la decisión 3.

**Cómo se hace.** Ruta: `Empleados → Configuración → Lugares de trabajo` (*Work Locations*).

**Criterios de aprobación.**
- Existen los lugares de trabajo reales.
- Cada empleado se puede asignar a uno.

---

## M30 · Fichas de empleados

**Origen:** decisiones 46 y 47. **Resultado:** la plantilla completa cargada con datos definitivos antes del arranque.

### M30.1 · Carga de los datos de identificación

**Qué es.** Cargar la identificación completa de cada empleado.

**Para qué.** Decisión 47. El primer recibo se calcula con los datos definitivos de cada persona. Lo que falte hay que completarlo a mano o queda fuera del cálculo.

**Cómo se hace.** Ruta: `Empleados`, crear la ficha con `Nuevo` y completar los datos personales y de identificación en la pestaña de información personal (*HR Settings* / *Información personal*).

**Criterios de aprobación.**
- Toda la plantilla está cargada.
- Ninguna ficha tiene campos de identificación vacíos.

### M30.2 · Carga de los datos bancarios

**Qué es.** Cargar la cuenta bancaria de cada empleado.

**Para qué.** Decisión 47. Es lo que permite generar el pago de la nómina sin capturar cuentas a mano cada quincena.

**Cómo se hace.** En la ficha del empleado, en la sección de datos bancarios de su información personal.

**Criterios de aprobación.**
- Cada empleado tiene su cuenta cargada y validada.
- Un archivo de pago de prueba se genera sin errores de cuenta.

### M30.3 · Carga de la carga familiar

**Qué es.** Registrar la carga familiar declarada de cada empleado.

**Para qué.** Decisión 47. Afecta el cálculo de los conceptos de nómina que dependen de ella.

**Cómo se hace.** En la ficha del empleado, en la sección correspondiente de su información personal.

**Criterios de aprobación.**
- La carga familiar está registrada donde aplica.
- Talento Humano validó los datos contra los soportes.

### M30.4 · Carga de los contratos

**Qué es.** Cargar el contrato de cada empleado, con su fecha de ingreso y su sueldo.

**Para qué.** Decisión 47 y decisión 52. El contrato es la base del cálculo del recibo, y la fecha de ingreso es la base del cálculo de la antigüedad para las vacaciones.

**Cómo se hace.** Ruta: `Nómina → Empleados → Empleados`, abriendo la ficha y creando el contrato con su tipo de estructura salarial, fecha de inicio y salario. Las plantillas de contrato se gestionan en `Empleados → Configuración → Reclutamiento → Plantillas de contrato`.

**Criterios de aprobación.**
- Cada empleado tiene contrato vigente cargado.
- Las fechas de ingreso fueron verificadas una por una, porque de ellas depende el cálculo de la antigüedad de la decisión 52.
- El sueldo cargado coincide con el vigente.

### M30.5 · Asignación del jefe directo

**Qué es.** Registrar en cada ficha quién es el jefe directo.

**Para qué.** Decisión 46, punto expreso: el jefe registrado no es un dato informativo, es a quien el sistema dirige cada solicitud de vacaciones, permiso y horas extra. Con una estructura simplificada, todas las aprobaciones caen en RRHH y el jefe directo pierde el control que hoy ejerce.

**Cómo se hace.** En la ficha del empleado, pestaña `Ajustes`, sección de aprobadores, donde se define el responsable para cada tipo de solicitud. La documentación oficial confirma que el aprobador de asistencia se consulta en esa misma sección.

**Criterios de aprobación.**
- Cada empleado tiene su jefe directo asignado.
- Una solicitud de prueba llega efectivamente a ese jefe.
- Está documentado el procedimiento para actualizar la ficha cuando alguien cambia de puesto o de jefe.

---

## M31 · Horarios de trabajo por turno

**Origen:** decisión 48. **Resultado:** un horario por cada turno real, asignado en cada ficha.

### M31.1 · Creación de los horarios

**Qué es.** Crear un horario por cada turno real: el administrativo y los turnos operativos del hotel.

**Para qué.** Decisión 48. Con un horario general único, las horas de quien trabaja en turno rotativo se calculan contra un horario que no es el suyo, y el resultado no sirve.

**Cómo se hace.** Ruta: `Nómina → Configuración → Horarios de trabajo` (*Working Schedules*). Crear cada horario con sus franjas por día.

**Criterios de aprobación.**
- Existe un horario por cada turno real en operación.
- Las franjas horarias coinciden con la operación, incluidos los turnos que cruzan la medianoche.

### M31.2 · Asignación del horario en cada ficha

**Qué es.** Asignar a cada empleado el horario que efectivamente cumple.

**Para qué.** Decisión 48. Las horas trabajadas de más se miden contra el turno propio de cada persona.

**Cómo se hace.** En la ficha del empleado, en el campo de horario de trabajo de su información laboral, y en el contrato.

**Criterios de aprobación.**
- Cada empleado tiene asignado su horario real.
- Una prueba de marcaje calcula las horas de más contra el horario correcto.

---

## M32 · Tipos de ausencia y acumulación de vacaciones

**Origen:** decisiones 52, 53 y 54. **Resultado:** cada ausencia clasificada, el reposo con documento obligatorio y las vacaciones acumulándose solas.

### M32.1 · Creación de los tipos de ausencia

**Qué es.** Crear los cuatro tipos: vacaciones, reposo, permiso con goce y permiso sin goce.

**Para qué.** Decisión 53. Cada ausencia queda clasificada, y los permisos con y sin goce de sueldo tienen efecto distinto en el recibo y deben distinguirse.

**Cómo se hace.** Ruta: `Ausencias → Configuración → Tipos de ausencia` (*Time Off Types*). Crear cada uno con `Nuevo` y completar el nombre, el `Tipo de duración` (día, medio día u horas) y el campo `Contar como` (*Count as*), que define si esa ausencia cuenta como tiempo trabajado o como ausencia a efectos de acumulación. El efecto sobre el recibo se controla con el `Tipo de entrada de trabajo` que se asocia al tipo de ausencia.

**Criterios de aprobación.**
- Existen los cuatro tipos, sin duplicar los preconfigurados que no se usen.
- El permiso sin goce afecta el recibo y el permiso con goce no.
- Talento Humano validó la configuración de cada tipo.

### M32.2 · Documento obligatorio en el reposo

**Qué es.** Exigir el certificado adjunto para poder aprobar un reposo.

**Para qué.** Decisión 53. Hoy el reposo se tramita en papel: el trabajador presenta el certificado, Talento Humano lo recibe y emite la constancia de activo (Forma 14-73) firmada y sellada para el trámite ante el seguro social. Exigir el documento adjunto mantiene ese soporte junto a la ausencia en lugar de en un archivo aparte.

**Cómo se hace.** Ruta: `Ausencias → Configuración → Tipos de ausencia`, abrir el tipo de reposo y activar la opción `Requiere documento de soporte` (*Require Supporting Document*). La documentación oficial precisa que con esta opción el empleado **debe** adjuntar el documento.

**Criterios de aprobación.**
- Un reposo sin documento adjunto no se puede aprobar.
- El documento queda consultable desde la propia ausencia.

### M32.3 · Configuración del circuito de aprobación

**Qué es.** Fijar que cada solicitud pase primero por el jefe directo y luego por RRHH.

**Para qué.** Decisión 54. El jefe directo es quien decide en la práctica, y la revisión de RRHH cierra el circuito verificando saldo y encuadre. La solicitud avanza cuando ambos actúan.

**Cómo se hace.** Ruta: `Ausencias → Configuración → Tipos de ausencia`, campo `Aprobación`. La documentación oficial lista cuatro opciones, de las que corresponde `Por el aprobador del empleado y el responsable de ausencias` (*By Employee's Approver and Time Off Officer*), que exige que ambos aprueben. El responsable de ausencias se define en el campo `Notificar a RRHH` del mismo formulario, y el aprobador del empleado en su ficha, según M30.5.

**Criterios de aprobación.**
- Una solicitud de prueba requiere las dos aprobaciones para quedar concedida.
- La aprobación de uno solo no basta.
- Los jefes de área conocen el circuito.

### M32.4 · Configuración de la acumulación de vacaciones

**Qué es.** Configurar que el sistema acumule los días de vacaciones según la antigüedad registrada de cada empleado.

**Para qué.** Decisión 52. Hoy la planificación se lleva en un cronograma en Excel y el cálculo de los días forma parte del cuadro de nómina, también en Excel. El levantamiento recoge además que una parte significativa del personal operativo no toma vacaciones formalmente y acumula días que después hay que calcular para su pago, que es donde la acumulación automática aporta.

**Cómo se hace.** Ruta: `Ausencias → Configuración → Planes de acumulación` (*Accrual Plans*). Se define el plan con sus tramos por antigüedad y se vincula al tipo de ausencia de vacaciones. Los días concedidos se gestionan luego en `Ausencias → Gestión → Asignaciones`.

**Criterios de aprobación.**
- El plan refleja los días que corresponden por antigüedad según la ley y la práctica de Koral.
- Las fechas de ingreso fueron verificadas durante la carga, que es la condición previa expresa de la decisión 52.
- Un empleado de prueba de cada tramo de antigüedad acumula los días correctos.

### M32.5 · Carga de los días feriados

**Qué es.** Cargar el calendario de días feriados.

**Para qué.** Evita que un feriado se descuente del saldo de vacaciones de quien está de reposo o de permiso.

**Cómo se hace.** Ruta: `Ausencias → Configuración → Días festivos` (*Public Holidays*).

**Criterios de aprobación.**
- El calendario del año está cargado.
- Una ausencia que abarca un feriado no lo descuenta del saldo, salvo que el tipo esté configurado para ignorarlos.

---

## M33 · Marcaje de entrada y salida

**Origen:** decisiones 50 y 51. **Resultado:** el marcaje por selección en pantalla con clave personal, y las horas de más visibles para el jefe.

### M33.1 · Configuración del modo de marcaje

**Qué es.** Fijar que el empleado elija su nombre en pantalla y confirme con su clave personal.

**Para qué.** Decisión 50. No hace falta emitir carnets, y la identificación depende de la clave de cada quien. Se está trabajando en integrar un lector facial con datos biométricos, y la carnetización perdería sentido cuando ese lector entre en operación.

**Cómo se hace.** Ruta: `Asistencias → Configuración → Ajustes`. La documentación oficial indica que el modo de quiosco admite `Selección manual` (*Manual Selection*), `Código de barras/RFID` o la combinación de ambos; para esta decisión se selecciona la selección manual. Luego se activa la casilla `Identificación por PIN del empleado` (*Employee PIN Identification*), que exige la clave para poder marcar. La clave de cada persona se carga en el campo `Código PIN` de la pestaña `Ajustes` de su ficha, el mismo que se usa en M24.4 para la caja.

**Criterios de aprobación.**
- El marcaje exige clave y no permite marcar por otro.
- Todos los empleados tienen su clave cargada.
- Una prueba de marcaje de entrada y salida registra correctamente.

### M33.2 · Configuración de la validación de horas extra

**Qué es.** Fijar que las horas trabajadas de más las revise el jefe y no se aprueben solas.

**Para qué.** Decisión 51. El jefe es quien decide efectivamente quién hace horas extra, y por lo general el personal cumple su horario establecido, de modo que el volumen de excepciones es bajo.

**Cómo se hace.** Ruta: `Asistencias → Configuración → Ajustes`. La documentación oficial describe el campo `Validación de horas extra` (*Extra Hours Validation*) con dos opciones: `Aprobadas automáticamente` y `Aprobadas por el gerente`. Se selecciona la segunda. La casilla `Mostrar horas extra` hace visible el acumulado.

**Criterios de aprobación.**
- Las horas de más quedan pendientes de aprobación del jefe.
- El jefe puede ver y aprobar desde su propio acceso.
- Está documentado que el cálculo de los recargos de ley se sigue haciendo fuera del sistema, y que la nocturnidad y los feriados quedan fuera como consecuencia combinada de las decisiones 50 y 51.

### M33.3 · Registro de la integración del lector facial

**Qué es.** Dejar señalado que la integración del lector biométrico es un punto aparte.

**Para qué.** Decisión 50. Koral está trabajando en la incorporación del lector; la integración con el sistema se define cuando el equipo esté seleccionado.

**Cómo se hace.** No se configura. Se documenta en el catálogo de desarrollos y se retoma cuando el equipo esté definido.

**Criterios de aprobación.**
- Está documentado con su condición de arranque.
- La solución de marcaje del arranque funciona de forma independiente de este punto.

---

## M34 · Nómina

**Origen:** decisión 49. **Resultado:** el recibo quincenal, las horas extra, los bonos, las utilidades y las vacaciones calculándose en el sistema.

### M34.1 · Verificación de las estructuras salariales venezolanas

**Qué es.** Confirmar que las estructuras de nómina del paquete venezolano están cargadas y responden.

**Para qué.** Decisión 49. El cálculo del recibo venezolano ya está construido en el paquete de Almus, con las estructuras de nómina regular, utilidades, vacaciones, prestaciones, anticipos y liquidación, y el salario integral del artículo 104.

**Cómo se hace.** Ruta: `Nómina → Configuración → Tipos de estructura` y `Nómina → Configuración → Estructuras`, para verificar que las estructuras venezolanas están presentes. Las reglas de cada una se consultan en `Nómina → Configuración → Reglas`.

**Criterios de aprobación.**
- Las estructuras venezolanas están cargadas.
- Un recibo de prueba calcula los conceptos esperados.
- Los parámetros legales fechados están vigentes.

### M34.2 · Asignación de la estructura a cada empleado

**Qué es.** Asignar en el contrato de cada empleado la estructura salarial que le corresponde.

**Para qué.** Es lo que determina qué conceptos se calculan en su recibo.

**Cómo se hace.** En el contrato del empleado, campo de tipo de estructura salarial, en `Nómina → Empleados → Empleados`.

**Criterios de aprobación.**
- Cada empleado tiene su estructura asignada.
- Un recibo de prueba de cada tipo de empleado calcula correctamente.

### M34.3 · Configuración de bonos y deducciones

**Qué es.** Cargar los bonos y deducciones recurrentes en la moneda pactada.

**Para qué.** Decisión 49. Los bonos entran en el alcance del sistema desde el primer mes.

**Cómo se hace.** Ruta: `Nómina → Configuración → Otros tipos de entrada` para definir los conceptos, y `Nómina → Empleados → Ajustes salariales` para cargarlos por empleado. El manejo en la moneda pactada lo resuelve el módulo correspondiente de la localización.

**Criterios de aprobación.**
- Los bonos recurrentes están cargados.
- Un recibo de prueba los refleja en la moneda correcta.

### M34.4 · Prueba de la corrida quincenal

**Qué es.** Ejecutar una corrida completa de nómina con datos reales.

**Para qué.** Decisión 49. Es el proceso que Talento Humano va a ejecutar cada quincena.

**Cómo se hace.** Ruta: `Nómina → Recibos de nómina → Corridas de pago` (*Pay Runs*). Se genera la corrida del período, se revisan los recibos y se confirman. Las entradas de trabajo del período se revisan previamente en `Nómina → Entradas de trabajo → Entradas de trabajo`.

**Criterios de aprobación.**
- La corrida se completó de punta a punta.
- Talento Humano ejecutó el proceso sin intervención del implantador.
- Los montos coinciden con el cálculo actual dentro del margen esperado.

### M34.5 · Delimitación del alcance de la primera etapa

**Qué es.** Dejar documentado qué queda fuera del sistema en esta etapa.

**Para qué.** Decisión 49. Las liquidaciones de egreso y el impuesto sobre la renta del trabajador se siguen calculando aparte, porque esos módulos del paquete venezolano están todavía en desarrollo. Usarlos antes de que estén listos produciría liquidaciones incompletas.

**Cómo se hace.** Se documenta el alcance y el procedimiento paralelo para lo que queda fuera.

**Criterios de aprobación.**
- El alcance está escrito y comunicado a Talento Humano.
- El procedimiento externo para egresos e impuesto sobre la renta está definido y asignado.

---

# Fase 8 · Accesos

---

## M35 · Perfiles de acceso y creación de usuarios

**Origen:** decisiones 20, 33, 55, 56 y 57. **Resultado:** cada persona con el acceso que le corresponde y la segregación contable aplicada.

### M35.1 · Definición de los perfiles por área

**Qué es.** Definir qué perfil estándar corresponde a cada área y a cada nivel dentro de ella.

**Para qué.** Decisión 55. El sistema trae perfiles predefinidos por aplicación, con niveles de usuario y de administrador. Los perfiles estándar cubren bien la operación y son fáciles de auditar.

**Cómo se hace.** Ruta: `Ajustes → Usuarios y compañías → Usuarios`, pestaña `Permisos de acceso`, donde se asigna el nivel por aplicación. Los grupos disponibles se consultan en `Ajustes → Usuarios y compañías → Grupos`, que requiere modo desarrollador.

**Criterios de aprobación.**
- Existe un cuadro de qué perfil corresponde a cada cargo.
- El cuadro está aprobado por la dirección.

### M35.2 · Ajustes a medida donde el control lo exige

**Qué es.** Configurar los permisos específicos de Contraloría y de las cajas.

**Para qué.** Decisión 55. Los ajustes se reservan para donde el control es la razón de ser del acceso. Decisión 33: el almacenista registra los conteos y solo Contraloría realiza los ajustes.

**Cómo se hace.** Ruta: `Ajustes → Usuarios y compañías → Grupos`, ajustando los permisos del grupo correspondiente, con modo desarrollador activo.

**Criterios de aprobación.**
- El almacenista puede registrar un conteo y no puede aplicar el ajuste.
- Contraloría puede aplicar el ajuste.
- Cada ajuste a medida está documentado, porque hay que revisarlo en cada actualización del sistema.

### M35.3 · Segregación contable

**Qué es.** Restringir la modificación de documentos contables a Contraloría, Contabilidad y las personas designadas del equipo administrativo.

**Para qué.** Decisión 56. Hoy las tres funciones de facturar, pagar y conciliar las ejerce la misma persona sin contrapeso, y Contraloría revisa fuera del sistema. Definir quién puede modificar es lo que permite que la revisión ocurra dentro del sistema y sobre información que no se puede alterar sin dejar rastro.

**Cómo se hace.** Ruta: `Ajustes → Usuarios y compañías → Usuarios`, asignando el nivel de acceso a Contabilidad. El resto de los usuarios queda con acceso de solo consulta.

**Criterios de aprobación.**
- Un usuario fuera de los tres grupos autorizados puede consultar pero no modificar documentos contables.
- Las funciones de facturar, pagar y conciliar quedan repartidas entre perfiles distintos.
- Una prueba confirma que la restricción opera.

### M35.4 · Permisos de autorización de cierres

**Qué es.** Otorgar a las dos personas designadas el permiso que les permite crear excepciones de cierre.

**Para qué.** Decisión 9 y decisión 6. La documentación oficial establece que solo los usuarios con permisos de Administrador en Contabilidad pueden crear esas excepciones.

**Cómo se hace.** Ruta: `Ajustes → Usuarios y compañías → Usuarios`, otorgando el nivel de Administrador en Contabilidad únicamente a las dos personas designadas.

**Criterios de aprobación.**
- Exactamente dos personas tienen ese permiso.
- Ninguna otra puede levantar un cierre.

### M35.5 · Creación de los usuarios

**Qué es.** Crear el usuario de cada persona que lo requiere.

**Para qué.** Decisión 57. Marcar asistencia no requiere usuario, y en la caja cada cajero se identifica con su clave sin usuario propio, aunque abrir la caja sí exige uno. Los jefes de área necesitan usuario para poder aprobar, por la decisión 54. Consultar el propio recibo o solicitar vacaciones también requiere usuario: no hay una vía de consulta para empleados sin él.

**Cómo se hace.** Ruta: `Ajustes → Usuarios y compañías → Usuarios`, creando cada usuario con `Nuevo` y asignando sus permisos según el cuadro de M35.1.

**Criterios de aprobación.**
- La lista de quiénes llevan usuario está cerrada y aprobada por Koral. *(Este punto figura como pendiente en el registro de decisiones y debe resolverse antes de esta tarea.)*
- Todos los jefes de área tienen usuario.
- Cada usuario creado accede solo a lo que le corresponde, verificado con una prueba por perfil.

---

# Fase 9 · Carga inicial

---

## M36 · Toma física del inventario

**Origen:** decisiones 22, 26 y 27, y sección 6 del registro. **Resultado:** las existencias del sistema reflejando la realidad física.

### M36.1 · Preparación de la toma

**Qué es.** Emitir las hojas de conteo por zona y organizar el operativo.

**Para qué.** El inventario actual del sistema no refleja la realidad física desde 2024, de modo que las cantidades iniciales salen de la toma física y no de la base anterior. No se migran existencias.

**Cómo se hace.** Ruta: `Inventario → Operaciones → Inventario físico` (*Physical Inventory*). La documentación oficial indica que la página lista todos los productos en existencia, y que con la opción `Agrupar por → Ubicación` se organiza el conteo por sitio. Las hojas se imprimen con `Imprimir → Hoja de conteo`.

**Criterios de aprobación.**
- Existe una hoja de conteo por zona.
- Las hojas de alimentos y bebidas incluyen las columnas de lote y vencimiento, según M17.4.
- El operativo está planificado por zonas y no como un conteo único.

### M36.2 · Ejecución del conteo

**Qué es.** Contar físicamente cada zona y registrar el resultado.

**Para qué.** Es el punto de partida real del sistema. Todo lo que se registre después parte de estas cantidades.

**Cómo se hace.** El almacenista cuenta y registra en `Inventario → Operaciones → Inventario físico`, cargando la cantidad contada por producto y ubicación. En los productos rastreados, cada línea exige su lote y su fecha de vencimiento.

**Criterios de aprobación.**
- Todas las zonas fueron contadas.
- Los productos rastreados tienen lote y vencimiento en cada línea.
- El conteo lo registró el almacenista, no el implantador.

### M36.3 · Validación y aplicación del ajuste

**Qué es.** Revisar el conteo y aplicar el ajuste que fija las existencias iniciales.

**Para qué.** Decisión 33. El almacenista registra lo que contó; la corrección de la cantidad y de su valor la hace Contraloría. Son dos manos distintas sobre la misma operación.

**Cómo se hace.** Desde la misma página de inventario físico, Contraloría revisa y aplica el ajuste. El impacto contable se rige por la configuración de M14.6 y M18.

**Criterios de aprobación.**
- El ajuste lo aplicó Contraloría, no quien contó.
- Las existencias del sistema coinciden con el conteo.
- Las diferencias significativas quedaron documentadas con su explicación.

### M36.4 · Activación de los conteos cíclicos

**Qué es.** Poner en marcha el ciclo de conteos por zona a partir de la toma inicial.

**Para qué.** Decisión 22. Contar seguido y por partes pequeñas es lo que mantiene la foto alineada. La toma inicial es el primer conteo de ese ciclo.

**Cómo se hace.** El sistema calcula automáticamente la siguiente fecha de conteo de cada ubicación después de aplicado el primer ajuste, a partir de la frecuencia cargada en M14.5.

**Criterios de aprobación.**
- Cada zona muestra su próxima fecha de conteo.
- El almacén tiene asignado quién ejecuta cada conteo y con qué periodicidad.

---

## M37 · Saldos contables de apertura

**Origen:** decisiones 23 y 24. **Resultado:** la contabilidad partiendo de saldos que coinciden con la realidad.

### M37.1 · Carga de los saldos de apertura

**Qué es.** Registrar el asiento de apertura con los saldos de todas las cuentas.

**Para qué.** Es el punto de partida contable. Sin él, el primer cierre mensual arranca descuadrado.

**Cómo se hace.** Se registra como asiento contable en el diario correspondiente, en `Contabilidad → Contabilidad → Asientos contables`.

**Criterios de aprobación.**
- El asiento de apertura está registrado y cuadrado.
- Los saldos coinciden con los estados financieros de cierre del sistema anterior.
- Contabilidad aprobó el asiento.

### M37.2 · Conciliación del valor del inventario

**Qué es.** Verificar que el valor del inventario en la contabilidad coincide con el valor de las existencias contadas.

**Para qué.** Decisión 24. Es la condición para que el primer cierre mensual funcione: el reporte compara el valor que la contabilidad tiene registrado contra el valor real según las existencias, y si el punto de partida no cuadra, la diferencia arrastra todos los meses.

**Cómo se hace.** Ruta: `Contabilidad → Revisión → Valoración de inventario`. Se compara el saldo inicial contra el valor de las existencias cargadas en M36.

**Criterios de aprobación.**
- Ambos valores coinciden.
- Cualquier diferencia está explicada y resuelta antes de la salida.

### M37.3 · Conciliación de saldos de terceros

**Qué es.** Verificar que los saldos de clientes y proveedores coinciden con sus estados de cuenta.

**Para qué.** Los saldos e historia de los terceros no se pueden reinventar, y son la base del control de cobros y pagos desde el primer día.

**Cómo se hace.** Ruta: `Contabilidad → Informes → Libro mayor de terceros`, comparando contra los saldos del sistema anterior.

**Criterios de aprobación.**
- Los saldos por cobrar y por pagar coinciden con el cierre del sistema anterior.
- Las diferencias están explicadas.

---

# Fase 10 · Pruebas y puesta en marcha

---

## M38 · Pruebas por área con datos reales

**Origen:** condición de salida. **Resultado:** cada área ejecutando su circuito completo sin ayuda del implantador.

### M38.1 · Pruebas de compras y almacén

**Qué es.** Ejecutar el circuito completo de compra y recepción con operaciones reales.

**Para qué.** Es el circuito de mayor volumen diario. Si falla, se detiene el abastecimiento.

**Cómo se hace.** Compras y Almacén ejecutan pedidos reales de punta a punta, incluyendo un caso con acuerdo, uno con plantilla, uno con producto rastreado por lote y uno con recorrido automático.

**Criterios de aprobación.**
- Cada caso se completó sin intervención del implantador.
- La clasificación analítica se asignó correctamente en todos.
- El personal del área puede repetir el proceso sin consultar el manual.

### M38.2 · Pruebas de punto de venta

**Qué es.** Operar las cajas durante un turno completo con ventas reales.

**Para qué.** La caja es donde más presión hay en hora pico y donde un error tiene efecto inmediato sobre el cliente.

**Cómo se hace.** Cada caja opera un turno: apertura con arqueo, ventas con cada forma de pago, comandas a cada estación, un modo de servicio de personal, una anulación autorizada y cierre con arqueo.

**Criterios de aprobación.**
- El cierre cuadra y el sistema no permite cerrar si no cuadra.
- Las comandas llegaron a la estación correcta.
- El descuento estuvo bloqueado para quien no está autorizado.
- El inventario se descontó del almacén del punto.

### M38.3 · Pruebas de contabilidad

**Qué es.** Ejecutar un cierre mensual completo con los datos del período de prueba.

**Para qué.** Decisión 24. Es el proceso mensual del equipo contable, y es el que traduce toda la operación del mes a los libros.

**Cómo se hace.** Contabilidad ejecuta el cierre de inventario, revisa el reporte, valida y contabiliza; fija la fecha de bloqueo; y emite el estado de resultados por unidad de negocio y por sede.

**Criterios de aprobación.**
- El asiento de cierre se generó y se contabilizó tras la revisión del equipo.
- El bloqueo del período opera.
- El reporte por unidad de negocio sale correcto.

### M38.4 · Pruebas de personal

**Qué es.** Ejecutar el circuito de solicitudes y de marcaje con casos reales.

**Para qué.** Decisiones 46, 53 y 54. Son procesos que involucran a toda la plantilla y a todos los jefes de área.

**Cómo se hace.** Se tramitan solicitudes de vacaciones, de reposo con documento y de permiso, con las dos aprobaciones; y se registra un ciclo de marcaje completo con horas de más.

**Criterios de aprobación.**
- Cada solicitud llegó al jefe correcto y requirió las dos aprobaciones.
- El reposo sin documento fue rechazado.
- Las horas de más quedaron pendientes de aprobación del jefe.

### M38.5 · Registro y cierre de los hallazgos

**Qué es.** Documentar cada ajuste detectado durante las pruebas y resolverlo antes de la salida.

**Para qué.** Las pruebas generan retrabajo por definición. Lo que no se registra se olvida y reaparece en producción.

**Cómo se hace.** Se lleva una lista de hallazgos con su estado, y cada uno se cierra con su corrección probada.

**Criterios de aprobación.**
- La lista está cerrada o los pendientes están clasificados como no bloqueantes con aprobación de la dirección.
- Cada corrección fue probada de nuevo por el área que reportó el hallazgo.

---

## M39 · Nómina en paralelo

**Origen:** decisión 49. **Resultado:** el cálculo del sistema validado contra el cálculo actual antes de dejar la hoja de cálculo.

### M39.1 · Corrida en paralelo

**Qué es.** Calcular dos o tres quincenas simultáneamente en el sistema y en la hoja de cálculo actual.

**Para qué.** Decisión 49, recomendación expresa. Un error en la nómina se paga con el sueldo de una persona real; el paralelo es lo que lo detecta antes.

**Cómo se hace.** Ruta: `Nómina → Recibos de nómina → Corridas de pago`, ejecutando la corrida del período mientras Talento Humano mantiene su cálculo actual.

**Criterios de aprobación.**
- Se completaron al menos dos quincenas en paralelo.
- El proceso lo ejecutó Talento Humano.

### M39.2 · Conciliación de diferencias

**Qué es.** Comparar recibo por recibo y explicar cada diferencia.

**Para qué.** Una diferencia no explicada es un error latente, sin importar cuán pequeña sea.

**Cómo se hace.** Comparación línea por línea entre ambos cálculos, documentando el origen de cada diferencia.

**Criterios de aprobación.**
- Cada diferencia está explicada.
- Las que corresponden a un error de configuración fueron corregidas y se volvió a correr.
- Talento Humano aprueba dejar la hoja de cálculo.

---

## M40 · Salida a producción

**Origen:** condición de cierre del proyecto. **Resultado:** el sistema en operación real.

### M40.1 · Verificación previa

**Qué es.** Recorrer la lista de condiciones de salida antes de autorizar.

**Para qué.** Salir con una condición sin cumplir traslada el problema a la operación real, donde corregirlo cuesta mucho más.

**Cómo se hace.** Se verifica uno por uno el cumplimiento de los hitos definidos en el cronograma.

**Criterios de aprobación.**
- Todos los hitos están cumplidos o explícitamente relevados por la dirección.
- Las existencias y los saldos de apertura están cargados y conciliados.
- Cada área aprobó sus pruebas.

### M40.2 · Corte y arranque

**Qué es.** Definir la fecha y hora de corte, congelar el sistema anterior y arrancar el nuevo.

**Para qué.** Sin un corte claro, quedan operaciones registradas en dos sistemas y la conciliación posterior es un trabajo manual permanente.

**Cómo se hace.** Se comunica la fecha de corte, se cierra el registro en el sistema anterior y se habilita el acceso de todos los usuarios al nuevo.

**Criterios de aprobación.**
- La fecha de corte está comunicada a todas las áreas con antelación.
- Ninguna operación se registra en el sistema anterior después del corte.
- Todos los usuarios acceden correctamente el primer día.

### M40.3 · Acompañamiento de los primeros días

**Qué es.** Mantener soporte cercano durante el arranque.

**Para qué.** Los primeros días concentran las dudas operativas y los ajustes menores. Resolverlos rápido es lo que evita que el equipo vuelva a sus métodos anteriores.

**Cómo se hace.** Se define quién atiende cada área y por qué canal, y se lleva registro de lo que se pregunta para reforzar la formación donde haga falta.

**Criterios de aprobación.**
- El esquema de soporte está definido y comunicado.
- Las incidencias del arranque están registradas y resueltas.
- Ningún área volvió al método anterior por falta de soporte.

---

# Anexo · Trazabilidad entre decisiones y tareas

| Decisión o definición | Tareas que la implementan |
|---|---|
| 1 · Qué empresas se llevan | M02.1 |
| 2 · Catálogo de cuentas con varias empresas | M02.1, M03.3 |
| 3 · Caracas y el hotel como sedes | M04.1, M05.2, M29.3 |
| 4 · Operaciones entre empresas | M02.1 |
| 5 · Contabilidad analítica | M05 completa |
| 6 · Cierre de períodos | M06.1, M06.3 |
| 7 · Diarios de ventas | M04.1, M04.2, M24.3 |
| 8 · Habilitación en más de una empresa | M02.1 |
| 9 · Quién autoriza excepciones de cierre | M06.2, M35.4 |
| 10 · Cómo se agrupan los productos | M09.1, M20.3 |
| 11 · Qué característica abre variante | M08 completa, M10.3 |
| 12 · Unidades de compra y consumo | M07 completa, M10.4 |
| 13 · Códigos internos y de barras | M10.4, M10.5, M14.4 |
| 14 · Estructura del maestro de contactos | M11.1 a M11.4 |
| 15 · Estructura de listas de precios | M12.2, M12.3, M12.4, M23.3 |
| 16 · Moneda de los precios | M12.2 |
| 17 · Servicios y consumibles internos | M10.1 |
| 18 · Quién crea el catálogo | M09.3, M10.2 |
| 19 · Quién da de alta terceros | M11.5 |
| 20 · Quién vende fuera de la lista | M23.1, M23.2, M25.4 |
| 21 · Un depósito o varios | M13.2, M15.2, M16.1 |
| 22 · Zonas y conteos programados | M14.2, M14.3, M14.5, M36.4 |
| 23 · Método de costo | M18.1 |
| 24 · Momento de valoración | M18.2 a M18.5, M37.2 |
| 25 · Pasos de la recepción | M13.3, M13.4 |
| 26 · Lotes y vencimiento | M17 completa, M36.1, M36.2 |
| 27 · Cómo se dispara la reposición | M19 completa |
| 28 · Aprobación de compras por monto | M21.3 |
| 29 · Control de factura contra lo recibido | M21.1, M21.2 |
| 30 · Acuerdos con proveedores | M22 completa |
| 31 · Registro de la merma | M14.6, M20.1 |
| 32 · Quién aprueba las compras | M21.3 |
| 33 · Quién ajusta inventario | M20.2, M20.4, M35.2, M36.3 |
| 34 · Cuántas cajas | M24.1, M24.2 |
| 35 · Formas de pago | M25.1, M25.2, M25.3 |
| 36 · Apertura y cierre de caja | M24.4, M25.6 |
| 37 · Descuadre máximo | M25.5 |
| 38 · Plano de mesas | M26.1, M26.2 |
| 39 · 10% de servicio | M27.3 |
| 40 · Comanda a cocina y barra | M26.3, M26.5 |
| 41 · Recetas | M28 completa |
| 42 · Pantalla del cajero | M26.4 |
| 43 · Modos de servicio | M27.1, M27.2 |
| 44 · Factura en el punto de venta | M25.7 |
| 45 · Quién autoriza anulaciones | M24.4, M25.8 |
| 46 · Organigrama | M29 completa, M30.5 |
| 47 · Carga de datos del empleado | M30 completa |
| 48 · Horarios de trabajo | M31 completa |
| 49 · Alcance de la nómina | M34 completa, M39 |
| 50 · Modo de marcaje | M33.1, M33.3 |
| 51 · Cálculo de horas extra | M33.2 |
| 52 · Acumulación de vacaciones | M30.4, M32.4 |
| 53 · Tipos de ausencia | M32.1, M32.2 |
| 54 · Quién aprueba ausencias | M30.5, M32.3 |
| 55 · Perfiles de acceso | M35.1, M35.2 |
| 56 · Segregación contable | M35.3 |
| 57 · Quién necesita usuario | M35.5 |
| Definición 1 · Tiendas en resguardo | M15 completa |
| Definición 2 · Diario por máquina fiscal | M04.1, M24.3 |
| Definición 3 · Habitaciones: activos y consumibles | M16 completa |
| Definición 4 · Códigos de barras en ubicaciones | M14.4 |
| Definición 5 · Revisión de planes del grupo | M03.3 |

---

# Anexo · Puntos que requieren cierre antes de ejecutar

| Punto abierto | Tarea que bloquea | Quién lo cierra |
|---|---|---|
| Criterio de qué característica abre variante en cada familia | M08.3, y con ella toda la carga del catálogo | Koral |
| Cuenta contable del 10% de servicio | M27.3 | Contabilidad |
| A quiénes se les crea usuario del sistema (decisión 57) | M35.5 | Koral |
| Condiciones de liquidación con las tiendas | M15.5 | Gerencia General y las tiendas |

---

# Anexo · Desarrollos fuera del alcance de configuración

| Desarrollo | De dónde viene | Tarea donde se documenta |
|---|---|---|
| Límite de merma por producto | Decisión 33 | M20.4 |
| Restricción de descuentos por persona fuera de la caja | Decisión 20 | M23.2 |
| Integración del lector facial de marcaje | Decisión 50 | M33.3 |

Ninguno bloquea la salida a producción. Los dos primeros se presupuestan y aprueban por separado; el tercero depende de un equipo que Koral está evaluando.
