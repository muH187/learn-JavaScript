const person = {name: "Ali", age: 20}

const {name, age} = person

console.log(name)
console.log(age)

const {name: fullName, age: yearsOld } = person

console.log(`He is ${fullName} and ${yearsOld} years old.`)


{
    const {name = "Unknown", age = 0} = {name: "Charlie"}
    console.log(name)
    console.log(age)
}