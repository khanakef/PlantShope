import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../page/Home.jsx";
import Shop from "../page/Shop.jsx";
import Blog from "../page/Blog.jsx";
import Contact from "../page/Contact.jsx";
import Checkout from "../page/Checkout.jsx";
import Login from "../page/Login.jsx";
import Registration from "../page/Registration.jsx";
import PrivateRoute from "../routes/PrivateRoute.jsx";

const AppRoutes = ({ toggleCart, isCartOpen, cartItems, addToCart, clearCart, removeFromCart, updateQuantity }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />

      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home toggleCart={toggleCart} isCartOpen={isCartOpen} cartItems={cartItems} clearCart={clearCart} />} />
        <Route path="/shop" element={<Shop toggleCart={toggleCart} isCartOpen={isCartOpen} cartItems={cartItems} addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
        <Route path="/blog" element={<Blog toggleCart={toggleCart} isCartOpen={isCartOpen} cartItems={cartItems} clearCart={clearCart} />} />
        <Route path="/contact" element={<Contact toggleCart={toggleCart} isCartOpen={isCartOpen} cartItems={cartItems} clearCart={clearCart} />} />
        <Route path="/checkout" element={<Checkout toggleCart={toggleCart} isCartOpen={isCartOpen} cartItems={cartItems} clearCart={clearCart} />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
