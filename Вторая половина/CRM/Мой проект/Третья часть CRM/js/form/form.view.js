const elements = {
    form: document.querySelector('#form'),
    nameForm: document.querySelector('#name'),
    phone: document.querySelector('#phone'),
    email: document.querySelector('#email'),
    product: document.querySelector('#product'),
};

function insertTestData(data) {
    elements.nameForm.value = data.nameForm;
    elements.phone.value = data.phone;
    elements.email.value = data.email;
    elements.product.value = data.product;
}


function getFormData() {
    // const formData = {
    //     nameForm: elements.nameForm.value,
    //     phone: elements.phone.value,
    //     email: elements.email.value,
    //     product: elements.product.value,
    // };
    // return formData;

    // нужен атрибут name =""
    return new FormData(elements.form)
}

function clearForm() {
    elements.form.reset();
}

export {
    elements,
    insertTestData,
    getFormData,
    clearForm,
};
