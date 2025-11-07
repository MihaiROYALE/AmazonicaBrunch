// Modal functionality
function openModal(id) {
    const modal = document.getElementById(`${id}-modal`);
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

/** Redirects to platform-specific maps when a map link is clicked */
document.querySelectorAll('.map-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const appleMapsURL = "https://maps.apple.com/place?coordinate=43.700127,7.273847&name=Marked%20Location&map=explore";
        const googleMapsURL = "https://maps.app.goo.gl/DxqMXqTWVE7574FYA";

        const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        const isAndroid = /Android/i.test(navigator.userAgent);
        const isMobile = isIOS || isAndroid;

        if (isMobile) {
            // Open in native app
            if (isIOS) {
                window.location.href = appleMapsURL; // Opens Apple Maps
            } else {
                window.location.href = "geo:0,0?q=Hôtel+de+Paris,+Place+du+Casino,+Monte-Carlo,+Monaco"; // Opens Google Maps app
            }
        } else {
            // Desktop: open in new browser tab
            window.open(googleMapsURL, '_blank');
        }
    });
});

document.querySelectorAll('.phone-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const number = this.dataset.number;
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (isMobile) {
            window.location.href = `tel:${number}`; // Opens phone app
        } else {
            // Desktop: copy number to clipboard
            navigator.clipboard.writeText(number).then(() => {
                alert(`Phone number ${number} copied to clipboard.`);
            });
        }
    });
});

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

// Toggle mobile menu
function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('open');
    hamburger.classList.toggle('active');
}

// Scrollspy functionality
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Close menu when clicking a link
document.addEventListener('click', (e) => {
    const nav = document.getElementById('nav-menu');
    const hamburger = document.querySelector('.hamburger');
    if (nav.classList.contains('open') && !e.target.closest('header')) {
        nav.classList.remove('open');
        hamburger.classList.remove('active');
    }
});

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
                    entry.target.style.animation = 'fadeInUp 1.2s ease-out forwards';
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
    
        // Parallax effect for hero video
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroVideo = document.querySelector('.hero-video');
            if (heroVideo) {
                heroVideo.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
});
