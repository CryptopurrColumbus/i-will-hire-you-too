var rl = require("readline-sync");

function numbersToN(number) {
    var sum = 0;
    for (var a = 1; a <= number; a += 1){
         sum += a;
    }
    return sum;
}

var number;
while (true) {
    number = rl.question('Please enter a number: ');
    number = parseInt(number);
    if (!isNaN(number)){
        break;
    }
    console.log ("You havent returned a number!");
}

var sum = numbersToN(number);
console.log(sum);