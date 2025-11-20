// Mark the arcade as played
localStorage.setItem("saola_arcade_played", "yes");

// Load total score
const finalScoreEl = document.getElementById('finalScore');
let score = parseInt(localStorage.getItem('saola_arcade_score') || '0', 10);
finalScoreEl.innerText = score;

// Restart button
document.getElementById('restartBtn').addEventListener('click', () => {
  // Reset score if desired
  localStorage.setItem('saola_arcade_score', '0');
  // Redirect to the first page (sorting game)
  window.location.href = 'sorting-game.html';
});
