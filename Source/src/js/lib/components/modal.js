// Импорт библиотеки $
import $ from '../core';

// Добавление метода modal к прототипу $
$.prototype.modal = function(created) {
    // Цикл по всем элементам, на которых был вызван метод modal
    for (let i = 0; i < this.length; i++) {
        // Получение значения атрибута data-target
        const target = this[i].getAttribute('data-target');
        // Назначение обработчика клика для каждого элемента
        $(this[i]).click((e) => {
            e.preventDefault();
            // Появление модального окна с анимацией
            $(target).fadeIn(500);
            // Запрет прокрутки страницы, когда открыто модальное окно
            document.body.style.overflow = 'hidden';
        });
        
        // Получение всех элементов, имеющих атрибут data-close внутри модального окна
        const closeElements = document.querySelectorAll(`${target} [data-close]`);
        // Назначение обработчика клика для каждого элемента, закрывающего модальное окно
        closeElements.forEach(elem => {
            $(elem).click(() => {
                // Закрытие модального окна с анимацией
                $(target).fadeOut(500);
                // Возврат к стандартной прокрутке страницы
                document.body.style.overflow = '';
                // Удаление модального окна из DOM, если это было указано при создании
                if (created) {
                    document.querySelector(target).remove();
                }
            });
        });

        // Назначение обработчика клика на фон модального окна для его закрытия
        $(target).click(e => {
            if (e.target.classList.contains('modal')) {
                $(target).fadeOut(500);
                document.body.style.overflow = '';
                if (created) {
                    document.querySelector(target).remove();
                }
            }
        });
    }
};

// Вызов метода modal для всех элементов с атрибутом data-toggle="modal"
$('[data-toggle="modal"]').modal();

// Добавление метода createModal к прототипу $
$.prototype.createModal = function({text, btns} = {}) {
    // Цикл по всем элементам, на которых был вызван метод createModal
    for (let i = 0; i < this.length; i++) {
        // Создание нового элемента div для модального окна
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

        // Создание кнопок для модального окна на основе переданных параметров
        const buttons = [];
        for (let j = 0; j < btns.count; j++){
            let btn = document.createElement('button');
            btn.classList.add('btn', ...btns.settings[j][1]);
            btn.textContent = btns.settings[j][0];
            if (btns.settings[j][2]) {
                btn.setAttribute('data-close', 'true');
            }
            if (btns.settings[j][3] && typeof(btns.settings[j][3]) === 'function') {
                btn.addEventListener('click', btns.settings[j][3]);
            }

            buttons.push(btn);
        }

        // Формирование HTML-структуры модального окна с текстом и кнопками
        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">
                            ${text.title}
                        </div>
                    </div>
                    <div class="modal-body">
                        ${text.body} 
                    </div>
                    <div class="modal-footer">

                    </div>
                </div>
            </div>
        `;

        // Добавление кнопок в футер модального окна
        modal.querySelector(".modal-footer").append(...buttons);
        // Добавление модального окна в DOM
        document.body.appendChild(modal);
        // Вызов метода modal для только что созданного модального окна
        $(this[i]).modal(true);
        // Появление модального окна с анимацией
        $(this[i].getAttribute('data-target')).fadeIn(500);
    }
};
