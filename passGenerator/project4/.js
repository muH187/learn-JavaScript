const passwordLenght = 7
const includeLowercase = true
const includeUppercase = true
const includeNumbers = true
const includeSymbols = true

function generatedPassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "1234567890"
    const symbolChars = "!@#$%*<>="

    let allowedChars = ""
    let password = ""
    
    allowedChars += includeLowercase ? lowercaseChars : ""
    allowedChars += includeUppercase ? uppercaseChars : ""
    allowedChars += includeNumbers ? numberChars : ""
    allowedChars += includeSymbols ? symbolChars : ""

    if(length <= 4) {
        return "Password length must be at least 5."
    }
    if(allowedChars.length === 0) {
        return "At least one set should be selected."
    }


    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex]
    }
    return password
}

const password = generatedPassword(passwordLenght, includeLowercase, includeUppercase, includeNumbers, includeSymbols)

console.log(`Generated Password: ${password}`);