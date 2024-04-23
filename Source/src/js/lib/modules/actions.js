// Импорт библиотеки $
import $ from '../core';

// Добавление метода html к прототипу $
$.prototype.html = function(content) {
    // Цикл по всем элементам, на которых был вызван метод html
    for (let i = 0; i < this.length; i++) {
        // Если передан контент, устанавливаем его как HTML-содержимое элемента
        if (content) {
            this[i].innerHTML = content;
        } else {
            // Если контент не передан, возвращаем HTML-содержимое первого элемента
            return this[i].innerHTML;
        }
    }
    // Возвращаем this для поддержки цепочки вызовов методов
    return this;
}

// Добавление метода eq к прототипу $
$.prototype.eq = function(i) {
    // Сохранение элемента по индексу i
    const swap = this[i];
    // Определение длины объекта $
    const objLength = Object.keys(this).length;

    // Удаление всех свойств объекта $ кроме "0"
    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }

    // Установка сохраненного элемента как первого элемента $
    this[0] = swap;
    // Установка длины $ в 1
    this.length = 1;

    // Возвращаем this для поддержки цепочки вызовов методов
    return this;
}

// Добавление метода index к прототипу $
$.prototype.index = function() {
    // Получение родительского элемента первого элемента в объекте $
    const parent = this[0].parentNode;
    // Получение всех дочерних элементов родительского элемента
    const childs = [...parent.children];

    // Функция для поиска индекса текущего элемента в массиве дочерних элементов
    const findMyIndex = (item) => {
        return item == this[0];
    }

    // Возвращение индекса текущего элемента в массиве дочерних элементов
    return childs.findIndex(findMyIndex);
};

// Добавление метода find к прототипу $
$.prototype.find = function(selector) {
    let numberOfItems = 0;
    let counter = 0;

    // Создание копии объекта $
    const copyObj = Object.assign({}, this);

    // Перебор всех элементов в копии объекта $
    for(let i = 0; i < copyObj.length; i++) {
        // Поиск всех элементов внутри текущего элемента, соответствующих селектору
        const arr = copyObj[i].querySelectorAll(selector);
        // Если нет найденных элементов, переходим к следующему
        if (arr.length == 0) {
            continue;
        }

        // Копирование найденных элементов в объект $
        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }

        // Обновление счетчика общего количества элементов
        numberOfItems += arr.length;
    }

    // Установка длины объекта $ в общее количество найденных элементов
    this.length = numberOfItems;

    // Удаление лишних свойств объекта $ (если они есть)
    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    // Возвращаем this для поддержки цепочки вызовов методов
    return this;
};

// Добавление метода closest к прототипу $
$.prototype.closest = function(selector) {
    let counter = 0;

    // Перебор всех элементов в объекте $
    for (let i = 0; i < this.length; i++) {
        // Поиск ближайшего родителя, соответствующего селектору
        this[i] = this[i].closest(selector);
        counter++;
    }

    // Удаление лишних свойств объекта $ (если они есть)
    const objLength = Object.keys(this).length;
    for (; counter < objLength; counter++) {
        delete this[counter];
    }

    // Возвращаем this для поддержки цепочки вызовов методов
    return this;
};

// Добавление метода siblings к прототипу $
$.prototype.siblings = function(selector) {
    let numberOfItems = 0;
    let counter = 0;

    // Создание копии объекта $
    const copyObj = Object.assign({}, this);

    // Перебор всех элементов в копии объекта $
    for(let i = 0; i < copyObj.length; i++) {
        // Получение всех дочерних элементов родительского элемента, кроме текущего
        const arr = copyObj[i].parentNode.children;

        // Перебор всех дочерних элементов родительского элемента
        for (let j = 0; j < arr.length; j++) {
            // Пропуск текущего элемента
            if (copyObj[i] === arr[j]) {
                continue;
            }

            // Копирование элементов в объект $
            this[counter] = arr[j];
            counter++;
        }

        // Обновление счетчика общего количества элементов
        numberOfItems += arr.length - 1;
    }

    // Установка длины объекта $ в общее количество найденных элементов
    this.length = numberOfItems;

    // Удаление лишних свойств объекта $ (если они есть)
    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    // Возвращаем this для поддержки цепочки вызовов методов
    return this;
};
