'use strict';
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const ourLength = Number(prompt('Enter character length'));
let generateKey = (length, characters) => {
    let result = '';
    for (let i=0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
const key = generateKey(ourLength, characters);
console.log(key);
alert(`Your generated key is: ${key}`);