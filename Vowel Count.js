/*Возвращает количество гласных в заданной строке.
Мы будем считать a, e, i, o, u гласными (но не y).
Входная строка будет состоять только из строчных букв и / или пробелов.*/


function getCount(str) {
    var vowelsCount = 0;
    var vowelLetters = ['a', 'e', 'i', 'o', 'u'];
    var stringArr = str.split('');
    for (var i = 0; i < stringArr.length; i++) {
        for (var j = 0; j < vowelLetters.length; j++) {
            if (stringArr[i] === vowelLetters[j]) {
                vowelsCount++;
            }
        }
    }
    return vowelsCount;
}