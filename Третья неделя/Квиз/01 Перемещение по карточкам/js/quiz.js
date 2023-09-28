const cards = document.querySelectorAll('.plate');

// показываем первую карточку
let currentIndex = 0;
cards[currentIndex].classList.add('visible');

// скрываем кнопку назад на первой карточке
cards[0].querySelector('[data-nav="prev"]').remove();

// Клики по всей странице
window.addEventListener('click', function (event) {

    // Дейсвие вперед
    if (event.target.closest('[data-nav="next"]')) {

        const result = checkOnAnser(cards[currentIndex]);

        if (result === true) {
            cards[currentIndex].classList.remove('visible');
            currentIndex += 1;
            cards[currentIndex].classList.add('visible');
        } else {
            console.error("!");
        }
    }

    // Дейсвие назад
    if (event.target.closest('[data-nav="prev"]')) {

        if (currentIndex === 0) return;
        cards[currentIndex].classList.remove('visible');
        currentIndex -= 1;
        cards[currentIndex].classList.add('visible');
    }
})

function checkOnAnser(card) {

    // Проверка на радиокнопки
    const radioBtns = card.querySelectorAll('input[type="radio"]');

    if (radioBtns.length > 0) {
        for (const radio of radioBtns) if (radio.checked) return true;
    }
}