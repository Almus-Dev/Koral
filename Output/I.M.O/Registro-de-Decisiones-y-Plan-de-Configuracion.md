---
proyecto: Koral Morrocoy
documento: Registro de Decisiones y Plan de Configuración
version: 2.0
fecha: 2026-08-06
salida a producción: 1 de octubre de 2026
---

# Registro de Decisiones y Plan de Configuración - Koral

## Dónde estamos

Las 57 decisiones de configuración quedaron cerradas entre la revisión del documento de decisiones y la sesión de trabajo con la dirección. Este documento deja constancia de lo definido, incorpora las precisiones que surgieron después de la sesión, y traduce todo en el plan de configuración con su orden de ejecución.

Quedan cuatro puntos por definir, listados al final. Ninguno detiene el arranque de la configuración.

## Cómo leer este documento

Cada decisión trae tres cosas:

- **Se decidió:** la opción escogida.
- **Qué implica:** lo que cambia en la operación diaria a partir de esa elección.
- **Por qué:** el razonamiento que llevó a escogerla, tomado de la sesión de trabajo y de las aclaratorias posteriores de la dirección.

Cuando algo quedó pendiente o requiere desarrollo, se dice explícitamente.

## Lo que no se decide aquí

Koral arranca sobre dos desarrollos que Almus ya construyó y que funcionan de una sola manera: el paquete venezolano, que resuelve la tasa del BCV, la facturación fiscal, las retenciones, los libros de IVA, el IGTF y el cálculo de la nómina venezolana; y el sistema hotelero, que resuelve reservas, cobro de anticipos, cargo de consumos a la habitación y estado de habitaciones. Nada de eso aparece en este registro porque no había alternativas que evaluar.

---

# 1. Decisiones cerradas

## La empresa y la contabilidad

### 1 · Qué empresas se llevan en el sistema

**Se decidió:** una sola empresa, la operadora del hotel.

**Qué implica:** una sola contabilidad dentro del sistema y una sola configuración fiscal. Nadie tiene que seleccionar empresa al registrar un documento. Las demás empresas del grupo mantienen su contabilidad fuera de Odoo por ahora.

**Por qué:** el grupo opera bajo un solo RIF en la operación hotelera, y concentrar la implantación en el hotel permite estabilizarla antes de sumar otras entidades. Las tiendas que operan dentro del hotel se resolvieron por otra vía, que no requiere crearlas como empresas del sistema (ver definición nueva 1).

### 2 · Catálogo de cuentas cuando hay varias empresas

**Se decidió:** no aplica en esta etapa. Cuando entren las demás empresas del grupo, cada una llevará el mismo catálogo pero cargado de forma independiente.

**Qué implica:** cada empresa tendrá cuentas propias con la misma numeración, de modo que un cambio en una no afecte a las otras y los reportes sigan siendo comparables entre ellas.

**Por qué:** compartir literalmente las cuentas entre empresas acopla la contabilidad de varias entidades en un solo registro, y un cambio se propaga a todas a la vez. La numeración común da la comparabilidad sin ese riesgo. Antes de incorporar cada empresa hay que revisar su plan actual para asegurar que sea compatible con una consolidación futura.

### 3 · Caracas y el hotel como sedes separadas

**Se decidió:** una sola empresa, sin sedes formalmente separadas. La distinción entre Caracas y el hotel se obtiene con diarios de venta distintos y con la contabilidad analítica.

**Qué implica:** los usuarios no seleccionan sede al trabajar, y los bancos, sus extractos y la conciliación quedan en un solo lugar. La información separada de Caracas y del hotel se obtiene igual, de dos fuentes: la contabilidad analítica de la decisión 5, donde cada ingreso y cada gasto queda marcado con la sede que lo generó, y los diarios de venta separados de la decisión 7. Con eso se emite el resultado de cada sede por separado sin necesidad de que existan dos empresas.

**Por qué:** el contador confirmó que existe un solo RIF y que la declaración se presenta consolidada, de modo que las sedes formales no aportan nada fiscalmente. Además tienen un costo operativo concreto: los bancos y sus extractos quedan siempre en la empresa matriz, así que conciliar un cobro de la sede obliga a trabajar en ambas a la vez. La separación que sí se necesita, que es distinguir lo vendido en Caracas de lo vendido en Tucacas por el impuesto municipal, se consigue con diarios de venta separados.

### 4 · Operaciones entre empresas del grupo

**Se decidió:** no se activan.

**Qué implica:** nada cambia hoy, porque al haber una sola empresa no existe contraparte dentro del sistema.

**Por qué:** la función sirve para que un documento registrado en una empresa cree automáticamente su contraparte en otra. Se reevaluará cuando entren las demás empresas del grupo, que es cuando aparece el flujo cruzado.

### 5 · Contabilidad analítica

**Se decidió:** obligatoria, con asignación automática en los casos repetitivos, y con un segundo criterio además de la unidad de negocio.

**Qué implica:** todo ingreso y todo gasto queda clasificado por unidad de negocio (hospedaje, A&B, marina, estacionamiento, Boca Seca, arrendamientos) y además por un segundo eje como temporada, evento o proyecto. Un registro no se puede confirmar sin esa clasificación. En las operaciones repetitivas el sistema la asigna solo, mediante reglas que se cargan una vez: por producto, por proveedor o por cuenta contable. En el resto la elige el usuario al registrar.

**Por qué:** es lo que permite conocer el resultado de cada unidad de negocio sin crear empresas ni cuentas contables adicionales. Se escogió obligatoria porque si el sistema no la exige, cualquier omisión deja un hueco y el estado de resultados por área nunca cuadra. La dirección señaló expresamente que el éxito de esta decisión depende de explicarle bien al equipo por qué se está pidiendo ese dato.

### 6 · Cierre de períodos contables

**Se decidió:** cierre mensual que admite excepciones autorizadas, más cierre definitivo al cerrar el ejercicio auditado.

**Qué implica:** un mes cerrado no se modifica salvo autorización expresa, que queda registrada con responsable y motivo. Una vez auditado el ejercicio, ese año queda sin posibilidad de modificación.

**Por qué:** hoy se registran asientos con fecha de hasta un año atrás, lo que cambia cifras de reportes ya emitidos y de declaraciones ya presentadas. Se quería bloquear eso sin perder la posibilidad de corregir un error legítimo, y esa combinación es la que lo permite.

