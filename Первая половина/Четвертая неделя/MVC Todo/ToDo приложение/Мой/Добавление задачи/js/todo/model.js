export default class Model {
    constructor() {
        this.tasks = [];
        this.loadFromLocalStorage();
    }

    loadFromLocalStorage() {
        const data = localStorage.getItem('tasks');
        if (data) {
            // Преобразуем из JSON в объект
            this.tasks = JSON.parse(data);
        }
    }

    saveToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    addTask(text) {

        const newTask = {
            status: 'active',
            text: text,
        }

        this.tasks.push(newTask);
        this.saveToLocalStorage();
    }

    doneTask(task) {
        task.status = 'done';
        this.saveToLocalStorage();
    }

    removeTask(task) {
        const index = this.tasks.indexOf(task);
        this.task.splice(index, 1);

        this.saveToLocalStorage();
    }
}

