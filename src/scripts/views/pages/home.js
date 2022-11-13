import RestaurantDbSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const homePage = {
  async render() {
    return `
        <div class="jumbotron">
        <picture>
          <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">
          <img 
            src="./images/hero-image_2-large.jpg" 
            alt="restaurant poster"></img>
        </picture>
        </div>
        <section class="restaurant" id="maincontent">
          <h1 tabindex="0">Explore Restaurant</h1>
          <div class="item-list"></div>
        </section>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurants();
    const itemsContainer = document.querySelector('.item-list');
    restaurants.forEach((restaurant) => {
      itemsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default homePage;
