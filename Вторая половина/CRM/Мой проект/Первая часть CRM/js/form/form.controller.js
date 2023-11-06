import getRandomData from './form.test-data.js';
import * as view from './form.view.js'
import * as model from './../model.js'

function init() {
    renderTestData()
    setupEventListeners()
}


function renderTestData() {
    const randomData = getRandomData()
    view.insertTestData(randomData)
}

function setupEventListeners() {
    view.elements.form.addEventListener('submit', createRecord)
}

function createRecord(e) {
    e.preventDefault();
    const formData = view.getFormData();
    model.addApplication(formData);

    view.clearForm();
    renderTestData();

    //     // Check form
    //     // Проверка на пустые поля
    //     // const checkResult = view.checkEmptyFields();
    //     // if (!view.checkEmptyFields()) return
}

init()
