// Write a guessing game where the user has to guess a secret number. 
// The secret number should be randomly chosen by the program between 
// 1 and 200. 
// After every guess the program tells the user whether 
// their number was too large or too small.
//  At the end, when the game is over, the user having guesssed the number,
// the number of tries used should be printed. 
// if  they input the same number multiple times consecutively it should 
// be counted as a single try.

const rl = require("readline-sync");

// Courtesy MDN
function getRandomNo(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getUserInput() {
    let userInput = rl.question('Guess the no between 1 and 200:');
    userInput = parseInt(userInput);
    return userInput;
}

let trys = [];

//The maximum is exclusive and the minimum is inclusive
randomNo = getRandomNo(1, 201);

let prevInput;
while (true) {
    let userInput = getUserInput();
    if (userInput > randomNo) {
        console.log('Your number is too large.');
    } else if (userInput < randomNo) {
        console.log('Your number is too small.')
    }

    if(userInput === randomNo) {
        trys.push(userInput);
        console.log('YOU WIN!!');
        console.log(`You finished the game in ${trys.length} tries.\nCongratulations!!`);
        break;
    }

    if (prevInput !== undefined && prevInput === userInput) {
        continue;
    }
    trys.push(userInput);
    prevInput = userInput;
}



 



 




