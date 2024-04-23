// Импорт библиотеки $
import $ from '../core';

// Добавление метода addClass к прототипу $
$.prototype.addClass = function(...className) {
    // Цикл по всем элементам, на которых был вызван метод addClass
    for (let i = 0; i < this.length; i++) {
        // Проверка наличия свойства classList у текущего элемента
        if (!this[i].classList) {
            continue; // Если нет, переходим к следующему элементу
        }
        // Добавление классов к текущему элементу
        this[i].classList.add(...className);
    }
    // Возвращаем this для поддержки цепочки вызовов методов
    return this;
};

// Добавление метода removeClass к прототипу $
$.prototype.removeClass = function(...className) {
    // Цикл по всем элементам, на которых был вызван метод removeClass
    for (let i = 0; i < this.length; i++) {
        // Проверка наличия текущего элемента
        if (!this[i]) {
            continue; // Если нет, переходим к следующему элементу
        }
        // Удаление классов у текущего элемента
        this[i].classList.remove(...className);
    }
    // Возвращаем this для поддержки цепочки вызовов методов
    return this;
};

// Добавление метода toggleClass к прототипу $
$.prototype.toggleClass = function(className) {
    // Цикл по всем элементам, на которых был вызван метод toggleClass
    for (let i = 0; i < this.length; i++) {
        // Проверка наличия свойства classList у текущего элемента
        if (!this[i].classList) {
            continue; // Если нет, переходим к следующему элементу
        }
        // Переключение класса у текущего элемента
        this[i].classList.toggle(className);
    }
    // Возвращаем this для поддержки цепочки вызовов методов
    return this;
};
