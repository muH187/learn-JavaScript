const display = document.getElementById("display")


function appendNumber(number) {
    display.innerText += number
}

function removeLast(){
    display.innerText = display.innerText.slice(0, -1)
}

function del() {
    display.innerText = ""
}