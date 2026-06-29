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

                <button id="send-button">
                    Enviar
                </button>

            </footer>

        </main>

    `;

}

export function initChat() {

    escribirBienvenida();

    const button = document.querySelector("#send-button");

    const textarea = document.querySelector("#prompt");

    button.addEventListener("click", () => {

        const texto = textarea.value;

        agregarMensaje("user", texto);

        setTimeout(() => {

            agregarMensajeConEfecto(
                "sherlock",
                "Interesante... continúe con los detalles del caso."
            );

        }, 1000);

        textarea.value = "";

        textarea.focus();

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