/*
* Медиана - это числовое значение, которое делит сортированый массив чисел на большую и меньшую половины. 
* В сортированом массиве с нечетным числом элементов медиана - это число в середине массива. Для массива с 
* четным числом элементов, где нет одного элемента точно посередине, медиана - это среднее значение двух чисел, 
* находящихся в середине массива. В этой задаче дан непустой массив натуральных чисел. 
* Входные данные: Массив как список (list) чисел (int).
* Выходные данные: Медиана как число (int, float).
*/
function median(arr) {
    var arrSort = arr.sort(function (a, b) {
        return a - b;
    });
    if (arrSort.length % 2 == false) {
        return (arrSort[Math.round(arrSort.length / 2) - 1] + arrSort[Math.round(arrSort.length / 2)]) / 2;
    } else {
        return arrSort[Math.round(arrSort.length / 2) - 1];
    }
}

console.log(median([1, 2, 3, 4, 5]));
console.log(median([3, 1, 2, 5, 3]));
console.log(median([1, 300, 2, 200, 1]));
console.log(median([3, 6, 20, 99, 10, 15]));