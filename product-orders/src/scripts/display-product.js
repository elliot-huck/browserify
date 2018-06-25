// A method to display an individual product to a card on the DOM

const displayProduct = (element) => {
  const $productCard = $("<section>").addClass("product__card");
  $(`<h2>`).text(`${element.productName}`).appendTo($productCard);
  $(`<img>`).attr(`src`, `${element.imageSrc}`).appendTo($productCard);
  $(`<h4>`).text(`${element.productDescription}`).appendTo($productCard);
  $(`<p>`).text(`Price: $${element.price}`).appendTo($productCard);
  $(`<p>`).text(`In stock: ${element.quantity}`).appendTo($productCard);
  $(`<section>`).addClass(`reviews`).appendTo($productCard);
  return $productCard;
};

module.exports = displayProduct;