'use strict';
//My apply
function myApply (func1, context, args = []){
    context = context || globalThis; //Must save from undefined and null
    const tempKey = Symbol(); //Unique key
    context[tempKey] = func1;
    const result1 = context[tempKey](...args);
    delete context[tempKey];
    return result1;
}
function helloFunc(greeting, nickname){
    return `${greeting}, I'm ${this.name}. Call me: ${nickname}`;
}
const user = {name: 'John'};
const myApplyTest1 = myApply(helloFunc, user, ["Hello", "Buddy"])
console.log(myApplyTest1);
const myApplyTest2 = helloFunc.apply (user, ["Hello", "Buddy"]);
console.log(myApplyTest2);

//My bind
function myBind (func2, context, ...presetArgs) {
    return function (...laterArgs){
        context = context || globalThis;

        const tempKey = Symbol();
        context[tempKey] = func2;
        const result = context[tempKey](...presetArgs, ...laterArgs);
        delete context[tempKey];
        return result;
    };
}
function helloFunc1(greeting){
    return `${greeting}, I'm ${this.name}.`;
}
const myBindTest1 = myBind (helloFunc1, user,'Hello');
console.log(myBindTest1());
const myBindTest2 = helloFunc1.bind(user,'Hello');
console.log(myBindTest2());