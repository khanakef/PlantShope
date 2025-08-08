import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './page/Home.jsx';
import Shop from './page/Shop.jsx';
import Blog from './page/Blog.jsx';
import Contact from './page/Contact.jsx';
import Header from './component/Header.jsx';
import Footer from './component/Footer.jsx';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MainApp() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // animation happens only once
    });
  }, []);

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item.name);
      if (existingItem) {
        return prevItems.map((i) =>
          i.name === item.name
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      } else {
        return [...prevItems, item];
      }
    });
    setIsCartOpen(true); // Open cart on add
  };

  const clearCart = () => setCartItems([]);

  // ✅ Add this function
  const removeFromCart = (itemName) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== itemName));
  };

  const updateQuantity = (name, newQty) => {
  setCartItems(prevItems =>
    prevItems.map(item =>
      item.name === name ? { ...item, quantity: newQty } : item
    )
  );
};


  return (
    <>
      <Header toggleCart={toggleCart} cartItems={cartItems} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                toggleCart={toggleCart}
                isCartOpen={isCartOpen}
                cartItems={cartItems}
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
                removeFromCart={removeFromCart} // ✅ Pass here
                updateQuantity={updateQuantity}
              />
            }
          />
          <Route
            path="/Blog"
            element={
              <Blog
                toggleCart={toggleCart}
                isCartOpen={isCartOpen}
                cartItems={cartItems}
                clearCart={clearCart}
              />
            }
          />
          <Route
            path="/Contact"
            element={
              <Contact
                toggleCart={toggleCart}
                isCartOpen={isCartOpen}
                cartItems={cartItems}
                clearCart={clearCart}
              />
            }
          />
        </Routes>
      </Router>
      <Footer />
    </>
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
