const allProducts = require('../assets/products.json');

const getProductsList = (req, res) => {
  const { query } = req.query;

  const products = allProducts.filter((product) => {
    const { title } = product;
    if (title.toLowerCase().includes(query.toLowerCase())) {
      return product;
    }
  });
  res.send(products);
};

module.exports = getProductsList;
