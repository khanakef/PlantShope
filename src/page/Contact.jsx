
import Header from "../component/Header";
import CartSidebar from "../component/Cartsidebar";
import Facilities from "../component/Facilities";
import Footer from "../component/Footer";

const Contact = ({ toggleCart, isCartOpen, cartItems, addToCart, clearCart }) => {
  return (
    <>
      <Header toggleCart={toggleCart} />
      <CartSidebar
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        cartItems={cartItems}
        clearCart={clearCart}
      />
      <Facilities />
      <Footer />
    </>
  );
};

export default Contact;
