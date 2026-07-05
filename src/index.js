import "./style.css";

const apiKey = "375f8caea31fabad7715ac0882e0aa17";

function initApp() {
    const rootEl = document.querySelector(".root");

    if (!rootEl) {
        throw new Error("Root element not found");
    }

    const h1El = document.createElement("h1");
    h1El.textContent = "Welcome to the Weather App";
    rootEl.appendChild(h1El);

    // input element (city-input)
    const inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.placeholder = "укажите город";
    rootEl.appendChild(inputEl);

    // button element (city-button)
    const buttonEl = document.createElement("button");
    buttonEl.type = "submit";
    buttonEl.textContent = "узнать погоду";
    rootEl.appendChild(buttonEl);

    const weatherEl = document.createElement("div");
    weatherEl.className = "weather";
    rootEl.appendChild(weatherEl);

    // addEventListener to button
    buttonEl.addEventListener("click", () => {
        const city = inputEl.value.trim();
        if (!city) return;
        inputEl.value = "";
        getWeatherForCity(city);
    });

    // addEventListener to input
    inputEl.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            const city = inputEl.value.trim();
        if (!city) return;
        inputEl.value = "";
        getWeatherForCity(city);
        }
    });

    async function getWeatherForCity(city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        if (response.ok) {
            const data = await response.json();
            document.querySelector(".weather").textContent = JSON.stringify(data);
        } else {
            console.error("error");
        }
    }


}

initApp();
