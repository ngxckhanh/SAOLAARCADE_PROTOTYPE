// Mark the arcade as fully played
localStorage.setItem("saola_arcade_played", "yes");

// Load total score
const finalScoreEl = document.getElementById('finalScore');
let score = parseInt(localStorage.getItem('saola_arcade_score') || '0', 10);
finalScoreEl.innerText = score;

// Restart button (only resets the current game, cannot unlock full arcade)
document.getElementById('restartBtn').addEventListener('click', () => {
  // Optional: reset session score but keep arcade locked
  localStorage.setItem('saola_arcade_score', '0');
  window.location.href = 'sorting-game.html';
});
