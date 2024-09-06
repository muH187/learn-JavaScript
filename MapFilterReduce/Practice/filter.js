// 1. Filter out numbers greater than 50
let numbers = [12, 55, 30, 85, 60, 7];
let newNum = numbers.filter(num => num > 50)
console.log(newNum)  // output [ 55, 85, 60 ]


// 2. Filter even numbers
{
    let numbers = [10, 23, 45, 6, 12, 67];
    let evenNum = numbers.filter(num => num % 2 === 0)
    console.log(evenNum) // output [ 10, 6, 12 ]
}


// 3. Filter strings longer than 4 characters
let words = ['apple', 'dog', 'banana', 'cat', 'elephant'];
let longerThanFour = words.filter(word => word.length > 4)
console.log(longerThanFour)  // [ 'apple', 'banana', 'elephant' ]


// 4. Filter objects based on property value
let students = [
    {name: 'Ali', marks: 65},
    {name: 'Sara', marks: 90},
    {name: 'Bilal', marks: 78}
];
let highScore = students.filter(student => student.marks > 80)
console.log(highScore) // output [ { name: 'Sara', marks: 90 } ]


// 5. Filter negative numbers
{   
    let numbers = [-5, 3, 0, -2, 9, -8];
    let newNum = numbers.filter(num => num >= 0)
    console.log(newNum)
}

// 8. Filter truthy values
let mixed = [0, 'hello', false, '', undefined, 42, null, 'JavaScript', true];
let truthyValues = mixed.filter(Boolean)
console.log(truthyValues)  // output [ 'hello', 42, 'JavaScript', true ]


// 9. Filter out duplicate values
{
    let numbers = [2, 5, 2, 7, 5, 8, 7];
    let duplicateNum = numbers.filter(num => num != num)
    console.log(duplicateNum)
}


