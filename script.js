"use strict";

const func = function (arg) {

    switch (true) {
        case typeof (arg) === "string":
            let argTrans = arg
                .trim();
            if (argTrans.length >= 30) {
                console.log(argTrans.substr(0, 29) + "...");
            } else {
                console.log(argTrans);
            }
            break;

        default:
            alert("Вы ввели не строку");
            break;
    }
}

func(prompt("Введите какую-нибудь строку", "Введите какую-нибудь строку"));