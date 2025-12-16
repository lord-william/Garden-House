import './src/style.css'

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Allow default behavior for across-page links (containing .html)
        const href = this.getAttribute('href');
        if (href.includes('.html')) return;

        e.preventDefault();
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });

        // Close mobile menu if open
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = navLinks.classList.contains('active') ? 'ph-x' : 'ph-list';
        mobileBtn.className = `ph-bold ${icon}`;
    });
}
