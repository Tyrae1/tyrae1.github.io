'use strict';
// 1 task
const task1Array = [1, "math", NaN, null, 5, 8, 9, 31, 45, 17, 0];
const task1function = (task1Array) => {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < task1Array.length; i++) {
        if (typeof task1Array[i] === 'number' && !Number.isNaN(task1Array[i])) {
            sum += task1Array[i];
            count++;
        }
    }
    return sum/count;
}
console.log(task1Array);
task1function(task1Array);
console.log(task1function(task1Array));
// 2 Task
