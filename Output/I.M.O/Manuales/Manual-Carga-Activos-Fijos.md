# Manual — Carga de Activos Fijos en Odoo

Guía operativa para registrar y depreciar activos fijos (mobiliario, equipos, vehículos, lencería, edificaciones) en Odoo. Aplica a cualquier versión reciente (16, 17, 18, 19): los nombres de menú pueden variar levemente entre versiones, pero la ruta y el orden de pasos se mantienen. Los anexos A y B y los códigos de cuenta reflejan la base actual del Hotel sobre Odoo 16 (módulo `account_asset`), a partir del diagnóstico de 769 activos.

Módulo: **Contabilidad**. Perfil requerido: usuario con permisos de Contabilidad.

> Las cuentas contables concretas de cada activo (activo fijo, depreciación acumulada y gasto) deben ser indicadas por el contador de la empresa. Este manual describe el procedimiento en Odoo; la definición de qué cuenta corresponde a cada caso es responsabilidad del área contable. El mapa vigente está en el Anexo A.

---

## 1. Concepto

Un activo fijo es un bien adquirido para uso productivo, cuyo costo no se lleva a gasto de una sola vez, sino que se reparte en el tiempo mediante la **depreciación**. En Odoo se registra el activo una vez, se define cómo se deprecia, y el sistema genera automáticamente los asientos de depreciación período a período.

Dos elementos clave:

- **Activo:** la ficha del bien concreto (nombre, valor, fechas, cuentas).
- **Modelo de activo:** una plantilla reutilizable con los parámetros comunes de una categoría (método, duración, cuentas). Recomendado cuando se cargan muchos activos del mismo tipo.

---

## 2. Cómo funcionan las cuentas del módulo

Cada activo (y cada modelo) apunta a **tres cuentas y un diario**. Entre paréntesis, el campo técnico de la tabla `account_asset`:

| Cuenta / campo | Naturaleza | Estado financiero | Función |
|---|---|---|---|
| Activo Fijo (`account_asset_id`) | Deudora | Balance | Valor bruto de adquisición |
| Depreciación Acumulada (`account_depreciation_id`) | Acreedora (contra-activo) | Balance | Depreciación acumulada; se acredita cada período |
| Gasto por Depreciación (`account_depreciation_expense_id`) | Deudora | Resultados | Gasto del período |
| Diario (`journal_id`) | — | — | Dónde se registran los asientos de depreciación |

**Regla de oro:** las **tres cuentas son distintas entre sí**. En particular, la de Activo Fijo y la de Depreciación Acumulada no pueden ser la misma (el valor bruto vive en la primera y nunca se modifica; la depreciación se acumula en la segunda), y la de **Gasto por Depreciación tampoco puede ser la de Depreciación Acumulada**: son cuentas de estados financieros distintos (Resultados vs Balance). Valor neto en libros = saldo de Activo Fijo − Depreciación Acumulada.

La **cuenta de Gasto por Depreciación** y la **vida útil** se fijan en la **ficha del activo** (no solo en la categoría). Es lo que garantiza que cada asiento de depreciación se cause correctamente mes a mes; si la plantilla viene mal configurada, se corrige en la ficha.

**Ruta (plan de cuentas):** en la aplicación Contabilidad, menú `Configuración > Plan de cuentas`. Al crear o revisar la cuenta de activo fijo, el tipo de cuenta debe ser **Activo fijo** o **Activo no circulante**.

---

## 3. Asientos que genera el módulo

**3.1 Incorporación.** El valor bruto se debita en la cuenta de Activo Fijo al confirmar el activo. El módulo no vuelve a tocar el bruto después de esto.

**3.2 Depreciación del período** (automática, en cada corrida):

| Debe | Haber |
|---|---|
| Gasto por Depreciación (Resultados) | Depreciación Acumulada (Balance) |