### 7 · Diarios de ventas

**Se decidió:** un diario de ventas por cada punto que emite facturas, con uno por cada máquina fiscal, y separación por sede. Las compras también se separan por sede.

**Qué implica:** en el sistema se crea un diario de ventas por cada punto que emite, y cada uno lleva su propia numeración correlativa, alineada con la de su máquina fiscal. El libro de ventas que se presenta al fisco sigue siendo uno solo y consolidado: los diarios alimentan ese libro y además permiten ver por separado las ventas de cada punto y de cada sede. Son más diarios que crear y mantener.

**Por qué:** cada máquina fiscal lleva su propia numeración, así que necesita su propio diario para que el correlativo cuadre. La separación por sede responde al impuesto municipal: lo que se vende en Caracas no tributa en la misma alcaldía que lo del hotel. Sobre las compras, el contador indicó que fiscalmente no hace falta separarlas, porque la declaración es consolidada; se mantienen separadas por criterio de gestión.

### 8 · Habilitación en más de una empresa

**Se decidió:** no aplica en esta etapa.

**Qué implica:** al existir una sola empresa, ningún usuario selecciona empresa al trabajar.

**Por qué:** la decisión regresa cuando entren las demás empresas del grupo.

### 9 · Quién autoriza las excepciones de cierre

**Se decidió:** se habilitan dos personas distintas para autorizar, de modo que cualquiera de las dos pueda hacerlo. Los nombres se designan aparte.

**Qué implica:** cualquiera de los dos puede levantar puntualmente un cierre para corregir un período, y esa autorización queda registrada con responsable y motivo.

**Por qué:** se optó por dos autorizadores para que siempre haya uno disponible y las correcciones no dependan de una sola persona.

## Los productos

### 10 · Cómo se agrupan los productos

**Se decidió:** dos niveles, familia por naturaleza y subfamilia dentro de cada una. Por ejemplo bebidas, y dentro alcohólicas y no alcohólicas.

**Qué implica:** cada familia comparte su forma de costeo y sus cuentas contables, y el segundo nivel permite distinguir donde ese tratamiento cambia. Un producto que usan varias áreas existe una sola vez en el catálogo.

**Por qué:** la dirección fue explícita en que los productos no pueden agruparse por quien los consume. El ejemplo que usó: el agua es agua, y la puede consumir el personal de limpieza, ama de llaves, el huésped o venderse en el bar. Agruparla por consumidor obligaría a duplicarla o a asignarla a un área que no es la única que la usa. El consumo por área se resuelve por otra vía, que ya es la que Koral usa: la expedición desde el almacén. El producto se transfiere al almacén del área y, al salir de ahí hacia el consumo, se determina la cuenta de gasto que corresponde. La misma agua va a atención al huésped si sale de ama de llaves y a costo de alimentos y bebidas si sale del bar. El sistema debe respetar ese esquema, y para eso cada destino de consumo se configura con su propia cuenta de gasto: un movimiento entre dos almacenes no genera asiento contable, porque la mercancía sigue siendo del hotel y solo cambió de sitio.

### 11 · Qué característica abre una variante

**Se decidió:** abren variante la presentación, el tamaño, el contenido, la marca y el color.

**Qué implica:** cada combinación es una referencia independiente, con su propio inventario, su propio precio de proveedor y su propia línea en cada conteo. El catálogo queda más extenso, pero se sabe exactamente qué marca y qué presentación hay en existencia.

**Por qué:** la operación necesita distinguir el agua en todos sus formatos y marcas, porque no es lo mismo la botella plástica pequeña que la de vidrio, ni una marca que otra al momento de comprar o de reponer. Importante: una vez que una característica se usa en un producto, la regla de esa característica ya no se puede cambiar, así que conviene aplicarla a todo lo ya reclasificado antes de seguir cargando.

**Nota:** el criterio detallado de qué características abren variante en cada familia de productos está en definición.

### 12 · Unidades de compra y de consumo

**Se decidió:** cada producto lleva su unidad base, que es aquella en la que se cuenta y se valora el inventario (gramos, unidades, litros). La unidad de compra se define aparte, por proveedor, y se usa código de barras por empaque y por variante.

**Qué implica:** el almacén cuenta siempre en la unidad base (gramos, unidades, litros), la orden de compra sale en la unidad del proveedor (paquete, bulto, saco) y el sistema convierte al recibir. La conversión se define una sola vez por producto.

**Por qué:** se compra y se consume en unidades distintas, y traducir a mano cada compra es una fuente de error permanente. El ejemplo que se trabajó en la sesión fue la harina: se mide en gramos, se presenta en paquetes, y se compra por paquete o por bulto. Advertencia importante: si una conversión se define mal, corregirla después no arregla los movimientos ya registrados con ella, así que hay que cerrarlas antes de la carga inicial.

### 13 · Códigos internos y de barras

**Se decidió:** se usa el código de barras de fábrica donde exista. Para los productos que no lo traen, se imprime una etiqueta que se coloca en el anaquel, no en cada unidad. Las ubicaciones del almacén también llevan código de barras.

**Qué implica:** los conteos y las recepciones se pueden hacer con lector, tanto identificando el producto como la ubicación donde está.

**Por qué:** el objetivo real es poder contar con lector, no etiquetar por etiquetar. Etiquetar unidad por unidad los productos que no traen código no es sostenible en la práctica y se abandonaría en semanas. La etiqueta en el anaquel, acompañada del nombre del producto en grande, cumple la misma función con una fracción del trabajo.

### 14 · Estructura del maestro de contactos

**Se decidió:** los clientes y proveedores que son empresas se registran como una sola ficha, la de la empresa, y de ella cuelgan sus contactos y sus direcciones. Un contacto anidado es un registro que depende de otro: puede ser una persona que trabaja en esa empresa (el vendedor, la persona de cobranzas) o una dirección de esa empresa (dirección de facturación, dirección de entrega). Quien actúa por cuenta propia y no pertenece a ninguna empresa se registra como persona natural, sin nada colgando.

**Qué implica:** la ficha de la empresa es la que lleva el RIF y es la entidad fiscal: ahí consolidan el saldo, las retenciones y los libros, sin importar a cuál de sus direcciones o contactos se haya emitido el documento.

