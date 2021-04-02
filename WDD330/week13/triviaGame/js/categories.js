import Quiz from './quiz.js';
import { show, hide, createRandomList } from './utilities.js'

const categoriesContainer = document.getElementsByClassName('categoriesContainer');
const categories = document.getElementById('categoriesList');
const categoriesTitle = document.getElementById('categoriesTitle');


export default class Categories {
    constructor() {
        this.categoriesContainer = categoriesContainer;
        this.categoryUL = categories;
        this.categoryNames = [];
        this.categoryList = [];
        this.currentCategory = '';
        
    }

    async createCategoryList() {
    const randomList = createRandomList(6, 9, 25);
        randomList.forEach(async item => {
            let category = await this.fetchCategory(item, 10);
            let categoryTitle = `${category[0]["category"]}`;
            this.categoryList.push(category);
            this.categoryNames.push(categoryTitle);
            this.setCategory(categoryTitle, this.categoryUL);
        });
    }

    addCategoryEvent() {
        this.categoryUL.onclick = e => {
            if (e.target != this.categoryUL) {
                let targetText = e.target.innerText;
                let index = this.categoryNames.indexOf(targetText);
                this.currentCategory = this.categoryList[index];
                
                hide(this.categoryUL.parentElement.parentElement);
                
                let quiz = new Quiz(this.currentCategory, targetText);
                quiz.title.innerHTML = `${targetText}`;
                quiz.setup();
                quiz.nextEvent()
                
            }

        } 
    }

    fetchCategory(category, amount) {
        return fetch(`https://opentdb.com/api.php?amount=${amount}&type=multiple&category=${category}`)
            .then(response => response.json())
            .then(data => data.results)
            .catch(error => console.log(error));
    }

    setCategory(item, parent) {
        let li = document.createElement('li');
        li.innerText = item;
        parent.appendChild(li);

    }

}

