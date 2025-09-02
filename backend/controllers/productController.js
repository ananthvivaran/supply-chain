<<<<<<< HEAD
const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    const { name, quantity, supplier } = req.body;
    const product = await Product.create({ name, quantity, supplier });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, quantity, supplier } = req.body;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    await product.update({ name, quantity, supplier });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    await product.destroy();
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
=======
const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    const { name, quantity, supplier } = req.body;
    const product = await Product.create({ name, quantity, supplier });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, quantity, supplier } = req.body;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    await product.update({ name, quantity, supplier });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    await product.destroy();
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
>>>>>>> 996297610fa71b72c51f026d8708a5b87f17f749
