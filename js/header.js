/**
 * header.js
 * Renderiza el layout compartido (header, footer, sidebar opcional) en
 * cualquier página, y maneja el comportamiento del menú móvil.
 *
 * Uso en cada página:
 *   import { renderLayout } from "../js/header.js";
 *   renderLayout({ activeKey: "centros", basePath: ".." });
 */
import { Header, Footer, Sidebar } from "./site.js";

export function initNavToggle() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => navLinks.classList.toggle("open"));
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("open");
    }
  });
}

/**
 * renderLayout — inyecta Header, Footer y (opcionalmente) Sidebar
 * en los elementos #header-root, #footer-root, #sidebar-root del HTML,
 * y activa el toggle del menú móvil.
 *
 * @param {{activeKey: string, basePath: string, withSidebar?: boolean}} opts
 */
export function renderLayout({ activeKey = "", basePath = ".", withSidebar = false } = {}) {
  const headerRoot = document.getElementById("header-root");
  const footerRoot = document.getElementById("footer-root");
  const sidebarRoot = document.getElementById("sidebar-root");

  if (headerRoot) headerRoot.outerHTML = Header({ activeKey, basePath });
  if (footerRoot) footerRoot.outerHTML = Footer({ basePath });
  if (withSidebar && sidebarRoot) sidebarRoot.outerHTML = Sidebar({ basePath });

  initNavToggle();
}
