export function chatView() {

    return `

        <main class="chat">

            <header>

                <h1>221B Baker Street</h1>
<br>
                <h2>Bienvenido detective</h2>

            </header>
    
            <section id="messages">

            </section>
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

        agregarMensajeUsuario(textarea.value);

        textarea.value = "";

    });

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


function agregarMensajeUsuario(texto) {

    if(texto.trim() === "") return;

    const messages = document.querySelector("#messages");

    messages.innerHTML += `

        <div class="message user">

            <strong>🙂 Tú</strong>

            <p>${texto}</p>

        </div>

    `;

}