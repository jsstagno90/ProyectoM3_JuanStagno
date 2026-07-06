import { preguntarASherlock } from "./api.js";
import { historialConversacion, guardarHistorial } from "./conversacion.js";
import { marked } from "marked";


export function chatView() {

    return `

        <main class="chat">

            <header>

                <h1>221B Baker Street</h1>

                <h2>Bienvenido, detective</h2>

            </header>

            <section id="messages">

                <div class="message sherlock">

                    <strong>🕵️ Sherlock Holmes</strong>

                    <p id="welcome-message"></p>

                </div>

            </section>

            <footer class="input-area">

    <textarea
        id="prompt"
        placeholder="Describe el caso..."
    ></textarea>

    <div class="buttons">

        <button id="send-button">
            Enviar
        </button>

        <button id="new-case">
            🗂️ Nuevo caso
        </button>

    </div>

</footer>

        </main>

    `;

}

export function initChat() {

    escribirBienvenida();

    const button = document.querySelector("#send-button");

    const textarea = document.querySelector("#prompt");
    const newCaseButton = document.querySelector("#new-case");

    newCaseButton.addEventListener("click", nuevaInvestigacion);

    button.addEventListener("click", async () => {

        const texto = textarea.value.trim();
        if (!texto) {
            return;
        }
        agregarMensaje("user", texto);
        historialConversacion.push({
            role: "user",
            parts: [
                {
                    text: texto
                }
            ]
        });
        guardarHistorial();
        textarea.value = "";

        textarea.focus();
        button.disabled = true;
        textarea.disabled = true;
        newCaseButton.disabled = true;
        mostrarAnalizando();

        try {

            const respuesta = await preguntarASherlock();
            if (!respuesta) {
                throw new Error("Respuesta vacía");
            }
            historialConversacion.push({
                role: "model",
                parts: [
                    {
                        text: respuesta
                    }
                ]
            });
            guardarHistorial();
            agregarMensajeConEfecto("sherlock", respuesta);

        } catch (error) {
            console.error(error);
            agregarMensajeConEfecto(
                "sherlock",
                "📡 El telégrafo con Baker Street no responde en este momento.\n\nIntente nuevamente dentro de unos instantes."
            );

        } finally {

            ocultarAnalizando();

            button.disabled = false;
            textarea.disabled = false;
            newCaseButton.disabled = false;

            textarea.focus();

        }



    });
    textarea.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {

            event.preventDefault();

            button.click();

        }

    });
}
function agregarMensajeConEfecto(tipo, texto) {

    const messages = document.querySelector("#messages");

    const nuevoMensaje = document.createElement("div");

    nuevoMensaje.className = `message ${tipo}`;

    const nombre =
        tipo === "user"
            ? "🙂 Tú"
            : "🕵️ Sherlock Holmes";

    nuevoMensaje.innerHTML = `

        <strong>${nombre}</strong>

        <p></p>

    `;

    messages.appendChild(nuevoMensaje);

    const parrafo = nuevoMensaje.querySelector("p");

    let i = 0;

    function escribir() {

        if (i < texto.length) {

            parrafo.textContent += texto.charAt(i);

            i++;

            messages.scrollTop = messages.scrollHeight;

            setTimeout(escribir, 25);

        } else {

            parrafo.innerHTML = marked.parse(texto);

        }
    }

    escribir();

}

function escribirBienvenida() {

    const message = document.querySelector("#welcome-message");

    const texto = `
Buenas tardes, detective.

Soy Sherlock Holmes.

Exponga el caso y comenzaremos la investigación.
`;

    let i = 0;

    function escribir() {

        if (i < texto.length) {

            message.textContent += texto.charAt(i);

            i++;

            setTimeout(escribir, 25);

        }

    }

    escribir();

}


function agregarMensaje(tipo, texto) {

    if (texto.trim() === "") return;

    const messages = document.querySelector("#messages");

    const nuevoMensaje = document.createElement("div");

    nuevoMensaje.className = `message ${tipo}`;

    const nombre =
        tipo === "user"
            ? "🙂 Tú"
            : "🕵️ Sherlock Holmes";

    nuevoMensaje.innerHTML = `

        <strong>${nombre}</strong>

        <p>${texto}</p>

    `;

    messages.appendChild(nuevoMensaje);

    messages.scrollTop = messages.scrollHeight;

}



function mostrarAnalizando() {

    const messages = document.querySelector("#messages");

    const thinking = document.createElement("div");

    thinking.id = "thinking-message";

    thinking.className = "message sherlock";

    thinking.innerHTML = `

        <strong>🕵️ Sherlock Holmes</strong>
<br>
        <p>🔎 Analizando las pistas...</p>

    `;

    messages.appendChild(thinking);

    messages.scrollTop = messages.scrollHeight;

}


function ocultarAnalizando() {

    const thinking = document.querySelector("#thinking-message");

    if (thinking) {

        thinking.remove();

    }

}


function nuevaInvestigacion() {

    historialConversacion.length = 0;
    localStorage.removeItem("historialSherlock");
    ocultarAnalizando();
    const messages = document.querySelector("#messages");

    messages.innerHTML = `

        <div class="message sherlock">

            <strong>🕵️ Sherlock Holmes</strong>

            <p id="welcome-message"></p>

        </div>

    `;

    escribirBienvenida();

    document.querySelector("#prompt").value = "";
    document.querySelector("#prompt").focus();

}