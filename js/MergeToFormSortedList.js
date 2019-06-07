// Write a function that merges two sorted lists into a new sorted list.
// [1,4,6],[2,3,5] → [1,2,3,4,5,6].

const rl = require('readline-sync');

function userInputIntoArray() {
	let numbers;
	let numarray;
	let arrOfArrays = [];
	while (true) {
		numbers = rl.question('Please enter numbers separated by commas: ');

		numbersarray = numbers.split(',');
		numarray = numbersarray.map(ele => parseFloat(ele));
		if (
			Array.isArray(numarray) &&
			numarray.length > 0 &&
			numarray.every(checkForNo)
		) {
			arrOfArrays.push(numarray);
			if (arrOfArrays.length === 2) {
				break;
			}
			continue;
		}
		console.log("You haven't entered numbers separated by commas.");
	}
	return arrOfArrays;
}

function checkForNo(a) {
	return !isNaN(a);
}

function arrConcat(a, b) {
	return [...a, ...b];
}

function sortList(a) {
	return a.sort();
}

let arrOfArrays = userInputIntoArray();
let concatedArr = arrConcat(arrOfArrays[0], arrOfArrays[1]);
let sortedArr = sortList(concatedArr);
console.log(
	'Sorted concatentation of arrays ' +
		arrOfArrays[0] +
		' and ' +
		arrOfArrays[1] +
		' is ' +
		sortedArr +
		'.'
);
