const CartSidebar = ({ isOpen, toggleCart, cartItems, clearCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`custom-cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-header d-flex justify-content-between align-items-center">
        <h5>Your Cart</h5>
        <button className="btn-close" onClick={toggleCart}></button>
      </div>

      <div className="cart-body">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div className="cart-item mb-3" key={index}>
              <h6>{item.name}</h6>
              <p>₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}</p>
            </div>
          ))
        )}
      </div>

      <div className="cart-footer p-3 border-top">
        <h6>Total: ₹{total}</h6>
        <button className="btn btn-success w-100 my-2">Buy Now</button>
        <button className="btn btn-danger w-100" onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
};
export default CartSidebar;