const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('#/favorite');
});

Scenario('Showing empty favotite restaurant', async ({ I }) => {
  I.seeElement('.favoriteNull');
  I.see(`You don't have any favorite restaurant yet`);
});

Scenario('Melakukan favorit pada salah satu restoran', async ({ I }) => {
  I.see(`You don't have any favorite restaurant yet`);

  I.amOnPage('');

  I.seeElement('.card h3 a.name');
  const firstRestaurant = locate('.card h3 a.name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.seeElement('.card');
  const likedRestaurantTitle = await I.grabTextFrom('.name');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Melakukan unfavorit pada salah satu restoran', async ({ I }) => {
  I.see(`You don't have any favorite restaurant yet`);

  I.amOnPage('');

  I.seeElement('.card h3 a.name');
  const firstRestaurant = locate('.card h3 a.name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.seeElement('.card');
  const likedRestaurantTitle = await I.grabTextFrom('.name');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  // unfavorit
  I.amOnPage('#/favorite');

  I.seeElement('.card h3 a.name');
  const favoriteRestaurant = locate('.card h3 a.name').first();
  I.click(favoriteRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.seeElement('.favoriteNull');
});
