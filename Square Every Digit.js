/*Необходимо возвести в квадрат каждую цифру числа и соединить их.
Например, если мы запустим 9119 через функцию, выйдет 811181, потому что 9^2 равно 81, а 1^2 равно 1.
Примечание: функция принимает целое число и возвращает целое число.*/

//Вариант 1
function squareDigits(num) {
    if (typeof num === 'number') {
        num = num.toString();
    }
    var squareEveryDigit = num.split('').map(elem => {
        return elem * elem
    });
    return Number(squareEveryDigit.join(''))
}


//Вариант 2 (короткий)
function squareDigits(num) {
    return Number(('' + num).split('').map(elem => {
        return elem * elem
    }).join(''))
}