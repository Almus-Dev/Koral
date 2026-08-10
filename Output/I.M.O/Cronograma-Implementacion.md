---
proyecto: Koral Morrocoy
documento: Cronograma de Implementación
version: 2.0
fecha: 2026-08-10
fecha límite: 10 de septiembre de 2026
documento hermano: Catálogo de Tareas de Configuración
---

# Cronograma de Implementación - Koral

## La restricción de partida

Del **lunes 10 de agosto** al **jueves 10 de septiembre** hay 32 días de calendario y **24 días hábiles**, repartidos en cinco semanas de trabajo. Ese es el marco completo del proyecto.

El registro de decisiones se escribió contra una salida al 1 de octubre. Con la fecha adelantada al 10 de septiembre, el proyecto pierde tres semanas. Este cronograma está construido para llegar a esa fecha, y las decisiones que hubo que tomar para lograrlo están todas explicitadas: qué se comprime, qué se paraleliza, y qué no cabe.

**Lo que no cabe, dicho de una vez:** la nómina en paralelo. La decisión 49 pide correr dos o tres quincenas en paralelo antes de dejar la hoja de cálculo, y en cinco semanas solo cabe una. Está tratado como punto de decisión al final del documento.

## Cómo se lee

El cronograma está organizado alrededor de **once hitos con fecha**. Cada hito es un punto de verificación con una fecha concreta, algo específico que se comprueba, y una consecuencia si no se cumple.

Las tareas macro que aparecen (`M01`, `M02`...) están desarrolladas en el **Catálogo de Tareas de Configuración**, que es el documento hermano: allí está el detalle de qué es cada una, cómo se ejecuta y cuándo se da por terminada.

---

# 1. Calendario de hitos

Este es el cuadro que gobierna el proyecto. Si un hito se cae, se cae lo que viene después.

| Hito | Fecha | Qué debe estar verificado | Quién lo aprueba | Qué se detiene si falla |
|---|---|---|---|---|
| **H1** · Entorno operativo | **vie 14 ago** | Sistema levantado con la localización venezolana y la vertical hotelera instaladas, empresa constituida, impuestos y posiciones fiscales cargados | Almus | Todo. Nada se configura sin esto |
| **H2** · Plan de cuentas aprobado | **lun 17 ago** | Plan cargado, ajustado a la operación, con las cuentas de merma, valoración, variación y destinos de consumo, y contrastado contra los planes del grupo | Contabilidad | Categorías de producto, diarios, valoración |
| **H3** · Reglas de variante congeladas | **mié 19 ago** | Definido y aprobado qué característica abre variante en cada familia, con su modo de creación fijado | Koral (Compras) + Almus | La carga del catálogo. **Punto irreversible** |
| **H4** · Estructura contable operativa | **vie 21 ago** | Diarios por punto de emisión, contabilidad analítica obligatoria con reglas automáticas, control de cierres, árbol de categorías con sus cuentas | Contabilidad | Compras, ventas, punto de venta |
| **H5** · Catálogo cargado | **jue 27 ago** | Productos, variantes, unidades, códigos de barras, tipos y categorías completos y revisados | Compras + Contabilidad | Ubicaciones útiles, trazabilidad, recetas, toma física |
| **H6** · Estructura física cerrada | **vie 28 ago** | Almacenes, zonas y ubicaciones con códigos de barras y frecuencia de conteo; método de costo y valoración periódica configurados y probados | Almacén + Contraloría | La toma física |
| **H7** · Corte del sistema anterior | **lun 31 ago** | Cierre contable al 31 de agosto en el sistema anterior; ninguna operación se registra ahí después de esta fecha | Contabilidad + Gerencia | Los saldos de apertura |
| **H8** · Inventario y apertura conciliados | **mié 2 sep** | Existencias reales cargadas por ubicación con lote y vencimiento; saldos de apertura registrados; el valor contable del inventario coincide con el conteo | Contraloría + Contabilidad | La salida a producción |
| **H9** · Circuitos y accesos entregados | **vie 4 sep** | Compras, ventas, punto de venta, recetas y personal configurados; cada usuario con su perfil y la segregación contable aplicada | Almus + Gerencia | Las pruebas por área |
| **H10** · Pruebas aprobadas | **mié 9 sep** | Cada área ejecutó su circuito completo con datos reales, sin intervención del implantador, y los hallazgos están cerrados | Cada área + Gerencia | La salida a producción |
| **H11** · Producción | **jue 10 sep** | Sistema en operación real | Gerencia General | — |

