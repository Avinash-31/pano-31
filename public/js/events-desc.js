const cards = document.querySelectorAll('.card');
const fit = document.querySelectorAll('.card__image');
cards.forEach((card) => {
  card.addEventListener('click', () => {
    if (!card.hasAttribute('active')) {
      updateActiveCard(card);
    }
  });
});

function updateActiveCard(activeCard) {
  cards.forEach((card) => {
    if (card === activeCard) {
      card.setAttribute('active', '');
      card.querySelector('.card__image').style.objectFit = ''; // Set object-fit to 'none'
    } else {
      card.removeAttribute('active');
      card.querySelector('.card__image').style.objectFit = 'cover'; // Remove any previously set object-fit
    }
  });
}
