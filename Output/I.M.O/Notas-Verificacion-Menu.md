# Notas de verificación - Menú de Decisiones Odoo (registro interno)

Registro de las correcciones hechas al reescribir el menú con verificación contra la documentación oficial de Odoo 19 (`ODOO/odoo-19-docs`), el código fuente (`ODOO/odoo-19-source`, `ODOO/odoo-19-enterprise`), la localización (`ODOO/odoo-venezuela`) y la vertical (`ODOO/almus_hotel`). No es parte del entregable al cliente.

## Compras y Almacén

- COM-D07 (corrección mayor): la aprobación por monto es nativa de Odoo 19 Community, no requiere Studio ni Enterprise como decía la versión anterior. Evidencia: `purchase/models/res_config_settings.py:12-14` (Purchase Order Approval + Minimum Amount), `purchase/models/purchase_order.py:625-639, 1251-1260` (estado "A aprobar" y bypass del Administrador de Compras).
- COM-D04 (cambio de Odoo 19): la valoración perpetua ya no asienta cada movimiento de stock; impacta al facturar más asiento de cierre, y la periódica ganó cierre automatizable Manual/Diario/Mensual. Evidencia: `inventory_valuation/cheat_sheet.rst:430-441` ("Changes in Odoo 19"), `finance/accounting/get_started/inventory_valuation.rst:36-45,68-87`.
- COM-D03: método de coste es parámetro de compañía con excepción por categoría (`property_cost_method` en product.category), nunca por producto. `inventory_valuation.rst:44,57-59`, `avg_price_valuation.rst:33-36`.
- COM-D01: "Rastrear inventario" (`is_storable`) es campo de product.template (`stock/models/product.py:827`), no de la categoría. `configure/type.rst:67-68,100-120`.
- COM-D02: activación de variantes en Ventas > Ajustes (`variants.rst:37-38`); modos Instantáneamente/Dinámicamente/Nunca irreversibles tras asignarse (`variants.rst:117-129`); impactos por variante (código de barras, precio plantilla+extra, stock por variante) en "Impact of variants"; precio de proveedor por variante (`product/models/product_supplierinfo.py:42`).
- COM-D05: cotizaciones alternativas requieren "Acuerdos de compra" (`calls_for_tenders.rst:28-32`); el menú es "Listas de precios de proveedor" (es.po), no "tarifas".
- COM-D06: en interfaz es "Pedido abierto" y "Tipo de acuerdo de compra" (`purchase_requisition/i18n/es.po`), no "Acuerdo marco"; plantilla multi-proveedor con campo Proveedor vacío (`purchase_templates.rst:36-39`); vigencia = "Validez del acuerdo" (`blanket_orders.rst:53-77`).
- COM-D08: menú `Inventario > Operaciones > Reposición` con columna opcional Activador (`reordering_rules.rst:101-102,251-253`); "Sugerir" es interruptor del Catálogo de la cotización con requisitos (apps Ventas+Inventario+Compras, entregas validadas, proveedor con precio, rastreo por cantidad) (`purchase/advanced/suggest.rst:13-41`).
- COM-D09: pasos de recepción en ficha del almacén; 2/3 pasos exigen Rutas multietapa que activa Ubicaciones (`receipts_delivery_one_step.rst:22-42`).
- COM-D10: menú `Operaciones > Inventario físico` (`count_products.rst:17-18`); campo "Frecuencia de inventario" en sección "Recuento cíclico" de la ubicación (`cycle_counts.rst:17-24,34-52`); "Día y mes del inventario anual" en Ajustes > Operaciones (`count_products.rst:299-301`).
- Aclaratoria: la guía de despacho de la localización (`l10n_ve_stock_guide`) cubre salidas fiscales, no la recepción; no toca COM-D09. El flujo requisición-aprobación-entrega interno es hueco declarado de la vertical, distinto de COM-D07/D08.

## AABB

