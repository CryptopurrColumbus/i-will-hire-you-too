// Write a function that checks whether an element occurs in a list.
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
function checkNoExistence(ip, arrinput) {
	let indexof = arrinput.indexOf(ip);
	return indexof !== -1;
}

let arrinput = userInputIntoArray();

function takeInputToCheck() {
	let element = rl.question('Please enter seach number: ');
	element = parseFloat(element);
	return element;
}

let ip = takeInputToCheck();

if (checkNoExistence(ip, arrinput)) {
	console.log('The number exists in the list.');
} else {
	console.log('The number doesnt exist in the list.');
}
