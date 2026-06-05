// now when these variables are declared in any conditional or loop then it wont be assecciable out side of that {}
// AND this my mates, is known as scope of variable in {}
let a = 100
if(true){
    let a = 10
    const b = 20
    var c = 30 
    console.log("Inner a value", a); // this will give value of a defined in block 
    
}
// here a will get printed but the value will be same as declared in global scope 
console.log("Outer a value: ", a);


// console.log(a);// now running these will give error of not defined
// console.log(b);// now running these will give error of not defined
// console.log(c);// BUT this my friends, is the problem as var can be accessed outside of if-block
// this is why we didnt talk much about var till this point, and ahead

// Nested scope

function one(){
    const username = "Yug"

    function two(){
        const website = "github"
        console.log(username); // here there wont be any error as for function 2 username is a kind of global variable 
        
    }
    console.log(website); // running this will give error as website is declared in 'two' and we are using it out of 'two'
    two()
}

one() 


// one more example of nested scope 

if (true){
    const username = "yug"
    if (username === "yug"){
        const website = "github"
        console.log(username + website); // but this will run properly as both variables as accessible
    }
    console.log(website); // same here also there will be error as website is declared in other if block 
}
console.log(username); // now similarly here there will be error as username declared in if block 


// --------------- Interesting ------------------

// now functions can be declared with 2 types 

// first
addOne(5) // there is no error when calling a function before defination and declaration 
function addOne (num){
    return num + 1
}

// second: now in js variables are very power full and can store anything, yes even a function 

const addTwo = function(num){
    return num + 2
}

addTwo(5) // now when this calling is done before defination and declaration, it will give error as we are holding function in variable

// this is know as hoisting in js will be declared in detailed later on