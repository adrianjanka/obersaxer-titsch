/**
 * Card Renderer
 * Renders word and phrase cards with pagination
 */

import { words } from './data-words.js';
import { phrases } from './data-phrases.js';

const CARDS_PER_PAGE = 9;
let currentIndexWeerter = 0;
let currentIndexRedewendiga = 0;
let filteredWords = [...words];
let filteredPhrases = [...phrases];

/**
 * Render a single card
 */
function renderCard(item) {
  return `
    <div class="card" onclick="this.classList.toggle('flip')">
      <div class="card__inner">
        <div class="card__front">
          <img src="${item.folder}/${item.frontImage}" alt="${item.id}">
        </div>
        <div class="card__back">
          <img src="${item.folder}/${item.backImage}" alt="${item.id} - Rückseite">
        </div>
      </div>
    </div>
  `;
}

/**
 * Render cards for Weerter section
 */
function renderWeerter(loadMore = false) {
  const grid = document.getElementById('cards-grid-weerter');
  const loadMoreBtn = document.getElementById('load-more-weerter');
  if (!grid) return;
  
  const startIndex = loadMore ? currentIndexWeerter : 0;
  const endIndex = startIndex + CARDS_PER_PAGE;
  const cardsToRender = filteredWords.slice(startIndex, endIndex);
  
  if (loadMore) {
    // Append cards
    grid.innerHTML += cardsToRender.map(renderCard).join('');
  } else {
    // Replace all cards
    grid.innerHTML = cardsToRender.map(renderCard).join('');
  }
  
  currentIndexWeerter = endIndex;
  
  // Show/hide load more button
  if (loadMoreBtn) {
    loadMoreBtn.style.display = currentIndexWeerter >= filteredWords.length ? 'none' : 'block';
  }
}

/**
 * Render cards for Redewendiga section
 */
function renderRedewendiga(loadMore = false) {
  const grid = document.getElementById('cards-grid-redewendiga');
  const loadMoreBtn = document.getElementById('load-more-redewendiga');
  if (!grid) return;
  
  const startIndex = loadMore ? currentIndexRedewendiga : 0;
  const endIndex = startIndex + CARDS_PER_PAGE;
  const cardsToRender = filteredPhrases.slice(startIndex, endIndex);
  
  if (loadMore) {
    grid.innerHTML += cardsToRender.map(renderCard).join('');
  } else {
    grid.innerHTML = cardsToRender.map(renderCard).join('');
  }
  
  currentIndexRedewendiga = endIndex;
  
  if (loadMoreBtn) {
    loadMoreBtn.style.display = currentIndexRedewendiga >= filteredPhrases.length ? 'none' : 'block';
  }
}

/**
 * Update filtered words based on sorting/filtering
 */
export function updateFilteredWords(sortedWords) {
  filteredWords = sortedWords;
  currentIndexWeerter = 0;
  renderWeerter(false);
}

/**
 * Update filtered phrases based on sorting
 */
export function updateFilteredPhrases(sortedPhrases) {
  filteredPhrases = sortedPhrases;
  currentIndexRedewendiga = 0;
  renderRedewendiga(false);
}

/**
 * Initialize card renderer
 */
export function initCardRenderer() {
  // Initial render
  renderWeerter(false);
  renderRedewendiga(false);
  
  // Load more buttons
  const loadMoreWeerterBtn = document.getElementById('load-more-weerter');
  const loadMoreRedewendigaBtn = document.getElementById('load-more-redewendiga');
  
  if (loadMoreWeerterBtn) {
    loadMoreWeerterBtn.addEventListener('click', () => renderWeerter(true));
  }
  
  if (loadMoreRedewendigaBtn) {
    loadMoreRedewendigaBtn.addEventListener('click', () => renderRedewendiga(true));
  }
}
