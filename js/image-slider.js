document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.slider-container');
    const sliderIndicators = document.querySelector('.slider-indicators');

    for (let i = 0; i < sliderContainer.children.length; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('slider-indicator');
        if (i === 0) {
            indicator.classList.add('active');
        }
        sliderIndicators.appendChild(indicator);
    }

    sliderContainer.addEventListener('wheel', (event) => {
        event.preventDefault();
        sliderContainer.scrollLeft += event.deltaY;
    });

    sliderContainer.addEventListener('scroll', () => {
        const scrollOffset = sliderContainer.scrollLeft;
        const imageWidth = sliderContainer.children[0].offsetWidth;
        const activeIndex = Math.min(
            Math.max(Math.round(scrollOffset / imageWidth), 0),
            sliderIndicators.children.length - 1
        );

        const indicators = document.querySelectorAll('.slider-indicator');
        indicators.forEach((indicator) => {
            indicator.classList.remove('active');
        });

        indicators[activeIndex].classList.add('active');
    });
});

