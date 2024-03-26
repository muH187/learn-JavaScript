let age = 12

let message = age >= 18 ? "You are an adult" : "You are a minor"

console.log(message)

let purchaseAmount = 80

let discount = purchaseAmount < 100 ? "You got 10% discount" : "You didn't get discount"

console.log(discount)

const myAge = 3 

let checkAge = ""

checkAge += myAge <= 12 ? "You are a child" : "You are a teenager"
checkAge += myAge <= 29 ? "You are in your 20s" : "You are adult"
checkAge += myAge <= 59 ? "You are senior citizen" : "You are 81 years old or more"


console.log(checkAge);
