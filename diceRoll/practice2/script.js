function err() {
    msg.textContent = "Invalid number! Choose 1-6, Try Again."
}

function rollDice() {
    const numbOfDice = document.getElementById("numbOfDice").value
    const diceResult = document.getElementById("diceResult")
    const diceImages = document.getElementById("diceImages")
    const msg = document.querySelector("#msg")
    
    const values = []
    const images = []
    for (let i = 0; i < numbOfDice; i++) {
        if(numbOfDice > 6) {
            err()
            return
        } else {
            const value = Math.floor(Math.random() * 6) + 1
            values.push(value)
            images.push(`<img src="images/${value}.png" alt="Dice ${value}">`)
        }
    }
    
    diceResult.textContent = `Dice: ${values.join(", ")}`
    diceImages.innerHTML = images.join("")

    msg.textContent = ""
}

