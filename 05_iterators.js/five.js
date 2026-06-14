const myNums = [1, 2, 3]

const myTotal = myNums.reduce( function (acc, currVal) {
    console.log(`acc ${acc} and curr val ${currVal}`);
    
    return acc + currVal

}, 0 )
// here first value of accumulator will be inital value passed after comma(,) and curr val will be from array iteration 
console.log(myTotal);

// same thing using arrow function 

const MyTotal = myNums.reduce( (acc, currVal) => acc + currVal,0)

// here is one real live example, where to use reduce 

const courses = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "web dev course",
        price: 5999
    },
    {
        itemName: "game dev course",
        price: 12999
    },
]

// in cart we get added price of things we add in the cart 
// here is how it is done

const totalPrice = courses.reduce((acc, item) => acc + item.price, 0)

console.log(totalPrice);
