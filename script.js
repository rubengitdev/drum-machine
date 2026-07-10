const display = document.getElementById("display");
const drumPads = document.querySelectorAll(".drum-pad");

drumPads.forEach((pad) => {
  pad.addEventListener("click", () => {
    const audio = pad.querySelector(".clip");
    playSound(audio.id);
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  if ("QWEASDZXC".includes(key)) {
    playSound(key);
  }
});

// Updated playSound function with keypress animation
function playSound(key) {
  const audio = document.getElementById(key.toUpperCase());
  if (!audio) return;

  const pad = audio.parentElement;

  // Add the animation class
  pad.classList.add("active");
  // Remove it after 100ms
  setTimeout(() => pad.classList.remove("active"), 100);

  // Update display and play audio
  const display = document.getElementById("display");
  display.textContent = pad.id.replace(/-/g, " ");

  audio.currentTime = 0;
  audio.play();
}

// Keyboard Event Listener
window.addEventListener("keydown", (e) => {
  playSound(e.key);
});

// Mouse Click Event Listener
document.querySelectorAll(".drum-pad").forEach((pad) => {
  pad.addEventListener("click", () => {
    const key = pad.querySelector(".clip").id;
    playSound(key);
  });
});
