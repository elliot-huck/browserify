// A database to hold info on all products in stock
// Required by: product-list

const products = {
  allProducts: [
    {
      productName: `Plush Owl`,
      productDescription: `An adorable little stuffed owl`,
      price: `$10.00`,
      quantity: `50`,
      imageSrc: `./images/owl_plush.jpg`
    },
    {
      productName: `Rubik's Cube`,
      productDescription: `The classic puzzle toy`,
      price: `$5.00`,
      quantity: `30`,
      imageSrc: `./images/rubiks_cube.jpg`
    },
    {
      productName: `Teddy Bear`,
      productDescription: `An original children's favorite`,
      price: `$10.00`,
      quantity: `100`,
      imageSrc: `./images/teddy_bear.jpg`
    }
  ]
};

module.exports = products;