const minNum = 1
const maxNum = 100

let randNum = Math.floor(Math.random() * 100) + 1
let userInput
let running = true

while(running) {
    userInput = window.prompt(`Enter number between ${minNum}-${maxNum}`)
    userInput = Number(userInput)
    

    if (userInput < randNum) {
        window.alert("TOO LOW! Guess Again.")
    } else if (userInput > randNum) {
        window.alert("TOO HIGH! Guess Again.")
    } else {
        window.alert("Correct!")
        running = false
    }

}