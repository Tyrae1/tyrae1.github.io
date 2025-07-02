'use strict';
const button = document.getElementById("toggle-theme");
button.addEventListener("click", () => {
    button.classList.toggle("active");
    if (button.classList.contains("active")) {
        document.body.style.backgroundColor = "#413C58";
    } else {
        document.body.style.backgroundColor = "";
    }
});