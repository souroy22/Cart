import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cartItems, addItem, removeItem, deleteAll } = props;
  const totalItemPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const tax = totalItemPrice * 0.18;
  const shippingCharge = totalItemPrice < 500 ? 50 : 0;
  const totalPrice = totalItemPrice + tax + shippingCharge;
  return (
    <div className="cart-container">
      {cartItems.length !== 0 && (
        <button onClick={deleteAll} className="deleteAll-button">
          Clear Cart
        </button>
      )}
      <div className="cartItems-section">
        {cartItems.length === 0 && <h2 className="cartsection-title">Cart is Empty :(</h2>}
        {cartItems.map((item) => (
          <div key={item.id} className="cartProduct-container">
            <div className="cartImage-container">
              <img src={item.image} />
            </div>
            <div className="product-details">
              <div className="itemName">{item.name}</div>
              <h3 className="itemQty">{item.qty}</h3>
              <button onClick={() => addItem(item)} className="addButton">
                +
              </button>
              <button onClick={() => removeItem(item)} className="removeButton">
                -
              </button>
            </div>
            <div className="price">{item.qty * item.price}</div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <div className="line"></div>
            <div className="price-details">
              <h3>Total Item Price = ₹{totalItemPrice}</h3>
              <h3>Tax GST =  ₹{tax.toFixed(0)}</h3>
              <h3>Shipping Charge = ₹{shippingCharge}</h3>
              <h2>Total Price = ₹{totalPrice.toFixed(0)}</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
