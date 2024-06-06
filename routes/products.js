const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getAllProducts);
router.get("/create", productController.createProductForm);
router.post("/create", productController.createProduct);
router.get("/edit/:id", productController.editProductForm);
router.post("/edit/:id", productController.updateProduct);
router.post("/:id/delete", productController.deleteProduct);

// Route for rendering the statistics page
router.get("/statistics", productController.renderStatisticsPage);

module.exports = router;
