//DOM Manipulation Helper Functions
const todoInput = document.querySelector(".todoInput");
const todoBtn = document.querySelector(".todoBtn");
const todoList = document.querySelector(".todoList");
const filterSelect = document.querySelector("#filterTodo");
const tasksLeft = document.querySelector(".tasksLeft")

//Event listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoBtn.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteOrCheck);
filterSelect.addEventListener('click', filterTodos);

function toDoCount() {
    let todoCount;
    if (!todoList.childElementCount) {
        todoCount = 0;
    }
    else {
        todoCount = todoList.childElementCount;
    }
    tasksLeft.textContent = todoCount;
}