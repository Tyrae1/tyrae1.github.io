'use strict';
let resultFirst = '';
for (let i = 20; i <= 30; i+=0.5) {
    resultFirst += i + ` `;
}
alert(`Numbers from 20 to 30 with 0.5 step are: ${resultFirst}`);


let resultSecond = '';
const dollar = 27;
for (let i = 10; i <= 100; i+=10) {
    resultSecond += `${i}$ is ${i*dollar} UAH.\n`;
}
alert(`Curency calculation is:\n${resultSecond}`);


let resultThird = '';
let resultFour = true;
let resultFive = true;
let testNumber = Number(prompt('Enter integer number!'));
for (let i = 1; i <= 100; i++) {
    if ((i**2) <= testNumber && i % 1 === 0) {
        resultThird += i + ` `;
    }
    if (testNumber <= 1) {
        resultFour = false;
    } else {
        for (let i = 2; i < testNumber; i++) {
            if (testNumber % i === 0) {
                resultFour = false;
                break;
            }
        }
    }
    if (testNumber < 1) {
        resultFive = false;
    } else {

    }

}
alert(`Even numbers from 1 to 100 whose square doesn't exceed your number are: ${resultThird}`);
if (resultFour) {
    alert(`${testNumber} is prime number`);
} else {
    alert(`${testNumber} isn't prime number`);
}
    alert(``
if (resultFive) {
    alert(`You can get ${testNumber} by raising 3 to the power of ${testNumberPower}!`);
} else {
    alert(`You can't get ${testNumber} by raising 3 to the power!`);
}