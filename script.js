// Enhanced Matrix rain effect
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const fontSize = Math.max(8, Math.min(14, window.innerWidth / 35));
const columns = Math.floor(canvas.width / fontSize);

// Enhanced character sets
const matrixChars = "01".split("");
const loveSymbols = [
  "💝",
  "💖",
  "JACOB KAVINSKY",
  "💕",
  "💗",
  "💓",
  "💘",
  "❤️",
  "💋",
  "JACOB♡SYLVIE",
  "💌",
  "🌹",
];
const hackChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()".split("");
const loveWords = [
  "JACOB♡SYLVIE",
  "KAVINSKY",
  "JACOB KAVINSKY",
  'YOU"RE MINE',
  "MY LOVE",
  "KAVINSKY",
  "JACOB♡SYLVIE",
  "OCTOBET 17",
];

const drops = Array.from({ length: columns }, () => ({
  y: Math.floor((Math.random() * canvas.height) / fontSize),
  speed: Math.random() * 0.5 + 0.5,
  chars: [],
}));

let lastTime = 0;
const speed = 100;

function getRandomChar() {
  const rand = Math.random();
  if (rand < 0.6)
    return matrixChars[Math.floor(Math.random() * matrixChars.length)];
  if (rand < 0.8)
    return hackChars[Math.floor(Math.random() * hackChars.length)];
  if (rand < 0.95)
    return loveWords[Math.floor(Math.random() * loveWords.length)];
  return loveSymbols[Math.floor(Math.random() * loveSymbols.length)];
}

function draw(time = 0) {
  if (time - lastTime > speed) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < drops.length; i++) {
      const drop = drops[i];

      // Color variations
      const colors = [
        "#00ff00",
        "#00ff44",
        "#44ff00",
        "#00cc00",
        "#ffffff",
        "#ff6b9d",
      ];
      const colorIndex = Math.floor(Math.random() * colors.length);
      ctx.fillStyle = colors[colorIndex];

      // Font variations
      const isSpecial = Math.random() > 0.8;
      ctx.font = `${fontSize * (isSpecial ? 1.2 : 1)}px Courier New`;

      const char = getRandomChar();
      const x = i * fontSize;
      const y = drop.y * fontSize;

      // Add glow effect for special characters
      if (isSpecial) {
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 10;
      } else {
        ctx.shadowBlur = 0;
      }

      ctx.fillText(char, x, y);

      // Move drop
      drop.y += drop.speed;

      // Reset drop
      if (drop.y * fontSize > canvas.height && Math.random() > 0.975) {
        drop.y = 0;
        drop.speed = Math.random() * 0.5 + 0.5;
      }
    }
    lastTime = time;
  }
  requestAnimationFrame(draw);
}

// Enhanced terminal messages
const hackMessages = [
  "> Deploying cupid malware successfully...",
  "> Emotional database compromised...",
  "> Love level exceeding safe parameters...",
  "> Heart takeover: 100% COMPLETE",
  "> Status: PERMANENTLY YOURS",
  "> Mission: LOVE YOU INFINITELY",
  "> Warning: NO ANTIVIRUS CAN CURE THIS",
  "> Danger:  YOU'RE INFECTED WITH MY LOVE ",
  "> Final message: YOU'RE STUCK WITH ME! JACOD!",
  "> SYLVIE LOVE JACOD!"
];

let messageIndex = 0;
let isLooping = false;

function addTerminalMessage() {
  const terminal = document.getElementById("terminal-content");
  const cursor = terminal.querySelector(".terminal-cursor");

  if (messageIndex < hackMessages.length || isLooping) {
    const newLine = document.createElement("div");
    newLine.className = "terminal-line";

    if (messageIndex >= hackMessages.length) {
      messageIndex = 0;
      isLooping = true;
    }

    newLine.textContent = hackMessages[messageIndex];
    newLine.style.animationDelay = Math.random() * 0.5 + "s";

    terminal.insertBefore(newLine, cursor);

    // Keep only last 8 messages
    const lines = terminal.querySelectorAll(".terminal-line");
    if (lines.length > 8) {
      lines[0].remove();
    }

    terminal.scrollTop = terminal.scrollHeight;
    messageIndex++;

    const nextDelay = Math.random() * 1000 + 800;
    setTimeout(addTerminalMessage, nextDelay);
  }
}

// Floating elements system
function createFloatingElement() {
  const symbols = ["💖", "💕", "💗", "💓", "💘", "❤️", "💋", "💝", "🌹", "💌"];
  const element = document.createElement("div");
  element.className = "floating-symbol";
  element.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  element.style.left = Math.random() * window.innerWidth + "px";
  element.style.color = ["#ff6b9d", "#00ff44", "#ff4444"][
    Math.floor(Math.random() * 3)
  ];
  element.style.animationDuration = Math.random() * 4 + 6 + "s";
  element.style.animationDelay = Math.random() * 2 + "s";

  document.body.appendChild(element);

  setTimeout(() => {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }, 10000);
}

// Enhanced glitch effects
function createGlitchEffect() {
  const intensity = Math.random() * 10 + 5;
  const duration = Math.random() * 200 + 50;

  document.body.style.filter = `
                hue-rotate(${intensity}deg) 
                contrast(${1 + intensity / 30}) 
                brightness(${1 + intensity / 50})
                saturate(${1 + intensity / 20})
            `;

  // Add screen shake
  document.body.style.transform = `translate(${Math.random() * 4 - 2}px, ${
    Math.random() * 4 - 2
  }px)`;

  setTimeout(() => {
    document.body.style.filter = "none";
    document.body.style.transform = "none";
  }, duration);
}

// Wave interference effect
function createWaveInterference() {
  const waves = document.querySelector(".wave-interference");
  const intensity = Math.random() * 2 + 1;
  waves.style.transform = `scale(${intensity}) rotate(${
    Math.random() * 10 - 5
  }deg)`;
  waves.style.opacity = Math.random() * 0.3 + 0.5;

  setTimeout(() => {
    waves.style.transform = "scale(1) rotate(0deg)";
    waves.style.opacity = "0.6";
  }, Math.random() * 1000 + 500);
}

// Initialize everything
setTimeout(addTerminalMessage, 3000);
draw();

// Create floating elements
setInterval(createFloatingElement, 3000);

// Random glitch effects
setInterval(createGlitchEffect, Math.random() * 8000 + 4000);

// Wave interference
setInterval(createWaveInterference, Math.random() * 6000 + 3000);

// Prevent zoom and context menu
document.addEventListener("touchstart", function (e) {
  if (e.touches.length > 1) {
    e.preventDefault();
  }
});

let lastTouchEnd = 0;
document.addEventListener(
  "touchend",
  function (e) {
    const now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
      e.preventDefault();
    }
    lastTouchEnd = now;
  },
  false
);

document.addEventListener("contextmenu", (e) => e.preventDefault());

// Dynamic title changes
const titles = [
  "💚 SYSTEM COMPROMISED 💚",
  "💖 HEART HACKED 💖",
  "💘 LOVE VIRUS ACTIVE 💘",
  "💝 ROMANTIC OVERRIDE 💝",
];

let titleIndex = 0;
setInterval(() => {
  const titleElement = document.querySelector(".main-title");
  titleIndex = (titleIndex + 1) % titles.length;
  titleElement.textContent = titles[titleIndex];
}, 8000);
