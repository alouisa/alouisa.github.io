//create localStorage helper functions here

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

export function renderToDoList(list, element) {
    list.forEach(todo => {
        const text =
            `<li class="todo">
            <i class="completeBtn far fa-square"></i>
            <p class="todoText">${todo}</p>
            <i class="trashBtn far fa-trash-alt"></i>
        </li>`;

        element.insertAdjacentHTML("beforeend", text);
        element.value = "";
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
    todoText = todo.children[1].innerText;
    todoIndex = todos.indexOf(todoText);
    todos.splice(todos[todoIndex], 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}