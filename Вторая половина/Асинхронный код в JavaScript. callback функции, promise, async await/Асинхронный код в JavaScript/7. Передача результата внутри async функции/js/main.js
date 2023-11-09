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
/*
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
*/
// В консоли увидим корректный требуемый  вывод
// functionFirst
// functionSecond
// functionThird

// ----------------------------------------------
// Знакомство с промисами
// ----------------------------------------------

// Промис это объект, обертка для функции с асинхронным кодом
// Данный объект выполняет переданный в него код,
// и после выполнения запускает нужную функцию,
// при успехе - что делать дальше если все сработало как надо
// или при ошибке - что делать в случае ошибки

// Пример 1. Создаем объект с промисом
/*
const functionFirstObject = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("functionFirstObject");
        const result = true;
        if (result) {
            resolve(150);
        } else {
            reject(50);
        }
    }, 1500)
}).then(function(arg1){
    console.log(arg1);
    console.log("Success!! Second step.");
}).catch(function(arg1){
    console.log(arg1);
    console.log("Error function");
});
*/

// Пример 2. Функция которая возвращает промис
/*
function functionFirst(){
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log("functionFirst");
            const result = true;
            if (result) {
                resolve(150);
            } else {
                reject(50);
            }
        }, 1500)
    });
}

functionFirst().then(function(){
    console.log("Next Function");
}).catch(function () {
    console.log("Some Error");
})
*/

// ----------------------------------------------
// Решение задачи на промисах
// ----------------------------------------------
/*
function functionFirst(){
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log("functionFirst");
            resolve();
        }, 1500);
    });
}

function functionSecond(){
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("functionSecond");
            resolve();
        }, 1000);
    });
}

function functionThird() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("functionThird");
            resolve();
        }, 500);
    });
}

console.log("Start");

functionFirst().then(function(){
    return functionSecond();
}).then(function(){
    return functionThird();
}).then(function(){
    console.log("Next code");
})

console.log("Final");
*/

// ----------------------------------------------
// Решение задачи на промисах - Обработка ошибок
// ----------------------------------------------
/*
function functionFirst() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("functionFirst");
            // resolve();
            const result = true;
            if (result) {
                resolve();
            } else {
                reject("First");
            }
        }, 1500);
    });
}

function functionSecond() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("functionSecond");
            const result = false;
            if (result) {
                resolve();
            } else {
                reject("Second");
            }
        }, 1000);
    });
}

function functionThird() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("functionThird");
            const result = true;
            if (result) {
                resolve();
            } else {
                reject("Third");
            }
        }, 500);
    });
}

console.log("Start");

functionFirst().then(function () {
    return functionSecond();
}).then(function () {
    return functionThird();
}).then(function () {
    console.log("Next code");
}).catch(function (name) {
    console.log("Error!", name);
})

console.log("Final");
*/

// ----------------------------------------------
// Решение задачи на async await функциях
// ----------------------------------------------
/*
function functionFirst() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("functionFirst");
            resolve();
        }, 1500);
    });
}

function functionSecond() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("functionSecond");
            resolve();
        }, 1000);
    });
}

function functionThird() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("functionThird");
            resolve();
        }, 500);
    });
}

console.log("Start");

async function codeRun(){
    await functionFirst();
    await functionSecond();
    await functionThird();

    return "some value";
}

codeRun().then(function(arg){
    console.log("Next code!", arg);
})

console.log("Final");
*/
// ----------------------------------------------
// Передача результата внутри async await функций
// ----------------------------------------------

function functionFirst() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("functionFirst");
            const result = 100;
            resolve(result);
        }, 1500);
    });
}

function functionSecond(value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("functionSecond");
            const result = value + 100;
            resolve(result);
        }, 1000);
    });
}

function functionThird(value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("functionThird");
            const result = value + 100;
            resolve(result);
        }, 500);
    });
}

async function codeRun() {
    const res1 = await functionFirst();
    const res2 = await functionSecond(res1);
    const res3 = await functionThird(res2);
    console.log(res3);

    return "some value";
}

codeRun().then(function (arg) {
    console.log("Next code!", arg);
})

