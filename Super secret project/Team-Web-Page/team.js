// === Team Page Script ===
console.log("🦆 Welcome to the Duckbronn team page!");

// Select the grid container
const teamGrid = document.querySelector(".team-grid");

// Define 9 ducks with front + back placeholders
const ducks = [
	{ name: "Testestest", role: "The Debugging Duck of mighty 54 style", photoFront: "img/front1.jpg", photoBack: "img/back1.jpg" },
	{ name: "Duck 2", role: "The Mallard of Memory Leaks", photoFront: "img/front2.jpg", photoBack: "img/back2.jpg" },
	{ name: "Duck 3", role: "The Rubber Duck Mentor", photoFront: "img/front3.jpg", photoBack: "img/back3.jpg" },
	{ name: "Duck 4", role: "The Goose Intern (don’t ask)", photoFront: "img/front4.jpg", photoBack: "img/back4.jpg" },
	{ name: "Duck 5", role: "The Duck of Documentation", photoFront: "img/front5.jpg", photoBack: "img/back5.jpg" },
	{ name: "Duck 6", role: "The Feathered Frontend Dev", photoFront: "img/front6.jpg", photoBack: "img/back6.jpg" },
	{ name: "Duck 7", role: "The Beakend Engineer", photoFront: "img/front7.jpg", photoBack: "img/back7.jpg" },
	{ name: "Duck 8", role: "The Pond Project Manager", photoFront: "img/front8.jpg", photoBack: "img/back8.jpg" },
	{ name: "Duck 92", role: "The Legendary QuackOps Specialist", photoFront: "img/front91.jpg", photoBack: "img/back944.jpg" },
	{ name: "Duck 91", role: "The Legendary QuackOps Specialist", photoFront: "img/front955.jpg", photoBack: "img/back9222.jpg" },
	{ name: "Duck 95", role: "The Legendary QuackOps Specialist", photoFront: "img/front92.jpg", photoBack: "img/back911.jpg" },
];

// Generate the cards
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
});
