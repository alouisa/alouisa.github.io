import { fetchCategories, getCategoryList, setCategories} from 'categories.js'

let categoryParent = document.getElementById('categories');

function fetchCategories() {
    fetch(`https://opentdb.com/api.php?amount=10&type=multiple`)
        .then(response => response.json())
        .then(data => data.results);
}

// function getCategoryList(list){
//     list.forEach(item => {
//         if(list.length < 6 && (!list.includes(item.category))){
//             list.append(item);
//         }
//     }
// }
function setCategories(list, parent) {
    list.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = item;
        parent.appendChild(li);
    });

    let categories = fetchCategories();
    console.log(categories);