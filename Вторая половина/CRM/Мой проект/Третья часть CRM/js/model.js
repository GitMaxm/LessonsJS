const applications = loadApplications();

class Application {
    // ID, дата создания, продукт, Имя, email, телефон и статус
    constructor(id, name, phone, email, product) {
        this.id = id
        this.name = name
        this.phone = phone
        this.email = email
        this.product = product
        this.date = new Date().toISOString()
        this.status = 'new'
    }
}

function addApplication(formData) {
    // определяем id
    let id = applications.length > 0 ? applications[applications.length - 1]['id'] + 1 : 1;
    // let id = applications.length > 0 ? applications.at[- 1]['id'] + 1 : 0;

    // Создаем заявку
    // formData.get('name') вернет то value(значение) что было записано в атрибуте name
    const application = new Application(id, formData.get('name'), formData.get('phone'), formData.get('email'), formData.get('product'))

    // Добавляем в массив с заявками 
    applications.push(application)

    saveApplications();
}

function saveApplications() {
    localStorage.setItem('applications', JSON.stringify(applications))
}

function loadApplications() {
    return localStorage.getItem('applications') ? JSON.parse(localStorage.getItem('applications')) : []
}

// возвращает заявки 
function getApplications() {
    return prepareApplications(applications)
}

const products = {
    'course-html': 'Курс по верстке',
    'course-js': 'Курс по JavaScript',
    'course-vue': 'Курс по Vue JS',
    'course-php': 'Курс по PHP',
    'course-wordpress': 'Курс по WordPress',
}

const statuses = {
    'new': 'Новая',
    'inwork': 'В работе',
    'complete': 'Завершена',
}

// Обрабатывает заявки
function prepareApplications(applications) {
    // Принемает заявки и обходит их
    return applications.map((item) => {
        return {
            ...item,
            // Перезаписали дату(созадли новую дату и получаем ее в локальном формате)
            date: new Date(item.date).toLocaleDateString(),
            productName: products[item.product],
            statusName: statuses[item.status]
        }
    })
}


function getApplicationById(id) {
    // Возвращаем один элемент массива
    const application = applications.find((item) => item.id == id)

    // Только дата
    application.dateDate = new Date(application.date).toLocaleDateString()
    // Только время
    application.dateTime = new Date(application.date).toLocaleTimeString()

    return application
}


function updateАpplication(formData) {
    // Находим заявку 
    // Напрямую обратиться не можем, но через метод get получаем значение по имени id
    const application = getApplicationById(formData.get('id'))
    // Обновляем значения заявки 
    application.name = formData.get('name')
    application.email = formData.get('email')
    application.phone = formData.get('phone')
    application.product = formData.get('product')
    application.status = formData.get('status')
    // Сохраняем данные 
    saveApplications()
}

export {
    addApplication,
    getApplications,
    getApplicationById,
    updateАpplication
}