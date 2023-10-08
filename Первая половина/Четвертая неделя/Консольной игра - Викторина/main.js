let Question = function (numberQuestion, question, answer, trueAnswer) {
    this.numberQuestion = numberQuestion;
    this.question = question;
    this.answer = answer;
    this.trueAnswer = trueAnswer;
    this.checkAnswer = function (userAnswer) {
        return userAnswer === this.trueAnswer;
    }
}

let questionOne = new Question(
    1,
    "Какие основные типы данных существуют в JavaScript?",
    ["String", "Number", "Boolean"],
    1
);

let questionTwo = new Question(
    2,
    "Что такое замыкание (closure) в JavaScript?",
    ["Функция внутри функции",
        "Способ сохранения доступа к переменным из внешней функции",
        "Встроенный метод для замыкания дверей"],
    2
);

let questionThree = new Question(
    3,
    "Какие различия существуют между let, const и var в JavaScript?",
    ["let и const позволяют создавать переменные с блочной областью видимости, в отличие от var",
        "var может быть переопределена, а let и const - нет",
        "const создает неизменяемую переменную, а let и var - нет"],
    1
);

let questionFour = new Question(
    4,
    "Какое ключевое слово используется для объявления переменной с блочной областью видимости?",
    ["block",
        "scope",
        "let"],
    3
);



