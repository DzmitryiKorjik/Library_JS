import $ from '../core'; // Импортировать библиотеку $ из файла '../core'.

// Добавить новый метод в прототип $ для анимации с течением времени.
$.prototype.animateOverTime = function(dur, cb, fin) {
    let timeStart; // Переменная для хранения времени начала анимации.

    // Определить функцию _animateOverTime для управления анимацией с течением времени.
    function _animateOverTime(time) {
        // Если время начала анимации не установлено, установить его.
        if (!timeStart) {
            timeStart = time;
        }

        // Рассчитать прошедшее время и процент завершения анимации.
        let timeElapsed = time - timeStart;
        let complection = Math.min(timeElapsed / dur, 1);

        // Вызвать функцию обратного вызова с процентом завершения анимации.
        cb(complection);

        // Если анимация еще не завершена, запросить следующий кадр анимации.
        if (timeElapsed < dur) {
            requestAnimationFrame(_animateOverTime);
        } else {
            // Если задана окончательная функция обратного вызова, вызвать ее.
            if (typeof fin === 'function') {
                fin();
            }
        }
    }

    // Вернуть функцию _animateOverTime.
    return _animateOverTime;
};

// Добавить новый метод в прототип $ для плавного появления элементов.
$.prototype.fadeIn = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        // Установить стиль отображения элемента в указанное значение или 'block' по умолчанию.
        this[i].style.display = display || 'block';

        // Определить функцию _fadeIn для плавного появления элемента.
        const _fadeIn = (complection) => {
            // Установить прозрачность элемента на основе процента завершения анимации.
            this[i].style.opacity = complection;
        };

        // Создать анимацию с использованием метода animateOverTime и запросить кадр анимации.
        const ani = this.animateOverTime(dur, _fadeIn, fin);
        requestAnimationFrame(ani);
    }

    // Вернуть текущий объект.
    return this;
};

// Добавить новый метод в прототип $ для плавного исчезновения элементов.
$.prototype.fadeOut = function(dur, fin) {
    for (let i = 0; i < this.length; i++) {
        // Определить функцию _fadeOut для плавного исчезновения элемента.
        const _fadeOut = (complection) => {
            // Установить прозрачность элемента на основе процента завершения анимации.
            this[i].style.opacity = 1 - complection;
            // Если анимация завершена, скрыть элемент.
            if (complection === 1) {
                this[i].style.display = 'none';
            }
        };

        // Создать анимацию с использованием метода animateOverTime и запросить кадр анимации.
        const ani = this.animateOverTime(dur, _fadeOut, fin);
        requestAnimationFrame(ani);
    }

    // Вернуть текущий объект.
    return this;
};

// Добавить новый метод в прототип $ для плавного переключения видимости элементов.
$.prototype.fadeToggle = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        // Если элемент скрыт, отобразить его.
        if (window.getComputedStyle(this[i]).display === 'none') {
            this[i].style.display = display || 'block';

            // Определить функцию _fadeIn для плавного появления элемента.
            const _fadeIn = (complection) => {
                // Установить прозрачность элемента на основе процента завершения анимации.
                this[i].style.opacity = complection;
            };

            // Создать анимацию появления с использованием метода animateOverTime и запросить кадр анимации.
            const ani = this.animateOverTime(dur, _fadeIn, fin);
            requestAnimationFrame(ani);
        } else {
            // Если элемент видим, скрыть его.
            const _fadeOut = (complection) => {
                // Установить прозрачность элемента на основе процента завершения анимации.
                this[i].style.opacity = 1 - complection;
                // Если анимация завершена, скрыть элемент.
                if (complection === 1) {
                    this[i].style.display = 'none';
                }
            };

            // Создать анимацию исчезновения с использованием метода animateOverTime и запросить кадр анимации.
            const ani = this.animateOverTime(dur, _fadeOut, fin);
            requestAnimationFrame(ani);
        }
    }

    // Вернуть текущий объект.
    return this;
};
