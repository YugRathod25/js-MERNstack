const marvel = ["thor", "ironman", "spiderman"]
const dc = ["batmam", "flash", "superman"]

// to add to arrays we dont use push method 
// marvel.push(dc) 
// this will add new index to marvel in which elemnt will be dc array, it is like array inside another array

// but to add both array we use concate method

const heros = marvel.concat(dc)
console.log(heros);

// now to add multiple array with each other we use something called spread(...arrayname)
// this is preffered more as we can add more then one array
const newHero = [...marvel , ...dc]
console.log(newHero);

// now in java script in array we can store anything like it does not only stores on type of datatype 
// here is a scenario 

const confusing_arr = [1, 3, 4, 6, 8, [7, 2], 7, [5, 6, 7, [8, 9, 10]]]
// now this is a complex/confusing array so 
// there is a method called flat which can be used to make this array or arrays into one array 
// now when we used flat we have to give depth till what depth we want to separate like here there is array in array in array so 
// its 3ish depth so we can give 2, and for now we can also give infinite
// for better understanding we can the depth in the argument 
const better_arr = confusing_arr.flat(2)
console.log(better_arr);


// now we can convert a string to an array like this
console.log(Array.from("Yug"));
// in fact we can convert anything to array using from 
// ----- but there is a different case when we try to convert object into array 
console.log(Array.from({name: "yug"}));
// this will give empty array as output as we have to define that what kind of array we need i.e. array of keys or values

// now to make array of different variables like this

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



