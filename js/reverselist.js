// Write function that reverses a list

const rl = require('readline-sync');

function userInputIntoArray() {
	let numbers;
	let numarray;
	while (true) {
		numbers = rl.question('please enter numbers separated by commas: ');

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
	return numbersarray;
}

function reversesarray(arrinput) {
	let reversedarr = [];
	for (var i = arrinput.length - 1; i >= 0; i -= 1) {
		reversedarr.push(arrinput[i]);
	}
	// let arraycopy = arrinput.slice(0);
	// arrinput.forEach(function() {
	// 	reversedarr.push(arraycopy.pop());
	// });
	return reversedarr;
}

function checkForNo(a) {
	return !isNaN(a);
}

let arrinput = userInputIntoArray();
console.log(arrinput);
let output = reversesarray(arrinput);
console.log(`The array ${arrinput} reversed is ${output}.`);
