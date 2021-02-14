

//Functions
function addToDo(event){
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

function deleteOrCheck(e){
    //delete todo
   const item = e.target;
   if (item.classList[0] === "trashBtn"){;
       //remove from HTML
       toDoCount();
       item.parentNode.remove();
       //remove from localStorage
       removeLocalToDo(item.parentNode)
   }
   //delete check
   if (item.classList[0] == "completeBtn"){;
       item.parentNode.classList.toggle("completed");
   }
   toDoCount(); 
}

function filterTodos(e){
    todoList.childNodes.forEach(element => {
       pass 
    });
}


