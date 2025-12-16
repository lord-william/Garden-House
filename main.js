import './src/style.css'

// Navigation is now handled by full page URLs, no smooth scroll needed


// Mobile Menu Toggle - ONLY on mobile
const mobileBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

// Create Overlay (only added to DOM once, but styled to only show on mobile via CSS)
let overlay = document.querySelector('.menu-overlay');
if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);
}

// Inject Sidebar Header ONLY on mobile
const injectSidebarHeader = () => {
    if (isMobile() && navLinks && !navLinks.querySelector('.sidebar-header')) {
        const headerDiv = document.createElement('div');
        headerDiv.className = 'sidebar-header';
        headerDiv.innerHTML = `
      <span class="sidebar-title">Menu</span>
      <i class="ph-bold ph-x sidebar-close"></i>
    `;
        navLinks.insertBefore(headerDiv, navLinks.firstChild);
        // Attach close event to the new close button
        headerDiv.querySelector('.sidebar-close').addEventListener('click', () => toggleMenu(false));
    }
};

// Remove Sidebar Header on Desktop
const removeSidebarHeader = () => {
    const header = navLinks?.querySelector('.sidebar-header');
    if (header) header.remove();
};

const toggleMenu = (show) => {
    if (!navLinks || !overlay) return;
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

// Initialize based on screen size
const initMobileMenu = () => {
    if (isMobile()) {
        injectSidebarHeader();
    } else {
        removeSidebarHeader();
        toggleMenu(false); // Ensure menu is closed on desktop
    }
};

// Run on load and on resize
initMobileMenu();
window.addEventListener('resize', initMobileMenu);

// Event Listeners
if (mobileBtn) {
    mobileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (isMobile()) toggleMenu(true);
    });
}

if (overlay) {
    overlay.addEventListener('click', () => toggleMenu(false));
}

// Link clicks: Allow navigation, then close menu. Use a small delay to ensure navigation starts.
if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            // Don't prevent default - let the link navigate
            // Close menu after a tiny delay to allow navigation to initiate
            setTimeout(() => toggleMenu(false), 100);
        });
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggleMenu(false);
});
