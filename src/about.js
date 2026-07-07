import { navbar } from "./navbar.js";

export function aboutView() {

    return `

        ${navbar()}

        <main class="about">

            <section class="about-card">

                <h1>Sobre Sherlock-Chat</h1>

                <p>
                    Sherlock-Chat es un asistente conversacional inspirado
                    en Sherlock Holmes.
                </p>

                <hr>

                <h2>🕵️ ¿Cómo funciona?</h2>

                <p>
                    La aplicación utiliza Gemini AI mediante una
                    Serverless Function en Vercel para mantener
                    protegida la API Key.
                </p>

                <hr>

                <h2>⚙ Tecnologías</h2>

                <ul>

                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>Vite</li>
                    <li>Gemini AI</li>
                    <li>History API</li>
                    <li>LocalStorage</li>
                    <li>Vercel</li>

                </ul>

                <hr>

                <h2>👤 Autor</h2>

                <p>
                    Juan Stagno
                </p>

                <p>
                    Proyecto Integrador M3 - SoyHenry
                </p>

            </section>

        </main>

    `;

}