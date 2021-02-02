'use strict';

let string = 'проверкапроверкапроверкапроверка  ';

function typeCecking(arg) {
	if (typeof(arg) !== 'string') {
		console.log('Alarm! В качестве аргумента передана не строка!');
	} else {
		arg = arg.trim();
	};
	if (arg.length >= 30) {
			arg = arg.slice(0, 30) + '...';
	};
	return arg;
};

console.log(typeCecking(string));