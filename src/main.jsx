import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './component/Header.jsx';
import Footer from './component/Footer.jsx';
import AppRoutes from './routes/AppRoute.jsx';
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
      
      <AppRoutes
        toggleCart={toggleCart}
        isCartOpen={isCartOpen}
        cartItems={cartItems}
        addToCart={addToCart}
        clearCart={clearCart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<AppWithRouter />);
}
