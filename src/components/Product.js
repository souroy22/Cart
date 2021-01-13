import React from "react";
import "./Product.css";

const Product = (props) => {
  const { product, addItem } = props;
  return (
    <div className="product-container">
      <img src={product.image} className="product-image" alt={product.name} />
      <h1 className="product-name">{product.name}</h1>
      <h3 className="product-price">{product.price}</h3>
      <button className="addToCart-button" onClick={() => addItem(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
