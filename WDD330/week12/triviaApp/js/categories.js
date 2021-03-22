let categoriesContainer = document.getElementsByClassName('categoriesContainer');
let categories = document.getElementById('categoriesList');
let categoriesTitle = document.getElementById('categoriesTitle');
let categoryNames = [];
var categoryList = [];

let quizParent = document.querySelector('.quizBody');
let quizTitle = document.getElementById('quizTitle');
let quizList = document.getElementById('quizList');

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


function addCategoryEvent(list1, list2, categoryUL, quizUL, title){
    categoryUL.onclick = e => {
        if (e.target != categoryUL){
            let targetText = e.target.innerText;
            let currentCategory = list2[list1.indexOf(targetText)]
            title.innerHTML = `Category= ${targetText}`;
            quizSetup(currentCategory, quizUL);
            hide(categoryUL.parentElement.parentElement);
        }
        
}
}

function hide(element){
    element.classList.remove('show');
    element.classList.add('hide');
}

function show(parent){
    element.classList.remove('hide');
    element.classList.add('show');
}

function createQuizList(parent, questions){
    questions.forEach(question => {
        let li = document.createElement('li');
        li.innerHTML = question;
        parent.appendChild(li);

    });
}

function quizSetup(category, parent){

    let i = 0;
    let currentQuestion = category[i]["question"];
    let allAnswers = (category[i]["incorrect_answers"].concat(category[i]["correct_answer"])).sort();
   
    let questionTitle = document.createElement('h3');
    questionTitle.innerHTML = `*** * * ${currentQuestion} * * ***`;
    parent.parentElement.appendChild(questionTitle);
    createQuizList(parent, allAnswers)
    parent.parentElement.appendChild(parent);

}

addCategoryEvent(categoryNames, categoryList, categories, quizList, quizTitle);
