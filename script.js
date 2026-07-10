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

function playSound(key) {
  const audio = document.getElementById(key);
  if (!audio) return;
  display.textContent = audio.parentElement.id;
  audio.currentTime = 0;
  audio.play();
}
