// Show popup after 3 seconds
setTimeout(() => {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    setTimeout(() => {
      popup.classList.add('show');
    }, 10);
  }, 3000);
  
  // Close popup when X button is clicked
  document.getElementById('popupCloseBtn').addEventListener('click', () => {
    const popup = document.getElementById('popup');
    popup.classList.remove('show');
    setTimeout(() => {
      popup.style.display = 'none';
    }, 500);
  });
  
  // Close popup when clicking outside
  window.addEventListener('click', (e) => {
    const popup = document.getElementById('popup');
    if (e.target === popup) {
      popup.classList.remove('show');
      setTimeout(() => {
        popup.style.display = 'none';
      }, 500);
    }
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

  // Show form function
  function showForm() {
    document.getElementById('googleFormContainer').style.display = 'block';
    // Close popup if open
    const popup = document.getElementById('popup');
    popup.classList.remove('show');
    setTimeout(() => {
      popup.style.display = 'none';
    }, 500);
    // Scroll to form
    document.getElementById('googleFormContainer').scrollIntoView({
      behavior: 'smooth'
    });
  }

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