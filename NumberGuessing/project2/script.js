const minNum = 1
const maxNum = 100

let answer = Math.floor(Math.random() * (maxNum - minNum) + minNum) + 1
let attempts = 0
let running = true
let guess

while(running){
    guess = window.prompt(`Enter Number Between ${minNum} - ${maxNum}`)
    guess = Number(guess)

    if(isNaN(guess)){
        window.alert("Please enter a valid number.")
    } else if (minNum > guess || maxNum < guess) {
        window.alert("Please enter a valid value.")
    } else {
        attempts++
        if(answer > guess) {
            window.alert("You are too LOW! try again.")
        } else if (answer < guess) {
            window.alert("You are too HIGH! try again.")
        } else {
            window.alert(`Congratulation You got it in ${attempts} attempts`)
            running = false
        }
    }
}
