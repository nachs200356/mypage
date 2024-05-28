document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".preview-image");
    const previewOverlay = document.querySelector(".isotope-overlay img");

    images.forEach(image => {
        image.addEventListener("click", function() {
            const src = this.getAttribute("src");
            previewOverlay.setAttribute("src", src);
            document.querySelector(".isotope-overlay").style.display = "flex";
        });
    });

    previewOverlay.addEventListener("click", function() {
        document.querySelector(".isotope-overlay").style.display = "none";
    });
});
