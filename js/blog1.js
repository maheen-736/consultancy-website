// Navigation scroll effect
window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile navigation toggle
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
    // Change hamburger icon based on state
    if (mobileNav.classList.contains('active')) {
        hamburger.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Close mobile nav when clicking overlay
overlay.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
});

// Mobile nav link clicks - allow normal navigation
document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Close mobile menu but allow default navigation
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        
        // For anchor links on same page, add smooth scrolling
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
        // All other links will work normally
    });
});

// Desktop nav link clicks - handle differently than mobile
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        // For anchor links on same page
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
        // All other links will work normally
    });
});

// Animation on scroll for story cards
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.student-story');
    
    elements.forEach((el, index) => {
        const elementPosition = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(elementPosition < screenPosition) {
            el.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s forwards`;
            el.style.opacity = '0';
        }
    });
};

// Set initial state for animations
document.querySelectorAll('.student-story').forEach(el => {
    el.style.opacity = '0';
});

// Run animations on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);