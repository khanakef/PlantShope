
import CartSidebar from "../component/Cartsidebar";
import Banner from '../section/Banner'; // adjust path if different
import Facilities from "../component/Facilities";
import ContactInfo from "../section/ContactInfo";

const ContactSlides = [
    { image: "/Images/contact.png", caption: 'Rooted in Nature, Grown with Love. From Our Garden to Your Home.' },
    // { image: "/Images/pexels-cottonbro-4503732.jpg", caption: 'Fresh plants for a fresh mind' },
    // { image: "/Images/pexels-fotios-photos-1090638.jpg", caption: 'Bring greenery to your life' }
  ];

const Contact = ({ toggleCart, isCartOpen, cartItems, clearCart }) => {
  return (
    <>
      <CartSidebar
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        cartItems={cartItems}
        clearCart={clearCart}
      />
      <Banner slides={ContactSlides} carouselId="ContactBanner" />
      <Facilities />
      <ContactInfo/>
    </>
  );
};

export default Contact;
