// ----------------------------------------------
//  Копирование несложных структур с помощью JSON
// ----------------------------------------------
/*
const fruitsArray1 = ["apple", "banana", "plum", "cherry", "grape"];
const fruitsArray2 = fruitsArray1; // Ссылка на то-же самый массив

fruitsArray1.push("peach"); // Добавляем в 1-й массив
console.log(fruitsArray2); // Распечатываем 2-й массив и видим последний элемент "peach"

console.log(fruitsArray1 === fruitsArray2);
*/

// ----------------------------------------------
//  Скопируем массив через JSON
// ----------------------------------------------
/*
const fruitsArray1 = ["apple", "banana", "plum", "cherry", "grape"];
const fruitsArray2 = JSON.parse(JSON.stringify(fruitsArray1));

// fruitsArray1.push("peach");
console.log(fruitsArray1);
console.log(fruitsArray2);

console.log(fruitsArray1 === fruitsArray2);
*/

// ----------------------------------------------
//  Скопируем объект через JSON
// ----------------------------------------------
/*
const person = {
    name: "John",
    age: 26,
    profesion: "Programmer",
    isMarried: true
}

const person2 = JSON.parse(JSON.stringify(person));

console.log(person === person2); // false
*/
// ----------------------------------------------
//  Скопируем объект с вложенными объектами и массивами через JSON
// ----------------------------------------------
/*
const personNested = {
    name: "John",
    age: 26,
    profesion: "Programmer",
    isMarried: true,
    skills: ["JavaScript", "PHP", "HTML", "CSS"],
    projects: [
        {
            projectName: "Online Cinema",
            year: 2020,
            company: "Yandex"
        },
        {
            projectName: "Pizza Shop",
            year: 2020,
            company: "Dodo pizza"
        }
    ]
}

const personNested2 = JSON.parse(JSON.stringify(personNested))

console.log(personNested);
console.log(personNested2);


console.log(personNested === personNested2);
console.log(personNested.skills === personNested2.skills); // Массивы не равны
console.log(personNested.projects[0] === personNested2.projects[0]); // Объекты в массиве в объекте - не равны
*/

// ----------------------------------------------
//  JSON не кодирует методы и функции
// ----------------------------------------------
/*
const personWithMethod = {
    name: "John",
    age: 26,
    isMarried: true,
    sayHello: function () {
        console.log("Hello!");
    }
}

const jsonFromObj = JSON.stringify(personWithMethod);
console.log(jsonFromObj);
*/

// ----------------------------------------------
//  JSON не кодирует рекурсивные структуры
// ----------------------------------------------
/*
const obj = {
    a: "Some value"
}

obj.b = obj;

console.log(obj);
JSON.stringify(obj)
*/
// ----------------------------------------------
//  Выводы
// ----------------------------------------------

// JSON можно использовать для глубокого клонирования массивов и объектов
// JSON не кодирует информацию о функциях и методах, просто пропуская их
// JSON не кодирует рекурсивные структуры данных