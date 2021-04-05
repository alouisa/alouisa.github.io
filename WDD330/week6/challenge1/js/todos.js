//Selectors
const todoInput = document.querySelector(".todoInput");
export const todoBtn = document.querySelector(".todoBtn");
export const todoList = document.querySelector(".todoList");
export const filterContainer = document.querySelector(".filterContainer");
const tasksLeft = document.querySelector(".tasksLeft")

export default class Todos{
    constructor(){

    }
    toDoCount() {
        let todoCount;
        if (!todoList.childElementCount) {
            todoCount = 0;
        }
        else {
            todoCount = todoList.childElementCount;
        }
        tasksLeft.textContent = todoCount;
    }


    addToDo(event) {
        //prevent form from submitting:
        event.preventDefault();
        //create html for each toDo list item:
        const text =
            `<li class="todo">
                <i class="completeBtn far fa-square"></i>
                <p class="todoText">${todoInput.value}</p>
                <i class="trashBtn far fa-trash-alt"></i>
            </li>`;

        //Add html in text variable to the end of the list if value not empty:
        todoList.insertAdjacentHTML("beforeend", text);
        //Add to localStorage
        toDoCount();
        saveTodos(todoInput.value);
        todoInput.value = "";
    }


    deleteOrCheck(e) {
        //delete todo
        const item = e.target;
        if (item.classList[0] === "trashBtn") {
            ;
            //remove from HTML
            toDoCount();
            item.parentNode.remove();
            //remove from localStorage
            removeLocalToDo(item.parentNode)
        }
        //delete check
        if (item.classList[0] == "completeBtn") {
            ;
            item.parentNode.classList.toggle("completed");
        }
        toDoCount();
    }

    filterTodos(e) {
        if (todoList.childElementCount > 0) {
            const todos = todoList.childNodes;
            todos.forEach(todo => {
                switch (e.target.innerText) {
                    case "All.":
                        todo.style.display = "flex";
                        break;

                    case "Completed":
                        if (todo.classList.contains("completed")) {
                            todo.style.display = "flex";
                        }
                        else {
                            todo.style.display = "none";
                        }
                        break;

                    case "Active.":
                        if (!todo.classList.contains("completed")) {
                            todo.style.display = "flex";
                        }
                        else {
                            todo.style.display = "none";
                        }
                }
            });
        }
        else {
            return;
        }
    }

}
