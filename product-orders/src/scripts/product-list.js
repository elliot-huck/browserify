// Takes in the database, makes a product card for every product in the database, and prepends each card to the DOM

const products = require("./product-database");
const displayProduct = require("./display-product");

const listProducts = () => {
  const allProducts = products.allProducts;
  allProducts.forEach(product => {
    $productCard = displayProduct(product);
    $(`body`).prepend($productCard);
  });
};

module.exports = listProducts;