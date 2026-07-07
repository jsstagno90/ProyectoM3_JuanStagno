import "./style.css";
import { homeView, initHome } from "./home.js";
import { chatView, initChat } from "./chat.js";
import { aboutView } from "./about.js";

function renderRoute() {

    const app = document.querySelector("#app");
    const path = window.location.pathname;

    if (path === "/") {

        app.innerHTML = homeView();
        initHome(navigate);

    } else if (path === "/chat") {

        app.innerHTML = chatView();
        initChat();

    } else if (path === "/about") {

        app.innerHTML = aboutView();

    }

}

function navigate(path) {

    history.pushState({}, "", path);
    renderRoute();

}

document.addEventListener("click", (event) => {

    if (event.target.matches("[data-link]")) {

        event.preventDefault();
        navigate(event.target.getAttribute("href"));

    }

});

window.addEventListener("popstate", renderRoute);

renderRoute();