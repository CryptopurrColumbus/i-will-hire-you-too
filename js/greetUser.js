// Write a program that asks the user for their name and greets them with their a.
var rl = require ("readline-sync");
var name = rl.question('Please enter your name: ');

function greetUser(name) {
    console.log(`Welcome ${name}`);
}
 greetUser(name);