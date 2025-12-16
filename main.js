import './src/style.css'

// Mobile Menu - Minimal approach
const mobileBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.menu-close-btn');
const overlay = document.querySelector('.menu-overlay');

function openMenu() {
    navLinks?.classList.add('active');
    overlay?.classList.add('active');
}

function closeMenu() {
    navLinks?.classList.remove('active');
    overlay?.classList.remove('active');
}

mobileBtn?.addEventListener('click', openMenu);
closeBtn?.addEventListener('click', closeMenu);
overlay?.addEventListener('click', closeMenu);
