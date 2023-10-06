/* *************************
Метод foreach для обхода массива
************************* */

var fruits = ["Banana", "Apple", "Peach", "Pineapple", "Cherry"];

fruits.forEach(function (item, index) {
    // console.log(item, index);
    console.log(`Элемент ${item} имеет индекс ${index}`);
});


/* *************************
Методы массивов. Часть 1
************************* */

var fruits = ["яблоко", "авокадо", "банан", "финик", "киви"];

console.log(fruits.length);
console.log(fruits[2]);
fruits[2] = "манго";
console.log(fruits[2]);

var newSize = fruits.push("лайм"); // Добаляет элемент в конец массива
console.log(fruits);
console.log(newSize);

var deletedItem = fruits.pop(); // Убирает последний элемент
console.log(fruits);
console.log(deletedItem);

var first = fruits.shift(); // Удаляет первый элемент и распечатка первого
console.log(fruits);
console.log(first);

newSize = fruits.unshift("виноград"); // Добаляет первый элемент и распечатка первого
console.log(fruits);
console.log(newSize);

/* *************************
Методы массивов. Часть 2
************************* */

var fruits = ["яблоко", "авокадо", "банан", "финик", "киви"];
console.log(fruits);

// Поиск номера элемента в массиве
var position = fruits.indexOf("банан");
console.log(position);

// Удаление элемента с определённым индексом
fruits.splice(1, 1);
console.log(fruits);

// Удаление нескольких элементов, начиная с определённого индекса
fruits.splice(1, 2);
console.log(fruits);


/* *************************
Методы массивов. Часть 3. Метод slice - копирование массива
************************* */

// var fruits = ["яблоко", "авокадо", "банан", "финик", "киви"];
// console.log("fruits", fruits);

// var copy = fruits;
// console.log("copy", copy);

// copy[0] = "вишня";
// console.log("copy", copy);
// console.log("fruits", fruits);

var fruits = ["яблоко", "авокадо", "банан", "финик", "киви"];
console.log("fruits", fruits);

var newArray = fruits.slice(2); //["банан", "финик", "киви"]
console.log("newArray", newArray);

var newArray2 = fruits.slice(1, 4);
console.log("newArray2", newArray2);

var newArray3 = fruits.slice();
console.log("newArray3", newArray3);