// Game Variables

const foodSound = new Audio('food.mp3')
const gameoverSound = new Audio('gameover.mp3')
const moveSound = new Audio('move.mp3')
const bgSound = new Audio('music.mp3')
const board = document.querySelector(".board")

let direction = {x: 0, y: 0}
let speed = 2
let lastPaintTime = 0

let snakeArr = [
    {x: 13, y: 15}
]

let food = {x: 6, y: 7}

// Game Functions

function main(ctime) {
    window.requestAnimationFrame(main)

    if((ctime - lastPaintTime) / 1000 < 1/speed){
        return
    }
    lastPaintTime = ctime
    gameEngine()
}

function gameEngine(){
    // Part 1: Updating the snake array & Food


    // Part 2: Display the snake & Food

    // Snake
    board.innerHTML = ""
    snakeArr.forEach((e, index)=> {
        snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add("bg-purple-600")
        if(index === 0){
            snakeElement.classList.add("bg-red-600")
        }
        board.appendChild(snakeElement)
    })

    // Food
    snakeArr.forEach((e, index)=> {
        foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add("bg-yellow-600")
        board.appendChild(foodElement)
    })
}




// Main logic

window.requestAnimationFrame(main)