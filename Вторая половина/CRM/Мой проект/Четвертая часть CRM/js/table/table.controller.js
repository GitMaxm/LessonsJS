import * as model from './../model.js'
import * as view from './table.view.js'

function init() {
    // Получаем все заявки 
    const applications = model.getApplications()
    view.renderApplications(applications)
    addEventListeners()

    const newApplicationsCount = model.countNewApplications()
    view.renderBadgeNew(newApplicationsCount)

    // Получаем фильр из модели
    const filter = model.getFilter();

    // визуальное обновление фильтров на странице
    view.updateFilter(filter)
}

function addEventListeners() {
    // Событие смены значения 
    view.elements.select.addEventListener('change', filterProducts)
    // По клику меняем статус      
    view.elements.topStatusBar.addEventListener('click', filterByStatus)
    // Обходим колекцию ссылок
    view.elements.leftStatusLinks.forEach((link) => {
        link.addEventListener('click', filterByStatus)
    })
}

// запуск методов из модели, которые будут фильтровать продукты
function filterProducts() {
    const filter = model.changeFilter('products', this.value)
    const filteredApplications = model.filterApplications(filter)
    view.renderApplications(filteredApplications)
}

function filterByStatus(e) {
    // Смотрим по какой ссылке кликнули и меняем статус
    const filter = model.changeFilter('status', e.target.dataset.value)
    // Отфилтрукт заявки по статусу и вернет их
    const filteredApplications = model.filterApplications(filter)
    view.renderApplications(filteredApplications)
    // По этому значению находим соответсувющую ссылку и обновляем ее
    view.updateStatusLinks(e.target.dataset.value)
}

init()