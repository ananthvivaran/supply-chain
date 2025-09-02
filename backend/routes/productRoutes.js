<<<<<<< HEAD
const express = require('express');
const { body, validationResult } = require('express-validator');
const Product = require('../models/Product');
const { authMiddleware } = require('../controllers/authController');

const router = express.Router();

// Check if user is admin
const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied: Admins only' });
  }
  next();
};

// Create Product (Admin only)
router.post(
  '/',
  authMiddleware(['admin']), // Pass roles array
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('quantity').isInt({ gt: 0 }).withMessage('Quantity must be positive'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be positive'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const { name, quantity, price, supplier } = req.body;
      const product = await Product.create({ name, quantity, price, supplier });
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Get All Products (Any logged-in user)
router.get('/', authMiddleware([]), async (req, res) => { // Empty array for any authenticated user
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Product (Admin only)
router.put('/:id', authMiddleware(['admin']), async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const { name, quantity, price, supplier } = req.body;
    await product.update({ name, quantity, price, supplier });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Product (Admin only)
router.delete('/:id', authMiddleware(['admin']), async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    await product.destroy();
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

=======
const express = require('express');
const { body, validationResult } = require('express-validator');
const Product = require('../models/Product');
const { authMiddleware } = require('../controllers/authController');

const router = express.Router();

// Check if user is admin
const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied: Admins only' });
  }
  next();
};

// Create Product (Admin only)
router.post(
  '/',
  authMiddleware(['admin']), // Pass roles array
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('quantity').isInt({ gt: 0 }).withMessage('Quantity must be positive'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be positive'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const { name, quantity, price, supplier } = req.body;
      const product = await Product.create({ name, quantity, price, supplier });
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Get All Products (Any logged-in user)
router.get('/', authMiddleware([]), async (req, res) => { // Empty array for any authenticated user
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Product (Admin only)
router.put('/:id', authMiddleware(['admin']), async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const { name, quantity, price, supplier } = req.body;
    await product.update({ name, quantity, price, supplier });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Product (Admin only)
router.delete('/:id', authMiddleware(['admin']), async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    await product.destroy();
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

>>>>>>> 996297610fa71b72c51f026d8708a5b87f17f749
module.exports = router;