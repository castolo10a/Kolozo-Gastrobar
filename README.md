<div align="center">

<img src="public/logo2.jpg" alt="Logo de Kolozo Gastrobar" width="96" />

# Kolozo Gastrobar

Landing page de **Kolozo Gastrobar**, restaurante bar en La Dorada, Caldas.
Food, fiesta, drinks & crossover music.

**[gastrobarkolozo.netlify.app](https://gastrobarkolozo.netlify.app/)**

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-12-FF4D8D?logo=framer&logoColor=white)
![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify&logoColor=white)

</div>

---

## Contenido

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Primeros pasos](#primeros-pasos)
- [Scripts](#scripts)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Cómo editar el contenido](#cómo-editar-el-contenido)
- [Imágenes y videos](#imágenes-y-videos)
- [Despliegue](#despliegue)

## Características

- **Landing de una sola página** con las secciones Inicio, Nosotros, Hamburguesa Salvaje, Menú, Experiencias, Eventos, Galería y Visítanos.
- **Navegación fluida:** scroll animado entre secciones y el enlace del header que corresponde a la sección visible queda resaltado.
- **Animaciones con Motion:** apariciones al hacer scroll, parallax en la portada, menú móvil animado y barra de progreso de lectura.
- **Videos que no pesan:** los reels se cargan y reproducen solo cuando están en pantalla.
- **Reservas por WhatsApp** con mensajes ya escritos según el motivo (mesa, evento, plan en pareja, cine).
- **Responsive y accesible:** diseño pensado para móvil, enlace para saltar al contenido, textos alternativos y respeto por la preferencia de reducir movimiento del sistema.
- **Imágenes optimizadas** en WebP y carga diferida.

## Tecnologías

| Herramienta | Uso |
|---|---|
| [React 18](https://react.dev/) | Interfaz y componentes |
| [Vite](https://vitejs.dev/) | Servidor de desarrollo y build |
| [Tailwind CSS](https://tailwindcss.com/) | Estilos y sistema de diseño |
| [Motion](https://motion.dev/) | Animaciones y scroll suave |
| [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) | Detección de secciones y elementos visibles |
| [React Icons](https://react-icons.github.io/react-icons/) | Iconografía |
| [ESLint](https://eslint.org/) | Calidad de código |

## Primeros pasos

**Requisitos:** Node.js 18 o superior.

```bash
git clone https://github.com/castolo10a/Kolozo-Gastrobar.git
cd Kolozo-Gastrobar
npm install
npm run dev
```

El sitio queda disponible en `http://localhost:5173`.

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Sirve localmente el build de producción |
| `npm run lint` | Revisa el código con ESLint |

## Estructura del proyecto

```
src/
├── assets/          # Imágenes, posters y videos optimizados
├── components/
│   ├── layout/      # Header, Footer, botón de WhatsApp, barra de progreso
│   └── ui/          # Piezas reutilizables: Button, Section, Reveal, AutoplayVideo…
├── config/
│   └── site.js      # Datos del negocio: contacto, dirección, horario, redes
├── context/         # Sección activa compartida con el header
├── data/            # Textos e imágenes de cada sección
├── hooks/           # Hooks propios (scroll, enlaces internos)
├── sections/        # Un componente por sección de la landing
├── utils/           # Scroll animado y enlaces de WhatsApp
├── App.jsx
└── main.jsx
```

## Cómo editar el contenido

El diseño y el contenido están separados, así que la mayoría de los cambios no requieren tocar componentes:

| Quiero cambiar… | Archivo |
|---|---|
| Teléfono, dirección, horario, redes o enlace de la carta | `src/config/site.js` |
| Textos de una sección | `src/data/<sección>.js` |
| Mensajes prellenados de WhatsApp | `src/utils/whatsapp.js` |
| Opciones del menú de navegación | `src/data/navigation.js` |
| Colores y tipografías | `tailwind.config.js` |

## Imágenes y videos

Los archivos originales van en la carpeta `media/`, que no se sube al repositorio. Antes de usarlos en la web se optimizan:

- **Fotos:** WebP, máximo unos 1600 px de ancho.
- **Videos:** MP4 (H.264) sin audio, 540 px de ancho y unos 15 segundos, con una imagen de portada en `src/assets/images/posters/`.

En [`media/README.md`](media/README.md) está la guía de qué tipo de material buscar y cómo nombrarlo.

## Despliegue

El sitio se publica en **Netlify** con la configuración de [`netlify.toml`](netlify.toml): ejecuta `npm run build` con Node 20 y publica la carpeta `dist/`.

---

<div align="center">

Desarrollado por **[CastilloCoder](https://fullstack-colombia.netlify.app/)**

</div>
