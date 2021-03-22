let categoriesContainer = document.getElementsByClassName('categoriesContainer');
let categories = document.getElementById('categoriesList');
let categoriesTitle = document.getElementById('categoriesTitle');
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
        let categoriesTitle = category[0]["category"];
        list1.push(category);
        list2.push(categoriesTitle);
        setCategory(categoriesTitle, categories);
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
    parent.onclick = e => {
        if (e.target != parent){
            let targetText = e.target.innerText;
            let currentCategory = list2[list1.indexOf(targetText)]
            title.innerHTML = `Category= ${targetText}`;
            quizSetup(currentCategory, parent);
        }
        
}
}

function quizSetup(category, parent){

    let i = 0;
    let currentQuestion = category[i]["question"];
    let allAnswers = (category[i]["incorrect_answers"].concat(category[i]["correct_answer"])).sort();
    //instead of bellow try rewritting innerHTML of categoriesContainer
    parent.innerHTML = "";
    let questionTitle = document.createElement('h3');
    questionTitle.innerHTML = `*** * * ${currentQuestion} * * ***`;
    questionTitle.style = 'grid-column: 1/-1; justify-self: center; padding: 10px; color:rgb(170, 30, 100)';
    parent.appendChild(questionTitle);
    allAnswers.forEach(question => {
        let li = document.createElement('li');
        li.innerHTML = question;
        parent.appendChild(li);

    });
    console.log(category);
    console.log(currentQuestion);
    console.log(allAnswers);
}

addCategoryEvent(categoryNames, categoryList, categories, categoriesTitle);