---

# 2. Semana a semana

## Semana 1 · 10 al 14 de agosto — Fundación

El objetivo de la semana es tener el sistema de pie y el plan de cuentas listo para aprobación. En paralelo arranca personal, que no depende de nada del circuito de mercancía, y arranca la entrega de datos por parte de Koral, que es lo que gobierna la semana 3.

| Código | Tarea macro | Inicio | Fin |
|---|---|---|---|
| M01 | Preparación del entorno de trabajo | lun 10 ago | mar 11 ago |
| M02 | Constitución de la empresa y base fiscal venezolana | mié 12 ago | mié 12 ago |
| M03 | Plan de cuentas contables | mié 12 ago | lun 17 ago |
| M29 | Estructura organizativa | mié 12 ago | vie 14 ago |

**Cierra con H1 el viernes 14 de agosto.**

**Lo que Koral entrega esta semana:** el catálogo de productos depurado, la plantilla de almacenes y ubicaciones completa, el maestro de proveedores y clientes depurado, y el criterio de qué característica abre variante en cada familia. Las cuatro entregas alimentan las semanas 2 y 3, y son la principal fuente de riesgo del cronograma.

## Semana 2 · 17 al 21 de agosto — Estructura contable y reglas maestras

El objetivo es dejar cerradas las reglas que después no se pueden cambiar sin rehacer trabajo: las conversiones de unidad, el modo de creación de variantes y las cuentas de cada categoría.

| Código | Tarea macro | Inicio | Fin |
|---|---|---|---|
| M04 | Diarios contables | mar 18 ago | mié 19 ago |
| M05 | Contabilidad analítica | mar 18 ago | vie 21 ago |
| M06 | Control de cierres contables | jue 20 ago | vie 21 ago |
| M07 | Unidades de medida y empaques | lun 17 ago | mié 19 ago |
| M08 | Características que abren variante | lun 17 ago | mié 19 ago |
| M09 | Árbol de categorías de producto | mié 19 ago | vie 21 ago |
| M30 | Fichas de empleados | lun 17 ago | mié 26 ago |

**Cierra con tres hitos:** H2 el lunes 17, H3 el miércoles 19 y H4 el viernes 21 de agosto.

**Advertencia sobre H3.** La documentación oficial de Odoo establece que, una vez que una característica se ha usado en un producto, su modo de creación de variantes ya no se puede editar. Corregirlo después implica rehacer los productos afectados uno por uno. En un cronograma de cinco semanas, eso no tiene margen de recuperación: por eso H3 lleva aprobación formal de Koral y no solo del equipo de implantación.

## Semana 3 · 24 al 28 de agosto — Datos maestros y estructura física

La semana más pesada del proyecto en volumen. Todo lo que se carga aquí es el insumo de la toma física del fin de semana siguiente.

| Código | Tarea macro | Inicio | Fin |
|---|---|---|---|
| M10 | Carga del catálogo de productos y variantes | lun 24 ago | jue 27 ago |
| M11 | Maestro de contactos | lun 24 ago | mié 26 ago |
| M12 | Listas de precios | mié 26 ago | vie 28 ago |
| M13 | Almacenes por área | lun 24 ago | mar 25 ago |
| M14 | Ubicaciones, zonas y conteos cíclicos | mar 25 ago | vie 28 ago |
| M17 | Control de lotes y fecha de vencimiento | mié 26 ago | vie 28 ago |
| M18 | Método de costo y momento de valoración | jue 27 ago | vie 28 ago |
| M31 | Horarios de trabajo por turno | lun 24 ago | mié 26 ago |
| M32 | Tipos de ausencia y acumulación de vacaciones | jue 27 ago | vie 28 ago |

**Cierra con H5 el jueves 27 y H6 el viernes 28 de agosto.**

