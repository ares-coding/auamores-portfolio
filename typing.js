const titleText = "Building AI-Driven Detection Systems That Solve Real Problems";
const speed = 100; 
let index = 0;

function typeWriter() {
    const element = document.querySelector(".name");
    if (element && index < titleText.length) {
        element.textContent += titleText.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

document.addEventListener("DOMContentLoaded", typeWriter);

// Hamburger Menu Logic
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuIcon.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}
// Back to Top Button Logic
document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("backToTop");

  if (!backToTopBtn) return;

  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // smooth scroll
    window.scrollTo({ top: 0, behavior: "smooth" });

    // fallback (in case may custom scroll behavior)
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
});
