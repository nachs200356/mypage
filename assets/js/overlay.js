document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById('overlay');
    const closeOverlay = document.getElementById('closeOverlay');
    const content = document.getElementById('content');

    closeOverlay.addEventListener('click', function() {
        overlay.style.display = 'none';
        content.style.display = 'block';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
});