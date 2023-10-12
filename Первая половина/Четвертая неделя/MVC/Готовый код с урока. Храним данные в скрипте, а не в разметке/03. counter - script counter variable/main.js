const input = document.getElementById('input');
const btnMinus = document.getElementById('btnMinus');
const btnReset = document.getElementById('btnReset');
const btnPlus = document.getElementById('btnPlus');

let counter = 0;
input.value = counter;

btnReset.addEventListener('click', function () {
	counter = 0;
    input.value = counter;
});

btnPlus.addEventListener('click', function () {
	++counter;
    input.value = counter
});

btnMinus.addEventListener('click', function () {
	--counter;
    input.value = counter;
});
