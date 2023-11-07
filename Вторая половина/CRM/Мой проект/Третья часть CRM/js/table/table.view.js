const elements = {
    table: document.querySelector('#tbody')
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
                <td>${application.date}</td>
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

export {
    elements,
    renderApplications,
}