import React, { useState } from "react";
import "./Header.css";
import { Modal } from "react-bootstrap";
import Cart from "./Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const { cartItems, addItem, deleteAll, removeItem } = props;
  const [showCart, setShowCart] = useState(false);

  const showingCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  return (
    <nav className="nav-bar">
      <div className="logo">
        <h1 className="website-name">Shopping Cart</h1>
      </div>
      <Modal show={showCart} size="xl" onHide={() => closeCart()}>
        <Modal.Header closeButton>
          <h1>Cart</h1>
        </Modal.Header>
        <Modal.Body>
          <Cart
            cartItems={cartItems}
            deleteAll={deleteAll}
            removeItem={removeItem}
            addItem={addItem}
          />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <div className="cart-count">
        <button onClick={() => showingCart()} className="cart-icon">
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
        <h3 className="totalItem-count">{cartItems.length}</h3>
      </div>
    </nav>
  );
};

export default Header;
