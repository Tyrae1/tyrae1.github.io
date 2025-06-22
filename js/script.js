'use strict';
//Task 1 "Shift"|
let arr = [1, 2, 3, 4, 5, 6];
const shift = (arr) => {
    if (arr.length === 0) return `empty object`;
    const removedElement = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr [i + 1];
    }
    arr.length = arr.length-1;
    return removedElement;
}
const test1 = shift(arr);
console.log(test1, arr);
//Task 2 "Reverse"
const reverse = (arr) => {
    for (let i = 0; i < (arr.length/2); i++) {
      let temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
const test2 = reverse(arr);
console.log (test2, arr);