import "./style.css";
import {
    homeView,
    initHome
} from "./home.js";
import {
    chatView,
    initChat
} from "./chat.js";


function renderRoute() {

    const app = document.querySelector("#app");

    const path = window.location.pathname;


    if (path === "/") {

        app.innerHTML = homeView();
        initHome(navigate);
    }


    if (path === "/chat") {

        app.innerHTML = chatView();
        initChat();

    }
}

function navigate(path) {

    history.pushState({}, "", path);

    renderRoute();

}

window.addEventListener("popstate", () => {
    renderRoute();
});


function init() {

    renderRoute();

}

init();


