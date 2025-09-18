// === Index Page Script ===

// Fun little console Easter egg
console.log("🦆 Welcome to 42 Duckbronn!");

// Make the logo quack when clicked
const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
	alert("Quack! 🦆 Welcome to Duckbronn!");
});
