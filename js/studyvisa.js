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

 // Navigation scroll effect
 window.addEventListener('scroll', function() {
     const nav = document.getElementById('mainNav');
     if (window.scrollY > 50) {
         nav.classList.add('scrolled');
     } else {
         nav.classList.remove('scrolled');
     }
 });

 // Animation on scroll
 const animateOnScroll = () => {
     const elements = document.querySelectorAll('.process-step, .country-card, .cta-section');
     
     elements.forEach((el, index) => {
         const elementPosition = el.getBoundingClientRect().top;
         const screenPosition = window.innerHeight / 1.3;
         
         if(elementPosition < screenPosition) {
             el.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s forwards`;
             el.style.opacity = '1';
         }
     });
 };

 // Set initial state
 document.querySelectorAll('.process-step, .country-card, .cta-section').forEach(el => {
     el.style.opacity = '0';
 });

 // Run on load and scroll
 window.addEventListener('load', animateOnScroll);
 window.addEventListener('scroll', animateOnScroll);