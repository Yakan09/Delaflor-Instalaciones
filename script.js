// Actualizar año automáticamente
document.getElementById('year').textContent = new Date().getFullYear();

// Animaciones Reveal con IntersectionObserver
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(revealOnScroll, {
  threshold: 0.1
});

reveals.forEach(reveal => {
  observer.observe(reveal);
});
