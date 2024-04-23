/* 
import $ from '../core';

$.prototype.carousel = function() {
    for (let i = 0 ;i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        const slides = this[i].querySelectorAll('.carousel-item');
        const slidesField = this[i].querySelector('.carousel-slides');
        const dots = this[i].querySelectorAll('.carousel-indicators li');

        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });

        let offset = 0;
        let slideIndex = 0;

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            if (offset == 0) {
                offset = +width.replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        const sliderId = this[i].getAttribute('id');
        $(`#${sliderId} .carousel-indicators li`).click(e => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;

            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        }); 
    }
};

$('.carousel').carousel();
 */

/*
    Подключаем jQuery и расширяем его прототип методом carousel для работы с каруселями.
*/
import $ from '../core';

$.prototype.carousel = function() {
    /*
        Проходим по всем элементам, к которым применяется карусель.
    */
    for (let i = 0; i < this.length; i++) {
        /*
            Получаем необходимые элементы карусели: контейнер со слайдами, сами слайды и индикаторы.
        */
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        const slides = this[i].querySelectorAll('.carousel-item');
        const slidesField = this[i].querySelector('.carousel-slides');
        const dots = this[i].querySelectorAll('.carousel-indicators li');

        /*
            Устанавливаем ширину контейнера для слайдов и каждого слайда в соответствии с размером окна.
        */
        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });

        let offset = 0;
        let slideIndex = 0;
        let timer; // Переменная для хранения таймера автоматического переключения

        const nextSlide = () => {
            /*
                Переход к следующему слайду.
            */
            if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }
            /*
                Подсветка соответствующего индикатора текущего слайда.
            */
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        };

        const startTimer = () => {
            /*
                Запуск таймера для автоматического переключения слайдов.
            */
            timer = setInterval(() => {
                nextSlide();
            }, 3000); // Интервал для автоматического переключения, например, каждые 3 секунды
        };

        startTimer(); // Запуск таймера при инициализации

        const stopTimer = () => {
            /*
                Остановка таймера при наведении курсора на карусель.
            */
            clearInterval(timer); // Остановка таймера
        };

        $(this[i]).on('mouseenter', stopTimer); // При наведении на карусель останавливаем таймер
        $(this[i]).on('mouseleave', startTimer); // При уходе курсора возобновляем таймер

        // Добавляем обработчики событий для кнопок "следующий" и "предыдущий"
        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            nextSlide();
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            /*
                Переход к предыдущему слайду.
            */
            if (offset == 0) {
                offset = +width.replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        // Добавляем обработчик события для индикаторов
        /*
            Обработка клика по индикатору для переключения на соответствующий слайд.
        */
        const sliderId = this[i].getAttribute('id');
        $(`#${sliderId} .carousel-indicators li`).click(e => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;

            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });
    }
};

$('.carousel').carousel(); // Инициализация каруселей на странице

