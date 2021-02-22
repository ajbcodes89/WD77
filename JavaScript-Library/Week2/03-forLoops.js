//count to 10 from 0 and log the numbers
for (let i = 0; i <= 10; i++){
    console.log(i);
}

//loops can run infinitely
//for (let i = 0; ; i++){
 //   console.log(i)
//}

// count to -25 by -3 starting from 2 and logs the numbers
for (let i = 2; i >= -25; i = i - 3){
    console.log(i)
}

//display the letters in a name individually (can use to access arrays)
let name = 'kinkade';

for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}

//for loops can use lots of variables
let start = 2;
let stop = Math.floor(Math.random()*30);
let increment = 3;

for (let i = start; i <= stop; i = i + increment){
    console.log(i)
}