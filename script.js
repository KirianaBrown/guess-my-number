'use strict';

/*
   
  1. set a random number
  2. get user input
  3. compare user input
  4. update message depending on cf statement
  5. decrease score (1) if incorrect
  6. if correct add success class / save score to highscore / update message / add random number in ?
  7. if again clicked reset all except highscore

*/

// ######## DOM STRINGS ##########
const domElements = {
    userInput: document.querySelector('.guess'),
    checkBtn: document.querySelector('.check'),
}

// ######## INIT VALUES ##########
let guess, highScore, randomNumber, score = 20;

// ######## RANDOM NUMBER ##########
randomNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomNumber)

// ######## EVENT LISTENERS ##########
domElements.checkBtn.addEventListener('click', e => {
    e.preventDefault();
    guess = domElements.userInput.value;
    if (guess) {
        compareGuess(guess)
    }
})

// ######## CONDITIONALS ##########
const compareGuess = function(guess, randomNumber = randomNumber) {
    console.log('Compare Guess function is called')
    console.log(`Compare Guess: ${guess}, and ${randomNumber}`);
}