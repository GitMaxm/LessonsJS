// ================================================================
// 2. Область видимости для let и const в отличие от var
// ================================================================

// ES5. function scope: function(){}

// function examResult(passedTest){
//     if (passedTest) {
//         var name = "Юрий";
//         var message = name + " Поздравляю! Вы успешно сдали экзамен!";
//         console.log(message); // +
//     }
//     console.log(message); // +
// }
// console.log(message); // Error:  message is not defined
// examResult(true);

// ES6. block scope: {}

// function examResult(passedTest){
//     if (passedTest) {
//         let name = "Юрий";
//         let message = name + " Поздравляю! Вы успешно сдали экзамен!";
//         console.log(message); // +
//     }
//     console.log(message); // Error:  message is not defined
// }

// function examResult(passedTest) {
//     let name, message;
//     if (passedTest) {
//         name = "Юрий";
//         message = name + " Поздравляю! Вы успешно сдали экзамен!";
//     }
//     console.log(message); // +
// }

// examResult(true);

// ------------- Пример с циклом и var -------------

// var i = 25;
// console.log(i); // 25

// for (var i = 0; i < 5; i++){
//     console.log(i);
// }

// console.log(i); // 5

// ------------- Пример с циклом и let -------------

// let n = 25;
// console.log(n); // 25

// for (let n = 0; n < 5; n++) {
//     console.log(n);
// }

// console.log(n);

// --------------- Hoisting для let и const - "не работает" ---------------

// function examResult(passedTest) {
//     if (passedTest) {
//         let name = "Юрий";
//         let message = name + " Поздравляю! Вы успешно сдали экзамен!";
//     }
//     console.log(message); // +
// }

// examResult(true);

/*
ВЫВОДЫ:
1) let и const имеют блочную область видимости в рамках фигурных скобок {}
2) При объявлении const должна быть сразу инициализирована значением.
3) По умолчанию используем const. https://habr.com/ru/post/482892/
4) Для let и const не работает hoisting.
*/
