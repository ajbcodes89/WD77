// var will create globally scoped variable
// var will try to overwrite the value
// let will create locally scoped variable
// let will create a new one of the same name in the memory
// try to avoid var
// use let

/*
scope - hierarchy of variables in our code
- global or parent
- local or child
*/

let global = 'Earth'

function scopeExample() {
    let local = 'indianapolis';
    let inner = 'it has many places to visit'
    console.log(local);
    console.log(`${local} is a humble city on ${global}`);
    if(true) {
        let inner = 'what a large city';
        console.log(inner);
    } console.log(inner);
} 
scopeExample();
// console.log(local);