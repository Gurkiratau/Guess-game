'use strict';

const secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Value passed ⛔');
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `Yes You Win 🎉🎉🎉🎉`;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').style.fontSize = `3.5rem`;
    document.querySelector('body').style.backgroundColor = '#DC143C';
    document.querySelector('.number').style.width = '20rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? 'Guess is High.. Try Again'
          : 'Guess is Low.. Try Again';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Score too Low You Loose⛔';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//     else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent =
//         'No It is High.. Try Again';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent =
//         'Score too Low You Loose⛔';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent =
//         'No It is low.. Try Again';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent =
//         'Score too Low You Loose⛔';
//       document.querySelector('.score').textContent = 0;
//     }
//   }

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('body').style.backgroundColor = '#5e3f3f';
  document.querySelector('.message').style.fontSize = `3rem`;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = ' ';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').style.width = '15rem';
});
