const links = [
    {
        label: "Week1 notes",
        url: "week1/index.html"
    }
]

let htmlList = document.getElementById("linkList");

for(let i=0; i < links.length; i++){
    let li = document.createElement('li');
    let a = document.createElement('a'); 
    a.setAttribute("href", `"${links[i]["url"]}"`);
    a.innerText = links[i]["label"];
    li.appendChild(a); 
    htmlList.appendChild(li);
}