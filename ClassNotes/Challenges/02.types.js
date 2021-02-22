/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
*/

/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/

Andy = {
    gender: "male",
    age: 23,
    hasACar: true,
    friends: {
        friendOne: "Anna",
        friendTwo: "Jerome",
    }
}

var x = typeof Andy.gender;

if(x !== Number, String, Boolean, Object){
    console.log("what are you!");
}