**3.3 Baja o disposición.** Al vender o dar de baja, Odoo revierte la depreciación acumulada y el valor bruto, y reconoce la ganancia o pérdida en disposición contra la cuenta de resultado indicada en la operación.

---

## 4. Parámetros de depreciación

Criterio homogéneo aplicado en esta base, que debe mantenerse:

- **Método (`method`):** Lineal / Recta.
- **Periodicidad (`method_period`):** Mensual (1 mes por cuota).
- **N° de cuotas (`method_number`):** según la vida útil de cada categoría (ej. 12–18 lencería, 36–60 mobiliario, 120 vehículos).
- **Prorrateo (`prorata_computation_type`):** períodos constantes.

---

## 5. Diario contable de la depreciación

Los asientos de depreciación deben registrarse en un **diario de activos fijos dedicado** (tipo Misceláneo / Operaciones Varias), por ejemplo «AF – Depreciación de Activos Fijos».

Advertencia del diagnóstico: hoy la depreciación se registra en el diario **VI – Valoración de Inventario** (767 activos) y **POS – Punto de Venta** (2 activos). Funcionan mecánicamente por ser de tipo general, pero mezclan la depreciación con la operación de inventario/ventas. Antes de seguir cargando, definir con Contabilidad/Desarrollo:

| Opción | Descripción | Implicación |
|---|---|---|
| A (recomendada) | Crear un diario dedicado «AF – Depreciación de Activos Fijos» y reasignarlo en modelos y activos | Separa la depreciación de la valoración de inventario; deja el diario VI limpio |
| B | Mantener el diario VI actual | No requiere reconfiguración, pero la depreciación queda mezclada en el diario de inventario |

---

## 6. Crear un modelo de activo (recomendado)

El modelo evita repetir parámetros en cada carga. **Ruta:** en la aplicación Contabilidad, menú `Configuración > Administración > Modelos de activos`.

1. Clic en **Nuevo**.
2. Nombre de la categoría (ej. "Lencería Hotel").
3. Definir método (Línea recta), periodicidad (mensual) y N° de cuotas de la categoría.
4. Indicar las tres cuentas (Anexo A) y el diario de activos fijos.
5. Guardar.

Al cargar un activo, se selecciona el modelo y los demás campos se rellenan solos.

---

## 7. Vías de carga

**Criterio general:** los activos **nuevos** (adquiridos en el período contable abierto) se cargan por 7.1. Los activos **históricos** (que ya venían depreciándose antes de Odoo) se cargan por 7.2, con depreciación importada.

### 7.1 Vía manual — alta de activo nuevo

1. `Contabilidad > Activos > Nuevo`. Nombre descriptivo y **Modelo/categoría** (precarga las tres cuentas y el método).
2. Ingresar **Valor bruto** (`original_value`), **fecha de adquisición** del período corriente y valor residual si aplica.
3. Confirmar en la **ficha** la **vida útil** (N° de cuotas) y la **cuenta de Gasto por Depreciación** correctas; verificar que las tres cuentas correspondan a la categoría (Anexo A) y que gasto y depreciación acumulada no sean la misma. Confirmar el activo.

### 7.2 Carga inicial de activos históricos — depreciación importada

Para un activo que ya traía depreciación acumulada, el bruto y la acumulada se migran primero por el **asiento de apertura**. En el módulo se carga el activo declarando la depreciación ya reconocida en el campo **`already_depreciated_amount_import`**, de modo que Odoo **no** genere cuotas retroactivas ni asientos hacia el pasado: solo depreciará el neto restante hacia adelante. El módulo queda como auxiliar que amarra a las cuentas de control del mayor.

1. Confirmar que el asiento de apertura ya cargó, por categoría, el valor bruto (cuenta de Activo Fijo) y la depreciación acumulada (contra-cuenta).
2. Crear el activo con: **Valor bruto** = costo histórico; **Fecha de adquisición** = fecha real (histórica); método, periodicidad y N° de cuotas totales según la vida original.
3. Registrar la depreciación acumulada a la fecha de corte en **`already_depreciated_amount_import`**. Odoo toma ese monto como punto de partida y solo genera las cuotas restantes.
4. Verificar que el valor neto en libros del activo coincida con (bruto − acumulada importada) y con el neto del sistema anterior.

