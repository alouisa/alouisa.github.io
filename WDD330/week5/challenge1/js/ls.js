//create localStorage helper functions here
import uts from 'utilities.js';
// let todo: { 
//     id: timestamp, 
//     content: string, 
//     completed: bool };

// let toDoList = [toDo];

function saveToDo(task, key){
    let listName = uts.toDoInput;
    let listHTML = localStorage.getItem(listName);
}

function getToDos(key){
    return this.todoList;
}

function renderToDoList(list, element){
    list.forEach(element => {
        createListItem(element);
    });
}