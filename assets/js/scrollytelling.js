/**
 * Scrollytelling JavaScript
 * IntersectionObserver for fade-in animations
 */

/**
 * Initialize scrollytelling animations
 */
export function initScrollytelling() {
  const sections = document.querySelectorAll('[data-animate]');
  
  if (!sections.length) return;
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Optional: Unobserve after animation
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });
}

// Auto-initialize if on scrollytelling page
if (document.querySelector('.main--scrollytelling')) {
  initScrollytelling();
}
