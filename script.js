'use strict';

let weekList = [
	'Понедельник',
	'Вторник',
	'Среда',
	'Четверг',
	'Пятница',
	'Суббота',
	'Воскресенье',
];

let monthList = [
	'Января',
	'Февраля',
	'Марта',
	'Апреля',
	'Мая',
	'Июня',
	'Июля',
	'Августа',
	'Сентября',
	'Октября',
	'Ноября',
	'Декабря',
];

let paragraphFirst = document.createElement('p');
let paragraphSecond = document.createElement('p');

function start() {

	let date = new Date();
	let day = date.getDay();
	let dayMonth = date.getDate();
	let month = date.getMonth();
	let year = date.getFullYear();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();


	let declinationWordHours = function (hours) {

		if (hours == 1 || hours == 21 && hours != 11) {
			return 'час';
		} else if (hours >= 2 && hours <= 4 || hours >= 22) {
			return 'часа';
		} else {
			return 'часов';
		};

	};


	let declinationWordMinutes = function (minutes) {

		if (String(minutes).slice(-1) == 1 && minutes != 11) {
			return 'минута';
		} else if (minutes >= 2 && minutes <= 4) {
			return 'минуты';
		} else if (minutes >= 22 && /[2-4]/.test(String(minutes).slice(-1))) {
			return 'минуты';
		} else {
			return 'минут';
		};

	};


	let declinationWordSeconds = function (seconds) {

		if (String(seconds).slice(-1) == 1 && seconds != 11) {
			return 'секунда';
		} else if (seconds >= 2 && seconds <= 4) {
			return 'секунды';
		} else if (seconds >= 22 && /[2-4]/.test(String(seconds).slice(-1))) {
			return 'секунды';
		} else {
			return 'секунд';
		};

	};


	let addZero = function (number) {

		number = number.toString()
			if (number.length == 1) {
				return '0' + number;
		} else {
			return number;
		}

	};

	let timeFirst = function () {

		return 'Сегодня ' + weekList[day - 1] + ', ' + dayMonth + ' ' + monthList[month] + ' ' + year + ' года, ' + hours + ' ' + 	declinationWordHours(hours) + ' ' + minutes + ' ' + declinationWordMinutes(minutes) + ' ' + seconds + ' ' + declinationWordSeconds(seconds)	; 

	};


	let timeSecond = function () {

		return addZero(dayMonth) + '.' + addZero(month + 1) + '.' + year + ' - ' + addZero(hours) + '.' + addZero(minutes) + '.' + addZero(seconds)	;

	};

	let showsNewDate = function () {

		paragraphFirst.innerHTML = timeFirst();
		document.body.append(paragraphFirst);
		paragraphSecond.innerHTML = timeSecond();
		document.body.append(paragraphSecond);

	};

	showsNewDate();
};

	setInterval(start, 1000);
