
//gallery-section script
    function filterGallery(category) {
      const items = document.querySelectorAll(".gallery-item");
      const buttons = document.querySelectorAll(".filter-buttons button");

      // Highlight active button
      buttons.forEach(btn => btn.classList.remove("active"));
      event.target.classList.add("active");

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

    // Optional: Pause other videos when one is playing
    document.querySelectorAll("video").forEach(video => {
      video.addEventListener("play", () => {
        document.querySelectorAll("video").forEach(other => {
          if (other !== video) other.pause();
        });
      });
    });
  