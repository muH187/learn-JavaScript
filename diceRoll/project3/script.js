const rollDice = document.querySelector("#rollDice")

rollDice.addEventListener("click", () => {
    const msg = document.querySelector("#msg")
    const numbOfDice = document.querySelector("#numbOfDice").value
    const diceResult = document.querySelector("#diceResult")
    const diceImages = document.querySelector("#diceImages")

    const values = []
    const images = []

    for(let i = 0; i < numbOfDice; i++) {
        if(numbOfDice > 6) {
            msg.textContent = "Choose b/w 1-6. Try Again!"
            return
        } else {
            const value = Math.floor(Math.random() * 6) + 1
            values.push(value)
            images.push(`<img src="images/${value}.png" alt="Dice: ${value}">`)
        }
    }

    diceResult.textContent = `Dice: ${values.join(", ")}`
    diceImages.innerHTML = images.join("")
    msg.textContent = ""
})