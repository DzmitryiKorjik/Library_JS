// Импорт библиотеки $
import $ from '../core';

// Добавление метода on к прототипу $
$.prototype.on = function(eventName, callback) {
    // Цикл по всем элементам, на которых был вызван метод on
    for (let i = 0; i < this.length; i++) {
        // Проверка наличия eventName и callback
        if (!eventName || !callback) {
            return this; // Если один из параметров отсутствует, возвращаем this
        }
        // Добавление обработчика события eventName к текущему элементу
        this[i].addEventListener(eventName, callback);
    }
    // Возвращаем this для поддержки цепочки вызовов методов
    return this;
};

// Добавление метода off к прототипу $
$.prototype.off = function(eventName, callback) {
    // Цикл по всем элементам, на которых был вызван метод off
    for (let i = 0; i < this.length; i++) {
        // Проверка наличия eventName и callback
        if (!eventName || !callback) {
            return this; // Если один из параметров отсутствует, возвращаем this
        }
        // Удаление обработчика события eventName у текущего элемента
        this[i].removeEventListener(eventName, callback);
    }
    // Возвращаем this для поддержки цепочки вызовов методов
    return this;
};

// Добавление метода click к прототипу $
$.prototype.click = function(handler) {
    // Цикл по всем элементам, на которых был вызван метод click
    for (let i = 0; i < this.length; i++) {
        // Проверка наличия обработчика события
        if (handler) {
            // Если обработчик есть, добавляем его к событию click текущего элемента
            this[i].addEventListener('click', handler);
        } else {
            // Если обработчика нет, вызываем событие click для текущего элемента
            this[i].click();
        }
    }
    // Возвращаем this для поддержки цепочки вызовов методов
    return this;
};
