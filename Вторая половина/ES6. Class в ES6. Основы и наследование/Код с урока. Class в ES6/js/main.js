// -------------------------------------------------------
// 1. ES6 Классы - Основы
// -------------------------------------------------------

//ES5
function PersonES5(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

PersonES5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var johnES5 = new PersonES5("John", 1992, "Designer");
console.log(johnES5);
johnES5.calculateAge();

//ES6
class PersonES6 {
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    // без запятых и без ";"

    calculateAge(){
        const age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting(){
        console.log("Hello! How are you?");
    }
}

PersonES6.greeting();

const johnES6 = new PersonES6("John", 1992, "Designer");
console.log(johnES6);
johnES6.calculateAge();

// Для объявления классов не работает hoisting
// Классы могут содержать только методы, но не свойства

