import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './page/Home.jsx';
import Shop from './page/Shop.jsx';
import Blog from './page/Blog.jsx';
import Contact from './page/Contact.jsx';
import Checkout from './page/Checkout.jsx';
import Login from './page/Login.jsx';
import Registration from './page/Registration.jsx';
import Header from './component/Header.jsx';
import Footer from './component/Footer.jsx';
import AuthMiddleware from './component/AuthMiddleware.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MainApp() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();

  // Hide header/footer on login and register pages
  const hideHeaderFooter = ["/login", "/register"].includes(location.pathname);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleCart = () => setIsCartOpen(prev => !prev);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(i => i.name === item.name);
      if (existing) {
        return prevItems.map(i =>
          i.name === item.name ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prevItems, item];
    });
    setIsCartOpen(true);
  };

  const clearCart = () => setCartItems([]);
  const removeFromCart = (itemName) => setCartItems(prev => prev.filter(i => i.name !== itemName));
  const updateQuantity = (name, newQty) => setCartItems(prev =>
    prev.map(i => i.name === name ? { ...i, quantity: newQty } : i)
  );

  return (
    <>
      {!hideHeaderFooter && <Header toggleCart={toggleCart} cartItems={cartItems} />}

      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        {/* Private routes wrapped in AuthMiddleware */}
        <Route
          path="/"
          element={
            <AuthMiddleware>
              <Home toggleCart={toggleCart} isCartOpen={isCartOpen} cartItems={cartItems} clearCart={clearCart} />
            </AuthMiddleware>
          }
        />
        <Route
          path="/shop"
          element={
            <AuthMiddleware>
              <Shop toggleCart={toggleCart} isCartOpen={isCartOpen} cartItems={cartItems} addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
            </AuthMiddleware>
          }
        />
        <Route
          path="/blog"
          element={
            <AuthMiddleware>
              <Blog toggleCart={toggleCart} isCartOpen={isCartOpen} cartItems={cartItems} clearCart={clearCart} />
            </AuthMiddleware>
          }
        />
        <Route
          path="/contact"
          element={
            <AuthMiddleware>
              <Contact toggleCart={toggleCart} isCartOpen={isCartOpen} cartItems={cartItems} clearCart={clearCart} />
            </AuthMiddleware>
          }
        />
        <Route
          path="/checkout"
          element={
            <AuthMiddleware>
              <Checkout toggleCart={toggleCart} isCartOpen={isCartOpen} cartItems={cartItems} clearCart={clearCart} />
            </AuthMiddleware>
          }
        />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

// Wrap MainApp in Router so useLocation works
function AppWithRouter() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

window.onload = () => {
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container);
    root.render(<AppWithRouter />);
  }
};
