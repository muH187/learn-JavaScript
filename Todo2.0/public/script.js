const input = document.getElementById("input")
const todo = document.getElementById("todo")
const listContainer = document.getElementById("listContainer")

function addBtn() {
    if(input.value === ''){
        alert("You must write something.")
    } else {
        let li = document.createElement('li')
        li.innerHTML = input.value
        listContainer.appendChild(li)
    }
}
