document.addEventListener("DOMContentLoaded", function(event) {
    new Swiper(".js-faq-slider", {
        slidesPerView: 1,
        spaceBetween: 24,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
    });

    /**
     * Accordion
     */
    const accordionItems = document.querySelectorAll('.js-accordion-item');

    accordionItems.forEach((item) => {
        item.addEventListener('click', function () {
            const content = item.querySelector('.js-accordion-item__content');

            item.classList.toggle('accordion-item--has-open');

            content.style.display === 'block' ? content.style.display = 'none' : content.style.display = 'block';
        });
    });
});
