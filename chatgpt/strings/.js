// String Length:
// Write a function called getStringLength that takes a string as a parameter and returns the length of the string.

function getStringLength(string) {
    return string.length
}
let result = getStringLength("Muhammad Ali")
console.log(result);

// Uppercase Conversion:
// Write a function called convertToUpperCase that takes a string as a parameter and returns the string in uppercase.

function convertToUpperCase(string) {
    return string.toUpperCase()
}
result = convertToUpperCase("pakistan")
console.log(result);

// Lowercase Conversion:
// Write a function called convertToLowerCase that takes a string as a parameter and returns the string in lowercase.

function convertToLowerCase(string) {
    return string.toLowerCase()
}
result = convertToLowerCase("JAVASCRIPT")
console.log(result);

// String Concatenation:
// Write a function called concatenateStrings that takes two strings as parameters and returns their concatenation.

function concatenateStrings(str1, str2) {
    return str1+str2
}
result = concatenateStrings("Java", "Script")
console.log(result);

// Substring Extraction:
// Write a function called getSubstring that takes a string and two indices as parameters and returns the substring between those indices.

function getSubstring(string, idx1, idx2) {
    let substring = string.substring(idx1, idx2 + 1)
    return substring
}
let myString = "Hello, World"
result = getSubstring(myString, 0, 4)
console.log(result);

// String Reversal:
// Write a function called reverseString that takes a string as a parameter and returns the reversed version of the string.

function reverseString(string) {
    return string.split("").reverse().join("")
}
let originalString = "JavaScript"
result = reverseString(originalString)
console.log(result);

// Counting Characters:
// Write a function called countCharacters that takes a string and a character as parameters and returns the number of occurrences of that character in the string.

function countCharacters(inputString, targetCharacter) {
    let count = 0
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === targetCharacter) {
            count++
        }
    }
    return count
}
let myString1 = "Muhammad Ali Khan"
let characterToCount = "a"
result = countCharacters(myString1, characterToCount)
console.log(result);

// Remove Whitespace:
// Write a function called removeWhitespace that takes a string as a parameter and returns a new string with all whitespace characters removed.

function removeWhitespace(string) {
    let withoutWhiteSpace = string.replace(/\s/g, '')
    return withoutWhiteSpace
}
myString = "    Hello  , World      "
result = removeWhitespace(myString)
console.log(result);

// Check Palindrome:
// Write a function called isPalindrome that takes a string as a parameter and returns true if the string is a palindrome, and false otherwise.

// Title Case Conversion:
// Write a function called convertToTitleCase that takes a string as a parameter and returns a new string with the first letter of each word capitalized.