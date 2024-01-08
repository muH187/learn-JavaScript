let minNum = 1
let maxNum = 100
let answer = Math.floor(Math.random() * (maxNum - minNum) + 1) + minNum

let running = true
let attempts = 0
let guess

while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
    guess = Number(guess)

    if(isNaN(guess)){
        window.alert("Please Enter a valid number")
    } else if(guess < minNum || guess > maxNum){
        window.alert("Please Enter a valid number")
    } else {
        attempts++
        if(guess > answer) {
            window.alert("Too High! Try Again.")
        } else if(guess < answer) {
            window.alert("Too Low! Try Again.")
        } else {
            window.alert(`Correct! You did in ${attempts} attempts.`)
            running = false
        }
    }
}