El caso que esto resuelve es el de una empresa con varias direcciones fiscales, donde según la operación hay que facturar a una o a otra. Cada dirección se registra colgando de la empresa, y al emitir la factura se elige a cuál va: el documento sale con esa dirección, pero el sistema sigue reconociendo a la empresa como el tercero contable, de modo que el estado de cuenta no se fragmenta. Lo mismo aplica a las direcciones de entrega cuando la mercancía se despacha a un sitio distinto del fiscal.

También permite que cambie la persona de contacto sin tocar el registro fiscal: se actualiza el contacto que cuelga y la empresa queda igual.

**Por qué:** un mismo tercero repartido en varios registros independientes fragmenta el saldo y los libros fiscales, que es justo el problema que se está depurando. La validación del RIF y el bloqueo de RIF repetidos ya vienen resueltos por el paquete venezolano, así que lo único que había que definir era la estructura.

### 15 · Estructura de las listas de precios

**Se decidió:** una lista base y las demás derivadas de ella por porcentaje.

**Qué implica:** el precio de cada segmento (empleados, agencias, eventos) se calcula solo y se actualiza cuando cambia la base, sin editar lista por lista.

**Por qué:** mantener precios independientes en cada lista obliga a replicar manualmente cada cambio, y en la práctica terminan desalineados. Las tarifas de habitación no entran aquí: las maneja el sistema hotelero. Esto aplica a alimentos y bebidas, lavandería, estacionamiento y marina.

### 16 · Moneda de los precios de venta

**Se decidió:** los precios se cargan en divisa.

**Qué implica:** el precio se mantiene estable frente a la variación de la tasa, y la lista solo se edita cuando cambia la política comercial.

**Por qué:** con precios cargados en bolívares, cada movimiento de tasa obliga a reeditar toda la lista a mano. El cobro en bolívares con la tasa del día lo resuelve el paquete venezolano en cualquiera de los dos casos.

### 17 · Servicios y consumibles internos

**Se decidió:** las tres categorías conviven, con la asignación propuesta. Servicios: lavandería, estacionamiento, marina y decoraciones. Con control de existencias: químicos, repuestos, blancos, víveres y bebidas. Sin control de existencias: papelería y artículos menores.

**Qué implica:** control de existencias significa que el sistema lleva la cuenta de cuánto hay de ese artículo: aparece en los conteos, avisa cuando baja del mínimo y forma parte del valor del inventario. Lo que no lo tiene se registra como gasto al comprarse y el sistema no sabe cuánto queda. Los servicios no generan ningún movimiento de almacén: se cobran o se cargan a la habitación y nada más.

**Por qué:** poner todo bajo control de existencias obliga a registrar entradas y salidas de artículos cuyo control no vale el esfuerzo; dejar todo fuera renuncia al control donde sí se pierde dinero. El error de carga más común es registrar un servicio como si fuera mercancía, así que hay que revisarlo durante la carga.

### 18 · Quién crea y modifica el catálogo

**Se decidió:** Compras crea productos y variantes; las categorías se crean junto con Contabilidad.

**Qué implica:** el catálogo mantiene un solo criterio, y la configuración contable de cada categoría queda en manos de quien responde por ella. Dar de alta un producto nuevo exige coordinación entre ambas áreas cuando implica una categoría nueva.

**Por qué:** la creación de productos ya está restringida a Compras, y esta decisión lo mantiene. La fragmentación del catálogo actual no viene de quién carga, sino de haber creado un producto distinto por cada presentación en lugar de usar variantes, y de no tener criterio unificado sobre qué es almacenable y qué consumible; por eso la regla de variantes debe aplicarla una sola área. La configuración contable de una categoría, en cambio, es una decisión contable y no de compras.

### 19 · Quién da de alta proveedores y clientes

**Se decidió:** cada área da de alta sus terceros, respetando los datos obligatorios.

**Qué implica:** no hay que esperar a un área central para registrar una operación con un proveedor nuevo. La consistencia de la clasificación depende de cada área.

**Por qué:** se busca que cada departamento sea responsable de crear sus propios contactos, para repartir la carga de trabajo y evitar que un único responsable se convierta en punto de fricción para todas las áreas. Nota factual: el bloqueo de RIF repetidos del paquete venezolano acota el riesgo de duplicados en cualquiera de los dos esquemas.

### 20 · Quién puede vender fuera de la lista de precios

**Se decidió:** el descuento queda bloqueado para todos, salvo para un grupo reducido de personas autorizadas por la dirección, que se designan aparte.

**Qué implica:** el precio cobrado coincide siempre con la lista, salvo cuando interviene alguien del grupo autorizado. En la caja esto se resuelve con la configuración estándar, restringiendo la modificación de precios a los perfiles autorizados.

**Por qué:** se designó ese grupo porque es el que hoy autoriza las excepciones de precio en la práctica; la decisión formaliza en el sistema una responsabilidad que ya existe. Advertencia factual: fuera de la caja, en cotizaciones y facturas del escritorio, el sistema habilita el descuento para todos los usuarios de venta o para ninguno; si el bloqueo debe aplicar también ahí, requiere desarrollo (ver sección 3).

## El almacén y las compras

### 21 · Un depósito o varios

**Se decidió:** un almacén por área. Además, el almacén de resguardo de las tiendas (ver definición nueva 1) y una estructura para las habitaciones por módulo y número.

**Qué implica:** cada área lleva sus propios movimientos de entrada y salida y se sabe qué hay en cada una. Los almacenes previstos son: general, cocina, ama de llaves, lavandería, mantenimiento, administración, los demás espacios de guarda, el de resguardo de las tiendas y el de habitaciones. La lista definitiva se cierra al montar la estructura. Cada almacén necesita a alguien que registre sus movimientos.

**Por qué:** hoy hay mercancía repartida en espacios que nadie controla en el sistema, y la dirección quiere ver cuánto tiene cada área. La estructura de habitaciones responde a poder consultar por módulo qué hay en cada una.

### 22 · Zonas del depósito y conteos programados

**Se decidió:** zonas por área física dentro de cada almacén, cada una con su frecuencia de conteo. Frecuencia mínima semanal.

**Qué implica:** dentro de cada almacén se definen zonas, que replican la realidad física del espacio. En el almacén general son los anaqueles, la cava, el piso principal, la oficina de artículos de alto valor y el pasillo exterior. Dentro de cada zona se definen las ubicaciones puntuales donde se guarda cada cosa. A cada zona se le asigna cada cuántos días toca contarla, y el sistema indica cuál tiene el conteo vencido, de modo que las diferencias se detectan dentro de ese plazo y no al final del año.

