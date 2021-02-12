//DOM Manipulation Helper Functions
export const toDoList = document.querySelector(".toDoList");
export const toDoInput = document.querySelector("#todoInput").value; 

export function createListItem(text){ 

    const checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");

    const listItem = document.createElement("li");
    const listText = document.createTextNode(text);

    const xBtn = document.createElement("button");
    xBtn.type = "button";
    xBtn.class = "xBtn";
    xBtn.textContent = "X";

    listItem.appendChild(checkbox);
    listItem.innerText(listText);
    listItem.appendChild(xBtn);

    toDoList.appendChild(listItem);
    document.querySelector("#todoItemInput").value = "";
}