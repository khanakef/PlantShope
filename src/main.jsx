import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import App from './App.jsx';
import Shop from './page/Shop.jsx';
import Blogs from './componet/Blogs.jsx';

function MainApp() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item.name);
      if (existingItem) {
        // Update quantity
        return prevItems.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        // Add new item
        return [...prevItems, item];
      }
    });
    setIsCartOpen(true); // Auto open cart
  };

  const clearCart = () => setCartItems([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <App
              toggleCart={toggleCart}
              isCartOpen={isCartOpen}
              cartItems={cartItems}
              addToCart={addToCart}
              clearCart={clearCart}
            />
          }
        />
        <Route
          path="/shop"
          element={
            <Shop
              toggleCart={toggleCart}
              isCartOpen={isCartOpen}
              cartItems={cartItems}
              addToCart={addToCart}
              clearCart={clearCart}
            />
          }
        />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}

window.onload = () => {
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container);
    root.render(<MainApp />);
  } else {
    console.error("No element with id 'root' found!");
  }
};
