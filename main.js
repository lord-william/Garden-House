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
    // Create Overlay dynamically
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);

    const toggleMenu = (show) => {
        if (show) {
            navLinks.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Lock scroll
        } else {
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = ''; // Unlock scroll
        }
    };

    mobileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = navLinks.classList.contains('active');
        toggleMenu(!isOpen);
    });

    // Close when clicking overlay
    overlay.addEventListener('click', () => toggleMenu(false));

    // Close when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') toggleMenu(false);
    });
}
