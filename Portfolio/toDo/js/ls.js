import { todoInput, todoList, toDoCount } from './utilities.js';
//Local Storage

export function saveTodos(todo) {
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

export function getTodos(key) {
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

export function renderToDoList(list) {
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

export function removeLocalToDo(todo) {
    let todos;
    if (localStorage.getItem('todos') == null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    };
    let todoText = todo.children[1].innerText;
    let todoIndex = todos.indexOf(todoText);
    todos.splice(todos[todoIndex], 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}