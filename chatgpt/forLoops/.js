// Print Numbers:
// Write a for loop to print numbers from 1 to 10.

for (let i = 0; i < 11; i++) {
    console.log(i);
}

// Even Numbers:
// Print even numbers from 2 to 20 using a for loop.

for (i = 2; i < 21; i += 2) {
    console.log(i);
}

// Reverse Count:
// Create a for loop to print numbers from 10 to 1 in reverse order.

for (i = 10; i > 0; i--) {
    console.log(i);
}

// Sum of Numbers:
// Calculate the sum of numbers from 1 to 5 using a for loop.
console.log("sum");
let sum = 0
for (i = 1; i < 6; i++) {
    sum += i
}
console.log(sum);

// Multiplication Table:
// Print the multiplication table for a given number (e.g., 5).
let number = 5
for (i = 1; i < 11; i++) {
    let x = number * i
    console.log(`5 x ${i} = ${x}`);
}
// Factorial:
// Calculate the factorial of a number (e.g., 5) using a for loop.

number = 5
let factorial = 1
for (i = 1; i <= number; i++) {
    factorial *= i 
}
console.log(`The factorial of ${number}: ${factorial}`);

// Print Array Elements:
// Iterate through an array [1, 2, 3, 4, 5] and print each element using a for loop.

let arr = [1, 2, 3, 4, 5]
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Square Numbers:
// Print the squares of numbers from 1 to 5 using a for loop.

let square = [1, 2, 3, 4, 5]
for (i = 0; i < square.length; i++) {
    console.log(square[i]* square[i]);
}

// Count Vowels:
// Count the number of vowels in a given string using a for loop.

let vowels = ["a", "e", "i", "o", "u"]
let stringVowels = "Hello World"
for (i = 0; i < vowels.length; i++) {
    
}

// Power of Two:
// Print the powers of 2 from 2^1 to 2^5 using a for loop.