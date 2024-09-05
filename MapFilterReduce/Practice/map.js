// Problem 1: Multiply Each Number by 10
const numbers = [1, 2, 3, 4, 5]
const multiplyByTen = numbers.map(num => num * 10)

console.log(multiplyByTen) // [ 10, 20, 30, 40, 50 ]

// Problem 2: Convert String to Uppercase
const fruits = ['apple', 'banana', 'cherry']
const capitalFruits = fruits.map(fruit => fruit.toUpperCase())

console.log(capitalFruits) // [ 'APPLE', 'BANANA', 'CHERRY' ]

// Problem 3: Extract Property from an Array of Objects
const students = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 22 },
    { name: 'Jim', age: 19 }
  ]

const studentsNames = students.map(student => student.name)

console.log(studentsNames) // [ 'John', 'Jane', 'Jim' ]

// Problem 4: Add 5 to Each Number

const numbersArray = [5, 10, 15, 20]
const newArray = numbersArray.map(num => num + 5)
console.log(newArray) // [ 10, 15, 20, 25 ]

// Problem 5: Boolean Array for Even Numbers

const numbersArr = [1, 2, 3, 4, 5];
const newArr = numbersArr.map(num => num % 2 ? false : true)
console.log(newArr) //[ false, true, false, true, false ]

// Problem 6: Calculate the Square of Each Number
{
    const numbers = [2, 4, 6, 8]
    const squareNumber = numbers.map(num => num * num)
    console.log(squareNumber) // [ 4, 16, 36, 64 ]
}


// Problem 7: Add "!" to Each String
const words = ['hello', 'world', 'javascript']
const newWord = words.map(word => word + "!")
console.log(newWord) // [ 'hello!', 'world!', 'javascript!' ]


// Problem 8: Convert Array of Strings to Numbers
const stringNumbers = ['10', '20', '30', '40']
const intNumbers = stringNumbers.map(num => parseInt(num))
console.log(intNumbers) // [ 10, 20, 30, 40 ]


// Problem 9: Multiply Corresponding Elements of Two Arrays
const array1 = [2, 3, 4];
const array2 = [5, 6, 7];
const mulitplyArray = array1.map((num, index) => num * array2[index])
console.log(mulitplyArray) // [ 10, 18, 28 ]

// Problem 10: Convert Minutes to Hours
const minutes = [60, 120, 180, 240];
const hours = minutes.map(num => num / 60)
console.log(hours) // [ 1, 2, 3, 4 ]
