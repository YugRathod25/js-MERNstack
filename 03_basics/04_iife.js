// Immediately Invoke Function Expression (IIFE)

// why is this used ?
// -> Mainly, there is sometimes pollutions from global scope, it causes some problems and to remove that pollutions we use this function
// ans this function will also execute immediately

(function connect(){ // Name IIFE
    console.log(`DB Connected`);
})();

// now when we try to make new new function then it will give error as we have to end this above function
// and to end this we use ';' at the end of last paranthesis

// we can also use arrao function here
(() => { // Unnamed IIFE (Simple IIFE)
    console.log(`DB Connected`);
})();

// now we can also give parameters to this function and here is how
((name) => {
    console.log(`DB Connected, ${name}`);
})("Yug");