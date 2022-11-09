"use strict";

const carSelect = document.getElementById("cars");
const selectedCarInfo = document.querySelector(".selected-car")

const getCars = ({
    url: url,
    data: data
}) => {
    return fetch(url, {
        method: "GET",
        body: data,
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }).then(data => data.json())
}

carSelect.addEventListener("change", (data) => {
    const carSeletcValue = carSelect.options[carSelect.selectedIndex].value;
    getCars({
        url: "./cars.json"
    }).then(data => {
        data.cars.forEach(car => {
            if (carSeletcValue === car.brand) {
                selectedCarInfo.innerHTML = `
                <p>Тачка: ${car.brand} ${car.model}</p>
                <p>Цена: ${car.price}$</p>`
                console.log(carSeletcValue, car.brand)
            } else if (carSeletcValue === "") {
                selectedCarInfo.innerHTML = "";
            };
        });
    })
})