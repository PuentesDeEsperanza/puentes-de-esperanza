/**
 * site.js
 * Fuente única de datos del sitio + componentes reutilizables (funciones
 * puras que devuelven HTML). Pensado para mapear directo a props/JSON
 * y a componentes .jsx si el proyecto migra a React / Next.js.
 */

/* ============================================
   DATOS
   ============================================ */

export const NAV_LINKS = [
  { label: "Inicio", href: "/index.html", key: "inicio" },
  { label: "Cómo ayudar", href: "/pages/como-ayudar.html", key: "como-ayudar" },
  { label: "Centros", href: "/pages/centros.html", key: "centros" },
  { label: "Insumos", href: "/pages/insumos.html", key: "insumos" },
  { label: "Voluntarios", href: "/pages/voluntarios.html", key: "voluntarios" },
  { label: "Información", href: "/pages/informacion.html", key: "informacion" },
];

export const NAV_CTA = { label: "❤️ Donar", href: "/pages/donaciones.html", key: "donaciones" };

export const SITE = {
  name: "Puentes de Esperanza",
  tagline: "Conectando personas para ayudar",
  email: "info@puentesdeesperanza.org",
  instagram: "@puentesdeesperanza",
};

export const FOOTER_LINKS = [
  { label: "Cómo funciona", href: "/pages/como-ayudar.html" },
  { label: "Información y novedades", href: "/pages/informacion.html" },
  { label: "Contacto", href: "/pages/voluntarios.html" },
];

export const SOCIAL_ICONS = ["📷", "📘", "🐦", "✈️"];

export const HOW_TO_HELP = [
  { href: "/pages/donaciones.html", icon: "❤️", bg: "bg-rose", title: "Donar dinero", desc: "A campañas y organizaciones confiables." },
  { href: "/pages/insumos.html", icon: "📦", bg: "bg-amber", title: "Donar insumos", desc: "Alimentos, ropa, medicamentos y más." },
  { href: "/pages/centros.html", icon: "📍", bg: "bg-blue", title: "Centros de acopio", desc: "Encontrá el más cercano a vos." },
  { href: "/pages/voluntarios.html", icon: "🙋", bg: "bg-green", title: "Ser voluntario", desc: "Tu tiempo puede hacer la diferencia." },
  { href: "/pages/informacion.html", icon: "📣", bg: "bg-purple", title: "Información verificada", desc: "Noticias y actualizaciones confiables." },
];

export const WHY_REASONS = [
  { icon: "👥", text: "Unimos a quienes quieren ayudar con quienes más lo necesitan." },
  { icon: "✅", text: "Trabajamos con organizaciones verificadas y transparentes." },
  { icon: "❤️", text: "Hacemos que cada ayuda llegue a su destino." },
];

export const IMPACT_STATS = [
  { icon: "👥", bg: "bg-green-soft", color: "text-green", target: 15, label: "Campañas activas" },
  { icon: "🏛️", bg: "bg-blue-soft", color: "text-blue", target: 48, label: "Centros de acopio" },
  { icon: "❤️", bg: "bg-rose-soft", color: "text-rose", target: 320, label: "Voluntarios activos" },
];

export const HOW_IT_WORKS_STEPS = [
  { icon: "🔍", bg: "bg-green-soft", color: "text-green", title: "1. Elegí cómo querés ayudar", desc: "Explorá campañas, centros de acopio o formas de colaborar." },
  { icon: "❤️", bg: "bg-blue-soft", color: "text-blue", title: "2. Encontrá la opción ideal", desc: "Elegí la causa, organización o centro de acopio más cercano." },
  { icon: "🤝", bg: "bg-purple-soft", color: "text-purple", title: "3. Colaborá", desc: "Tu ayuda hace posible que más personas reciban apoyo." },
];

export const ALLY_ICONS = ["🤝", "💚", "⚕️", "👨‍👩‍👧"];

