import {Todos, todoList, todoBtn, filterContainer} from './todos.js';
//create instance of todo class
const todos = new Todos();

//Event listeners
document.addEventListener('DOMContentLoaded', todos.getTodos);
todoBtn.addEventListener('click', todos.addToDo);
todoList.addEventListener('click', todos.deleteOrCheck);
filterContainer.addEventListener('click', todos.filterTodos)
