/* *************************
Scope. Область видимости
**************************** */

var a = 10;

function add5(num) {
    var b = 5;
    console.log(num + b); // 8

    function add10(num2) {
        console.log(num2 + a); // 13
    }
    add10(3);

    function add15(num3) {
        var c = 15;
        console.log(num3 + c); // 18
    }
    add15(3);
}

add5(3);