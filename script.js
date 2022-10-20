"use strict";

function getResult(x, y) {
    let result;
    let pow = x ** y;
    const resultArr = Array.from(String(pow), Number);
    return result = resultArr.reduce((sum, num) => sum + num);
}

console.log(getResult(4, 8));