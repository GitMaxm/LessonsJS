// DOM
const form = document.querySelector('#form');

// Actions
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('SUBMIT!');
})