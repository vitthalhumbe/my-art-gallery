document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section');

    // IMPORTANT: Replace these with the paths to your own images
    const images = [
        'assets/images/image-1.jpg'
    ];

    let currentImageIndex = 0;

    function changeBackgroundImage() {
        // Set the background image
        heroSection.style.backgroundImage = `url('${images[currentImageIndex]}')`;

        // Move to the next image, looping back to the start if necessary
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Change the image immediately on load
    changeBackgroundImage();

    // Then, change the image every 5 seconds (5000 milliseconds)
    setInterval(changeBackgroundImage, 5000);
});


// --- Gallery Page Script ---

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Check if we are on a page with filter buttons and a gallery
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterButtons.length > 0 && galleryItems.length > 0) {
        // --- Filtering Logic ---
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Set active class on button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                const filter = this.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // --- Lightbox Logic ---
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxTitle = document.getElementById('lightbox-title');
        const lightboxMedium = document.getElementById('lightbox-medium');
        const lightboxYear = document.getElementById('lightbox-year');
        const lightboxDescription = document.getElementById('lightbox-description');
        const closeBtn = document.querySelector('.close-btn');

        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                // Get data from the clicked item
                const imgSrc = this.querySelector('img').src;
                const title = this.getAttribute('data-title');
                const medium = this.getAttribute('data-medium');
                const year = this.getAttribute('data-year');
                const description = this.getAttribute('data-description');

                // Populate and show the lightbox
                lightboxImg.src = imgSrc;
                lightboxTitle.textContent = title;
                lightboxMedium.textContent = medium;
                lightboxYear.textContent = year;
                lightboxDescription.textContent = description;
                lightbox.style.display = 'flex'; // Use flex to center content
            });
        });

        // Function to close the lightbox
        function closeLightbox() {
            lightbox.style.display = 'none';
        }

        // Close lightbox when clicking the close button or outside the content
        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) { // Only if clicking on the dark background
                closeLightbox();
            }
        });
    }

});
