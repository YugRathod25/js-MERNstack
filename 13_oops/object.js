// with prototype we can create our own function as we have map function for array 

function createUser(username, price){
    this.username = username
    this.price = price
}

createUser.prototype.increment = function(){
    this.price++
}

createUser.prototype.printMe = function(){
    console.log(`The price is: ${this.price}`);   
}

const chai = new createUser("chai", 20)

chai.increment()
chai.printMe()


