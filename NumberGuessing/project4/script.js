const minNum = 1
const maxNum = 100


let running = true

while(running) {
    const userInput = window.prompt(`Enter number between ${minNum}-${maxNum}`)
    userInput = Number(userInput)
    const randNum = Math.floor(Math.random() * 100) + 1

    if (userInput < randNum) {
        window.alert("TOO LOW! Guess Again.")
    } else if (userInput > randNum) {
        window.alert("TOO HIGH! Guess Again.")
    } else {
        window.alert("Correct!")
        running = false
    }

}