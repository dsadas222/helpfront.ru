import {render} from './render.js'

// Строка для поиска по name или title
export let search = '';
// author || title
export let searchType = "author";
// better - по возрастанию; less - по убыванию
// likeBetter || likeLess || alphabetBetter || alphabetLess || dataBetter || dataLess
export let sort = "betterLikes";
// от 1 до 100
export let levelHard = 1;

// элементы из вёрстки
const searchInput_DOM = document.getElementById("searchInput");
const searchAuthor_DOM = document.getElementById("searchAuthor");
const searchTitle_DOM = document.getElementById("searchTitle");
const sort_DOM = document.getElementById("sort");
const levelHardToggle_DOM = document.getElementById("levelHardToggle");
const levelHardRange_DOM = document.getElementById("levelHardRange");
const levelHardSpan_DOM = document.getElementById("levelHardSpan");

// Первоначальная вставка данных
levelHardSpan_DOM.innerHTML = levelHard;
levelHardRange_DOM.value = levelHard;

// Отображение уровня сложности в span (#levelHardSpan) + запись в переменную
levelHardRange_DOM.addEventListener("input", ()=>{
    let count = levelHardRange_DOM.value
    levelHardSpan_DOM.innerHTML = count;
    levelHard = count;
    render()
})

// Переключатель сортировки по уровню сложности
levelHardToggle_DOM.addEventListener("click", ()=>{
    if (levelHardToggle_DOM.checked) {
        levelHardRange_DOM.removeAttribute("disabled", "disabled")
    } else {
        levelHardRange_DOM.setAttribute("disabled", "disabled")
    }
    render()
})

// Замена сортировки по типам (по убыванию, возрастанию...)
sort_DOM.addEventListener("change", ()=>{
    sort = sort_DOM.value;
})

// замена ключевого слова
searchInput_DOM.addEventListener("input", ()=>{
    search = searchInput_DOM.value;
    render()
})

// замена searchType
searchAuthor_DOM.addEventListener('click', ()=>{
    searchType = "author";
    render()
})
searchTitle_DOM.addEventListener('click', ()=>{
    searchType = "title";
    render()
})

render()
