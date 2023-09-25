let form = document.querySelector("#addForm");
let itemsList = document.querySelector("#items");
let filter = document.querySelector("#filter")

// Добавление новой задачи прослушка события 
form.addEventListener("submit", addItem);

// Добавление новой задачи функция
function addItem(e) {
    // Отмена отправки формы
    e.preventDefault();

    // Находим импут с текстом для новой задачи
    let newItemInput = document.querySelector("#newItemText");
    // Получаем тект из импута
    let newItemText = newItemInput.value;

    // Создаем элемент для новой задачи
    let newElement = document.createElement("li");
    newElement.className = "list-group-item";

    // Добавим текст в новый элемент
    let newTextNode = document.createTextNode(newItemText);
    newElement.appendChild(newTextNode);

    //Создаем кнопку
    let deleteBtn = document.createElement("button");
    // Добавляем текст в кнопку
    deleteBtn.appendChild(document.createTextNode("Удалить"));
    // Добавляем класс
    deleteBtn.className = "btn btn-light btn-sm float-right";
    //Добавляем дата атрибут
    deleteBtn.dataset.action = 'delete';

    // Помещаем кнопку внутри тега Li
    newElement.appendChild(deleteBtn);

    //Добавляем в список со всеми задачами
    itemsList.prepend(newElement);

    // Очистим поле добавляния новой задачи
    newItemInput.value = "";
}

// Удаление элемента - прослушка клика
itemsList.addEventListener("click", removeItem);

// Удаление элемента - функция 
function removeItem(e) {
    if (
        e.target.hasAttribute("data-action") &&
        e.target.getAttribute("data-action") == "delete"
    ) {
        if (confirm("Удалить задачу?")) {
            e.target.parentNode.remove();
        }
    }
}


// Фильтрация списка дел - прослушка ввода
filter.addEventListener("keyup", filterItems);

// Фильтрация списка дел - функция
function filterItems(e) {
    //получаем фразу для поиска и переводим ее в нижний регистр
    let searchedText = e.target.value.toLowerCase();

    //1. Получаем список всех задач
    let items = itemsList.querySelectorAll("li");

    // 2. Перебираем циклом все найденные теги li с задачами

}