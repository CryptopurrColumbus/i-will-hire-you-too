// Write a function that takes a list of strings an prints them, one per
// line, in a rectangular frame. For example the list ["Hello", "World",
// "in", "a", "frame"] gets printed as:

// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

// take an input array of strings

const rl = require('readline-sync');

function userInputIntoArray() {
	let numbers;
	let numarray;
	while (true) {
		numbers = rl.question('Please enter strings separated by commas: ');
		numarray = numbers.split(',');
		return numarray;
	}
}

let arrofstrings = userInputIntoArray();

let maxlength = arrofstrings => {
	return arrofstrings.map(a => a.length);
};

let ml = maxlength(arrofstrings);

let lineL = Math.max(...ml);

let flLineL = lineL + 4;

function func(lineL, flLineL, arrofstrings) {
	let firstnlast = '';
	let individualLine = '';
	for (let a = 0; a < flLineL; a += 1) {
		firstnlast += '*';
	}
	for (let a = 0; a < arrofstrings.length; a += 1) {
		individualLine += '\n* ';
		individualLine += arrofstrings[a];
		for (let k = 0; k <= lineL - arrofstrings[a].length; k += 1) {
			individualLine += ' ';
		}
		individualLine += '*';
	}
	return firstnlast + individualLine + '\n' + firstnlast;
}
let m = func(lineL, flLineL, arrofstrings);
console.log(m);
