
  function filterGallery(event, category) {
    const items = document.querySelectorAll(".gallery-item");
    const buttons = document.querySelectorAll(".filter-buttons button");

    // Highlight active button
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    // Pause and reset all videos
    const allVideos = document.querySelectorAll("video");
    allVideos.forEach(video => {
      video.pause();
      video.currentTime = 0;
    });

    // Show/hide gallery items
    items.forEach(item => {
      const itemCategory = item.getAttribute("data-category");

      if (
        category === 'all' ||
        itemCategory === category ||
        (category === 'cleaning' && (
          itemCategory === 'garden-cleaning' ||
          itemCategory === 'home-cleaning' ||
          itemCategory === 'carpet-cleaning'
        ))
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  // Pause all other videos when one plays
  document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll("video");

    videos.forEach(video => {
      video.addEventListener("play", () => {
        videos.forEach(other => {
          if (other !== video) {
            other.pause();
          }
        });
      });
    });
  });