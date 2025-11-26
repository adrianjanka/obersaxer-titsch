/**
 * Word Carousel
 * Horizontal scrolling carousel with all words
 */

import { words } from './data-words.js';

let autoScrollInterval;
const SCROLL_INTERVAL = 5000; // 5 seconds

/**
 * Render all words in the carousel
 */
function renderCarousel() {
  const track = document.getElementById('carousel-track');
  if (!track) return;
  
  track.innerHTML = words.map(word => `
    <div class="carousel__item">
      <div class="card card--carousel" onclick="this.classList.toggle('flip')">
        <div class="card__inner">
          <div class="card__front">
            <img src="${word.folder}/${word.frontImage}" alt="${word.id}">
          </div>
          <div class="card__back">
            <img src="${word.folder}/${word.backImage}" alt="${word.id} - Rückseite">
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Scroll carousel by one card width
 */
function scrollCarousel(direction) {
  const track = document.getElementById('carousel-track');
  if (!track) return;
  
  const cardWidth = track.querySelector('.carousel__item')?.offsetWidth || 0;
  const scrollAmount = direction === 'next' ? cardWidth + 16 : -(cardWidth + 16); // +16 for gap
  
  track.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

/**
 * Auto-scroll carousel
 */
function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    const track = document.getElementById('carousel-track');
    if (!track) return;
    
    // Check if at the end
    if (track.scrollLeft + track.offsetWidth >= track.scrollWidth - 10) {
      // Reset to start
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      scrollCarousel('next');
    }
  }, SCROLL_INTERVAL);
}

/**
 * Stop auto-scroll (on user interaction)
 */
function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

/**
 * Initialize carousel
 */
export function initCarousel() {
  renderCarousel();
  
  // Navigation buttons
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const track = document.getElementById('carousel-track');
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      scrollCarousel('prev');
      stopAutoScroll();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      scrollCarousel('next');
      stopAutoScroll();
    });
  }
  
  // Pause auto-scroll on hover/touch
  if (track) {
    track.addEventListener('mouseenter', stopAutoScroll);
    track.addEventListener('touchstart', stopAutoScroll);
  }
  
  // Start auto-scroll
  startAutoScroll();
}
