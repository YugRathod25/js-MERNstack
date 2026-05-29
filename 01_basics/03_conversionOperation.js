let score = "33"

console.log(typeof score)

let valueInNumber = Number(score)

console.log(typeof valueInNumber)

// when "33" is converted to number then output 33
// when "33abc" (Or any string i.e. "Yug" and etc) is converted to number then output NaN (Not a number)
// when true/false is converted to number then output 1/0
// when null is converted to number then output is 0
// when undefined is converted to number then output is NaN again 

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// when 1/0 is converted in boolean then output is true/false
// when empty string is converted in boolean then output is false
// when non empty string is converted in boolean then output is true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