> **No usar fecha histórica sin depreciación importada** para activos preexistentes: en ese caso Odoo contabiliza toda la depreciación de arrastre, con riesgo de tocar períodos cerrados, distorsionar el resultado del ejercicio corriente y, si la apertura ya trae la acumulada, duplicarla.

---

## 8. Generar, revisar y confirmar

1. **Calcular depreciación:** genera el **cuadro de depreciación** (todos los asientos con fecha y monto). El total debe igualar el valor depreciable (bruto − valor no depreciable). En históricos, el cuadro solo debe mostrar las cuotas futuras del neto restante.
2. **Confirmar:** el activo pasa de **Borrador** a **En proceso**; los asientos quedan programados y Odoo los publica en sus fechas. En borrador no genera contabilidad.

---

## 9. Ajustes posteriores

- **Modificar depreciación:** botón **Modificar depreciación**. Si el valor baja, registra un asiento de ajuste y recalcula los períodos futuros no publicados. Si sube, crea un activo adicional por el incremento (botón inteligente "Incremento bruto").
- **Vender o desechar:** botón **Vender o desechar**. Se indica fecha y, si hubo venta, monto y cuentas de ganancia/pérdida. El activo sale del balance. Para lencería dada de baja, ver sección 10 y el acta del Anexo C.

---

## 10. Caso especial — Lencería y blancos

La lencería (sábanas, fundas, toallas, mantelería) **no es gasto inmediato**: se capitaliza como activo y se amortiza por su desgaste. En el Hotel se trata como categoría de activo fijo ("Lencería Hotel", Anexo A), con amortización en **línea recta** y las vidas útiles de la política contable:

| Ítem | Vida útil | Tasa anual |
|---|---|---|
| Toallas (baño, mano, piso) | 12 meses | 100% |
| Sábanas y fundas | 18–24 meses | 50% |
| Edredones y protectores | 36 meses | 33,3% |
| Mantelería de restaurante | 12 meses | 100% |

Reglas de reconocimiento y control:

- **Reconocimiento inicial:** la dotación inicial y los incrementos de capacidad se registran al costo de adquisición (incluye impuestos no recuperables, fletes y gastos directos de puesta en uso).
- **Medición posterior:** amortización mensual estimada contra el gasto (Débito Gasto por Amortización de Lencería / Crédito Amortización Acumulada de Lencería).
- **Conteo físico:** mensual del stock en almacén; trimestral de la lencería en uso (habitaciones y lavandería).
- **Bajas por daño (merma):** la lencería con daño irreparable se retira del activo y va al gasto **previa "Acta de Desincorporación"** firmada por Ama de Llaves y Contador (modelo en Anexo C). En Odoo, la baja se registra con **Vender o desechar** sobre el activo/lote correspondiente.
- **Reexpresión:** para estados financieros de cierre, los saldos se reexpresan conforme a BA VEN-NIF 2, manteniendo el costo histórico en los libros auxiliares.

---

## 11. Validaciones posteriores a la carga

1. Existen las tres cuentas de la categoría en el plan de cuentas y el activo apunta a las correctas (Anexo A).
2. La suma de valores brutos de los activos de una categoría = saldo de su cuenta de Activo Fijo en el mayor.
3. La suma de depreciación acumulada de los activos = saldo de su contra-cuenta de Depreciación Acumulada.
4. Las tres cuentas del activo son distintas entre sí: Activo Fijo ≠ Depreciación Acumulada, y Gasto por Depreciación ≠ Depreciación Acumulada. La cuenta de gasto y la vida útil están fijadas en la ficha del activo.
5. El diario asignado es el de activos fijos (no un diario de inventario o ventas por descuido).
6. El cuadro de depreciación arranca en la fecha esperada; en históricos, sin cuotas retroactivas.
7. En históricos, el neto en libros coincide con (bruto − acumulada importada) y con el neto del sistema anterior.

