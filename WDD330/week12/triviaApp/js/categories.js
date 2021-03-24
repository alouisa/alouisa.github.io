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
const score = document.getElementById('score');
const nextBtn = document.getElementById('nextBtn');
const continueBtn = document.getElementById('continueBtn');

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
            title.innerHTML = `Category= ${targetText}`;
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
    let allAnswers = (category[i]["incorrect_answers"].concat(correctAnswer)).sort();
    quizQuestion.innerHTML = `* ${currentQuestion} *`;
    parent.innerHTML = '';
    createQuizList(parent, allAnswers)
    parent.parentElement.appendChild(parent);
    addAnswerEvent(quizList, correctAnswer, nextBtn);
    i++; 
    if (i < 10){
        show(nextBtn);
        nextBtn.addEventListener('click', () => {
           let children = Array.from(quizList.childNodes);
           console.log(children);
            quizAnswer.innerHTML = '';
            quizSetup(currentCategory, quizList, i);
        });
    }
    else{
        hide(nextBtn);
        continueBtn.classList.remove('hide');
        // createCategoryList(categoryList, categoryNames, 6);
        // continueBtn.addEventListener('click', addCategoryEvent(categoryNames, categoryList, categories, quizList, quizTitle));
    }
}

function addAnswerEvent(element, answer, btn){
    let clickCount = 0;
    element.addEventListener('click', e => {
        e.target.classList.remove('incorrect');
        e.target.classList.remove('correct');
        if (e.target != element){
            if(e.target.innerHTML != answer){
                e.target.classList.add('incorrect');
            }
            else{
                e.target.classList.add('correct');
            }
            clickCount ++;
            console.log(clickCount);
            displayAnswer(e.target.innerHTML, quizAnswer, answer)
            btn.parentElement.style = 'animation: 1s fadeIn';
            show(btn.parentElement);
            show(element);
        }
    }
        );
}

function displayAnswer(response, element, correctAnswer){
    if (response) {
        if (response == correctAnswer) {
            element.innerHTML = `<span style="color:green;"><b>Correct!</b></span>`;
        }
        else{
            element.innerHTML = `<span style="color:red;"><b>Incorrect!</b> Try Again.`;
        }
    }

}

createCategoryList(categoryList, categoryNames, 6);
addCategoryEvent(categoryNames, categoryList, categories, quizList, quizTitle);