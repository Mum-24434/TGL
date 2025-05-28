  function filterGallery(event, category) {
    const items = document.querySelectorAll(".gallery-item");
    const buttons = document.querySelectorAll(".filter-buttons button");

    // Highlight the clicked button
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    // Pause and reset all videos
    const allVideos = document.querySelectorAll("#gallery-section video");
    allVideos.forEach(video => {
      video.pause();
      video.currentTime = 0;
    });

    // Show or hide gallery items based on the selected category
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

  document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll("#gallery-section video");

    // Feature 1: Only one video plays at a time
    videos.forEach(video => {
      video.addEventListener("play", () => {
        videos.forEach(other => {
          if (other !== video) {
            other.pause();
          }
        });
      });
    });

    // Feature 3: Stop all videos when scrolling past gallery section
    const gallerySection = document.getElementById("gallery-section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          videos.forEach(video => {
            video.pause();
          });
        }
      });
    }, {
      threshold: 0.2
    });

    observer.observe(gallerySection);
  });
