/*
There are four substring missions that were born all in one day and you shouldn’t be needed more than one day to solve them. 
All of those mission can be simply solved by brute force, but is it always the best way to go? (you might not have access to 
all of those missions yet, but they are going to be available with more opened islands on the map).
This mission is the first one of the series. Here you should find the length of the longest substring that consists of the 
same letter. For example, line "aaabbcaaaa" contains four substrings with the same letters "aaa", "bb","c" and "aaaa". 
The last substring is the longest one which makes it an answer.
*/
"use strict";
function longRepeat(data) {
    if (data == "") return 0;
    let arr = data.split(""),
        cnt = 1,
        res = [],
        tmp = [],
        start = arr[0];
    for (var j = 1; j <= arr.length; j++) {
        if (start == arr[j]) {
            cnt++;
        } else {
            res.push(cnt);
            cnt = 1;
            start = arr[j];
        }
    }

    // console.log(res);
    return Math.max(...res);
}
console.log(longRepeat('sdsffffse'));
console.log(longRepeat('ddvvrwwwrggg'));