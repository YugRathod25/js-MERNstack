const name = "Yug"
const age = 19

console.log("name: " + name + " age: " + age); // outdated syntax and is not used now a days, considered as bad practice

// string interpollation (just a fancy name, not complicated at all)
// more read able and easy to update, more used syntax now a days

console.log(`Hello my name is ${name} and my age is ${age}`);

// other way to declare string is through object

const gameName = new String('Valorant-Riot-Games')

// accessing any char in string, to access any char in string it is same as accessing any element in array, like with index
// but string is not a array here it is a object, and index and its value is stored in key value format

console.log(gameName[0]); // output will be 'V' as it is present on 0th index

// to find lenght of the string

console.log(gameName.length);

// to convert to uppr case

console.log(gameName.toUpperCase());

// to find index of particular char in string

console.log(gameName.charAt(2));

// to find char of particular index in string

console.log(gameName.indexOf('r'));

// to get substring of any string

const substr = gameName.substring(0, 4) // in brackets (starting point(included), ending point(excluded)) and in this case 0,1,2,3 only counts 4 doesnt count
console.log(substr);

/* we can give -ve value in substring but it will always start from 0 ignoring -ve value */

// to slice a string it is same as substr but only difference is we can give -ve value as arguments adn if given, it will start from reverse
const anotherStr = gameName.slice(-8, -4)
console.log(anotherStr);

// to remove extra spaces entered by user, we use trim function 

const newstr = "    yug    "
console.log(newstr);
console.log(newstr.trim()); // here all the blank spaces are gone 

// to replace anything in the string we use replace method 

const url = "https://yug.com/yug%20rathod"

// so here int brackets we have to give (string that we want to replace, new string that will replace given string) in single quots  

console.log(url.replace('%20', '-')) 

// to find if any substr is present in given string (in this case url) then we user includes function

console.log(url.includes('yug')); // it will give output in true/false

// to split any string with the help of separator defined by the programmer, and after separating it will give array of values
// we use split method
// output will be : [ 'Valorant', 'Riot', 'Games' ]
console.log(gameName.split('-')); // here in bracket we give (separator) in this case we have '-'


// now we can go to console in browser to find many other methods, but these were the important methods that will be used ahead

