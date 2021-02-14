//Selectors
const todoInput = document.querySelector(".todoInput");
const todoBtn = document.querySelector(".todoBtn");
const todoList = document.querySelector(".todoList");
const filterContainer = document.querySelector(".filterContainer");
const tasksLeft = document.querySelector(".tasksLeft")

//Event listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoBtn.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteOrCheck);
filterContainer.addEventListener('click', filterTodos);

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
//Functions
function addToDo(event) {
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

function deleteOrCheck(e) {
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

function filterTodos(e) {
    if (todoList.childElementCount > 0){
        const todos = todoList.childNodes;
        console.log(todoList);
        todos.forEach(todo => {
            switch(e.target.innerText){
                case "All.":
                    todo.style.display = "flex";
                    break;

                case "Completed":
                    if(todo.classList.contains("completed")){
                    todo.style.display = "flex"; 
                    } 
                    else{
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
    else{
        return;
    }
}


//Local Storage

function saveTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') == null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos(key) {
    let todos;
    if (localStorage.getItem('todos') == null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    renderToDoList(todos);
    toDoCount();
}

function renderToDoList(list) {
    list.forEach(todo => {
        const text =
            `<li class="todo">
            <i class="completeBtn far fa-square"></i>
            <p class="todoText">${todo}</p>
            <i class="trashBtn far fa-trash-alt"></i>
        </li>`;

        todoList.insertAdjacentHTML("beforeend", text);
        todoInput.value = "";
        toDoCount();
    });
}

function removeLocalToDo(todo) {
    let todos;
    if (localStorage.getItem('todos') == null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    };
    todoText = todo.children[1].innerText;
    todoIndex = todos.indexOf(todoText);
    todos.splice(todos[todoIndex], 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}