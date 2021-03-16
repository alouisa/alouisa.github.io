let categoryParent = document.getElementById('categories');
let categoryNames = [];

function fetchCategory() {
    return fetch(`https://opentdb.com/api.php?amount=1&type=multiple`)
        .then(response => response.json())
        .then(data => data.results[0])
}

async function createCategoryList(list, listLength) {
    for (let i = 0; i < listLength;) {
        let category = await fetchCategory();
        if (!categoryNames.includes(category["category"])) {
            categoryNames.push(category["category"]);
            setCategory(category["category"], categoryParent);
            i++;
        }
    }
}
function setCategory(item, parent){
    let li = document.createElement('li');
        li.innerText = item;
        parent.appendChild(li);

}

createCategoryList(categoryNames, 6);
console.log(categoryNames);
