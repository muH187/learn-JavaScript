const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine two arrays
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);  // Output: [1, 2, 3, 4, 5, 6]

const person = {name: "Ali", age: 20}
const updatePerson = {...person, country: "Pakistan"}
console.log(updatePerson) // Output: { name: 'Ali', age: 20, country: 'Pakistan' }

function sum(...numbers){
    return numbers.reduce((total, num) => total + num, 0)
}
console.log(sum(10, 10, 10))
console.log(sum(10, 10, 50)) // Output: 30 70