- AABB-D02: no existe módulo suelto `pos_preparation_display` en 19; la pantalla de preparación vive en `pos_enterprise` (Enterprise) (`odoo-19-enterprise/pos_enterprise/__manifest__.py:14-17`). Rutas: `Órdenes > Pantalla de preparación` (`preparation.rst:23-24`), impresoras `Órdenes > Impresoras de preparación` (`restaurant.rst:343`); tipos IoT o Epson IP (`restaurant.rst:316-324`); cajas IoT no soportadas para la pantalla (`preparation.rst:84-86`).
- AABB-D03: "Actualizar cantidades en stock" es campo de compañía (`point_of_sale/models/res_company.py:10-14`), visible solo con modo desarrollador (`res_config_settings_views.xml:514`); la ubicación de descuento por POS se controla por su Tipo de operación (`pos_config.py:76-81`).
- AABB-D06: la valoración de la categoría en 19 es "Periódica (al cierre)" / "Perpetua (al facturar)", ya no "Manual/Automatizada" (`stock_account/models/product.py:740-764`).
- AABB-D05: `pos_mrp` es Community y auto-instalable con POS + Fabricación; explosión de kit nativa de mrp. LdM tipo Kit (`kit_shipping.rst:85-89`).
- AABB-D01: se eliminó la afirmación de que el POS "sigue operando sin conexión y sincroniza al volver" (sin respaldo en la doc 19). Autopedido QR menu / QR menu + Ordering / Kiosk (`self_order.rst:16-28`), QR por mesa (`self_order.rst:38-41`).
- AABB-D04: aprobación de compras nativa (`res_config_settings.py:12-14`); menús reales `Operaciones > Transferencias > Internas` (`stock_picking_views.xml:559`) y `Operaciones > Abastecimiento > Reabastecimiento` (`stock_orderpoint_views.xml:225-229`).
- AABB-D07: menú del desecho `Operaciones > Ajustes > Desechar` (`stock_scrap_views.xml:182-187`); caducidad requiere lotes activos (`expiration_dates.rst:25-37`).
- AABB-D09: "Establecer diferencia máxima" + "Diferencia autorizada" (`use.rst:420-430`); "Iniciar sesión con empleados" con derechos Avanzados/Básicos/Mínimos, cierre solo nivel avanzado (`employee_login.rst:17-26,83-89`).
- AABB-D10: app Alquiler (`sale_renting`) es Enterprise; préstamo de cavas = hueco declarado de la vertical.
- AABB-D11: presets con Tarifa y Posición fiscal, activación "Para llevar / Entrega / Miembros" (`presets.rst:33,47-65`).

## Administración y Finanzas

- Importación de extractos por archivo es Enterprise (`account_bank_statement_import*` solo en `odoo-19-enterprise/`). Formatos CAMT.053, CSV, XLSX, OFX, QIF (`transactions.rst:87-92`); vía tarjeta del diario (`transactions.rst:94-102`).
- Modelos de conciliación sin menú propio: tarjeta del diario > Modelos (`reconciliation_models.rst:19-29`).
- No hay menú de asientos recurrentes: campo Contabilización automática (En fecha/Mensual/Trimestral/Anual) + "Contabilizar hasta" en el documento (`account/models/account_move.py:294-309`).
- Cuentas por pagar vencidas: `Contabilidad > Informes > Cuentas por pagar vencidas` (`vendor_bills.rst:216-217`), Enterprise (account_reports).
- Sucursales: una compañía madre no puede convertirse en sucursal; filiales independientes = compañías (`general/companies.rst:88,104-105`). Interempresa por compañía (`multi_company.rst:138-140`).
- Planes analíticos: Aplicabilidad por defecto Opcional/Obligatoria (`analytic_accounting.rst:47-55,108-111`); modelos de distribución (`:138`).
- Aprobaciones Studio sobre botón Registrar pago (`studio/approval_rules.rst:5-35,90`), Enterprise.
- Seguimiento de cobros Enterprise (`account_followup`); niveles en `Configuración > Niveles de seguimiento` (`follow_up.rst:18-19`).
- Moneda forzada por cuenta (`account/models/account_account.py:35-36`); diarios de efectivo con cuentas de arqueo (`journals.rst:166-181`).
- Cuentas pendientes por diario y aplicación de anticipos desde "Débitos pendientes" (`journals.rst:124-126`, `payments.rst:270-300`).
- Sincronización bancaria directa: sin cobertura de banca venezolana; retirada como opción.

