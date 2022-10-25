"use strict";

"use strict";

const timer = () => {

    const text = document.getElementById("text");
    const newYearDate = "1 January 2023";
    const newDate = () => {
        let date = new Date();
        let today = date.toLocaleDateString("ru-Ru", {
            weekday: "long"
        })
        let dayTime;
        let timeNow = date.toLocaleTimeString("en");
        let dateStop = new Date(newYearDate);
        let timeRemaining = dateStop.getTime() - date.getTime();
        let dayRemining = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);

        switch (true) {
            case (date.getHours() < 5): {
                dayTime = "Доброй ночи";
                break;
            }

            case (date.getHours() < 12): {
                dayTime = "Доброе утро";
                break;
            }

            case (date.getHours() < 18): {
                dayTime = "Добрый день";
                break;
            }

            case (date.getHours() <= 24): {
                dayTime = "Добрый вечер";
                break;
            }
        }

        return {
            dayTime,
            today,
            timeNow,
            dayRemining
        }
    }

    const showTime = () => {
        let time = newDate();
        text.innerHTML = `${time.dayTime} <br />
        Сегодня: ${time.today} <br />
        Текущее время: ${time.timeNow} <br />
        До нового года осталось ${time.dayRemining} дней`;
    }

    showTime();

    setInterval(() => {
        showTime();
    }, 1000)
}

timer();