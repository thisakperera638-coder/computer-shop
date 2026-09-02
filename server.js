const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('client/build'));

// Sample products data (replace with database later)
const products = [
  {
    id: 1,
    name: "DDR4 16GB RAM",
    category: "RAM",
    price: 89.99,
    image: "ram.jpg",
    description: "High-speed DDR4 16GB memory module",
    stock: 50
  },
  {
    id: 2,
    name: "Mechanical Gaming Keyboard",
    category: "Keyboards",
    price: 129.99,
    image: "keyboard.jpg",
    description: "RGB mechanical keyboard with Cherry MX switches",
    stock: 30
  },
  {
    id: 3,
    name: "SSD 1TB NVMe",
    category: "Storage",
    price: 99.99,
    image: "ssd.jpg",
    description: "Ultra-fast NVMe M.2 SSD 1TB storage",
    stock: 40
  }
];

// Routes

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Get single product
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

// Add product to cart (example)
app.post('/api/cart', (req, res) => {
  const { productId, quantity } = req.body;
  res.json({ success: true, message: 'Product added to cart' });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
