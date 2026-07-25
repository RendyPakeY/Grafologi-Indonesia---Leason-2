/**
 * Grafologi Indonesia - Core Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Feature Carousel Slider Logic
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    let currentSlide = 0;
    let autoSlideInterval = null;

    function goToSlide(index) {
        if (index === currentSlide) return;
        
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        currentSlide = index;

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        goToSlide(nextIndex);
    }

    function startAutoSlide() {
        stopAutoSlide();
        autoSlideInterval = setInterval(nextSlide, 4500);
    }

    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
    }

    // Dot click events
    dots.forEach((dot) => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'), 10);
            goToSlide(index);
            startAutoSlide(); // Reset auto timer
        });
    });

    // Start carousel timer
    startAutoSlide();

    // Pause auto slide on hover over feature card
    const featureCard = document.querySelector('.feature-card');
    if (featureCard) {
        featureCard.addEventListener('mouseenter', stopAutoSlide);
        featureCard.addEventListener('mouseleave', startAutoSlide);
    }

    // 2. Navigation Active State & Smooth Scroll
    const navLinks = document.querySelectorAll('.nav-link');
    const mainNav = document.getElementById('mainNav');
    const mobileToggleBtn = document.getElementById('mobileToggleBtn');

    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            navLinks.forEach((l) => l.classList.remove('active'));
            link.classList.add('active');

            // Close mobile menu if open
            if (mainNav.classList.contains('mobile-open')) {
                mainNav.classList.remove('mobile-open');
            }
        });
    });

    // Mobile Menu Toggle
    if (mobileToggleBtn) {
        mobileToggleBtn.addEventListener('click', () => {
            mainNav.classList.toggle('mobile-open');
        });
    }

});
