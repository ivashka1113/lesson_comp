const num = 266219; // создаём переменную
const numStr = String(num); // помещаем в переменную число преоразованное в строку
const numArr = Array.from(numStr); // помещаем строку в массив, это новый элемент массива
let numProd = 1;

for (let i = 0; i < numArr.length; i++) { //умножаем каждый элемент массива
    numProd = numProd * numArr[i];
}

console.log(numProd); //выводим полученное значение

numProd **= 3; //возводим в 3 степень

console.log(String(numProd).substring(0, 2)); //выводим первые 2 цифры числа, преобразованного в строку