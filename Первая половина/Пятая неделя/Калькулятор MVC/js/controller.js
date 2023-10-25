import * as model from './model.js'
import * as view from './view.js'

// Start
init();

// Functions
function init() {
	displayMonth();
	insertTestData();
	view.renderBudget(model.calcBudget());
	addEventListeners();
}

function addEventListeners() {
	view.elements.form.addEventListener('submit', createRecord);

	document.body.addEventListener('click', function (e) {
		// Кнопка удалить
		if (e.target.closest('button.item__remove')) {
			deleteRecord(e);
		}
	});
}

function createRecord(e) {
	e.preventDefault();

	// Check form      
	// Проверка на пустые поля
	const checkResult = view.checkEmptyFields();
	if (checkResult === false) {
		return
	}
	// if (!view.checkEmptyFields()) return





	const formData = view.getFormData();
	const record = model.createRecord(formData);
	view.renderRecord(record);

	// Посчитать бюджет
	view.renderBudget(model.calcBudget());
	view.clearForm();
	insertTestData();
}

function deleteRecord(e) {
	const id = view.removeRecord(e);
	model.deleteRecord(id);
	view.renderBudget(model.calcBudget());
}

function insertTestData() {
	const randomData = model.getTestData();
	view.renderTestData(randomData);
}

function displayMonth() {
	const monthYear = model.getMonthYear();
	view.renderMonth(monthYear.month, monthYear.year);
}