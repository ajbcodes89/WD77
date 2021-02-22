function hello() {
    console.log("Hello World!");
}
hello();        // will only spit sum out if you call it

function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();

// placing more calls will call it unlimited times


// parameters
function numberEntered(num){
    console.log("The number you entered was: ", num);
}
numberEntered(5);
//etc....

// params - slang for parameter

// multi-param function
function addAnyTwoNumbers(x,y){
    console.log(x + y);
}
addAnyTwoNumbers(7,6); //13

function subtractTwoNumbers(firstNum, secondNum){
    console.log(firstNum - secondNum);
}
subtractTwoNumbers(7,6); //1

function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats;
    return myAverage;           // why do we have to tell it to return this
}
console.log(getMyBattingAverage(250,91));

function add(x,y){
    let sum = x + y;
    return sum;
}
console.log(sum(1,1));
// is this broken?

function fullName(first, last){
    let wholeName = first + " " + last;
    return wholeName;
}
console.log(fullName("paul", "O'connor"));

function calculatePriceIndy(quantity, price){
    let totalPrice = 1.07 * quantity * price;
    return totalPrice;
}
console.log(calculatePriceIndy(17,5));


// **explain how the return statement works in a function

function greet(name){
    return "Hello " + name
};

var myName = "Jack";
result = greet(myName);
console.log(result);


function sayNumber(num){
    console.log(num)
};

for(var i = 0; i < 25; i++){
    sayNumber(i);
};