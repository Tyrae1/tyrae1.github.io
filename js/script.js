'use strict';
let session = {};
session.userName = prompt(`Hello! What is your name?`);
if (session.userName){
    const inputUserAge = prompt(`What is your age, ${session.userName}?`);
    session.userAge = Number(inputUserAge);
    if (isNaN(session.userAge)){
        alert(`Please, ${session.userName}, enter a valid age`);
    } else {
        session.confirm = confirm(`${session.userName} would you like to get notifications?`);
        session.userId = 534165415646454n;
        session.lastLogin = null;
        session.nickname;
        session.favoriteTech = ['HTML', 'CSS', 'JavaScript'];
        session.settings = {
            theme: 'dark',
            autologin: false
        }
        alert(`Hello, ${session.userName}! Your ID: ${session.userId}`);
    }
} else {
    alert("Goodbye!");
}
console.log(session);
console.log(`User name:`, session.userName, typeof session.userName);
console.log(`User age:`, session.userAge, typeof session.userAge);
console.log(`Confirm:`, session.confirm, typeof session.confirm);
console.log(`User ID:`, session.userId, typeof session.userId);
console.log(`User last login date:`, session.lastLogin, typeof session.lastLogin);
console.log(`User nickname:`, session.nickname, typeof session.nickname);
console.log(`User favorite tech:`, session.favoriteTech, typeof session.favoriteTech);
console.log(`User theme:`, session.settings.theme, typeof session.settings.theme);
console.log(`User auto login:`, session.settings.autologin, typeof session.settings.autologin);