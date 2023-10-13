import Model from './model.js';
import View from './view.js';

const model = new Model();
const view = new View(model.tasks);

view.elements.form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newTask = model.addTask(view.elements.input.value);
    view.renderTask(newTask);
    view.clearInput();
})

// model.addTask('Заверстать стартовый шаблон');
// model.addTask('Написать скрипт');
// model.addTask('Записать урок');
// model.doneTask(model.tasks[1]);
// console.log(model);