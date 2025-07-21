document.addEventListener("DOMContentLoaded", function () {
  const bgMusic = document.getElementById("bg-music");
  let isPlaying = false;

  // Toggle play/pause on every page click
  document.addEventListener("click", function () {
    if (!bgMusic) return;

    if (isPlaying) {
      bgMusic.pause();
    } else {
      bgMusic.play().catch((err) => console.log("Play failed:", err));
    }

    isPlaying = !isPlaying;
  });
});