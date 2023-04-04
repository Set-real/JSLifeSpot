/*
* Сессия теперь создается в общей области видимости.
* Будет "захватываться" тремя функциями
* 
* */
let session = new Map();
/*
* Сохранение данных сессии сразу при заходе пользователя на страницу
* 
* */
function handleSession() {

    // Сохраним время начала сессии
    session.set('startDate', new Date().toLocaleString());

    // Сохраним UserAgent
    session.set('userAgent', window.navigator.userAgent)
}
/*
 * Проверяем возраст пользователя
 * 
 * */
function chackAge() {

    session.set('age', prompt("Пожалуйства введите ваш возраст"));

    if (session.set('age') >= 18) {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}
/*
* Вывод данных сессии в консоль
* 
* */
let sessionLog = function logSession() {
    for (let result of session) {
        console.log(result)
    }
}
/*
* Функция для фильтрации контента
* Будет вызываться благодаря атрибуту oninput на index.html
*
* */
function filterContent() { // в этот параметр будет передана ФУНКЦИЯ парсинга пользовательского ввода

    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].querySelector(".video-title").innerText;
        if (!videoText.toLowerCase().includes(inputParseFunction() /*Переданная функция вызвана*/.toLowerCase())) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}
const sotialNetwork = setTimeout(function () {
    alert("Подпишитесь на наши социальные сети!")
}, 2000);