// Write a program that prints the next 20 leap years.
const rl = require("readline-sync");
let number; 

while (true) {
    number = rl.question('Please enter a number: ');
    number = parseInt(number);
    if (!(isNaN(number)) && number >= 0){
        break;
    }
    console.log("You havent entered a whole number.");
}

function firstYear() {
    let currentDate = new Date();
    let firstLeapYear = currentDate.getFullYear();
    if (firstLeapYear % 4 === 0) { 
        firstLeapYear += 4;
    } else if (firstLeapYear % 4 === 1) {
        firstLeapYear += 3;
    } else if (firstLeapYear % 4 === 2) {
        firstLeapYear += 2;
    } else if (firstLeapYear % 4 === 3) {
        firstLeapYear += 1;
    }
    return firstLeapYear;
}

let firstY = firstYear();

function nextNLeapYears (n) {
    
    let leapyear = [];
    for (let a = 0; a <= n-1; a += 1) {
        leapyear.push(firstY + 4 * a);
    }
    return leapyear;
}

let list = nextNLeapYears(number);
console.log(`Next ${number} leap years are: ${list}`);