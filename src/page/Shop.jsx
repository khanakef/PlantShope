
import Facilities from "../component/Facilities";
import PlansList from "../component/PlansList";
import ShopBaner from "../section/ShopBaner";
import CartSidebar from "../component/Cartsidebar";

const Shop = ({ toggleCart, isCartOpen, cartItems, addToCart, clearCart }) => {
  return (
    <>
      <CartSidebar
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        cartItems={cartItems}
        clearCart={clearCart}
      />
      <ShopBaner/>
      <Facilities />
      <PlansList addToCart={addToCart} />
    </>
  );
};

export default Shop;
