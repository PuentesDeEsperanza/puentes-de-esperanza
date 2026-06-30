/**
 * home.js
 * Lógica específica de la página de Inicio + funciones de comportamiento
 * compartidas (contador animado, scroll reveal, manejo de formularios)
 * que también importan las páginas internas.
 */
import { renderLayout } from "./header.js";
import { HOW_TO_HELP, WHY_REASONS, IMPACT_STATS } from "./site.js";

/* ============================================
   COMPORTAMIENTOS COMPARTIDOS (exportados para otras páginas)
   ============================================ */

export function initCounters() {
  const counters = document.querySelectorAll(".impact-num[data-target]");
  if (!counters.length) return;

  function animate(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString("es-AR");
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { animate(e.target); observer.unobserve(e.target); }
    }),
    { threshold: 0.4 }
  );
  counters.forEach((c) => observer.observe(c));
}

export function initScrollReveal() {
  const reveals = document.querySelectorAll(".card, .help-card, .impact-item");
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    }),
    { threshold: 0.1 }
  );
  reveals.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });
}

function handleFormSubmit(formId, successText) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (!btn) return;
    btn.textContent = successText;
    btn.disabled = true;
    btn.style.background = "#2E9E6B";
  });
}

export function initForms() {
  handleFormSubmit("newsletterForm", "¡Listo! ✓");
  handleFormSubmit("volunteerForm", "¡Gracias! Te contactamos pronto 🎉");
  handleFormSubmit("donationForm", "¡Donación registrada! Gracias ❤️");

  document.querySelectorAll(".donation-card").forEach((card) => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".donation-card").forEach((c) => c.classList.remove("selected"));
      card.classList.add("selected");
      const amount = card.querySelector(".donation-amount")?.textContent;
      const customInput = document.getElementById("customAmount");
      if (customInput && amount) customInput.value = amount.replace(/\D/g, "");
    });
  });
}

/* ============================================
   PÁGINA DE INICIO
   ============================================ */

function renderHelpSection() {
  const root = document.getElementById("help-section-root");
  if (!root) return;
  const cards = HOW_TO_HELP.map(
    (item) => `
          <a href="${item.href}" class="help-card">
            <div class="help-icon ${item.bg}">${item.icon}</div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
          </a>`
  ).join("");
  root.innerHTML = `
        <h2 class="section-title center">¿Cómo podés ayudar hoy?</h2>
        <div class="help-grid">${cards}
        </div>
        <div class="verified-banner">
          <span class="verified-icon">🛡️</span>
          <p>Información verificada y actualizada por voluntarios y organizaciones colaboradoras.</p>
        </div>`;
}

function renderWhySection() {
  const root = document.getElementById("why-section-root");
  if (!root) return;
  const items = WHY_REASONS.map(
    (r) => `<div class="why-item"><span class="why-icon">${r.icon}</span><p>${r.text}</p></div>`
  ).join("");
  root.innerHTML = `
        <h2 class="section-title">¿Por qué Puentes de Esperanza?</h2>
        <p class="section-sub">Conectamos personas que quieren ayudar con organizaciones, campañas y centros de acopio confiables, facilitando que la solidaridad llegue donde más se necesita.</p>
        <div class="why-grid">${items}
        </div>`;
}

function renderImpactSection() {
  const root = document.getElementById("impact-section-root");
  if (!root) return;
  const items = IMPACT_STATS.map(
    (s) => `
          <div class="impact-item">
            <div class="impact-circle ${s.bg} ${s.color}">${s.icon}</div>
            <span class="impact-num" data-target="${s.target}">0</span>
            <span class="impact-label">${s.label}</span>
          </div>`
  ).join("");
  root.innerHTML = `
        <h3 class="impact-title">Juntos ya estamos generando impacto</h3>
        <div class="impact-row">${items}
        </div>`;
}

function initHomePage() {
  // Esta función solo corre si la página actual tiene los roots de Inicio
  if (!document.getElementById("help-section-root")) return;

  renderHelpSection();
  renderWhySection();
  renderImpactSection();
}

function init() {
  const isHome = document.body.dataset.page === "home";

  renderLayout({
    activeKey: isHome ? "inicio" : "",
    basePath: isHome ? "." : "..",
    withSidebar: isHome,
  });

  if (isHome) initHomePage();

  initCounters();
  initScrollReveal();
  initForms();
}

document.addEventListener("DOMContentLoaded", init);
