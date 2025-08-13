
    function openFull(src) {
        document.getElementById("fullImage").src = src;
        document.getElementById("fullscreenViewer").style.display = "flex";
    }

    function closeFull(event) {
        if (event && event.target.tagName === "IMG") return;
        document.getElementById("fullscreenViewer").style.display = "none";
    }

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

