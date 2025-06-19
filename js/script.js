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
const x = +prompt("Enter X value!");
const y = +prompt("Enter Y value!");
const znak = prompt("Enter math operation symbol between '+', '-', '*', '/','%' or '^'!");
const doMath = (x, znak, y) => {
    let result = '';
    if (isNaN(x) || isNaN(y)) {
        alert (`You entered wrong values!`);
        console.log(`Task 2. Entered wrang values!`);
        return;
    } else {
        switch(znak){
            case `+`:
                result = x + y;
                break;
                case '-':
                    result = x - y;
                    break;
                    case `*`:
                        result = x*y;
                        break;
                        case `/`:
                            result = x/y;
                            break;
                            case `%`:
                                result = x%y;
                                break;
                                case `^`:
                                    result = x**y;
                                    break;
                                    default:
                                        result = `Wrang znak!`
        }
    }
    return result;
}
console.log(`Your x: ${x}, your y:${y} and your znak: ${znak}!`);
doMath(x,znak,y);
console.log(`${x} ${znak} ${y} = ${doMath(x,znak,y)}`);
// 3 Task
