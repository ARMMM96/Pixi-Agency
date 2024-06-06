const productService = require("../services/productService");

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.fetchAllProducts();
    res.render("pages/products", { products });
  } catch (error) {
    next(error);
  }
};

exports.createProductForm = (req, res) => {
  res.render("pages/create");
};

exports.createProduct = async (req, res, next) => {
  try {
    const productData = req.body;
    await productService.createProduct(productData);
    res.redirect("/create");
  } catch (error) {
    next(error);
  }
};

exports.editProductForm = async (req, res, next) => {
  try {
    const product = await productService.fetchProductById(req.params.id);
    res.render("pages/edit", { product });
  } catch (error) {
    next(error);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const productData = req.body;
    await productService.updateProduct(req.params.id, productData);
    res.redirect("/products");
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    await productService.deleteProduct(req.params.id);
    res.redirect("/products");
  } catch (error) {
    next(error);
  }
};

exports.renderStatisticsPage = async (req, res, next) => {
  try {
    // Fetch product statistics data from productService
    const productStatistics = 'Here is supposed to be the data that is comming from the serice that fetching the data from the server or the API'

    // Render the statistics page with product statistics data
    res.render("pages/statistics");
  } catch (error) {
    next(error);
  }
};
