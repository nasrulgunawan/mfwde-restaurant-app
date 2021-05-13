/* eslint-disable require-jsdoc */
import data from '../../data.json';
import logo from '../images/logo.svg';

class UI {
  static renderRestaurantList() {
    const restaurantContainerElement = document.querySelector('.cards');
    let cardComponent = '';

    data.restaurants.forEach(({
      id, city, name, description, rating, distance, pictureId,
    }, index) => {
      const cardId = index == 0 ? 'main-content' : id;

      cardComponent += `<a id="${cardId}" class="card" href="#">
        <div class="card-img">
          <img src="${pictureId}" alt="Restaurant ${name}">
          <div class="verified-restaurant" title="Verified Restaurant">
            <svg class="icon text-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
          </div>
        </div>
        <div class="card-body">
          <div class="card-text">
            <p class="text-small">${city}</p>
            <p class="card-title">${name}</p>
            <p class="card-description">${description}</p>
          </div>
        </div>
        <div class="card-footer">
          <div class="rating text-small">
            <svg class="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <span>${rating}</span>
          </div>
          <span class="text-small">${distance} km</span>
        </div>
      </a>`;
    });

    restaurantContainerElement.innerHTML = cardComponent;
  }

  static setHamburgerMenu() {
    const menu = document.querySelector('.navbar-toggler');
    const hero = document.querySelector('.hero');
    const main = document.querySelector('main');
    const navbar = document.querySelector('.navbar-collapse');

    menu.addEventListener('click', (event) => {
      navbar.classList.toggle('open');
      event.stopPropagation();
    });

    hero.addEventListener('click', () => navbar.classList.remove('open'));
    main.addEventListener('click', () => navbar.classList.remove('open'));
  }

  static setBrandImage() {
    document.querySelector('.navbar-brand img').src = logo;
  }
}

export default UI;
