const passwordLength = 10
const includeLowercase = true
const includeUppercase = true
const includeNumbers = true
const includeSymbols = true

function generatedPassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
    const uppercaseChars =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "0123456789"
    const symbolChars = "!@#$%^&*<>|"

    let allowedChars = ""
    let password = ""

    allowedChars += includeLowercase ? lowercaseChars : ""
    allowedChars += includeUppercase ? uppercaseChars : ""
    allowedChars += includeNumbers ? numberChars : ""
    allowedChars += includeSymbols ? symbolChars : ""

    if(length <= 0) {
        return "Password length must be 1 or more"
    }
    if(allowedChars.length === 0) {
        return "Atleast one set of character should be enable"
    }
    for (let i = 0; i < length; i++) {
        const randIdx = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randIdx]
    }
    return password
}

const password = generatedPassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols)

console.log(`Generated passwoed: ${password}`);