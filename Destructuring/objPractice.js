// Object Destructuring Problems:

const person = { name: "John", age: 25, city: "New York" };
const {name, age} = person
console.log(name)
console.log(age)
// John 25

const car = { brand: "Toyota", model: "Corolla" };
const {brand, model, year = 2020} = car
console.log(brand, model, year)
// Toyota Corolla 2020

const user = { username: "ali123", email: "ali@example.com" }
const { username: userName, email: userEmail} = user
console.log(userName, userEmail)
// ali123 ali@example.com


{
    const employee = {
        name: "Sarah",
        address: {
          city: "Chicago",
          zipcode: 60610,
        },
      }
    const {name, address: {city, zipcode}} = employee
    console.log(name, city)
}

