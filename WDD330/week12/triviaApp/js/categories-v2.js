// const parseJson = require("parse-json");

const categoriesContainer = document.getElementsByClassName('categoriesContainer');
const categories = document.getElementById('categoriesList');
const categoriesTitle = document.getElementById('categoriesTitle');
const categoryNames = [];
const categoryList = [];

const quizParent = document.querySelector('.quizBody');
const quizTitle = document.getElementById('quizTitle');
const quizList = document.getElementById('quizList');
const quizAnswer = document.getElementById('quizAnswer');
const score = document.getElementById('score');
const nextBtn = document.getElementById('nextBtn');

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

class Categories{
    constructor(){
    }

  async createCategoryList(list1, list2) {
    const categoryList = createRandomList(6, 9, 25);
    categoryList.forEach(async item => {
        let category = await fetchCategory(item, 10);
        let categoriesTitle = category[0]["category"];
        list1.push(category);
        list2.push(categoriesTitle);
        setCategory(categoriesTitle, categories);
        });
    }

    setCategory(item, parent) {
        let li = document.createElement('li');
        li.innerText = item;
        parent.appendChild(li);
    }

    addCategoryEvent(list1, list2, categoryUL, quizUL, title) {
    categoryUL.onclick = e => {
        if (e.target != categoryUL) {
            let targetText = e.target.innerText;
            let currentCategory = list2[list1.indexOf(targetText)]
            title.innerHTML = `Category= ${targetText}`;
            quiz = new Quiz();
            quiz.quizSetup(currentCategory, quizUL);
            hide(categoryUL.parentElement.parentElement);
            }
        }
    }

}

class Quiz{
    constructor(){
    }

    quizSetup(category, parent) {
        let i = 0;
        let currentQuestion = category[i]["question"];
        let correctAnswer = category[i]["correct_answer"];
        let allAnswers = (category[i]["incorrect_answers"].concat(correctAnswer)).sort();

        let questionTitle = document.createElement('h3');
        questionTitle.innerHTML = `* ${currentQuestion} *`;
        parent.parentElement.appendChild(questionTitle);
        createQuizList(parent, allAnswers)
        parent.parentElement.appendChild(parent);
        addAnswerEvent(quizList, correctAnswer, nextBtn);
    }
    createQuizList(parent, questions) {
        questions.forEach(question => {
            let li = document.createElement('li');
            li.innerHTML = question;
            parent.appendChild(li);

        });
    }

    addAnswerEvent(element, answer, btn) {
        let clickCount = 0;
        element.addEventListener('click', e => {
            if (e.target != element) {
                // const classNameArray = Array.from(element.childNodes).map(item => item.className);
                // if(!classNameArray.includes('selected')){
                //     e.target.classList.add('selected');

                // }
                if (e.target.innerHTML != answer) {
                    e.target.classList.add('incorrect');
                }
                clickCount++;
                console.log(clickCount);
                displayAnswer(e.target.innerHTML, quizAnswer, answer)
                btn.parentElement.style = 'animation: 1s fadeIn';
                show(btn.parentElement);
                show(element);
                show(btn);
            }
        }
        );
    }

    displayAnswer(response, element, correctAnswer) {
        if (response) {
            if (response == correctAnswer) {
                element.innerHTML = "<span><b>Correct!</b></span>";
            }
            else {
                element.innerHTML = `<span><b>Incorrect!</b>`;
            }
        }
    }

}



// async function createCategoryList(list1, list2) {
//     const categoryList = createRandomList(6, 9, 25);
//     categoryList.forEach(async item => {
//         let category = await fetchCategory(item, 10);
//         let categoriesTitle = category[0]["category"];
//         list1.push(category);
//         list2.push(categoriesTitle);
//         setCategory(categoriesTitle, categories);
//     });
// }

// function fetchCategory(category, amount) {
//     return fetch(`https://opentdb.com/api.php?amount=${amount}&type=multiple&category=${category}`)
//         .then(response => response.json())
//         .then(data => data.results)
//         .catch(error => console.log(error));
// }


// function setCategory(item, parent) {
//     let li = document.createElement('li');
//     li.innerText = item;
//     parent.appendChild(li);

// }


// function addCategoryEvent(list1, list2, categoryUL, quizUL, title){
//     categoryUL.onclick = e => {
//         if (e.target != categoryUL){
//             let targetText = e.target.innerText;
//             let currentCategory = list2[list1.indexOf(targetText)]
//             title.innerHTML = `Category= ${targetText}`;
//             quizSetup(currentCategory, quizUL);
//             hide(categoryUL.parentElement.parentElement);
//         }    
// }
// }

// function createQuizList(parent, questions){
//     questions.forEach(question => {
//         let li = document.createElement('li');
//         li.innerHTML = question;
//         parent.appendChild(li);

//     });
// }

// function quizSetup(category, parent){

//     let i = 0;
//     let currentQuestion = category[i]["question"];
//     let correctAnswer = category[i]["correct_answer"];
//     let allAnswers = (category[i]["incorrect_answers"].concat(correctAnswer)).sort();

//     let questionTitle = document.createElement('h3');
//     questionTitle.innerHTML = `* ${currentQuestion} *`;
//     parent.parentElement.appendChild(questionTitle);
//     createQuizList(parent, allAnswers)
//     parent.parentElement.appendChild(parent);
//     addAnswerEvent(quizList, correctAnswer, nextBtn);

// }

// function addAnswerEvent(element, answer, btn){
//     let clickCount = 0;
//     element.addEventListener('click', e => {
//         if (e.target != element){
//             // const classNameArray = Array.from(element.childNodes).map(item => item.className);
//             // if(!classNameArray.includes('selected')){
//             //     e.target.classList.add('selected');

//             // }
//             if(e.target.innerHTML != answer){
//                 e.target.classList.add('incorrect');
//             }
//             clickCount ++;
//             console.log(clickCount);
//             displayAnswer(e.target.innerHTML, quizAnswer, answer)
//             btn.parentElement.style = 'animation: 1s fadeIn';
//             show(btn.parentElement);
//             show(element);
//             show(btn);
//         }
//     }
//         );
// }

// function displayAnswer(response, element, correctAnswer){
//     if (response) {
//         if (response == correctAnswer) {
//             element.innerHTML = "<span><b>Correct!</b></span>";
//         }
//         else{
//             element.innerHTML = `<span><b>Incorrect!</b>`;
//         }
//     }

// }

let categoriesObject = new Categories;
categoriesObject.createCategoryList(categoryList, categoryNames, 6);
// console.log(categoryList);
// console.log(categoryNames);

categoriesObject.addCategoryEvent(categoryNames, categoryList, categories, quizList, quizTitle);