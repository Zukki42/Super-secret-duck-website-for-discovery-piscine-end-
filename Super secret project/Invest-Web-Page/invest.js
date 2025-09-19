// === Invest Page Script ===
console.log("🦆 Welcome to the Duckbronn Invest page!");

// Select donation items
const donationItems = document.querySelectorAll(".donation-section li");

// Modal setup
const modal = document.createElement("div");
modal.classList.add("donation-modal");
modal.innerHTML = `
  <div class="modal-content">
    <h2>Thank you for donating! 🦆</h2>
    <p id="donationMessage"></p>
    <button id="closeModal">Close</button>
  </div>
`;
document.body.appendChild(modal);

const donationMessage = document.getElementById("donationMessage");

// Custom messages for each donation
const messages = {
  0: "🥖 Thank you for the bread crumbs! Now our students can code with their bellies full of bread! 🦆🍞",
  1: "🧸 Thank you for donating duck plushies for emotional support! Now our students can finally code with their minds at ease. (Side note, Lisa should totally donate a duck to me) 🦆🧠💛",
  2: "🌊 Thank you for supporting our pond upgrade initiative! Our students can finally relax in luxurious duck ponds! 💦🦆",
  3: "💻 Thank you for your waterproof laptop donation! Now one of our students will be lucky enough to code while enjoying the sun in our ponds! 🦆💻"
};

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
    confetti.style.backgroundColor = ["#FFD700", "#87CEEB", "#FF69B4", "#90EE90"][Math.floor(Math.random()*4)];

    confetti.animate(
      [
        { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
        { transform: `translateY(100vh) rotate(${Math.random()*360}deg)`, opacity: 0 }
      ],
      {
        duration: Math.random() * 3000 + 2000,
        easing: "ease-out",
        iterations: 1,
      }
    ).onfinish = () => confetti.remove();
  }
}

// Show modal with custom message + confetti
donationItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    donationMessage.textContent = messages[index];
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

// Done button -> go to The Last Page
document.getElementById("doneBtn").addEventListener("click", () => {
  window.location.href = "../The-Last-Page/Done.html";
});
