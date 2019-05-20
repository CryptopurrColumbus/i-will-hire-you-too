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
    let d = new Date();
    let n = d.getFullYear();
    if (n % 4 === 0) { 
        n += 4;
    }else if (n % 4 === 1) {
        n += 3;
    }else if (n % 4 === 2) {
        n += 2;
    }else if (n % 4 === 3) {
        n += 1;
    }
    return n;
}
let firstY = firstYear();

function nextNLeapYears (n) {
    console.log(`The next ${number} leap years are: `);
    for (let a = 0 ; a <= n-1; a+=1) {
        console.log(firstY+4*a);
    }
}
nextNLeapYears(number);