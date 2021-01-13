import React from "react";
import "./Header.css";

const Header = (props) => {
    const {cartItems} = props;
  return (
    <nav className="nav-bar">
      <div className="logo">
        <h1>Shopping Cart</h1>
      </div>
      <div className="cart-count">
        <h1>Cart</h1>
        <h3 className="totalItem-count">{cartItems.length}</h3>
      </div>
    </nav>
  );
};

export default Header;
