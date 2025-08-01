
import Facilities from "../component/Facilities";
import Footer from "../component/Footer";
import Header from "../component/Header";
import PlansList from "../component/PlansList";
import ShopBaner from "../component/ShopBaner";
import CartSidebar from "../component/Cartsidebar";

const Shop = ({ toggleCart, isCartOpen, cartItems, addToCart, clearCart }) => {
  return (
    <>
      <Header toggleCart={toggleCart} />
      <CartSidebar
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        cartItems={cartItems}
        clearCart={clearCart}
      />
      <ShopBaner/>
      <Facilities />
      <PlansList addToCart={addToCart} />
      <Footer />
    </>
  );
};

export default Shop;
