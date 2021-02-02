const todoItemInput = document.querySelector(".todoItemInput");
const toDoForm = document.querySelector(".toDoForm"); 

function addListItem(){
    const checkbox = document.createElement("INPUT");
    const label = document.createElement("LABEL");
    const labelText = document.createTextNode("text");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "checkbox1");
    label.setAttribute("for", "checkbox1");

    label.appendChild(checkbox);
    label.appendChild(labelText);
    toDoForm.appendChild(label);
}