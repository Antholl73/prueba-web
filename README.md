# 🌍 La Segunda Guerra Mundial (1939 — 1945)
### *Crónica Visual e Interactiva con Scrollytelling*

Una experiencia web narrativa e interactiva (*scrollytelling*) que relata los acontecimientos fundamentales de la Segunda Guerra Mundial. A medida que el usuario se desplaza verticalmente por la página, las tarjetas históricas activan cambios dinámicos en la capa visual central.

---

## 🛠️ Stack Tecnológico

- **Entorno y Bundler:** [Vite](https://vite.dev/) (ultrarrápido, con recarga en caliente HMR y soporte nativo de módulos ES).
- **Lenguajes:** HTML5 semántico, CSS3 nativo (patrón `position: sticky` y variables CSS) y Vanilla JavaScript (sin frameworks).
- **Librería de Scrollytelling:** [Scrollama.js](https://github.com/russellgoldenberg/scrollama) (basada en la API nativa `IntersectionObserver`).
- **Control de Versiones:** Git & GitHub.

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu computadora:

- **Node.js** (versión 18.0 o superior recomendada). Puedes verificarlo con:
  ```bash
  node -v
  ```
- **npm** (gestor de paquetes incluido con Node.js):
  ```bash
  npm -v
  ```
- **Git**:
  ```bash
  git --version
  ```

---

## 🚀 Cómo ejecutar el proyecto en local

Sigue estos sencillos pasos para clonar y probar la aplicación en tu entorno de desarrollo:

### 1. Clonar el repositorio
Abre tu terminal y descarga el código:
```bash
git clone https://github.com/Antholl73/prueba-web.git
```

### 2. Entrar a la carpeta del proyecto
```bash
cd prueba-web
```

### 3. Instalar las dependencias
Descarga las librerías necesarias (`vite`, `scrollama`):
```bash
npm install
```

### 4. Iniciar el servidor local de desarrollo
```bash
npm run dev
```

### 5. Abrir en tu navegador
La terminal te mostrará un enlace local. Abre tu navegador favorito y accede a:
```text
http://localhost:5173/
```

¡Listo! Ya puedes interactuar haciendo scroll y observar cómo las tarjetas narrativas sincronizan los eventos históricos.

---

## 📦 Comandos Disponibles

En el archivo `package.json` dispones de los siguientes scripts:

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo local con recarga instantánea. |
| `npm run build` | Compila y optimiza el proyecto para producción en la carpeta `dist/`. |
| `npm run preview` | Previsualiza localmente el resultado de la compilación de producción. |

---

## 📁 Estructura del Proyecto

```text
prueba-web/
├── index.html          # Estructura semántica principal (Hero, Scrolly y Footer)
├── package.json        # Manifiesto del proyecto, scripts y dependencias
├── public/             # Recursos multimedia estáticos (imágenes, audios, videos)
└── src/
    ├── main.js         # Lógica interactiva y configuración de Scrollama
    └── style.css       # Estilos globales, variables y patrón sticky
```

---

## 📄 Licencia

Este proyecto está bajo los términos de la licencia [LICENSE](./LICENSE).
