const elements = {
    table: document.querySelector('#tbody'),
    select: document.querySelector('#productSelect'),
    topStatusBar: document.querySelector('#topStatusBar'),
    leftStatusLinks: document.querySelectorAll('[data-role="left-status"]'),
    leftPanelNav: document.querySelector('.left-panel__navigation'),
    badgeNew: document.querySelector('#badge-new')
}

// Рендер заявок (принемает в себя все заявки)
function renderApplications(applications) {
    // Очищаем таблицу tbody 
    elements.table.innerHTML = '';

    // класс статуса 
    const badges = {
        new: 'badge-danger',
        inwork: 'badge-warning',
        complete: 'badge-success',
    }

    //отображаем жаявки которые пришли 
    for (let application of applications) {
        // Формируем шаблонную строку
        const template = `<tr>
                <th scope="row">${application.id}</th>
                <td>${application.dateToDisplay}</td>
                <td>${application.productName}</td>
                <td>${application.name}</td>
                <td>${application.email}</td>
                <td>${application.phone}</td>
                <td>
                    <div class="badge badge-pill ${badges[application.status]}">${application.statusName}</div>
                </td>
                <td>
                    <a href="edit.html?id=${application.id}">Редактировать</a>
                </td>
		    </tr>`;

        elements.table.insertAdjacentHTML('beforeend', template);
    }
}


function updateStatusLinks(value) {
    // Top status bar
    // Убираем и добавляем класс
    elements.topStatusBar.querySelectorAll('a').forEach((link) => link.classList.remove('active'))
    elements.topStatusBar.querySelector(`a[data-value="${value}"]`).classList.add('active')

    // Left side bar
    elements.leftStatusLinks.forEach((link) => link.classList.remove('active'))
    // Внутри панели ищем класс active
    elements.leftPanelNav.querySelector(`a[data-value="${value}"]`).classList.add('active')
}

// отображение количества заявок
function renderBadgeNew(number) {
    elements.badgeNew.innerText = number
    number === 0 ? elements.badgeNew.classList.add('none') : elements.badgeNew.classList.remove('none')
}

function updateFilter(filter) {
    // Фильтр по продукту
    elements.select.value = filter.products

    // Top status bar
    elements.topStatusBar.querySelectorAll('a').forEach((link) => link.classList.remove('active'))
    elements.topStatusBar.querySelector(`a[data-value="${filter.status}"]`).classList.add('active')

    // Left side bar
    elements.leftStatusLinks.forEach((link) => link.classList.remove('active'))
    elements.leftPanelNav.querySelector(`a[data-value="${filter.status}"]`).classList.add('active')
}

export {
    elements,
    renderApplications,
    updateStatusLinks,
    renderBadgeNew,
    updateFilter
}