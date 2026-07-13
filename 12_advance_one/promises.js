const promiseOne = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("Async task is complete");
        resolve();
    }, 1000);
})

promiseOne.then(() => {
    console.log("Promise is consumed.");
    
})

// now this whole task in lesser line of code

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(() => {
    console.log("Promise 2 consumed");
})

// when we pass parameter in reslove then the same parameter will get passes in call back function, called by .then function

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "yug", email: "yug@example.com"})
    }, 1000);
})

promiseThree.then((user) => {
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Yug", password: "12345"})
        }
        else{
            console.log("ERROR: Something went wrong");
        }
    }, 1000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.password;
}).then((pass) => {
    console.log(pass)
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("promise is either resolved or rejected"))


const promiseFive = new Promise((resolve, reject) =>{
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "js", password: "12345"})
        }
        else{
            console.log("ERROR: JS went wrong");
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function fetchData(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
// }
// fetchData();

fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => {
    return res.json()
})
.then((data) => {
    console.log(data)
})
.catch((erro) => {
    console.log(error);
})
.finally(() => console.log("promise handled")
)