// === Invest Page Script ===
console.log("🦆 Welcome to the Duckbronn Invest page!");

// Select donation items
const donationItems = document.querySelectorAll(".donation-section li");

// Select modal
const modal = document.createElement("div");
modal.classList.add("donation-modal");
modal.innerHTML = `
  <div class="modal-content">
    <h2>Thank you for donating! 🦆</h2>
    <p>Much appreciated :D</p>
    <button id="closeModal">Close</button>
  </div>
`;
document.body.appendChild(modal);

// Confetti function
function launchConfetti() {
	for (let i = 0; i < 80; i++) {
		const confetti = document.createElement("div");
		confetti.classList.add("confetti");
		document.body.appendChild(confetti);

		const size = Math.random() * 8 + 4;
		confetti.style.width = `${size}px`;
		confetti.style.height = `${size}px`;
		confetti.style.left = `${Math.random() * 100}vw`;
		confetti.style.backgroundColor = ["#FFD700", "#87CEEB", "#FF69B4", "#90EE90"][Math.floor(Math.random() * 4)];

		confetti.animate(
			[
				{ transform: `translateY(0) rotate(0deg)`, opacity: 1 },
				{ transform: `translateY(100vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
			],
			{
				duration: Math.random() * 3000 + 2000,
				easing: "ease-out",
				iterations: 1,
			}
		).onfinish = () => confetti.remove();
	}
}

// Show modal + confetti when clicking donation
donationItems.forEach(item => {
	item.addEventListener("click", () => {
		modal.classList.add("show");
		launchConfetti();
	});
});

// Close modal
document.addEventListener("click", e => {
	if (e.target.id === "closeModal" || e.target === modal) {
		modal.classList.remove("show");
	}
});
