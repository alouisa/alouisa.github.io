let categoryParent = document.getElementById('categories');
let categoryList = [];

function fetchCategory() {
    return fetch(`https://opentdb.com/api.php?amount=1&type=multiple`)
        .then(response => response.json())
        .then(data => data.results[0])
}

async function createCategoryList(list, listLength) {
    let categoryNames = [];
    for (let i = 0; i < listLength;) {
        let category = await fetchCategory();
        if (!categoryNames.includes(category["category"])) {
            list.push(category);
            categoryNames.push(category["category"]);
            i++;
        }
    }
}

function setCategories(list, parent) {
    list.forEach(item => {
        console.log("setcategories function");
        let li = document.createElement('li');
        li.innerText = item["category"];
        parent.appendChild(li);
    });
}

createCategoryList(categoryList, 6);
console.log(categoryList);
