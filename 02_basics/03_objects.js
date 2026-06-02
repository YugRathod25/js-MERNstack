// singleton is property of object, like its not in js but for our understanding 
// now there are 2 ways to create object in js 
// first is using "Object.create" now this will make a singleton object
// now this singleton means that there will be no other object of same kinf if created with Object.create
// detailed discuss will come later 

// todays focus on creating object using literals 

const jsUser = {
    name: "Yug",
    "Full name": "Yug Rathod",
    age: 19,
    location: "Bhavnager",
    email: "yug@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// now to access any value of the object we have 2 methods

console.log(jsUser.email);
console.log(jsUser["email"]); // this is more preferable, bcuz we can give key in 2 ways, first the way 'name' is given
// other way is to give it as a string the way 'full name' is given 
// not to access 'full name' we cant use . method. Thats the reason 2nd method is more preferable

// we can change the values in side obj 

jsUser["email"] = "yug@apple.com" // using simple overwrite method 

// now we can also freeze a obj so that no one can change its value

// Object.freeze(jsUser) // after this if try to change value it wont give error but instead it will not follow the changes

// now we will define a function inside our object 

jsUser.greetings = function(){
    console.log("Hello JS user");
}
console.log(jsUser.greetings());

// now defening another object to understand concept of this
// will be more discussed later 
// but here to access same properties declared in object to make its function we can use 'this'

jsUser.greetingsTwo = function (){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsUser.greetingsTwo());
