export default class Todos { 
    //Functions

    addToDo(event, element) {
        //prevent form from submitting:
        event.preventDefault();
        //create html for each toDo list item:
        const text =
            `<li class="todo">
                <i class="completeBtn far fa-square"></i>
                <p class="todoText">${element.value}</p>
                <i class="trashBtn far fa-trash-alt"></i>
            </li>`;

        //Add html in text variable to the end of the list if value not empty:
        element.insertAdjacentHTML("beforeend", text);
        //Add to localStorage
        toDoCount();
        saveTodos(element.value);
        element.value = "";
}

    deleteOrCheck(e) {
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

    filterTodos(e) {
        todoList.childNodes.forEach(element => {
            pass
        });
}


        

}




