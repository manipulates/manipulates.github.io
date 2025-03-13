document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("matrix-bg");
  const ctx = canvas.getContext("2d");

  // Set canvas size to full screen
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // ASCII characters from your logo
  const matrixChars = ["░", "▒", "▓", "█"];
  const fontSize = 16;
  const columns = canvas.width / fontSize;
  const drops = [];

  // Initialize drop positions
  for (let x = 0; x < columns; x++) {
    drops[x] = Math.random() * canvas.height; // Start at random heights
  }

  // Animation function
  function draw() {
    // Fade the background slightly with a semi-transparent black fill
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `${fontSize}px Hack, monospace`;

    // Draw falling characters
    for (let i = 0; i < drops.length; i++) {
      // Randomly pick a character
      const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
      // Random pale white/grey color with low opacity
      const shade = Math.random() > 0.5 ? "rgba(255, 255, 255, 0.2)" : "rgba(150, 150, 150, 0.2)";
      ctx.fillStyle = shade;
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      // Move drop down, reset to top if it reaches bottom
      drops[i]++;
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
    }
  }

  // Run animation every 50ms
  setInterval(draw, 50);

  // Resize canvas if window size changes
  window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drops.length = 0; // Reset drops array
    for (let x = 0; x < canvas.width / fontSize; x++) {
      drops[x] = Math.random() * canvas.height;
    }
  });
});