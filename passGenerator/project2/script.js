const passwordLength = 5
const includeUppercase = true
const includeLowercase = true
const includeNumbers = true
const includeSymbols = true

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
    const numberChars = "0123456789"
    const symbolChars = "!@#$%^&*()_+-><?"

    let allowedChars = ""
    let password = ""

    allowedChars += includeUppercase ? uppercaseChars : ""
    allowedChars += includeLowercase ? lowercaseChars : ""
    allowedChars += includeNumbers ? numberChars : ""
    allowedChars += includeSymbols ? symbolChars : ""

    if(length <= 0) {
        return (`Password length must be 1`)
    }
    if(allowedChars.length === 0) {
        return (`At least 1 set of character needs to be selected`)
    }

    for ( let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex]
    }

    return password
}

const password = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols)

console.log(`Generated Password: ${password}`);
