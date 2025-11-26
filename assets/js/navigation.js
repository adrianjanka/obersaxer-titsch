/**
 * Navigation
 * Handles mobile menu toggle and dropdown interactions
 */

/**
 * Toggle mobile navigation menu
 */
function toggleMobileMenu() {
  const menu = document.getElementById('nav-menu');
  const toggle = document.getElementById('nav-toggle');
  
  if (!menu || !toggle) return;
  
  const isOpen = menu.classList.toggle('nav__menu--open');
  toggle.classList.toggle('nav__toggle--active', isOpen);
  toggle.setAttribute('aria-label', isOpen ? 'Navigation schließen' : 'Navigation öffnen');
  
  // Prevent body scroll when menu is open
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

/**
 * Toggle dropdown menu
 */
function toggleDropdown(event) {
  const button = event.currentTarget;
  const dropdown = button.nextElementSibling;
  
  if (!dropdown) return;
  
  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', !isExpanded);
  dropdown.classList.toggle('nav__dropdown--open');
}

/**
 * Close mobile menu when clicking outside
 */
function handleOutsideClick(event) {
  const nav = document.querySelector('.nav');
  const menu = document.getElementById('nav-menu');
  const toggle = document.getElementById('nav-toggle');
  
  if (!nav || !menu || !toggle) return;
  
  if (!nav.contains(event.target) && menu.classList.contains('nav__menu--open')) {
    menu.classList.remove('nav__menu--open');
    toggle.classList.remove('nav__toggle--active');
    toggle.setAttribute('aria-label', 'Navigation öffnen');
    document.body.style.overflow = '';
  }
}

/**
 * Initialize navigation
 */
export function initNavigation() {
  // Mobile menu toggle
  const navToggle = document.getElementById('nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', toggleMobileMenu);
  }
  
  // Dropdown toggle
  const dropdownToggle = document.querySelector('.nav__dropdown-toggle');
  if (dropdownToggle) {
    dropdownToggle.addEventListener('click', toggleDropdown);
  }
  
  // Close menu on outside click
  document.addEventListener('click', handleOutsideClick);
  
  // Close menu on escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const menu = document.getElementById('nav-menu');
      const toggle = document.getElementById('nav-toggle');
      
      if (menu && menu.classList.contains('nav__menu--open')) {
        menu.classList.remove('nav__menu--open');
        toggle?.classList.remove('nav__toggle--active');
        toggle?.setAttribute('aria-label', 'Navigation öffnen');
        document.body.style.overflow = '';
      }
    }
  });
}
