function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  document.getElementById('userChoice').textContent = ` ${userChoice}`;
  document.getElementById('computerChoice').textContent = ` ${computerChoice}`;

  let result = '';
  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win!';
  } else {
    result = 'Computer wins!';
  }

  document.getElementById('gameResult').textContent = `Result: ${result}`;
}
