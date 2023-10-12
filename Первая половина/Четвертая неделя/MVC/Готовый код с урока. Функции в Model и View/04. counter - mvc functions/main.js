const input = document.getElementById('input');
const btnMinus = document.getElementById('btnMinus');
const btnReset = document.getElementById('btnReset');
const btnPlus = document.getElementById('btnPlus');

let counter = 0; // Model
input.value = counter; // View

// Controller
btnReset.addEventListener('click', function () {
	counter = 0; // Model
	input.value = counter; // View
});

// Controller
btnPlus.addEventListener('click', function () {
	++counter; // Model
	input.value = counter; // View
});

// Controller
btnMinus.addEventListener('click', function () {
	--counter; // Model
	input.value = counter; // View
});
