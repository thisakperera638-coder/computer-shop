import React from 'react';
import './Header.css';

function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>🛒 Computer Shop</h1>
        </div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="cart-icon">
          <a href="/cart">🛍️ Cart ({cartCount})</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
