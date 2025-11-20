const btn = document.getElementById("playBtn");
const lockedMsg = document.getElementById("lockedMessage");

// If user has already completed the full arcade
if (localStorage.getItem("saola_arcade_played") === "yes") {

    btn.innerText = "Play Again";

    btn.addEventListener("click", () => {
        lockedMsg.innerText = "You can only play the entire arcade once!";
        lockedMsg.style.color = "red";
        lockedMsg.style.fontWeight = "bold";
    });

} else {
    // First-time player → start Sorting Game
    btn.addEventListener("click", () => {
        window.location.href = "sorting-game.html";
    });
}