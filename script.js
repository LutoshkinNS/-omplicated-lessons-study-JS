'use strict';

let string = '  12345678912345678912345678911Qqweqwre ';

function typeCecking(arg) {
	if (typeof(arg) !== 'string') {
		console.log('Alarm! В качестве аргумента передана не строка!');
	} else if (arg.startsWith(' ') || string.endsWith(' ')) {
		console.log(arg.length);/*Для проверки*/
		arg = arg.trim();
		console.log(arg.length);/*Для проверки*/
		console.log(arg);/*Для проверки*/
	};
	if (arg.length >= 30){
			arg = arg.slice(0, 30) + '...';
			console.log(arg);/*Для проверки*/
			console.log(arg.length);/*Для проверки*/
	};
};

typeCecking(string);