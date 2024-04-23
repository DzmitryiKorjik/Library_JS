/*
    Импортируем объект $ из модуля '../core', который используется для работы с DOM.
*/
import $ from '../core';

/*
    Расширяем прототип объекта $ методом tab для работы с вкладками.
*/
$.prototype.tab = function() {
    /*
        Перебираем все элементы, к которым применяется вкладка.
    */
    for (let i = 0; i < this.length; i++) {
        /*
            Добавляем обработчик события 'click' для каждого элемента вкладки.
        */
        $(this[i]).on('click', () => {
            /*
                Добавляем класс 'tab-item--active' текущему элементу вкладки и удаляем его у всех остальных элементов вкладки.
                Затем находим общий родительский элемент 'tab', находим все элементы '.tab-content', 
                удаляем класс 'tab-content--active' у всех элементов, и добавляем его только к соответствующему элементу вкладки.
            */
            $(this[i])
                .addClass('tab-item--active')
                .siblings()
                .removeClass('tab-item--active')
                .closest('.tab')
                .find('.tab-content')
                .removeClass('tab-content--active')
                .eq($(this[i]).index())
                .addClass('tab-content--active');
        });
    }
};

/*
    Применяем метод tab ко всем элементам с классом 'tab-item', находящимся внутри элементов с атрибутом 'data-tabpanel'.
*/
$('[data-tabpanel] .tab-item').tab();
