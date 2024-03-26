const choices = document.querySelectorAll(".choice")
const userScorePara = document.getElementById("user_score")
const compScorePara = document.getElementById("computer_score")
const msg = document.getElementById("msg")

let userScore = 0
let compScore = 0

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx]
}

const drawGame = () => {
    msg.textContent = "Game Draw! Play Again."
    msg.style.backgroundColor = "black"
}

const showWin = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++
        msg.textContent = `You Win! Your ${userChoice} beat ${compChoice}`
        msg.style.backgroundColor = "green"
        userScorePara.textContent = userScore

    } else {
        compScore++
        msg.textContent = `You Lose! ${compChoice} beat your ${userChoice}`
        msg.style.backgroundColor = "red"
        compScorePara.textContent = compScore
    }
}

const playGame = (userChoice) => {
    const compChoice = getCompChoice()
    if( userChoice === compChoice) {
        drawGame()
    } else{
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