/*
*Дан текст, который содержит различные английские буквы и знаки препинания. Вам необходимо найти самую частую букву в тексте. Результатом должна быть 
*буква в нижнем регистре.
*При поиске самой частой буквы, регистр не имеет значения, так что при подсчете считайте, что "A" == "a". Убедитесь, что вы не считайте знаки препинания,
*цифры и пробелы, а только буквы.
*Если в тексте две и больше буквы с одинаковой частотой, тогда результатом будет буква, которая идет первой в алфавите. Для примера, "one" содержит "o", 
*"n", "e" по одному разу, так что мы выбираем "e".
*/
"use strict";
function mostWanted(data) {
    let arrWord = data.toLowerCase().replace(/[^a-z]/g, "").split("").sort(),
        tmp = {},
        flag = 0,
        max = 0,
        maxSymbol = '';

    for (let i = 0; i < arrWord.length; i++) {
        for (let j = 0; j < arrWord.length; j++) {
            if (arrWord[i] == arrWord[j] && i != j) {
                if (tmp.hasOwnProperty(arrWord[i])) {
                    tmp[arrWord[i]] = tmp[arrWord[i]] + 1;
                } else {
                    tmp[arrWord[i]] = 1;
                }
                break;
            }
        }

    }
    if (Object.keys(tmp).length == 0) {
        return arrWord[0];
    } else {
        for (let item in tmp) {
            if (max < tmp[item]) {
                max = tmp[item];
                maxSymbol = item;
            }
        }
        return maxSymbol;
    }
}

console.log(mostWanted("Hello World!")); //, "l", "1st example");
console.log(mostWanted("How do you do?")); //, "o", "2nd example");
console.log(mostWanted("One")); //, "e", "3rd example");
console.log(mostWanted("Oops!")); //, "o", "4th example");
console.log(mostWanted("AAaooo!!!!")); //, "a", "Letters");