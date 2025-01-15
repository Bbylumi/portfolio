// Framer Motion setup for animations
document.addEventListener("DOMContentLoaded", () => {
  const { motion } = window["framer-motion"];

  // Portfolio Images Animation
  document.querySelectorAll(".portfolio-item").forEach((item) => {
    motion(item, {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: "easeOut" },
    });
  });

  // Smooth Section Transitions
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const text = `
   Hi, I'm Ajibola, a passionate graphic designer dedicated to creating visually'
   stunning and effective designs. With good number of years experience in the industry, 
   I've honed my skills in Graphic designing and Video animation . I'm excited to bring my creativity and expertise to your project;`;
  const typewriterElement = document.getElementById("typewriter-text");
  const homeButton = document.getElementById("home-button");

  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      typewriterElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50); // Adjust speed here
    } else {
      homeButton.classList.remove("hidden");
    }
  }

  typeWriter();
});
