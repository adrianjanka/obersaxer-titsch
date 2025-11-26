/**
 * Sorting and Filtering
 * Handles sorting by dialect/german/date and filtering by category
 */

import { words } from './data-words.js';
import { phrases } from './data-phrases.js';
import { updateFilteredWords, updateFilteredPhrases } from './card-renderer.js';

/**
 * Sort items by different criteria
 */
function sortItems(items, sortBy) {
  const sorted = [...items];
  
  switch (sortBy) {
    case 'dialect-az':
      return sorted.sort((a, b) => a.id.localeCompare(b.id, 'de'));
    
    case 'german-az':
      return sorted.sort((a, b) => {
        const germanA = a.germanWord || a.id;
        const germanB = b.germanWord || b.id;
        return germanA.localeCompare(germanB, 'de');
      });
    
    case 'newest':
      return sorted.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
    
    default:
      return sorted;
  }
}

/**
 * Filter words by category
 */
function filterByCategory(items, category) {
  if (category === 'all') return items;
  return items.filter(item => item.category === category);
}

/**
 * Handle Weerter sorting
 */
function handleWeerterSort() {
  const sortSelect = document.getElementById('sort-weerter');
  const categorySelect = document.getElementById('filter-category-weerter');
  
  if (!sortSelect || !categorySelect) return;
  
  const sortBy = sortSelect.value;
  const category = categorySelect.value;
  
  // Filter first, then sort
  let filtered = filterByCategory(words, category);
  let sorted = sortItems(filtered, sortBy);
  
  updateFilteredWords(sorted);
}

/**
 * Handle Redewendiga sorting
 */
function handleRedewendigaSort() {
  const sortSelect = document.getElementById('sort-redewendiga');
  
  if (!sortSelect) return;
  
  const sortBy = sortSelect.value;
  let sorted = sortItems(phrases, sortBy);
  
  updateFilteredPhrases(sorted);
}

/**
 * Initialize sorting and filtering
 */
export function initSorting() {
  // Weerter sorting/filtering
  const sortWeerter = document.getElementById('sort-weerter');
  const filterCategoryWeerter = document.getElementById('filter-category-weerter');
  
  if (sortWeerter) {
    sortWeerter.addEventListener('change', handleWeerterSort);
  }
  
  if (filterCategoryWeerter) {
    filterCategoryWeerter.addEventListener('change', handleWeerterSort);
  }
  
  // Redewendiga sorting
  const sortRedewendiga = document.getElementById('sort-redewendiga');
  
  if (sortRedewendiga) {
    sortRedewendiga.addEventListener('change', handleRedewendigaSort);
  }
}
