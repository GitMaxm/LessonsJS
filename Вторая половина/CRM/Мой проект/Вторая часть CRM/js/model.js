const applications = loadApplications();

class Application {
    // ID, дата создания, продукт, Имя, email, телефон и статус
    constructor(id, name, phone, email, product) {
        this.id = id
        this.name = name
        this.phone = phone
        this.email = email
        this.product = product
        this.dateTime = new Date().toISOString()
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
            dateTime: new Date(item.dateTime).toLocaleDateString(),
            productName: products[item.product],
            statusName: statuses[item.status]
        }
    })
}

export { addApplication, getApplications }