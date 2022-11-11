let regName = /^[a-zA-Zа-яА-ЯёЁ]+$/i; // шаблон для имени
let regTel = /\+7\(\d{3}\)\d{3}-\d{4}/; // шаблон для телефона
let regEmail = /^[a-z0-9]+[.-]?[a-z0-9]+@[a-z]+.[a-z]{2,3}$/; // шаблон для эл почты
let regMessage = /.+/i; // шаблон для сообщения

// функция проверки соответствия значения шаблону
function check(value, reg, selector) {
    let field = document.querySelector('#' + selector);
    let test = reg.test(value);
    let error = document.querySelector('#' + selector + '_error');
    if (test) {
        field.style.backgroundColor = '#B8FFB3';
        error.innerHTML = '';
    } else {
        field.style.backgroundColor = '#FFB6B1';
        error.innerHTML = 'Ошибка!';
    }
}