// Get the gallery container (scrollable div)
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

  // Looping logic
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > Math.floor(imageCount / imagesPerView) - 1) {
    currentIndex = 0;
  }

  gallery.scrollTo({
    left: currentIndex * scrollAmount,
    behavior: 'smooth'
  });
}

// Auto-scroll function
function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    scrollGallery(1);
  }, 5000);
}

// Stop auto-scroll
function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// Optional: pause on hover
gallery.addEventListener('mouseenter', stopAutoScroll);
gallery.addEventListener('mouseleave', startAutoScroll);

// Start on load
window.addEventListener('DOMContentLoaded', startAutoScroll);
