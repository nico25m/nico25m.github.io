const gameArea = document.getElementById("gameArea");
const reactionTimeDisplay = document.getElementById("reactionTime");
let startTime;

function getRandomPosition() {
  const x = Math.random() * (gameArea.clientWidth - 50);
  const y = Math.random() * (gameArea.clientHeight - 50);
  return { x, y };
}

function createCircle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  const { x, y } = getRandomPosition();
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  circle.addEventListener("click", () => {
    const reactionTime = Date.now() - startTime;
    reactionTimeDisplay.textContent = reactionTime;
    gameArea.removeChild(circle);
    setTimeout(spawnCircle, Math.random() * 1500 + 500); // nuovo cerchio dopo 0.5–2s
  });

  gameArea.appendChild(circle);
  startTime = Date.now();
}

function spawnCircle() {
  if (document.querySelector(".circle")) return;
  createCircle();
}

// Inizia il gioco
setTimeout(spawnCircle, 1000);
