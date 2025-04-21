 // Navigation scroll effect - matches reference
 window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Animation on scroll - enhanced version of reference animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.blog-card');
    
    elements.forEach((el, index) => {
        const elementPosition = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(elementPosition < screenPosition) {
            el.style.animation = `fadeInUp 0.8s ease-out ${index * 0.2}s forwards`;
            el.style.opacity = '0';
        }
    });
};

// Set initial state
document.querySelectorAll('.blog-card').forEach(el => {
    el.style.opacity = '0';
});

// Run on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

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

// Close mobile nav when clicking a link
document.querySelectorAll('.mobile-nav-links a').forEach(link => {
link.addEventListener('click', () => {
mobileNav.classList.remove('active');
overlay.classList.remove('active');
hamburger.innerHTML = '<i class="fas fa-bars"></i>';
});
});