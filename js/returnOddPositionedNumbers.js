// Write a function that returns the elements on odd positions in a list.

const rl = require('readline-sync');

// function converting userinput into valid array.
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

function genArrOfOddPosElems(arrinput) {
	let oddPosArr = [];
	const arrlength = arrinput.length;
	for (let a = 1; a < arrlength; a += 2) {
		oddPosArr.push(arrinput[a]);
	}
	return oddPosArr;
}

let arrinput = userInputIntoArray();
let output = genArrOfOddPosElems(arrinput);
console.log(`Numbers on odd positions of ${arrinput} are ${output}.`);
