// ex 1

var x = 12;
function scope(){       
    var x = 33;         // var means its assigned again
    console.log(x);
}
scope();
console.log(x);         // 12 and 33


// ex 2

var x = 12;
function scope(){
    x = 33;             // no var means its the same x
    console.log(x);
}
scope()
console.log(x);         // 33 and 33


// ex 3

var x = 1;
function scope(){
    var x = 2;
    function scope(){
        var x = 3;
        console.log();     // 3
    }
    scope();
    console.log(x);     // 2
}
scope();
console.log(x);     //1


// ex 4

var x = 12
function scope(){
    var x = 33;
    if (true){
        let x = 45;
        console.log(x);     // 45
    }
    console.log(x);       // 33
}
scope();
console.log(x);        // 12


var x = 12
function scope(){
    var x = 33;
    if (true){
        var x = 45;
        console.log(x);     // 45
    }
    console.log(x);       // 45
}
scope();
console.log(x);       // 12


// let ignores block level scoping

