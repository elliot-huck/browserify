// Takes the review database, sorts the reviews by product, creates a section element with the first three reviews for each product,

const reviews = require("./review-database");
const displayReview = require("./display-review");

const appendReviews = () => {

  const $allCards = $(`section.product__card`);
  console.log($allCards);
  const allReviews = reviews.allReviews;
  console.log(allReviews);

  $.each($allCards, i => {
    const $currentCard = $allCards[i];
    console.log($currentCard);
    // This is where I go back to ugly vanilla JS
    // Bonus challenge: refactor without the vanilla JS
    const cardHeading = $currentCard.firstElementChild.textContent;
    const reviewSection = $currentCard.lastElementChild;
    const reviewHeading = document.createElement(`h4`);
    reviewHeading.textContent = `Reviews:`;
    reviewSection.append(reviewHeading);
    allReviews.forEach(review => {
      if (review.productReviewed === cardHeading && reviewSection.childNodes.length < 4) {
        reviewSection.append(displayReview(review).text());
      }
    });
  });
};

module.exports = appendReviews;