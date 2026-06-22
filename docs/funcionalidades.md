# STEPSTYLE — FUNCIONALIDADES DEL SISTEMA

### Sistema de Comercio Electrónico de Calzado 
*Basado en StepStyle_Requerimientos_v1_0.docx*

---

## 📊 Resumen del Proyecto

* **Total de Funcionalidades:** 20
* 🔴 **Alta (Crítica):** 10 
* 🟡 **Media (Importante):** 5 
* 🟢 **Baja (Informativa):** 5 

---

## 📝 Lista de Requerimientos Funcionales

| ID | Funcionalidad | Descripción | Módulo | Prioridad |
| :--- | :--- | :--- | :--- | :--- |
| **RF-001** | Página de Inicio | Carrusel hero animado, swiper de productos destacados (IDs 5-10), sección de servicios, carrusel de marcas y galería de redes sociales.  | Home | Alta |
| **RF-002** | Catálogo de Productos | Lista de 16 productos en grilla responsiva. Muestra imagen, nombre, precio y precio anterior tachado si aplica.  | Tienda | Alta |
| **RF-003** | Filtrar y Ordenar | Dropdown con 5 opciones: Todos, Nuevos, En Venta, Precio menor→mayor, Precio mayor→menor. Filtrado reactivo sin recarga.  | Tienda | Alta |
| **RF-004** | Detalle de Producto | Galería multi-imagen con thumbnails, selector de color (3 opciones), selector de cantidad, tabs de Descripción y Envío/Devolución, productos recomendados.  | Detalle | Alta |
| **RF-005** | Agregar al Carrito (listado) | Agregar desde tarjeta sin ingresar al detalle. Verifica duplicados; si existe, muestra aviso; si es nuevo, agrega con cantidad 1.  | Carrito | Alta |
| **RF-006** | Agregar al Carrito (detalle) | Selección de cantidad con botones +/− desde la página de detalle antes de agregar. Cantidad mínima: 1.  | Carrito | Alta |
| **RF-007** | Gestionar Carrito | Ver, aumentar/disminuir cantidad (mín. 1), eliminar ítems, ver total y navegar al checkout. Persistencia en localStorage.  | Carrito | Alta |
| **RF-008** | Agregar a Wishlist | Guardar producto con ícono de corazón desde cualquier listado o detalle. Sin duplicados. Persiste entre sesiones.  | Wishlist | Media |
| **RF-009** | Gestionar Wishlist | Ver favoritos guardados, trasladar al carrito o eliminar. Si ya está en carrito, incrementa cantidad.  | Wishlist | Media |
| **RF-010** | Contadores de Nav | Mostrar en tiempo real el total de ítems del carrito (suma de cantidades) y el conteo de la wishlist. Actualización por eventos.  | Navegación | Alta |
| **RF-011** | Proceso de Checkout | Formulario en pasos: datos de contacto, tipo de entrega (domicilio/recogida), dirección, pago con tarjeta (nro., exp., CVV) y resumen con impuesto 10%.  | Checkout | Alta |
| **RF-012** | Página Acerca de | Historia de marca, sección de calidad de materiales, carrusel de marcas y equipo (3 miembros con hover para redes sociales).  | About | Baja |
| **RF-013** | Blog | Grilla de 11 artículos con imagen, categoría, título, autor, fecha y botón 'Leer más'. Datos desde Blogs.json.  | Blog | Baja |
| **RF-014** | Página de Contacto | Dirección, teléfono, email y horarios de atención. Mapa de Google Maps embebido. Formulario nombre/email/mensaje.  | Contacto | Baja |
| **RF-015** | Etiquetas de Producto | Badge visual sobre tarjetas: 'Nuevo' en rojo, 'En Venta' en verde. Productos sin etiqueta no muestran badge.  | Transversal | Media |
| **RF-016** | Menú Responsivo | Botón hamburguesa en móvil. Menú desplegable vertical. Contadores visibles en ambos layouts.  | Navegación | Alta |
| **RF-017** | Footer | Logo, links rápidos, categorías, suscripción newsletter, redes sociales y 6 logos de métodos de pago.  | Footer | Baja |
| **RF-018** | Productos Recomendados | Sección en el detalle de producto con sugerencias (IDs 5-10) en swiper navegable.  | Detalle | Media |
| **RF-019** | Cálculo de Impuesto | Impuesto estimado del 10% sobre el subtotal, visible en el resumen de checkout.  | Checkout | Alta |
| **RF-020** | Confirmación de Pedido | Notificación de éxito (toast) al hacer clic en 'Pagar Ahora'. Transición de estado PENDIENTE→CONFIRMADO.  | Checkout | Alta |

---

## 📌 Leyenda de Prioridades

* 🔴 **Alta:** Crítica para el negocio. 
* 🟡 **Media:** Importante pero no bloqueante. 
* 🟢 **Baja:** Informativa / Institucional. 

---
_Fuente: Análisis exhaustivo de StepStyle_Requerimientos_v1_0.docx — Secciones 4 (RF), 9 (Módulos) y 13 (Trazabilidad)._ 
