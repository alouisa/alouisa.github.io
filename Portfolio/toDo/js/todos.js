import { todoInput, todoBtn, todoList, filterContainer, toDoCount } from './utilities.js';
import { saveTodos, getTodos, removeLocalToDo, } from './ls.js';

export default class Todos {
    addTodoListeners() {
        //Event listeners
        document.addEventListener('DOMContentLoaded', getTodos);
        todoBtn.addEventListener('click', this.addToDo);
        todoList.addEventListener('click', this.deleteOrCheck);
        filterContainer.addEventListener('click', this.filterTodos);
    }

    //Functions
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
        // class for checked <i class="fas fa-check-square"></i>

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