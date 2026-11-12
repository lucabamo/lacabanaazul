# La Cabaña Azul — sitio web

Landing de una sola página para **La Cabaña Azul** (San Isidro, Cedral, S.L.P.), cinco cabañas de Samuel y Consuelo cerca de Real de Catorce. El objetivo es recibir reservas directas por WhatsApp además de Airbnb.

HTML, CSS y JavaScript sin dependencias ni paso de compilación: funciona tal cual en GitHub Pages, Netlify o cualquier hosting estático.

**Sitio:** https://lacabanaazul.mx/

## Estructura

```
index.html          Todo el contenido, metadatos SEO y datos estructurados (JSON-LD)
styles.css          Estilos (paleta azul, diseño responsivo)
main.js             WhatsApp, menú, galerías, visor de fotos y animaciones
404.html            Página de error
assets/img/         Fotos en WebP (1400 px y versión -800 para celular)
assets/og-image.jpg Imagen para compartir en WhatsApp/Facebook (1200×630)
assets/favicon.svg, assets/apple-touch-icon.png
sitemap.xml  robots.txt  netlify.toml  .nojekyll
```

## Publicación

- **Hosting:** GitHub Pages (Settings → Pages → rama `main`, carpeta `/ (root)`).
- **Dominio:** `lacabanaazul.mx`, registrado en Cloudflare. El archivo `CNAME` le dice a GitHub cuál es el dominio.
- **DNS en Cloudflare** (todos en "DNS only", nube gris):
  - `A` `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - `CNAME` `www` → `lucabamo.github.io`
- En Settings → Pages, cuando el DNS esté listo, activar **Enforce HTTPS**.

## Después de publicar (SEO)

- **Google Search Console**: agrega el sitio, verifica y envía `sitemap.xml`.
- **Perfil de Google Maps (Google Business Profile)**: pon la URL del sitio como página web del negocio. Es lo que más ayuda para búsquedas como "cabañas cerca de Real de Catorce".
- Pon el enlace en la bio de Instagram (@la_cabanaazul) y en el perfil de Airbnb.
- Pide a huéspedes felices una reseña en Google Maps.

## Cambiar precios o el número de WhatsApp

- **WhatsApp:** en `main.js`, `const WHATSAPP_NUMBER = '524881013532';` (52 + 10 dígitos). Cambia también los `https://wa.me/524881013532` de `index.html` y el `telephone` del JSON-LD.
- **Precios:** están en cada tarjeta (`<p class="price">`), en la pregunta frecuente "¿Cuánto cuesta la noche?", en `priceRange`/`makesOffer` del JSON-LD y en la meta descripción ("Desde $500").

## Pendientes (marcados con `<!-- PENDIENTE -->` en `index.html`)

- Horas de llegada (check-in) y salida (check-out).
- Forma de pago, anticipo y política de cancelación de reservas directas.
- Confirmar si Casa Mora Azul tiene wifi.

## Fuentes

- Precios, historia, frase favorita, anécdotas y foto: enviados por Samuel y Consuelo (noviembre 2026).
- Capacidad, camas, baños, amenidades, calificaciones y reseñas: anuncios públicos de Airbnb (noviembre 2026). Conviene actualizar las calificaciones de vez en cuando.
