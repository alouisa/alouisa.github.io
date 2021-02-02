const toDoList = document.querySelector(".toDoList"); 
const todoItemInput = document.querySelector(".todoItemInput");

function addListItem(){
    const checkbox = document.createElement("INPUT");
    const toDoDiv = document.createElement("div");
    const labelText = document.createTextNode("text");
    const xBtn = document.createElement("button");
    xBtn.type = "button";
    xBtn.textContent = "X";
    checkbox.setAttribute("type", "checkbox");

    toDoDiv.appendChild(checkbox);
    toDoDiv.appendChild(labelText);
    toDoDiv.appendChild(xBtn);
    toDoList.appendChild(toDoDiv);
}