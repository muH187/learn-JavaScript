const display = document.getElementById("display")

function appendNumber(number) {
    display.innerText += number
}
function operator(operator){
    display.innerText += operator
}

function removeLast(){
    display.innerText = display.innerText.slice(0, -1)
}

function del() {
    display.innerText = ""
}

function equal(){
    try{
        display.innerText = eval(display.innerText)
    }
    catch(error) {
        display.innerText = "Error"
    }
}
