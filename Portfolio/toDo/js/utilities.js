//Selectors
export const todoInput = document.querySelector(".todoInput");
export const todoBtn = document.querySelector(".todoBtn");
export const todoList = document.querySelector(".todoList");
export const filterContainer = document.querySelector(".filterContainer");
export const tasksLeft = document.querySelector(".tasksLeft");

export function toDoCount() {
    let todoCount;
    if (!todoList.childElementCount) {
        todoCount = 0;
    }
    else {
        todoCount = todoList.childElementCount;
    }
    tasksLeft.textContent = todoCount;
}