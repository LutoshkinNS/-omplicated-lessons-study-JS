'use strict';

function DomElement(selector, height, width, bg, fontSize, position) {
	this.selector = selector;
	this.height = height;
	this.width = width;
	this.bg = bg;
	this.fontSize = fontSize;
	this.position = position;
};

DomElement.prototype.checkString = function () {
	if (this.selector[0] === '.') {
		let div = document.createElement('div');
		div.className = this.selector.slice(1);
		div.style.height = this.height + 'px';
		div.style.width = this.width + 'px';
		div.style.backgroundColor = this.bg;
		div.style.fontSize = this.fontSize + 'px';
		div.innerHTML = 'div с классом ' + '"' + this.selector.slice(1) + '"';
		document.body.append(div);
	};
	if (this.selector[0] === '#') {
		let p = document.createElement('p');
		p.id = this.selector.slice(1);
		p.style.height = this.height + 'px';
		p.style.width = this.width + 'px';
		p.style.backgroundColor = this.bg;
		p.style.fontSize = this.fontSize + 'px';
		p.innerHTML = 'p с id ' + '"' + this.selector.slice(1) + '"';
		document.body.append(p);
	};
};

let newDomElement = new DomElement('.title', 50, 400, 'green', 36);
newDomElement.checkString();


DomElement.prototype.createBox = function () {
	const box = document.createElement('div');
	box.className = this.selector.slice(1);
	box.style.height = this.height + 'px';
	box.style.width = this.width + 'px';
	box.style.background = this.bg;
	box.style.position = this.position;
	box.style.top = 0 + 'px';
	box.style.left = 0 + 'px';
	document.body.append(box);
};

const square  = new DomElement('.box', 100, 100, 'red', 36, 'absolute');


document.addEventListener('DOMContentLoaded', square.createBox());

let element = document.querySelector('.box');
let y = 0,
	x = 0;

let keydown = document.addEventListener('keydown', function (event) {
	if (event.code === 'ArrowUp') {
		y -= 10;
		element.style.top = y + 'px';
	} else 
		if (event.code === 'ArrowDown') {
			y += 10;
			element.style.top = y + 'px';
		} else
			if (event.code === 'ArrowLeft') {
				x -= 10;
				element.style.left = x + 'px';
			} else
				if (event.code === 'ArrowRight') {
					x += 10;
					element.style.left = x + 'px';
				};
});
