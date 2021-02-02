const todoItemInput = document.querySelector(".todoItemInput");
const toDoList = document.querySelector(".toDoList"); 

function addListItem(){
    newItem = document.createElement("input");
    newItemLabel = document.createElement("label");
    newItem.setAttribute("type", "checkbox");
    newItemLabel.inneHTML = "hello";
    newItemLabel.appenChild(newItem);

    toDoList.appendChild(newItemLabel);
}