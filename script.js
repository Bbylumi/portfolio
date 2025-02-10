document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("readMoreModal");
  const btn = document.querySelector(".btn");
  const closeBtn = document.querySelector(".close-btn");

  if (btn && modal && closeBtn) {
    // Open Modal
    btn.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    // Close Modal
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close when clicking outside modal
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  } else {
    console.error("Modal elements not found. Check your HTML structure.");
  }
});




let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active');
}


