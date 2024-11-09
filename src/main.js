import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';
import { getQuote } from './js/functions';

// TODO: move it to js/burger.js
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.burger-menu');
  const menu = document.querySelector('.menu');
  const menuBackdrop = document.querySelector('.menu-backdrop');
  const closeMenuButton = document.querySelector('.close-menu-button');
  const mobileNavigation = document.querySelector('.mobile-nav-list');
  const links = document.querySelectorAll('.nav-link');

  const toogleMenu = () => {
    menu.classList.toggle('active');
    menuBackdrop.classList.toggle('active');
    menuButton.classList.toggle('active');
  };

  const currentPath = window.location.pathname.split('/').pop();

  const isActiveLink = linkPath =>
    linkPath === currentPath || (linkPath === 'index.html' && !currentPath);

  links.forEach(link => {
    if (isActiveLink(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });

  menuButton.addEventListener('click', toogleMenu);
  menuBackdrop.addEventListener('click', toogleMenu);
  closeMenuButton.addEventListener('click', toogleMenu);
  mobileNavigation.addEventListener('click', toogleMenu);
});

// load quote
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const quoteObj = await getQuote();
    document.querySelector('.quote-content .quote-text').textContent =
      quoteObj.quote;
    document.querySelector('.quote-content .author').textContent =
      quoteObj.author;
  } catch (e) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load quote',
    });
  }
});