**Trabajo de campo que arranca esta semana:** la impresión y colocación de las etiquetas de código de barras en las ubicaciones y en los anaqueles. No es trabajo de escritorio y compite con la operación del almacén; conviene arrancarlo el lunes 24, apenas existan las ubicaciones, y no dejarlo para el viernes.

## Semana 4 · 31 de agosto al 4 de septiembre — Corte, apertura y circuitos

La semana bisagra. El corte contable se hace al 31 de agosto, que es un cierre de mes natural, y a partir del 1 de septiembre el sistema nuevo es el único que registra.

**Toma física: sábado 29, domingo 30 y lunes 31 de agosto.** Es un operativo de campo, no de escritorio: exige intervenir la operación real del almacén y, en alimentos y bebidas, capturar lote y vencimiento por línea, lo que multiplica el tiempo de conteo respecto a una toma convencional. Por eso se coloca en fin de semana y se apoya en la división por zonas ya montada en H6.

| Código | Tarea macro | Inicio | Fin |
|---|---|---|---|
| M36 | Toma física del inventario | sáb 29 ago | mar 1 sep |
| M37 | Saldos contables de apertura | mar 1 sep | mié 2 sep |
| M21 | Circuito de compras | lun 31 ago | mié 2 sep |
| M22 | Acuerdos con proveedores y plantillas de pedido | mié 2 sep | jue 3 sep |
| M23 | Circuito de ventas y control de descuentos | lun 31 ago | mié 2 sep |
| M24 | Cajas del punto de venta | lun 31 ago | mar 1 sep |
| M25 | Formas de pago y reglas de cierre de caja | mar 1 sep | mié 2 sep |
| M26 | Restaurante: planos, comandas y pantalla del cajero | mié 2 sep | jue 3 sep |
| M27 | Modos de servicio | jue 3 sep | jue 3 sep |
| M28 | Recetas y registro de producciones | lun 31 ago | vie 4 sep |
| M15 | Almacén de resguardo de las tiendas | lun 31 ago | mié 2 sep |
| M16 | Estructura de habitaciones, activos y equipos | lun 31 ago | jue 3 sep |
| M19 | Reposición por mínimos | mar 1 sep | jue 3 sep |
| M20 | Merma, ajustes y cuentas de destino de consumo | lun 31 ago | jue 3 sep |
| M33 | Marcaje de entrada y salida | lun 31 ago | mar 1 sep |
| M34 | Nómina | mar 1 sep | vie 4 sep |
| M35 | Perfiles de acceso y creación de usuarios | jue 3 sep | vie 4 sep |

**Cierra con H7 el lunes 31 de agosto, H8 el miércoles 2 y H9 el viernes 4 de septiembre.**

**Los mínimos de reposición se cargan pero no se activan** hasta después de la toma física, según la decisión 27: un mínimo calculado sobre existencias falsas genera compras equivocadas. La activación queda el jueves 3, ya con el inventario realineado.

## Semana 5 · 7 al 10 de septiembre — Pruebas y salida

Tres días de prueba y uno de salida. Es la parte más comprimida del cronograma y donde menos holgura hay.

| Código | Tarea macro | Inicio | Fin |
|---|---|---|---|
| M38 | Pruebas por área con datos reales | lun 7 sep | mié 9 sep |
| M39 | Nómina en paralelo (primera quincena) | mar 1 sep | mié 9 sep |
| M40 | Salida a producción | jue 10 sep | jue 10 sep |

**Cierra con H10 el miércoles 9 y H11 el jueves 10 de septiembre.**

**Cómo se distribuyen los tres días de prueba.** El lunes 7 prueban compras, almacén y contabilidad, que son los circuitos con más dependencias. El martes 8 prueban punto de venta y restaurante, que exige un turno completo de operación real. El miércoles 9 prueba personal y se cierran los hallazgos de los dos días anteriores. Los hallazgos que aparezcan el miércoles por la tarde son los que ponen en riesgo la fecha, y por eso el criterio de cierre de H10 admite dejar pendientes clasificados como no bloqueantes, con aprobación expresa de la dirección.

---

# 3. Ruta crítica

La cadena que define la fecha de salida:

```
M01 → M03 → M09 → M10 → M14 → M36 → M37 → M38 → M40
14 ago  17 ago  21 ago  27 ago  28 ago  1 sep  2 sep  9 sep  10 sep
```

