// Write a function that combines two lists by alternatingly 
// taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

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

function alternateConcat(a, b) {
	let alen = a.length;
	let blen = b.length;
	let len = Math.max(alen, blen);
	let newarray = [];
	for (let i = 0; i < len; i += 1) {
		if (i < alen) {
			newarray.push(a[i]);
		}
		if (i < blen) {
			newarray.push(b[i]);
		}
	}
	return newarray;
}

let arrOfArrays = userInputIntoArray();
let a = arrOfArrays[0];
let b = arrOfArrays[1];
let newArray = alternateConcat(a, b);
console.log(newArray);
console.log('Alternately concatenating ' + a + ' and ' + b + ' gives ' 
+ newArray + '.');
