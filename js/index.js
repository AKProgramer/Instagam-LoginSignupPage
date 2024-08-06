var images = ["img/img.png", "img/img2.png", "img/img3.png", "img/img4.png"]; // Add more image URLs as needed

// Function to change the image after a specified delay
function changeImage() {
    var imageElement = document.querySelector('.frame-image');
    var currentSrc = imageElement.getAttribute('src');
    var currentIndex = images.indexOf(currentSrc);

    // Calculate the index of the next image
    var nextIndex = (currentIndex + 1) % images.length;

    // Change the src attribute to the next image URL
    imageElement.setAttribute('src', images[nextIndex]);

    // Trigger reflow to ensure transition animation occurs
    imageElement.offsetWidth; // This line is a hack to force a reflow

    // Show the next image with a fade-in effect
    imageElement.style.opacity = '1';
}

// Delay before changing the image (in milliseconds)
var delay = 2000; // Change image after 3 seconds (3000 milliseconds)

// Set an interval to change the image after the specified delay
setInterval(changeImage, delay);