/* *************************
Hoisting. Всплытие (поднятие) переменных
**************************** */

// Example 1

var a = 10;
console.log(a);

// Example 2

console.log(a); // undefined
console.log(b); // Not exists
var a = 10;

// Example 3 function declaration

function sum(a, b) {
    console.log(a + b);
}
sum(10, 15);

// Example 4 function declaration

sum(10, 15);
function sum(a, b) {
    console.log(a + b);
}

// Example 5 function expression

var sum = function (a, b) {
    console.log(a + b);
};
sum(10, 15);

// Example 6 function expression

sum(10, 15);
sum;
otherName;
var sum = function (a, b) {
    console.log(a + b);
};

// Example 7 function expression

var sum = function () {
    console.log(a + b);
};

sum();

var a = 10;
var b = 5;