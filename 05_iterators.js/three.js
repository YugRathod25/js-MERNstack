// now using for each loop it does not return any value, and if we want to get something in return while looping an array
// we use filter function, it also takes call back function as argument
// here is the example

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr.filter((num) => num > 5) 
// now storing it in a variable as it returns an array 

const newArr = arr.filter((num) => num > 5) 
console.log(newArr); // output will an array of numbers that are greater than 5 present in original arr

// now we can still do the same task with for each loop but it gets messy or long, though its easy to understand

const nums = []
arr.forEach ( (num) =>{
    if(num > 5)
        nums.push(num)
})

console.log(nums);


