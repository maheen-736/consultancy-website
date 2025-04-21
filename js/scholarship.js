// Navigation scroll effect
window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        } else {
            window.location.href = this.href;
        }
    });
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('h2, .scholarship-card, .process-steps li, .benefit-item, .cta-section');
    
    elements.forEach(el => {
        const elementPosition = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if(elementPosition < screenPosition) {
            el.style.animation = 'fadeIn 0.8s ease-out forwards';
        }
    });
};

// Set initial state
document.querySelectorAll('h2, .scholarship-card, .process-steps li, .benefit-item, .cta-section').forEach(el => {
    el.style.opacity = '0';
});

// Run on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Parallax effect for header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.page-header');
    const scrollPosition = window.pageYOffset;
    header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
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

// Close mobile nav when clicking a link
document.querySelectorAll('.mobile-nav-links a').forEach(link => {
link.addEventListener('click', () => {
mobileNav.classList.remove('active');
overlay.classList.remove('active');
hamburger.innerHTML = '<i class="fas fa-bars"></i>';
});
});