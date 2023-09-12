const express = require("express");
const router = express.Router();
const Product = require('../models/productModel');

router.get('/', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  router.get('/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  router.post('/', async (req, res) => {
    const { name, category, price, quantity } = req.body;
    const product = new Product({ name, category, price, quantity });
  
    try {
      const newProduct = await product.save();
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  router.put('/:id', async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(updatedProduct);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      await Product.findByIdAndRemove(req.params.id);
      res.json({ message: 'Product deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
module.exports = router;