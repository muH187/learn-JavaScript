const minNum = 1
const maxNum = 100
let running = true
let attempts = 0
let guess

const randNum = Math.floor(Math.random() * (maxNum - minNum) + 1) + minNum

while(running) {
    guess = window.prompt("Guess your number.")
    guess = Number(guess)

    if(isNaN(guess)) {
        window.alert("Please enter a number!")
    } else if (guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number!")
    } else {
        attempts++
        if(guess < randNum) {
            window.alert("TOO LOW! Try Again.")
        } else if (guess > randNum) {
            window.alert("TOO HIHG! Try Again.")
        } else {
            window.alert(`Correct! You did in ${attempts}`)
            running = false
        } 
    }
    
}