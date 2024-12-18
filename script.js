const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Game variables
const PLAYER_SPEED = 2;
const PLAYER_SIZE = 20;
const TRAIL_SIZE = 2;

// Player object
const player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  dx: 0,
  dy: 0,
  color: "blue",
  trail: []
};

// Controls
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    player.dx = 0;
    player.dy = -PLAYER_SPEED;
  } else if (e.key === "ArrowDown") {
    player.dx = 0;
    player.dy = PLAYER_SPEED;
  } else if (e.key === "ArrowLeft") {
    player.dx = -PLAYER_SPEED;
    player.dy = 0;
  } else if (e.key === "ArrowRight") {
    player.dx = PLAYER_SPEED;
    player.dy = 0;
  }
});

// Game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Move player
  player.x += player.dx;
  player.y += player.dy;

  // Keep track of player's trail
  if (player.dx !== 0 || player.dy !== 0) {
    player.trail.push({ x: player.x, y: player.y });
  }

  // Draw player's trail
  ctx.fillStyle = player.color;
  player.trail.forEach((point) => {
    ctx.fillRect(point.x, point.y, TRAIL_SIZE, TRAIL_SIZE);
  });

  // Draw player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, PLAYER_SIZE, PLAYER_SIZE);

  requestAnimationFrame(gameLoop);
}

gameLoop();
