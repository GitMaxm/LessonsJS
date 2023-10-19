// DATA
const budget = [];

// DOM
const form = document.querySelector('#form');

const type = document.querySelector('#type');
const title = document.querySelector('#title');
const value = document.querySelector('#value')

const incomesList = document.querySelector('#incomes-list');
const expensesList = document.querySelector('#expenses-list');

// Actions
form.addEventListener('submit', function(e){
	e.preventDefault();

	// Расчет id
	let id = 1;
	if (budget.length > 0) {
		const lastElement = budget[budget.length - 1];
		const lastElID = lastElement.id;
		id = lastElID + 1;
	}

	// Формируем запись
	const record = {
		id: id,
		type: type.value,
		title: title.value,
		value: value.value,
	};
	console.log(record);

	// Добавляем запись в данные
	budget.push(record);

	// Отображаем Доход на странице
	if (record.type === 'inc') {
		const html = `<li data-id="${record.id}" class="budget-list__item item item--income">
                        <div class="item__title">${record.title}</div>
                        <div class="item__right">
                            <div class="item__amount">+ ${record.value}</div>
                            <button class="item__remove">
                                <img
                                    src="./img/circle-green.svg"
                                    alt="delete"
                                />
                            </button>
                        </div>
                    </li>`;

		incomesList.insertAdjacentHTML('afterbegin', html);
	}

	// Отображаем Расход на странице
	if (record.type === 'exp') {
        const html = `<li data-id="${record.id}" class="budget-list__item item item--expense">
                        <div class="item__title">${record.title}</div>
                        <div class="item__right">
                            <div class="item__amount">
                                - ${record.value}
                            </div>
                            <button class="item__remove">
                                <img src="./img/circle-red.svg" alt="delete" />
                            </button>
                        </div>
                    </li>`;
                    
        expensesList.insertAdjacentHTML('afterbegin', html)
	}

	console.log(budget);
})