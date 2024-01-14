const rollDice = document.querySelector("#rollDice");

rollDice.addEventListener("click", () => {
    const numbOfDice = document.querySelector("#numbOfDice").value
    const msg = document.querySelector("#msg");
    const diceResult = document.querySelector("#diceResult");
    const diceImages = document.querySelector("#diceImages");

    const values = []
    const images = []

    for (let i = 0; i < numbOfDice; i++) {
        if(numbOfDice > 6) {
            msg.textContent = "Please enter number b/w 1-6"
            return
        } else {
            const value = Math.floor(Math.random() * 6) + 1
            values.push(value)
            images.push(`<img src="images/${value}.png" alt="dice ${value}">`)
        }
    }
    diceResult.textContent = `Dice: ${values.join(", ")}`
    diceImages.innerHTML = images.join("")
    msg.textContent = ""
});
