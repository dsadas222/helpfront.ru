import {ARTICLES_HTML_LENGTH} from './pages/themeHtml/articles.js'
import {ARTICLES_CSS_LENGTH} from './pages/themeCss/articles.js'
import {ARTICLES_JS_LENGTH} from './pages/themeJs/articles.js'
import {ARTICLES_LIBRARY_LENGTH} from './pages/themeLibrary/articles.js'
import {ARTICLES_OTHER_LENGTH} from './pages/themeOther/articles.js'

$('.mainSlider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    autoplaySpeed: 2000,
});

htmlArticles.innerHTML = ARTICLES_HTML_LENGTH;
cssArticles.innerHTML = ARTICLES_CSS_LENGTH;
jsArticles.innerHTML = ARTICLES_JS_LENGTH;
libraryArticles.innerHTML = ARTICLES_LIBRARY_LENGTH;
otherArticles.innerHTML = ARTICLES_OTHER_LENGTH;