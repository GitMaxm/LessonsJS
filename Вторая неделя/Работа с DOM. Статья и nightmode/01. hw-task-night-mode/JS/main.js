let nightModeButton = document.querySelector("#night-mode");
let elements = document.querySelectorAll("h1, h2, a, p, article");
let nightModeButtonActive = true;

nightModeButton.addEventListener("click", function () {

    // Выбираем все нужные элементы
    elements.forEach(function (element) {
        if (!element.classList.contains("night")) {
            // Добавляем класс "night" к каждому элементу
            element.classList.add("night");
        } else {
            element.classList.remove("night");
        }
    });

    nightModeButtonActive = !nightModeButtonActive;

    if (nightModeButton.textContent = !nightModeButtonActive) {
        nightModeButton.textContent = "Выключить ночной режим";
    } else {
        nightModeButton.textContent = "Включить ночной режим";
    }
});
