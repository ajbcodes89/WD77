//functions do the following
// 1- they take some input which the function will handle or process
// 2- they process the input given to them
// 3- they usually but not always return some value
// 4- they can be invoked or used as many times as we want, cutting down on code repitition

// ex 1
function newfunc(num){
    return num + 1;
}
console.log(newfunc(7));
console.log(newfunc(10));
console.log(newfunc(11));
console.log(newfunc(-2));

function newSentence(firstName, lastName){
    return `my first name is ${firstName} and my last name is ${lastName}`;
}
console.log(newSentence('Jonny', 'boy'));
let superImportantSentence = newSentence('niky', 'minaj, ho');
console.log(superImportantSentence);

// build a function that takes a complex type-- an array in this case -- and console logs each item in the input array

let arr = [1, true, {key: "string"}, [0, false, null], 'howdy'];
let arr2 = [5, 6, 7, 8, 9, 10];

function iteratorFunc(inputArr){
    for (let element of inputArr){          // setup what you want to happen to what you input
        console.log(element);
    }
}
iteratorFunc(arr);
iteratorFunc(arr2);