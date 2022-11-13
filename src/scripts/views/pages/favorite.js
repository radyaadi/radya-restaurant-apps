/* eslint-disable quotes */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const favoritePage = {
  async render() {
    return `
        <section class="restaurant" id="maincontent">
          <h1 class="favorite-header" "tabindex="0">Favorite Restaurant</h1>
          <div class="item-list"></div>
        </section>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const cardsContainer = document.querySelector('.item-list');
    const restaurantContainer = document.querySelector('.restaurant');
    if (Object.keys(restaurants).length === 0) {
      const createText = document.createElement('h4');
      createText.classList.add('favoriteNull');
      createText.innerHTML = `You don't have any favorite restaurant yet`;
      restaurantContainer.appendChild(createText);
    } else {
      restaurants.forEach((restaurant) => {
        cardsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default favoritePage;
