import React from "react";
import Product from "./Product";
import './Main.css';

const Main = (props) => {
  const { products, addItem } = props;
//   console.log(products);
  return (
    <div className="main-section">
      <h1>Products</h1>
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} product={product} addItem={addItem} />
        ))}
      </div>
    </div>
  );
};

export default Main;
