function animate({ timing, draw, duration }) {

	const start = performance.now();

	requestAnimationFrame(function animate(time) {
		// timeFraction изменяется от 0 до 1
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;

		// вычисление текущего состояния анимации
		const progress = timing(timeFraction);

		draw(progress); // отрисовать её

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}

	});
}

const input = document.querySelector('.input'),
content = document.querySelector('.content');

const write = () => {
	content.textContent = '>' + input.value;
};

animate({
	duration: 1000,
	timing(timeFraction) {
		return 1 - timeFraction;
	},
	draw(progress) {
		content.style.width = progress;
	}
});

input.addEventListener('input', debounce(write, 300));

