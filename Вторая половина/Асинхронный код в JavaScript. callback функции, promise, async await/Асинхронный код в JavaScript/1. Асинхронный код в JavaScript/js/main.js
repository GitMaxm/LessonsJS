// ----------------------------------------------
// Синхронный и Асинхронный код в JavaScript
// ----------------------------------------------

// ----------------------------------------------
// Обозначение проблемы
// ----------------------------------------------
/*
// Есть три функции. Каждая из которых выполняет определенные действия.
// Выводит информацию в консоль.

function functionFirst() {
    console.log("functionFirst");
}

function functionSecond() {
    console.log("functionSecond");
}

function functionThird() {
    console.log("functionThird");
}

// Запустим все три функции по очереди

functionFirst();
functionSecond();
functionThird();

// В консоли увидим поочередный вывод
// functionFirst
// functionSecond
// functionThird
*/

// ----------------------------------------------
//  Добавим задержку
// ----------------------------------------------

/*
function functionFirst() {
    console.log("functionFirst");
}

function functionSecond(){
    setTimeout(function(){
        console.log("functionSecond");
    }, 1000);
}

function functionThird() {
    console.log("functionThird");
}

functionFirst();
functionSecond();
functionThird();

// В консоли увидим поочередный вывод
// functionFirst
// functionThird
// functionSecond
*/

// -------------- Ко всем функциям ---------------

function functionFirst() {
    setTimeout(function () {
        console.log("functionFirst");
    }, 1500);
}

function functionSecond() {
    setTimeout(function () {
        console.log("functionSecond");
    }, 1000);
}

function functionThird() {
    setTimeout(function () {
        console.log("functionThird");
    }, 500);
}

functionFirst();
functionSecond();
functionThird();

// В консоли увидим поочередный вывод
// functionThird
// functionSecond
// functionFirst

