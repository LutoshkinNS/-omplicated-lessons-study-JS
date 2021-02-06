'use strict';


let week = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];


for (let item of week) {
	let p = document.createElement('p');
		p.innerHTML = item;
		document.body.append(p);
};


let elements = document.querySelectorAll('p');

for (let i = 0; i < elements.length; i++) {
	
	if (i === 0 || i === elements.length - 1) {
		elements[i].innerHTML = "<i>" + elements[i].innerHTML + "</i>";
		console.log(elements[i]);
	};
};

let date = new Date();
elements[date.getDay()].innerHTML = "<b>" + elements[date.getDay()].innerHTML + "</b>";

