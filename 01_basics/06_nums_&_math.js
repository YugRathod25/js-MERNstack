const balance = new Number(100)
console.log(balance)

console.log(balance.toString()); // to convert num into string and the all the properties of string can be used 

console.log(balance.toFixed(2)); // for 2 point precisions like in bracket how much digit after decimal you want

const otherNum = 123.4

console.log(otherNum.toPrecision(4)); //it basically round offs the number but be carefull using it 

const hundreds = 100000

console.log(hundreds.toLocaleString()); // it gives commas to the number but in US standards 
console.log(hundreds.toLocaleString('en-IN')); // to covert it to indian standards

// ------------------------------- MATH -------------------------------

console.log(Math);

console.log(Math.abs(-4)); // its like a mode | -4 | = 4 it converts -ve number to positive while keeps +ve num as it is 

console.log(Math.round(4.6)); // it round offs the number with all its rules

console.log(Math.ceil(4.4)); // always gives num + 1 like in this case 5

console.log(Math.floor(4.4)); // alwasy gives num as it is in whole 

console.log(Math.min(3,2,4,5,6,7)); // to find min in array or set of values

console.log(Math.max(3,2,4,5,6,7)); // to find max in array or set of values

// now one important property of Math

console.log(Math.random()); // this will give random deciaml value from 0-1 

console.log(Math.random()*10); // this will give random deciaml value from 0-10 

// now to randomly get values from the given range like, getting value between 10 - 20
// for this we will use on trick

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min );

// now this line will give random numbers between 10 and 20 




