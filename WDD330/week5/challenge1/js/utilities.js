//DOM Manipulation Helper Functions
export const toDoList = document.querySelector(".toDoList");
export const toDoInput = document.querySelector("#todoInput").value; 

export function createListItem(){
    //create html for each toDo list item:
    const text =
        `<li>
            <i class="far fa-square"></i>
            <p>${toDoInput}</p>
            <i class="far fa-trash-alt"></i>
        </li>`;
// class for checked <i class="fas fa-check-square"></i>

    //Add html in text variable to the end of the list:
    toDoList.insertAdjacentHTML("beforeend", text);
}




    // const checkbox = document.createElement("INPUT");
    // checkbox.setAttribute("type", "checkbox");

    // const listItem = document.createElement("li");
    // const listText = document.createTextNode(text);

    // const xBtn = document.createElement("button");
    // xBtn.type = "button";
    // xBtn.class = "xBtn";
    // xBtn.textContent = "X";

    // listItem.appendChild(checkbox);
    // listItem.innerText(listText);
    // listItem.appendChild(xBtn);

    // toDoList.appendChild(listItem);
    // document.querySelector("#todoItemInput").value = ""}
