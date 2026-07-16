const user = {
    userName: "Yug",
    loginCount: 8,
    isLoggedIn: true,

    getUserDetails: function () {
        console.log(`Username is: ${this.userName}`);
        
    }
}

console.log(user.getUserDetails());


