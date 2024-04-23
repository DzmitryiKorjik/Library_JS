// Определение конструктора $
const $ = function(selector) {
    // Создание нового объекта с помощью конструктора $.prototype.init
    return new $.prototype.init(selector);
};

// Определение метода init для прототипа $
$.prototype.init = function(selector) {
    // Если селектор не передан, возвращаем пустой объект {}
    if (!selector) {
        return this; // {}
    }

    // Если селектор является DOM-элементом
    if (selector.tagName) {
        // Устанавливаем первый элемент массива this как переданный DOM-элемент
        this[0] = selector;
        // Устанавливаем длину массива this в 1
        this.length = 1;
        // Возвращаем this (ссылку на созданный объект)
        return this;
    }

    // Если селектор - строка, то выбираем все соответствующие элементы с помощью querySelectorAll
    Object.assign(this, document.querySelectorAll(selector));
    // Устанавливаем длину массива this равной количеству выбранных элементов
    this.length = document.querySelectorAll(selector).length;
    // Возвращаем this (ссылку на созданный объект)
    return this;
};

// Установка прототипа для объекта init
$.prototype.init.prototype = $.prototype;

// Делаем $ доступным в глобальной области видимости
window.$ = $;

// Экспортируем $ для использования в других модулях
export default $;
