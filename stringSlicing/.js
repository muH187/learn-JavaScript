const fullName = "MuhammadAli Khan"

// let firstName = fullName.slice(0, 8)
// let lastName = fullName.slice(9)

let firstName = fullName.slice(0, fullName.indexOf(" "))
let lastName = fullName.slice(fullName.indexOf(" ") + 1)

console.log(firstName, lastName)



const countryName = "Pakistan"

let firstChar = countryName.slice(0, 1)
let lastChar = countryName.slice(-1)

console.log(firstChar, lastChar)

const email = "proqualitythings100@gmail.com"

let userName = email.slice(0, email.indexOf("@"))
let emailCode = email.slice(email.indexOf("@"))

console.log(userName, emailCode)