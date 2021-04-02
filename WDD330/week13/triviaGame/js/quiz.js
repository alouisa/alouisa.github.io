import { show, hide} from './utilities.js'

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


export default class Quiz {
    constructor(categoryData, currentCategory) {
        this.categoryData = categoryData;
        this.currentCategory = currentCategory;
        this.title = quizTitle;
        this.quizUl = quizList;
        this.question = quizQuestion;
        this.answer = quizAnswer;

        this.quizList = quizList;
        this.nextBtn = nextBtn;
        this.continueBtn = continueBtn;
        this.index = 0;

        this.score = score;
        this.scoreCount = 0;
    }

    setup(i = 0) {

        let currentQuestion = this.categoryData[i]["question"];
        let correctAnswer = this.categoryData[i]["correct_answer"];

        let allAnswers = (this.categoryData[i]["incorrect_answers"].concat(correctAnswer)).sort();
        quizQuestion.innerHTML = `* ${currentQuestion} *`;
        this.quizList.innerHTML = '';
        this.createQuizList(quizList, allAnswers)
        quizList.parentElement.appendChild(quizList);
        this.addAnswerEvent(quizList, correctAnswer, this.nextBtn);
    }

    createQuizList(parent, questions) {
        questions.forEach(question => {
            let li = document.createElement('li');
            li.innerHTML = question;
            parent.appendChild(li);

        });
    }

    addAnswerEvent(element, answer, btn) {
        element.addEventListener('click', e => {
            // clickCount += 1;
            e.target.classList.remove('incorrect');
            e.target.classList.remove('correct');
            if (e.target != element) {
                if (e.target.innerText != answer) {
                    e.target.classList.add('incorrect');
                    this.displayScore();
                }
                else {
                    e.target.classList.add('correct');
                    // if(clickCount == 1){
                    this.scoreCount += 1;
                    this.displayScore();
                    // }
                }

                this.displayAnswer(e.target.innerHTML, quizAnswer, answer)
                show(btn.parentElement);
                show(element);
                // console.log(clickCount);
            }
        }
        );
    }

    displayAnswer(response, element, correctAnswer) {
        if (response) {
            if (response == correctAnswer) {
                element.innerHTML = `<span style="color:#1e9582;"><b>Correct!</b></span>`;
            }
            else {
                element.innerHTML = `<span style="color:#e5524b;"><b>Incorrect!</b> Try Again.`;
            }
        }

    }

    displayScore() {
        this.score.innerHTML = `Score: ${this.scoreCount}/10`;
    }

    nextEvent() {
        if (this.index < 10) {
            show(this.nextBtn);
            // clickCount = 0;
        }

        this.nextBtn.addEventListener('click', () => {
            this.answer.innerHTML = '';
            this.index += 1;
            if (this.index < 10) {
                this.setup(this.index);;
            }
            else {
                hide(this.nextBtn);
                show(this.continueBtn);
            }
        });
    }
}
