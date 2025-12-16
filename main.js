import './src/style.css'

// Mobile Menu
const mobileBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileBtn && navLinks) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);

    // Create close button inside nav
    const closeBtn = document.createElement('button');
    closeBtn.className = 'menu-close-btn';
    closeBtn.innerHTML = '<i class="ph-bold ph-x"></i>';
    navLinks.insertBefore(closeBtn, navLinks.firstChild);

    // Open menu
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.add('active');
        overlay.classList.add('active');
    });

    // Close menu function
    const closeMenu = () => {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
    };

    // Close on X button
    closeBtn.addEventListener('click', closeMenu);

    // Close on overlay click
    overlay.addEventListener('click', closeMenu);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });
}
