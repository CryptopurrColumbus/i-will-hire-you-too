// Write a program that asks the user for a number n and gives 
// them the possibility to choose between computing the sum of 1 to n 
// and computing the product of 1 to,n.

let rl = require("readline-sync");
 
let n;
while(true) {
    n = rl.question('Please enter a number:');
    n = parseInt(n);
    if (isNaN(n) === false){
        break;
 }
    console.log("You havent entered a number.");
}

var operation;
function sumOrProduct() {
    console.log('If you would like the sum of 1 to n please enter + or if \
    would like the product please enter * ');
    let rl = require("readline-sync");
    operation = rl.question('Please enter your choice of operation:');
    return operation;
    
}
sumOrProduct();

function sum(arg) {
    
    let sum = 0;
    for (var a = 1; a <= arg; a += 1) {
        sum += a;
    }
    return sum;
}

function product(arg) {
   let product = 1;
    for (var a = 1; a <= arg; a += 1) {
         product *= a;
    }
    return product;
}

if (operation === "+") {
    let s = sum(n);
    console.log(`Sum is: ${s}.`);
} else if (operation === "*") {
    let p = product(n);
    console.log(`Product is: ${p}.`);
}

