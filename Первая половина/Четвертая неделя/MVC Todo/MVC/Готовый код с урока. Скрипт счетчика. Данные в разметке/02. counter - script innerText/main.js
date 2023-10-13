const input = document.getElementById('input');
const btnMinus = document.getElementById('btnMinus');
const btnReset = document.getElementById('btnReset');
const btnPlus = document.getElementById('btnPlus');

btnReset.addEventListener('click', function () {
	input.value = '0';
});

btnPlus.addEventListener('click', function () {
	input.value = parseInt(input.value) + 1;
});

btnMinus.addEventListener('click', function () {
	input.value = parseInt(input.value) - 1;
});
