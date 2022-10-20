"use strict";

const countryInput = document.getElementById("country");
const cityInput = document.getElementById("city");
const result = document.querySelector(".result")

const cityArr = {
    rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
    uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
    bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
    jap: ['Токио', 'Киото', 'Осака', 'Иокогама']
}

const cityShow = () => {
    cityInput.style.display = "block";
    cityInput.innerHTML = "";
    let countryValue = countryInput.value;
    cityArr[countryValue].forEach((item) => {
        const opt = document.createElement('option');
        opt.innerHTML = `<option>${item}</option>`;
        cityInput.append(opt);
    });
    showResult();
}

const showResult = () => {
    result.textContent = `${countryInput.options[countryInput.selectedIndex].textContent} ${cityInput.value}`;
}
cityShow();
countryInput.addEventListener('change', cityShow);
cityInput.addEventListener('change', showResult);