// basic function syntax

function sayMyName() {
    console.log("Y");
    console.log("U");
    console.log("G");
}

// function calling

// sayMyName()

// now in js there is no need of defining datatype of argument or return type

function addTwoNumber(num1,num2){
    console.log(num1 + num2);
}

addTwoNumber(3,5)

// now this is a void type function as we are printing instead of returning so we wont be able to store the value in other variable
// now to do so we have another method

function subTwoNumber(num1, num2) {
    const result  = num1 - num2 // we can also return result directly without declaring it, (return num1 - num2)
    return result
}

const ans = subTwoNumber(3,2)
console.log(ans);


// now giving different parameters to understand function more properly

function loginUserMsg(username){ // or to make it undefined proof we can directly give a default value, i.e. (username = "sam")
    if (username === undefined) { // or other condition can be (!username) 
        console.log("Please enter a username");
        return 
    }
    return `${username} has just logged in.`
}

console.log(loginUserMsg("Yug")); // here when we give no parameter not even empty string then it shows undefined
// to avoid that we use if-else to check condition
// applying basic conditional to implement the logic. More discussion will come ahead


// now in e commerce scenario we dont know how many things user will add, and we have to give the sum to calculate total bill
// so to do so we use rest operator (...), we have used this before as spread oprator (...) both are same but depends on usecase
// now we will see a example of e commerce platform to add all items

function calcCartPrice (...num1){
    return num1
}

console.log(calcCartPrice(100, 200, 4000)); // we can give all the values as parameter and it will return an array of all the price
// now we can use loop and add all the values of array and can easily tackle this problem

// Now passing an object in function 

const user = {
    username: "Yug",
    price: 2510
}

function handleObj(anyObj) {
    console.log(`Username is ${anyObj.username} and the price is ${anyObj.price}`);
}

handleObj(user) // and also we can directly define obj in parameter 

// Now passing an array in function 
const myNewArrar = [200, 40, 3000, 5]

function secValueOfArray(anyArray){
    console.log(anyArray[1]);
}

secValueOfArray(myNewArrar) // simlarly we can directly pass the array, instead of declaring and defining it abouve 