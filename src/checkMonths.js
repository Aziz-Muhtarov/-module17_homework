function checkMonths(n) {

    if (typeof n !== 'number') {
        return 'неправильный тип данных';
    }

    const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

    if (n >= 1 && n <= 12) {
        return months[n - 1];
    } else {
        return 'Entered wrong numbers';
    }
}

module.exports = checkMonths;