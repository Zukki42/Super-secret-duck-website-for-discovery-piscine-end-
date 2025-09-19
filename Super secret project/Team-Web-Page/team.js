// === Team Page Script ===
console.log("🦆 Welcome to the Duckbronn team page!");

// Select the grid container
const teamGrid = document.querySelector(".team-grid");

// Define your ducks (folder corrected to "Images/")
const ducks = [
  { name: "Moritz", role: "The Boss Duck", photoFront: "../Images/placeholder.png", photoBack: "../Images/Moritz.png" },
  { name: "Max", role: "The Learning Duck", photoFront: "../Images/front2.jpg", photoBack: "../Images/Max.png" },
  { name: "Markus", role: "The Infrastructure Duck", photoFront: "../Images/front3.jpg", photoBack: "../Images/Markus.png" },
  { name: "Ines", role: "The Admin Duck", photoFront: "../Images/front4.jpg", photoBack: "../Images/Ines.png" },
  { name: "Steve", role: "The Event Planner Duck", photoFront: "../Images/front5.jpg", photoBack: "../Images/Steve.png" },
  { name: "Lisa", role: "The Admission Duck (Allegedly)", photoFront: "../Images/front6.jpg", photoBack: "../Images/Lisa.png" },
  { name: "Tom", role: "The Chillest Operations Duck", photoFront: "../Images/front7.jpg", photoBack: "../Images/Tom.png" },
  { name: "Jonas", role: "The Hacker Duck", photoFront: "../Images/front8.jpg", photoBack: "../Images/Jonas.png" },
  { name: "Carolin", role: "The Marketing Duck", photoFront: "../Images/front9.jpg", photoBack: "../Images/Carolin.png" },
  { name: "Theo", role: "The 'Project Management Duck' (Sure buddy)", photoFront: "../Images/front9.jpg", photoBack: "../Images/Theo.png" },
  { name: "Robin", role: "The Partnership Duck", photoFront: "../Images/front9.jpg", photoBack: "../Images/Robin.png" }
];

// Generate cards dynamically
ducks.forEach(duck => {
  const card = document.createElement("div");
  card.classList.add("team-card");
  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <div class="card-photo" style="background-image: url('${duck.photoFront}');"></div>
        <div class="card-name">${duck.name}</div>
        <div class="card-desc">Click to reveal their true role 🦆</div>
      </div>
      <div class="card-back">
        <div class="card-photo" style="background-image: url('${duck.photoBack}');"></div>
        <div class="card-name">${duck.name}</div>
        <div class="card-desc">${duck.role}</div>
      </div>
    </div>
  `;
  teamGrid.appendChild(card);

  // Flip card on click
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  // Sprinkle confetti on hover
  card.addEventListener("mouseenter", () => {
    sprinkleConfetti(card);
  });
});

// Mini confetti function
function sprinkleConfetti(card) {
  for (let i = 0; i < 8; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("mini-confetti");
    card.appendChild(confetti);

    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = `${Math.random() * 100}%`;

    setTimeout(() => confetti.remove(), 2000);
  }
}
