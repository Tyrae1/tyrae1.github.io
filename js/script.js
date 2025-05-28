const userName = `Ivan`;
let userAge = 28;
let userVerification = true;
const userRegistrationDate = new Date(2021, 10, 28);
const userCardNumber = 156484486474684848n;
let userPromoCode = null;
let userReserveName;
let userBonuses = 235;
/*
    Вибираючи між let та const я спирався на можливі зміни, або доповнення змінних у майбутньому. Ім'я, дата реєстрації,
    код картки вже зафіксовані в минулому, а вік, наявність промокоду, кі-сть бонусів або ж верифікація може змінюватися.
    Резервне ім'я лишив теж let - бо воно не визначене і може бути визначеним у майбутньому.
 */
//Перевірка типу змінної
console.log(typeof userName);
console.log(typeof userAge);
console.log(typeof userVerification);
console.log(typeof userRegistrationDate);
console.log(typeof userCardNumber);
console.log(typeof userPromoCode);
console.log(typeof userReserveName);
console.log(typeof userBonuses);
//Вивід користувача
console.log(`User ${userName}, is ${userAge} years old and has ${userBonuses} bonuses.`);
console.log(`${userName} have Card ${userCardNumber}, with promocode ${userPromoCode} and verification is ${userVerification}.`);
console.log(`User ${userName} was registered successfully ${userRegistrationDate}. His reserve name is ${userReserveName}.`);