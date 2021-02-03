//create instance of todo class

const toDoList = document.querySelector(".toDoList"); 

function addListItem(){
    const toDoItem = document.querySelector("#todoItemInput").value;
    const checkbox = document.createElement("INPUT");
    const toDoDiv = document.createElement("div");
    const labelText = document.createTextNode(toDoItem);
    const xBtn = document.createElement("button");
    xBtn.type = "button";
    xBtn.class = "XBtn";
    xBtn.textContent = "X";
    checkbox.setAttribute("type", "checkbox");

    toDoDiv.appendChild(checkbox);
    toDoDiv.appendChild(labelText);
    toDoDiv.appendChild(xBtn);
    toDoList.appendChild(toDoDiv);
    document.querySelector("#todoItemInput").value = "";
}

function removeTodo(){

}