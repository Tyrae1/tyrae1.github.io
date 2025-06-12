'use strict'
const userName = prompt('What is your name?');
function greetUser(userName){
    if (userName === null) {
        return 'Input something pls!';
    } else {
        return `Hello, ${userName}`;
    }
}
const greeting = greetUser(userName);
alert(greeting);
console.log(greeting);

    