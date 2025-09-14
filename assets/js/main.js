document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section');

    // IMPORTANT: Replace these with the paths to your own images
    const images = [
        'assets/images/image-1.jpg',
        'assets/images/image-2.jpg',
        'assets/images/image-3.jpg'
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

