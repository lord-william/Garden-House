import './src/style.css'

// Mobile Menu - Super simple
const mobileBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.menu-close-btn');

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.add('active');
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
}
