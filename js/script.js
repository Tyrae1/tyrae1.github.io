'use strict';
let num1 = +prompt("Write a first number!");
let num2 = +prompt("Write a second number!");
let num3 = +prompt("Write a third number!");
if (!isNaN(num1) && !isNaN(num2) && !isNaN(num1)) {
    let sum = num1 + num2 + num3;
    alert("Average number is: " + sum/3);
} else {
    alert("Please enter a number");
}
