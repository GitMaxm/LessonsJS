/* *************************
Объекты. Часть 1.
************************* */

// var name = "Petr";
// var secondName = "Vasiliev";
// var birthYear = 1991;
// var job = "driver";
// var isMarried = true;

var petr = {
    name: "Петр",
    secondName: "Васильев",
    birthYear: 1991,
    job: "водитель",
    isMarried: true
};

console.log(petr.name);
console.log(petr.secondName);
console.log(petr["birthYear"]);
console.log(petr["job"]);


/* *************************
Объекты. Часть 2
************************* */

var petr = {
    name: "Петр",
    secondName: "Васильев",
    birthYear: 1991,
    job: "водитель",
    isMarried: true,
    sayHello: function () {
        console.log(`Всем привет!) Меня зовут ${this.name}.`);
    },
    changeJob: function (newJob) {
        this.job = newJob;
        console.log(`Моя новая профессия: ${this.job}`);
    },
    calculateAge: function (year) {
        var calcAge = year - this.birthYear; // 29
        this.age = calcAge;
    }
};

petr.sayHello();
console.log(petr.job);
petr.changeJob("Дизайнер");
console.log(petr.job);

console.log(petr.age);
petr.calculateAge(2020);
console.log(petr.age);
console.log(petr);


/* *************************
Объекты. Часть 3
************************* */

var petr = {
    name: "Петр",
    secondName: "Васильев",
    birthYear: 1991,
    job: "водитель",
    isMarried: true
};
console.log(petr);

// var mary = {};
var mary = new Object();
mary.name = "Мария";
mary.secondName = "Васильвева";
mary.birthYear = 1993;
console.log(mary);


/* *************************
Объекты. Часть 4. Конструкторы
************************* */
var petr = {
    name: "Петр",
    secondName: "Васильев",
    birthYear: 1991,
    job: "водитель",
    isMarried: true
};

function Person(name, secondName, birthYear, job, isMarried) {
    this.name = name;
    this.secondName = secondName;
    this.birthYear = birthYear;
    this.job = job;
    this.isMarried = isMarried;
    this.sayHello = function () {
        console.log(`Всем привет, меня зовут ${this.name}`);
    };
    this.age = 2020 - birthYear;
}

var vasiliy = new Person(
    "Василий",
    "Приходько",
    1985,
    "веб-разработчик",
    false
);

console.log(vasiliy);
vasiliy.sayHello();

var mary = new Person("Мария", "Игнатьева", 1990, "программист", true);
console.log(mary);
mary.sayHello();