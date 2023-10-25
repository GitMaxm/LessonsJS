// DATA
const budget = [];

// DOM
const form = document.querySelector('#form');
const type = document.querySelector('#type');
const title = document.querySelector('#title');
const value = document.querySelector('#value')
const incomesList = document.querySelector('#incomes-list');
const expensesList = document.querySelector('#expenses-list');

const budgetEl = document.querySelector('#budget');
const totalIncomeEl = document.querySelector('#total-income');
const totlaExpenseEl = document.querySelector('#total-expense');
const percentsWrapper = document.querySelector('#expense-percents-wrapper');

const monthEl = document.querySelector('#month');
const yearEl = document.querySelector('#year');

// Functions

// Фоматер чисел
const priceFormatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency', // Фомарироваться как денежная сумма
    currency: 'RUB', // В какой валюте будет отображаться
    maximumFractionDigits: 0 // Максимальное количество десятичных знаков после запятой при форматировании чисел
})

function insertTestData() {
    const testData = [
        { type: 'inc', title: 'Фриланс', value: 1500 },
        { type: 'inc', title: 'Зарплата', value: 2000 },
        { type: 'inc', title: 'Бизнес', value: 2000 },
        { type: 'inc', title: 'Рента', value: 1000 },
        { type: 'exp', title: 'Продукты', value: 300 },
        { type: 'exp', title: 'Кафе', value: 200 },
        { type: 'exp', title: 'Транспорт', value: 200 },
        { type: 'exp', title: 'Квартира', value: 500 },
    ];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const randomIndex = getRandomInt(testData.length);
    const randomData = testData[randomIndex];

    type.value = randomData.type;
    title.value = randomData.title;
    value.value = randomData.value;
}

function clearForm() {
    form.reset()
}

function calcBudget() {

    // Считаем общий доход
    const totalIncome = budget.reduce(function (total, element) {
        if (element.type === 'inc') {
            return total + element.value;
        } else {
            return total;
        }
    }, 0)

    // Считаем общий расход
    // Сумма элементов массива
    const totalExpense = budget.reduce(function (total, element) {
        if (element.type === 'exp') {
            return total + element.value;
        } else {
            return total;
        }
    }, 0);

    const totalBudget = totalIncome - totalExpense;

    let expensePercents = 0;
    if (totalIncome) {
        expensePercents = Math.round((totalExpense * 100) / totalIncome)
    }

    budgetEl.innerHTML = priceFormatter.format(totalBudget);

    totalIncomeEl.innerHTML = '+ ' + priceFormatter.format(totalIncome);
    totlaExpenseEl.innerHTML = '- ' + priceFormatter.format(totalExpense);

    if (expensePercents) {
        const html = `<div class="badge">${expensePercents}%</div> `;
        percentsWrapper.innerHTML = html;
    } else {
        percentsWrapper.innerHTML = '';
    }

}

//Показать дату 
function displayMonth() {
    const now = new Date();

    const year = now.getFullYear(); // 2023

    //Форматер, возвращаем только месяц
    const timeFormatter = new Intl.DateTimeFormat('ru-RU', {
        month: 'long'
    });
    const month = timeFormatter.format(now);

    console.log(year);
    console.log(month);

    monthEl.innerHTML = month;
    yearEl.innerHTML = year;
}

// Действия
displayMonth()
insertTestData();
calcBudget();

// Добавление
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Проверка формы на заполненность
    if (title.value.trim() === '') {
        title.classList.add('form__input--error');
        return;
    } else {
        title.classList.remove('form__input--error');
    }

    if (value.value.trim() === '' || +value.value <= 0) {
        value.classList.add('form__input--error');
        return;
    } else {
        value.classList.remove('form__input--error');
    }

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
        title: title.value.trim(),
        value: +value.value,
    };
    console.log(record);

    // Добавляем запись в данные
    budget.push(record);

    // Отображаем Доход на странице
    if (record.type === 'inc') {
        const html = `<li data-id="${record.id
            }" class="budget-list__item item item--income">
                        <div class="item__title">${record.title}</div>
                        <div class="item__right">
                            <div class="item__amount">+ ${priceFormatter.format(
                record.value
            )}</div>
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
                                - ${priceFormatter.format(record.value)}
                            </div>
                            <button class="item__remove">
                                <img src="./img/circle-red.svg" alt="delete" />
                            </button>
                        </div>
                    </li>`;

        expensesList.insertAdjacentHTML('afterbegin', html)
    }

    // Посчитать бюджет
    calcBudget();

    console.log(budget);
    clearForm();
    insertTestData();
})

// Удаление
document.body.addEventListener('click', function (e) {

    // Кнопка удалить
    if (e.target.closest('button.item__remove')) {
        // Находим ближайший родительский элемент с тегом li
        const recordElement = e.target.closest('li.budget-list__item');
        // Перевод строки в число
        const id = +recordElement.dataset.id;

        const index = budget.findIndex(function (element) {
            if (id === element.id) {
                return true;
            }
        });

        // Удалить из массива
        budget.splice(index, 1);

        // Удалить со страницы
        recordElement.remove();

        // Посчитать бюджет
        calcBudget();
    }

})