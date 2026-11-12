/* =========================================================
   La Cabaña Azul — interacciones (JavaScript sin dependencias)
   ========================================================= */

/* ⚙️ CONFIGURACIÓN — cambia aquí el número de WhatsApp.
   Formato internacional sin "+", espacios ni guiones: 52 + 10 dígitos.
   Número tomado de la ficha de Google Maps / directorios: +52 488 101 3532.
   Confírmalo con la familia antes de publicar. */
const WHATSAPP_NUMBER = '524881013532';

const DEFAULT_MESSAGE = 'Hola, me interesa reservar en La Cabaña Azul. ¿Tienen disponibilidad para las fechas ___?';
const cabinMessage = (name) => `Hola, me interesa reservar ${name}. ¿Tienen disponibilidad para las fechas ___?`;

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function formatPhone(n) {
  // 524881013532 -> +52 488 101 3532
  const m = String(n).match(/^52(\d{3})(\d{3})(\d{4})$/);
  return m ? `+52 ${m[1]} ${m[2]} ${m[3]}` : `+${n}`;
}

document.addEventListener('DOMContentLoaded', () => {
  /* Enlaces de WhatsApp */
  document.querySelectorAll('[data-wa]').forEach((a) => {
    const name = a.dataset.cabinName;
    a.href = waLink(name ? cabinMessage(name) : DEFAULT_MESSAGE);
    a.target = '_blank';
    a.rel = 'noopener';
  });
  document.querySelectorAll('[data-phone-display]').forEach((el) => {
    el.textContent = formatPhone(WHATSAPP_NUMBER);
  });
  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  /* Encabezado al hacer scroll */
  const header = document.querySelector('.site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Menú móvil */
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('menu');
  const closeMenu = () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Abrir menú'); };
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

  /* Galerías de cada cabaña */
  document.querySelectorAll('[data-gallery]').forEach((g) => {
    const track = g.querySelector('.gallery-track');
    const imgs = [...track.querySelectorAll('img')];
    const dots = document.createElement('div');
    dots.className = 'g-dots';
    dots.setAttribute('aria-hidden', 'true');
    imgs.forEach(() => dots.appendChild(document.createElement('span')));
    g.appendChild(dots);
    const index = () => Math.round(track.scrollLeft / track.clientWidth);
    const update = () => [...dots.children].forEach((d, i) => d.classList.toggle('on', i === index()));
    const go = (dir) => {
      let i = index() + dir;
      if (i < 0) i = imgs.length - 1;
      if (i >= imgs.length) i = 0;
      track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' });
    };
    g.querySelector('.g-prev').addEventListener('click', () => go(-1));
    g.querySelector('.g-next').addEventListener('click', () => go(1));
    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    });
    track.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
    update();
  });

  /* Visor de fotos */
  const lb = document.querySelector('.lightbox');
  if (lb && typeof lb.showModal === 'function') {
    const lbImg = lb.querySelector('img');
    document.querySelectorAll('.gallery-track img, .strip img').forEach((img) => {
      img.addEventListener('click', () => {
        lbImg.src = img.src; // versión grande (1400 px)
        lbImg.alt = img.alt;
        lb.showModal();
      });
    });
    lb.querySelector('.lb-close').addEventListener('click', () => lb.close());
    lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });
  }

  /* Animación de aparición */
  const els = document.querySelectorAll('.card, .tl-item, .amenities li, .place, .quote, .compare-card, .distances li');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach((el) => el.classList.add('reveal'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
  }
});
