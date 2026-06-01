// Dates

let myDate =  new Date()

// different types of date formats

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());


// date declaration format 1

let myBirthdate = new Date(2026, 9, 25)
// console.log(myBirthdate.toDateString());

// also can be written in yyyy-mm-dd
// in the same way can be done like mm-dd-yyyy
let anotherDate = new Date("2026-10-25")
// console.log(anotherDate.toDateString());


// time stamps 

let myTimeStamp = Date.now()

console.log(myTimeStamp); // this will give value of time in milliseconds from the date 1st jan 1970 (according to documentation)

console.log(Math.floor(myTimeStamp/1000)); // now we converted it into seconds for easy comparision 

let newDate = new Date()

console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());

// so on and so forth.........

// now one format to display date was localestring now this format can have so many arguments and here is the example
// first argument is which standard of time, second thing is an object with hell lots of property 
// to get to know all properties use (ctrl + space)
// this is basically used to costumize all the properties
newDate.toLocaleString('default', {
    weekday: "long" // this means now it will give 'monday' whole instead of 'mon'
})




