import { search, searchType, levelHard } from "./main.js";

const articles = document.getElementById("articles")
const STEP_COLOR_FOR_LEVEL = 5.1;

// элементы из вёрстки
const levelHardToggle_DOM = document.getElementById("levelHardToggle");

// Создание цвета, в зависимости от сложности
function createColorLevelHard(levelHard) {
    if (levelHard <= 50) {
        return `rgb(${STEP_COLOR_FOR_LEVEL * levelHard}, 255, 0)`;
    } else {
        return `rgb(255, ${255 - STEP_COLOR_FOR_LEVEL * (levelHard - 50)}, 0)`;
    }
}

// Отсеивание по названиям (автора или статьи)
function articlesAfterSearch(articles) {
    let localArticles = [];
    if (searchType == "author") {
        articles.forEach(item => {
            if (item.author.indexOf(search) != -1) {
                localArticles.push(item)
            }
        })
    } else {
        articles.forEach(item => {
            if (item.title.indexOf(search) != -1) {
                localArticles.push(item)
            }
        })
    }
    return localArticles;
}

// Отсеивание по уровню сложности
function articlesAfterLevelHard(articles) {
    let localArticles = [];
    articles.forEach(item => {
        if (item.hardLevel <= levelHard) {
            localArticles.push(item);
        }
    });
    return localArticles;
}

// В зависимости от title подгружаем нужные статьи
switch (document.querySelector("title").textContent) {
    case "Статьи по html":
        var { ARTICLES } = await import("./themeHtml/articles.js");
        break;
    case "Статьи по css":
        var { ARTICLES } = await import("./themeCss/articles.js");
        break;
    case "Статьи по js":
        var { ARTICLES } = await import("./themeJs/articles.js");
        break;
    case "Статьи по библиотекам и Фреймворкам":
        var { ARTICLES } = await import("./themeLibrary/articles.js");
        break;
    case "Статьи про разное":
        var { ARTICLES } = await import("./themeOther/articles.js");
        break;
    default:
        break;
}

export function render() {
    articles.innerHTML = '';
    let localArticles = ARTICLES;
    localArticles = articlesAfterSearch(localArticles);
    if (levelHardToggle_DOM.checked) {
        localArticles = articlesAfterLevelHard(localArticles);
    }
    localArticles.forEach(element => {
        articles.insertAdjacentHTML("beforeend", `
        <a href="./pages/${element.directory}" class="articles_item" style="background-color: ${createColorLevelHard(element.hardLevel)}">
            <h5>${element.title}</h5>
            <p>${element.description}</p>
            <div class="line-info">
                <div class="info">
                    <p>Лайков: <span>${element.likes}</span></p>
                    <p>Сложность: <span>${element.hardLevel}</span></p>
                </div>
                <div class="author">
                    <p>${element.author}</p>
                    <p>${element.data}</p>
                </div>
            </div>
        </a>`)
    })
}
