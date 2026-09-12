# 🎭 El Show Debe Continuar - Interactive Gamified Platform

Aplicación web gamificada desarrollada para la campaña promocional del artista Turkano. La plataforma integra un sistema de "Capture The Flag" (CTF) basado en pistas musicales, donde los usuarios deben resolver acertijos para desbloquear progresivamente los capítulos de la historia.

🔗 **[Ver Plataforma en Vivo](https://showdebecontinuar.com/)**

## 🚀 Arquitectura y Características

* **Autenticación Serverless:** Integración nativa con **AWS Amplify** para la gestión segura de identidades y control de acceso.
* **Rutas Protegidas:** Implementación de `react-router-dom` junto con Context API (`AuthProvider`) para restringir el acceso a los capítulos de la historia según el estado de autenticación del usuario.
* **Desbloqueo Progresivo:** Lógica de gamificación dividida en 6 módulos independientes (`CapOne` a `CapSix`), renderizados dinámicamente conforme el usuario avanza.
* **Desarrollo Ágil:** Entorno de construcción optimizado con Vite y estilizado mediante Tailwind CSS v4 para una interfaz inmersiva y de alto rendimiento.

## 🛠️ Tecnologías Utilizadas

* **React 19**
* **AWS Amplify** (Cloud Backend & Auth)
* **React Router DOM** (Routing)
* **Context API** (State Management)
* **Tailwind CSS v4**
* **Vite**

## 🧠 Retos Técnicos
El desafío principal de la arquitectura fue orquestar un flujo de usuario seguro y dinámico. Se diseñó un sistema de rutas privadas (`ProtectedRoute.jsx`) que interactúa constantemente con el estado global de autenticación, asegurando que los usuarios no pudieran "saltarse" los acertijos manipulando la URL, manteniendo así la integridad del concurso promocional.
