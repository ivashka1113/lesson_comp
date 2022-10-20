"use strict";
const inputA = document.getElementById("a");
const inputB = document.getElementById("b");
const sumBtn = document.getElementById("sum");
const multBtn = document.getElementById("mult");
const inputRes = document.getElementById("res");

const calculator = {
    result: 0,

    sum: () => {
        console.log("Событие");
        inputA.value === "" || inputA.value === "" ?
            alert("Вы ввели не все данные") : this.result = +inputA.value + +inputB.value;
        calculator.show();
    },

    mult: () => {
        console.log("Событие");
        inputA.value === "" || inputA.value === "" ?
            alert("Вы ввели не все данные") : this.result = +inputA.value * +inputB.value;
        calculator.show();
    },

    show: () => {
        console.log("Событие");
        inputRes.value = this.result;
        console.log(this.result);
        console.log(typeof this.result);
        if (isNaN(this.result)) alert("Вы ввели не числа");
        this.result = 0;
    },

    start: () => {
        sumBtn.addEventListener("click", calculator.sum);
        multBtn.addEventListener("click", calculator.mult);
    }

}

calculator.start();