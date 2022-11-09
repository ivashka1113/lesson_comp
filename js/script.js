const filterByType = (type, ...values) => values.filter(value => typeof value === type), //Функция, которая создаёт массив из элементов, тип значения которых совпадает с переданным

	hideAllResponseBlocks = () => { //Добавляет display-none всем блокам с классом 'dialog__response-block'
		const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block')); // Создание массива из всех блоков с классом 'dialog__response-block'
		responseBlocksArray.forEach(block => block.style.display = 'none'); //Добавление стиля display-none всем элементам массива
	},

	showResponseBlock = (blockSelector, msgText, spanSelector) => {
		hideAllResponseBlocks(); //Скрывает все блоки с классом 'dialog__response-block'
		document.querySelector(blockSelector).style.display = 'block'; // Добавляет display-block блоку с классом blockSelector
		if (spanSelector) {
			document.querySelector(spanSelector).textContent = msgText; //Если передали spanSelector, то блоку с классом spanSelector, меняют текст на msgText 
		}
	},

	showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error'), //Функция, которая вызывает функцию showResponseBlock с определенными аргументами, которые подходят для обозначения ошибки

	showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok'), //Функция, которая вызывает функцию showResponseBlock с определенными аргументами, которые подходят для обозначения результата

	showNoResults = () => showResponseBlock('.dialog__response-block_no-results'), //Функция, которая вызывает функцию showResponseBlock с определенными аргументами, которые подходят для обозначения отсутсвия результата

	tryFilterByType = (type, values) => {
		try { //Попытаться выполнить следующий код
			const valuesArray = eval(`filterByType('${type}', ${values})`).join(", "); //Переменная valuesArray равна строке, полученной из массива, созданного функцией filterByType
			const alertMsg = (valuesArray.length) ? //Переменная alertMsg принимает значение `Данные с типом ${type}: ${valuesArray}`, если в строке есть данные с выбранным типом, и `Отсутствуют данные типа ${type}`, если их нет
				`Данные с типом ${type}: ${valuesArray}` :
				`Отсутствуют данные типа ${type}`;
			showResults(alertMsg); //Вызов функции, которая отображает сообщение о наличии результата и сам результат
		} catch (e) {
			showError(`Ошибка: ${e}`); //Вызов функции, которая отобразит сообщение об ошибке
		}
	};

const filterButton = document.querySelector('#filter-btn'); //Получение кнопки filter-btn

filterButton.addEventListener('click', e => { //Навешивание слушателя на filter-btn, который по клику будет исполнять следующий код
	const typeInput = document.querySelector('#type'); //Получение селекта, где выбирается тип искомых данных
	const dataInput = document.querySelector('#data'); //Получение поля для ввода данных

	if (dataInput.value === '') { //Если поле для ввода данных пусто
		dataInput.setCustomValidity('Поле не должно быть пустым!'); //Выводится сообщение валидации поля о том, что оно не должно быть пустым
		showNoResults(); //Вызов функции, которая отобразит сообщение об отсутсвии результата
	} else { //иначе
		dataInput.setCustomValidity(''); //Убирается сообщение валидации поля
		e.preventDefault(); //Отменяется дефолтное событие кнопки
		tryFilterByType(typeInput.value.trim(), dataInput.value.trim()); //Вызов функции, которая будет искать выбранный тип данных в поле
	}
});