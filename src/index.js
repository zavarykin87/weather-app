import "./style.css";

function initApp() {
    const rootEl = document.querySelector(".root");

    if (!rootEl) {
        throw new Error("Root element not found");
    }

    const h1El = document.createElement("h1");
    h1El.textContent = "Welcome to the Weather App";
    rootEl.appendChild(h1El);

}

initApp();
