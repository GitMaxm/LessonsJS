// DATA
const budget = [];

// DOM
const form = document.querySelector('#form');

const type = document.querySelector('#type');
const title = document.querySelector('#title');
const value = document.querySelector('#value')

// Actions
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('SUBMIT!');

    console.log(type.value);
    console.log(title.value);
    console.log(value.value);
})