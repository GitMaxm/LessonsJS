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
    // if (applications.length > 0) {
    //     id = applications[applications.length - 1]['id'] + 1;
    // } else {
    //     id = 0;
    // }
    let id = applications.length > 0 ? applications[applications.length - 1]['id'] + 1 : 0;

    // Создаем заявку
    // formData.get('name') вернет то value(значение) что было записано в атрибуте name
    const application = new Application(id, formData.get('name'), formData.get('phone'), formData.get('email'), formData.get('product'))

    //Добавляем в массив с заявками 
    applications.push(application)

    saveApplications();
}

function saveApplications() {
    localStorage.setItem('applications', JSON.stringify(applications))
}

function loadApplications() {
    return localStorage.getItem('applications') ? JSON.parse(localStorage.getItem('applications')) : []
}

export { addApplication }