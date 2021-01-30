let num = 266219;
let arr = num.toString().split('');
let mult = 1;

for (let i = 0; i < arr.length; i++) {
	const element = Number(arr[i]);
	mult = element * mult;
}

console.log('mult: ', mult);

const thirdDegree  = mult**3;
console.log('thirdDegree: ', thirdDegree);

console.log('firstTwoNumbers: ', Number(thirdDegree.toString().substr(0, 2)));
