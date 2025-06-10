'use strict';
let resultFirst = ' ';
let resultSecond = ' ';
for (let i=10; i <= 20; i++){
   resultFirst += ' ' + i;
   resultSecond += ' ' + (i ** 2);
}
alert(resultFirst);
alert(resultSecond);

let resultThird = ' ';
for (let i=1; i<=10; i++){
    resultThird += `7 * ${i} = ${7 * i}`+';  \n';
}
alert(resultThird);

let resultFour = 0;
for (let i=1; i<=15; i++){
    if (i%1 === 0) {
        resultFour += i;
    }
}
alert(`Sum of integers is: ${resultFour}`);

let resultFive = 1;
for (let i=15; i<=35; i++){
    if (i%1 === 0){
        resultFive *= i;
    }
}
alert(`Product of integers is: ${resultFive}`);

let resultSix = 0;
for (let i=1; i<=500; i++){
    if (i%1 === 0){
        resultSix += i;
    }
}
alert(`Average from 1 to 500 is: ${resultSix/500}`);

let resultSeven = 0;
for (let i=30; i<=80; i++){
    if(i%2 === 0){
        resultSeven += i;
    }
}
alert(`Sum of even numbers from 30 to 80 is: ${resultSeven}`);

let resultEeight = ' ';
for (let i=100; i<=200; i++){
    if(i%3 === 0){
        resultEeight += ' ' + i + ',';
    }
}
alert(`Numbers that devide by 3 from 100 to 200 are: ${resultEeight},`);

let resultNine = '';
let resultTen = '';
let resultEleven = 0;
let resultNineNumber = Number(prompt('Enter number'));
for (let i=1; i < resultNineNumber; i++) {
    if (resultNineNumber % i === 0) {
        resultNine += i + `, `;
        if (i % 2 === 0) {
            resultTen += i + `, `;
            resultEleven += i;
        }
    }
}
alert(`Number divisors are: ${resultNine}`);
alert(`Number even divisors are: ${resultTen}`);
alert(`Sum of even divisors are: ${resultEleven}`)

let resultTwelve = ' ';
for (let i=1; i<=10; i++){
    for (let j=1; j<=10; j++){
        resultTwelve += `${i} * ${j} = ${i * j}`+';  ';
    }
}
alert(resultTwelve);
