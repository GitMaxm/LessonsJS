const elements = {
    form: document.querySelector('#form'),
    number: document.querySelector('#number'),
    id: document.querySelector('#id'),
    date: document.querySelector('#date'),
    product: document.querySelector('#product'),
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    phone: document.querySelector('#phone'),
    status: document.querySelector('#status'),
}

function renderApplication(application) {
    elements.number.innerText = application.id
    elements.id.value = application.id
    elements.date.innerText = `${application.dateDate} ${application.dateTime}`
    elements.product.value = application.product
    elements.name.value = application.name
    elements.email.value = application.email
    elements.phone.value = application.phone
    elements.status.value = application.status
}

// Собираем данные с формы с помощью создания нового объекта 
function getFormInput() {
    // return {
    //     id: elements.id.value,
    //     name: elements.id.value,
    // }

    // Возвращает объект с данными формы
    return new FormData(elements.form)
}

export {
    elements,
    renderApplication,
    getFormInput,
}