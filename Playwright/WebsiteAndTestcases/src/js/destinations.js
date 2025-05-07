const movies = [
  { name: 'Deadpool & Wolverine', image: './images/dead.jpg' },
  { name: 'Gladiator II', image: './images/gladiator.jpg' },
  { name: 'Joker: Folie à Deux', image: './images/joker2.jpg' },
  { name: 'Avatar 3', image: './images/avatar.jpg' }
];

const movieGrid = document.getElementById('movie-grid');
const modal = document.getElementById('review-modal');
const closeButton = document.querySelector('.close-button');
const modalTitle = document.getElementById('modal-title');
const stars = document.querySelectorAll('.star');
const commentInput = document.getElementById('comment');
let currentMovieIndex = null;

movies.forEach((movie, index) => {
  const card = document.createElement('div');
  card.className = 'movie-card';
  card.innerHTML = `
      <img src="${movie.image}" alt="${movie.name}">
      <h3>${movie.name}</h3>
      <button class="btn review-btn">Review</button>
  `;

  card.querySelector('.review-btn').addEventListener('click', () => openModal(index));

  movieGrid.appendChild(card);
});

closeButton.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });

function openModal(index) {
  currentMovieIndex = index;
  modalTitle.textContent = `Review: ${movies[index].name}`;
  stars.forEach(star => star.classList.remove('selected'));
  commentInput.value = '';
  modal.style.display = 'flex';
}

stars.forEach(star => {
  star.addEventListener('click', () => {
      stars.forEach(s => s.classList.remove('selected'));
      for (let i = 0; i < star.dataset.rating; i++) {
          stars[i].classList.add('selected');
      }
  });
});
