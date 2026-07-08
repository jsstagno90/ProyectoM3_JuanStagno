# 🕵️ Sherlock-Chat

Una aplicación web inspirada en **Sherlock Holmes** que permite conversar con el famoso detective mediante inteligencia artificial. El usuario puede plantear casos, hacer preguntas o mantener una conversación mientras Sherlock responde siguiendo su personalidad característica.

## 🚀 Demo

https://sherlock-chat-tau.vercel.app/

---

## 📌 Características

* 💬 Chat interactivo con Sherlock Holmes.
* 🤖 Respuestas generadas con la API de Google Gemini.
* 📝 Renderizado de respuestas en Markdown.
* ⚡ Efecto de escritura para simular una conversación real.
* 🎨 Interfaz inspirada en el Londres victoriano.
* 📱 Diseño responsive para escritorio y dispositivos móviles.
* 🔒 API Key protegida mediante una Serverless Function de Vercel.

---

## 🛠️ Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (ES6 Modules)
* Vite
* Google Gemini API
* Vercel Serverless Functions
* Marked.js

---

## 📂 Estructura del proyecto

```text
Sherlock-Chat/
│
├── api/
│   └── chat.js
│
├── public/
│
├── src/
│   ├── components/
│   ├── services/
│   ├── styles/
│   ├── views/
│   └── main.js
│
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Instalación

Clonar el repositorio:

```bash
git clone https://github.com/jsstagno90/ProyectoM3_JuanStagno.git
```

Entrar al proyecto:

```bash
cd ProyectoM3_JuanStagno
```

Instalar dependencias:

```bash
npm install
```

Ejecutar en modo desarrollo:

```bash
npm run dev
```

---

## 🔑 Variables de entorno

Crear un archivo `.env` con la siguiente variable:

```env
GEMINI_API_KEY=TU_API_KEY
```

> En producción la variable debe configurarse desde Vercel.

---

## 📸 Capturas

Se recomienda agregar imágenes del proyecto:

* Pantalla de inicio
* Pantalla del chat
* Conversación con Sherlock

---

## 🎯 Objetivo del proyecto

Este proyecto fue desarrollado como trabajo integrador del **Módulo 3 del Bootcamp Full Stack de Soy Henry**, aplicando conceptos de:

* JavaScript moderno
* Consumo de APIs
* Manejo de Promesas y Fetch
* Arquitectura modular
* Serverless Functions
* Despliegue en Vercel

---

## 👨‍💻 Autor

**Juan Stagno**

GitHub:
https://github.com/jsstagno90

LinkedIn:
https://www.linkedin.com/in/juan-stagno

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos y de aprendizaje.
