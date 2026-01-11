// typing.js
const titleText = "Building Intelligent Digital Solutions That Matter";
const speed = 100; 
let index = 0;

function typeWriter() {
    if (index < titleText.length) {
        // Hinahanap nito ang class na .name at dinadagdag ang bawat letra
        document.querySelector(".name").innerHTML += titleText.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

// Sinisigurado nito na tapos na mag-load ang website bago mag-type
document.addEventListener("DOMContentLoaded", typeWriter);
// --- Hamburger Menu Logic ---
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Palitan ang icon (Bars to X)
        const icon = menuIcon.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Isara ang menu kapag may clinick na link (para sa smooth scroll)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuIcon.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });
}
