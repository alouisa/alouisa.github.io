const links = [
    {
        label: "1",
        url: "week1/index.html"
    },
    {
        label: "2",
        url: "week2/index.html"
    },
    {
        label: "3",
        url: "week3/index.html"      
    },
    {
        label: "4",
        url: "week4/index.html"
    },
    {
        label: "5",
        url: "week5/index.html"
    },
    {
        label: "6",
        url: "week6/index.html"
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