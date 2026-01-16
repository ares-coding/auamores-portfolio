const titleText = "Building Intelligent Digital Solutions That Matter";
const speed = 100; 
let index = 0;

function typeWriter() {
    const element = document.querySelector(".name");
    if (element && index < titleText.length) {
        element.innerHTML += titleText.charAt(index);
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

