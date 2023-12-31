// ================================================================
// 3. Стрелочные функции и ключевое слово this
// ================================================================

/* ------------------------- ES5 ----------------------------------*/
// var objectOne = {
//     objectName: "Object One",
//     sayHi: function(){
//         console.log("-----------------");
//         console.log(this);
//         console.log(this.objectName); // Object One
//         console.log("-----------------");

//         function printToConsole(){
//             console.log("-----------------");
//             console.log(this);
//             console.log(this.objectName);
//             console.log("-----------------");
//         }

//         printToConsole();


//     }
// }

// objectOne.sayHi();

/* ------------------------- ES6 ----------------------------------*/

/*
var objectOne = {
    objectName: "Object One",
    sayHi: function () {
        console.log("-----------------");
        console.log(this);
        console.log(this.objectName); // Object One
        console.log("-----------------");

        const printToConsole = () => {
            console.log("-----------------");
            console.log(this);
            console.log(this.objectName); // Object One
            console.log("-----------------");
        }

        printToConsole();

    }
}

objectOne.sayHi();
*/

/*
Стрелочные функции особенные:
у них нет своего «собственного» this. Если мы используем this внутри стрелочной функции, то его значение берётся из внешней «нормальной» функции.

Внутри стрелочной функции нет своего this.
this в стрелочной функции - делит this с окружением первой нормальной родительской функции.

1. Идем вверх до первой нормальной функции (метода или объекта)
2. Смотрим в каком окружении находится эта функция (метод или объект)
3. this "ссылается" на это окружение

*/

/* --------------------------- Пример 1 ----------------------------- */

// var objectOne = {
//     objectName: "Object One",
//     sayHi: () => {
//         console.log(this); // Window
//         console.log(this.objectName); // undefined
//     }
// }

// objectOne.sayHi();


/* --------------------------- Пример 2 ----------------------------- */
/*
var objectOuter = {
    objectName: "Outer object",
    someAction: function(){

        console.log(this); // objectOuter

        var objectOne = {
            objectName: "Object One",
            sayHi: () => {
                console.log(this); // objectOuter
                console.log(this.objectName); // "Outer object"
            }
        }
        objectOne.sayHi();

    }
}
objectOuter.someAction();
*/
/*
1. Идем вверх до первой нормальной функции (метода или объекта)
2. Смотрим в каком окружении находится эта функция (метод или объект)
3. this "ссылается" на это окружение
*/

/* ------------------------- Пример из реальной жизни --------------------------- */

// Проблема. this внутри функции callback ссылается на window,
// а не на объект который нам нужен

// var obj = {
//     objName: "Object with array",
//     numbers: [10, 15, 25, 05],
//     value: 100,
//     increaseArrayOnValue: function () {
//         this.numbers.forEach(function (item) {
//             console.log(this); // Window
//             console.log(item); // 15
//             console.log(this.value); // undefined
//             console.log(item + this.value); // NaN
//         })
//     }

// }
// obj.increaseArrayOnValue();


/* -------------------- 1-й вариант решения: Сохраняем this в that --------------- */

// var obj = {
//     objName: "Object with array",
//     numbers: [10, 15, 25, 05],
//     value: 100,
//     increaseArrayOnValue: function(){
//         var that = this;
//         this.numbers.forEach(function(item){
//             console.log(that);
//             console.log(item); // 15
//             console.log(that.value); // undefined
//             console.log(item + that.value); // NaN
//         })
//     }

// }
// obj.increaseArrayOnValue();

/* ------------- 2-й вариант решения: Привязка контекста через bind() ----------- */

// var obj = {
//     objName: "Object with array",
//     numbers: [10, 15, 25, 05],
//     value: 100,
//     increaseArrayOnValue: function () {

//         this.numbers.forEach(function (item) {
//             console.log(this); // Window
//             console.log(item); // 15
//             console.log(this.value); // undefined
//             console.log(item + this.value); // NaN
//         }.bind(this))

//     }

// }
// obj.increaseArrayOnValue();

/* ------------- 3-й вариант решения: Привязка контекста через bind() ----------- */
/*
var obj = {
    objName: "Object with array",
    numbers: [10, 15, 25, 05],
    value: 100,
    increaseArrayOnValue: function () {
        this.numbers.forEach((item)=>{
            console.log(this); // obj
            console.log(item); // 15
            console.log(this.value); // 100
            console.log(item + this.value); // 115
        })
    }
}
obj.increaseArrayOnValue();
*/
/*
Выводы:
1) Синтаксис стрелочной функции:
() => {}

2) Сокращенный синтаксис стрелочной функции:
() => return value or expression;

3) Стрелочная функция не имеет своего this, а заимствует его из окружения первой нормальной функции, метода или объекта в котором находится.

4) Алгоритм поиска определения this для стрелочной функции:

1. Идем вверх до первой нормальной функции (метода или объекта)
2. Смотрим в каком окружении находится эта функция (метод или объект)
3. this "ссылается" на это окружение

*/
