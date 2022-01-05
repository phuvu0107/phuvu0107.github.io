const inputEl = document.querySelector('.input-field')
const todoContainer = document.querySelector('.todo-container')
const todoList = document.querySelector('.todo-list')
const submitBtn = document.querySelector('.submit-btn')
//const listFromLocalStorage = JSON.parse(localStorage.getItem("todoList"))
const todos = []
/*
if (listFromLocalStorage){
    todos = listFromLocalStorage
    render(todos)
}*/

function addItem(event){
    //prevent default
    event.preventDefault();
    //Todo DIV, add this div to ul
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    //Create Li
    const newTodo = document.createElement("li")
    newTodo.innerText = inputEl.value
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)
    //Create Checked Button
    const completeButton = document.createElement("button")
    completeButton.innerHTML = `<i class="fas fa-check"></i>`
    completeButton.classList.add("complete-btn")
    todoDiv.appendChild(completeButton)
    //Create Delete Button
    const deletebutton = document.createElement("button")
    deletebutton.innerHTML = `<i class="fas fa-trash"></i>`
    deletebutton.classList.add("delete-btn")
    todoDiv.appendChild(deletebutton)
    //Append this DIV to List (ul)
    todoList.appendChild(todoDiv)
    //clear todo input
    inputEl.value = ""
}

function deleteCheck(e) {
    const item = e.target;
    //delete todo
    if (item.classList[0] === "delete-btn"){
        const todo = item.parentElement
        todo.classList.add("fall")
        //wait for the transition to end then remove the item
        todo.addEventListener('transitionend', function(){
            todo.remove()
        })
    }

    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}

submitBtn.addEventListener("click", addItem)
todoList.addEventListener("click", deleteCheck)