# [cite_start]STEPSTYLE — FUNCIONALIDADES DEL SISTEMA [cite: 1]

### [cite_start]Sistema de Comercio Electrónico de Calzado [cite: 2]
[cite_start]*Basado en StepStyle_Requerimientos_v1_0.docx* [cite: 2]

---

## 📊 Resumen del Proyecto

* [cite_start]**Total de Funcionalidades:** 20 [cite: 3]
* [cite_start]🔴 **Alta (Crítica):** 10 [cite: 3]
* [cite_start]🟡 **Media (Importante):** 5 [cite: 3]
* [cite_start]🟢 **Baja (Informativa):** 5 [cite: 3]

---

## 📝 Lista de Requerimientos Funcionales

| ID | Funcionalidad | Descripción | Módulo | Prioridad |
| :--- | :--- | :--- | :--- | :--- |
| **RF-001** | Página de Inicio | [cite_start]Carrusel hero animado, swiper de productos destacados (IDs 5-10), sección de servicios, carrusel de marcas y galería de redes sociales. [cite: 4] | Home | Alta |
| **RF-002** | Catálogo de Productos | Lista de 16 productos en grilla responsiva. [cite_start]Muestra imagen, nombre, precio y precio anterior tachado si aplica. [cite: 4] | Tienda | Alta |
| **RF-003** | Filtrar y Ordenar | Dropdown con 5 opciones: Todos, Nuevos, En Venta, Precio menor→mayor, Precio mayor→menor. [cite_start]Filtrado reactivo sin recarga. [cite: 4] | Tienda | Alta |
| **RF-004** | Detalle de Producto | [cite_start]Galería multi-imagen con thumbnails, selector de color (3 opciones), selector de cantidad, tabs de Descripción y Envío/Devolución, productos recomendados. [cite: 4] | Detalle | Alta |
| **RF-005** | Agregar al Carrito (listado) | Agregar desde tarjeta sin ingresar al detalle. [cite_start]Verifica duplicados; si existe, muestra aviso; si es nuevo, agrega con cantidad 1. [cite: 4] | Carrito | Alta |
| **RF-006** | Agregar al Carrito (detalle) | Selección de cantidad con botones +/− desde la página de detalle antes de agregar. [cite_start]Cantidad mínima: 1. [cite: 4] | Carrito | Alta |
| **RF-007** | Gestionar Carrito | Ver, aumentar/disminuir cantidad (mín. 1), eliminar ítems, ver total y navegar al checkout. [cite_start]Persistencia en localStorage. [cite: 4] | Carrito | Alta |
| **RF-008** | Agregar a Wishlist | Guardar producto con ícono de corazón desde cualquier listado o detalle. Sin duplicados. [cite_start]Persiste entre sesiones. [cite: 4] | Wishlist | Media |
| **RF-009** | Gestionar Wishlist | Ver favoritos guardados, trasladar al carrito o eliminar. [cite_start]Si ya está en carrito, incrementa cantidad. [cite: 4] | Wishlist | Media |
| **RF-010** | Contadores de Nav | Mostrar en tiempo real el total de ítems del carrito (suma de cantidades) y el conteo de la wishlist. [cite_start]Actualización por eventos. [cite: 4] | Navegación | Alta |
| **RF-011** | Proceso de Checkout | [cite_start]Formulario en pasos: datos de contacto, tipo de entrega (domicilio/recogida), dirección, pago con tarjeta (nro., exp., CVV) y resumen con impuesto 10%. [cite: 4] | Checkout | Alta |
| **RF-012** | Página Acerca de | [cite_start]Historia de marca, sección de calidad de materiales, carrusel de marcas y equipo (3 miembros con hover para redes sociales). [cite: 4] | About | Baja |
| **RF-013** | Blog | Grilla de 11 artículos con imagen, categoría, título, autor, fecha y botón 'Leer más'. [cite_start]Datos desde Blogs.json. [cite: 4] | Blog | Baja |
| **RF-014** | Página de Contacto | Dirección, teléfono, email y horarios de atención. Mapa de Google Maps embebido. [cite_start]Formulario nombre/email/mensaje. [cite: 4] | Contacto | Baja |
| **RF-015** | Etiquetas de Producto | Badge visual sobre tarjetas: 'Nuevo' en rojo, 'En Venta' en verde. [cite_start]Productos sin etiqueta no muestran badge. [cite: 4] | Transversal | Media |
| **RF-016** | Menú Responsivo | Botón hamburguesa en móvil. Menú desplegable vertical. [cite_start]Contadores visibles en ambos layouts. [cite: 4] | Navegación | Alta |
| **RF-017** | Footer | [cite_start]Logo, links rápidos, categorías, suscripción newsletter, redes sociales y 6 logos de métodos de pago. [cite: 4] | Footer | Baja |
| **RF-018** | Productos Recomendados | [cite_start]Sección en el detalle de producto con sugerencias (IDs 5-10) en swiper navegable. [cite: 4] | Detalle | Media |
| **RF-019** | Cálculo de Impuesto | [cite_start]Impuesto estimado del 10% sobre el subtotal, visible en el resumen de checkout. [cite: 4] | Checkout | Alta |
| **RF-020** | Confirmación de Pedido | Notificación de éxito (toast) al hacer clic en 'Pagar Ahora'. [cite_start]Transición de estado PENDIENTE→CONFIRMADO. [cite: 4] | Checkout | Alta |

---

## 📌 Leyenda de Prioridades

* [cite_start]🔴 **Alta:** Crítica para el negocio. [cite: 6]
* [cite_start]🟡 **Media:** Importante pero no bloqueante. [cite: 6]
* [cite_start]🟢 **Baja:** Informativa / Institucional. [cite: 6]

---
[cite_start]_Fuente: Análisis exhaustivo de StepStyle_Requerimientos_v1_0.docx — Secciones 4 (RF), 9 (Módulos) y 13 (Trazabilidad)._ [cite: 7]