**Por qué:** el inventario del sistema está desalineado desde 2024, y una toma anual no evita que vuelva a pasar. Contar seguido y por partes pequeñas es lo que mantiene la foto alineada. Hoy se cuenta a diario de forma manual, lo que la propia dirección reconoció como insostenible; la frecuencia semanal por zona es el punto de equilibrio.

### 23 · Método de costo del inventario

**Se decidió:** costo promedio.

**Qué implica:** el costo de cada producto se recalcula solo con cada compra, y las variaciones de precio se reparten entre las unidades en existencia. Es el costo con el que se valora cada salida, cada plato y cada merma.

**Por qué:** se evaluó usar el costo de la última compra, que es lo que mejor refleja el costo de reposición en una economía inflacionaria. No es posible: el sistema no lo ofrece, y ese método está prohibido por las normas contables vigentes desde hace dos décadas, entre otras razones porque deja el inventario del balance valorado a precios cada vez más viejos y porque permite alterar la utilidad del ejercicio comprando más o menos al cierre. De los tres métodos disponibles, el promedio es el que más se acerca al objetivo: el método de primeras entradas y primeras salidas daría un costo todavía más bajo. El desfase entre el costo contable y el costo de reposición se atiende donde corresponde, que es en el precio de venta.

### 24 · Momento en que el inventario impacta la contabilidad

**Se decidió:** al cierre del mes. El sistema calcula el asiento y el equipo contable lo valida después de revisarlo.

**Qué implica:** durante el mes los movimientos de almacén no tocan la contabilidad. Se van acumulando en un reporte que muestra, de un lado, el valor de inventario que la contabilidad tiene registrado y, del otro, el valor real según las existencias. El cálculo lo hace el sistema completo: nadie arma nada a mano. Cuando el equipo confirma que el mes está cerrado y el reporte es correcto, valida y el sistema contabiliza un solo asiento por la diferencia entre ambos valores.

Existe también una modalidad totalmente automática, en la que el sistema genera y contabiliza el asiento solo al cierre de cada mes. Se descartó porque contabiliza sin pasar por revisión: cualquier corrección tendría que hacerse después, sobre un asiento ya registrado.

**Por qué:** se quería que las devoluciones y ajustes del mes se netearan antes de llegar a la contabilidad, en lugar de generar movimientos contables cruzados como ocurría en la versión anterior. Y que el equipo revise antes de que el asiento afecte los libros, no después. La condición es tener el inventario revisado antes del cierre de cada mes.

### 25 · Pasos de la recepción de mercancía

**Se decidió:** un paso: se recibe y la mercancía queda disponible. Para los productos que siempre van directo a otra área, se configura en su ficha un recorrido automático, de modo que al recibirlos el sistema los dirija solo al almacén que corresponde.

**Qué implica:** un solo documento por recepción. La verificación contra el pedido y la factura se sigue haciendo antes de validar, como hoy.

**Por qué:** toda la mercancía llega al mismo almacén y allí se queda, así que separar recepción y almacenamiento agregaría una transacción adicional al ochenta y cinco por ciento de las compras sin aportar control. Las excepciones, que son los productos que van directo a otra área, se resuelven con ese recorrido automático configurado en el propio producto.

### 26 · Control de lotes y vencimiento

**Se decidió:** en todo el catálogo de alimentos y bebidas.

**Qué implica:** cada recepción y cada salida de esos productos exige indicar el lote y su fecha de vencimiento, incluidas las salidas diarias a cocina. A cambio, el sistema alerta lo próximo a vencer y permite despachar primero lo más antiguo.

**Por qué:** se extendió a todo el catálogo de alimentos y bebidas para llevar un control más preciso del inventario de alimentos. Consecuencia a dimensionar: cada recepción y cada salida a cocina exigirá indicar lote, y en la toma física inicial cada línea de conteo de estos productos debe traer lote y vencimiento, lo que cambia la planilla con la que se sale a contar.

### 27 · Cómo se dispara la reposición

**Se decidió:** con mínimos, en modo aviso. A cada producto se le define una cantidad mínima por almacén; cuando la existencia baja de ese número, el sistema lo lista y una persona decide qué pedir.

**Qué implica:** el cálculo de qué está por debajo del mínimo lo hace el sistema; la decisión de compra sigue siendo de una persona. Requiere tener mínimos definidos por producto.

**Por qué:** el modo automático genera el pedido solo, pero funciona sobre el stock que el sistema tenga registrado. Con el inventario aún por realinear, eso produciría compras equivocadas. El modo aviso da el beneficio principal, que es dejar de contar y calcular a mano, sin ese riesgo. Se puede pasar a automático producto por producto cuando los mínimos estén validados con datos.

### 28 · Aprobación de compras por monto

**Se decidió:** sin aprobación en el sistema.

**Qué implica:** cualquier usuario de compras confirma cualquier monto. La autorización se sigue gestionando por el canal actual.

**Por qué:** lo que la operación necesita no es aprobar por monto sino por rubro. Como lo planteó la dirección: mil dólares en comida es una compra normal, mientras que trescientos en otro rubro puede no serlo. El sistema solo permite condicionar por monto; condicionar por categoría de producto exige desarrollo, y se decidió no hacerlo. Aprobar por monto habría obligado a intervenir compras rutinarias sin agregar control real.

### 29 · Control de la factura contra lo recibido

**Se decidió:** por cantidades recibidas en mercancía; por cantidades pedidas en servicios.

**Qué implica:** la factura de mercancía se registra por lo que el almacén dio por recibido, así que no se puede facturar algo que no llegó. En servicios, donde no hay recepción física que registrar, se factura contra lo pedido.

**Por qué:** el riesgo que se quería cerrar es pagar mercancía que no entró. Aplicar el mismo criterio a los servicios habría trabado su facturación sin motivo.

### 30 · Acuerdos con proveedores recurrentes

**Se decidió:** acuerdos con precio pactado y fecha de vencimiento para los consumos autorizados, y plantillas de pedido para lo recurrente.

