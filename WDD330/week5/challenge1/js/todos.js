import utilites from 'utilites.js';
//add variable to store list of tasks
class Todos { 
    constructor(){
        this.todoList = null;
    }

    addToDo(){
       this.todoList.append(toDoInput); 
    }

    saveToDo(task, key){
        
    }

    getToDos(key){
       return this.todoList; 
    }

    renderToDoList(list, element){
        list.forEach(element => {
           createListItem(element); 
        });
     }
    completeTodos(){
        
    }
    removeTodos(){

    }
   filterTodos(){

   } 

}



