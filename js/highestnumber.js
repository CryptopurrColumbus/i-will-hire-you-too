const rl = require('readline-sync');
function returnHighestNumber(arrayinput) {
	let output = Math.max(...arrayinput);
	return output;
}

function checkfornan(elem) {
	return !isNaN(elem);
}

function acceptArrayFromUser() {
	let stringinput;
	let arrayconvert;
	let numarray;
	while (true) {
		stringinput = rl.question('Please enter number separated by commas: ');
		arrayconvert = stringinput.split(',');
		numarray = arrayconvert.map(ele => parseFloat(ele));
		if (
			Array.isArray(numarray) &&
			numarray.length > 0 &&
			numarray.every(checkfornan)
		) {
			break;
		}
		console.log("You haven't entered numbers separated by commas.");
	}
	return numarray;
}

let numarray = acceptArrayFromUser();

let output = returnHighestNumber(numarray);
console.log(`Highest no is ${output}`);
