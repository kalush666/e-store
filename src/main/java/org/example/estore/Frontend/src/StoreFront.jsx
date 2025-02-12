import React, { useState, useEffect } from "react";
import "./StoreFront.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StoreFront = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ id: "", userId: "", products: [] });
  const navigate = useNavigate();

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

  const getCart = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/getcartbyuserid?userId=${userId}`
      );
      if (response.status === 200) {
        const cartData = response.data;
        setCart(cartData);
        localStorage.setItem("cart", JSON.stringify(cartData));
      }
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
    }
  };

  useEffect(() => {
    getAllProducts();
    const userId = localStorage.getItem("userId");
    if (userId) {
      getCart(userId);
    }
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = {
        ...prevCart,
        products: [...prevCart.products, product],
      };
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleCartClick = () => {
    navigate("/cart");
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
              <button className="icon" onClick={handleProfileClick}>
                👤
              </button>
              <button className="icon cart" onClick={handleCartClick}>
                🛒<span className="cart-count">{cart.products.length}</span>
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
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(product)}
                >
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
