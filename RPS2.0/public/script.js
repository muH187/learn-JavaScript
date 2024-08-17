const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const displayUser = document.getElementById("displayUser")
const displayComp = document.getElementById("displayComp")

let userChoice = ""

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
        console.log("It's a tie")
    }
}