**Qué implica:** el acuerdo es un documento donde se registran el proveedor, los productos, el precio pactado, la cantidad autorizada y hasta cuándo rige; cada pedido toma ese precio y va descontando de la cantidad, y el sistema muestra cuánto queda y cuándo vence. La plantilla es otra cosa: una lista de productos precargada que sirve para generar el pedido repetitivo sin volver a armarlo, definiendo el precio en cada compra.

**Por qué:** el caso que la dirección describió es el de consumos con tope autorizado: combustible por un monto mensual, o una cantidad definida de botellones de agua por oficina. Ese esquema encaja con el acuerdo con vigencia. Para el resto de los pedidos repetitivos, donde el precio se negocia cada vez, la plantilla ahorra la captura sin comprometer precio.

### 31 · Registro de la merma

**Se decidió:** cada merma se registra al ocurrir, con fecha, cantidad, responsable y motivo, en una cuenta de gasto separada.

**Qué implica:** la merma se consulta por producto, período y zona, separada de las diferencias de conteo. Exige registrarla en el momento en que ocurre.

**Por qué:** hoy la merma aparece como un faltante genérico en el conteo, sin poder distinguir vencimiento, daño o error de conteo, y por lo tanto sin poder gestionar la causa. Separarla es lo que permite que Gerencia vea cuánto cuesta al mes y por área.

### 32 · Quién aprueba las compras

**Se decidió:** sin efecto.

**Qué implica:** al no haber aprobación en el sistema (decisión 28), no hay aprobador que designar.

**Por qué:** deriva directamente de la decisión anterior.

### 33 · Quién ajusta inventario y registra mermas

**Se decidió:** el almacenista registra los conteos y Contraloría realiza los ajustes. El límite de merma por producto queda como desarrollo.

**Qué implica:** el almacenista registra lo que contó. Cuando ese conteo no coincide con lo que el sistema tenía, la corrección de la cantidad y de su valor la hace Contraloría. Son dos manos distintas sobre la misma operación.

**Por qué:** un ajuste de inventario modifica el valor del almacén sin que exista una compra o una venta detrás, así que separar el conteo del ajuste es un control básico. El tope de merma por producto que se planteó no existe de forma estándar en el sistema: mientras no se desarrolle, opera como control por reporte.

## Las cajas y el restaurante

### 34 · Cuántas cajas se configuran

**Se decidió:** una caja por punto físico, cada una descontando del inventario de su área.

**Qué implica:** cada punto tiene su cierre, su arqueo y sus ventas por separado, y se abre y cierra una sesión por caja.

**Por qué:** el cierre por punto es la principal herramienta de control de efectivo. Con una sola caja para todo, un faltante no se puede atribuir a un punto concreto y el inventario se descuenta de un solo lugar.

### 35 · Formas de pago

**Se decidió:** un medio por cada forma real de cobro, cada uno con su banco o caja de destino y con número de referencia obligatorio donde aplique.

**Qué implica:** el cierre muestra cuánto entró por efectivo en bolívares, efectivo en divisas, punto bancario, pago móvil y transferencia, y cada uno se concilia contra su destino. El impuesto a las transacciones en divisa se aplica exactamente a los medios que corresponde.

**Por qué:** lo que no está separado en el sistema no aparece separado en el cierre, y la conciliación se vuelve una reconstrucción manual. Es además lo que necesita el cobro de anticipos del hotel para conciliar automáticamente.

### 36 · Apertura y cierre de caja

**Se decidió:** cierre por turno, más registro del efectivo entregado en cada relevo.

**Qué implica:** cada cajero cuenta al abrir y al cerrar, de modo que una diferencia queda asociada a un turno y a quien lo cerró, y el efectivo que pasa de mano en mano en el relevo queda documentado.

**Por qué:** es la forma en que se opera hoy y no se consideró necesario cambiarla. El sistema formaliza el arqueo por turno, que hasta ahora se anotaba en un cuaderno de novedades, y deja registrado el efectivo que pasa de mano en mano en el relevo.

### 37 · Descuadre máximo tolerado

**Se decidió:** ninguno. La caja debe cuadrar, y cualquier diferencia exige autorización de un gerente para poder cerrar.

**Qué implica:** se configura el monto de diferencia tolerada en cero, de modo que el sistema no permite cerrar la caja con ninguna diferencia, por mínima que sea, hasta que un gerente la revise y la autorice.

**Por qué:** la posición de la dirección es que la caja cuadra o no cierra. Configurarlo en cero convierte esa política en una regla del sistema y no en una expectativa.

### 38 · Plano de mesas por zona

**Se decidió:** un plano por zona de servicio, con mesas numeradas sin repetirse entre zonas.

**Qué implica:** cada mesonero trabaja sobre el plano de su zona (salón, piscina, muelle) y puede mover la cuenta de una zona a otra si el cliente se traslada.

**Por qué:** con un solo plano, las tres zonas se mezclan en la misma pantalla y la operación se vuelve confusa en hora pico.

### 39 · Tratamiento del 10% de servicio

**Se decidió:** se agrega manualmente en cada cuenta.

**Qué implica:** el monto a repartir entre los mesoneros se reconstruye a partir de las ventas que lo incluyeron, y no de un total automático.

**Por qué:** el 10% no es obligatorio en la práctica de Koral: el mesonero le pregunta al cliente si desea agregarlo y el cliente decide. Como no aplica a todas las cuentas, no puede sumarse de forma automática.

### 40 · Cómo llega la comanda a cocina y barra

**Se decidió:** impresoras en cocina y barra desde el arranque, con pantalla en cocina como etapa posterior.

**Qué implica:** la comanda llega impresa a cada estación, con una impresora por estación que hay que comprar y mantener. La confirmación de que el pedido llegó se sigue haciendo por el canal actual hasta que entre la pantalla.

**Por qué:** la pantalla se instalará en una fase posterior; en el arranque se repone el canal impreso, que es el que la operación conoce. Contexto: hoy la impresora de cocina está dañada y la caja imprime todas las comandas, así que reponerla resuelve el problema inmediato.

### 41 · Recetas

**Se decidió:** receta por plato, que descuenta los ingredientes al vender, más registro de las producciones del día.

**Qué implica:** cada venta descuenta los ingredientes definidos, y las preparaciones intermedias (salsas, porcionado, buffet) existen como producto con su propio costo y existencias. Exige levantar y mantener las recetas y registrar cada producción cuando se hace.

