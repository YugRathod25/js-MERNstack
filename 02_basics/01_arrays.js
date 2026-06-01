// Array

const myArr = [0, 1, 2, 3, 4, 5]
const heros = ["Ironman", "Spidy" , "Hulk"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[0]); // to get first element of myarr with the help of index 

// Array Methods 

// to add any value in arrray 
myArr.push(6)
// console.log(myArr);

// to remove last element from array
myArr.pop()
// console.log(myArr);

// this will shift one index of all element to the right and then add given argument in beginning of array 
myArr.unshift(9) 
// console.log(myArr);

// this will shift one index of all element to the left and therefore first element of the array will be removed
myArr.shift()
// console.log(myArr);

// to find if the array includes any numbr or not, give output in true/flase
console.log(myArr.includes(5)); 

// to find the index of any value we use indexof, here if the value is present it returns index and if not then it will return -1
console.log(myArr.indexOf(5));


const newArr = myArr.join()
// now this join method will add all the elements of the one arry to another 
// but the thing is that after adding it converts whole new array in to string 
// using these 3 statement we can understand clearly
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// now 2 confusing methods: Slice, Splice

// slice

console.log("A ", myArr);
const newArr1 = myArr.slice(1,3) // so value stored in newarr1 will be same as value in first index(including) till third index(excluding) 
// in argument (starting index (inclu), ending index (exclu))

console.log(newArr1);
console.log("After slice ", myArr); // here after slice original array will remain as it is

// splice
// here main difference (interview based) is that when splice is used it manipulates original array by removing indexs passed in argument
// other difference is that it include both extremeties 
// run these example to make it more clear 
const newArr2 = myArr.splice(1,3)
console.log(newArr2);
console.log("After splice ", myArr); // here after slice original array will remain as it is
    