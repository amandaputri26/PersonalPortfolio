const flipToTools = document.getElementById('flipToTools');
const flipToDev = document.getElementById('flipToDev');
const flipCard = document.querySelector('.flip-card');

flipToTools.addEventListener('click', () => {
  flipCard.classList.add('is-flipped');
});

flipToDev.addEventListener('click', () => {
  flipCard.classList.remove('is-flipped');
});