import React from 'react';
import './Products.css'; // Make sure to update your CSS file if needed
import { products } from "../../assets/products";

const Products = () => {
  return (
    <div className="products-page">
      <h1>Our Products</h1>
      <div className="products-container">
        {products.map((product) => (
          <div
            className={`product-card ${!product.price ? 'coming-soon-card' : ''}`} // Add class if price is null
            key={product.id}
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            {product.price ? (
              <>
                <p className="product-price">{product.price}</p>
                {product.inStock ? (
                  <p className="in-stock">In stock</p>
                ) : (
                  <p className="out-of-stock">Out of stock</p>
                )}
              </>
            ) : (
              <p className="coming-soon">Coming Soon</p> // Show Coming Soon for products without a price
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
