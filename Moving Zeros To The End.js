/*Напишите алгоритм, который берет массив и перемещает все нули в конец, сохраняя порядок других элементов.*/


var moveZeros = function (arr) {
    var newArr = arr.filter(item => item !== 0);
    while (newArr.length < arr.length) {
        newArr.push(0);
    }
    return newArr;
}