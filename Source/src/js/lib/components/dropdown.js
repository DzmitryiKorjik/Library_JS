// Импорт библиотеки $
import $ from '../core';

// Добавление метода dropdown к прототипу $
$.prototype.dropdown = function() {
    // Цикл по всем элементам, на которых был вызван метод dropdown
    for (let i = 0; i < this.length; i++) {
        // Получение значения атрибута id для текущего элемента
        const id = this[i].getAttribute('id');
        // Назначение обработчика клика для текущего элемента
        $(this[i]).click(() => {
            // Переключение видимости элементов с атрибутом data-toggle-id, равным значению атрибута id текущего элемента
            $(`[data-toggle-id="${id}"]`).fadeToggle(300);
        });
    }
};

// Вызов метода dropdown для всех элементов с классом dropdown-toggle
$('.dropdown-toggle').dropdown();
