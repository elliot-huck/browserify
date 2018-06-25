// A database to hold info on all the reviews that have been written for every product
// Required by: review-list

const reviews = {
  allReviews: [
    {
      reviewerName: `johnTest101`,
      productReviewed: `Plush owl`,
      reviewContents: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    },
    {
      reviewerName: `random_dude`,
      productReviewed: `Teddy bear`,
      reviewContents: `Aenean non mauris diam. Fusce sed placerat diam. Vestibulum mollis in lorem eu tempor.`
    },
    {
      reviewerName: `someones-mom`,
      productReviewed: `Rubik's cube`,
      reviewContents: `Curabitur quis lectus odio. Proin eu suscipit tellus. Ut vel sem consequat, porttitor mi ut, volutpat neque. Fusce dignissim varius dolor vitae iaculis. Etiam non ultrices urna, eget imperdiet arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc at dui dignissim, eleifend mauris non, bibendum ligula.`
    }
  ]
};

module.exports = reviews;
