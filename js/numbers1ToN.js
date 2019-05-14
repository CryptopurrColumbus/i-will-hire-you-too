var rl = require("readline-sync");
var number = rl.question('Please enter a number: ');
number = parseInt(number);

function numbersToN(number) {
    var sum = 0;
    for (var a = 1; a <= number; a += 1){
         sum += a;
    }
    return sum;
}

if (isNaN(number)) {
    while (true) {
        console.log ("you havent returned a number");
        number = rl.question('Please enter a number: ');
        number = parseInt(number);
        if (!isNaN(number)){
            break;
        }
    
    }
}
var sum = numbersToN(number);
console.log(sum);