linkList = ["testLink1", "testLink2"]
let htmlList = document.getElementById("linkList");

for(let i=0; i < linkList.length -1; i++){
    let li = document.createElement('li');
    li.innerHTML = i; 
    htmlList.appendChild(li);
}