'use strict';
let arr = [1, 2, 3, 4, 5];
//Task 1 "Index Of"
const askForIndex = +prompt('What element you searching for?')
const myIndexOf = (arr, askForIndex) => {
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] === askForIndex) return i;
    }
    return -1;
}
const myIndexOfTest = myIndexOf(arr, askForIndex);
console.log(myIndexOfTest);
//Task 2 "lastIndexOf"
const myLastIndexOf = (arr, askForIndex) => {
    for (let i = arr.length-1; i >= 0; i--) {
        if (arr[i] === askForIndex) return i;
    }
    return -1;
}
const myLastIndexOfTest = myLastIndexOf(arr, askForIndex);
console.log(myLastIndexOfTest);
//Task 3 "find"
const myFind = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
}
const cb = (el) => el > 1;
const myFindTest = myFind(arr, cb);
console.log(myFindTest);
//Task 4 "findIndex()"
const myFindIndex = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}
const myFindIndexTest = myFindIndex(arr, cb);
console.log(myFindIndexTest);
//Task 5 "Includes"
const myIncludes = (arr, askForIndex) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === askForIndex) return true;
    }
    return false;
}
const myIncludesTest = myIncludes(arr, askForIndex);
console.log(myIncludesTest);
//Task 6 "every"
const cb1 = (el) => el % 2 === 0;
const myEvery = (arr, cb1) => {
    for (let i = 0; i < arr.length; i++) {
        if (!cb1(arr[i], i, arr)) return false;
    }
    return true;
}
const myEveryTest = myEvery(arr, cb);
console.log(myEveryTest);
// Task 7 "some"
const cb2 = (el) => el % 2 === 0;
const mySome = (arr, cb2) => {
    for (let i = 0; i < arr.length; i++) {
        if (cb2(arr[i], i, arr)) return true;
    }
    return false;
}
const mySomeTest = mySome(arr, cb2);
console.log(mySomeTest);