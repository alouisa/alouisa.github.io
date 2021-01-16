const links = [
    {
        label: "Week1 notes",
        url: "week1/index.html"
    },
    {
        label: "Week2 notes",
        url: "week2/index.html"
    },
    {
        label: "Week3 notes",
        url: "week3/index.html"      
    }
]

let htmlList = document.getElementById("linkList");

for(let i=0; i < links.length; i++){
    let li = document.createElement('li');
    let a = document.createElement('a'); 
    a.setAttribute("href", links[i]["url"]);
    a.innerText = links[i]["label"];
    li.appendChild(a); 
    htmlList.appendChild(li);
}