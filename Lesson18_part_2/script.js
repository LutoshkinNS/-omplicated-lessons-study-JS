function debounce(f, t) {
	return function() {
		const previousCall = this.lastCall;
		this.lastCall = Date.now();
		if (previousCall && ((this.lastCall - previousCall) <= t)) {
			clearTimeout(this.lastCallTimer);
		}
		this.lastCallTimer = setTimeout(f, t);
	};
}

const input = document.querySelector('.input'),
	content = document.querySelector('.content');

const write = () => {
	content.textContent = '>' + input.value;
};

input.addEventListener('input', debounce(write, 300));

