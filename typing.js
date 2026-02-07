const titleText = "Building AI-Driven Detection Systems That Solve Real Problems";
const speed = 80; 
let index = 0;

function typeWriter() {
    const element = document.querySelector(".name");
    if (element && index < titleText.length) {
        let currentText = titleText.substring(0, index + 1);
        
        
        currentText = currentText.replace("AI-Driven", '<span class="highlight">AI-Driven</span>');
        currentText = currentText.replace("Real Problems", '<span class="highlight">Real Problems</span>');

        element.innerHTML = currentText; 
        index++;
        setTimeout(typeWriter, speed);
    }
}

document.addEventListener("DOMContentLoaded", typeWriter);

const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuIcon.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const backToTopBtn = document.getElementById("backToTop");
    if (!backToTopBtn) return;
    backToTopBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    });
});