export const FAQ_ITEMS = [
  { q: "¿Cómo sé que mi donación llega a quien la necesita?", a: "Trabajamos con organizaciones y voluntarios verificados en cada zona. Publicamos actualizaciones periódicas sobre el destino de lo recaudado." },
  { q: "¿Puedo donar desde Venezuela?", a: "Sí. Tenemos formas de donación pensadas tanto para quienes están en Argentina como en Venezuela. Consultá la sección de Donaciones para ver las opciones disponibles según tu ubicación." },
  { q: "¿Necesito experiencia previa para ser voluntario?", a: "No. Hay tareas para todo tipo de perfiles y disponibilidad horaria. Te orientamos según lo que puedas ofrecer." },
  { q: "¿Qué hago si necesito ayuda y no sé por dónde empezar?", a: "Escribinos desde la sección \"Pedir orientación\" en cualquier página. Un voluntario te va a contactar para ver cómo podemos acompañarte." },
];

export const HELP_WAYS = [
  { href: "/pages/donaciones.html", icon: "❤️", bg: "bg-rose", title: "Donar dinero", desc: "Tu aporte económico nos permite responder rápido ante emergencias y sostener proyectos a largo plazo." },
  { href: "/pages/insumos.html", icon: "📦", bg: "bg-amber", title: "Donar insumos", desc: "Alimentos, ropa, productos de higiene y medicamentos. Consultá la lista actualizada de lo que más se necesita." },
  { href: "/pages/centros.html", icon: "📍", bg: "bg-blue", title: "Acercarte a un centro", desc: "Llevá tu donación al centro de acopio más cercano. Tenemos puntos en distintas zonas." },
  { href: "/pages/voluntarios.html", icon: "🙋", bg: "bg-green", title: "Ser voluntario", desc: "Sumá tu tiempo y habilidades: logística, comunicación, diseño, contención, lo que sepas hacer suma." },
  { href: null, icon: "📣", bg: "bg-purple", title: "Difundir", desc: "Compartir nuestras campañas en redes también es ayudar. Cuanta más gente se entera, más lejos llegamos." },
  { href: null, icon: "🤝", bg: "bg-rose", title: "Articular con tu empresa", desc: "¿Trabajás en una empresa que quiere colaborar? Podemos coordinar donaciones corporativas o voluntariado." },
];

/**
 * COLLECTION_CENTERS
 * Lista de centros de acopio verificados.
 * IMPORTANTE: no agregar centros ficticios ni de ejemplo. Cada entrada debe
 * corresponder a un centro real, confirmado por un voluntario u organización
 * aliada. Hasta que existan centros verificados, este array se mantiene vacío
 * y la página muestra un mensaje de "próximamente" + botón para sugerir uno.
 *
 * Shape esperado de cada entrada:
 * { name: string, address: string, hours: string, accepts: string }
 */
export const COLLECTION_CENTERS = [];

export const SUPPLY_ITEMS = [
  { name: "🍼 Leche en polvo / fórmula para bebés", category: "Alimentos", priority: "urgent" },
  { name: "💊 Medicamentos básicos (analgésicos, antitérmicos)", category: "Salud", priority: "urgent" },
  { name: "🧴 Jabón, shampoo, pasta dental", category: "Higiene", priority: "urgent" },
  { name: "🛏️ Frazadas y ropa de cama", category: "Abrigo", priority: "needed" },
  { name: "👕 Ropa de abrigo (talles adultos)", category: "Ropa", priority: "needed" },
  { name: "🍚 Arroz, fideos, legumbres", category: "Alimentos", priority: "needed" },
  { name: "🧷 Pañales (todos los talles)", category: "Higiene", priority: "needed" },
  { name: "🥫 Conservas y enlatados", category: "Alimentos", priority: "ok" },
  { name: "🧦 Calzado en buen estado", category: "Ropa", priority: "ok" },
];

