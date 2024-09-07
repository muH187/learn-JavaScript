const fruits = ['apple', 'banana', 'mango'];
const vegetables = ['carrot', 'broccoli', 'spinach']

const food = [...fruits, ...vegetables]
console.log(food)
// [ 'apple', 'banana', 'mango', 'carrot', 'broccoli', 'spinach' ]


const car = { brand: 'Toyota', model: 'Corolla', year: 2020 };
const updateCar = {...car, color: "red"}
console.log(updateCar)
// { brand: 'Toyota', model: 'Corolla', year: 2020, color: 'red' }


function multiplyNumbers(...numbers) {
    return numbers.reduce((total, num) => total * num, 1)
}
console.log(multiplyNumbers(2, 3, 4)); // Output: return 24
console.log(multiplyNumbers(1, 5, 7, 10)); // Output: return 350


const numbers = [10, 20, 30, 40, 50];
const newNum = [...numbers.splice(0, 1), ...numbers.splice(2)]
console.log(newNum)
// Output: [ 10, 40, 50 ]


const person1 = { name: 'Ali', age: 20 };
const person2 = { name: 'Bilal', age: 25, city: 'Karachi' };
const mergedPerson = { ...person2, ...person1 };

console.log(mergedPerson);