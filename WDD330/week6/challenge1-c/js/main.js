import {Todos, todoList, todoBtn, filterContainer} from './todos.js'
import {getTodos} from './ls.js';
//create instance of todo class
const todos = new Todos();

//Event listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoBtn.addEventListener('click', todos.addToDo);
todoList.addEventListener('click', todos.deleteOrCheck);
filterContainer.addEventListener('click', todos.filterTodos(e))
