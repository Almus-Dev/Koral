# Pendientes del Proyecto

Ultima actualizacion: 2026-05-04 (sesion Gerencia Hotelera)

---

## Inmediatos — Configuracion del entorno de trabajo

- [x] Crear `CLAUDE.md` en raiz del repo (contexto, rol, protocolo)
- [x] Crear `Arquitectura/ROL-Y-DECISION.md` (como Claude toma decisiones en este proyecto)
- [x] Crear `Arquitectura/INSTRUCCIONES-PROYECTO.md` (reglas del pipeline, formato, criterios)
- [x] Crear skill `/koral-status` (dashboard de progreso)
- [x] Crear skill `/koral-validate` (ejecuta 3 checks sobre un area)
- [x] Crear skill `/koral-write` (escribe AS-IS reescrito para un area)
- [x] Crear skill `/koral` (orquestador maestro)
- [x] Crear `STATUS.md` en raiz (dashboard auto-actualizable)
- [x] Crear plantilla estandar de AS-IS (molde para el agente escritor)
- [x] Crear carpeta `Arquitectura/Log-Sesiones/` con primer log
- [x] Crear `Arquitectura/Pendientes-Validacion.md` (tracker de ⚠️ consolidado)

---

## Pendientes — Fase 0 (cierre de setup)

- [x] Confirmar orden de prioridad de areas para procesamiento — sin orden estricto, se ataca cualquier area con informacion disponible
- [x] Confirmar quien valida y aprueba cada AS-IS por area (sign-off) — Rodrigo Gramcko. Claude solo escribe, no gestiona validacion.
- [ ] Definir rol exacto de Claude en el proyecto y criterios de escalacion

---

## Pendientes — Fase 1 (ejecucion por area)

### Administracion y Finanzas CCS
- [x] Reescribir AS-IS CCS — Output completado 2026-05-04
- [x] Leer Inventario HOTEL-Juan
- [x] Leer Inventario HOTEL-Libny
- [x] Leer Inventario Compras y Almacen
- [x] Reescribir AS-IS HOTEL-Juan — Output completado 2026-05-04
- [x] Reescribir AS-IS HOTEL-Libny — Output completado 2026-05-04
- [x] Reescribir AS-IS Compras y Almacen — Output completado 2026-05-04

### AABB (Alimentos y Bebidas)
- [x] AS-IS AABB Bar — Output completado 2026-05-04 (`Output/AABB/AS-IS AABB Bar.md`)
- [x] AS-IS AABB Caja — Output completado 2026-05-04 (`Output/AABB/AS-IS AABB Caja.md`)
- [x] AS-IS AABB Cocina — Output completado 2026-05-04 (`Output/AABB/AS-IS AABB Cocina.md`)
- [ ] Confirmar apellido completo de Emil (jefe de cocina) para tabla de alias
- [ ] Confirmar apellido completo de Falcon (cocinero madrugada) para tabla de alias
- [ ] Confirmar canal por el que caja recibe lista de huespedes (WhatsApp u otro) — Tarea 1.0 AABB Caja
- [ ] Confirmar quien lleva fisicamente comanda firmada a recepcion — Tarea 1.14 AABB Caja
- [ ] Validar si firma de huespedes en Fase 4 aplica a todas las comandas del turno tarde o solo a cavas — Tarea 4.6 AABB Caja
- [ ] Propuestas de adicion Caja Fase 4 (Tareas 4.2-4.10) pendientes de aprobacion
- [ ] Propuesta de adicion Bar: Inventario de plateria y manteleria — pendiente de aprobacion

### Talento Humano (RRHH)
- [x] AS-IS RRHH — Output completado 2026-05-04 (`Output/RRHH/AS-IS RRHH.md`)
- [ ] Confirmar cargo exacto de Manuel (responsable A&B en hotel) — tabla alias
- [ ] Confirmar cargo exacto de Malcolm (cálculo horas extras) — tabla alias
- [ ] Confirmar cargo exacto de Arianna (coordinadora hotel) — tabla alias
- [ ] Confirmar si Rafael de sistemas es empleado o proveedor externo — tabla alias
- [ ] Confirmar apellido completo de Marilyn (Analista TH) — tabla alias
- [ ] Validar si 3.5.3 y 1.2.3 son el mismo proceso — pendiente de aprobación para fusión (Propuesta B)
- [ ] Validar si 3.6.1 y 3.6.2 son el mismo proceso — pendiente de aprobación para fusión (Propuesta C)
- [ ] Aprobar o rechazar Propuesta A: bono productividad camareras como tarea nueva en AS-IS RRHH
- [ ] 117 campos "Pendiente validar" restantes en AS-IS RRHH — requieren sesión adicional con informante (Andry Garcia / Marilyn)

### Gerencia Hotelera
- [x] AS-IS Gerencia Hotelera — Output completado 2026-05-04 (`Output/Gerencia Hotelera/AS-IS Gerencia Hotelera.md`)
- [ ] 29 campos ⚠️ pendientes de validacion con informante — ver tabla al final del AS-IS output
- [ ] Aprobar o rechazar Propuesta de Adicion: tarea diferenciada de atencion in-house via Visito (separada de 2.1.1)
- [ ] Confirmar identidad completa de "Francis" (supervisora ama de llaves) — tabla alias
- [ ] Confirmar identidad completa de "Jesús González" (admin de sistemas TT Hotel / Time Locks) — tabla alias
- [ ] Confirmar identidad completa de "señor Francisco" (tecnico externo refrigeracion) — tabla alias
- [ ] Confirmar identidad de "señor Romney" (visita de INEA mencionada en kmmin003) — tabla alias

### Areas no iniciadas (fuentes confirmadas — esperan orden de prioridad)
- [ ] Operaciones — AS-IS + Inventario + 1 Minuta. Pendiente: confirmar orden
- [ ] Contraloria Interna — AS-IS + Inventario + 1 Minuta. Pendiente: confirmar orden
- [ ] Consultoria Juridica (Legal) — AS-IS + Inventario + 1 Minuta. Pendiente: confirmar orden

---

## Pendientes — Contexto Proyecto (llenar a medida que avanzamos)

- [ ] `Arquitectura/Contexto Proyecto/Empresas y Entidades.md`
- [ ] `Arquitectura/Contexto Proyecto/Sistemas.md`
- [ ] `Arquitectura/Contexto Proyecto/Marco Regulatorio.md`
- [ ] `Arquitectura/Contexto Proyecto/Glosario.md`
