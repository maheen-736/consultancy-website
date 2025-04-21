// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = Math.random() * 10 + 10;
        const opacity = Math.random() * 0.5 + 0.1;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.opacity = opacity;
        
        particlesContainer.appendChild(particle);
    }
}

// Show popup after 3 seconds
setTimeout(() => {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    setTimeout(() => popup.classList.add('show'), 10);
}, 3000);

// Close popup
document.getElementById('popupCloseBtn').addEventListener('click', () => {
    const popup = document.getElementById('popup');
    popup.classList.remove('show');
    setTimeout(() => popup.style.display = 'none', 500);
});

// Mobile navigation toggle
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburger.innerHTML = mobileNav.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile nav when clicking overlay
overlay.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
});

// Initialize on page load
window.addEventListener('load', () => {
    createParticles();
    // Initialize other animations/features
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});