import React from "react";
import "./StoreFront.css";

const StoreFront = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 149.99,
      description:
        "Premium noise-canceling wireless headphones with 30hr battery",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      description: "Health monitoring with GPS and heart rate tracking",
    },
    {
      id: 3,
      name: "4K Camera Drone",
      price: 299.99,
      description: "Professional aerial photography drone with 4K camera",
    },
  ];

  return (
    <div className="store-container">
      <header className="header">
        <div className="header-content">
          <div className="menu-icon">☰</div>
          <div className="logo">e-store</div>
          <div className="header-right">
            <input
              type="text"
              placeholder="Search products..."
              className="search-bar"
            />
            <div className="icons">
              <button className="icon">👤</button>
              <button className="icon cart">
                🛒<span className="cart-count">0</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <h1>Welcome to Our Store</h1>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div className="product-footer">
                <span className="price">${product.price.toFixed(2)}</span>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StoreFront;
