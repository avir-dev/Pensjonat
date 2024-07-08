document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalPrev = document.getElementById('modal-prev');
    const modalNext = document.getElementById('modal-next');
    const closeModal = document.getElementById('close');

    // Obsługa kliknięcia na hamburger-menu
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    hamburgerMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Obsługa otwierania modalu dla zdjęć w galerii
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryImages = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg'];

    let currentImageIndex = 0;

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = galleryImages[index];
            currentImageIndex = index;
        });
    });

    // Obsługa przycisków poprzedni/następny w modalu
    modalPrev.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        modalImg.src = galleryImages[currentImageIndex];
    });

    modalNext.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        modalImg.src = galleryImages[currentImageIndex];
    });

    // Obsługa zamykania modalu
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Zamykanie modalu po kliknięciu poza zdjęciem
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Obsługa klawiszy strzałek do przewijania zdjęć
    document.addEventListener('keydown', function(event) {
        if (modal.style.display === 'block') {
            if (event.key === 'ArrowLeft') {
                modalPrev.click();
            } else if (event.key === 'ArrowRight') {
                modalNext.click();
            } else if (event.key === 'Escape') {
                closeModal.click();
            }
        }
    });
});
