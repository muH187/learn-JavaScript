const inbox = document.querySelector("#inbox_box")
const listContainer = document.querySelector(".list_container")

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML)
}

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data")
}

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }
}, false)

btn.addEventListener("click", () => {
    if(inbox.value === ""){
        window.alert("You must write something!")
    } else {
        let li = document.createElement("li")
        li.innerHTML = inbox.value
        listContainer.appendChild(li)

        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)


    }
    inbox.value = ""
    saveData()
})

showTask()