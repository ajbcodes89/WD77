let x = 6;

x > 0 ? console.log('x is positive') : console.log('x is negative');
// question marks the conditional from the thing we want to be true
// if done with an if else block,

if (x > 0){
    console.log('x is positive');
} else {
    console.log('x is negative');
}


let greeting = 'salutations'

if (greeting.length > 10){
    console.log('that is a long greeting');
} else if (greeting.length == 10){
    console.log('your greeting is exactly 10 characters');
} else {
    console.log('what is a normal greeting');
}

//*************
let greeting = 'salutations'
greeting.length > 10 ? console.log('that is a long greeting') :
greeting.length == 10 ? console.log('your greeting is exactly 10 characters') :
console.log('what a normal greeting'); 