
import Header from "../component/Header";
import CartSidebar from "../component/Cartsidebar";
import Baner from "../component/Banner";
import Facilities from "../component/Facilities";
import Footer from "../component/Footer";

const Blogs = ({ toggleCart, isCartOpen, cartItems,clearCart }) => {
  return (
    <>
      <Header toggleCart={toggleCart} />
      <CartSidebar
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        cartItems={cartItems}
        clearCart={clearCart}
      />
      <Baner/>
      <Facilities />
      <Footer />
    </>
  );
};

export default Blogs;
