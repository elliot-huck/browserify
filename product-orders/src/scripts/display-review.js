// A method to display an individual review to a card on the DOM

const displayReview = (element) => {
  const $reviewCard = $("<section>").addClass("review__card");
  $("<p>").text(`${element.reviewerName} says: "${reviewContents}"`);

  return $reviewCard;
};

module.exports = displayReview;