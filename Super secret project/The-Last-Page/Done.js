console.log("🦆 The grand finale page has loaded! Ducks are flying...");

// Container for ducks
const duckContainer = document.getElementById("duck-container");

// Function to spawn a flying duck
function spawnDuck() {
  const duck = document.createElement("div");
  duck.classList.add("duck");
  duck.textContent = "🦆";

  // Random start & end Y positions
  const startY = Math.random() * window.innerHeight;
  const endY = startY + (Math.random() * 100 - 50); // small variation

  duck.style.setProperty("--startY", `${startY}px`);
  duck.style.setProperty("--endY", `${endY}px`);

  // Random duration & size
  const duration = Math.random() * 8 + 5; // 5s–13s
  duck.style.animationDuration = `${duration}s`;

  // Random size
  const size = Math.random() * 20 + 20; // 20px–40px
  duck.style.fontSize = `${size}px`;

  duckContainer.appendChild(duck);

  // Remove after animation
  setTimeout(() => {
    duck.remove();
  }, duration * 1000);
}

// Spawn ducks at intervals
setInterval(spawnDuck, 800); // every 0.8s
