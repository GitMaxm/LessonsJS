// DATA
const budget = [];

// DOM
const form = document.querySelector('#form');

const type = document.querySelector('#type');
const title = document.querySelector('#title');
const value = document.querySelector('#value')

// Actions
form.addEventListener('submit', function(e){
	e.preventDefault();

	// Расчет id
    let id = 1;
    if (budget.length > 0) {
		// Последний элемент в массиве
		const lastElement = budget[budget.length - 1];
		console.log('lastElement', lastElement);

		// ID последнего элемента
		const lastElID = lastElement.id;
		console.log('lastElID', lastElID);

		// Сформировать новый id = старый + 1
		id = lastElID + 1;
		console.log('id', id);
	}

	// Формируем запись
	const record = {
		id: id,
		type: type.value,
		title: title.value,
		value: value.value,
	};
	console.log(record);

	budget.push(record);
	console.log(budget);
})