export const PRIORITY_LABELS = {
  urgent: { label: "Urgente", className: "badge-urgent" },
  needed: { label: "Necesario", className: "badge-needed" },
  ok: { label: "Cubierto", className: "badge-ok" },
};

export const DONATION_AMOUNTS = [
  { amount: 2000, desc: "Kit de higiene" },
  { amount: 5000, desc: "Bolsón de alimentos", selected: true },
  { amount: 10000, desc: "Apoyo a una familia" },
];

export const OTHER_DONATION_WAYS = [
  { icon: "🏦", bg: "bg-blue", title: "Transferencia bancaria (AR)", desc: "CBU / Alias disponible por WhatsApp. Te enviamos comprobante de recepción." },
  { icon: "💱", bg: "bg-amber", title: "Transferencia (VE)", desc: "Coordinamos con nuestro punto aliado en Caracas para donaciones en bolívares o USD." },
  { icon: "📦", bg: "bg-green", title: "Donación en insumos", desc: "Si preferís donar productos en vez de dinero, visitá la lista de insumos." },
];

export const VOLUNTEER_AREAS = [
  { icon: "📦", bg: "bg-blue", title: "Logística", desc: "Organización y traslado de donaciones en centros de acopio." },
  { icon: "📣", bg: "bg-purple", title: "Comunicación", desc: "Redes sociales, contenido, diseño gráfico y difusión de campañas." },
  { icon: "🤝", bg: "bg-rose", title: "Contención", desc: "Acompañamiento a familias y comunidades que reciben ayuda." },
  { icon: "💻", bg: "bg-green", title: "Tecnología", desc: "Desarrollo web, manejo de datos, automatizaciones y soporte digital." },
  { icon: "🚗", bg: "bg-amber", title: "Transporte", desc: "Traslado de insumos entre centros de acopio y puntos de entrega." },
  { icon: "📋", bg: "bg-blue", title: "Administración", desc: "Organización de planillas, seguimiento de campañas y reportes." },
];

export const NEWS_ITEMS = [
  { date: "Junio 2026", icon: "📢", title: "Lanzamos la web oficial", desc: "Ya podés encontrar todas las formas de ayudar desde un solo lugar." },
  { date: "Mayo 2026", icon: "🤝", title: "Nuevo centro de acopio en San Martín", desc: "Sumamos un punto más cerca tuyo, abierto martes y jueves." },
  { date: "Abril 2026", icon: "❤️", title: "320 voluntarios activos", desc: "La comunidad sigue creciendo gracias a cada persona que se suma." },
];

/* ============================================
   COMPONENTES REUTILIZABLES
   (funciones puras: props -> HTML string)
   ============================================ */

export function Header({ activeKey = "", basePath = "." }) {
  const links = NAV_LINKS.map(
    (l) => `<a href="${basePath}${l.href}" class="${l.key === activeKey ? "active" : ""}">${l.label}</a>`
  ).join("\n        ");
  const ctaActive = NAV_CTA.key === activeKey ? "active" : "";

  return `
  <header class="nav">
    <div class="nav-inner">
      <a href="${basePath}/index.html" class="logo">
        <img src="${basePath}/assets/logo-icon.svg" alt="" class="logo-icon" width="40" height="32">
        <span class="logo-text">Puentes de<strong>Esperanza</strong></span>
      </a>
      <button class="hamburger" id="hamburger" aria-label="Abrir menú">
        <span></span><span></span><span></span>
      </button>
      <nav class="nav-links" id="navLinks">
        ${links}
        <a href="${basePath}${NAV_CTA.href}" class="nav-cta ${ctaActive}">${NAV_CTA.label}</a>
      </nav>
    </div>
  </header>`;
}

