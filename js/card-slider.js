const cardsContainer = document.querySelector('.card-container');
const indicatorsContainer = document.querySelector('.indicators');
const cards = document.querySelectorAll('.card');
let activeCardIndex = 0;

cards.forEach((card, index) => {
    // Создаем индикаторы
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    indicatorsContainer.appendChild(indicator);

    // Обработчик клика на индикатор
    indicator.addEventListener('click', () => {
        setActiveCard(index);
        scrollToCard(index);
    });
});

function scrollToCard(index) {
    cardsContainer.scrollTo({
        left: cards[index].offsetLeft - cardsContainer.offsetLeft,
        behavior: 'smooth',
    });
}

function setActiveCard(index) {
    activeCardIndex = index;
    indicatorsContainer.querySelectorAll('.indicator').forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Изначально устанавливаем активный индикатор для первой карточки
setActiveCard(activeCardIndex);

// Обновляем индикаторы при прокрутке (если карточки могут прокручиваться также)
cardsContainer.addEventListener('scroll', () => {
    cards.forEach((card, index) => {
        const cardPosition = card.offsetLeft - cardsContainer.offsetLeft;
        if (cardsContainer.scrollLeft >= cardPosition && cardsContainer.scrollLeft < cardPosition + card.offsetWidth) {
            setActiveCard(index);
        }
    });
});

