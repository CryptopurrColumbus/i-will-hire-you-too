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

function getTotal(arrinput) {
	let arraylength = arrinput.length;
	let newArray = [];
	for (let a = 0; a < arraylength; a += 1) {
        let elementRunningTotal = 0;
		for (let n = 0; n <= a; n += 1) {
            elementRunningTotal += arrinput[n];
        }
        newArray.push(elementRunningTotal);
    }
    return newArray;
}

let arrinput = userInputIntoArray();
let output = getTotal(arrinput);
console.log('The running total of the list ' + arrinput + ' is: ' + output);
