{
    function sum(num1, num2) {
        return num1 + num2
    }
    console.log(sum(10, 100)) // Output 110
}

{
    function evenOrOdd(number) {
        if(number % 2) {
            return "Odd"
        } else {
            return "Even"
        }
    }
    console.log(evenOrOdd(9))
}

// find largest number in an array:
// Using Reduce()
{
    function largestNumber(array) {
        return array.reduce((largest, current) => 
        (current > largest ? current : largest), array[0])
    }
    let array = [100, 400, 51, 399, 511, 20]
    console.log(largestNumber(array))
}
// Using Math.max and spread operator
{
    function largestNumber(array) {
        return Math.max(...array)
    }
    let array = [12, 32, 64, 19, 94, 10]
    console.log(largestNumber(array))
}
// Using for loop
{
    function largestNumber(array) {
        let largest = array[0]
        for (let i = 1; i < array.length; i++){
            if(array[i] > largest) {
                largest = array[i]
            }
        }
        return largest
    }
    let array = [10, 20, 30, 14, 29, 33, 83]
    console.log(largestNumber(array))
}
// Using sort()
{
    function largestNumber(array) {
        array.sort((a, b) => a - b)
        return array[array.length - 1]
    }
    let array = [12, 32, 64, 19]
    console.log(largestNumber(array))
}
// Using forEach()
{
    const array = [12, 32, 64, 13, 30, 4, 22]
    let largest = array[0]
    array.forEach(element => {
        if(element > largest) {
            largest = element
        }
    })
    console.log(`Largest: ${largest}`)
}

// Reverse a string:
{
    let newString = ""
    function reverseString(string) {
        for (let i = string.length - 1; i >= 0; i--) {
            newString += string[i]
        }
        return newString
    }
    console.log(reverseString("Hello"))
}

// Factorial of a number:
{
    function calFactorial(array) {
        return array.reduce((total, num) => total * num)
    }
    let array = [1, 2, 3, 4]
    console.log(calFactorial(array))
    
    // Dynamic Approach:
    function factorial (n) {
        let array = []
        for (let i = 1; i <= n; i++){
            array.push(i)
        }
        return array.reduce((total, next) => total * next, 1)
    }
    console.log(factorial(10))
}

// Palindrome checker:
{
    function checkPalindrome(string) {
        let newString = ""
        for (let i = string.length - 1; i >= 0; i--) {
            newString += string[i]
        }
        if (newString === string) {
            return "It's palindrome"
        } else {
            return "It's not palindrome"
        }
    }
    console.log(checkPalindrome("mom"))
}