document.addEventListener("DOMContentLoaded", function () {
  const bgMusic = document.getElementById("bg-music");

  function playMusicOnce() {
    if (bgMusic) {
      bgMusic.play().catch((error) => {
        console.log("Autoplay failed:", error);
      });
      document.removeEventListener("click", playMusicOnce);
    }
  }

  document.addEventListener("click", playMusicOnce);
});