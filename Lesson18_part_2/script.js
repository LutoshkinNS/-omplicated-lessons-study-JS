const box = document.querySelector('.box'),
	timer = document.querySelector('.timer'),
	pause = document.querySelector('.pause'),
	reset = document.querySelector('.reset');
let animate = false,
	animation,
	count = Number(timer.textContent);

const timerAnimation = () => {
	animation = requestAnimationFrame(timerAnimation);
	console.log(count);
	count--;
	if (count >= 500) {
		timer.textContent = count;
		box.style.borderRadius = 100 - (count / 10) + '%';
	} else if (count >= 0 && count < 500) {
		timer.textContent = count;
		box.style.borderRadius = 0 + (count / 10) + '%';
		return;
	} else {
		cancelAnimationFrame(animation);
	}
};

pause.addEventListener('click', () => {
	if (!animate) {
		pause.textContent = 'Пауза';
		animation = requestAnimationFrame(timerAnimation);
		animate = true;
	} else {
		pause.textContent = 'Старт';
		cancelAnimationFrame(animation);
		animate = false;
	}
});

reset.addEventListener('click', () => {
	box.style.borderRadius = 0;
	count = 1000;
	timer.textContent = count;
	pause.textContent = 'Старт';
});
