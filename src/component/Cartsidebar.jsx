const CartSidebar = ({ isOpen, toggleCart, cartItems, clearCart, removeFromCart, updateQuantity }) => {


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
            <div className="cart-item mb-3 d-flex" key={index}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100px", height: "100px", objectFit: "cover", marginRight: "10px" }}
              />
              <div className="flex-grow-1">
                <h6>{item.name}</h6>

                <p className="mb-0">Price: ₹{item.price}</p>
                <p className="mb-0">Qty: {item.quantity}</p>
                <p className="mb-0">Total: ₹{item.price * item.quantity}</p>

              {/* Add here */}
                <div className="d-flex align-items-center mb-2 mt-3">
                  <button
                    className="btn btn-sm btn-outline-dark"
                    onClick={() => updateQuantity(item.name, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    –
                  </button>
                  <span className="mx-2 fw-bold">{item.quantity}</span>
                  <button
                    className="btn btn-sm btn-outline-dark"
                    onClick={() => updateQuantity(item.name, item.quantity + 1)}
                  >
                    +
                  </button>

                  <button
                    className="btn btn-sm btn-outline-danger mx-2 mt-2 mb-2"
                    onClick={() => removeFromCart(item.name)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>

                </div>
                
              </div>
            </div>

          ))
        )}
      </div>



      <div className="cart-footer p-3 border-top">
        <h6>Total: ₹{total}</h6>
        <button className="btn btn-success w-100 my-2">Buy Now</button>
        {/* <button className="btn btn-danger w-100" onClick={clearCart}>Clear Cart</button> */}
      </div>
    </div>
  );
};
export default CartSidebar;