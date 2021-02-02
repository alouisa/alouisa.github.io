const todoItemInput = document.querySelector(".todoItemInput");
const toDoList = document.querySelector(".toDoList"); 

function addListItem(){
    checkbox = document.createElement("INPUT");
    label = document.createElement("LABEL");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "checkbox1");
    label.innerHTML = "test";
    label.setAttribute("for", "checkbox1");

    toDoList.appendChild(checkbox);
    toDoList.appendChild(label)
}