// Addition Function:
// Write a function called add that takes two parameters (a and b) and returns their sum.

function add(a, b) {
    return a + b
}
let result = add(4, 6)
console.log(result);

// Greeting Function:
// Write a function called greet that takes a name parameter and returns a greeting message (e.g., "Hello, [name]!").

function greet(name) {
    return `Hello, ${name}!`
}
result = greet("Ali")
console.log(result);

// Multiplication Function:
// Write a function called multiply that takes two parameters (a and b) and returns their product.

function multiply(a, b) {
    return a * b
}
result = multiply(5, 10)
console.log(result);

// Length of String Function:
// Write a function called getLength that takes a string parameter and returns the length of the string.

function getLength(string) {
    return string.length
}
result = getLength("Pakistan")
console.log(result);

// Power Function:
// Write a function called power that takes two parameters (base and exponent) and returns the result of raising the base to the exponent.

function power(base, exponent) {
    return base ** exponent
}
result = power(7, 2);
console.log(result);

// Even or Odd Function:
// Write a function called isEven that takes a number parameter and returns true if the number is even, and false otherwise.

function isEven(number) {
    if(number % 2 === 0) {
        return true
    } else {
        return false
    }
}
result = isEven(53)
console.log(result);

// Concatenate Strings Function:
// Write a function called concatenate that takes two string parameters (str1 and str2) and returns their concatenation.

function concatenate(str1, str2) {
    return str1+str2
}
result = concatenate("Java", "Script")
console.log(result);

// Square Function:
// Write a function called square that takes a number parameter and returns the square of that number.

function square(number) {
    return number * number
}
result = square(10)
console.log(result);

// Reverse String Function:
// Write a function called reverseString that takes a string parameter and returns the reversed version of the string.
try {
    function reverseString(string) {
        return string.reverse()
    }
    result = reverseString("Ali")
    console.log(result);
}
catch (err) {
    console.log("keep going. this exercise is under complete.");
}

// Average Function:
// Write a function called calculateAverage that takes three parameters (num1, num2, and num3) and returns the average of the three numbers.

function calculateAverage(num1, num2, num3) {
    return num1 + num2 + num3 / 3
}
result = calculateAverage(10, 20, 50)
console.log(result);