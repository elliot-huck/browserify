const products = require("./product-database");
const displayProduct = require("./display-product");

const listProducts = () => {
  const allProducts = products.allProducts;
  allProducts.forEach(product => {
    $productCard = displayProduct(product);
    $(`body`).prepend($productCard);
  })
};

module.exports = listProducts;