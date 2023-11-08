import * as model from './../model.js'
import * as view from './edit.view.js'


function init() {
    const id = getApplicationId()
    // Получить заявку по id
    const application = model.getApplicationById(id)
    // Отобращение этой заявки 
    view.renderApplication(application)
    setupEventListeners()
}

// Создаем прослушку
function setupEventListeners() {
    view.elements.form.addEventListener('submit', formSubmitHandler)
}

// Сбор данных с формы
function formSubmitHandler(e) {
    e.preventDefault();
    // Данные с формы, в которой записан результат работы getFormInput
    const formData = view.getFormInput()

    // Передаем эти данные в модель
    model.updateАpplication(formData)
    // Перемещаемся на таблицу
    window.location = './table.html'
}

// Получаем ID из строки запроса
function getApplicationId() {
    // Из URL получаем строчное значение
    const params = new URLSearchParams(window.location.search)
    // Получаем значение id из объекта
    const id = params.get('id')
    return id
}


init()