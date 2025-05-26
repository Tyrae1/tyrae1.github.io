'use strict';
const user = prompt("Hello! What is your name?");
if (user) {
    const congrat = confirm("Shall I congratulate you?" + user + "!");
    if (congrat) {
        alert("Hello! Dear " + user + "!");
    } else {
        alert("NotHello! Dear " + user + "!");
    }
} else {
    alert("Goodbuy nameless stanger!");
}