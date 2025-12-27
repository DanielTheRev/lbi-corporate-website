# LBI – Página Web Corporativa

## Descripción General

**LBI** es el sitio web corporativo desarrollado para representar la presencia en línea de la empresa. Este proyecto está diseñado para comunicar la propuesta de valor de LBI, mostrar sus servicios y proyectos, y facilitar el contacto con clientes potenciales a través de una interfaz moderna y funcional.

---

## Rol del Frontend

El frontend actúa como la cara visible de la empresa, proporcionando una experiencia de usuario intuitiva y atractiva. Se encarga de consumir datos desde una API REST / Headless CMS desarrollada como parte del ecosistema del proyecto y presentarlos de manera visual e interactiva.

---

## Relación con el Backend

El sitio web consume una API REST proporcionada por un backend independiente. Este backend gestiona la lógica de negocio, el almacenamiento de datos y la entrega de contenido dinámico, mientras que el frontend se centra en la presentación y la interacción del usuario.

---

## Funcionalidades Principales

- **Visualización de servicios**: Sección dedicada a mostrar los servicios ofrecidos por la empresa.
- **Proyectos destacados**: Presentación de los proyectos más relevantes realizados por LBI.
- **Contenido institucional**: Información sobre la misión, visión y valores de la empresa.
- **Formulario de contacto**: Permite a los usuarios enviar mensajes directamente.
- **Diseño responsivo**: Adaptado para dispositivos móviles y de escritorio.

---

## Stack Tecnológico

- **Framework**: Next.js (v13+)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Consumo de API**: Fetch API para integración con el backend.
- **Animaciones**: Animaciones: Transiciones y efectos visuales mediante utilidades de Tailwind CSS.

---

## Arquitectura del Proyecto

El proyecto sigue una estructura modular basada en componentes reutilizables. Algunas carpetas clave incluyen:

- `src/app`: Contiene las páginas principales y sus respectivos componentes.
- `src/app/components`: Componentes compartidos como el Navbar y el Footer.
- `src/app/HomePage`: Elementos específicos de la página de inicio, como banners y sliders.
- `src/app/nuestros-trabajos`: Páginas y componentes relacionados con los proyectos realizados.
- `src/app/servicios`: Página dedicada a los servicios ofrecidos.

---

## Flujo General de Funcionamiento

1. El usuario accede al sitio web y navega por las diferentes secciones.
2. El frontend realiza solicitudes a la API REST para obtener datos dinámicos (servicios, proyectos, etc.).
3. Los datos se procesan y se presentan al usuario mediante componentes visuales.
4. El usuario puede interactuar con el contenido, como enviar mensajes a través del formulario de contacto.

---

## Configuración y Ejecución

### Requisitos Previos

- Node.js (v16 o superior)
- Gestor de paquetes (npm, yarn o pnpm)

### Instalación

1. Clonar el repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Instalar dependencias:

   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

### Scripts Disponibles

- **Desarrollo**: Ejecutar el servidor de desarrollo local.

  ```bash
  npm run dev
  ```

- **Producción**: Construir y servir la aplicación para producción.

  ```bash
  npm run build
  npm start
  ```

---

## Estado del Proyecto

- **Estado actual**: Proyecto terminado (legacy).
- **Disponibilidad**: Offline, demo disponible.
- **Uso:** Sitio web corporativo.
---

## Autor

**Daniel Larrosa**  
Software Developer / Full Stack Developer
