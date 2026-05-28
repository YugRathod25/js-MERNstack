const accountId = 144553
let accountEmail = "Yug25@gmail.com"
var accountPassword = "12345"
accountCity = "Talaja"  // its doable but it is a bad practice
let accountState
// accountId = 2 //not allowed

/*
prefer not to use var, because of issue in block scope and functional scope
*/

accountEmail = "xyz25@.com"
accountPassword = "5252"
accountCity = "Bhavangar"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
