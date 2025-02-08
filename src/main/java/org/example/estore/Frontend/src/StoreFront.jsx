import React, { useEffect } from "react";
import "./StoreFront.css";
import axios from "axios";

const StoreFront = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axios("http://localhost:8080/api/v1/getall", {
        id,
        name,
        imageURL,
        description,
        price,
      });

      if (response.status === 200) {
        setProducts(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

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
