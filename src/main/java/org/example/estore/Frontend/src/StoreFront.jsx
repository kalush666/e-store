import React, { useState, useEffect } from "react";
import "./StoreFront.css";
import axios from "axios";

const StoreFront = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/getall");

      if (response.status === 200) {
        const allProducts = response.data;
        const shuffledProducts = allProducts.sort(() => 0.5 - Math.random());
        const limitedProducts = shuffledProducts.slice(0, 9);
        setProducts(limitedProducts);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleAddToCart = (productId) => {
    document.querySelector(".cart-count").textContent++;
  };

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
              <img
                src={product.imageURL}
                alt={product.name}
                className="product-image"
              />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div className="product-footer">
                <span className="price">${product.price.toFixed(2)}</span>
                <button className="add-to-cart" onClick={handleAddToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StoreFront;
