import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="App">
      <Header cartCount={cart.length} />
      <main className="main-content">
        {loading ? (
          <p className="loading">Loading products...</p>
        ) : (
          <ProductList products={products} onAddToCart={addToCart} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
