'use strict'

// Задание №1
let language = confirm('Сменить язык на английский?');

let week = [
	[
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	],
	[
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота',
		'Воскресенье',
	],
];

if (language) {
	language = 'en'
	console.log('language: ', language);
} else {
	language = 'ru'
	console.log('language: ', language);
}

if (language === 'en') {
	console.log(week[0].join(', '));
} else if (language === 'ru') {
	console.log(week[1].join(', '));
}

switch (language) {
	case 'en':
		console.log(week[0].join(', '));
		break;
		
		case 'ru':
			console.log(week[1].join(', '));
			break;
		}

let resultOne = language === 'en' ? week[0].join(', ') : week[1].join(', ');
console.log('resultOne: ', resultOne);


// Задание №2
let userName = prompt('Введите имя пользователя: ');

let resultSecond = userName === 'Артём' ? 'директор' : userName === 'Максим' ? 'преподаватель' : 'студент';

console.log(userName + ' - ', resultSecond);

