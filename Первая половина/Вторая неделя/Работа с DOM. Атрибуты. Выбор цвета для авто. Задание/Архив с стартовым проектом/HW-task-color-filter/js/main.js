// Найти действующие элементы

let imgHolderEl = document.querySelector("#imgHolder");
let colorsItemsEl = document.querySelectorAll(".colorItem");
let imgCarEl = imgHolderEl.querySelector("img");

// Отслежка пользовательских событий
colorsItemsEl.forEach(function (colorItemEl) {
    colorItemEl.addEventListener("click", function (e) {

        // Функции которые сработают на действие пользовательские действия

        /* if (event.target.classList.contains('colorBlue')) {
               img.src = 'https://webcademy.ru/files/js2020/solaris/blue.png';
           }
   
           if (event.target.classList.contains('colorWhite')) {
               img.src = 'https://webcademy.ru/files/js2020/solaris/white.png';
           }
   
           if (event.target.classList.contains('colorRed')) {
               img.src = 'https://webcademy.ru/files/js2020/solaris/red.png';
           }
   
           if (event.target.classList.contains('colorBlack')) {
               img.src = 'https://webcademy.ru/files/js2020/solaris/black.png';
           }
   
           if (event.target.classList.contains('colorWhitePure')) {
               img.src = 'https://webcademy.ru/files/js2020/solaris/white-pure.png';
           }
   
           if (event.target.classList.contains('colorOrange')) {
               img.src = 'https://webcademy.ru/files/js2020/solaris/orange.png';
           }
   
           if (event.target.classList.contains('colorGraphite')) {
               img.src = 'https://webcademy.ru/files/js2020/solaris/graphite.png';
           } */


        const fileName = e.target.dataset.file;
        let newSrc = 'https://webcademy.ru/files/js2020/solaris/' + fileName;

        imgCarEl.src = newSrc;

        // Убираем активный класс
        const colorItemActive = document.querySelector(".colorItem--active")
        colorItemActive.classList.remove("colorItem--active");

        // Делаем кнопку активной, добавляем класс colorItem--active
        e.target.classList.add("colorItem--active")

    });
});
