'use strict';
const userName = `Ivan`;
let userAge = 28;
let userVerification = true;
const userRegistrationDate = new Date(2021, 10, 28);
const userCardNumber = 156484486474684848n;
let userPromoCode = null;
let userReserveName;
let userBonuses = 235;
/*
    Choosing berween `let` or `const` I leaned on probability of clarifying variables in future.
    userName, userRegistrationDate, userCardNumber are fixed and can be "const" type.
    Others can be clarified or defined soon.
 */
//Check type of variable
console.log(typeof userName);
console.log(typeof userAge);
console.log(typeof userVerification);
console.log(typeof userRegistrationDate);
console.log(typeof userCardNumber);
console.log(typeof userPromoCode);
console.log(typeof userReserveName);
console.log(typeof userBonuses);
//User output
console.log(`User ${userName}, is ${userAge} years old and has ${userBonuses} bonuses.`);
console.log(`${userName} have Card ${userCardNumber}, with promocode ${userPromoCode} and verification is ${userVerification}.`);
console.log(`User ${userName} was registered successfully ${userRegistrationDate}. His reserve name is ${userReserveName}.`);