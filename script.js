'use strict';
let resultMessage = 'Start guessing...';
let highscore = 0;
// write the rule
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.number').textContent = '?';

// declare the score is staeting with 20
let score = 20;
// add click event to the check button to start game
document.querySelector('.check').addEventListener('click', function () {
  // turn value of input from string to number
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  // give all result after click on check button
  // when there no input
  if (!guess) {
    resultMessage = '🚫 No number!';
  }
  // when player wins
  else if (guess === secretNumber) {
    resultMessage = '🎉 Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // when guess too low
  else if (guess < secretNumber) {
    if (score > 1) {
      resultMessage = '📉 Too low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      resultMessage = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }
  // when guess too high
  else if (guess > secretNumber) {
    if (score > 1) {
      resultMessage = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      resultMessage = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }
  // Update the text content of the ".message" element with the updated resultMessage
  document.querySelector('.message').textContent = resultMessage;
});
// add reset in again button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  let resultMessage = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = resultMessage;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('.highscore').textContent = highscore;
});
