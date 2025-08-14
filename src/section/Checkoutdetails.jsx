import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkoutdetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get cart data passed from CartSidebar
  const { cartItems = [], total = 0 } = location.state || {};

  return (
    <div className="container mt-5 pt-4">
      <h2 className="text-center mb-4">Checkout</h2>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="mb-4">
            {cartItems.map((item, index) => (
              <div
                className="d-flex align-items-center border-bottom py-2"
                key={index}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  className="me-3"
                />
                <div className="flex-grow-1">
                  <h6 className="mb-1">{item.name}</h6>
                  <p className="mb-0">
                    ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-end">Total: ₹{total}</h4>

          <div className="mt-4">
            <h5>Shipping Details</h5>
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea className="form-control" rows="3" required></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-control" required />
              </div>
              <button
                type="submit"
                className="btn btn-success w-100"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Order placed successfully!");
                  navigate("/");
                }}
              >
                Place Order
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkoutdetails;
