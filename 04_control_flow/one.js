// if Statement


if (true){

}

let temp = 40

// we use comparision opretors here to evaluate the code
// < , > , <= , >= , == , != , === (here data type is also checked)
// here is the example

if (2 == "2") // it will run as == does not compare datatypes
{
    console.log(`excuted`);
}

if (2 === "2") // this wont run as one is number and other is string
{
    console.log(`excuted!!!!!!!!!!`);
}

if (temp < 50) {
    console.log("temp greater than 50");
}
else{
    console.log("temp greater than 50");
}

// now using these multiple operator and if statement we can compare different expressions

// now there is a short hand method to use if statement but it is very usreadable and considered a bad practice

// if(true) console.log("test"),console.log("test2"); // very bad code

// else-if Ladder

const balance = 1000

if (balance < 500){
    console.log("less then 500");
}

else if (balance < 750){
    console.log("less then 750");
}

else{
    console.log("less then 1200");
}

// Now here is some example with relational operators

const logginIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (logginIn && debitCard){
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");    
}

// flasy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// rather than this all are truthy value 
// some are :- "0", 'false', " ", [], {}, function(){}