"use strict";

const stringReduct = function (str) {

    switch (true) {
        case typeof (str) === "string":
            let strTrans = str.trim();

            if (strTrans.length >= 30) {
                console.log(strTrans.substr(0, 29) + "...");
            } else {
                console.log(strTrans);
            }
            break;

        default:
            alert("Вы ввели не строку");
            break;
    }
}

stringReduct(prompt("Введите какую-нибудь строку", "Введите какую-нибудь строку"));