
// example 1
console.log(scissors);
var scissors = 'blue';
// (breakdown)
var scissors;
console.log(scissors);
scissors = blue;


//example 2
function hoistTest(){           // create powertool
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}
hoistTest()                     // use powertool


// example 2 breakdown
function hoistTest(){
    var testVar;
    console.log(testVar);
    testVar = 10;
    console.log(testVar);
}
hoistTest();                    // hoisting is when the varibale declaration is hoisted ot the top
                            


