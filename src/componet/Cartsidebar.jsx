import React from "react";
import "./style.css";

const CartSidebar = ({ isOpen, toggleCart }) => {
  return (
    <div className={`custom-cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h5>Your Cart</h5>
        <button className="btn-close" onClick={toggleCart}></button>
      </div>
      <div className="cart-body">
        {/* Example items (optional) */}
        <div className="cart-item mb-3">
          <h6>🌱 Jade Plant</h6>
          <p>₹299 - Qty: 1</p>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
  