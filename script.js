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
    message: document.querySelector('.message'),
    scoreMessage: document.querySelector('.label-score'),
    highScore: document.querySelector('.highscore'),
    number: document.querySelector('.number'),
}

// ######## INIT VALUES ##########
let guess, highScore = 0,
    randomNumber, score = 20;

// ######## RANDOM NUMBER ##########
randomNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomNumber)

// ######## EVENT LISTENERS ##########
domElements.checkBtn.addEventListener('click', e => {
    e.preventDefault();
    guess = domElements.userInput.value;
    if (guess && guess > 0 && guess < 21) {
        compareGuess(guess)
    } else {
        console.log('Please enter a number within the range of 0 and 20')
    }
})

// ######## CONDITIONALS ##########
const compareGuess = function(guess) {
    console.log(guess)
    console.log(randomNumber)

    if (guess < randomNumber) {
        console.log('Guess is lower than random Number')
            // 1. reduce score (-1)
        score = score - 1;

        // 2. update score in dom
        domElements.scoreMessage.innerHTML = `💯 Score: ${score}`

        // 3. update message to say guess is lower
        domElements.message.innerHTML = '📉 Too low!'


    } else if (guess > randomNumber) {
        console.log('Guess is higher than the random Number')
            // 1. reduce score (-1)
        score = score - 1;

        // 2. update score in dom
        domElements.scoreMessage.innerHTML = `💯 Score: ${score}`

        // 3. update message to say guess is lower
        domElements.message.innerHTML = '📈 Too high!'

    } else {
        console.log('Both guess and random number are the same')
            // 1. if score > highscore than highscore === score
        if (score > highScore) {
            highScore = score;
            domElements.highScore.innerHTML = highScore;
        }

        // 2. update success class
        document.body.style.backgroundColor = '#60b347';

        // 3. render random number to dom
        domElements.number.innerHTML = randomNumber;

        // 4. Update message
        domElements.message.innerHTML = '🎉 Correct Number!'

    }

}