let yers = prompt("Сколько вам лет?", "")

if (yers >= 18) {

    alert("Приветствуем на LifeSpot! " + new Date().toLocaleString());
}
else {
    alert("Наш сайт только для посещения совершеннолетними!")
    window.location.href = "http://www.google.com"
}