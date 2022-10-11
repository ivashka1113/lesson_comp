"use strict";

const week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const year = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

let today;
let day;
let dayWeek;
let dd;
let mm;
let mmNum;
let yyyy;
let hr;
let min;
let sec;
let today_a;
let today_b;


function getNewDay() {
    today = new Date();
    day = today.getDay();
    dayWeek = week[day];
    dd = String(today.getDate()).padStart(2, '0');
    mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    mmNum = year[day];
    yyyy = today.getFullYear();
    hr = today.getHours();
    min = today.getMinutes();
    sec = today.getSeconds();
    return;
}
// const declen = function () {

//     switch (true) {
//         case (hr === 1):
//             hrDeclen = " час ";
//         case (min === 1):
//             minDeclen = " минута ";
//         case (sec === 1):
//             secDeclen = " секунда ";
//         case (hr === 2 || hr === 3 || hr === 4):
//             hrDeclen = " часа ";
//         case (min === 2 || min === 3 || min === 4):
//             minDeclen = " минуты ";
//         case (sec === 2 || sec === 3 || sec === 4):
//             secDeclen = " секунды ";
//     }
//     return today = "Сегодня " + dayWeek + ", " + dd + ' ' + mmNum + ' ' + yyyy + " года, " + hr + hrDeclen + min + minDeclen + sec + secDeclen + "<br \/>";
// }

function numstr(n, text_forms) {
    var m = Math.abs(n) % 100;
    var n1 = m % 10;
    if (m > 10 && m < 20) {
        return text_forms[2];
    }
    if (n1 > 1 && n1 < 5) {
        return text_forms[1];
    }
    if (n1 == 1) {
        return text_forms[0];
    }
    return text_forms[2];
}

function addZero(num) {
    if (num.toString().length === 1) num = "0" + num;
    return num;
}

function clearPage() {
    document.body.innerHTML = "";
}


const timer = function () {

    getNewDay();

    today_a = "Сегодня " + dayWeek + ", " + dd + ' ' + mmNum + ' ' + yyyy + " года, " + `${hr} ${numstr(hr, [' час ', ' часа ', ' часов '])}` + `${min} ${numstr(min, [' минута ', ' минуты ', ' минут '])}` + `${sec} ${numstr(sec, [' секунда ', ' секунды ', ' секунд '])}` + "<br \/>";
    document.write(today_a);

    today_b = addZero(dd) + "." + addZero(mm) + '.' + yyyy + '-' + addZero(hr) + ":" + addZero(min) + ":" + addZero(sec);
    document.write(today_b);

    setTimeout(clearPage, 900);
}

let timerId_2 = setInterval(timer, 1000);