Entorno → plan de cuentas → categorías → catálogo → ubicaciones → toma física → saldos de apertura → pruebas → producción.

**No hay holgura en esta cadena.** Cada eslabón arranca el día en que el anterior cierra. Un retraso de dos días en cualquiera de ellos consume el margen completo de la semana 5.

**Dónde se rompe primero.** En M10, la carga del catálogo. Es la tarea de mayor volumen, depende íntegramente de que Koral entregue datos depurados en la semana 1, y de ella cuelgan las ubicaciones útiles, la trazabilidad, las recetas y la toma física. Si el catálogo no está cargado el jueves 27 de agosto, la toma física del fin de semana no se puede hacer, y con ella se cae el corte del 31.

**El segundo punto de quiebre** es la toma física. Es una operación de campo que compite con la operación real del hotel y que no se puede comprimir agregando gente al proyecto: si el almacén no está disponible ese fin de semana, no hay forma de recuperarlo dentro del cronograma.

---

# 4. Qué corre en paralelo

La compresión a cinco semanas solo funciona porque tres bloques avanzan en paralelo con la ruta crítica.

| Bloque | Tareas | Ventana | Por qué es independiente |
|---|---|---|---|
| Personal completo | M29 a M34 | 12 ago – 4 sep | No comparte datos con inventario, compras ni punto de venta. Es la principal palanca de compresión |
| Depuración de datos por Koral | Insumo de M10 y M11 | 10 – 21 ago | Es trabajo de Koral, no del equipo de implantación; corre desde el día uno |
| Etiquetado físico | Códigos de barras de ubicación y anaquel | 24 ago – 4 sep | Trabajo de campo del almacén, no depende del avance de la configuración |
| Compras y ventas con punto de venta | M21 a M23 con M24 a M28 | 31 ago – 4 sep | Ambos bloques dependen de datos maestros, pero no entre sí |

---

# 5. Fechas de entrega de Koral

Estas entregas no las ejecuta el equipo de implantación. Cada una tiene fecha porque cada una bloquea algo con fecha.

| Entrega | Fecha límite | Qué bloquea si llega tarde |
|---|---|---|
| Criterio de qué característica abre variante en cada familia | **lun 17 ago** | H3, y con él toda la carga del catálogo |
| Catálogo de productos depurado y reclasificado | **vie 21 ago** | H5 y la toma física |
| Maestro de proveedores y clientes depurado | **vie 21 ago** | El circuito de compras y ventas |
| Plantilla de almacenes y ubicaciones completa | **vie 21 ago** | H6 y la toma física |
| Designación de las dos personas que autorizan excepciones de cierre | **jue 20 ago** | El control de cierres contables |
| Fichas del personal completas | **mié 26 ago** | La corrida de nómina |
| Designación del grupo autorizado a otorgar descuentos | **vie 28 ago** | La configuración de las cajas |
| Recetas de los platos de mayor rotación | **vie 28 ago** | El descuento automático de ingredientes |
| Cuenta contable del 10% de servicio | **lun 31 ago** | La configuración del punto de venta |
| Decisión 57: a quiénes se les crea usuario | **mié 2 sep** | H9 y las pruebas por área |
| Disponibilidad del almacén para la toma física | **sáb 29 ago** | H8 y la salida completa |
| Condiciones de liquidación con las tiendas | sin fecha crítica | Solo la primera recepción de mercancía en resguardo. No bloquea la salida |

---

# 6. Lo que no cabe en cinco semanas

Tres cosas del alcance original no entran en la ventana al 10 de septiembre. Están aquí para que la decisión sea consciente y no un descubrimiento de la semana 5.

## La nómina en paralelo

**Qué pedía la decisión 49.** Correr dos o tres quincenas en paralelo con el cálculo actual antes de dejar la hoja de cálculo, porque un error en la nómina se paga con el sueldo de una persona real.

**Qué cabe.** Una sola: la quincena del 16 al 31 de agosto, que se calcula en paralelo entre el 1 y el 2 de septiembre. La siguiente quincena cierra el 15 de septiembre, después de la fecha límite.

