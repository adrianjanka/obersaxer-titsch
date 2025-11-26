/**
 * Animated Background Dots
 * Creates colorful floating dots in the background
 */

const COLORS = ['#2F88C1', '#C95858', '#F29C50', '#8666A2', '#4CA86E'];
const DOT_COUNT = 15;

/**
 * Create a single animated dot
 */
function createDot() {
  const dot = document.createElement('div');
  dot.className = 'background-dot';
  
  // Random size between 60px and 200px
  const size = Math.floor(Math.random() * 140) + 60;
  
  // Random position
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  
  // Random color from palette
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  
  // Random opacity between 0.1 and 0.3
  const opacity = (Math.random() * 0.2) + 0.1;
  
  // Random animation duration between 15s and 30s
  const duration = Math.floor(Math.random() * 15) + 15;
  
  // Random animation delay
  const delay = Math.random() * -20;
  
  dot.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    left: ${left}%;
    top: ${top}%;
    background-color: ${color};
    opacity: ${opacity};
    animation-duration: ${duration}s;
    animation-delay: ${delay}s;
  `;
  
  return dot;
}

/**
 * Initialize background animation
 */
export function initBackgroundAnimation() {
  const container = document.getElementById('background-dots');
  if (!container) return;
  
  // Create dots
  for (let i = 0; i < DOT_COUNT; i++) {
    container.appendChild(createDot());
  }
}
