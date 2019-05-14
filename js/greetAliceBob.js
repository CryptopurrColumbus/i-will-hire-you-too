var rl = require("readline-sync");
var name = rl.question("Please Enter Your Name: ");

function aliceBob (name) {
    if (name.toLowerCase()==="alice" || name.toLowerCase()==="bob") {
        // name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        // alternatively
        name = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
        console.log(`Hi ${name}`);
    }
}
aliceBob(name);