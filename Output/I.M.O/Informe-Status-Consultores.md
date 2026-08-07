# Informe de Status — Implementación Odoo Koral (SERAC)

**De:** Equipo de Consultores (Almus)
**Fecha:** 3 de julio de 2026
**Para:** Gerencias y responsables de área — Grupo Eracon / SERAC

---

## 1. Situación general

El proyecto cerró la etapa de **diagnóstico y diseño** para todas las áreas funcionales. A la fecha está completado:

- **Levantamiento AS-IS** de todas las áreas (procesos actuales documentados).
- **Radiografía (RX)** por área bajo el marco ISO 9001 (fortalezas, brechas, oportunidades y riesgos).
- **Propuesta TO-BE preliminar** (cómo queda cada proceso en Odoo, con clasificación nativo / parcial / desarrollo).
- **Plan de implementación** organizado en 63 grupos de trabajo más la migración, con revisión posterior (QA) por grupo.
- **Cronograma** con fechas estimadas por fase.

**Encuadre:** el proyecto es una **migración de Odoo 16 a Odoo 19**; los maestros de datos (proveedores, productos, ubicaciones, listas de precio, empleados, plan de cuentas) los genera y depura el equipo.

**Arranque de configuración:** semana del **lunes 6 de julio de 2026** (Fase 0). Las fechas por fase son estimadas y se ajustan según disponibilidad de los responsables de cada área para validar.

---

## 2. Línea de tiempo (fases)

| Fase | Contenido | Ventana estimada |
|---|---|---|
| 0 | Migración de datos y preparación del entorno (16 → 19) | 6 – 17 jul |
| 1 | Habilitadores y maestros de datos | 20 – 24 jul |
| 2 | Cadena de suministro, inventario, A&B y mantenimiento | 27 jul – 5 ago |
| 3 | Finanzas, contabilidad y cumplimiento fiscal | 6 – 19 ago |
| 4 | Talento Humano y nómina | 20 ago – 9 sep |
| 5 | Hotelería (PMS), puntos de venta y sistemas externos | 10 – 25 sep |

---

## 3. Status y próximos pasos por área funcional

Cada área tiene su AS-IS, RX y TO-BE preliminar **completados**. Lo que sigue es la **configuración en Odoo** según su fase.

### Compras y Almacén
- **Dónde está:** diagnóstico y diseño completados. Es de las primeras en configurar (maestros y suministro).
- **Próximos objetivos:** maestro de proveedores y productos, almacenes y ubicaciones (Fase 1); luego cotización/orden de compra, requisiciones, recepción de mercancía y transferencias (Fase 2).
- **Plazo:** 20 jul – 5 ago.

### Administración y Finanzas (CCS y Hotel)
- **Dónde está:** diagnóstico y diseño completados. Participa temprano en maestros y concentra la Fase 3.
- **Próximos objetivos:** listas de precio y facturación de servicios; luego el núcleo contable: cierre de caja, cobros, factura de proveedor, retenciones IVA/ISLR, declaración de IVA, conciliaciones y cuentas por pagar.
- **Plazo:** maestros 20 – 24 jul; núcleo financiero-fiscal 6 – 19 ago.

### Contraloría Interna
- **Dónde está:** diagnóstico y diseño completados.
- **Próximos objetivos:** conteo de existencias e inventario cíclico (Fase 2); bloqueo de períodos y libros legales, gestión documental para fiscalizaciones y supervisión de control de gestión (Fase 3).
- **Plazo:** 27 jul – 19 ago.

### Talento Humano
- **Dónde está:** diagnóstico y diseño completados. La ficha del empleado se configura temprano (Fase 1).
- **Próximos objetivos:** ficha integral del empleado (Fase 1); luego asistencia, nómina y pagos, reclutamiento, ausencias, evaluaciones y cumplimiento parafiscal laboral (Fase 4).
- **Plazo:** ficha 20 – 24 jul; bloque de Talento Humano 20 ago – 9 sep.

### Gerencia Hotelera (Recepción / A&B supervisión)
- **Dónde está:** diagnóstico y diseño completados. Depende de definiciones sobre el PMS.
- **Próximos objetivos:** PMS hotelero (reservas y check-in/out), punto de venta de tienda, llaves electrónicas, canales de atención, satisfacción del huésped y capacitación.
- **Plazo:** 10 – 25 sep.

### Alimentos y Bebidas (A&B)
- **Dónde está:** diagnóstico y diseño completados.
- **Próximos objetivos:** reglas de reabastecimiento, punto de venta de restaurante y cierre de sesión, recetas y consumo, control de mermas y préstamo de cavas.
- **Plazo:** 27 jul – 5 ago.

### Operaciones (Servicios Generales)
- **Dónde está:** diagnóstico y diseño completados.
- **Próximos objetivos:** órdenes de mantenimiento correctivo, mantenimiento preventivo por activo y control de servicios básicos (agua, gasoil, gas).
- **Plazo:** 27 jul – 5 ago.

---

## 4. Qué necesitamos de cada área

Para cumplir estas ventanas, cada área debe:

1. Confirmar al **responsable de proceso** que acompañará la configuración y validará la revisión posterior (QA).
2. Entregar la información pendiente de sus maestros de datos cuando se solicite (proveedores, productos, empleados, cuentas).
3. Reservar disponibilidad para las pruebas de aceptación al cierre de cada grupo de su fase.

---

*Las fechas son estimadas y sujetas a la disponibilidad de los responsables de área para validación. El detalle tarea por tarea está en el plan de implementación y el cronograma del proyecto.*
