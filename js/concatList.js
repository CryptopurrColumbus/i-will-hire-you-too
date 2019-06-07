// Write a function that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3]

const rl = require('readline-sync');

function userInputIntoArray() {
	let numbers;
    let numarray;
    let arrOfArrays= [];
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
            if (arrOfArrays.length === 2){
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

function arrConcat(a,b) {
    return [...a,...b];
}

let arrOfArrays = userInputIntoArray();
let concatedArr = arrConcat(arrOfArrays[0],arrOfArrays[1]);
console.log('Concatentation of arrays ' + arrOfArrays[0] + ' and ' + arrOfArrays[1]+
 ' is ' + concatedArr +'.');


