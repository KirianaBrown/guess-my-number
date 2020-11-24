'use strict';

/*
   
  1. set a random number
  2. get user input
  3. compare user input
  4. update message depending on cf statement
  5. decrease score (1) if incorrect
  6. if correct add success class / save score to highscore / update message / add random number in ?
  7. if again clicked reset all except highscore


  if(gamePlaying){
    // set the variables
    // create a random number
    // 
  }

*/

// ######## DOM STRINGS ##########
const domElements = {
    userInput: document.querySelector('.guess'),
    checkBtn: document.querySelector('.check'),
    message: document.querySelector('.message'),
    scoreMessage: document.querySelector('.label-score'),
    highScore: document.querySelector('.highscore'),
    number: document.querySelector('.number'),
    againBtn: document.querySelector('.again'),
}

// ######## INIT VALUES ##########
let guess, highScore = 0,
    randomNumber,
    score = 20;
// ######## RANDOM NUMBER ##########
randomNumber = Math.trunc(Math.random() * 20 + 1);

const displayMessage = function(message) {
    domElements.message.textContent = message;
}

const setBackground = function(color) {
    document.body.style.backgroundColor = color;
}

const setScoreMessage = function(score) {
    domElements.scoreMessage.textContent = `💯 Score: ${score}`
}


const compareGuess = function(guess) {
    // ######## CONDITIONALS ##########
    if (score > 0) {
        if (guess < randomNumber) {
            console.log('Guess is lower than random Number')
            score--;
            setScoreMessage(score);
            displayMessage('📉 Too low!')
        } else if (guess > randomNumber) {
            console.log('Guess is higher than the random Number')
            score--;
            setScoreMessage(score);
            displayMessage('📈 Too high!')
        } else {
            console.log('Both guess and random number are the same')
            if (score > highScore) {
                highScore = score;
                domElements.highScore.textContent = highScore;
            }
            setBackground('#60b347');
            domElements.number.textContent = randomNumber;
            displayMessage('🎉 Correct Number!')
        }
    } else {
        displayMessage('💥 You lost the game!')
        setScoreMessage(score);
        setBackground('crimson');
        domElements.number.textContent = randomNumber;
    }
}

// ######## INIT function ##########
const init = function() {
    // If game playing is false
    score = 20;
    displayMessage('Start guessing...');
    domElements.scoreMessage.textContent = domElements.scoreMessage.textContent = `💯 Score: ${score}`;
    domElements.number.textContent = '?';
    setBackground('#222');
    domElements.userInput.value = '';
}

// ######## EVENT LISTENERS ##########
domElements.checkBtn.addEventListener('click', e => {
    e.preventDefault();
    guess = domElements.userInput.value;
    if (guess) {
        if (guess < 0 || guess > 20) {
            displayMessage('⛔️ Enter a Number between 0 and 20');
        } else {
            compareGuess(guess)
        }
    } else {
        displayMessage('⛔️ No number!');
    }
})

domElements.againBtn.addEventListener('click', e => {
    e.preventDefault();
    init();
})