## Contraloría y Gerencia Hotelera

- CON-D01: no existe "bloqueo para no-asesores"; campos reales Bloquear todo, Declaración fiscal, Ventas, Compras y Hard Lock (`account/models/company.py:58-66`); excepciones temporales auditadas (`year_end.rst:118-133`); la ventana Fechas de bloqueo es Enterprise (`account_accountant`); hash e inalterabilidad (`data_inalterability.rst:53-56,94-97`).
- CON-D02 (nuevo): doble validación de compras nativa (`res_config_settings.py:12-14`); gestión fina de grupos exige modo desarrollador (`access_rights.rst:91,149-150`).
- CON-D03 (nuevo): puntuación de encuestas en pestaña Opciones > Puntaje (`scoring.rst:10-11`).
- CON-D04 (nuevo): Hoja de cálculo es parte de Documentos (Enterprise) (`spreadsheet.rst:36`); tableros propios requieren Enterprise (`spreadsheet_dashboard_edition`); presupuestos (`budget.rst:21-22,35`).
- CON-D05 (nuevo): la ruta "Documentos > Configuración > Espacios de trabajo" no existe en 19: carpetas desde el árbol con permisos y alias por carpeta (`documents.rst:79-86,305-318`); la centralización de documentos contables no puede desactivarse (`documents.rst:62`).
- GH-D01 (nuevo): preventivo recurrente nativo (Recurrente / Repetir cada, `maintenance.py:244-256`); por horas de uso o medidor NO nativo; se corrigió "la solicitud cerrada genera la orden de compra" (no hay automatización nativa Mantenimiento-Compras).
- GH-D02 (nuevo): no existe permiso nativo por usuario para editar precios/descuentos en Ventas; la casilla Descuentos es global (`discounts.rst:8-10`); restricción fina = Studio o desarrollo.
- GH-D03 (nuevo): flujo requisición-aprobación-entrega declarado hueco de la vertical (docs/03 de almus_hotel); rutas de reabastecimiento y ubicaciones verificadas.

## Operaciones y Talento Humano

- OPE-D02: preventivo recurrente nativo con regeneración al completarse (`maintenance.py:244-256,339-344`); por medidor no existe. MTBF real/MTTR calculados, solo "MTBF esperado" editable (`maintenance_setup.rst:204-214`).
- Enterprise confirmado por presencia exclusiva en `odoo-19-enterprise/`: `hr_payroll`, `helpdesk`, `industry_fsm`, `documents`, `maintenance_worksheet`. Community: `maintenance`, `hr_maintenance`, `hr_attendance`, `hr_holidays`.
- Nómina 19: lotes renombrados a `Payroll > Payslips > Pay Runs` ("Procesos de nómina"); estructuras en `Configuración > Structures`; SEPA único archivo de pago nativo (`hr/payroll.rst:55-56`); localización VE no está en el catálogo de Odoo: la provee Almus.
- Asistencias: reglas de horas extras en `Configuración > Overtime Rulesets`, sin reglas precargadas (`overtime.rst:8-16`); kiosco con modos manual/código-RFID, PIN y URL dedicada (`kiosks.rst:24-77`); GPS del fichaje es informativo (`check_in_check_out.rst:28`).
- Empleados 19: datos privados en pestaña Personal (`new_employee.rst:321-430`); PIN/gafete en pestaña Ajustes (`:737-749`).
- Ausencias: tipos con "Require Supporting Document" (`time_off_types.rst:15-16,154`); planes de acumulación con hitos (`accrual_plans.rst:17,72-84`); asignaciones y aprobaciones bajo `Time Off > Management` (`allocations.rst:21`, `management.rst:21,59`).
- Inventario 19: reabastecimiento `Operaciones > Reposición`; conteos `Operaciones > Inventario físico`; transferencias internas desde tarjetas de tipo de operación (`operation_type.rst:44`).
