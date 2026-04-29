// JavaScript functionalities can be added here if needed
// Currently the page works without JavaScript, using CSS-only interactions

// Example: Smooth scroll for older browsers
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});

// Console message
console.log('TwinsPark - Inovação que conecta');
