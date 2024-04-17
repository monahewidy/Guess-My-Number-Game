'use strict';
let resultMessage = document.querySelector('.message').textContent;
// write the rule
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

// add click event to the check button to start game
document.querySelector('.check').addEventListener('click', function () {
  // turn value of input from string to number
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  // give all result after click on check button
  if (!guess) {
    resultMessage = '🚫 No number!';
  } else if (guess === secretNumber){
    resultMessage = '🎉 Correct number!'
  } else if (guess < secretNumber){
    resultMessage = '📉 Too low!'
  } else if ( guess > secretNumber){
    resultMessage = '📈 Too high!';
  }
});
