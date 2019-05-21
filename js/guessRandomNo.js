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

//The maximum is exclusive and the minimum is inclusive
randomNo = getRandomNo(1,201);
console.log(randomNo);


function getUserInput() {
 let userInput = rl.question('Guess the no between 1 and 200:');
 userInput = parseInt(userInput);
 return userInput;
}

let a = getUserInput();


 if (a === randomNo) {
    console.log("yayeee");
}



 




