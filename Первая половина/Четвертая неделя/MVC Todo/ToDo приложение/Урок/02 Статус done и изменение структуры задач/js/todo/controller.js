import Model from './model.js';
const model = new Model();

console.log(model);

model.addTask('Заверстать стартовый шаблон');
model.addTask('Написать скрипт');
console.log(model);

model.doneTask(model.tasks[1]);
console.log(model);

