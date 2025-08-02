
import CartSidebar from "../component/Cartsidebar";
import ContactBanner from "../section/ContactBanner";
import Facilities from "../component/Facilities";
import ContactInfo from "../section/ContactInfo";

const Contact = ({ toggleCart, isCartOpen, cartItems, addToCart, clearCart }) => {
  return (
    <>
      <CartSidebar
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        cartItems={cartItems}
        clearCart={clearCart}
      />
      <ContactBanner/>
      <Facilities />
      <ContactInfo/>
    </>
  );
};

export default Contact;
