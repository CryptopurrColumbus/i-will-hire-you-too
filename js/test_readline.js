var rl = require ("readline-sync"); 
// is a module so has to be writtenls only once for any no of user inputs
var abc = rl.question('Enter a number: ');
abc = parseInt(abc);
console.log (typeof(abc));
