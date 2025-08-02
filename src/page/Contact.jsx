
import Header from "../component/Header";
import CartSidebar from "../component/Cartsidebar";
import ContactBanner from "../component/ContactBanner";
import Facilities from "../component/Facilities";
import ContactInfo from "../component/ContactInfo";
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
      <ContactBanner/>
      <Facilities />
      <ContactInfo/>
      <Footer />
    </>
  );
};

export default Contact;