**Por qué:** es lo que conecta las ventas con el consumo de insumos y permite costear el plato. Sin recetas, el inventario de ingredientes nunca se explica por lo vendido y las diferencias se descubren solo en el conteo. Conviene arrancar por los platos de mayor rotación y completar el resto durante la operación.

### 42 · Organización de la pantalla del cajero

**Se decidió:** productos agrupados por estación y familia, mostrando en cada caja solo los suyos.

**Qué implica:** cada caja presenta un listado corto y las comandas se dirigen a la estación que corresponde. Hay que mantener la agrupación cuando cambia la carta.

**Por qué:** define cuántos pasos toma registrar un consumo en hora pico, y es además lo que enruta cada comanda a cocina o a barra.

### 43 · Modos de servicio

**Se decidió:** se habilitan los modos de servicio, cada uno con su propio precio.

**Qué implica:** los modos de servicio son formas de atención que el cajero elige al abrir la cuenta: comedor, para llevar y comedor de personal. Cada modo puede tener su propia lista de precios, así que el consumo de personal aplica su precio automáticamente y queda identificado como tal en los reportes.

**Por qué:** sin modos, el precio del consumo de personal se ajusta a mano en cada caso y nunca queda tipificado, así que no se puede saber cuánto cuesta alimentar al equipo.

### 44 · Emisión de factura en el punto de venta

**Se decidió:** comprobante fiscal en toda venta; factura con RIF solo cuando el cliente la solicita.

**Qué implica:** toda venta queda con documento fiscal válido, y los datos del cliente se capturan únicamente cuando pide factura.

**Por qué:** pedir los datos del cliente en cada venta frena la caja en barra y piscina sin aportar nada, porque el comprobante fiscal ya es documento válido. El huésped no entra en esta decisión: sus consumos van a la habitación y se facturan al salir.

### 45 · Quién autoriza descuadres y anulaciones

**Se decidió:** un gerente autoriza ambas; el cajero no puede anular ni cerrar con diferencia por su cuenta.

**Qué implica:** toda excepción queda revisada por un segundo par de ojos en el momento en que ocurre. Requiere que haya un gerente disponible en cada turno.

**Por qué:** es la forma en que se manejan hoy los cierres de caja y se mantiene igual. Son además las dos operaciones que permiten modificar lo que la caja reporta al final del día.

## El personal

### 46 · El organigrama dentro del sistema

**Se decidió:** áreas reales, cargos y jefe directo en cada ficha.

**Qué implica:** las solicitudes de vacaciones, permisos y horas extra llegan al jefe registrado en cada ficha, y los reportes se filtran por área y cargo. Hay que actualizar la ficha cuando alguien cambia de puesto o de jefe.

**Por qué:** el jefe registrado no es un dato informativo: es a quien el sistema dirige cada solicitud. Con una estructura simplificada, todas las aprobaciones caen en RRHH y el jefe directo pierde el control que hoy ejerce.

### 47 · Alcance de la carga de datos del empleado

**Se decidió:** ficha completa antes del arranque, con identificación, datos bancarios, carga familiar y contrato con fecha y sueldo.

**Qué implica:** el primer recibo se calcula con los datos definitivos de cada persona. Exige completar la ficha de toda la plantilla antes de arrancar.

**Por qué:** los datos que falten al momento del primer recibo hay que completarlos a mano o quedan fuera del cálculo, y el trabajo termina siendo mayor que hacerlo bien de entrada.

### 48 · Horarios de trabajo

**Se decidió:** un horario por cada turno real, incluyendo el administrativo y los turnos operativos del hotel.

**Qué implica:** las horas trabajadas de más se miden contra el turno propio de cada persona. Hay que definir cada turno y asignarlo en la ficha.

**Por qué:** con un horario general único, las horas de quien trabaja en turno rotativo se calculan contra un horario que no es el suyo, y el resultado no sirve.

### 49 · Alcance de la nómina en la primera etapa

**Se decidió:** en el sistema, el recibo quincenal, las horas extra, los bonos, y las utilidades y vacaciones cuando corresponda. Fuera del sistema, las liquidaciones de egreso y el impuesto sobre la renta del trabajador.

**Qué implica:** el pago recurrente sale del sistema desde el primer mes, mientras los egresos se siguen calculando aparte.

**Por qué:** el cálculo del recibo venezolano ya está construido en el paquete de Almus, pero el impuesto sobre la renta del trabajador y el cálculo definitivo de prestaciones al egreso están todavía en desarrollo. Usarlos antes de que estén listos produciría liquidaciones incompletas. Conviene correr dos o tres quincenas en paralelo con el cálculo actual antes de dejar la hoja de cálculo.

### 50 · Modo de marcaje de entrada y salida

**Se decidió:** el empleado elige su nombre en pantalla y confirma con clave personal.

**Qué implica:** no hace falta emitir carnets, y la identificación depende de la clave de cada quien.

**Por qué:** se está trabajando en integrar un lector facial con datos biométricos para el ingreso del personal. La selección en pantalla es la solución para el arranque, y la carnetización perdería sentido cuando el lector entre en operación. La integración de ese lector se maneja como punto aparte (ver sección 3).

### 51 · Cálculo de horas extra

**Se decidió:** el sistema muestra las horas trabajadas de más y el jefe define el monto.

**Qué implica:** el sistema aporta el registro objetivo de las horas; el cálculo de los recargos de ley se sigue haciendo fuera del sistema.

**Por qué:** el jefe es quien decide efectivamente quién hace horas extra, y por lo general el personal cumple su horario establecido, de modo que el volumen de excepciones es bajo. Consecuencia a tener presente: combinada con la decisión 50, el cálculo de nocturnidad y feriados queda fuera del sistema.

### 52 · Acumulación de vacaciones

**Se decidió:** el sistema acumula los días según la antigüedad registrada de cada empleado.

**Qué implica:** el cálculo por antigüedad deja de hacerse a mano una vez al año. Exige que las fechas de ingreso estén correctas en todas las fichas.

**Por qué:** hoy la planificación se lleva en un cronograma en Excel y el cálculo de los días forma parte del cuadro de nómina, también en Excel. El levantamiento recoge además que una parte significativa del personal operativo no toma vacaciones formalmente y acumula días que después hay que calcular para su pago, que es donde la acumulación automática aporta. La condición previa es verificar las fechas de ingreso durante la carga.

### 53 · Tipos de ausencia y soporte documental

