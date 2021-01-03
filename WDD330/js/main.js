linkList = ["testLink1", "testLink2"]
let htmlList = document.getElementById("linkList");

for(let i=0; i < length(linkList)-1; i++){
    let li = Document.createElement('li');
    li.createTextNode(i); 
    htmlList.appendChild(li);
}