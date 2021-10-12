const numbers = [2, 6, 8, 1, 9, 12, 5, 4, 6, 5, 0, -5, -9];

function divideArray(arr) {
	if (arr === null || arr === undefined) {
		return -1;
	}
	if (arr.length <= 1) {
		return arr;
	} else {
		let result = [];
		let temp = arr.splice(Math.trunc(arr.length / 2));
		result.push(...temp);
		function sum() {
			let output = [];
			output.push(arr.reduce((total, value) => total + value));
			output.push(result.reduce((total, value) => total + value));
			return {
				divide: [arr, result],
				sum: output,
			};
		}
		return sum();
	}
}

function sumDivideArray(arr, fn) {
	return fn(arr);
}

console.log(numbers);
console.log(sumDivideArray(numbers, divideArray));

function sum(x, y) {
	return x + y;
}

function getScore(mid, final) {
	function yourScore(fn) {
		return fn(mid, final);
	}
	return yourScore;
}

let score = getScore(9, 9);
console.log(score(sum));

