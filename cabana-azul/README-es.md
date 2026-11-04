# La Cabaña Azul — sitio web

Landing de una sola página para La Cabaña Azul (San Isidro, Cedral, S.L.P.). Está hecho con HTML, CSS y JavaScript sin dependencias ni paso de compilación, así que funciona tal cual en Netlify o en cualquier hosting estático.

## Estructura

```
index.html        Todo el contenido y las secciones
styles.css        Estilos (paleta azul, diseño responsivo)
main.js           Botones de WhatsApp, menú, galerías, lightbox y animaciones
assets/img/       Fotos optimizadas (tomadas de los anuncios de Airbnb)
assets/favicon.svg
sitemap.xml  robots.txt  netlify.toml
```

## Número de WhatsApp

El número actual es **+52 488 101 3532**. Salió de la ficha pública del negocio en Google Maps (vía un índice de búsqueda); **hay que confirmar que es el correcto y que tiene WhatsApp**.

Para cambiarlo:
1. En `main.js`, edita `const WHATSAPP_NUMBER = '524881013532';`. Va con código de país 52 y sin espacios ni signos.
2. Los enlaces `https://wa.me/524881013532` de `index.html` son solo un respaldo por si el JS no carga. Usa *Buscar y reemplazar* para cambiarlos también, junto con el texto visible "+52 488 101 3532" y el `telephone` del bloque JSON-LD.

Cada tarjeta de cabaña abre WhatsApp con un mensaje ya escrito, por ejemplo: *"Hola, me interesa reservar La Casita Azul. ¿Tienen disponibilidad para las fechas ___?"*.

## Textos pendientes (marcados con [CORCHETES])

En el sitio se ven resaltados en amarillo. Busca `[` en `index.html`:

| Placeholder | Dónde |
|---|---|
| `[DOMINIO]` | `<link rel="canonical">`, `og:url`, `og:image`, JSON-LD, `sitemap.xml`, `robots.txt` |
| `[FOTO DE SAMUEL Y CONSUELO]` | Acerca de nosotros: guarda la foto como `assets/img/samuel-y-consuelo.jpg` y descomenta la línea `<img>` indicada |
| `[HISTORIA DE SAMUEL…]` | Acerca de nosotros: 2 a 4 párrafos con sus palabras |
| `[FRASE FAVORITA DE SAMUEL O CONSUELO…]` | Cita destacada |
| `[AÑO]`, `[AÑO EXACTO · primer huésped]`, `[Cómo llegó la familia…]`, `[Detalle o anécdota…]`, `[Detalle de cada una]`, `[Planes a futuro]` | Línea del tiempo "La historia del rancho" |
| `[PRECIO POR NOCHE DE CADA CABAÑA]` | Nota debajo de las cabañas |
| `[BENEFICIO DE PRECIO AL RESERVAR DIRECTO…]`, `[TRANSFERENCIA / DEPÓSITO / EFECTIVO]`, `[MONTO O % DE ANTICIPO]`, `[POLÍTICA DE CANCELACIÓN DIRECTA]` | Reserva directo vs Airbnb |
| `[HORA DE CHECK-IN]`, `[HORA DE CHECK-OUT]`, `[FORMAS DE PAGO…]`, `[POLÍTICA DE CANCELACIÓN]`, `[CONDICIONES O CARGO POR MASCOTA…]` | Preguntas frecuentes |

Para revisar también: según Airbnb, **Casa Mora Azul no incluye wifi**. En la sección de amenidades el wifi aparece solo para las otras cuatro.

## Publicar en Netlify

**Opción A (arrastrar y soltar):**
1. Entra a https://app.netlify.com/drop
2. Arrastra la carpeta `cabana-azul` completa (o el zip ya descomprimido).
3. Netlify te da una URL `*.netlify.app`. Desde *Domain settings* puedes conectar un dominio propio.

**Opción B (con Git):**
1. Sube esta carpeta a un repositorio de GitHub.
2. En Netlify: *Add new site → Import an existing project*, y elige el repositorio.
3. Build command: *(vacío)*. Publish directory: `.` (ya está configurado en `netlify.toml`).

Una vez que tengas el dominio, reemplaza `[DOMINIO]` en todos los archivos (por ejemplo `lacabanaazul.mx`, sin `https://`) y vuelve a publicar.

## Fuentes de la información

- Capacidad, camas, baños, amenidades, descripciones, calificaciones y reseñas: anuncios públicos de Airbnb de los 5 espacios y el perfil de anfitrión de Samuel y Consuelo (consultados en noviembre de 2026). Las calificaciones cambian con el tiempo, así que conviene actualizarlas de vez en cuando.
- Ubicación y cómo llegar: coordenadas del anuncio y las indicaciones del propio anfitrión.
- Instagram: @la_cabanaazul. Posible página de Facebook (sin confirmar): id 106918387659984.
