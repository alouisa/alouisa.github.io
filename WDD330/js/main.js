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
    },
    {
        label: "7",
        url: "week7/index.html"
    },
    {
        label: "8",
        url: "week8/index.html"
    },
    {
        label: "9",
        url: "week9/index.html"
    },
    {
        label: "10",
        url: "week10/index.html"
    },
    {
        label: "11",
        url: "week11/index.html"
    },
    {
        label: "12",
        url: "week12/index.html"
    },
    {
        label: "13",
        url: "week13/index.html"
    },
    {
        label: "14",
        url: "week14/index.html"
    },
    {
        label: "🌺",
        url: "week14/index.html"
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