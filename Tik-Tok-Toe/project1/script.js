let boxes = document.querySelectorAll(".box")
let resetGame = document.querySelector("#resetBtn")
let newGameBtn = document.querySelector("#resetBtn")
let msg = document.querySelector("#msg")
let msgContainer = document.querySelector(".msg-container")

let turnO = true

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8], 
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.textContent = "O"
            turnO = false
        } else {
            box.textContent = "X"
            turnO = true
        }
        box.disabled = true
        checkWinner()
    })
})

const resetGame = () => {
    turnO = true
    enableBoxes()
    msgContainer.classList.add("hide")
}

const disabledBoxes = () => {
    for(let box of boxes) {
        box.disabled = true
    }
}
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false
        box.innerText = ""
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disabledBoxes()
}

const checkWinner = () => {
    for(let pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner", pos1Val);
                showWinner(pos1Val)
            }
        }       
    }
}

newGameBtn.addEventListener("click", resetGame)
resetGame.addEventListener("click", resetGame)