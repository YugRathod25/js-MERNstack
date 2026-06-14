// another same method as filter is map, but it is not same in every aspect
// map automatically returns an array of everything while filter returns only things which are true for given condition

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => {
//     return num + 10
// } )


// map method chaining 

const newNums = myNums.map( (num) => num * 10 ).map( (num) => num + 1).filter( (num) => num >= 40)
console.log(newNums);

// console.log(newNums);
