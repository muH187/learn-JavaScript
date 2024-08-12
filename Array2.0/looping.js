console.log("Hello World")
console.log("I'm Ali")

// for loop arrays.
let marks = [100, 23, 12, 53, 78, 92, 10, 73, 88]
for (let index=0; index < marks.length; index++){
    console.log(marks[index])
}

let names = ["Ali", "Mirza", "Yasir", "Zohaib", "Wali", "Umer", "Basit", "Bilal", "Daniyal"]
console.log(names)
console.log(names.length)
for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

// for of loop arrays.
for (let name of names) {
    console.log(name)
}

