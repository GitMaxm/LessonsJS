const btnMinus = document.getElementById('btnMinus');
const btnReset = document.getElementById('btnReset');
const btnPlus = document.getElementById('btnPlus');

updateCounter(counter);

btnPlus.addEventListener('click', () => {
	increase();
	updateCounter(counter);
});

btnMinus.addEventListener('click', () => {
	decrease();
	updateCounter(counter);
});

btnReset.addEventListener('click', () => {
	reset();
	updateCounter(counter);
});