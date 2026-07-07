import { navbar } from "./navbar.js";
export function homeView() {
    return `
    ${navbar()}
        <main class="home">

            <section class="hero">

                <h1>Sherlock Holmes</h1>

            

                <p>
                    Londres está llena de misterios. <br><br>
                    Algunos requieren observación.  <br><br>
                    Otros requieren deducción.
                </p>

                <button id="start-chat">
                    Comenzar investigación
                </button>

            </section>

        </main>
    `;
}


export function initHome(navigate) {

    const button = document.querySelector("#start-chat");

    button.addEventListener("click", () => {

        navigate("/chat");

    });

}