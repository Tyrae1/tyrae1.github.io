 'use strict';
const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
//Task 1 Positive
 const task1 = (arr) => {
     let sum = 0;
     let count = 0;
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] > 0) {
             sum += arr[i];
             count++;
         }
     } return {sum, count};
 }
 const task1Test = task1(arr);
 console.log(task1Test);
 //Task 2 Min
 const task2 = (arr) => {
     let min = arr[0];
     let minIndex = null;
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] < min) {
             min = arr[i];
             minIndex = i;
         }
     }
     return {min, minIndex};
 }
 const task2Test = task2(arr);
 console.log(task2Test);
 //Task 3 Max
 const task3 = (arr) => {
     let max = arr[0];
     let maxIndex = null;
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] > max) {
             max = arr[i];
             maxIndex = i;
     }
     }
     return {max, maxIndex};
 }
 const task3Test = task3(arr);
 console.log(task3Test);
 //Task 4 negative
 const task4 = (arr) => {
     let count = 0;
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] < 0) {
             count++;
         }
     } return {count};
 }
 const task4Test = task4(arr);
 console.log(task4Test);
 //Task 5
 const task5 = (arr) => {
     let count = 0;
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] > 0 && arr[i]%2 !== 0) {
             count++;
         }
     }
     return {count};
 }
 //Trying filter here:
 const task5A = (arr) => {
     return arr.filter (el => el > 0 && el%2 !== 0).length;
 }
 const task5Test = task5(arr);
 const task5ATest = task5A(arr);
 console.log(task5Test, task5ATest);
 //Task 6
 const task6 = (arr) => {
     return arr.filter (el => el > 0 && el%2 === 0).length;
 }
 const task6Test = task6(arr);
 console.log(task6Test);
 //Task 7 Sum of positive paired elements
 const task7 = (arr) => {
     return arr.filter (el => el > 0 && el%2 === 0)
         .reduce((sum, el) => sum + el, 0);
 }
 const task7Test = task7(arr);
 console.log(task7Test);
 //Task 8 Sum of positive odd elements
 const task8 = (arr) => {
     return arr.filter (el => el > 0 && el%2 !== 0)
         .reduce((sum, el) => sum + el, 0);
 }
 const task8Test = task8(arr);
 console.log(task8Test);
 //Task 9 Product of positive elements
 const task9 = (arr) => {
     return arr.filter (el => el > 0)
         .reduce((product, el) => product * el, 1);
 }
 const task9Test = task9(arr);
 console.log(task9Test);
 //Task 10 Max element, 0 to others
 const task10 = (arr) => {
     const max = Math.max(...arr);
     return arr.map(el => (el === max ? el:0));
 }
 const task10Test = task10(arr);
 console.log(task10Test);