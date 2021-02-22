/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5

    Convert this to SWITCH STATEMENT and then a TERNARY
*/


// If/Else Conditional

var FB = 12;

if (FB / 3) {
    console.log('Fizz');
} else if (FB / 5) {
    console.log('Buzz');
} else if (FB / 15) {
    console.log('Fizz Buzz');
} else {
    console.log('Your number fizzes, nor buzzes');
}

// Switch

var FB = 3;

switch(true){
    case (FB % 3 === 0) :
        console.log('Fizz');
        break;
    case (FB % 5 === 0) :
        console.log('Buzz');
        break;
    case (FB % 5 === 0 && FB % 3 === 0) :
        console.log('Fizz Buzz');
        break;
    default :
        console.log('You dont fizz or buzz!')
}

// ternary

var FB = 12;

FB % 3 === 0 ? console.log('fizz') :
FB % 5 === 0 ? console.log('buzz') :
FB % 3 === 0 && FB % 5 === 0 ? console.log('Fizz Buzz') :
console.log('No fizzing or buzzing here!');