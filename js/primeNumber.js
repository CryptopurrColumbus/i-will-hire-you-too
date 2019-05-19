// Write a program that prints all prime numbers up to n.

const rl = require('readline-sync');

let number;
while (true) {
    number = rl.question('Please enter a whole number:');
    number = parseInt(number);
    if (!isNaN(number) && number >= 0){
        break;
    }
    console.log('You haven\'t entered a whole number.');
}

function primenumbers(n) {
    let primenumberlist = [];
    for (let a = 1; a <= n; a += 1) {
       var isprime = primeOrNot(a);
       if (isprime) {
           primenumberlist.push(a);
       }
    }
    return primenumberlist;
}

function primeOrNot(n) {
    let divisorNo = [];
    for (let a = 1; a <= n; a += 1) {
         if (n % a === 0) {
             divisorNo.push(a);
         }
    }
    return divisorNo.length === 2;
}

let prime = primenumbers(number);
if (prime.length === 0){
    console.log(`There are no prime numbers till ${number}.`);
} else {
    console.log(`Prime no.s till ${number} are : ${prime}.`);
}

