'use strict';
const userName = prompt(`Hello! What is your name?`);
// Спочатку змінні не вдавалося вивести в умові - вивів їх окремо на початку умови.
let userAge;
let userBonusCode;
let userSecondName;
let userConfirm;
let userId;
if (userName){
    const inputUserAge = prompt(`What is your age, ${userName}?`);
    userAge = Number(inputUserAge);
    if (isNaN(userAge)){
        alert(`Please, ${userName}, enter a valid age`);
    } else {
        userConfirm = confirm(`${userName} would you like to confirm that you ${userAge} years old and continue?`);
        if (userConfirm) {
            userId= 534165415646454n;
            userBonusCode = null;
            alert(`
        Hello, ${userName}!
        Your age: ${userAge}
        Your status: Participation confirmed
        `)
        } else {
            alert(`
        Hello, ${userName}!
        Your age: ${userAge}
        Your status: Participation refused
        `);
        }
    }
} else {
    alert("Goodbye!");
}
// Перевірка змінних
console.log(`User name:`, userName, typeof userName);
console.log(`User age:`, userAge, typeof userAge);
console.log(`User confirm:`, userConfirm, typeof userConfirm);
console.log(`User ID:`, userId, typeof userId);
console.log(`User bonus code:`, userBonusCode, typeof userBonusCode);
console.log(`User second name:`, userSecondName, typeof userSecondName);
