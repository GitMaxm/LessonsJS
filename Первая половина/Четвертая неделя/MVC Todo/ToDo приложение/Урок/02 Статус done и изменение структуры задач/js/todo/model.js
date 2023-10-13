export default class Model {
	constructor() {
		this.tasks = [];
	}

	addTask(text) {

        const newTask = {
			status: 'active',
			text: text,
        };

        this.tasks.push(newTask);

	}

    doneTask(task) {
        task.status = 'done';
    }
}

// tasks = ['Заверстать стартовый шаблон', 'Написать скрипт', 'Записать урок', '465465464'];
// tasks = [
//     {
//         status: 'active',
// 		text: 'Заверстать стартовый шаблон',
// 	},
// 	{},
// 	{},
// ];
