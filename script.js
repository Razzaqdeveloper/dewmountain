// Toggle Navbar for Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  // Animate Hamburger Icon
  hamburger.classList.toggle('active');
});

// Reveal Elements on Scroll
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.1 }
);

faders.forEach(fader => appearOnScroll.observe(fader));
