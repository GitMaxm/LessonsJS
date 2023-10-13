import Model from './model.js';
const model = new Model();


model.addTask('Заверстать стартовый шаблон');
model.addTask('Написать скрипт');
model.addTask('Записать урок');
// console.log(model);

// model.doneTask(model.tasks[1]);
// console.log(model);

model.removeTask(model.tasks[0]);
console.log(model);
