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
/*
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
*/

// ----------------------------------------------
// Решение задачи на callback функциях
// ----------------------------------------------

function functionFirst(callback){
    setTimeout(function(){
        console.log("functionFirst");
        callback();
    }, 1500);
}

function functionSecond(callback) {
    setTimeout(function () {
        console.log("functionSecond");
        callback();
    }, 1000);
}

function functionThird(callback) {
    setTimeout(function () {
        console.log("functionThird");
        callback();
    }, 500);
}

console.log("Start!");

functionFirst(function(){
    console.log("Text from callback function");
    functionSecond(function(){
        console.log("Text from second callback");
        functionThird(function(){
            console.log("Callback in Third function");
        });
    });
});

console.log("Final");

// В консоли увидим корректный требуемый  вывод
// functionFirst
// functionSecond
// functionThird
