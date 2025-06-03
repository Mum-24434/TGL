
  // Open full-screen image
  function openFull(src) {
    document.getElementById("fullImage").src = src;
    document.getElementById("fullscreenViewer").style.display = "flex";
  }

  // Close full-screen view
  function closeFull() {
    document.getElementById("fullscreenViewer").style.display = "none";
  }

  // Filter gallery by category
  function filterGallery(event, category) {
    const buttons = document.querySelectorAll(".filter-buttons button");
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    const items = document.querySelectorAll(".gallery-item");
    items.forEach(item => {
      if (category === "all" || item.dataset.category === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
  function openFull(src) {
    document.getElementById("fullImage").src = src;
    document.getElementById("fullscreenViewer").style.display = "flex";
  }

  function closeFull(event) {
    // Avoid closing if clicking on the image itself
    if (event && event.target.tagName === "IMG") return;
    document.getElementById("fullscreenViewer").style.display = "none";
  }

