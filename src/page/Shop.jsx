import Baner from "../componet/Baner";
import Facilities from "../componet/Facilities";
import Footer from "../componet/Footer";
import Header from "../componet/Header";
import PlansList from "../componet/PlansList";
import ShopBaner from "../componet/ShopBaner";
import CartSidebar from "../componet/Cartsidebar";

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
      <Facilities />
      <PlansList addToCart={addToCart} />
      <Footer />
    </>
  );
};

export default Shop;