**Se decidió:** tipos separados para vacaciones, reposo, permiso con goce y permiso sin goce, con documento obligatorio en el reposo.

**Qué implica:** cada ausencia queda clasificada y el reposo no se puede aprobar sin el certificado cargado.

**Por qué:** hoy el reposo se tramita en papel: el trabajador presenta el certificado, Talento Humano lo recibe y emite la constancia de activo (Forma 14-73) firmada y sellada para el trámite ante el seguro social. Exigir el documento adjunto en el sistema mantiene ese soporte junto a la ausencia en lugar de en un archivo aparte. Además, los permisos con y sin goce de sueldo tienen efecto distinto en el recibo y deben distinguirse.

### 54 · Quién aprueba ausencias y horas extra

**Se decidió:** primero el jefe directo y luego RRHH.

**Qué implica:** cada solicitud pasa por el criterio operativo del área y por la verificación de RRHH, y avanza cuando ambos actúan.

**Por qué:** mismo criterio que en las horas extra: el jefe directo es quien decide en la práctica, y la revisión de RRHH cierra el circuito verificando saldo y encuadre. Consecuencia sobre la decisión 57: los jefes de área necesitan usuario del sistema para poder aprobar.

## Los accesos

### 55 · Perfiles de acceso

**Se decidió:** perfiles estándar por área, con ajustes a medida donde el control lo exija.

**Qué implica:** el sistema trae perfiles predefinidos por aplicación (ventas, compras, inventario, contabilidad, personal), con niveles de usuario y de administrador. La mayoría de los accesos se asignan con esos perfiles, y solo los casos que lo justifican llevan un ajuste hecho a la medida, que hay que revisar en cada actualización del sistema.

**Por qué:** los perfiles estándar cubren bien la operación y son fáciles de auditar. Los ajustes se reservan para donde el control es la razón de ser del acceso, como Contraloría y las cajas.

### 56 · Segregación contable y acceso de Contraloría

**Se decidió:** solo Contraloría, Contabilidad y las personas designadas del equipo administrativo pueden realizar cambios.

**Qué implica:** el resto de los usuarios consulta pero no modifica documentos contables, y las funciones de facturar, pagar y conciliar quedan repartidas entre perfiles distintos.

**Por qué:** hoy las tres funciones las ejerce la misma persona sin contrapeso, y Contraloría revisa fuera del sistema. Definir quién puede modificar es lo que permite que la revisión ocurra dentro del sistema y sobre información que no se puede alterar sin dejar rastro.

### 57 · Quién necesita usuario del sistema

**Se decidió:** pendiente. Lo define el cliente.

**Qué implica:** determina quién puede aprobar dentro del sistema y quién solo marca asistencia o cobra en caja.

**Por qué:** marcar asistencia no requiere usuario, y en la caja cada cajero se identifica con su clave sin usuario propio, aunque abrir la caja sí exige uno. Con la decisión 54 en manos del jefe directo, los jefes de área necesitan usuario para poder aprobar. Consultar el propio recibo o solicitar vacaciones también requiere usuario: no hay una vía de consulta para empleados sin él.

---

# 2. Definiciones nuevas incorporadas

Son puntos que no estaban en el documento de decisiones y surgieron durante la revisión. Todos requieren configuración y todos afectan a más de un área, por eso se explican aquí en detalle.

## 1. Las tiendas: almacén de resguardo con propietario de tercero

**Qué se definió.** Las tiendas que operan dentro del hotel llevan su operación fuera de Odoo. En el sistema se crea un almacén de resguardo donde la mercancía queda marcada como propiedad de la tienda. El sistema permite indicar que una existencia pertenece a un tercero: esa mercancía se recibe, se cuenta y se mueve como cualquier otra, pero no suma al valor del inventario del hotel.

**Qué implica.** Esa mercancía no entra en la valoración del inventario del hotel, porque no es suya: no infla el activo del balance ni el costo. El circuito queda así: la tienda entrega y se recibe indicándola como propietaria, sin factura de compra; el hotel vende y factura al huésped; periódicamente se cruza lo vendido, se le compra a la tienda esa cantidad y la tienda emite una sola factura al hotel por el período.

**Por qué.** El punto de partida era que las tiendas no facturan nada, y bajo ese esquema el hotel terminaba vendiendo mercancía sin respaldo de compra. Eso tiene dos costos concretos: el hotel paga el IVA completo de esas ventas sin crédito fiscal que descontar, y no puede deducir ese costo del impuesto sobre la renta, con lo cual termina tributando sobre un margen que no es suyo. Se evaluó también crear cada tienda como empresa dentro del sistema, pero al no facturar ellas, esa estructura no aportaba nada y agregaba la complejidad de administrar varias empresas. La consignación resuelve el control físico y cierra el hueco fiscal con un solo documento por período.

**Qué falta definir con las tiendas:** la periodicidad de la liquidación, si se liquida por lo vendido o por lo consumido, y quién asume las mermas y faltantes de esa mercancía mientras está bajo custodia del hotel.

## 2. Un diario de ventas por máquina fiscal

**Qué se definió.** Cada máquina fiscal del hotel lleva su propio diario de ventas dentro del sistema.

**Qué implica.** Cada punto de emisión mantiene su numeración correlativa propia, alineada con la de la máquina que emite. El libro de ventas que se presenta al fisco sigue siendo uno solo: los diarios lo alimentan.

**Por qué.** La numeración fiscal la lleva la máquina, así que un diario compartido entre dos máquinas produciría correlativos que no cuadran. Esto concreta la decisión 7.

## 3. Habitaciones: activos y consumibles por caminos separados

**Qué se definió.** En las habitaciones conviven activos y consumibles, y cada uno se maneja por su vía.

**Qué implica.** Los consumibles, como el agua de cortesía y las amenidades, van por inventario, con la habitación como ubicación dentro de la estructura de módulo y número. Los activos, como el aire acondicionado, el televisor o la nevera, llevan dos registros que corren en paralelo: el activo contable, que sirve para la depreciación y no guarda ubicación física, y el equipo, que sí tiene ubicación de uso y es donde se registran las fallas y el mantenimiento.

**Por qué.** Son dos necesidades distintas que suelen confundirse. El módulo de activos responde a cuánto vale y cuánto se deprecia; el registro de equipos responde a dónde está y qué mantenimiento lleva. Mezclarlos deja una de las dos preguntas sin respuesta.

