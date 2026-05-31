// Primitive 

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Reference (Non-Primitive)

// Array, Objects, Functions 

// array
const heros = ["ironman", "spidy", "hulk"];

// obj

const myObj = {
    name: "yug",
    age: 19,
}

// function

const myFunc = function()
{
    console.log("Hello World");
    
}

// typeof function is used to find which type of datatype the variable is 



//JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.


// -------------------- Memories ------------------------

// 2 types of memories are there 1 is stack memory and the other is heap memory

// "Stack memory" is used for 'Primitive datatypes'

// while "Heap memory" is used for 'Non-Primitive datatypes'

let myName = "YugRathod"
let anotherName = myName
anotherName = "Ballu"

// example to explain stack memory
// as primitve datatype works on passing copy of value, thats why original value wont change 

console.log(anotherName);
console.log(myName);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne // now this will change the reference of userOne to userTwo as this works on heap memory 

// now this will change the original value of userOne so value will be changed

userTwo.email = "yug@google.com"

console.log(userOne.email);
console.log(userTwo.email);








