(function () {

    let Question = function (question, optionsAnswer, trueAnswer) {
        this.question = question;
        this.optionsAnswer = optionsAnswer;
        this.trueAnswer = trueAnswer;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (let i = 0; i < this.optionsAnswer.length; i++) {
            console.log(`${i}) ${this.optionsAnswer[i]}`);
        }
    }

    Question.prototype.comparisonAnswer = function (userAnswer) {
        if (parseInt(userAnswer) === this.trueAnswer) {
            console.log("Правильный ответ!");
        } else {
            console.log("Вы ввели неправильный ответ!")
        }
    }

    let questionOne = new Question(
        "Какие основные типы данных существуют в JavaScript?",
        ["String", "Number", "Boolean"],
        0,
    );

    let questionTwo = new Question(
        "Что такое замыкание (closure) в JavaScript?",
        ["Функция внутри функции",
            "Способ сохранения доступа к переменным из внешней функции",
            "Встроенный метод для замыкания дверей"],
        1
    );

    let questionThree = new Question(
        "Какие различия существуют между let, const и var в JavaScript?",
        ["let и const позволяют создавать переменные с блочной областью видимости, в отличие от var",
            "var может быть переопределена, а let и const - нет",
            "const создает неизменяемую переменную, а let и var - нет"],
        0
    );

    let questionFour = new Question(
        "Какое ключевое слово используется для объявления переменной с блочной областью видимости?",
        ["block",
            "scope",
            "let"],
        2
    );


    const arrayQuestion = [questionOne, questionTwo, questionThree, questionFour];

    function nextAnswer() {
        const randomIndex = Math.floor(Math.random() * arrayQuestion.length);

        arrayQuestion[randomIndex].displayQuestion();
        let userAnswer = prompt("Введите номер верного ответа:");

        arrayQuestion[randomIndex].comparisonAnswer(userAnswer);

        if (userAnswer === 'exit' || userAnswer === null) {
            return console.log('Игра закончена!');
        }

        nextAnswer();
    }

    nextAnswer();

})();