## 4. Códigos de barras en las ubicaciones

**Qué se definió.** Además del código de producto, las ubicaciones del almacén llevan su propio código de barras.

**Qué implica.** Los conteos y las recepciones se pueden hacer con lector, identificando tanto el producto como el sitio donde está.

**Por qué.** Es lo que hace viable el conteo con lector en un almacén con zonas. Los productos que no traen código de fábrica se identifican con una etiqueta en el anaquel, no unidad por unidad, porque etiquetar cada unidad no se sostiene en la práctica.

## 5. Revisión de los planes de cuentas del grupo

**Qué se definió.** Antes de incorporar las demás empresas del grupo, hay que revisar sus planes de cuentas actuales.

**Qué implica.** El plan que se monte ahora en el hotel debe ser compatible con esos, para que una consolidación futura no exija tablas de equivalencias.

**Por qué.** Lo planteó la dirección en la sesión: si cada empresa arranca por su lado, consolidar después se vuelve un trabajo manual permanente.

---

# 3. Lo que quedó como desarrollo

| Desarrollo | De dónde viene | Qué haría | Por qué no es configuración |
|---|---|---|---|
| Límite de merma por producto | Decisión 33 | Advertir o impedir el registro de una merma que supere el tope definido para ese producto | El sistema no tiene un tope de merma configurable. Mientras no exista, opera como control por reporte |
| Restricción de descuentos por persona fuera de la caja | Decisión 20 | Que solo las personas autorizadas puedan dar descuento en cotizaciones y facturas del escritorio | Fuera de la caja, el sistema habilita el descuento para todos los usuarios de venta o para ninguno. En la caja sí se resuelve con configuración |

| Integración del lector facial de marcaje | Decisión 50 | Que el marcaje de entrada y salida se haga con lectura biométrica en lugar de selección en pantalla | Koral está trabajando en la incorporación del lector. La integración con el sistema se define cuando el equipo esté seleccionado |

Los dos primeros se presupuestan y se aprueban por separado; ninguno bloquea la salida a producción. El tercero depende de un equipo que Koral está evaluando y se retoma cuando esté definido.

---

# 4. Lo que falta definir

Queda un solo punto abierto: **las condiciones de la liquidación con las tiendas**, que todavía no se ha discutido con ellas. Hay que acordar la periodicidad con que se liquida lo vendido, si se liquida por lo vendido o por lo consumido, y quién asume las mermas y faltantes de esa mercancía mientras está bajo custodia del hotel. Se necesita antes de recibir la primera mercancía en resguardo.

---

# 5. Plan de configuración

El orden responde a dependencias reales: cada fase necesita que la anterior esté cerrada. Configurar categorías sin las cuentas definidas, o cargar productos sin las unidades resueltas, obliga a rehacer el trabajo producto por producto.

**Fase 1. Ambiente y base fiscal.** Preparación del entorno de trabajo, instalación del paquete venezolano y carga del plan de cuentas, los impuestos y las reglas fiscales de la empresa.

**Fase 2. Contabilidad.** Diarios de venta por punto de emisión y por sede, diarios de compra, un diario por cada cuenta bancaria y uno por cada caja física. Contabilidad analítica con las unidades de negocio y el segundo criterio, con las reglas que la asignan de forma automática. Configuración de los cierres mensuales y de quiénes autorizan las excepciones.

**Fase 3. Datos maestros.** Unidades de medida y sus equivalencias. Características que abren variante. Árbol de categorías con las cuentas contables de cada una. Carga de productos y variantes con sus códigos. Carga de proveedores y clientes. Listas de precios.

**Fase 4. Inventario.** Almacenes por área, con sus zonas y ubicaciones y los códigos de barras de cada una. Almacén de resguardo de las tiendas. Estructura de habitaciones por módulo y número. Cuentas de gasto asociadas a cada destino de consumo. Control de lotes y vencimiento en alimentos y bebidas. Método de costo y momento de valoración. Cantidades mínimas por producto.

**Fase 5. Compras y ventas.** Circuito de compra, control de factura contra lo recibido, acuerdos con proveedores y plantillas de pedido.

**Fase 6. Punto de venta.** Cajas por punto físico, formas de pago con su destino, planos de mesas, agrupación de pantalla, modos de servicio, recetas, impresoras de comanda y reglas de cierre.

**Fase 7. Personal.** Áreas y cargos, fichas de los empleados, horarios por turno, tipos de ausencia, acumulación de vacaciones, marcaje y conceptos de la nómina.

**Fase 8. Accesos.** Perfiles por área, segregación contable y creación de usuarios.

**Fase 9. Carga inicial.** Toma física del inventario y saldos contables de apertura. La toma física es condición para activar los mínimos de reposición.

**Fase 10. Pruebas y puesta en marcha.** Pruebas por área con datos reales, nómina en paralelo por dos o tres quincenas, y salida a producción.

---

# 6. Qué se necesita de Koral para arrancar

La Fase 3 es la más pesada en volumen y es la que puede correr en paralelo con las dos primeras. Los datos maestros son la información base sobre la que opera todo el sistema: productos, proveedores, clientes, categorías, unidades de medida, almacenes y cuentas. Para iniciar esa fase hacen falta depurados y estructurados según lo decidido en este registro.

**Se extrae de la base actual y se depura:** proveedores y clientes, que tienen saldos e historia y no se pueden reinventar; y el catálogo de productos, que ya viene con la reclasificación en curso.

**Se construye desde cero, porque sale de las decisiones:** el árbol de categorías, las unidades de medida, las características de variante, los almacenes con sus zonas, los diarios y el plan de cuentas. Heredar las estructuras actuales trasladaría a la base nueva los problemas que se están corrigiendo.

**No se migra:** las existencias. El inventario actual del sistema no refleja la realidad física desde 2024, de modo que las cantidades iniciales salen de la toma física y no de la base anterior. Para los productos con control de lote, cada línea del conteo debe traer número de lote y fecha de vencimiento, lo que cambia la planilla con la que el almacenista sale a contar y hay que preverlo antes de la toma.

---

# 7. Siguiente paso

Traducir este registro en el plan de tareas del proyecto: descomponer cada decisión y cada definición en las tareas concretas de configuración, con su responsable, su duración y su dependencia dentro de las diez fases, para llegar a la salida a producción del 1 de octubre.
