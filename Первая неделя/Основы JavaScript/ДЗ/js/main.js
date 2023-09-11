/* 
let heightMark = 182;
let weightMark = 81;

let heightBob = 190;
let weightBob = 70;

let massMark = weightMark / (heightMark * heightMark);
let massBob = weightBob / (heightBob * heightBob);

let isMarkMoreMassThanBob = massMark > massBob;

console.log("ИМТ у Марка больше чем Боба? " + isMarkMoreMassThanBob); */


let teamMarkRoundOne = 110;
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
}