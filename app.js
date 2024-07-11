const player1 = {
  score: 0,
  playerbutton: document.querySelector('#player1'),
  display: document.querySelector('#p1')
};

const player2 = {
  score: 0,
  playerbutton: document.querySelector('#player2'),
  display: document.querySelector('#p2')
};

const reset = document.querySelector('#reset');
const maxScoreSelect = document.querySelector('#maxscore');
let isGameOver = false;
let maxscore = 5;

function playGame(player, opponent) {
  let score = parseInt(player.display.innerText);
  let updatedScore = ++score;
  if (!isGameOver) {
    player.display.innerText = updatedScore;
    if (updatedScore === maxscore) {
      isGameOver = true;
      player.display.classList.add('winner');
      opponent.display.classList.add('loser');
    }
  }
}

player1.playerbutton.addEventListener('click', function () {
  playGame(player1, player2);
});

player2.playerbutton.addEventListener('click', function () {
  playGame(player2, player1);
});

maxScoreSelect.addEventListener('change', function () {
  maxscore = parseInt(this.value);
  resetScore();
});

reset.addEventListener('click', resetScore);

function resetScore() {
  isGameOver = false;
  player1.display.innerText = 0;
  player2.display.innerText = 0;
  player1.display.classList.remove('winner', 'loser');
  player2.display.classList.remove('winner', 'loser');
}
