import {Fireworks} from "fireworks-js"

const fwContainer = document.querySelector("#fireworks")
const greeterNameEl = document.querySelector("#greeterName")

const fireworks = new Fireworks(fwContainer);

fireworks.start()


    const url = new URL(window.location.href);
    const getGreeterName = url.searchParams.get("name");

    if(getGreeterName){
        greeterNameEl.textContent = getGreeterName;
    }/* else{
        location.href = "/festival-greeting-app/index.html"
    } */
    