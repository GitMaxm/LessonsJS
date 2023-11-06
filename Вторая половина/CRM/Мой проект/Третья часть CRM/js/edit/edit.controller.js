import * as model from './../model.js'
import * as view from './edit.view'



function init() {
    const id = getApplicationId()
    // Получить заяку по id
    const application = model.getApplicationById(id)
}
// Получаем ID из строки запроса
function getApplicationId() {
    const params = new URLSearchParams(window.location.search)
    // Получаем значение id из объекта
    const id = params.get('id')
    return id
}


init()