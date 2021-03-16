export function fetchCategories() {
    fetch(`https://opentdb.com/api.php?amount=10&type=multiple`)
        .then(response => response.json())
        .then(data => data.results);
}

export function getCategoryList(list){
    list.forEach(item => {
        if(list.length < 6 && (!list.includes(item.category))){
            list.append(item);
        }
    }
}
export function setCategories(list, parent) {
    list.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = item;
        parent.appendChild(li);
    });



// function setCategories() {
//     for (let i = 0; i < 6; i++) {
//         fetchCategory();
//     }
// }
// function fetchCategory() {
//     fetch(`https://opentdb.com/api.php?amount=10&type=multiple`)
//         .then(response => response.json())
//         .then(data => setCategory(data.results[0]['category'], categoryParent));
// }

// function setCategories() {
//     for (let i = 0; i < 6; i++) {
//         fetchCategory();
//     }
// }

// function setCategory(item, parent) {
//     let li = document.createElement('li');
//     li.innerHTML = item;
//     parent.appendChild(li);
// }

// setCategories();