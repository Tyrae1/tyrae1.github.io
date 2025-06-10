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
alert(`Currency calculation is:\n${resultSecond}`);


let resultThird = '';
let resultFour = true;
let resultFive = false;
let testNumber = Number(prompt('Enter integer number!'));
let resultFivePower = 1;
let power = 0;
if (isNaN(testNumber)) {
    alert(`${testNumber} - It's not a number!`);
} else {
    for (let i = 1; i <= 100; i++) {
        if ((i**2) <= testNumber && Number.isInteger(i)) {
            resultThird += i + ` `;
        }}
    if (testNumber <= 1) {
            resultFour = false;
    } else {
        for (let i = 2; i <= Math.sqrt(testNumber); i++) {
            if (testNumber % i === 0) {
                resultFour = false;
            }
        } }
        if (testNumber < 1) {
            resultFive = false;
            alert(`${testNumber} - must be more then 0!`);
        } else {
            for (; resultFivePower <= testNumber ; power++) {
                if (resultFivePower === testNumber) {
                    resultFive = true;
                    break;
                }
                resultFivePower = resultFivePower *3;
            }
    }
}
alert(`Even numbers from 1 to 100 whose square doesn't exceed your number are: ${resultThird}`);
if (resultFour) {
    alert(`${testNumber} is prime number!`);
} else {
    alert(`${testNumber} isn't prime number!`);
}
if (resultFive) {
    alert(`${testNumber} can be found by powering 3 in ${power}!`);
} else {
    alert(`${testNumber} can't be found by powering 3!`);
}