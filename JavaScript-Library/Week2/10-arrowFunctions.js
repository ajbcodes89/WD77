// normal function declaration
function coffee(){
    return 'coffee is good';
}

// normal function expression
let tea = function(){
    return 'tea is health';
}

console.log(coffee());
console.log(tea());

//arrow functions are anonymous
//arrow functions expression

let hotChocolate = () => {
return 'hot chocolate is king';
}
console.log(hotChocolate());


// concise vs block body

// concise body
let apples = x => `there are ${x} apples`;
console.log(apples(10));

// block body
// return must be explicitly written
let bananas = (x) => {
    return `there are ${x} bananas`;
}
console.log



let func = () => 'hi';
