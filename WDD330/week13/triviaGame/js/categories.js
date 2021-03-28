const categoriesContainer = document.getElementsByClassName('categoriesContainer');
const categories = document.getElementById('categoriesList');
const categoriesTitle = document.getElementById('categoriesTitle');
const categoryNames = [];
const categoryList = [];
let currentCategory = '';

const quizParent = document.querySelector('.quizBody');
const quizTitle = document.getElementById('quizTitle');
const quizList = document.getElementById('quizList');
const quizQuestion = document.getElementById('quizQuestion');
let quizAnswer = document.getElementById('quizAnswer');
let score = document.getElementById('score');
const nextBtn = document.getElementById('nextBtn');
const continueBtn = document.getElementById('continueBtn');

let scoreCount = 0;
// let clickCount = 0;

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

function hide(element) {
    element.classList.add('hide');
}

function show(element) {
    element.classList.remove('hide');
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

function addCategoryEvent(list1, list2, categoryUL, quizUL, title){
    categoryUL.onclick = e => {
        if (e.target != categoryUL){
            let targetText = e.target.innerText;
            currentCategory = list2[list1.indexOf(targetText)]
            title.innerHTML = `${targetText}`;
            quizSetup(currentCategory, quizUL);
            hide(categoryUL.parentElement.parentElement);
        }
        
}
}


function createQuizList(parent, questions){
    questions.forEach(question => {
        let li = document.createElement('li');
        li.innerHTML = question;
        parent.appendChild(li);

    });
}

function quizSetup(category, parent, i = 0){
    let currentQuestion = category[i]["question"];
    let correctAnswer = category[i]["correct_answer"];
    console.log(correctAnswer);
    let allAnswers = (category[i]["incorrect_answers"].concat(correctAnswer)).sort();
    quizQuestion.innerHTML = `* ${currentQuestion} *`;
    parent.innerHTML = '';
    createQuizList(parent, allAnswers)
    parent.parentElement.appendChild(parent);
    addAnswerEvent(quizList, correctAnswer, nextBtn);
    i++; 
    if (i < 10){
        show(nextBtn);
        // clickCount = 0;
        nextBtn.addEventListener('click', () => {
            quizAnswer.innerHTML = '';
            quizSetup(currentCategory, quizList, i);
        });
    }
    else{
        hide(nextBtn);
        show(continueBtn);
    }
}

function addAnswerEvent(element, answer, btn){
    element.addEventListener('click', e => {
        // clickCount += 1;
        e.target.classList.remove('incorrect');
        e.target.classList.remove('correct');
        if (e.target != element){
            if(e.target.innerText != answer){
                e.target.classList.add('incorrect');
                displayScore();
            }
            else{
                e.target.classList.add('correct');
                // if(clickCount == 1){
                    scoreCount += 1;
                    displayScore();
                // }
            }

            displayAnswer(e.target.innerHTML, quizAnswer, answer)
            show(btn.parentElement);
            show(element);
            // console.log(clickCount);
        }
    }
        );
}

function displayAnswer(response, element, correctAnswer){
    if (response) {
        if (response == correctAnswer) {
            element.innerHTML = `<span style="color:#1e9582;"><b>Correct!</b></span>`;
        }
        else{
            element.innerHTML = `<span style="color:#e5524b;"><b>Incorrect!</b> Try Again.`;
        }
    }

}

function displayScore(){
    score.innerHTML = `Score: ${scoreCount}/10`;
}

createCategoryList(categoryList, categoryNames, 6);
addCategoryEvent(categoryNames, categoryList, categories, quizList, quizTitle);

