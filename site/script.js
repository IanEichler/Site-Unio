'use strict';

const gallery = document.querySelector('.project-gallery');
const cards = [...gallery.querySelectorAll('.project-card')];
const position = document.querySelector('#gallery-position');
const mobile = window.matchMedia('(max-width: 760px)');
let activeIndex = cards.findIndex(card => card.classList.contains('active'));

function highlightProject(index, scroll = true) {
  activeIndex = (index + cards.length) % cards.length;
  cards.forEach((card, cardIndex) => {
    const active = cardIndex === activeIndex;
    card.classList.toggle('active', active);
    card.querySelector('.project-select').setAttribute('aria-pressed', String(active));
  });
  position.textContent = String(activeIndex + 1).padStart(2, '0') + ' / ' + String(cards.length).padStart(2, '0');
  if (mobile.matches && scroll) {
    const card = cards[activeIndex];
    gallery.scrollTo({
      left: card.offsetLeft - gallery.offsetLeft - (gallery.clientWidth - card.offsetWidth) / 2,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
    });
  }
}

cards.forEach((card, index) => {
  card.querySelector('.project-select').addEventListener('click', () => highlightProject(index));
});
document.querySelector('#previous-project').addEventListener('click', () => highlightProject(activeIndex - 1));
document.querySelector('#next-project').addEventListener('click', () => highlightProject(activeIndex + 1));

let scrollTimer;
gallery.addEventListener('scroll', () => {
  if (!mobile.matches) return;
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    const center = gallery.scrollLeft + gallery.clientWidth / 2;
    const distances = cards.map(card => Math.abs(card.offsetLeft - gallery.offsetLeft + card.offsetWidth / 2 - center));
    highlightProject(distances.indexOf(Math.min(...distances)), false);
  }, 150);
}, { passive: true });

mobile.addEventListener('change', () => {
  if (mobile.matches) highlightProject(activeIndex);
});
if (mobile.matches) {
  // Start on the featured project without changing the page's vertical position.
  const card = cards[activeIndex];
  gallery.scrollLeft = card.offsetLeft - gallery.offsetLeft - (gallery.clientWidth - card.offsetWidth) / 2;
}
document.querySelector('#year').textContent = String(new Date().getFullYear());
