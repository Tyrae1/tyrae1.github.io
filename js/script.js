'use strict';
const button = document.getElementById("toggle-theme");
button.addEventListener("click", () => {
    button.classList.toggle("active");
    if (button.classList.contains("active")) {
        document.body.classList.add("dark-theme");
        console.log("Click");
    } else {
        document.body.classList.remove("dark-theme");
        console.log("Click");
    }
});