import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
    <div class="card">
      <div classs="city">
          <p class="city" tabindex="0">${restaurant.city}</p>
      </div>
      <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${
  restaurant.pictureId
}" alt="Restaurant Image" tabindex="0">
      <p class="rating" tabindex="0">Rating: ⭐️ ${restaurant.rating}</p>
      <h3 tabindex="0"><a  class="name" href="${`/#/detail/${restaurant.id}`}">${
  restaurant.name
}</a></h3>
      <p class="description" tabindex="0">${restaurant.description}</p>
     </div>
    `;

const createRestaurantDetailTemplate = (restaurant) => `
    <div id="detailRestaurant">
      <div class="detail-image">
        <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="img-restaurant">
      </div>
      <h2 class="restaurant-name">${restaurant.name}</h2>
      <div class="info">
        <p class="address">${restaurant.address}</p>
        <p class="city">${restaurant.city}</p>
      </div>
      <hr class="underline-head">
      <div class="description">
        <h3>Description</h3>
        <p>${restaurant.description}</p>
      </div>
      <h3>Menu</h3>
      <div class="menu">
        <div class="foods">
          <h4>Foods</h4>
        </div>
        <div class="drinks">
          <h4>Drinks</h4>
        </div>
      </div>
      <h3 class="reviews-heading">Reviews</h3>
      <div class="reviews"></div>
    </div>
    `;

const createFoodTemplate = (foodsData) => {
  const foodsContainer = document.querySelector('.foods');

  foodsData.forEach((food) => {
    const createFood = document.createElement('p');
    createFood.innerHTML = food.name;
    foodsContainer.appendChild(createFood);
  });
};

const createDrinkTemplate = (drinksData) => {
  const drinksContainer = document.querySelector('.drinks');

  drinksData.forEach((drink) => {
    const createDrink = document.createElement('p');
    createDrink.innerHTML = drink.name;
    drinksContainer.appendChild(createDrink);
  });
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createReviewTemplate = (reviewsData) => {
  const reviewsContainer = document.querySelector('.reviews');
  reviewsData.forEach((review) => {
    const createDiv = document.createElement('div');
    createDiv.classList.add('review-card');
    const createReviewer = document.createElement('h4');
    createReviewer.classList.add('reviewer');
    const createDate = document.createElement('p');
    createDate.classList.add('review-date');
    const createText = document.createElement('p');
    createText.classList.add('review-text');
    createReviewer.innerHTML = review.name;
    createDate.innerHTML = review.date;
    createText.innerHTML = `"${review.review}"`;
    createDiv.appendChild(createReviewer);
    createDiv.appendChild(createDate);
    createDiv.appendChild(createText);
    reviewsContainer.appendChild(createDiv);
  });
};

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFoodTemplate,
  createDrinkTemplate,
  createReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
