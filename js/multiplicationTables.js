// Write a program that prints a multiplication table for numbers up to n.

const rl = require("readline-sync");

let n;
// loop for accepting only a number
while(true) {
    n = rl.question('Please enter a number: ');
    n = parseInt(n);
    if (!isNaN(n)) {
        break;
    }
    console.log("You haven't entered a number.");
}

for (let a = 1; a <= n ; a += 1){
    table(a);
    console.log('\n');
}

function table(n) {
    for (let a = 1; a <= 10; a += 1) {
        console.log(`${n} * ${a} = ${a*n}`);
    }
}
