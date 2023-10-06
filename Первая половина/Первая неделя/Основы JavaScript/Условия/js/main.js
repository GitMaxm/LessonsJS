/* *************************
If / else выражения
************************* */

var markAge = 9;

if (markAge > 18) {
    console.log("Вам больше 18, вы можете посетить киносеанс");
} else if (markAge >= 14) {
    console.log("Вы можете посетить киносеанс с кем-то из взрослых родителей");
} else {
    console.log("Вам нет 14, вы НЕ можете посетить киносеанс");
}

var isFullAge = true;

if (isFullAge) {
    console.log("Вы можете водить авто");
} else {
    console.log("Вы НЕ можете водить авто");
}

var mark = "10";

if (mark !== 10) {
    console.log("Сравнение верно");
    console.log(mark);
} else {
    console.log("Сравнение не верно");
}



/* *************************
Булевая логика
************************* */

var num = 15;

if (num > 10 && num < 20) {
    console.log("Переменная num входит в промежуток от 10 до 20");
}

var num2 = 8;
if (num2 < 10 || num2 > 20) {
    console.log("Переменная num2 НЕ входит в промежуток от 10 до 20");
}


/* *************************
Тернарный оператор
************************* */

var number = 8;
// ( условие ) ? action true : action false;
number > 10 ? console.log("number > 10") : console.log("number < 10");

var markAge = 20;

// var isFullAge = markAge >= 18 ? "YES" : "NO";
var isFullAge = markAge >= 18 ? true : false;
console.log(isFullAge);


/* *************************
Выражение switch case
************************* */

var mark = 4;

switch (mark) {
    case 5:
        console.log("Отлично! Хорошая работа!");
        break;
    case 4:
        console.log("Хороший результат");
        break;
    case 3:
        console.log("Можно было и лучше");
        break;
    default:
        console.log("Такой оценки не существует");
}

var number = 100;

switch (true) {
    case number > 18 && number < 30:
        console.log("number > 18 и < 30");
        break;
    case number > 50 && number < 70:
        console.log("number > 50 и < 70");
        break;
    default:
        console.log("default value");
}