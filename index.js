// =====================================================
// AMAZONICA BRUNCH - JS (fixes applied 2026)
// - Gallery navigation completely fixed + preloading + smooth transitions
// - Responsive hero video (desktop/mobile source switching + fallback)
// - All other logic preserved + minor perf/robustness improvements
// =====================================================

// Modal functionality

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

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

        // Map URLs
        const appleMapsURL = "https://maps.apple/p/7du_ijItqzZhR4";
        const googleMapsURL = "https://maps.app.goo.gl/qcsy7FfSdY8zkm886";

        // Device detection
        const userAgent = navigator.userAgent;
        const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
        const isMac = /Macintosh/i.test(userAgent);
        const isAndroid = /Android/i.test(userAgent);
        const isMobile = isIOS || isAndroid;

        if (isMobile) {
            // 📱 Mobile devices → open in native apps
            if (isIOS) {
                window.location.href = appleMapsURL; // Opens Apple Maps app
            } else {
                window.location.href = googleMapsURL; // Opens Google Maps app
            }
        } else if (isMac) {
            // 💻 macOS → open Apple Maps web in a NEW tab
            window.open(appleMapsURL, '_blank');
        } else {
            // 🖥️ Other desktops → open Google Maps web in a NEW tab
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

// ============================================
// GALLERY / LIGHTBOX - FIXED & OPTIMIZED
// ============================================
// Bug fix: previous array referenced non-existent files ("restaurant pic X.JPG").
// Now uses the exact 3 images that exist and are rendered in .gallery-horizontal.
// This makes indexOf() always succeed and navigation reliable.
let currentGalleryIndex = 0;
const galleryImages = [
    'file_00000000fcc871f4a1ae3f1aacf7673b.jpg',
    'file_00000000abb471f48d4f36f25b99260c (1).jpg',
    'file_0000000085c07243b40869146b6301b5.jpg'
];

// Preload adjacent images for instant navigation (performance optimization)
function preloadAdjacentGalleryImages(currentIdx) {
    const len = galleryImages.length;
    const prevIdx = (currentIdx - 1 + len) % len;
    const nextIdx = (currentIdx + 1) % len;

    [prevIdx, nextIdx].forEach(idx => {
        const img = new Image();
        img.decoding = 'async';
        img.src = galleryImages[idx];
    });
}

function openGalleryModal(src) {
    currentGalleryIndex = galleryImages.indexOf(src);
    if (currentGalleryIndex === -1) {
        // Safety fallback (should never happen now)
        currentGalleryIndex = 0;
    }

    const galleryImg = document.getElementById('gallery-image');
    galleryImg.style.transition = 'opacity 0.1s ease';
    galleryImg.style.opacity = '0.7'; // subtle quick fade for perceived speed

    galleryImg.src = galleryImages[currentGalleryIndex];

    // Ensure image is fully loaded before showing (prevents partial render)
    galleryImg.onload = () => {
        galleryImg.style.opacity = '1';
    };

    openModal('gallery');

    // Preload neighbors immediately for buttery next/prev
    preloadAdjacentGalleryImages(currentGalleryIndex);
}

function navigateGallery(direction) {
    const len = galleryImages.length;
    currentGalleryIndex = (currentGalleryIndex + direction + len) % len;

    const galleryImg = document.getElementById('gallery-image');

    // Fast crossfade transition (much smoother than instant src swap)
    galleryImg.style.transition = 'opacity 0.12s ease';
    galleryImg.style.opacity = '0.6';

    // Small timeout allows CSS transition to start before src change
    setTimeout(() => {
        galleryImg.src = galleryImages[currentGalleryIndex];

        galleryImg.onload = () => {
            galleryImg.style.opacity = '1';
            // Preload new neighbors after each navigation
            preloadAdjacentGalleryImages(currentGalleryIndex);
        };
    }, 30);
}

// Toggle mobile menu
function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('open');
    hamburger.classList.toggle('active');
}

// Logo click to scroll to top
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

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

window.addEventListener('scroll', throttle(updateActiveNavLink, 80), { passive: true });

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
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) translateX(0) scale(1)';
                }
            });
        }, observerOptions);
    
        // Observe sections for animations
        const sections = document.querySelectorAll('section:not(#home)');
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            observer.observe(section);
        });

        // Observe menu items for staggered animation
        const menuItems = document.querySelectorAll('.dish');
        menuItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            item.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(item);
        });

        // ============================================
        // RESPONSIVE HERO VIDEO (Desktop vs Mobile)
        // ============================================
        function setResponsiveHeroVideo() {
            const video = document.getElementById('hero-video');
            if (!video) return;

            const isMobile = window.matchMedia('(max-width: 768px)').matches;
            // Desktop: full quality video
            const desktopSrc = 'restaurnat bg video.mp4';
            // Mobile: optimized video (user should create a lighter version)
            const mobileSrc = 'restaurnat bg video mobile.mp4';

            const targetSrc = isMobile ? mobileSrc : desktopSrc;

            // Avoid unnecessary reload if already correct
            const currentSource = video.querySelector('source');
            if (currentSource && currentSource.getAttribute('src') === targetSrc) {
                return;
            }

            // Clear previous sources
            video.innerHTML = '';

            const source = document.createElement('source');
            source.src = targetSrc;
            source.type = 'video/mp4';
            video.appendChild(source);

            // Reload the video with new source (critical for dynamic switch)
            video.load();

            // Fallback: if mobile video fails to load (404 etc), use desktop version
            video.onerror = () => {
                if (isMobile && targetSrc === mobileSrc) {
                    video.innerHTML = '';
                    const fallback = document.createElement('source');
                    fallback.src = desktopSrc;
                    fallback.type = 'video/mp4';
                    video.appendChild(fallback);
                    video.load();
                }
            };
        }

        // Initial load
        setResponsiveHeroVideo();

        // Update on resize (debounced via existing throttle pattern)
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(setResponsiveHeroVideo, 300);
        }, { passive: true });
});