export function Footer({ basePath = "." }) {
  const links = FOOTER_LINKS.map((l) => `<a href="${basePath}${l.href}">${l.label}</a>`).join("\n          ");
  const socials = SOCIAL_ICONS.map((i) => `<span>${i}</span>`).join("");

  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="${basePath}/index.html" class="logo">
            <img src="${basePath}/assets/logo-icon.svg" alt="" class="logo-icon" width="36" height="29">
            <span class="logo-text">Puentes de<strong>Esperanza</strong></span>
          </a>
          <p>Conectando personas para ayudar.</p>
          <div class="footer-social">${socials}</div>
        </div>
        <div class="footer-links">
          <h4>Sobre el proyecto</h4>
          ${links}
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 Puentes de Esperanza · Hecho con ❤️ para conectar solidaridad.</p>
      </div>
    </div>
  </footer>`;
}

export function Sidebar({ basePath = "." }) {
  const steps = HOW_IT_WORKS_STEPS.map(
    (s) => `
          <div class="step">
            <div class="step-num ${s.bg} ${s.color}">${s.icon}</div>
            <div><h4>${s.title}</h4><p>${s.desc}</p></div>
          </div>`
  ).join("");
  const allies = ALLY_ICONS.map((i) => `<span class="ally-icon">${i}</span>`).join("");

  return `
    <aside class="sidebar">
      <div class="sidebar-card">
        <h3>¿Cómo funciona?</h3>
        <div class="steps">${steps}
        </div>
      </div>
      <div class="sidebar-card highlight-card">
        <h3>¿Necesitás ayuda?</h3>
        <p>Si estás atravesando una situación difícil, no estás solo. Podemos orientarte.</p>
        <a href="${basePath}/pages/como-ayudar.html" class="btn btn-outline btn-block">Pedir orientación</a>
      </div>
      <div class="sidebar-card">
        <h3>📧 Recibí novedades</h3>
        <p>Suscribite para recibir información verificada y oportunidades para ayudar.</p>
        <form class="newsletter-form" id="newsletterForm">
          <input type="email" placeholder="Tu correo electrónico" required>
          <button type="submit" class="btn btn-primary btn-block">Suscribirme</button>
        </form>
      </div>
      <div class="sidebar-card">
        <h3>Organizaciones aliadas</h3>
        <div class="allies-row">${allies}</div>
      </div>
    </aside>`;
}

export function PageHero({ title, subtitle }) {
  return `
  <section class="page-hero">
    <h1>${title}</h1>
    <p>${subtitle}</p>
  </section>`;
}

export function Card({ icon, bg, title, desc, href = null, circular = true }) {
  const tag = href ? "a" : "div";
  const hrefAttr = href ? `href="${href}"` : "";
  const shape = circular ? "card-icon" : "help-icon";
  return `
        <${tag} ${hrefAttr} class="card">
          <div class="${shape} ${bg}">${icon}</div>
          <h3>${title}</h3>
          <p>${desc}</p>
        </${tag}>`;
}

export function CardGrid(cardsHtml, { id = "", style = "" } = {}) {
  const idAttr = id ? ` id="${id}"` : "";
  const styleAttr = style ? ` style="${style}"` : "";
  return `
      <div class="cards-grid"${idAttr}${styleAttr}>
        ${cardsHtml.join("")}
      </div>`;
}

export function FAQAccordion({ id = "" } = {}) {
  const idAttr = id ? ` id="${id}"` : "";
  const items = FAQ_ITEMS.map(
    (item) => `
        <details class="faq-item">
          <summary>${item.q}</summary>
          <p>${item.a}</p>
        </details>`
  ).join("");
  return `<div class="faq-list"${idAttr}>${items}\n      </div>`;
}

export function DonationAmountSelector(amounts, { id = "" } = {}) {
  const idAttr = id ? ` id="${id}"` : "";
  const cards = amounts
    .map(
      (a) => `
          <div class="donation-card ${a.selected ? "selected" : ""}">
            <div class="donation-amount">$${a.amount.toLocaleString("es-AR")}</div>
            <div class="donation-desc">${a.desc}</div>
          </div>`
    )
    .join("");
  return `<div class="donation-options"${idAttr}>${cards}\n        </div>`;
}
