const input = document.getElementById("input")
const listContainer = document.getElementById("listContainer")

function addBtn() {
    if(input.value === ""){
        alert("You must write something!")
    } else {
        let todoDiv = document.createElement('div')
        todoDiv.className = "flex items-center justify-between w-full px-4"

        let li = document.createElement('li')
        li.className = 'todo text-black text-xl border border-white bg-white px-3 py-1 my-1 rounded-md w-full'
        li.textContent = input.value

        const deleteBtn = document.createElement("button")
        deleteBtn.className = "text-white bg-[#DD4230] px-3 py-2 rounded-md"
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'

        deleteBtn.addEventListener('click', function(){
            listContainer.removeChild(todoDiv)
        })

        todoDiv.appendChild(li)
        todoDiv.appendChild(deleteBtn)

        listContainer.appendChild(todoDiv)

        input.value = ""
    }
}