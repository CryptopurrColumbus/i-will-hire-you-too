// Write a function that tests whether a string is a palindrome.
const rl = require('readline-sync');

function takeuserinput() {;
    let str
	while (true) {
		str = rl.question('Please enter something: ');
		if (str.length >= 2) {
			break;
		}
        console.log('You havent entered a string that can be checked' +
            "\nfor a palindrome. Please try again.");
	}
    return str;
    
}

function checkForPalindrome(str) {
    let arr = str.split('');
    let newarr = arr.reverse();
    let newstring = newarr.join("");
	return str === newstring;
}

let str = takeuserinput();
let ispalindrome = checkForPalindrome(str);

if (ispalindrome) {
	console.log('The string is a palindrome');
} else {
	console.log('The string is a not a palindrome');
}
