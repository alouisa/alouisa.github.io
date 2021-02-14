//DOM Manipulation Helper Functions
const todoInput = document.querySelector(".todoInput");
const todoBtn = document.querySelector(".todoBtn");
const todoList = document.querySelector(".todoList");
const tasksLeft = document.querySelector(".tasksLeft");

const filterAll = document.querySelector(".filterContainer p:nth-child(2)")
const filterActive = document.querySelector(".filterContainer p:nth-child(3)");
const filterChecked = document.querySelector("..filterContainer p:last-child");

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