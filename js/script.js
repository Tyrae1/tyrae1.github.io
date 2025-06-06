'use strict';
const num1 = +prompt("Write a first number!");
const num2 = +prompt("Write a second number!");
const num3 = +prompt("Write a third number!");
if (!isNaN(num1) && !isNaN(num2) && !isNaN(num1)) {
    const sum = num1 + num2 + num3;
    alert("Average number is: " + sum/3);
} else {
    alert("Please enter a number");
}
