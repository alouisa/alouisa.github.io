//create localStorage helper functions here
import uts from '/utilities.js';
// let todo: { 
//     id: timestamp, 
//     content: string, 
//     completed: bool };

// let toDoList = [toDo];

export function saveToDo(task, key){
    let listName = uts.toDoInput;
    let listHTML = localStorage.getItem(listName);
}

export function getToDos(key){
    return this.todoList;
}