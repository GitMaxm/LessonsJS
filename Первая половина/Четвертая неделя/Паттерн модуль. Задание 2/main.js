let calculatorModule = (function () {
    let a = 0;
    let b = 0;

    function setNumbers(numberA, numberB) {
        if (Number.isInteger(numberA, numberB)) {
            if (numberA >= 0 && numberB >= 0) {
                a = numberA;
                b = numberB;
            } else {
                alert("Число должно быть больше 0!")
            }
        } else {
            alert("Введите число!")
        }
    }

    function sum() {
        result = a + b;
    }

    function difference() {
        result = a - b;
    }

    function getResult() {
        console.log(result);
    }

    return {
        setNumbers: setNumbers,
        sum: sum,
        difference: difference,
        getResult: getResult
    }
})();

calculatorModule.setNumbers(0, 10);
calculatorModule.difference();
calculatorModule.getResult();