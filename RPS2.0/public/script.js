const playerDisplay = document.getElementById("playerDisplay")
const compDisplay = document.getElementById("compDisplay")
const resultDisplay = document.getElementById("resultDisplay")
const userScoreDisplay = document.getElementById("userScoreDisplay")
const compScoreDisplay = document.getElementById("compScoreDisplay")

let result = ""
let userScore = 0
let compScore = 0

const options = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    const choose = Math.floor(Math.random() * 3)
    return options[choose]
}

function playGame(userChoice) {
    // You can also write like this:
    // const compChoice = options[Math.floor(Math.random() * 3)]
    // console.log(compChoice)

    const compChoice = getComputerChoice()
    if(userChoice === compChoice){
        result = "It's a tie!"
        resultDisplay.style.color = "black"
    } else {
        if(userChoice === "rock" && compChoice === "scissors" || userChoice === "paper" && compChoice === "rock" || userChoice === "scissors" && compChoice === "paper") {
            result = "You Win"
            resultDisplay.style.color = "green"
            userScore += 1
        } else{
            result = "You Lose"
            resultDisplay.style.color = "red"
            compScore += 1
        }
    }
     
    playerDisplay.textContent = `${userChoice}`
    compDisplay.textContent = `${compChoice}`
    resultDisplay.textContent = result

    userScoreDisplay.textContent = userScore
    compScoreDisplay.textContent = compScore
}