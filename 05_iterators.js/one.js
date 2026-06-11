// all the obvious loops (for, while, do-while) are not been discussed 
// and rather then these we will discuss here

// some or most of these are array specific loops
// for of loop

const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    // console.log(val);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(greet);
}

// Maps :- Only stores unique value

const map  = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// console.log(map);

// displaying map using for of loop

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

// now for of loop for a object, WELL THAT DOESNT WORK 
// objs are not iteratable using for of loop
