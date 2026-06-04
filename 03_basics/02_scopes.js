// now when these variables are declared in any conditional or loop then it wont be assecciable out side of that {}
// AND this my mates, is known as scope of variable in {}
let a = 100
if(true){
    let a = 10
    const b = 20
    var c = 30 
    console.log("Inner a value", a); // this will give value of a defined in block 
    
}
// here a will get printed but the value will be same as declared in global scope 
console.log("Outer a value: ", a);


// console.log(a);// now running these will give error of not defined
// console.log(b);// now running these will give error of not defined
// console.log(c);// BUT this my friends, is the problem as var can be accessed outside of if-block
// this is why we didnt talk much about var till this point, and ahead

