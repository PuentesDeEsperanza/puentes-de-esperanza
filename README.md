# 🌉 Puentes de Esperanza

Sitio web oficial de **Puentes de Esperanza**, ONG que conecta comunidades entre Argentina y Venezuela para canalizar ayuda solidaria de forma transparente.

🔗 Demo: `https://<tu-usuario>.github.io/puentes-de-esperanza/`

---

## 📁 Estructura del proyecto

```
puentes-de-esperanza/
├── index.html              → Página de inicio
├── README.md
├── assets/                 → Imágenes e íconos
│   ├── hero-bridge-hummingbird.webp
│   └── logo-icon.svg
├── css/
│   └── styles.css          → Todos los estilos del sitio
├── js/
│   ├── site.js              → Datos del sitio + componentes reutilizables (Header, Footer, Card, etc.)
│   ├── header.js             → Renderizado del layout compartido (header/footer/sidebar) y menú móvil
│   └── home.js               → Lógica de Inicio + comportamientos compartidos (contadores, scroll reveal, formularios)
└── pages/
    ├── como-ayudar.html
    ├── centros.html
    ├── donaciones.html
    ├── insumos.html
    ├── voluntarios.html
    └── informacion.html
```

---

## 🎨 Identidad visual

| Color | Uso |
|---|---|
| Blanco | Fondo, espacio |
| 🩵 Celeste | Acento — Argentina |
| 💙 Azul | Color principal — Venezuela |
| ❤️ Rojo | Llamados a la acción, urgencia |
| 💛 Amarillo | Esperanza, energía |

Tipografía: **Plus Jakarta Sans** (títulos) + **Inter** (texto).

---

## 🧩 Cómo está armado el código

El sitio es HTML + CSS + JavaScript puro (sin frameworks ni build step), pero organizado como si fuera un proyecto de componentes:

- **`js/site.js`** es la única fuente de verdad de contenido (textos, links, listas de centros, insumos, etc.) y también exporta funciones reutilizables tipo componente (`Header()`, `Footer()`, `Card()`, `CardGrid()`, `FAQAccordion()`...). Cada función recibe datos y devuelve HTML — el mismo patrón que un componente de React recibiendo props.
- **`js/header.js`** se encarga de inyectar el header, footer y sidebar en cualquier página, y de manejar el menú hamburguesa en mobile.
- **`js/home.js`** tiene la lógica específica de Inicio y los comportamientos que varias páginas comparten (contador animado de impacto, scroll reveal, manejo de formularios).
- Cada página HTML es un "shell" liviano: solo tiene su contenido único y un `<script type="module">` que importa lo que necesita de `site.js` / `header.js` / `home.js`.

### Por qué importa esto

Si más adelante el proyecto migra a **React** o **Next.js**, el trabajo es casi mecánico:

1. Cada función de `site.js` (`Header`, `Footer`, `Card`...) se convierte en un componente `.jsx` que recibe las mismas props.
2. Los arrays de datos (`NAV_LINKS`, `COLLECTION_CENTERS`, `SUPPLY_ITEMS`, etc.) se mueven tal cual a un archivo de datos o a `getStaticProps`.
3. Cada página HTML en `/pages/` se convierte en un archivo dentro de `pages/` (o `app/`) de Next.js con la misma estructura de "importar datos + componer componentes".
4. Los comportamientos de `home.js` (contadores, scroll reveal, formularios) se reescriben como hooks (`useEffect`, `useState`) — la lógica interna es la misma.

No hace falta reescribir el sitio desde cero: hace falta trasladar funciones.

---

## 🚀 Cómo publicarlo en GitHub Pages

1. Subí todo el contenido de esta carpeta a la raíz del repositorio `puentes-de-esperanza` dentro de la organización `PuentesDeEsperanza`.
2. En GitHub, andá a **Settings → Pages**.
3. En "Source" elegí la rama `main` y la carpeta `/ (root)`.
4. Guardá. GitHub va a publicar el sitio en unos minutos en una URL del tipo:
   `https://puentesdeesperanza.github.io/puentes-de-esperanza/`

No hace falta build, ni instalar nada: es HTML/CSS/JS estático.

### Probarlo en local antes de subir

Como el sitio usa módulos de JavaScript (`type="module"`), no funciona abriendo el `index.html` directo con doble click. Hace falta un servidor local simple:

```bash
# Desde la carpeta del proyecto
python3 -m http.server 8000
# Abrir http://localhost:8000 en el navegador
```

(O cualquier extensión tipo "Live Server" de VS Code.)

---

## ✅ Próximos pasos sugeridos

- [ ] Reemplazar los datos de ejemplo (centros, insumos, estadísticas de impacto) por datos reales.
- [ ] Conectar el formulario de donaciones y voluntariado a un backend o servicio (Formspree, Google Forms, etc.) para recibir las respuestas.
- [ ] Agregar mapa interactivo real en `centros.html`.
- [ ] Sumar Google Analytics / Plausible para medir visitas.
- [ ] Evaluar migración a Next.js si el sitio crece (más páginas dinámicas, blog, panel de administración).

---

Hecho con ❤️ para conectar solidaridad entre Argentina y Venezuela.
