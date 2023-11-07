import * as model from './../model.js'
import * as view from './table.view.js'

function init() {
    // Получаем все заявки 
    const applications = model.getApplications();
    view.renderApplications(applications);
}

init()