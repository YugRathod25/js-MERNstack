// basics comparisions 

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

// for comparision it automatically converts string into number and then compares 
console.log("2" > 1);
console.log("02" > 1); 

// some again confusing conversions, avoid these type of comparision, not a good pratice.

console.log(null > 0); // null is converted to 0 in comparision so teachnically this is wrong too 
console.log(null == 0); // so here false
console.log(null >= 0); // now here output is true, becuase comparision and equality check (i.e. ==) works differently here

// here in every type of comparision the value will be false 
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === (now this is strict eqaulity check there it wont even allow conversion, happened in string )
// it also checks if data type is equal or not 

console.log("2" === 2); // output false, cuz different datatypes 
console.log(2 === 2); // output true, cuz same datatypes 








