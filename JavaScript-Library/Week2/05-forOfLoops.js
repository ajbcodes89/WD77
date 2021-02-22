//******of requires that your thing youre looping through be iterable*********
// that means it needs to be numbered
// keys in an object are not numbered in any way
// arrays are numbered

//why does this break??
let student = {name: 'Peter', isAwesome: true, degree: 'javascript', week: 1};

for (item of student){
    console.log(item);
}

//why can sub anything for "person"?
let personArray = ['bob', 'bill', 'behemoth', 'benny', 'bork bork'];

for (person of personArray){
    console.log(person, 'says whattup');
}
