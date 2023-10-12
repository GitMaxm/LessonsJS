let counterModule = (function () {

    let counter = 0;

    function setCounterFunc(number) {
        if (Number.isInteger(number)) {

            if (number > 0) {
                counter = number;
            } else {
                alert("Число должно быть больше \"0\"!")
            }

        } else {
            alert("Введите число!")
        }
    }

    function getCounterFunc() {
        console.log(counter);
    }

    function increaseFunc() {
        counter = counter + 1;
    }

    function decreaseFunc() {
        counter = counter - 1;
    }

    return {
        increase: increaseFunc,
        decrease: decreaseFunc,
        getCounter: getCounterFunc,
        setCounter: setCounterFunc
    }

})();

counterModule.setCounter(8);
counterModule.increase();
counterModule.increase();
counterModule.increase();
counterModule.decrease();
counterModule.getCounter();