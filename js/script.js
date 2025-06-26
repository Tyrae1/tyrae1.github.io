'use strict';
for (let i=0; i<2; i++) {
    const variable1 = 5;
    var variable2 = i+variable1;
    console.log(variable1); // inner scope - visible;
    console.log(variable2); // Global scope - visible;
    console.log(i); // inner scope - visible;
}
console.log(variable2); // Global scope - visible;
console.log(i); // Outer scope - error;
console.log(variable1); // Outer scope - error;