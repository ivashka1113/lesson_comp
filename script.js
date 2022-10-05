"use strict";

const stringReduct = function (str) {

    if (typeof (str) !== "string") {
        alert("Вы ввели не строку");
        return;
    }

    let strTrans = str.trim();

    if (strTrans.length >= 30) {
        console.log(strTrans.substring(0, 29) + "...");
    } else {
        console.log(strTrans);
    }

}

stringReduct(prompt("Введите какую-нибудь строку", "Введите какую-нибудь строку"));