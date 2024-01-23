const choices = document.querySelectorAll(".choice")
const userScorePara = document.querySelector("#user_score")
const compScorePara = document.querySelector("#computer_score")
const msg = document.querySelector("#msg")

let userScore = 0
let compScore = 0

function getCompChoice() {
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx]
}

function drawGame() {
    msg.textContent = "Game Draw! Play Again."
    msg.style.backgroundColor = "#365486"
}

function showWin(userWin, userChoice, compChoice) {
    if(userWin) {
        userScore++
        userScorePara.textContent = userScore
        msg.style.backgroundColor = "green"
        msg.textContent = `You Win! Your ${userChoice} beats ${compChoice}`
    } else {
        compScore++
        compScorePara.textContent = compScore
        msg.style.backgroundColor = "red"
        msg.textContent = `You Lose! ${compChoice} beats your ${userChoice}`
    }
}

function playGame(userChoice) {
    const compChoice = getCompChoice()
    if(userChoice === compChoice) {
        drawGame()
    } else {
        let userWin = true
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true
        } else {
            userWin = compChoice === "rock" ? false : true
        }
        showWin(userWin, userChoice, compChoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})