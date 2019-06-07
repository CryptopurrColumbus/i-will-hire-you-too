// Write two functions that compute the sum of the numbers in a list: using a for-loop and a while-loop
const rl = require('readline-sync');

function userInputIntoArray() {
	let numbers;
	let numarray;
	while (true) {
		numbers = rl.question('Please enter numbers separated by commas: ');

		numbersarray = numbers.split(',');
		numarray = numbersarray.map(ele => parseFloat(ele));
		if (
			Array.isArray(numarray) &&
			numarray.length > 0 &&
			numarray.every(checkForNo)
		) {
			break;
		}
		console.log("You haven't entered numbers separated by commas.");
	}
	return numarray;
}

function checkForNo(a) {
	return !isNaN(a);
}

function forSum(a) {
	let sum = 0;
	for (let i = 0; i < a.length; i += 1) {
		sum += a[i];
	}
	return sum;
}

function whileSum(a) {
	let sum = 0;
	let i = 0;
	while (i < a.length) {
		sum += a[i];
		i += 1;
	}
	return sum;
}

let arrinput = userInputIntoArray();
let sumByFor = forSum(arrinput);
let sumByWhile = whileSum(arrinput);

console.log('Sum of array ' + arrinput + ' by for loop is: ' + sumByFor + '.');
console.log(
	'Sum of array ' + arrinput + ' by while loop  is: ' + sumByWhile + '.'
);
