//in does not require taht the thing you loop thru be numbered

let student = {name: 'Peter', awesome: true, degree: 'javascript', week: 1};

for (item in student){      // item are always the keys in the object
    console.log(item);      // gives the item
    console.log(student[item])          // gives the item in the item
}

//in an array, the order doesnt always matter, but it could. if it does, a for of loop is a better tool to use to parse them out

let personArray = ['bob', 'bill', 'behemoth', 'benny', 'bork bork'];

for (person in personArray){        // js doesnt like name alone
    console.log(person);        // shows number of item 0-4
    console.log(personArray[person]);
}


// write a for loop that capitalizes the first letter of a name
let instructor = 'paUL';
let capName;                //begins empty so we can fill it later

for (n in instructor){      //number of each character in instructor
    if(n == 0){             // if n == 0 then we are talking about the first letter of the name
        capName = instructor[n].toUpperCase();     // set equal to first letter in instructor and change first letter to upper case
    } else {
        capName += instructor[n].toLowerCase();     // if its already capital, then move on to next step, which is to turn the rest of the letters that arent the first one which we have set to n, to lower case by using += 
    }
}
console.log(capName);