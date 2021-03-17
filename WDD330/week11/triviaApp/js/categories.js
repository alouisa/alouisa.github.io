let categoriesContainer = document.getElementsByClassName('categoriesContainer');
let categoryParent = document.getElementById('categories');
let categoryTitle = document.getElementById('categoriesTitle');
let categoryNames = [];
var categoryList = [];

function randomInt(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}
function createRandomList(listLength, min, max) {
    let randomList = [];
    for (let i = 0; i < listLength;) {
        let num = randomInt(min, max);
        if (!randomList.includes(num)) {
            randomList.push(num);
            i++;
        }
    }
    return randomList;
}

function fetchCategory(category, amount) {
    return fetch(`https://opentdb.com/api.php?amount=${amount}&type=multiple&category=${category}`)
        .then(response => response.json())
        .then(data => data.results)
        .catch(error => console.log(error));
}

async function createCategoryList(list1, list2) {
    const categoryList = createRandomList(6, 9, 25);
    categoryList.forEach(async item => {
        let category = await fetchCategory(item, 10);
        let categoryTitle = category[0]["category"];
        list1.push(category);
        list2.push(categoryTitle);
        setCategory(categoryTitle, categoryParent);
    });
}

function setCategory(item, parent) {
    let li = document.createElement('li');
    li.innerText = item;
    parent.appendChild(li);

}

createCategoryList(categoryList, categoryNames, 6);
console.log(categoryList);
console.log(categoryNames);


function addCategoryEvent(list1, list2, parent, title){
    window.onclick = e => {
        let targetText = e.target.innerText;
        let currentCategory = list2[list1.indexOf(targetText)]
        title.innerHTML = `Category= ${targetText}`;


        //Quiz
        let i = 0;
        let currentQuestion = currentCategory[i]["question"];
        let allQuestions = (currentCategory[i]["incorrect_answers"].concat(currentCategory[i]["correct_answer"])).sort();
        let question = document.createElement('h3');
        parent.innerHTML = "";
        allQuestions.forEach(question => {
            let li = document.createElement('li');
            li.innerText = question;
            parent.appendChild(li);

        });
        console.log(currentCategory);
        console.log(currentQuestion);
        console.log(allQuestions);
}
}

addCategoryEvent(categoryNames, categoryList, categoryParent, categoryTitle);