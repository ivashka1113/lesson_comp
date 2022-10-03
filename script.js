let lang = prompt("Выберите язык/Choose language (ru/en)");
const weekDaysRu = "Понедельник\nВторник\nСреда\nЧетверг\nПятница\nСуббота\nВоскресенье";
const weekDaysEn = "Monday\nTuesday\nWednesday\nThursday\nFriday\nSaturday\nSunday";
const langArr = [];


if (lang === "ru") {
    console.log(weekDaysRu);
} else {
    console.log(weekDaysEn);
}

switch (true) {
    case lang === "ru":
        console.log(weekDaysRu);
        break;
    default:
        console.log(weekDaysEn);
        break;
}

langArr['en'] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
langArr['ru'] = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

console.log(langArr[lang]);

let namePerson = prompt("Введите имя (Артём, Александр, др.)");

namePerson === "Артём" ? console.log(namePerson + " - директор") : namePerson === "Александр" ? console.log(namePerson + " - преподаватель") : console.log(namePerson + " - студент");