'use strict';

let arr = [
	'1234567890',
	'0987654321',
	'23456789,01',
	'1098765,432',
	'4544444444',
	'2244566644',
	'431127,6879',
];

for (let i = 0; i < arr.length; i++) {
	if ((arr[i])[0].includes(2) || (arr[i])[0].includes(4)) {
		console.log(arr[i]);
	};
};

for (let i = 2; i < 100; i++) {
	let n = 0;
	for (let y = 2; y <= i; y++) {
		if ((i % y) === 0) {
			n += 1;
		};
	};
	if (n <= 1) {
		console.log(i + ' - Делители этого числа: 1 и ' + i);
	}
};
