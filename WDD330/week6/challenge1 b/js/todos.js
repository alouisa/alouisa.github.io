import uts from '/utilites.js';

//add variable to store list of tasks
export default class Todos { 
    constructor(){
        this.todoList = [];
    }

    addToDo(){
       this.todoList.append(toDoInput); 
    }

    renderToDoList() {
        this.todoList.forEach(element => {
            uts.createListItem(element);
        });
    }

    completeTodos(){
        pass
    }
    removeTodos(){
        pass
    }
    filterTodos(){
        pass
   } 

}




