 // Animate service details on scroll
 const serviceDetails = document.querySelectorAll('.service-detail');
        
 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('visible');
         }
     });
 }, { threshold: 0.1 });

 serviceDetails.forEach(detail => {
     observer.observe(detail);
 });

 // Smooth scrolling for service buttons
 document.querySelectorAll('.service-btn').forEach(button => {
     button.addEventListener('click', function(e) {
         e.preventDefault();
         const targetId = this.getAttribute('href');
         const targetElement = document.querySelector(targetId);
         
         window.scrollTo({
             top: targetElement.offsetTop - 100,
             behavior: 'smooth'
         });

         // Pulse animation for the target section
         targetElement.style.animation = 'none';
         setTimeout(() => {
             targetElement.style.animation = 'pulse 1.5s ease';
         }, 10);
     });
 });

 // Add pulse animation to CSS
 const style = document.createElement('style');
 style.textContent = `
     @keyframes pulse {
         0% { box-shadow: 0 0 0 0 rgba(192, 57, 43, 0.4); }
         70% { box-shadow: 0 0 0 15px rgba(192, 57, 43, 0); }
         100% { box-shadow: 0 0 0 0 rgba(192, 57, 43, 0); }
     }
 `;
 document.head.appendChild(style);

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