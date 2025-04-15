let hiddenDigit = Math.floor(Math.random() * 20);
let gameScore = 10;
let highScore = 0;

function message(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check_btn').addEventListener('click', function () {
  const guess = Number(document.querySelector('.number_input').value);

  if (guess !== hiddenDigit) {
    if (gameScore > 0) {
      guess > hiddenDigit ? message('📈 too high') : message('📉 too low');
      gameScore--;
      document.querySelector('.game_score').textContent =
        '🎮 Game Score : ' + gameScore;
    } else {
      message('🙁 You lost');
    }
  } else {
    message('🏆 You won');
    document.body.style.background = '#862e9c';
    if (gameScore > highScore) {
      highScore = gameScore;
    }
    document.querySelector('.best_score').textContent =
      '🏅 All-Time Best :' + highScore;
    document.querySelector('.number').textContent = hiddenDigit;
  }
});

document.querySelector('.again_btn').addEventListener('click', function () {
  document.body.style.background = '#000';
  gameScore = 10;
  document.querySelector('.number_input').value = '';
  hiddenDigit = Math.floor(Math.random() * 20);
  document.querySelector('.game_score').textContent =
    '🎮 Game Score : ' + gameScore;
  message('🧠 Guess the number');
  document.querySelector('.number').textContent = '?';
});
