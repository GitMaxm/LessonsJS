/* *************************
Базовые операторы
************************* */

var yearJohn, yearBob;
var year = 2020;
var ageJohn = 26;
var ageBob = 37;
var bobName = "Bob";

// Математические операторы
yearJohn = year - ageJohn;
yearBob = year - ageBob;

console.log(yearJohn);
console.log(yearBob);

console.log(year + year);
console.log(year / 2);
console.log(year * 3);

// Логические операторы
var isJohnOlderThanBob = ageJohn > ageBob; // false
console.log(isJohnOlderThanBob);

// Оператор typeof
console.log(typeof "text");
console.log(typeof bobName);
console.log(typeof ageJohn);
console.log(typeof isJohnOlderThanBob);

var x;
console.log(typeof x);



/* *************************
Приоритет операторов
************************* */

var year = 2020;
var yearJohn = 1991;
var fullAge = 18;

// Множенственные операторы
var isFullAge = year - yearJohn >= fullAge;
console.log(isFullAge);

// Группировка
var ageJohn = year - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Множественное присвоение
var x, y;
x = y = (3 + 5) * 7 - 8; // 48
console.log(x, y);

// Итератор увеличения и уменьшения
var d = 10;
d++;
console.log(d);
d--;
console.log(d);

// Сокращенное присвоение и увеличение / уменьшение / деление / умножение
d += 5; // d = d + 5;
console.log(d);

d *= 3; // 45
console.log(d);
