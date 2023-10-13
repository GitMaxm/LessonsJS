export default class Model {
    constructor () {
        this.tasks = [];
    }

    addTask(text) {
        this.tasks.push(text);
    }
}

// tasks = ['Заверстать стартовый шаблон', 'Написать скрипт', 'Записать урок', '465465464'];
