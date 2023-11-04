const form = document.getElementById('addForm');
const itemsList = document.getElementById('items');
const filter = document.getElementById('filter');

/*
1.0 Создаем пустой массив tasks
1.1 Идем в localStorage проверяем есть ли в нем данные по ключу tasks
1.2 Если данные есть, тогда забираем их, парсим из JSON в маассив и записываем в массив tasks
1.3 Если данных нет, тогда оставляем переменную tasks пустым массивом
*/

let tasks = [];

if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
}

/*
1.4 На основе массива tasks рендерим эти задачи на странице
*/

tasks.forEach(function (item) {
    renderTask(item);
});

form.addEventListener('submit', addItem);
itemsList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

function renderTask(taskText) {

	// Создаем элемент для новой задачи
	const newElement = document.createElement('li');
	newElement.className = 'list-group-item';

	// Добавим текст в новый элемент
	const newTextNode = document.createTextNode(taskText);
	newElement.appendChild(newTextNode);

	// Создаем кнопку
	const deleteBtn = document.createElement('button');
	// Добавляем текст
	deleteBtn.appendChild(document.createTextNode('Удалить'));
	// Добавляем CSS class
	deleteBtn.className = 'btn btn-light btn-sm float-right';
	// Добавляем data атрибут
	deleteBtn.dataset.action = 'delete';

	// Помещаем кнопку внутрь тега li
	newElement.appendChild(deleteBtn);

	// Добавляем новую задачу в список со всеми задачами
	itemsList.prepend(newElement);
}

function addItem(e) {
	// Отменяем отправку формы
	e.preventDefault();

	// ================= 2.1 Отображаем задачу в HTML разметке =================

	// Находим инпут с текстом для новой задачи
	const newItemInput = document.getElementById('newItemText');
	// Получаем текст из инпута
	const newItemText = newItemInput.value;

	renderTask(newItemText);

	// ======================= 2.2 Добавляем задачу в массив с задачами =======================

	tasks.push(newItemText);

	// ======================= 2.3 Обновить список задач в localStorage =======================
	localStorage.setItem('tasks', JSON.stringify(tasks));

	// Очистим поле добавления новой задачи
	newItemInput.value = '';
}

function removeItem(e) {
    if (e.target.hasAttribute('data-action') && e.target.getAttribute('data-action') == 'delete') {

        // ===================== 3.1 Удаляем из HTML разметки ===========================
		if (confirm('Удалить задачу?')) {
			e.target.parentNode.remove();
		}

		// ======================  3.2 Удаляем из массива tasks =========================

        // Получаем текст задачи которую надо удалить
        const taskText = e.target.closest('.list-group-item').firstChild.textContent;

        // Находим индекс задачи в массиве tasks
        const index = tasks.findIndex(function (item) {
            if (taskText === item) {
                return true
            }
        })

        // Удаляем задачу из массива tasks
        if (index !== -1) {
            tasks.splice(index, 1);
        }

        // Обновляем localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));

	}
}

function filterItems(e) {
	// Получаем фразу для поиска и переводим ее в нижний регистр
	const searchedText = e.target.value.toLowerCase();

	// 1. Получаем списко всех задач
	const items = itemsList.querySelectorAll('li');

	// 2. Перебираем циклом все найденные теги li с задачами
	items.forEach(function (item) {
		// Получаем текст задачи из списка и переводим его в нижний регистр
		const itemText = item.firstChild.textContent.toLowerCase();

		// Проверяем вхождение искомой подстроки в текст задачи
		if (itemText.indexOf(searchedText) != -1) {
			// Если вхождение есть - показываем элемент с задачей
			item.style.display = 'block';
		} else {
			// Если вхождения нет - скрываем элемент с задачей
			item.style.display = 'none';
		}
	});
}

/*
1. Открываем приложение
    1.1 Идем в localStorage проверяем есть ли в нем данные по ключу tasks
    1.2 Если данные есть, тогда забираем их, парсим из JSON в маассив и записываем в массив tasks
    1.3 Если данных нет, тогда оставляем переменную tasks пустым массивом
    1.4 На основе массива tasks рендерим эти задачи на странице

2. Добавляем задачу в список дел
    2.1 Отображаем задачу в HTML разметке
    2.2 Добавляем задачу в массив с задачами
    2.3 Обновить список задач в localStorage

3. Удаление задачи
    3.1 Удаляем из HTML разметки
    3.2 Удаляем из массива tasks
    3.3 Обновить список задач в localStorage

*/
