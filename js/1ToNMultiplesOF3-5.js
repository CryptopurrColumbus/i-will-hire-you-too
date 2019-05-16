// Write a program that asks the user for a number n and prints the sum of the numbers 1
//  to n such that only multiples of three or five are considered in 
//  the sum, e.g. 3, 5, 6, 9, 10, 12, 15 are considered for n=17

var rl = require("readline-sync");

function numbersToN(number) {
    var sum = 0;
    
    for (var a = 1; a <= number; a += 1){
        if (a % 3 === 0 || a % 5 === 0) {
            sum += a;
        }
    }
    return sum;
}

var number;
while (true) {
    number = rl.question('Please enter a number: ');
    number = parseInt(number);
    if (!isNaN(number)){
        break;
    }
    console.log ("You havent returned a number!");
}

var sum = numbersToN(number);
console.log(sum);
