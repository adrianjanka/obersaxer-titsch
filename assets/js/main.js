/**
 * Main entry point for Obersaxer Titsch website
 * Initializes all modules and sets up event listeners
 */

import { initWordOfTheDay } from './word-of-the-day.js';
import { initCarousel } from './carousel.js';
import { initCardRenderer } from './card-renderer.js';
import { initSorting } from './sorting.js';
import { initBackgroundAnimation } from './background-animation.js';
import { initNavigation } from './navigation.js';

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Background animation
  initBackgroundAnimation();
  
  // Navigation
  initNavigation();
  
  // Hero: Word of the Day
  initWordOfTheDay();
  
  // Carousel
  initCarousel();
  
  // Card renderer for Weerter and Redewendiga
  initCardRenderer();
  
  // Sorting and filtering
  initSorting();
  
  console.log('✅ Obersaxer Titsch website initialized');
});
