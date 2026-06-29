# 📁 Project Structure

## Objetivo

Definir la estructura de carpetas del proyecto para mantener un código organizado, escalable y fácil de mantener.

---

# Estructura

```text
src/
├── app/
├── components/
├── features/
│   ├── donations/
│   ├── volunteers/
│   ├── collection-centers/
│   └── verified-info/
├── hooks/
├── lib/
├── services/
├── styles/
├── types/
└── utils/
```

---

## Descripción de las carpetas

### 📂 app/
Contiene las páginas y rutas principales de la aplicación utilizando Next.js App Router.

### 🧩 components/
Componentes reutilizables como botones, tarjetas, encabezados, pies de página, formularios y otros elementos de la interfaz.

### 🚀 features/
Organización del código por funcionalidades del negocio.

- donations/: Gestión de donaciones.
- volunteers/: Registro y gestión de voluntarios.
- collection-centers/: Centros de acopio.
- verified-info/: Información verificada.

### 🪝 hooks/
Hooks personalizados de React.

### 📚 lib/
Configuraciones y librerías compartidas, como la conexión con Supabase.

### 🔧 services/
Lógica para consumir APIs y servicios externos.

### 🎨 styles/
Estilos globales y configuraciones de diseño.

### 🏷️ types/
Definiciones de tipos e interfaces de TypeScript.

### 🛠️ utils/
Funciones auxiliares reutilizables.

---

# Principios

- Separación clara de responsabilidades.
- Código reutilizable.
- Escalabilidad.
- Fácil mantenimiento.
- Organización por funcionalidades.
- Buenas prácticas de desarrollo.
