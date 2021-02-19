'use strict';

const change = document.querySelector('#change'),
	colorName = document.querySelector('#color'),
	wrapper = document.querySelector('.wrapper');

	wrapper.style.padding = 100 + 'px';
	wrapper.style.height = 500 + 'px';
	wrapper.style.textAlign = 'center';
	change.style.width = 150 + 'px';
	change.style.height = 50 + 'px';

	
change.addEventListener('click', () => {
	const color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
	colorName.innerHTML = color;
	wrapper.style.background = color;
});