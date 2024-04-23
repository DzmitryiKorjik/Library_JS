/*
    Импортируем объект $ из модуля '../core', который используется для работы с DOM.
*/
import $ from '../core';

/*
    Расширяем прототип объекта $ методом accordion для работы с аккордеонами.
    Метод принимает три параметра: 
    - headActive: класс для активного заголовка аккордеона (по умолчанию 'accordion-head--active').
    - contentActive: класс для активного контента аккордеона (по умолчанию 'accordion-content--active').
    - paddings: дополнительный отступ при раскрытии контента (по умолчанию 40).
*/
$.prototype.accordion = function(headActive = 'accordion-head--active', contentActive = 'accordion-content--active', paddings = 40) {
    /*
        Перебираем все элементы, к которым применяется аккордеон.
    */
    for (let i = 0; i < this.length; i++) {
        /*
            Добавляем обработчик события 'click' для каждого элемента аккордеона.
        */
        $(this[i]).click(() => {
            /*
                Переключаем класс активности для заголовка аккордеона.
            */
            $(this[i]).toggleClass(headActive);
            /*
                Переключаем класс активности для контента аккордеона.
            */
            $(this[i].nextElementSibling).toggleClass(contentActive);

            /*
                Если заголовок аккордеона имеет класс активности, устанавливаем максимальную высоту для контента.
                Иначе, устанавливаем высоту контента в 0.
            */
            if (this[i].classList.contains(headActive)) {
                this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + "px";
            } else {
                this[i].nextElementSibling.style.maxHeight = "0px";
            }
        });
    }
};

/*
    Применяем метод accordion ко всем элементам с классом 'accordion-head'.
*/
$('.accordion-head').accordion();
