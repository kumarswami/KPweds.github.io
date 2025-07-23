// Get the gallery container
const gallery = document.getElementById('gallery');

// Configuration
const imageCount = 16;
const imagesPerView = 8;
let currentIndex = 0;
let autoScrollInterval;

// Function to scroll manually
function scrollGallery(direction) {
  const scrollAmount = gallery.offsetWidth;

  currentIndex += direction;

  // Loop the scroll if end is reached
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > Math.floor(imageCount / imagesPerView) - 1) {
    currentIndex = 0;
  }

  gallery.scrollTo({
    left: currentIndex * scrollAmount,
    behavior: 'smooth'
  });
}

// Function to start auto-scrolling
function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    scrollGallery(1);
  }, 5000);
}

// Function to stop auto-scrolling (optional: for hover pause)
function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// Optional: Pause auto-scroll on hover
gallery.addEventListener('mouseenter', stopAutoScroll);
gallery.addEventListener('mouseleave', startAutoScroll);

// Initialize auto-scroll on load
startAutoScroll();
