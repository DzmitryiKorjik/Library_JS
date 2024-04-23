// Импорт библиотеки $
import $ from '../core';

// Добавление метода show к прототипу $
$.prototype.show = function() {
    // Цикл по всем элементам, на которых был вызван метод show
    for(let i = 0; i < this.length; i++) {
        // Проверка наличия свойства style у текущего элемента
        if (!this[i].style) {
            continue; // Если нет, переходим к следующему элементу
        }
        // Установка свойства display для отображения элемента
        this[i].style.display = '';
    }
    // Возвращаем this для поддержки цепочки вызовов методов
    return this;
};

// Добавление метода hide к прототипу $
$.prototype.hide = function() {
    // Цикл по всем элементам, на которых был вызван метод hide
    for(let i = 0; i < this.length; i++) {
        // Проверка наличия свойства style у текущего элемента
        if (!this[i].style) {
            continue; // Если нет, переходим к следующему элементу
        }
        // Установка свойства display для скрытия элемента
        this[i].style.display = 'none';
    }
    // Возвращаем this для поддержки цепочки вызовов методов
    return this;
};

// Добавление метода toggle к прототипу $
$.prototype.toggle = function() {
    // Цикл по всем элементам, на которых был вызван метод toggle
    for(let i = 0; i < this.length; i++) {
        // Проверка наличия свойства style у текущего элемента
        if (!this[i].style) {
            continue; // Если нет, переходим к следующему элементу
        }

        // Переключение отображения элемента
        if (this[i].style.display === 'none') {
            this[i].style.display = '';
        } else {
            this[i].style.display = 'none';
        }
    }
    // Возвращаем this для поддержки цепочки вызовов методов
    return this;
};
