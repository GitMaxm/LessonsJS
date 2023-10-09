let Question = function (numberQuestion, question, optionsAnswer, trueAnswer) {
    this.numberQuestion = numberQuestion;
    this.question = question;
    this.optionsAnswer = optionsAnswer;
    this.trueAnswer = trueAnswer;
    // this.checkAnswer = function (userAnswer) {
    //     if (userAnswer === this.trueAnswer) {
    //         point++;
    //         console.log("Ваши очки: " + point);
    //     } else {
    //         console.log("Вы ввели неправильный ответ");
    //     }
    // }
}

let questionOne = new Question(
    1,
    "Какие основные типы данных существуют в JavaScript?",
    ["String", "Number", "Boolean"],
    0,
);

let questionTwo = new Question(
    2,
    "Что такое замыкание (closure) в JavaScript?",
    ["Функция внутри функции",
        "Способ сохранения доступа к переменным из внешней функции",
        "Встроенный метод для замыкания дверей"],
    1
);

let questionThree = new Question(
    3,
    "Какие различия существуют между let, const и var в JavaScript?",
    ["let и const позволяют создавать переменные с блочной областью видимости, в отличие от var",
        "var может быть переопределена, а let и const - нет",
        "const создает неизменяемую переменную, а let и var - нет"],
    0
);

let questionFour = new Question(
    4,
    "Какое ключевое слово используется для объявления переменной с блочной областью видимости?",
    ["block",
        "scope",
        "let"],
    2
);

(function () {
    let point = 0;

    console.log(questionThree.question);

    questionThree.optionsAnswer.forEach(function (item, index) {
        console.log(`${index}) ${item}`);
    });

    let userAnswer = prompt("Введите номер верного ответа:");

    if (userAnswer !== null) {

        if (userAnswer === questionThree.trueAnswer) {

            if (userAnswer >= 0 && userAnswer <= 2) {
                point++;
                console.log("Ваши очки: " + point);
            } else {
                alert("Число должно быть больше от 0 до 2!")
            }

        } else {
            alert("Вы ввели неправильный ответ!")
        }

    } else {
        console.log("Пользователь нажал Отмена. Операция отменена.");
        return;
    }

})();