---

## Anexo A — Mapa de cuentas por categoría (base actual)

Mapeo canónico verificado sobre los activos correctamente configurados. Referencia para toda carga nueva:

| Categoría | Activo (bruto) | Deprec. Acumulada | Gasto Deprec. |
|---|---|---|---|
| Lencería Hotel | 121000100 | 121000101 | 613100009 |
| Activos Menores | 121000012 | 121000013 | 613100008 |
| Activos / Herramientas | 121000014 | 121000015 | 613100010 |
| Electrodomésticos | 121000008 | 121000009 | 613100004 |
| Mobiliario y Equipo de Oficina | 121000006 | 121000007 | 613100003 |
| Vehículos | 121000010 | 121000011 | 613100005 |

---

## Anexo B — Hallazgos de configuración a corregir

Detectados en el diagnóstico de los 769 activos en marcha. Subsanar antes de continuar cargando:

| Prioridad | Hallazgo | Alcance |
|---|---|---|
| Alta | Diario de depreciación en VI (inventario) / POS en lugar de un diario de activos fijos | 769 activos |
| Alta | Cuenta de activo apuntando a Inventario de Mercancía (113100001) o a una contra-cuenta de depreciación | 4 activos (~Bs. 33.764) |
| Alta | Depreciación acumulada apuntando a la misma cuenta del activo (netea el bruto) | 4 activos (herramientas) |
| Media | Cruce de depreciación/gasto entre categorías distintas a la del activo (rompe el auxiliar por clase) | 33 activos |
| Media | Modelos/plantillas defectuosos: uno sin cuenta de activo y nombre «PRUEBA»; otro con deprec. = cuenta de activo | 2 modelos |
| Media | Verificar el arrastre de depreciación de la carga inicial (períodos cerrados / posible duplicación de acumulada) | Carga histórica |

---

## Anexo C — Modelo de Acta de Desincorporación de Lencería

Soporte para que el contador realice el asiento de baja. Debe llevar numeración correlativa.

```
ACTA DE DESINCORPORACIÓN DE LENCERÍA
Hotel: ____________________   RIF: ____________   Fecha: __/__/202_   Acta N°: 202_-___

1. DATOS GENERALES
   Departamento solicitante: Ama de Llaves / Lavandería
   Motivo (marque):  ( ) Deterioro por uso  ( ) Daño irreparable  ( ) Pérdida/Extravío  ( ) Obsolescencia

2. DETALLE DE LOS BIENES
   Código/ID | Descripción | Cantidad | Unidad | Estado / Observación
   ----------------------------------------------------------------------
                                                     TOTAL: ______

3. RELATO DE LOS HECHOS
   ________________________________________________________________

4. DESTINO FINAL (donación / trapos de limpieza / destrucción): ____________

5. FIRMAS
   Ama de Llaves ____________  Operaciones/Auditoría ____________  Contador ____________
```

Notas de control (Venezuela): si la lencería dañada se reutiliza como trapos, contablemente sigue siendo baja (el valor en libros va al gasto y el trapo queda como suministro a valor cero). Anexar soporte fotográfico o reporte de lavandería ante fiscalización.

---

## Referencia

- Documentación oficial de Odoo — [Non-current assets and fixed assets (19.0)](https://www.odoo.com/documentation/19.0/applications/finance/accounting/vendor_bills/assets.html). La misma sección existe para 16.0, 17.0 y 18.0 cambiando el número de versión en la URL.
- Procedimiento de carga y anexos A/B: diagnóstico de 769 activos del Hotel (Odoo 16, módulo `account_asset`), Lic. Jesús R. Urbaneja F.
- Tratamiento y política de lencería: criterios BA VEN-NIF para hotelería.
