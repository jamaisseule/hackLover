const loveMessages = [
  "I LOVE YOU",
  "MY HEART",
  "FOREVER YOURS",
  "BEAUTIFUL SOUL",
  "MY EVERYTHING",
  "SWEET DREAMS",
  "PRECIOUS ONE",
  "AMAZING GIRL",
  "PERFECT SMILE",
  "ANGEL EYES",
  "MY SUNSHINE",
  "LOVE YOU MORE",
  "ALWAYS TOGETHER",
  "YOU & ME",
  "ROMANTIC LOVE",
  "SWEET KISS",
  "WARM HUG",
  "CUTE LAUGH",
  "GENTLE TOUCH",
  "LOVING HEART",
  "PURE LOVE",
  "ENDLESS JOY",
  "SWEETEST DREAM",
];

const specialMessages = [
  "💕 SYLVIE KIESER 💕",
  "🌹 OCTOBER 17 🌹",
  "💖 I LOVE YOU 💖",
  "⭐ SYLVIE KIESER ⭐",
  "🎀 YOUR'RE MINE 🎀",
  "💖 SYLVIE KIESER ⭐",
  "⭐ SYLVIE KIESER 💖",
  "🌹 SYLVIE KIESER ⭐",
];

const container = document.getElementById("matrixContainer");
const centralMsg = document.getElementById("centralMessage");

let messageIndex = 0;
const centralMessages = [
  "💖 SYSTEM HACKED 💖<br><small>Love Protocol Activated</small>",
  "🌹 YOUR PHONE 🌹<br><small>Invaded by Love</small>",
  "💕 I LOVE YOU 💕<br><small>Message from Your Heart</small>",
  "⭐ MY PRINCESS ⭐<br><small>Forever and Always</small>",
];

const mouseMessages = [
  "LOVE YOU ♥",
  "MY HEART",
  "PRINCESS",
  "BEAUTIFUL",
  "FOREVER",
  "ANGEL",
  "SWEETIE",
  "DARLING",
];

// Mouse follower functionality
let mouseFollowers = [];
let mouseX = 0,
  mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Create trailing text every few mouse moves
  if (Math.random() < 0.3) {
    createMouseFollower(mouseX, mouseY);
  }
});

// Touch support for mobile
document.addEventListener("touchmove", (e) => {
  if (e.touches.length > 0) {
    mouseX = e.touches[0].clientX;
    mouseY = e.touches[0].clientY;

    // Create trailing text on touch move
    if (Math.random() < 0.4) {
      createMouseFollower(mouseX, mouseY);
    }
  }
});

document.addEventListener("touchstart", (e) => {
  if (e.touches.length > 0) {
    createMouseFollower(e.touches[0].clientX, e.touches[0].clientY);
  }
});

function createMouseFollower(x, y) {
  const follower = document.createElement("div");
  follower.className = "mouse-follower";
  follower.textContent =
    mouseMessages[Math.floor(Math.random() * mouseMessages.length)];
  follower.style.left = x + "px";
  follower.style.top = y + "px";

  document.body.appendChild(follower);

  // Move follower slightly and fade out
  setTimeout(() => {
    follower.style.transform = `translate(${(Math.random() - 0.5) * 50}px, ${
      (Math.random() - 0.5) * 50
    }px)`;
    follower.style.opacity = "0";
  }, 100);

  // Remove after animation
  setTimeout(() => {
    if (follower.parentNode) {
      follower.parentNode.removeChild(follower);
    }
  }, 2000);
}

// Create random static lines
function createStaticLines() {
  for (let i = 0; i < 5; i++) {
    const line = document.createElement("div");
    line.className = "static-lines";
    line.style.top = Math.random() * window.innerHeight + "px";
    line.style.animationDelay = Math.random() * 0.1 + "s";
    document.body.appendChild(line);

    setTimeout(() => {
      if (line.parentNode) {
        line.parentNode.removeChild(line);
      }
    }, 1000);
  }
}

// Create static lines periodically
setInterval(createStaticLines, 2000);

function createFallingText() {
  const text = document.createElement("div");
  text.className = "falling-text";

  // 30% chance for special message, 70% for regular love message
  if (Math.random() < 0.3) {
    text.textContent =
      specialMessages[Math.floor(Math.random() * specialMessages.length)];
    text.classList.add("highlight");
  } else {
    text.textContent =
      loveMessages[Math.floor(Math.random() * loveMessages.length)];
    if (Math.random() < 0.3) {
      text.classList.add("fade");
    }
  }

  // Random position - make sure text doesn't go off screen
  const maxLeft = window.innerWidth - 200;
  text.style.left = Math.max(0, Math.random() * maxLeft) + "px";

  // Start from above the screen
  text.style.top = "-50px";

  // Random animation duration (4-7 seconds for smoother fall)
  const duration = Math.random() * 3 + 4;
  text.style.animationDuration = duration + "s";

  // No delay - start immediately
  text.style.animationDelay = "0s";

  container.appendChild(text);

  // Remove text after animation completes
  setTimeout(() => {
    if (text.parentNode) {
      text.parentNode.removeChild(text);
    }
  }, duration * 1000 + 500);
}

function updateCentralMessage() {
  centralMsg.innerHTML = centralMessages[messageIndex];
  messageIndex = (messageIndex + 1) % centralMessages.length;

  // Add glitch effect occasionally
  if (Math.random() < 0.3) {
    centralMsg.classList.add("glitch");
    setTimeout(() => {
      centralMsg.classList.remove("glitch");
    }, 300);
  }
}

// Create falling text every 200-800ms
function startMatrixRain() {
  createFallingText();
  // Adjust frequency based on screen size
  const isMobile = window.innerWidth <= 768;
  const delay = isMobile
    ? Math.random() * 800 + 300
    : Math.random() * 600 + 200;
  setTimeout(startMatrixRain, delay);
}

// Change central message every 3 seconds
setInterval(updateCentralMessage, 3000);

// Start the matrix rain effect
startMatrixRain();

// Create initial burst of text
const isMobile = window.innerWidth <= 768;
const initialBurst = isMobile ? 5 : 8;
for (let i = 0; i < initialBurst; i++) {
  setTimeout(createFallingText, i * 300);
}

// Adjust static lines for mobile
function createStaticLines() {
  const lineCount = isMobile ? 3 : 5;
  for (let i = 0; i < lineCount; i++) {
    const line = document.createElement("div");
    line.className = "static-lines";
    line.style.top = Math.random() * window.innerHeight + "px";
    line.style.animationDelay = Math.random() * 0.1 + "s";
    document.body.appendChild(line);

    setTimeout(() => {
      if (line.parentNode) {
        line.parentNode.removeChild(line);
      }
    }, 1000);
  }
}
