const express = require('express');
const router = express.Router();

const {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller');

// Get all products
router.get('/', getProducts);

// Create a Product
router.post('/', createProduct);

// Get a product by Id
router.get('/:id', getProductById);

// Update a product
router.put('/:id', updateProduct);

// Delete a product
router.delete('/:id', deleteProduct);

module.exports = router;
