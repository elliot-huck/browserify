// A method to display an individual review

const displayReview = (element) => {
  const $review = $("<p>").text(`${element.reviewerName} says: "${element.reviewContents}"`);
  return $review;
  };

module.exports = displayReview;