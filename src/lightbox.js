document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const body = document.body;
    let currentIndex = 0;
    let lightbox = null;
    let lightboxImg = null;

    // Create Lightbox HTML
    const createLightbox = () => {
        const lightboxDiv = document.createElement('div');
        lightboxDiv.className = 'lightbox';
        lightboxDiv.innerHTML = `
      <div class="lightbox-close">&times;</div>
      <div class="lightbox-nav lightbox-prev">&#10094;</div>
      <div class="lightbox-nav lightbox-next">&#10095;</div>
      <div class="lightbox-content">
        <img class="lightbox-img" src="" alt="Full screen image">
      </div>
    `;
        document.body.appendChild(lightboxDiv);

        lightbox = lightboxDiv;
        lightboxImg = lightboxDiv.querySelector('.lightbox-img');

        // Close events
        lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        // Navigation events
        lightbox.querySelector('.lightbox-prev').addEventListener('click', () => changeSlide(-1));
        lightbox.querySelector('.lightbox-next').addEventListener('click', () => changeSlide(1));

        // Keyboard events
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') changeSlide(-1);
            if (e.key === 'ArrowRight') changeSlide(1);
        });

        // Touch/Swipe events
        let touchStartX = 0;
        let touchEndX = 0;

        lightbox.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        lightbox.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        const handleSwipe = () => {
            if (touchEndX < touchStartX - 50) changeSlide(1); // Swipe Left -> Next
            if (touchEndX > touchStartX + 50) changeSlide(-1); // Swipe Right -> Prev
        };
    };

    const openLightbox = (index) => {
        if (!lightbox) createLightbox();
        currentIndex = index;
        updateImage();
        lightbox.classList.add('active');
        body.style.overflow = 'hidden'; // Disable background scroll
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        body.style.overflow = '';
    };

    const changeSlide = (n) => {
        currentIndex += n;
        if (currentIndex >= galleryItems.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = galleryItems.length - 1;
        updateImage();
    };

    const updateImage = () => {
        // Determine the high-res source (could simply be the current src for now)
        const src = galleryItems[currentIndex].src;

        // Add fade effect
        lightboxImg.style.opacity = 0;
        setTimeout(() => {
            lightboxImg.src = src;
            lightboxImg.style.opacity = 1;
        }, 200);
    };

    // Attach click events to gallery items
    galleryItems.forEach((item, index) => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => openLightbox(index));
    });
});
