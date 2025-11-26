/**
 * Word of the Day
 * Selects and displays a daily featured word in the hero section
 */

import { words } from './data-words.js';

/**
 * Get the word of the day based on current date
 * Uses day of year to deterministically select a word
 */
function getWordOfTheDay() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  // Select word based on day of year
  const index = dayOfYear % words.length;
  return words[index];
}

/**
 * Render the word of the day card with flip interaction
 */
function renderWordOfTheDay() {
  const heroCard = document.getElementById('hero-card');
  if (!heroCard) return;
  
  const word = getWordOfTheDay();
  
  heroCard.innerHTML = `
    <div class="card card--hero" onclick="this.classList.toggle('flip')">
      <div class="card__inner">
        <div class="card__front">
          <img src="${word.folder}/${word.frontImage}" alt="${word.id}">
        </div>
        <div class="card__back">
          <img src="${word.folder}/${word.backImage}" alt="${word.id} - Rückseite">
        </div>
      </div>
    </div>
  `;
}

/**
 * Initialize word of the day
 */
export function initWordOfTheDay() {
  renderWordOfTheDay();
}
