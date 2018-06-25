// A database to hold info on all products in stock
// Required by: product-list

const products = {
  allProducts: [
    {
      productName: `Plush owl`,
      productDescription: `An adorable little stuffed owl`,
      price: 9.99,
      quantity: 50,
      imageSrc: `./images/owl_plush.jpg`
    },
    {
      productName: `Rubik's cube`,
      productDescription: `The classic puzzle toy`,
      price: 4.99,
      quantity: 30,
      imageSrc: `./images/rubiks_cube.jpg`
    },
    {
      productName: `Teddy bear`,
      productDescription: `An original children's favorite`,
      price: 9.99,
      quantity: 100,
      imageSrc: `./images/teddy_bear.jpg`
    }
  ]
};

module.exports = products;