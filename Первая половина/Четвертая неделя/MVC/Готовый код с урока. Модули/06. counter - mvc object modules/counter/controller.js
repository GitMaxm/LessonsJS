import model from './model.js';
import view from './view.js';

const btnMinus = document.getElementById('btnMinus');
const btnReset = document.getElementById('btnReset');
const btnPlus = document.getElementById('btnPlus');

btnPlus.addEventListener('click', () => {
	model.increase();
	view.updateCounter(model.counter);
});

btnMinus.addEventListener('click', () => {
	model.decrease();
	view.updateCounter(model.counter);
});

btnReset.addEventListener('click', () => {
	model.reset();
	view.updateCounter(model.counter);
});