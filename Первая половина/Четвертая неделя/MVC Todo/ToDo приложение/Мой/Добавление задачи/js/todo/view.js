export default class View {
    constructor(tasks) {

        tasks.forEach((task) => {
            this.renderTask(task);
        });
    }

    elements = {
        input: document.getElementById('newTask'),
        form: document.getElementById('form'),
        tasksList: document.getElementById('tasksList'),
    };

    renderTask(taskObject) {

        // Добавляем класс (зачеркивание)
        const completeClass = taskObject.status === 'done' ? 'completed' : '';
        // Чекбокс (отметка)
        const checked = taskObject.status === 'done' ? 'checked' : '';

        const taskHTML = ` <li class="todo-item">
                                <label class="todo-item-label">
                                    <input class="checkbox" type="checkbox" ${checked}/>
                                    <span class="${completeClass}">${taskObject.text}</span>
                                    <button class="btn btn-secondary btn-sm">Удалить</button>
                                </label>
                            </li>`;

        //Вставляем кусок разметки, через обращение к списку задач
        this.elements.tasksList.insertAdjacentHTML('beforeend', taskHTML);
    }


}