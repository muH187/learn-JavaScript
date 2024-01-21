const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user_score")
const compScorePara = document.querySelector("#computer_score")

let userScore = 0
let compScore = 0

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx]
}

const drawGame = () => {
    msg.textContent = "Game Draw! Play Again."
    msg.style.backgroundColor = "#365486"
}

const showWin = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++
        userScorePara.textContent = userScore
        msg.textContent = `You Win! Your ${userChoice} beats ${compChoice}`
    } else {
        compScore++
        compScorePara.textContent = compScore
        msg.textContent = `You Lose! ${compChoice} beats your ${userChoice}`
    }
}

const playGame = (userChoice) => {
    const compChoice = getCompChoice()

    let userWin = true
    if(userChoice === compChoice) {
        drawGame()
    } else {
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true
        } else if (userChoice === "paper") {
            userWin = compChoice === "scicssors" ? false : true
        } else {
            userWin = compChoice === "rock" ? false : true
        }
        showWin(userWin, userChoice, compChoice)
    }
}

choices.forEach((choice) => {
    const compChoice = getCompChoice()
    
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})