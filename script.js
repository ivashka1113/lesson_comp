"use strict";

const userInput = document.getElementById("user-input");
const userOutput = document.getElementById("user-output");
let intervalID;


const showText = () => {
    userOutput.textContent = userInput.value
}

userInput.addEventListener("input", () => {
    clearInterval(intervalID);
    intervalID = setInterval(showText, 300);
})