const user = {
    username: "Yug",
    price: 999,
    welcomeMsg: function(){
        console.log(`${this.username}, Welcome to the website`); // THIS points at the current context/values
        console.log(this); // running this will give whole context, i.e. it will print whole object with curr values
        /* for better understanding run the code */
    }
}
user.welcomeMsg() // now the main use of THIS is here if we change username then it will also change it in welcome msg
user.username = "Sam" // here we change value of current context
user.welcomeMsg()

// now when we try to print THIS in node environment, i.e. apart from any or object 
// then it returns empty object 
console.log(this); // run it for better understanding

// +++++++ Now the concept of THIS work as expected only with objects not with functions +++++++++++++
// it does hold some value in function with functions but will give something complex 
// for eg try running this 

// function chai(){
//     console.log(this);
// }

// Arrow functions 
// still THIS keywords cant be used in arrow functions tooo 
// declaration 
const chai = () => {
    let username = "Yug"
}

// Now lets focus on arrow function 

const add = (n1,n2) => {
    return n1 + n2
}

console.log(add(5,5));

// implicite return type of arrow function 
const add = (n1,n2) => n1 + n2
// this also works

// one more type to declare implicite return
const add = (n1,n2) => (n1 + n2)
