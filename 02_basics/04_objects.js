// second method of declaring object

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false 

// console.log(tinderUser);
// example of nestedd objects
const regularUser = {
    email: "some@gmail.com",
    fullname:  {
        userFullName: {
            firstName: "Yug",
            lastName: "Rathod"
        }
    }
}

// accessing values
// console.log(regularUser.fullname.userFullName.firstName);

// now how to merge objects
const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}

// we use assign method so in argument we have to give (target, src1, src2, src3, .......)
// basically we if want to add one obj to other we have to set target as the value where other obj should get copied
// now this is one way to merge objs 
const obj3 = Object.assign({}, obj1, obj2) // here as we have new obj so our target obj will be empty obj 
console.log(obj3);

// the other way or the latest or most used method is same as we used in array part
const obj4 = {...obj1, ...obj2}
console.log(obj4);

// the MOST imp thing that we can separate the key and values of obj and store them differently in form of array 
// this is mostly used when working with database

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

// now we can also make array of each property and it will have 2 index 0,1 where 0 = key, 1 = value
console.log(Object.entries(tinderUser));

// we can also find if any particular obj has any particular property 
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // it will return boolean expression i.e. t/f

// Destructuring of object

const course = {
    name: "js with me",
    price: "000",
    courseInstructor: "Yug"
}

// here is a syntax through which we can access any value

const {courseInstructor} = course // now we can accesss this courseInstructor value anywhere with its name no need of giving obj name
// we can also change its name in curly braces like {courseInstructor: instructor} so make it short for use
console.log(courseInstructor);

