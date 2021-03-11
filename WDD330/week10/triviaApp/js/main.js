let categoryParent = document.getElementById('categories');

function fetchCategory(){
    fetch(`https://opentdb.com/api.php?amount=1&type=multiple`)
        .then(response => response.json())
        .then(data => setCategory(data.results[0]['category'], categoryParent));
}

function setCategories(){
    for (let i = 0; i < 6; i++) {
       fetchCategory(); 
}
}

function setCategory(item, parent){
    let li = document.createElement('li');
    li.innerHTML = item;
    parent.appendChild(li);
}

setCategories();

console.log(categoryParent.children);