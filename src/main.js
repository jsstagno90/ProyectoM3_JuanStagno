import "./style.css";
import { homeView } from "./home.js";
import { chatView } from "./chat.js";

function renderRoute() {

    const app = document.querySelector("#app");

    const path = window.location.pathname;


    if (path === "/") {

        app.innerHTML = homeView();

    }
    if (path === "/chat") {

        app.innerHTML = chatView();

    }
}

function init() {

    renderRoute();

}

init();