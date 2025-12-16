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
    // Create Overlay dynamically if it doesn't exist
    let overlay = document.querySelector('.menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
    }

    // Inject Sidebar Header (Title + Close Button) if not present
    if (!navLinks.querySelector('.sidebar-header')) {
        const headerDiv = document.createElement('div');
        headerDiv.className = 'sidebar-header';
        headerDiv.innerHTML = `
      <span class="sidebar-title">Menu</span>
      <i class="ph-bold ph-x sidebar-close"></i>
    `;
        navLinks.insertBefore(headerDiv, navLinks.firstChild);
    }

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
        toggleMenu(true); // Always open when clicking hamburger
    });

    // Close events
    const closeBtn = navLinks.querySelector('.sidebar-close');
    if (closeBtn) closeBtn.addEventListener('click', () => toggleMenu(false));

    overlay.addEventListener('click', () => toggleMenu(false));

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') toggleMenu(false);
    });
}
