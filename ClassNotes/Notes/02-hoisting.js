/*
    (create)    (execute)
let variable = 'value';



*/

let num = 12;
console.log(num);


sayHi();

function sayHi(){
    console.log('hello');
    let hi = 'hola';
    console.log(hi);
}



let varFunc = function () {
    console.log('Testing. Testing.')
}
varFunc();

// when you put the function inside a variable it wont get hoisted because it is not longer a variable first it is a function first

// using let or const over var will allow you to circumvent problems you might have when hoisting and scoping takes place

// var will create globally scoped variable
// let will create locally scoped variable
