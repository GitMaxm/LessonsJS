// DOM elements
const elements = {
    form: document.querySelector('#form'),
    name: document.querySelector('#name'),
    phone: document.querySelector('#phone'),
    email: document.querySelector('#email'),
    product: document.querySelector('#product'),
}

function insertTestData (data){
    elements.name.value = data.name;
    elements.phone.value = data.phone;
    elements.email.value = data.email;
    elements.product.value = data.product;
}

function getFormInput (){
    return new FormData(elements.form)
}

export {elements, insertTestData, getFormInput }