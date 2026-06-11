const obj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// now for object we use 'for in' loop

for (const key in obj) {
    console.log(`${key} shortcut is for ${obj[key]}`);
    
}

// for each loop 

const coding = ["js", "cpp", "rb", "swift"]

coding.forEach( function (item) {
    console.log(item);
} )

// now in brackets for, for each loop we have to give a call back function and that as same declaration as function but 
// does not have a name, in argument we give name of iterator like (i, index, item, etc..) and the in body we give what we want
// this function to do

// another version using arrow function 

coding.forEach( (val) => {
    console.log(val);
}  )

// how to access an array of object (IMPORTANT FOR PROJECTS)

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
    
} )