import './src/style.css'

// Mobile Menu - Simple toggle only
const mobileBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileBtn && navLinks) {
    // Toggle menu open/close
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}
