// Modal functionality
function openModal(id) {
    const modal = document.getElementById(`${id}-modal`);
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal(id) {
    const modal = document.getElementById(`${id}-modal`);
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }, 400);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            const id = modal.id.replace('-modal', '');
            closeModal(id);
        }
    });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Language switcher
function changeLanguage() {
    const selectedLang = document.getElementById('language').value;
    const allLangElements = document.querySelectorAll('[class*="lang-"]');

    allLangElements.forEach(el => {
        if (el.classList.contains(`lang-${selectedLang}`)) {
            el.style.display = 'inline';
        } else {
            el.style.display = 'none';
        }
    });

    // Update placeholders for contact form
    const placeholders = {
        'fr': { name: 'Votre Nom', email: 'Votre Email', message: 'Votre Message' },
        'en': { name: 'Your Name', email: 'Your Email', message: 'Your Message' },
        'ru': { name: 'Ваше Имя', email: 'Ваш Email', message: 'Ваше Сообщение' },
        'ro': { name: 'Numele Tău', email: 'Email-ul Tău', message: 'Mesajul Tău' },
        'it': { name: 'Il Tuo Nome', email: 'La Tua Email', message: 'Il Tuo Messaggio' },
        'es': { name: 'Tu Nombre', email: 'Tu Email', message: 'Tu Mensaje' }
    };

    const form = document.querySelector('.contact-form form');
    if (form) {
        form.querySelector('input[type="text"]').placeholder = placeholders[selectedLang].name;
        form.querySelector('input[type="email"]').placeholder = placeholders[selectedLang].email;
        form.querySelector('textarea').placeholder = placeholders[selectedLang].message;
    }
}

// Toggle menu category
function toggleCategory(header) {
    const category = header.parentElement;
    category.classList.toggle('expanded');
}

// Gallery modal functionality
let currentGalleryIndex = 0;
const galleryImages = [
    'restaurant pic 1.JPG',
    'restaurant pic 2.JPG',
    'restaurant pic 3.JPG',
    'restaurant pic 4.JPG',
    'restaurant pic 5.JPG',
    'restaurant pic 6.JPG',
    'restaurant pic 7.JPG',
    'restaurant pic 8.JPG',
    'restaurant pic 9.JPG'
];

function openGalleryModal(src) {
    currentGalleryIndex = galleryImages.indexOf(src);
    document.getElementById('gallery-image').src = src;
    openModal('gallery');
}

function navigateGallery(direction) {
    currentGalleryIndex += direction;
    if (currentGalleryIndex < 0) currentGalleryIndex = galleryImages.length - 1;
    if (currentGalleryIndex >= galleryImages.length) currentGalleryIndex = 0;
    document.getElementById('gallery-image').src = galleryImages[currentGalleryIndex];
}

// Handle reservation form submission
document.addEventListener('DOMContentLoaded', () => {
    const reservationForm = document.querySelector('.reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically send the data to a server
            alert('Réservation confirmée! (Fonctionnalité à implémenter côté serveur)');
            closeModal('reservation');
        });
    }

    // Set default language to French
    changeLanguage();

    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 1s ease-in forwards';
            }
        });
    }, observerOptions);

    // Observe sections for animations
    const sections = document.querySelectorAll('section:not(#home)');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Observe gallery images for fade-in
    const galleryImagesEls = document.querySelectorAll('.gallery-container img');
    galleryImagesEls.forEach(img => {
        observer.observe(img);
    });
});