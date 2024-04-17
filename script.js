'use strict';
let resultMessage = 'Start guessing...';
// write the rule
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
// declare the score is staeting with 20
let score = 20;
// add click event to the check button to start game
document.querySelector('.check').addEventListener('click', function () {
  // turn value of input from string to number
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  // give all result after click on check button
  if (!guess) {
    resultMessage = '🚫 No number!';
  } else if (guess === secretNumber) {
    resultMessage = '🎉 Correct number!';
  } else if (guess < secretNumber) {
    resultMessage = '📉 Too low!';
    score = score - 1;
    document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber) {
    resultMessage = '📈 Too high!';
    score--;
    document.querySelector('.score').textContent = score;
  }
  // Update the text content of the ".message" element with the updated resultMessage
  document.querySelector('.message').textContent = resultMessage;
});
