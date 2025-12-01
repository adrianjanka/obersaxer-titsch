/**
 * Memory Game
 * Matches Obersaxer Titsch words with German translations
 */

import { words } from './data-words.js';

class MemoryGame {
  constructor() {
    this.board = document.getElementById('memory-board');
    this.cards = [];
    this.flippedCards = [];
    this.matchedPairs = 0;
    this.moves = 0;
    this.isProcessing = false;
    
    this.init();
  }
  
  /**
   * Initialize the game
   */
  init() {
    this.createGame();
  }
  
  /**
   * Create a new game
   */
  createGame() {
    // Reset game state
    this.cards = [];
    this.flippedCards = [];
    this.matchedPairs = 0;
    this.moves = 0;
    this.isProcessing = false;
    
    // Get 9 random words
    const selectedWords = this.getRandomWords(9);
    
    // Create card pairs (Obersaxer + German)
    const cardPairs = [];
    selectedWords.forEach(word => {
      // Obersaxer Titsch card
      cardPairs.push({
        id: word.id,
        text: word.id,
        type: 'titsch',
        pairId: word.id
      });
      
      // German card
      cardPairs.push({
        id: `${word.id}-de`,
        text: word.germanWord,
        type: 'german',
        pairId: word.id
      });
    });
    
    // Shuffle cards
    this.cards = this.shuffleArray(cardPairs);
    
    // Render cards
    this.renderCards();
  }
  
  /**
   * Get random words from the word list
   */
  getRandomWords(count) {
    const shuffled = this.shuffleArray([...words]);
    return shuffled.slice(0, count);
  }
  
  /**
   * Shuffle array using Fisher-Yates algorithm
   */
  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  
  /**
   * Render all cards to the board
   */
  renderCards() {
    this.board.innerHTML = '';
    
    this.cards.forEach((card, index) => {
      const cardElement = this.createCardElement(card, index);
      this.board.appendChild(cardElement);
    });
  }
  
  /**
   * Create a single card element
   */
  createCardElement(card, index) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'memory-card';
    cardDiv.dataset.index = index;
    cardDiv.dataset.pairId = card.pairId;
    cardDiv.dataset.type = card.type;
    
    cardDiv.innerHTML = `
      <div class="memory-card__inner">
        <div class="memory-card__face memory-card__back">
          <img src="img/memory_back.jpg" alt="Card back">
        </div>
        <div class="memory-card__face memory-card__front memory-card__front--${card.type}">
          <div class="memory-card__text">${card.text}</div>
        </div>
      </div>
    `;
    
    cardDiv.addEventListener('click', () => this.handleCardClick(index));
    
    return cardDiv;
  }
  
  /**
   * Handle card click
   */
  handleCardClick(index) {
    // Prevent clicks during processing or if card already flipped
    if (this.isProcessing) return;
    
    const cardElement = this.board.children[index];
    if (cardElement.classList.contains('flipped') || 
        cardElement.classList.contains('matched')) {
      return;
    }
    
    // Flip the card
    cardElement.classList.add('flipped');
    this.flippedCards.push(index);
    
    // Check if two cards are flipped
    if (this.flippedCards.length === 2) {
      this.isProcessing = true;
      this.moves++;
      this.checkMatch();
    }
  }
  
  /**
   * Check if flipped cards match
   */
  checkMatch() {
    const [firstIndex, secondIndex] = this.flippedCards;
    const firstCard = this.board.children[firstIndex];
    const secondCard = this.board.children[secondIndex];
    
    const firstPairId = firstCard.dataset.pairId;
    const secondPairId = secondCard.dataset.pairId;
    
    if (firstPairId === secondPairId) {
      // Match found!
      setTimeout(() => {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        
        this.matchedPairs++;
        this.flippedCards = [];
        this.isProcessing = false;
        
        // Check if game is complete
        if (this.matchedPairs === 9) {
          this.gameComplete();
        }
      }, 500);
    } else {
      // No match - add shake animation and flip back
      firstCard.classList.add('wrong');
      secondCard.classList.add('wrong');
      
      setTimeout(() => {
        firstCard.classList.remove('flipped', 'wrong');
        secondCard.classList.remove('flipped', 'wrong');
        
        this.flippedCards = [];
        this.isProcessing = false;
      }, 1000);
    }
  }
  
  /**
   * Game complete
   */
  gameComplete() {
    setTimeout(() => {
      this.showConfetti();
      this.showSuccessMessage();
    }, 800);
  }
  
  /**
   * Show success message overlay
   */
  showSuccessMessage() {
    const overlay = document.createElement('div');
    overlay.className = 'memory-success';
    overlay.innerHTML = `
      <div class="memory-success__content">
        <h2 class="memory-success__title">Gratulation!</h2>
        <p class="memory-success__text">Düu hesch alli Pààr gfunda!</p>
        <button class="memory-success__restart" id="restart-game">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="23 4 23 10 17 10"></polyline>
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
          </svg>
          <span>Nomal spila</span>
        </button>
      </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Restart button handler
    const restartBtn = overlay.querySelector('#restart-game');
    restartBtn.addEventListener('click', () => {
      overlay.remove();
      this.createGame();
    });
    
    // Show overlay with animation
    setTimeout(() => {
      overlay.classList.add('memory-success--show');
    }, 100);
  }
  
  /**
   * Show confetti animation
   */
  showConfetti() {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10000 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // Create confetti from two positions
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  }
  
  /**
   * Dev function: Solve all pairs automatically
   */
  solveAllPairs() {
    const allCards = Array.from(this.board.children);
    
    allCards.forEach(card => {
      card.classList.add('flipped');
    });
    
    setTimeout(() => {
      allCards.forEach(card => {
        card.classList.add('matched');
      });
      
      this.matchedPairs = 9;
      this.gameComplete();
    }, 1000);
  }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const game = new MemoryGame();
  
  // Dev button
  const devBtn = document.getElementById('dev-solve-btn');
  if (devBtn) {
    devBtn.addEventListener('click', () => {
      game.solveAllPairs();
    });
  }
});
