import React, { useState } from "react";
import Product from "./Product";
import "./Main.css";

const Main = (props) => {
  const { products, addItem } = props;
  const [searchItems, setSearchItems] = useState("");

  return (
    <div className="main-section">
     
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search for Products.."
          onChange={(e) => setSearchItems(e.target.value)}
        />
      </div>
      <div className="products-container">
        {products.filter((val) => {
          if(searchItems === ""){
            return val;
          }
          else if(val.name.toLowerCase().includes(searchItems.toLowerCase())){
            return val;
          }
        }).map((product) => (
          <Product key={product.id} product={product} addItem={addItem} />
        ))}
      </div>
    </div>
  );
};

export default Main;
