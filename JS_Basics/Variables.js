const accountId= 12345
let accountName = "zaman@gmail.com"
var accountPassword = "786543"
accountCity = "Kasur"

/*
Prefer not to use var var bcz of issue in block scope & functional scope
*/

// accountId = 2 // not allowed
accountName = "zaman"
accountPassword = "12345"
accountCity = "Lahore"
console.table([accountId,accountName,accountPassword,accountCity])