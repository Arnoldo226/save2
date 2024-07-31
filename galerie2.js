document.addEventListener('DOMContentLoaded', () => {
    // Gestion de l'agrandissement des images
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', () => {
            if (img.classList.contains('enlarged')) {
                img.classList.remove('enlarged');
            } else {
                document.querySelectorAll('.gallery-item img').forEach(otherImg => {
                    otherImg.classList.remove('enlarged');
                });
                img.classList.add('enlarged');
            }
        });
    });

    // Gestion du défilement automatique infini
    document.querySelectorAll('.gallery').forEach(gallery => {
        const direction = gallery.dataset.direction;
        const scrollSpeed = 1; // Ajustez la vitesse de défilement ici
        const interval = 20; // Ajustez la fréquence du défilement ici
        let scrollPosition = 0;
        const galleryWidth = gallery.scrollWidth;

        // Clone les éléments pour créer un effet de défilement infini
        const cloneGalleryItems = () => {
            const items = Array.from(gallery.querySelectorAll('.gallery-item'));
            items.forEach(item => {
                const clone = item.cloneNode(true);
                gallery.appendChild(clone);
            });
        };

        cloneGalleryItems();

        function scrollGallery() {
            scrollPosition += direction === 'right' ? scrollSpeed : -scrollSpeed;
            gallery.scrollLeft = scrollPosition;
            if (scrollPosition >= gallery.scrollWidth / 2) {
                scrollPosition = 0;
            }
            if (scrollPosition <= 0) {
                scrollPosition = gallery.scrollWidth / 2;
            }
        }

        setInterval(scrollGallery, interval);
    });
});
