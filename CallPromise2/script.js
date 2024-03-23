// console.log("Ali is an Entreprenuer");
// console.log("Ali is a multi millionaire");

// setTimeout(() => {
//     console.log("Ali is 19 years old.");
// }, 2000)

// console.log("The End...");

const calculate = (a, b, operation) => {
    return operation(a, b)
}

// Method One:
const addition = calculate(3, 4, function (num1, num2) {
    return num1 + num2
})
console.log(addition);

// Method Two:
const subraction = (a, b) => a - b

const subResult = calculate(8, 3, subraction)

console.log(subResult);

// Method 3:
function multiply(a, b) {
    return a*b
}
const multiResult = calculate(20, 5, multiply)
console.log(multiResult);