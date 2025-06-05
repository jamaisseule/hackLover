const matrixContainer = document.getElementById("matrixContainer");

const loveMessages = [
  "I LOVE YOU, Peter",
  "YOU'RE MY HEART",
  "Peter Kavinsky",
  "YOU'RE MY EVERYTHING",
  "Peter Kavinsky",
  "PRECIOUS ONE",
  "Peter Kavinsky",
  "Peter Kavinsky",
];

const specialMessages = [
  "💕 Peter Kavinsky 💕",
  "🌹 OCTOBER 17 🌹",
  "🌙 STARLIT LOVE 🌙",
  "⚡ HACKED BY YOUR LOVE⚡",
];

function createFallingText() {
  const text = document.createElement("div");
  text.classList.add("falling-text");

  const isSpecial = Math.random() < 0.05;
  const isHighlight = Math.random() < 0.15 && !isSpecial;
  const isFade = Math.random() < 0.2;

  text.textContent = isSpecial
    ? specialMessages[Math.floor(Math.random() * specialMessages.length)]
    : loveMessages[Math.floor(Math.random() * loveMessages.length)];

  if (isSpecial) {
    text.classList.add("highlight");
  } else if (isHighlight) {
    text.classList.add("highlight");
  } else if (isFade) {
    text.classList.add("fade");
  }

  text.style.left = `${Math.random() * 100}%`;
  text.style.animationDuration = `${2 + Math.random() * 4}s`;

  matrixContainer.appendChild(text);

  // Remove after animation
  setTimeout(() => {
    matrixContainer.removeChild(text);
  }, 6000);
}

// Run animation repeatedly
setInterval(createFallingText, 100);

document.addEventListener("mousemove", (e) => {
  const heart = document.createElement("div");
  heart.className = "mouse-follower";
  heart.textContent = "💘";
  heart.style.left = `${e.pageX}px`;
  heart.style.top = `${e.pageY}px`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1000);
});
