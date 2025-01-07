let currentIndex = 0;
const cardsPerPage = 9;
let directoriesCards = [];

async function fetchDirectories() {
  try {
    const response = await fetch('https://www.adrianjanka.ch/obersaxer-titsch/php/script.php');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    directoriesCards = await response.json();
    renderCards();
  } catch (error) {
    console.error('Error fetching directories:', error);
  }
}

function renderCards() {
  const endIndex = currentIndex + cardsPerPage;
  const cardsToRender = directoriesCards.slice(currentIndex, endIndex);

  cardsToRender.forEach(dir => {
    const card = document.createElement('div');
    card.className = 'card';
    card.onclick = () => card.classList.toggle('flip');
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <img style="width: 100%;" src="../obersaxer-titsch${dir.front}" alt="Front of card">
        </div>
        <div class="card-back">
          <img style="width: 100%;" src="../obersaxer-titsch${dir.back}" alt="Back of card">
        </div>
      </div>
    `;
    document.getElementById('cards').appendChild(card);
  });

  currentIndex = endIndex;

  if (currentIndex >= directoriesCards.length) {
    document.getElementById('mehr-anzeigen').style.display = 'none';
  }
}

document.getElementById('mehr-anzeigen').addEventListener('click', renderCards);

// Initialize
fetchDirectories();



/* redewendungen */

let currentRedewendungIndex = 0;
const redewendungPerPage = 9;
let redewendungdirectories = [];

async function fetchRedewendungDirectories() {
  try {
    const response = await fetch('https://www.adrianjanka.ch/obersaxer-titsch/php/script_redewendung.php');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    directories = await response.json();
    renderRedewendung();
  } catch (error) {
    console.error('Error fetching directories:', error);
  }
}

function renderRedewendung() {
  const endRedewendungIndex = currentRedewendungIndex + redewendungPerPage;
  const redewendungToRender = directories.slice(currentRedewendungIndex, endRedewendungIndex);

  redewendungToRender.forEach(dir => {
    const redewendung = document.createElement('div');
    redewendung.className = 'redewendung';
    redewendung.onclick = () => redewendung.classList.toggle('flip');
    redewendung.innerHTML = `
      <div class="redewendung-inner">
        <div class="redewendung-front">
          <img style="width: 100%;" src="../obersaxer-titsch${dir.front}" alt="Front of card">
        </div>
        <div class="redewendung-back">
          <img style="width: 100%;" src="../obersaxer-titsch${dir.back}" alt="Back of card">
        </div>
      </div>
    `;
    document.getElementById('redewendungen').appendChild(redewendung);
  });

  currentRedewendungIndex = endRedewendungIndex;

  if (currentRedewendungIndex >= directories.length) {
    document.getElementById('mehr-anzeigen-redewendung').style.display = 'none';
  }
}

document.getElementById('mehr-anzeigen-redewendung').addEventListener('click', renderRedewendung);

// Initialize
fetchRedewendungDirectories();