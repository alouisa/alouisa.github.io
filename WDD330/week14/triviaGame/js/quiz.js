import { show, hide} from './utilities.js'

export default class Quiz {
    constructor(categoryData, currentCategory) {
        this.categoryData = categoryData;
        this.currentCategory = currentCategory;
        
        this.title = document.getElementById('quizTitle');
        this.question = document.getElementById('quizQuestion');
        this.answerDisplayBox = document.getElementById('answerDisplayBox');
        this.correctAnswer = '';

        this.quizList = document.getElementById('quizList');
        this.nextBtn = document.getElementById('nextBtn');;
        this.continueBtn = document.getElementById('continueBtn');

        this.score = document.getElementById('score');
        this.finalScore = document.getElementById('finalScore');
        this.index = 0;
        this.scoreCount = 0;
        this.attempts = 0;
    }

    setup(i = 0) {
        this.attempts = 0;
        let currentQuestion = this.categoryData[i]["question"];
        this.correctAnswer = this.categoryData[i]["correct_answer"];
        let allAnswers = (this.categoryData[i]["incorrect_answers"].concat(this.correctAnswer)).sort();
        
        quizQuestion.innerHTML = `* ${currentQuestion} *`;

        this.quizList.innerHTML = '';
        this.createQuizList(quizList, allAnswers)
        this.quizList.parentElement.appendChild(this.quizList);
    }

    createQuizList(parent, questions) {
        questions.forEach(question => {
            let li = document.createElement('li');
            li.innerHTML = question;
            parent.appendChild(li);

        });
    }

    checkAnswer(element, btn) {
        element.addEventListener('click', e => {
            this.attempts += 1;

            if (e.target != element) {
                if (e.target.innerText != this.correctAnswer) {
                    e.target.classList.add('incorrect');
                    this.displayScore(this.score);
                }
                else {
                    e.target.classList.add('correct');

                    if(this.attempts == 1){
                        this.scoreCount += 1;
                    }
    
                    this.displayScore(this.score);
                }

                this.displayAnswer(e.target.innerHTML, this.answerDisplayBox);
                show(btn.parentElement);
                show(element);
            }
        }
        );
    }

    displayAnswer(response, element) {
        if (response) {
            if (response == this.correctAnswer) {
                element.innerHTML = `<span style="color:#1e9582;"><b>Correct!</b></span>`;
            }
            else {
                element.innerHTML = `<span style="color:#e5524b;"><b>Incorrect!</b> Try Again.`;
            }
        }

    }

    displayScore(element) {
        element.innerHTML = `Score: ${this.scoreCount}/10`;
    }

    next() {

        if (this.index < 9) {
            show(this.nextBtn);

        }

        this.nextBtn.addEventListener('click', () => {
            this.clearClasses();
            this.answerDisplayBox.innerHTML = '';
            this.index += 1;
            if (this.index < 10) {
                this.setup(this.index);
            }
            else {
                hide(this.question.parentElement);
                hide(this.nextBtn);
                hide(this.score);
                this.displayScore(this.finalScore);
                show(this.finalScore);
                show(this.continueBtn);

            }
        });
    }

    clearClasses(){
        Array.from(this.quizList.childNodes).forEach(li => {
            li.classList.remove('incorrect');
            li.classList.remove('correct')
        });
    }
}
