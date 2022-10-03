let lang = prompt("Выберите язык/Choose language (ru/en)");
const langArr = [];


if (lang === "ru") {
    console.log("Понедельник\nВторник\nСреда\nЧетверг\nПятница\nСуббота\nВоскресенье");
} else {
    console.log("Monday\nTuesday\nWednesday\nThursday\nFriday\nSaturday\nSunday");
}

switch (true) {
    case lang === "ru":
        console.log("Понедельник\nВторник\nСреда\nЧетверг\nПятница\nСуббота\nВоскресенье");
        break;
    default:
        console.log("Monday\nTuesday\nWednesday\nThursday\nFriday\nSaturday\nSunday");
        break;
}

langArr['en'] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
langArr['ru'] = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

console.log(langArr[lang]);

let namePerson = prompt("Введите имя (Артём, Александр, др.)");

namePerson === "Артём" ? console.log(namePerson + " - директор") : namePerson === "Александр" ? console.log(namePerson + " - преподаватель") : console.log(namePerson + " - студент");