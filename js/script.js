'use strict'
let padString = (funString, funNumber, funSymbol, funBoolean) => {
    let result;
    if (!funString || isNaN(funNumber) || !funSymbol) {
        result = 'Some error!';
    } else {
        if (funBoolean) {
            result = ((funSymbol + funString.padEnd(funNumber, funSymbol) + `, ` + funNumber).substr(0, funNumber));
        } else {
            result = ((funString + funSymbol.padEnd(funNumber, funSymbol) + `, ` + funNumber).substr(0, funNumber));
        }
    }
    return result;
};
const funString = prompt('Enter your text!');
const funNumber = +prompt('Enter your number of symbols');
const funSymbol = prompt('Enter your one character symbol!').charAt(0);
const userBoolean = confirm ('Put your symbol at the start?');

const result = padString(funString, funNumber, funSymbol, userBoolean);

console.log(result);
alert(result);