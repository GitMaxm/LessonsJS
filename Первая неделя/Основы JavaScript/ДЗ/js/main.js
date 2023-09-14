/*
let heightMark = 182;
let weightMark = 81;

let heightBob = 190;
let weightBob = 70;

let massMark = weightMark / (heightMark * heightMark);
let massBob = weightBob / (heightBob * heightBob);

let isMarkMoreMassThanBob = massMark > massBob;

console.log("ИМТ у Марка больше чем Боба? " + isMarkMoreMassThanBob); */





/*let teamMarkRoundOne = 110;
let teamMarkRoundTwo = 120;
let teamMarkRoundThree = 130;

let teamPolRoundOne = 90;
let teamPolRoundTwo = 130;
let teamPolRoundThree = 135;

let teamMerryRoundOne = 80;
let teamMerryRoundTwo = 130;
let teamMerryRoundThree = 150;

let teamMarkTotal = teamMarkRoundOne + teamMarkRoundTwo + teamMarkRoundThree;
let teamPolTotal = teamPolRoundOne + teamPolRoundTwo + teamPolRoundThree;

if (teamMarkTotal > teamPolTotal) {
    console.log("Команда Марка победила, она набрала: " + teamMarkTotal + " очков");
} else if (teamMarkTotal < teamPolTotal) {
    console.log("Команда Пола победила, она набрала: " + teamPolTotal + "очков");
} else {
    console.log("Ничья! Обе команды набрали одинаково очков");
}

let teamMerryTotal = teamMerryRoundOne + teamMerryRoundTwo + teamMerryRoundThree;

if (teamMarkTotal > teamMerryTotal && teamMarkTotal > teamPolTotal) {
    console.log("Команда Марка победила, она набрала: " + teamMarkTotal + " очков");
} else if (teamPolTotal > teamMerryTotal && teamPolTotal > teamMarkTotal) {
    console.log("Команда Пола победила, она набрала: " + teamPolTotal + "очков");
} else if (teamMerryTotal > teamMarkTotal && teamMerryTotal > teamPolTotal) {
    console.log("Команда Мэри победила, она набрала: " + teamMerryTotal + "очков");
} else if (teamMarkTotal === teamMerryTotal && teamMarkTotal > teamPolTotal) {
    console.log("Команда Марка и Мерри набрала одинакого очков");
} else if (teamMarkTotal > teamMerryTotal && teamMarkTotal === teamPolTotal) {
    console.log("Команда Марка и Полла набрала одинакого очков");
} else if (teamPolTotal === teamMerryTotal && teamPolTotal > teamMarkTotal) {
    console.log("Команда Мерри и Полла набрала одинакого очков");
} else {
    console.log("Ничья! Все команды набрали одинаково очков");
}*/



/*
function calculateTips(check) {
    if (check <= 1000) {
        console.log(`При чеке в ${check} рублей, чаевые составят ${check * 0.2}`);
    } else if (check > 1000 && check <= 3000) {
        console.log(`При чеке в ${check} рублей, чаевые составят ${check * 0.15}`);
    } else {
        console.log(`При чеке в ${check} рублей, чаевые составят ${check * 0.1}`);
    }
}
calculateTips(1000);
calculateTips(2000);
calculateTips(5000);
*/


// let books = ["Фантастика", "Детектив", "Приключения", "Роман", "Триллер"];
// for (let i = 0; i < books.length; i++) {
//     console.log(`Индекс [${i}] с содержимым "${books[i]}"`);
// }
// books.forEach(function (item, index) {
//     console.log(`Элемент массива "${item}" с индексом [${index}]`);
// })


let array1 = ["яблоко", "ананас", "банан", "груша", "киви"];
array1.unshift("Картошка");
console.log(array1);

array1.push("Помидор", "Огурец");
console.log(array1);

let array2 = array1.slice(1, 6);
console.log(array2);