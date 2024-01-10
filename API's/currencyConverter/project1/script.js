const base_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"
const dropDowns = document.querySelectorAll(".dropDown select")
const btn = document.querySelector("#btn")
const fromCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")
const msg = document.querySelector(".msg")



for(let select of dropDowns) {
    for(currencyCode in countryList) {
        let newOption = document.createElement("option")
        newOption.textContent = currencyCode
        newOption.value = currencyCode
        select.append(newOption)
        if(select.name === "from" && currencyCode === "USD"){
            newOption.selected = "seleted"
        } else if(select.name === "to" && currencyCode === "PKR"){
            newOption.selected = "selected"
        }
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target)
    })
}

const updateFlag = (element) => {
    let currencyCode = element.value
    let countryCode = countryList[currencyCode]
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img")
    img.src = newSrc
}



const updateRate = async () => {
    let amount = document.querySelector(".amount input")
    let amountVal = amount.value
    if(amountVal === "" || amountVal < 1) {
        amountVal = 1
        amount.value = "1"
    }

    const URL = `${base_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    let response = await fetch(URL)
    let data = await response.json()
    let rate = data[toCurr.value.toLowerCase()]

    let finalAmount = amountVal * rate
    msg.textContent = `${amountVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault()
    updateRate()

})

window.addEventListener("load", () => {
    updateRate()
})