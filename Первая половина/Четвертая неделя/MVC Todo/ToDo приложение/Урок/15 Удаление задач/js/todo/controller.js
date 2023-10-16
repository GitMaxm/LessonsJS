import Model from './model.js';
import View from './view.js';

const model = new Model();
const view = new View(model.tasks);

// 1. Добавление задачи
// Событие отправка формы
view.elements.form.addEventListener('submit', function (e) {
    // Не срабатывает обновление при отправке формы
    e.preventDefault();
    const newTask = model.addTask(view.elements.input.value);
    view.renderTask(newTask);
    view.clearInput();
})

// 2. Нажали на Чекбокс или кнопку Удалить
view.elements.tasksList.addEventListener('click', function (e) {

    // Проверяем клик "по чекбоксу"
    if (e.target.getAttribute('type') === 'checkbox') {
        const id = e.target.closest('.todo-item').dataset.id;
        const task = model.findTask(id);
        model.changeStatus(task);
        view.changeStatus(task);
    }

    // Клик по кнопке Удалить
    if (e.target.hasAttribute('data-delete')) {
        const id = e.target.closest('.todo-item').dataset.id;
        const task = model.findTask(id);
        model.removeTask(task);
        view.removeTask(task);
    }


})
