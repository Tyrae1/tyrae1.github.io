 'use strict';
 const arr = [1, 2, 3, -1, -2, -3];
 const funcHw22 = (arr) => {
     const exampleArr = [];
     if (arr.length === 0) {
         alert(`Your array ${arr} is empty`);
         console.log(`Your array ${arr} is empty`);
     } else {
         for (let i = 0; i < arr.length; i++) {
             if (arr[i] < 0) {
                 continue;
             } else {
                 exampleArr.push(arr[i]);
             }
         }
     }
     return exampleArr;
 }
 const funcHw22Check = (arr) => {
     if (arr.length === 0) {
         return null;
     }
     return arr;
 }
 console.log(arr);
 console.log(funcHw22(arr));
 console.log(funcHw22Check(funcHw22(arr)));

