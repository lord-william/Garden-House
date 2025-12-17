import './src/style.css'
import { inject } from '@vercel/analytics'

// Initialize Vercel Analytics
inject()

// Mobile Menu
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

// Explicitly handle link clicks to ensure navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        // Get the href
        const href = this.getAttribute('href');

        // Close the menu
        navLinks.classList.remove('active');

        // Navigate after a small delay
        if (href && href !== '#') {
            setTimeout(() => {
                window.location.href = href;
            }, 50);
        }
    });
});
