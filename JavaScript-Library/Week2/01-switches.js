let friend = "stewart";

switch(friend){
    case "Tom":
        console.log("hey Tom, when will you bring the bread breh?");
        break;
    case "Kenn":
        console.log("hey Ken, do you got da wolf back there?");
        break;
    case "Alex":
        console.log("hey Alex, how many hoverboards do you own bruv?");
        break;
    default:
        console.log(`Im sorry, ${friend}, but do I know you?`);
}

let yep = true;

switch(typeof yep == 'string' || typeof yep == 'boolean'){
    case true:
        console.log('yep is a string or a boolean');
        break;
    default:
        console.log('yep is not a string or a number')
    
}