**La opción recomendada.** Separar la salida de la nómina del resto del sistema. Todo lo demás sale el 10 de septiembre; la nómina sale el 16 de septiembre, después de correr en paralelo las quincenas del 31 de agosto y del 15 de septiembre. Es un desfase de cuatro días hábiles sobre un módulo que no bloquea a ningún otro, y compra la validación que la decisión 49 pedía.

**Si se decide salir igual el 10.** Queda con una sola quincena de validación, y el riesgo se asume explícitamente.

## Las recetas completas

**Qué pedía la decisión 41.** Receta por plato, arrancando por los de mayor rotación y completando el resto durante la operación.

**Qué cabe.** Solo los platos de mayor rotación. El levantamiento de recetas es trabajo de campo con la cocina y tiene una sola semana disponible.

**Consecuencia.** Los platos sin receta no descuentan ingredientes al venderse, y su consumo aparecerá como diferencia en el conteo hasta que la receta se cargue. Es lo que la propia decisión previó, pero conviene que la cocina sepa que el catálogo de recetas nace incompleto a propósito.

## La holgura entre pruebas y salida

**Lo normal.** Dejar una semana entre el cierre de pruebas y la salida, porque las pruebas generan retrabajo por definición.

**Lo que hay.** Un día: H10 el miércoles 9, H11 el jueves 10.

**Cómo se contiene.** Adelantando las pruebas de cada área al momento en que su configuración cierra, en lugar de concentrarlas todas en la semana 5. Compras y almacén pueden probarse desde el 3 de septiembre; punto de venta desde el 4. Las pruebas de la semana 5 quedan entonces como verificación integrada y no como primer contacto del usuario con el sistema.

---

# 7. Riesgos con fecha

| Riesgo | Cuándo se manifiesta | Efecto | Cómo se contiene |
|---|---|---|---|
| El catálogo depurado no llega el 21 de agosto | Semana 3 | Se cae H5, la toma física y el corte del 31. Es la falla que no tiene recuperación | Seguimiento diario de la depuración desde el 10 de agosto, no revisión semanal |
| El criterio de variantes se define tarde o cambia después | Semana 2 o después de H5 | Obliga a rehacer productos uno por uno, porque la regla no se puede modificar | Aprobación formal en H3, con firma, antes de cargar un solo producto |
| El almacén no está disponible el fin de semana del 29 | Semana 4 | Se cae H8 y con él la salida completa | Confirmar la disponibilidad con la operación en la semana 1, no en la semana 3 |
| Las conversiones de unidad quedan mal definidas | Después de la carga | Los movimientos registrados con esa conversión no se corrigen hacia atrás | Revisión con almacén y compras antes del 19 de agosto |
| Aparecen hallazgos bloqueantes el 9 de septiembre | Semana 5 | No hay día para corregirlos antes de la salida | Adelantar las pruebas por área al cierre de cada configuración, según el punto 6 |
| Los datos del personal llegan incompletos | Semana 3 | El primer recibo se calcula mal | Cerrar las fichas el 26 de agosto, antes de la primera corrida |
| Agosto es temporada alta y la operación no libera gente | Todo el proyecto | Retrasa las entregas de Koral y la toma física | Definir en la semana 1 quién de cada área tiene tiempo asignado al proyecto |

---

# 8. Qué hay que decidir esta semana

Cuatro cosas, todas antes del viernes 14 de agosto, porque cada una condiciona el resto del cronograma.

1. **Si la nómina sale el 10 o el 16 de septiembre.** Es la única decisión que cambia el alcance de la fecha límite.
2. **Quién de cada área queda asignado al proyecto y con cuánto tiempo.** Sin esto, las entregas de Koral compiten con la operación diaria y pierden.
3. **Si el almacén está disponible el fin de semana del 29 y 30 de agosto.** Si no lo está, hay que reubicar la toma física y todo el corte se mueve.
4. **Si el 10 de septiembre es la salida a producción o el cierre de la configuración.** Si el 1 de octubre sigue siendo la fecha de operación real, la ventana entre ambas fechas se convierte en tres semanas de estabilización, y varios de los riesgos de este cuadro dejan de serlo. Este cronograma está construido bajo la lectura más exigente: producción el 10 de septiembre.
