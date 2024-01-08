let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#resetBtn")

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
    })
})

const checkWinner = () => {
    for(let pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].textContent
        let pos2Val = boxes[pattern[1]].textContent
        let pos3Val = boxes[pattern[2]].textContent

        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("Winner", pos1Val);
        }
    }
}