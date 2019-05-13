var rl = require ("readline-sync");
var a = rl.question('Enter a number: ');
a = parseInt(a);
var b = rl.question('Enter second number: ');
b = parseInt(b);

function addtwonumber (a, b) {
    console.log(a + b);
} 
addtwonumber(a, b);
