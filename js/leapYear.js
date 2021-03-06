// Write a program that prints the next 20 leap years.
const rl = require("readline-sync");

function firstYear() {
    let currentDate = new Date();
    let nextLeapYear = currentDate.getFullYear();
    // q says next year so not returning present leap year
    nextLeapYear = nextLeapYear + 4 - (nextLeapYear % 4);
    return nextLeapYear;
}

function nextNLeapYears (n, firstY) {
    
    let leapyear = [];
    for (let a = 0; a <= n-1; a += 1) {
        leapyear.push(firstY + 4 * a);
    }
    return leapyear;
}

function getNoFromUser () {
    let number; 
    while (true) {
        number = rl.question('Please enter a number: ');
        number = parseInt(number);
        if (!(isNaN(number)) && number >= 0){
            break;
        }
        console.log("You havent entered a whole number.");
    }
    return number;
}

let noInput = getNoFromUser()
let firstY = firstYear();
let list = nextNLeapYears(noInput, firstY);
console.log(`Next ${noInput} leap years are: ${list}`);